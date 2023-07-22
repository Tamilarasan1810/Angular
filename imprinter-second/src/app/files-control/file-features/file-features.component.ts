import { Component } from '@angular/core';
import * as pdfjs from 'pdfjs-dist';
import { PDFDocument } from 'pdf-lib';
import { FilesService } from '../files.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-file-features',
  templateUrl: './file-features.component.html',
  styleUrls: ['./file-features.component.css'],
})
export class FileFeaturesComponent {
  // const formValues = {
  //   fileInput: (document.getElementById('fileInput') as HTMLInputElement).files[0],
  //   numberOfPages: parseInt((document.getElementById('numberOfPages') as HTMLInputElement).value),
  //   layout: (document.getElementById('layout') as HTMLSelectElement).value,
  //   color: (document.getElementById('color') as HTMLInputElement).value,
  //   pagesPerSheet: parseInt((document.getElementById('pagesPerSheet') as HTMLInputElement).value)
  // };

  // selectedFile!: File;
  // handleFileInput(event: any) {
  //   this.selectedFile = event.target.files[0];
  // }

  // getNumberOfPages() {
  //   if (this.selectedFile) {
  //     const reader = new FileReader();

  //     reader.onload = (e: any) => {
  //       const bufferArray = new Uint8Array(e.target.result);
  //       const loadingTask = (window as any).PDFJS.getDocument({
  //         data: bufferArray,
  //       });

  //       loadingTask.promise.then((pdf: any) => {
  //         pdf.getPage(1).then((page: any) => {
  //           const totalPages = pdf.numPages;
  //           console.log('Number of pages:', totalPages);
  //         });
  //       });
  //     };

  //     reader.readAsArrayBuffer(this.selectedFile);
  //   }
  // }

  //To get the file and to calculate the number of pages in it

  readFile = (file: Blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);

      reader.readAsArrayBuffer(file);
    });
  };

  async getNumPages() {
    const arrayBuffer: any = await this.readFile(this.file);

    const pdf = await PDFDocument.load(arrayBuffer);

    this.pageCount = pdf.getPages().length;
    // console.log('No of pages::: ', pdf.getPages().length);

    return pdf.getPages().length;
  }

  //

  file: any;

  async getFile(event: any) {
    this.file = event.target.files[0];
    //console.log(this.file);

    await this.getNumPages();
    this.numberOfPages = this.pageCount;
    console.log('Number of pages:  ', this.pageCount);

    //
  }
  // variable decleration

  //testFile: File | null = null;
  name = 'test';
  numberOfPages: any;
  layout: any;
  color: any;
  pps: any;
  pageCount: any;
  //

  selectedFile: any;

  // to get selected file index

  selectedIndex: any | undefined;
  constructor(
    private filesService: FilesService,
    private router: Router,
    private http: HttpClient
  ) {
    this.selectedIndex = this.filesService.selectedFileIndex;
  }

  ngOnInit() {
    // this.getFileProperty();
    this.selectedFile = this.filesService.getFile(this.selectedIndex);
    this.filesService.updatedSelectedFileIndex.subscribe((file: File) => {
      this.selectedFile = file;
      console.log('Updated file: ', this.selectedFile);
      //
      this.numberOfPages = this.selectedFile.pages;
      console.log('No.of pages selectedfiles: ', this.selectedFile.pages);
      //
    });
    console.log('test file onInit: ', this.selectedFile);
    //this.testFile = this.selectedFile;
    this.name = this.selectedFile.name;
    this.numberOfPages = this.selectedFile.pages;
    this.color = this.selectedFile.color;
    this.layout = this.selectedFile.layout;
    this.pps = this.selectedFile.pps;
  }

  getFileProperty() {
    this.selectedFile = this.filesService.getFile(this.selectedIndex);
    console.log('test file log :   ', this.selectedFile);
  }

  //

  updateFeature() {
    this.filesService.updateFileFeature(
      this.selectedIndex,
      this.name,
      this.numberOfPages,
      this.layout,
      this.color,
      this.pps
    );
    this.router.navigate(['']);
  }
  //

  //File upload testing
  //////

  uploadFile() {
    const formData = new FormData();
    formData.append('files', this.selectedFile.file);

    const headers = new HttpHeaders();
    // Add any additional headers if required

    this.http
      .post('http://localhost:8080/file/upload', formData, { headers })
      .subscribe(
        (response) => {
          // Handle the response
          console.log(response);
        },
        (error) => {
          // Handle the error
          console.error(error);
        }
      );
  }

  // showSuccessMessage(message: string) {
  //   this.snackBar.open(message, 'Close', {
  //     duration: 3000, // Display duration in milliseconds
  //   });
  // }

  //////
  //
}

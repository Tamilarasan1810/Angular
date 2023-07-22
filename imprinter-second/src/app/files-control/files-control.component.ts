import { Component } from '@angular/core';
import { File } from './file.model';
import { FilesService } from './files.service';

import { PDFDocument } from 'pdf-lib';
import { Router } from '@angular/router';
import { PopUpFeatureComponent } from './pop-up-feature/pop-up-feature.component';

@Component({
  selector: 'app-files-control',
  templateUrl: './files-control.component.html',
  styleUrls: ['./files-control.component.css'],
})
export class FilesControlComponent {
  constructor(private filesService: FilesService, private router: Router) {}
  files: File[] = this.filesService.Files;

  onSelectedFileIndex(fileIndex: number) {
    this.filesService.selectedFileIndex = fileIndex;
    this.filesService.updateFile(fileIndex);
    this.router.navigate(['feature']);
  }

  //to get file input

  file: any;
  numberOfPages!: Number;
  pageCount: number = 0;
  rand: any;
  async getFile(event: any) {
    this.file = event.target.files[0];
    //console.log(this.file);

    await this.getNumPages();
    this.numberOfPages = this.pageCount;
    console.log('Number of pages:  ', this.pageCount);
    this.rand = Math.floor(Math.random() * (99999 - 1 + 1)) + 1;
    this.filesService.insertFile(
      this.file,
      this.file.name,
      this.rand,
      this.pageCount,
      'landscape',
      'BlackAndWhite',
      1
    );
  }

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

  //for opening pop up component

  openPopup() {}

  //
}

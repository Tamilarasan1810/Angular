import { EventEmitter, Injectable } from '@angular/core';
import { File } from './file.model';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  Files: File[] = [
    {
      file: '',
      name: 'Test file',
      id: 101,
      pages: 23,
      layout: 'landscape',
      color: 'BlackAndWhite',
      pps: 1,
    },
    {
      file: '',
      name: 'Project soft copy',
      id: 102,
      pages: 54,
      layout: 'landscape',
      color: 'colored',
      pps: 2,
    },
  ];

  constructor() {}

  selectedFileIndex: number | undefined;

  updatedSelectedFileIndex = new EventEmitter<File>();

  NewFile: File | undefined;

  insertFile(
    file: any,
    name: string,
    id: number,
    pages: number,
    layout: string,
    color: string,
    pps: number
  ) {
    this.NewFile = {
      file: file,
      name: name,
      id: id,
      pages: pages,
      layout: layout,
      color: color,
      pps: pps,
    };

    this.Files.push(this.NewFile);
  }

  getFile(fileIndex: number) {
    // console.log('Selected File index: ', this.Files[fileIndex]);
    this.selectedFileIndex = fileIndex;

    this.updatedSelectedFileIndex.emit(this.Files[fileIndex]);
    return this.Files[fileIndex];
  }
  updateFile(fileIndex: number) {
    // console.log('update file function: ', fileIndex);
    this.updatedSelectedFileIndex.emit(this.Files[fileIndex]);
  }
  updateFileFeature(
    fileIndex: number,
    name: string,
    pages: number,
    layout: string,
    color: string,
    pps: number
  ) {
    this.Files[fileIndex].pages = pages;
    this.Files[fileIndex].layout = layout;
    this.Files[fileIndex].color = color;
    this.Files[fileIndex].pps = pps;

    this.updatedSelectedFileIndex.emit(this.Files[fileIndex]);
  }
}

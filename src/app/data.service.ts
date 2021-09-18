import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: string;

  constructor() { }

  setData( data: string) {
    this.data = data;
  }

  getData() {
    return this.data;
  }
}
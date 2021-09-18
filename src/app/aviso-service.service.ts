import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aviso,AvisoPost } from "../app/app.models";


@Injectable({
  providedIn: 'root'
})
export class AvisoServiceService {


  constructor(public http: HttpClient) {

  }


  deleteAviso(idAviso: string) {
    return new Promise((resolve, reject) => {
      this.http.delete('http://54.69.118.16:8090/api/eliminaAviso/' + idAviso)
        .subscribe(() => resolve('Delete Succesful'), (error) => {
          reject(error);
        });
    });
  }

  editAviso(data: Aviso) {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return new Promise((resolve, reject) => {
      this.http.put('http://54.69.118.16:8090/api/actualizaAvisos/', JSON.stringify(data), httpOptions)
        .subscribe(() => resolve('Update Succesful'), (error) => {
          reject(error);
        });
    });
  }

  createAviso(data: AvisoPost) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return new Promise((resolve, reject) => {
      this.http.post('http://54.69.118.16:8090/api/nuevoAviso', JSON.stringify(data), httpOptions)
        .subscribe(() => resolve('Update Succesful'), (error) => {
          reject(error);
        });
    });
  }

}

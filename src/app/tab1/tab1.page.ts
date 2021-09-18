import { Component } from '@angular/core';
import { AvisoServiceService } from '..//aviso-service.service'; 
import {Aviso, Avisos} from "../app.models";
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import { DataService } from "../data.service";


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  arrayPosts: Avisos;
  site:string = '';

  url = 'http://54.69.118.16:8090/api/avisos';
  
  constructor(public avisoServices:AvisoServiceService, public http: HttpClient, private router: Router,private dataService: DataService) {
    this.getAvisos();
  }


  ionViewDidLoad() {
    this.getAvisos();
  }

  ngOnInit() {
    this.dataService.setData(' ');
    this.getAvisos();
  } 

  
  getAvisos(){
    return new Promise(resolve=>{
      this.http.get(this.url).subscribe(data=>{
        let jsonObj: any = JSON.parse(JSON.stringify(data)); 
      let avisos: Avisos = <Avisos>jsonObj;
      this.arrayPosts = avisos;
      },error=>{
        console.log(error);
      });
    });
  }

  deletePost(idAviso: string){
    this.avisoServices.deleteAviso(idAviso).then(data => {
      console.log(data);
      this.getAvisos();
    });
  }


  editPost(aviso) {
    this.dataService.setData(aviso);
    this.router.navigateByUrl('/tabs/tab2',);
  }
}

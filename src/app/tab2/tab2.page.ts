import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Aviso, AvisoPost } from "../app.models";
import { AvisoServiceService } from '..//aviso-service.service';
import { DataService } from "../data.service";


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  mode = 'register'

  date: string = "";

  avisoForm = new FormGroup({
    aviso: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(200),
    ]),
    titulo: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100),
    ]),
    fecha: new FormControl('', [
      Validators.required,
    ]),
  });

  updateForm = new FormGroup({
    aviso: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(200),
    ]),
    titulo: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100),
    ]),
    idAviso: new FormControl('', [
      Validators.required,
    ]),
    tipoDeUsuario: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50),
    ]),
    fecha: new FormControl('', [
      Validators.required,
    ]),
  });

  data: Aviso;

  constructor(private dataService: DataService, private formBuilder: FormBuilder, public avisoServices: AvisoServiceService, private route: ActivatedRoute, private router: Router) {
    this.date = new Date().toISOString().slice(0, 10);
  }

  ngOnInit(): void {
    this.date = new Date().toISOString().slice(0, 10);
    console.log('data');
    
    if (this.route.snapshot.data['data']) {
      let jsonObj: any = JSON.parse(JSON.stringify(this.route.snapshot.data['data']));
      this.data = <Aviso>jsonObj;
      this.mode = 'edit';
      console.log(this.mode);
    }
  }

  async registerAviso($event: any): Promise<void> {
    let data: AvisoPost = {
      aviso: this.avisoForm.value.aviso,
      fecha: this.avisoForm.value.fecha,
      imagen: ' ',
      tipoUsuario: 'RESIDENTE',
      titulo: this.avisoForm.value.titulo,
    };
    console.log(JSON.stringify(data));
    this.avisoServices.createAviso(data).then(data => {
      console.log(data);
    });
  }

  async updateAviso($event: any): Promise<void> {
    let data: Aviso = {
      id: this.updateForm.value.idAviso,
      aviso: this.updateForm.value.aviso,
      fecha: this.updateForm.value.fecha,
      imagen: '',
      tipoUsuario: this.updateForm.value.tipoDeUsuario,
      titulo: this.updateForm.value.titulo,
    };
    console.log(JSON.stringify(data));
    this.avisoServices.editAviso(data).then(data => {
      console.log(data);
    });
  }

  ngOndestroy() {
    this.dataService.setData(' ');
    window.location.reload();
  }


}

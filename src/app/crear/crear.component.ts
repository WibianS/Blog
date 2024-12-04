import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { SitioExterno } from '../global';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
post={title:'',content:'',iduser:''}
response;id
  constructor(private http:Http, private sitio:SitioExterno,private router:Router) { }

  ngOnInit() {
    this.id=localStorage.getItem('usuario')
    this.post.iduser=this.id
  }
  publicar(){
    // envía mediante post la información del post a guardar en la db
    this.http.post(this.sitio.urlBack+"post.php",{title:this.post.title,content:this.post.content,iduser:this.post.iduser})
    .subscribe((data)=>{
      //obtiene respuesta del backend
      this.response=data.json()
    })
  }
  cerrar(){      
    localStorage.removeItem("usuario");
    this.router.navigate(['/home'])
  }
}

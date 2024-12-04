import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { SitioExterno } from '../global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  item={name:'',mail:'',password:''}
  post
  constructor(private http:Http, private sitio:SitioExterno) { }

  ngOnInit() {
    this.Ver()
  }
  registro(){
    let body=JSON.stringify(this.item);
    this.http.post(this.sitio.urlBack+"singUp.php",body)
    .subscribe((data)=>{

    })
  }
  Ver(){
    // realiza petición get para obtener los post de la db
    this.http.get(this.sitio.urlBack+"verpost.php")
    .subscribe((data)=>{
    //obtiene el resultado de la consulta
    this.post=data.json()
    })
    }
}

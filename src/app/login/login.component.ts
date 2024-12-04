import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { SitioExterno } from '../global';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 usuario;mail;password;id
  constructor(private http:Http, private sitio:SitioExterno,private router:Router,) {
   }

  ngOnInit() {    
    this.id=localStorage.getItem('usuario')
  }
  LogIn(){
    // envía los datos del loqueo para verificar el usuario e ingresar
    this.http.post(this.sitio.urlBack+"login.php",{mail:this.mail,password:this.password})
      .subscribe((data)=>{
      //obtiene los datos del usuario
      this.usuario=data.json()
      //acá se ingresa el ID del usuario al localstorage   
      this.id=this.usuario[0]['id'] 
      localStorage.setItem("usuario",this.id);
      this.router.navigate(['/crea'])//redirige al modulo crear
      // this.location.go('/crear')
    })
    }
    cerrar(){      
      localStorage.removeItem("usuario");
      this.router.navigate(['/home'])
    }


}

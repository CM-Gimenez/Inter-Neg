import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userDefault={
    "user":"Coqueta",
    "password":"coqueta123"
  }

  formLogin:FormGroup;

  constructor(
    public formulario:FormBuilder,
  ) { 
    this.formLogin=this.formulario.group({
      user:['',[Validators.required]],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  login(){
    if (this.formLogin.invalid) {
      return
    }else if (this.formLogin.value == this.userDefault.user && this.formLogin.value == this.userDefault.password ) {
      console.log(this.formLogin.value)
      }else{
      
    }
    
  }

}

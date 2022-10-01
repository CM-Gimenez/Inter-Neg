import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: NgForm;
  userDefault:string = "coqueta";
  passwordDefault:string = "coqueta123";
  formLogin:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private router: Router
  ) { 
    this.formLogin=this.formulario.group({
      user:['',[Validators.required]],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  login(formulario:NgForm){
   const user = formulario.value.user;
   const password = formulario.value.password;
   console.log(formulario.value)
   if (user == this.userDefault && password == this.passwordDefault) {

    this.router.navigateByUrl('/home');
    
   }else{
    window.alert("Credenciales no validas")
    this.router.navigateByUrl('')

   }
    
  }

}

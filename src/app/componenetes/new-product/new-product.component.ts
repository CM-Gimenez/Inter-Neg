import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  formNew:FormGroup;

  constructor(
    public formulario: FormBuilder,
    private service:CrudService,
    private route:Router

    ) { 
    this.formNew = this.formulario.group({
      nombre:[''],
      descripcion:[''],
      precio:[''],
      stock:['']
    })
  }

  ngOnInit(): void {
  }

  enviardatos():any{
    console.log("presionaste aqui");
    console.log(this.formNew.value);
    try {
      this.service.AgregarProducto(this.formNew.value).subscribe();
      this.route.navigateByUrl('/home')
    } catch (error) {
      console.log(error);
    }

  }
}

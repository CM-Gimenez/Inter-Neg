import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  idRecibido: any;
  formEdit: FormGroup;

  constructor(
    private routeActivated: ActivatedRoute,
    public formulario: FormBuilder,
    private service: CrudService,
    private route: Router
  ) {
    this.idRecibido = this.routeActivated.snapshot.paramMap.get('id');
    console.log(this.idRecibido + " este es el id");
    this.service.ObtenerProducto(this.idRecibido).subscribe((res) => {
      console.log(res);
      this.formEdit.setValue({
        nombre:res.data.nombre,
        descripcion:res.data.descripcion,
        precio:res.data.precio,
        stock:res.data.stock,
      });
    });
    this.formEdit = this.formulario.group({
      nombre: [''],
      descripcion: [''],
      precio: [''],
      stock:['']
    });
  }

  ngOnInit(): void {}

  editar(): any {
    console.log(this.formEdit.value);
    this.service
      .EditarProducto(this.idRecibido, this.formEdit.value)
      .subscribe(()=>{
        this.route.navigateByUrl('/home')
      });
  }
}

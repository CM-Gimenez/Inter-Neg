import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.scss'],
})
export class ProductoListComponent implements OnInit {
  Productos: any;

  constructor(private service: CrudService) {}

  ngOnInit(): void {
    this.service.ObtenerProductos().subscribe((res) => {
      this.Productos = res;
    });
  }
  borrar(id: any, idControl: any) {
    console.log(id);
    console.log(idControl);
    if (window.confirm('Desea Borrar registro')) {
      this.service.BorrarProducto(id).subscribe((res) => {
        this.Productos.splice(idControl, 1);
      });
    }
  }
}

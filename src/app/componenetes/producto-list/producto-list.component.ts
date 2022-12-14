import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.scss'],
})
export class ProductoListComponent implements OnInit, OnChanges {
  productos:any;

  constructor(private service: CrudService) {}
  


  loaded = true;
  loading = false;

  async ngOnInit(){
    try {
      this.gettAll();
    } catch (error) {
      console.log(error);
      
    }
   
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    
    this.gettAll;
  }

  gettAll(){
    this.service.ObtenerProductos().subscribe((res:any)=>{
      console.log(res)
      this.productos=res.data.data;
      console.log(this.productos);
    })
  }

  borrar(id: any, idControl: any) {
    console.log(id);
    console.log(idControl);
    if (window.confirm('Desea Borrar registro')) {
      this.service.BorrarProducto(id).subscribe((res) => {
        this.productos.splice(idControl, 1);
      });
    }
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from './Producto';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  API: string = 'http://localhost/coqueta/';

  constructor(private httpclient: HttpClient) {}

  AgregarProducto(datosProductos: Productos): Observable<any> {
    return this.httpclient.post(this.API + '?insertar', datosProductos);
  }

  ObtenerProductos(){
    return this.httpclient.get(this.API);
  }

  BorrarProducto(id:any): Observable<any> {
    return this.httpclient.get(this.API + '?borrar='+id);
  }

  ObtenerProducto(id:any): Observable<any> {
    return this.httpclient.get(this.API + '?consultar='+id);
  }

  EditarProducto(id:any, datosProductos:any): Observable<any> {
    return this.httpclient.post(this.API +'?actualizar='+id, datosProductos);
  }
}

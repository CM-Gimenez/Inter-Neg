import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from './Producto';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  API = 'https://coquetaind.herokuapp.com/api';

  constructor(private httpclient: HttpClient) {}

  AgregarProducto(datosProductos: Productos): Observable<any> {
    return this.httpclient.post(this.API + '/productos', datosProductos);
  }

  ObtenerProductos(){
    return this.httpclient.get(this.API+'/productos');
  }

  BorrarProducto(id:any): Observable<any> {
    return this.httpclient.delete(this.API + '/productos/'+id);
  }

  ObtenerProducto(id:any): Observable<any> {
    return this.httpclient.get(this.API + '/productos/'+id);
  }

  EditarProducto(id:any, datosProductos:any): Observable<any> {
    return this.httpclient.post(this.API +'/productos/'+id, datosProductos);
  }
  
}

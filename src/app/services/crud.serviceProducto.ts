import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from './Producto';

@Injectable({
  providedIn: 'root',
})
export class CrudServiceProducto {
  API: string = '';

  constructor(private httpclient: HttpClient) {}

  
}

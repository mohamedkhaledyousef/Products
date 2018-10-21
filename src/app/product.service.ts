import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.uri}/products`);
  }

  getProductById(id) {
    return this.http.get(`${this.uri}/products/${id}`);
  }

  addProduct(sku, name, categorise, price, date) {
    const product = {
      sku: sku,
      name: name,
      date: date,
      price: price,
      categorise: categorise
    };
    return this.http.post(`${this.uri}/products/add`, product);
  }

  updateProduct(id, sku, name, categorise, price, date) {
    const product = {
      sku: sku,
      name: name,
      categorise: categorise,
      price: price,
      date: date
    };
    return this.http.post(`${this.uri}/products/update/${id}`, product);
  }

  deleteProduct(id) {
    return this.http.get(`${this.uri}/products/delete/${id}`);
  }
}
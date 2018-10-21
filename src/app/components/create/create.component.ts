import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  createForm: FormGroup;
  constructor(private productService: ProductService, private fb: FormBuilder, private router: Router) { 
    this.createForm = this.fb.group({
      sku: ['', Validators.required],
      name: ['', Validators.required],
      categorise: '',
      price: '',
      date: '',
    });
  }

  addProduct(sku, name, categorise, price, date) {
    this.productService.addProduct(sku, name, categorise, price, date).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

  ngOnInit() {
    /*
    this.productService.getProducts().subscribe((product) => {
      console.log(product);
  }
  */

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { ProductService } from '../../product.service';
import { Product } from '../../product.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: String;
  issue: any = {};
  updateForm: FormGroup;
  product: Object;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.createForm();

}

createForm() {
  this.updateForm = this.fb.group({
    sku: ['', Validators.required],
    name: ['', Validators.required],
    categories: '',
    price: '',
    date: ''
  });
}

ngOnInit() {
  this.route.params.subscribe(params => {
    this.id = params.id;
    this.productService.getProductById(this.id).subscribe(res => {
      this.product = res;
      this.updateForm.get('sku').setValue(this.product.sku);
      this.updateForm.get('name').setValue(this.product.name);
      this.updateForm.get('categories').setValue(this.product.categories);
      this.updateForm.get('price').setValue(this.product.price);
      this.updateForm.get('date').setValue(this.product.date);
    });
  });
}

updateProduct(sku, name, categorise, price, date) {
  this.productService.updateProduct(this.id, sku, name, categorise, price, date).subscribe(() => {
    this.snackBar.open('Product updated successfully', 'OK', {
      duration: 3000
    });
  });
}

}

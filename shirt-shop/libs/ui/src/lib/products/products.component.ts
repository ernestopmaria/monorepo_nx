import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';
import { Product } from '@prisma/client';

@Component({
  selector: 'shirt-shop-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public $products!: Observable<Product[]>;

  constructor(public productService: ProductsService) {}
  ngOnInit(): void {
    this.$products = this.productService.getProducts();
  }
}

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [ProductsComponent],
  exports: [ProductsComponent],
})
export class UiModule {}

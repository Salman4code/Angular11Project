import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductList } from '../constant/ProductList';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  productList = ProductList;
  product: any;
  constructor(private route: ActivatedRoute, private common: CommonService) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params.productId;
    let result = this.productList.filter(
      (product: any) => product.productId == id
    );
    if (result.length > 0) {
      this.product = result[0];
    }
  }
  Addtobag() {
    let cartProducts: any[] =
      JSON.parse(localStorage.getItem('cartProducts') || '[]') || [];
    cartProducts.push(this.product);
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    this.common.cartData.next(cartProducts);
  }
}

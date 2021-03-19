import { Component, OnInit } from '@angular/core';
import { ProductList } from '../constant/ProductList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productList = ProductList;
  constructor() {}

  ngOnInit(): void {}
}

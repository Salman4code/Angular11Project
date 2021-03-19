import { Component } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'BoppoAssignment';
  isUserLoggedIn = false;
  userDetails: any;
  cartProducts: any;
  constructor(private common: CommonService) {
    this.common.cartData.subscribe((res: any) => {
      this.cartProducts = res;
    });
  }
  ngOnInit() {
    if (localStorage.getItem('userDetails')) {
      this.isUserLoggedIn = true;
      this.userDetails = JSON.parse(
        localStorage.getItem('userDetails') || '{}'
      );
    }
    this.cartProducts = JSON.parse(
      localStorage.getItem('cartProducts') || '[]'
    );
  }
  logOut() {
    localStorage.clear();
    window.location.reload();
  }
}

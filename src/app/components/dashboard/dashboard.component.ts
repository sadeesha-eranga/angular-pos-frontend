import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {ItemService} from '../../services/item.service';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  customerCount = 0;
  itemCount = 0;
  orderCount = 0;

  constructor(private customerService: CustomerService, private itemService: ItemService, private orderService: OrderService) {
  }

  ngOnInit() {
    this.customerService.getCustomersCount().subscribe((result) => {
      this.customerCount = result;
    });
    this.itemService.getItemsCount().subscribe((result) => {
      this.itemCount = result;
    });
    this.orderService.getTotalOrders().subscribe((result) => {
      this.orderCount = result;
    });
  }

}

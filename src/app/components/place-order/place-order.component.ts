import {Component, OnInit} from '@angular/core';
import {Customer} from '../../models/customer';
import {Item} from '../../models/item';
import {OrderDetailDTO} from '../../dtos/orderDetailDTO';
import {CustomerService} from '../../services/customer.service';
import {ItemService} from '../../services/item.service';
import {OrderService} from '../../services/order.service';
import {ItemDTO} from '../../dtos/itemDTO';
import {OrderDTO} from '../../dtos/orderDTO';
import swal from 'sweetalert';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  customers: Array<Customer> = [];
  items: Array<Item> = [];
  orderDetailList: Array<OrderDetailDTO> = [];
  selectedCustomer: Customer = new Customer();
  selectedItem: Item = new Item();
  finalTotal = 0;
  orderId = 0;

  constructor(private customerService: CustomerService, private itemService: ItemService, private orderService: OrderService) {
  }

  ngOnInit() {
    this.loadAllCustomers();
    this.loadAllItems();
    this.getOrderCount();
  }

  loadAllCustomers() {
    this.customerService.getAllCustomers().subscribe((result) => {
      this.customers = result;
    });
  }

  loadAllItems() {
    this.itemService.getAllItems().subscribe((result) => {
      this.items = result;
    });
  }

  getOrderCount() {
    this.orderService.getTotalOrders().subscribe((result) => {
      this.orderId = result + 1;
    });
  }

  addItems(qty, unitPrice) {
    const total = qty * unitPrice;
    const remainingQty = this.selectedItem.qtyOnHand - qty;
    for (const value of this.orderDetailList) {
      if (value.itemDTO.itemId === this.selectedItem.itemId) {
        value.qty = Number(qty) + Number(value.qty);
        value.totalPrice = Number(unitPrice) + Number(value.totalPrice);
        this.finalTotal += total;
        document.getElementById('finalTotal').setAttribute('value', this.finalTotal.toString());
        return;
      }
    }
    const itemDTO = new ItemDTO(this.selectedItem.itemId, this.selectedItem.description, this.selectedItem.unitPrice, remainingQty);
    const orderDetail = new OrderDetailDTO(qty, total, itemDTO);
    this.orderDetailList.push(orderDetail);
    this.finalTotal += total;
    document.getElementById('finalTotal').setAttribute('value', this.finalTotal.toString());
  }

  removeItem(od) {
    const index = this.orderDetailList.indexOf(od);
    this.finalTotal -= od.totalPrice;
    this.orderDetailList.splice(index, 1);
    document.getElementById('finalTotal').setAttribute('value', this.finalTotal.toString());
  }

  placeOrder(orderDate) {
    console.log(this.orderDetailList);
    const orderDTO = new OrderDTO(this.orderId, orderDate, this.selectedCustomer, this.orderDetailList);
    this.orderService.saveOrder(orderDTO).subscribe((result) => {
      if (result) {
        swal({
          title: 'Success!',
          text: 'Order placed successfully',
          icon: 'success',
        });
        this.clear();
      } else {
        swal({
          title: 'Failed!',
          text: 'Failed to place the order',
          icon: 'error',
        });
      }
    });
  }

  clear() {
    this.orderDetailList = [];
    this.selectedCustomer = new Customer();
    this.selectedItem = new Item();
    this.finalTotal = 0;
    document.getElementById('finalTotal').setAttribute('value', '');
  }

  isOrderValid(): boolean {
    return this.orderDetailList.length > 0 && this.selectedCustomer.name !== undefined;
  }
}

import {Customer} from './customer';
import {OrderDetailDTO} from '../dtos/orderDetailDTO';

export class Order {
  orderId: number;
  orderDate: string;
  customerDTO: Customer;
  orderDetailDTOList: Array<OrderDetailDTO> = [];

  constructor(orderId: number, orderDate: string, customerDTO: Customer, orderDetailList: Array<OrderDetailDTO>) {
    this.orderId = orderId;
    this.orderDate = orderDate;
    this.customerDTO = customerDTO;
    this.orderDetailDTOList = orderDetailList;
  }
}

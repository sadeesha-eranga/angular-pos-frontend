import {Customer} from '../models/customer';
import {OrderDetailDTO} from './orderDetailDTO';

export class OrderDTO {
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

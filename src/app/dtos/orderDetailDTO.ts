import {ItemDTO} from './itemDTO';

export class OrderDetailDTO {
  qty: number;
  totalPrice: number;
  itemDTO: ItemDTO;

  constructor(qty: number, totalPrice: number, itemDTO: ItemDTO) {
    this.qty = qty;
    this.totalPrice = totalPrice;
    this.itemDTO = itemDTO;
  }
}

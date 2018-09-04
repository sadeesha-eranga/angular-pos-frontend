export class ItemDTO {
  itemId: number;
  description: string;
  unitPrice: number;
  qtyOnHand: number;

  constructor(itemId: number, description: string, unitPrice: number, qtyOnHand: number) {
    this.itemId = itemId;
    this.description = description;
    this.unitPrice = unitPrice;
    this.qtyOnHand = qtyOnHand;
  }
}

import {Component, OnInit, ViewChild} from '@angular/core';
import {Item} from '../../dtos/item';
import {NgForm} from '@angular/forms';
import {ItemService} from '../../services/item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  items: Array<Item> = [];
  selectedItem: Item = new Item();
  isItemSelected = false;
  @ViewChild('frmItem') form: NgForm;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.loadAllItems();
  }

  loadAllItems() {
    this.itemService.getAllItems().subscribe((result) => {
      this.items = result;
    });
  }

  saveItem() {
    this.itemService.saveItem(this.selectedItem).subscribe((result) => {
      if (result) {
        alert('Item saved successfully');
        this.loadAllItems();
        this.clear();
      } else {
        alert('Failed to save item');
      }
    });
  }

  deleteItem(itemId: number) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.itemService.deleteItem(itemId).subscribe((result) => {
        if (result) {
          alert('Item deleted successfully');
          this.loadAllItems();
          this.clear();
        } else {
          alert('Failed to delete item');
        }
      });
    }
  }

  updateItem() {
    this.itemService.updateItem(this.selectedItem).subscribe((result) => {
      if (result) {
        alert('Item updated successfully');
        this.loadAllItems();
        this.clear();
      } else {
        alert('Failed to update item');
      }
    });
  }

  selectItem(item: Item) {
    this.isItemSelected = true;
    this.selectedItem = item;
  }

  clear() {
    this.selectedItem = new Item();
    this.isItemSelected = false;
  }

}

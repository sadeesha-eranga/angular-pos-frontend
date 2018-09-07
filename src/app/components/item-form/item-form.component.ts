import {Component, OnInit, ViewChild} from '@angular/core';
import {Item} from '../../models/item';
import {NgForm} from '@angular/forms';
import {ItemService} from '../../services/item.service';
import swal from 'sweetalert';

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
        swal({
          title: 'Saved!',
          text: 'Item saved successfully',
          icon: 'success',
        });
        this.loadAllItems();
        this.clear();
      } else {
        swal({
          title: 'Failed!',
          text: 'Failed to save the item',
          icon: 'error',
        });
      }
    });
  }

  deleteItem(itemId: number) {
    swal('Are you sure you want to delete this customer?', {
      buttons: ['No!', 'Yes!'],
      dangerMode: true,
    }).then((result) => {
      if (result) {
        this.itemService.deleteItem(itemId).subscribe((res) => {
          if (res) {
            swal({
              title: 'Deleted!',
              text: 'Item deleted successfully',
              icon: 'success',
            });
            this.loadAllItems();
            this.clear();
          } else {
            swal({
              title: 'Failed!',
              text: 'Failed to delete the item',
              icon: 'error',
            });
          }
        });
      }
    });
  }

  updateItem() {
    this.itemService.updateItem(this.selectedItem).subscribe((result) => {
      if (result) {
        swal({
          title: 'Updated!',
          text: 'Item updated successfully',
          icon: 'success',
        });
        this.loadAllItems();
        this.clear();
      } else {
        swal({
          title: 'Failed!',
          text: 'Failed to update the item',
          icon: 'error',
        });
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

import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Customer} from '../../models/customer';
import {CustomerService} from '../../services/customer.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  customers: Array<Customer> = [];
  selectedCustomer: Customer = new Customer();
  isCustomerSelected = false;
  @ViewChild('frmCustomers') form: NgForm;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.loadAllCustomers();
  }

  loadAllCustomers() {
    this.customerService.getAllCustomers().subscribe((result) => {
      this.customers = result;
    });
  }

  saveCustomer() {
    this.customerService.saveCustomer(this.selectedCustomer).subscribe((result) => {
      if (result) {
        swal({
          title: 'Saved!',
          text: 'Customer saved successfully',
          icon: 'success',
        });
        this.loadAllCustomers();
        this.clear();
      } else {
        swal({
          title: 'Failed!',
          text: 'Failed to save the customer',
          icon: 'error',
        });
      }
    });
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.selectedCustomer).subscribe((result) => {
      if (result) {
        swal({
          title: 'Updated!',
          text: 'Customer updated successfully',
          icon: 'success',
        });
        this.loadAllCustomers();
        this.clear();
      } else {
        swal({
          title: 'Failed!',
          text: 'Failed to update the customer',
          icon: 'error',
        });
      }
    });
  }

  deleteCustomer(customerId: number) {
    swal('Are you sure you want to delete this customer?', {
      buttons: ['No!', 'Yes!'],
      dangerMode: true,
    }).then((result) => {
      if (result) {
        this.customerService.deleteCustomer(customerId).subscribe((res) => {
          if (res) {
            swal({
              title: 'Deleted!',
              text: 'Customer deleted successfully',
              icon: 'success',
            });
            this.loadAllCustomers();
            this.clear();
          } else {
            swal({
              title: 'Failed!',
              text: 'Failed to delete the customer',
              icon: 'error',
            });
          }
        });
      }
    });
  }

  selectCustomer(customer: Customer) {
    this.isCustomerSelected = true;
    this.selectedCustomer = customer;
  }

  clear() {
    this.selectedCustomer = new Customer();
    this.isCustomerSelected = false;
  }
}

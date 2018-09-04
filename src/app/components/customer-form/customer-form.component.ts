import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Customer} from '../../dtos/customer';
import {CustomerService} from '../../services/customer.service';

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
        alert('Customer saved successfully');
        this.loadAllCustomers();
        this.clear();
      } else {
        alert('Failed to save customer');
      }
    });
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.selectedCustomer).subscribe((result) => {
      if (result) {
        alert('Customer updated successfully');
        this.loadAllCustomers();
        this.clear();
      } else {
        alert('Failed to update customer');
      }
    });
  }

  deleteCustomer(customerId: number) {
    if (confirm('Are you sure you want to delete this customer?')) {
      this.customerService.deleteCustomer(customerId).subscribe((result) => {
        if (result) {
          alert('Customer deleted successfully');
          this.loadAllCustomers();
          this.clear();
        } else {
          alert('Failed to delete customer');
        }
      });
    }
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

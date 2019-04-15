import { Component, OnInit } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { DumbApiService } from '../dumb-api.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.pug',
  styleUrls: ['./customers.component.sass']
})
export class CustomersComponent implements OnInit {

  customers = [];

  constructor(private dumbApiService: DumbApiService) {
    setTheme('bs3');
  }

  ngOnInit() {
    this.queryCustomer();
  }

  queryCustomer () {
    this.dumbApiService.getClientList()
      .subscribe(data => {
        this.customers = data
      }
    )
  }
}

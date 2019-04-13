import { Component, OnInit } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { DumbApiService } from '../dumb-api.service';
import { NgxHotjarService } from 'ngx-hotjar';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.pug',
  styleUrls: ['./customers.component.sass']
})
export class CustomersComponent implements OnInit {

  customers = [];

  constructor(private dumbApiService: DumbApiService, protected $hotjar: NgxHotjarService) {
    setTheme('bs3');
  }

  ngOnInit() {
    this.$hotjar.virtualPageView('/virtual/component/started');
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

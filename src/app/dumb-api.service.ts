import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface Customer {
  
}

@Injectable({
  providedIn: 'root'
})
export class DumbApiService {

  constructor(private http: HttpClient) { }

  getClientList () {
    return this.http.get<Object[]>('https://private-92a969-processoseletivo1.apiary-mock.com/customers');
  }
}

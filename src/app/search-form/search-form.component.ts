import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Username } from '../username';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFORMComponent implements OnInit {
  addUser:string;
  @Output() newUser = new EventEmitter<any>();
  addNewUser() {
    this.newUser.emit(this.addUser);
    this.addUser='';
  }
  constructor() { }

  ngOnInit() {
    this.addNewUser()
    // this.addUser='ucynthy12'
  }

}

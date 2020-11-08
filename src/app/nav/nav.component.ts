import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Username } from '../username';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user: Username;
 
  @Output() newUser = new EventEmitter<any>();
  addNewUser() {
    this.newUser.emit(this.user);
  }
  constructor(){
  
  }
  ngOnInit() {

  }
}
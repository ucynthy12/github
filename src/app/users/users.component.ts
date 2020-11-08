import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchService } from '../search.service';
import { Username } from '../username';
import { Input } from '@angular/core';
import{ Repository }from '../repository'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  search:string;
  user: Username;
  repos:Repository;
  @Input() username: Username
  
  constructor(private http: HttpClient, private searchService: SearchService) {
  }
  findUser(search) {
    this.searchService.searchRequest(search).then(result => {
      this.user = this.searchService.username
      console.log(this.user)

    }, (error) => {
      console.log(error)
    })
    this.searchService. getRepos(search).then(result => {
      this.repos = this.searchService.repository
      console.log(this.repos)

    }, (error) => {
      console.log(error)
    })

  }
  ngOnInit() {
    this.findUser('ucynthy12')
  }

}

import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import{HttpClient} from '@angular/common/http';
import{Repository} from '../repository';
@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  search:string;
  repos: Repository;
  constructor(private http: HttpClient, private searchService: SearchService) { }
  findRepos(search) {
    this.searchService.getRepos(search).then(result => {
      this.repos = this.searchService.repository
      console.log(this.repos)

    }, (error) => {
      console.log(error)
    }
    )
  }
  ngOnInit() {
    this.findRepos('ucynthy12')
  }

}

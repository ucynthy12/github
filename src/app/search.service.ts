import { Injectable } from '@angular/core';
import { Username } from './username';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import{Repository} from './repository';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiK: string = environment.apiKey
  username:Username;
  repository:Repository;
  profile: string;
  constructor(private http: HttpClient) {
  this.username = new Username('', '', '', 0, 0, 0, '', new Date())
  this.repository= new Repository('','','','',new Date())
  // this.profile='ucynthy12';
  }
  searchRequest(profile:string) {
    interface ApiResponse {
      name: string,
      login: string,
      location: string,
      public_repos: number,
      followers: number,
      following: number,
      avatar_url: string,
      created_at: Date
    }
    let promise = new Promise((resolve,reject)=>{
     this.http.get<ApiResponse>('https://api.github.com/users/'+profile+'?access_token='+this.apiK).toPromise().then((response)=> {
      this.username=response
      console.log(this.username)
      resolve()
    },
    error=>{
    this.username.name = ""
    this.username.login = "invalid username"

    reject(error)
    })
  })
  return promise
}
 getRepos(profile){
   interface ApiResponse{
  name:string,
  description:string,
  language:string,
  html_url:string,
  updated_at:Date
   }
   let promise= new Promise((resolve,reject)=>{
     this.http.get<ApiResponse>('https://api.github.com/users/'+profile+'/repos?access_token='+this.apiK).toPromise().then((data)=> {
       this.repository=data
       console.log(this.repository)
       resolve()
   },error=>{
     this.repository.name='invalid repos'
     this.repository.description=''
    })
   })
   return promise
  }
}

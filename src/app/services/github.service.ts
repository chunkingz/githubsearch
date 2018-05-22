import { IProfile } from './../interfaces/iprofile';
import { IRepos } from './../interfaces/irepos';
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  username: string;

  constructor(private _http: HttpClient) {
    console.log('Github service ready');
    // this.username = 'chunkingz';
  }

  changeUsername(username) {
   return this.username = username;
  }
  getUser(username: string): Observable<IProfile> {
    if (username.length > 0) {
      return this._http.get(`http://api.github.com/users/${username}`).map((res: any) => <IProfile> res);
    }
  }

  getRepos(username: string) {
    if (username.length > 0) {
    return this._http.get(`http://api.github.com/users/${username}/repos`).map(res => res);
    }
  }

}

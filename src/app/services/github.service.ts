import { IProfile } from './../interfaces/iprofile';
import { IRepos } from './../interfaces/irepos';
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  username: string;
  private client_id = '2fd5c3f1098c967a2613';
  private client_secret = 'a72a8d1b3bdd8933b67d621cfedd313c9d9c13f8';

  constructor(private _http: HttpClient) {
    console.log('Github service ready');
    // this.username = 'chunkingz';
  }

  changeUsername(username) {
   return this.username = username;
  }
  getUser(username: string): Observable<IProfile> {
    if (username.length > 0) {
      const userUrl = `http://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
      return this._http.get(userUrl).map((res: any) => <IProfile> res);
    }
  }

  getRepos(username: string) {
    if (username.length > 0) {
      const reposUrl = `http://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`;
    return this._http.get(reposUrl).map(res => res);
    }
  }

}

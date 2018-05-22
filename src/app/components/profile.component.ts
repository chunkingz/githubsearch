import { IRepos } from './../interfaces/irepos';
import { IProfile } from './../interfaces/iprofile';
import { GithubService } from './../services/github.service';
import { Component } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers: [GithubService]
})
export class ProfileComponent {
user: IProfile;
repos: any;
username: string;

  constructor(private _githubService: GithubService) {}

   searchUser() {
    this._githubService.getUser(this.username).subscribe(user => {
      console.log(user);
      this.user = user;
    });

    this._githubService.getRepos(this.username).subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
   }
}

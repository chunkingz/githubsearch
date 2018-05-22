import { GithubService } from './services/github.service';
import { Component } from '@angular/core';
import {ProfileComponent} from './components/profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GithubService]
})
export class AppComponent {
  title = 'app';
}

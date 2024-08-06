import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import {GetUsersComponent} from './components/get-users/get-users.component'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GetUsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front-Full';
}

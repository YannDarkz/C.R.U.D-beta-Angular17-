import { Component, OnInit } from '@angular/core';
import { CardUsersComponent } from '../card-users/card-users.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../user.service';
import { User } from '../../interfaces/getUser';


@Component({
  selector: 'app-get-users',
  standalone: true,
  imports: [CardUsersComponent, CommonModule, ],
  templateUrl: './get-users.component.html',
  styleUrl: './get-users.component.scss'
})
export class GetUsersComponent {
  users: User[] = [];

  ian: string = 'darkzinnn'

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
        console.log("dados 377", data);
      },
      (error) => {
        console.error('erro ao buscar usuários:', error);
      }
    )
  }
}

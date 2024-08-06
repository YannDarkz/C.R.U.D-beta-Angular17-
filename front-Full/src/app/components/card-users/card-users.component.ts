import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../interfaces/getUser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-users.component.html',
  styleUrl: './card-users.component.scss'
})
export class CardUsersComponent {

  users: User[] = [];

  
  constructor(private userService: UserService, private cdr: ChangeDetectorRef) { }
  
  removeUser(id: string): void {
    this.userService.remove(id).subscribe({
      next: (response) => {
        // console.log('removido com sucesso!', response);
        this.users = this.users.filter(user => user.id !== id);
        console.log("usu", response);
        
        this.cdr.detectChanges()
        // this.loadUsers();
      },
      error: (err) => {
        console.error('erro ao remover usuario', err);

      }
    })
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe({
      next: (response: any) => {
        this.users = response
      },
      error: (err) => {
        console.error('erro ao carregar usuarios', err);    
      }
    });
  }

}
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TooltipPosition } from '@angular/material/tooltip';
import { User } from '../../model/user.class';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule, RouterModule, MatTooltipModule, MatButtonModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  users: User[] = [];
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  number: string[] = ['4', '0', '4']; // Initialisierung mit Standardwerten

  constructor(public dialog: MatDialog, private router: Router) {
    // Lade Benutzer aus Local Storage, falls vorhanden
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
    }

    this.updateNumber(); // Initiales Update der number-Variable
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.users.push(result);
        this.updateNumber(); // Update number after adding new user

        // Speichern der Benutzer im Local Storage
        localStorage.setItem('users', JSON.stringify(this.users));
      }
    });
  }

  showUserDetails(user: User) {
    this.router.navigate(['userdetail'], { 
      queryParams: { 
        firstName: user.firstName, 
        lastName: user.lastName, 
        birthDate: user.birthDate, 
        email: user.email, 
        street: user.street, 
        city: user.city 
      } 
    });
  }

  updateNumber(): void {
    this.number = ['4', `${this.users.length}`, '4']; // Update the second element with the number of users
  }
}

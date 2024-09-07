import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../model/user.class';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-add-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatIconModule, FormsModule, MatDatepickerModule, MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  user = new User();
  birthDate: Date;

  constructor(public dialogRef: MatDialogRef<AddUserComponent>) { }



  saveUser() {
    this.user.birthDate = this.birthDate.getTime();

    this.dialogRef.close(this.user);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}



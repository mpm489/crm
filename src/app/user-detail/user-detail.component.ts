import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule,CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  f_name: string;
  l_name: string;
  e_mail: string;
  strasse: number;
  stadt: string;
  b_date: number;  // Hinzufügen der b_date Variable



  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.f_name = params['firstName'];
      this.l_name = params['lastName'];
      this.strasse = params['street'];
      this.stadt = params['city'];
      this.e_mail = params['email'];
      this.b_date = params['birthDate']; 
    });

    
  }
}

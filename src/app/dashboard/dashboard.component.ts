import { Component, Inject, PLATFORM_ID, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { User } from '../../model/user.class';
import { isPlatformBrowser } from '@angular/common';
import { CourseService } from '../course.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  number: string[] = [];
  text: string[] = ['Courses', 'Users', 'Graduates'];
  icons: string[] = ['videocam', 'group', 'emoji_events'];
  greetingMessage: string;

  constructor( private courseService: CourseService, @Inject(PLATFORM_ID) private platformId: Object) {
    this.loadUserCount(); 
    this.greet(); 
  }

  loadUserCount(): void {
    if (isPlatformBrowser(this.platformId)) {
      const savedUsers = localStorage.getItem('users');
      if (savedUsers) {
        const users: User[] = JSON.parse(savedUsers);
        this.number = [`${this.courseService.getCoursesLength()}`, `${users.length}`, '4']; // Kurse und Benutzeranzahl anzeigen
      } else {
        this.number = [`${this.courseService.getCoursesLength()}`, '0', '4']; // Standardwert, wenn keine Benutzer vorhanden sind
      }
    }
  }

  greet(): void {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 2 && currentHour < 11) {
      this.greetingMessage = "Good morning";
    } else if (currentHour >= 11 && currentHour < 18) {
      this.greetingMessage = "Good afternoon";
    } else {
      this.greetingMessage = "Good evening";
    }
  }
}

// course.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  images: string[] = [
    "1.jpg",
    "2.jpg",
    "3.png",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
  ];

  constructor(public courseService: CourseService) {}
}

// course.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  text: string[] = [
    "Responsive Social Media Website UI Design",
    "Responsive SmartHome Website Design",
    "Responsive Admin Dashboard UI Design",
    "Best JavaScript online Course",
    "Angular crash Course",
    "WordPress Full Course 10 + Hours",
    "ChatGPT online Course",
    "Website Design online Course",
    "Web Developement HTML5 CSS3"
  ];

  getCoursesLength(): number {
    return this.text.length;
  }
}

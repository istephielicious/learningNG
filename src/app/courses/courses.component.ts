import { CoursesService } from './courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  // templateUrl: './courses.component.html',
  // styleUrls: ['./courses.component.css']
  template: `
          <h2>{{ title }}</h2>
        <ul *ngFor="let item of courses">
          <li>{{ item }}</li>
        </ul>
  `
})
export class CoursesComponent implements OnInit {

  courses;
  constructor(private courseService: CoursesService) { 
    this.courses=courseService.getCourses();
  }

  ngOnInit() {
  }

}

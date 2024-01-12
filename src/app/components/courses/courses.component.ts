import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
 
  constructor(private coursesService: CoursesService) {
   
  }

  courses: any[] = [];

  ngOnInit(): void {
    this.courses = this.coursesService.courses;
  }
//   comments: string[] = [];
//   flag: boolean= false
// addCommentField(): void {
//   // this.comments.push('');
//   this.flag = true
// }

// addComment(index: number, comment: string): void {
  
//   this.comments[index] = comment;
// }
}
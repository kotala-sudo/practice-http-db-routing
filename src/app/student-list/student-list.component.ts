import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  studentList: Student[] = [];

  constructor(private stdService: StudentService) {}

  ngOnInit() {
    this.studentList = this.stdService.STUDENTS;
  }

  onClearData() {
    this.studentList = [];
    this.stdService.deleteAll();
  }
}

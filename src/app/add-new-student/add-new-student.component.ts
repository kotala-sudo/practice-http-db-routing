import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styleUrls: ['./add-new-student.component.css'],
})
export class AddNewStudentComponent implements OnInit {
  nextID: number = 0;
  sName: string;
  sAge: number;

  constructor(private stdService: StudentService) {}

  ngOnInit() {}

  addNewStudent() {
    const newStudent: Student = {
      id: ++this.nextID,
      name: this.sName,
      age: this.sAge,
    };
    this.stdService.addStudent(newStudent);
  }
}

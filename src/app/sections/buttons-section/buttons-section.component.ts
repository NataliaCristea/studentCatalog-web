import { Component, OnInit } from '@angular/core';
import {SubjectService} from '../../service/subject.service';
import {Subject} from '../../model/Subject';

@Component({
  selector: 'app-buttons-section',
  templateUrl: './buttons-section.component.html',
  styleUrls: ['./buttons-section.component.css']
})
export class ButtonsSectionComponent implements OnInit {
  columns: SubjectService;
  subjects: Subject | any;
  constructor(private tableService: SubjectService) {}

  ngOnInit() {
    this.tableService.getSubjects().subscribe(subjects => {
      this.subjects = subjects;
    });
  }

  onDelete(id: number) {
    this.tableService.deleteSubject(id).subscribe(
      () => this.subjects = this.subjects.filter(subject => subject.id !== id),
        () => alert('could not delete this subject')
    );
  }

}

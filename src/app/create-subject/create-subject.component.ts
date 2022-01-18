import { Component, OnInit } from '@angular/core';
import {SubjectService} from '../service/subject.service';
import {Subject} from '../model/Subject';
import {ActivatedRoute, Router} from '@angular/router';
import {newArray} from '@angular/compiler/src/util';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../model/User';
import {filter, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.component.html',
  styleUrls: ['./create-subject.component.css']
})
export class CreateSubjectComponent implements OnInit {
  columns: SubjectService;
  subject: Subject;
  subjectFormGroup: FormGroup;

  constructor(
      private fb: FormBuilder,
      private router: Router,
      private subjectService: SubjectService,
      private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subject = {
      id: null,
      name: null,
      usersList: [],
      exams: null,
      semester: null,
      average: null,
      credits: null,
      hours: null,
    };

    this.initializeFormGroup(this.subject);

    this.route.params.pipe(
        filter(params => !!params.id),
        switchMap(params => this.subjectService.getSubject(params.id))
    ).subscribe(subject => {
        this.subject = subject;
        this.initializeFormGroup(subject);
    });
  }

  initializeFormGroup(subject: Subject) {
    this.subjectFormGroup = this.fb.group({
      name: [this.subject.name],
      exams: [this.subject.exams],
      semester: [this.subject.semester],
      average: [this.subject.average],
      credits: [this.subject.credits],
      hours: [this.subject.hours],
    });
  }

  getSubjectFromForm(): Subject {
    return {
      id: this.subject.id,
      name: this.subjectFormGroup.get('name').value,
      exams: this.subjectFormGroup.get('exams')?.value,
      semester: this.subjectFormGroup.get('semester')?.value,
      average: this.subjectFormGroup.get('average')?.value,
      credits: this.subjectFormGroup.get('credits')?.value,
      hours: this.subjectFormGroup.get('hours')?.value,
      usersList: []
    };
  }

  onSubmit() {
    this.subject = this.getSubjectFromForm();

    if (!!this.subject.id) {
      this.subjectService.updateSubject(this.subject).subscribe(
          () => this.router.navigate(['/home'])
      );
    } else {
      this.subjectService.createSubject(this.subject).subscribe(
          () => this.router.navigate(['/home'])
      );
    }
  }

}

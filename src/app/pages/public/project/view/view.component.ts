import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { getProjectDetails } from 'src/app/shared/store/project/project.action';
import { ProjectModel } from 'src/app/shared/store/project/project.model';
import { selectProjectDetails } from 'src/app/shared/store/project/project.selector';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  projectForm: FormGroup | any;
  details$: Observable<ProjectModel> = of();
  id?: string;
  constructor(private route: ActivatedRoute, private store: Store, protected formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.id = params.id;
      this.getDetails();
    });
  }
  getDetails() {
    this.store.dispatch(getProjectDetails(this.id));
    this.details$ = this.store.select(selectProjectDetails);
    this.initForm();
  }
  initForm(): void {
    this.details$.subscribe((details: ProjectModel) => {
      this.projectForm = this.formBuilder.group({
        name: new FormControl({value: details.name, disabled: true}),
        description: new FormControl({value: details.description, disabled: true}),
        created_by_name: new FormControl({value: details.created_by_name, disabled: true}),
      });
    });
  }
}

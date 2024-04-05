import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getProjectDetails } from '@shared/redux/project/project.action';
import { ProjectModel } from '@shared/redux/project/project.model';
import { selectProjectDetails } from '@shared/redux/project/project.selector';
import { selectIsRouteChild } from '@shared/redux/shared/shared.selector';
import { AuthService } from '@shared/services/auth/auth.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewComponent implements OnInit {
  projectForm: FormGroup | any;
  details$: Observable<ProjectModel> = of();
  id?: string;
  isRouteChild$: Observable<boolean> = of(false);
  constructor(
    public route: ActivatedRoute,
    private store: Store,
    protected formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }
  ngOnInit(): void {
    this.isRouteChild$ = this.store.select(selectIsRouteChild);
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
        name: new FormControl({ value: details.name, disabled: true }),
        description: new FormControl({
          value: details.description,
          disabled: true,
        }),
        created_by_name: new FormControl({
          value: details.created_by_name,
          disabled: true,
        }),
      });
    });
  }
  onUpdate(details: ProjectModel) {
    const encryptedID = this.authService.encrypt(details.id.toString());
    this.router.navigate(['project', encryptedID, 'update']);
  }
}

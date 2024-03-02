import { Component, OnInit } from '@angular/core';
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
  details$: Observable<ProjectModel> = of();
  constructor(private route: ActivatedRoute, private store: Store) {}
  ngOnInit(): void {
    console.log('may change');
    this.route.params.subscribe((params: any) => {
      this.getDetails(params.id);
    });
  }
  getDetails(id: string) {
    this.store.dispatch(getProjectDetails(id));
    this.details$ = this.store.select(selectProjectDetails);
  }
}

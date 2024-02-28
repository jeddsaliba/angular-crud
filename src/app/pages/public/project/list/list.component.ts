import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProjectList } from 'src/app/shared/store/project/project.action';
import { selectProjects } from 'src/app/shared/store/project/project.selector';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  params: any = {
    page: 1,
    limit: 5
  };
  constructor(
    private store: Store
  ) {}
  ngOnInit(): void {
    this.store.dispatch(getProjectList(this.params));
    this.store.select(selectProjects).subscribe((res) => {
      console.log("res", res);
    });
  }
}

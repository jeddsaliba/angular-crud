import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProjectList } from 'src/app/shared/store/project/project.action';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  params: any = {
    page: 1,
    limit: 10
  };
  constructor(
    private store: Store
  ) {}
  ngOnInit(): void {
    this.getList();
  }
  getList() {
    this.store.dispatch(getProjectList(this.params));
  }
  onGoToPage(page: any): void {
    this.params = {...this.params, page};
    this.getList();
  }
  onChangeLimit(limit: number): void {
    this.params = {...this.params, limit};
    this.getList();
  }
}

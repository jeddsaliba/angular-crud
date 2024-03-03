import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUserList } from 'src/app/shared/store/user/user.action';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  params: any = {
    page: 1,
    limit: 10,
    sort: 'id',
    direction: 'asc'
  };
  constructor(
    private store: Store
  ) {}
  ngOnInit(): void {
    this.getList();
  }
  getList() {
    this.store.dispatch(getUserList(this.params));
  }
  onGoToPage(page: number): void {
    this.params = {...this.params, page};
    this.getList();
  }
  onChangeLimit(limit: number): void {
    this.params = {...this.params, limit};
    this.getList();
  }
  onSort(sort: {sort: string, direction: string} | any): void {
    this.params = {...this.params, ...sort};
    this.getList();
  }
  onSearch(q: string): void {
    this.params = {...this.params, q};
    this.getList();
  }
}


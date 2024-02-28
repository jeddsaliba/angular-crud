import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LimitOptionsModel, limitOptions } from './limit/limit';
import { Store } from '@ngrx/store';
import { selectTableCurrentPage, selectTableData, selectTableHeads, selectTableTotal } from 'src/app/shared/store/datatable/datatable.selector';
import { Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html'
})
export class DatatableComponent implements OnInit {

  limits: LimitOptionsModel[] = limitOptions;
  tableData$: Observable<any> = of([]);
  tableHeads$: Observable<any> = of([]);
  total = 0;
  currentPage = 1;
  order: any = {
    column: 'id',
    direction: 'desc'
  };
  limit = new FormControl(10);
  @Output() eventOnGotoPage: EventEmitter<any> = new EventEmitter();
  @Output() eventOnChangeLimit: EventEmitter<any> = new EventEmitter();

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.tableHeads$ = this.store.select(selectTableHeads);
    this.tableData$ = this.store.select(selectTableData);
    this.store.select(selectTableTotal).subscribe((total: number) => {
      this.total = total;
    });
    this.store.select(selectTableCurrentPage).subscribe((current_page: number) => {
      this.currentPage = current_page;
    })
  }
  // onHandleGoToPage(page: any): void {
  //   this.currentPage = page.pageIndex + 1;
  //   this.eventOnGotoPage.emit(this.currentPage);
  // }
  // onHandleChangeLimit(e: MatSelectChange): void {
  //   this.eventOnChangeLimit.emit(e.value);
  // }
  // onHandleSearch(search: any): void {
  //   /* this.eventOnSearch.emit(search.target.value); */
  // }
  // onHandleSortOrder(canSort: boolean, column: string, direction: string): void {
  //   /* if (!canSort) { return; }
  //   this.eventOnSortOrder.emit({column, direction}); */
  // }
  // reloadData(): void {
  //   /* this.isLoaded = false; */
  // }
  // changeFilterStatus(e: any): void {
  //   /* this.reloadData(); */
  // }
  // onHandleView(data: any): void {
  //   /* this.eventOnView.emit(data); */
  // }
  // onHandleEdit(data: any): void {
  //   /* this.eventOnEdit.emit(data); */
  // }
  // onHandleDelete(data: any): void {
  //   /* this.eventOnDelete.emit(data); */
  // }
  // onHandleDownload(data: any): void {
  //   /* window.open(data.file_url, '_blank'); */
  // }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTableCurrentPage, selectTableData, selectTableHeads, selectTableMessage, selectTableParams, selectTableTotal } from 'src/app/shared/store/datatable/datatable.selector';
import { Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html'
})
export class DatatableComponent implements OnInit {

  limitOptions: number[] = [10, 25, 50, 100];
  tableData$: Observable<any> = of([]);
  tableHeads$: Observable<any> = of([]);
  tableMessage$: Observable<string> = of('');
  total = 0;
  currentPage = 1;
  order: any = {
    column: 'id',
    direction: 'desc'
  };
  params: any;
  limit = new FormControl(10);
  @Output() eventOnGotoPage: EventEmitter<any> = new EventEmitter();
  @Output() eventOnChangeLimit: EventEmitter<any> = new EventEmitter();
  @Output() eventOnSearch: EventEmitter<string> = new EventEmitter();
  @Output() eventOnSort: EventEmitter<any> = new EventEmitter();
  @Output() eventOnCreateUpdate: EventEmitter<any> = new EventEmitter();
  @Output() eventOnView: EventEmitter<any> = new EventEmitter();
  @Output() eventOnEdit: EventEmitter<any> = new EventEmitter();
  @Output() eventOnDelete: EventEmitter<any> = new EventEmitter();
  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.tableHeads$ = this.store.select(selectTableHeads);
    this.tableData$ = this.store.select(selectTableData);
    this.tableMessage$ = this.store.select(selectTableMessage);
    this.store.select(selectTableTotal).subscribe((total: number) => {
      this.total = total;
    });
    this.store.select(selectTableCurrentPage).subscribe((current_page: number) => {
      this.currentPage = current_page;
    });
    console.log("hey");
    this.store.select(selectTableParams).subscribe((params: any) => {
      this.params = params;
      console.log("params", this.params);
    });
  }
  onCreateUpdate(data?: any | null): void {
    this.eventOnCreateUpdate.emit(data);
  }
  onGoToPage(page: any): void {
    this.currentPage = page.pageIndex + 1;
    this.eventOnGotoPage.emit(this.currentPage);
  }
  onChangeLimit(e: MatSelectChange): void {
    this.eventOnChangeLimit.emit(e.value);
  }
  onSearch(search: any): void {
    this.eventOnSearch.emit(search.target.value);
  }
  onSort(canSort: boolean, sort: string, direction: string): void {
    if (!canSort) { return; }
    this.eventOnSort.emit({sort, direction});
  }
  onView(data: any): void {
    this.eventOnView.emit(data);
  }
  onEdit(data: any): void {
    this.eventOnEdit.emit(data);
  }
  onDelete(data: any): void {
    this.eventOnDelete.emit(data);
  }
}

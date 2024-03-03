import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth/auth.service';
import { getProjectList } from 'src/app/shared/store/project/project.action';
import { ProjectModel } from 'src/app/shared/store/project/project.model';
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
    private authService: AuthService,
    private store: Store,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getList();
  }
  getList() {
    this.store.dispatch(getProjectList(this.params));
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
  onCreateUpdate(data?: ProjectModel | null) {
    if (data) {
      const encryptedID = this.authService.encrypt(data.id.toString());
      this.router.navigate(['project', encryptedID, 'update']);
      return;
    }
    this.router.navigate(['project/create']);
  }
  onView(data: ProjectModel) {
    const encryptedID = this.authService.encrypt(data.id.toString());
    this.router.navigate(['/project', encryptedID]);
  }
}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { logout } from 'src/app/shared/store/user/user.action';
import { UserModel } from 'src/app/shared/store/user/user.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  user$: UserModel | undefined;
  appName: String = environment.appName;
  constructor(private router: Router, private store$: Store) {}
  ngOnInit(): void {
    this.user$ = JSON.parse(sessionStorage.getItem('user') || '{}');
  }
  onHandleLogout(): void {
    this.store$.dispatch(logout());
  }
  onHandleGoToProfile(): void {
    /* this.router.navigate([`/profile/${this.user.id}/${this.user?.user_profile?.first_name} ${this.user?.user_profile?.last_name}`]); */
  }
}

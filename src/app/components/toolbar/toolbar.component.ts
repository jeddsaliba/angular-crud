import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { AuthModel } from '@shared/redux/auth/auth.model';
import { loggedInUser, logout } from '@shared/redux/auth/auth.action';
import { Observable, of } from 'rxjs';
import { selectLoggedInUser } from '@shared/redux/auth/auth.selector';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit {
  loggedInUser$: Observable<AuthModel> = of();
  appName: string = environment.appName;
  constructor(public dialog: MatDialog, private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(loggedInUser());
    this.loggedInUser$ = this.store.select(selectLoggedInUser);
  }
  onLogout(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: 'Confirm',
        message: 'Are you sure you want to log out?',
        cancelButton: 'Cancel',
        confirmButton: 'Yes'
      }
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) this.store.dispatch(logout());
    });
  }
}

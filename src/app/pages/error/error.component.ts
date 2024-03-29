import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Urls } from '@enum/urls';
import { AuthService } from '@shared/services/auth/auth.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorComponent implements OnInit {
  token$: Observable<string> = of();
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.token$ = this.authService.getAccessToken();
  }
  goTo() {
    this.token$.subscribe((token: string) => {
      if (token) {
        this.router.navigate([`${Urls.dashboard}`]);
        return;
      }
      this.router.navigate([`${Urls.login}`]);
    }).unsubscribe();
  }
}

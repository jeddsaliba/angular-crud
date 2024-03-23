import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Urls } from '@enum/urls';
import { AuthService } from '@shared/services/auth/auth.service';
import { filter, map } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.getAccessToken().pipe(
    filter((token) => token !== undefined),
    map((token) => {
      if (!token) {
        router.navigate([`${Urls.login}`]);
        return false;
      }
      return true;
    })
  )
};

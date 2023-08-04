import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const tableGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (localStorage.getItem('token360')) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};

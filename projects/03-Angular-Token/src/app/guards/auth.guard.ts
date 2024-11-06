import { AppRoutes } from '@/app.routes';
import { LocalKeys, LocalManagerService } from '@/services';
import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const authGuard: CanActivateChildFn = (childRoute, state) => {
  const localManager = inject(LocalManagerService);
  const router = inject(Router);

  const token = localManager.getElement(LocalKeys.token);
  
  // if(!token)
  if(token)
      router.navigate([AppRoutes.public.login],{replaceUrl:true})

  return true;
};

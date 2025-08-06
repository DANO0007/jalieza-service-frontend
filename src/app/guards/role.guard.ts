// guards/role.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
  const expectedRoles: string[] = route.data['roles'];
  const userRole = this.authService.getUserRole();

  console.log('Rol del usuario:', userRole);
  console.log('Roles permitidos:', expectedRoles);

  if (userRole && expectedRoles.includes(userRole)) {
    return true;
  }

  this.router.navigate(['/home']);
  return false;
}

}

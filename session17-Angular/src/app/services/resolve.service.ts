import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<any> {

  constructor(private global : GlobalService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // throw new Error('Method not implemented.');
   return this.global.gallery()
  }
}

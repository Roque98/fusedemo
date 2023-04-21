import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GroupService } from './group.service';


@Injectable({
    providedIn: 'root'
})
export class GroupResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _groupService: GroupService) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this._groupService.getData();
    }
}

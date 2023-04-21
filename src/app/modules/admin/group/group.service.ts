import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Group } from './group.type';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  apiUrl = environment.API_URL;
  idRoot: BehaviorSubject<string> = new BehaviorSubject('1');
  _data: BehaviorSubject<Group[]> = new BehaviorSubject(null);

  /**
    * Constructor
    */
  constructor(
    private Http: HttpClient,
  ) { }

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Getter for data
   */
  get data$(): Observable<Group[]> {
    return this._data.asObservable();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Get all groups
   * @returns Observable<Group[]>
   * @memberof GroupService
  */
  getData() {
    return this.Http.get<Group[]>(`${this.apiUrl}/group`).pipe(
      tap((response) => {
        this._data.next(response);
      })
    );
  }

  /**
   * Get group by id
   * @param id
   * @returns Observable<Group>
   * @memberof GroupService
   */
  getGroupById(id: string): Observable<Group[]> {

    if (!id) {
      return this.getData();
    }

    return this.Http.get<Group[]>(`${this.apiUrl}/group/${id}`)
      .pipe(
        tap((response) => {
          this._data.next(response);
        }
        )
      );
  }
}

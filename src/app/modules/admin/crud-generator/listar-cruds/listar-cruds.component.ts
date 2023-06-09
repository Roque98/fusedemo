import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Crud } from '../crud.type';
import { CrudsService } from '../cruds.service';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-listar-cruds',
  templateUrl: './listar-cruds.component.html',
  styles: [
    `
      
    `
  ]
})
export class ListarCrudsComponent implements OnInit  {

  
  @ViewChild(MatSort) sort: MatSort;
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  crud: Crud;
  loading = false;
  loading2 = false;
  idCrud = "";
  displayedColumns = [];
  dataSource = null;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Constructor
   */
  constructor(
    private crudService: CrudsService,
    private activateRoute: ActivatedRoute,
    private _liveAnnouncer: LiveAnnouncer
  ) {

    // Get param idCrud
    this.activateRoute.paramMap.subscribe(params => {
      let paramIdcrud = params.get('idCrud');
      this.loading = false;

      // if exist paramIdCrud
      if (paramIdcrud) {
        this.idCrud = paramIdcrud;
        this.crudService.getData(paramIdcrud)
          .pipe(takeUntil(this._unsubscribeAll))
          .subscribe(() => {
            this.loading = true;
          })
      }

    });

    // Subscribe data
    this.crudService.data$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe({
        next: (response: Crud[]) => {
          // Make select
          if (response) {
            this.crud = response[0];
            // Get columns
            this.displayedColumns = this.crud.items.map(crudItems => crudItems.name)

            // Call service
            this.crudService.makeSelect(this.idCrud, { filtersQuery: [] })
              .pipe(takeUntil(this._unsubscribeAll))
              .subscribe((response2) => {
                console.log(response2);
                this.dataSource = new MatTableDataSource(response2.result);
                this.dataSource.sort = this.sort;
              })

            console.log(this.crud)
            console.log(this.displayedColumns)
          }
        }
      })
  }

  ngOnInit(): void {
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.

    console.log(sortState)

    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}

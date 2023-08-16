import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TablasService } from './Tablas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IColumna, ITabla, ITablaAcciones } from './tablas.dto';
import { MatDialog } from '@angular/material/dialog';
import { ModalDialogsComponent } from './modal-dialogs/modal-dialogs.component';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.scss']
})
export class TablasComponent implements OnInit, AfterViewInit {

  @ViewChild('tableGeneric', { read: MatSort }) tableGenericMatSort: MatSort;
  tableData: MatTableDataSource<any> = new MatTableDataSource();
  tableColumns: string[] = [];
  arrayData: any[] = [];
  isLoading: boolean = true;
  tabla: ITabla;

  // -----------------------------------------------------------------------------------------------------
  // @ Constructor
  // -----------------------------------------------------------------------------------------------------

  constructor(
    private _tablasService: TablasService,
    private _activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private _router: Router
  ) {

  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {

    this._getTableById(this._getIdFromRoute());
  }

  /**
     * After view init
     */
  ngAfterViewInit(): void {
    // Make the data source sortable
    this.tableData.sort = this.tableGenericMatSort;
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index: number, item: any): any {
    return item.id || index;
  }

  /**
   * sortData
   * @param event
   */
  sortData(event: any): void {

    const property = event.active;

    const data = this.tableData.data.slice();


    if (!event.active || event.direction === '') {
      this.tableData.data = data;
      return;
    }

    this.tableData.data = data.sort(
      (a, b) => {
        const isAsc = event.direction === 'asc';
        return this._compare(a[property], b[property], isAsc);
      }
    );
  }



  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Get id from route
   * @returns string
  */
  private _getIdFromRoute(): string {
    return this._activatedRoute.snapshot.paramMap.get('id');
  }

  /**
   * Get table by id from service
   * @param id
  */
  private _getTableById(id: string): void {
    this._tablasService.getTablaBydId(id).subscribe(
      (response) => {
        console.log(response);
        this.tabla = response;
        this.tableData.data = response.datos;
        this.tableColumns = this._getArrayNameColumns(response.columnas);
        this.tableColumns.push('acciones');
        // this.tableData.data.forEach(
        //   (element) => {
        //     element.acciones = this.tabla.accionesPorRegistro.map(
        //       (accion) => {
        //         if(!accion.ejecutarSp){ 
        //           return {
                  
        //             ...accion,
        //             urlAccion: accion.urlAccion + '/' + element.id,
  
        //           }
        //         } else {
        //           return {
        //             ...accion,
        //            }
        //         }
        //       }
        //     )
        //   }
        // );
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.isLoading = false;
      }
    )
  }

  /**
   * Get array name columns from IColumna[]
   * @param columnas
   * @returns string[]
  */
  private _getArrayNameColumns(columnas: IColumna[]): string[] {
    let arrayNameColumns: string[] = [];
    columnas.forEach((columna) => {
      arrayNameColumns.push(columna.nombreColumna);
    });
    return arrayNameColumns;
  }

  /**
 * Compare
 * @param a
 * @param b
 * @param isAsc
 * @returns number
  */
  private _compare(a: number | string, b: number | string, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  /**
   * Apply filter
   * @param event
   * @returns void
   */

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableData.filter = filterValue.trim().toLowerCase();

  }

  /**
   * Open dialog
   * @returns void
   */

  openDialog(accion: ITablaAcciones, data: any) {
    const dialogRef = this.dialog.open(ModalDialogsComponent, {
      data: accion.modal
    });

    dialogRef.afterClosed().subscribe(result => {

      if(result){
        if(accion.ejecutarSp){
          this._tablasService.executeSpAccion(accion, data).subscribe({
            next: (response) => {
              if(accion.urlAccion){
                this._router.navigate([accion.urlAccion]);
              } else {
                // Recargar tabla
                this._getTableById(this._getIdFromRoute());
              }
            },
            error: (error) => {
              console.log(error);
            },
            complete: () => {
              console.log('complete');
            }
          });
        } else {
          this._router.navigate([accion.urlAccion]);
        }
      } else {
        console.log('cancel');
      }
    });
  }


  /**
   * Procesar click en boton de accion
   */
  procesarClickAccion(accion: ITablaAcciones, row: any): void {

    if (accion.abrirModal) {
      this.openDialog( accion, this.eliminarPropiedadAcciones(row));
    } else {
      // redireccionar a la url
      this._router.navigate([accion.urlAccion]);
    }
  }

  /*
  * Elimina la propiedad acciones del objeto
  */
  eliminarPropiedadAcciones(objeto: any): any {
    const { acciones, ...rest } = objeto;
    return rest;
  }


  getDatosPorColumna(row) {
    return {
      idTabla: this.tabla.id,
      datos: row
    };
  }
}

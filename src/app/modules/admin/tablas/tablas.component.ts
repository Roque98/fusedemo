import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TablasService } from './Tablas.service';
import { ActivatedRoute } from '@angular/router';
import { IColumna, ITabla, ITablaAccion } from './tablas.dto';

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
    private _activatedRoute: ActivatedRoute
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
        this.tabla = response;
        this.tableData.data = response.datos;
        this.tableColumns = this._getArrayNameColumns(response.columnas);
        this.tableColumns.push('acciones');
        this.tableData.data.forEach(
          (element) => {
            element.acciones = this.tabla.acciones.map(
              (accion) => {
                return {
                  nombre: accion.nombreAccion,
                  icono: accion.icono,
                  ruta: accion.urlAccion + '/' + element.id
                }
              }
            ).filter(accion => accion.nombre.toLocaleLowerCase() != 'crear')
          }
        );
        console.log(this.tableData.data);
        console.log(this.tabla)
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

  /*
   * Get Crear accion 
  */  
  getCrearAccion(): string {
    return this.tabla.acciones.find(accion => accion.nombreAccion.toLocaleLowerCase() == 'crear').urlAccion;
  }
}

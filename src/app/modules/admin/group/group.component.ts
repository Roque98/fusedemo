import { Component, OnInit } from '@angular/core';
import { ArrayDataSource } from '@angular/cdk/collections';
import { NestedTreeControl } from '@angular/cdk/tree';
import { GroupService } from './group.service';
import { Group } from './group.type';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styles: [`

  /* Regla para ocultar y mostrar los elementos hijos */
  .example-tree-invisible {
    display: none;
  }

  /* Regla para hacer que los componentes se muestren en filas*/
  .example-tree-node {
    display: block;
  }

  /*Reiniciar marges y estilo*/
  .example-tree ul,
  .example-tree li {
    margin-top: 0;
    margin-bottom: 0;
    list-style-type: none;
  }

  /* Agregar un margen de forma recursiva a cada elemento hijo*/
  .example-tree-node .example-tree-node {
    padding-left: 40px;
  }
  `]
})
export class GroupComponent implements OnInit {

  treeControl = new NestedTreeControl<Group>(node => node.childrens);
  dataSource = new ArrayDataSource(null);
  data: Group[] = [];
  hasChild = (_: number, node: Group) => !!node.childrens && node.childrens.length > 0;
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  /**
    * Constructor
    */
  constructor(
    private _groupService: GroupService,
    private _activeRoute: ActivatedRoute,
  ) {
    this._groupService.data$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((data) => {
        // log data
        console.log(data);
        // Store the data
        this.dataSource = new ArrayDataSource(data);
      });

    // subscribe _idRoot services
    this._groupService.idRoot.pipe(takeUntil(this._unsubscribeAll)).subscribe((idRoot) => {
      this._groupService.getGroupById(idRoot).subscribe((data) => {
        this._groupService._data.next(data);
      });
    });
  }

  ngOnInit(): void {

  }

}

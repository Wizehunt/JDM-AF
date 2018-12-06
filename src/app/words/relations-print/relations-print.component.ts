import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Relation} from '../words.service';

@Component({
  selector: 'app-relations-print',
  templateUrl: './relations-print.component.html',
  styleUrls: ['./relations-print.component.scss']
})
export class RelationsPrintComponent implements OnInit, OnChanges {

  @Input()
  relations: MatTableDataSource<Relation>;

  displayedColumns: string[] = ['nom', 'poid'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.relations.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.relations.sortingDataAccessor = (item, property) => {
      switch (property) {
        case('nom') :
          console.log(item.text.toLocaleLowerCase());
          return item.text.toLocaleLowerCase();
        default: return item[property];
      }
    };

    this.relations.sort = this.sort;
    this.relations.paginator = this.paginator;
  }


}
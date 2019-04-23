import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import {MatDialog, MatDialogConfig} from "@angular/material";

import { PersonService } from '../../services/person.service';
import { ShowComponent } from './show/show.component';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  displayedColumns: string[] = ['rut', 'nombre', 'calle', 'comuna', 'options'];
  dataSource: MatTableDataSource<any>;

  private dataFilter:any[]=[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _personService: PersonService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.getPersons();
  }

  getPersons(){
    this._personService.get()
    .subscribe(res=>{
    
      this.dataFilter=res.message.filter(
        item => item.activo); 
      this.dataSource = new MatTableDataSource(this.dataFilter); 
       
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort; 
      
    },err=>{
      console.log(err);
    })
  }

  applyFilter(filterValue: string) {
 
    const list = this.dataFilter.filter(
      x => x.direccion.calle.toLowerCase().includes(filterValue.toLowerCase()) ||
      x.direccion.comuna.nombre.toLowerCase().includes(filterValue.toLowerCase()));

      this.dataSource = new MatTableDataSource(list); 
       
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort; 

  }

  show(person){
    const dialogRef = this.dialog.open(ShowComponent, {
      width: '350px',
      data: {person: person}
    });

    dialogRef.afterClosed().subscribe(result => {
      
     
     
    });  }


     cambiarNombre(nombre){
      let regex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
      return regex.exec(nombre)[0];
      
      }
}


//app.component.ts
import { Component, ViewChild } from '@angular/core';

import { MatDialog, MatTable } from '@angular/material';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

export interface UsersData {
  date:string;
  name: string;
  id:number;

}

const ELEMENT_DATA: UsersData[] = [
  {id: 1 ,date: '1994-20-10', name: 'Leela Madhuri'},
  {id: 2,date: '1994-09-12',  name: 'Anand Avinash'},
  {id: 3, date: '1997-03-06', name: 'Vinay Kumar'},
  {id: 4, date: '1970-20-08', name: 'Subhashini'} 
];


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  displayedColumns: string[] = ['id', 'date', 'name', 'action'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatTable) table: MatTable<any>;

  constructor(public dialog: MatDialog) {}

 openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }
  

  addRowData(row_obj){
    var d = new Date();
    this.dataSource.push({
      id:row_obj.id,
      date:row_obj.date,
      name:row_obj.name
    });
    this.table.renderRows();
    
  }
  updateRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
      }
      return true;
    });
  }
  deleteRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }


}


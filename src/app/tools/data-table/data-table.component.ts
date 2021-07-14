import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { IDataTableOptions } from './data-table.interface';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent implements OnInit {
  @Input("data") set data (value){ 
    if(isNullOrUndefined(value)) return;
     
    this.onCreate(value);
  }

  @Output("edit") editEmitter = new EventEmitter();

  public COLUMNS: string[] = [];
  public tableOptions : IDataTableOptions;

  constructor() { }

  ngOnInit(){
  }

  onCreate(value : any){
    this.tableOptions = value;
    this.COLUMNS = this.tableOptions.columns.filter(i => i.visibled).map(i => i.field);
    if(this.tableOptions.editButton) this.COLUMNS.unshift(this.tableOptions.widgetId + 'btnVisualizar');

    //Generic - implement in component
    this.tableOptions.onCRUDButtons = (value) => this.onButtonsExecute(value);
    console.log(this.tableOptions,this.COLUMNS);
  }


  onButtonsExecute(value : string[]){
    switch(value[0]){
      case "create":{
        // doing something
        alert(value)
        break;
      }case "update":{
        // doing another something
        alert(value);
        this.editEmitter.emit(value[1]);
        break;
      }case "delete":{
        // doing another something
        break;
      }
      
    }
  }

}

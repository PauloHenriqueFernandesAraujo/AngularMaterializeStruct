import { Component, OnInit } from '@angular/core';
import { IDataTableOptions} from 'src/app/tools/data-table/data-table.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public userTableOptions : IDataTableOptions;
  constructor() { }

  ngOnInit() {
    this.userTableOptions = <IDataTableOptions>
    { 
      widgetId: "userTable",
      title: "User Table",
      editButton: true,
      addButton: true,
      columns: [
        { name : 'Descrição', width : '50', field: "description", visibled : true },
        { name : 'Letra', width : '50', field: "letter", visibled : true}
      ], 
      data: [
        { id: 1, description: 'Hydrogen', letter: 'H' },
        { id: 2, description: 'Helium', letter: 'He' },
      ]
    };
  }

  onEdit(value){
    console.log(value)
  }

}

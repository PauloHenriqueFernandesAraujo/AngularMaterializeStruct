import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GenericModule } from "../generic/generic.module";
import { DataTableComponent } from "./data-table/data-table.component";
import { ToolsComponent } from "./tools.component";
import {MatTableModule} from '@angular/material/table';

@NgModule({
    declarations:[
        ToolsComponent,
        DataTableComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        GenericModule,
        MatTableModule
    ],
    exports: [
        ToolsComponent,
        DataTableComponent
    ]
})

export class ToolsModule { }
import { Component, OnInit } from '@angular/core';
import { ParentClass } from '../generic/parent.class';
import { IHeader } from './header.interface';
declare const $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends ParentClass<IHeader> implements OnInit {

  public routeApi: string = this.getApiRoot();

  public routeForms: IHeader[] =
    [{
      nameForm: "Home",
      route: this.routeApi,
      icon: "home"
    },
    {
      nameForm: "Usuários",
      route: this.routeApi + "/users",
      icon: "account_box"
    }];

  constructor() {
    super();
  }

  ngOnInit(): void {
    $(document).ready(() => {
      $('.sidenav')
        .sidenav()
        .on('click tap', 'li a',
          () => {
            $('.sidenav').sidenav('close');
          });
    });
  }

}

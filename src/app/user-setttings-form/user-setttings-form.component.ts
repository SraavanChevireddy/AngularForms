import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-setttings-form',
  templateUrl: './user-setttings-form.component.html',
  styleUrls: ['./user-setttings-form.component.css']
})
export class UserSetttingsFormComponent implements OnInit {

  userSettings : UserSettings = {
    name : 'Sraavan Chevireddy',
    emailOffers : false,
    interfaceStyle : 'dark',
    notes : 'This is sample notes',
    subscription : 'Annual'
  }
  
  copyWithSpreadOperator = { ...this.userSettings }
  copyWithoutSpreadOperator = this.userSettings


  constructor() { }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-show-person-list',
  templateUrl: './show-person-list.component.html',
  styleUrls: ['./show-person-list.component.css']
})
export class ShowPersonListComponent {

  persons = [{
    id: 1,
    name: 'r0ngsh3n',
    gender: 'male'
  },
  {
    id: 2,
    name: 'johndoe',
    gender: 'male'
  },
  {
    id: 3,
    name: 'jeandoe',
    gender: 'female'
  }
  ]

}

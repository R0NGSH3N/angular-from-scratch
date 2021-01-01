import { Component, OnInit } from '@angular/core';
import { PersonListService } from '../person-list.service';

@Component({
  selector: 'app-show-person-list',
  templateUrl: './show-person-list.component.html',
  styleUrls: ['./show-person-list.component.css']
})
export class ShowPersonListComponent implements OnInit {
  persons; 

  constructor(private service: PersonListService){}


  ngOnInit(){
    this.persons = this.service.get();
  }


}

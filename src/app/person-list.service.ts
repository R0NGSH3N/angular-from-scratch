import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonListService {

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

  get(){
    return this.persons;
  }

  add(value){
    this.persons.push(value);
  }

  delete(value){
    if(this.persons.indexOf(value) >= 0 ){
      this.persons.splice(this.persons.indexOf(value));
    }
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderpipe'
})
export class GenderpipePipe implements PipeTransform {

  transform(persons, ...args: unknown[]): string{
    const genders = [];
    persons.forEach( element => {
        if(genders.indexOf(element.gender) <= -1){
          genders.push(element.gender);
        }
    });

    return genders.join(', ');
  }
}

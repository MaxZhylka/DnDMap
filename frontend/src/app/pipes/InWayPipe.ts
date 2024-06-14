import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterInWay'
})
export class FilterInWayPipe implements PipeTransform {

  transform(characters: any[], inWay: boolean): any[] {
    if (!characters || characters.length === 0) {
      return [];
    }
    return characters.filter(character => character.inWay === inWay);
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {
    transform(items: any[], attr: string): any {
      if(!items || !items.length) { return items; }
      return items.reduce((a, b) => parseInt(a) + parseInt(b[attr]), 0);
  }
}

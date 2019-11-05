import { Pipe, PipeTransform } from '@angular/core';

// search the surface level of an array of plain objects, ignoring subdocuments (for now)
const quicksrch = (items: any[], str: string) => {
  const found = [];
  
  items.forEach((d) => {
    const keys = Object.keys(d);
    let i = 0;

    while (i < keys.length) {
      const k = keys[i];
      const val = d[k];

      if (
        typeof val !== 'object' 
        && String(val).includes(str)
      ) {
        found.push(d);
        break;
      }

      i += 1;
    }
  });

  return found;
};

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (searchText.length === 0) return items;
    return quicksrch(items, searchText);
  }

}

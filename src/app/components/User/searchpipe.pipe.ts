import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {

  transform(items: any[], searchTerm: string): any[] {
    if (!items || !searchTerm) {
      return items;
    }

    searchTerm = searchTerm.toLowerCase();

    return items.filter(item => {
      console.log(item);
      
      // You can customize this logic based on your data structure
      // For example, if items is an array of objects and you want to search in a specific property:
      // return item.propertyName.toLowerCase().includes(searchTerm);
      
      // For simplicity, let's assume items is an array of strings
      return item.companyname.toLowerCase().includes(searchTerm) || 
      item.city.toLowerCase().includes(searchTerm) ||
      item.state.toLowerCase().includes(searchTerm) ||
      item.country.toLowerCase().includes(searchTerm)
    });
  }

}

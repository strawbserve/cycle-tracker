import { Injectable } from '@angular/core';

@Injectable()
export class UtilProvider {

  constructor() {

  }

  getList() {
console.log('getList');
    if(localStorage.hasOwnProperty('myList')) {
      var list = localStorage.getItem('myList');
      return list.split(':');
    }
    return [];
  }

  addItem(item) {
console.log('addItem');
    if (item) {
      var list = this.getList();
      list.push(item);
      localStorage.setItem('myList', list.join(":"));
    }
  }

  clearList() {
console.log('clearList');
    localStorage.removeItem('myList');
    alert('List cleared.');
  }

}

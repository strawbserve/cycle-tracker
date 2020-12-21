import { Component } from '@angular/core';
import { UtilProvider } from '../shared/util-provider.ts';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [UtilProvider]
})
export class Tab2Page {

  constructor(private UtilProvider: UtilProvider) {
console.log('construct tab2');
  }

  input = {}

  addItem() {
    this.UtilProvider.addItem(this.input.item);
    var formEl = document.getElementById('item');
    formEl.value = '';
       
  }

  clearList() {
    this.UtilProvider.clearList();
  }

}

import { Component } from '@angular/core';
import { UtilProvider } from '../shared/util-provider';

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

  input = {
    item: ''
  }

  addItem() {
    this.UtilProvider.addItem(this.input.item);
    //this.UtilProvider.cycleItem(this.input.item);
    this.input.item = '';
  }

  clearList() {
    this.UtilProvider.clearList();
  }

}

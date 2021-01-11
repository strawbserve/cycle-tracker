import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UtilProvider } from '../shared/util-provider';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [UtilProvider]
})
export class Tab1Page {

  myList = []

  constructor(
    private UtilProvider: UtilProvider,
    private storage: Storage
    ) {
console.log('construct tab1');
  }

  ionViewDidEnter() {
console.log('ionViewDidEnter tab1');
    this.UtilProvider.getList().then((list) => {
console.log('list', list);
      if (null == list) { list = []; }
      this.myList = list;
    });
  }

  cycle(item) {
console.log('cycle', item);
    this.UtilProvider.cycleItem(item);
  }

  reset(item) {
console.log('reset', item);
    this.UtilProvider.resetItem(item);
    this.UtilProvider.cycleItem(item);
  }

  remove(item) {
console.log('remove', item);
    var list = this.UtilProvider.removeItem(item);
    list.then(() => {
        this.ionViewDidEnter();
    });
  }

  calculateFrequency(item) {
//console.log('calculateFrequency', item);
    return this.UtilProvider.calculateFrequency(item);
  }

}

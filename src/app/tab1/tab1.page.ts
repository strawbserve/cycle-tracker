import { Component } from '@angular/core';
import { UtilProvider } from '../shared/util-provider.ts';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [UtilProvider]
})
export class Tab1Page {

  constructor(private UtilProvider: UtilProvider) {
console.log('construct tab1');
  }

  ionViewDidEnter() {
console.log('ionViewDidEnter');
    this.myList = this.UtilProvider.getList();
  }

}

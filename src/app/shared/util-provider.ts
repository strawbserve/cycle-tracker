import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class UtilProvider {

  const listName = 'myList';

  constructor(private storage: Storage) {
  }

  getList() {
//console.log('listName', this.listName);
    var list = this.storage.get(this.listName);
    return list;
  }

  addItem(item) {
//console.log('UtilProvider.addItem');
    if (item) {
      this.getList().then((list) => {
        var itemObj = this.cycle({
          'name': item,
          'cycles': [],
          'frequency': 0
        });
        if (null == list) {
          list = [];
        }
        list.push(itemObj);
        this.storage.set(this.listName, list);
      });
    }
  }

  cycle(obj) {
    var timestamp = Date.now(); // timestamp in milliseconds
    obj.cycles.unshift(timestamp);
    obj.frequency = this.calculateFrequency(obj.cycles);
    return obj;
  }

  cycleItem(obj) {
//console.log('UtilProvider.cycleItem', obj);
    obj = this.cycle(obj);
    this.getList().then((list) => {
        if (null == list) {
          list = [];
        }
        for (var i=0; i<list.length; i++) {
            if (list[i].name == obj.name) {
                list[i].cycles = obj.cycles;
                list[i].frequency = this.calculateFrequency(obj.cycles);
            }
        }
        this.storage.set(this.listName, list);
    });
  }

  calculateFrequency(cycles) {
//console.log('UtilProvider.calculateFrequency', cycles);
    var frequency = 0
    var diffs = [];
    var total = 0;
    var average = 0;
    for (var i=0; i<cycles.length; i++) {
      if (0 != i) {
          var diff = cycles[i-1] - cycles[i];
          total += diff/1000;
          diffs.push(diff);
      }
    }
    average = total/diffs.length;
    if (0 != diffs.length) {
      frequency = Number((average/60/60/24).toPrecision(1));
    }
    return frequency;
  }

  clearList() {
//console.log('UtilProvider.clearList');
    this.storage.clear();
    alert('List cleared.');
  }

  resetItem(item) {
    item.cycles = [];
    item.frequency = 0;
    this.cycleItem(item);
  }

}

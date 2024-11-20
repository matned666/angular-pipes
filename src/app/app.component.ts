import { Component } from '@angular/core';
import {DatePipe, DecimalPipe} from "@angular/common";
import {TemperaturePipe} from "./temperature.pipe";
import {SortPipe} from "./sort.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    DatePipe,
    DecimalPipe,
    TemperaturePipe,
    SortPipe
  ]
})
export class AppComponent {
  currentDate = new Date();
  currentTemperaturs = {
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };

  historicTemperatures = [
    25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
  ];

  onReset(num: string | number) {
    const newTemps = [...this.historicTemperatures];
    let index = 0;
    for (let i = 0; i < newTemps.length; i++) {
      if (num === newTemps[i]) {
        index = i;
        break;
      }
    }
    newTemps[index] = 18;
    this.historicTemperatures = newTemps;
  }
}

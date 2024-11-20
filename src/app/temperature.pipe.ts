import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "appTemperature",
  standalone: true

})
export class TemperaturePipe implements PipeTransform {


  transform(value: string | number | null,
            inT: 'C' | 'F',
            outT?: 'C' | 'F') {

    if (!value) {
      return value;
    }

    let val: number;
    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }

    let outVal: number;

    const o = outT? outT : inT;

    if (inT === 'F' && outT === 'C') {
      outVal = (val - 32) * (5 / 9);
    } else if (inT === 'C' && outT === 'F') {
      outVal = val * (9 / 5) + 32;
    } else {
      outVal = val;
    }

    return outVal + (o === 'C' ? ' °C' : ' °F')

  }

}

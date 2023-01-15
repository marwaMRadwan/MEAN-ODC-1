import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'convertTemp'
})
export class convertTemp implements PipeTransform{
    transform(value: any, unit : string) {
    //   console.log(args[0])
    //   console.log(args[1])
      if(unit === "C"){
            var temp = (value - 32)/1.8
          return temp
      }
      else if(unit === 'F'){
        var temp = (value * 1.8) + 32
        return temp
      }
      return;
    }

}
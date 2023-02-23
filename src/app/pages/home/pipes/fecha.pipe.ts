import {Pipe, PipeTransform} from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name:'fecha'
})
export class FechaPipe extends DatePipe implements PipeTransform{
    override transform(valor: any, args?: any): any {    
        return super.transform(valor, "MMMM 'de' yyyy");
    }

}
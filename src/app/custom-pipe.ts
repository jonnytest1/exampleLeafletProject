import { PipeTransform, Pipe } from '@angular/core';


@Pipe({name: 'trans'})
export class CustomPipe implements PipeTransform{
    
    
    transform(value: any, ...args: any[]) {
        value=''+value;
        console.log('pipe')
        if(value=='test'){
            return 'testTransformed';
        }else{
            return value;
        }
    }


}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'LockFilter'
})

export class SearchPipe implements PipeTransform {
    transform(value: any, args?: any): any {
console.log(args);
        if(!value)return null;
        if(!args)return value;

        args = args.toLowerCase();

        return value.filter(function(item){
            return JSON.stringify(item).toLowerCase().includes(args);
        });
    }
}
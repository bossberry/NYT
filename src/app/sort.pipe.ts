import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'SortPipe' })
export class SortPipe implements PipeTransform {
    static compare(reverse: boolean, a: any, b: any): number {
        if (a < b && reverse === false) {
            return -1;
        }
        if (a > b && reverse === false) {
            return 1;
        }
        if (a < b && reverse === true) {
            return 1;
        }
        if (a > b && reverse === true) {
            return -1;
        }
        return 0;
    }

    transform(value: any, config?: string | string[],args: any): any {
        if(!value) {
            return null;
        }
        if(!args && !config){
            return value;
        }
        if(args && !config){
            args = args.toLowerCase();
            return value.filter(function(item){
                return JSON.stringify(item).toLowerCase().includes(args);
            });   
        }
        if (config === '+' || config === '-' && !args) {
            return config === '+' ? value.sort() : value.sort().reverse();
        }

        if (Array.isArray(config) === false) {
            config = <string[]>[config];
        }
            value = value.filter(function(item){
                return JSON.stringify(item).toLowerCase().includes(args);
            });
            // As soon as a or b is smaller/greater than the other, we can immediately return
            return value.sort((a: any, b: any): number => {
                for (let fullProp of config) {
                    let reverse = fullProp[0] === '-';
                    let prop = fullProp.substr(1);
    
                    // Is it a subobject?
                    if (prop.indexOf('.') > 0) {
                        let first = prop.split('.')[0];
                        let last = prop.split('.')[1];
    
                        let result = SortPipe.compare(reverse, a[first][last], b[first][last]);
                        if (result !== 0) {
                            return result;
                        }
    
                        continue;
                    }
    
                    let result = SortPipe.compare(reverse, a[prop], b[prop]);
                    if (result !== 0) {
                        return result;
                    }
                };
    
                return 0;
            });
       
    }
}
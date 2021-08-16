import { PipeTransform } from "@angular/core";
import { Pipe } from "@angular/core";

@Pipe({
    name: 'virgula'
})

export class RepliacePipe implements PipeTransform{

    transform(value: string, char: string,valuetoRepliace: string){
        return value.replace(char,valuetoRepliace);
    }

   

}
import { NgModule } from "@angular/core";
import { RepliacePipe } from "./curso.pipe";

@NgModule({
   
    declarations:[
        RepliacePipe
    ],
    exports:[
        RepliacePipe
    ]

})

export class PipeModule{

}
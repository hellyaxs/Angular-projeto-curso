import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { InfoCursos } from "./curso.info.component";
import { CursoListComponent } from "./cursoList.component";
import { StarModule } from "../share/component/star/starModule";
import { PipeModule } from "../share/pipe/pipeModule";

@NgModule({

    declarations:[
        CursoListComponent,
        InfoCursos,
    
    ],
    imports:[
        PipeModule,
        StarModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([
              {
                path: 'curso', component: CursoListComponent
              },
              {
                path: 'curso/info/:id', component: InfoCursos 
              },
        ])

    ]


})

export class CursoModule{

}
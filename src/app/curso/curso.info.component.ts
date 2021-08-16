import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CursoJs } from "./curso";
import { CursoService } from "./curso.service";



@Component({
    templateUrl:'curso.info.component.html'
})

export class InfoCursos implements OnInit{

    cpfCurso!:CursoJs;

    constructor(private route: ActivatedRoute, private cursoService: CursoService){}

    ngOnInit(): void{
        this.cursoService.retrieveById(+this.route.snapshot.paramMap.getAll('id')).subscribe({
            next: cursoLTE =>this.cpfCurso = cursoLTE,
            error: err => console.log('Erro',err)
        });
        }

        save(): void {
            this.cursoService.save(this.cpfCurso).subscribe({
            next: course => console.log('Saved with success', course),
            error: err => console.log('Error', err)
        });
    }
  

}
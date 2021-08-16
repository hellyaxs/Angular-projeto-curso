import { Component, OnInit } from '@angular/core';
import { CursoJs } from './curso';
import { CursoService } from './curso.service';


@Component({
   
    templateUrl: 'cursolist.component.html',
   
  })

export class CursoListComponent implements OnInit {

  cursos: CursoJs[] = [];
  _filterBy!:string;
  filtrodeCursos: CursoJs[]=[];

  constructor(private cursoService: CursoService){}

  ngOnInit(): void{
   this.retrieveAll();
  
}

 retrieveAll(): void{
   this.cursoService.retrieveAll().subscribe({
     next: CursoJs =>{
       this.cursos = CursoJs;
       this.filtrodeCursos= this.cursos;
      },
      error: err => console.log('Erro',err)
    })
  
 }
 deleteById(curosId: number){
  this.cursoService.deleteById(curosId).subscribe({
      next: () =>{
          console.log('Deleted with success');
          this.retrieveAll();
      },
      error: falied => console.log('Erro',falied)
      
  })

}

  
   set filter(v : string) {
    this._filterBy = v;
    this.filtrodeCursos = this.cursos.filter((mostrar: CursoJs) => mostrar.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1); 
  }
  
  get filter() : string {
    return this._filterBy;
  }
  
  

}
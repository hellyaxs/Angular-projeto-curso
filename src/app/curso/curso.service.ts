import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CursoJs } from "./curso";

@Injectable({
    providedIn:'root'
})
export class CursoService {

    private CursoURL: string='http://localhost:3100/api/courses';

   constructor(private httpClient: HttpClient){}

    retrieveAll():Observable<CursoJs[]>{
        return this.httpClient.get<CursoJs[]>(this.CursoURL);
    }
    retrieveById(id:number):Observable<CursoJs>{
     return this.httpClient.get<CursoJs>(`${this.CursoURL}/${id}`);
    }
    save(course: CursoJs): Observable<CursoJs> { 
        if(course.id) { 
            return this.httpClient.put<CursoJs>(`${this.CursoURL}/${course.id}`, course);
        } else { 
            return this.httpClient.post<CursoJs>(`${this.CursoURL}`, course);
        }
    }

   deleteById(id: number): Observable<any>{
       return this.httpClient.delete<any>(`${this.CursoURL}/${id}`);

   } 
  
}

var Cursos1: CursoJs[] = [

    {
       id:1,
       name:'Angular',
       releaseDate:'Novenber, 2, 2018',
       description:'curos basico em angular',
       duration:128,
       code:'LXS-3435',
       rating:3,
       price:'49.99',
       imageUrl:'./assets/imagens/forms.png'
    },
    {
        id:2,
        name:'JavaScript',
        releaseDate:'july, 23, 2015',
        description:'curos basico em javascript',
        duration:90,
        code:'LXS-8080',
        rating:4.5,
        price:'29.99',
        imageUrl:'./assets/imagens/cli.png'
    }, 
    {
        id:3,
        name:'HTML',
        releaseDate:'Novenber, 15, 2010',
        description:'curos basico em HTML',
        duration:60,
        code:'PST-4200',
        rating:2.9,
        price:'15.99',
        imageUrl:'./assets/imagens/http.png'
    },
    {
        id:4,
        name:'React js',
        releaseDate:'august, 11, 2019',
        description:'curos basico em react',
        duration:128,
        code:'Xps-5300',
        rating:4.9,
        price:'89.99',
        imageUrl:'./assets/imagens/router.png'
    },
    {
        id:5,
        name:'CSS3',
        releaseDate:'february, 2, 2020',
        description:'curos basico em CSS3-Framework(Bootstrap)',
        duration:150,
        code:'PSQ-79987',
        rating:3,
        price:'76.99',
        imageUrl:'./assets/imagens/animations.png'
    },
    {
        id:6,
        name:'Node js',
        releaseDate:'april, 12, 2021',
        description:'curos basico em Node js',
        duration:120,
        code:'UTP-3435',
        rating:3,
        price:'150.99',
        imageUrl:'./assets/imagens/cli.png'
    }
]



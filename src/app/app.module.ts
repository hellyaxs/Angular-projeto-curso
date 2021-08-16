import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CursoModule } from './curso/course.module';
import { CoreModule } from './core/component/core.module';
import { Erro404Component } from './core/component/erro404/erro404.component';


@NgModule({
  declarations: [
    AppComponent,
    Erro404Component
    
  ],
  imports: [
    CoreModule,
    CursoModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'curso', pathMatch:'full'
      },
      {
        path: '**', component: Erro404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Router, RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main.component';
import { SearchComponent } from './components/search.component';
import { SearchlistComponent } from './components/searchlist.component';
import { ResultComponent } from './components/result.component';

// Lottie animation
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
export function playerFactory() {
  return player
}

import { AnimeDatabase } from './searches.database';

// Configure routes
const ROUTES: Routes = [
  { path: '', component: MainComponent },
  { path: 'searchlist', component: SearchlistComponent },
  { path: 'search', component: SearchComponent },
  { path: 'result/:type/:q', component: ResultComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchComponent,
    SearchlistComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    LottieModule.forRoot({ player: playerFactory }),
    HttpClientModule
  ],
  providers: [ AnimeDatabase ],
  bootstrap: [AppComponent]
})
export class AppModule { }

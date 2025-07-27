import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TopicService } from './services/TopicService';
import { RouterModule, Routes } from '@angular/router';
import { SubtopicsComponent } from './components/subtopics/subtopics.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';

const routes: Routes = [
  // Need to change this 404
  {path: "**", component: MainComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    SubtopicsComponent,
    ReactiveFormComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    TopicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

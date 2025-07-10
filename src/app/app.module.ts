import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TopicService } from './services/TopicService';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule, Routes } from '@angular/router';
import { SubtopicsComponent } from './components/subtopics/subtopics.component';

const routes: Routes = [
  // Need to change this 404
  {path: "**", component: MainComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    SubtopicsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    TopicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

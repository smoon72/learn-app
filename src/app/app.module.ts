import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TopicService } from './services/TopicService';
import { AngularComponent } from './subtopics/angular/angular.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule, Routes } from '@angular/router';
import { JavaComponent } from './subtopics/java/java.component';

const routes: Routes = [
  {path: "Angular", component: AngularComponent },
  {path: "Java", component: JavaComponent },
  // Need to change this 404
  {path: "**", component: AngularComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    AngularComponent,
    JavaComponent
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

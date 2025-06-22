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
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule, Routes } from '@angular/router';
import { JavaComponent } from './subtopics/java/java.component';
import { GettingStartedComponent } from './subtopics/angular/getting-started/getting-started.component';
import { FormsComponent } from './subtopics/angular/forms/forms.component';

const routes: Routes = [
  {path: "Getting Started", component: GettingStartedComponent },
  {path: "Forms", component: FormsComponent },
  {path: "Java", component: JavaComponent },
  // Need to change this 404
  {path: "**", component: GettingStartedComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    JavaComponent,
    GettingStartedComponent,
    FormsComponent
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

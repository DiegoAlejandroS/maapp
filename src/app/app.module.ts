import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { APP_ROUTING } from './app.routes';

import { DataService } from './services/data.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { TabletasksComponent } from './components/shared/tabletasks/tabletasks.component';
import { TaskComponent } from './components/shared/task/task.component';
import { AddtaskComponent } from './components/shared/addtask/addtask.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SidebarComponent,
    TabletasksComponent,
    TaskComponent,
    AddtaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

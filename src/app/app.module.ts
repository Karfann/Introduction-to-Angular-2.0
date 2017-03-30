import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskService } from './tasks/task.service';
import { AppRoutingModule } from './app-routing.module';
import { OtherComponent } from './other/other.component';
import { TaskListComponent } from './tasks/task-list.component';
import { TaskNewComponent } from './tasks/task-new.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    OtherComponent,
    TaskListComponent,
    TaskNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }

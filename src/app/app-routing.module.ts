import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksComponent } from './tasks/tasks.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
    { path: 'tasks', component: TasksComponent },
    { path: 'other', component: OtherComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

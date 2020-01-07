import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddComponentComponent } from './components/add-component/add-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: TodoListComponent
  },

  {
    path: 'add',
    component: AddComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/**
 * import all required packages
 */
import { Todo } from './../../model/todo-model';
import { TodoService } from './../component.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {

  todos: Todo[];
  
  todo: Todo = new Todo();
  todoTitle: string;
  todoDescription: string;
  todoDate: string;
  todoCompleted : boolean;
  todoTime: string;
  todoView :boolean;
  todoDetail :string;

  constructor(private todoService: TodoService) { }

  ngOnInit() {

    this.todoService.list().subscribe(todo => {
      this.todos = todo;
    }) ;

    console.log(this.todos);
  }

/**
 * 
 * @function viewTodo  To view detailed view of todo
 */
  viewTodo(todo: Todo) {
    console.log(todo)
    if(!todo.view)
    {
      todo.view = true;
    }
    else
    {
      todo.view = false;
    }
  }

/**
 * 
 * @function deleteTodo  To Delete a todo item
 */
  deleteTodo(todo: Todo) {
    console.log(todo.id);
    this.todoService.delete(todo.id).subscribe();
    window.location.reload(); 
    window.alert("Task Deleted Successfully!!!");
    
  }


  /**
 * 
 * @function status  To mark a todo item as completed
 */
  status(todo: Todo)
  {
    if(!todo.completed){
      todo.completed=true;
    
    }
    else{
      todo.completed=false;
    }
   this.todoService.update(todo).subscribe();  
   window.location.reload();
  }

  
}


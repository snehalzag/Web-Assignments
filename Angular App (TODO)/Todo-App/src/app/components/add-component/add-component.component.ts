/**
 * import required packages
 */
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../app/model/todo-model';
import { TodoService } from '../../components/component.service';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.scss']
})
export class AddComponentComponent implements OnInit {
/**
 * creating new Array of todo
 */
  todos: Todo[];

  todo: Todo = new Todo();
  todoTitle: string;
  todoDescription: string;
  todoDate: string;
  todoCompleted: boolean;
  todoTime: string;
  todoView: boolean;
  todoDetail: string;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }


  /**
   * @function addTodo()  to add new todo item
   */
  addTodo(): void {

    if (this.todo.title == undefined) {
      window.alert("Title is Mandatory!!!");
    }
    else {
      this.todo.completed = false;
      this.todo.view = false;
      this.todoService.add(this.todo).subscribe();
      window.location.reload();

      this.todo.title = "";
      this.todo.description = "";
      this.todo.date = "";
      this.todo.time = "";
      window.alert("Task Added Successfully!!!");

    }

  }

}

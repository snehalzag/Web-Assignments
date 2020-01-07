import { Injectable } from '@angular/core';
import { Todo } from '../model/todo-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
 providedIn: 'root'
})


export class TodoService {
 constructor(private http: HttpClient) { }

public list(): Observable<Array<Todo>> {
   const todos$ = this.http.get<Todo[]>('http://localhost:27017/todos');
   return todos$;
 }

 public delete(id: number): Observable<Todo> {
    const todo$ = this.http.delete<Todo>('http://localhost:27017/todos/'+id);
    return todo$;
   }


   public update(todo: Todo): Observable<Todo>{
    const todos$ = this.http.put<Todo>('http://localhost:27017/todos/'+todo.id, todo);
    return todos$;
   }
   

   public add(todo: Todo): Observable<Todo>{
    const todos$ = this.http.post<Todo>('http://localhost:27017/todos', todo);
    return todos$;
   }

}
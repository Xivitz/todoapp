import { Component } from '@angular/core';
import { Todo } from './models/todo.models';

@Component({
  selector: 'app-root', // isso vira uma tag html => <app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: string = 'Minhas Tarefas';

  constructor() {
    this.todos.push(new Todo(1, 'Passear com o dog', false));
    this.todos.push(new Todo(2, 'Comprar algo', false));
    this.todos.push(new Todo(3, 'Ir ao ginásio', true));
  }  
}

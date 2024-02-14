import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListComponent, RouterOutlet, RouterModule],
  template: `
          <h1>{{title}} Angular 17  </h1>
          <app-todo-list [todos]="todos" (btnClick)="handleClick($event)"/>
          <router-outlet></router-outlet>
          <h4 [routerLink]="'todoDetails'" routerLinkActive="router-link-active" > GO to TODO details</h4>  
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello';

  todos = [{id:'1', name: 'Todo 1'}, {id:'2', name: 'Todo 2'}]

  handleClick(todo:any){
    this.todos.push(todo)
  }
}

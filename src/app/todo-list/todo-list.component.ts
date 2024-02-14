import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h3>Welcome to TODO LIST</h3>
    <form (submit)="onSubmit()" >
      <div>
        <label>Enter todo</label>
        <input type="text" name="name" [(ngModel)]="name"/>
      </div>
      <button type="submit">Add todo</button>
    </form>
    <div>
      @for(todo of todos; track todo.id){
        <p>{{todo?.name}}</p>
      }
    </div>
      
  `,
  styleUrl: './todo-list.component.css'
})


export class TodoListComponent {
  @Input() todos:any
  @Output() btnClick = new EventEmitter()

  name:string = ""

  


  onSubmit(){
    console.log(this.name,'btn clicked')
    const todo = {
      id: Math.floor(Math.random()*100),
      name: this.name
    }

    this.btnClick.emit(todo)
  }

}

import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.services';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit{
  todos: Todo[]=[];
  name: any = '';
  editMode: any[] = [];
  
  constructor(
    private todoService: TodoService
  ) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe({
      next: (todos) => {
        console.log(todos);
        this.todos = todos;

        for (let i = 0; i < todos.length; i++) {
          this.editMode.push(false);
        }
      },

      error: (error) => {
        console.log(error);
      },
    });
  }
}
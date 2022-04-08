import {Component, OnInit} from '@angular/core';
import {Todo} from '../../models/todo'


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [{
    userId: 1,
    id: 1,
    title: "2",
    completed: true
  }, {
    userId: 2,
    id: 2,
    title: "1231231asdas",
    completed: false
  }, {
    userId: 3,
    id: 3,
    title: "3asdasdas",
    completed: false
  }, {
    userId: 4,
    id: 4,
    title: "122222231231asdas",
    completed: false
  }]

  constructor() {
  }

  ngOnInit(): void {
  }

}

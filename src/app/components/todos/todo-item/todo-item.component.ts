import { Component, OnInit, Input } from '@angular/core';
import {Todo} from "../../../models/todo";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {}
  switchBtnHandler() {
    console.log('switch btn')
  }

}

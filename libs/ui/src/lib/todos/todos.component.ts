import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from '@kxl/data';

@Component({
  selector: 'kxl-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  @Input() todos: ToDo[];

  constructor() { }

  ngOnInit(): void {
  }

}

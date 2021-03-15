import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Task } from '../../../models/task';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html'
})
export class AddtaskComponent implements OnInit {
  title: string;
  description: string;
  @Output() taskAdded = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
  }

  addTask(){
    this.taskAdded.emit({
      title: this.title,
      description: this.description,
      hide: true
    });
    this.title = '';
    this.description = '';
  }
}

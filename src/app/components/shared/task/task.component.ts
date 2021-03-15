import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../../../models/task';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit {
  
  @Input('task') task:Task;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  removeTask(task: Task){
    const response = confirm('¿Desea eliminar la tarea?');
    if (response){
      this.dataService.removeTask(task);
    }
  }

}

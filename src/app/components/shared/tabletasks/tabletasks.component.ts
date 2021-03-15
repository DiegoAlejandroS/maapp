import { Component, OnInit } from '@angular/core';

import {Task} from '../../../models/task';

import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-tabletasks',
  templateUrl: './tabletasks.component.html'
})
export class TabletasksComponent implements OnInit {

  tasks: Task[];

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.tasks = this.dataService.getTask();
  }

  addTask(task: Task){
    this.dataService.addTask(task);
  }

}

import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable()
export class ListoftaskService {
  public listOfTask: Task[] = [];
  constructor() {}

  addTask = function (nameOfTask: string) {
    const NewTask = {
      id: this.listOfTask.length,
      name: nameOfTask,
      checked: false,
    };

    this.listOfTask.push(NewTask);
  };
}

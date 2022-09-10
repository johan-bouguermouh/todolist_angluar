import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable()
export class ListoftaskService {
  public listOfTask: Task[] = [
    {
      "id" : 0,
      "name" : "test en dure",
      "checked" : false
    }
  ];
  constructor() {}

  addTask = function (nameOfTask: string) {
    const NewTask = {
      id: this.listOfTask.length,
      name: nameOfTask,
      checked: false,
    };
    this.listOfTask.push(NewTask);
  };

  getTasks = function () {
    return this.listOfTask;
  };
}

import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable()
export class ListoftaskService {
  public listOfTask: Task[] = [
    {
      id: 0,
      name: 'test en dure',
      checked: true,
    },
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

  updateCheckedTask = function (idTask: number) {
    let arrayToEdit = [...this.listOfTask];
    arrayToEdit[idTask].checked = arrayToEdit[idTask].checked ? false : true;
  };
}

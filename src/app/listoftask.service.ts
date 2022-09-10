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
    {
      id: 1,
      name: 'deuxième test dure',
      checked: false,
    },
  ];

  public filter = {
    finished: true,
    pendings: true,
    hidden: true,
  };

  constructor() {}

  getFilter = function () {
    return this.filter;
  };

  setfilterFinished = function () {
    this.filter.finished = this.filter.finished ? false : true;
  };

  setfilterpendings = function () {
    this.filter.pendings = this.filter.pendings ? false : true;
  };

  setfilterhidden = function () {
    //console.log('before', this.filter.hidden);
    this.filter.hidden = this.filter.hidden ? false : true;
    console.log('after', this.filter.hidden);
  };

  addTask = function (nameOfTask: string) {
    const NewTask = {
      id: this.listOfTask.length,
      name: nameOfTask,
      checked: false,
    };
    this.listOfTask.push(NewTask);
  };

  getTasks = function () {
    switch (true) {
      case !this.filter.hidden:
        return null;

      case !this.filter.finished && this.filter.pendings:
        return this.listOfTask.filter(
          (element: Task) => element.checked === false
        );

      case this.filter.finished && !this.filter.pendings:
        return this.listOfTask.filter(
          (element: Task) => element.checked === true
        );

      case this.filter.finished && this.filter.pendings && this.filter.hidden:
        return this.listOfTask;
    }
  };

  updateCheckedTask = function (idTask: number) {
    let arrayToEdit = [...this.listOfTask];
    arrayToEdit[idTask].checked = arrayToEdit[idTask].checked ? false : true;
  };
}

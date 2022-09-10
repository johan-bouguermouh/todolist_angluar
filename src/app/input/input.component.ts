import { Component, OnInit } from '@angular/core';
import { ListoftaskService } from '../listoftask.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  constructor(public ListoftaskService: ListoftaskService) {}

  addNewTask = function (e) {
    const nameOfNewTask: string = e.target.value;
    this.ListoftaskService.addTask(nameOfNewTask);
    e.target.value = '';
  };

  ngOnInit() {}
}

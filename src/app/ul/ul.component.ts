import { Component, Input, OnInit } from '@angular/core';
import { ListoftaskService } from '../listoftask.service';
import { Task } from '../task';

@Component({
  selector: 'app-ul',
  templateUrl: './ul.component.html',
  styleUrls: ['./ul.component.css'],
})
export class UlComponent implements OnInit {
  constructor(private ListoftaskService: ListoftaskService) {}
  
  @Input() itemTask = this.ListoftaskService.getTasks();

  updateState = function (id: number) {
    this.ListoftaskService.updateCheckedTask(id);
  };

  ngOnInit() {}
}

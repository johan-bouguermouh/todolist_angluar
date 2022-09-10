import { Component, Input, OnInit } from '@angular/core';
import { ListoftaskService } from '../listoftask.service';

@Component({
  selector: 'app-ul',
  templateUrl: './ul.component.html',
  styleUrls: ['./ul.component.css'],
  providers: [ListoftaskService],
})
export class UlComponent implements OnInit {
  constructor(public ListoftaskService: ListoftaskService) {}

  @Input() itemTask = this.ListoftaskService.listOfTask;

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';
import { ListoftaskService } from '../listoftask.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  constructor(private ListoftaskService: ListoftaskService) {}

  filterOflist = this.ListoftaskService.getFilter();

  updateList(originCmd: string) {
    switch (originCmd) {
      case 'finished':
        this.ListoftaskService.setfilterFinished();

      case 'pendings':
        this.ListoftaskService.setfilterpendings();

      case 'hidden':
        console.log('IN');
        this.ListoftaskService.setfilterhidden();
    }
  }

  ngOnInit() {}
}

import { Component, Input, OnInit } from '@angular/core';
import { Move } from 'src/app/models/move';
import { User } from 'src/app/models/user';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {

  constructor() { }
  @Input() move: Move
  ngOnInit(): void {
    console.log(this.move);


  }

}

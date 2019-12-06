import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';
import { CountService } from '../count.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  activeUsers: string[];

  constructor(private usersService: UsersService, private countService: CountService) { }

  onSetToInactive(index: number) {
    this.usersService.addToInactive(index);
    this.countService.addInactiveClicks();
  }

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
  }
}

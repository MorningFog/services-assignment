import { Component, OnInit, } from '@angular/core';

import { UsersService } from '../users.service';
import { CountService } from '../count.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  inactiveUsers: string[];

  constructor(private usersService: UsersService, private countService: CountService) { }

  onSetToActive(index: number) {
    this.usersService.addToActive(index);
    this.countService.addActiveClicks();
  }

  ngOnInit() {
    this.inactiveUsers = this.usersService.inactiveUsers;
  }
}

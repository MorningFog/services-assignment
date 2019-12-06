import { Component, OnInit, } from '@angular/core';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  inactiveUsers: string[];

  constructor(private usersService: UsersService) { }

  onSetToActive(index: number) {
    this.usersService.addToActive(index);
  }

  ngOnInit() {
    this.inactiveUsers = this.usersService.inactiveUsers;
  }
}

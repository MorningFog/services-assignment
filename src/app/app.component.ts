import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { CountService } from './count.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService, CountService]
})
export class AppComponent implements OnInit {
  clickCounts = {};

  constructor(private countService: CountService) { }

  ngOnInit() {
    this.clickCounts = this.countService.clickCounts;
  }
}

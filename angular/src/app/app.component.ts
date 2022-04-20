import { Component, OnInit } from '@angular/core';
import { UsersdataService } from './servicer/usersdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'API Call in angular';
  users: any;
  constructor(private userData: UsersdataService) {}

  ngOnInit(): void {
    this.getApi();
  }

  getUserFormData(data:any) {
    console.warn(data);
  }

  getApi() {
    this.userData.users().subscribe(
      (data: any) => {
        this.users = data.users;
        console.log(this.users);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}

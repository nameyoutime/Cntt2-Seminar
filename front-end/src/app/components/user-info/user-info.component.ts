import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  constructor(public authSer: AuthService) {

  }

  ngOnInit(): void {
  }

  signOut(){
    this.authSer.signOut();
  }

}

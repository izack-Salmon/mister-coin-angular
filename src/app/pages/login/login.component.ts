import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from "../../services/user/user.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string
  user: User
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  async login() {
    if (this.username) {
      this.user = await this.userService.signUp(this.username)
      this.router.navigateByUrl('home')
    } 9
  }

}

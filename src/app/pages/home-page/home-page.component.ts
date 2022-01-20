import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service'
import { BitcoinService } from 'src/app/services/bitcoin/bitcoin.service'

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  constructor(private UserService: UserService, private BitcoinService: BitcoinService) { }

  user: User
  rate: string
  // rate$: Observable<string> | Promise<string>
  // user$ :Observable<User[]>


  ngOnInit(): void {
    this.user = this.UserService.getUser()

    this.BitcoinService.getRate().subscribe(answer => {
      this.rate = answer
    })
  }
  ngOnDestroy(): void {

  }

}

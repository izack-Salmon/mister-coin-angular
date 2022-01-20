import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Move } from 'src/app/models/move';
import { User } from 'src/app/models/user';
import { Contact } from 'src/app/services/contact/contact.model';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {

  amount: number
  errorMsg: string
  @Input() contact: Contact
  @Input() user: User
  @Input() move: Move
  @Output() onTransfer = new EventEmitter<Move>()
  constructor() { }

  ngOnInit(): void {
    console.log(this.contact);

  }

  onTransferCoins() {
    if (this.user.coin <= this.amount) {
      this.errorMsg = 'you dont have enough funds'
      setTimeout(() => {
        this.errorMsg = ''
      }, 5000);
      return
    }
    this.move.to = this.contact.name
    this.move.at = Date.now()
    this.move.amount = this.amount
    var move = JSON.parse(JSON.stringify(this.move))
    this.onTransfer.emit(move)



  }
}

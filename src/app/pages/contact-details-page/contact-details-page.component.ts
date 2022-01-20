import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Observable, Subscription } from 'rxjs';
import { Move } from 'src/app/models/move';
import { User } from 'src/app/models/user';
import { Contact } from 'src/app/services/contact/contact.model';
import { ContactService } from "../../services/contact/contact.service";
import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {

  move: Move
  emptyMove: Move
  moves: Move[]
  user: User
  user$: any
  contact: Contact
  subscription: Subscription
  constructor(private router: Router, private route: ActivatedRoute, private ContactService: ContactService, private userService: UserService) { }

  async ngOnInit(): Promise<void> {
    this.getEmptyMove()
    this.subscription = this.route.params.subscribe(async params => {
      const contact = await lastValueFrom(this.ContactService.getContactById(params.id))
      this.contact = contact
      this.getUser()
    })
    // this.moves = this.user.moves.slice(0, 3);
  }
  getUser() {
    this.user = this.userService.getUser()
    this.user$ = this.userService.user$
    this.user$.subscribe((user: { moves: Move[] }) => this.moves = user.moves.filter(move => move.to === this.contact.name).slice(0, 3));

  }
  getEmptyMove() {
    this.emptyMove = this.userService.getEmptyMove()
    console.log(this.move);
  }
  onTransfer(move: Move) {
    this.userService.addMove(move)
  }
  openEdit() {
    this.router.navigate([`contact/edit/${this.contact._id}`, { contact: this.contact }])
  }
  onBack() {
    this.router.navigateByUrl('')
  }
  async onRemove() {
    await this.ContactService.deleteContact(this.contact._id)
    this.router.navigateByUrl('contact')
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/services/contact/contact.model';
import { ContactService } from "../../services/contact/contact.service";

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit, OnDestroy {

  contacts: Contact[]
  contacts$: Observable<Contact[]>
  subscription: Subscription

  constructor(private ContactService: ContactService) { }



  ngOnInit(): void {
    this.ContactService.loadContacts()
    this.contacts$ = this.ContactService.contacts$
    // console.log();

  }
  ngOnDestroy(): void {
    // this.subscription.unsubscribe()
  }
}


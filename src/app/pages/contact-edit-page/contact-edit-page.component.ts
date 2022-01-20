import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactService } from "../../services/contact/contact.service";

@Component({
  selector: 'contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit {

  contact: Contact
  constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit(): void {
    this.route.data.subscribe(({ contact }) => {
      this.contact = contact ? contact : this.contactService.getEmptyContact() as Contact
    })
  }
  async onSaveContact() {
    await this.contactService.saveContact(this.contact)
    this.router.navigateByUrl('contact')
  }

}

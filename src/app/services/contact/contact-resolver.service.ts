import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from './contact.model';
import { ContactService } from './contact.service'


@Injectable({
  providedIn: 'root'
})
export class ContactResolverService implements Resolve<Promise<Contact>> {

  constructor(private ContactService: ContactService) { }

  async resolve(route: ActivatedRouteSnapshot) {
    const id = route.params.id
    const contact = await this.ContactService.getContactById(id).toPromise()
    return contact
  }

  async
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {


  load(key) {
    const json = localStorage.getItem(key)
    const val = JSON.parse(json)
    return val;
  }

  save(key, val) {
    const json = JSON.stringify(val)
    localStorage.setItem(key, json)
  }

  constructor() { }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user';
import { StorageServiceService } from '../storage/storage-service.service';

const STORAGE_KEY = "USER_DB";
var gUser;

@Injectable({
  providedIn: 'root'
})


export class UserService {


  private _user$ = new BehaviorSubject<User[]>([]);
  public user$ = this._user$.asObservable()

  constructor(private storageService: StorageServiceService) { }

  public signUp(userName) {
    let users = this.storageService.load(STORAGE_KEY)
    if (users && users.length) {
      let existUser = users.find(user => user.name === userName)
      if (existUser) gUser = existUser
      else {
        gUser = this._getNewUser(userName)
        users.push(gUser)
      }
    }
    else {
      gUser = this._getNewUser(userName)
      users = [gUser]
    }
    this.storageService.save(STORAGE_KEY, users)
    this._user$.next(gUser)
    return gUser;
  }

  public getUser() {
    this._user$.next(gUser)
    return gUser
  }

  public getEmptyMove() {
    return { to: '', _id: '', amount: 0, at: 0 }
  }

  public updateUser(currUser) {
    let users = this.storageService.load(STORAGE_KEY)
    let UserIdx = users.findIndex(user => user._id === currUser._id)
    users.splice(UserIdx, 1, currUser)
    this.storageService.save(STORAGE_KEY, users)
    this._user$.next(gUser)
  }

  public addMove(move: any) {
    gUser.coin -= move.amount
    move._id = this._makeId()
    gUser.moves.unshift(move)
    // console.log(gUser);
    this.updateUser(gUser)

  }

  private _getNewUser(name) {
    return { _id: this._makeId(), name, coin: 100, moves: [] }
  }
  private _makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}

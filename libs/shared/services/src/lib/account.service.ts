import { Injectable } from '@angular/core';
import { Subject  } from 'rxjs';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  accounts: Account[] = [
    { id: "1234", balance: 7500, currency: "cad" },
    { id: "1235", balance: 4500, currency: "cad" },
    { id: "1236", balance: 2102, currency: "usd" }];

  accounts$: Subject<Account[]> = new Subject();
  
  // getAccounts(): Observable<Account[]> {
  //   const accounts: Account[] = [
  //     { id: "1234", balance: 7500, currency: "cad" },
  //     { id: "1235", balance: 4500, currency: "cad" },
  //     { id: "1236", balance: 2102, currency: "usd" },
  //   ];
  //   return of(accounts);
  // }

  updateList(accountsFilter: string) {
    //this.accounts = this.accounts.filter(acc => acc.currency === accountsFilter || accountsFilter === '');
    this.accounts$.next(this.accounts.filter(acc => acc.currency === accountsFilter || accountsFilter === ''));
  }
  
}

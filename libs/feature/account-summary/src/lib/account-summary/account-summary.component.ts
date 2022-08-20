/** 
 * TODO: 10. Angular (NX) Architecture
 * TODO: 11. Asynchronous Programming (RxJS)
*/
//import { Component, OnInit } from '@angular/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Account } from 'libs/shared/services/src/lib/account';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AccountService } from 'libs/shared/services/src/lib/account.service';
//import { Observable, of } from 'rxjs';
import { Subscription  } from 'rxjs';

@Component({
  selector: 'sum-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.scss'],
})
export class AccountSummaryComponent implements OnDestroy, OnInit {
  //accounts$: Observable<Account[]> = of([]);
  accounts: Account[] = [];
  accountsFilter = '';
  subscription: Subscription;
  
  constructor(private accountService: AccountService) {
    this.subscription = this.accountService.accounts$.subscribe((accounts) => {
      this.accounts = accounts;
    });
  }
     
   ngOnInit(): void {
  //   this.accountService.getAccounts().subscribe((accounts) => {
  //     this.accounts = accounts;
  //   });
    this.accountService.updateList(this.accountsFilter);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  //filterAccounts(accounts: Account[]) {
  filterAccounts() {
    //return accounts.filter(acc => acc.currency === this.accountsFilter || this.accountsFilter === '');

    //All logic for filtering data was moved to accountService
    this.accountService.updateList(this.accountsFilter);
  }

  trackByFn(index : number, item : Account) {
    if (item == null)
      return null;
    return item.id;
  }
}


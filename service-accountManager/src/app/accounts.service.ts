export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Test Account',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  addAccount(newAccount: { name: string; status: string }) {
    this.accounts.push(newAccount);
  }

  updateStatus(id: number, newstatus: string) {
    this.accounts[id].status = newstatus;
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  registrationForm = new FormGroup({
    userName: new FormControl('tamil'),
    password: new FormControl(''),
    conformPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
    }),
  });

  LoadApiData() {
    this.registrationForm.setValue({
      userName: 'Garry',
      password: 'test',
      conformPassword: 'test',
      address: {
        city: 'Namakkal',
        state: 'Tamilnadu',
      },
    });
  }
}

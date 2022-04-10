import { Component } from '@angular/core';
import { user } from './app.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: user[] = [
    {
    email:'a@a.con',
    password:'123',
    address: 'Kermanshah',
      },

    {
      email:'b@b.con',
      password:'456',
      address: 'Tehran',
        },
      
    {
      email:'c@c.con',
      password:'789',
      address: 'Deutscland',
        },
    
  ]

  public onAdduser(email: string, password: string, address:string, e:Event){
    e.preventDefault();
    let u: user={
      email: email,
      password: password,
      address: address,
    }
    
    this.users.push(u);
  }
    
}

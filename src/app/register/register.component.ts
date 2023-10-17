import { Component } from '@angular/core';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  customer = new Customer();

  onSubmit(registerForm:any){
    if(registerForm.valid){
      alert('Valid');
     }else{
      alert('Not Valid');
     }
  }
}

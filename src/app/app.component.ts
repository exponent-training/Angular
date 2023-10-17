import { Component } from '@angular/core';
import { Customer } from './customer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDemo';

 customer = new Customer();

  onSubmit(form: any) {
     alert('Check');
     console.log('check : ' + this.customer);
     if(form.valid){
      alert('Valid');
     }else{
      alert('Not Valid');
     }
  }
}

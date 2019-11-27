import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // @Input() valuesFromHome: any; // @Input() pass data from parent component to child component
  @Output() cancelRegister =  new EventEmitter(); // @Input() pass data from parent component to child component
  model: any = {};

  constructor(private authService: AuthService) { }


  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(response => {
      console.log('Registration succeed');
    }, error => {
      console.log('Error during registration' + error);
    });

  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }



}


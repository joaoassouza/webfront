import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent {

  constructor(private router:Router){}

  onSubmit(myForm: NgForm) {
    if (myForm.value.name == 'admin' && myForm.value.password == '123') {
      console.log(myForm.value.name);

      this.router.navigate(['/home', myForm.value.name, myForm.value.password]);
      

    } else {
      alert("Usuário ou senha incorretos")
    }
  }

  toCadastrar() {
    this.router.navigate(['/cadastrar']);
  }
}

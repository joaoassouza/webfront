import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  name: string;
  password: string;

  constructor(private router: ActivatedRoute) {
    this.name = this.router.snapshot.params['name'];
    this.password = this.router.snapshot.params['password'];
  }

  

  ngOninit() {}
}

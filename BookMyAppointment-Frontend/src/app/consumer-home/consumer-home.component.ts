import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consumer-home',
  templateUrl: './consumer-home.component.html',
  styleUrls: ['./consumer-home.component.css']
})
export class ConsumerHomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
   //consumer routes
   cSignUp(){
    this.router.navigate(["c/signup"]);
  }

}

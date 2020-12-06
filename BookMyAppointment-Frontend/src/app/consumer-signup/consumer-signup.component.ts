import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

  

@Component({
  selector: 'app-consumer-signup',
  templateUrl: './consumer-signup.component.html',
  styleUrls: ['./consumer-signup.component.css']
})
export class ConsumerSignupComponent implements OnInit {
  
    constructor() { }

    ngOnInit(): void {
    }
}


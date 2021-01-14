import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumerService } from '../_services/consumer.service';

@Component({
  selector: 'app-consumer-list',
  templateUrl: './consumer-list.component.html',
  styleUrls: ['./consumer-list.component.css']
})
export class ConsumerListComponent implements OnInit {

  constructor(private router:Router,private consumerService:ConsumerService) { }

  ngOnInit(): void {
  }

}

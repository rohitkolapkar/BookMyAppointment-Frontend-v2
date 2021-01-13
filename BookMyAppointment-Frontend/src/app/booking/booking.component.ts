import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  spId: number;
  consumerId:number;
  constructor(private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.spId = +this.route.snapshot.queryParamMap.get('spid');
    this.consumerId=+sessionStorage.getItem("userId");
    console.log("from book route");
    console.log(this.spId);
    console.log(this.consumerId);
  }

}

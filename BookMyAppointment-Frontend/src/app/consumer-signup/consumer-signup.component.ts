import { Component, OnInit } from '@angular/core';
import { Consumer } from '../_models/consumer';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consumer-signup',
  templateUrl: './consumer-signup.component.html',
  styleUrls: ['./consumer-signup.component.css']
})

export class ConsumerSignupComponent implements OnInit {

  userRole:string;
  consumer: Consumer={"consumerId": null, "consumerName":"", "consumerPassword":"", "consumerPhone": null, "consumerEmail":""};

  public barLabel: string = "Password strength:";
  public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];

  constructor(private router: Router, private authenticationService: AuthenticationService) { }


  ngOnInit() {
    if(this.authenticationService.isUserLoggedIn()){
      this.userRole=sessionStorage.getItem("userRole");
      if(this.userRole==="consumer")
        this.router.navigate(["c/home"]);
      else if(this.userRole==="serviceProvider")
        this.router.navigate(["sp/home"]);
      else
        this.router.navigate(["a/home"]);
    }
  }

  // Adds a new consumer
  signUp() {
    console.log(this.consumer);
    this.authenticationService.consumerSignUp(this.consumer)
    .subscribe(data=>console.log(data),error=>console.log(error));
    this.router.navigate(["login"]);
  }

  // UserName Validations
  nameFlag: boolean= false;
  validateName() {
    var flag =  /^[a-zA-Z ]+$/.test(this.consumer.consumerName);
    if(!flag) {
      this.nameFlag=true;
    }
    else {
      this.nameFlag=false;
    }
  }

  // UserPhone valdiations
  phoneFlag:boolean=false;
    validatePhone(){
        let phone=String(this.consumer.consumerPhone);
        if(phone.length!=10){
            this.phoneFlag=true;
        }else{
            this.phoneFlag=false;
        }
    }

    //UserEmail Validation
    emailFlag:boolean=false;
    validateEmail(){
        var flag=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.consumer.consumerEmail);
        if(!flag){
            this.emailFlag=true;
        }else{
            this.emailFlag=false;
        }
    }

    //UserPassword Validation
    passwordFlag:boolean=false;
    validatePassword(){
        let password=String(this.consumer.consumerPassword);
        if(password.length<8){
            this.passwordFlag=true;
        }else{
            this.passwordFlag=false;
        }
    }

    buttonFlag:boolean=true;
    enableButton(){
        this.buttonFlag=(this.nameFlag||this.emailFlag||this.phoneFlag);
    }



}


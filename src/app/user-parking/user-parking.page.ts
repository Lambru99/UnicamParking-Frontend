import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { Subject, timer } from 'rxjs';
import { finalize, map, takeUntil, takeWhile } from 'rxjs/operators';
import { RouterLink } from '@angular/router';
import { exit } from 'process';

@Component({
  selector: 'app-user-parking',
  templateUrl: './user-parking.page.html',
  styleUrls: ['./user-parking.page.scss'],
})
export class UserParkingPage implements OnInit {
  constructor(private navCtrl: NavController,
    private authService: AuthenticateService) { }
    
    
    private stop$ = new Subject<any>();
    private bool_ : boolean = false;
    private value_: number=0;
    private buffer_: number=this.value;

    

    
    public set bool(v : boolean) {
        this.bool_ = v;
    }

    
    public get bool() : boolean {
        return this.bool_;
    }
    
    
    public set value(v : number) {
        this.value_ = v;
    }

    
    public get value() : number {
        return this.value_;
    }

    
    public set buffer(v : number) {
        this.buffer_ = v;
    }

    
    public get buffer() : number {
        return this.buffer_;
    } 
    
    
    

  ngOnInit() {      

  }



  timer$ = timer(0, 1000).pipe(
    takeUntil(this.stop$),               // stop when `stop$` emits
    takeWhile(_ => this.value_ < 1),     // are you sure `this.value_ == 1` is right?
    finalize(() => this.someMethod()),   // run this method when observable completes
    map(_ => {
      this.value_ = this.value_ + 0.075;
      return this.value_;
    }
  ));

  

  someMethod(){}
  stopTimer(){
    this.stop$.next();
  }

  logout() {
    this.authService.logoutUser()
      .then(res => {
        console.log(res);
        this.navCtrl.navigateBack('');
      })
      .catch(error => {
        console.log(error);
      })
  }
  

  

}

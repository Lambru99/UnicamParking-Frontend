import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.page.html',
  styleUrls: ['./resume.page.scss'],
})
export class ResumePage implements OnInit {

  constructor(private navCtrl: NavController,
    private authService: AuthenticateService,) { }

  ngOnInit() {

    this.authService.userDetails().subscribe(res=>{
      console.log('res',res);
      if (res == null) {
        this.navCtrl.navigateBack('/nologinerror');
      }
    },err => {
      console.log('err', err);
    })
  }


  parcheggioLiberato(){
    this.navCtrl.navigateBack('/parking');
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

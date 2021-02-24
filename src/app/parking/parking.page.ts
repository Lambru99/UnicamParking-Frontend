import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.page.html',
  styleUrls: ['./parking.page.scss'],
})
export class ParkingPage implements OnInit {

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
  constructor(public actionSheetController: ActionSheetController,   
    private navCtrl: NavController,
    private authService: AuthenticateService) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Azioni',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Prenota',
        icon: 'book-outline',
        handler: () => {
          alert("prenotato");
        }
      }]
    });
    await actionSheet.present();
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


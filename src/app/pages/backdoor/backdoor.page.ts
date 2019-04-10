import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-backdoor',
  templateUrl: './backdoor.page.html',
  styleUrls: ['./backdoor.page.scss'],
})
export class BackdoorPage implements OnInit {
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingControl: LoadingController
  ) { }

  ngOnInit() {
  }

  onLogin() {
    this.isLoading = true;
    this.authService.login();
    this.loadingControl
      .create({
        keyboardClose: true,
        message: 'Loading your Chaldea...'
      })
      .then(loadingElement => {
        loadingElement.present();
        setTimeout(() => {
          this.isLoading = false;
          loadingElement.dismiss();
          this.router.navigateByUrl('/user');
        }, 1500);
      });
  }

}

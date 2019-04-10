import { Component, OnInit } from '@angular/core';
import { Servant } from '../../models/servant.model';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
import { ServantService } from '../servant/servant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  servants = Servant[];

  constructor(
    private servantService: ServantService,
    private router: Router
  ) { }

  ngOnInit() {
    this.servants = this.servantService.servants;
  }

  onExpand(servantId: number, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/', 'servant', 'expanded', servantId]);
  }

}

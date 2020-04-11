import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

import { ImageService } from '../image.service';
import { BoardService } from '../board.service';
import { AuthService } from '../auth.service';

import { AddImagePage } from '../add-image/add-image.page';
import { AddImagePageModule } from '../add-image/add-image.module';
// import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-images',
  templateUrl: './images.page.html',
  styleUrls: ['./images.page.scss'],
})
export class ImagesPage {

  image = [];
  imageList = [];
  nextPage = 'https://picsum.photos/v2/list?page=1';

  constructor(
    public alertController: AlertController,
    private http: HttpClient,
    private router: Router,
    private boardService: BoardService,
    private imageService: ImageService,
    private modalController: ModalController,
    public authService: AuthService
    ) {
    this.loadImages();
  }

  loadImages(event?) {
    this.http.get<any[]>(this.nextPage, { observe: 'response'}).subscribe(res => {
      console.log('res: ', res);
      // console.log(this.parse_link_header(res.headers.get('Link')));
      this.nextPage = this.parse_link_header(res.headers.get('Link'))['next'];
      this.imageList = this.imageList.length == 0 ? res.body : [...this.imageList, ...res.body];

      if (event) {
        event.target.complete();
      }
    });
  }

   // https://www.techiediaries.com/angular-httpclient-headers-full-response/
   private parse_link_header(header) {
    if (header.length == 0) {
      return ;
    }

    let parts = header.split(',');
    var links = {};
    parts.forEach( p => {
      let section = p.split(';');
      var url = section[0].replace(/<(.*)>/, '$1').trim();
      var name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;

    });
    return links;
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Welcome to CorkBoard',
      message: 'Please sign in.',
      buttons: [
        {
          text: 'Log in',
          role: 'login',
          cssClass: 'secondary',
          handler: (login) => {
            this.authService.logIn
            console.log('Login');
          }
        }, {
          text: 'Sign in',
          role: 'signin',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  };


  async addImage() {
  }

  getImage(){

  }

  async OpenModal (){
    const modal = await this.modalController.create({
      component: AddImagePage
    });
    return await modal.present();
  }

}

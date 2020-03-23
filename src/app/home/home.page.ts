import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, ModalController } from '@ionic/angular'
import { ImagePage } from '../image/image.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  image = 'image';
  imageList = [];
  nextPage = 'https://picsum.photos/v2/list';

  constructor(private http: HttpClient, public alertController: AlertController,
    private modalController: ModalController) {
    this.loadImages();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Welcome to CorkBoard',
      // subHeader: 'Subtitle',
      message: 'Please sign in.',
      buttons: [
        {
          text: 'Log in',
          role: 'login',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
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

  // async presentAlertPrompt() {
  //   const alert = await this.alertController.create({
  //     header: 'Log in',
  //     inputs: [
  //       {
  //         name: 'email',
  //         type: 'email',
  //         id: 'email',
  //         placeholder: 'robertsmith@corkboard.com'
  //       },
  //       {
  //         name: 'password',
  //         type: 'text',
  //         id: 'password',
  //         // value: 'hello',
  //         placeholder: 'Il0v3C0rk804rd'
  //       },
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: () => {
  //           console.log('Confirm Cancel');
  //         }
  //       }, {
  //         text: 'Ok',
  //         handler: () => {
  //           console.log('Confirm Ok');
  //         }
  //       }
  //     ]
  //   });
  //   await alert.present();
  //   let result = await alert.onDidDismiss();
  //   console.log(result);
  // }

  // async presentAlertPrompt() {
  //   const alert = await this.alertController.create({
  //     header: 'Register',
  //     inputs: [
  //       {
  //         name: 'email',
  //         type: 'email',
  //         id: 'email',
  //         placeholder: 'robertsmith@corkboard.com'
  //       },
  //       {
  //         name: 'password',
  //         type: 'text',
  //         id: 'password',
  //         // value: 'hello',
  //         placeholder: 'Il0v3C0rk804rd'
  //       },
  //       {
  //         name: 'confirmation',
  //         type: 'text',
  //         id: 'password',
  //         // value: 'hello',
  //         placeholder: 'confirm password'
  //       },
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: () => {
  //           console.log('Confirm Cancel');
  //         }
  //       }, {
  //         text: 'Ok',
  //         handler: () => {
  //           console.log('Confirm Ok');
  //         }
  //       }
  //     ]
  //   });

  //   await alert.present();
  //   let result = await alert.onDidDismiss();
  //   console.log(result);
  // }

  openPreview(img) {
    this.modalController.create({
      component: ImagePage,
      componentProps: {
        img: img
      }
    }).then(modal => modal.present());
  };


  loadImages(event?){
    this.http.get<any[]>(this.nextPage, { observe: 'response' }).subscribe(res => {
      console.log('res: ', res);
      // console.log(this.parse_link_header(res.headers.get('Link')));
      this.nextPage = this.parse_link_header(res.headers.get('Link'))['next']
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


}

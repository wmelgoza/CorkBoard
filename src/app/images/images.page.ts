import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-images',
  templateUrl: './images.page.html',
  styleUrls: ['./images.page.scss'],
})
export class ImagesPage {

  imageList = [];
  nextPage = 'https://picsum.photos/v2/list?page=1';

  constructor(private http: HttpClient, public alertController: AlertController) {
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

}


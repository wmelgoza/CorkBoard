import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, NavController } from '@ionic/angular';
import { ImageService } from '../image.service';
import { Image } from '../image.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-image',
  templateUrl: './image.page.html',
  styleUrls: ['./image.page.scss'],
})
export class ImagePage implements OnInit {

  image: Image;
  data: any;
  imageToShow: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private imageService:ImageService,
    private router: Router
    ) { }

  ngOnInit() {

  //   if (this.router.snapshot.data['special']){
  //     this.data = this.router.snapshot.data['special'];
  //   }
  //   let id = this.activatedRoute.snapshot.paramMap.get('id');

  //   this.imageService.getImage(id).subscribe(result => {
  //     console.log('image: ',result);
  //     this.data = result;
  // });
}
createImageFromBlob(image: Blob) {
  let reader = new FileReader();
  reader.addEventListener("load", () => {
     this.imageToShow = reader.result;
  }, false);

  if (image) {
     reader.readAsDataURL(image);
  }
}

getImage(imageUrl: string) {
      // this.isImageLoading = true;
      this.imageService.getImage('https://picsum.photos/').subscribe(data => {
        this.createImageFromBlob(data);
        // this.isImageLoading = false;
      }, error => {
        // this.isImageLoading = false;
        console.log(error);
      });
}

openImageWithService() {
  this.imageService.setData('', '');
  this.router.navigateByUrl('/image/{image}')
}

  }

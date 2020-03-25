import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ImageService } from '../image.service';
import { Image } from '../image.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image',
  templateUrl: './image.page.html',
  styleUrls: ['./image.page.scss'],
})
export class ImagePage implements OnInit {
  information = null;

  constructor(private activatedRoute: ActivatedRoute, private imageService:ImageService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.imageService.getImage(id).subscribe(result => {
      console.log('image: ',result);
      this.information = result;
  });
}

  // private getImage(): void{
  //   this.imageService.getImage().subscribe(
  //     (response:any) => {
  //       this.image = response.image;
  //     }
  //   )
  }

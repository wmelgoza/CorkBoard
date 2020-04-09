import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.page.html',
  styleUrls: ['./add-image.page.scss'],
})
export class AddImagePage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  CloseModal (){
    this.modalController.dismiss();
  }

}

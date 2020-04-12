import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BoardService } from '../board.service';
import { Observable } from 'rxjs';
import { Board } from '../board.model';
import { BoardCreatePage } from '../board-create/board-create.page';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.page.html',
  styleUrls: ['./add-image.page.scss'],
})
export class AddImagePage implements OnInit {

  boards: Board
  title: Title

  constructor(
    private modalController: ModalController,
    private boardService: BoardService,
    private router: Router,
    private http: HttpClient
    ) { }

  ngOnInit() {
  }

  CloseModal (){
    this.modalController.dismiss();
  }

  async CreateBoard (){
    const modal = await this.modalController.create({
      component: BoardCreatePage,
      componentProps: {
        title: this.title
      }
    });
        return await modal.present();
      }
  }



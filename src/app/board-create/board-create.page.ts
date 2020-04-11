import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardService } from '../board.service';
import { Board } from '../board.model';
import { NavParams, ModalController } from '@ionic/angular'

@Component({
  selector: 'app-board-create',
  templateUrl: './board-create.page.html',
  styleUrls: ['./board-create.page.scss'],
})
export class BoardCreatePage implements OnInit {

  @Input() boardTitle: string;

  board:Board = new Board();
  errors: Array<any> = [];
  errorMessage: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private boardService: BoardService,
    private navParams: NavParams,
    private modalController: ModalController
  ) { }

  ngOnInit(): void {}

  response(response:any): void{

    if(response.success===false){
      this.errors = response.error.errors;
      this.errorMessage = response.error._message;
    }

    if(response.success===true){
      this.router.navigate(['/boards']);
    }
  }


}

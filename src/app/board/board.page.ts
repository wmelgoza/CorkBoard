import { Component, OnInit } from '@angular/core';
import { Board } from '../board.model'
import { BoardService } from '../board.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-board',
  templateUrl: './board.page.html',
  styleUrls: ['./board.page.scss'],
})
export class BoardPage implements OnInit {

  board: Board;
  title: String;
  author: String;

  constructor(
    private boardservice: BoardService,
    private activatedroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedroute.params.subscribe(params=>{
      this.getBoard(params['boardTitle']);
    });
  }

  getBoard(title:string):void {
    this.boardservice.getBoard(title).subscribe(
      (response:any)=>{
        this.board = response.board;
      }
    )
  }
}

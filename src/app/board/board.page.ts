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

  board: Board
  title: String

  constructor(
    private boardservice: BoardService,
    private activatedroute: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.route.params.subscribe(
      // (params)=>{
        // if(params['title']){
          // this.getBoard(params['board']);
      // }else{
        // var title=new Title;
        // title.setDate(title.getTitle()-1);
        // this.getBoard(title.toISOString().slice(0, 10));
      }
    }
    // );
  // }
  // };
  // getBoard(title:string):void {
    // this.boardService.getBoard(title)
      // .subscribe((result:any) => {

        // this.board = result;
      // })
  // }


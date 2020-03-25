import { Component, OnInit } from '@angular/core';
import { Board } from '../board.model';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.page.html',
  styleUrls: ['./boards.page.scss'],
})
export class BoardsPage implements OnInit {
  boards:Board;

  constructor(private boardService:BoardService) { }

  ngOnInit() {
    this.getBoards();
  }
  public getBoards(): void{
    this.boardService.getBoards().subscribe(
      (response:any) => {
        this.boards = response.boards;
      }
    )
  }

}

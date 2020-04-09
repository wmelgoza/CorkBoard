import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Board } from './board.model'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  public url: string;

  constructor(private http: HttpClient) {
    let l = window.location;
    let host:string;
    if(l.port >= '8100'){
      host = 'localhost:3000';
    }else{
      host = l.hostname + ((l.port.length>0)?':' + l.port:'');
    }

    this.url = `${l.protocol}//${host}/api/boards/`;
  }

  getBoard(title:string): Observable<Board>{
    return this.http.get<Board>(`${this.url}&title=${title}`);
  };

  getBoards(): Observable<Board>{
    return this.http.get<Board>(this.url, httpOptions);
  }

  updateBoard(board: Board): Observable<Board>{
    return this.http.put<Board>(this.url, board, httpOptions);
  }

  addBoard (board: Board): Observable<Board> {
    return this.http.post<Board>(this.url, board, httpOptions);
  }

  deleteBoard(title: string): Observable<Board>{
    return this.http.delete<Board>(this.url + title);
  }

  createBoard(board: Board): Observable<Board>{
    return this.http.post<Board>(this.url, board, httpOptions);
  }
}

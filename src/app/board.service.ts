import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Board } from './board.model'

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private url: string;

  constructor(
    private http: HttpClient
  ) { }

  getBoard(title:string): Observable<Board>{
    return this.http.get<Board>(`${this.url}&title=${title}`);
  }
}

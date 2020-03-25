import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from './image.model';
import { map } from 'rxjs/operators'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
export enum SearchType {
  all = '',
  image = 'image',
  author = 'author',
  id = 'id'
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  imageList: [];
  nextPage = 'https://picsum.photos/v2/list';
  url = 'https://picsum.photos/';
  results: Observable<any>;
  // apiKey = ''; <-- Can enter a key here!

  constructor(private http: HttpClient) {}

  searchData(author: string, type: SearchType): Observable<any>{
    return this.http.get(`${this.url}?s=${encodeURI(author)}&type=${type}`)
    .pipe(
      map(results => {
        console.log('RAW: ', results);
        return results['Search'];
      })
    );

  }

  getImage(id: string): Observable<Image>{
    return this.http.get<Image>(`${this.url}?i=${id}&plot=full`);
  }


}

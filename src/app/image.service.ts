import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
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

  private data = [];
  imageList: [];
  nextPage = 'https://picsum.photos/v2/list';
  url = 'https://picsum.photos/';
  results: Observable<any>;
  // apiKey = ''; <-- Can enter a key here!

  constructor(private httpClient: HttpClient, private http: HttpClient) {}

  searchData(author: string, type: SearchType): Observable<any>{
    return this.http.get(`${this.url}?s=${encodeURI(author)}&type=${type}`)
    .pipe(
      map(results => {
        console.log('RAW: ', results);
        return results['Search'];
      })
    );

  }

  setData(id, data) {
    this.data[id] = data;
  }

  getData(id): Observable<Image> {
    return this.data[id];
  }

  getImage(imageUrl: string): Observable<Blob> {
    return this.httpClient.get(imageUrl, { responseType: 'blob' });
  }

  updateImage(image: Image): Observable<Image>{
    return this.http.put<Image>(this.url, image, httpOptions);
  }

  addImage (image: Image): Observable<Image> {
    return this.http.post<Image>(this.url, image, httpOptions);
  }

  deleteImage(id: string): Observable<Image>{
    return this.http.delete<Image>(this.url + id);
  }


}

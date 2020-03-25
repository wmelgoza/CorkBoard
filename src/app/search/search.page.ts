import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchType, ImageService } from '../image.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  results: Observable<any>;
  searchTerm = '';
  type: SearchType = SearchType.all;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }

  searchChanged() {
    this.results = this.imageService.searchData(this.searchTerm, this.type);

  }

}

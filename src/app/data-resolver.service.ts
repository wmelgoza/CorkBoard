import { Injectable } from '@angular/core';
import { ImageService } from './image.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve<any> {

  constructor(private imageService: ImageService) {}

  resolve(route: ActivatedRouteSnapshot) {
    let id = route.paramMap.get('id');
    return this.imageService.getData(id);
   }
}

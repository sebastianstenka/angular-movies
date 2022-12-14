import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from 'src/app/constants/images.sizes';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemData: Movie | null = null;

  constructor() {}

  ngOnInit(): void {}

  getImgPath() {
    return `${IMAGES_SIZES.medium + this.itemData?.backdrop_path}`;
  }
}

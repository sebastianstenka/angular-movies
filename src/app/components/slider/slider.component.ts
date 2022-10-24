import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from 'src/app/constants/images.sizes';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [trigger('slideFade', [state('void', style({ opacity: 0 })), transition('void <=> *', [animate('1s')])])]
})
export class SliderComponent implements OnInit {
  @Input() movies: Movie[] = [];
  @Input() isBanner = false;

  currentSlideIndex: number = 0;

  ngOnInit(): void {
    if (this.isBanner) {
      return;
    }
    setInterval(() => {
      this.currentSlideIndex = ++this.currentSlideIndex % this.movies.length;
    }, 5000);
  }

  getImgPath(path: string) {
    return `${IMAGES_SIZES.large + path}`;
  }
}

import { Component, Inject, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss']
})
export class ItemsBannerComponent implements OnInit {
  @Input() title: string = '';
  @Input() items: Movie[] = [];

  constructor() {}

  ngOnInit(): void {}
}

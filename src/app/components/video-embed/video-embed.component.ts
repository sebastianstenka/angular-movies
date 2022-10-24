import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.scss']
})
export class VideoEmbedComponent implements OnInit {
  @Input() site: string = 'YouTube';
  @Input() key: string | null = null;

  youtubeUrl = 'https://www.youtube.com/embed/';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  getSafeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrl + this.key);
  }
}

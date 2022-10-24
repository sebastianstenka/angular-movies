import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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

  videoUrl: SafeResourceUrl = '';

  ngOnInit(): void {
    this.videoUrl = this.getSafeUrl(this.youtubeUrl + this.key);
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

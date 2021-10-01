import { Component, OnInit, ViewChild } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { University } from '../moldels/University.class';
import { UniversityService } from '../serrvice/University.service';
import { map } from 'rxjs/operators';
import {Response} from '@angular/http';
import { Galleria } from 'primeng/galleria';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  images: any[];

  showThumbnails: boolean;

  fullscreen: boolean = false;

  activeIndex: number = 0;

  onFullScreenListener: any;

  @ViewChild('galleria') galleria: Galleria;

  

  ngOnInit() {
    this.images = [
      {
          "previewImageSrc": "https://www.universityworldnews.com/images/articles/20210909160130427_5.jpg",
          "thumbnailImageSrc": "https://www.universityworldnews.com/images/articles/20210909160130427_5.jpg",
          "alt": "Description for Image 1",
          "title": "Title 1"
      },
      {
          "previewImageSrc": "https://www.universityworldnews.com/images/articles/20210910154002695_5.jpg",
          "thumbnailImageSrc": "https://www.universityworldnews.com/images/articles/20210910154002695_5.jpg",
          "alt": "Description for Image 2",
          "title": "Title 2"
      },
      {
          "previewImageSrc": "https://www.universityworldnews.com/images/articles/20210906143544798_5.jpg",
          "thumbnailImageSrc": "https://www.universityworldnews.com/images/articles/20210906143544798_5.jpg",
          "alt": "Description for Image 3",
          "title": "Title 3"
      },
      {
          "previewImageSrc": "https://hcmuni.fpt.edu.vn/Data/Sites/1/News/4378/zing_truong2-(1).jpg",
          "thumbnailImageSrc": "https://hcmuni.fpt.edu.vn/Data/Sites/1/News/4378/zing_truong2-(1).jpg",
          "alt": "Description for Image 4",
          "title": "Title 4"
      }];
    

    this.bindDocumentListeners();
  }

    
    onThumbnailButtonClick() {
      this.showThumbnails = !this.showThumbnails;
  }

  toggleFullScreen() {
      if (this.fullscreen) {
          this.closePreviewFullScreen();
      }
      else {
          this.openPreviewFullScreen();
      }
  }

  openPreviewFullScreen() {
      let elem = this.galleria.element.nativeElement.querySelector(".p-galleria");
      if (elem.requestFullscreen) {
          elem.requestFullscreen();
      }
      else if (elem['mozRequestFullScreen']) { /* Firefox */
          elem['mozRequestFullScreen']();
      }
      else if (elem['webkitRequestFullscreen']) { /* Chrome, Safari & Opera */
          elem['webkitRequestFullscreen']();
      }
      else if (elem['msRequestFullscreen']) { /* IE/Edge */
          elem['msRequestFullscreen']();
      }
  }

  onFullScreenChange() {
      this.fullscreen = !this.fullscreen;
  }

  closePreviewFullScreen() {
      if (document.exitFullscreen) {
          document.exitFullscreen();
      }
      else if (document['mozCancelFullScreen']) {
          document['mozCancelFullScreen']();
      }
      else if (document['webkitExitFullscreen']) {
          document['webkitExitFullscreen']();
      }
      else if (document['msExitFullscreen']) {
          document['msExitFullscreen']();
      }
  }

  bindDocumentListeners() {
      this.onFullScreenListener = this.onFullScreenChange.bind(this);
      document.addEventListener("fullscreenchange", this.onFullScreenListener);
      document.addEventListener("mozfullscreenchange", this.onFullScreenListener);
      document.addEventListener("webkitfullscreenchange", this.onFullScreenListener);
      document.addEventListener("msfullscreenchange", this.onFullScreenListener);
  }

  unbindDocumentListeners() {
      document.removeEventListener("fullscreenchange", this.onFullScreenListener);
      document.removeEventListener("mozfullscreenchange", this.onFullScreenListener);
      document.removeEventListener("webkitfullscreenchange", this.onFullScreenListener);
      document.removeEventListener("msfullscreenchange", this.onFullScreenListener);
      this.onFullScreenListener = null;
  }

  ngOnDestroy() {
      this.unbindDocumentListeners();
  }

  galleriaClass() {
      return `custom-galleria ${this.fullscreen ? 'fullscreen' : ''}`;
  }

  fullScreenIcon() {
      return `pi ${this.fullscreen ? 'pi-window-minimize' : 'pi-window-maximize'}`;
  }
    
}


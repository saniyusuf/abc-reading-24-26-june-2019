import { Component, OnInit } from "@angular/core";
import { Video } from "../../types";
import { VideoDataService } from "../../video-data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-video-dashboard",
  templateUrl: "./video-dashboard.component.html",
  styleUrls: ["./video-dashboard.component.css"]
})
export class VideoDashboardComponent implements OnInit {
  videoData: Observable<Video[]>;
  currentlySelectedVideo: Video;

  constructor(_videoDataService: VideoDataService) {
    this.videoData = _videoDataService.loadVideos();
  }

  ngOnInit() {}

  onVideoSelected(video: Video) {
    this.currentlySelectedVideo = video;
  }
}

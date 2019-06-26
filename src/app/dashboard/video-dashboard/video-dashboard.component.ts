import { Component, OnInit } from "@angular/core";
import { Video } from "../../types";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-video-dashboard",
  templateUrl: "./video-dashboard.component.html",
  styleUrls: ["./video-dashboard.component.css"]
})
export class VideoDashboardComponent implements OnInit {
  videoData: Video[];
  currentlySelectedVideo: Video;

  constructor(httpClient: HttpClient) {
    httpClient
      .get<Video[]>("https://api.angularbootcamp.com/videos")
      .subscribe(videoDataFromAPI => (this.videoData = videoDataFromAPI));
  }

  ngOnInit() {}

  onVideoSelected(video: Video) {
    this.currentlySelectedVideo = video;
  }
}

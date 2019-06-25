import { Component, Input, OnInit } from "@angular/core";
import { Video } from "../../types";

@Component({
  selector: "app-video-list",
  templateUrl: "./video-list.component.html",
  styleUrls: ["./video-list.component.css"]
})
export class VideoListComponent implements OnInit {
  @Input() videoList: Video[];
  selectedVideo: Video;

  constructor() {}

  ngOnInit() {}

  setSelectedVideo(video: Video) {
    this.selectedVideo = video;
  }
}

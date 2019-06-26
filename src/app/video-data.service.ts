import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Video } from "./types";
import { HttpClient } from "@angular/common/http";
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class VideoDataService {
  constructor(private _httpClient: HttpClient) {}

  loadVideos(): Observable<Video[]> {
    return this._httpClient.get<Video[]>(
      "https://api.angularbootcamp.com/videos"
    ).pipe(
      map(videoDataFromServe => {

        let videoData = videoDataFromServe;
        videoData.forEach(video=> video.title = video.title.toUpperCase());
        return videoData;
      })
    );
  }
}

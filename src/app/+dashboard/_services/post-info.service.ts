import { Injectable } from '@angular/core';
import {Subject} from "rxjs/index";
import {environment} from "@env/environment";
import {HttpClient} from "@angular/common/http";
import {VoteModel} from "@models/vote.model";

const BACKEND_URL = environment.apiUrl + '/post/';

@Injectable({
  providedIn: 'root'
})
export class PostInfoService {
  // postCommentedSubject = new Subject<any>();
  votedSubject = new Subject<any>();
  constructor(private http: HttpClient) { }

  // getPostCommentsInfoById (postId) {
  //   this.http.get<any>(BACKEND_URL + 'comment/' + postId)
  //     .subscribe((responseData) => {
  //       this.postCommentedSubject.next(responseData);
  //    });
  // }

  voteForPost(vote) {
    console.log('vote ', vote);
    this.http.post<VoteModel[]>(BACKEND_URL + 'vote', vote)
      .subscribe((responseData) => {
        console.log('voteForPost ', responseData)
        this.votedSubject.next(responseData);
      });
  }

}

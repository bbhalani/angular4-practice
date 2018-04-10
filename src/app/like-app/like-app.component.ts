import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-app',
  templateUrl: './like-app.component.html',
  styleUrls: ['./like-app.component.css']
})
export class LikeAppComponent implements OnInit {
  title = 'Rating Assignment';
  isClicked = false;
  isRatedStar = [];
  rating = 0;
  stars = [0,1,2,3,4];
  constructor() { }
  onKey(rating: number) {
    this.rating = rating;
  }
  
  ngOnInit() {}
  
  isRated(id){
    this.isRatedStar = [];
    for (let index = 0; index <= id; index++) {
      this.isRatedStar[index] = !this.isRatedStar[index]; 
    }
    this.rating = id + 1;
  }
  
}

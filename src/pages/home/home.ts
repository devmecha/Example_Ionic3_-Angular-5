import { Component } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import {MainPage} from '../main/main';
import { ViewChild, trigger, transition, style, state, animate, keyframes } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('bounce', [
      state('*', style({
        transform: 'translate(0)'
      })),
      transition('* => rightMove', animate('700ms ease-out', keyframes([
        style({transform: 'translate(0)', offset: 0}),
        style({transform: 'translate(-65px)', offset: .3}),
        style({transform: 'translate(0)', offset: 1}),
      ]))),
      transition('* => leftMove', animate('700ms ease-out', keyframes([
        style({transform: 'translate(0)', offset: 0}),
        style({transform: 'translate(65px)', offset: .3}),
        style({transform: 'translate(0)', offset: 1}),
      ])))

    ])
  ]
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  skipMsg: string = "Skip";
  state: string = 'x';
  constructor(public navCtrl: NavController) {

  }

  skip() {
    this.navCtrl.push(MainPage);
  }

  slideChnaged() {
    if (this.slides.isEnd()) {
      this.skipMsg = "Intro done!";
    }
  }

  slideMoved() {
    if (this.slides.getActiveIndex() >= this.slides.getPreviousIndex()){
      this.state = 'rightMove';
    }
    else {
      this.state = 'leftMove';
    } 
      
  }

  animationComp() {
    this.state = 'x';
  }

}

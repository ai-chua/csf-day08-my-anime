import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  options: AnimationOptions = {
    path: '/assets/kitty.json'
  }

  constructor(private router: Router, private ngZone: NgZone) { }

  ngOnInit(): void {
  }

  gotoSearch() {
    this.ngZone.run(() => {
      this.router.navigate([ '/search' ])
    })
  }
}

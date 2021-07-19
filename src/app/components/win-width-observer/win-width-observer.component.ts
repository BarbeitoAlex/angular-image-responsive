import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-win-width-observer',
  templateUrl: './win-width-observer.component.html',
  styleUrls: ['./win-width-observer.component.scss'],
})
export class WinWidthObserverComponent implements OnInit {
  width: number;

  @HostListener('window:resize')
  onresize() {
    this.width = window.innerWidth;
  }

  constructor() {}

  ngOnInit(): void {
    this.onresize();
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css'],
})
export class ImagenesComponent implements OnInit {
  @Input() imagenes!: string[];
  @Input() oferta!: number;
  navigations: boolean = false;
  loop: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  img_mouseenterr() {
    this.navigations = true;
  }

  img_mouseleave() {
    this.navigations = false;
  }

  loop_mouseenterr() {
    if (this.imagenes.length > 7) {
      this.loop = true;
    }
  }
}

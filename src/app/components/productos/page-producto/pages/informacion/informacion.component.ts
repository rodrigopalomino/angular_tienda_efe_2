import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css'],
})
export class InformacionComponent implements OnInit {
  @Input() marca!: string;
  @Input() sku!: string;
  @Input() nombre!: string;
  @Input() precio!: number;
  @Input() oferta!: number;
  numero: number = 1;

  constructor() {}

  ngOnInit(): void {}

  clickMas() {
    this.numero++;
  }

  clickMenos() {
    if (this.numero != 1) {
      this.numero--;
    }
  }
}

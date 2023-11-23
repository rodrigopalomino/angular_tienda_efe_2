import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit {
  @Input() descripcion: string = '';
  @Input() especificaciones!: string[];
  @Input() campos!: string[];

  ngOnInit(): void {
    console.log(this.especificaciones);
    console.log(this.campos);
  }
}

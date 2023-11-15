import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrecioPipe } from './precio.pipe';

@NgModule({
  declarations: [PrecioPipe],
  imports: [CommonModule],
  exports: [PrecioPipe],
})
export class PipeModule {}

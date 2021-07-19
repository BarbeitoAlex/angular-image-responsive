import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrl',
})
export class ImageUrlPipe implements PipeTransform {
  transform(value: 400 | 600 | 800 | 1400 | 2000): string {
    return `/assets/TORRE_${value}w.jpg`;
  }
}

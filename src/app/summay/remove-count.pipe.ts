import memo from 'memo-decorator';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeCount',
})
export class RemoveCountPipe implements PipeTransform {
  @memo()
  transform(value: string): any {
    if (!value) {
      return;
    }
    return value.substr(3);
  }
}

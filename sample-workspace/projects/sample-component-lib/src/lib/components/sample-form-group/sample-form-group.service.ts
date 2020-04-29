import { Injectable } from '@angular/core';
import { IAddress } from './sample-form-group.component';


@Injectable()
export class SampleFormGroupService {

  mergeAddress(address: IAddress): string {
    return `〒${address.zipcode} ${this.addSuffix(address.prefecture)} ${address.city}市 ${address.town}町 ${address.otherAddress} ${address.roomNumber}`;
  }

  private addSuffix(prefecture: string) {
    switch (prefecture) {
      case '東京':
        return `${prefecture}都`;
      case '大阪':
      case '京都':
        return `${prefecture}府`;
      case '北海道':
        return `${prefecture}`;
      default:
        return `${prefecture}県`;
    }
  }
}

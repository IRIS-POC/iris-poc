import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { Card } from '../model/card';

@Injectable()
export class CardService {

  constructor() {
  }

  private _cards: BehaviorSubject<Card[]> = new BehaviorSubject<Card[]>([]);

  addCard(card: Card): void {
    this._cards.next(this._cards.getValue().concat(card));
  }

  get cards(): BehaviorSubject<Card[]> {
    return this._cards;
  }
}

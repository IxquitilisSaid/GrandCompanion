import { Injectable } from '@angular/core';
import { Servant } from '../../models/servant.model';

@Injectable({
  providedIn: 'root'
})

export class ServantService {
  private _servants: Servant[] = [
    new Servant(
      // fix this later
    )
  ];

  get servants() {
    return [...this._servants];
  }

  getServants(id: number) {
    return {
      ...this._servants.find(p => p.servantId === id)
    };
  }

  constructor() { }
}

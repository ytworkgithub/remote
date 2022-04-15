import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  log(text: String) {
    console.log(`remote logger service ${text}`);
  }
}

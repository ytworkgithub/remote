import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() input = '';
  @Output() buttonClick = new EventEmitter<string>();

  constructor(private logger: LoggerService) {}

  ngOnInit(): void {
    this.logger.log('ListComponent remote');
  }

  handleButtonClick(value: string) {
    this.buttonClick.emit(value);
  }
}

import { Component, OnInit } from '@angular/core';
import { GlobalEventBus } from './event-bus';
import { testLessons } from '../shared/test-lessons';

@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    GlobalEventBus.notifyObservers(testLessons);
  }

}

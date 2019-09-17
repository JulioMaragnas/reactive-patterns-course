import { Component, OnInit } from '@angular/core';
import { Lesson } from '../shared/lesson';
import { Observer, globalEventBus, LESSON_LIST_AVAILABLE } from '../event-bus-experiments/event-bus';

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.css']
})
export class LessonsCounterComponent implements Observer {
  counter: Lesson[] = [];
  constructor() {
    globalEventBus.registerObserver(LESSON_LIST_AVAILABLE,this);
  }
  notify(data: Lesson[]) {
    this.counter = data;
  }
}

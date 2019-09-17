import { Component, OnInit } from '@angular/core';
import { Observer, globalEventBus, LESSON_LIST_AVAILABLE } from '../event-bus-experiments/event-bus';
import { Lesson } from '../shared/lesson';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements Observer {
  lessons: Lesson[] = [];
  constructor() {
    console.log('Lesson list is registered as an observer');
    globalEventBus.registerObserver(LESSON_LIST_AVAILABLE,this);
  }

  notify(data: Lesson[]) {
    this.lessons = [...data];
  }
}

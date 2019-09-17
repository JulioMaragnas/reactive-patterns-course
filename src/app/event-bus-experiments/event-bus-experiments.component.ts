import { Component, OnInit } from '@angular/core';
import { globalEventBus, LESSON_LIST_AVAILABLE } from './event-bus';
import { testLessons } from '../shared/test-lessons';
import { Lesson } from '../shared/lesson';

@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {
  testLessons = testLessons;
  constructor() { }

  ngOnInit() {
    globalEventBus.notifyObservers(LESSON_LIST_AVAILABLE,this.testLessons);
  }

  addLesson(value) {
    debugger
    const lesson: Lesson = {
      id: Math.random(),
      description: value,
      duration: '4:00'
    }
    this.testLessons = [...this.testLessons, lesson];
    globalEventBus.notifyObservers(LESSON_LIST_AVAILABLE,this.testLessons);
  }

}

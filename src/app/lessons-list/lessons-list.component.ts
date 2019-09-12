import { Component, OnInit } from '@angular/core';
import { Observer, GlobalEventBus } from 'app/event-bus-experiments/event-bus';
import { Lesson } from '../shared/lesson';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit, Observer {
  lessons: Lesson[] = [];
  constructor() { }
  
  ngOnInit() {
    GlobalEventBus.registerObserver(this);
  }
  
  notify(data: Lesson[]) {
    this.lessons = [...data];
  }
}

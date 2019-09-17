import * as _ from 'lodash';

export interface Observer {
  notify(data: any);
}

export interface Subject {
  registerObserver(eventType: string, obs: Observer);
  unRegisterObserver(eventType: string, obs: Observer);
  notifyObservers(eventType: string, data: any);
}

class EventBus implements Subject {
  private observers: {[key: string]: Observer[] } = {};

  registerObserver(eventType, obs: Observer) {
    this.observers[eventType] = [...this.observersPerEventType(eventType), obs]
  }  
  unRegisterObserver(eventType, obs: Observer) {
    _.remove(this.observersPerEventType(eventType), el => el === obs)
  }
  notifyObservers(eventType, data: any) {
    _.forEach(this.observersPerEventType(eventType), el => el.notify(data));
  }

  private observersPerEventType(eventType: string): Observer[] {
    const observerPerType = this.observers[eventType];
    if (!observerPerType) {
      this.observers[eventType] = []
    }
    return this.observers[eventType];
  }
}

export const ADD_NEW_LESSON = 'ADD_NEW_LESSON';
export const LESSON_LIST_AVAILABLE = 'LESSON_LIST_AVAILABLE';
export const globalEventBus = new EventBus();

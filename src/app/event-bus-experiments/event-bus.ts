import * as _ from 'lodash';

export interface Observer {
  notify(data: any);
}

export interface Subject {
  registerObserver(obs: Observer);
  unRegisterObserver(obs: Observer);
  notifyObservers(data: any);
}

class EventBus implements Subject {
  private observers: Observer[] = [];
  registerObserver(obs: Observer) {
    this.observers = [...this.observers, obs]
  }  
  unRegisterObserver(obs: Observer) {
    _.remove(this.observers, el => el === obs)
  }
  notifyObservers(data: any) {
    _.forEach(this.observers, el => el.notify(data));
  }
}

export const GlobalEventBus = new EventBus();

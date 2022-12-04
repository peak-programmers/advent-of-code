import Observer from "../Observer/Observer.interface";


export default class Observable {

  #observers: Observer[] = [];

  registerObserver(observer: Observer) {
    this.#observers.push(observer);
  }

  unregisterObserver(observer: Observer) {
    this.#observers = this.#observers.filter((registeredObserver) => registeredObserver !== observer);
  }

  notifyObservers(state?: any) {
    this.#observers.forEach((observer) => observer.update(state));
  }
}
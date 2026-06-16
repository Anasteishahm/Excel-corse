import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.unsubscribers = [];

    this.prepare();
  }

  // Налаштовуємо наш компонент до init
  prepare() {}

  // Вертає шаблон компонента
  toHTML() {
    return '';
  }

  // Повідомляємо слуачів про події event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }

  // Підписуємося на подію event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn);
    this.unsubscribers.push(unsub);
  }

  // Ініціалізуємо компонент
  // Додаємо ДОМ слухачів
  init() {
    this.initDOMListener();
  }

  // Видаляємо компонент
  // Чистимо слуачів
  destroy() {
    this.removeDOMListeners();
    this.unsubscribers.forEach((unsub) => unsub());
  }
}



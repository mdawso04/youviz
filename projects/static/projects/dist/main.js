(self["webpackChunkprojects"] = self["webpackChunkprojects"] || []).push([["main"],{

/***/ 7100:
/*!************************************************!*\
  !*** ./static/projects/src/scss/projects.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 395:
/*!********************************************************!*\
  !*** ./static/projects/src/bootstrap/js/dist/alert.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap alert.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./util/index */ 7317), __webpack_require__(/*! ./dom/event-handler */ 1426), __webpack_require__(/*! ./base-component */ 3824), __webpack_require__(/*! ./util/component-functions */ 7980)) :
  0;
})(this, (function (index, EventHandler, BaseComponent, componentFunctions) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  const BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME = 'alert';
  const DATA_KEY = 'bs.alert';
  const EVENT_KEY = `.${DATA_KEY}`;
  const EVENT_CLOSE = `close${EVENT_KEY}`;
  const EVENT_CLOSED = `closed${EVENT_KEY}`;
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_SHOW = 'show';
  /**
   * Class definition
   */

  class Alert extends BaseComponent__default.default {
    // Getters
    static get NAME() {
      return NAME;
    } // Public


    close() {
      const closeEvent = EventHandler__default.default.trigger(this._element, EVENT_CLOSE);

      if (closeEvent.defaultPrevented) {
        return;
      }

      this._element.classList.remove(CLASS_NAME_SHOW);

      const isAnimated = this._element.classList.contains(CLASS_NAME_FADE);

      this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
    } // Private


    _destroyElement() {
      this._element.remove();

      EventHandler__default.default.trigger(this._element, EVENT_CLOSED);
      this.dispose();
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Alert.getOrCreateInstance(this);

        if (typeof config !== 'string') {
          return;
        }

        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config](this);
      });
    }

  }
  /**
   * Data API implementation
   */


  componentFunctions.enableDismissTrigger(Alert, 'close');
  /**
   * jQuery
   */

  index.defineJQueryPlugin(Alert);

  return Alert;

}));


/***/ }),

/***/ 3824:
/*!*****************************************************************!*\
  !*** ./static/projects/src/bootstrap/js/dist/base-component.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap base-component.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./dom/data */ 8395), __webpack_require__(/*! ./util/index */ 7317), __webpack_require__(/*! ./dom/event-handler */ 1426), __webpack_require__(/*! ./util/config */ 3634)) :
  0;
})(this, (function (Data, index, EventHandler, Config) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const Data__default = /*#__PURE__*/_interopDefaultLegacy(Data);
  const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  const Config__default = /*#__PURE__*/_interopDefaultLegacy(Config);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): base-component.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const VERSION = '5.2.3';
  /**
   * Class definition
   */

  class BaseComponent extends Config__default.default {
    constructor(element, config) {
      super();
      element = index.getElement(element);

      if (!element) {
        return;
      }

      this._element = element;
      this._config = this._getConfig(config);
      Data__default.default.set(this._element, this.constructor.DATA_KEY, this);
    } // Public


    dispose() {
      Data__default.default.remove(this._element, this.constructor.DATA_KEY);
      EventHandler__default.default.off(this._element, this.constructor.EVENT_KEY);

      for (const propertyName of Object.getOwnPropertyNames(this)) {
        this[propertyName] = null;
      }
    }

    _queueCallback(callback, element, isAnimated = true) {
      index.executeAfterTransition(callback, element, isAnimated);
    }

    _getConfig(config) {
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);

      this._typeCheckConfig(config);

      return config;
    } // Static


    static getInstance(element) {
      return Data__default.default.get(index.getElement(element), this.DATA_KEY);
    }

    static getOrCreateInstance(element, config = {}) {
      return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
    }

    static get VERSION() {
      return VERSION;
    }

    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }

    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }

    static eventName(name) {
      return `${name}${this.EVENT_KEY}`;
    }

  }

  return BaseComponent;

}));


/***/ }),

/***/ 8089:
/*!*********************************************************!*\
  !*** ./static/projects/src/bootstrap/js/dist/button.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap button.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./util/index */ 7317), __webpack_require__(/*! ./dom/event-handler */ 1426), __webpack_require__(/*! ./base-component */ 3824)) :
  0;
})(this, (function (index, EventHandler, BaseComponent) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  const BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME = 'button';
  const DATA_KEY = 'bs.button';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const CLASS_NAME_ACTIVE = 'active';
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="button"]';
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  /**
   * Class definition
   */

  class Button extends BaseComponent__default.default {
    // Getters
    static get NAME() {
      return NAME;
    } // Public


    toggle() {
      // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
      this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE));
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Button.getOrCreateInstance(this);

        if (config === 'toggle') {
          data[config]();
        }
      });
    }

  }
  /**
   * Data API implementation
   */


  EventHandler__default.default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, event => {
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE);
    const data = Button.getOrCreateInstance(button);
    data.toggle();
  });
  /**
   * jQuery
   */

  index.defineJQueryPlugin(Button);

  return Button;

}));


/***/ }),

/***/ 8480:
/*!***********************************************************!*\
  !*** ./static/projects/src/bootstrap/js/dist/carousel.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap carousel.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./util/index */ 7317), __webpack_require__(/*! ./dom/event-handler */ 1426), __webpack_require__(/*! ./dom/manipulator */ 9800), __webpack_require__(/*! ./dom/selector-engine */ 418), __webpack_require__(/*! ./util/swipe */ 4355), __webpack_require__(/*! ./base-component */ 3824)) :
  0;
})(this, (function (index, EventHandler, Manipulator, SelectorEngine, Swipe, BaseComponent) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  const Manipulator__default = /*#__PURE__*/_interopDefaultLegacy(Manipulator);
  const SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  const Swipe__default = /*#__PURE__*/_interopDefaultLegacy(Swipe);
  const BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): carousel.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME = 'carousel';
  const DATA_KEY = 'bs.carousel';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const ARROW_LEFT_KEY = 'ArrowLeft';
  const ARROW_RIGHT_KEY = 'ArrowRight';
  const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  const ORDER_NEXT = 'next';
  const ORDER_PREV = 'prev';
  const DIRECTION_LEFT = 'left';
  const DIRECTION_RIGHT = 'right';
  const EVENT_SLIDE = `slide${EVENT_KEY}`;
  const EVENT_SLID = `slid${EVENT_KEY}`;
  const EVENT_KEYDOWN = `keydown${EVENT_KEY}`;
  const EVENT_MOUSEENTER = `mouseenter${EVENT_KEY}`;
  const EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY}`;
  const EVENT_DRAG_START = `dragstart${EVENT_KEY}`;
  const EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  const CLASS_NAME_CAROUSEL = 'carousel';
  const CLASS_NAME_ACTIVE = 'active';
  const CLASS_NAME_SLIDE = 'slide';
  const CLASS_NAME_END = 'carousel-item-end';
  const CLASS_NAME_START = 'carousel-item-start';
  const CLASS_NAME_NEXT = 'carousel-item-next';
  const CLASS_NAME_PREV = 'carousel-item-prev';
  const SELECTOR_ACTIVE = '.active';
  const SELECTOR_ITEM = '.carousel-item';
  const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
  const SELECTOR_ITEM_IMG = '.carousel-item img';
  const SELECTOR_INDICATORS = '.carousel-indicators';
  const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
  const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  const KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY]: DIRECTION_LEFT
  };
  const Default = {
    interval: 5000,
    keyboard: true,
    pause: 'hover',
    ride: false,
    touch: true,
    wrap: true
  };
  const DefaultType = {
    interval: '(number|boolean)',
    // TODO:v6 remove boolean support
    keyboard: 'boolean',
    pause: '(string|boolean)',
    ride: '(boolean|string)',
    touch: 'boolean',
    wrap: 'boolean'
  };
  /**
   * Class definition
   */

  class Carousel extends BaseComponent__default.default {
    constructor(element, config) {
      super(element, config);
      this._interval = null;
      this._activeElement = null;
      this._isSliding = false;
      this.touchTimeout = null;
      this._swipeHelper = null;
      this._indicatorsElement = SelectorEngine__default.default.findOne(SELECTOR_INDICATORS, this._element);

      this._addEventListeners();

      if (this._config.ride === CLASS_NAME_CAROUSEL) {
        this.cycle();
      }
    } // Getters


    static get Default() {
      return Default;
    }

    static get DefaultType() {
      return DefaultType;
    }

    static get NAME() {
      return NAME;
    } // Public


    next() {
      this._slide(ORDER_NEXT);
    }

    nextWhenVisible() {
      // FIXME TODO use `document.visibilityState`
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && index.isVisible(this._element)) {
        this.next();
      }
    }

    prev() {
      this._slide(ORDER_PREV);
    }

    pause() {
      if (this._isSliding) {
        index.triggerTransitionEnd(this._element);
      }

      this._clearInterval();
    }

    cycle() {
      this._clearInterval();

      this._updateInterval();

      this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }

    _maybeEnableCycle() {
      if (!this._config.ride) {
        return;
      }

      if (this._isSliding) {
        EventHandler__default.default.one(this._element, EVENT_SLID, () => this.cycle());
        return;
      }

      this.cycle();
    }

    to(index) {
      const items = this._getItems();

      if (index > items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        EventHandler__default.default.one(this._element, EVENT_SLID, () => this.to(index));
        return;
      }

      const activeIndex = this._getItemIndex(this._getActive());

      if (activeIndex === index) {
        return;
      }

      const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;

      this._slide(order, items[index]);
    }

    dispose() {
      if (this._swipeHelper) {
        this._swipeHelper.dispose();
      }

      super.dispose();
    } // Private


    _configAfterMerge(config) {
      config.defaultInterval = config.interval;
      return config;
    }

    _addEventListeners() {
      if (this._config.keyboard) {
        EventHandler__default.default.on(this._element, EVENT_KEYDOWN, event => this._keydown(event));
      }

      if (this._config.pause === 'hover') {
        EventHandler__default.default.on(this._element, EVENT_MOUSEENTER, () => this.pause());
        EventHandler__default.default.on(this._element, EVENT_MOUSELEAVE, () => this._maybeEnableCycle());
      }

      if (this._config.touch && Swipe__default.default.isSupported()) {
        this._addTouchEventListeners();
      }
    }

    _addTouchEventListeners() {
      for (const img of SelectorEngine__default.default.find(SELECTOR_ITEM_IMG, this._element)) {
        EventHandler__default.default.on(img, EVENT_DRAG_START, event => event.preventDefault());
      }

      const endCallBack = () => {
        if (this._config.pause !== 'hover') {
          return;
        } // If it's a touch-enabled device, mouseenter/leave are fired as
        // part of the mouse compatibility events on first tap - the carousel
        // would stop cycling until user tapped out of it;
        // here, we listen for touchend, explicitly pause the carousel
        // (as if it's the second time we tap on it, mouseenter compat event
        // is NOT fired) and after a timeout (to allow for mouse compatibility
        // events to fire) we explicitly restart cycling


        this.pause();

        if (this.touchTimeout) {
          clearTimeout(this.touchTimeout);
        }

        this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
      };

      const swipeConfig = {
        leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
        rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
        endCallback: endCallBack
      };
      this._swipeHelper = new Swipe__default.default(this._element, swipeConfig);
    }

    _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      const direction = KEY_TO_DIRECTION[event.key];

      if (direction) {
        event.preventDefault();

        this._slide(this._directionToOrder(direction));
      }
    }

    _getItemIndex(element) {
      return this._getItems().indexOf(element);
    }

    _setActiveIndicatorElement(index) {
      if (!this._indicatorsElement) {
        return;
      }

      const activeIndicator = SelectorEngine__default.default.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
      activeIndicator.classList.remove(CLASS_NAME_ACTIVE);
      activeIndicator.removeAttribute('aria-current');
      const newActiveIndicator = SelectorEngine__default.default.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);

      if (newActiveIndicator) {
        newActiveIndicator.classList.add(CLASS_NAME_ACTIVE);
        newActiveIndicator.setAttribute('aria-current', 'true');
      }
    }

    _updateInterval() {
      const element = this._activeElement || this._getActive();

      if (!element) {
        return;
      }

      const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);
      this._config.interval = elementInterval || this._config.defaultInterval;
    }

    _slide(order, element = null) {
      if (this._isSliding) {
        return;
      }

      const activeElement = this._getActive();

      const isNext = order === ORDER_NEXT;
      const nextElement = element || index.getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);

      if (nextElement === activeElement) {
        return;
      }

      const nextElementIndex = this._getItemIndex(nextElement);

      const triggerEvent = eventName => {
        return EventHandler__default.default.trigger(this._element, eventName, {
          relatedTarget: nextElement,
          direction: this._orderToDirection(order),
          from: this._getItemIndex(activeElement),
          to: nextElementIndex
        });
      };

      const slideEvent = triggerEvent(EVENT_SLIDE);

      if (slideEvent.defaultPrevented) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        // todo: change tests that use empty divs to avoid this check
        return;
      }

      const isCycling = Boolean(this._interval);
      this.pause();
      this._isSliding = true;

      this._setActiveIndicatorElement(nextElementIndex);

      this._activeElement = nextElement;
      const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
      nextElement.classList.add(orderClassName);
      index.reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);

      const completeCallBack = () => {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add(CLASS_NAME_ACTIVE);
        activeElement.classList.remove(CLASS_NAME_ACTIVE, orderClassName, directionalClassName);
        this._isSliding = false;
        triggerEvent(EVENT_SLID);
      };

      this._queueCallback(completeCallBack, activeElement, this._isAnimated());

      if (isCycling) {
        this.cycle();
      }
    }

    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_SLIDE);
    }

    _getActive() {
      return SelectorEngine__default.default.findOne(SELECTOR_ACTIVE_ITEM, this._element);
    }

    _getItems() {
      return SelectorEngine__default.default.find(SELECTOR_ITEM, this._element);
    }

    _clearInterval() {
      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }
    }

    _directionToOrder(direction) {
      if (index.isRTL()) {
        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
      }

      return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }

    _orderToDirection(order) {
      if (index.isRTL()) {
        return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }

      return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Carousel.getOrCreateInstance(this, config);

        if (typeof config === 'number') {
          data.to(config);
          return;
        }

        if (typeof config === 'string') {
          if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config]();
        }
      });
    }

  }
  /**
   * Data API implementation
   */


  EventHandler__default.default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_SLIDE, function (event) {
    const target = index.getElementFromSelector(this);

    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
      return;
    }

    event.preventDefault();
    const carousel = Carousel.getOrCreateInstance(target);
    const slideIndex = this.getAttribute('data-bs-slide-to');

    if (slideIndex) {
      carousel.to(slideIndex);

      carousel._maybeEnableCycle();

      return;
    }

    if (Manipulator__default.default.getDataAttribute(this, 'slide') === 'next') {
      carousel.next();

      carousel._maybeEnableCycle();

      return;
    }

    carousel.prev();

    carousel._maybeEnableCycle();
  });
  EventHandler__default.default.on(window, EVENT_LOAD_DATA_API, () => {
    const carousels = SelectorEngine__default.default.find(SELECTOR_DATA_RIDE);

    for (const carousel of carousels) {
      Carousel.getOrCreateInstance(carousel);
    }
  });
  /**
   * jQuery
   */

  index.defineJQueryPlugin(Carousel);

  return Carousel;

}));


/***/ }),

/***/ 9791:
/*!***********************************************************!*\
  !*** ./static/projects/src/bootstrap/js/dist/collapse.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap collapse.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./util/index */ 7317), __webpack_require__(/*! ./dom/event-handler */ 1426), __webpack_require__(/*! ./dom/selector-engine */ 418), __webpack_require__(/*! ./base-component */ 3824)) :
  0;
})(this, (function (index, EventHandler, SelectorEngine, BaseComponent) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  const SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  const BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME = 'collapse';
  const DATA_KEY = 'bs.collapse';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  const CLASS_NAME_SHOW = 'show';
  const CLASS_NAME_COLLAPSE = 'collapse';
  const CLASS_NAME_COLLAPSING = 'collapsing';
  const CLASS_NAME_COLLAPSED = 'collapsed';
  const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
  const CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
  const WIDTH = 'width';
  const HEIGHT = 'height';
  const SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="collapse"]';
  const Default = {
    parent: null,
    toggle: true
  };
  const DefaultType = {
    parent: '(null|element)',
    toggle: 'boolean'
  };
  /**
   * Class definition
   */

  class Collapse extends BaseComponent__default.default {
    constructor(element, config) {
      super(element, config);
      this._isTransitioning = false;
      this._triggerArray = [];
      const toggleList = SelectorEngine__default.default.find(SELECTOR_DATA_TOGGLE);

      for (const elem of toggleList) {
        const selector = index.getSelectorFromElement(elem);
        const filterElement = SelectorEngine__default.default.find(selector).filter(foundElement => foundElement === this._element);

        if (selector !== null && filterElement.length) {
          this._triggerArray.push(elem);
        }
      }

      this._initializeChildren();

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    static get Default() {
      return Default;
    }

    static get DefaultType() {
      return DefaultType;
    }

    static get NAME() {
      return NAME;
    } // Public


    toggle() {
      if (this._isShown()) {
        this.hide();
      } else {
        this.show();
      }
    }

    show() {
      if (this._isTransitioning || this._isShown()) {
        return;
      }

      let activeChildren = []; // find active children

      if (this._config.parent) {
        activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter(element => element !== this._element).map(element => Collapse.getOrCreateInstance(element, {
          toggle: false
        }));
      }

      if (activeChildren.length && activeChildren[0]._isTransitioning) {
        return;
      }

      const startEvent = EventHandler__default.default.trigger(this._element, EVENT_SHOW);

      if (startEvent.defaultPrevented) {
        return;
      }

      for (const activeInstance of activeChildren) {
        activeInstance.hide();
      }

      const dimension = this._getDimension();

      this._element.classList.remove(CLASS_NAME_COLLAPSE);

      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.style[dimension] = 0;

      this._addAriaAndCollapsedClass(this._triggerArray, true);

      this._isTransitioning = true;

      const complete = () => {
        this._isTransitioning = false;

        this._element.classList.remove(CLASS_NAME_COLLAPSING);

        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);

        this._element.style[dimension] = '';
        EventHandler__default.default.trigger(this._element, EVENT_SHOWN);
      };

      const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      const scrollSize = `scroll${capitalizedDimension}`;

      this._queueCallback(complete, this._element, true);

      this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }

    hide() {
      if (this._isTransitioning || !this._isShown()) {
        return;
      }

      const startEvent = EventHandler__default.default.trigger(this._element, EVENT_HIDE);

      if (startEvent.defaultPrevented) {
        return;
      }

      const dimension = this._getDimension();

      this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
      index.reflow(this._element);

      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);

      for (const trigger of this._triggerArray) {
        const element = index.getElementFromSelector(trigger);

        if (element && !this._isShown(element)) {
          this._addAriaAndCollapsedClass([trigger], false);
        }
      }

      this._isTransitioning = true;

      const complete = () => {
        this._isTransitioning = false;

        this._element.classList.remove(CLASS_NAME_COLLAPSING);

        this._element.classList.add(CLASS_NAME_COLLAPSE);

        EventHandler__default.default.trigger(this._element, EVENT_HIDDEN);
      };

      this._element.style[dimension] = '';

      this._queueCallback(complete, this._element, true);
    }

    _isShown(element = this._element) {
      return element.classList.contains(CLASS_NAME_SHOW);
    } // Private


    _configAfterMerge(config) {
      config.toggle = Boolean(config.toggle); // Coerce string values

      config.parent = index.getElement(config.parent);
      return config;
    }

    _getDimension() {
      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }

    _initializeChildren() {
      if (!this._config.parent) {
        return;
      }

      const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE);

      for (const element of children) {
        const selected = index.getElementFromSelector(element);

        if (selected) {
          this._addAriaAndCollapsedClass([element], this._isShown(selected));
        }
      }
    }

    _getFirstLevelChildren(selector) {
      const children = SelectorEngine__default.default.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent); // remove children if greater depth

      return SelectorEngine__default.default.find(selector, this._config.parent).filter(element => !children.includes(element));
    }

    _addAriaAndCollapsedClass(triggerArray, isOpen) {
      if (!triggerArray.length) {
        return;
      }

      for (const element of triggerArray) {
        element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
        element.setAttribute('aria-expanded', isOpen);
      }
    } // Static


    static jQueryInterface(config) {
      const _config = {};

      if (typeof config === 'string' && /show|hide/.test(config)) {
        _config.toggle = false;
      }

      return this.each(function () {
        const data = Collapse.getOrCreateInstance(this, _config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config]();
        }
      });
    }

  }
  /**
   * Data API implementation
   */


  EventHandler__default.default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
      event.preventDefault();
    }

    const selector = index.getSelectorFromElement(this);
    const selectorElements = SelectorEngine__default.default.find(selector);

    for (const element of selectorElements) {
      Collapse.getOrCreateInstance(element, {
        toggle: false
      }).toggle();
    }
  });
  /**
   * jQuery
   */

  index.defineJQueryPlugin(Collapse);

  return Collapse;

}));


/***/ }),

/***/ 8395:
/*!***********************************************************!*\
  !*** ./static/projects/src/bootstrap/js/dist/dom/data.js ***!
  \***********************************************************/
/***/ (function(module) {

/*!
  * Bootstrap data.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Constants
   */
  const elementMap = new Map();
  const data = {
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, new Map());
      }

      const instanceMap = elementMap.get(element); // make it clear we only want one instance per element
      // can be removed later when multiple key/instances are fine to be used

      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        // eslint-disable-next-line no-console
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
      }

      instanceMap.set(key, instance);
    },

    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }

      return null;
    },

    remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }

      const instanceMap = elementMap.get(element);
      instanceMap.delete(key); // free up element references if there are no instances left for an element

      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }

  };

  return data;

}));


/***/ }),

/***/ 1426:
/*!********************************************************************!*\
  !*** ./static/projects/src/bootstrap/js/dist/dom/event-handler.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap event-handler.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ../util/index */ 7317)) :
  0;
})(this, (function (index) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): dom/event-handler.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  const stripNameRegex = /\..*/;
  const stripUidRegex = /::\d+$/;
  const eventRegistry = {}; // Events storage

  let uidEvent = 1;
  const customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  };
  const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
  /**
   * Private methods
   */

  function makeEventUid(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }

  function getElementEvents(element) {
    const uid = makeEventUid(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }

  function bootstrapHandler(element, fn) {
    return function handler(event) {
      hydrateObj(event, {
        delegateTarget: element
      });

      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }

      return fn.apply(element, [event]);
    };
  }

  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);

      for (let {
        target
      } = event; target && target !== this; target = target.parentNode) {
        for (const domElement of domElements) {
          if (domElement !== target) {
            continue;
          }

          hydrateObj(event, {
            delegateTarget: target
          });

          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn);
          }

          return fn.apply(target, [event]);
        }
      }
    };
  }

  function findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find(event => event.callable === callable && event.delegationSelector === delegationSelector);
  }

  function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === 'string'; // todo: tooltip passes `false` instead of selector, so we need to check

    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = getTypeEvent(originalTypeEvent);

    if (!nativeEvents.has(typeEvent)) {
      typeEvent = originalTypeEvent;
    }

    return [isDelegated, callable, typeEvent];
  }

  function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction); // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does

    if (originalTypeEvent in customEvents) {
      const wrapFunction = fn => {
        return function (event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn.call(this, event);
          }
        };
      };

      callable = wrapFunction(callable);
    }

    const events = getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);

    if (previousFunction) {
      previousFunction.oneOff = previousFunction.oneOff && oneOff;
      return;
    }

    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''));
    const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn.delegationSelector = isDelegated ? handler : null;
    fn.callable = callable;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, isDelegated);
  }

  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);

    if (!fn) {
      return;
    }

    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }

  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};

    for (const handlerKey of Object.keys(storeElementEvent)) {
      if (handlerKey.includes(namespace)) {
        const event = storeElementEvent[handlerKey];
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  }

  function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace(stripNameRegex, '');
    return customEvents[event] || event;
  }

  const EventHandler = {
    on(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, false);
    },

    one(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, true);
    },

    off(element, originalTypeEvent, handler, delegationFunction) {
      if (typeof originalTypeEvent !== 'string' || !element) {
        return;
      }

      const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getElementEvents(element);
      const storeElementEvent = events[typeEvent] || {};
      const isNamespace = originalTypeEvent.startsWith('.');

      if (typeof callable !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!Object.keys(storeElementEvent).length) {
          return;
        }

        removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
        return;
      }

      if (isNamespace) {
        for (const elementEvent of Object.keys(events)) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        }
      }

      for (const keyHandlers of Object.keys(storeElementEvent)) {
        const handlerKey = keyHandlers.replace(stripUidRegex, '');

        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          const event = storeElementEvent[keyHandlers];
          removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
      }
    },

    trigger(element, event, args) {
      if (typeof event !== 'string' || !element) {
        return null;
      }

      const $ = index.getjQuery();
      const typeEvent = getTypeEvent(event);
      const inNamespace = event !== typeEvent;
      let jQueryEvent = null;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;

      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }

      let evt = new Event(event, {
        bubbles,
        cancelable: true
      });
      evt = hydrateObj(evt, args);

      if (defaultPrevented) {
        evt.preventDefault();
      }

      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }

      if (evt.defaultPrevented && jQueryEvent) {
        jQueryEvent.preventDefault();
      }

      return evt;
    }

  };

  function hydrateObj(obj, meta) {
    for (const [key, value] of Object.entries(meta || {})) {
      try {
        obj[key] = value;
      } catch (_unused) {
        Object.defineProperty(obj, key, {
          configurable: true,

          get() {
            return value;
          }

        });
      }
    }

    return obj;
  }

  return EventHandler;

}));


/***/ }),

/***/ 9800:
/*!******************************************************************!*\
  !*** ./static/projects/src/bootstrap/js/dist/dom/manipulator.js ***!
  \******************************************************************/
/***/ (function(module) {

/*!
  * Bootstrap manipulator.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  function normalizeData(value) {
    if (value === 'true') {
      return true;
    }

    if (value === 'false') {
      return false;
    }

    if (value === Number(value).toString()) {
      return Number(value);
    }

    if (value === '' || value === 'null') {
      return null;
    }

    if (typeof value !== 'string') {
      return value;
    }

    try {
      return JSON.parse(decodeURIComponent(value));
    } catch (_unused) {
      return value;
    }
  }

  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
  }

  const Manipulator = {
    setDataAttribute(element, key, value) {
      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },

    removeDataAttribute(element, key) {
      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },

    getDataAttributes(element) {
      if (!element) {
        return {};
      }

      const attributes = {};
      const bsKeys = Object.keys(element.dataset).filter(key => key.startsWith('bs') && !key.startsWith('bsConfig'));

      for (const key of bsKeys) {
        let pureKey = key.replace(/^bs/, '');
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      }

      return attributes;
    },

    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    }

  };

  return Manipulator;

}));


/***/ }),

/***/ 418:
/*!**********************************************************************!*\
  !*** ./static/projects/src/bootstrap/js/dist/dom/selector-engine.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap selector-engine.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ../util/index */ 7317)) :
  0;
})(this, (function (index) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },

    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },

    children(element, selector) {
      return [].concat(...element.children).filter(child => child.matches(selector));
    },

    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode.closest(selector);

      while (ancestor) {
        parents.push(ancestor);
        ancestor = ancestor.parentNode.closest(selector);
      }

      return parents;
    },

    prev(element, selector) {
      let previous = element.previousElementSibling;

      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }

        previous = previous.previousElementSibling;
      }

      return [];
    },

    // TODO: this is now unused; remove later along with prev()
    next(element, selector) {
      let next = element.nextElementSibling;

      while (next) {
        if (next.matches(selector)) {
          return [next];
        }

        next = next.nextElementSibling;
      }

      return [];
    },

    focusableChildren(element) {
      const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(selector => `${selector}:not([tabindex^="-"])`).join(',');
      return this.find(focusables, element).filter(el => !index.isDisabled(el) && index.isVisible(el));
    }

  };

  return SelectorEngine;

}));


/***/ }),

/***/ 6835:
/*!***********************************************************!*\
  !*** ./static/projects/src/bootstrap/js/dist/dropdown.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap dropdown.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! @popperjs/core */ 4797), __webpack_require__(/*! ./util/index */ 7317), __webpack_require__(/*! ./dom/event-handler */ 1426), __webpack_require__(/*! ./dom/manipulator */ 9800), __webpack_require__(/*! ./dom/selector-engine */ 418), __webpack_require__(/*! ./base-component */ 3824)) :
  0;
})(this, (function (Popper, index, EventHandler, Manipulator, SelectorEngine, BaseComponent) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
    if (e) {
      for (const k in e) {
        if (k !== 'default') {
          const d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }

  const Popper__namespace = /*#__PURE__*/_interopNamespace(Popper);
  const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  const Manipulator__default = /*#__PURE__*/_interopDefaultLegacy(Manipulator);
  const SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  const BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME = 'dropdown';
  const DATA_KEY = 'bs.dropdown';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const ESCAPE_KEY = 'Escape';
  const TAB_KEY = 'Tab';
  const ARROW_UP_KEY = 'ArrowUp';
  const ARROW_DOWN_KEY = 'ArrowDown';
  const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY}${DATA_API_KEY}`;
  const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY}${DATA_API_KEY}`;
  const CLASS_NAME_SHOW = 'show';
  const CLASS_NAME_DROPUP = 'dropup';
  const CLASS_NAME_DROPEND = 'dropend';
  const CLASS_NAME_DROPSTART = 'dropstart';
  const CLASS_NAME_DROPUP_CENTER = 'dropup-center';
  const CLASS_NAME_DROPDOWN_CENTER = 'dropdown-center';
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
  const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE}.${CLASS_NAME_SHOW}`;
  const SELECTOR_MENU = '.dropdown-menu';
  const SELECTOR_NAVBAR = '.navbar';
  const SELECTOR_NAVBAR_NAV = '.navbar-nav';
  const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  const PLACEMENT_TOP = index.isRTL() ? 'top-end' : 'top-start';
  const PLACEMENT_TOPEND = index.isRTL() ? 'top-start' : 'top-end';
  const PLACEMENT_BOTTOM = index.isRTL() ? 'bottom-end' : 'bottom-start';
  const PLACEMENT_BOTTOMEND = index.isRTL() ? 'bottom-start' : 'bottom-end';
  const PLACEMENT_RIGHT = index.isRTL() ? 'left-start' : 'right-start';
  const PLACEMENT_LEFT = index.isRTL() ? 'right-start' : 'left-start';
  const PLACEMENT_TOPCENTER = 'top';
  const PLACEMENT_BOTTOMCENTER = 'bottom';
  const Default = {
    autoClose: true,
    boundary: 'clippingParents',
    display: 'dynamic',
    offset: [0, 2],
    popperConfig: null,
    reference: 'toggle'
  };
  const DefaultType = {
    autoClose: '(boolean|string)',
    boundary: '(string|element)',
    display: 'string',
    offset: '(array|string|function)',
    popperConfig: '(null|object|function)',
    reference: '(string|element|object)'
  };
  /**
   * Class definition
   */

  class Dropdown extends BaseComponent__default.default {
    constructor(element, config) {
      super(element, config);
      this._popper = null;
      this._parent = this._element.parentNode; // dropdown wrapper
      // todo: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.2/forms/input-group/

      this._menu = SelectorEngine__default.default.next(this._element, SELECTOR_MENU)[0] || SelectorEngine__default.default.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine__default.default.findOne(SELECTOR_MENU, this._parent);
      this._inNavbar = this._detectNavbar();
    } // Getters


    static get Default() {
      return Default;
    }

    static get DefaultType() {
      return DefaultType;
    }

    static get NAME() {
      return NAME;
    } // Public


    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }

    show() {
      if (index.isDisabled(this._element) || this._isShown()) {
        return;
      }

      const relatedTarget = {
        relatedTarget: this._element
      };
      const showEvent = EventHandler__default.default.trigger(this._element, EVENT_SHOW, relatedTarget);

      if (showEvent.defaultPrevented) {
        return;
      }

      this._createPopper(); // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler__default.default.on(element, 'mouseover', index.noop);
        }
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      this._menu.classList.add(CLASS_NAME_SHOW);

      this._element.classList.add(CLASS_NAME_SHOW);

      EventHandler__default.default.trigger(this._element, EVENT_SHOWN, relatedTarget);
    }

    hide() {
      if (index.isDisabled(this._element) || !this._isShown()) {
        return;
      }

      const relatedTarget = {
        relatedTarget: this._element
      };

      this._completeHide(relatedTarget);
    }

    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }

      super.dispose();
    }

    update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper) {
        this._popper.update();
      }
    } // Private


    _completeHide(relatedTarget) {
      const hideEvent = EventHandler__default.default.trigger(this._element, EVENT_HIDE, relatedTarget);

      if (hideEvent.defaultPrevented) {
        return;
      } // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support


      if ('ontouchstart' in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler__default.default.off(element, 'mouseover', index.noop);
        }
      }

      if (this._popper) {
        this._popper.destroy();
      }

      this._menu.classList.remove(CLASS_NAME_SHOW);

      this._element.classList.remove(CLASS_NAME_SHOW);

      this._element.setAttribute('aria-expanded', 'false');

      Manipulator__default.default.removeDataAttribute(this._menu, 'popper');
      EventHandler__default.default.trigger(this._element, EVENT_HIDDEN, relatedTarget);
    }

    _getConfig(config) {
      config = super._getConfig(config);

      if (typeof config.reference === 'object' && !index.isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
        // Popper virtual elements require a getBoundingClientRect method
        throw new TypeError(`${NAME.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      }

      return config;
    }

    _createPopper() {
      if (typeof Popper__namespace === 'undefined') {
        throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
      }

      let referenceElement = this._element;

      if (this._config.reference === 'parent') {
        referenceElement = this._parent;
      } else if (index.isElement(this._config.reference)) {
        referenceElement = index.getElement(this._config.reference);
      } else if (typeof this._config.reference === 'object') {
        referenceElement = this._config.reference;
      }

      const popperConfig = this._getPopperConfig();

      this._popper = Popper__namespace.createPopper(referenceElement, this._menu, popperConfig);
    }

    _isShown() {
      return this._menu.classList.contains(CLASS_NAME_SHOW);
    }

    _getPlacement() {
      const parentDropdown = this._parent;

      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }

      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
      }

      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
        return PLACEMENT_TOPCENTER;
      }

      if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
        return PLACEMENT_BOTTOMCENTER;
      } // We need to trim the value because custom properties can also include spaces


      const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }

      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }

    _detectNavbar() {
      return this._element.closest(SELECTOR_NAVBAR) !== null;
    }

    _getOffset() {
      const {
        offset
      } = this._config;

      if (typeof offset === 'string') {
        return offset.split(',').map(value => Number.parseInt(value, 10));
      }

      if (typeof offset === 'function') {
        return popperData => offset(popperData, this._element);
      }

      return offset;
    }

    _getPopperConfig() {
      const defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [{
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }]
      }; // Disable Popper if we have a static display or Dropdown is in Navbar

      if (this._inNavbar || this._config.display === 'static') {
        Manipulator__default.default.setDataAttribute(this._menu, 'popper', 'static'); // todo:v6 remove

        defaultBsPopperConfig.modifiers = [{
          name: 'applyStyles',
          enabled: false
        }];
      }

      return { ...defaultBsPopperConfig,
        ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
      };
    }

    _selectMenuItem({
      key,
      target
    }) {
      const items = SelectorEngine__default.default.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(element => index.isVisible(element));

      if (!items.length) {
        return;
      } // if target isn't included in items (e.g. when expanding the dropdown)
      // allow cycling to get the last item in case key equals ARROW_UP_KEY


      index.getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Dropdown.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      });
    }

    static clearMenus(event) {
      if (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY) {
        return;
      }

      const openToggles = SelectorEngine__default.default.find(SELECTOR_DATA_TOGGLE_SHOWN);

      for (const toggle of openToggles) {
        const context = Dropdown.getInstance(toggle);

        if (!context || context._config.autoClose === false) {
          continue;
        }

        const composedPath = event.composedPath();
        const isMenuTarget = composedPath.includes(context._menu);

        if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
          continue;
        } // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu


        if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY || /input|select|option|textarea|form/i.test(event.target.tagName))) {
          continue;
        }

        const relatedTarget = {
          relatedTarget: context._element
        };

        if (event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        context._completeHide(relatedTarget);
      }
    }

    static dataApiKeydownHandler(event) {
      // If not an UP | DOWN | ESCAPE key => not a dropdown command
      // If input/textarea && if key is other than ESCAPE => not a dropdown command
      const isInput = /input|textarea/i.test(event.target.tagName);
      const isEscapeEvent = event.key === ESCAPE_KEY;
      const isUpOrDownEvent = [ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key);

      if (!isUpOrDownEvent && !isEscapeEvent) {
        return;
      }

      if (isInput && !isEscapeEvent) {
        return;
      }

      event.preventDefault(); // todo: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.2/forms/input-group/

      const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE) ? this : SelectorEngine__default.default.prev(this, SELECTOR_DATA_TOGGLE)[0] || SelectorEngine__default.default.next(this, SELECTOR_DATA_TOGGLE)[0] || SelectorEngine__default.default.findOne(SELECTOR_DATA_TOGGLE, event.delegateTarget.parentNode);
      const instance = Dropdown.getOrCreateInstance(getToggleButton);

      if (isUpOrDownEvent) {
        event.stopPropagation();
        instance.show();

        instance._selectMenuItem(event);

        return;
      }

      if (instance._isShown()) {
        // else is escape and we check if it is shown
        event.stopPropagation();
        instance.hide();
        getToggleButton.focus();
      }
    }

  }
  /**
   * Data API implementation
   */


  EventHandler__default.default.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE, Dropdown.dataApiKeydownHandler);
  EventHandler__default.default.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  EventHandler__default.default.on(document, EVENT_CLICK_DATA_API, Dropdown.clearMenus);
  EventHandler__default.default.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  EventHandler__default.default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
  });
  /**
   * jQuery
   */

  index.defineJQueryPlugin(Dropdown);

  return Dropdown;

}));


/***/ }),

/***/ 2747:
/*!********************************************************!*\
  !*** ./static/projects/src/bootstrap/js/dist/modal.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap modal.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./util/index */ 7317), __webpack_require__(/*! ./dom/event-handler */ 1426), __webpack_require__(/*! ./dom/selector-engine */ 418), __webpack_require__(/*! ./util/scrollbar */ 381), __webpack_require__(/*! ./base-component */ 3824), __webpack_require__(/*! ./util/backdrop */ 8894), __webpack_require__(/*! ./util/focustrap */ 7628), __webpack_require__(/*! ./util/component-functions */ 7980)) :
  0;
})(this, (function (index, EventHandler, SelectorEngine, ScrollBarHelper, BaseComponent, Backdrop, FocusTrap, componentFunctions) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  const SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  const ScrollBarHelper__default = /*#__PURE__*/_interopDefaultLegacy(ScrollBarHelper);
  const BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);
  const Backdrop__default = /*#__PURE__*/_interopDefaultLegacy(Backdrop);
  const FocusTrap__default = /*#__PURE__*/_interopDefaultLegacy(FocusTrap);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME = 'modal';
  const DATA_KEY = 'bs.modal';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const ESCAPE_KEY = 'Escape';
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const EVENT_RESIZE = `resize${EVENT_KEY}`;
  const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY}`;
  const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY}`;
  const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  const CLASS_NAME_OPEN = 'modal-open';
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_SHOW = 'show';
  const CLASS_NAME_STATIC = 'modal-static';
  const OPEN_SELECTOR = '.modal.show';
  const SELECTOR_DIALOG = '.modal-dialog';
  const SELECTOR_MODAL_BODY = '.modal-body';
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="modal"]';
  const Default = {
    backdrop: true,
    focus: true,
    keyboard: true
  };
  const DefaultType = {
    backdrop: '(boolean|string)',
    focus: 'boolean',
    keyboard: 'boolean'
  };
  /**
   * Class definition
   */

  class Modal extends BaseComponent__default.default {
    constructor(element, config) {
      super(element, config);
      this._dialog = SelectorEngine__default.default.findOne(SELECTOR_DIALOG, this._element);
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._isShown = false;
      this._isTransitioning = false;
      this._scrollBar = new ScrollBarHelper__default.default();

      this._addEventListeners();
    } // Getters


    static get Default() {
      return Default;
    }

    static get DefaultType() {
      return DefaultType;
    }

    static get NAME() {
      return NAME;
    } // Public


    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }

    show(relatedTarget) {
      if (this._isShown || this._isTransitioning) {
        return;
      }

      const showEvent = EventHandler__default.default.trigger(this._element, EVENT_SHOW, {
        relatedTarget
      });

      if (showEvent.defaultPrevented) {
        return;
      }

      this._isShown = true;
      this._isTransitioning = true;

      this._scrollBar.hide();

      document.body.classList.add(CLASS_NAME_OPEN);

      this._adjustDialog();

      this._backdrop.show(() => this._showElement(relatedTarget));
    }

    hide() {
      if (!this._isShown || this._isTransitioning) {
        return;
      }

      const hideEvent = EventHandler__default.default.trigger(this._element, EVENT_HIDE);

      if (hideEvent.defaultPrevented) {
        return;
      }

      this._isShown = false;
      this._isTransitioning = true;

      this._focustrap.deactivate();

      this._element.classList.remove(CLASS_NAME_SHOW);

      this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
    }

    dispose() {
      for (const htmlElement of [window, this._dialog]) {
        EventHandler__default.default.off(htmlElement, EVENT_KEY);
      }

      this._backdrop.dispose();

      this._focustrap.deactivate();

      super.dispose();
    }

    handleUpdate() {
      this._adjustDialog();
    } // Private


    _initializeBackDrop() {
      return new Backdrop__default.default({
        isVisible: Boolean(this._config.backdrop),
        // 'static' option will be translated to true, and booleans will keep their value,
        isAnimated: this._isAnimated()
      });
    }

    _initializeFocusTrap() {
      return new FocusTrap__default.default({
        trapElement: this._element
      });
    }

    _showElement(relatedTarget) {
      // try to append dynamic modal
      if (!document.body.contains(this._element)) {
        document.body.append(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      this._element.scrollTop = 0;
      const modalBody = SelectorEngine__default.default.findOne(SELECTOR_MODAL_BODY, this._dialog);

      if (modalBody) {
        modalBody.scrollTop = 0;
      }

      index.reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOW);

      const transitionComplete = () => {
        if (this._config.focus) {
          this._focustrap.activate();
        }

        this._isTransitioning = false;
        EventHandler__default.default.trigger(this._element, EVENT_SHOWN, {
          relatedTarget
        });
      };

      this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
    }

    _addEventListeners() {
      EventHandler__default.default.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
        if (event.key !== ESCAPE_KEY) {
          return;
        }

        if (this._config.keyboard) {
          event.preventDefault();
          this.hide();
          return;
        }

        this._triggerBackdropTransition();
      });
      EventHandler__default.default.on(window, EVENT_RESIZE, () => {
        if (this._isShown && !this._isTransitioning) {
          this._adjustDialog();
        }
      });
      EventHandler__default.default.on(this._element, EVENT_MOUSEDOWN_DISMISS, event => {
        // a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
        EventHandler__default.default.one(this._element, EVENT_CLICK_DISMISS, event2 => {
          if (this._element !== event.target || this._element !== event2.target) {
            return;
          }

          if (this._config.backdrop === 'static') {
            this._triggerBackdropTransition();

            return;
          }

          if (this._config.backdrop) {
            this.hide();
          }
        });
      });
    }

    _hideModal() {
      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._isTransitioning = false;

      this._backdrop.hide(() => {
        document.body.classList.remove(CLASS_NAME_OPEN);

        this._resetAdjustments();

        this._scrollBar.reset();

        EventHandler__default.default.trigger(this._element, EVENT_HIDDEN);
      });
    }

    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_FADE);
    }

    _triggerBackdropTransition() {
      const hideEvent = EventHandler__default.default.trigger(this._element, EVENT_HIDE_PREVENTED);

      if (hideEvent.defaultPrevented) {
        return;
      }

      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const initialOverflowY = this._element.style.overflowY; // return if the following background transition hasn't yet completed

      if (initialOverflowY === 'hidden' || this._element.classList.contains(CLASS_NAME_STATIC)) {
        return;
      }

      if (!isModalOverflowing) {
        this._element.style.overflowY = 'hidden';
      }

      this._element.classList.add(CLASS_NAME_STATIC);

      this._queueCallback(() => {
        this._element.classList.remove(CLASS_NAME_STATIC);

        this._queueCallback(() => {
          this._element.style.overflowY = initialOverflowY;
        }, this._dialog);
      }, this._dialog);

      this._element.focus();
    }
    /**
     * The following methods are used to handle overflowing modals
     */


    _adjustDialog() {
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      const scrollbarWidth = this._scrollBar.getWidth();

      const isBodyOverflowing = scrollbarWidth > 0;

      if (isBodyOverflowing && !isModalOverflowing) {
        const property = index.isRTL() ? 'paddingLeft' : 'paddingRight';
        this._element.style[property] = `${scrollbarWidth}px`;
      }

      if (!isBodyOverflowing && isModalOverflowing) {
        const property = index.isRTL() ? 'paddingRight' : 'paddingLeft';
        this._element.style[property] = `${scrollbarWidth}px`;
      }
    }

    _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    } // Static


    static jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        const data = Modal.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config](relatedTarget);
      });
    }

  }
  /**
   * Data API implementation
   */


  EventHandler__default.default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    const target = index.getElementFromSelector(this);

    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    EventHandler__default.default.one(target, EVENT_SHOW, showEvent => {
      if (showEvent.defaultPrevented) {
        // only register focus restorer if modal will actually get shown
        return;
      }

      EventHandler__default.default.one(target, EVENT_HIDDEN, () => {
        if (index.isVisible(this)) {
          this.focus();
        }
      });
    }); // avoid conflict when clicking modal toggler while another one is open

    const alreadyOpen = SelectorEngine__default.default.findOne(OPEN_SELECTOR);

    if (alreadyOpen) {
      Modal.getInstance(alreadyOpen).hide();
    }

    const data = Modal.getOrCreateInstance(target);
    data.toggle(this);
  });
  componentFunctions.enableDismissTrigger(Modal);
  /**
   * jQuery
   */

  index.defineJQueryPlugin(Modal);

  return Modal;

}));


/***/ }),

/***/ 160:
/*!************************************************************!*\
  !*** ./static/projects/src/bootstrap/js/dist/offcanvas.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap offcanvas.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./util/index */ 7317), __webpack_require__(/*! ./util/scrollbar */ 381), __webpack_require__(/*! ./dom/event-handler */ 1426), __webpack_require__(/*! ./base-component */ 3824), __webpack_require__(/*! ./dom/selector-engine */ 418), __webpack_require__(/*! ./util/backdrop */ 8894), __webpack_require__(/*! ./util/focustrap */ 7628), __webpack_require__(/*! ./util/component-functions */ 7980)) :
  0;
})(this, (function (index, ScrollBarHelper, EventHandler, BaseComponent, SelectorEngine, Backdrop, FocusTrap, componentFunctions) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const ScrollBarHelper__default = /*#__PURE__*/_interopDefaultLegacy(ScrollBarHelper);
  const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  const BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);
  const SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  const Backdrop__default = /*#__PURE__*/_interopDefaultLegacy(Backdrop);
  const FocusTrap__default = /*#__PURE__*/_interopDefaultLegacy(FocusTrap);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): offcanvas.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME = 'offcanvas';
  const DATA_KEY = 'bs.offcanvas';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`;
  const ESCAPE_KEY = 'Escape';
  const CLASS_NAME_SHOW = 'show';
  const CLASS_NAME_SHOWING = 'showing';
  const CLASS_NAME_HIDING = 'hiding';
  const CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
  const OPEN_SELECTOR = '.offcanvas.show';
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_RESIZE = `resize${EVENT_KEY}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY}`;
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="offcanvas"]';
  const Default = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  const DefaultType = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    scroll: 'boolean'
  };
  /**
   * Class definition
   */

  class Offcanvas extends BaseComponent__default.default {
    constructor(element, config) {
      super(element, config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();

      this._addEventListeners();
    } // Getters


    static get Default() {
      return Default;
    }

    static get DefaultType() {
      return DefaultType;
    }

    static get NAME() {
      return NAME;
    } // Public


    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }

    show(relatedTarget) {
      if (this._isShown) {
        return;
      }

      const showEvent = EventHandler__default.default.trigger(this._element, EVENT_SHOW, {
        relatedTarget
      });

      if (showEvent.defaultPrevented) {
        return;
      }

      this._isShown = true;

      this._backdrop.show();

      if (!this._config.scroll) {
        new ScrollBarHelper__default.default().hide();
      }

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      this._element.classList.add(CLASS_NAME_SHOWING);

      const completeCallBack = () => {
        if (!this._config.scroll || this._config.backdrop) {
          this._focustrap.activate();
        }

        this._element.classList.add(CLASS_NAME_SHOW);

        this._element.classList.remove(CLASS_NAME_SHOWING);

        EventHandler__default.default.trigger(this._element, EVENT_SHOWN, {
          relatedTarget
        });
      };

      this._queueCallback(completeCallBack, this._element, true);
    }

    hide() {
      if (!this._isShown) {
        return;
      }

      const hideEvent = EventHandler__default.default.trigger(this._element, EVENT_HIDE);

      if (hideEvent.defaultPrevented) {
        return;
      }

      this._focustrap.deactivate();

      this._element.blur();

      this._isShown = false;

      this._element.classList.add(CLASS_NAME_HIDING);

      this._backdrop.hide();

      const completeCallback = () => {
        this._element.classList.remove(CLASS_NAME_SHOW, CLASS_NAME_HIDING);

        this._element.removeAttribute('aria-modal');

        this._element.removeAttribute('role');

        if (!this._config.scroll) {
          new ScrollBarHelper__default.default().reset();
        }

        EventHandler__default.default.trigger(this._element, EVENT_HIDDEN);
      };

      this._queueCallback(completeCallback, this._element, true);
    }

    dispose() {
      this._backdrop.dispose();

      this._focustrap.deactivate();

      super.dispose();
    } // Private


    _initializeBackDrop() {
      const clickCallback = () => {
        if (this._config.backdrop === 'static') {
          EventHandler__default.default.trigger(this._element, EVENT_HIDE_PREVENTED);
          return;
        }

        this.hide();
      }; // 'static' option will be translated to true, and booleans will keep their value


      const isVisible = Boolean(this._config.backdrop);
      return new Backdrop__default.default({
        className: CLASS_NAME_BACKDROP,
        isVisible,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: isVisible ? clickCallback : null
      });
    }

    _initializeFocusTrap() {
      return new FocusTrap__default.default({
        trapElement: this._element
      });
    }

    _addEventListeners() {
      EventHandler__default.default.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
        if (event.key !== ESCAPE_KEY) {
          return;
        }

        if (!this._config.keyboard) {
          EventHandler__default.default.trigger(this._element, EVENT_HIDE_PREVENTED);
          return;
        }

        this.hide();
      });
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Offcanvas.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config](this);
      });
    }

  }
  /**
   * Data API implementation
   */


  EventHandler__default.default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    const target = index.getElementFromSelector(this);

    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if (index.isDisabled(this)) {
      return;
    }

    EventHandler__default.default.one(target, EVENT_HIDDEN, () => {
      // focus on trigger when it is closed
      if (index.isVisible(this)) {
        this.focus();
      }
    }); // avoid conflict when clicking a toggler of an offcanvas, while another is open

    const alreadyOpen = SelectorEngine__default.default.findOne(OPEN_SELECTOR);

    if (alreadyOpen && alreadyOpen !== target) {
      Offcanvas.getInstance(alreadyOpen).hide();
    }

    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
  });
  EventHandler__default.default.on(window, EVENT_LOAD_DATA_API, () => {
    for (const selector of SelectorEngine__default.default.find(OPEN_SELECTOR)) {
      Offcanvas.getOrCreateInstance(selector).show();
    }
  });
  EventHandler__default.default.on(window, EVENT_RESIZE, () => {
    for (const element of SelectorEngine__default.default.find('[aria-modal][class*=show][class*=offcanvas-]')) {
      if (getComputedStyle(element).position !== 'fixed') {
        Offcanvas.getOrCreateInstance(element).hide();
      }
    }
  });
  componentFunctions.enableDismissTrigger(Offcanvas);
  /**
   * jQuery
   */

  index.defineJQueryPlugin(Offcanvas);

  return Offcanvas;

}));


/***/ }),

/***/ 6565:
/*!**********************************************************!*\
  !*** ./static/projects/src/bootstrap/js/dist/popover.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap popover.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./util/index */ 7317), __webpack_require__(/*! ./tooltip */ 1796)) :
  0;
})(this, (function (index, Tooltip) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const Tooltip__default = /*#__PURE__*/_interopDefaultLegacy(Tooltip);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): popover.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME = 'popover';
  const SELECTOR_TITLE = '.popover-header';
  const SELECTOR_CONTENT = '.popover-body';
  const Default = { ...Tooltip__default.default.Default,
    content: '',
    offset: [0, 8],
    placement: 'right',
    template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>',
    trigger: 'click'
  };
  const DefaultType = { ...Tooltip__default.default.DefaultType,
    content: '(null|string|element|function)'
  };
  /**
   * Class definition
   */

  class Popover extends Tooltip__default.default {
    // Getters
    static get Default() {
      return Default;
    }

    static get DefaultType() {
      return DefaultType;
    }

    static get NAME() {
      return NAME;
    } // Overrides


    _isWithContent() {
      return this._getTitle() || this._getContent();
    } // Private


    _getContentForTemplate() {
      return {
        [SELECTOR_TITLE]: this._getTitle(),
        [SELECTOR_CONTENT]: this._getContent()
      };
    }

    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Popover.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      });
    }

  }
  /**
   * jQuery
   */


  index.defineJQueryPlugin(Popover);

  return Popover;

}));


/***/ }),

/***/ 8988:
/*!************************************************************!*\
  !*** ./static/projects/src/bootstrap/js/dist/scrollspy.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap scrollspy.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./util/index */ 7317), __webpack_require__(/*! ./dom/event-handler */ 1426), __webpack_require__(/*! ./dom/selector-engine */ 418), __webpack_require__(/*! ./base-component */ 3824)) :
  0;
})(this, (function (index, EventHandler, SelectorEngine, BaseComponent) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  const SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  const BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): scrollspy.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME = 'scrollspy';
  const DATA_KEY = 'bs.scrollspy';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const EVENT_ACTIVATE = `activate${EVENT_KEY}`;
  const EVENT_CLICK = `click${EVENT_KEY}`;
  const EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`;
  const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  const CLASS_NAME_ACTIVE = 'active';
  const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  const SELECTOR_TARGET_LINKS = '[href]';
  const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  const SELECTOR_NAV_LINKS = '.nav-link';
  const SELECTOR_NAV_ITEMS = '.nav-item';
  const SELECTOR_LIST_ITEMS = '.list-group-item';
  const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
  const SELECTOR_DROPDOWN = '.dropdown';
  const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  const Default = {
    offset: null,
    // TODO: v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: '0px 0px -25%',
    smoothScroll: false,
    target: null,
    threshold: [0.1, 0.5, 1]
  };
  const DefaultType = {
    offset: '(number|null)',
    // TODO v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: 'string',
    smoothScroll: 'boolean',
    target: 'element',
    threshold: 'array'
  };
  /**
   * Class definition
   */

  class ScrollSpy extends BaseComponent__default.default {
    constructor(element, config) {
      super(element, config); // this._element is the observablesContainer and config.target the menu links wrapper

      this._targetLinks = new Map();
      this._observableSections = new Map();
      this._rootElement = getComputedStyle(this._element).overflowY === 'visible' ? null : this._element;
      this._activeTarget = null;
      this._observer = null;
      this._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      };
      this.refresh(); // initialize
    } // Getters


    static get Default() {
      return Default;
    }

    static get DefaultType() {
      return DefaultType;
    }

    static get NAME() {
      return NAME;
    } // Public


    refresh() {
      this._initializeTargetsAndObservables();

      this._maybeEnableSmoothScroll();

      if (this._observer) {
        this._observer.disconnect();
      } else {
        this._observer = this._getNewObserver();
      }

      for (const section of this._observableSections.values()) {
        this._observer.observe(section);
      }
    }

    dispose() {
      this._observer.disconnect();

      super.dispose();
    } // Private


    _configAfterMerge(config) {
      // TODO: on v6 target should be given explicitly & remove the {target: 'ss-target'} case
      config.target = index.getElement(config.target) || document.body; // TODO: v6 Only for backwards compatibility reasons. Use rootMargin only

      config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;

      if (typeof config.threshold === 'string') {
        config.threshold = config.threshold.split(',').map(value => Number.parseFloat(value));
      }

      return config;
    }

    _maybeEnableSmoothScroll() {
      if (!this._config.smoothScroll) {
        return;
      } // unregister any previous listeners


      EventHandler__default.default.off(this._config.target, EVENT_CLICK);
      EventHandler__default.default.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, event => {
        const observableSection = this._observableSections.get(event.target.hash);

        if (observableSection) {
          event.preventDefault();
          const root = this._rootElement || window;
          const height = observableSection.offsetTop - this._element.offsetTop;

          if (root.scrollTo) {
            root.scrollTo({
              top: height,
              behavior: 'smooth'
            });
            return;
          } // Chrome 60 doesn't support `scrollTo`


          root.scrollTop = height;
        }
      });
    }

    _getNewObserver() {
      const options = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin
      };
      return new IntersectionObserver(entries => this._observerCallback(entries), options);
    } // The logic of selection


    _observerCallback(entries) {
      const targetElement = entry => this._targetLinks.get(`#${entry.target.id}`);

      const activate = entry => {
        this._previousScrollData.visibleEntryTop = entry.target.offsetTop;

        this._process(targetElement(entry));
      };

      const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
      const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = parentScrollTop;

      for (const entry of entries) {
        if (!entry.isIntersecting) {
          this._activeTarget = null;

          this._clearActiveClass(targetElement(entry));

          continue;
        }

        const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop; // if we are scrolling down, pick the bigger offsetTop

        if (userScrollsDown && entryIsLowerThanPrevious) {
          activate(entry); // if parent isn't scrolled, let's keep the first visible item, breaking the iteration

          if (!parentScrollTop) {
            return;
          }

          continue;
        } // if we are scrolling up, pick the smallest offsetTop


        if (!userScrollsDown && !entryIsLowerThanPrevious) {
          activate(entry);
        }
      }
    }

    _initializeTargetsAndObservables() {
      this._targetLinks = new Map();
      this._observableSections = new Map();
      const targetLinks = SelectorEngine__default.default.find(SELECTOR_TARGET_LINKS, this._config.target);

      for (const anchor of targetLinks) {
        // ensure that the anchor has an id and is not disabled
        if (!anchor.hash || index.isDisabled(anchor)) {
          continue;
        }

        const observableSection = SelectorEngine__default.default.findOne(anchor.hash, this._element); // ensure that the observableSection exists & is visible

        if (index.isVisible(observableSection)) {
          this._targetLinks.set(anchor.hash, anchor);

          this._observableSections.set(anchor.hash, observableSection);
        }
      }
    }

    _process(target) {
      if (this._activeTarget === target) {
        return;
      }

      this._clearActiveClass(this._config.target);

      this._activeTarget = target;
      target.classList.add(CLASS_NAME_ACTIVE);

      this._activateParents(target);

      EventHandler__default.default.trigger(this._element, EVENT_ACTIVATE, {
        relatedTarget: target
      });
    }

    _activateParents(target) {
      // Activate dropdown parents
      if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        SelectorEngine__default.default.findOne(SELECTOR_DROPDOWN_TOGGLE, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE);
        return;
      }

      for (const listGroup of SelectorEngine__default.default.parents(target, SELECTOR_NAV_LIST_GROUP)) {
        // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
        for (const item of SelectorEngine__default.default.prev(listGroup, SELECTOR_LINK_ITEMS)) {
          item.classList.add(CLASS_NAME_ACTIVE);
        }
      }
    }

    _clearActiveClass(parent) {
      parent.classList.remove(CLASS_NAME_ACTIVE);
      const activeNodes = SelectorEngine__default.default.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE}`, parent);

      for (const node of activeNodes) {
        node.classList.remove(CLASS_NAME_ACTIVE);
      }
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = ScrollSpy.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      });
    }

  }
  /**
   * Data API implementation
   */


  EventHandler__default.default.on(window, EVENT_LOAD_DATA_API, () => {
    for (const spy of SelectorEngine__default.default.find(SELECTOR_DATA_SPY)) {
      ScrollSpy.getOrCreateInstance(spy);
    }
  });
  /**
   * jQuery
   */

  index.defineJQueryPlugin(ScrollSpy);

  return ScrollSpy;

}));


/***/ }),

/***/ 2602:
/*!******************************************************!*\
  !*** ./static/projects/src/bootstrap/js/dist/tab.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap tab.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./util/index */ 7317), __webpack_require__(/*! ./dom/event-handler */ 1426), __webpack_require__(/*! ./dom/selector-engine */ 418), __webpack_require__(/*! ./base-component */ 3824)) :
  0;
})(this, (function (index, EventHandler, SelectorEngine, BaseComponent) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  const SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  const BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): tab.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME = 'tab';
  const DATA_KEY = 'bs.tab';
  const EVENT_KEY = `.${DATA_KEY}`;
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}`;
  const EVENT_KEYDOWN = `keydown${EVENT_KEY}`;
  const EVENT_LOAD_DATA_API = `load${EVENT_KEY}`;
  const ARROW_LEFT_KEY = 'ArrowLeft';
  const ARROW_RIGHT_KEY = 'ArrowRight';
  const ARROW_UP_KEY = 'ArrowUp';
  const ARROW_DOWN_KEY = 'ArrowDown';
  const CLASS_NAME_ACTIVE = 'active';
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_SHOW = 'show';
  const CLASS_DROPDOWN = 'dropdown';
  const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  const SELECTOR_DROPDOWN_MENU = '.dropdown-menu';
  const NOT_SELECTOR_DROPDOWN_TOGGLE = ':not(.dropdown-toggle)';
  const SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
  const SELECTOR_OUTER = '.nav-item, .list-group-item';
  const SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'; // todo:v6: could be only `tab`

  const SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
  const SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;
  /**
   * Class definition
   */

  class Tab extends BaseComponent__default.default {
    constructor(element) {
      super(element);
      this._parent = this._element.closest(SELECTOR_TAB_PANEL);

      if (!this._parent) {
        return; // todo: should Throw exception on v6
        // throw new TypeError(`${element.outerHTML} has not a valid parent ${SELECTOR_INNER_ELEM}`)
      } // Set up initial aria attributes


      this._setInitialAttributes(this._parent, this._getChildren());

      EventHandler__default.default.on(this._element, EVENT_KEYDOWN, event => this._keydown(event));
    } // Getters


    static get NAME() {
      return NAME;
    } // Public


    show() {
      // Shows this elem and deactivate the active sibling if exists
      const innerElem = this._element;

      if (this._elemIsActive(innerElem)) {
        return;
      } // Search for active tab on same parent to deactivate it


      const active = this._getActiveElem();

      const hideEvent = active ? EventHandler__default.default.trigger(active, EVENT_HIDE, {
        relatedTarget: innerElem
      }) : null;
      const showEvent = EventHandler__default.default.trigger(innerElem, EVENT_SHOW, {
        relatedTarget: active
      });

      if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
        return;
      }

      this._deactivate(active, innerElem);

      this._activate(innerElem, active);
    } // Private


    _activate(element, relatedElem) {
      if (!element) {
        return;
      }

      element.classList.add(CLASS_NAME_ACTIVE);

      this._activate(index.getElementFromSelector(element)); // Search and activate/show the proper section


      const complete = () => {
        if (element.getAttribute('role') !== 'tab') {
          element.classList.add(CLASS_NAME_SHOW);
          return;
        }

        element.removeAttribute('tabindex');
        element.setAttribute('aria-selected', true);

        this._toggleDropDown(element, true);

        EventHandler__default.default.trigger(element, EVENT_SHOWN, {
          relatedTarget: relatedElem
        });
      };

      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE));
    }

    _deactivate(element, relatedElem) {
      if (!element) {
        return;
      }

      element.classList.remove(CLASS_NAME_ACTIVE);
      element.blur();

      this._deactivate(index.getElementFromSelector(element)); // Search and deactivate the shown section too


      const complete = () => {
        if (element.getAttribute('role') !== 'tab') {
          element.classList.remove(CLASS_NAME_SHOW);
          return;
        }

        element.setAttribute('aria-selected', false);
        element.setAttribute('tabindex', '-1');

        this._toggleDropDown(element, false);

        EventHandler__default.default.trigger(element, EVENT_HIDDEN, {
          relatedTarget: relatedElem
        });
      };

      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE));
    }

    _keydown(event) {
      if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key)) {
        return;
      }

      event.stopPropagation(); // stopPropagation/preventDefault both added to support up/down keys without scrolling the page

      event.preventDefault();
      const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
      const nextActiveElement = index.getNextActiveElement(this._getChildren().filter(element => !index.isDisabled(element)), event.target, isNext, true);

      if (nextActiveElement) {
        nextActiveElement.focus({
          preventScroll: true
        });
        Tab.getOrCreateInstance(nextActiveElement).show();
      }
    }

    _getChildren() {
      // collection of inner elements
      return SelectorEngine__default.default.find(SELECTOR_INNER_ELEM, this._parent);
    }

    _getActiveElem() {
      return this._getChildren().find(child => this._elemIsActive(child)) || null;
    }

    _setInitialAttributes(parent, children) {
      this._setAttributeIfNotExists(parent, 'role', 'tablist');

      for (const child of children) {
        this._setInitialAttributesOnChild(child);
      }
    }

    _setInitialAttributesOnChild(child) {
      child = this._getInnerElement(child);

      const isActive = this._elemIsActive(child);

      const outerElem = this._getOuterElement(child);

      child.setAttribute('aria-selected', isActive);

      if (outerElem !== child) {
        this._setAttributeIfNotExists(outerElem, 'role', 'presentation');
      }

      if (!isActive) {
        child.setAttribute('tabindex', '-1');
      }

      this._setAttributeIfNotExists(child, 'role', 'tab'); // set attributes to the related panel too


      this._setInitialAttributesOnTargetPanel(child);
    }

    _setInitialAttributesOnTargetPanel(child) {
      const target = index.getElementFromSelector(child);

      if (!target) {
        return;
      }

      this._setAttributeIfNotExists(target, 'role', 'tabpanel');

      if (child.id) {
        this._setAttributeIfNotExists(target, 'aria-labelledby', `#${child.id}`);
      }
    }

    _toggleDropDown(element, open) {
      const outerElem = this._getOuterElement(element);

      if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
        return;
      }

      const toggle = (selector, className) => {
        const element = SelectorEngine__default.default.findOne(selector, outerElem);

        if (element) {
          element.classList.toggle(className, open);
        }
      };

      toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
      toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW);
      outerElem.setAttribute('aria-expanded', open);
    }

    _setAttributeIfNotExists(element, attribute, value) {
      if (!element.hasAttribute(attribute)) {
        element.setAttribute(attribute, value);
      }
    }

    _elemIsActive(elem) {
      return elem.classList.contains(CLASS_NAME_ACTIVE);
    } // Try to get the inner element (usually the .nav-link)


    _getInnerElement(elem) {
      return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine__default.default.findOne(SELECTOR_INNER_ELEM, elem);
    } // Try to get the outer element (usually the .nav-item)


    _getOuterElement(elem) {
      return elem.closest(SELECTOR_OUTER) || elem;
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Tab.getOrCreateInstance(this);

        if (typeof config !== 'string') {
          return;
        }

        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      });
    }

  }
  /**
   * Data API implementation
   */


  EventHandler__default.default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if (index.isDisabled(this)) {
      return;
    }

    Tab.getOrCreateInstance(this).show();
  });
  /**
   * Initialize on focus
   */

  EventHandler__default.default.on(window, EVENT_LOAD_DATA_API, () => {
    for (const element of SelectorEngine__default.default.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
      Tab.getOrCreateInstance(element);
    }
  });
  /**
   * jQuery
   */

  index.defineJQueryPlugin(Tab);

  return Tab;

}));


/***/ }),

/***/ 7906:
/*!********************************************************!*\
  !*** ./static/projects/src/bootstrap/js/dist/toast.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap toast.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./util/index */ 7317), __webpack_require__(/*! ./dom/event-handler */ 1426), __webpack_require__(/*! ./base-component */ 3824), __webpack_require__(/*! ./util/component-functions */ 7980)) :
  0;
})(this, (function (index, EventHandler, BaseComponent, componentFunctions) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  const BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): toast.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME = 'toast';
  const DATA_KEY = 'bs.toast';
  const EVENT_KEY = `.${DATA_KEY}`;
  const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
  const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
  const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
  const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility

  const CLASS_NAME_SHOW = 'show';
  const CLASS_NAME_SHOWING = 'showing';
  const DefaultType = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  const Default = {
    animation: true,
    autohide: true,
    delay: 5000
  };
  /**
   * Class definition
   */

  class Toast extends BaseComponent__default.default {
    constructor(element, config) {
      super(element, config);
      this._timeout = null;
      this._hasMouseInteraction = false;
      this._hasKeyboardInteraction = false;

      this._setListeners();
    } // Getters


    static get Default() {
      return Default;
    }

    static get DefaultType() {
      return DefaultType;
    }

    static get NAME() {
      return NAME;
    } // Public


    show() {
      const showEvent = EventHandler__default.default.trigger(this._element, EVENT_SHOW);

      if (showEvent.defaultPrevented) {
        return;
      }

      this._clearTimeout();

      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE);
      }

      const complete = () => {
        this._element.classList.remove(CLASS_NAME_SHOWING);

        EventHandler__default.default.trigger(this._element, EVENT_SHOWN);

        this._maybeScheduleHide();
      };

      this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated


      index.reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);

      this._queueCallback(complete, this._element, this._config.animation);
    }

    hide() {
      if (!this.isShown()) {
        return;
      }

      const hideEvent = EventHandler__default.default.trigger(this._element, EVENT_HIDE);

      if (hideEvent.defaultPrevented) {
        return;
      }

      const complete = () => {
        this._element.classList.add(CLASS_NAME_HIDE); // @deprecated


        this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);

        EventHandler__default.default.trigger(this._element, EVENT_HIDDEN);
      };

      this._element.classList.add(CLASS_NAME_SHOWING);

      this._queueCallback(complete, this._element, this._config.animation);
    }

    dispose() {
      this._clearTimeout();

      if (this.isShown()) {
        this._element.classList.remove(CLASS_NAME_SHOW);
      }

      super.dispose();
    }

    isShown() {
      return this._element.classList.contains(CLASS_NAME_SHOW);
    } // Private


    _maybeScheduleHide() {
      if (!this._config.autohide) {
        return;
      }

      if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
        return;
      }

      this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay);
    }

    _onInteraction(event, isInteracting) {
      switch (event.type) {
        case 'mouseover':
        case 'mouseout':
          {
            this._hasMouseInteraction = isInteracting;
            break;
          }

        case 'focusin':
        case 'focusout':
          {
            this._hasKeyboardInteraction = isInteracting;
            break;
          }
      }

      if (isInteracting) {
        this._clearTimeout();

        return;
      }

      const nextElement = event.relatedTarget;

      if (this._element === nextElement || this._element.contains(nextElement)) {
        return;
      }

      this._maybeScheduleHide();
    }

    _setListeners() {
      EventHandler__default.default.on(this._element, EVENT_MOUSEOVER, event => this._onInteraction(event, true));
      EventHandler__default.default.on(this._element, EVENT_MOUSEOUT, event => this._onInteraction(event, false));
      EventHandler__default.default.on(this._element, EVENT_FOCUSIN, event => this._onInteraction(event, true));
      EventHandler__default.default.on(this._element, EVENT_FOCUSOUT, event => this._onInteraction(event, false));
    }

    _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Toast.getOrCreateInstance(this, config);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config](this);
        }
      });
    }

  }
  /**
   * Data API implementation
   */


  componentFunctions.enableDismissTrigger(Toast);
  /**
   * jQuery
   */

  index.defineJQueryPlugin(Toast);

  return Toast;

}));


/***/ }),

/***/ 1796:
/*!**********************************************************!*\
  !*** ./static/projects/src/bootstrap/js/dist/tooltip.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap tooltip.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! @popperjs/core */ 4797), __webpack_require__(/*! ./util/index */ 7317), __webpack_require__(/*! ./util/sanitizer */ 8323), __webpack_require__(/*! ./dom/event-handler */ 1426), __webpack_require__(/*! ./dom/manipulator */ 9800), __webpack_require__(/*! ./base-component */ 3824), __webpack_require__(/*! ./util/template-factory */ 9707)) :
  0;
})(this, (function (Popper, index, sanitizer, EventHandler, Manipulator, BaseComponent, TemplateFactory) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
    if (e) {
      for (const k in e) {
        if (k !== 'default') {
          const d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    }
    n.default = e;
    return Object.freeze(n);
  }

  const Popper__namespace = /*#__PURE__*/_interopNamespace(Popper);
  const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  const Manipulator__default = /*#__PURE__*/_interopDefaultLegacy(Manipulator);
  const BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);
  const TemplateFactory__default = /*#__PURE__*/_interopDefaultLegacy(TemplateFactory);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME = 'tooltip';
  const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_MODAL = 'modal';
  const CLASS_NAME_SHOW = 'show';
  const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
  const EVENT_MODAL_HIDE = 'hide.bs.modal';
  const TRIGGER_HOVER = 'hover';
  const TRIGGER_FOCUS = 'focus';
  const TRIGGER_CLICK = 'click';
  const TRIGGER_MANUAL = 'manual';
  const EVENT_HIDE = 'hide';
  const EVENT_HIDDEN = 'hidden';
  const EVENT_SHOW = 'show';
  const EVENT_SHOWN = 'shown';
  const EVENT_INSERTED = 'inserted';
  const EVENT_CLICK = 'click';
  const EVENT_FOCUSIN = 'focusin';
  const EVENT_FOCUSOUT = 'focusout';
  const EVENT_MOUSEENTER = 'mouseenter';
  const EVENT_MOUSELEAVE = 'mouseleave';
  const AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: index.isRTL() ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: index.isRTL() ? 'right' : 'left'
  };
  const Default = {
    allowList: sanitizer.DefaultAllowlist,
    animation: true,
    boundary: 'clippingParents',
    container: false,
    customClass: '',
    delay: 0,
    fallbackPlacements: ['top', 'right', 'bottom', 'left'],
    html: false,
    offset: [0, 0],
    placement: 'top',
    popperConfig: null,
    sanitize: true,
    sanitizeFn: null,
    selector: false,
    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
    title: '',
    trigger: 'hover focus'
  };
  const DefaultType = {
    allowList: 'object',
    animation: 'boolean',
    boundary: '(string|element)',
    container: '(string|element|boolean)',
    customClass: '(string|function)',
    delay: '(number|object)',
    fallbackPlacements: 'array',
    html: 'boolean',
    offset: '(array|string|function)',
    placement: '(string|function)',
    popperConfig: '(null|object|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    selector: '(string|boolean)',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string'
  };
  /**
   * Class definition
   */

  class Tooltip extends BaseComponent__default.default {
    constructor(element, config) {
      if (typeof Popper__namespace === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
      }

      super(element, config); // Private

      this._isEnabled = true;
      this._timeout = 0;
      this._isHovered = null;
      this._activeTrigger = {};
      this._popper = null;
      this._templateFactory = null;
      this._newContent = null; // Protected

      this.tip = null;

      this._setListeners();

      if (!this._config.selector) {
        this._fixTitle();
      }
    } // Getters


    static get Default() {
      return Default;
    }

    static get DefaultType() {
      return DefaultType;
    }

    static get NAME() {
      return NAME;
    } // Public


    enable() {
      this._isEnabled = true;
    }

    disable() {
      this._isEnabled = false;
    }

    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }

    toggle() {
      if (!this._isEnabled) {
        return;
      }

      this._activeTrigger.click = !this._activeTrigger.click;

      if (this._isShown()) {
        this._leave();

        return;
      }

      this._enter();
    }

    dispose() {
      clearTimeout(this._timeout);
      EventHandler__default.default.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

      if (this._element.getAttribute('data-bs-original-title')) {
        this._element.setAttribute('title', this._element.getAttribute('data-bs-original-title'));
      }

      this._disposePopper();

      super.dispose();
    }

    show() {
      if (this._element.style.display === 'none') {
        throw new Error('Please use show on visible elements');
      }

      if (!(this._isWithContent() && this._isEnabled)) {
        return;
      }

      const showEvent = EventHandler__default.default.trigger(this._element, this.constructor.eventName(EVENT_SHOW));
      const shadowRoot = index.findShadowRoot(this._element);

      const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);

      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      } // todo v6 remove this OR make it optional


      this._disposePopper();

      const tip = this._getTipElement();

      this._element.setAttribute('aria-describedby', tip.getAttribute('id'));

      const {
        container
      } = this._config;

      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.append(tip);
        EventHandler__default.default.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
      }

      this._popper = this._createPopper(tip);
      tip.classList.add(CLASS_NAME_SHOW); // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

      if ('ontouchstart' in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler__default.default.on(element, 'mouseover', index.noop);
        }
      }

      const complete = () => {
        EventHandler__default.default.trigger(this._element, this.constructor.eventName(EVENT_SHOWN));

        if (this._isHovered === false) {
          this._leave();
        }

        this._isHovered = false;
      };

      this._queueCallback(complete, this.tip, this._isAnimated());
    }

    hide() {
      if (!this._isShown()) {
        return;
      }

      const hideEvent = EventHandler__default.default.trigger(this._element, this.constructor.eventName(EVENT_HIDE));

      if (hideEvent.defaultPrevented) {
        return;
      }

      const tip = this._getTipElement();

      tip.classList.remove(CLASS_NAME_SHOW); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler__default.default.off(element, 'mouseover', index.noop);
        }
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;
      this._isHovered = null; // it is a trick to support manual triggering

      const complete = () => {
        if (this._isWithActiveTrigger()) {
          return;
        }

        if (!this._isHovered) {
          this._disposePopper();
        }

        this._element.removeAttribute('aria-describedby');

        EventHandler__default.default.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN));
      };

      this._queueCallback(complete, this.tip, this._isAnimated());
    }

    update() {
      if (this._popper) {
        this._popper.update();
      }
    } // Protected


    _isWithContent() {
      return Boolean(this._getTitle());
    }

    _getTipElement() {
      if (!this.tip) {
        this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
      }

      return this.tip;
    }

    _createTipElement(content) {
      const tip = this._getTemplateFactory(content).toHtml(); // todo: remove this check on v6


      if (!tip) {
        return null;
      }

      tip.classList.remove(CLASS_NAME_FADE, CLASS_NAME_SHOW); // todo: on v6 the following can be achieved with CSS only

      tip.classList.add(`bs-${this.constructor.NAME}-auto`);
      const tipId = index.getUID(this.constructor.NAME).toString();
      tip.setAttribute('id', tipId);

      if (this._isAnimated()) {
        tip.classList.add(CLASS_NAME_FADE);
      }

      return tip;
    }

    setContent(content) {
      this._newContent = content;

      if (this._isShown()) {
        this._disposePopper();

        this.show();
      }
    }

    _getTemplateFactory(content) {
      if (this._templateFactory) {
        this._templateFactory.changeContent(content);
      } else {
        this._templateFactory = new TemplateFactory__default.default({ ...this._config,
          // the `content` var has to be after `this._config`
          // to override config.content in case of popover
          content,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        });
      }

      return this._templateFactory;
    }

    _getContentForTemplate() {
      return {
        [SELECTOR_TOOLTIP_INNER]: this._getTitle()
      };
    }

    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute('data-bs-original-title');
    } // Private


    _initializeOnDelegatedTarget(event) {
      return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }

    _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE);
    }

    _isShown() {
      return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW);
    }

    _createPopper(tip) {
      const placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;
      const attachment = AttachmentMap[placement.toUpperCase()];
      return Popper__namespace.createPopper(this._element, tip, this._getPopperConfig(attachment));
    }

    _getOffset() {
      const {
        offset
      } = this._config;

      if (typeof offset === 'string') {
        return offset.split(',').map(value => Number.parseInt(value, 10));
      }

      if (typeof offset === 'function') {
        return popperData => offset(popperData, this._element);
      }

      return offset;
    }

    _resolvePossibleFunction(arg) {
      return typeof arg === 'function' ? arg.call(this._element) : arg;
    }

    _getPopperConfig(attachment) {
      const defaultBsPopperConfig = {
        placement: attachment,
        modifiers: [{
          name: 'flip',
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }, {
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'arrow',
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        }, {
          name: 'preSetPlacement',
          enabled: true,
          phase: 'beforeMain',
          fn: data => {
            // Pre-set Popper's placement attribute in order to read the arrow sizes properly.
            // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
            this._getTipElement().setAttribute('data-popper-placement', data.state.placement);
          }
        }]
      };
      return { ...defaultBsPopperConfig,
        ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
      };
    }

    _setListeners() {
      const triggers = this._config.trigger.split(' ');

      for (const trigger of triggers) {
        if (trigger === 'click') {
          EventHandler__default.default.on(this._element, this.constructor.eventName(EVENT_CLICK), this._config.selector, event => {
            const context = this._initializeOnDelegatedTarget(event);

            context.toggle();
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN);
          const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT);
          EventHandler__default.default.on(this._element, eventIn, this._config.selector, event => {
            const context = this._initializeOnDelegatedTarget(event);

            context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;

            context._enter();
          });
          EventHandler__default.default.on(this._element, eventOut, this._config.selector, event => {
            const context = this._initializeOnDelegatedTarget(event);

            context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);

            context._leave();
          });
        }
      }

      this._hideModalHandler = () => {
        if (this._element) {
          this.hide();
        }
      };

      EventHandler__default.default.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
    }

    _fixTitle() {
      const title = this._element.getAttribute('title');

      if (!title) {
        return;
      }

      if (!this._element.getAttribute('aria-label') && !this._element.textContent.trim()) {
        this._element.setAttribute('aria-label', title);
      }

      this._element.setAttribute('data-bs-original-title', title); // DO NOT USE IT. Is only for backwards compatibility


      this._element.removeAttribute('title');
    }

    _enter() {
      if (this._isShown() || this._isHovered) {
        this._isHovered = true;
        return;
      }

      this._isHovered = true;

      this._setTimeout(() => {
        if (this._isHovered) {
          this.show();
        }
      }, this._config.delay.show);
    }

    _leave() {
      if (this._isWithActiveTrigger()) {
        return;
      }

      this._isHovered = false;

      this._setTimeout(() => {
        if (!this._isHovered) {
          this.hide();
        }
      }, this._config.delay.hide);
    }

    _setTimeout(handler, timeout) {
      clearTimeout(this._timeout);
      this._timeout = setTimeout(handler, timeout);
    }

    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(true);
    }

    _getConfig(config) {
      const dataAttributes = Manipulator__default.default.getDataAttributes(this._element);

      for (const dataAttribute of Object.keys(dataAttributes)) {
        if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
          delete dataAttributes[dataAttribute];
        }
      }

      config = { ...dataAttributes,
        ...(typeof config === 'object' && config ? config : {})
      };
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);

      this._typeCheckConfig(config);

      return config;
    }

    _configAfterMerge(config) {
      config.container = config.container === false ? document.body : index.getElement(config.container);

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      return config;
    }

    _getDelegateConfig() {
      const config = {};

      for (const key in this._config) {
        if (this.constructor.Default[key] !== this._config[key]) {
          config[key] = this._config[key];
        }
      }

      config.selector = false;
      config.trigger = 'manual'; // In the future can be replaced with:
      // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
      // `Object.fromEntries(keysWithDifferentValues)`

      return config;
    }

    _disposePopper() {
      if (this._popper) {
        this._popper.destroy();

        this._popper = null;
      }

      if (this.tip) {
        this.tip.remove();
        this.tip = null;
      }
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Tooltip.getOrCreateInstance(this, config);

        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      });
    }

  }
  /**
   * jQuery
   */


  index.defineJQueryPlugin(Tooltip);

  return Tooltip;

}));


/***/ }),

/***/ 8894:
/*!****************************************************************!*\
  !*** ./static/projects/src/bootstrap/js/dist/util/backdrop.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap backdrop.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ../dom/event-handler */ 1426), __webpack_require__(/*! ./index */ 7317), __webpack_require__(/*! ./config */ 3634)) :
  0;
})(this, (function (EventHandler, index, Config) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  const Config__default = /*#__PURE__*/_interopDefaultLegacy(Config);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): util/backdrop.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME = 'backdrop';
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_SHOW = 'show';
  const EVENT_MOUSEDOWN = `mousedown.bs.${NAME}`;
  const Default = {
    className: 'modal-backdrop',
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: 'body' // give the choice to place backdrop under different elements

  };
  const DefaultType = {
    className: 'string',
    clickCallback: '(function|null)',
    isAnimated: 'boolean',
    isVisible: 'boolean',
    rootElement: '(element|string)'
  };
  /**
   * Class definition
   */

  class Backdrop extends Config__default.default {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    } // Getters


    static get Default() {
      return Default;
    }

    static get DefaultType() {
      return DefaultType;
    }

    static get NAME() {
      return NAME;
    } // Public


    show(callback) {
      if (!this._config.isVisible) {
        index.execute(callback);
        return;
      }

      this._append();

      const element = this._getElement();

      if (this._config.isAnimated) {
        index.reflow(element);
      }

      element.classList.add(CLASS_NAME_SHOW);

      this._emulateAnimation(() => {
        index.execute(callback);
      });
    }

    hide(callback) {
      if (!this._config.isVisible) {
        index.execute(callback);
        return;
      }

      this._getElement().classList.remove(CLASS_NAME_SHOW);

      this._emulateAnimation(() => {
        this.dispose();
        index.execute(callback);
      });
    }

    dispose() {
      if (!this._isAppended) {
        return;
      }

      EventHandler__default.default.off(this._element, EVENT_MOUSEDOWN);

      this._element.remove();

      this._isAppended = false;
    } // Private


    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement('div');
        backdrop.className = this._config.className;

        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE);
        }

        this._element = backdrop;
      }

      return this._element;
    }

    _configAfterMerge(config) {
      // use getElement() with the default "body" to get a fresh Element on each instantiation
      config.rootElement = index.getElement(config.rootElement);
      return config;
    }

    _append() {
      if (this._isAppended) {
        return;
      }

      const element = this._getElement();

      this._config.rootElement.append(element);

      EventHandler__default.default.on(element, EVENT_MOUSEDOWN, () => {
        index.execute(this._config.clickCallback);
      });
      this._isAppended = true;
    }

    _emulateAnimation(callback) {
      index.executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }

  }

  return Backdrop;

}));


/***/ }),

/***/ 7980:
/*!***************************************************************************!*\
  !*** ./static/projects/src/bootstrap/js/dist/util/component-functions.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/*!
  * Bootstrap component-functions.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! ../dom/event-handler */ 1426), __webpack_require__(/*! ./index */ 7317)) :
  0;
})(this, (function (exports, EventHandler, index) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): util/component-functions.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const enableDismissTrigger = (component, method = 'hide') => {
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    EventHandler__default.default.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function (event) {
      if (['A', 'AREA'].includes(this.tagName)) {
        event.preventDefault();
      }

      if (index.isDisabled(this)) {
        return;
      }

      const target = index.getElementFromSelector(this) || this.closest(`.${name}`);
      const instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method

      instance[method]();
    });
  };

  exports.enableDismissTrigger = enableDismissTrigger;

  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

}));


/***/ }),

/***/ 3634:
/*!**************************************************************!*\
  !*** ./static/projects/src/bootstrap/js/dist/util/config.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap config.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./index */ 7317), __webpack_require__(/*! ../dom/manipulator */ 9800)) :
  0;
})(this, (function (index, Manipulator) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const Manipulator__default = /*#__PURE__*/_interopDefaultLegacy(Manipulator);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): util/config.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Class definition
   */

  class Config {
    // Getters
    static get Default() {
      return {};
    }

    static get DefaultType() {
      return {};
    }

    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }

    _getConfig(config) {
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);

      this._typeCheckConfig(config);

      return config;
    }

    _configAfterMerge(config) {
      return config;
    }

    _mergeConfigObj(config, element) {
      const jsonConfig = index.isElement(element) ? Manipulator__default.default.getDataAttribute(element, 'config') : {}; // try to parse

      return { ...this.constructor.Default,
        ...(typeof jsonConfig === 'object' ? jsonConfig : {}),
        ...(index.isElement(element) ? Manipulator__default.default.getDataAttributes(element) : {}),
        ...(typeof config === 'object' ? config : {})
      };
    }

    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
      for (const property of Object.keys(configTypes)) {
        const expectedTypes = configTypes[property];
        const value = config[property];
        const valueType = index.isElement(value) ? 'element' : index.toType(value);

        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        }
      }
    }

  }

  return Config;

}));


/***/ }),

/***/ 7628:
/*!*****************************************************************!*\
  !*** ./static/projects/src/bootstrap/js/dist/util/focustrap.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap focustrap.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ../dom/event-handler */ 1426), __webpack_require__(/*! ../dom/selector-engine */ 418), __webpack_require__(/*! ./config */ 3634)) :
  0;
})(this, (function (EventHandler, SelectorEngine, Config) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  const SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  const Config__default = /*#__PURE__*/_interopDefaultLegacy(Config);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): util/focustrap.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME = 'focustrap';
  const DATA_KEY = 'bs.focustrap';
  const EVENT_KEY = `.${DATA_KEY}`;
  const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
  const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY}`;
  const TAB_KEY = 'Tab';
  const TAB_NAV_FORWARD = 'forward';
  const TAB_NAV_BACKWARD = 'backward';
  const Default = {
    autofocus: true,
    trapElement: null // The element to trap focus inside of

  };
  const DefaultType = {
    autofocus: 'boolean',
    trapElement: 'element'
  };
  /**
   * Class definition
   */

  class FocusTrap extends Config__default.default {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
    } // Getters


    static get Default() {
      return Default;
    }

    static get DefaultType() {
      return DefaultType;
    }

    static get NAME() {
      return NAME;
    } // Public


    activate() {
      if (this._isActive) {
        return;
      }

      if (this._config.autofocus) {
        this._config.trapElement.focus();
      }

      EventHandler__default.default.off(document, EVENT_KEY); // guard against infinite focus loop

      EventHandler__default.default.on(document, EVENT_FOCUSIN, event => this._handleFocusin(event));
      EventHandler__default.default.on(document, EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));
      this._isActive = true;
    }

    deactivate() {
      if (!this._isActive) {
        return;
      }

      this._isActive = false;
      EventHandler__default.default.off(document, EVENT_KEY);
    } // Private


    _handleFocusin(event) {
      const {
        trapElement
      } = this._config;

      if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
        return;
      }

      const elements = SelectorEngine__default.default.focusableChildren(trapElement);

      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }

    _handleKeydown(event) {
      if (event.key !== TAB_KEY) {
        return;
      }

      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }

  }

  return FocusTrap;

}));


/***/ }),

/***/ 7317:
/*!*************************************************************!*\
  !*** ./static/projects/src/bootstrap/js/dist/util/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports) {

/*!
  * Bootstrap index.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? factory(exports) :
  0;
})(this, (function (exports) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  const MAX_UID = 1000000;
  const MILLISECONDS_MULTIPLIER = 1000;
  const TRANSITION_END = 'transitionend'; // Shout-out Angus Croll (https://goo.gl/pxwQGp)

  const toType = object => {
    if (object === null || object === undefined) {
      return `${object}`;
    }

    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  /**
   * Public Util API
   */


  const getUID = prefix => {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));

    return prefix;
  };

  const getSelector = element => {
    let selector = element.getAttribute('data-bs-target');

    if (!selector || selector === '#') {
      let hrefAttribute = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273

      if (!hrefAttribute || !hrefAttribute.includes('#') && !hrefAttribute.startsWith('.')) {
        return null;
      } // Just in case some CMS puts out a full URL with the anchor appended


      if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) {
        hrefAttribute = `#${hrefAttribute.split('#')[1]}`;
      }

      selector = hrefAttribute && hrefAttribute !== '#' ? hrefAttribute.trim() : null;
    }

    return selector;
  };

  const getSelectorFromElement = element => {
    const selector = getSelector(element);

    if (selector) {
      return document.querySelector(selector) ? selector : null;
    }

    return null;
  };

  const getElementFromSelector = element => {
    const selector = getSelector(element);
    return selector ? document.querySelector(selector) : null;
  };

  const getTransitionDurationFromElement = element => {
    if (!element) {
      return 0;
    } // Get transition-duration of the element


    let {
      transitionDuration,
      transitionDelay
    } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    } // If multiple durations are defined, take the first


    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };

  const triggerTransitionEnd = element => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };

  const isElement = object => {
    if (!object || typeof object !== 'object') {
      return false;
    }

    if (typeof object.jquery !== 'undefined') {
      object = object[0];
    }

    return typeof object.nodeType !== 'undefined';
  };

  const getElement = object => {
    // it's a jQuery object or a node element
    if (isElement(object)) {
      return object.jquery ? object[0] : object;
    }

    if (typeof object === 'string' && object.length > 0) {
      return document.querySelector(object);
    }

    return null;
  };

  const isVisible = element => {
    if (!isElement(element) || element.getClientRects().length === 0) {
      return false;
    }

    const elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible'; // Handle `details` element as its content may falsie appear visible when it is closed

    const closedDetails = element.closest('details:not([open])');

    if (!closedDetails) {
      return elementIsVisible;
    }

    if (closedDetails !== element) {
      const summary = element.closest('summary');

      if (summary && summary.parentNode !== closedDetails) {
        return false;
      }

      if (summary === null) {
        return false;
      }
    }

    return elementIsVisible;
  };

  const isDisabled = element => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }

    if (element.classList.contains('disabled')) {
      return true;
    }

    if (typeof element.disabled !== 'undefined') {
      return element.disabled;
    }

    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
  };

  const findShadowRoot = element => {
    if (!document.documentElement.attachShadow) {
      return null;
    } // Can find the shadow root otherwise it'll return the document


    if (typeof element.getRootNode === 'function') {
      const root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }

    if (element instanceof ShadowRoot) {
      return element;
    } // when we don't find a shadow root


    if (!element.parentNode) {
      return null;
    }

    return findShadowRoot(element.parentNode);
  };

  const noop = () => {};
  /**
   * Trick to restart an element's animation
   *
   * @param {HTMLElement} element
   * @return void
   *
   * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
   */


  const reflow = element => {
    element.offsetHeight; // eslint-disable-line no-unused-expressions
  };

  const getjQuery = () => {
    if (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return window.jQuery;
    }

    return null;
  };

  const DOMContentLoadedCallbacks = [];

  const onDOMContentLoaded = callback => {
    if (document.readyState === 'loading') {
      // add listener on the first call when the document is in loading state
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener('DOMContentLoaded', () => {
          for (const callback of DOMContentLoadedCallbacks) {
            callback();
          }
        });
      }

      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };

  const isRTL = () => document.documentElement.dir === 'rtl';

  const defineJQueryPlugin = plugin => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      /* istanbul ignore if */

      if ($) {
        const name = plugin.NAME;
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;

        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };

  const execute = callback => {
    if (typeof callback === 'function') {
      callback();
    }
  };

  const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
    if (!waitForTransition) {
      execute(callback);
      return;
    }

    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;

    const handler = ({
      target
    }) => {
      if (target !== transitionElement) {
        return;
      }

      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };

    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };
  /**
   * Return the previous/next element of a list.
   *
   * @param {array} list    The list of elements
   * @param activeElement   The active element
   * @param shouldGetNext   Choose to get next or previous element
   * @param isCycleAllowed
   * @return {Element|elem} The proper element
   */


  const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
    const listLength = list.length;
    let index = list.indexOf(activeElement); // if the element does not exist in the list return an element
    // depending on the direction and if cycle is allowed

    if (index === -1) {
      return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    }

    index += shouldGetNext ? 1 : -1;

    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }

    return list[Math.max(0, Math.min(index, listLength - 1))];
  };

  exports.defineJQueryPlugin = defineJQueryPlugin;
  exports.execute = execute;
  exports.executeAfterTransition = executeAfterTransition;
  exports.findShadowRoot = findShadowRoot;
  exports.getElement = getElement;
  exports.getElementFromSelector = getElementFromSelector;
  exports.getNextActiveElement = getNextActiveElement;
  exports.getSelectorFromElement = getSelectorFromElement;
  exports.getTransitionDurationFromElement = getTransitionDurationFromElement;
  exports.getUID = getUID;
  exports.getjQuery = getjQuery;
  exports.isDisabled = isDisabled;
  exports.isElement = isElement;
  exports.isRTL = isRTL;
  exports.isVisible = isVisible;
  exports.noop = noop;
  exports.onDOMContentLoaded = onDOMContentLoaded;
  exports.reflow = reflow;
  exports.toType = toType;
  exports.triggerTransitionEnd = triggerTransitionEnd;

  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

}));


/***/ }),

/***/ 8323:
/*!*****************************************************************!*\
  !*** ./static/projects/src/bootstrap/js/dist/util/sanitizer.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

/*!
  * Bootstrap sanitizer.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? factory(exports) :
  0;
})(this, (function (exports) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): util/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  const uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
  const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
   */

  const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
   */

  const DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  const allowedAttribute = (attribute, allowedAttributeList) => {
    const attributeName = attribute.nodeName.toLowerCase();

    if (allowedAttributeList.includes(attributeName)) {
      if (uriAttributes.has(attributeName)) {
        return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue) || DATA_URL_PATTERN.test(attribute.nodeValue));
      }

      return true;
    } // Check if a regular expression validates the attribute.


    return allowedAttributeList.filter(attributeRegex => attributeRegex instanceof RegExp).some(regex => regex.test(attributeName));
  };

  const DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
    if (!unsafeHtml.length) {
      return unsafeHtml;
    }

    if (sanitizeFunction && typeof sanitizeFunction === 'function') {
      return sanitizeFunction(unsafeHtml);
    }

    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    const elements = [].concat(...createdDocument.body.querySelectorAll('*'));

    for (const element of elements) {
      const elementName = element.nodeName.toLowerCase();

      if (!Object.keys(allowList).includes(elementName)) {
        element.remove();
        continue;
      }

      const attributeList = [].concat(...element.attributes);
      const allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);

      for (const attribute of attributeList) {
        if (!allowedAttribute(attribute, allowedAttributes)) {
          element.removeAttribute(attribute.nodeName);
        }
      }
    }

    return createdDocument.body.innerHTML;
  }

  exports.DefaultAllowlist = DefaultAllowlist;
  exports.sanitizeHtml = sanitizeHtml;

  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

}));


/***/ }),

/***/ 381:
/*!*****************************************************************!*\
  !*** ./static/projects/src/bootstrap/js/dist/util/scrollbar.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap scrollbar.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ../dom/selector-engine */ 418), __webpack_require__(/*! ../dom/manipulator */ 9800), __webpack_require__(/*! ./index */ 7317)) :
  0;
})(this, (function (SelectorEngine, Manipulator, index) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  const Manipulator__default = /*#__PURE__*/_interopDefaultLegacy(Manipulator);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): util/scrollBar.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  const SELECTOR_STICKY_CONTENT = '.sticky-top';
  const PROPERTY_PADDING = 'padding-right';
  const PROPERTY_MARGIN = 'margin-right';
  /**
   * Class definition
   */

  class ScrollBarHelper {
    constructor() {
      this._element = document.body;
    } // Public


    getWidth() {
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
      const documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }

    hide() {
      const width = this.getWidth();

      this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width


      this._setElementAttributes(this._element, PROPERTY_PADDING, calculatedValue => calculatedValue + width); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth


      this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, calculatedValue => calculatedValue + width);

      this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, calculatedValue => calculatedValue - width);
    }

    reset() {
      this._resetElementAttributes(this._element, 'overflow');

      this._resetElementAttributes(this._element, PROPERTY_PADDING);

      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);

      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }

    isOverflowing() {
      return this.getWidth() > 0;
    } // Private


    _disableOverFlow() {
      this._saveInitialAttribute(this._element, 'overflow');

      this._element.style.overflow = 'hidden';
    }

    _setElementAttributes(selector, styleProperty, callback) {
      const scrollbarWidth = this.getWidth();

      const manipulationCallBack = element => {
        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }

        this._saveInitialAttribute(element, styleProperty);

        const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
        element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
      };

      this._applyManipulationCallback(selector, manipulationCallBack);
    }

    _saveInitialAttribute(element, styleProperty) {
      const actualValue = element.style.getPropertyValue(styleProperty);

      if (actualValue) {
        Manipulator__default.default.setDataAttribute(element, styleProperty, actualValue);
      }
    }

    _resetElementAttributes(selector, styleProperty) {
      const manipulationCallBack = element => {
        const value = Manipulator__default.default.getDataAttribute(element, styleProperty); // We only want to remove the property if the value is `null`; the value can also be zero

        if (value === null) {
          element.style.removeProperty(styleProperty);
          return;
        }

        Manipulator__default.default.removeDataAttribute(element, styleProperty);
        element.style.setProperty(styleProperty, value);
      };

      this._applyManipulationCallback(selector, manipulationCallBack);
    }

    _applyManipulationCallback(selector, callBack) {
      if (index.isElement(selector)) {
        callBack(selector);
        return;
      }

      for (const sel of SelectorEngine__default.default.find(selector, this._element)) {
        callBack(sel);
      }
    }

  }

  return ScrollBarHelper;

}));


/***/ }),

/***/ 4355:
/*!*************************************************************!*\
  !*** ./static/projects/src/bootstrap/js/dist/util/swipe.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap swipe.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./config */ 3634), __webpack_require__(/*! ../dom/event-handler */ 1426), __webpack_require__(/*! ./index */ 7317)) :
  0;
})(this, (function (Config, EventHandler, index) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const Config__default = /*#__PURE__*/_interopDefaultLegacy(Config);
  const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): util/swipe.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME = 'swipe';
  const EVENT_KEY = '.bs.swipe';
  const EVENT_TOUCHSTART = `touchstart${EVENT_KEY}`;
  const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY}`;
  const EVENT_TOUCHEND = `touchend${EVENT_KEY}`;
  const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY}`;
  const EVENT_POINTERUP = `pointerup${EVENT_KEY}`;
  const POINTER_TYPE_TOUCH = 'touch';
  const POINTER_TYPE_PEN = 'pen';
  const CLASS_NAME_POINTER_EVENT = 'pointer-event';
  const SWIPE_THRESHOLD = 40;
  const Default = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  };
  const DefaultType = {
    endCallback: '(function|null)',
    leftCallback: '(function|null)',
    rightCallback: '(function|null)'
  };
  /**
   * Class definition
   */

  class Swipe extends Config__default.default {
    constructor(element, config) {
      super();
      this._element = element;

      if (!element || !Swipe.isSupported()) {
        return;
      }

      this._config = this._getConfig(config);
      this._deltaX = 0;
      this._supportPointerEvents = Boolean(window.PointerEvent);

      this._initEvents();
    } // Getters


    static get Default() {
      return Default;
    }

    static get DefaultType() {
      return DefaultType;
    }

    static get NAME() {
      return NAME;
    } // Public


    dispose() {
      EventHandler__default.default.off(this._element, EVENT_KEY);
    } // Private


    _start(event) {
      if (!this._supportPointerEvents) {
        this._deltaX = event.touches[0].clientX;
        return;
      }

      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX;
      }
    }

    _end(event) {
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX - this._deltaX;
      }

      this._handleSwipe();

      index.execute(this._config.endCallback);
    }

    _move(event) {
      this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
    }

    _handleSwipe() {
      const absDeltaX = Math.abs(this._deltaX);

      if (absDeltaX <= SWIPE_THRESHOLD) {
        return;
      }

      const direction = absDeltaX / this._deltaX;
      this._deltaX = 0;

      if (!direction) {
        return;
      }

      index.execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
    }

    _initEvents() {
      if (this._supportPointerEvents) {
        EventHandler__default.default.on(this._element, EVENT_POINTERDOWN, event => this._start(event));
        EventHandler__default.default.on(this._element, EVENT_POINTERUP, event => this._end(event));

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        EventHandler__default.default.on(this._element, EVENT_TOUCHSTART, event => this._start(event));
        EventHandler__default.default.on(this._element, EVENT_TOUCHMOVE, event => this._move(event));
        EventHandler__default.default.on(this._element, EVENT_TOUCHEND, event => this._end(event));
      }
    }

    _eventIsPointerPenTouch(event) {
      return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
    } // Static


    static isSupported() {
      return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
    }

  }

  return Swipe;

}));


/***/ }),

/***/ 9707:
/*!************************************************************************!*\
  !*** ./static/projects/src/bootstrap/js/dist/util/template-factory.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap template-factory.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./sanitizer */ 8323), __webpack_require__(/*! ./index */ 7317), __webpack_require__(/*! ../dom/selector-engine */ 418), __webpack_require__(/*! ./config */ 3634)) :
  0;
})(this, (function (sanitizer, index, SelectorEngine, Config) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  const Config__default = /*#__PURE__*/_interopDefaultLegacy(Config);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): util/template-factory.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME = 'TemplateFactory';
  const Default = {
    allowList: sanitizer.DefaultAllowlist,
    content: {},
    // { selector : text ,  selector2 : text2 , }
    extraClass: '',
    html: false,
    sanitize: true,
    sanitizeFn: null,
    template: '<div></div>'
  };
  const DefaultType = {
    allowList: 'object',
    content: 'object',
    extraClass: '(string|function)',
    html: 'boolean',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    template: 'string'
  };
  const DefaultContentType = {
    entry: '(string|element|function|null)',
    selector: '(string|element)'
  };
  /**
   * Class definition
   */

  class TemplateFactory extends Config__default.default {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
    } // Getters


    static get Default() {
      return Default;
    }

    static get DefaultType() {
      return DefaultType;
    }

    static get NAME() {
      return NAME;
    } // Public


    getContent() {
      return Object.values(this._config.content).map(config => this._resolvePossibleFunction(config)).filter(Boolean);
    }

    hasContent() {
      return this.getContent().length > 0;
    }

    changeContent(content) {
      this._checkContent(content);

      this._config.content = { ...this._config.content,
        ...content
      };
      return this;
    }

    toHtml() {
      const templateWrapper = document.createElement('div');
      templateWrapper.innerHTML = this._maybeSanitize(this._config.template);

      for (const [selector, text] of Object.entries(this._config.content)) {
        this._setContent(templateWrapper, text, selector);
      }

      const template = templateWrapper.children[0];

      const extraClass = this._resolvePossibleFunction(this._config.extraClass);

      if (extraClass) {
        template.classList.add(...extraClass.split(' '));
      }

      return template;
    } // Private


    _typeCheckConfig(config) {
      super._typeCheckConfig(config);

      this._checkContent(config.content);
    }

    _checkContent(arg) {
      for (const [selector, content] of Object.entries(arg)) {
        super._typeCheckConfig({
          selector,
          entry: content
        }, DefaultContentType);
      }
    }

    _setContent(template, content, selector) {
      const templateElement = SelectorEngine__default.default.findOne(selector, template);

      if (!templateElement) {
        return;
      }

      content = this._resolvePossibleFunction(content);

      if (!content) {
        templateElement.remove();
        return;
      }

      if (index.isElement(content)) {
        this._putElementInTemplate(index.getElement(content), templateElement);

        return;
      }

      if (this._config.html) {
        templateElement.innerHTML = this._maybeSanitize(content);
        return;
      }

      templateElement.textContent = content;
    }

    _maybeSanitize(arg) {
      return this._config.sanitize ? sanitizer.sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
    }

    _resolvePossibleFunction(arg) {
      return typeof arg === 'function' ? arg(this) : arg;
    }

    _putElementInTemplate(element, templateElement) {
      if (this._config.html) {
        templateElement.innerHTML = '';
        templateElement.append(element);
        return;
      }

      templateElement.textContent = element.textContent;
    }

  }

  return TemplateFactory;

}));


/***/ }),

/***/ 3301:
/*!***************************************************!*\
  !*** ./static/projects/src/js/bootstrap-table.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-table */ 3306);


/***/ }),

/***/ 4644:
/*!*********************************************!*\
  !*** ./static/projects/src/js/bootstrap.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap_js_dist_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bootstrap/js/dist/alert */ 395);
/* harmony import */ var _bootstrap_js_dist_alert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_js_dist_alert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bootstrap_js_dist_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bootstrap/js/dist/button */ 8089);
/* harmony import */ var _bootstrap_js_dist_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_js_dist_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bootstrap_js_dist_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bootstrap/js/dist/carousel */ 8480);
/* harmony import */ var _bootstrap_js_dist_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_js_dist_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bootstrap/js/dist/collapse */ 9791);
/* harmony import */ var _bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bootstrap_js_dist_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bootstrap/js/dist/dropdown */ 6835);
/* harmony import */ var _bootstrap_js_dist_dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_js_dist_dropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bootstrap/js/dist/modal */ 2747);
/* harmony import */ var _bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _bootstrap_js_dist_offcanvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bootstrap/js/dist/offcanvas */ 160);
/* harmony import */ var _bootstrap_js_dist_offcanvas__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_js_dist_offcanvas__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _bootstrap_js_dist_popover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bootstrap/js/dist/popover */ 6565);
/* harmony import */ var _bootstrap_js_dist_popover__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_js_dist_popover__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _bootstrap_js_dist_scrollspy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../bootstrap/js/dist/scrollspy */ 8988);
/* harmony import */ var _bootstrap_js_dist_scrollspy__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_js_dist_scrollspy__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _bootstrap_js_dist_tab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../bootstrap/js/dist/tab */ 2602);
/* harmony import */ var _bootstrap_js_dist_tab__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_js_dist_tab__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _bootstrap_js_dist_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../bootstrap/js/dist/toast */ 7906);
/* harmony import */ var _bootstrap_js_dist_toast__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_js_dist_toast__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _bootstrap_js_dist_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../bootstrap/js/dist/tooltip */ 1796);
/* harmony import */ var _bootstrap_js_dist_tooltip__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_js_dist_tooltip__WEBPACK_IMPORTED_MODULE_11__);
//import $ from 'jquery';















__webpack_require__.g.Alert = (_bootstrap_js_dist_alert__WEBPACK_IMPORTED_MODULE_0___default());
__webpack_require__.g.Button = (_bootstrap_js_dist_button__WEBPACK_IMPORTED_MODULE_1___default());
__webpack_require__.g.Carousel = (_bootstrap_js_dist_carousel__WEBPACK_IMPORTED_MODULE_2___default());
__webpack_require__.g.Collapse = (_bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_3___default());
__webpack_require__.g.Dropdown = (_bootstrap_js_dist_dropdown__WEBPACK_IMPORTED_MODULE_4___default());
__webpack_require__.g.Modal = (_bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_5___default());
__webpack_require__.g.Offcanvas = (_bootstrap_js_dist_offcanvas__WEBPACK_IMPORTED_MODULE_6___default());
__webpack_require__.g.Popover = (_bootstrap_js_dist_popover__WEBPACK_IMPORTED_MODULE_7___default());
__webpack_require__.g.Scrollspy = (_bootstrap_js_dist_scrollspy__WEBPACK_IMPORTED_MODULE_8___default());
__webpack_require__.g.Tab = (_bootstrap_js_dist_tab__WEBPACK_IMPORTED_MODULE_9___default());
__webpack_require__.g.Toast = (_bootstrap_js_dist_toast__WEBPACK_IMPORTED_MODULE_10___default());
__webpack_require__.g.Tooltip = (_bootstrap_js_dist_tooltip__WEBPACK_IMPORTED_MODULE_11___default());


/***/ }),

/***/ 2532:
/*!******************************************!*\
  !*** ./static/projects/src/js/jquery.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 1271);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

__webpack_require__.g.$ = (jquery__WEBPACK_IMPORTED_MODULE_0___default());
__webpack_require__.g.jQuery = (jquery__WEBPACK_IMPORTED_MODULE_0___default());

/***/ }),

/***/ 1233:
/*!******************************************!*\
  !*** ./static/projects/src/js/youviz.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var plotly_js_dist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! plotly.js-dist */ 326);
/* harmony import */ var plotly_js_dist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(plotly_js_dist__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ 1175);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dropzone */ 7743);
/* harmony import */ var _jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jquery */ 2532);
/* harmony import */ var _bootstrap_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bootstrap-table */ 3301);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bootstrap */ 4644);
/* harmony import */ var _scss_projects_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scss/projects.scss */ 7100);
// npm packages
 //external

 //external
const dayjs = __webpack_require__(/*! dayjs-with-plugins */ 883);


// 1-step workaround for these npm packages




// selected bootstrap modules
//import { Alert, Button, Carousel, Collapse, Dropdown, Modal, Offcanvas, Popover, Scrollspy, Tab, Toast, Tooltip} from 'bootstrap';

/*import Alert from '../bootstrap/js/dist/alert';
import Button from '../bootstrap/js/dist/button';
import Carousel from '../bootstrap/js/dist/carousel';
import Collapse from '../bootstrap/js/dist/collapse';
import Dropdown from  '../bootstrap/js/dist/dropdown';
import Modal from '../bootstrap/js/dist/modal';
import Offcanvas from '../bootstrap/js/dist/offcanvas';
import Popover from  '../bootstrap/js/dist/popover';
import Scrollspy from '../bootstrap/js/dist/scrollspy';
import Tab from '../bootstrap/js/dist/tab';
import Toast from '../bootstrap/js/dist/toast';
import Tooltip from '../bootstrap/js/dist/tooltip';*/

// sass entry point


// other files
//import '../fix/mapbox-gl-unminified.js.map';
//import '../fix/base64-arraybuffer.es5.js.map';
//import '../fix/dropzone.mjs.map';
//import '../fix/performance-now.js.map';
var m1 = __webpack_require__(/*! ../fix/mapbox-gl-unminified.js.map */ 8282);
var m2 = __webpack_require__(/*! ../fix/base64-arraybuffer.es5.js.map */ 5586);
var m3 = __webpack_require__(/*! ../fix/dropzone.mjs.map */ 2095);
var m4 = __webpack_require__(/*! ../fix/performance-now.js.map */ 1265);

// custom js

// the root object
window.Handler = {
    js:{},
    css:{}
};
 
Handler.alert = function(value) {
    Handler.navigator.rename(value[0], value[1]);
}

// ex: viz-5-editpane
Handler.elID = function(componentName, id, role) {
    return componentName + '-' + id + '-' + role;
}
 
Handler.timeRefresh = function(tstamp, tar) {
    //var relativeTime = require('dayjs/plugin/relativeTime');
    //dayjs.extend(relativeTime);
    tar.innerHTML = dayjs(tstamp).fromNow();
    setInterval(function() {
        tar.innerHTML = dayjs(tstamp).fromNow();
    }, 60000);
}
 
 // share button
Handler.shareListener = function(btnSelector, resSelector, title, text, url) {
    const shareData = {
        title: title,
        text: text,
        url: url
    }
    const btn = document.querySelector(btnSelector);
    //const resultPara = document.querySelector(resSelector);
    
    if(!btn) return; 
    
    // Share must be triggered by "user activation"
    btn.addEventListener('click', async () => {
        try {
            await navigator.share(shareData);
            //resultPara.textContent = 'MDN shared successfully';
        } catch (err) {
            console.log(`Error: ${err}`);
        }
    });
}

/*
function showVizOffcanvas() {
    var element = document.querySelector(".dropdown-item.active");
    var offcanvasID =  element.getAttribute("offcanvasID");
    var offcanvas = document.getElementById(offcanvasID);
    var vizOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvas);
    vizOffcanvas.show();
}

function vizOffcanvasMaximize(c, oc) {
    document.querySelector(oc).classList.toggle('h-100');
}*/

class NavTarget {
    constructor(component, id, name) {
        this.component = component;
        this.id = Number(id);
        this.name = name;
    }
    
    get compID() {
        return this.component + '-' + this.id;
    }
    
    get editElementID() {
        return Handler.elID(this.component, this.id, 'edit');
    }
    
    get tabTriggerElementID() {
        return Handler.elID( this.component, this.id, 'tab');
    }
    
    get copyElementID() {
        return Handler.elID(this.component, this.id, 'copy');
    }
}

//TODO: Handle component-key combinations
class Navigator {
    constructor() {
        //this.navigateCallback = callback;
        this.targets = [];
        this.selected = -1;
        this.showNav = false;
        this.showEdit = false;
    }
    
    _navigationChanged(name, navTar) {
        const e = new CustomEvent('navigationChanged', {
            detail: {
                name: name,
                navigator: this,
                active: this.targets[this.selected], 
                index: this.targets.findIndex(t => t.id == navTar.id),
                count: this.targets.length,
                navTar: navTar
            }
        });
        document.dispatchEvent(e);
    }

    get active() {
        return this.targets[this.selected];
    }
    
    set active(id) {
        if(id === "undefined") {
            return;
        } else {
            var i = this.targets.findIndex(t => t.id == id);
            if(i >= 0) {
                this.selected = i;
                this._navigationChanged("active", this.targets[this.selected]);
            }
        }
    }
    
    get all() {
        return this.targets;
    }

    get count() {
        return this.targets.length;
    }
    
    add(component, id, name) {
        //skip if already added to avoid gui errors
        var indexIfAlreadyAdded = this.targets.findIndex(t => t.id == id);
        if (indexIfAlreadyAdded >= 0) {return;}
        var i = this.targets.findIndex(t => t.id > Number(id));
        if (i < 0) {
            this.targets.push(new NavTarget(component, id, name));
            i = this.targets.length - 1;
        } else {
            this.targets.splice(i, 0, new NavTarget(component, id, name));
        }
        //this.selected = i;
        this._navigationChanged("add", this.targets[i]);
        //this.active = id;
    }
    
    addAndReset(component, id, name) {
        //skip if already added to avoid gui errors
        var indexIfAlreadyAdded = this.targets.findIndex(t => t.id == id);
        if (indexIfAlreadyAdded >= 0) {return;}
        this.add(component, id, name);
        this.active = this.targets[0].id;
    }

    remove(id) {
        var i = this.targets.findIndex(t => t.id == id);
        if(i){
            var tar = this.targets.splice(i, 1);
            this._navigationChanged("remove", tar[0]);
            if(this.targets.length === 0) {
                this.active = "undefined";
            }
        }
    }
        
    forward() {
        if(this.selected >= 0) {
            this.selected = this.selected + 1;
            if(this.selected >= this.targets.length) {
                this.selected = 0;
            }
            this._navigationChanged("active", this.targets[this.selected]);
        }
    }

    back() {
        if(this.selected >= 0) {
            this.selected = this.selected - 1;
            if(this.selected < 0) {
                this.selected = this.targets.length - 1;
            }
            this._navigationChanged("active", this.targets[this.selected]);
        }
    }
    
    /*
    jump(index) {
        if(index >= 0 && index < this.targets.length) {
            this.selected = index;
            this._navigationChanged("active", this.targets[this.selected]);
        }
    }*/
    
    jump(key) {
        var tar = this.targets.find(t => t.id == key);
        if(tar !== "undefined") {
            this.selected = this.targets.findIndex(t => t.id == tar.id);
            this._navigationChanged("active", tar);
        }  
    }
    
    rename(key, name) {
        var tar = this.targets.find(t => t.id == key);
        if(tar !== "undefined") {
            tar.name = name;
            this._navigationChanged("name", tar);
        }   
    }
    
    // needed to catch single param call from django-unicorn view
    /*rename(arry) {
        this.rename(arry[0], arry[1]);   
    }*/
    
    toggleNav() {
        this.showNav = !this.showNav;
        this._navToggled();
    }
    
    reset() {
        alert(this.targets.length > 0);
        if (this.targets.length > 0) {
            this.active = this.targets[0].id;
        }
    }
    
    _navToggled() {
        const e = new CustomEvent('navToggled', {
            detail: {
                name: 'navToggled',
                navigator: this,
                showNav: this.showNav
            }
        });
        document.dispatchEvent(e);    
    }
    
    toggleEdit() {
        this.showEdit = !this.showEdit;
        this._editToggled();
    }
    
    _editToggled() {
        const e = new CustomEvent('editToggled', {
            detail: {
                name: 'editToggled',
                navigator: this,
                showEdit: this.showEdit
            }
        });
        document.dispatchEvent(e);    
    }
    
};

Handler.navigator = new Navigator();
 
Handler.text_truncate = function(str, length, ending) {
    if (length == null) {
        length = 8;
    }
    if (ending == null) {
        ending = '...';
    }
    if (str.length > length) {
        return str.substring(0, length - 1) + ending;
    } else {
        return str;
    } 
}

Handler.addTab = function(navTar, index) {
    //make tab button
    const bli = document.createElement('li');
    const b = document.createElement('button');
    b.id = navTar.tabTriggerElementID; //id="{{vid}}-tab"
    b.textContent = navTar.name;
    b.classList.add("dropdown-item");
    b.setAttribute("data-bs-toggle", "tab");
    b.setAttribute("data-bs-target", "#"+navTar.compID);
    b.setAttribute("role", "tab");
    b.setAttribute("type", "button");
    b.setAttribute("aria-controls", navTar.compID);
    b.setAttribute("index", index);
    b.setAttribute("navTarID", navTar.id);
    b.setAttribute("onclick", "event.preventDefault(); Handler.navigator.jump(" + navTar.id + ");");
    
    //make copy anchor
    const ali = document.createElement('li');
    const a = document.createElement('a');
    a.id = navTar.copyElementID; //id="viz-{{viz.pk}}-copy" 
    a.textContent = "Copy " + navTar.name;
    a.classList.add("dropdown-item");
    a.setAttribute("href", "#");
    a.setAttribute("onclick", "Unicorn.call('app', 'copyViz', '" + navTar.id + "');"); //unicorn:click="copyViz({{viz.pk}})
    a.setAttribute("index", index);
    
    //eh
    //TODO
    
    //add
    const ul = document.getElementById("tabButtons");
    var navTarCount = Handler.navigator.count;
    
    if (ul != null) {
        //ul.appendChild(bli);
        const topFixedItemsCount = 1;
        ul.insertBefore(bli, ul.children[topFixedItemsCount + index]);
        bli.appendChild(b);

        //ul.appendChild(ali);
        const midFixedItemsCount = 3;
        ul.insertBefore(ali, ul.children[topFixedItemsCount + midFixedItemsCount + navTarCount + index]);
        ali.appendChild(a);
    }
}

document.addEventListener('navigationChanged', (e) => {
    switch(e.detail.name) {
        case "active": 
            // update navpanel text & show active tab 
            var element = document.getElementById("btnGroupDrop1");
            element.childNodes[0].nodeValue = Handler.text_truncate(e.detail.navigator.active.name) + " ";
            var t = document.getElementById(e.detail.active.tabTriggerElementID);
            //bootstrap.Tab.getOrCreateInstance(t).show();
            Tab.getOrCreateInstance(t).show();
            break;
        case "add":
            // add Tab & Copy buttons
            var element = document.getElementById("vizCount");
            element.innerHTML = e.detail.count + " vizs";
            Handler.addTab(e.detail.navTar, e.detail.index);
            break;
        case "remove":
            // remove Tab & Copy buttons
            var element = document.getElementById("vizCount");
            element.innerHTML = e.detail.count + " vizs";
            document.getElementById(e.detail.navTar.id).remove();
            break;
        case "name":
            // update navpanel, Tab & Copy buttons 
            var element = document.getElementById("btnGroupDrop1");
            element.firstChild.data = Handler.text_truncate(e.detail.navTar.name);
            document.getElementById(e.detail.navTar.tabTriggerElementID).innerHTML = e.detail.navTar.name;
            document.getElementById(e.detail.navTar.copyElementID).innerHTML = 'Copy ' + e.detail.navTar.name;
            break;
    }
});
document.addEventListener('navToggled', (e) => {
    switch(e.detail.name) {
        case "navToggled": 
            //alert("navToggled");
            //bootstrap.Collapse.getOrCreateInstance(document.getElementById("leftPanel")).toggle();
            Collapse.getOrCreateInstance(document.getElementById("leftPanel")).toggle();
            
            // adn nav pane
            document.getElementById("navbar").classList.toggle("open");
            //document.getElementById("navbar_container").classList.toggle("main-content");
            //document.getElementById(e.detail.navigator.active.navElementID).classList.toggle("open");
            // is small screen call dropup, else call left panel
            break;
    }
});

document.addEventListener('editToggled', (e) => {
    switch(e.detail.name) {
        case "editToggled": 
            // toggle right panel
            //bootstrap.Collapse.getOrCreateInstance(document.getElementById("rightPanel")).toggle(); 
            Collapse.getOrCreateInstance(document.getElementById("rightPanel")).toggle(); 
            
            // ...and edit panes
            const l = document.querySelectorAll(".test-edit");
            for (let i = 0; i < l.length; i++) {
                l[i].classList.toggle("open");
            }
            
            //document.getElementById("bottom-navbar").classList.toggle("dynamic");
            
            //document.getElementById(e.detail.navigator.active.editElementID).classList.toggle("open");
            break;
    }
});

// Change DOM on screen size change
Handler.mediaQuery = function(query, handleYes, handleNo) {
    // ex: "(max-width: 700px)"
    var x = window.matchMedia(query);
    var f = function() {
        (x.matches) ? handleYes() : handleNo();
    }
    // call once immediately then listen
    f();
    x.addListener(f);
}

// Change style on screen size change
Handler.mediaQueryStyle = function(param) {
    var {query, elem, attr, yesStyle, noStyle} = param;
    var e = document.querySelector(elem);
    Handler.mediaQuery(
        query, 
        ()=>{ e.style.setProperty(attr, yesStyle); }, 
        ()=>{ e.style.setProperty(attr, noStyle); },
    );
}
/*
Handler.offset = function(el) {
    box = el.getBoundingClientRect();
    docElem = document.documentElement;
    return {
        top: box.top + window.pageYOffset - docElem.clientTop,
        left: box.left + window.pageXOffset - docElem.clientLeft
    };
}

Handler.fixToViewport = function(el, top, left) {
    var e = document.querySelector(el);
    e.css("left", leftOffset - element.offset().left);
    e.css("top", topOffset - element.offset().top);   
}*/

// Change DOM on screen size change
Handler.mediaQuerySwitch = function(param) {
    var {query, elem, yesParent, noParent} = param;
    var e = document.querySelector(elem);
    var y = document.querySelector(yesParent);
    var n = document.querySelector(noParent);
    Handler.mediaQuery(
        query, 
        ()=>{ /*if (n.contains(e))*/ y.appendChild(e); }, 
        ()=>{ /*if (y.contains(e))*/ n.appendChild(e); },
    );
}

Handler.showTab = function(query) {
    const t = document.querySelector(query);
    Tab.getOrCreateInstance(t).show();
}

Handler.vizInit = function (node) {
    //get plot div, tab
    var d = node.dataset;
    var vid = "viz-" + d.yvId;
    var plot_div = "plotBox-" + vid;
    var plot_div_el = document.getElementById(plot_div);
    var tab_div = vid + "-tab";
    //var tab_div_el = document.getElementById(tab_div);

    //get json
    var json_el = document.getElementById("youviz:data:" + vid);
    var json = JSON.parse(json_el.textContent);

    //make plot
    var data = json.plot_data;
    var layout = json.plot_layout;
    //var config = {responsive: true};
    //layout.height = 392;
    layout.width = plot_div_el.clientWidth;
    layout.height = plot_div_el.clientHeight;
    
    layout.margin.t = 15;
    layout.margin.b = 68;
    layout.margin.r = 10;
    layout.showlegend = true;
    layout.legend = {
        x: 1,
        xanchor: 'right',
        y: 1,
        bgcolor: '#00000000',
    };
    layout.clickmode = 'none';
    layout.dragmode = false;
    
    var config = {displayModeBar: false, scrollZoom: false};
    plotly_js_dist__WEBPACK_IMPORTED_MODULE_0___default().react(plot_div, data, layout, config);

    // popover setup
    const list = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    list.map((el) => {
      let opts = {
        animation: false,
      }
      if (el.hasAttribute('data-bs-content-id')) {
        opts.content = document.getElementById(el.getAttribute('data-bs-content-id')).innerHTML;
        opts.html = true;
        opts.sanitize = false;
      }
      //new bootstrap.Popover(el, opts);
      new Popover(el, opts);
    })

    //var yvmodals = document.getElementsByClassName("yvmodal");
    var yvmodals = document.querySelectorAll('.yvmodal.viz');
    var body = document.getElementById("body");
    for (let i = 0; i < yvmodals.length; i++) {
        body.appendChild(yvmodals[i]); 
    }

    let observer = new ResizeObserver(entries => {
        for(let entry of entries) {
            // only respond if displayed to save cpu
            if (window.getComputedStyle(plot_div_el, null).getPropertyValue("display") != "none") {
                if (entry.contentBoxSize) {
                    // Firefox implements `contentBoxSize` as a single content rect, rather than an array
                    //const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize;
                    if (plot_div_el.clientWidth >= 10 || plot_div_el.clientHeight >= 10) {
                        var update = {
                            width: plot_div_el.clientWidth,
                            height: plot_div_el.clientHeight
                        };
                        plotly_js_dist__WEBPACK_IMPORTED_MODULE_0___default().relayout(plot_div, update);
                    }
                } else {
                    if (plot_div_el.clientWidth >= 10 || plot_div_el.clientHeight >= 10) {
                        var update = {
                            width: plot_div_el.clientWidth,
                            height: plot_div_el.clientHeight
                        };
                        plotly_js_dist__WEBPACK_IMPORTED_MODULE_0___default().relayout(plot_div, update);
                    }
                }
            }
        }
    });
    
    let midPanel = document.getElementById('midPanel');
    observer.observe(midPanel);
    
    // add listener to generated dom
    var tab_div_el = document.getElementById(tab_div);
    tab_div_el.addEventListener('shown.bs.tab', function (event) {
        if (event.target.id === tab_div) { // newly activated tab
        //event.relatedTarget // previous active tab
            if (plot_div_el.clientWidth >= 10 || plot_div_el.clientHeight >= 10) {
                var update = {
                    width: plot_div_el.clientWidth,
                    height: plot_div_el.clientHeight
                };
                plotly_js_dist__WEBPACK_IMPORTED_MODULE_0___default().relayout(plot_div, update);
            }
        }
    });
    
    //nested datatable init
    
    $('#table').bootstrapTable(); // init via javascript

    // datatable modal
    // append modals to prevent z-layer issues
    var yvmodals = document.querySelectorAll('.yvmodal');
    var body = document.getElementById("body");
    for (let i = 0; i < yvmodals.length; i++) {
        body.appendChild(yvmodals[i]); 
    }
    /*
    Handler.mediaQuerySwitch({
        query: '(max-width: 992px)',
        elem: '#switch',
        yesParent: '.offcanvas-bottom',
        noParent: '#rightPanel div',
    });*/
}

Handler.dataframeInit = function (node) {
    var d = node.dataset;
    const m = document.querySelector("#modalTable");
    
    if (m) {
        //bootstrap.Modal.getOrCreateInstance(m).dispose();
        //bootstrap.Modal.getOrCreateInstance(m);
        Modal.getOrCreateInstance(m).dispose();
        Modal.getOrCreateInstance(m);
        document.getElementById("body").appendChild(m);
        var $table = $('#table');

        //var dfScript = document.createElement("script");
        //dfScript.src = '{% static "projects/js/bootstrap-table.min.js" %}';
        //dfScript.addEventListener("load", () => {
        //    Handler.js.bt = true;
        //});
        //node.appendChild(dfScript);
        
        // JQuery for Bootstrap Table compatibility
        let myVar = setInterval(function() {
            if(
                //Handler.scripts['btc'] !== undefined &&
                Handler.js.bt !== undefined &&
                $table.bootstrapTable !== undefined){
                clearInterval(myVar);
                //$(function() {
                //    m.addEventListener('shown.bs.modal',function () {
                //        $table.bootstrapTable('resetView');
                //    });
                //});
            }
        }, 250);
    }
}

Handler.vizreportInit = function (node) {
    var d = node.dataset;
    //get modal
    const mr = document.querySelector("#modalReport");
    if (mr) {
        //bootstrap.Modal.getOrCreateInstance(mr).dispose();
        //bootstrap.Modal.getOrCreateInstance(mr);
        Modal.getOrCreateInstance(mr).dispose();
        Modal.getOrCreateInstance(mr);
        document.getElementById("body").appendChild(mr);

        // init vizs
        //var arr = document.querySelectorAll(".yv-vizreport div script");
        var arr = document.querySelectorAll(".yv-vizreport");
        for (var n = 0; n < arr.length; n++) {
            
            //get plot div, tab
            const rep = arr[n];
            const rid = rep.id;
            const plot_div = "plotBox-report-" + rid;
            const plot_div_el = document.getElementById(plot_div);
            
            //get json
            const json_el = document.getElementById("youviz:data:report-" + rid);
            const json = JSON.parse(json_el.textContent);

            //make plot
            const data = json.plot_data;
            const layout = json.plot_layout;
            //var config = {responsive: true};
            const plot_div_outer_el = document.getElementById(rid);
            layout.width = plot_div_outer_el.clientWidth;
            //layout.height = plot_div_outer_el.clientHeight;
            layout.height = 250;
            layout.margin.t = 15;
            layout.margin.b = 68;
            layout.margin.r = 10;
            layout.showlegend = true;
            layout.legend = {
                x: 1,
                xanchor: 'right',
                y: 1,
                bgcolor: '#00000000',
            };
            layout.clickmode = 'none';
            layout.dragmode = false;
            const config = {displayModeBar: false, scrollZoom: false};
            plotly_js_dist__WEBPACK_IMPORTED_MODULE_0___default().react(plot_div, data, layout, config);
            
            //add resize listener
            /*window.addEventListener("resize", (event) => {
             if (window.getComputedStyle(plot_div_el).display !== "none") {
                 var update = {
                    width: plot_div_el.clientWidth,
                    height: plot_div_el.clientHeight
                 };
                 if(update.width !== 0 && update.height !== 0) Plotly.relayout(plot_div, update);
                 //eval(script.innerHTML);
             }
            });*/
            let observer = new ResizeObserver(entries => {
                for(let entry of entries) {
                    if (entry.contentBoxSize) {
                        // Firefox implements `contentBoxSize` as a single content rect, rather than an array
                        //const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize;
                        if (plot_div_outer_el.clientWidth >= 10 || plot_div_outer_el.clientHeight >= 10) {
                            const update = {
                                width: plot_div_outer_el.clientWidth,
                                height: plot_div_outer_el.clientHeight
                            };
                            plotly_js_dist__WEBPACK_IMPORTED_MODULE_0___default().relayout(plot_div, update);
                        }
                    } else {
                        if (plot_div_outer_el.clientWidth >= 10 || plot_div_outer_el.clientHeight >= 10) {
                            const update = {
                                width: plot_div_outer_el.clientWidth,
                                height: plot_div_outer_el.clientHeight
                            };
                            plotly_js_dist__WEBPACK_IMPORTED_MODULE_0___default().relayout(plot_div, update);
                        }
                    }
                }
            });

            //let midPanel = document.getElementById('midPanel');
            observer.observe(plot_div_el);
            
            // resize on modal.show
            mr.addEventListener('show.bs.modal', function (event) {
                if (plot_div_outer_el.clientWidth >= 10 || plot_div_outer_el.clientHeight >= 10) {
                    const update = {
                        width: plot_div_el.clientWidth,
                        height: plot_div_el.clientHeight
                    };
                    plotly_js_dist__WEBPACK_IMPORTED_MODULE_0___default().relayout(plot_div, update);
                }
            });
        }
        
        //qr code
        /*
        var qrcode = new QRCode(document.getElementById("viz-qrcode-{{vid}}"), {
            text: "{{report.get_absolute_url}}",
            width: 60,
            height: 60,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });*/
        
        // share button
        /*
        const shareData = {
            title: '{{report.name}}',
            text: 'Check out this data vizualization on YouViz!',
            url: '{{report.get_absolute_url}}'
        }
        const btn = document.querySelector('#report-button-share');
        const resultPara = document.querySelector('#report-share-result');
        // Share must be triggered by "user activation"
        btn.addEventListener('click', async () => {
            try {
                await navigator.share(shareData);
                //resultPara.textContent = 'MDN shared successfully';
            } catch (err) {
                console.log(`Error: ${err}`);
            }
        });
        */
        Handler.shareListener('#report-button-share', 'null', 'Report', 'Check out this data vizualization on YouViz!', 'https://youviz.app');
    }
}

Handler.dsThumbInit = function (node) {
    var d = node.dataset;
    // init vizs
    //var arr = document.querySelectorAll(".yv-vizreport div script");
    var s = "#carousel-".concat(d.yvId, " .yv-dsthumb");
    var arr = document.querySelectorAll(s);
    for (var n = 0; n < arr.length; n++) {

        //get plot div, tab
        const thumb = arr[n];
        const thumbid = thumb.id;
        const plot_div = "plotBox-dsthumb-" + thumbid;
        const plot_div_el = document.getElementById(plot_div);

        //get json
        const json_el = document.getElementById("youviz:data:dsthumb-" + thumbid);
        const json = JSON.parse(json_el.textContent);

        //make plot
        const data = json.plot_data;
        const layout = json.plot_layout;
        //var config = {responsive: true};
        //const plot_div_outer_el = document.getElementById(thumbid);
        const plot_div_outer_el = thumb.parentElement;
        layout.width = plot_div_outer_el.clientWidth;
        //layout.height = plot_div_outer_el.clientHeight;
        layout.height = 250;
        layout.margin.t = 15;
        layout.margin.b = 68;
        layout.margin.r = 10;
        layout.showlegend = false;
        //if(layout.xaxis.visible) layout.xaxis.visible = false; 
        if(layout.xaxis.showticklabels){
            layout.xaxis.showticklabels = false;
        }
        //if(layout.yaxis.visible) layout.yaxis.visible = false;
        if(layout.yaxis.showticklabels){ 
            layout.yaxis.showticklabels = false;
        }
        /*layout.legend = {
            x: 1,
            xanchor: 'right',
            y: 1,
            bgcolor: '#00000000',
        };*/
        layout.clickmode = 'none';
        layout.dragmode = false;
        const config = {displayModeBar: false, scrollZoom: false};
        
        //var img_jpg= document.querySelector('#jpg-export');
        plotly_js_dist__WEBPACK_IMPORTED_MODULE_0___default().react(plot_div, data, layout, config);
        
        // static image in jpg format
        /*

        .then(
            function(gd)
             {
              Plotly.toImage(gd,{height:300,width:300})
                 .then(
                     function(url)
                     {
                         img_jpg.src = url;
                     }
                 )
            });
            */

        //add resize listener
        /*window.addEventListener("resize", (event) => {
         if (window.getComputedStyle(plot_div_el).display !== "none") {
             var update = {
                width: plot_div_el.clientWidth,
                height: plot_div_el.clientHeight
             };
             if(update.width !== 0 && update.height !== 0) Plotly.relayout(plot_div, update);
             //eval(script.innerHTML);
         }
        });*/
        let observer = new ResizeObserver(entries => {
            for(let entry of entries) {
                if (entry.contentBoxSize) {
                    // Firefox implements `contentBoxSize` as a single content rect, rather than an array
                    //const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize;
                    if (plot_div_outer_el.clientWidth >= 10 || plot_div_outer_el.clientHeight >= 10) {
                        const update = {
                            width: plot_div_outer_el.clientWidth,
                            height: plot_div_outer_el.clientHeight
                        };
                        plotly_js_dist__WEBPACK_IMPORTED_MODULE_0___default().relayout(plot_div, update);
                    }
                } else {
                    if (plot_div_outer_el.clientWidth >= 10 || plot_div_outer_el.clientHeight >= 10) {
                        const update = {
                            width: plot_div_outer_el.clientWidth,
                            height: plot_div_outer_el.clientHeight
                        };
                        plotly_js_dist__WEBPACK_IMPORTED_MODULE_0___default().relayout(plot_div, update);
                    }
                }
            }
        });

        //let midPanel = document.getElementById('midPanel');
        observer.observe(plot_div_el);

        // resize on modal.show
        /*
        mr.addEventListener('show.bs.modal', function (event) {
            const update = {
                width: plot_div_el.clientWidth,
                height: plot_div_el.clientHeight
            };
            Plotly.relayout(plot_div, update);
        });*/

    }
}
 
Handler.componentInit = async function(node_array) {
    node_array.forEach((node) => {
        if(Handler[node.dataset.yvInit]){
            Handler[node.dataset.yvInit](node);
        }

        // activate button
        if(node.dataset.yvButton != ""){
            if(document.querySelector(node.dataset.yvButton)){
                document.querySelector(node.dataset.yvButton).disabled = false;
            }
        }
    });
}

Handler.loadYVComponents = async function (rootElementID) {
    
    let nodeList;
    
    if(rootElementID) {
        nodeList = document.querySelectorAll(rootElementID.concat(" ", ".yv-component"));
    }
    else {
        nodeList = document.querySelectorAll(".yv-component");
    }
    
    const nodes = Array.from(nodeList);
    
    //1.Sort into groups: data-yv-component ...NEW    
    Handler.components = {};
    
    await Promise.all(nodes.map(async (node) => {
        // get unicorn data, add to node
        const response = await fetch(node.dataset.yvLink);
        node.innerHTML = await response.text();
        var selector = '#' + node.id + ' script[id^="unicorn:data"]';
        var u_script = document.querySelector(selector);
        if(u_script) {
            node.unicorn_data = JSON.parse(u_script.textContent);
        }
        //unicorn init
        Unicorn.componentInit(node.unicorn_data);
        // group components
        var c = node.dataset['yvComponent'];
        if(!Handler.components[c]) {
            Handler.components[c] = {};
        }
        Handler.components[c][node.id] = node;
    }));
    
    Object.keys(Handler.components).forEach((c) => {
        // process by group
        switch(c) {
            case 'viz': 
                Object.values(Handler.components[c]).forEach((v)=>{
                    Handler.navigator.add("viz", v.dataset.yvId, v.unicorn_data.data.viz.name); //node.unicorn_data.data.viz.name
                });
                Handler.navigator.active = Handler.navigator.targets[0].id;
                break;
            case 'report':
                break;
            case 'dataframe':
                break;
        }
        // custom init each item
        Handler.componentInit(Object.values(Handler.components[c]));
    });
        
        //  await givePrizeToPlayer(player);
    //}));
    /*
    var p = new Promise((resolve, reject) => {
        nodes.forEach(async (node) => {
            // get unicorn data, add to node
            fetch("." + node.dataset.yvLink)
            .then(response => {
                return response.text() 
            })
            .then(data => {
                node.innerHTML = data;
                var selector = '#' + node.id + ' script[id^="unicorn:data"]';
                var u_script = document.querySelector(selector);
                if(u_script) {
                    node.unicorn_data = JSON.parse(u_script.textContent);
                }
                //unicorn init
                Unicorn.componentInit(node.unicorn_data);  
                return true;
            })
            .then(dummy => {
                // group components
                var c = node.dataset['yvComponent'];
                if(!Handler.components[c]) {
                    Handler.components[c] = {};
                }
                Handler.components[c][node.id] = node;
            });
        });
        resolve(true);
    });*/
                                            
    //   2.Init: generic, custom  ...SAME
/*    nodes.forEach(async (node) => {
        var node_data = node.dataset;

        //fetch("./" + node_data.yvComponent + "/" + node_data.yvId)
        fetch("." + node_data.yvLink)
        .then(response => {
            return response.text() 
        })
        .then(data => {
            node.innerHTML = data;
            let timer = setInterval(function() {
                if(window.Unicorn !== undefined){
                    // stop loop
                    clearInterval(timer);

                    // init unicorn component for ajax editing
                    var u_script = document.querySelector('#' + node.id + ' script[id^="unicorn:data"]');
                    if(u_script !== undefined) {
                        var u = Unicorn;
                        // init u_component
                        u.componentInit(JSON.parse(u_script.textContent)); 
                        // save u_data for later
                        node.unicorn_data = JSON.parse(u_script.textContent);
                        
                    }

                    // init component to setup after download
                    // TODO - make init support async by default?
                    if(Handler[node_data.yvInit] !== undefined){
                        Handler[node_data.yvInit](node);
                    }

                    // activate button
                    if(document.querySelector(node_data.yvButton) !== undefined){
                        document.querySelector(node_data.yvButton).disabled = false;
                    }
                }
            }, 250);
        });
    });*/
    
}

// LOAD YV-COMPS
window.addEventListener("load", async (event) => {
    Handler.loadYVComponents();
});

var yvmodals = document.querySelectorAll('.yvmodal');
var body = document.getElementById("body");
for (let i = 0; i < yvmodals.length; i++) {
    body.appendChild(yvmodals[i]); 
}

//global toggle to keep offcanvas open while editing data source
var editing_file = false;

//window.addEventListener("deviceorientation", (event) => {
//    var absolute = event.absolute;
//    var alpha    = event.alpha;
//    var beta     = event.beta;
//    var gamma    = event.gamma;
//    alert(alpha);
//}

window.addEventListener("load", (event) => {
    const hammertime = Hammer(document.getElementsByTagName('body')[0]);
    hammertime.on('swipeleft swiperight', (event) => {
        switch(event.type) {
            case 'swipeleft': 
                //alert(event.type);
                Handler.navigator.forward();
                break;
            case 'swiperight':
                //alert(event.type);
                Handler.navigator.back();
                break;
        }
    });
    
    //time refresh
    const trefreshes = document.querySelectorAll('.trefresh');
    for (let i = 0; i < trefreshes.length; i++) {
        Handler.timeRefresh(trefreshes[i].lastElementChild.innerHTML, trefreshes[i].firstElementChild); 
    }
});
 

window.addEventListener("load", (event) => {
    var top_nav = document.getElementById("top-nav");
    
    let observer = new ResizeObserver(entries => {
            for(let entry of entries) {
                if (entry.contentBoxSize) {
                    // Firefox implements `contentBoxSize` as a single content rect, rather than an array
                    //const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize;
                    if(Handler.top_nav_init) {
                        var height = document.getElementById("top-nav").offsetHeight;
                    
                        var r = document.querySelector(':root');
                        //var rs = getComputedStyle(r);
                        //rs.getPropertyValue('--t-nav'));
                        r.style.setProperty('--top-nav', height + 'px');
                    } else {
                        Handler.top_nav_init = true;
                    }
                } else {
                    if(Handler.top_nav_init) {
                       var height = document.getElementById("top-nav").offsetHeight;

                        var r = document.querySelector(':root');
                        //var rs = getComputedStyle(r);
                        //rs.getPropertyValue('--t-nav'));
                        r.style.setProperty('--top-nav', height + 'px');
                    } else {
                        Handler.top_nav_init = true;
                    }
                }
            }
        });
    observer.observe(top_nav);
});
 
/*
window.addEventListener("load", (event) => {
    var midPanel = document.getElementById("midPanel")
 
    let observer = new ResizeObserver(entries => {
            for(let entry of entries) {
                if (entry.contentBoxSize) {
                    // Firefox implements `contentBoxSize` as a single content rect, rather than an array
                    //const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize;
                    if(Handler.datasource_info_init) {
                        var width = document.getElementById("midPanel").offsetWidth;
                    
                        //var r = document.querySelector(':root');
                        //var rs = getComputedStyle(r);
                        //rs.getPropertyValue('--t-nav'));
                        //r.style.setProperty('--t-nav', height + 'px');
                        document.querySelector(".viz-info-panel").style.setProperty('width', width + 'px');
                    } else {
                        Handler.datasource_info_init = true;
                    }
                } else {
                    if(Handler.top_nav_init) {
                       var width = document.getElementById("midPanel").offsetWidth;

                        //var r = document.querySelector(':root');
                        //var rs = getComputedStyle(r);
                        //rs.getPropertyValue('--t-nav'));
                        document.querySelector(".viz-info-panel").style.setProperty('width', width + 'px!important;');
                    } else {
                        Handler.datasource_info_init = true;
                    }
                }
            }
        });
    observer.observe(midPanel);
});
*/
 
// sharing app link
/*
const shareApp = {
    //title: '{{report.name}}',
    text: 'Check out YouViz - cool data vizualization app!',
    url: 'https://www.youviz.app/'
}
const btn = document.querySelector('#settings-button-share');
btn.addEventListener('click', async () => {
    try {
        await navigator.share(shareApp);
        //resultPara.textContent = 'MDN shared successfully';
    } catch (err) {
        console.log(`Error: ${err}`);
    }
});
*/

Handler.shareListener('#settings-button-share', 'null', 'YouViz', 'Check out this free data vizualization app!', 'https://youviz.app');
Handler.shareListener('#share-button-share', 'null', 'Report', 'Check out this data vizualization on YouViz!', 'https://youviz.app');
 
 // navbar share
var shareData = document.querySelector("#navbar-button-share")
if(shareData){
    Handler.shareListener('#navbar-button-share', 'null', shareData.dataset.text,  shareData.dataset.text,  shareData.dataset.url);
}

window.addEventListener("DOMContentLoaded", (event) => {
    Unicorn.addEventListener("updated", (component) =>{

        switch(component.name) {
            case 'app':
                // data source off canvas
                if (editing_file == true) {
                    var testOffCanvas = document.getElementById("OFFCANVAS");
                    //var bsoc = bootstrap.Offcanvas.getOrCreateInstance(testOffCanvas);
                    var bsoc = Offcanvas.getOrCreateInstance(testOffCanvas);
                    bsoc.hide();
                }

                // dropdown menus
                var tmd = document.getElementById("tab-more-dropdown");
                if (tmd) {
                    //bootstrap.Dropdown.getOrCreateInstance(tmd).dispose();
                    //bootstrap.Dropdown.getOrCreateInstance(tmd);
                    Dropdown.getOrCreateInstance(tmd).dispose();
                    Dropdown.getOrCreateInstance(tmd);
                }

                var usd = document.getElementById("user-settings-dropdown");
                if (usd) {
                    //bootstrap.Dropdown.getOrCreateInstance(usd).dispose();
                    //bootstrap.Dropdown.getOrCreateInstance(usd);
                    Dropdown.getOrCreateInstance(usd).dispose();
                    Dropdown.getOrCreateInstance(usd);
                }

                //dropzone
                var dzElement = document.querySelector("#drop");
                var myDropzone;
                if (dzElement) {
                    if (dzElement.dropzone) {
                    dzElement.dropzone.destroy();
                    }
                    myDropzone = new dropzone__WEBPACK_IMPORTED_MODULE_2__.Dropzone("#drop");
                };

                //bootstrap table to handle return from file edit
                //bootstrap table
                $('#table').bootstrapTable(); // init via javascript

                // datatable modal
                // append modals to prevent z-layer issues
                var yvmodals = document.querySelectorAll('.yvmodal');
                var body = document.getElementById("body");
                for (let i = 0; i < yvmodals.length; i++) {
                    body.appendChild(yvmodals[i]); 
                }
                
                // navbar share
                var sd = document.querySelector("#navbar-button-share");
                if (sd) {
                    var shareData = sd.dataset;
                    Handler.shareListener('#navbar-button-share', 'null', shareData.text,  shareData.text,  shareData.url);
                }
                
               // list scrolldown
                for (let i = 0; i < component.currentActionQueue[0].partials.length; i++) {
                    if (component.currentActionQueue[0].partials[i].id) {
                        Handler.loadYVComponents("#".concat(component.currentActionQueue[0].partials[i].id));
                    }
                    else if (component.currentActionQueue[0].partials[i].target) {
                        Handler.loadYVComponents("#".concat(component.currentActionQueue[0].partials[i].target));
                    }
                }
                
                break;
            case 'login':
                // append modals to prevent z-layer issues
                var yvmodals = document.querySelectorAll('.yvmodal');
                var body = document.getElementById("body");
                for (let i = 0; i < yvmodals.length; i++) {
                    body.appendChild(yvmodals[i]); 
                }

                var usd = document.getElementById("user-settings-dropdown");
                if (usd) {
                    //bootstrap.Dropdown.getOrCreateInstance(usd).dispose();
                    //bootstrap.Dropdown.getOrCreateInstance(usd);
                    Dropdown.getOrCreateInstance(usd).dispose();
                    Dropdown.getOrCreateInstance(usd);
                }
                break;
            case 'viz':
                /*
                var arr = document.getElementsByClassName("youVizOnUpdate"); // only refreshed viz/s
                for (var n = 0; n < arr.length; n++) {
                    eval(arr[n].innerHTML); // run script
                }*/
                //Handler.vizInit(document.querySelector('#' + component.id));
                //alert(component.parentNode);
                //alert(component.id);
                //alert(component.root.parentNode);
                Handler.vizInit(component.root.parentNode);
                
                $('#table').bootstrapTable(); // init via javascript

                // datatable modal
                // append modals to prevent z-layer issues
                var yvmodals = document.querySelectorAll('.yvmodal');
                var body = document.getElementById("body");
                for (let i = 0; i < yvmodals.length; i++) {
                    body.appendChild(yvmodals[i]); 
                }
                
                break;
            case 'datatable':
                //bootstrap table
                $('#table').bootstrapTable(); // init via javascript

                // datatable modal
                // append modals to prevent z-layer issues
                var yvmodals = document.querySelectorAll('.yvmodal');
                var body = document.getElementById("body");
                for (let i = 0; i < yvmodals.length; i++) {
                    body.appendChild(yvmodals[i]); 
                }
                break;
            case 'getmore':
                // datatable modal
                // append modals to prevent z-layer issues
                var yvmodals = document.querySelectorAll('.yvmodal');
                var body = document.getElementById("body");
                for (let i = 0; i < yvmodals.length; i++) {
                    body.appendChild(yvmodals[i]); 
                }
                break;
            case 'sourcecontrol':
                // datatable modal
                // append modals to prevent z-layer issues
                var yvmodals = document.querySelectorAll('.yvmodal');
                var body = document.getElementById("body");
                for (let i = 0; i < yvmodals.length; i++) {
                    body.appendChild(yvmodals[i]); 
                }
                dropzone__WEBPACK_IMPORTED_MODULE_2__.Dropzone.options.drop = { // camelized version of the `id`
                    paramName: "document", // The name that will be used to transfer the file
                    maxFilesize: 2, // MB
                };
                break;
            case 'vizreport':
                // datatable modal
                // append modals to prevent z-layer issues
                var yvmodals = document.querySelectorAll('.yvmodal');
                var body = document.getElementById("body");
                for (let i = 0; i < yvmodals.length; i++) {
                    body.appendChild(yvmodals[i]); 
                }
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                break;
            case 'filecontrol':
                $('#table').bootstrapTable(); // init via javascript
                // datatable modal
                // append modals to prevent z-layer issues
                var yvmodals = document.querySelectorAll('.yvmodal');
                var body = document.getElementById("body");
                for (let i = 0; i < yvmodals.length; i++) {
                    body.appendChild(yvmodals[i]); 
                }
                break;
            default:
                break;
        }

    });
});
 

/***/ }),

/***/ 5586:
/*!***************************************************************!*\
  !*** ./static/projects/src/fix/base64-arraybuffer.es5.js.map ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "base64-arraybuffer.es5.js.map";

/***/ }),

/***/ 2095:
/*!**************************************************!*\
  !*** ./static/projects/src/fix/dropzone.mjs.map ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "dropzone.mjs.map";

/***/ }),

/***/ 8282:
/*!*************************************************************!*\
  !*** ./static/projects/src/fix/mapbox-gl-unminified.js.map ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "mapbox-gl-unminified.js.map";

/***/ }),

/***/ 1265:
/*!********************************************************!*\
  !*** ./static/projects/src/fix/performance-now.js.map ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "performance-now.js.map";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(1233)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVU7QUFDVixrQ0FBa0MsSUFBSTtBQUN0QztBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFCQUFxQjtBQUNyRDtBQUNBO0FBQ0Esa0NBQWtDLHFEQUFxRDtBQUN2RjtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFCQUFxQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3RzLy4vc3RhdGljL3Byb2plY3RzL3NyYy9zY3NzL3Byb2plY3RzLnNjc3M/OGFhZCIsIndlYnBhY2s6Ly9wcm9qZWN0cy8uL3N0YXRpYy9wcm9qZWN0cy9zcmMvYm9vdHN0cmFwL2pzL3NyYy9hbGVydC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cy8uL3N0YXRpYy9wcm9qZWN0cy9zcmMvYm9vdHN0cmFwL2pzL3NyYy9iYXNlLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cy8uL3N0YXRpYy9wcm9qZWN0cy9zcmMvYm9vdHN0cmFwL2pzL3NyYy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zdGF0aWMvcHJvamVjdHMvc3JjL2Jvb3RzdHJhcC9qcy9zcmMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zdGF0aWMvcHJvamVjdHMvc3JjL2Jvb3RzdHJhcC9qcy9zcmMvY29sbGFwc2UuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zdGF0aWMvcHJvamVjdHMvc3JjL2Jvb3RzdHJhcC9qcy9zcmMvZG9tL2RhdGEuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zdGF0aWMvcHJvamVjdHMvc3JjL2Jvb3RzdHJhcC9qcy9zcmMvZG9tL2V2ZW50LWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zdGF0aWMvcHJvamVjdHMvc3JjL2Jvb3RzdHJhcC9qcy9zcmMvZG9tL21hbmlwdWxhdG9yLmpzIiwid2VicGFjazovL3Byb2plY3RzLy4vc3RhdGljL3Byb2plY3RzL3NyYy9ib290c3RyYXAvanMvc3JjL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zdGF0aWMvcHJvamVjdHMvc3JjL2Jvb3RzdHJhcC9qcy9zcmMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zdGF0aWMvcHJvamVjdHMvc3JjL2Jvb3RzdHJhcC9qcy9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zdGF0aWMvcHJvamVjdHMvc3JjL2Jvb3RzdHJhcC9qcy9zcmMvb2ZmY2FudmFzLmpzIiwid2VicGFjazovL3Byb2plY3RzLy4vc3RhdGljL3Byb2plY3RzL3NyYy9ib290c3RyYXAvanMvc3JjL3BvcG92ZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zdGF0aWMvcHJvamVjdHMvc3JjL2Jvb3RzdHJhcC9qcy9zcmMvc2Nyb2xsc3B5LmpzIiwid2VicGFjazovL3Byb2plY3RzLy4vc3RhdGljL3Byb2plY3RzL3NyYy9ib290c3RyYXAvanMvc3JjL3RhYi5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cy8uL3N0YXRpYy9wcm9qZWN0cy9zcmMvYm9vdHN0cmFwL2pzL3NyYy90b2FzdC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cy8uL3N0YXRpYy9wcm9qZWN0cy9zcmMvYm9vdHN0cmFwL2pzL3NyYy90b29sdGlwLmpzIiwid2VicGFjazovL3Byb2plY3RzLy4vc3RhdGljL3Byb2plY3RzL3NyYy9ib290c3RyYXAvanMvc3JjL3V0aWwvYmFja2Ryb3AuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zdGF0aWMvcHJvamVjdHMvc3JjL2Jvb3RzdHJhcC9qcy9zcmMvdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3Byb2plY3RzLy4vc3RhdGljL3Byb2plY3RzL3NyYy9ib290c3RyYXAvanMvc3JjL3V0aWwvY29uZmlnLmpzIiwid2VicGFjazovL3Byb2plY3RzLy4vc3RhdGljL3Byb2plY3RzL3NyYy9ib290c3RyYXAvanMvc3JjL3V0aWwvZm9jdXN0cmFwLmpzIiwid2VicGFjazovL3Byb2plY3RzLy4vc3RhdGljL3Byb2plY3RzL3NyYy9ib290c3RyYXAvanMvc3JjL3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zdGF0aWMvcHJvamVjdHMvc3JjL2Jvb3RzdHJhcC9qcy9zcmMvdXRpbC9zYW5pdGl6ZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zdGF0aWMvcHJvamVjdHMvc3JjL2Jvb3RzdHJhcC9qcy9zcmMvdXRpbC9zY3JvbGxiYXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zdGF0aWMvcHJvamVjdHMvc3JjL2Jvb3RzdHJhcC9qcy9zcmMvdXRpbC9zd2lwZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cy8uL3N0YXRpYy9wcm9qZWN0cy9zcmMvYm9vdHN0cmFwL2pzL3NyYy91dGlsL3RlbXBsYXRlLWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zdGF0aWMvcHJvamVjdHMvc3JjL2pzL2Jvb3RzdHJhcC10YWJsZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cy8uL3N0YXRpYy9wcm9qZWN0cy9zcmMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovL3Byb2plY3RzLy4vc3RhdGljL3Byb2plY3RzL3NyYy9qcy9qcXVlcnkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zdGF0aWMvcHJvamVjdHMvc3JjL2pzL3lvdXZpei5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjIuMyk6IGFsZXJ0LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgZGVmaW5lSlF1ZXJ5UGx1Z2luIH0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcbmltcG9ydCB7IGVuYWJsZURpc21pc3NUcmlnZ2VyIH0gZnJvbSAnLi91dGlsL2NvbXBvbmVudC1mdW5jdGlvbnMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdhbGVydCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmFsZXJ0J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcblxuY29uc3QgRVZFTlRfQ0xPU0UgPSBgY2xvc2Uke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTE9TRUQgPSBgY2xvc2VkJHtFVkVOVF9LRVl9YFxuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQWxlcnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBjbG9zZSgpIHtcbiAgICBjb25zdCBjbG9zZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xPU0UpXG5cbiAgICBpZiAoY2xvc2VFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgY29uc3QgaXNBbmltYXRlZCA9IHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSlcbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKCgpID0+IHRoaXMuX2Rlc3Ryb3lFbGVtZW50KCksIHRoaXMuX2VsZW1lbnQsIGlzQW5pbWF0ZWQpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9kZXN0cm95RWxlbWVudCgpIHtcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xPU0VEKVxuICAgIHRoaXMuZGlzcG9zZSgpXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBBbGVydC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKHRoaXMpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuZW5hYmxlRGlzbWlzc1RyaWdnZXIoQWxlcnQsICdjbG9zZScpXG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKEFsZXJ0KVxuXG5leHBvcnQgZGVmYXVsdCBBbGVydFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4yLjMpOiBiYXNlLWNvbXBvbmVudC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgeyBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uLCBnZXRFbGVtZW50IH0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IENvbmZpZyBmcm9tICcuL3V0aWwvY29uZmlnJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IFZFUlNJT04gPSAnNS4yLjMnXG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIEJhc2VDb21wb25lbnQgZXh0ZW5kcyBDb25maWcge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcigpXG5cbiAgICBlbGVtZW50ID0gZ2V0RWxlbWVudChlbGVtZW50KVxuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuXG4gICAgRGF0YS5zZXQodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSwgdGhpcylcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBkaXNwb3NlKCkge1xuICAgIERhdGEucmVtb3ZlKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVkpXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkVWRU5UX0tFWSlcblxuICAgIGZvciAoY29uc3QgcHJvcGVydHlOYW1lIG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpKSB7XG4gICAgICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBudWxsXG4gICAgfVxuICB9XG5cbiAgX3F1ZXVlQ2FsbGJhY2soY2FsbGJhY2ssIGVsZW1lbnQsIGlzQW5pbWF0ZWQgPSB0cnVlKSB7XG4gICAgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbihjYWxsYmFjaywgZWxlbWVudCwgaXNBbmltYXRlZClcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0gdGhpcy5fbWVyZ2VDb25maWdPYmooY29uZmlnLCB0aGlzLl9lbGVtZW50KVxuICAgIGNvbmZpZyA9IHRoaXMuX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKVxuICAgIHRoaXMuX3R5cGVDaGVja0NvbmZpZyhjb25maWcpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBnZXRJbnN0YW5jZShlbGVtZW50KSB7XG4gICAgcmV0dXJuIERhdGEuZ2V0KGdldEVsZW1lbnQoZWxlbWVudCksIHRoaXMuREFUQV9LRVkpXG4gIH1cblxuICBzdGF0aWMgZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50LCBjb25maWcgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmdldEluc3RhbmNlKGVsZW1lbnQpIHx8IG5ldyB0aGlzKGVsZW1lbnQsIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogbnVsbClcbiAgfVxuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICByZXR1cm4gYGJzLiR7dGhpcy5OQU1FfWBcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRVZFTlRfS0VZKCkge1xuICAgIHJldHVybiBgLiR7dGhpcy5EQVRBX0tFWX1gXG4gIH1cblxuICBzdGF0aWMgZXZlbnROYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gYCR7bmFtZX0ke3RoaXMuRVZFTlRfS0VZfWBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlQ29tcG9uZW50XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjIuMyk6IGJ1dHRvbi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7IGRlZmluZUpRdWVyeVBsdWdpbiB9IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdidXR0b24nXG5jb25zdCBEQVRBX0tFWSA9ICdicy5idXR0b24nXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiYnV0dG9uXCJdJ1xuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHRvZ2dsZSgpIHtcbiAgICAvLyBUb2dnbGUgY2xhc3MgYW5kIHN5bmMgdGhlIGBhcmlhLXByZXNzZWRgIGF0dHJpYnV0ZSB3aXRoIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGAudG9nZ2xlKClgIG1ldGhvZFxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoQ0xBU1NfTkFNRV9BQ1RJVkUpKVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gQnV0dG9uLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcylcblxuICAgICAgaWYgKGNvbmZpZyA9PT0gJ3RvZ2dsZScpIHtcbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZXZlbnQgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgY29uc3QgYnV0dG9uID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoU0VMRUNUT1JfREFUQV9UT0dHTEUpXG4gIGNvbnN0IGRhdGEgPSBCdXR0b24uZ2V0T3JDcmVhdGVJbnN0YW5jZShidXR0b24pXG5cbiAgZGF0YS50b2dnbGUoKVxufSlcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oQnV0dG9uKVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMi4zKTogY2Fyb3VzZWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsXG4gIGdldE5leHRBY3RpdmVFbGVtZW50LFxuICBpc1JUTCxcbiAgaXNWaXNpYmxlLFxuICByZWZsb3csXG4gIHRyaWdnZXJUcmFuc2l0aW9uRW5kXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgU3dpcGUgZnJvbSAnLi91dGlsL3N3aXBlJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ2Nhcm91c2VsJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuY2Fyb3VzZWwnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgQVJST1dfTEVGVF9LRVkgPSAnQXJyb3dMZWZ0J1xuY29uc3QgQVJST1dfUklHSFRfS0VZID0gJ0Fycm93UmlnaHQnXG5jb25zdCBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUID0gNTAwIC8vIFRpbWUgZm9yIG1vdXNlIGNvbXBhdCBldmVudHMgdG8gZmlyZSBhZnRlciB0b3VjaFxuXG5jb25zdCBPUkRFUl9ORVhUID0gJ25leHQnXG5jb25zdCBPUkRFUl9QUkVWID0gJ3ByZXYnXG5jb25zdCBESVJFQ1RJT05fTEVGVCA9ICdsZWZ0J1xuY29uc3QgRElSRUNUSU9OX1JJR0hUID0gJ3JpZ2h0J1xuXG5jb25zdCBFVkVOVF9TTElERSA9IGBzbGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NMSUQgPSBgc2xpZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV04gPSBga2V5ZG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFRU5URVIgPSBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFTEVBVkUgPSBgbW91c2VsZWF2ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0RSQUdfU1RBUlQgPSBgZHJhZ3N0YXJ0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfQ0FST1VTRUwgPSAnY2Fyb3VzZWwnXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnXG5jb25zdCBDTEFTU19OQU1FX1NMSURFID0gJ3NsaWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9FTkQgPSAnY2Fyb3VzZWwtaXRlbS1lbmQnXG5jb25zdCBDTEFTU19OQU1FX1NUQVJUID0gJ2Nhcm91c2VsLWl0ZW0tc3RhcnQnXG5jb25zdCBDTEFTU19OQU1FX05FWFQgPSAnY2Fyb3VzZWwtaXRlbS1uZXh0J1xuY29uc3QgQ0xBU1NfTkFNRV9QUkVWID0gJ2Nhcm91c2VsLWl0ZW0tcHJldidcblxuY29uc3QgU0VMRUNUT1JfQUNUSVZFID0gJy5hY3RpdmUnXG5jb25zdCBTRUxFQ1RPUl9JVEVNID0gJy5jYXJvdXNlbC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfQUNUSVZFX0lURU0gPSBTRUxFQ1RPUl9BQ1RJVkUgKyBTRUxFQ1RPUl9JVEVNXG5jb25zdCBTRUxFQ1RPUl9JVEVNX0lNRyA9ICcuY2Fyb3VzZWwtaXRlbSBpbWcnXG5jb25zdCBTRUxFQ1RPUl9JTkRJQ0FUT1JTID0gJy5jYXJvdXNlbC1pbmRpY2F0b3JzJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9TTElERSA9ICdbZGF0YS1icy1zbGlkZV0sIFtkYXRhLWJzLXNsaWRlLXRvXSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfUklERSA9ICdbZGF0YS1icy1yaWRlPVwiY2Fyb3VzZWxcIl0nXG5cbmNvbnN0IEtFWV9UT19ESVJFQ1RJT04gPSB7XG4gIFtBUlJPV19MRUZUX0tFWV06IERJUkVDVElPTl9SSUdIVCxcbiAgW0FSUk9XX1JJR0hUX0tFWV06IERJUkVDVElPTl9MRUZUXG59XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGludGVydmFsOiA1MDAwLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgcGF1c2U6ICdob3ZlcicsXG4gIHJpZGU6IGZhbHNlLFxuICB0b3VjaDogdHJ1ZSxcbiAgd3JhcDogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgaW50ZXJ2YWw6ICcobnVtYmVyfGJvb2xlYW4pJywgLy8gVE9ETzp2NiByZW1vdmUgYm9vbGVhbiBzdXBwb3J0XG4gIGtleWJvYXJkOiAnYm9vbGVhbicsXG4gIHBhdXNlOiAnKHN0cmluZ3xib29sZWFuKScsXG4gIHJpZGU6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgdG91Y2g6ICdib29sZWFuJyxcbiAgd3JhcDogJ2Jvb2xlYW4nXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIENhcm91c2VsIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBudWxsXG4gICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcbiAgICB0aGlzLnRvdWNoVGltZW91dCA9IG51bGxcbiAgICB0aGlzLl9zd2lwZUhlbHBlciA9IG51bGxcblxuICAgIHRoaXMuX2luZGljYXRvcnNFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9JTkRJQ0FUT1JTLCB0aGlzLl9lbGVtZW50KVxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcblxuICAgIGlmICh0aGlzLl9jb25maWcucmlkZSA9PT0gQ0xBU1NfTkFNRV9DQVJPVVNFTCkge1xuICAgICAgdGhpcy5jeWNsZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBuZXh0KCkge1xuICAgIHRoaXMuX3NsaWRlKE9SREVSX05FWFQpXG4gIH1cblxuICBuZXh0V2hlblZpc2libGUoKSB7XG4gICAgLy8gRklYTUUgVE9ETyB1c2UgYGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZWBcbiAgICAvLyBEb24ndCBjYWxsIG5leHQgd2hlbiB0aGUgcGFnZSBpc24ndCB2aXNpYmxlXG4gICAgLy8gb3IgdGhlIGNhcm91c2VsIG9yIGl0cyBwYXJlbnQgaXNuJ3QgdmlzaWJsZVxuICAgIGlmICghZG9jdW1lbnQuaGlkZGVuICYmIGlzVmlzaWJsZSh0aGlzLl9lbGVtZW50KSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gIH1cblxuICBwcmV2KCkge1xuICAgIHRoaXMuX3NsaWRlKE9SREVSX1BSRVYpXG4gIH1cblxuICBwYXVzZSgpIHtcbiAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuX2NsZWFySW50ZXJ2YWwoKVxuICB9XG5cbiAgY3ljbGUoKSB7XG4gICAgdGhpcy5fY2xlYXJJbnRlcnZhbCgpXG4gICAgdGhpcy5fdXBkYXRlSW50ZXJ2YWwoKVxuXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLm5leHRXaGVuVmlzaWJsZSgpLCB0aGlzLl9jb25maWcuaW50ZXJ2YWwpXG4gIH1cblxuICBfbWF5YmVFbmFibGVDeWNsZSgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5yaWRlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSUQsICgpID0+IHRoaXMuY3ljbGUoKSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY3ljbGUoKVxuICB9XG5cbiAgdG8oaW5kZXgpIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuX2dldEl0ZW1zKClcbiAgICBpZiAoaW5kZXggPiBpdGVtcy5sZW5ndGggLSAxIHx8IGluZGV4IDwgMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBFVkVOVF9TTElELCAoKSA9PiB0aGlzLnRvKGluZGV4KSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHRoaXMuX2dldEFjdGl2ZSgpKVxuICAgIGlmIChhY3RpdmVJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG9yZGVyID0gaW5kZXggPiBhY3RpdmVJbmRleCA/IE9SREVSX05FWFQgOiBPUkRFUl9QUkVWXG5cbiAgICB0aGlzLl9zbGlkZShvcmRlciwgaXRlbXNbaW5kZXhdKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBpZiAodGhpcy5fc3dpcGVIZWxwZXIpIHtcbiAgICAgIHRoaXMuX3N3aXBlSGVscGVyLmRpc3Bvc2UoKVxuICAgIH1cblxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICBjb25maWcuZGVmYXVsdEludGVydmFsID0gY29uZmlnLmludGVydmFsXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOLCBldmVudCA9PiB0aGlzLl9rZXlkb3duKGV2ZW50KSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlID09PSAnaG92ZXInKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VFTlRFUiwgKCkgPT4gdGhpcy5wYXVzZSgpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFTEVBVkUsICgpID0+IHRoaXMuX21heWJlRW5hYmxlQ3ljbGUoKSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnRvdWNoICYmIFN3aXBlLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgIHRoaXMuX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cbiAgfVxuXG4gIF9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGZvciAoY29uc3QgaW1nIG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSVRFTV9JTUcsIHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24oaW1nLCBFVkVOVF9EUkFHX1NUQVJULCBldmVudCA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKVxuICAgIH1cblxuICAgIGNvbnN0IGVuZENhbGxCYWNrID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSAhPT0gJ2hvdmVyJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gSWYgaXQncyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlLCBtb3VzZWVudGVyL2xlYXZlIGFyZSBmaXJlZCBhc1xuICAgICAgLy8gcGFydCBvZiB0aGUgbW91c2UgY29tcGF0aWJpbGl0eSBldmVudHMgb24gZmlyc3QgdGFwIC0gdGhlIGNhcm91c2VsXG4gICAgICAvLyB3b3VsZCBzdG9wIGN5Y2xpbmcgdW50aWwgdXNlciB0YXBwZWQgb3V0IG9mIGl0O1xuICAgICAgLy8gaGVyZSwgd2UgbGlzdGVuIGZvciB0b3VjaGVuZCwgZXhwbGljaXRseSBwYXVzZSB0aGUgY2Fyb3VzZWxcbiAgICAgIC8vIChhcyBpZiBpdCdzIHRoZSBzZWNvbmQgdGltZSB3ZSB0YXAgb24gaXQsIG1vdXNlZW50ZXIgY29tcGF0IGV2ZW50XG4gICAgICAvLyBpcyBOT1QgZmlyZWQpIGFuZCBhZnRlciBhIHRpbWVvdXQgKHRvIGFsbG93IGZvciBtb3VzZSBjb21wYXRpYmlsaXR5XG4gICAgICAvLyBldmVudHMgdG8gZmlyZSkgd2UgZXhwbGljaXRseSByZXN0YXJ0IGN5Y2xpbmdcblxuICAgICAgdGhpcy5wYXVzZSgpXG4gICAgICBpZiAodGhpcy50b3VjaFRpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudG91Y2hUaW1lb3V0KVxuICAgICAgfVxuXG4gICAgICB0aGlzLnRvdWNoVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fbWF5YmVFbmFibGVDeWNsZSgpLCBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUICsgdGhpcy5fY29uZmlnLmludGVydmFsKVxuICAgIH1cblxuICAgIGNvbnN0IHN3aXBlQ29uZmlnID0ge1xuICAgICAgbGVmdENhbGxiYWNrOiAoKSA9PiB0aGlzLl9zbGlkZSh0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKERJUkVDVElPTl9MRUZUKSksXG4gICAgICByaWdodENhbGxiYWNrOiAoKSA9PiB0aGlzLl9zbGlkZSh0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKERJUkVDVElPTl9SSUdIVCkpLFxuICAgICAgZW5kQ2FsbGJhY2s6IGVuZENhbGxCYWNrXG4gICAgfVxuXG4gICAgdGhpcy5fc3dpcGVIZWxwZXIgPSBuZXcgU3dpcGUodGhpcy5fZWxlbWVudCwgc3dpcGVDb25maWcpXG4gIH1cblxuICBfa2V5ZG93bihldmVudCkge1xuICAgIGlmICgvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGlyZWN0aW9uID0gS0VZX1RPX0RJUkVDVElPTltldmVudC5rZXldXG4gICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5fc2xpZGUodGhpcy5fZGlyZWN0aW9uVG9PcmRlcihkaXJlY3Rpb24pKVxuICAgIH1cbiAgfVxuXG4gIF9nZXRJdGVtSW5kZXgoZWxlbWVudCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRJdGVtcygpLmluZGV4T2YoZWxlbWVudClcbiAgfVxuXG4gIF9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KGluZGV4KSB7XG4gICAgaWYgKCF0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlSW5kaWNhdG9yID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkUsIHRoaXMuX2luZGljYXRvcnNFbGVtZW50KVxuXG4gICAgYWN0aXZlSW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgYWN0aXZlSW5kaWNhdG9yLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JylcblxuICAgIGNvbnN0IG5ld0FjdGl2ZUluZGljYXRvciA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoYFtkYXRhLWJzLXNsaWRlLXRvPVwiJHtpbmRleH1cIl1gLCB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudClcblxuICAgIGlmIChuZXdBY3RpdmVJbmRpY2F0b3IpIHtcbiAgICAgIG5ld0FjdGl2ZUluZGljYXRvci5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgbmV3QWN0aXZlSW5kaWNhdG9yLnNldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JywgJ3RydWUnKVxuICAgIH1cbiAgfVxuXG4gIF91cGRhdGVJbnRlcnZhbCgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fYWN0aXZlRWxlbWVudCB8fCB0aGlzLl9nZXRBY3RpdmUoKVxuXG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50SW50ZXJ2YWwgPSBOdW1iZXIucGFyc2VJbnQoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtaW50ZXJ2YWwnKSwgMTApXG5cbiAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWwgPSBlbGVtZW50SW50ZXJ2YWwgfHwgdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbFxuICB9XG5cbiAgX3NsaWRlKG9yZGVyLCBlbGVtZW50ID0gbnVsbCkge1xuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSB0aGlzLl9nZXRBY3RpdmUoKVxuICAgIGNvbnN0IGlzTmV4dCA9IG9yZGVyID09PSBPUkRFUl9ORVhUXG4gICAgY29uc3QgbmV4dEVsZW1lbnQgPSBlbGVtZW50IHx8IGdldE5leHRBY3RpdmVFbGVtZW50KHRoaXMuX2dldEl0ZW1zKCksIGFjdGl2ZUVsZW1lbnQsIGlzTmV4dCwgdGhpcy5fY29uZmlnLndyYXApXG5cbiAgICBpZiAobmV4dEVsZW1lbnQgPT09IGFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG5leHRFbGVtZW50SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgobmV4dEVsZW1lbnQpXG5cbiAgICBjb25zdCB0cmlnZ2VyRXZlbnQgPSBldmVudE5hbWUgPT4ge1xuICAgICAgcmV0dXJuIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIGV2ZW50TmFtZSwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBuZXh0RWxlbWVudCxcbiAgICAgICAgZGlyZWN0aW9uOiB0aGlzLl9vcmRlclRvRGlyZWN0aW9uKG9yZGVyKSxcbiAgICAgICAgZnJvbTogdGhpcy5fZ2V0SXRlbUluZGV4KGFjdGl2ZUVsZW1lbnQpLFxuICAgICAgICB0bzogbmV4dEVsZW1lbnRJbmRleFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBzbGlkZUV2ZW50ID0gdHJpZ2dlckV2ZW50KEVWRU5UX1NMSURFKVxuXG4gICAgaWYgKHNsaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFhY3RpdmVFbGVtZW50IHx8ICFuZXh0RWxlbWVudCkge1xuICAgICAgLy8gU29tZSB3ZWlyZG5lc3MgaXMgaGFwcGVuaW5nLCBzbyB3ZSBiYWlsXG4gICAgICAvLyB0b2RvOiBjaGFuZ2UgdGVzdHMgdGhhdCB1c2UgZW1wdHkgZGl2cyB0byBhdm9pZCB0aGlzIGNoZWNrXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpc0N5Y2xpbmcgPSBCb29sZWFuKHRoaXMuX2ludGVydmFsKVxuICAgIHRoaXMucGF1c2UoKVxuXG4gICAgdGhpcy5faXNTbGlkaW5nID0gdHJ1ZVxuXG4gICAgdGhpcy5fc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudChuZXh0RWxlbWVudEluZGV4KVxuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBuZXh0RWxlbWVudFxuXG4gICAgY29uc3QgZGlyZWN0aW9uYWxDbGFzc05hbWUgPSBpc05leHQgPyBDTEFTU19OQU1FX1NUQVJUIDogQ0xBU1NfTkFNRV9FTkRcbiAgICBjb25zdCBvcmRlckNsYXNzTmFtZSA9IGlzTmV4dCA/IENMQVNTX05BTUVfTkVYVCA6IENMQVNTX05BTUVfUFJFVlxuXG4gICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChvcmRlckNsYXNzTmFtZSlcblxuICAgIHJlZmxvdyhuZXh0RWxlbWVudClcblxuICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChkaXJlY3Rpb25hbENsYXNzTmFtZSlcbiAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuXG4gICAgY29uc3QgY29tcGxldGVDYWxsQmFjayA9ICgpID0+IHtcbiAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoZGlyZWN0aW9uYWxDbGFzc05hbWUsIG9yZGVyQ2xhc3NOYW1lKVxuICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcblxuICAgICAgYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFLCBvcmRlckNsYXNzTmFtZSwgZGlyZWN0aW9uYWxDbGFzc05hbWUpXG5cbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG5cbiAgICAgIHRyaWdnZXJFdmVudChFVkVOVF9TTElEKVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGVDYWxsQmFjaywgYWN0aXZlRWxlbWVudCwgdGhpcy5faXNBbmltYXRlZCgpKVxuXG4gICAgaWYgKGlzQ3ljbGluZykge1xuICAgICAgdGhpcy5jeWNsZSgpXG4gICAgfVxuICB9XG5cbiAgX2lzQW5pbWF0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0xJREUpXG4gIH1cblxuICBfZ2V0QWN0aXZlKCkge1xuICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRV9JVEVNLCB0aGlzLl9lbGVtZW50KVxuICB9XG5cbiAgX2dldEl0ZW1zKCkge1xuICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lURU0sIHRoaXMuX2VsZW1lbnQpXG4gIH1cblxuICBfY2xlYXJJbnRlcnZhbCgpIHtcbiAgICBpZiAodGhpcy5faW50ZXJ2YWwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpXG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgICB9XG4gIH1cblxuICBfZGlyZWN0aW9uVG9PcmRlcihkaXJlY3Rpb24pIHtcbiAgICBpZiAoaXNSVEwoKSkge1xuICAgICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX0xFRlQgPyBPUkRFUl9QUkVWIDogT1JERVJfTkVYVFxuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3Rpb24gPT09IERJUkVDVElPTl9MRUZUID8gT1JERVJfTkVYVCA6IE9SREVSX1BSRVZcbiAgfVxuXG4gIF9vcmRlclRvRGlyZWN0aW9uKG9yZGVyKSB7XG4gICAgaWYgKGlzUlRMKCkpIHtcbiAgICAgIHJldHVybiBvcmRlciA9PT0gT1JERVJfUFJFViA/IERJUkVDVElPTl9MRUZUIDogRElSRUNUSU9OX1JJR0hUXG4gICAgfVxuXG4gICAgcmV0dXJuIG9yZGVyID09PSBPUkRFUl9QUkVWID8gRElSRUNUSU9OX1JJR0hUIDogRElSRUNUSU9OX0xFRlRcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IENhcm91c2VsLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgZGF0YS50byhjb25maWcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1NMSURFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKVxuXG4gIGlmICghdGFyZ2V0IHx8ICF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQ0FST1VTRUwpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgY29uc3QgY2Fyb3VzZWwgPSBDYXJvdXNlbC5nZXRPckNyZWF0ZUluc3RhbmNlKHRhcmdldClcbiAgY29uc3Qgc2xpZGVJbmRleCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLXNsaWRlLXRvJylcblxuICBpZiAoc2xpZGVJbmRleCkge1xuICAgIGNhcm91c2VsLnRvKHNsaWRlSW5kZXgpXG4gICAgY2Fyb3VzZWwuX21heWJlRW5hYmxlQ3ljbGUoKVxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGUodGhpcywgJ3NsaWRlJykgPT09ICduZXh0Jykge1xuICAgIGNhcm91c2VsLm5leHQoKVxuICAgIGNhcm91c2VsLl9tYXliZUVuYWJsZUN5Y2xlKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNhcm91c2VsLnByZXYoKVxuICBjYXJvdXNlbC5fbWF5YmVFbmFibGVDeWNsZSgpXG59KVxuXG5FdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIGNvbnN0IGNhcm91c2VscyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9SSURFKVxuXG4gIGZvciAoY29uc3QgY2Fyb3VzZWwgb2YgY2Fyb3VzZWxzKSB7XG4gICAgQ2Fyb3VzZWwuZ2V0T3JDcmVhdGVJbnN0YW5jZShjYXJvdXNlbClcbiAgfVxufSlcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oQ2Fyb3VzZWwpXG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjIuMyk6IGNvbGxhcHNlLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXRFbGVtZW50LFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxuICBnZXRTZWxlY3RvckZyb21FbGVtZW50LFxuICByZWZsb3dcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdjb2xsYXBzZSdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmNvbGxhcHNlJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0UgPSAnY29sbGFwc2UnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNJTkcgPSAnY29sbGFwc2luZydcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0VEID0gJ2NvbGxhcHNlZCdcbmNvbnN0IENMQVNTX05BTUVfREVFUEVSX0NISUxEUkVOID0gYDpzY29wZSAuJHtDTEFTU19OQU1FX0NPTExBUFNFfSAuJHtDTEFTU19OQU1FX0NPTExBUFNFfWBcbmNvbnN0IENMQVNTX05BTUVfSE9SSVpPTlRBTCA9ICdjb2xsYXBzZS1ob3Jpem9udGFsJ1xuXG5jb25zdCBXSURUSCA9ICd3aWR0aCdcbmNvbnN0IEhFSUdIVCA9ICdoZWlnaHQnXG5cbmNvbnN0IFNFTEVDVE9SX0FDVElWRVMgPSAnLmNvbGxhcHNlLnNob3csIC5jb2xsYXBzZS5jb2xsYXBzaW5nJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIl0nXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIHBhcmVudDogbnVsbCxcbiAgdG9nZ2xlOiB0cnVlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBwYXJlbnQ6ICcobnVsbHxlbGVtZW50KScsXG4gIHRvZ2dsZTogJ2Jvb2xlYW4nXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIENvbGxhcHNlIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgdGhpcy5fdHJpZ2dlckFycmF5ID0gW11cblxuICAgIGNvbnN0IHRvZ2dsZUxpc3QgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFKVxuXG4gICAgZm9yIChjb25zdCBlbGVtIG9mIHRvZ2dsZUxpc3QpIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtKVxuICAgICAgY29uc3QgZmlsdGVyRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpXG4gICAgICAgIC5maWx0ZXIoZm91bmRFbGVtZW50ID0+IGZvdW5kRWxlbWVudCA9PT0gdGhpcy5fZWxlbWVudClcblxuICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsICYmIGZpbHRlckVsZW1lbnQubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJBcnJheS5wdXNoKGVsZW0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faW5pdGlhbGl6ZUNoaWxkcmVuKClcblxuICAgIGlmICghdGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwgdGhpcy5faXNTaG93bigpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG9nZ2xlKSB7XG4gICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgdGhpcy5oaWRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KClcbiAgICB9XG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgYWN0aXZlQ2hpbGRyZW4gPSBbXVxuXG4gICAgLy8gZmluZCBhY3RpdmUgY2hpbGRyZW5cbiAgICBpZiAodGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgYWN0aXZlQ2hpbGRyZW4gPSB0aGlzLl9nZXRGaXJzdExldmVsQ2hpbGRyZW4oU0VMRUNUT1JfQUNUSVZFUylcbiAgICAgICAgLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQgIT09IHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5tYXAoZWxlbWVudCA9PiBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIHsgdG9nZ2xlOiBmYWxzZSB9KSlcbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlQ2hpbGRyZW4ubGVuZ3RoICYmIGFjdGl2ZUNoaWxkcmVuWzBdLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XKVxuICAgIGlmIChzdGFydEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoY29uc3QgYWN0aXZlSW5zdGFuY2Ugb2YgYWN0aXZlQ2hpbGRyZW4pIHtcbiAgICAgIGFjdGl2ZUluc3RhbmNlLmhpZGUoKVxuICAgIH1cblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRSlcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gMFxuXG4gICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwgdHJ1ZSlcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRSwgQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTilcbiAgICB9XG5cbiAgICBjb25zdCBjYXBpdGFsaXplZERpbWVuc2lvbiA9IGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpXG4gICAgY29uc3Qgc2Nyb2xsU2l6ZSA9IGBzY3JvbGwke2NhcGl0YWxpemVkRGltZW5zaW9ufWBcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudFtzY3JvbGxTaXplXX1weGBcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCAhdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcbiAgICBpZiAoc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtkaW1lbnNpb25dfXB4YFxuXG4gICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFLCBDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBmb3IgKGNvbnN0IHRyaWdnZXIgb2YgdGhpcy5fdHJpZ2dlckFycmF5KSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0cmlnZ2VyKVxuXG4gICAgICBpZiAoZWxlbWVudCAmJiAhdGhpcy5faXNTaG93bihlbGVtZW50KSkge1xuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoW3RyaWdnZXJdLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0UpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gIH1cblxuICBfaXNTaG93bihlbGVtZW50ID0gdGhpcy5fZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgIGNvbmZpZy50b2dnbGUgPSBCb29sZWFuKGNvbmZpZy50b2dnbGUpIC8vIENvZXJjZSBzdHJpbmcgdmFsdWVzXG4gICAgY29uZmlnLnBhcmVudCA9IGdldEVsZW1lbnQoY29uZmlnLnBhcmVudClcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGltZW5zaW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0hPUklaT05UQUwpID8gV0lEVEggOiBIRUlHSFRcbiAgfVxuXG4gIF9pbml0aWFsaXplQ2hpbGRyZW4oKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuX2dldEZpcnN0TGV2ZWxDaGlsZHJlbihTRUxFQ1RPUl9EQVRBX1RPR0dMRSlcblxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBjaGlsZHJlbikge1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoW2VsZW1lbnRdLCB0aGlzLl9pc1Nob3duKHNlbGVjdGVkKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfZ2V0Rmlyc3RMZXZlbENoaWxkcmVuKHNlbGVjdG9yKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBTZWxlY3RvckVuZ2luZS5maW5kKENMQVNTX05BTUVfREVFUEVSX0NISUxEUkVOLCB0aGlzLl9jb25maWcucGFyZW50KVxuICAgIC8vIHJlbW92ZSBjaGlsZHJlbiBpZiBncmVhdGVyIGRlcHRoXG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IsIHRoaXMuX2NvbmZpZy5wYXJlbnQpLmZpbHRlcihlbGVtZW50ID0+ICFjaGlsZHJlbi5pbmNsdWRlcyhlbGVtZW50KSlcbiAgfVxuXG4gIF9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModHJpZ2dlckFycmF5LCBpc09wZW4pIHtcbiAgICBpZiAoIXRyaWdnZXJBcnJheS5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiB0cmlnZ2VyQXJyYXkpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX0NPTExBUFNFRCwgIWlzT3BlbilcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIGNvbnN0IF9jb25maWcgPSB7fVxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiAvc2hvd3xoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgIF9jb25maWcudG9nZ2xlID0gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIF9jb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy8gcHJldmVudERlZmF1bHQgb25seSBmb3IgPGE+IGVsZW1lbnRzICh3aGljaCBjaGFuZ2UgdGhlIFVSTCkgbm90IGluc2lkZSB0aGUgY29sbGFwc2libGUgZWxlbWVudFxuICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdBJyB8fCAoZXZlbnQuZGVsZWdhdGVUYXJnZXQgJiYgZXZlbnQuZGVsZWdhdGVUYXJnZXQudGFnTmFtZSA9PT0gJ0EnKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKVxuICBjb25zdCBzZWxlY3RvckVsZW1lbnRzID0gU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcilcblxuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2Ygc2VsZWN0b3JFbGVtZW50cykge1xuICAgIENvbGxhcHNlLmdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCwgeyB0b2dnbGU6IGZhbHNlIH0pLnRvZ2dsZSgpXG4gIH1cbn0pXG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKENvbGxhcHNlKVxuXG5leHBvcnQgZGVmYXVsdCBDb2xsYXBzZVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4yLjMpOiBkb20vZGF0YS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgZWxlbWVudE1hcCA9IG5ldyBNYXAoKVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNldChlbGVtZW50LCBrZXksIGluc3RhbmNlKSB7XG4gICAgaWYgKCFlbGVtZW50TWFwLmhhcyhlbGVtZW50KSkge1xuICAgICAgZWxlbWVudE1hcC5zZXQoZWxlbWVudCwgbmV3IE1hcCgpKVxuICAgIH1cblxuICAgIGNvbnN0IGluc3RhbmNlTWFwID0gZWxlbWVudE1hcC5nZXQoZWxlbWVudClcblxuICAgIC8vIG1ha2UgaXQgY2xlYXIgd2Ugb25seSB3YW50IG9uZSBpbnN0YW5jZSBwZXIgZWxlbWVudFxuICAgIC8vIGNhbiBiZSByZW1vdmVkIGxhdGVyIHdoZW4gbXVsdGlwbGUga2V5L2luc3RhbmNlcyBhcmUgZmluZSB0byBiZSB1c2VkXG4gICAgaWYgKCFpbnN0YW5jZU1hcC5oYXMoa2V5KSAmJiBpbnN0YW5jZU1hcC5zaXplICE9PSAwKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcihgQm9vdHN0cmFwIGRvZXNuJ3QgYWxsb3cgbW9yZSB0aGFuIG9uZSBpbnN0YW5jZSBwZXIgZWxlbWVudC4gQm91bmQgaW5zdGFuY2U6ICR7QXJyYXkuZnJvbShpbnN0YW5jZU1hcC5rZXlzKCkpWzBdfS5gKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaW5zdGFuY2VNYXAuc2V0KGtleSwgaW5zdGFuY2UpXG4gIH0sXG5cbiAgZ2V0KGVsZW1lbnQsIGtleSkge1xuICAgIGlmIChlbGVtZW50TWFwLmhhcyhlbGVtZW50KSkge1xuICAgICAgcmV0dXJuIGVsZW1lbnRNYXAuZ2V0KGVsZW1lbnQpLmdldChrZXkpIHx8IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxuICB9LFxuXG4gIHJlbW92ZShlbGVtZW50LCBrZXkpIHtcbiAgICBpZiAoIWVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpbnN0YW5jZU1hcCA9IGVsZW1lbnRNYXAuZ2V0KGVsZW1lbnQpXG5cbiAgICBpbnN0YW5jZU1hcC5kZWxldGUoa2V5KVxuXG4gICAgLy8gZnJlZSB1cCBlbGVtZW50IHJlZmVyZW5jZXMgaWYgdGhlcmUgYXJlIG5vIGluc3RhbmNlcyBsZWZ0IGZvciBhbiBlbGVtZW50XG4gICAgaWYgKGluc3RhbmNlTWFwLnNpemUgPT09IDApIHtcbiAgICAgIGVsZW1lbnRNYXAuZGVsZXRlKGVsZW1lbnQpXG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjIuMyk6IGRvbS9ldmVudC1oYW5kbGVyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgZ2V0alF1ZXJ5IH0gZnJvbSAnLi4vdXRpbC9pbmRleCdcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBuYW1lc3BhY2VSZWdleCA9IC9bXi5dKig/PVxcLi4qKVxcLnwuKi9cbmNvbnN0IHN0cmlwTmFtZVJlZ2V4ID0gL1xcLi4qL1xuY29uc3Qgc3RyaXBVaWRSZWdleCA9IC86OlxcZCskL1xuY29uc3QgZXZlbnRSZWdpc3RyeSA9IHt9IC8vIEV2ZW50cyBzdG9yYWdlXG5sZXQgdWlkRXZlbnQgPSAxXG5jb25zdCBjdXN0b21FdmVudHMgPSB7XG4gIG1vdXNlZW50ZXI6ICdtb3VzZW92ZXInLFxuICBtb3VzZWxlYXZlOiAnbW91c2VvdXQnXG59XG5cbmNvbnN0IG5hdGl2ZUV2ZW50cyA9IG5ldyBTZXQoW1xuICAnY2xpY2snLFxuICAnZGJsY2xpY2snLFxuICAnbW91c2V1cCcsXG4gICdtb3VzZWRvd24nLFxuICAnY29udGV4dG1lbnUnLFxuICAnbW91c2V3aGVlbCcsXG4gICdET01Nb3VzZVNjcm9sbCcsXG4gICdtb3VzZW92ZXInLFxuICAnbW91c2VvdXQnLFxuICAnbW91c2Vtb3ZlJyxcbiAgJ3NlbGVjdHN0YXJ0JyxcbiAgJ3NlbGVjdGVuZCcsXG4gICdrZXlkb3duJyxcbiAgJ2tleXByZXNzJyxcbiAgJ2tleXVwJyxcbiAgJ29yaWVudGF0aW9uY2hhbmdlJyxcbiAgJ3RvdWNoc3RhcnQnLFxuICAndG91Y2htb3ZlJyxcbiAgJ3RvdWNoZW5kJyxcbiAgJ3RvdWNoY2FuY2VsJyxcbiAgJ3BvaW50ZXJkb3duJyxcbiAgJ3BvaW50ZXJtb3ZlJyxcbiAgJ3BvaW50ZXJ1cCcsXG4gICdwb2ludGVybGVhdmUnLFxuICAncG9pbnRlcmNhbmNlbCcsXG4gICdnZXN0dXJlc3RhcnQnLFxuICAnZ2VzdHVyZWNoYW5nZScsXG4gICdnZXN0dXJlZW5kJyxcbiAgJ2ZvY3VzJyxcbiAgJ2JsdXInLFxuICAnY2hhbmdlJyxcbiAgJ3Jlc2V0JyxcbiAgJ3NlbGVjdCcsXG4gICdzdWJtaXQnLFxuICAnZm9jdXNpbicsXG4gICdmb2N1c291dCcsXG4gICdsb2FkJyxcbiAgJ3VubG9hZCcsXG4gICdiZWZvcmV1bmxvYWQnLFxuICAncmVzaXplJyxcbiAgJ21vdmUnLFxuICAnRE9NQ29udGVudExvYWRlZCcsXG4gICdyZWFkeXN0YXRlY2hhbmdlJyxcbiAgJ2Vycm9yJyxcbiAgJ2Fib3J0JyxcbiAgJ3Njcm9sbCdcbl0pXG5cbi8qKlxuICogUHJpdmF0ZSBtZXRob2RzXG4gKi9cblxuZnVuY3Rpb24gbWFrZUV2ZW50VWlkKGVsZW1lbnQsIHVpZCkge1xuICByZXR1cm4gKHVpZCAmJiBgJHt1aWR9Ojoke3VpZEV2ZW50Kyt9YCkgfHwgZWxlbWVudC51aWRFdmVudCB8fCB1aWRFdmVudCsrXG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRFdmVudHMoZWxlbWVudCkge1xuICBjb25zdCB1aWQgPSBtYWtlRXZlbnRVaWQoZWxlbWVudClcblxuICBlbGVtZW50LnVpZEV2ZW50ID0gdWlkXG4gIGV2ZW50UmVnaXN0cnlbdWlkXSA9IGV2ZW50UmVnaXN0cnlbdWlkXSB8fCB7fVxuXG4gIHJldHVybiBldmVudFJlZ2lzdHJ5W3VpZF1cbn1cblxuZnVuY3Rpb24gYm9vdHN0cmFwSGFuZGxlcihlbGVtZW50LCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuICAgIGh5ZHJhdGVPYmooZXZlbnQsIHsgZGVsZWdhdGVUYXJnZXQ6IGVsZW1lbnQgfSlcblxuICAgIGlmIChoYW5kbGVyLm9uZU9mZikge1xuICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCBldmVudC50eXBlLCBmbilcbiAgICB9XG5cbiAgICByZXR1cm4gZm4uYXBwbHkoZWxlbWVudCwgW2V2ZW50XSlcbiAgfVxufVxuXG5mdW5jdGlvbiBib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlcihlbGVtZW50LCBzZWxlY3RvciwgZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcblxuICAgIGZvciAobGV0IHsgdGFyZ2V0IH0gPSBldmVudDsgdGFyZ2V0ICYmIHRhcmdldCAhPT0gdGhpczsgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGUpIHtcbiAgICAgIGZvciAoY29uc3QgZG9tRWxlbWVudCBvZiBkb21FbGVtZW50cykge1xuICAgICAgICBpZiAoZG9tRWxlbWVudCAhPT0gdGFyZ2V0KSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGh5ZHJhdGVPYmooZXZlbnQsIHsgZGVsZWdhdGVUYXJnZXQ6IHRhcmdldCB9KVxuXG4gICAgICAgIGlmIChoYW5kbGVyLm9uZU9mZikge1xuICAgICAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgZXZlbnQudHlwZSwgc2VsZWN0b3IsIGZuKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRhcmdldCwgW2V2ZW50XSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZEhhbmRsZXIoZXZlbnRzLCBjYWxsYWJsZSwgZGVsZWdhdGlvblNlbGVjdG9yID0gbnVsbCkge1xuICByZXR1cm4gT2JqZWN0LnZhbHVlcyhldmVudHMpXG4gICAgLmZpbmQoZXZlbnQgPT4gZXZlbnQuY2FsbGFibGUgPT09IGNhbGxhYmxlICYmIGV2ZW50LmRlbGVnYXRpb25TZWxlY3RvciA9PT0gZGVsZWdhdGlvblNlbGVjdG9yKVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVQYXJhbWV0ZXJzKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgY29uc3QgaXNEZWxlZ2F0ZWQgPSB0eXBlb2YgaGFuZGxlciA9PT0gJ3N0cmluZydcbiAgLy8gdG9kbzogdG9vbHRpcCBwYXNzZXMgYGZhbHNlYCBpbnN0ZWFkIG9mIHNlbGVjdG9yLCBzbyB3ZSBuZWVkIHRvIGNoZWNrXG4gIGNvbnN0IGNhbGxhYmxlID0gaXNEZWxlZ2F0ZWQgPyBkZWxlZ2F0aW9uRnVuY3Rpb24gOiAoaGFuZGxlciB8fCBkZWxlZ2F0aW9uRnVuY3Rpb24pXG4gIGxldCB0eXBlRXZlbnQgPSBnZXRUeXBlRXZlbnQob3JpZ2luYWxUeXBlRXZlbnQpXG5cbiAgaWYgKCFuYXRpdmVFdmVudHMuaGFzKHR5cGVFdmVudCkpIHtcbiAgICB0eXBlRXZlbnQgPSBvcmlnaW5hbFR5cGVFdmVudFxuICB9XG5cbiAgcmV0dXJuIFtpc0RlbGVnYXRlZCwgY2FsbGFibGUsIHR5cGVFdmVudF1cbn1cblxuZnVuY3Rpb24gYWRkSGFuZGxlcihlbGVtZW50LCBvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uLCBvbmVPZmYpIHtcbiAgaWYgKHR5cGVvZiBvcmlnaW5hbFR5cGVFdmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGxldCBbaXNEZWxlZ2F0ZWQsIGNhbGxhYmxlLCB0eXBlRXZlbnRdID0gbm9ybWFsaXplUGFyYW1ldGVycyhvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKVxuXG4gIC8vIGluIGNhc2Ugb2YgbW91c2VlbnRlciBvciBtb3VzZWxlYXZlIHdyYXAgdGhlIGhhbmRsZXIgd2l0aGluIGEgZnVuY3Rpb24gdGhhdCBjaGVja3MgZm9yIGl0cyBET00gcG9zaXRpb25cbiAgLy8gdGhpcyBwcmV2ZW50cyB0aGUgaGFuZGxlciBmcm9tIGJlaW5nIGRpc3BhdGNoZWQgdGhlIHNhbWUgd2F5IGFzIG1vdXNlb3ZlciBvciBtb3VzZW91dCBkb2VzXG4gIGlmIChvcmlnaW5hbFR5cGVFdmVudCBpbiBjdXN0b21FdmVudHMpIHtcbiAgICBjb25zdCB3cmFwRnVuY3Rpb24gPSBmbiA9PiB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICghZXZlbnQucmVsYXRlZFRhcmdldCB8fCAoZXZlbnQucmVsYXRlZFRhcmdldCAhPT0gZXZlbnQuZGVsZWdhdGVUYXJnZXQgJiYgIWV2ZW50LmRlbGVnYXRlVGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpKSkge1xuICAgICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FsbGFibGUgPSB3cmFwRnVuY3Rpb24oY2FsbGFibGUpXG4gIH1cblxuICBjb25zdCBldmVudHMgPSBnZXRFbGVtZW50RXZlbnRzKGVsZW1lbnQpXG4gIGNvbnN0IGhhbmRsZXJzID0gZXZlbnRzW3R5cGVFdmVudF0gfHwgKGV2ZW50c1t0eXBlRXZlbnRdID0ge30pXG4gIGNvbnN0IHByZXZpb3VzRnVuY3Rpb24gPSBmaW5kSGFuZGxlcihoYW5kbGVycywgY2FsbGFibGUsIGlzRGVsZWdhdGVkID8gaGFuZGxlciA6IG51bGwpXG5cbiAgaWYgKHByZXZpb3VzRnVuY3Rpb24pIHtcbiAgICBwcmV2aW91c0Z1bmN0aW9uLm9uZU9mZiA9IHByZXZpb3VzRnVuY3Rpb24ub25lT2ZmICYmIG9uZU9mZlxuXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCB1aWQgPSBtYWtlRXZlbnRVaWQoY2FsbGFibGUsIG9yaWdpbmFsVHlwZUV2ZW50LnJlcGxhY2UobmFtZXNwYWNlUmVnZXgsICcnKSlcbiAgY29uc3QgZm4gPSBpc0RlbGVnYXRlZCA/XG4gICAgYm9vdHN0cmFwRGVsZWdhdGlvbkhhbmRsZXIoZWxlbWVudCwgaGFuZGxlciwgY2FsbGFibGUpIDpcbiAgICBib290c3RyYXBIYW5kbGVyKGVsZW1lbnQsIGNhbGxhYmxlKVxuXG4gIGZuLmRlbGVnYXRpb25TZWxlY3RvciA9IGlzRGVsZWdhdGVkID8gaGFuZGxlciA6IG51bGxcbiAgZm4uY2FsbGFibGUgPSBjYWxsYWJsZVxuICBmbi5vbmVPZmYgPSBvbmVPZmZcbiAgZm4udWlkRXZlbnQgPSB1aWRcbiAgaGFuZGxlcnNbdWlkXSA9IGZuXG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGVFdmVudCwgZm4sIGlzRGVsZWdhdGVkKVxufVxuXG5mdW5jdGlvbiByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IpIHtcbiAgY29uc3QgZm4gPSBmaW5kSGFuZGxlcihldmVudHNbdHlwZUV2ZW50XSwgaGFuZGxlciwgZGVsZWdhdGlvblNlbGVjdG9yKVxuXG4gIGlmICghZm4pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlRXZlbnQsIGZuLCBCb29sZWFuKGRlbGVnYXRpb25TZWxlY3RvcikpXG4gIGRlbGV0ZSBldmVudHNbdHlwZUV2ZW50XVtmbi51aWRFdmVudF1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlTmFtZXNwYWNlZEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBuYW1lc3BhY2UpIHtcbiAgY29uc3Qgc3RvcmVFbGVtZW50RXZlbnQgPSBldmVudHNbdHlwZUV2ZW50XSB8fCB7fVxuXG4gIGZvciAoY29uc3QgaGFuZGxlcktleSBvZiBPYmplY3Qua2V5cyhzdG9yZUVsZW1lbnRFdmVudCkpIHtcbiAgICBpZiAoaGFuZGxlcktleS5pbmNsdWRlcyhuYW1lc3BhY2UpKSB7XG4gICAgICBjb25zdCBldmVudCA9IHN0b3JlRWxlbWVudEV2ZW50W2hhbmRsZXJLZXldXG4gICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBldmVudC5jYWxsYWJsZSwgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUeXBlRXZlbnQoZXZlbnQpIHtcbiAgLy8gYWxsb3cgdG8gZ2V0IHRoZSBuYXRpdmUgZXZlbnRzIGZyb20gbmFtZXNwYWNlZCBldmVudHMgKCdjbGljay5icy5idXR0b24nIC0tPiAnY2xpY2snKVxuICBldmVudCA9IGV2ZW50LnJlcGxhY2Uoc3RyaXBOYW1lUmVnZXgsICcnKVxuICByZXR1cm4gY3VzdG9tRXZlbnRzW2V2ZW50XSB8fCBldmVudFxufVxuXG5jb25zdCBFdmVudEhhbmRsZXIgPSB7XG4gIG9uKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgICBhZGRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24sIGZhbHNlKVxuICB9LFxuXG4gIG9uZShlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKSB7XG4gICAgYWRkSGFuZGxlcihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uLCB0cnVlKVxuICB9LFxuXG4gIG9mZihlbGVtZW50LCBvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiBvcmlnaW5hbFR5cGVFdmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IFtpc0RlbGVnYXRlZCwgY2FsbGFibGUsIHR5cGVFdmVudF0gPSBub3JtYWxpemVQYXJhbWV0ZXJzKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pXG4gICAgY29uc3QgaW5OYW1lc3BhY2UgPSB0eXBlRXZlbnQgIT09IG9yaWdpbmFsVHlwZUV2ZW50XG4gICAgY29uc3QgZXZlbnRzID0gZ2V0RWxlbWVudEV2ZW50cyhlbGVtZW50KVxuICAgIGNvbnN0IHN0b3JlRWxlbWVudEV2ZW50ID0gZXZlbnRzW3R5cGVFdmVudF0gfHwge31cbiAgICBjb25zdCBpc05hbWVzcGFjZSA9IG9yaWdpbmFsVHlwZUV2ZW50LnN0YXJ0c1dpdGgoJy4nKVxuXG4gICAgaWYgKHR5cGVvZiBjYWxsYWJsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFNpbXBsZXN0IGNhc2U6IGhhbmRsZXIgaXMgcGFzc2VkLCByZW1vdmUgdGhhdCBsaXN0ZW5lciBPTkxZLlxuICAgICAgaWYgKCFPYmplY3Qua2V5cyhzdG9yZUVsZW1lbnRFdmVudCkubGVuZ3RoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBjYWxsYWJsZSwgaXNEZWxlZ2F0ZWQgPyBoYW5kbGVyIDogbnVsbClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpc05hbWVzcGFjZSkge1xuICAgICAgZm9yIChjb25zdCBlbGVtZW50RXZlbnQgb2YgT2JqZWN0LmtleXMoZXZlbnRzKSkge1xuICAgICAgICByZW1vdmVOYW1lc3BhY2VkSGFuZGxlcnMoZWxlbWVudCwgZXZlbnRzLCBlbGVtZW50RXZlbnQsIG9yaWdpbmFsVHlwZUV2ZW50LnNsaWNlKDEpKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3Qga2V5SGFuZGxlcnMgb2YgT2JqZWN0LmtleXMoc3RvcmVFbGVtZW50RXZlbnQpKSB7XG4gICAgICBjb25zdCBoYW5kbGVyS2V5ID0ga2V5SGFuZGxlcnMucmVwbGFjZShzdHJpcFVpZFJlZ2V4LCAnJylcblxuICAgICAgaWYgKCFpbk5hbWVzcGFjZSB8fCBvcmlnaW5hbFR5cGVFdmVudC5pbmNsdWRlcyhoYW5kbGVyS2V5KSkge1xuICAgICAgICBjb25zdCBldmVudCA9IHN0b3JlRWxlbWVudEV2ZW50W2tleUhhbmRsZXJzXVxuICAgICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBldmVudC5jYWxsYWJsZSwgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yKVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICB0cmlnZ2VyKGVsZW1lbnQsIGV2ZW50LCBhcmdzKSB7XG4gICAgaWYgKHR5cGVvZiBldmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgJCA9IGdldGpRdWVyeSgpXG4gICAgY29uc3QgdHlwZUV2ZW50ID0gZ2V0VHlwZUV2ZW50KGV2ZW50KVxuICAgIGNvbnN0IGluTmFtZXNwYWNlID0gZXZlbnQgIT09IHR5cGVFdmVudFxuXG4gICAgbGV0IGpRdWVyeUV2ZW50ID0gbnVsbFxuICAgIGxldCBidWJibGVzID0gdHJ1ZVxuICAgIGxldCBuYXRpdmVEaXNwYXRjaCA9IHRydWVcbiAgICBsZXQgZGVmYXVsdFByZXZlbnRlZCA9IGZhbHNlXG5cbiAgICBpZiAoaW5OYW1lc3BhY2UgJiYgJCkge1xuICAgICAgalF1ZXJ5RXZlbnQgPSAkLkV2ZW50KGV2ZW50LCBhcmdzKVxuXG4gICAgICAkKGVsZW1lbnQpLnRyaWdnZXIoalF1ZXJ5RXZlbnQpXG4gICAgICBidWJibGVzID0gIWpRdWVyeUV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKClcbiAgICAgIG5hdGl2ZURpc3BhdGNoID0gIWpRdWVyeUV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKClcbiAgICAgIGRlZmF1bHRQcmV2ZW50ZWQgPSBqUXVlcnlFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKVxuICAgIH1cblxuICAgIGxldCBldnQgPSBuZXcgRXZlbnQoZXZlbnQsIHsgYnViYmxlcywgY2FuY2VsYWJsZTogdHJ1ZSB9KVxuICAgIGV2dCA9IGh5ZHJhdGVPYmooZXZ0LCBhcmdzKVxuXG4gICAgaWYgKGRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgaWYgKG5hdGl2ZURpc3BhdGNoKSB7XG4gICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZ0KVxuICAgIH1cblxuICAgIGlmIChldnQuZGVmYXVsdFByZXZlbnRlZCAmJiBqUXVlcnlFdmVudCkge1xuICAgICAgalF1ZXJ5RXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIHJldHVybiBldnRcbiAgfVxufVxuXG5mdW5jdGlvbiBoeWRyYXRlT2JqKG9iaiwgbWV0YSkge1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhtZXRhIHx8IHt9KSkge1xuICAgIHRyeSB7XG4gICAgICBvYmpba2V5XSA9IHZhbHVlXG4gICAgfSBjYXRjaCB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9ialxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEhhbmRsZXJcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMi4zKTogZG9tL21hbmlwdWxhdG9yLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplRGF0YSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09ICd0cnVlJykge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAodmFsdWUgPT09ICdmYWxzZScpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gTnVtYmVyKHZhbHVlKS50b1N0cmluZygpKSB7XG4gICAgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09ICdudWxsJykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVEYXRhS2V5KGtleSkge1xuICByZXR1cm4ga2V5LnJlcGxhY2UoL1tBLVpdL2csIGNociA9PiBgLSR7Y2hyLnRvTG93ZXJDYXNlKCl9YClcbn1cblxuY29uc3QgTWFuaXB1bGF0b3IgPSB7XG4gIHNldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5LCB2YWx1ZSkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWAsIHZhbHVlKVxuICB9LFxuXG4gIHJlbW92ZURhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5KSB7XG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YClcbiAgfSxcblxuICBnZXREYXRhQXR0cmlidXRlcyhlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9XG5cbiAgICBjb25zdCBhdHRyaWJ1dGVzID0ge31cbiAgICBjb25zdCBic0tleXMgPSBPYmplY3Qua2V5cyhlbGVtZW50LmRhdGFzZXQpLmZpbHRlcihrZXkgPT4ga2V5LnN0YXJ0c1dpdGgoJ2JzJykgJiYgIWtleS5zdGFydHNXaXRoKCdic0NvbmZpZycpKVxuXG4gICAgZm9yIChjb25zdCBrZXkgb2YgYnNLZXlzKSB7XG4gICAgICBsZXQgcHVyZUtleSA9IGtleS5yZXBsYWNlKC9eYnMvLCAnJylcbiAgICAgIHB1cmVLZXkgPSBwdXJlS2V5LmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgcHVyZUtleS5zbGljZSgxLCBwdXJlS2V5Lmxlbmd0aClcbiAgICAgIGF0dHJpYnV0ZXNbcHVyZUtleV0gPSBub3JtYWxpemVEYXRhKGVsZW1lbnQuZGF0YXNldFtrZXldKVxuICAgIH1cblxuICAgIHJldHVybiBhdHRyaWJ1dGVzXG4gIH0sXG5cbiAgZ2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXkpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplRGF0YShlbGVtZW50LmdldEF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYW5pcHVsYXRvclxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4yLjMpOiBkb20vc2VsZWN0b3ItZW5naW5lLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgaXNEaXNhYmxlZCwgaXNWaXNpYmxlIH0gZnJvbSAnLi4vdXRpbC9pbmRleCdcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBTZWxlY3RvckVuZ2luZSA9IHtcbiAgZmluZChzZWxlY3RvciwgZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgIHJldHVybiBbXS5jb25jYXQoLi4uRWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3RvckFsbC5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKSlcbiAgfSxcblxuICBmaW5kT25lKHNlbGVjdG9yLCBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgcmV0dXJuIEVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3IuY2FsbChlbGVtZW50LCBzZWxlY3RvcilcbiAgfSxcblxuICBjaGlsZHJlbihlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIHJldHVybiBbXS5jb25jYXQoLi4uZWxlbWVudC5jaGlsZHJlbikuZmlsdGVyKGNoaWxkID0+IGNoaWxkLm1hdGNoZXMoc2VsZWN0b3IpKVxuICB9LFxuXG4gIHBhcmVudHMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBjb25zdCBwYXJlbnRzID0gW11cbiAgICBsZXQgYW5jZXN0b3IgPSBlbGVtZW50LnBhcmVudE5vZGUuY2xvc2VzdChzZWxlY3RvcilcblxuICAgIHdoaWxlIChhbmNlc3Rvcikge1xuICAgICAgcGFyZW50cy5wdXNoKGFuY2VzdG9yKVxuICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnROb2RlLmNsb3Nlc3Qoc2VsZWN0b3IpXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudHNcbiAgfSxcblxuICBwcmV2KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgbGV0IHByZXZpb3VzID0gZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG5cbiAgICB3aGlsZSAocHJldmlvdXMpIHtcbiAgICAgIGlmIChwcmV2aW91cy5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gW3ByZXZpb3VzXVxuICAgICAgfVxuXG4gICAgICBwcmV2aW91cyA9IHByZXZpb3VzLnByZXZpb3VzRWxlbWVudFNpYmxpbmdcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfSxcbiAgLy8gVE9ETzogdGhpcyBpcyBub3cgdW51c2VkOyByZW1vdmUgbGF0ZXIgYWxvbmcgd2l0aCBwcmV2KClcbiAgbmV4dChlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGxldCBuZXh0ID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmdcblxuICAgIHdoaWxlIChuZXh0KSB7XG4gICAgICBpZiAobmV4dC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gW25leHRdXG4gICAgICB9XG5cbiAgICAgIG5leHQgPSBuZXh0Lm5leHRFbGVtZW50U2libGluZ1xuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9LFxuXG4gIGZvY3VzYWJsZUNoaWxkcmVuKGVsZW1lbnQpIHtcbiAgICBjb25zdCBmb2N1c2FibGVzID0gW1xuICAgICAgJ2EnLFxuICAgICAgJ2J1dHRvbicsXG4gICAgICAnaW5wdXQnLFxuICAgICAgJ3RleHRhcmVhJyxcbiAgICAgICdzZWxlY3QnLFxuICAgICAgJ2RldGFpbHMnLFxuICAgICAgJ1t0YWJpbmRleF0nLFxuICAgICAgJ1tjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCJdJ1xuICAgIF0ubWFwKHNlbGVjdG9yID0+IGAke3NlbGVjdG9yfTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pYCkuam9pbignLCcpXG5cbiAgICByZXR1cm4gdGhpcy5maW5kKGZvY3VzYWJsZXMsIGVsZW1lbnQpLmZpbHRlcihlbCA9PiAhaXNEaXNhYmxlZChlbCkgJiYgaXNWaXNpYmxlKGVsKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RvckVuZ2luZVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4yLjMpOiBkcm9wZG93bi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAqIGFzIFBvcHBlciBmcm9tICdAcG9wcGVyanMvY29yZSdcbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZ2V0RWxlbWVudCxcbiAgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQsXG4gIGlzRGlzYWJsZWQsXG4gIGlzRWxlbWVudCxcbiAgaXNSVEwsXG4gIGlzVmlzaWJsZSxcbiAgbm9vcFxufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ2Ryb3Bkb3duJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuZHJvcGRvd24nXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgRVNDQVBFX0tFWSA9ICdFc2NhcGUnXG5jb25zdCBUQUJfS0VZID0gJ1RhYidcbmNvbnN0IEFSUk9XX1VQX0tFWSA9ICdBcnJvd1VwJ1xuY29uc3QgQVJST1dfRE9XTl9LRVkgPSAnQXJyb3dEb3duJ1xuY29uc3QgUklHSFRfTU9VU0VfQlVUVE9OID0gMiAvLyBNb3VzZUV2ZW50LmJ1dHRvbiB2YWx1ZSBmb3IgdGhlIHNlY29uZGFyeSBidXR0b24sIHVzdWFsbHkgdGhlIHJpZ2h0IGJ1dHRvblxuXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fREFUQV9BUEkgPSBga2V5ZG93biR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWVVQX0RBVEFfQVBJID0gYGtleXVwJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfRFJPUFVQID0gJ2Ryb3B1cCdcbmNvbnN0IENMQVNTX05BTUVfRFJPUEVORCA9ICdkcm9wZW5kJ1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QU1RBUlQgPSAnZHJvcHN0YXJ0J1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QVVBfQ0VOVEVSID0gJ2Ryb3B1cC1jZW50ZXInXG5jb25zdCBDTEFTU19OQU1FX0RST1BET1dOX0NFTlRFUiA9ICdkcm9wZG93bi1jZW50ZXInXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCJdOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEVfU0hPV04gPSBgJHtTRUxFQ1RPUl9EQVRBX1RPR0dMRX0uJHtDTEFTU19OQU1FX1NIT1d9YFxuY29uc3QgU0VMRUNUT1JfTUVOVSA9ICcuZHJvcGRvd24tbWVudSdcbmNvbnN0IFNFTEVDVE9SX05BVkJBUiA9ICcubmF2YmFyJ1xuY29uc3QgU0VMRUNUT1JfTkFWQkFSX05BViA9ICcubmF2YmFyLW5hdidcbmNvbnN0IFNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMgPSAnLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCknXG5cbmNvbnN0IFBMQUNFTUVOVF9UT1AgPSBpc1JUTCgpID8gJ3RvcC1lbmQnIDogJ3RvcC1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9UT1BFTkQgPSBpc1JUTCgpID8gJ3RvcC1zdGFydCcgOiAndG9wLWVuZCdcbmNvbnN0IFBMQUNFTUVOVF9CT1RUT00gPSBpc1JUTCgpID8gJ2JvdHRvbS1lbmQnIDogJ2JvdHRvbS1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9CT1RUT01FTkQgPSBpc1JUTCgpID8gJ2JvdHRvbS1zdGFydCcgOiAnYm90dG9tLWVuZCdcbmNvbnN0IFBMQUNFTUVOVF9SSUdIVCA9IGlzUlRMKCkgPyAnbGVmdC1zdGFydCcgOiAncmlnaHQtc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfTEVGVCA9IGlzUlRMKCkgPyAncmlnaHQtc3RhcnQnIDogJ2xlZnQtc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfVE9QQ0VOVEVSID0gJ3RvcCdcbmNvbnN0IFBMQUNFTUVOVF9CT1RUT01DRU5URVIgPSAnYm90dG9tJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhdXRvQ2xvc2U6IHRydWUsXG4gIGJvdW5kYXJ5OiAnY2xpcHBpbmdQYXJlbnRzJyxcbiAgZGlzcGxheTogJ2R5bmFtaWMnLFxuICBvZmZzZXQ6IFswLCAyXSxcbiAgcG9wcGVyQ29uZmlnOiBudWxsLFxuICByZWZlcmVuY2U6ICd0b2dnbGUnXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBhdXRvQ2xvc2U6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgYm91bmRhcnk6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgZGlzcGxheTogJ3N0cmluZycsXG4gIG9mZnNldDogJyhhcnJheXxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgcG9wcGVyQ29uZmlnOiAnKG51bGx8b2JqZWN0fGZ1bmN0aW9uKScsXG4gIHJlZmVyZW5jZTogJyhzdHJpbmd8ZWxlbWVudHxvYmplY3QpJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBEcm9wZG93biBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjb25maWcpXG5cbiAgICB0aGlzLl9wb3BwZXIgPSBudWxsXG4gICAgdGhpcy5fcGFyZW50ID0gdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlIC8vIGRyb3Bkb3duIHdyYXBwZXJcbiAgICAvLyB0b2RvOiB2NiByZXZlcnQgIzM3MDExICYgY2hhbmdlIG1hcmt1cCBodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy81LjIvZm9ybXMvaW5wdXQtZ3JvdXAvXG4gICAgdGhpcy5fbWVudSA9IFNlbGVjdG9yRW5naW5lLm5leHQodGhpcy5fZWxlbWVudCwgU0VMRUNUT1JfTUVOVSlbMF0gfHxcbiAgICAgIFNlbGVjdG9yRW5naW5lLnByZXYodGhpcy5fZWxlbWVudCwgU0VMRUNUT1JfTUVOVSlbMF0gfHxcbiAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfTUVOVSwgdGhpcy5fcGFyZW50KVxuICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgdG9nZ2xlKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1Nob3duKCkgPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdygpXG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmIChpc0Rpc2FibGVkKHRoaXMuX2VsZW1lbnQpIHx8IHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XLCByZWxhdGVkVGFyZ2V0KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9jcmVhdGVQb3BwZXIoKVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgdG8gdGhlIGJvZHkncyBpbW1lZGlhdGUgY2hpbGRyZW47XG4gICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmICF0aGlzLl9wYXJlbnQuY2xvc2VzdChTRUxFQ1RPUl9OQVZCQVJfTkFWKSkge1xuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKSkge1xuICAgICAgICBFdmVudEhhbmRsZXIub24oZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuXG4gICAgdGhpcy5fbWVudS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOLCByZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzLl9lbGVtZW50KSB8fCAhdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH1cblxuICAgIHRoaXMuX2NvbXBsZXRlSGlkZShyZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKVxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci51cGRhdGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2NvbXBsZXRlSGlkZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSwgcmVsYXRlZFRhcmdldClcbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIHRoaXMuX21lbnUuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXG4gICAgTWFuaXB1bGF0b3IucmVtb3ZlRGF0YUF0dHJpYnV0ZSh0aGlzLl9tZW51LCAncG9wcGVyJylcbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4sIHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHN1cGVyLl9nZXRDb25maWcoY29uZmlnKVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmZXJlbmNlID09PSAnb2JqZWN0JyAmJiAhaXNFbGVtZW50KGNvbmZpZy5yZWZlcmVuY2UpICYmXG4gICAgICB0eXBlb2YgY29uZmlnLnJlZmVyZW5jZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09ICdmdW5jdGlvbidcbiAgICApIHtcbiAgICAgIC8vIFBvcHBlciB2aXJ0dWFsIGVsZW1lbnRzIHJlcXVpcmUgYSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgbWV0aG9kXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAke05BTUUudG9VcHBlckNhc2UoKX06IE9wdGlvbiBcInJlZmVyZW5jZVwiIHByb3ZpZGVkIHR5cGUgXCJvYmplY3RcIiB3aXRob3V0IGEgcmVxdWlyZWQgXCJnZXRCb3VuZGluZ0NsaWVudFJlY3RcIiBtZXRob2QuYClcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfY3JlYXRlUG9wcGVyKCkge1xuICAgIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyBkcm9wZG93bnMgcmVxdWlyZSBQb3BwZXIgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZyknKVxuICAgIH1cblxuICAgIGxldCByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fZWxlbWVudFxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UgPT09ICdwYXJlbnQnKSB7XG4gICAgICByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fcGFyZW50XG4gICAgfSBlbHNlIGlmIChpc0VsZW1lbnQodGhpcy5fY29uZmlnLnJlZmVyZW5jZSkpIHtcbiAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSBnZXRFbGVtZW50KHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnJlZmVyZW5jZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9jb25maWcucmVmZXJlbmNlXG4gICAgfVxuXG4gICAgY29uc3QgcG9wcGVyQ29uZmlnID0gdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKClcbiAgICB0aGlzLl9wb3BwZXIgPSBQb3BwZXIuY3JlYXRlUG9wcGVyKHJlZmVyZW5jZUVsZW1lbnQsIHRoaXMuX21lbnUsIHBvcHBlckNvbmZpZylcbiAgfVxuXG4gIF9pc1Nob3duKCkge1xuICAgIHJldHVybiB0aGlzLl9tZW51LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpXG4gIH1cblxuICBfZ2V0UGxhY2VtZW50KCkge1xuICAgIGNvbnN0IHBhcmVudERyb3Bkb3duID0gdGhpcy5fcGFyZW50XG5cbiAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUEVORCkpIHtcbiAgICAgIHJldHVybiBQTEFDRU1FTlRfUklHSFRcbiAgICB9XG5cbiAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUFNUQVJUKSkge1xuICAgICAgcmV0dXJuIFBMQUNFTUVOVF9MRUZUXG4gICAgfVxuXG4gICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BVUF9DRU5URVIpKSB7XG4gICAgICByZXR1cm4gUExBQ0VNRU5UX1RPUENFTlRFUlxuICAgIH1cblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRE9XTl9DRU5URVIpKSB7XG4gICAgICByZXR1cm4gUExBQ0VNRU5UX0JPVFRPTUNFTlRFUlxuICAgIH1cblxuICAgIC8vIFdlIG5lZWQgdG8gdHJpbSB0aGUgdmFsdWUgYmVjYXVzZSBjdXN0b20gcHJvcGVydGllcyBjYW4gYWxzbyBpbmNsdWRlIHNwYWNlc1xuICAgIGNvbnN0IGlzRW5kID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9tZW51KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWJzLXBvc2l0aW9uJykudHJpbSgpID09PSAnZW5kJ1xuXG4gICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BVUCkpIHtcbiAgICAgIHJldHVybiBpc0VuZCA/IFBMQUNFTUVOVF9UT1BFTkQgOiBQTEFDRU1FTlRfVE9QXG4gICAgfVxuXG4gICAgcmV0dXJuIGlzRW5kID8gUExBQ0VNRU5UX0JPVFRPTUVORCA6IFBMQUNFTUVOVF9CT1RUT01cbiAgfVxuXG4gIF9kZXRlY3ROYXZiYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9OQVZCQVIpICE9PSBudWxsXG4gIH1cblxuICBfZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHsgb2Zmc2V0IH0gPSB0aGlzLl9jb25maWdcblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG9mZnNldC5zcGxpdCgnLCcpLm1hcCh2YWx1ZSA9PiBOdW1iZXIucGFyc2VJbnQodmFsdWUsIDEwKSlcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHBvcHBlckRhdGEgPT4gb2Zmc2V0KHBvcHBlckRhdGEsIHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldFxuICB9XG5cbiAgX2dldFBvcHBlckNvbmZpZygpIHtcbiAgICBjb25zdCBkZWZhdWx0QnNQb3BwZXJDb25maWcgPSB7XG4gICAgICBwbGFjZW1lbnQ6IHRoaXMuX2dldFBsYWNlbWVudCgpLFxuICAgICAgbW9kaWZpZXJzOiBbe1xuICAgICAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIGJvdW5kYXJ5OiB0aGlzLl9jb25maWcuYm91bmRhcnlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ29mZnNldCcsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBvZmZzZXQ6IHRoaXMuX2dldE9mZnNldCgpXG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSBQb3BwZXIgaWYgd2UgaGF2ZSBhIHN0YXRpYyBkaXNwbGF5IG9yIERyb3Bkb3duIGlzIGluIE5hdmJhclxuICAgIGlmICh0aGlzLl9pbk5hdmJhciB8fCB0aGlzLl9jb25maWcuZGlzcGxheSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIE1hbmlwdWxhdG9yLnNldERhdGFBdHRyaWJ1dGUodGhpcy5fbWVudSwgJ3BvcHBlcicsICdzdGF0aWMnKSAvLyB0b2RvOnY2IHJlbW92ZVxuICAgICAgZGVmYXVsdEJzUG9wcGVyQ29uZmlnLm1vZGlmaWVycyA9IFt7XG4gICAgICAgIG5hbWU6ICdhcHBseVN0eWxlcycsXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICB9XVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5kZWZhdWx0QnNQb3BwZXJDb25maWcsXG4gICAgICAuLi4odHlwZW9mIHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnKGRlZmF1bHRCc1BvcHBlckNvbmZpZykgOiB0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnKVxuICAgIH1cbiAgfVxuXG4gIF9zZWxlY3RNZW51SXRlbSh7IGtleSwgdGFyZ2V0IH0pIHtcbiAgICBjb25zdCBpdGVtcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfVklTSUJMRV9JVEVNUywgdGhpcy5fbWVudSkuZmlsdGVyKGVsZW1lbnQgPT4gaXNWaXNpYmxlKGVsZW1lbnQpKVxuXG4gICAgaWYgKCFpdGVtcy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIGlmIHRhcmdldCBpc24ndCBpbmNsdWRlZCBpbiBpdGVtcyAoZS5nLiB3aGVuIGV4cGFuZGluZyB0aGUgZHJvcGRvd24pXG4gICAgLy8gYWxsb3cgY3ljbGluZyB0byBnZXQgdGhlIGxhc3QgaXRlbSBpbiBjYXNlIGtleSBlcXVhbHMgQVJST1dfVVBfS0VZXG4gICAgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQoaXRlbXMsIHRhcmdldCwga2V5ID09PSBBUlJPV19ET1dOX0tFWSwgIWl0ZW1zLmluY2x1ZGVzKHRhcmdldCkpLmZvY3VzKClcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBjbGVhck1lbnVzKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gUklHSFRfTU9VU0VfQlVUVE9OIHx8IChldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LmtleSAhPT0gVEFCX0tFWSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG9wZW5Ub2dnbGVzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRV9TSE9XTilcblxuICAgIGZvciAoY29uc3QgdG9nZ2xlIG9mIG9wZW5Ub2dnbGVzKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gRHJvcGRvd24uZ2V0SW5zdGFuY2UodG9nZ2xlKVxuICAgICAgaWYgKCFjb250ZXh0IHx8IGNvbnRleHQuX2NvbmZpZy5hdXRvQ2xvc2UgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbXBvc2VkUGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpXG4gICAgICBjb25zdCBpc01lbnVUYXJnZXQgPSBjb21wb3NlZFBhdGguaW5jbHVkZXMoY29udGV4dC5fbWVudSlcbiAgICAgIGlmIChcbiAgICAgICAgY29tcG9zZWRQYXRoLmluY2x1ZGVzKGNvbnRleHQuX2VsZW1lbnQpIHx8XG4gICAgICAgIChjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSAnaW5zaWRlJyAmJiAhaXNNZW51VGFyZ2V0KSB8fFxuICAgICAgICAoY29udGV4dC5fY29uZmlnLmF1dG9DbG9zZSA9PT0gJ291dHNpZGUnICYmIGlzTWVudVRhcmdldClcbiAgICAgICkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyBUYWIgbmF2aWdhdGlvbiB0aHJvdWdoIHRoZSBkcm9wZG93biBtZW51IG9yIGV2ZW50cyBmcm9tIGNvbnRhaW5lZCBpbnB1dHMgc2hvdWxkbid0IGNsb3NlIHRoZSBtZW51XG4gICAgICBpZiAoY29udGV4dC5fbWVudS5jb250YWlucyhldmVudC50YXJnZXQpICYmICgoZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC5rZXkgPT09IFRBQl9LRVkpIHx8IC9pbnB1dHxzZWxlY3R8b3B0aW9ufHRleHRhcmVhfGZvcm0vaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHsgcmVsYXRlZFRhcmdldDogY29udGV4dC5fZWxlbWVudCB9XG5cbiAgICAgIGlmIChldmVudC50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQuY2xpY2tFdmVudCA9IGV2ZW50XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX2NvbXBsZXRlSGlkZShyZWxhdGVkVGFyZ2V0KVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBkYXRhQXBpS2V5ZG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICAvLyBJZiBub3QgYW4gVVAgfCBET1dOIHwgRVNDQVBFIGtleSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gSWYgaW5wdXQvdGV4dGFyZWEgJiYgaWYga2V5IGlzIG90aGVyIHRoYW4gRVNDQVBFID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcblxuICAgIGNvbnN0IGlzSW5wdXQgPSAvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKVxuICAgIGNvbnN0IGlzRXNjYXBlRXZlbnQgPSBldmVudC5rZXkgPT09IEVTQ0FQRV9LRVlcbiAgICBjb25zdCBpc1VwT3JEb3duRXZlbnQgPSBbQVJST1dfVVBfS0VZLCBBUlJPV19ET1dOX0tFWV0uaW5jbHVkZXMoZXZlbnQua2V5KVxuXG4gICAgaWYgKCFpc1VwT3JEb3duRXZlbnQgJiYgIWlzRXNjYXBlRXZlbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpc0lucHV0ICYmICFpc0VzY2FwZUV2ZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyB0b2RvOiB2NiByZXZlcnQgIzM3MDExICYgY2hhbmdlIG1hcmt1cCBodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy81LjIvZm9ybXMvaW5wdXQtZ3JvdXAvXG4gICAgY29uc3QgZ2V0VG9nZ2xlQnV0dG9uID0gdGhpcy5tYXRjaGVzKFNFTEVDVE9SX0RBVEFfVE9HR0xFKSA/XG4gICAgICB0aGlzIDpcbiAgICAgIChTZWxlY3RvckVuZ2luZS5wcmV2KHRoaXMsIFNFTEVDVE9SX0RBVEFfVE9HR0xFKVswXSB8fFxuICAgICAgICBTZWxlY3RvckVuZ2luZS5uZXh0KHRoaXMsIFNFTEVDVE9SX0RBVEFfVE9HR0xFKVswXSB8fFxuICAgICAgICBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBldmVudC5kZWxlZ2F0ZVRhcmdldC5wYXJlbnROb2RlKSlcblxuICAgIGNvbnN0IGluc3RhbmNlID0gRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZShnZXRUb2dnbGVCdXR0b24pXG5cbiAgICBpZiAoaXNVcE9yRG93bkV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgaW5zdGFuY2Uuc2hvdygpXG4gICAgICBpbnN0YW5jZS5fc2VsZWN0TWVudUl0ZW0oZXZlbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaW5zdGFuY2UuX2lzU2hvd24oKSkgeyAvLyBlbHNlIGlzIGVzY2FwZSBhbmQgd2UgY2hlY2sgaWYgaXQgaXMgc2hvd25cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBpbnN0YW5jZS5oaWRlKClcbiAgICAgIGdldFRvZ2dsZUJ1dHRvbi5mb2N1cygpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBEcm9wZG93bi5kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fREFUQV9BUEksIFNFTEVDVE9SX01FTlUsIERyb3Bkb3duLmRhdGFBcGlLZXlkb3duSGFuZGxlcilcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIERyb3Bkb3duLmNsZWFyTWVudXMpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWVVQX0RBVEFfQVBJLCBEcm9wZG93bi5jbGVhck1lbnVzKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcykudG9nZ2xlKClcbn0pXG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKERyb3Bkb3duKVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4yLjMpOiBtb2RhbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7IGRlZmluZUpRdWVyeVBsdWdpbiwgZ2V0RWxlbWVudEZyb21TZWxlY3RvciwgaXNSVEwsIGlzVmlzaWJsZSwgcmVmbG93IH0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBTY3JvbGxCYXJIZWxwZXIgZnJvbSAnLi91dGlsL3Njcm9sbGJhcidcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnLi91dGlsL2JhY2tkcm9wJ1xuaW1wb3J0IEZvY3VzVHJhcCBmcm9tICcuL3V0aWwvZm9jdXN0cmFwJ1xuaW1wb3J0IHsgZW5hYmxlRGlzbWlzc1RyaWdnZXIgfSBmcm9tICcuL3V0aWwvY29tcG9uZW50LWZ1bmN0aW9ucydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ21vZGFsJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMubW9kYWwnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcbmNvbnN0IEVTQ0FQRV9LRVkgPSAnRXNjYXBlJ1xuXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFX1BSRVZFTlRFRCA9IGBoaWRlUHJldmVudGVkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUkVTSVpFID0gYHJlc2l6ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RJU01JU1MgPSBgY2xpY2suZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTID0gYG1vdXNlZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTl9ESVNNSVNTID0gYGtleWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX09QRU4gPSAnbW9kYWwtb3BlbidcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX1NUQVRJQyA9ICdtb2RhbC1zdGF0aWMnXG5cbmNvbnN0IE9QRU5fU0VMRUNUT1IgPSAnLm1vZGFsLnNob3cnXG5jb25zdCBTRUxFQ1RPUl9ESUFMT0cgPSAnLm1vZGFsLWRpYWxvZydcbmNvbnN0IFNFTEVDVE9SX01PREFMX0JPRFkgPSAnLm1vZGFsLWJvZHknXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJtb2RhbFwiXSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGZvY3VzOiB0cnVlLFxuICBrZXlib2FyZDogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYmFja2Ryb3A6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgZm9jdXM6ICdib29sZWFuJyxcbiAga2V5Ym9hcmQ6ICdib29sZWFuJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBNb2RhbCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjb25maWcpXG5cbiAgICB0aGlzLl9kaWFsb2cgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RJQUxPRywgdGhpcy5fZWxlbWVudClcbiAgICB0aGlzLl9iYWNrZHJvcCA9IHRoaXMuX2luaXRpYWxpemVCYWNrRHJvcCgpXG4gICAgdGhpcy5fZm9jdXN0cmFwID0gdGhpcy5faW5pdGlhbGl6ZUZvY3VzVHJhcCgpXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICB0aGlzLl9zY3JvbGxCYXIgPSBuZXcgU2Nyb2xsQmFySGVscGVyKClcblxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgdG9nZ2xlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5faXNTaG93biA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBzaG93KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBpZiAodGhpcy5faXNTaG93biB8fCB0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1csIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICB9KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZVxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcblxuICAgIHRoaXMuX3Njcm9sbEJhci5oaWRlKClcblxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX09QRU4pXG5cbiAgICB0aGlzLl9hZGp1c3REaWFsb2coKVxuXG4gICAgdGhpcy5fYmFja2Ryb3Auc2hvdygoKSA9PiB0aGlzLl9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcblxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZVxuICAgIHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKClcblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKCgpID0+IHRoaXMuX2hpZGVNb2RhbCgpLCB0aGlzLl9lbGVtZW50LCB0aGlzLl9pc0FuaW1hdGVkKCkpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGZvciAoY29uc3QgaHRtbEVsZW1lbnQgb2YgW3dpbmRvdywgdGhpcy5fZGlhbG9nXSkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9mZihodG1sRWxlbWVudCwgRVZFTlRfS0VZKVxuICAgIH1cblxuICAgIHRoaXMuX2JhY2tkcm9wLmRpc3Bvc2UoKVxuICAgIHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKClcbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIGhhbmRsZVVwZGF0ZSgpIHtcbiAgICB0aGlzLl9hZGp1c3REaWFsb2coKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfaW5pdGlhbGl6ZUJhY2tEcm9wKCkge1xuICAgIHJldHVybiBuZXcgQmFja2Ryb3Aoe1xuICAgICAgaXNWaXNpYmxlOiBCb29sZWFuKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCksIC8vICdzdGF0aWMnIG9wdGlvbiB3aWxsIGJlIHRyYW5zbGF0ZWQgdG8gdHJ1ZSwgYW5kIGJvb2xlYW5zIHdpbGwga2VlcCB0aGVpciB2YWx1ZSxcbiAgICAgIGlzQW5pbWF0ZWQ6IHRoaXMuX2lzQW5pbWF0ZWQoKVxuICAgIH0pXG4gIH1cblxuICBfaW5pdGlhbGl6ZUZvY3VzVHJhcCgpIHtcbiAgICByZXR1cm4gbmV3IEZvY3VzVHJhcCh7XG4gICAgICB0cmFwRWxlbWVudDogdGhpcy5fZWxlbWVudFxuICAgIH0pXG4gIH1cblxuICBfc2hvd0VsZW1lbnQocmVsYXRlZFRhcmdldCkge1xuICAgIC8vIHRyeSB0byBhcHBlbmQgZHluYW1pYyBtb2RhbFxuICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLl9lbGVtZW50KSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJylcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJylcbiAgICB0aGlzLl9lbGVtZW50LnNjcm9sbFRvcCA9IDBcblxuICAgIGNvbnN0IG1vZGFsQm9keSA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfTU9EQUxfQk9EWSwgdGhpcy5fZGlhbG9nKVxuICAgIGlmIChtb2RhbEJvZHkpIHtcbiAgICAgIG1vZGFsQm9keS5zY3JvbGxUb3AgPSAwXG4gICAgfVxuXG4gICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgY29uc3QgdHJhbnNpdGlvbkNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5mb2N1cykge1xuICAgICAgICB0aGlzLl9mb2N1c3RyYXAuYWN0aXZhdGUoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04sIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldFxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKHRyYW5zaXRpb25Db21wbGV0ZSwgdGhpcy5fZGlhbG9nLCB0aGlzLl9pc0FuaW1hdGVkKCkpXG4gIH1cblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV05fRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSAhPT0gRVNDQVBFX0tFWSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKClcbiAgICB9KVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfUkVTSVpFLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5faXNTaG93biAmJiAhdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgIHRoaXMuX2FkanVzdERpYWxvZygpXG4gICAgICB9XG4gICAgfSlcblxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRURPV05fRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgLy8gYSBiYWQgdHJpY2sgdG8gc2VncmVnYXRlIGNsaWNrcyB0aGF0IG1heSBzdGFydCBpbnNpZGUgZGlhbG9nIGJ1dCBlbmQgb3V0c2lkZSwgYW5kIGF2b2lkIGxpc3RlbiB0byBzY3JvbGxiYXIgY2xpY2tzXG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLX0RJU01JU1MsIGV2ZW50MiA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9lbGVtZW50ICE9PSBldmVudC50YXJnZXQgfHwgdGhpcy5fZWxlbWVudCAhPT0gZXZlbnQyLnRhcmdldCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICB0aGlzLl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3ApIHtcbiAgICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBfaGlkZU1vZGFsKCkge1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnKVxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyb2xlJylcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuXG4gICAgdGhpcy5fYmFja2Ryb3AuaGlkZSgoKSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9PUEVOKVxuICAgICAgdGhpcy5fcmVzZXRBZGp1c3RtZW50cygpXG4gICAgICB0aGlzLl9zY3JvbGxCYXIucmVzZXQoKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOKVxuICAgIH0pXG4gIH1cblxuICBfaXNBbmltYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKVxuICB9XG5cbiAgX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKSB7XG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERV9QUkVWRU5URUQpXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpc01vZGFsT3ZlcmZsb3dpbmcgPSB0aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICBjb25zdCBpbml0aWFsT3ZlcmZsb3dZID0gdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvd1lcbiAgICAvLyByZXR1cm4gaWYgdGhlIGZvbGxvd2luZyBiYWNrZ3JvdW5kIHRyYW5zaXRpb24gaGFzbid0IHlldCBjb21wbGV0ZWRcbiAgICBpZiAoaW5pdGlhbE92ZXJmbG93WSA9PT0gJ2hpZGRlbicgfHwgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TVEFUSUMpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJ1xuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NUQVRJQylcbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NUQVRJQylcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9IGluaXRpYWxPdmVyZmxvd1lcbiAgICAgIH0sIHRoaXMuX2RpYWxvZylcbiAgICB9LCB0aGlzLl9kaWFsb2cpXG5cbiAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZm9sbG93aW5nIG1ldGhvZHMgYXJlIHVzZWQgdG8gaGFuZGxlIG92ZXJmbG93aW5nIG1vZGFsc1xuICAgKi9cblxuICBfYWRqdXN0RGlhbG9nKCkge1xuICAgIGNvbnN0IGlzTW9kYWxPdmVyZmxvd2luZyA9IHRoaXMuX2VsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gdGhpcy5fc2Nyb2xsQmFyLmdldFdpZHRoKClcbiAgICBjb25zdCBpc0JvZHlPdmVyZmxvd2luZyA9IHNjcm9sbGJhcldpZHRoID4gMFxuXG4gICAgaWYgKGlzQm9keU92ZXJmbG93aW5nICYmICFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gaXNSVEwoKSA/ICdwYWRkaW5nTGVmdCcgOiAncGFkZGluZ1JpZ2h0J1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtwcm9wZXJ0eV0gPSBgJHtzY3JvbGxiYXJXaWR0aH1weGBcbiAgICB9XG5cbiAgICBpZiAoIWlzQm9keU92ZXJmbG93aW5nICYmIGlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSBpc1JUTCgpID8gJ3BhZGRpbmdSaWdodCcgOiAncGFkZGluZ0xlZnQnXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW3Byb3BlcnR5XSA9IGAke3Njcm9sbGJhcldpZHRofXB4YFxuICAgIH1cbiAgfVxuXG4gIF9yZXNldEFkanVzdG1lbnRzKCkge1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSAnJ1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJydcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZywgcmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IE1vZGFsLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXShyZWxhdGVkVGFyZ2V0KVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKVxuXG4gIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBFdmVudEhhbmRsZXIub25lKHRhcmdldCwgRVZFTlRfU0hPVywgc2hvd0V2ZW50ID0+IHtcbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIC8vIG9ubHkgcmVnaXN0ZXIgZm9jdXMgcmVzdG9yZXIgaWYgbW9kYWwgd2lsbCBhY3R1YWxseSBnZXQgc2hvd25cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9ISURERU4sICgpID0+IHtcbiAgICAgIGlmIChpc1Zpc2libGUodGhpcykpIHtcbiAgICAgICAgdGhpcy5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICAvLyBhdm9pZCBjb25mbGljdCB3aGVuIGNsaWNraW5nIG1vZGFsIHRvZ2dsZXIgd2hpbGUgYW5vdGhlciBvbmUgaXMgb3BlblxuICBjb25zdCBhbHJlYWR5T3BlbiA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoT1BFTl9TRUxFQ1RPUilcbiAgaWYgKGFscmVhZHlPcGVuKSB7XG4gICAgTW9kYWwuZ2V0SW5zdGFuY2UoYWxyZWFkeU9wZW4pLmhpZGUoKVxuICB9XG5cbiAgY29uc3QgZGF0YSA9IE1vZGFsLmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KVxuXG4gIGRhdGEudG9nZ2xlKHRoaXMpXG59KVxuXG5lbmFibGVEaXNtaXNzVHJpZ2dlcihNb2RhbClcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oTW9kYWwpXG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjIuMyk6IG9mZmNhbnZhcy5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgaXNEaXNhYmxlZCxcbiAgaXNWaXNpYmxlXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBTY3JvbGxCYXJIZWxwZXIgZnJvbSAnLi91dGlsL3Njcm9sbGJhcidcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IEJhY2tkcm9wIGZyb20gJy4vdXRpbC9iYWNrZHJvcCdcbmltcG9ydCBGb2N1c1RyYXAgZnJvbSAnLi91dGlsL2ZvY3VzdHJhcCdcbmltcG9ydCB7IGVuYWJsZURpc21pc3NUcmlnZ2VyIH0gZnJvbSAnLi91dGlsL2NvbXBvbmVudC1mdW5jdGlvbnMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdvZmZjYW52YXMnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5vZmZjYW52YXMnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcbmNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkgPSBgbG9hZCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVTQ0FQRV9LRVkgPSAnRXNjYXBlJ1xuXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfU0hPV0lORyA9ICdzaG93aW5nJ1xuY29uc3QgQ0xBU1NfTkFNRV9ISURJTkcgPSAnaGlkaW5nJ1xuY29uc3QgQ0xBU1NfTkFNRV9CQUNLRFJPUCA9ICdvZmZjYW52YXMtYmFja2Ryb3AnXG5jb25zdCBPUEVOX1NFTEVDVE9SID0gJy5vZmZjYW52YXMuc2hvdydcblxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFX1BSRVZFTlRFRCA9IGBoaWRlUHJldmVudGVkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1JFU0laRSA9IGByZXNpemUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fRElTTUlTUyA9IGBrZXlkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cIm9mZmNhbnZhc1wiXSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBzY3JvbGw6IGZhbHNlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBiYWNrZHJvcDogJyhib29sZWFufHN0cmluZyknLFxuICBrZXlib2FyZDogJ2Jvb2xlYW4nLFxuICBzY3JvbGw6ICdib29sZWFuJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBPZmZjYW52YXMgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgdGhpcy5fYmFja2Ryb3AgPSB0aGlzLl9pbml0aWFsaXplQmFja0Ryb3AoKVxuICAgIHRoaXMuX2ZvY3VzdHJhcCA9IHRoaXMuX2luaXRpYWxpemVGb2N1c1RyYXAoKVxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgdG9nZ2xlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5faXNTaG93biA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBzaG93KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVywgeyByZWxhdGVkVGFyZ2V0IH0pXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2hvd24gPSB0cnVlXG4gICAgdGhpcy5fYmFja2Ryb3Auc2hvdygpXG5cbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwpIHtcbiAgICAgIG5ldyBTY3JvbGxCYXJIZWxwZXIoKS5oaWRlKClcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJylcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XSU5HKVxuXG4gICAgY29uc3QgY29tcGxldGVDYWxsQmFjayA9ICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnNjcm9sbCB8fCB0aGlzLl9jb25maWcuYmFja2Ryb3ApIHtcbiAgICAgICAgdGhpcy5fZm9jdXN0cmFwLmFjdGl2YXRlKClcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1dJTkcpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiwgeyByZWxhdGVkVGFyZ2V0IH0pXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxCYWNrLCB0aGlzLl9lbGVtZW50LCB0cnVlKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2hvd24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUpXG5cbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKClcbiAgICB0aGlzLl9lbGVtZW50LmJsdXIoKVxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0hJRElORylcbiAgICB0aGlzLl9iYWNrZHJvcC5oaWRlKClcblxuICAgIGNvbnN0IGNvbXBsZXRlQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XLCBDTEFTU19OQU1FX0hJRElORylcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLW1vZGFsJylcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyb2xlJylcblxuICAgICAgaWYgKCF0aGlzLl9jb25maWcuc2Nyb2xsKSB7XG4gICAgICAgIG5ldyBTY3JvbGxCYXJIZWxwZXIoKS5yZXNldCgpXG4gICAgICB9XG5cbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTilcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlQ2FsbGJhY2ssIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIHRoaXMuX2JhY2tkcm9wLmRpc3Bvc2UoKVxuICAgIHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKClcbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2luaXRpYWxpemVCYWNrRHJvcCgpIHtcbiAgICBjb25zdCBjbGlja0NhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERV9QUkVWRU5URUQpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH1cblxuICAgIC8vICdzdGF0aWMnIG9wdGlvbiB3aWxsIGJlIHRyYW5zbGF0ZWQgdG8gdHJ1ZSwgYW5kIGJvb2xlYW5zIHdpbGwga2VlcCB0aGVpciB2YWx1ZVxuICAgIGNvbnN0IGlzVmlzaWJsZSA9IEJvb2xlYW4odGhpcy5fY29uZmlnLmJhY2tkcm9wKVxuXG4gICAgcmV0dXJuIG5ldyBCYWNrZHJvcCh7XG4gICAgICBjbGFzc05hbWU6IENMQVNTX05BTUVfQkFDS0RST1AsXG4gICAgICBpc1Zpc2libGUsXG4gICAgICBpc0FuaW1hdGVkOiB0cnVlLFxuICAgICAgcm9vdEVsZW1lbnQ6IHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgIGNsaWNrQ2FsbGJhY2s6IGlzVmlzaWJsZSA/IGNsaWNrQ2FsbGJhY2sgOiBudWxsXG4gICAgfSlcbiAgfVxuXG4gIF9pbml0aWFsaXplRm9jdXNUcmFwKCkge1xuICAgIHJldHVybiBuZXcgRm9jdXNUcmFwKHtcbiAgICAgIHRyYXBFbGVtZW50OiB0aGlzLl9lbGVtZW50XG4gICAgfSlcbiAgfVxuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTl9ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ICE9PSBFU0NBUEVfS0VZKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFX1BSRVZFTlRFRClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgfSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10odGhpcylcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcylcblxuICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgaWYgKGlzRGlzYWJsZWQodGhpcykpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9ISURERU4sICgpID0+IHtcbiAgICAvLyBmb2N1cyBvbiB0cmlnZ2VyIHdoZW4gaXQgaXMgY2xvc2VkXG4gICAgaWYgKGlzVmlzaWJsZSh0aGlzKSkge1xuICAgICAgdGhpcy5mb2N1cygpXG4gICAgfVxuICB9KVxuXG4gIC8vIGF2b2lkIGNvbmZsaWN0IHdoZW4gY2xpY2tpbmcgYSB0b2dnbGVyIG9mIGFuIG9mZmNhbnZhcywgd2hpbGUgYW5vdGhlciBpcyBvcGVuXG4gIGNvbnN0IGFscmVhZHlPcGVuID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShPUEVOX1NFTEVDVE9SKVxuICBpZiAoYWxyZWFkeU9wZW4gJiYgYWxyZWFkeU9wZW4gIT09IHRhcmdldCkge1xuICAgIE9mZmNhbnZhcy5nZXRJbnN0YW5jZShhbHJlYWR5T3BlbikuaGlkZSgpXG4gIH1cblxuICBjb25zdCBkYXRhID0gT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KVxuICBkYXRhLnRvZ2dsZSh0aGlzKVxufSlcblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBmb3IgKGNvbnN0IHNlbGVjdG9yIG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoT1BFTl9TRUxFQ1RPUikpIHtcbiAgICBPZmZjYW52YXMuZ2V0T3JDcmVhdGVJbnN0YW5jZShzZWxlY3Rvcikuc2hvdygpXG4gIH1cbn0pXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX1JFU0laRSwgKCkgPT4ge1xuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgU2VsZWN0b3JFbmdpbmUuZmluZCgnW2FyaWEtbW9kYWxdW2NsYXNzKj1zaG93XVtjbGFzcyo9b2ZmY2FudmFzLV0nKSkge1xuICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uICE9PSAnZml4ZWQnKSB7XG4gICAgICBPZmZjYW52YXMuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50KS5oaWRlKClcbiAgICB9XG4gIH1cbn0pXG5cbmVuYWJsZURpc21pc3NUcmlnZ2VyKE9mZmNhbnZhcylcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oT2ZmY2FudmFzKVxuXG5leHBvcnQgZGVmYXVsdCBPZmZjYW52YXNcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMi4zKTogcG9wb3Zlci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7IGRlZmluZUpRdWVyeVBsdWdpbiB9IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCdcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ3BvcG92ZXInXG5cbmNvbnN0IFNFTEVDVE9SX1RJVExFID0gJy5wb3BvdmVyLWhlYWRlcidcbmNvbnN0IFNFTEVDVE9SX0NPTlRFTlQgPSAnLnBvcG92ZXItYm9keSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgLi4uVG9vbHRpcC5EZWZhdWx0LFxuICBjb250ZW50OiAnJyxcbiAgb2Zmc2V0OiBbMCwgOF0sXG4gIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwicG9wb3ZlclwiIHJvbGU9XCJ0b29sdGlwXCI+JyArXG4gICAgJzxkaXYgY2xhc3M9XCJwb3BvdmVyLWFycm93XCI+PC9kaXY+JyArXG4gICAgJzxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyXCI+PC9oMz4nICtcbiAgICAnPGRpdiBjbGFzcz1cInBvcG92ZXItYm9keVwiPjwvZGl2PicgK1xuICAgICc8L2Rpdj4nLFxuICB0cmlnZ2VyOiAnY2xpY2snXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICAuLi5Ub29sdGlwLkRlZmF1bHRUeXBlLFxuICBjb250ZW50OiAnKG51bGx8c3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBQb3BvdmVyIGV4dGVuZHMgVG9vbHRpcCB7XG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBPdmVycmlkZXNcbiAgX2lzV2l0aENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldFRpdGxlKCkgfHwgdGhpcy5fZ2V0Q29udGVudCgpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9nZXRDb250ZW50Rm9yVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtTRUxFQ1RPUl9USVRMRV06IHRoaXMuX2dldFRpdGxlKCksXG4gICAgICBbU0VMRUNUT1JfQ09OVEVOVF06IHRoaXMuX2dldENvbnRlbnQoKVxuICAgIH1cbiAgfVxuXG4gIF9nZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcuY29udGVudClcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IFBvcG92ZXIuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFBvcG92ZXIpXG5cbmV4cG9ydCBkZWZhdWx0IFBvcG92ZXJcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMi4zKTogc2Nyb2xsc3B5LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgZGVmaW5lSlF1ZXJ5UGx1Z2luLCBnZXRFbGVtZW50LCBpc0Rpc2FibGVkLCBpc1Zpc2libGUgfSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ3Njcm9sbHNweSdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnNjcm9sbHNweSdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBFVkVOVF9BQ1RJVkFURSA9IGBhY3RpdmF0ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLID0gYGNsaWNrJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0RST1BET1dOX0lURU0gPSAnZHJvcGRvd24taXRlbSdcbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcblxuY29uc3QgU0VMRUNUT1JfREFUQV9TUFkgPSAnW2RhdGEtYnMtc3B5PVwic2Nyb2xsXCJdJ1xuY29uc3QgU0VMRUNUT1JfVEFSR0VUX0xJTktTID0gJ1tocmVmXSdcbmNvbnN0IFNFTEVDVE9SX05BVl9MSVNUX0dST1VQID0gJy5uYXYsIC5saXN0LWdyb3VwJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0xJTktTID0gJy5uYXYtbGluaydcbmNvbnN0IFNFTEVDVE9SX05BVl9JVEVNUyA9ICcubmF2LWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9MSVNUX0lURU1TID0gJy5saXN0LWdyb3VwLWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9MSU5LX0lURU1TID0gYCR7U0VMRUNUT1JfTkFWX0xJTktTfSwgJHtTRUxFQ1RPUl9OQVZfSVRFTVN9ID4gJHtTRUxFQ1RPUl9OQVZfTElOS1N9LCAke1NFTEVDVE9SX0xJU1RfSVRFTVN9YFxuY29uc3QgU0VMRUNUT1JfRFJPUERPV04gPSAnLmRyb3Bkb3duJ1xuY29uc3QgU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFID0gJy5kcm9wZG93bi10b2dnbGUnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIG9mZnNldDogbnVsbCwgLy8gVE9ETzogdjYgQGRlcHJlY2F0ZWQsIGtlZXAgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHJlYXNvbnNcbiAgcm9vdE1hcmdpbjogJzBweCAwcHggLTI1JScsXG4gIHNtb290aFNjcm9sbDogZmFsc2UsXG4gIHRhcmdldDogbnVsbCxcbiAgdGhyZXNob2xkOiBbMC4xLCAwLjUsIDFdXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBvZmZzZXQ6ICcobnVtYmVyfG51bGwpJywgLy8gVE9ETyB2NiBAZGVwcmVjYXRlZCwga2VlcCBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgcmVhc29uc1xuICByb290TWFyZ2luOiAnc3RyaW5nJyxcbiAgc21vb3RoU2Nyb2xsOiAnYm9vbGVhbicsXG4gIHRhcmdldDogJ2VsZW1lbnQnLFxuICB0aHJlc2hvbGQ6ICdhcnJheSdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgU2Nyb2xsU3B5IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIC8vIHRoaXMuX2VsZW1lbnQgaXMgdGhlIG9ic2VydmFibGVzQ29udGFpbmVyIGFuZCBjb25maWcudGFyZ2V0IHRoZSBtZW51IGxpbmtzIHdyYXBwZXJcbiAgICB0aGlzLl90YXJnZXRMaW5rcyA9IG5ldyBNYXAoKVxuICAgIHRoaXMuX29ic2VydmFibGVTZWN0aW9ucyA9IG5ldyBNYXAoKVxuICAgIHRoaXMuX3Jvb3RFbGVtZW50ID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9lbGVtZW50KS5vdmVyZmxvd1kgPT09ICd2aXNpYmxlJyA/IG51bGwgOiB0aGlzLl9lbGVtZW50XG4gICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbFxuICAgIHRoaXMuX29ic2VydmVyID0gbnVsbFxuICAgIHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YSA9IHtcbiAgICAgIHZpc2libGVFbnRyeVRvcDogMCxcbiAgICAgIHBhcmVudFNjcm9sbFRvcDogMFxuICAgIH1cbiAgICB0aGlzLnJlZnJlc2goKSAvLyBpbml0aWFsaXplXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5faW5pdGlhbGl6ZVRhcmdldHNBbmRPYnNlcnZhYmxlcygpXG4gICAgdGhpcy5fbWF5YmVFbmFibGVTbW9vdGhTY3JvbGwoKVxuXG4gICAgaWYgKHRoaXMuX29ic2VydmVyKSB7XG4gICAgICB0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSB0aGlzLl9nZXROZXdPYnNlcnZlcigpXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBzZWN0aW9uIG9mIHRoaXMuX29ic2VydmFibGVTZWN0aW9ucy52YWx1ZXMoKSkge1xuICAgICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZShzZWN0aW9uKVxuICAgIH1cbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgIC8vIFRPRE86IG9uIHY2IHRhcmdldCBzaG91bGQgYmUgZ2l2ZW4gZXhwbGljaXRseSAmIHJlbW92ZSB0aGUge3RhcmdldDogJ3NzLXRhcmdldCd9IGNhc2VcbiAgICBjb25maWcudGFyZ2V0ID0gZ2V0RWxlbWVudChjb25maWcudGFyZ2V0KSB8fCBkb2N1bWVudC5ib2R5XG5cbiAgICAvLyBUT0RPOiB2NiBPbmx5IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSByZWFzb25zLiBVc2Ugcm9vdE1hcmdpbiBvbmx5XG4gICAgY29uZmlnLnJvb3RNYXJnaW4gPSBjb25maWcub2Zmc2V0ID8gYCR7Y29uZmlnLm9mZnNldH1weCAwcHggLTMwJWAgOiBjb25maWcucm9vdE1hcmdpblxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGhyZXNob2xkID09PSAnc3RyaW5nJykge1xuICAgICAgY29uZmlnLnRocmVzaG9sZCA9IGNvbmZpZy50aHJlc2hvbGQuc3BsaXQoJywnKS5tYXAodmFsdWUgPT4gTnVtYmVyLnBhcnNlRmxvYXQodmFsdWUpKVxuICAgIH1cblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9tYXliZUVuYWJsZVNtb290aFNjcm9sbCgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5zbW9vdGhTY3JvbGwpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIHVucmVnaXN0ZXIgYW55IHByZXZpb3VzIGxpc3RlbmVyc1xuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fY29uZmlnLnRhcmdldCwgRVZFTlRfQ0xJQ0spXG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fY29uZmlnLnRhcmdldCwgRVZFTlRfQ0xJQ0ssIFNFTEVDVE9SX1RBUkdFVF9MSU5LUywgZXZlbnQgPT4ge1xuICAgICAgY29uc3Qgb2JzZXJ2YWJsZVNlY3Rpb24gPSB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMuZ2V0KGV2ZW50LnRhcmdldC5oYXNoKVxuICAgICAgaWYgKG9ic2VydmFibGVTZWN0aW9uKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3Qgcm9vdCA9IHRoaXMuX3Jvb3RFbGVtZW50IHx8IHdpbmRvd1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBvYnNlcnZhYmxlU2VjdGlvbi5vZmZzZXRUb3AgLSB0aGlzLl9lbGVtZW50Lm9mZnNldFRvcFxuICAgICAgICBpZiAocm9vdC5zY3JvbGxUbykge1xuICAgICAgICAgIHJvb3Quc2Nyb2xsVG8oeyB0b3A6IGhlaWdodCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaHJvbWUgNjAgZG9lc24ndCBzdXBwb3J0IGBzY3JvbGxUb2BcbiAgICAgICAgcm9vdC5zY3JvbGxUb3AgPSBoZWlnaHRcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgX2dldE5ld09ic2VydmVyKCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICByb290OiB0aGlzLl9yb290RWxlbWVudCxcbiAgICAgIHRocmVzaG9sZDogdGhpcy5fY29uZmlnLnRocmVzaG9sZCxcbiAgICAgIHJvb3RNYXJnaW46IHRoaXMuX2NvbmZpZy5yb290TWFyZ2luXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHRoaXMuX29ic2VydmVyQ2FsbGJhY2soZW50cmllcyksIG9wdGlvbnMpXG4gIH1cblxuICAvLyBUaGUgbG9naWMgb2Ygc2VsZWN0aW9uXG4gIF9vYnNlcnZlckNhbGxiYWNrKGVudHJpZXMpIHtcbiAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZW50cnkgPT4gdGhpcy5fdGFyZ2V0TGlua3MuZ2V0KGAjJHtlbnRyeS50YXJnZXQuaWR9YClcbiAgICBjb25zdCBhY3RpdmF0ZSA9IGVudHJ5ID0+IHtcbiAgICAgIHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS52aXNpYmxlRW50cnlUb3AgPSBlbnRyeS50YXJnZXQub2Zmc2V0VG9wXG4gICAgICB0aGlzLl9wcm9jZXNzKHRhcmdldEVsZW1lbnQoZW50cnkpKVxuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudFNjcm9sbFRvcCA9ICh0aGlzLl9yb290RWxlbWVudCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLnNjcm9sbFRvcFxuICAgIGNvbnN0IHVzZXJTY3JvbGxzRG93biA9IHBhcmVudFNjcm9sbFRvcCA+PSB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEucGFyZW50U2Nyb2xsVG9wXG4gICAgdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnBhcmVudFNjcm9sbFRvcCA9IHBhcmVudFNjcm9sbFRvcFxuXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICBpZiAoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGxcbiAgICAgICAgdGhpcy5fY2xlYXJBY3RpdmVDbGFzcyh0YXJnZXRFbGVtZW50KGVudHJ5KSlcblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBlbnRyeUlzTG93ZXJUaGFuUHJldmlvdXMgPSBlbnRyeS50YXJnZXQub2Zmc2V0VG9wID49IHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS52aXNpYmxlRW50cnlUb3BcbiAgICAgIC8vIGlmIHdlIGFyZSBzY3JvbGxpbmcgZG93biwgcGljayB0aGUgYmlnZ2VyIG9mZnNldFRvcFxuICAgICAgaWYgKHVzZXJTY3JvbGxzRG93biAmJiBlbnRyeUlzTG93ZXJUaGFuUHJldmlvdXMpIHtcbiAgICAgICAgYWN0aXZhdGUoZW50cnkpXG4gICAgICAgIC8vIGlmIHBhcmVudCBpc24ndCBzY3JvbGxlZCwgbGV0J3Mga2VlcCB0aGUgZmlyc3QgdmlzaWJsZSBpdGVtLCBicmVha2luZyB0aGUgaXRlcmF0aW9uXG4gICAgICAgIGlmICghcGFyZW50U2Nyb2xsVG9wKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyBpZiB3ZSBhcmUgc2Nyb2xsaW5nIHVwLCBwaWNrIHRoZSBzbWFsbGVzdCBvZmZzZXRUb3BcbiAgICAgIGlmICghdXNlclNjcm9sbHNEb3duICYmICFlbnRyeUlzTG93ZXJUaGFuUHJldmlvdXMpIHtcbiAgICAgICAgYWN0aXZhdGUoZW50cnkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2luaXRpYWxpemVUYXJnZXRzQW5kT2JzZXJ2YWJsZXMoKSB7XG4gICAgdGhpcy5fdGFyZ2V0TGlua3MgPSBuZXcgTWFwKClcbiAgICB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMgPSBuZXcgTWFwKClcblxuICAgIGNvbnN0IHRhcmdldExpbmtzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9UQVJHRVRfTElOS1MsIHRoaXMuX2NvbmZpZy50YXJnZXQpXG5cbiAgICBmb3IgKGNvbnN0IGFuY2hvciBvZiB0YXJnZXRMaW5rcykge1xuICAgICAgLy8gZW5zdXJlIHRoYXQgdGhlIGFuY2hvciBoYXMgYW4gaWQgYW5kIGlzIG5vdCBkaXNhYmxlZFxuICAgICAgaWYgKCFhbmNob3IuaGFzaCB8fCBpc0Rpc2FibGVkKGFuY2hvcikpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb2JzZXJ2YWJsZVNlY3Rpb24gPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKGFuY2hvci5oYXNoLCB0aGlzLl9lbGVtZW50KVxuXG4gICAgICAvLyBlbnN1cmUgdGhhdCB0aGUgb2JzZXJ2YWJsZVNlY3Rpb24gZXhpc3RzICYgaXMgdmlzaWJsZVxuICAgICAgaWYgKGlzVmlzaWJsZShvYnNlcnZhYmxlU2VjdGlvbikpIHtcbiAgICAgICAgdGhpcy5fdGFyZ2V0TGlua3Muc2V0KGFuY2hvci5oYXNoLCBhbmNob3IpXG4gICAgICAgIHRoaXMuX29ic2VydmFibGVTZWN0aW9ucy5zZXQoYW5jaG9yLmhhc2gsIG9ic2VydmFibGVTZWN0aW9uKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9wcm9jZXNzKHRhcmdldCkge1xuICAgIGlmICh0aGlzLl9hY3RpdmVUYXJnZXQgPT09IHRhcmdldCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY2xlYXJBY3RpdmVDbGFzcyh0aGlzLl9jb25maWcudGFyZ2V0KVxuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IHRhcmdldFxuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIHRoaXMuX2FjdGl2YXRlUGFyZW50cyh0YXJnZXQpXG5cbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9BQ1RJVkFURSwgeyByZWxhdGVkVGFyZ2V0OiB0YXJnZXQgfSlcbiAgfVxuXG4gIF9hY3RpdmF0ZVBhcmVudHModGFyZ2V0KSB7XG4gICAgLy8gQWN0aXZhdGUgZHJvcGRvd24gcGFyZW50c1xuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUERPV05fSVRFTSkpIHtcbiAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFLCB0YXJnZXQuY2xvc2VzdChTRUxFQ1RPUl9EUk9QRE9XTikpXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBsaXN0R3JvdXAgb2YgU2VsZWN0b3JFbmdpbmUucGFyZW50cyh0YXJnZXQsIFNFTEVDVE9SX05BVl9MSVNUX0dST1VQKSkge1xuICAgICAgLy8gU2V0IHRyaWdnZXJlZCBsaW5rcyBwYXJlbnRzIGFzIGFjdGl2ZVxuICAgICAgLy8gV2l0aCBib3RoIDx1bD4gYW5kIDxuYXY+IG1hcmt1cCBhIHBhcmVudCBpcyB0aGUgcHJldmlvdXMgc2libGluZyBvZiBhbnkgbmF2IGFuY2VzdG9yXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgU2VsZWN0b3JFbmdpbmUucHJldihsaXN0R3JvdXAsIFNFTEVDVE9SX0xJTktfSVRFTVMpKSB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfY2xlYXJBY3RpdmVDbGFzcyhwYXJlbnQpIHtcbiAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcblxuICAgIGNvbnN0IGFjdGl2ZU5vZGVzID0gU2VsZWN0b3JFbmdpbmUuZmluZChgJHtTRUxFQ1RPUl9UQVJHRVRfTElOS1N9LiR7Q0xBU1NfTkFNRV9BQ1RJVkV9YCwgcGFyZW50KVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBhY3RpdmVOb2Rlcykge1xuICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IFNjcm9sbFNweS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10oKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgZm9yIChjb25zdCBzcHkgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1NQWSkpIHtcbiAgICBTY3JvbGxTcHkuZ2V0T3JDcmVhdGVJbnN0YW5jZShzcHkpXG4gIH1cbn0pXG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFNjcm9sbFNweSlcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsU3B5XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjIuMyk6IHRhYi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7IGRlZmluZUpRdWVyeVBsdWdpbiwgZ2V0RWxlbWVudEZyb21TZWxlY3RvciwgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQsIGlzRGlzYWJsZWQgfSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ3RhYidcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnRhYidcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5cbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTiA9IGBrZXlkb3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBBUlJPV19MRUZUX0tFWSA9ICdBcnJvd0xlZnQnXG5jb25zdCBBUlJPV19SSUdIVF9LRVkgPSAnQXJyb3dSaWdodCdcbmNvbnN0IEFSUk9XX1VQX0tFWSA9ICdBcnJvd1VwJ1xuY29uc3QgQVJST1dfRE9XTl9LRVkgPSAnQXJyb3dEb3duJ1xuXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfRFJPUERPV04gPSAnZHJvcGRvd24nXG5cbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9ICcuZHJvcGRvd24tdG9nZ2xlJ1xuY29uc3QgU0VMRUNUT1JfRFJPUERPV05fTUVOVSA9ICcuZHJvcGRvd24tbWVudSdcbmNvbnN0IE5PVF9TRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUgPSAnOm5vdCguZHJvcGRvd24tdG9nZ2xlKSdcblxuY29uc3QgU0VMRUNUT1JfVEFCX1BBTkVMID0gJy5saXN0LWdyb3VwLCAubmF2LCBbcm9sZT1cInRhYmxpc3RcIl0nXG5jb25zdCBTRUxFQ1RPUl9PVVRFUiA9ICcubmF2LWl0ZW0sIC5saXN0LWdyb3VwLWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9JTk5FUiA9IGAubmF2LWxpbmske05PVF9TRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEV9LCAubGlzdC1ncm91cC1pdGVtJHtOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFfSwgW3JvbGU9XCJ0YWJcIl0ke05PVF9TRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEV9YFxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwidGFiXCJdLCBbZGF0YS1icy10b2dnbGU9XCJwaWxsXCJdLCBbZGF0YS1icy10b2dnbGU9XCJsaXN0XCJdJyAvLyB0b2RvOnY2OiBjb3VsZCBiZSBvbmx5IGB0YWJgXG5jb25zdCBTRUxFQ1RPUl9JTk5FUl9FTEVNID0gYCR7U0VMRUNUT1JfSU5ORVJ9LCAke1NFTEVDVE9SX0RBVEFfVE9HR0xFfWBcblxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEVfQUNUSVZFID0gYC4ke0NMQVNTX05BTUVfQUNUSVZFfVtkYXRhLWJzLXRvZ2dsZT1cInRhYlwiXSwgLiR7Q0xBU1NfTkFNRV9BQ1RJVkV9W2RhdGEtYnMtdG9nZ2xlPVwicGlsbFwiXSwgLiR7Q0xBU1NfTkFNRV9BQ1RJVkV9W2RhdGEtYnMtdG9nZ2xlPVwibGlzdFwiXWBcblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgVGFiIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICBzdXBlcihlbGVtZW50KVxuICAgIHRoaXMuX3BhcmVudCA9IHRoaXMuX2VsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9UQUJfUEFORUwpXG5cbiAgICBpZiAoIXRoaXMuX3BhcmVudCkge1xuICAgICAgcmV0dXJuXG4gICAgICAvLyB0b2RvOiBzaG91bGQgVGhyb3cgZXhjZXB0aW9uIG9uIHY2XG4gICAgICAvLyB0aHJvdyBuZXcgVHlwZUVycm9yKGAke2VsZW1lbnQub3V0ZXJIVE1MfSBoYXMgbm90IGEgdmFsaWQgcGFyZW50ICR7U0VMRUNUT1JfSU5ORVJfRUxFTX1gKVxuICAgIH1cblxuICAgIC8vIFNldCB1cCBpbml0aWFsIGFyaWEgYXR0cmlidXRlc1xuICAgIHRoaXMuX3NldEluaXRpYWxBdHRyaWJ1dGVzKHRoaXMuX3BhcmVudCwgdGhpcy5fZ2V0Q2hpbGRyZW4oKSlcblxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOLCBldmVudCA9PiB0aGlzLl9rZXlkb3duKGV2ZW50KSlcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgc2hvdygpIHsgLy8gU2hvd3MgdGhpcyBlbGVtIGFuZCBkZWFjdGl2YXRlIHRoZSBhY3RpdmUgc2libGluZyBpZiBleGlzdHNcbiAgICBjb25zdCBpbm5lckVsZW0gPSB0aGlzLl9lbGVtZW50XG4gICAgaWYgKHRoaXMuX2VsZW1Jc0FjdGl2ZShpbm5lckVsZW0pKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBTZWFyY2ggZm9yIGFjdGl2ZSB0YWIgb24gc2FtZSBwYXJlbnQgdG8gZGVhY3RpdmF0ZSBpdFxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuX2dldEFjdGl2ZUVsZW0oKVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gYWN0aXZlID9cbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKGFjdGl2ZSwgRVZFTlRfSElERSwgeyByZWxhdGVkVGFyZ2V0OiBpbm5lckVsZW0gfSkgOlxuICAgICAgbnVsbFxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIoaW5uZXJFbGVtLCBFVkVOVF9TSE9XLCB7IHJlbGF0ZWRUYXJnZXQ6IGFjdGl2ZSB9KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkIHx8IChoaWRlRXZlbnQgJiYgaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9kZWFjdGl2YXRlKGFjdGl2ZSwgaW5uZXJFbGVtKVxuICAgIHRoaXMuX2FjdGl2YXRlKGlubmVyRWxlbSwgYWN0aXZlKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfYWN0aXZhdGUoZWxlbWVudCwgcmVsYXRlZEVsZW0pIHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcblxuICAgIHRoaXMuX2FjdGl2YXRlKGdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCkpIC8vIFNlYXJjaCBhbmQgYWN0aXZhdGUvc2hvdyB0aGUgcHJvcGVyIHNlY3Rpb25cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykgIT09ICd0YWInKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKVxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCB0cnVlKVxuICAgICAgdGhpcy5fdG9nZ2xlRHJvcERvd24oZWxlbWVudCwgdHJ1ZSlcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKGVsZW1lbnQsIEVWRU5UX1NIT1dOLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHJlbGF0ZWRFbGVtXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIGVsZW1lbnQsIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpXG4gIH1cblxuICBfZGVhY3RpdmF0ZShlbGVtZW50LCByZWxhdGVkRWxlbSkge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIGVsZW1lbnQuYmx1cigpXG5cbiAgICB0aGlzLl9kZWFjdGl2YXRlKGdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCkpIC8vIFNlYXJjaCBhbmQgZGVhY3RpdmF0ZSB0aGUgc2hvd24gc2VjdGlvbiB0b29cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykgIT09ICd0YWInKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIGZhbHNlKVxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJylcbiAgICAgIHRoaXMuX3RvZ2dsZURyb3BEb3duKGVsZW1lbnQsIGZhbHNlKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIoZWxlbWVudCwgRVZFTlRfSElEREVOLCB7IHJlbGF0ZWRUYXJnZXQ6IHJlbGF0ZWRFbGVtIH0pXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgZWxlbWVudCwgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKSlcbiAgfVxuXG4gIF9rZXlkb3duKGV2ZW50KSB7XG4gICAgaWYgKCEoW0FSUk9XX0xFRlRfS0VZLCBBUlJPV19SSUdIVF9LRVksIEFSUk9XX1VQX0tFWSwgQVJST1dfRE9XTl9LRVldLmluY2x1ZGVzKGV2ZW50LmtleSkpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKS8vIHN0b3BQcm9wYWdhdGlvbi9wcmV2ZW50RGVmYXVsdCBib3RoIGFkZGVkIHRvIHN1cHBvcnQgdXAvZG93biBrZXlzIHdpdGhvdXQgc2Nyb2xsaW5nIHRoZSBwYWdlXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IGlzTmV4dCA9IFtBUlJPV19SSUdIVF9LRVksIEFSUk9XX0RPV05fS0VZXS5pbmNsdWRlcyhldmVudC5rZXkpXG4gICAgY29uc3QgbmV4dEFjdGl2ZUVsZW1lbnQgPSBnZXROZXh0QWN0aXZlRWxlbWVudCh0aGlzLl9nZXRDaGlsZHJlbigpLmZpbHRlcihlbGVtZW50ID0+ICFpc0Rpc2FibGVkKGVsZW1lbnQpKSwgZXZlbnQudGFyZ2V0LCBpc05leHQsIHRydWUpXG5cbiAgICBpZiAobmV4dEFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgIG5leHRBY3RpdmVFbGVtZW50LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KVxuICAgICAgVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UobmV4dEFjdGl2ZUVsZW1lbnQpLnNob3coKVxuICAgIH1cbiAgfVxuXG4gIF9nZXRDaGlsZHJlbigpIHsgLy8gY29sbGVjdGlvbiBvZiBpbm5lciBlbGVtZW50c1xuICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lOTkVSX0VMRU0sIHRoaXMuX3BhcmVudClcbiAgfVxuXG4gIF9nZXRBY3RpdmVFbGVtKCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRDaGlsZHJlbigpLmZpbmQoY2hpbGQgPT4gdGhpcy5fZWxlbUlzQWN0aXZlKGNoaWxkKSkgfHwgbnVsbFxuICB9XG5cbiAgX3NldEluaXRpYWxBdHRyaWJ1dGVzKHBhcmVudCwgY2hpbGRyZW4pIHtcbiAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhwYXJlbnQsICdyb2xlJywgJ3RhYmxpc3QnKVxuXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgdGhpcy5fc2V0SW5pdGlhbEF0dHJpYnV0ZXNPbkNoaWxkKGNoaWxkKVxuICAgIH1cbiAgfVxuXG4gIF9zZXRJbml0aWFsQXR0cmlidXRlc09uQ2hpbGQoY2hpbGQpIHtcbiAgICBjaGlsZCA9IHRoaXMuX2dldElubmVyRWxlbWVudChjaGlsZClcbiAgICBjb25zdCBpc0FjdGl2ZSA9IHRoaXMuX2VsZW1Jc0FjdGl2ZShjaGlsZClcbiAgICBjb25zdCBvdXRlckVsZW0gPSB0aGlzLl9nZXRPdXRlckVsZW1lbnQoY2hpbGQpXG4gICAgY2hpbGQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgaXNBY3RpdmUpXG5cbiAgICBpZiAob3V0ZXJFbGVtICE9PSBjaGlsZCkge1xuICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMob3V0ZXJFbGVtLCAncm9sZScsICdwcmVzZW50YXRpb24nKVxuICAgIH1cblxuICAgIGlmICghaXNBY3RpdmUpIHtcbiAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKVxuICAgIH1cblxuICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKGNoaWxkLCAncm9sZScsICd0YWInKVxuXG4gICAgLy8gc2V0IGF0dHJpYnV0ZXMgdG8gdGhlIHJlbGF0ZWQgcGFuZWwgdG9vXG4gICAgdGhpcy5fc2V0SW5pdGlhbEF0dHJpYnV0ZXNPblRhcmdldFBhbmVsKGNoaWxkKVxuICB9XG5cbiAgX3NldEluaXRpYWxBdHRyaWJ1dGVzT25UYXJnZXRQYW5lbChjaGlsZCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IoY2hpbGQpXG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHModGFyZ2V0LCAncm9sZScsICd0YWJwYW5lbCcpXG5cbiAgICBpZiAoY2hpbGQuaWQpIHtcbiAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKHRhcmdldCwgJ2FyaWEtbGFiZWxsZWRieScsIGAjJHtjaGlsZC5pZH1gKVxuICAgIH1cbiAgfVxuXG4gIF90b2dnbGVEcm9wRG93bihlbGVtZW50LCBvcGVuKSB7XG4gICAgY29uc3Qgb3V0ZXJFbGVtID0gdGhpcy5fZ2V0T3V0ZXJFbGVtZW50KGVsZW1lbnQpXG4gICAgaWYgKCFvdXRlckVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX0RST1BET1dOKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlID0gKHNlbGVjdG9yLCBjbGFzc05hbWUpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKHNlbGVjdG9yLCBvdXRlckVsZW0pXG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lLCBvcGVuKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZShTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUsIENMQVNTX05BTUVfQUNUSVZFKVxuICAgIHRvZ2dsZShTRUxFQ1RPUl9EUk9QRE9XTl9NRU5VLCBDTEFTU19OQU1FX1NIT1cpXG4gICAgb3V0ZXJFbGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIG9wZW4pXG4gIH1cblxuICBfc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMoZWxlbWVudCwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoYXR0cmlidXRlKSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSlcbiAgICB9XG4gIH1cblxuICBfZWxlbUlzQWN0aXZlKGVsZW0pIHtcbiAgICByZXR1cm4gZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gIH1cblxuICAvLyBUcnkgdG8gZ2V0IHRoZSBpbm5lciBlbGVtZW50ICh1c3VhbGx5IHRoZSAubmF2LWxpbmspXG4gIF9nZXRJbm5lckVsZW1lbnQoZWxlbSkge1xuICAgIHJldHVybiBlbGVtLm1hdGNoZXMoU0VMRUNUT1JfSU5ORVJfRUxFTSkgPyBlbGVtIDogU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9JTk5FUl9FTEVNLCBlbGVtKVxuICB9XG5cbiAgLy8gVHJ5IHRvIGdldCB0aGUgb3V0ZXIgZWxlbWVudCAodXN1YWxseSB0aGUgLm5hdi1pdGVtKVxuICBfZ2V0T3V0ZXJFbGVtZW50KGVsZW0pIHtcbiAgICByZXR1cm4gZWxlbS5jbG9zZXN0KFNFTEVDVE9SX09VVEVSKSB8fCBlbGVtXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgaWYgKGlzRGlzYWJsZWQodGhpcykpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIFRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpLnNob3coKVxufSlcblxuLyoqXG4gKiBJbml0aWFsaXplIG9uIGZvY3VzXG4gKi9cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgZm9yIChjb25zdCBlbGVtZW50IG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9UT0dHTEVfQUNUSVZFKSkge1xuICAgIFRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQpXG4gIH1cbn0pXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihUYWIpXG5cbmV4cG9ydCBkZWZhdWx0IFRhYlxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4yLjMpOiB0b2FzdC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7IGRlZmluZUpRdWVyeVBsdWdpbiwgcmVmbG93IH0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcbmltcG9ydCB7IGVuYWJsZURpc21pc3NUcmlnZ2VyIH0gZnJvbSAnLi91dGlsL2NvbXBvbmVudC1mdW5jdGlvbnMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICd0b2FzdCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnRvYXN0J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcblxuY29uc3QgRVZFTlRfTU9VU0VPVkVSID0gYG1vdXNlb3ZlciR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFT1VUID0gYG1vdXNlb3V0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRk9DVVNJTiA9IGBmb2N1c2luJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRk9DVVNPVVQgPSBgZm9jdXNvdXQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9ISURFID0gJ2hpZGUnIC8vIEBkZXByZWNhdGVkIC0ga2VwdCBoZXJlIG9ubHkgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfU0hPV0lORyA9ICdzaG93aW5nJ1xuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYW5pbWF0aW9uOiAnYm9vbGVhbicsXG4gIGF1dG9oaWRlOiAnYm9vbGVhbicsXG4gIGRlbGF5OiAnbnVtYmVyJ1xufVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhbmltYXRpb246IHRydWUsXG4gIGF1dG9oaWRlOiB0cnVlLFxuICBkZWxheTogNTAwMFxufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBUb2FzdCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjb25maWcpXG5cbiAgICB0aGlzLl90aW1lb3V0ID0gbnVsbFxuICAgIHRoaXMuX2hhc01vdXNlSW50ZXJhY3Rpb24gPSBmYWxzZVxuICAgIHRoaXMuX2hhc0tleWJvYXJkSW50ZXJhY3Rpb24gPSBmYWxzZVxuICAgIHRoaXMuX3NldExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHNob3coKSB7XG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVylcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY2xlYXJUaW1lb3V0KClcblxuICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFKVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPV0lORylcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOKVxuXG4gICAgICB0aGlzLl9tYXliZVNjaGVkdWxlSGlkZSgpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfSElERSkgLy8gQGRlcHJlY2F0ZWRcbiAgICByZWZsb3codGhpcy5fZWxlbWVudClcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XLCBDTEFTU19OQU1FX1NIT1dJTkcpXG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0aGlzLl9jb25maWcuYW5pbWF0aW9uKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKVxuXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0hJREUpIC8vIEBkZXByZWNhdGVkXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XSU5HLCBDTEFTU19OQU1FX1NIT1cpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPV0lORylcbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0aGlzLl9jb25maWcuYW5pbWF0aW9uKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICB0aGlzLl9jbGVhclRpbWVvdXQoKVxuXG4gICAgaWYgKHRoaXMuaXNTaG93bigpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIH1cblxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgaXNTaG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9tYXliZVNjaGVkdWxlSGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5hdXRvaGlkZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2hhc01vdXNlSW50ZXJhY3Rpb24gfHwgdGhpcy5faGFzS2V5Ym9hcmRJbnRlcmFjdGlvbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5oaWRlKClcbiAgICB9LCB0aGlzLl9jb25maWcuZGVsYXkpXG4gIH1cblxuICBfb25JbnRlcmFjdGlvbihldmVudCwgaXNJbnRlcmFjdGluZykge1xuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgY2FzZSAnbW91c2VvdmVyJzpcbiAgICAgIGNhc2UgJ21vdXNlb3V0Jzoge1xuICAgICAgICB0aGlzLl9oYXNNb3VzZUludGVyYWN0aW9uID0gaXNJbnRlcmFjdGluZ1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjYXNlICdmb2N1c2luJzpcbiAgICAgIGNhc2UgJ2ZvY3Vzb3V0Jzoge1xuICAgICAgICB0aGlzLl9oYXNLZXlib2FyZEludGVyYWN0aW9uID0gaXNJbnRlcmFjdGluZ1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzSW50ZXJhY3RpbmcpIHtcbiAgICAgIHRoaXMuX2NsZWFyVGltZW91dCgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBuZXh0RWxlbWVudCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXRcbiAgICBpZiAodGhpcy5fZWxlbWVudCA9PT0gbmV4dEVsZW1lbnQgfHwgdGhpcy5fZWxlbWVudC5jb250YWlucyhuZXh0RWxlbWVudCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX21heWJlU2NoZWR1bGVIaWRlKClcbiAgfVxuXG4gIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFT1ZFUiwgZXZlbnQgPT4gdGhpcy5fb25JbnRlcmFjdGlvbihldmVudCwgdHJ1ZSkpXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFT1VULCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCBmYWxzZSkpXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0ZPQ1VTSU4sIGV2ZW50ID0+IHRoaXMuX29uSW50ZXJhY3Rpb24oZXZlbnQsIHRydWUpKVxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9GT0NVU09VVCwgZXZlbnQgPT4gdGhpcy5fb25JbnRlcmFjdGlvbihldmVudCwgZmFsc2UpKVxuICB9XG5cbiAgX2NsZWFyVGltZW91dCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcbiAgICB0aGlzLl90aW1lb3V0ID0gbnVsbFxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gVG9hc3QuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10odGhpcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5lbmFibGVEaXNtaXNzVHJpZ2dlcihUb2FzdClcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oVG9hc3QpXG5cbmV4cG9ydCBkZWZhdWx0IFRvYXN0XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjIuMyk6IHRvb2x0aXAuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgKiBhcyBQb3BwZXIgZnJvbSAnQHBvcHBlcmpzL2NvcmUnXG5pbXBvcnQgeyBkZWZpbmVKUXVlcnlQbHVnaW4sIGZpbmRTaGFkb3dSb290LCBnZXRFbGVtZW50LCBnZXRVSUQsIGlzUlRMLCBub29wIH0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IHsgRGVmYXVsdEFsbG93bGlzdCB9IGZyb20gJy4vdXRpbC9zYW5pdGl6ZXInXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuaW1wb3J0IFRlbXBsYXRlRmFjdG9yeSBmcm9tICcuL3V0aWwvdGVtcGxhdGUtZmFjdG9yeSdcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ3Rvb2x0aXAnXG5jb25zdCBESVNBTExPV0VEX0FUVFJJQlVURVMgPSBuZXcgU2V0KFsnc2FuaXRpemUnLCAnYWxsb3dMaXN0JywgJ3Nhbml0aXplRm4nXSlcblxuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX01PREFMID0gJ21vZGFsJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5cbmNvbnN0IFNFTEVDVE9SX1RPT0xUSVBfSU5ORVIgPSAnLnRvb2x0aXAtaW5uZXInXG5jb25zdCBTRUxFQ1RPUl9NT0RBTCA9IGAuJHtDTEFTU19OQU1FX01PREFMfWBcblxuY29uc3QgRVZFTlRfTU9EQUxfSElERSA9ICdoaWRlLmJzLm1vZGFsJ1xuXG5jb25zdCBUUklHR0VSX0hPVkVSID0gJ2hvdmVyJ1xuY29uc3QgVFJJR0dFUl9GT0NVUyA9ICdmb2N1cydcbmNvbnN0IFRSSUdHRVJfQ0xJQ0sgPSAnY2xpY2snXG5jb25zdCBUUklHR0VSX01BTlVBTCA9ICdtYW51YWwnXG5cbmNvbnN0IEVWRU5UX0hJREUgPSAnaGlkZSdcbmNvbnN0IEVWRU5UX0hJRERFTiA9ICdoaWRkZW4nXG5jb25zdCBFVkVOVF9TSE9XID0gJ3Nob3cnXG5jb25zdCBFVkVOVF9TSE9XTiA9ICdzaG93bidcbmNvbnN0IEVWRU5UX0lOU0VSVEVEID0gJ2luc2VydGVkJ1xuY29uc3QgRVZFTlRfQ0xJQ0sgPSAnY2xpY2snXG5jb25zdCBFVkVOVF9GT0NVU0lOID0gJ2ZvY3VzaW4nXG5jb25zdCBFVkVOVF9GT0NVU09VVCA9ICdmb2N1c291dCdcbmNvbnN0IEVWRU5UX01PVVNFRU5URVIgPSAnbW91c2VlbnRlcidcbmNvbnN0IEVWRU5UX01PVVNFTEVBVkUgPSAnbW91c2VsZWF2ZSdcblxuY29uc3QgQXR0YWNobWVudE1hcCA9IHtcbiAgQVVUTzogJ2F1dG8nLFxuICBUT1A6ICd0b3AnLFxuICBSSUdIVDogaXNSVEwoKSA/ICdsZWZ0JyA6ICdyaWdodCcsXG4gIEJPVFRPTTogJ2JvdHRvbScsXG4gIExFRlQ6IGlzUlRMKCkgPyAncmlnaHQnIDogJ2xlZnQnXG59XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGFsbG93TGlzdDogRGVmYXVsdEFsbG93bGlzdCxcbiAgYW5pbWF0aW9uOiB0cnVlLFxuICBib3VuZGFyeTogJ2NsaXBwaW5nUGFyZW50cycsXG4gIGNvbnRhaW5lcjogZmFsc2UsXG4gIGN1c3RvbUNsYXNzOiAnJyxcbiAgZGVsYXk6IDAsXG4gIGZhbGxiYWNrUGxhY2VtZW50czogWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXSxcbiAgaHRtbDogZmFsc2UsXG4gIG9mZnNldDogWzAsIDBdLFxuICBwbGFjZW1lbnQ6ICd0b3AnLFxuICBwb3BwZXJDb25maWc6IG51bGwsXG4gIHNhbml0aXplOiB0cnVlLFxuICBzYW5pdGl6ZUZuOiBudWxsLFxuICBzZWxlY3RvcjogZmFsc2UsXG4gIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPicgK1xuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+JyArXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICc8L2Rpdj4nLFxuICB0aXRsZTogJycsXG4gIHRyaWdnZXI6ICdob3ZlciBmb2N1cydcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGFsbG93TGlzdDogJ29iamVjdCcsXG4gIGFuaW1hdGlvbjogJ2Jvb2xlYW4nLFxuICBib3VuZGFyeTogJyhzdHJpbmd8ZWxlbWVudCknLFxuICBjb250YWluZXI6ICcoc3RyaW5nfGVsZW1lbnR8Ym9vbGVhbiknLFxuICBjdXN0b21DbGFzczogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgZGVsYXk6ICcobnVtYmVyfG9iamVjdCknLFxuICBmYWxsYmFja1BsYWNlbWVudHM6ICdhcnJheScsXG4gIGh0bWw6ICdib29sZWFuJyxcbiAgb2Zmc2V0OiAnKGFycmF5fHN0cmluZ3xmdW5jdGlvbiknLFxuICBwbGFjZW1lbnQ6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gIHBvcHBlckNvbmZpZzogJyhudWxsfG9iamVjdHxmdW5jdGlvbiknLFxuICBzYW5pdGl6ZTogJ2Jvb2xlYW4nLFxuICBzYW5pdGl6ZUZuOiAnKG51bGx8ZnVuY3Rpb24pJyxcbiAgc2VsZWN0b3I6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgdGVtcGxhdGU6ICdzdHJpbmcnLFxuICB0aXRsZTogJyhzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbiknLFxuICB0cmlnZ2VyOiAnc3RyaW5nJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBUb29sdGlwIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyB0b29sdGlwcyByZXF1aXJlIFBvcHBlciAoaHR0cHM6Ly9wb3BwZXIuanMub3JnKScpXG4gICAgfVxuXG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWVcbiAgICB0aGlzLl90aW1lb3V0ID0gMFxuICAgIHRoaXMuX2lzSG92ZXJlZCA9IG51bGxcbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyID0ge31cbiAgICB0aGlzLl9wb3BwZXIgPSBudWxsXG4gICAgdGhpcy5fdGVtcGxhdGVGYWN0b3J5ID0gbnVsbFxuICAgIHRoaXMuX25ld0NvbnRlbnQgPSBudWxsXG5cbiAgICAvLyBQcm90ZWN0ZWRcbiAgICB0aGlzLnRpcCA9IG51bGxcblxuICAgIHRoaXMuX3NldExpc3RlbmVycygpXG5cbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5zZWxlY3Rvcikge1xuICAgICAgdGhpcy5fZml4VGl0bGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWVcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gZmFsc2VcbiAgfVxuXG4gIHRvZ2dsZUVuYWJsZWQoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gIXRoaXMuX2lzRW5hYmxlZFxuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICghdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyLmNsaWNrID0gIXRoaXMuX2FjdGl2ZVRyaWdnZXIuY2xpY2tcbiAgICBpZiAodGhpcy5faXNTaG93bigpKSB7XG4gICAgICB0aGlzLl9sZWF2ZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9lbnRlcigpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfTU9EQUwpLCBFVkVOVF9NT0RBTF9ISURFLCB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyKVxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLW9yaWdpbmFsLXRpdGxlJykpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCd0aXRsZScsIHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLW9yaWdpbmFsLXRpdGxlJykpXG4gICAgfVxuXG4gICAgdGhpcy5fZGlzcG9zZVBvcHBlcigpXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgdXNlIHNob3cgb24gdmlzaWJsZSBlbGVtZW50cycpXG4gICAgfVxuXG4gICAgaWYgKCEodGhpcy5faXNXaXRoQ29udGVudCgpICYmIHRoaXMuX2lzRW5hYmxlZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX1NIT1cpKVxuICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBmaW5kU2hhZG93Um9vdCh0aGlzLl9lbGVtZW50KVxuICAgIGNvbnN0IGlzSW5UaGVEb20gPSAoc2hhZG93Um9vdCB8fCB0aGlzLl9lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5jb250YWlucyh0aGlzLl9lbGVtZW50KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkIHx8ICFpc0luVGhlRG9tKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyB0b2RvIHY2IHJlbW92ZSB0aGlzIE9SIG1ha2UgaXQgb3B0aW9uYWxcbiAgICB0aGlzLl9kaXNwb3NlUG9wcGVyKClcblxuICAgIGNvbnN0IHRpcCA9IHRoaXMuX2dldFRpcEVsZW1lbnQoKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCB0aXAuZ2V0QXR0cmlidXRlKCdpZCcpKVxuXG4gICAgY29uc3QgeyBjb250YWluZXIgfSA9IHRoaXMuX2NvbmZpZ1xuXG4gICAgaWYgKCF0aGlzLl9lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zKHRoaXMudGlwKSkge1xuICAgICAgY29udGFpbmVyLmFwcGVuZCh0aXApXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9JTlNFUlRFRCkpXG4gICAgfVxuXG4gICAgdGhpcy5fcG9wcGVyID0gdGhpcy5fY3JlYXRlUG9wcGVyKHRpcClcblxuICAgIHRpcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKSkge1xuICAgICAgICBFdmVudEhhbmRsZXIub24oZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9TSE9XTikpXG5cbiAgICAgIGlmICh0aGlzLl9pc0hvdmVyZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuX2xlYXZlKClcbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNIb3ZlcmVkID0gZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLnRpcCwgdGhpcy5faXNBbmltYXRlZCgpKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfSElERSkpXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0aXAgPSB0aGlzLl9nZXRUaXBFbGVtZW50KClcbiAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKSkge1xuICAgICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVFJJR0dFUl9DTElDS10gPSBmYWxzZVxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVFJJR0dFUl9GT0NVU10gPSBmYWxzZVxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVFJJR0dFUl9IT1ZFUl0gPSBmYWxzZVxuICAgIHRoaXMuX2lzSG92ZXJlZCA9IG51bGwgLy8gaXQgaXMgYSB0cmljayB0byBzdXBwb3J0IG1hbnVhbCB0cmlnZ2VyaW5nXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5faXNIb3ZlcmVkKSB7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VQb3BwZXIoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9ISURERU4pKVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMudGlwLCB0aGlzLl9pc0FuaW1hdGVkKCkpXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLnVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJvdGVjdGVkXG4gIF9pc1dpdGhDb250ZW50KCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuX2dldFRpdGxlKCkpXG4gIH1cblxuICBfZ2V0VGlwRWxlbWVudCgpIHtcbiAgICBpZiAoIXRoaXMudGlwKSB7XG4gICAgICB0aGlzLnRpcCA9IHRoaXMuX2NyZWF0ZVRpcEVsZW1lbnQodGhpcy5fbmV3Q29udGVudCB8fCB0aGlzLl9nZXRDb250ZW50Rm9yVGVtcGxhdGUoKSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy50aXBcbiAgfVxuXG4gIF9jcmVhdGVUaXBFbGVtZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCB0aXAgPSB0aGlzLl9nZXRUZW1wbGF0ZUZhY3RvcnkoY29udGVudCkudG9IdG1sKClcblxuICAgIC8vIHRvZG86IHJlbW92ZSB0aGlzIGNoZWNrIG9uIHY2XG4gICAgaWYgKCF0aXApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgdGlwLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9GQURFLCBDTEFTU19OQU1FX1NIT1cpXG4gICAgLy8gdG9kbzogb24gdjYgdGhlIGZvbGxvd2luZyBjYW4gYmUgYWNoaWV2ZWQgd2l0aCBDU1Mgb25seVxuICAgIHRpcC5jbGFzc0xpc3QuYWRkKGBicy0ke3RoaXMuY29uc3RydWN0b3IuTkFNRX0tYXV0b2ApXG5cbiAgICBjb25zdCB0aXBJZCA9IGdldFVJRCh0aGlzLmNvbnN0cnVjdG9yLk5BTUUpLnRvU3RyaW5nKClcblxuICAgIHRpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGlwSWQpXG5cbiAgICBpZiAodGhpcy5faXNBbmltYXRlZCgpKSB7XG4gICAgICB0aXAuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRpcFxuICB9XG5cbiAgc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy5fbmV3Q29udGVudCA9IGNvbnRlbnRcbiAgICBpZiAodGhpcy5faXNTaG93bigpKSB7XG4gICAgICB0aGlzLl9kaXNwb3NlUG9wcGVyKClcbiAgICAgIHRoaXMuc2hvdygpXG4gICAgfVxuICB9XG5cbiAgX2dldFRlbXBsYXRlRmFjdG9yeShjb250ZW50KSB7XG4gICAgaWYgKHRoaXMuX3RlbXBsYXRlRmFjdG9yeSkge1xuICAgICAgdGhpcy5fdGVtcGxhdGVGYWN0b3J5LmNoYW5nZUNvbnRlbnQoY29udGVudClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdGVtcGxhdGVGYWN0b3J5ID0gbmV3IFRlbXBsYXRlRmFjdG9yeSh7XG4gICAgICAgIC4uLnRoaXMuX2NvbmZpZyxcbiAgICAgICAgLy8gdGhlIGBjb250ZW50YCB2YXIgaGFzIHRvIGJlIGFmdGVyIGB0aGlzLl9jb25maWdgXG4gICAgICAgIC8vIHRvIG92ZXJyaWRlIGNvbmZpZy5jb250ZW50IGluIGNhc2Ugb2YgcG9wb3ZlclxuICAgICAgICBjb250ZW50LFxuICAgICAgICBleHRyYUNsYXNzOiB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcuY3VzdG9tQ2xhc3MpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZUZhY3RvcnlcbiAgfVxuXG4gIF9nZXRDb250ZW50Rm9yVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtTRUxFQ1RPUl9UT09MVElQX0lOTkVSXTogdGhpcy5fZ2V0VGl0bGUoKVxuICAgIH1cbiAgfVxuXG4gIF9nZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24odGhpcy5fY29uZmlnLnRpdGxlKSB8fCB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5nZXRPckNyZWF0ZUluc3RhbmNlKGV2ZW50LmRlbGVnYXRlVGFyZ2V0LCB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpKVxuICB9XG5cbiAgX2lzQW5pbWF0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5hbmltYXRpb24gfHwgKHRoaXMudGlwICYmIHRoaXMudGlwLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpKVxuICB9XG5cbiAgX2lzU2hvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMudGlwICYmIHRoaXMudGlwLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpXG4gIH1cblxuICBfY3JlYXRlUG9wcGVyKHRpcCkge1xuICAgIGNvbnN0IHBsYWNlbWVudCA9IHR5cGVvZiB0aGlzLl9jb25maWcucGxhY2VtZW50ID09PSAnZnVuY3Rpb24nID9cbiAgICAgIHRoaXMuX2NvbmZpZy5wbGFjZW1lbnQuY2FsbCh0aGlzLCB0aXAsIHRoaXMuX2VsZW1lbnQpIDpcbiAgICAgIHRoaXMuX2NvbmZpZy5wbGFjZW1lbnRcbiAgICBjb25zdCBhdHRhY2htZW50ID0gQXR0YWNobWVudE1hcFtwbGFjZW1lbnQudG9VcHBlckNhc2UoKV1cbiAgICByZXR1cm4gUG9wcGVyLmNyZWF0ZVBvcHBlcih0aGlzLl9lbGVtZW50LCB0aXAsIHRoaXMuX2dldFBvcHBlckNvbmZpZyhhdHRhY2htZW50KSlcbiAgfVxuXG4gIF9nZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgeyBvZmZzZXQgfSA9IHRoaXMuX2NvbmZpZ1xuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gb2Zmc2V0LnNwbGl0KCcsJykubWFwKHZhbHVlID0+IE51bWJlci5wYXJzZUludCh2YWx1ZSwgMTApKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gcG9wcGVyRGF0YSA9PiBvZmZzZXQocG9wcGVyRGF0YSwgdGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBfcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbicgPyBhcmcuY2FsbCh0aGlzLl9lbGVtZW50KSA6IGFyZ1xuICB9XG5cbiAgX2dldFBvcHBlckNvbmZpZyhhdHRhY2htZW50KSB7XG4gICAgY29uc3QgZGVmYXVsdEJzUG9wcGVyQ29uZmlnID0ge1xuICAgICAgcGxhY2VtZW50OiBhdHRhY2htZW50LFxuICAgICAgbW9kaWZpZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnZmxpcCcsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgZmFsbGJhY2tQbGFjZW1lbnRzOiB0aGlzLl9jb25maWcuZmFsbGJhY2tQbGFjZW1lbnRzXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ29mZnNldCcsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgb2Zmc2V0OiB0aGlzLl9nZXRPZmZzZXQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGJvdW5kYXJ5OiB0aGlzLl9jb25maWcuYm91bmRhcnlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnYXJyb3cnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IGAuJHt0aGlzLmNvbnN0cnVjdG9yLk5BTUV9LWFycm93YFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdwcmVTZXRQbGFjZW1lbnQnLFxuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgcGhhc2U6ICdiZWZvcmVNYWluJyxcbiAgICAgICAgICBmbjogZGF0YSA9PiB7XG4gICAgICAgICAgICAvLyBQcmUtc2V0IFBvcHBlcidzIHBsYWNlbWVudCBhdHRyaWJ1dGUgaW4gb3JkZXIgdG8gcmVhZCB0aGUgYXJyb3cgc2l6ZXMgcHJvcGVybHkuXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIFBvcHBlciBtaXhlcyB1cCB0aGUgd2lkdGggYW5kIGhlaWdodCBkaW1lbnNpb25zIHNpbmNlIHRoZSBpbml0aWFsIGFycm93IHN0eWxlIGlzIGZvciB0b3AgcGxhY2VtZW50XG4gICAgICAgICAgICB0aGlzLl9nZXRUaXBFbGVtZW50KCkuc2V0QXR0cmlidXRlKCdkYXRhLXBvcHBlci1wbGFjZW1lbnQnLCBkYXRhLnN0YXRlLnBsYWNlbWVudClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uZGVmYXVsdEJzUG9wcGVyQ29uZmlnLFxuICAgICAgLi4uKHR5cGVvZiB0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnID09PSAnZnVuY3Rpb24nID8gdGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZyhkZWZhdWx0QnNQb3BwZXJDb25maWcpIDogdGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZylcbiAgICB9XG4gIH1cblxuICBfc2V0TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IHRyaWdnZXJzID0gdGhpcy5fY29uZmlnLnRyaWdnZXIuc3BsaXQoJyAnKVxuXG4gICAgZm9yIChjb25zdCB0cmlnZ2VyIG9mIHRyaWdnZXJzKSB7XG4gICAgICBpZiAodHJpZ2dlciA9PT0gJ2NsaWNrJykge1xuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfQ0xJQ0spLCB0aGlzLl9jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHtcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50KVxuICAgICAgICAgIGNvbnRleHQudG9nZ2xlKClcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAodHJpZ2dlciAhPT0gVFJJR0dFUl9NQU5VQUwpIHtcbiAgICAgICAgY29uc3QgZXZlbnRJbiA9IHRyaWdnZXIgPT09IFRSSUdHRVJfSE9WRVIgP1xuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX01PVVNFRU5URVIpIDpcbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9GT0NVU0lOKVxuICAgICAgICBjb25zdCBldmVudE91dCA9IHRyaWdnZXIgPT09IFRSSUdHRVJfSE9WRVIgP1xuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX01PVVNFTEVBVkUpIDpcbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9GT0NVU09VVClcblxuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgZXZlbnRJbiwgdGhpcy5fY29uZmlnLnNlbGVjdG9yLCBldmVudCA9PiB7XG4gICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldChldmVudClcbiAgICAgICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyW2V2ZW50LnR5cGUgPT09ICdmb2N1c2luJyA/IFRSSUdHRVJfRk9DVVMgOiBUUklHR0VSX0hPVkVSXSA9IHRydWVcbiAgICAgICAgICBjb250ZXh0Ll9lbnRlcigpXG4gICAgICAgIH0pXG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBldmVudE91dCwgdGhpcy5fY29uZmlnLnNlbGVjdG9yLCBldmVudCA9PiB7XG4gICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldChldmVudClcbiAgICAgICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyW2V2ZW50LnR5cGUgPT09ICdmb2N1c291dCcgPyBUUklHR0VSX0ZPQ1VTIDogVFJJR0dFUl9IT1ZFUl0gPVxuICAgICAgICAgICAgY29udGV4dC5fZWxlbWVudC5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KVxuXG4gICAgICAgICAgY29udGV4dC5fbGVhdmUoKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fZWxlbWVudCkge1xuICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfTU9EQUwpLCBFVkVOVF9NT0RBTF9ISURFLCB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyKVxuICB9XG5cbiAgX2ZpeFRpdGxlKCkge1xuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcblxuICAgIGlmICghdGl0bGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSAmJiAhdGhpcy5fZWxlbWVudC50ZXh0Q29udGVudC50cmltKCkpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgdGl0bGUpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnLCB0aXRsZSkgLy8gRE8gTk9UIFVTRSBJVC4gSXMgb25seSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGl0bGUnKVxuICB9XG5cbiAgX2VudGVyKCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duKCkgfHwgdGhpcy5faXNIb3ZlcmVkKSB7XG4gICAgICB0aGlzLl9pc0hvdmVyZWQgPSB0cnVlXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc0hvdmVyZWQgPSB0cnVlXG5cbiAgICB0aGlzLl9zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9pc0hvdmVyZWQpIHtcbiAgICAgICAgdGhpcy5zaG93KClcbiAgICAgIH1cbiAgICB9LCB0aGlzLl9jb25maWcuZGVsYXkuc2hvdylcbiAgfVxuXG4gIF9sZWF2ZSgpIHtcbiAgICBpZiAodGhpcy5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc0hvdmVyZWQgPSBmYWxzZVxuXG4gICAgdGhpcy5fc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX2lzSG92ZXJlZCkge1xuICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgfVxuICAgIH0sIHRoaXMuX2NvbmZpZy5kZWxheS5oaWRlKVxuICB9XG5cbiAgX3NldFRpbWVvdXQoaGFuZGxlciwgdGltZW91dCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KVxuICAgIHRoaXMuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KGhhbmRsZXIsIHRpbWVvdXQpXG4gIH1cblxuICBfaXNXaXRoQWN0aXZlVHJpZ2dlcigpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLl9hY3RpdmVUcmlnZ2VyKS5pbmNsdWRlcyh0cnVlKVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25zdCBkYXRhQXR0cmlidXRlcyA9IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQpXG5cbiAgICBmb3IgKGNvbnN0IGRhdGFBdHRyaWJ1dGUgb2YgT2JqZWN0LmtleXMoZGF0YUF0dHJpYnV0ZXMpKSB7XG4gICAgICBpZiAoRElTQUxMT1dFRF9BVFRSSUJVVEVTLmhhcyhkYXRhQXR0cmlidXRlKSkge1xuICAgICAgICBkZWxldGUgZGF0YUF0dHJpYnV0ZXNbZGF0YUF0dHJpYnV0ZV1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5kYXRhQXR0cmlidXRlcyxcbiAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSlcbiAgICB9XG4gICAgY29uZmlnID0gdGhpcy5fbWVyZ2VDb25maWdPYmooY29uZmlnKVxuICAgIGNvbmZpZyA9IHRoaXMuX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKVxuICAgIHRoaXMuX3R5cGVDaGVja0NvbmZpZyhjb25maWcpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgY29uZmlnLmNvbnRhaW5lciA9IGNvbmZpZy5jb250YWluZXIgPT09IGZhbHNlID8gZG9jdW1lbnQuYm9keSA6IGdldEVsZW1lbnQoY29uZmlnLmNvbnRhaW5lcilcblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmRlbGF5ID09PSAnbnVtYmVyJykge1xuICAgICAgY29uZmlnLmRlbGF5ID0ge1xuICAgICAgICBzaG93OiBjb25maWcuZGVsYXksXG4gICAgICAgIGhpZGU6IGNvbmZpZy5kZWxheVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnRpdGxlID09PSAnbnVtYmVyJykge1xuICAgICAgY29uZmlnLnRpdGxlID0gY29uZmlnLnRpdGxlLnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5jb250ZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgY29uZmlnLmNvbnRlbnQgPSBjb25maWcuY29udGVudC50b1N0cmluZygpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2dldERlbGVnYXRlQ29uZmlnKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHt9XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9jb25maWcpIHtcbiAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRba2V5XSAhPT0gdGhpcy5fY29uZmlnW2tleV0pIHtcbiAgICAgICAgY29uZmlnW2tleV0gPSB0aGlzLl9jb25maWdba2V5XVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbmZpZy5zZWxlY3RvciA9IGZhbHNlXG4gICAgY29uZmlnLnRyaWdnZXIgPSAnbWFudWFsJ1xuXG4gICAgLy8gSW4gdGhlIGZ1dHVyZSBjYW4gYmUgcmVwbGFjZWQgd2l0aDpcbiAgICAvLyBjb25zdCBrZXlzV2l0aERpZmZlcmVudFZhbHVlcyA9IE9iamVjdC5lbnRyaWVzKHRoaXMuX2NvbmZpZykuZmlsdGVyKGVudHJ5ID0+IHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFtlbnRyeVswXV0gIT09IHRoaXMuX2NvbmZpZ1tlbnRyeVswXV0pXG4gICAgLy8gYE9iamVjdC5mcm9tRW50cmllcyhrZXlzV2l0aERpZmZlcmVudFZhbHVlcylgXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2Rpc3Bvc2VQb3BwZXIoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIH1cblxuICAgIGlmICh0aGlzLnRpcCkge1xuICAgICAgdGhpcy50aXAucmVtb3ZlKClcbiAgICAgIHRoaXMudGlwID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IFRvb2x0aXAuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFRvb2x0aXApXG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXBcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMi4zKTogdXRpbC9iYWNrZHJvcC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgeyBleGVjdXRlLCBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uLCBnZXRFbGVtZW50LCByZWZsb3cgfSBmcm9tICcuL2luZGV4J1xuaW1wb3J0IENvbmZpZyBmcm9tICcuL2NvbmZpZydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ2JhY2tkcm9wJ1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IEVWRU5UX01PVVNFRE9XTiA9IGBtb3VzZWRvd24uYnMuJHtOQU1FfWBcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgY2xhc3NOYW1lOiAnbW9kYWwtYmFja2Ryb3AnLFxuICBjbGlja0NhbGxiYWNrOiBudWxsLFxuICBpc0FuaW1hdGVkOiBmYWxzZSxcbiAgaXNWaXNpYmxlOiB0cnVlLCAvLyBpZiBmYWxzZSwgd2UgdXNlIHRoZSBiYWNrZHJvcCBoZWxwZXIgd2l0aG91dCBhZGRpbmcgYW55IGVsZW1lbnQgdG8gdGhlIGRvbVxuICByb290RWxlbWVudDogJ2JvZHknIC8vIGdpdmUgdGhlIGNob2ljZSB0byBwbGFjZSBiYWNrZHJvcCB1bmRlciBkaWZmZXJlbnQgZWxlbWVudHNcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gIGNsaWNrQ2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknLFxuICBpc0FuaW1hdGVkOiAnYm9vbGVhbicsXG4gIGlzVmlzaWJsZTogJ2Jvb2xlYW4nLFxuICByb290RWxlbWVudDogJyhlbGVtZW50fHN0cmluZyknXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIEJhY2tkcm9wIGV4dGVuZHMgQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5faXNBcHBlbmRlZCA9IGZhbHNlXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgc2hvdyhjYWxsYmFjaykge1xuICAgIGlmICghdGhpcy5fY29uZmlnLmlzVmlzaWJsZSkge1xuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2FwcGVuZCgpXG5cbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fZ2V0RWxlbWVudCgpXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKSB7XG4gICAgICByZWZsb3coZWxlbWVudClcbiAgICB9XG5cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgdGhpcy5fZW11bGF0ZUFuaW1hdGlvbigoKSA9PiB7XG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgIH0pXG4gIH1cblxuICBoaWRlKGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuaXNWaXNpYmxlKSB7XG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZ2V0RWxlbWVudCgpLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgdGhpcy5fZW11bGF0ZUFuaW1hdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLmRpc3Bvc2UoKVxuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICB9KVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzQXBwZW5kZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VET1dOKVxuXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKVxuICAgIHRoaXMuX2lzQXBwZW5kZWQgPSBmYWxzZVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfZ2V0RWxlbWVudCgpIHtcbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGJhY2tkcm9wLmNsYXNzTmFtZSA9IHRoaXMuX2NvbmZpZy5jbGFzc05hbWVcbiAgICAgIGlmICh0aGlzLl9jb25maWcuaXNBbmltYXRlZCkge1xuICAgICAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudCA9IGJhY2tkcm9wXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRcbiAgfVxuXG4gIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgIC8vIHVzZSBnZXRFbGVtZW50KCkgd2l0aCB0aGUgZGVmYXVsdCBcImJvZHlcIiB0byBnZXQgYSBmcmVzaCBFbGVtZW50IG9uIGVhY2ggaW5zdGFudGlhdGlvblxuICAgIGNvbmZpZy5yb290RWxlbWVudCA9IGdldEVsZW1lbnQoY29uZmlnLnJvb3RFbGVtZW50KVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9hcHBlbmQoKSB7XG4gICAgaWYgKHRoaXMuX2lzQXBwZW5kZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9nZXRFbGVtZW50KClcbiAgICB0aGlzLl9jb25maWcucm9vdEVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpXG5cbiAgICBFdmVudEhhbmRsZXIub24oZWxlbWVudCwgRVZFTlRfTU9VU0VET1dOLCAoKSA9PiB7XG4gICAgICBleGVjdXRlKHRoaXMuX2NvbmZpZy5jbGlja0NhbGxiYWNrKVxuICAgIH0pXG5cbiAgICB0aGlzLl9pc0FwcGVuZGVkID0gdHJ1ZVxuICB9XG5cbiAgX2VtdWxhdGVBbmltYXRpb24oY2FsbGJhY2spIHtcbiAgICBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uKGNhbGxiYWNrLCB0aGlzLl9nZXRFbGVtZW50KCksIHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tkcm9wXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjIuMyk6IHV0aWwvY29tcG9uZW50LWZ1bmN0aW9ucy5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgeyBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLCBpc0Rpc2FibGVkIH0gZnJvbSAnLi9pbmRleCdcblxuY29uc3QgZW5hYmxlRGlzbWlzc1RyaWdnZXIgPSAoY29tcG9uZW50LCBtZXRob2QgPSAnaGlkZScpID0+IHtcbiAgY29uc3QgY2xpY2tFdmVudCA9IGBjbGljay5kaXNtaXNzJHtjb21wb25lbnQuRVZFTlRfS0VZfWBcbiAgY29uc3QgbmFtZSA9IGNvbXBvbmVudC5OQU1FXG5cbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBjbGlja0V2ZW50LCBgW2RhdGEtYnMtZGlzbWlzcz1cIiR7bmFtZX1cIl1gLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgaWYgKGlzRGlzYWJsZWQodGhpcykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcykgfHwgdGhpcy5jbG9zZXN0KGAuJHtuYW1lfWApXG4gICAgY29uc3QgaW5zdGFuY2UgPSBjb21wb25lbnQuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0YXJnZXQpXG5cbiAgICAvLyBNZXRob2QgYXJndW1lbnQgaXMgbGVmdCwgZm9yIEFsZXJ0IGFuZCBvbmx5LCBhcyBpdCBkb2Vzbid0IGltcGxlbWVudCB0aGUgJ2hpZGUnIG1ldGhvZFxuICAgIGluc3RhbmNlW21ldGhvZF0oKVxuICB9KVxufVxuXG5leHBvcnQge1xuICBlbmFibGVEaXNtaXNzVHJpZ2dlclxufVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4yLjMpOiB1dGlsL2NvbmZpZy5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7IGlzRWxlbWVudCwgdG9UeXBlIH0gZnJvbSAnLi9pbmRleCdcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuLi9kb20vbWFuaXB1bGF0b3InXG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIENvbmZpZyB7XG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiB7fVxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBoYXZlIHRvIGltcGxlbWVudCB0aGUgc3RhdGljIG1ldGhvZCBcIk5BTUVcIiwgZm9yIGVhY2ggY29tcG9uZW50IScpXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHRoaXMuX21lcmdlQ29uZmlnT2JqKGNvbmZpZylcbiAgICBjb25maWcgPSB0aGlzLl9jb25maWdBZnRlck1lcmdlKGNvbmZpZylcbiAgICB0aGlzLl90eXBlQ2hlY2tDb25maWcoY29uZmlnKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9tZXJnZUNvbmZpZ09iaihjb25maWcsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBqc29uQ29uZmlnID0gaXNFbGVtZW50KGVsZW1lbnQpID8gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCAnY29uZmlnJykgOiB7fSAvLyB0cnkgdG8gcGFyc2VcblxuICAgIHJldHVybiB7XG4gICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsXG4gICAgICAuLi4odHlwZW9mIGpzb25Db25maWcgPT09ICdvYmplY3QnID8ganNvbkNvbmZpZyA6IHt9KSxcbiAgICAgIC4uLihpc0VsZW1lbnQoZWxlbWVudCkgPyBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyhlbGVtZW50KSA6IHt9KSxcbiAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cbiAgfVxuXG4gIF90eXBlQ2hlY2tDb25maWcoY29uZmlnLCBjb25maWdUeXBlcyA9IHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGUpIHtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIE9iamVjdC5rZXlzKGNvbmZpZ1R5cGVzKSkge1xuICAgICAgY29uc3QgZXhwZWN0ZWRUeXBlcyA9IGNvbmZpZ1R5cGVzW3Byb3BlcnR5XVxuICAgICAgY29uc3QgdmFsdWUgPSBjb25maWdbcHJvcGVydHldXG4gICAgICBjb25zdCB2YWx1ZVR5cGUgPSBpc0VsZW1lbnQodmFsdWUpID8gJ2VsZW1lbnQnIDogdG9UeXBlKHZhbHVlKVxuXG4gICAgICBpZiAoIW5ldyBSZWdFeHAoZXhwZWN0ZWRUeXBlcykudGVzdCh2YWx1ZVR5cGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgYCR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FLnRvVXBwZXJDYXNlKCl9OiBPcHRpb24gXCIke3Byb3BlcnR5fVwiIHByb3ZpZGVkIHR5cGUgXCIke3ZhbHVlVHlwZX1cIiBidXQgZXhwZWN0ZWQgdHlwZSBcIiR7ZXhwZWN0ZWRUeXBlc31cIi5gXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlnXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjIuMyk6IHV0aWwvZm9jdXN0cmFwLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IENvbmZpZyBmcm9tICcuL2NvbmZpZydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ2ZvY3VzdHJhcCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmZvY3VzdHJhcCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBFVkVOVF9GT0NVU0lOID0gYGZvY3VzaW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX1RBQiA9IGBrZXlkb3duLnRhYiR7RVZFTlRfS0VZfWBcblxuY29uc3QgVEFCX0tFWSA9ICdUYWInXG5jb25zdCBUQUJfTkFWX0ZPUldBUkQgPSAnZm9yd2FyZCdcbmNvbnN0IFRBQl9OQVZfQkFDS1dBUkQgPSAnYmFja3dhcmQnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGF1dG9mb2N1czogdHJ1ZSxcbiAgdHJhcEVsZW1lbnQ6IG51bGwgLy8gVGhlIGVsZW1lbnQgdG8gdHJhcCBmb2N1cyBpbnNpZGUgb2Zcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGF1dG9mb2N1czogJ2Jvb2xlYW4nLFxuICB0cmFwRWxlbWVudDogJ2VsZW1lbnQnXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIEZvY3VzVHJhcCBleHRlbmRzIENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2VcbiAgICB0aGlzLl9sYXN0VGFiTmF2RGlyZWN0aW9uID0gbnVsbFxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBhY3RpdmF0ZSgpIHtcbiAgICBpZiAodGhpcy5faXNBY3RpdmUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcuYXV0b2ZvY3VzKSB7XG4gICAgICB0aGlzLl9jb25maWcudHJhcEVsZW1lbnQuZm9jdXMoKVxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0tFWSkgLy8gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBmb2N1cyBsb29wXG4gICAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9GT0NVU0lOLCBldmVudCA9PiB0aGlzLl9oYW5kbGVGb2N1c2luKGV2ZW50KSlcbiAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fVEFCLCBldmVudCA9PiB0aGlzLl9oYW5kbGVLZXlkb3duKGV2ZW50KSlcblxuICAgIHRoaXMuX2lzQWN0aXZlID0gdHJ1ZVxuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzQWN0aXZlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlXG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfS0VZKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfaGFuZGxlRm9jdXNpbihldmVudCkge1xuICAgIGNvbnN0IHsgdHJhcEVsZW1lbnQgfSA9IHRoaXMuX2NvbmZpZ1xuXG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gZG9jdW1lbnQgfHwgZXZlbnQudGFyZ2V0ID09PSB0cmFwRWxlbWVudCB8fCB0cmFwRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50cyA9IFNlbGVjdG9yRW5naW5lLmZvY3VzYWJsZUNoaWxkcmVuKHRyYXBFbGVtZW50KVxuXG4gICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdHJhcEVsZW1lbnQuZm9jdXMoKVxuICAgIH0gZWxzZSBpZiAodGhpcy5fbGFzdFRhYk5hdkRpcmVjdGlvbiA9PT0gVEFCX05BVl9CQUNLV0FSRCkge1xuICAgICAgZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoIC0gMV0uZm9jdXMoKVxuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50c1swXS5mb2N1cygpXG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZUtleWRvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ICE9PSBUQUJfS0VZKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9sYXN0VGFiTmF2RGlyZWN0aW9uID0gZXZlbnQuc2hpZnRLZXkgPyBUQUJfTkFWX0JBQ0tXQVJEIDogVEFCX05BVl9GT1JXQVJEXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9jdXNUcmFwXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjIuMyk6IHV0aWwvaW5kZXguanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBNQVhfVUlEID0gMV8wMDBfMDAwXG5jb25zdCBNSUxMSVNFQ09ORFNfTVVMVElQTElFUiA9IDEwMDBcbmNvbnN0IFRSQU5TSVRJT05fRU5EID0gJ3RyYW5zaXRpb25lbmQnXG5cbi8vIFNob3V0LW91dCBBbmd1cyBDcm9sbCAoaHR0cHM6Ly9nb28uZ2wvcHh3UUdwKVxuY29uc3QgdG9UeXBlID0gb2JqZWN0ID0+IHtcbiAgaWYgKG9iamVjdCA9PT0gbnVsbCB8fCBvYmplY3QgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBgJHtvYmplY3R9YFxuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpLm1hdGNoKC9cXHMoW2Etel0rKS9pKVsxXS50b0xvd2VyQ2FzZSgpXG59XG5cbi8qKlxuICogUHVibGljIFV0aWwgQVBJXG4gKi9cblxuY29uc3QgZ2V0VUlEID0gcHJlZml4ID0+IHtcbiAgZG8ge1xuICAgIHByZWZpeCArPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNQVhfVUlEKVxuICB9IHdoaWxlIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXgpKVxuXG4gIHJldHVybiBwcmVmaXhcbn1cblxuY29uc3QgZ2V0U2VsZWN0b3IgPSBlbGVtZW50ID0+IHtcbiAgbGV0IHNlbGVjdG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdGFyZ2V0JylcblxuICBpZiAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSAnIycpIHtcbiAgICBsZXQgaHJlZkF0dHJpYnV0ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJylcblxuICAgIC8vIFRoZSBvbmx5IHZhbGlkIGNvbnRlbnQgdGhhdCBjb3VsZCBkb3VibGUgYXMgYSBzZWxlY3RvciBhcmUgSURzIG9yIGNsYXNzZXMsXG4gICAgLy8gc28gZXZlcnl0aGluZyBzdGFydGluZyB3aXRoIGAjYCBvciBgLmAuIElmIGEgXCJyZWFsXCIgVVJMIGlzIHVzZWQgYXMgdGhlIHNlbGVjdG9yLFxuICAgIC8vIGBkb2N1bWVudC5xdWVyeVNlbGVjdG9yYCB3aWxsIHJpZ2h0ZnVsbHkgY29tcGxhaW4gaXQgaXMgaW52YWxpZC5cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8zMjI3M1xuICAgIGlmICghaHJlZkF0dHJpYnV0ZSB8fCAoIWhyZWZBdHRyaWJ1dGUuaW5jbHVkZXMoJyMnKSAmJiAhaHJlZkF0dHJpYnV0ZS5zdGFydHNXaXRoKCcuJykpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8vIEp1c3QgaW4gY2FzZSBzb21lIENNUyBwdXRzIG91dCBhIGZ1bGwgVVJMIHdpdGggdGhlIGFuY2hvciBhcHBlbmRlZFxuICAgIGlmIChocmVmQXR0cmlidXRlLmluY2x1ZGVzKCcjJykgJiYgIWhyZWZBdHRyaWJ1dGUuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICBocmVmQXR0cmlidXRlID0gYCMke2hyZWZBdHRyaWJ1dGUuc3BsaXQoJyMnKVsxXX1gXG4gICAgfVxuXG4gICAgc2VsZWN0b3IgPSBocmVmQXR0cmlidXRlICYmIGhyZWZBdHRyaWJ1dGUgIT09ICcjJyA/IGhyZWZBdHRyaWJ1dGUudHJpbSgpIDogbnVsbFxuICB9XG5cbiAgcmV0dXJuIHNlbGVjdG9yXG59XG5cbmNvbnN0IGdldFNlbGVjdG9yRnJvbUVsZW1lbnQgPSBlbGVtZW50ID0+IHtcbiAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KVxuXG4gIGlmIChzZWxlY3Rvcikge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogbnVsbFxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuY29uc3QgZ2V0RWxlbWVudEZyb21TZWxlY3RvciA9IGVsZW1lbnQgPT4ge1xuICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgcmV0dXJuIHNlbGVjdG9yID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOiBudWxsXG59XG5cbmNvbnN0IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50ID0gZWxlbWVudCA9PiB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICAvLyBHZXQgdHJhbnNpdGlvbi1kdXJhdGlvbiBvZiB0aGUgZWxlbWVudFxuICBsZXQgeyB0cmFuc2l0aW9uRHVyYXRpb24sIHRyYW5zaXRpb25EZWxheSB9ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClcblxuICBjb25zdCBmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiA9IE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbilcbiAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRGVsYXkgPSBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpXG5cbiAgLy8gUmV0dXJuIDAgaWYgZWxlbWVudCBvciB0cmFuc2l0aW9uIGR1cmF0aW9uIGlzIG5vdCBmb3VuZFxuICBpZiAoIWZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uICYmICFmbG9hdFRyYW5zaXRpb25EZWxheSkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICAvLyBJZiBtdWx0aXBsZSBkdXJhdGlvbnMgYXJlIGRlZmluZWQsIHRha2UgdGhlIGZpcnN0XG4gIHRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbi5zcGxpdCgnLCcpWzBdXG4gIHRyYW5zaXRpb25EZWxheSA9IHRyYW5zaXRpb25EZWxheS5zcGxpdCgnLCcpWzBdXG5cbiAgcmV0dXJuIChOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pICsgTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KSkgKiBNSUxMSVNFQ09ORFNfTVVMVElQTElFUlxufVxuXG5jb25zdCB0cmlnZ2VyVHJhbnNpdGlvbkVuZCA9IGVsZW1lbnQgPT4ge1xuICBlbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFRSQU5TSVRJT05fRU5EKSlcbn1cblxuY29uc3QgaXNFbGVtZW50ID0gb2JqZWN0ID0+IHtcbiAgaWYgKCFvYmplY3QgfHwgdHlwZW9mIG9iamVjdCAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqZWN0LmpxdWVyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBvYmplY3QgPSBvYmplY3RbMF1cbiAgfVxuXG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0Lm5vZGVUeXBlICE9PSAndW5kZWZpbmVkJ1xufVxuXG5jb25zdCBnZXRFbGVtZW50ID0gb2JqZWN0ID0+IHtcbiAgLy8gaXQncyBhIGpRdWVyeSBvYmplY3Qgb3IgYSBub2RlIGVsZW1lbnRcbiAgaWYgKGlzRWxlbWVudChvYmplY3QpKSB7XG4gICAgcmV0dXJuIG9iamVjdC5qcXVlcnkgPyBvYmplY3RbMF0gOiBvYmplY3RcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnc3RyaW5nJyAmJiBvYmplY3QubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9iamVjdClcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmNvbnN0IGlzVmlzaWJsZSA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWlzRWxlbWVudChlbGVtZW50KSB8fCBlbGVtZW50LmdldENsaWVudFJlY3RzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50SXNWaXNpYmxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCd2aXNpYmlsaXR5JykgPT09ICd2aXNpYmxlJ1xuICAvLyBIYW5kbGUgYGRldGFpbHNgIGVsZW1lbnQgYXMgaXRzIGNvbnRlbnQgbWF5IGZhbHNpZSBhcHBlYXIgdmlzaWJsZSB3aGVuIGl0IGlzIGNsb3NlZFxuICBjb25zdCBjbG9zZWREZXRhaWxzID0gZWxlbWVudC5jbG9zZXN0KCdkZXRhaWxzOm5vdChbb3Blbl0pJylcblxuICBpZiAoIWNsb3NlZERldGFpbHMpIHtcbiAgICByZXR1cm4gZWxlbWVudElzVmlzaWJsZVxuICB9XG5cbiAgaWYgKGNsb3NlZERldGFpbHMgIT09IGVsZW1lbnQpIHtcbiAgICBjb25zdCBzdW1tYXJ5ID0gZWxlbWVudC5jbG9zZXN0KCdzdW1tYXJ5JylcbiAgICBpZiAoc3VtbWFyeSAmJiBzdW1tYXJ5LnBhcmVudE5vZGUgIT09IGNsb3NlZERldGFpbHMpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmIChzdW1tYXJ5ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudElzVmlzaWJsZVxufVxuXG5jb25zdCBpc0Rpc2FibGVkID0gZWxlbWVudCA9PiB7XG4gIGlmICghZWxlbWVudCB8fCBlbGVtZW50Lm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKHR5cGVvZiBlbGVtZW50LmRpc2FibGVkICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBlbGVtZW50LmRpc2FibGVkXG4gIH1cblxuICByZXR1cm4gZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgJiYgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgIT09ICdmYWxzZSdcbn1cblxuY29uc3QgZmluZFNoYWRvd1Jvb3QgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0YWNoU2hhZG93KSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8vIENhbiBmaW5kIHRoZSBzaGFkb3cgcm9vdCBvdGhlcndpc2UgaXQnbGwgcmV0dXJuIHRoZSBkb2N1bWVudFxuICBpZiAodHlwZW9mIGVsZW1lbnQuZ2V0Um9vdE5vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCByb290ID0gZWxlbWVudC5nZXRSb290Tm9kZSgpXG4gICAgcmV0dXJuIHJvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290ID8gcm9vdCA6IG51bGxcbiAgfVxuXG4gIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU2hhZG93Um9vdCkge1xuICAgIHJldHVybiBlbGVtZW50XG4gIH1cblxuICAvLyB3aGVuIHdlIGRvbid0IGZpbmQgYSBzaGFkb3cgcm9vdFxuICBpZiAoIWVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gZmluZFNoYWRvd1Jvb3QoZWxlbWVudC5wYXJlbnROb2RlKVxufVxuXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuLyoqXG4gKiBUcmljayB0byByZXN0YXJ0IGFuIGVsZW1lbnQncyBhbmltYXRpb25cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJuIHZvaWRcbiAqXG4gKiBAc2VlIGh0dHBzOi8vd3d3LmNoYXJpc3RoZW8uaW8vYmxvZy8yMDIxLzAyL3Jlc3RhcnQtYS1jc3MtYW5pbWF0aW9uLXdpdGgtamF2YXNjcmlwdC8jcmVzdGFydGluZy1hLWNzcy1hbmltYXRpb25cbiAqL1xuY29uc3QgcmVmbG93ID0gZWxlbWVudCA9PiB7XG4gIGVsZW1lbnQub2Zmc2V0SGVpZ2h0IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG59XG5cbmNvbnN0IGdldGpRdWVyeSA9ICgpID0+IHtcbiAgaWYgKHdpbmRvdy5qUXVlcnkgJiYgIWRvY3VtZW50LmJvZHkuaGFzQXR0cmlidXRlKCdkYXRhLWJzLW5vLWpxdWVyeScpKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5qUXVlcnlcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmNvbnN0IERPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MgPSBbXVxuXG5jb25zdCBvbkRPTUNvbnRlbnRMb2FkZWQgPSBjYWxsYmFjayA9PiB7XG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAvLyBhZGQgbGlzdGVuZXIgb24gdGhlIGZpcnN0IGNhbGwgd2hlbiB0aGUgZG9jdW1lbnQgaXMgaW4gbG9hZGluZyBzdGF0ZVxuICAgIGlmICghRE9NQ29udGVudExvYWRlZENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgRE9NQ29udGVudExvYWRlZENhbGxiYWNrcykge1xuICAgICAgICAgIGNhbGxiYWNrKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spXG4gIH0gZWxzZSB7XG4gICAgY2FsbGJhY2soKVxuICB9XG59XG5cbmNvbnN0IGlzUlRMID0gKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpciA9PT0gJ3J0bCdcblxuY29uc3QgZGVmaW5lSlF1ZXJ5UGx1Z2luID0gcGx1Z2luID0+IHtcbiAgb25ET01Db250ZW50TG9hZGVkKCgpID0+IHtcbiAgICBjb25zdCAkID0gZ2V0alF1ZXJ5KClcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoJCkge1xuICAgICAgY29uc3QgbmFtZSA9IHBsdWdpbi5OQU1FXG4gICAgICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW25hbWVdXG4gICAgICAkLmZuW25hbWVdID0gcGx1Z2luLmpRdWVyeUludGVyZmFjZVxuICAgICAgJC5mbltuYW1lXS5Db25zdHJ1Y3RvciA9IHBsdWdpblxuICAgICAgJC5mbltuYW1lXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAgICAgICAkLmZuW25hbWVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgICAgIHJldHVybiBwbHVnaW4ualF1ZXJ5SW50ZXJmYWNlXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5jb25zdCBleGVjdXRlID0gY2FsbGJhY2sgPT4ge1xuICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2soKVxuICB9XG59XG5cbmNvbnN0IGV4ZWN1dGVBZnRlclRyYW5zaXRpb24gPSAoY2FsbGJhY2ssIHRyYW5zaXRpb25FbGVtZW50LCB3YWl0Rm9yVHJhbnNpdGlvbiA9IHRydWUpID0+IHtcbiAgaWYgKCF3YWl0Rm9yVHJhbnNpdGlvbikge1xuICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBkdXJhdGlvblBhZGRpbmcgPSA1XG4gIGNvbnN0IGVtdWxhdGVkRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0cmFuc2l0aW9uRWxlbWVudCkgKyBkdXJhdGlvblBhZGRpbmdcblxuICBsZXQgY2FsbGVkID0gZmFsc2VcblxuICBjb25zdCBoYW5kbGVyID0gKHsgdGFyZ2V0IH0pID0+IHtcbiAgICBpZiAodGFyZ2V0ICE9PSB0cmFuc2l0aW9uRWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2FsbGVkID0gdHJ1ZVxuICAgIHRyYW5zaXRpb25FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoVFJBTlNJVElPTl9FTkQsIGhhbmRsZXIpXG4gICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgfVxuXG4gIHRyYW5zaXRpb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoVFJBTlNJVElPTl9FTkQsIGhhbmRsZXIpXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmICghY2FsbGVkKSB7XG4gICAgICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRWxlbWVudClcbiAgICB9XG4gIH0sIGVtdWxhdGVkRHVyYXRpb24pXG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBwcmV2aW91cy9uZXh0IGVsZW1lbnQgb2YgYSBsaXN0LlxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGxpc3QgICAgVGhlIGxpc3Qgb2YgZWxlbWVudHNcbiAqIEBwYXJhbSBhY3RpdmVFbGVtZW50ICAgVGhlIGFjdGl2ZSBlbGVtZW50XG4gKiBAcGFyYW0gc2hvdWxkR2V0TmV4dCAgIENob29zZSB0byBnZXQgbmV4dCBvciBwcmV2aW91cyBlbGVtZW50XG4gKiBAcGFyYW0gaXNDeWNsZUFsbG93ZWRcbiAqIEByZXR1cm4ge0VsZW1lbnR8ZWxlbX0gVGhlIHByb3BlciBlbGVtZW50XG4gKi9cbmNvbnN0IGdldE5leHRBY3RpdmVFbGVtZW50ID0gKGxpc3QsIGFjdGl2ZUVsZW1lbnQsIHNob3VsZEdldE5leHQsIGlzQ3ljbGVBbGxvd2VkKSA9PiB7XG4gIGNvbnN0IGxpc3RMZW5ndGggPSBsaXN0Lmxlbmd0aFxuICBsZXQgaW5kZXggPSBsaXN0LmluZGV4T2YoYWN0aXZlRWxlbWVudClcblxuICAvLyBpZiB0aGUgZWxlbWVudCBkb2VzIG5vdCBleGlzdCBpbiB0aGUgbGlzdCByZXR1cm4gYW4gZWxlbWVudFxuICAvLyBkZXBlbmRpbmcgb24gdGhlIGRpcmVjdGlvbiBhbmQgaWYgY3ljbGUgaXMgYWxsb3dlZFxuICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuICFzaG91bGRHZXROZXh0ICYmIGlzQ3ljbGVBbGxvd2VkID8gbGlzdFtsaXN0TGVuZ3RoIC0gMV0gOiBsaXN0WzBdXG4gIH1cblxuICBpbmRleCArPSBzaG91bGRHZXROZXh0ID8gMSA6IC0xXG5cbiAgaWYgKGlzQ3ljbGVBbGxvd2VkKSB7XG4gICAgaW5kZXggPSAoaW5kZXggKyBsaXN0TGVuZ3RoKSAlIGxpc3RMZW5ndGhcbiAgfVxuXG4gIHJldHVybiBsaXN0W01hdGgubWF4KDAsIE1hdGgubWluKGluZGV4LCBsaXN0TGVuZ3RoIC0gMSkpXVxufVxuXG5leHBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGV4ZWN1dGUsXG4gIGV4ZWN1dGVBZnRlclRyYW5zaXRpb24sXG4gIGZpbmRTaGFkb3dSb290LFxuICBnZXRFbGVtZW50LFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxuICBnZXRqUXVlcnksXG4gIGdldE5leHRBY3RpdmVFbGVtZW50LFxuICBnZXRTZWxlY3RvckZyb21FbGVtZW50LFxuICBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCxcbiAgZ2V0VUlELFxuICBpc0Rpc2FibGVkLFxuICBpc0VsZW1lbnQsXG4gIGlzUlRMLFxuICBpc1Zpc2libGUsXG4gIG5vb3AsXG4gIG9uRE9NQ29udGVudExvYWRlZCxcbiAgcmVmbG93LFxuICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCxcbiAgdG9UeXBlXG59XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjIuMyk6IHV0aWwvc2FuaXRpemVyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgdXJpQXR0cmlidXRlcyA9IG5ldyBTZXQoW1xuICAnYmFja2dyb3VuZCcsXG4gICdjaXRlJyxcbiAgJ2hyZWYnLFxuICAnaXRlbXR5cGUnLFxuICAnbG9uZ2Rlc2MnLFxuICAncG9zdGVyJyxcbiAgJ3NyYycsXG4gICd4bGluazpocmVmJ1xuXSlcblxuY29uc3QgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTiA9IC9eYXJpYS1bXFx3LV0qJC9pXG5cbi8qKlxuICogQSBwYXR0ZXJuIHRoYXQgcmVjb2duaXplcyBhIGNvbW1vbmx5IHVzZWZ1bCBzdWJzZXQgb2YgVVJMcyB0aGF0IGFyZSBzYWZlLlxuICpcbiAqIFNob3V0LW91dCB0byBBbmd1bGFyIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi8xMi4yLngvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHNcbiAqL1xuY29uc3QgU0FGRV9VUkxfUEFUVEVSTiA9IC9eKD86KD86aHR0cHM/fG1haWx0b3xmdHB8dGVsfGZpbGV8c21zKTp8W14jJi86P10qKD86WyMvP118JCkpL2lcblxuLyoqXG4gKiBBIHBhdHRlcm4gdGhhdCBtYXRjaGVzIHNhZmUgZGF0YSBVUkxzLiBPbmx5IG1hdGNoZXMgaW1hZ2UsIHZpZGVvIGFuZCBhdWRpbyB0eXBlcy5cbiAqXG4gKiBTaG91dC1vdXQgdG8gQW5ndWxhciBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvMTIuMi54L3BhY2thZ2VzL2NvcmUvc3JjL3Nhbml0aXphdGlvbi91cmxfc2FuaXRpemVyLnRzXG4gKi9cbmNvbnN0IERBVEFfVVJMX1BBVFRFUk4gPSAvXmRhdGE6KD86aW1hZ2VcXC8oPzpibXB8Z2lmfGpwZWd8anBnfHBuZ3x0aWZmfHdlYnApfHZpZGVvXFwvKD86bXBlZ3xtcDR8b2dnfHdlYm0pfGF1ZGlvXFwvKD86bXAzfG9nYXxvZ2d8b3B1cykpO2Jhc2U2NCxbXFxkKy9hLXpdKz0qJC9pXG5cbmNvbnN0IGFsbG93ZWRBdHRyaWJ1dGUgPSAoYXR0cmlidXRlLCBhbGxvd2VkQXR0cmlidXRlTGlzdCkgPT4ge1xuICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gYXR0cmlidXRlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKClcblxuICBpZiAoYWxsb3dlZEF0dHJpYnV0ZUxpc3QuaW5jbHVkZXMoYXR0cmlidXRlTmFtZSkpIHtcbiAgICBpZiAodXJpQXR0cmlidXRlcy5oYXMoYXR0cmlidXRlTmFtZSkpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKFNBRkVfVVJMX1BBVFRFUk4udGVzdChhdHRyaWJ1dGUubm9kZVZhbHVlKSB8fCBEQVRBX1VSTF9QQVRURVJOLnRlc3QoYXR0cmlidXRlLm5vZGVWYWx1ZSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIC8vIENoZWNrIGlmIGEgcmVndWxhciBleHByZXNzaW9uIHZhbGlkYXRlcyB0aGUgYXR0cmlidXRlLlxuICByZXR1cm4gYWxsb3dlZEF0dHJpYnV0ZUxpc3QuZmlsdGVyKGF0dHJpYnV0ZVJlZ2V4ID0+IGF0dHJpYnV0ZVJlZ2V4IGluc3RhbmNlb2YgUmVnRXhwKVxuICAgIC5zb21lKHJlZ2V4ID0+IHJlZ2V4LnRlc3QoYXR0cmlidXRlTmFtZSkpXG59XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0QWxsb3dsaXN0ID0ge1xuICAvLyBHbG9iYWwgYXR0cmlidXRlcyBhbGxvd2VkIG9uIGFueSBzdXBwbGllZCBlbGVtZW50IGJlbG93LlxuICAnKic6IFsnY2xhc3MnLCAnZGlyJywgJ2lkJywgJ2xhbmcnLCAncm9sZScsIEFSSUFfQVRUUklCVVRFX1BBVFRFUk5dLFxuICBhOiBbJ3RhcmdldCcsICdocmVmJywgJ3RpdGxlJywgJ3JlbCddLFxuICBhcmVhOiBbXSxcbiAgYjogW10sXG4gIGJyOiBbXSxcbiAgY29sOiBbXSxcbiAgY29kZTogW10sXG4gIGRpdjogW10sXG4gIGVtOiBbXSxcbiAgaHI6IFtdLFxuICBoMTogW10sXG4gIGgyOiBbXSxcbiAgaDM6IFtdLFxuICBoNDogW10sXG4gIGg1OiBbXSxcbiAgaDY6IFtdLFxuICBpOiBbXSxcbiAgaW1nOiBbJ3NyYycsICdzcmNzZXQnLCAnYWx0JywgJ3RpdGxlJywgJ3dpZHRoJywgJ2hlaWdodCddLFxuICBsaTogW10sXG4gIG9sOiBbXSxcbiAgcDogW10sXG4gIHByZTogW10sXG4gIHM6IFtdLFxuICBzbWFsbDogW10sXG4gIHNwYW46IFtdLFxuICBzdWI6IFtdLFxuICBzdXA6IFtdLFxuICBzdHJvbmc6IFtdLFxuICB1OiBbXSxcbiAgdWw6IFtdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZUh0bWwodW5zYWZlSHRtbCwgYWxsb3dMaXN0LCBzYW5pdGl6ZUZ1bmN0aW9uKSB7XG4gIGlmICghdW5zYWZlSHRtbC5sZW5ndGgpIHtcbiAgICByZXR1cm4gdW5zYWZlSHRtbFxuICB9XG5cbiAgaWYgKHNhbml0aXplRnVuY3Rpb24gJiYgdHlwZW9mIHNhbml0aXplRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gc2FuaXRpemVGdW5jdGlvbih1bnNhZmVIdG1sKVxuICB9XG5cbiAgY29uc3QgZG9tUGFyc2VyID0gbmV3IHdpbmRvdy5ET01QYXJzZXIoKVxuICBjb25zdCBjcmVhdGVkRG9jdW1lbnQgPSBkb21QYXJzZXIucGFyc2VGcm9tU3RyaW5nKHVuc2FmZUh0bWwsICd0ZXh0L2h0bWwnKVxuICBjb25zdCBlbGVtZW50cyA9IFtdLmNvbmNhdCguLi5jcmVhdGVkRG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCcqJykpXG5cbiAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgY29uc3QgZWxlbWVudE5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKClcblxuICAgIGlmICghT2JqZWN0LmtleXMoYWxsb3dMaXN0KS5pbmNsdWRlcyhlbGVtZW50TmFtZSkpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlKClcblxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBjb25zdCBhdHRyaWJ1dGVMaXN0ID0gW10uY29uY2F0KC4uLmVsZW1lbnQuYXR0cmlidXRlcylcbiAgICBjb25zdCBhbGxvd2VkQXR0cmlidXRlcyA9IFtdLmNvbmNhdChhbGxvd0xpc3RbJyonXSB8fCBbXSwgYWxsb3dMaXN0W2VsZW1lbnROYW1lXSB8fCBbXSlcblxuICAgIGZvciAoY29uc3QgYXR0cmlidXRlIG9mIGF0dHJpYnV0ZUxpc3QpIHtcbiAgICAgIGlmICghYWxsb3dlZEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGFsbG93ZWRBdHRyaWJ1dGVzKSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUubm9kZU5hbWUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZWREb2N1bWVudC5ib2R5LmlubmVySFRNTFxufVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4yLjMpOiB1dGlsL3Njcm9sbEJhci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4uL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gJy4vaW5kZXgnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgU0VMRUNUT1JfRklYRURfQ09OVEVOVCA9ICcuZml4ZWQtdG9wLCAuZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQsIC5zdGlja3ktdG9wJ1xuY29uc3QgU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQgPSAnLnN0aWNreS10b3AnXG5jb25zdCBQUk9QRVJUWV9QQURESU5HID0gJ3BhZGRpbmctcmlnaHQnXG5jb25zdCBQUk9QRVJUWV9NQVJHSU4gPSAnbWFyZ2luLXJpZ2h0J1xuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBTY3JvbGxCYXJIZWxwZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gZG9jdW1lbnQuYm9keVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGdldFdpZHRoKCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cvaW5uZXJXaWR0aCN1c2FnZV9ub3Rlc1xuICAgIGNvbnN0IGRvY3VtZW50V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICByZXR1cm4gTWF0aC5hYnMod2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudFdpZHRoKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKVxuICAgIHRoaXMuX2Rpc2FibGVPdmVyRmxvdygpXG4gICAgLy8gZ2l2ZSBwYWRkaW5nIHRvIGVsZW1lbnQgdG8gYmFsYW5jZSB0aGUgaGlkZGVuIHNjcm9sbGJhciB3aWR0aFxuICAgIHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsIFBST1BFUlRZX1BBRERJTkcsIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgKyB3aWR0aClcbiAgICAvLyB0cmljazogV2UgYWRqdXN0IHBvc2l0aXZlIHBhZGRpbmdSaWdodCBhbmQgbmVnYXRpdmUgbWFyZ2luUmlnaHQgdG8gc3RpY2t5LXRvcCBlbGVtZW50cyB0byBrZWVwIHNob3dpbmcgZnVsbHdpZHRoXG4gICAgdGhpcy5fc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfRklYRURfQ09OVEVOVCwgUFJPUEVSVFlfUEFERElORywgY2FsY3VsYXRlZFZhbHVlID0+IGNhbGN1bGF0ZWRWYWx1ZSArIHdpZHRoKVxuICAgIHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX1NUSUNLWV9DT05URU5ULCBQUk9QRVJUWV9NQVJHSU4sIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgLSB3aWR0aClcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCwgJ292ZXJmbG93JylcbiAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsIFBST1BFUlRZX1BBRERJTkcpXG4gICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9GSVhFRF9DT05URU5ULCBQUk9QRVJUWV9QQURESU5HKVxuICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQsIFBST1BFUlRZX01BUkdJTilcbiAgfVxuXG4gIGlzT3ZlcmZsb3dpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0V2lkdGgoKSA+IDBcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2Rpc2FibGVPdmVyRmxvdygpIHtcbiAgICB0aGlzLl9zYXZlSW5pdGlhbEF0dHJpYnV0ZSh0aGlzLl9lbGVtZW50LCAnb3ZlcmZsb3cnKVxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICB9XG5cbiAgX3NldEVsZW1lbnRBdHRyaWJ1dGVzKHNlbGVjdG9yLCBzdHlsZVByb3BlcnR5LCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gdGhpcy5nZXRXaWR0aCgpXG4gICAgY29uc3QgbWFuaXB1bGF0aW9uQ2FsbEJhY2sgPSBlbGVtZW50ID0+IHtcbiAgICAgIGlmIChlbGVtZW50ICE9PSB0aGlzLl9lbGVtZW50ICYmIHdpbmRvdy5pbm5lcldpZHRoID4gZWxlbWVudC5jbGllbnRXaWR0aCArIHNjcm9sbGJhcldpZHRoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLl9zYXZlSW5pdGlhbEF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5KVxuICAgICAgY29uc3QgY2FsY3VsYXRlZFZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShzdHlsZVByb3BlcnR5KVxuICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShzdHlsZVByb3BlcnR5LCBgJHtjYWxsYmFjayhOdW1iZXIucGFyc2VGbG9hdChjYWxjdWxhdGVkVmFsdWUpKX1weGApXG4gICAgfVxuXG4gICAgdGhpcy5fYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayhzZWxlY3RvciwgbWFuaXB1bGF0aW9uQ2FsbEJhY2spXG4gIH1cblxuICBfc2F2ZUluaXRpYWxBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSkge1xuICAgIGNvbnN0IGFjdHVhbFZhbHVlID0gZWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHN0eWxlUHJvcGVydHkpXG4gICAgaWYgKGFjdHVhbFZhbHVlKSB7XG4gICAgICBNYW5pcHVsYXRvci5zZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHksIGFjdHVhbFZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIF9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHNlbGVjdG9yLCBzdHlsZVByb3BlcnR5KSB7XG4gICAgY29uc3QgbWFuaXB1bGF0aW9uQ2FsbEJhY2sgPSBlbGVtZW50ID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5KVxuICAgICAgLy8gV2Ugb25seSB3YW50IHRvIHJlbW92ZSB0aGUgcHJvcGVydHkgaWYgdGhlIHZhbHVlIGlzIGBudWxsYDsgdGhlIHZhbHVlIGNhbiBhbHNvIGJlIHplcm9cbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KHN0eWxlUHJvcGVydHkpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBNYW5pcHVsYXRvci5yZW1vdmVEYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHkpXG4gICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHN0eWxlUHJvcGVydHksIHZhbHVlKVxuICAgIH1cblxuICAgIHRoaXMuX2FwcGx5TWFuaXB1bGF0aW9uQ2FsbGJhY2soc2VsZWN0b3IsIG1hbmlwdWxhdGlvbkNhbGxCYWNrKVxuICB9XG5cbiAgX2FwcGx5TWFuaXB1bGF0aW9uQ2FsbGJhY2soc2VsZWN0b3IsIGNhbGxCYWNrKSB7XG4gICAgaWYgKGlzRWxlbWVudChzZWxlY3RvcikpIHtcbiAgICAgIGNhbGxCYWNrKHNlbGVjdG9yKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBzZWwgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvciwgdGhpcy5fZWxlbWVudCkpIHtcbiAgICAgIGNhbGxCYWNrKHNlbClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsQmFySGVscGVyXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjIuMyk6IHV0aWwvc3dpcGUuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4vY29uZmlnJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCB7IGV4ZWN1dGUgfSBmcm9tICcuL2luZGV4J1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnc3dpcGUnXG5jb25zdCBFVkVOVF9LRVkgPSAnLmJzLnN3aXBlJ1xuY29uc3QgRVZFTlRfVE9VQ0hTVEFSVCA9IGB0b3VjaHN0YXJ0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfVE9VQ0hNT1ZFID0gYHRvdWNobW92ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1RPVUNIRU5EID0gYHRvdWNoZW5kJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUE9JTlRFUkRPV04gPSBgcG9pbnRlcmRvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9QT0lOVEVSVVAgPSBgcG9pbnRlcnVwJHtFVkVOVF9LRVl9YFxuY29uc3QgUE9JTlRFUl9UWVBFX1RPVUNIID0gJ3RvdWNoJ1xuY29uc3QgUE9JTlRFUl9UWVBFX1BFTiA9ICdwZW4nXG5jb25zdCBDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQgPSAncG9pbnRlci1ldmVudCdcbmNvbnN0IFNXSVBFX1RIUkVTSE9MRCA9IDQwXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGVuZENhbGxiYWNrOiBudWxsLFxuICBsZWZ0Q2FsbGJhY2s6IG51bGwsXG4gIHJpZ2h0Q2FsbGJhY2s6IG51bGxcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGVuZENhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJyxcbiAgbGVmdENhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJyxcbiAgcmlnaHRDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKSdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgU3dpcGUgZXh0ZW5kcyBDb25maWcge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcblxuICAgIGlmICghZWxlbWVudCB8fCAhU3dpcGUuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9kZWx0YVggPSAwXG4gICAgdGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMgPSBCb29sZWFuKHdpbmRvdy5Qb2ludGVyRXZlbnQpXG4gICAgdGhpcy5faW5pdEV2ZW50cygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGRpc3Bvc2UoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVkpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9zdGFydChldmVudCkge1xuICAgIGlmICghdGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMpIHtcbiAgICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WFxuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaChldmVudCkpIHtcbiAgICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LmNsaWVudFhcbiAgICB9XG4gIH1cblxuICBfZW5kKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuX2V2ZW50SXNQb2ludGVyUGVuVG91Y2goZXZlbnQpKSB7XG4gICAgICB0aGlzLl9kZWx0YVggPSBldmVudC5jbGllbnRYIC0gdGhpcy5fZGVsdGFYXG4gICAgfVxuXG4gICAgdGhpcy5faGFuZGxlU3dpcGUoKVxuICAgIGV4ZWN1dGUodGhpcy5fY29uZmlnLmVuZENhbGxiYWNrKVxuICB9XG5cbiAgX21vdmUoZXZlbnQpIHtcbiAgICB0aGlzLl9kZWx0YVggPSBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSA/XG4gICAgICAwIDpcbiAgICAgIGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMuX2RlbHRhWFxuICB9XG5cbiAgX2hhbmRsZVN3aXBlKCkge1xuICAgIGNvbnN0IGFic0RlbHRhWCA9IE1hdGguYWJzKHRoaXMuX2RlbHRhWClcblxuICAgIGlmIChhYnNEZWx0YVggPD0gU1dJUEVfVEhSRVNIT0xEKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBhYnNEZWx0YVggLyB0aGlzLl9kZWx0YVhcblxuICAgIHRoaXMuX2RlbHRhWCA9IDBcblxuICAgIGlmICghZGlyZWN0aW9uKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBleGVjdXRlKGRpcmVjdGlvbiA+IDAgPyB0aGlzLl9jb25maWcucmlnaHRDYWxsYmFjayA6IHRoaXMuX2NvbmZpZy5sZWZ0Q2FsbGJhY2spXG4gIH1cblxuICBfaW5pdEV2ZW50cygpIHtcbiAgICBpZiAodGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9QT0lOVEVSRE9XTiwgZXZlbnQgPT4gdGhpcy5fc3RhcnQoZXZlbnQpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1BPSU5URVJVUCwgZXZlbnQgPT4gdGhpcy5fZW5kKGV2ZW50KSlcblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfUE9JTlRFUl9FVkVOVClcbiAgICB9IGVsc2Uge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNIU1RBUlQsIGV2ZW50ID0+IHRoaXMuX3N0YXJ0KGV2ZW50KSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSE1PVkUsIGV2ZW50ID0+IHRoaXMuX21vdmUoZXZlbnQpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNIRU5ELCBldmVudCA9PiB0aGlzLl9lbmQoZXZlbnQpKVxuICAgIH1cbiAgfVxuXG4gIF9ldmVudElzUG9pbnRlclBlblRvdWNoKGV2ZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzICYmIChldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1BFTiB8fCBldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1RPVUNIKVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBpc1N1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTd2lwZVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4yLjMpOiB1dGlsL3RlbXBsYXRlLWZhY3RvcnkuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBEZWZhdWx0QWxsb3dsaXN0LCBzYW5pdGl6ZUh0bWwgfSBmcm9tICcuL3Nhbml0aXplcidcbmltcG9ydCB7IGdldEVsZW1lbnQsIGlzRWxlbWVudCB9IGZyb20gJy4uL3V0aWwvaW5kZXgnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBDb25maWcgZnJvbSAnLi9jb25maWcnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdUZW1wbGF0ZUZhY3RvcnknXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGFsbG93TGlzdDogRGVmYXVsdEFsbG93bGlzdCxcbiAgY29udGVudDoge30sIC8vIHsgc2VsZWN0b3IgOiB0ZXh0ICwgIHNlbGVjdG9yMiA6IHRleHQyICwgfVxuICBleHRyYUNsYXNzOiAnJyxcbiAgaHRtbDogZmFsc2UsXG4gIHNhbml0aXplOiB0cnVlLFxuICBzYW5pdGl6ZUZuOiBudWxsLFxuICB0ZW1wbGF0ZTogJzxkaXY+PC9kaXY+J1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYWxsb3dMaXN0OiAnb2JqZWN0JyxcbiAgY29udGVudDogJ29iamVjdCcsXG4gIGV4dHJhQ2xhc3M6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gIGh0bWw6ICdib29sZWFuJyxcbiAgc2FuaXRpemU6ICdib29sZWFuJyxcbiAgc2FuaXRpemVGbjogJyhudWxsfGZ1bmN0aW9uKScsXG4gIHRlbXBsYXRlOiAnc3RyaW5nJ1xufVxuXG5jb25zdCBEZWZhdWx0Q29udGVudFR5cGUgPSB7XG4gIGVudHJ5OiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9ufG51bGwpJyxcbiAgc2VsZWN0b3I6ICcoc3RyaW5nfGVsZW1lbnQpJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBUZW1wbGF0ZUZhY3RvcnkgZXh0ZW5kcyBDb25maWcge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLl9jb25maWcuY29udGVudClcbiAgICAgIC5tYXAoY29uZmlnID0+IHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKGNvbmZpZykpXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gIH1cblxuICBoYXNDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldENvbnRlbnQoKS5sZW5ndGggPiAwXG4gIH1cblxuICBjaGFuZ2VDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLl9jaGVja0NvbnRlbnQoY29udGVudClcbiAgICB0aGlzLl9jb25maWcuY29udGVudCA9IHsgLi4udGhpcy5fY29uZmlnLmNvbnRlbnQsIC4uLmNvbnRlbnQgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICB0b0h0bWwoKSB7XG4gICAgY29uc3QgdGVtcGxhdGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0ZW1wbGF0ZVdyYXBwZXIuaW5uZXJIVE1MID0gdGhpcy5fbWF5YmVTYW5pdGl6ZSh0aGlzLl9jb25maWcudGVtcGxhdGUpXG5cbiAgICBmb3IgKGNvbnN0IFtzZWxlY3RvciwgdGV4dF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5fY29uZmlnLmNvbnRlbnQpKSB7XG4gICAgICB0aGlzLl9zZXRDb250ZW50KHRlbXBsYXRlV3JhcHBlciwgdGV4dCwgc2VsZWN0b3IpXG4gICAgfVxuXG4gICAgY29uc3QgdGVtcGxhdGUgPSB0ZW1wbGF0ZVdyYXBwZXIuY2hpbGRyZW5bMF1cbiAgICBjb25zdCBleHRyYUNsYXNzID0gdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24odGhpcy5fY29uZmlnLmV4dHJhQ2xhc3MpXG5cbiAgICBpZiAoZXh0cmFDbGFzcykge1xuICAgICAgdGVtcGxhdGUuY2xhc3NMaXN0LmFkZCguLi5leHRyYUNsYXNzLnNwbGl0KCcgJykpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRlbXBsYXRlXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF90eXBlQ2hlY2tDb25maWcoY29uZmlnKSB7XG4gICAgc3VwZXIuX3R5cGVDaGVja0NvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fY2hlY2tDb250ZW50KGNvbmZpZy5jb250ZW50KVxuICB9XG5cbiAgX2NoZWNrQ29udGVudChhcmcpIHtcbiAgICBmb3IgKGNvbnN0IFtzZWxlY3RvciwgY29udGVudF0gb2YgT2JqZWN0LmVudHJpZXMoYXJnKSkge1xuICAgICAgc3VwZXIuX3R5cGVDaGVja0NvbmZpZyh7IHNlbGVjdG9yLCBlbnRyeTogY29udGVudCB9LCBEZWZhdWx0Q29udGVudFR5cGUpXG4gICAgfVxuICB9XG5cbiAgX3NldENvbnRlbnQodGVtcGxhdGUsIGNvbnRlbnQsIHNlbGVjdG9yKSB7XG4gICAgY29uc3QgdGVtcGxhdGVFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShzZWxlY3RvciwgdGVtcGxhdGUpXG5cbiAgICBpZiAoIXRlbXBsYXRlRWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29udGVudCA9IHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKGNvbnRlbnQpXG5cbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIHRlbXBsYXRlRWxlbWVudC5yZW1vdmUoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGlzRWxlbWVudChjb250ZW50KSkge1xuICAgICAgdGhpcy5fcHV0RWxlbWVudEluVGVtcGxhdGUoZ2V0RWxlbWVudChjb250ZW50KSwgdGVtcGxhdGVFbGVtZW50KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5odG1sKSB7XG4gICAgICB0ZW1wbGF0ZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5fbWF5YmVTYW5pdGl6ZShjb250ZW50KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGVtcGxhdGVFbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudFxuICB9XG5cbiAgX21heWJlU2FuaXRpemUoYXJnKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5zYW5pdGl6ZSA/IHNhbml0aXplSHRtbChhcmcsIHRoaXMuX2NvbmZpZy5hbGxvd0xpc3QsIHRoaXMuX2NvbmZpZy5zYW5pdGl6ZUZuKSA6IGFyZ1xuICB9XG5cbiAgX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nID8gYXJnKHRoaXMpIDogYXJnXG4gIH1cblxuICBfcHV0RWxlbWVudEluVGVtcGxhdGUoZWxlbWVudCwgdGVtcGxhdGVFbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5odG1sKSB7XG4gICAgICB0ZW1wbGF0ZUVsZW1lbnQuaW5uZXJIVE1MID0gJydcbiAgICAgIHRlbXBsYXRlRWxlbWVudC5hcHBlbmQoZWxlbWVudClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRlbXBsYXRlRWxlbWVudC50ZXh0Q29udGVudCA9IGVsZW1lbnQudGV4dENvbnRlbnRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZW1wbGF0ZUZhY3RvcnlcbiIsImltcG9ydCAnYm9vdHN0cmFwLXRhYmxlJyIsIi8vaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuaW1wb3J0IEFsZXJ0IGZyb20gJy4uL2Jvb3RzdHJhcC9qcy9kaXN0L2FsZXJ0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYm9vdHN0cmFwL2pzL2Rpc3QvYnV0dG9uJztcbmltcG9ydCBDYXJvdXNlbCBmcm9tICcuLi9ib290c3RyYXAvanMvZGlzdC9jYXJvdXNlbCc7XG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAnLi4vYm9vdHN0cmFwL2pzL2Rpc3QvY29sbGFwc2UnO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gICcuLi9ib290c3RyYXAvanMvZGlzdC9kcm9wZG93bic7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vYm9vdHN0cmFwL2pzL2Rpc3QvbW9kYWwnO1xuaW1wb3J0IE9mZmNhbnZhcyBmcm9tICcuLi9ib290c3RyYXAvanMvZGlzdC9vZmZjYW52YXMnO1xuaW1wb3J0IFBvcG92ZXIgZnJvbSAgJy4uL2Jvb3RzdHJhcC9qcy9kaXN0L3BvcG92ZXInO1xuaW1wb3J0IFNjcm9sbHNweSBmcm9tICcuLi9ib290c3RyYXAvanMvZGlzdC9zY3JvbGxzcHknO1xuaW1wb3J0IFRhYiBmcm9tICcuLi9ib290c3RyYXAvanMvZGlzdC90YWInO1xuaW1wb3J0IFRvYXN0IGZyb20gJy4uL2Jvb3RzdHJhcC9qcy9kaXN0L3RvYXN0JztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4uL2Jvb3RzdHJhcC9qcy9kaXN0L3Rvb2x0aXAnO1xuXG5cbmdsb2JhbC5BbGVydCA9IEFsZXJ0O1xuZ2xvYmFsLkJ1dHRvbiA9IEJ1dHRvbjtcbmdsb2JhbC5DYXJvdXNlbCA9IENhcm91c2VsO1xuZ2xvYmFsLkNvbGxhcHNlID0gQ29sbGFwc2U7XG5nbG9iYWwuRHJvcGRvd24gPSBEcm9wZG93bjtcbmdsb2JhbC5Nb2RhbCA9IE1vZGFsO1xuZ2xvYmFsLk9mZmNhbnZhcyA9IE9mZmNhbnZhcztcbmdsb2JhbC5Qb3BvdmVyID0gUG9wb3Zlcjtcbmdsb2JhbC5TY3JvbGxzcHkgPSBTY3JvbGxzcHk7XG5nbG9iYWwuVGFiID0gVGFiO1xuZ2xvYmFsLlRvYXN0ID0gVG9hc3Q7XG5nbG9iYWwuVG9vbHRpcCA9IFRvb2x0aXA7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuZ2xvYmFsLiQgPSAkO1xuZ2xvYmFsLmpRdWVyeSA9ICQ7IiwiLy8gbnBtIHBhY2thZ2VzXG5pbXBvcnQgUGxvdGx5IGZyb20gJ3Bsb3RseS5qcy1kaXN0JzsgLy9leHRlcm5hbFxuaW1wb3J0ICdoYW1tZXJqcyc7XG5pbXBvcnQgeyBEcm9wem9uZSB9IGZyb20gXCJkcm9wem9uZVwiOyAvL2V4dGVybmFsXG5jb25zdCBkYXlqcyA9IHJlcXVpcmUoJ2RheWpzLXdpdGgtcGx1Z2lucycpO1xuaW1wb3J0IHsgY3JlYXRlUG9wcGVyIH0gZnJvbSAnQHBvcHBlcmpzL2NvcmUnO1xuXG4vLyAxLXN0ZXAgd29ya2Fyb3VuZCBmb3IgdGhlc2UgbnBtIHBhY2thZ2VzXG5pbXBvcnQgJy4vanF1ZXJ5JztcbmltcG9ydCAnLi9ib290c3RyYXAtdGFibGUnXG5pbXBvcnQgJy4vYm9vdHN0cmFwJ1xuXG4vLyBzZWxlY3RlZCBib290c3RyYXAgbW9kdWxlc1xuLy9pbXBvcnQgeyBBbGVydCwgQnV0dG9uLCBDYXJvdXNlbCwgQ29sbGFwc2UsIERyb3Bkb3duLCBNb2RhbCwgT2ZmY2FudmFzLCBQb3BvdmVyLCBTY3JvbGxzcHksIFRhYiwgVG9hc3QsIFRvb2x0aXB9IGZyb20gJ2Jvb3RzdHJhcCc7XG5cbi8qaW1wb3J0IEFsZXJ0IGZyb20gJy4uL2Jvb3RzdHJhcC9qcy9kaXN0L2FsZXJ0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYm9vdHN0cmFwL2pzL2Rpc3QvYnV0dG9uJztcbmltcG9ydCBDYXJvdXNlbCBmcm9tICcuLi9ib290c3RyYXAvanMvZGlzdC9jYXJvdXNlbCc7XG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAnLi4vYm9vdHN0cmFwL2pzL2Rpc3QvY29sbGFwc2UnO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gICcuLi9ib290c3RyYXAvanMvZGlzdC9kcm9wZG93bic7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vYm9vdHN0cmFwL2pzL2Rpc3QvbW9kYWwnO1xuaW1wb3J0IE9mZmNhbnZhcyBmcm9tICcuLi9ib290c3RyYXAvanMvZGlzdC9vZmZjYW52YXMnO1xuaW1wb3J0IFBvcG92ZXIgZnJvbSAgJy4uL2Jvb3RzdHJhcC9qcy9kaXN0L3BvcG92ZXInO1xuaW1wb3J0IFNjcm9sbHNweSBmcm9tICcuLi9ib290c3RyYXAvanMvZGlzdC9zY3JvbGxzcHknO1xuaW1wb3J0IFRhYiBmcm9tICcuLi9ib290c3RyYXAvanMvZGlzdC90YWInO1xuaW1wb3J0IFRvYXN0IGZyb20gJy4uL2Jvb3RzdHJhcC9qcy9kaXN0L3RvYXN0JztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4uL2Jvb3RzdHJhcC9qcy9kaXN0L3Rvb2x0aXAnOyovXG5cbi8vIHNhc3MgZW50cnkgcG9pbnRcbmltcG9ydCAnLi4vc2Nzcy9wcm9qZWN0cy5zY3NzJztcblxuLy8gb3RoZXIgZmlsZXNcbi8vaW1wb3J0ICcuLi9maXgvbWFwYm94LWdsLXVubWluaWZpZWQuanMubWFwJztcbi8vaW1wb3J0ICcuLi9maXgvYmFzZTY0LWFycmF5YnVmZmVyLmVzNS5qcy5tYXAnO1xuLy9pbXBvcnQgJy4uL2ZpeC9kcm9wem9uZS5tanMubWFwJztcbi8vaW1wb3J0ICcuLi9maXgvcGVyZm9ybWFuY2Utbm93LmpzLm1hcCc7XG52YXIgbTEgPSByZXF1aXJlKFwiLi4vZml4L21hcGJveC1nbC11bm1pbmlmaWVkLmpzLm1hcFwiKTtcbnZhciBtMiA9IHJlcXVpcmUoXCIuLi9maXgvYmFzZTY0LWFycmF5YnVmZmVyLmVzNS5qcy5tYXBcIik7XG52YXIgbTMgPSByZXF1aXJlKFwiLi4vZml4L2Ryb3B6b25lLm1qcy5tYXBcIik7XG52YXIgbTQgPSByZXF1aXJlKFwiLi4vZml4L3BlcmZvcm1hbmNlLW5vdy5qcy5tYXBcIik7XG5cbi8vIGN1c3RvbSBqc1xuXG4vLyB0aGUgcm9vdCBvYmplY3RcbndpbmRvdy5IYW5kbGVyID0ge1xuICAgIGpzOnt9LFxuICAgIGNzczp7fVxufTtcbiBcbkhhbmRsZXIuYWxlcnQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIEhhbmRsZXIubmF2aWdhdG9yLnJlbmFtZSh2YWx1ZVswXSwgdmFsdWVbMV0pO1xufVxuXG4vLyBleDogdml6LTUtZWRpdHBhbmVcbkhhbmRsZXIuZWxJRCA9IGZ1bmN0aW9uKGNvbXBvbmVudE5hbWUsIGlkLCByb2xlKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudE5hbWUgKyAnLScgKyBpZCArICctJyArIHJvbGU7XG59XG4gXG5IYW5kbGVyLnRpbWVSZWZyZXNoID0gZnVuY3Rpb24odHN0YW1wLCB0YXIpIHtcbiAgICAvL3ZhciByZWxhdGl2ZVRpbWUgPSByZXF1aXJlKCdkYXlqcy9wbHVnaW4vcmVsYXRpdmVUaW1lJyk7XG4gICAgLy9kYXlqcy5leHRlbmQocmVsYXRpdmVUaW1lKTtcbiAgICB0YXIuaW5uZXJIVE1MID0gZGF5anModHN0YW1wKS5mcm9tTm93KCk7XG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgIHRhci5pbm5lckhUTUwgPSBkYXlqcyh0c3RhbXApLmZyb21Ob3coKTtcbiAgICB9LCA2MDAwMCk7XG59XG4gXG4gLy8gc2hhcmUgYnV0dG9uXG5IYW5kbGVyLnNoYXJlTGlzdGVuZXIgPSBmdW5jdGlvbihidG5TZWxlY3RvciwgcmVzU2VsZWN0b3IsIHRpdGxlLCB0ZXh0LCB1cmwpIHtcbiAgICBjb25zdCBzaGFyZURhdGEgPSB7XG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgdGV4dDogdGV4dCxcbiAgICAgICAgdXJsOiB1cmxcbiAgICB9XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidG5TZWxlY3Rvcik7XG4gICAgLy9jb25zdCByZXN1bHRQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihyZXNTZWxlY3Rvcik7XG4gICAgXG4gICAgaWYoIWJ0bikgcmV0dXJuOyBcbiAgICBcbiAgICAvLyBTaGFyZSBtdXN0IGJlIHRyaWdnZXJlZCBieSBcInVzZXIgYWN0aXZhdGlvblwiXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgbmF2aWdhdG9yLnNoYXJlKHNoYXJlRGF0YSk7XG4gICAgICAgICAgICAvL3Jlc3VsdFBhcmEudGV4dENvbnRlbnQgPSAnTUROIHNoYXJlZCBzdWNjZXNzZnVsbHknO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHtlcnJ9YCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLypcbmZ1bmN0aW9uIHNob3dWaXpPZmZjYW52YXMoKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLWl0ZW0uYWN0aXZlXCIpO1xuICAgIHZhciBvZmZjYW52YXNJRCA9ICBlbGVtZW50LmdldEF0dHJpYnV0ZShcIm9mZmNhbnZhc0lEXCIpO1xuICAgIHZhciBvZmZjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvZmZjYW52YXNJRCk7XG4gICAgdmFyIHZpek9mZmNhbnZhcyA9IGJvb3RzdHJhcC5PZmZjYW52YXMuZ2V0T3JDcmVhdGVJbnN0YW5jZShvZmZjYW52YXMpO1xuICAgIHZpek9mZmNhbnZhcy5zaG93KCk7XG59XG5cbmZ1bmN0aW9uIHZpek9mZmNhbnZhc01heGltaXplKGMsIG9jKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvYykuY2xhc3NMaXN0LnRvZ2dsZSgnaC0xMDAnKTtcbn0qL1xuXG5jbGFzcyBOYXZUYXJnZXQge1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudCwgaWQsIG5hbWUpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgIHRoaXMuaWQgPSBOdW1iZXIoaWQpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cbiAgICBcbiAgICBnZXQgY29tcElEKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnQgKyAnLScgKyB0aGlzLmlkO1xuICAgIH1cbiAgICBcbiAgICBnZXQgZWRpdEVsZW1lbnRJRCgpIHtcbiAgICAgICAgcmV0dXJuIEhhbmRsZXIuZWxJRCh0aGlzLmNvbXBvbmVudCwgdGhpcy5pZCwgJ2VkaXQnKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IHRhYlRyaWdnZXJFbGVtZW50SUQoKSB7XG4gICAgICAgIHJldHVybiBIYW5kbGVyLmVsSUQoIHRoaXMuY29tcG9uZW50LCB0aGlzLmlkLCAndGFiJyk7XG4gICAgfVxuICAgIFxuICAgIGdldCBjb3B5RWxlbWVudElEKCkge1xuICAgICAgICByZXR1cm4gSGFuZGxlci5lbElEKHRoaXMuY29tcG9uZW50LCB0aGlzLmlkLCAnY29weScpO1xuICAgIH1cbn1cblxuLy9UT0RPOiBIYW5kbGUgY29tcG9uZW50LWtleSBjb21iaW5hdGlvbnNcbmNsYXNzIE5hdmlnYXRvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vdGhpcy5uYXZpZ2F0ZUNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMudGFyZ2V0cyA9IFtdO1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gLTE7XG4gICAgICAgIHRoaXMuc2hvd05hdiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNob3dFZGl0ID0gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIF9uYXZpZ2F0aW9uQ2hhbmdlZChuYW1lLCBuYXZUYXIpIHtcbiAgICAgICAgY29uc3QgZSA9IG5ldyBDdXN0b21FdmVudCgnbmF2aWdhdGlvbkNoYW5nZWQnLCB7XG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIG5hdmlnYXRvcjogdGhpcyxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHRoaXMudGFyZ2V0c1t0aGlzLnNlbGVjdGVkXSwgXG4gICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMudGFyZ2V0cy5maW5kSW5kZXgodCA9PiB0LmlkID09IG5hdlRhci5pZCksXG4gICAgICAgICAgICAgICAgY291bnQ6IHRoaXMudGFyZ2V0cy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgbmF2VGFyOiBuYXZUYXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZSk7XG4gICAgfVxuXG4gICAgZ2V0IGFjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0c1t0aGlzLnNlbGVjdGVkXTtcbiAgICB9XG4gICAgXG4gICAgc2V0IGFjdGl2ZShpZCkge1xuICAgICAgICBpZihpZCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGkgPSB0aGlzLnRhcmdldHMuZmluZEluZGV4KHQgPT4gdC5pZCA9PSBpZCk7XG4gICAgICAgICAgICBpZihpID49IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gaTtcbiAgICAgICAgICAgICAgICB0aGlzLl9uYXZpZ2F0aW9uQ2hhbmdlZChcImFjdGl2ZVwiLCB0aGlzLnRhcmdldHNbdGhpcy5zZWxlY3RlZF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGdldCBhbGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldHM7XG4gICAgfVxuXG4gICAgZ2V0IGNvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXRzLmxlbmd0aDtcbiAgICB9XG4gICAgXG4gICAgYWRkKGNvbXBvbmVudCwgaWQsIG5hbWUpIHtcbiAgICAgICAgLy9za2lwIGlmIGFscmVhZHkgYWRkZWQgdG8gYXZvaWQgZ3VpIGVycm9yc1xuICAgICAgICB2YXIgaW5kZXhJZkFscmVhZHlBZGRlZCA9IHRoaXMudGFyZ2V0cy5maW5kSW5kZXgodCA9PiB0LmlkID09IGlkKTtcbiAgICAgICAgaWYgKGluZGV4SWZBbHJlYWR5QWRkZWQgPj0gMCkge3JldHVybjt9XG4gICAgICAgIHZhciBpID0gdGhpcy50YXJnZXRzLmZpbmRJbmRleCh0ID0+IHQuaWQgPiBOdW1iZXIoaWQpKTtcbiAgICAgICAgaWYgKGkgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldHMucHVzaChuZXcgTmF2VGFyZ2V0KGNvbXBvbmVudCwgaWQsIG5hbWUpKTtcbiAgICAgICAgICAgIGkgPSB0aGlzLnRhcmdldHMubGVuZ3RoIC0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0cy5zcGxpY2UoaSwgMCwgbmV3IE5hdlRhcmdldChjb21wb25lbnQsIGlkLCBuYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy90aGlzLnNlbGVjdGVkID0gaTtcbiAgICAgICAgdGhpcy5fbmF2aWdhdGlvbkNoYW5nZWQoXCJhZGRcIiwgdGhpcy50YXJnZXRzW2ldKTtcbiAgICAgICAgLy90aGlzLmFjdGl2ZSA9IGlkO1xuICAgIH1cbiAgICBcbiAgICBhZGRBbmRSZXNldChjb21wb25lbnQsIGlkLCBuYW1lKSB7XG4gICAgICAgIC8vc2tpcCBpZiBhbHJlYWR5IGFkZGVkIHRvIGF2b2lkIGd1aSBlcnJvcnNcbiAgICAgICAgdmFyIGluZGV4SWZBbHJlYWR5QWRkZWQgPSB0aGlzLnRhcmdldHMuZmluZEluZGV4KHQgPT4gdC5pZCA9PSBpZCk7XG4gICAgICAgIGlmIChpbmRleElmQWxyZWFkeUFkZGVkID49IDApIHtyZXR1cm47fVxuICAgICAgICB0aGlzLmFkZChjb21wb25lbnQsIGlkLCBuYW1lKTtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0aGlzLnRhcmdldHNbMF0uaWQ7XG4gICAgfVxuXG4gICAgcmVtb3ZlKGlkKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy50YXJnZXRzLmZpbmRJbmRleCh0ID0+IHQuaWQgPT0gaWQpO1xuICAgICAgICBpZihpKXtcbiAgICAgICAgICAgIHZhciB0YXIgPSB0aGlzLnRhcmdldHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgdGhpcy5fbmF2aWdhdGlvbkNoYW5nZWQoXCJyZW1vdmVcIiwgdGFyWzBdKTtcbiAgICAgICAgICAgIGlmKHRoaXMudGFyZ2V0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IFwidW5kZWZpbmVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgICAgIFxuICAgIGZvcndhcmQoKSB7XG4gICAgICAgIGlmKHRoaXMuc2VsZWN0ZWQgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQgKyAxO1xuICAgICAgICAgICAgaWYodGhpcy5zZWxlY3RlZCA+PSB0aGlzLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9uYXZpZ2F0aW9uQ2hhbmdlZChcImFjdGl2ZVwiLCB0aGlzLnRhcmdldHNbdGhpcy5zZWxlY3RlZF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmFjaygpIHtcbiAgICAgICAgaWYodGhpcy5zZWxlY3RlZCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZCAtIDE7XG4gICAgICAgICAgICBpZih0aGlzLnNlbGVjdGVkIDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnRhcmdldHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX25hdmlnYXRpb25DaGFuZ2VkKFwiYWN0aXZlXCIsIHRoaXMudGFyZ2V0c1t0aGlzLnNlbGVjdGVkXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLypcbiAgICBqdW1wKGluZGV4KSB7XG4gICAgICAgIGlmKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gaW5kZXg7XG4gICAgICAgICAgICB0aGlzLl9uYXZpZ2F0aW9uQ2hhbmdlZChcImFjdGl2ZVwiLCB0aGlzLnRhcmdldHNbdGhpcy5zZWxlY3RlZF0pO1xuICAgICAgICB9XG4gICAgfSovXG4gICAgXG4gICAganVtcChrZXkpIHtcbiAgICAgICAgdmFyIHRhciA9IHRoaXMudGFyZ2V0cy5maW5kKHQgPT4gdC5pZCA9PSBrZXkpO1xuICAgICAgICBpZih0YXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnRhcmdldHMuZmluZEluZGV4KHQgPT4gdC5pZCA9PSB0YXIuaWQpO1xuICAgICAgICAgICAgdGhpcy5fbmF2aWdhdGlvbkNoYW5nZWQoXCJhY3RpdmVcIiwgdGFyKTtcbiAgICAgICAgfSAgXG4gICAgfVxuICAgIFxuICAgIHJlbmFtZShrZXksIG5hbWUpIHtcbiAgICAgICAgdmFyIHRhciA9IHRoaXMudGFyZ2V0cy5maW5kKHQgPT4gdC5pZCA9PSBrZXkpO1xuICAgICAgICBpZih0YXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRhci5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIHRoaXMuX25hdmlnYXRpb25DaGFuZ2VkKFwibmFtZVwiLCB0YXIpO1xuICAgICAgICB9ICAgXG4gICAgfVxuICAgIFxuICAgIC8vIG5lZWRlZCB0byBjYXRjaCBzaW5nbGUgcGFyYW0gY2FsbCBmcm9tIGRqYW5nby11bmljb3JuIHZpZXdcbiAgICAvKnJlbmFtZShhcnJ5KSB7XG4gICAgICAgIHRoaXMucmVuYW1lKGFycnlbMF0sIGFycnlbMV0pOyAgIFxuICAgIH0qL1xuICAgIFxuICAgIHRvZ2dsZU5hdigpIHtcbiAgICAgICAgdGhpcy5zaG93TmF2ID0gIXRoaXMuc2hvd05hdjtcbiAgICAgICAgdGhpcy5fbmF2VG9nZ2xlZCgpO1xuICAgIH1cbiAgICBcbiAgICByZXNldCgpIHtcbiAgICAgICAgYWxlcnQodGhpcy50YXJnZXRzLmxlbmd0aCA+IDApO1xuICAgICAgICBpZiAodGhpcy50YXJnZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gdGhpcy50YXJnZXRzWzBdLmlkO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIF9uYXZUb2dnbGVkKCkge1xuICAgICAgICBjb25zdCBlID0gbmV3IEN1c3RvbUV2ZW50KCduYXZUb2dnbGVkJywge1xuICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ25hdlRvZ2dsZWQnLFxuICAgICAgICAgICAgICAgIG5hdmlnYXRvcjogdGhpcyxcbiAgICAgICAgICAgICAgICBzaG93TmF2OiB0aGlzLnNob3dOYXZcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZSk7ICAgIFxuICAgIH1cbiAgICBcbiAgICB0b2dnbGVFZGl0KCkge1xuICAgICAgICB0aGlzLnNob3dFZGl0ID0gIXRoaXMuc2hvd0VkaXQ7XG4gICAgICAgIHRoaXMuX2VkaXRUb2dnbGVkKCk7XG4gICAgfVxuICAgIFxuICAgIF9lZGl0VG9nZ2xlZCgpIHtcbiAgICAgICAgY29uc3QgZSA9IG5ldyBDdXN0b21FdmVudCgnZWRpdFRvZ2dsZWQnLCB7XG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnZWRpdFRvZ2dsZWQnLFxuICAgICAgICAgICAgICAgIG5hdmlnYXRvcjogdGhpcyxcbiAgICAgICAgICAgICAgICBzaG93RWRpdDogdGhpcy5zaG93RWRpdFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChlKTsgICAgXG4gICAgfVxuICAgIFxufTtcblxuSGFuZGxlci5uYXZpZ2F0b3IgPSBuZXcgTmF2aWdhdG9yKCk7XG4gXG5IYW5kbGVyLnRleHRfdHJ1bmNhdGUgPSBmdW5jdGlvbihzdHIsIGxlbmd0aCwgZW5kaW5nKSB7XG4gICAgaWYgKGxlbmd0aCA9PSBudWxsKSB7XG4gICAgICAgIGxlbmd0aCA9IDg7XG4gICAgfVxuICAgIGlmIChlbmRpbmcgPT0gbnVsbCkge1xuICAgICAgICBlbmRpbmcgPSAnLi4uJztcbiAgICB9XG4gICAgaWYgKHN0ci5sZW5ndGggPiBsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHN0ci5zdWJzdHJpbmcoMCwgbGVuZ3RoIC0gMSkgKyBlbmRpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9IFxufVxuXG5IYW5kbGVyLmFkZFRhYiA9IGZ1bmN0aW9uKG5hdlRhciwgaW5kZXgpIHtcbiAgICAvL21ha2UgdGFiIGJ1dHRvblxuICAgIGNvbnN0IGJsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGIuaWQgPSBuYXZUYXIudGFiVHJpZ2dlckVsZW1lbnRJRDsgLy9pZD1cInt7dmlkfX0tdGFiXCJcbiAgICBiLnRleHRDb250ZW50ID0gbmF2VGFyLm5hbWU7XG4gICAgYi5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24taXRlbVwiKTtcbiAgICBiLnNldEF0dHJpYnV0ZShcImRhdGEtYnMtdG9nZ2xlXCIsIFwidGFiXCIpO1xuICAgIGIuc2V0QXR0cmlidXRlKFwiZGF0YS1icy10YXJnZXRcIiwgXCIjXCIrbmF2VGFyLmNvbXBJRCk7XG4gICAgYi5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwidGFiXCIpO1xuICAgIGIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgICBiLnNldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIiwgbmF2VGFyLmNvbXBJRCk7XG4gICAgYi5zZXRBdHRyaWJ1dGUoXCJpbmRleFwiLCBpbmRleCk7XG4gICAgYi5zZXRBdHRyaWJ1dGUoXCJuYXZUYXJJRFwiLCBuYXZUYXIuaWQpO1xuICAgIGIuc2V0QXR0cmlidXRlKFwib25jbGlja1wiLCBcImV2ZW50LnByZXZlbnREZWZhdWx0KCk7IEhhbmRsZXIubmF2aWdhdG9yLmp1bXAoXCIgKyBuYXZUYXIuaWQgKyBcIik7XCIpO1xuICAgIFxuICAgIC8vbWFrZSBjb3B5IGFuY2hvclxuICAgIGNvbnN0IGFsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhLmlkID0gbmF2VGFyLmNvcHlFbGVtZW50SUQ7IC8vaWQ9XCJ2aXote3t2aXoucGt9fS1jb3B5XCIgXG4gICAgYS50ZXh0Q29udGVudCA9IFwiQ29weSBcIiArIG5hdlRhci5uYW1lO1xuICAgIGEuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLWl0ZW1cIik7XG4gICAgYS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiI1wiKTtcbiAgICBhLnNldEF0dHJpYnV0ZShcIm9uY2xpY2tcIiwgXCJVbmljb3JuLmNhbGwoJ2FwcCcsICdjb3B5Vml6JywgJ1wiICsgbmF2VGFyLmlkICsgXCInKTtcIik7IC8vdW5pY29ybjpjbGljaz1cImNvcHlWaXooe3t2aXoucGt9fSlcbiAgICBhLnNldEF0dHJpYnV0ZShcImluZGV4XCIsIGluZGV4KTtcbiAgICBcbiAgICAvL2VoXG4gICAgLy9UT0RPXG4gICAgXG4gICAgLy9hZGRcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFiQnV0dG9uc1wiKTtcbiAgICB2YXIgbmF2VGFyQ291bnQgPSBIYW5kbGVyLm5hdmlnYXRvci5jb3VudDtcbiAgICBcbiAgICBpZiAodWwgIT0gbnVsbCkge1xuICAgICAgICAvL3VsLmFwcGVuZENoaWxkKGJsaSk7XG4gICAgICAgIGNvbnN0IHRvcEZpeGVkSXRlbXNDb3VudCA9IDE7XG4gICAgICAgIHVsLmluc2VydEJlZm9yZShibGksIHVsLmNoaWxkcmVuW3RvcEZpeGVkSXRlbXNDb3VudCArIGluZGV4XSk7XG4gICAgICAgIGJsaS5hcHBlbmRDaGlsZChiKTtcblxuICAgICAgICAvL3VsLmFwcGVuZENoaWxkKGFsaSk7XG4gICAgICAgIGNvbnN0IG1pZEZpeGVkSXRlbXNDb3VudCA9IDM7XG4gICAgICAgIHVsLmluc2VydEJlZm9yZShhbGksIHVsLmNoaWxkcmVuW3RvcEZpeGVkSXRlbXNDb3VudCArIG1pZEZpeGVkSXRlbXNDb3VudCArIG5hdlRhckNvdW50ICsgaW5kZXhdKTtcbiAgICAgICAgYWxpLmFwcGVuZENoaWxkKGEpO1xuICAgIH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbmF2aWdhdGlvbkNoYW5nZWQnLCAoZSkgPT4ge1xuICAgIHN3aXRjaChlLmRldGFpbC5uYW1lKSB7XG4gICAgICAgIGNhc2UgXCJhY3RpdmVcIjogXG4gICAgICAgICAgICAvLyB1cGRhdGUgbmF2cGFuZWwgdGV4dCAmIHNob3cgYWN0aXZlIHRhYiBcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5Hcm91cERyb3AxXCIpO1xuICAgICAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzWzBdLm5vZGVWYWx1ZSA9IEhhbmRsZXIudGV4dF90cnVuY2F0ZShlLmRldGFpbC5uYXZpZ2F0b3IuYWN0aXZlLm5hbWUpICsgXCIgXCI7XG4gICAgICAgICAgICB2YXIgdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUuZGV0YWlsLmFjdGl2ZS50YWJUcmlnZ2VyRWxlbWVudElEKTtcbiAgICAgICAgICAgIC8vYm9vdHN0cmFwLlRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKHQpLnNob3coKTtcbiAgICAgICAgICAgIFRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKHQpLnNob3coKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYWRkXCI6XG4gICAgICAgICAgICAvLyBhZGQgVGFiICYgQ29weSBidXR0b25zXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidml6Q291bnRcIik7XG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGUuZGV0YWlsLmNvdW50ICsgXCIgdml6c1wiO1xuICAgICAgICAgICAgSGFuZGxlci5hZGRUYWIoZS5kZXRhaWwubmF2VGFyLCBlLmRldGFpbC5pbmRleCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInJlbW92ZVwiOlxuICAgICAgICAgICAgLy8gcmVtb3ZlIFRhYiAmIENvcHkgYnV0dG9uc1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpekNvdW50XCIpO1xuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBlLmRldGFpbC5jb3VudCArIFwiIHZpenNcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUuZGV0YWlsLm5hdlRhci5pZCkucmVtb3ZlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm5hbWVcIjpcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBuYXZwYW5lbCwgVGFiICYgQ29weSBidXR0b25zIFxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bkdyb3VwRHJvcDFcIik7XG4gICAgICAgICAgICBlbGVtZW50LmZpcnN0Q2hpbGQuZGF0YSA9IEhhbmRsZXIudGV4dF90cnVuY2F0ZShlLmRldGFpbC5uYXZUYXIubmFtZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlLmRldGFpbC5uYXZUYXIudGFiVHJpZ2dlckVsZW1lbnRJRCkuaW5uZXJIVE1MID0gZS5kZXRhaWwubmF2VGFyLm5hbWU7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlLmRldGFpbC5uYXZUYXIuY29weUVsZW1lbnRJRCkuaW5uZXJIVE1MID0gJ0NvcHkgJyArIGUuZGV0YWlsLm5hdlRhci5uYW1lO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCduYXZUb2dnbGVkJywgKGUpID0+IHtcbiAgICBzd2l0Y2goZS5kZXRhaWwubmFtZSkge1xuICAgICAgICBjYXNlIFwibmF2VG9nZ2xlZFwiOiBcbiAgICAgICAgICAgIC8vYWxlcnQoXCJuYXZUb2dnbGVkXCIpO1xuICAgICAgICAgICAgLy9ib290c3RyYXAuQ29sbGFwc2UuZ2V0T3JDcmVhdGVJbnN0YW5jZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRQYW5lbFwiKSkudG9nZ2xlKCk7XG4gICAgICAgICAgICBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdFBhbmVsXCIpKS50b2dnbGUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gYWRuIG5hdiBwYW5lXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhclwiKS5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcbiAgICAgICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXJfY29udGFpbmVyXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJtYWluLWNvbnRlbnRcIik7XG4gICAgICAgICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUuZGV0YWlsLm5hdmlnYXRvci5hY3RpdmUubmF2RWxlbWVudElEKS5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcbiAgICAgICAgICAgIC8vIGlzIHNtYWxsIHNjcmVlbiBjYWxsIGRyb3B1cCwgZWxzZSBjYWxsIGxlZnQgcGFuZWxcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdlZGl0VG9nZ2xlZCcsIChlKSA9PiB7XG4gICAgc3dpdGNoKGUuZGV0YWlsLm5hbWUpIHtcbiAgICAgICAgY2FzZSBcImVkaXRUb2dnbGVkXCI6IFxuICAgICAgICAgICAgLy8gdG9nZ2xlIHJpZ2h0IHBhbmVsXG4gICAgICAgICAgICAvL2Jvb3RzdHJhcC5Db2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHRQYW5lbFwiKSkudG9nZ2xlKCk7IFxuICAgICAgICAgICAgQ29sbGFwc2UuZ2V0T3JDcmVhdGVJbnN0YW5jZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0UGFuZWxcIikpLnRvZ2dsZSgpOyBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gLi4uYW5kIGVkaXQgcGFuZXNcbiAgICAgICAgICAgIGNvbnN0IGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRlc3QtZWRpdFwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxbaV0uY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3R0b20tbmF2YmFyXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJkeW5hbWljXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUuZGV0YWlsLm5hdmlnYXRvci5hY3RpdmUuZWRpdEVsZW1lbnRJRCkuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59KTtcblxuLy8gQ2hhbmdlIERPTSBvbiBzY3JlZW4gc2l6ZSBjaGFuZ2VcbkhhbmRsZXIubWVkaWFRdWVyeSA9IGZ1bmN0aW9uKHF1ZXJ5LCBoYW5kbGVZZXMsIGhhbmRsZU5vKSB7XG4gICAgLy8gZXg6IFwiKG1heC13aWR0aDogNzAwcHgpXCJcbiAgICB2YXIgeCA9IHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KTtcbiAgICB2YXIgZiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAoeC5tYXRjaGVzKSA/IGhhbmRsZVllcygpIDogaGFuZGxlTm8oKTtcbiAgICB9XG4gICAgLy8gY2FsbCBvbmNlIGltbWVkaWF0ZWx5IHRoZW4gbGlzdGVuXG4gICAgZigpO1xuICAgIHguYWRkTGlzdGVuZXIoZik7XG59XG5cbi8vIENoYW5nZSBzdHlsZSBvbiBzY3JlZW4gc2l6ZSBjaGFuZ2VcbkhhbmRsZXIubWVkaWFRdWVyeVN0eWxlID0gZnVuY3Rpb24ocGFyYW0pIHtcbiAgICB2YXIge3F1ZXJ5LCBlbGVtLCBhdHRyLCB5ZXNTdHlsZSwgbm9TdHlsZX0gPSBwYXJhbTtcbiAgICB2YXIgZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSk7XG4gICAgSGFuZGxlci5tZWRpYVF1ZXJ5KFxuICAgICAgICBxdWVyeSwgXG4gICAgICAgICgpPT57IGUuc3R5bGUuc2V0UHJvcGVydHkoYXR0ciwgeWVzU3R5bGUpOyB9LCBcbiAgICAgICAgKCk9PnsgZS5zdHlsZS5zZXRQcm9wZXJ0eShhdHRyLCBub1N0eWxlKTsgfSxcbiAgICApO1xufVxuLypcbkhhbmRsZXIub2Zmc2V0ID0gZnVuY3Rpb24oZWwpIHtcbiAgICBib3ggPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBkb2NFbGVtID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogYm94LnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCAtIGRvY0VsZW0uY2xpZW50VG9wLFxuICAgICAgICBsZWZ0OiBib3gubGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldCAtIGRvY0VsZW0uY2xpZW50TGVmdFxuICAgIH07XG59XG5cbkhhbmRsZXIuZml4VG9WaWV3cG9ydCA9IGZ1bmN0aW9uKGVsLCB0b3AsIGxlZnQpIHtcbiAgICB2YXIgZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpO1xuICAgIGUuY3NzKFwibGVmdFwiLCBsZWZ0T2Zmc2V0IC0gZWxlbWVudC5vZmZzZXQoKS5sZWZ0KTtcbiAgICBlLmNzcyhcInRvcFwiLCB0b3BPZmZzZXQgLSBlbGVtZW50Lm9mZnNldCgpLnRvcCk7ICAgXG59Ki9cblxuLy8gQ2hhbmdlIERPTSBvbiBzY3JlZW4gc2l6ZSBjaGFuZ2VcbkhhbmRsZXIubWVkaWFRdWVyeVN3aXRjaCA9IGZ1bmN0aW9uKHBhcmFtKSB7XG4gICAgdmFyIHtxdWVyeSwgZWxlbSwgeWVzUGFyZW50LCBub1BhcmVudH0gPSBwYXJhbTtcbiAgICB2YXIgZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSk7XG4gICAgdmFyIHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHllc1BhcmVudCk7XG4gICAgdmFyIG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5vUGFyZW50KTtcbiAgICBIYW5kbGVyLm1lZGlhUXVlcnkoXG4gICAgICAgIHF1ZXJ5LCBcbiAgICAgICAgKCk9PnsgLyppZiAobi5jb250YWlucyhlKSkqLyB5LmFwcGVuZENoaWxkKGUpOyB9LCBcbiAgICAgICAgKCk9PnsgLyppZiAoeS5jb250YWlucyhlKSkqLyBuLmFwcGVuZENoaWxkKGUpOyB9LFxuICAgICk7XG59XG5cbkhhbmRsZXIuc2hvd1RhYiA9IGZ1bmN0aW9uKHF1ZXJ5KSB7XG4gICAgY29uc3QgdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xuICAgIFRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKHQpLnNob3coKTtcbn1cblxuSGFuZGxlci52aXpJbml0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAvL2dldCBwbG90IGRpdiwgdGFiXG4gICAgdmFyIGQgPSBub2RlLmRhdGFzZXQ7XG4gICAgdmFyIHZpZCA9IFwidml6LVwiICsgZC55dklkO1xuICAgIHZhciBwbG90X2RpdiA9IFwicGxvdEJveC1cIiArIHZpZDtcbiAgICB2YXIgcGxvdF9kaXZfZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwbG90X2Rpdik7XG4gICAgdmFyIHRhYl9kaXYgPSB2aWQgKyBcIi10YWJcIjtcbiAgICAvL3ZhciB0YWJfZGl2X2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFiX2Rpdik7XG5cbiAgICAvL2dldCBqc29uXG4gICAgdmFyIGpzb25fZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInlvdXZpejpkYXRhOlwiICsgdmlkKTtcbiAgICB2YXIganNvbiA9IEpTT04ucGFyc2UoanNvbl9lbC50ZXh0Q29udGVudCk7XG5cbiAgICAvL21ha2UgcGxvdFxuICAgIHZhciBkYXRhID0ganNvbi5wbG90X2RhdGE7XG4gICAgdmFyIGxheW91dCA9IGpzb24ucGxvdF9sYXlvdXQ7XG4gICAgLy92YXIgY29uZmlnID0ge3Jlc3BvbnNpdmU6IHRydWV9O1xuICAgIC8vbGF5b3V0LmhlaWdodCA9IDM5MjtcbiAgICBsYXlvdXQud2lkdGggPSBwbG90X2Rpdl9lbC5jbGllbnRXaWR0aDtcbiAgICBsYXlvdXQuaGVpZ2h0ID0gcGxvdF9kaXZfZWwuY2xpZW50SGVpZ2h0O1xuICAgIFxuICAgIGxheW91dC5tYXJnaW4udCA9IDE1O1xuICAgIGxheW91dC5tYXJnaW4uYiA9IDY4O1xuICAgIGxheW91dC5tYXJnaW4uciA9IDEwO1xuICAgIGxheW91dC5zaG93bGVnZW5kID0gdHJ1ZTtcbiAgICBsYXlvdXQubGVnZW5kID0ge1xuICAgICAgICB4OiAxLFxuICAgICAgICB4YW5jaG9yOiAncmlnaHQnLFxuICAgICAgICB5OiAxLFxuICAgICAgICBiZ2NvbG9yOiAnIzAwMDAwMDAwJyxcbiAgICB9O1xuICAgIGxheW91dC5jbGlja21vZGUgPSAnbm9uZSc7XG4gICAgbGF5b3V0LmRyYWdtb2RlID0gZmFsc2U7XG4gICAgXG4gICAgdmFyIGNvbmZpZyA9IHtkaXNwbGF5TW9kZUJhcjogZmFsc2UsIHNjcm9sbFpvb206IGZhbHNlfTtcbiAgICBQbG90bHkucmVhY3QocGxvdF9kaXYsIGRhdGEsIGxheW91dCwgY29uZmlnKTtcblxuICAgIC8vIHBvcG92ZXIgc2V0dXBcbiAgICBjb25zdCBsaXN0ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1icy10b2dnbGU9XCJwb3BvdmVyXCJdJykpXG4gICAgbGlzdC5tYXAoKGVsKSA9PiB7XG4gICAgICBsZXQgb3B0cyA9IHtcbiAgICAgICAgYW5pbWF0aW9uOiBmYWxzZSxcbiAgICAgIH1cbiAgICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtYnMtY29udGVudC1pZCcpKSB7XG4gICAgICAgIG9wdHMuY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1icy1jb250ZW50LWlkJykpLmlubmVySFRNTDtcbiAgICAgICAgb3B0cy5odG1sID0gdHJ1ZTtcbiAgICAgICAgb3B0cy5zYW5pdGl6ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgLy9uZXcgYm9vdHN0cmFwLlBvcG92ZXIoZWwsIG9wdHMpO1xuICAgICAgbmV3IFBvcG92ZXIoZWwsIG9wdHMpO1xuICAgIH0pXG5cbiAgICAvL3ZhciB5dm1vZGFscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ5dm1vZGFsXCIpO1xuICAgIHZhciB5dm1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy55dm1vZGFsLnZpeicpO1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5XCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeXZtb2RhbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZCh5dm1vZGFsc1tpXSk7IFxuICAgIH1cblxuICAgIGxldCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICAgICAgZm9yKGxldCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICAgICAgICAvLyBvbmx5IHJlc3BvbmQgaWYgZGlzcGxheWVkIHRvIHNhdmUgY3B1XG4gICAgICAgICAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUocGxvdF9kaXZfZWwsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoXCJkaXNwbGF5XCIpICE9IFwibm9uZVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmNvbnRlbnRCb3hTaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZpcmVmb3ggaW1wbGVtZW50cyBgY29udGVudEJveFNpemVgIGFzIGEgc2luZ2xlIGNvbnRlbnQgcmVjdCwgcmF0aGVyIHRoYW4gYW4gYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zdCBjb250ZW50Qm94U2l6ZSA9IEFycmF5LmlzQXJyYXkoZW50cnkuY29udGVudEJveFNpemUpID8gZW50cnkuY29udGVudEJveFNpemVbMF0gOiBlbnRyeS5jb250ZW50Qm94U2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsb3RfZGl2X2VsLmNsaWVudFdpZHRoID49IDEwIHx8IHBsb3RfZGl2X2VsLmNsaWVudEhlaWdodCA+PSAxMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVwZGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogcGxvdF9kaXZfZWwuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBwbG90X2Rpdl9lbC5jbGllbnRIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBQbG90bHkucmVsYXlvdXQocGxvdF9kaXYsIHVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGxvdF9kaXZfZWwuY2xpZW50V2lkdGggPj0gMTAgfHwgcGxvdF9kaXZfZWwuY2xpZW50SGVpZ2h0ID49IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXBkYXRlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBwbG90X2Rpdl9lbC5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHBsb3RfZGl2X2VsLmNsaWVudEhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsb3RseS5yZWxheW91dChwbG90X2RpdiwgdXBkYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIGxldCBtaWRQYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaWRQYW5lbCcpO1xuICAgIG9ic2VydmVyLm9ic2VydmUobWlkUGFuZWwpO1xuICAgIFxuICAgIC8vIGFkZCBsaXN0ZW5lciB0byBnZW5lcmF0ZWQgZG9tXG4gICAgdmFyIHRhYl9kaXZfZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWJfZGl2KTtcbiAgICB0YWJfZGl2X2VsLmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3duLmJzLnRhYicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSB0YWJfZGl2KSB7IC8vIG5ld2x5IGFjdGl2YXRlZCB0YWJcbiAgICAgICAgLy9ldmVudC5yZWxhdGVkVGFyZ2V0IC8vIHByZXZpb3VzIGFjdGl2ZSB0YWJcbiAgICAgICAgICAgIGlmIChwbG90X2Rpdl9lbC5jbGllbnRXaWR0aCA+PSAxMCB8fCBwbG90X2Rpdl9lbC5jbGllbnRIZWlnaHQgPj0gMTApIHtcbiAgICAgICAgICAgICAgICB2YXIgdXBkYXRlID0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogcGxvdF9kaXZfZWwuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogcGxvdF9kaXZfZWwuY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBQbG90bHkucmVsYXlvdXQocGxvdF9kaXYsIHVwZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICAvL25lc3RlZCBkYXRhdGFibGUgaW5pdFxuICAgIFxuICAgICQoJyN0YWJsZScpLmJvb3RzdHJhcFRhYmxlKCk7IC8vIGluaXQgdmlhIGphdmFzY3JpcHRcblxuICAgIC8vIGRhdGF0YWJsZSBtb2RhbFxuICAgIC8vIGFwcGVuZCBtb2RhbHMgdG8gcHJldmVudCB6LWxheWVyIGlzc3Vlc1xuICAgIHZhciB5dm1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy55dm1vZGFsJyk7XG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB5dm1vZGFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHl2bW9kYWxzW2ldKTsgXG4gICAgfVxuICAgIC8qXG4gICAgSGFuZGxlci5tZWRpYVF1ZXJ5U3dpdGNoKHtcbiAgICAgICAgcXVlcnk6ICcobWF4LXdpZHRoOiA5OTJweCknLFxuICAgICAgICBlbGVtOiAnI3N3aXRjaCcsXG4gICAgICAgIHllc1BhcmVudDogJy5vZmZjYW52YXMtYm90dG9tJyxcbiAgICAgICAgbm9QYXJlbnQ6ICcjcmlnaHRQYW5lbCBkaXYnLFxuICAgIH0pOyovXG59XG5cbkhhbmRsZXIuZGF0YWZyYW1lSW5pdCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgdmFyIGQgPSBub2RlLmRhdGFzZXQ7XG4gICAgY29uc3QgbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWxUYWJsZVwiKTtcbiAgICBcbiAgICBpZiAobSkge1xuICAgICAgICAvL2Jvb3RzdHJhcC5Nb2RhbC5nZXRPckNyZWF0ZUluc3RhbmNlKG0pLmRpc3Bvc2UoKTtcbiAgICAgICAgLy9ib290c3RyYXAuTW9kYWwuZ2V0T3JDcmVhdGVJbnN0YW5jZShtKTtcbiAgICAgICAgTW9kYWwuZ2V0T3JDcmVhdGVJbnN0YW5jZShtKS5kaXNwb3NlKCk7XG4gICAgICAgIE1vZGFsLmdldE9yQ3JlYXRlSW5zdGFuY2UobSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKS5hcHBlbmRDaGlsZChtKTtcbiAgICAgICAgdmFyICR0YWJsZSA9ICQoJyN0YWJsZScpO1xuXG4gICAgICAgIC8vdmFyIGRmU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgLy9kZlNjcmlwdC5zcmMgPSAneyUgc3RhdGljIFwicHJvamVjdHMvanMvYm9vdHN0cmFwLXRhYmxlLm1pbi5qc1wiICV9JztcbiAgICAgICAgLy9kZlNjcmlwdC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgICAgIC8vICAgIEhhbmRsZXIuanMuYnQgPSB0cnVlO1xuICAgICAgICAvL30pO1xuICAgICAgICAvL25vZGUuYXBwZW5kQ2hpbGQoZGZTY3JpcHQpO1xuICAgICAgICBcbiAgICAgICAgLy8gSlF1ZXJ5IGZvciBCb290c3RyYXAgVGFibGUgY29tcGF0aWJpbGl0eVxuICAgICAgICBsZXQgbXlWYXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmKFxuICAgICAgICAgICAgICAgIC8vSGFuZGxlci5zY3JpcHRzWydidGMnXSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgSGFuZGxlci5qcy5idCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgJHRhYmxlLmJvb3RzdHJhcFRhYmxlICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobXlWYXIpO1xuICAgICAgICAgICAgICAgIC8vJChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAvLyAgICBtLmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3duLmJzLm1vZGFsJyxmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICR0YWJsZS5ib290c3RyYXBUYWJsZSgncmVzZXRWaWV3Jyk7XG4gICAgICAgICAgICAgICAgLy8gICAgfSk7XG4gICAgICAgICAgICAgICAgLy99KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMjUwKTtcbiAgICB9XG59XG5cbkhhbmRsZXIudml6cmVwb3J0SW5pdCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgdmFyIGQgPSBub2RlLmRhdGFzZXQ7XG4gICAgLy9nZXQgbW9kYWxcbiAgICBjb25zdCBtciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWxSZXBvcnRcIik7XG4gICAgaWYgKG1yKSB7XG4gICAgICAgIC8vYm9vdHN0cmFwLk1vZGFsLmdldE9yQ3JlYXRlSW5zdGFuY2UobXIpLmRpc3Bvc2UoKTtcbiAgICAgICAgLy9ib290c3RyYXAuTW9kYWwuZ2V0T3JDcmVhdGVJbnN0YW5jZShtcik7XG4gICAgICAgIE1vZGFsLmdldE9yQ3JlYXRlSW5zdGFuY2UobXIpLmRpc3Bvc2UoKTtcbiAgICAgICAgTW9kYWwuZ2V0T3JDcmVhdGVJbnN0YW5jZShtcik7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKS5hcHBlbmRDaGlsZChtcik7XG5cbiAgICAgICAgLy8gaW5pdCB2aXpzXG4gICAgICAgIC8vdmFyIGFyciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIueXYtdml6cmVwb3J0IGRpdiBzY3JpcHRcIik7XG4gICAgICAgIHZhciBhcnIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnl2LXZpenJlcG9ydFwiKTtcbiAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBhcnIubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9nZXQgcGxvdCBkaXYsIHRhYlxuICAgICAgICAgICAgY29uc3QgcmVwID0gYXJyW25dO1xuICAgICAgICAgICAgY29uc3QgcmlkID0gcmVwLmlkO1xuICAgICAgICAgICAgY29uc3QgcGxvdF9kaXYgPSBcInBsb3RCb3gtcmVwb3J0LVwiICsgcmlkO1xuICAgICAgICAgICAgY29uc3QgcGxvdF9kaXZfZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwbG90X2Rpdik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vZ2V0IGpzb25cbiAgICAgICAgICAgIGNvbnN0IGpzb25fZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInlvdXZpejpkYXRhOnJlcG9ydC1cIiArIHJpZCk7XG4gICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShqc29uX2VsLnRleHRDb250ZW50KTtcblxuICAgICAgICAgICAgLy9tYWtlIHBsb3RcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBqc29uLnBsb3RfZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IGxheW91dCA9IGpzb24ucGxvdF9sYXlvdXQ7XG4gICAgICAgICAgICAvL3ZhciBjb25maWcgPSB7cmVzcG9uc2l2ZTogdHJ1ZX07XG4gICAgICAgICAgICBjb25zdCBwbG90X2Rpdl9vdXRlcl9lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJpZCk7XG4gICAgICAgICAgICBsYXlvdXQud2lkdGggPSBwbG90X2Rpdl9vdXRlcl9lbC5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgIC8vbGF5b3V0LmhlaWdodCA9IHBsb3RfZGl2X291dGVyX2VsLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgIGxheW91dC5oZWlnaHQgPSAyNTA7XG4gICAgICAgICAgICBsYXlvdXQubWFyZ2luLnQgPSAxNTtcbiAgICAgICAgICAgIGxheW91dC5tYXJnaW4uYiA9IDY4O1xuICAgICAgICAgICAgbGF5b3V0Lm1hcmdpbi5yID0gMTA7XG4gICAgICAgICAgICBsYXlvdXQuc2hvd2xlZ2VuZCA9IHRydWU7XG4gICAgICAgICAgICBsYXlvdXQubGVnZW5kID0ge1xuICAgICAgICAgICAgICAgIHg6IDEsXG4gICAgICAgICAgICAgICAgeGFuY2hvcjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICB5OiAxLFxuICAgICAgICAgICAgICAgIGJnY29sb3I6ICcjMDAwMDAwMDAnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxheW91dC5jbGlja21vZGUgPSAnbm9uZSc7XG4gICAgICAgICAgICBsYXlvdXQuZHJhZ21vZGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IHtkaXNwbGF5TW9kZUJhcjogZmFsc2UsIHNjcm9sbFpvb206IGZhbHNlfTtcbiAgICAgICAgICAgIFBsb3RseS5yZWFjdChwbG90X2RpdiwgZGF0YSwgbGF5b3V0LCBjb25maWcpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL2FkZCByZXNpemUgbGlzdGVuZXJcbiAgICAgICAgICAgIC8qd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBsb3RfZGl2X2VsKS5kaXNwbGF5ICE9PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgICB2YXIgdXBkYXRlID0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogcGxvdF9kaXZfZWwuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogcGxvdF9kaXZfZWwuY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgIGlmKHVwZGF0ZS53aWR0aCAhPT0gMCAmJiB1cGRhdGUuaGVpZ2h0ICE9PSAwKSBQbG90bHkucmVsYXlvdXQocGxvdF9kaXYsIHVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgIC8vZXZhbChzY3JpcHQuaW5uZXJIVE1MKTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTsqL1xuICAgICAgICAgICAgbGV0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkuY29udGVudEJveFNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpcmVmb3ggaW1wbGVtZW50cyBgY29udGVudEJveFNpemVgIGFzIGEgc2luZ2xlIGNvbnRlbnQgcmVjdCwgcmF0aGVyIHRoYW4gYW4gYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc3QgY29udGVudEJveFNpemUgPSBBcnJheS5pc0FycmF5KGVudHJ5LmNvbnRlbnRCb3hTaXplKSA/IGVudHJ5LmNvbnRlbnRCb3hTaXplWzBdIDogZW50cnkuY29udGVudEJveFNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGxvdF9kaXZfb3V0ZXJfZWwuY2xpZW50V2lkdGggPj0gMTAgfHwgcGxvdF9kaXZfb3V0ZXJfZWwuY2xpZW50SGVpZ2h0ID49IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogcGxvdF9kaXZfb3V0ZXJfZWwuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogcGxvdF9kaXZfb3V0ZXJfZWwuY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbG90bHkucmVsYXlvdXQocGxvdF9kaXYsIHVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGxvdF9kaXZfb3V0ZXJfZWwuY2xpZW50V2lkdGggPj0gMTAgfHwgcGxvdF9kaXZfb3V0ZXJfZWwuY2xpZW50SGVpZ2h0ID49IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogcGxvdF9kaXZfb3V0ZXJfZWwuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogcGxvdF9kaXZfb3V0ZXJfZWwuY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbG90bHkucmVsYXlvdXQocGxvdF9kaXYsIHVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy9sZXQgbWlkUGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlkUGFuZWwnKTtcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUocGxvdF9kaXZfZWwpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyByZXNpemUgb24gbW9kYWwuc2hvd1xuICAgICAgICAgICAgbXIuYWRkRXZlbnRMaXN0ZW5lcignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChwbG90X2Rpdl9vdXRlcl9lbC5jbGllbnRXaWR0aCA+PSAxMCB8fCBwbG90X2Rpdl9vdXRlcl9lbC5jbGllbnRIZWlnaHQgPj0gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHBsb3RfZGl2X2VsLmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBwbG90X2Rpdl9lbC5jbGllbnRIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgUGxvdGx5LnJlbGF5b3V0KHBsb3RfZGl2LCB1cGRhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvL3FyIGNvZGVcbiAgICAgICAgLypcbiAgICAgICAgdmFyIHFyY29kZSA9IG5ldyBRUkNvZGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aXotcXJjb2RlLXt7dmlkfX1cIiksIHtcbiAgICAgICAgICAgIHRleHQ6IFwie3tyZXBvcnQuZ2V0X2Fic29sdXRlX3VybH19XCIsXG4gICAgICAgICAgICB3aWR0aDogNjAsXG4gICAgICAgICAgICBoZWlnaHQ6IDYwLFxuICAgICAgICAgICAgY29sb3JEYXJrIDogXCIjMDAwMDAwXCIsXG4gICAgICAgICAgICBjb2xvckxpZ2h0IDogXCIjZmZmZmZmXCIsXG4gICAgICAgICAgICBjb3JyZWN0TGV2ZWwgOiBRUkNvZGUuQ29ycmVjdExldmVsLkhcbiAgICAgICAgfSk7Ki9cbiAgICAgICAgXG4gICAgICAgIC8vIHNoYXJlIGJ1dHRvblxuICAgICAgICAvKlxuICAgICAgICBjb25zdCBzaGFyZURhdGEgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ3t7cmVwb3J0Lm5hbWV9fScsXG4gICAgICAgICAgICB0ZXh0OiAnQ2hlY2sgb3V0IHRoaXMgZGF0YSB2aXp1YWxpemF0aW9uIG9uIFlvdVZpeiEnLFxuICAgICAgICAgICAgdXJsOiAne3tyZXBvcnQuZ2V0X2Fic29sdXRlX3VybH19J1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXBvcnQtYnV0dG9uLXNoYXJlJyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdFBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVwb3J0LXNoYXJlLXJlc3VsdCcpO1xuICAgICAgICAvLyBTaGFyZSBtdXN0IGJlIHRyaWdnZXJlZCBieSBcInVzZXIgYWN0aXZhdGlvblwiXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgbmF2aWdhdG9yLnNoYXJlKHNoYXJlRGF0YSk7XG4gICAgICAgICAgICAgICAgLy9yZXN1bHRQYXJhLnRleHRDb250ZW50ID0gJ01ETiBzaGFyZWQgc3VjY2Vzc2Z1bGx5JztcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHtlcnJ9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAqL1xuICAgICAgICBIYW5kbGVyLnNoYXJlTGlzdGVuZXIoJyNyZXBvcnQtYnV0dG9uLXNoYXJlJywgJ251bGwnLCAnUmVwb3J0JywgJ0NoZWNrIG91dCB0aGlzIGRhdGEgdml6dWFsaXphdGlvbiBvbiBZb3VWaXohJywgJ2h0dHBzOi8veW91dml6LmFwcCcpO1xuICAgIH1cbn1cblxuSGFuZGxlci5kc1RodW1iSW5pdCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgdmFyIGQgPSBub2RlLmRhdGFzZXQ7XG4gICAgLy8gaW5pdCB2aXpzXG4gICAgLy92YXIgYXJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi55di12aXpyZXBvcnQgZGl2IHNjcmlwdFwiKTtcbiAgICB2YXIgcyA9IFwiI2Nhcm91c2VsLVwiLmNvbmNhdChkLnl2SWQsIFwiIC55di1kc3RodW1iXCIpO1xuICAgIHZhciBhcnIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHMpO1xuICAgIGZvciAodmFyIG4gPSAwOyBuIDwgYXJyLmxlbmd0aDsgbisrKSB7XG5cbiAgICAgICAgLy9nZXQgcGxvdCBkaXYsIHRhYlxuICAgICAgICBjb25zdCB0aHVtYiA9IGFycltuXTtcbiAgICAgICAgY29uc3QgdGh1bWJpZCA9IHRodW1iLmlkO1xuICAgICAgICBjb25zdCBwbG90X2RpdiA9IFwicGxvdEJveC1kc3RodW1iLVwiICsgdGh1bWJpZDtcbiAgICAgICAgY29uc3QgcGxvdF9kaXZfZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwbG90X2Rpdik7XG5cbiAgICAgICAgLy9nZXQganNvblxuICAgICAgICBjb25zdCBqc29uX2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5b3V2aXo6ZGF0YTpkc3RodW1iLVwiICsgdGh1bWJpZCk7XG4gICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKGpzb25fZWwudGV4dENvbnRlbnQpO1xuXG4gICAgICAgIC8vbWFrZSBwbG90XG4gICAgICAgIGNvbnN0IGRhdGEgPSBqc29uLnBsb3RfZGF0YTtcbiAgICAgICAgY29uc3QgbGF5b3V0ID0ganNvbi5wbG90X2xheW91dDtcbiAgICAgICAgLy92YXIgY29uZmlnID0ge3Jlc3BvbnNpdmU6IHRydWV9O1xuICAgICAgICAvL2NvbnN0IHBsb3RfZGl2X291dGVyX2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGh1bWJpZCk7XG4gICAgICAgIGNvbnN0IHBsb3RfZGl2X291dGVyX2VsID0gdGh1bWIucGFyZW50RWxlbWVudDtcbiAgICAgICAgbGF5b3V0LndpZHRoID0gcGxvdF9kaXZfb3V0ZXJfZWwuY2xpZW50V2lkdGg7XG4gICAgICAgIC8vbGF5b3V0LmhlaWdodCA9IHBsb3RfZGl2X291dGVyX2VsLmNsaWVudEhlaWdodDtcbiAgICAgICAgbGF5b3V0LmhlaWdodCA9IDI1MDtcbiAgICAgICAgbGF5b3V0Lm1hcmdpbi50ID0gMTU7XG4gICAgICAgIGxheW91dC5tYXJnaW4uYiA9IDY4O1xuICAgICAgICBsYXlvdXQubWFyZ2luLnIgPSAxMDtcbiAgICAgICAgbGF5b3V0LnNob3dsZWdlbmQgPSBmYWxzZTtcbiAgICAgICAgLy9pZihsYXlvdXQueGF4aXMudmlzaWJsZSkgbGF5b3V0LnhheGlzLnZpc2libGUgPSBmYWxzZTsgXG4gICAgICAgIGlmKGxheW91dC54YXhpcy5zaG93dGlja2xhYmVscyl7XG4gICAgICAgICAgICBsYXlvdXQueGF4aXMuc2hvd3RpY2tsYWJlbHMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvL2lmKGxheW91dC55YXhpcy52aXNpYmxlKSBsYXlvdXQueWF4aXMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICBpZihsYXlvdXQueWF4aXMuc2hvd3RpY2tsYWJlbHMpeyBcbiAgICAgICAgICAgIGxheW91dC55YXhpcy5zaG93dGlja2xhYmVscyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8qbGF5b3V0LmxlZ2VuZCA9IHtcbiAgICAgICAgICAgIHg6IDEsXG4gICAgICAgICAgICB4YW5jaG9yOiAncmlnaHQnLFxuICAgICAgICAgICAgeTogMSxcbiAgICAgICAgICAgIGJnY29sb3I6ICcjMDAwMDAwMDAnLFxuICAgICAgICB9OyovXG4gICAgICAgIGxheW91dC5jbGlja21vZGUgPSAnbm9uZSc7XG4gICAgICAgIGxheW91dC5kcmFnbW9kZSA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjb25maWcgPSB7ZGlzcGxheU1vZGVCYXI6IGZhbHNlLCBzY3JvbGxab29tOiBmYWxzZX07XG4gICAgICAgIFxuICAgICAgICAvL3ZhciBpbWdfanBnPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanBnLWV4cG9ydCcpO1xuICAgICAgICBQbG90bHkucmVhY3QocGxvdF9kaXYsIGRhdGEsIGxheW91dCwgY29uZmlnKTtcbiAgICAgICAgXG4gICAgICAgIC8vIHN0YXRpYyBpbWFnZSBpbiBqcGcgZm9ybWF0XG4gICAgICAgIC8qXG5cbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICBmdW5jdGlvbihnZClcbiAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFBsb3RseS50b0ltYWdlKGdkLHtoZWlnaHQ6MzAwLHdpZHRoOjMwMH0pXG4gICAgICAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24odXJsKVxuICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgIGltZ19qcGcuc3JjID0gdXJsO1xuICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICovXG5cbiAgICAgICAgLy9hZGQgcmVzaXplIGxpc3RlbmVyXG4gICAgICAgIC8qd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUocGxvdF9kaXZfZWwpLmRpc3BsYXkgIT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICAgdmFyIHVwZGF0ZSA9IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogcGxvdF9kaXZfZWwuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBwbG90X2Rpdl9lbC5jbGllbnRIZWlnaHRcbiAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgIGlmKHVwZGF0ZS53aWR0aCAhPT0gMCAmJiB1cGRhdGUuaGVpZ2h0ICE9PSAwKSBQbG90bHkucmVsYXlvdXQocGxvdF9kaXYsIHVwZGF0ZSk7XG4gICAgICAgICAgICAgLy9ldmFsKHNjcmlwdC5pbm5lckhUTUwpO1xuICAgICAgICAgfVxuICAgICAgICB9KTsqL1xuICAgICAgICBsZXQgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICAgICAgICBmb3IobGV0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuY29udGVudEJveFNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRmlyZWZveCBpbXBsZW1lbnRzIGBjb250ZW50Qm94U2l6ZWAgYXMgYSBzaW5nbGUgY29udGVudCByZWN0LCByYXRoZXIgdGhhbiBhbiBhcnJheVxuICAgICAgICAgICAgICAgICAgICAvL2NvbnN0IGNvbnRlbnRCb3hTaXplID0gQXJyYXkuaXNBcnJheShlbnRyeS5jb250ZW50Qm94U2l6ZSkgPyBlbnRyeS5jb250ZW50Qm94U2l6ZVswXSA6IGVudHJ5LmNvbnRlbnRCb3hTaXplO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGxvdF9kaXZfb3V0ZXJfZWwuY2xpZW50V2lkdGggPj0gMTAgfHwgcGxvdF9kaXZfb3V0ZXJfZWwuY2xpZW50SGVpZ2h0ID49IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHBsb3RfZGl2X291dGVyX2VsLmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogcGxvdF9kaXZfb3V0ZXJfZWwuY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgUGxvdGx5LnJlbGF5b3V0KHBsb3RfZGl2LCB1cGRhdGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsb3RfZGl2X291dGVyX2VsLmNsaWVudFdpZHRoID49IDEwIHx8IHBsb3RfZGl2X291dGVyX2VsLmNsaWVudEhlaWdodCA+PSAxMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBwbG90X2Rpdl9vdXRlcl9lbC5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHBsb3RfZGl2X291dGVyX2VsLmNsaWVudEhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsb3RseS5yZWxheW91dChwbG90X2RpdiwgdXBkYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9sZXQgbWlkUGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlkUGFuZWwnKTtcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShwbG90X2Rpdl9lbCk7XG5cbiAgICAgICAgLy8gcmVzaXplIG9uIG1vZGFsLnNob3dcbiAgICAgICAgLypcbiAgICAgICAgbXIuYWRkRXZlbnRMaXN0ZW5lcignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlID0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBwbG90X2Rpdl9lbC5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHBsb3RfZGl2X2VsLmNsaWVudEhlaWdodFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFBsb3RseS5yZWxheW91dChwbG90X2RpdiwgdXBkYXRlKTtcbiAgICAgICAgfSk7Ki9cblxuICAgIH1cbn1cbiBcbkhhbmRsZXIuY29tcG9uZW50SW5pdCA9IGFzeW5jIGZ1bmN0aW9uKG5vZGVfYXJyYXkpIHtcbiAgICBub2RlX2FycmF5LmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgaWYoSGFuZGxlcltub2RlLmRhdGFzZXQueXZJbml0XSl7XG4gICAgICAgICAgICBIYW5kbGVyW25vZGUuZGF0YXNldC55dkluaXRdKG5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWN0aXZhdGUgYnV0dG9uXG4gICAgICAgIGlmKG5vZGUuZGF0YXNldC55dkJ1dHRvbiAhPSBcIlwiKXtcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iobm9kZS5kYXRhc2V0Lnl2QnV0dG9uKSl7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihub2RlLmRhdGFzZXQueXZCdXR0b24pLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuSGFuZGxlci5sb2FkWVZDb21wb25lbnRzID0gYXN5bmMgZnVuY3Rpb24gKHJvb3RFbGVtZW50SUQpIHtcbiAgICBcbiAgICBsZXQgbm9kZUxpc3Q7XG4gICAgXG4gICAgaWYocm9vdEVsZW1lbnRJRCkge1xuICAgICAgICBub2RlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocm9vdEVsZW1lbnRJRC5jb25jYXQoXCIgXCIsIFwiLnl2LWNvbXBvbmVudFwiKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBub2RlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIueXYtY29tcG9uZW50XCIpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBub2RlcyA9IEFycmF5LmZyb20obm9kZUxpc3QpO1xuICAgIFxuICAgIC8vMS5Tb3J0IGludG8gZ3JvdXBzOiBkYXRhLXl2LWNvbXBvbmVudCAuLi5ORVcgICAgXG4gICAgSGFuZGxlci5jb21wb25lbnRzID0ge307XG4gICAgXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwobm9kZXMubWFwKGFzeW5jIChub2RlKSA9PiB7XG4gICAgICAgIC8vIGdldCB1bmljb3JuIGRhdGEsIGFkZCB0byBub2RlXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobm9kZS5kYXRhc2V0Lnl2TGluayk7XG4gICAgICAgIG5vZGUuaW5uZXJIVE1MID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICB2YXIgc2VsZWN0b3IgPSAnIycgKyBub2RlLmlkICsgJyBzY3JpcHRbaWRePVwidW5pY29ybjpkYXRhXCJdJztcbiAgICAgICAgdmFyIHVfc2NyaXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgIGlmKHVfc2NyaXB0KSB7XG4gICAgICAgICAgICBub2RlLnVuaWNvcm5fZGF0YSA9IEpTT04ucGFyc2UodV9zY3JpcHQudGV4dENvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICAgIC8vdW5pY29ybiBpbml0XG4gICAgICAgIFVuaWNvcm4uY29tcG9uZW50SW5pdChub2RlLnVuaWNvcm5fZGF0YSk7XG4gICAgICAgIC8vIGdyb3VwIGNvbXBvbmVudHNcbiAgICAgICAgdmFyIGMgPSBub2RlLmRhdGFzZXRbJ3l2Q29tcG9uZW50J107XG4gICAgICAgIGlmKCFIYW5kbGVyLmNvbXBvbmVudHNbY10pIHtcbiAgICAgICAgICAgIEhhbmRsZXIuY29tcG9uZW50c1tjXSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIEhhbmRsZXIuY29tcG9uZW50c1tjXVtub2RlLmlkXSA9IG5vZGU7XG4gICAgfSkpO1xuICAgIFxuICAgIE9iamVjdC5rZXlzKEhhbmRsZXIuY29tcG9uZW50cykuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICAvLyBwcm9jZXNzIGJ5IGdyb3VwXG4gICAgICAgIHN3aXRjaChjKSB7XG4gICAgICAgICAgICBjYXNlICd2aXonOiBcbiAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKEhhbmRsZXIuY29tcG9uZW50c1tjXSkuZm9yRWFjaCgodik9PntcbiAgICAgICAgICAgICAgICAgICAgSGFuZGxlci5uYXZpZ2F0b3IuYWRkKFwidml6XCIsIHYuZGF0YXNldC55dklkLCB2LnVuaWNvcm5fZGF0YS5kYXRhLnZpei5uYW1lKTsgLy9ub2RlLnVuaWNvcm5fZGF0YS5kYXRhLnZpei5uYW1lXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgSGFuZGxlci5uYXZpZ2F0b3IuYWN0aXZlID0gSGFuZGxlci5uYXZpZ2F0b3IudGFyZ2V0c1swXS5pZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JlcG9ydCc6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkYXRhZnJhbWUnOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vIGN1c3RvbSBpbml0IGVhY2ggaXRlbVxuICAgICAgICBIYW5kbGVyLmNvbXBvbmVudEluaXQoT2JqZWN0LnZhbHVlcyhIYW5kbGVyLmNvbXBvbmVudHNbY10pKTtcbiAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vICBhd2FpdCBnaXZlUHJpemVUb1BsYXllcihwbGF5ZXIpO1xuICAgIC8vfSkpO1xuICAgIC8qXG4gICAgdmFyIHAgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIG5vZGVzLmZvckVhY2goYXN5bmMgKG5vZGUpID0+IHtcbiAgICAgICAgICAgIC8vIGdldCB1bmljb3JuIGRhdGEsIGFkZCB0byBub2RlXG4gICAgICAgICAgICBmZXRjaChcIi5cIiArIG5vZGUuZGF0YXNldC55dkxpbmspXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKSBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmlubmVySFRNTCA9IGRhdGE7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdG9yID0gJyMnICsgbm9kZS5pZCArICcgc2NyaXB0W2lkXj1cInVuaWNvcm46ZGF0YVwiXSc7XG4gICAgICAgICAgICAgICAgdmFyIHVfc2NyaXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgaWYodV9zY3JpcHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS51bmljb3JuX2RhdGEgPSBKU09OLnBhcnNlKHVfc2NyaXB0LnRleHRDb250ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy91bmljb3JuIGluaXRcbiAgICAgICAgICAgICAgICBVbmljb3JuLmNvbXBvbmVudEluaXQobm9kZS51bmljb3JuX2RhdGEpOyAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZHVtbXkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGdyb3VwIGNvbXBvbmVudHNcbiAgICAgICAgICAgICAgICB2YXIgYyA9IG5vZGUuZGF0YXNldFsneXZDb21wb25lbnQnXTtcbiAgICAgICAgICAgICAgICBpZighSGFuZGxlci5jb21wb25lbnRzW2NdKSB7XG4gICAgICAgICAgICAgICAgICAgIEhhbmRsZXIuY29tcG9uZW50c1tjXSA9IHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBIYW5kbGVyLmNvbXBvbmVudHNbY11bbm9kZS5pZF0gPSBub2RlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgIH0pOyovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIC8vICAgMi5Jbml0OiBnZW5lcmljLCBjdXN0b20gIC4uLlNBTUVcbi8qICAgIG5vZGVzLmZvckVhY2goYXN5bmMgKG5vZGUpID0+IHtcbiAgICAgICAgdmFyIG5vZGVfZGF0YSA9IG5vZGUuZGF0YXNldDtcblxuICAgICAgICAvL2ZldGNoKFwiLi9cIiArIG5vZGVfZGF0YS55dkNvbXBvbmVudCArIFwiL1wiICsgbm9kZV9kYXRhLnl2SWQpXG4gICAgICAgIGZldGNoKFwiLlwiICsgbm9kZV9kYXRhLnl2TGluaylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKSBcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBub2RlLmlubmVySFRNTCA9IGRhdGE7XG4gICAgICAgICAgICBsZXQgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuVW5pY29ybiAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RvcCBsb29wXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGluaXQgdW5pY29ybiBjb21wb25lbnQgZm9yIGFqYXggZWRpdGluZ1xuICAgICAgICAgICAgICAgICAgICB2YXIgdV9zY3JpcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIG5vZGUuaWQgKyAnIHNjcmlwdFtpZF49XCJ1bmljb3JuOmRhdGFcIl0nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYodV9zY3JpcHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHUgPSBVbmljb3JuO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5pdCB1X2NvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgdS5jb21wb25lbnRJbml0KEpTT04ucGFyc2UodV9zY3JpcHQudGV4dENvbnRlbnQpKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzYXZlIHVfZGF0YSBmb3IgbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUudW5pY29ybl9kYXRhID0gSlNPTi5wYXJzZSh1X3NjcmlwdC50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGluaXQgY29tcG9uZW50IHRvIHNldHVwIGFmdGVyIGRvd25sb2FkXG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gLSBtYWtlIGluaXQgc3VwcG9ydCBhc3luYyBieSBkZWZhdWx0P1xuICAgICAgICAgICAgICAgICAgICBpZihIYW5kbGVyW25vZGVfZGF0YS55dkluaXRdICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgSGFuZGxlcltub2RlX2RhdGEueXZJbml0XShub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGFjdGl2YXRlIGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5vZGVfZGF0YS55dkJ1dHRvbikgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5vZGVfZGF0YS55dkJ1dHRvbikuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgIH0pO1xuICAgIH0pOyovXG4gICAgXG59XG5cbi8vIExPQUQgWVYtQ09NUFNcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBIYW5kbGVyLmxvYWRZVkNvbXBvbmVudHMoKTtcbn0pO1xuXG52YXIgeXZtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcueXZtb2RhbCcpO1xudmFyIGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIik7XG5mb3IgKGxldCBpID0gMDsgaSA8IHl2bW9kYWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgYm9keS5hcHBlbmRDaGlsZCh5dm1vZGFsc1tpXSk7IFxufVxuXG4vL2dsb2JhbCB0b2dnbGUgdG8ga2VlcCBvZmZjYW52YXMgb3BlbiB3aGlsZSBlZGl0aW5nIGRhdGEgc291cmNlXG52YXIgZWRpdGluZ19maWxlID0gZmFsc2U7XG5cbi8vd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJkZXZpY2VvcmllbnRhdGlvblwiLCAoZXZlbnQpID0+IHtcbi8vICAgIHZhciBhYnNvbHV0ZSA9IGV2ZW50LmFic29sdXRlO1xuLy8gICAgdmFyIGFscGhhICAgID0gZXZlbnQuYWxwaGE7XG4vLyAgICB2YXIgYmV0YSAgICAgPSBldmVudC5iZXRhO1xuLy8gICAgdmFyIGdhbW1hICAgID0gZXZlbnQuZ2FtbWE7XG4vLyAgICBhbGVydChhbHBoYSk7XG4vL31cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGhhbW1lcnRpbWUgPSBIYW1tZXIoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXSk7XG4gICAgaGFtbWVydGltZS5vbignc3dpcGVsZWZ0IHN3aXBlcmlnaHQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgc3dpdGNoKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N3aXBlbGVmdCc6IFxuICAgICAgICAgICAgICAgIC8vYWxlcnQoZXZlbnQudHlwZSk7XG4gICAgICAgICAgICAgICAgSGFuZGxlci5uYXZpZ2F0b3IuZm9yd2FyZCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3dpcGVyaWdodCc6XG4gICAgICAgICAgICAgICAgLy9hbGVydChldmVudC50eXBlKTtcbiAgICAgICAgICAgICAgICBIYW5kbGVyLm5hdmlnYXRvci5iYWNrKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICAvL3RpbWUgcmVmcmVzaFxuICAgIGNvbnN0IHRyZWZyZXNoZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHJlZnJlc2gnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyZWZyZXNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgSGFuZGxlci50aW1lUmVmcmVzaCh0cmVmcmVzaGVzW2ldLmxhc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MLCB0cmVmcmVzaGVzW2ldLmZpcnN0RWxlbWVudENoaWxkKTsgXG4gICAgfVxufSk7XG4gXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoZXZlbnQpID0+IHtcbiAgICB2YXIgdG9wX25hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9wLW5hdlwiKTtcbiAgICBcbiAgICBsZXQgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICAgICAgICBmb3IobGV0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuY29udGVudEJveFNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRmlyZWZveCBpbXBsZW1lbnRzIGBjb250ZW50Qm94U2l6ZWAgYXMgYSBzaW5nbGUgY29udGVudCByZWN0LCByYXRoZXIgdGhhbiBhbiBhcnJheVxuICAgICAgICAgICAgICAgICAgICAvL2NvbnN0IGNvbnRlbnRCb3hTaXplID0gQXJyYXkuaXNBcnJheShlbnRyeS5jb250ZW50Qm94U2l6ZSkgPyBlbnRyeS5jb250ZW50Qm94U2l6ZVswXSA6IGVudHJ5LmNvbnRlbnRCb3hTaXplO1xuICAgICAgICAgICAgICAgICAgICBpZihIYW5kbGVyLnRvcF9uYXZfaW5pdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9wLW5hdlwiKS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy92YXIgcnMgPSBnZXRDb21wdXRlZFN0eWxlKHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9ycy5nZXRQcm9wZXJ0eVZhbHVlKCctLXQtbmF2JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS10b3AtbmF2JywgaGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBIYW5kbGVyLnRvcF9uYXZfaW5pdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZihIYW5kbGVyLnRvcF9uYXZfaW5pdCkge1xuICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3AtbmF2XCIpLm9mZnNldEhlaWdodDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy92YXIgcnMgPSBnZXRDb21wdXRlZFN0eWxlKHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9ycy5nZXRQcm9wZXJ0eVZhbHVlKCctLXQtbmF2JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS10b3AtbmF2JywgaGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBIYW5kbGVyLnRvcF9uYXZfaW5pdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIG9ic2VydmVyLm9ic2VydmUodG9wX25hdik7XG59KTtcbiBcbi8qXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKGV2ZW50KSA9PiB7XG4gICAgdmFyIG1pZFBhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaWRQYW5lbFwiKVxuIFxuICAgIGxldCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICAgICAgICAgIGZvcihsZXQgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5jb250ZW50Qm94U2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBGaXJlZm94IGltcGxlbWVudHMgYGNvbnRlbnRCb3hTaXplYCBhcyBhIHNpbmdsZSBjb250ZW50IHJlY3QsIHJhdGhlciB0aGFuIGFuIGFycmF5XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc3QgY29udGVudEJveFNpemUgPSBBcnJheS5pc0FycmF5KGVudHJ5LmNvbnRlbnRCb3hTaXplKSA/IGVudHJ5LmNvbnRlbnRCb3hTaXplWzBdIDogZW50cnkuY29udGVudEJveFNpemU7XG4gICAgICAgICAgICAgICAgICAgIGlmKEhhbmRsZXIuZGF0YXNvdXJjZV9pbmZvX2luaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlkUGFuZWxcIikub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy92YXIgciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3ZhciBycyA9IGdldENvbXB1dGVkU3R5bGUocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3JzLmdldFByb3BlcnR5VmFsdWUoJy0tdC1uYXYnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3Iuc3R5bGUuc2V0UHJvcGVydHkoJy0tdC1uYXYnLCBoZWlnaHQgKyAncHgnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudml6LWluZm8tcGFuZWxcIikuc3R5bGUuc2V0UHJvcGVydHkoJ3dpZHRoJywgd2lkdGggKyAncHgnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEhhbmRsZXIuZGF0YXNvdXJjZV9pbmZvX2luaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoSGFuZGxlci50b3BfbmF2X2luaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaWRQYW5lbFwiKS5vZmZzZXRXaWR0aDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy92YXIgciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3ZhciBycyA9IGdldENvbXB1dGVkU3R5bGUocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3JzLmdldFByb3BlcnR5VmFsdWUoJy0tdC1uYXYnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpei1pbmZvLXBhbmVsXCIpLnN0eWxlLnNldFByb3BlcnR5KCd3aWR0aCcsIHdpZHRoICsgJ3B4IWltcG9ydGFudDsnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEhhbmRsZXIuZGF0YXNvdXJjZV9pbmZvX2luaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKG1pZFBhbmVsKTtcbn0pO1xuKi9cbiBcbi8vIHNoYXJpbmcgYXBwIGxpbmtcbi8qXG5jb25zdCBzaGFyZUFwcCA9IHtcbiAgICAvL3RpdGxlOiAne3tyZXBvcnQubmFtZX19JyxcbiAgICB0ZXh0OiAnQ2hlY2sgb3V0IFlvdVZpeiAtIGNvb2wgZGF0YSB2aXp1YWxpemF0aW9uIGFwcCEnLFxuICAgIHVybDogJ2h0dHBzOi8vd3d3LnlvdXZpei5hcHAvJ1xufVxuY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NldHRpbmdzLWJ1dHRvbi1zaGFyZScpO1xuYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IG5hdmlnYXRvci5zaGFyZShzaGFyZUFwcCk7XG4gICAgICAgIC8vcmVzdWx0UGFyYS50ZXh0Q29udGVudCA9ICdNRE4gc2hhcmVkIHN1Y2Nlc3NmdWxseSc7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHtlcnJ9YCk7XG4gICAgfVxufSk7XG4qL1xuXG5IYW5kbGVyLnNoYXJlTGlzdGVuZXIoJyNzZXR0aW5ncy1idXR0b24tc2hhcmUnLCAnbnVsbCcsICdZb3VWaXonLCAnQ2hlY2sgb3V0IHRoaXMgZnJlZSBkYXRhIHZpenVhbGl6YXRpb24gYXBwIScsICdodHRwczovL3lvdXZpei5hcHAnKTtcbkhhbmRsZXIuc2hhcmVMaXN0ZW5lcignI3NoYXJlLWJ1dHRvbi1zaGFyZScsICdudWxsJywgJ1JlcG9ydCcsICdDaGVjayBvdXQgdGhpcyBkYXRhIHZpenVhbGl6YXRpb24gb24gWW91Vml6IScsICdodHRwczovL3lvdXZpei5hcHAnKTtcbiBcbiAvLyBuYXZiYXIgc2hhcmVcbnZhciBzaGFyZURhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdmJhci1idXR0b24tc2hhcmVcIilcbmlmKHNoYXJlRGF0YSl7XG4gICAgSGFuZGxlci5zaGFyZUxpc3RlbmVyKCcjbmF2YmFyLWJ1dHRvbi1zaGFyZScsICdudWxsJywgc2hhcmVEYXRhLmRhdGFzZXQudGV4dCwgIHNoYXJlRGF0YS5kYXRhc2V0LnRleHQsICBzaGFyZURhdGEuZGF0YXNldC51cmwpO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKGV2ZW50KSA9PiB7XG4gICAgVW5pY29ybi5hZGRFdmVudExpc3RlbmVyKFwidXBkYXRlZFwiLCAoY29tcG9uZW50KSA9PntcblxuICAgICAgICBzd2l0Y2goY29tcG9uZW50Lm5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FwcCc6XG4gICAgICAgICAgICAgICAgLy8gZGF0YSBzb3VyY2Ugb2ZmIGNhbnZhc1xuICAgICAgICAgICAgICAgIGlmIChlZGl0aW5nX2ZpbGUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGVzdE9mZkNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiT0ZGQ0FOVkFTXCIpO1xuICAgICAgICAgICAgICAgICAgICAvL3ZhciBic29jID0gYm9vdHN0cmFwLk9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKHRlc3RPZmZDYW52YXMpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYnNvYyA9IE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKHRlc3RPZmZDYW52YXMpO1xuICAgICAgICAgICAgICAgICAgICBic29jLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBkcm9wZG93biBtZW51c1xuICAgICAgICAgICAgICAgIHZhciB0bWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYi1tb3JlLWRyb3Bkb3duXCIpO1xuICAgICAgICAgICAgICAgIGlmICh0bWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9ib290c3RyYXAuRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0bWQpLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgLy9ib290c3RyYXAuRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0bWQpO1xuICAgICAgICAgICAgICAgICAgICBEcm9wZG93bi5nZXRPckNyZWF0ZUluc3RhbmNlKHRtZCkuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICBEcm9wZG93bi5nZXRPckNyZWF0ZUluc3RhbmNlKHRtZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHVzZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlci1zZXR0aW5ncy1kcm9wZG93blwiKTtcbiAgICAgICAgICAgICAgICBpZiAodXNkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vYm9vdHN0cmFwLkRyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodXNkKS5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vYm9vdHN0cmFwLkRyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodXNkKTtcbiAgICAgICAgICAgICAgICAgICAgRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh1c2QpLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh1c2QpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vZHJvcHpvbmVcbiAgICAgICAgICAgICAgICB2YXIgZHpFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkcm9wXCIpO1xuICAgICAgICAgICAgICAgIHZhciBteURyb3B6b25lO1xuICAgICAgICAgICAgICAgIGlmIChkekVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGR6RWxlbWVudC5kcm9wem9uZSkge1xuICAgICAgICAgICAgICAgICAgICBkekVsZW1lbnQuZHJvcHpvbmUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG15RHJvcHpvbmUgPSBuZXcgRHJvcHpvbmUoXCIjZHJvcFwiKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy9ib290c3RyYXAgdGFibGUgdG8gaGFuZGxlIHJldHVybiBmcm9tIGZpbGUgZWRpdFxuICAgICAgICAgICAgICAgIC8vYm9vdHN0cmFwIHRhYmxlXG4gICAgICAgICAgICAgICAgJCgnI3RhYmxlJykuYm9vdHN0cmFwVGFibGUoKTsgLy8gaW5pdCB2aWEgamF2YXNjcmlwdFxuXG4gICAgICAgICAgICAgICAgLy8gZGF0YXRhYmxlIG1vZGFsXG4gICAgICAgICAgICAgICAgLy8gYXBwZW5kIG1vZGFscyB0byBwcmV2ZW50IHotbGF5ZXIgaXNzdWVzXG4gICAgICAgICAgICAgICAgdmFyIHl2bW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnl2bW9kYWwnKTtcbiAgICAgICAgICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHl2bW9kYWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoeXZtb2RhbHNbaV0pOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gbmF2YmFyIHNoYXJlXG4gICAgICAgICAgICAgICAgdmFyIHNkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZiYXItYnV0dG9uLXNoYXJlXCIpO1xuICAgICAgICAgICAgICAgIGlmIChzZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2hhcmVEYXRhID0gc2QuZGF0YXNldDtcbiAgICAgICAgICAgICAgICAgICAgSGFuZGxlci5zaGFyZUxpc3RlbmVyKCcjbmF2YmFyLWJ1dHRvbi1zaGFyZScsICdudWxsJywgc2hhcmVEYXRhLnRleHQsICBzaGFyZURhdGEudGV4dCwgIHNoYXJlRGF0YS51cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIC8vIGxpc3Qgc2Nyb2xsZG93blxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcG9uZW50LmN1cnJlbnRBY3Rpb25RdWV1ZVswXS5wYXJ0aWFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50LmN1cnJlbnRBY3Rpb25RdWV1ZVswXS5wYXJ0aWFsc1tpXS5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgSGFuZGxlci5sb2FkWVZDb21wb25lbnRzKFwiI1wiLmNvbmNhdChjb21wb25lbnQuY3VycmVudEFjdGlvblF1ZXVlWzBdLnBhcnRpYWxzW2ldLmlkKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY29tcG9uZW50LmN1cnJlbnRBY3Rpb25RdWV1ZVswXS5wYXJ0aWFsc1tpXS50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEhhbmRsZXIubG9hZFlWQ29tcG9uZW50cyhcIiNcIi5jb25jYXQoY29tcG9uZW50LmN1cnJlbnRBY3Rpb25RdWV1ZVswXS5wYXJ0aWFsc1tpXS50YXJnZXQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2xvZ2luJzpcbiAgICAgICAgICAgICAgICAvLyBhcHBlbmQgbW9kYWxzIHRvIHByZXZlbnQgei1sYXllciBpc3N1ZXNcbiAgICAgICAgICAgICAgICB2YXIgeXZtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcueXZtb2RhbCcpO1xuICAgICAgICAgICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5XCIpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeXZtb2RhbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZCh5dm1vZGFsc1tpXSk7IFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciB1c2QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXItc2V0dGluZ3MtZHJvcGRvd25cIik7XG4gICAgICAgICAgICAgICAgaWYgKHVzZCkge1xuICAgICAgICAgICAgICAgICAgICAvL2Jvb3RzdHJhcC5Ecm9wZG93bi5nZXRPckNyZWF0ZUluc3RhbmNlKHVzZCkuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAvL2Jvb3RzdHJhcC5Ecm9wZG93bi5nZXRPckNyZWF0ZUluc3RhbmNlKHVzZCk7XG4gICAgICAgICAgICAgICAgICAgIERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodXNkKS5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodXNkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd2aXonOlxuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgdmFyIGFyciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ5b3VWaXpPblVwZGF0ZVwiKTsgLy8gb25seSByZWZyZXNoZWQgdml6L3NcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IGFyci5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgICAgICAgICBldmFsKGFycltuXS5pbm5lckhUTUwpOyAvLyBydW4gc2NyaXB0XG4gICAgICAgICAgICAgICAgfSovXG4gICAgICAgICAgICAgICAgLy9IYW5kbGVyLnZpekluaXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBjb21wb25lbnQuaWQpKTtcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KGNvbXBvbmVudC5wYXJlbnROb2RlKTtcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KGNvbXBvbmVudC5pZCk7XG4gICAgICAgICAgICAgICAgLy9hbGVydChjb21wb25lbnQucm9vdC5wYXJlbnROb2RlKTtcbiAgICAgICAgICAgICAgICBIYW5kbGVyLnZpekluaXQoY29tcG9uZW50LnJvb3QucGFyZW50Tm9kZSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgJCgnI3RhYmxlJykuYm9vdHN0cmFwVGFibGUoKTsgLy8gaW5pdCB2aWEgamF2YXNjcmlwdFxuXG4gICAgICAgICAgICAgICAgLy8gZGF0YXRhYmxlIG1vZGFsXG4gICAgICAgICAgICAgICAgLy8gYXBwZW5kIG1vZGFscyB0byBwcmV2ZW50IHotbGF5ZXIgaXNzdWVzXG4gICAgICAgICAgICAgICAgdmFyIHl2bW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnl2bW9kYWwnKTtcbiAgICAgICAgICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHl2bW9kYWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoeXZtb2RhbHNbaV0pOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkYXRhdGFibGUnOlxuICAgICAgICAgICAgICAgIC8vYm9vdHN0cmFwIHRhYmxlXG4gICAgICAgICAgICAgICAgJCgnI3RhYmxlJykuYm9vdHN0cmFwVGFibGUoKTsgLy8gaW5pdCB2aWEgamF2YXNjcmlwdFxuXG4gICAgICAgICAgICAgICAgLy8gZGF0YXRhYmxlIG1vZGFsXG4gICAgICAgICAgICAgICAgLy8gYXBwZW5kIG1vZGFscyB0byBwcmV2ZW50IHotbGF5ZXIgaXNzdWVzXG4gICAgICAgICAgICAgICAgdmFyIHl2bW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnl2bW9kYWwnKTtcbiAgICAgICAgICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHl2bW9kYWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoeXZtb2RhbHNbaV0pOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdnZXRtb3JlJzpcbiAgICAgICAgICAgICAgICAvLyBkYXRhdGFibGUgbW9kYWxcbiAgICAgICAgICAgICAgICAvLyBhcHBlbmQgbW9kYWxzIHRvIHByZXZlbnQgei1sYXllciBpc3N1ZXNcbiAgICAgICAgICAgICAgICB2YXIgeXZtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcueXZtb2RhbCcpO1xuICAgICAgICAgICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5XCIpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeXZtb2RhbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZCh5dm1vZGFsc1tpXSk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NvdXJjZWNvbnRyb2wnOlxuICAgICAgICAgICAgICAgIC8vIGRhdGF0YWJsZSBtb2RhbFxuICAgICAgICAgICAgICAgIC8vIGFwcGVuZCBtb2RhbHMgdG8gcHJldmVudCB6LWxheWVyIGlzc3Vlc1xuICAgICAgICAgICAgICAgIHZhciB5dm1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy55dm1vZGFsJyk7XG4gICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIik7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB5dm1vZGFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKHl2bW9kYWxzW2ldKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIERyb3B6b25lLm9wdGlvbnMuZHJvcCA9IHsgLy8gY2FtZWxpemVkIHZlcnNpb24gb2YgdGhlIGBpZGBcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1OYW1lOiBcImRvY3VtZW50XCIsIC8vIFRoZSBuYW1lIHRoYXQgd2lsbCBiZSB1c2VkIHRvIHRyYW5zZmVyIHRoZSBmaWxlXG4gICAgICAgICAgICAgICAgICAgIG1heEZpbGVzaXplOiAyLCAvLyBNQlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd2aXpyZXBvcnQnOlxuICAgICAgICAgICAgICAgIC8vIGRhdGF0YWJsZSBtb2RhbFxuICAgICAgICAgICAgICAgIC8vIGFwcGVuZCBtb2RhbHMgdG8gcHJldmVudCB6LWxheWVyIGlzc3Vlc1xuICAgICAgICAgICAgICAgIHZhciB5dm1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy55dm1vZGFsJyk7XG4gICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIik7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB5dm1vZGFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKHl2bW9kYWxzW2ldKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ZpbGVjb250cm9sJzpcbiAgICAgICAgICAgICAgICAkKCcjdGFibGUnKS5ib290c3RyYXBUYWJsZSgpOyAvLyBpbml0IHZpYSBqYXZhc2NyaXB0XG4gICAgICAgICAgICAgICAgLy8gZGF0YXRhYmxlIG1vZGFsXG4gICAgICAgICAgICAgICAgLy8gYXBwZW5kIG1vZGFscyB0byBwcmV2ZW50IHotbGF5ZXIgaXNzdWVzXG4gICAgICAgICAgICAgICAgdmFyIHl2bW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnl2bW9kYWwnKTtcbiAgICAgICAgICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHl2bW9kYWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoeXZtb2RhbHNbaV0pOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICB9KTtcbn0pO1xuICJdLCJuYW1lcyI6WyJOQU1FIiwiREFUQV9LRVkiLCJFVkVOVF9LRVkiLCJFVkVOVF9DTE9TRSIsIkVWRU5UX0NMT1NFRCIsIkNMQVNTX05BTUVfRkFERSIsIkNMQVNTX05BTUVfU0hPVyIsIkFsZXJ0IiwiQmFzZUNvbXBvbmVudCIsImNsb3NlIiwiY2xvc2VFdmVudCIsIkV2ZW50SGFuZGxlciIsInRyaWdnZXIiLCJfZWxlbWVudCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJpc0FuaW1hdGVkIiwiY29udGFpbnMiLCJfcXVldWVDYWxsYmFjayIsIl9kZXN0cm95RWxlbWVudCIsImRpc3Bvc2UiLCJqUXVlcnlJbnRlcmZhY2UiLCJjb25maWciLCJlYWNoIiwiZGF0YSIsImdldE9yQ3JlYXRlSW5zdGFuY2UiLCJ1bmRlZmluZWQiLCJzdGFydHNXaXRoIiwiVHlwZUVycm9yIiwiZW5hYmxlRGlzbWlzc1RyaWdnZXIiLCJkZWZpbmVKUXVlcnlQbHVnaW4iLCJWRVJTSU9OIiwiQ29uZmlnIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2V0RWxlbWVudCIsIl9jb25maWciLCJfZ2V0Q29uZmlnIiwiRGF0YSIsInNldCIsIm9mZiIsInByb3BlcnR5TmFtZSIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJjYWxsYmFjayIsImV4ZWN1dGVBZnRlclRyYW5zaXRpb24iLCJfbWVyZ2VDb25maWdPYmoiLCJfY29uZmlnQWZ0ZXJNZXJnZSIsIl90eXBlQ2hlY2tDb25maWciLCJnZXRJbnN0YW5jZSIsImdldCIsImV2ZW50TmFtZSIsIm5hbWUiLCJEQVRBX0FQSV9LRVkiLCJDTEFTU19OQU1FX0FDVElWRSIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFIiwiRVZFTlRfQ0xJQ0tfREFUQV9BUEkiLCJCdXR0b24iLCJ0b2dnbGUiLCJzZXRBdHRyaWJ1dGUiLCJvbiIsImRvY3VtZW50IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImJ1dHRvbiIsInRhcmdldCIsImNsb3Nlc3QiLCJBUlJPV19MRUZUX0tFWSIsIkFSUk9XX1JJR0hUX0tFWSIsIlRPVUNIRVZFTlRfQ09NUEFUX1dBSVQiLCJPUkRFUl9ORVhUIiwiT1JERVJfUFJFViIsIkRJUkVDVElPTl9MRUZUIiwiRElSRUNUSU9OX1JJR0hUIiwiRVZFTlRfU0xJREUiLCJFVkVOVF9TTElEIiwiRVZFTlRfS0VZRE9XTiIsIkVWRU5UX01PVVNFRU5URVIiLCJFVkVOVF9NT1VTRUxFQVZFIiwiRVZFTlRfRFJBR19TVEFSVCIsIkVWRU5UX0xPQURfREFUQV9BUEkiLCJDTEFTU19OQU1FX0NBUk9VU0VMIiwiQ0xBU1NfTkFNRV9TTElERSIsIkNMQVNTX05BTUVfRU5EIiwiQ0xBU1NfTkFNRV9TVEFSVCIsIkNMQVNTX05BTUVfTkVYVCIsIkNMQVNTX05BTUVfUFJFViIsIlNFTEVDVE9SX0FDVElWRSIsIlNFTEVDVE9SX0lURU0iLCJTRUxFQ1RPUl9BQ1RJVkVfSVRFTSIsIlNFTEVDVE9SX0lURU1fSU1HIiwiU0VMRUNUT1JfSU5ESUNBVE9SUyIsIlNFTEVDVE9SX0RBVEFfU0xJREUiLCJTRUxFQ1RPUl9EQVRBX1JJREUiLCJLRVlfVE9fRElSRUNUSU9OIiwiRGVmYXVsdCIsImludGVydmFsIiwia2V5Ym9hcmQiLCJwYXVzZSIsInJpZGUiLCJ0b3VjaCIsIndyYXAiLCJEZWZhdWx0VHlwZSIsIkNhcm91c2VsIiwiX2ludGVydmFsIiwiX2FjdGl2ZUVsZW1lbnQiLCJfaXNTbGlkaW5nIiwidG91Y2hUaW1lb3V0IiwiX3N3aXBlSGVscGVyIiwiX2luZGljYXRvcnNFbGVtZW50IiwiU2VsZWN0b3JFbmdpbmUiLCJmaW5kT25lIiwiX2FkZEV2ZW50TGlzdGVuZXJzIiwiY3ljbGUiLCJuZXh0IiwiX3NsaWRlIiwibmV4dFdoZW5WaXNpYmxlIiwiaGlkZGVuIiwiaXNWaXNpYmxlIiwicHJldiIsInRyaWdnZXJUcmFuc2l0aW9uRW5kIiwiX2NsZWFySW50ZXJ2YWwiLCJfdXBkYXRlSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIl9tYXliZUVuYWJsZUN5Y2xlIiwib25lIiwidG8iLCJpbmRleCIsIml0ZW1zIiwiX2dldEl0ZW1zIiwibGVuZ3RoIiwiYWN0aXZlSW5kZXgiLCJfZ2V0SXRlbUluZGV4IiwiX2dldEFjdGl2ZSIsIm9yZGVyIiwiZGVmYXVsdEludGVydmFsIiwiX2tleWRvd24iLCJTd2lwZSIsImlzU3VwcG9ydGVkIiwiX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMiLCJpbWciLCJmaW5kIiwiZW5kQ2FsbEJhY2siLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwic3dpcGVDb25maWciLCJsZWZ0Q2FsbGJhY2siLCJfZGlyZWN0aW9uVG9PcmRlciIsInJpZ2h0Q2FsbGJhY2siLCJlbmRDYWxsYmFjayIsInRlc3QiLCJ0YWdOYW1lIiwiZGlyZWN0aW9uIiwia2V5IiwiaW5kZXhPZiIsIl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50IiwiYWN0aXZlSW5kaWNhdG9yIiwicmVtb3ZlQXR0cmlidXRlIiwibmV3QWN0aXZlSW5kaWNhdG9yIiwiYWRkIiwiZWxlbWVudEludGVydmFsIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJhY3RpdmVFbGVtZW50IiwiaXNOZXh0IiwibmV4dEVsZW1lbnQiLCJnZXROZXh0QWN0aXZlRWxlbWVudCIsIm5leHRFbGVtZW50SW5kZXgiLCJ0cmlnZ2VyRXZlbnQiLCJyZWxhdGVkVGFyZ2V0IiwiX29yZGVyVG9EaXJlY3Rpb24iLCJmcm9tIiwic2xpZGVFdmVudCIsImlzQ3ljbGluZyIsIkJvb2xlYW4iLCJkaXJlY3Rpb25hbENsYXNzTmFtZSIsIm9yZGVyQ2xhc3NOYW1lIiwicmVmbG93IiwiY29tcGxldGVDYWxsQmFjayIsIl9pc0FuaW1hdGVkIiwiY2xlYXJJbnRlcnZhbCIsImlzUlRMIiwiZ2V0RWxlbWVudEZyb21TZWxlY3RvciIsImNhcm91c2VsIiwic2xpZGVJbmRleCIsIk1hbmlwdWxhdG9yIiwiZ2V0RGF0YUF0dHJpYnV0ZSIsIndpbmRvdyIsImNhcm91c2VscyIsIkVWRU5UX1NIT1ciLCJFVkVOVF9TSE9XTiIsIkVWRU5UX0hJREUiLCJFVkVOVF9ISURERU4iLCJDTEFTU19OQU1FX0NPTExBUFNFIiwiQ0xBU1NfTkFNRV9DT0xMQVBTSU5HIiwiQ0xBU1NfTkFNRV9DT0xMQVBTRUQiLCJDTEFTU19OQU1FX0RFRVBFUl9DSElMRFJFTiIsIkNMQVNTX05BTUVfSE9SSVpPTlRBTCIsIldJRFRIIiwiSEVJR0hUIiwiU0VMRUNUT1JfQUNUSVZFUyIsInBhcmVudCIsIkNvbGxhcHNlIiwiX2lzVHJhbnNpdGlvbmluZyIsIl90cmlnZ2VyQXJyYXkiLCJ0b2dnbGVMaXN0IiwiZWxlbSIsInNlbGVjdG9yIiwiZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCIsImZpbHRlckVsZW1lbnQiLCJmaWx0ZXIiLCJmb3VuZEVsZW1lbnQiLCJwdXNoIiwiX2luaXRpYWxpemVDaGlsZHJlbiIsIl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MiLCJfaXNTaG93biIsImhpZGUiLCJzaG93IiwiYWN0aXZlQ2hpbGRyZW4iLCJfZ2V0Rmlyc3RMZXZlbENoaWxkcmVuIiwibWFwIiwic3RhcnRFdmVudCIsImFjdGl2ZUluc3RhbmNlIiwiZGltZW5zaW9uIiwiX2dldERpbWVuc2lvbiIsInN0eWxlIiwiY29tcGxldGUiLCJjYXBpdGFsaXplZERpbWVuc2lvbiIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJzY3JvbGxTaXplIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2hpbGRyZW4iLCJzZWxlY3RlZCIsImluY2x1ZGVzIiwidHJpZ2dlckFycmF5IiwiaXNPcGVuIiwiZGVsZWdhdGVUYXJnZXQiLCJzZWxlY3RvckVsZW1lbnRzIiwiZWxlbWVudE1hcCIsIk1hcCIsImluc3RhbmNlIiwiaGFzIiwiaW5zdGFuY2VNYXAiLCJzaXplIiwiY29uc29sZSIsImVycm9yIiwiQXJyYXkiLCJrZXlzIiwiZGVsZXRlIiwibmFtZXNwYWNlUmVnZXgiLCJzdHJpcE5hbWVSZWdleCIsInN0cmlwVWlkUmVnZXgiLCJldmVudFJlZ2lzdHJ5IiwidWlkRXZlbnQiLCJjdXN0b21FdmVudHMiLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsIm5hdGl2ZUV2ZW50cyIsIlNldCIsIm1ha2VFdmVudFVpZCIsInVpZCIsImdldEVsZW1lbnRFdmVudHMiLCJib290c3RyYXBIYW5kbGVyIiwiZm4iLCJoYW5kbGVyIiwiaHlkcmF0ZU9iaiIsIm9uZU9mZiIsInR5cGUiLCJhcHBseSIsImJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyIiwiZG9tRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGFyZW50Tm9kZSIsImRvbUVsZW1lbnQiLCJmaW5kSGFuZGxlciIsImV2ZW50cyIsImNhbGxhYmxlIiwiZGVsZWdhdGlvblNlbGVjdG9yIiwidmFsdWVzIiwibm9ybWFsaXplUGFyYW1ldGVycyIsIm9yaWdpbmFsVHlwZUV2ZW50IiwiZGVsZWdhdGlvbkZ1bmN0aW9uIiwiaXNEZWxlZ2F0ZWQiLCJ0eXBlRXZlbnQiLCJnZXRUeXBlRXZlbnQiLCJhZGRIYW5kbGVyIiwid3JhcEZ1bmN0aW9uIiwiY2FsbCIsImhhbmRsZXJzIiwicHJldmlvdXNGdW5jdGlvbiIsInJlcGxhY2UiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVOYW1lc3BhY2VkSGFuZGxlcnMiLCJuYW1lc3BhY2UiLCJzdG9yZUVsZW1lbnRFdmVudCIsImhhbmRsZXJLZXkiLCJpbk5hbWVzcGFjZSIsImlzTmFtZXNwYWNlIiwiZWxlbWVudEV2ZW50Iiwia2V5SGFuZGxlcnMiLCJhcmdzIiwiJCIsImdldGpRdWVyeSIsImpRdWVyeUV2ZW50IiwiYnViYmxlcyIsIm5hdGl2ZURpc3BhdGNoIiwiRXZlbnQiLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsImlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiZXZ0IiwiY2FuY2VsYWJsZSIsImRpc3BhdGNoRXZlbnQiLCJvYmoiLCJtZXRhIiwidmFsdWUiLCJlbnRyaWVzIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJub3JtYWxpemVEYXRhIiwidG9TdHJpbmciLCJKU09OIiwicGFyc2UiLCJkZWNvZGVVUklDb21wb25lbnQiLCJub3JtYWxpemVEYXRhS2V5IiwiY2hyIiwidG9Mb3dlckNhc2UiLCJzZXREYXRhQXR0cmlidXRlIiwicmVtb3ZlRGF0YUF0dHJpYnV0ZSIsImdldERhdGFBdHRyaWJ1dGVzIiwiYXR0cmlidXRlcyIsImJzS2V5cyIsImRhdGFzZXQiLCJwdXJlS2V5IiwiY2hhckF0IiwiZG9jdW1lbnRFbGVtZW50IiwiY29uY2F0IiwiRWxlbWVudCIsInByb3RvdHlwZSIsInF1ZXJ5U2VsZWN0b3IiLCJjaGlsZCIsIm1hdGNoZXMiLCJwYXJlbnRzIiwiYW5jZXN0b3IiLCJwcmV2aW91cyIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJuZXh0RWxlbWVudFNpYmxpbmciLCJmb2N1c2FibGVDaGlsZHJlbiIsImZvY3VzYWJsZXMiLCJqb2luIiwiZWwiLCJpc0Rpc2FibGVkIiwiRVNDQVBFX0tFWSIsIlRBQl9LRVkiLCJBUlJPV19VUF9LRVkiLCJBUlJPV19ET1dOX0tFWSIsIlJJR0hUX01PVVNFX0JVVFRPTiIsIkVWRU5UX0tFWURPV05fREFUQV9BUEkiLCJFVkVOVF9LRVlVUF9EQVRBX0FQSSIsIkNMQVNTX05BTUVfRFJPUFVQIiwiQ0xBU1NfTkFNRV9EUk9QRU5EIiwiQ0xBU1NfTkFNRV9EUk9QU1RBUlQiLCJDTEFTU19OQU1FX0RST1BVUF9DRU5URVIiLCJDTEFTU19OQU1FX0RST1BET1dOX0NFTlRFUiIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFX1NIT1dOIiwiU0VMRUNUT1JfTUVOVSIsIlNFTEVDVE9SX05BVkJBUiIsIlNFTEVDVE9SX05BVkJBUl9OQVYiLCJTRUxFQ1RPUl9WSVNJQkxFX0lURU1TIiwiUExBQ0VNRU5UX1RPUCIsIlBMQUNFTUVOVF9UT1BFTkQiLCJQTEFDRU1FTlRfQk9UVE9NIiwiUExBQ0VNRU5UX0JPVFRPTUVORCIsIlBMQUNFTUVOVF9SSUdIVCIsIlBMQUNFTUVOVF9MRUZUIiwiUExBQ0VNRU5UX1RPUENFTlRFUiIsIlBMQUNFTUVOVF9CT1RUT01DRU5URVIiLCJhdXRvQ2xvc2UiLCJib3VuZGFyeSIsImRpc3BsYXkiLCJvZmZzZXQiLCJwb3BwZXJDb25maWciLCJyZWZlcmVuY2UiLCJEcm9wZG93biIsIl9wb3BwZXIiLCJfcGFyZW50IiwiX21lbnUiLCJfaW5OYXZiYXIiLCJfZGV0ZWN0TmF2YmFyIiwic2hvd0V2ZW50IiwiX2NyZWF0ZVBvcHBlciIsImJvZHkiLCJub29wIiwiZm9jdXMiLCJfY29tcGxldGVIaWRlIiwiZGVzdHJveSIsInVwZGF0ZSIsImhpZGVFdmVudCIsImlzRWxlbWVudCIsIlBvcHBlciIsInJlZmVyZW5jZUVsZW1lbnQiLCJfZ2V0UG9wcGVyQ29uZmlnIiwiY3JlYXRlUG9wcGVyIiwiX2dldFBsYWNlbWVudCIsInBhcmVudERyb3Bkb3duIiwiaXNFbmQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInRyaW0iLCJfZ2V0T2Zmc2V0Iiwic3BsaXQiLCJwb3BwZXJEYXRhIiwiZGVmYXVsdEJzUG9wcGVyQ29uZmlnIiwicGxhY2VtZW50IiwibW9kaWZpZXJzIiwib3B0aW9ucyIsImVuYWJsZWQiLCJfc2VsZWN0TWVudUl0ZW0iLCJjbGVhck1lbnVzIiwib3BlblRvZ2dsZXMiLCJjb250ZXh0IiwiY29tcG9zZWRQYXRoIiwiaXNNZW51VGFyZ2V0IiwiY2xpY2tFdmVudCIsImRhdGFBcGlLZXlkb3duSGFuZGxlciIsImlzSW5wdXQiLCJpc0VzY2FwZUV2ZW50IiwiaXNVcE9yRG93bkV2ZW50IiwiZ2V0VG9nZ2xlQnV0dG9uIiwic3RvcFByb3BhZ2F0aW9uIiwiRVZFTlRfSElERV9QUkVWRU5URUQiLCJFVkVOVF9SRVNJWkUiLCJFVkVOVF9DTElDS19ESVNNSVNTIiwiRVZFTlRfTU9VU0VET1dOX0RJU01JU1MiLCJFVkVOVF9LRVlET1dOX0RJU01JU1MiLCJDTEFTU19OQU1FX09QRU4iLCJDTEFTU19OQU1FX1NUQVRJQyIsIk9QRU5fU0VMRUNUT1IiLCJTRUxFQ1RPUl9ESUFMT0ciLCJTRUxFQ1RPUl9NT0RBTF9CT0RZIiwiYmFja2Ryb3AiLCJNb2RhbCIsIl9kaWFsb2ciLCJfYmFja2Ryb3AiLCJfaW5pdGlhbGl6ZUJhY2tEcm9wIiwiX2ZvY3VzdHJhcCIsIl9pbml0aWFsaXplRm9jdXNUcmFwIiwiX3Njcm9sbEJhciIsIlNjcm9sbEJhckhlbHBlciIsIl9hZGp1c3REaWFsb2ciLCJfc2hvd0VsZW1lbnQiLCJkZWFjdGl2YXRlIiwiX2hpZGVNb2RhbCIsImh0bWxFbGVtZW50IiwiaGFuZGxlVXBkYXRlIiwiQmFja2Ryb3AiLCJGb2N1c1RyYXAiLCJ0cmFwRWxlbWVudCIsImFwcGVuZCIsInNjcm9sbFRvcCIsIm1vZGFsQm9keSIsInRyYW5zaXRpb25Db21wbGV0ZSIsImFjdGl2YXRlIiwiX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24iLCJldmVudDIiLCJfcmVzZXRBZGp1c3RtZW50cyIsInJlc2V0IiwiaXNNb2RhbE92ZXJmbG93aW5nIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiaW5pdGlhbE92ZXJmbG93WSIsIm92ZXJmbG93WSIsInNjcm9sbGJhcldpZHRoIiwiZ2V0V2lkdGgiLCJpc0JvZHlPdmVyZmxvd2luZyIsInByb3BlcnR5IiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJhbHJlYWR5T3BlbiIsIkNMQVNTX05BTUVfU0hPV0lORyIsIkNMQVNTX05BTUVfSElESU5HIiwiQ0xBU1NfTkFNRV9CQUNLRFJPUCIsInNjcm9sbCIsIk9mZmNhbnZhcyIsImJsdXIiLCJjb21wbGV0ZUNhbGxiYWNrIiwiY2xpY2tDYWxsYmFjayIsImNsYXNzTmFtZSIsInJvb3RFbGVtZW50IiwicG9zaXRpb24iLCJTRUxFQ1RPUl9USVRMRSIsIlNFTEVDVE9SX0NPTlRFTlQiLCJUb29sdGlwIiwiY29udGVudCIsInRlbXBsYXRlIiwiUG9wb3ZlciIsIl9pc1dpdGhDb250ZW50IiwiX2dldFRpdGxlIiwiX2dldENvbnRlbnQiLCJfZ2V0Q29udGVudEZvclRlbXBsYXRlIiwiX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uIiwiRVZFTlRfQUNUSVZBVEUiLCJFVkVOVF9DTElDSyIsIkNMQVNTX05BTUVfRFJPUERPV05fSVRFTSIsIlNFTEVDVE9SX0RBVEFfU1BZIiwiU0VMRUNUT1JfVEFSR0VUX0xJTktTIiwiU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVAiLCJTRUxFQ1RPUl9OQVZfTElOS1MiLCJTRUxFQ1RPUl9OQVZfSVRFTVMiLCJTRUxFQ1RPUl9MSVNUX0lURU1TIiwiU0VMRUNUT1JfTElOS19JVEVNUyIsIlNFTEVDVE9SX0RST1BET1dOIiwiU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFIiwicm9vdE1hcmdpbiIsInNtb290aFNjcm9sbCIsInRocmVzaG9sZCIsIlNjcm9sbFNweSIsIl90YXJnZXRMaW5rcyIsIl9vYnNlcnZhYmxlU2VjdGlvbnMiLCJfcm9vdEVsZW1lbnQiLCJfYWN0aXZlVGFyZ2V0IiwiX29ic2VydmVyIiwiX3ByZXZpb3VzU2Nyb2xsRGF0YSIsInZpc2libGVFbnRyeVRvcCIsInBhcmVudFNjcm9sbFRvcCIsInJlZnJlc2giLCJfaW5pdGlhbGl6ZVRhcmdldHNBbmRPYnNlcnZhYmxlcyIsIl9tYXliZUVuYWJsZVNtb290aFNjcm9sbCIsImRpc2Nvbm5lY3QiLCJfZ2V0TmV3T2JzZXJ2ZXIiLCJzZWN0aW9uIiwib2JzZXJ2ZSIsInBhcnNlRmxvYXQiLCJvYnNlcnZhYmxlU2VjdGlvbiIsImhhc2giLCJyb290IiwiaGVpZ2h0Iiwib2Zmc2V0VG9wIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiX29ic2VydmVyQ2FsbGJhY2siLCJ0YXJnZXRFbGVtZW50IiwiZW50cnkiLCJpZCIsIl9wcm9jZXNzIiwidXNlclNjcm9sbHNEb3duIiwiaXNJbnRlcnNlY3RpbmciLCJfY2xlYXJBY3RpdmVDbGFzcyIsImVudHJ5SXNMb3dlclRoYW5QcmV2aW91cyIsInRhcmdldExpbmtzIiwiYW5jaG9yIiwiX2FjdGl2YXRlUGFyZW50cyIsImxpc3RHcm91cCIsIml0ZW0iLCJhY3RpdmVOb2RlcyIsIm5vZGUiLCJzcHkiLCJDTEFTU19EUk9QRE9XTiIsIlNFTEVDVE9SX0RST1BET1dOX01FTlUiLCJOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFIiwiU0VMRUNUT1JfVEFCX1BBTkVMIiwiU0VMRUNUT1JfT1VURVIiLCJTRUxFQ1RPUl9JTk5FUiIsIlNFTEVDVE9SX0lOTkVSX0VMRU0iLCJTRUxFQ1RPUl9EQVRBX1RPR0dMRV9BQ1RJVkUiLCJUYWIiLCJfc2V0SW5pdGlhbEF0dHJpYnV0ZXMiLCJfZ2V0Q2hpbGRyZW4iLCJpbm5lckVsZW0iLCJfZWxlbUlzQWN0aXZlIiwiYWN0aXZlIiwiX2dldEFjdGl2ZUVsZW0iLCJfZGVhY3RpdmF0ZSIsIl9hY3RpdmF0ZSIsInJlbGF0ZWRFbGVtIiwiX3RvZ2dsZURyb3BEb3duIiwibmV4dEFjdGl2ZUVsZW1lbnQiLCJwcmV2ZW50U2Nyb2xsIiwiX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzIiwiX3NldEluaXRpYWxBdHRyaWJ1dGVzT25DaGlsZCIsIl9nZXRJbm5lckVsZW1lbnQiLCJpc0FjdGl2ZSIsIm91dGVyRWxlbSIsIl9nZXRPdXRlckVsZW1lbnQiLCJfc2V0SW5pdGlhbEF0dHJpYnV0ZXNPblRhcmdldFBhbmVsIiwib3BlbiIsImF0dHJpYnV0ZSIsImhhc0F0dHJpYnV0ZSIsIkVWRU5UX01PVVNFT1ZFUiIsIkVWRU5UX01PVVNFT1VUIiwiRVZFTlRfRk9DVVNJTiIsIkVWRU5UX0ZPQ1VTT1VUIiwiQ0xBU1NfTkFNRV9ISURFIiwiYW5pbWF0aW9uIiwiYXV0b2hpZGUiLCJkZWxheSIsIlRvYXN0IiwiX3RpbWVvdXQiLCJfaGFzTW91c2VJbnRlcmFjdGlvbiIsIl9oYXNLZXlib2FyZEludGVyYWN0aW9uIiwiX3NldExpc3RlbmVycyIsIl9jbGVhclRpbWVvdXQiLCJfbWF5YmVTY2hlZHVsZUhpZGUiLCJpc1Nob3duIiwiX29uSW50ZXJhY3Rpb24iLCJpc0ludGVyYWN0aW5nIiwiRElTQUxMT1dFRF9BVFRSSUJVVEVTIiwiQ0xBU1NfTkFNRV9NT0RBTCIsIlNFTEVDVE9SX1RPT0xUSVBfSU5ORVIiLCJTRUxFQ1RPUl9NT0RBTCIsIkVWRU5UX01PREFMX0hJREUiLCJUUklHR0VSX0hPVkVSIiwiVFJJR0dFUl9GT0NVUyIsIlRSSUdHRVJfQ0xJQ0siLCJUUklHR0VSX01BTlVBTCIsIkVWRU5UX0lOU0VSVEVEIiwiQXR0YWNobWVudE1hcCIsIkFVVE8iLCJUT1AiLCJSSUdIVCIsIkJPVFRPTSIsIkxFRlQiLCJhbGxvd0xpc3QiLCJEZWZhdWx0QWxsb3dsaXN0IiwiY29udGFpbmVyIiwiY3VzdG9tQ2xhc3MiLCJmYWxsYmFja1BsYWNlbWVudHMiLCJodG1sIiwic2FuaXRpemUiLCJzYW5pdGl6ZUZuIiwidGl0bGUiLCJfaXNFbmFibGVkIiwiX2lzSG92ZXJlZCIsIl9hY3RpdmVUcmlnZ2VyIiwiX3RlbXBsYXRlRmFjdG9yeSIsIl9uZXdDb250ZW50IiwidGlwIiwiX2ZpeFRpdGxlIiwiZW5hYmxlIiwiZGlzYWJsZSIsInRvZ2dsZUVuYWJsZWQiLCJjbGljayIsIl9sZWF2ZSIsIl9lbnRlciIsIl9oaWRlTW9kYWxIYW5kbGVyIiwiX2Rpc3Bvc2VQb3BwZXIiLCJFcnJvciIsInNoYWRvd1Jvb3QiLCJmaW5kU2hhZG93Um9vdCIsImlzSW5UaGVEb20iLCJvd25lckRvY3VtZW50IiwiX2dldFRpcEVsZW1lbnQiLCJfaXNXaXRoQWN0aXZlVHJpZ2dlciIsIl9jcmVhdGVUaXBFbGVtZW50IiwiX2dldFRlbXBsYXRlRmFjdG9yeSIsInRvSHRtbCIsInRpcElkIiwiZ2V0VUlEIiwic2V0Q29udGVudCIsImNoYW5nZUNvbnRlbnQiLCJUZW1wbGF0ZUZhY3RvcnkiLCJleHRyYUNsYXNzIiwiX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldCIsIl9nZXREZWxlZ2F0ZUNvbmZpZyIsImF0dGFjaG1lbnQiLCJhcmciLCJwaGFzZSIsInN0YXRlIiwidHJpZ2dlcnMiLCJldmVudEluIiwiZXZlbnRPdXQiLCJ0ZXh0Q29udGVudCIsIl9zZXRUaW1lb3V0IiwidGltZW91dCIsImRhdGFBdHRyaWJ1dGVzIiwiZGF0YUF0dHJpYnV0ZSIsIkVWRU5UX01PVVNFRE9XTiIsIl9pc0FwcGVuZGVkIiwiZXhlY3V0ZSIsIl9hcHBlbmQiLCJfZ2V0RWxlbWVudCIsIl9lbXVsYXRlQW5pbWF0aW9uIiwiY3JlYXRlRWxlbWVudCIsImNvbXBvbmVudCIsIm1ldGhvZCIsImpzb25Db25maWciLCJjb25maWdUeXBlcyIsImV4cGVjdGVkVHlwZXMiLCJ2YWx1ZVR5cGUiLCJ0b1R5cGUiLCJSZWdFeHAiLCJFVkVOVF9LRVlET1dOX1RBQiIsIlRBQl9OQVZfRk9SV0FSRCIsIlRBQl9OQVZfQkFDS1dBUkQiLCJhdXRvZm9jdXMiLCJfaXNBY3RpdmUiLCJfbGFzdFRhYk5hdkRpcmVjdGlvbiIsIl9oYW5kbGVGb2N1c2luIiwiX2hhbmRsZUtleWRvd24iLCJlbGVtZW50cyIsInNoaWZ0S2V5IiwiTUFYX1VJRCIsIk1JTExJU0VDT05EU19NVUxUSVBMSUVSIiwiVFJBTlNJVElPTl9FTkQiLCJvYmplY3QiLCJtYXRjaCIsInByZWZpeCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImdldEVsZW1lbnRCeUlkIiwiZ2V0U2VsZWN0b3IiLCJocmVmQXR0cmlidXRlIiwiZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uRGVsYXkiLCJmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiIsImZsb2F0VHJhbnNpdGlvbkRlbGF5IiwianF1ZXJ5Iiwibm9kZVR5cGUiLCJnZXRDbGllbnRSZWN0cyIsImVsZW1lbnRJc1Zpc2libGUiLCJjbG9zZWREZXRhaWxzIiwic3VtbWFyeSIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJkaXNhYmxlZCIsImF0dGFjaFNoYWRvdyIsImdldFJvb3ROb2RlIiwiU2hhZG93Um9vdCIsIm9mZnNldEhlaWdodCIsImpRdWVyeSIsIkRPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MiLCJvbkRPTUNvbnRlbnRMb2FkZWQiLCJyZWFkeVN0YXRlIiwiZGlyIiwicGx1Z2luIiwiSlFVRVJZX05PX0NPTkZMSUNUIiwiQ29uc3RydWN0b3IiLCJub0NvbmZsaWN0IiwidHJhbnNpdGlvbkVsZW1lbnQiLCJ3YWl0Rm9yVHJhbnNpdGlvbiIsImR1cmF0aW9uUGFkZGluZyIsImVtdWxhdGVkRHVyYXRpb24iLCJjYWxsZWQiLCJsaXN0Iiwic2hvdWxkR2V0TmV4dCIsImlzQ3ljbGVBbGxvd2VkIiwibGlzdExlbmd0aCIsIm1heCIsIm1pbiIsInVyaUF0dHJpYnV0ZXMiLCJBUklBX0FUVFJJQlVURV9QQVRURVJOIiwiU0FGRV9VUkxfUEFUVEVSTiIsIkRBVEFfVVJMX1BBVFRFUk4iLCJhbGxvd2VkQXR0cmlidXRlIiwiYWxsb3dlZEF0dHJpYnV0ZUxpc3QiLCJhdHRyaWJ1dGVOYW1lIiwibm9kZU5hbWUiLCJub2RlVmFsdWUiLCJhdHRyaWJ1dGVSZWdleCIsInNvbWUiLCJyZWdleCIsImEiLCJhcmVhIiwiYiIsImJyIiwiY29sIiwiY29kZSIsImRpdiIsImVtIiwiaHIiLCJoMSIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJpIiwibGkiLCJvbCIsInAiLCJwcmUiLCJzIiwic21hbGwiLCJzcGFuIiwic3ViIiwic3VwIiwic3Ryb25nIiwidSIsInVsIiwic2FuaXRpemVIdG1sIiwidW5zYWZlSHRtbCIsInNhbml0aXplRnVuY3Rpb24iLCJkb21QYXJzZXIiLCJET01QYXJzZXIiLCJjcmVhdGVkRG9jdW1lbnQiLCJwYXJzZUZyb21TdHJpbmciLCJlbGVtZW50TmFtZSIsImF0dHJpYnV0ZUxpc3QiLCJhbGxvd2VkQXR0cmlidXRlcyIsImlubmVySFRNTCIsIlNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQiLCJTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCIsIlBST1BFUlRZX1BBRERJTkciLCJQUk9QRVJUWV9NQVJHSU4iLCJkb2N1bWVudFdpZHRoIiwiY2xpZW50V2lkdGgiLCJhYnMiLCJpbm5lcldpZHRoIiwid2lkdGgiLCJfZGlzYWJsZU92ZXJGbG93IiwiX3NldEVsZW1lbnRBdHRyaWJ1dGVzIiwiY2FsY3VsYXRlZFZhbHVlIiwiX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMiLCJpc092ZXJmbG93aW5nIiwiX3NhdmVJbml0aWFsQXR0cmlidXRlIiwib3ZlcmZsb3ciLCJzdHlsZVByb3BlcnR5IiwibWFuaXB1bGF0aW9uQ2FsbEJhY2siLCJzZXRQcm9wZXJ0eSIsIl9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrIiwiYWN0dWFsVmFsdWUiLCJyZW1vdmVQcm9wZXJ0eSIsImNhbGxCYWNrIiwic2VsIiwiRVZFTlRfVE9VQ0hTVEFSVCIsIkVWRU5UX1RPVUNITU9WRSIsIkVWRU5UX1RPVUNIRU5EIiwiRVZFTlRfUE9JTlRFUkRPV04iLCJFVkVOVF9QT0lOVEVSVVAiLCJQT0lOVEVSX1RZUEVfVE9VQ0giLCJQT0lOVEVSX1RZUEVfUEVOIiwiQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UIiwiU1dJUEVfVEhSRVNIT0xEIiwiX2RlbHRhWCIsIl9zdXBwb3J0UG9pbnRlckV2ZW50cyIsIlBvaW50ZXJFdmVudCIsIl9pbml0RXZlbnRzIiwiX3N0YXJ0IiwidG91Y2hlcyIsImNsaWVudFgiLCJfZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaCIsIl9lbmQiLCJfaGFuZGxlU3dpcGUiLCJfbW92ZSIsImFic0RlbHRhWCIsInBvaW50ZXJUeXBlIiwibmF2aWdhdG9yIiwibWF4VG91Y2hQb2ludHMiLCJEZWZhdWx0Q29udGVudFR5cGUiLCJnZXRDb250ZW50IiwiaGFzQ29udGVudCIsIl9jaGVja0NvbnRlbnQiLCJ0ZW1wbGF0ZVdyYXBwZXIiLCJfbWF5YmVTYW5pdGl6ZSIsInRleHQiLCJfc2V0Q29udGVudCIsInRlbXBsYXRlRWxlbWVudCIsIl9wdXRFbGVtZW50SW5UZW1wbGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=
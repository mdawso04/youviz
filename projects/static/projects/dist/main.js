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
        layout.hovermode = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVU7QUFDVixrQ0FBa0MsSUFBSTtBQUN0QztBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MscUJBQXFCO0FBQ3JEO0FBQ0E7QUFDQSxrQ0FBa0MscURBQXFEO0FBQ3ZGO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MscUJBQXFCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0wsQ0FBQztBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zdGF0aWMvcHJvamVjdHMvc3JjL3Njc3MvcHJvamVjdHMuc2Nzcz84YWFkIiwid2VicGFjazovL3Byb2plY3RzLy4vc3RhdGljL3Byb2plY3RzL3NyYy9ib290c3RyYXAvanMvc3JjL2FsZXJ0LmpzIiwid2VicGFjazovL3Byb2plY3RzLy4vc3RhdGljL3Byb2plY3RzL3NyYy9ib290c3RyYXAvanMvc3JjL2Jhc2UtY29tcG9uZW50LmpzIiwid2VicGFjazovL3Byb2plY3RzLy4vc3RhdGljL3Byb2plY3RzL3NyYy9ib290c3RyYXAvanMvc3JjL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cy8uL3N0YXRpYy9wcm9qZWN0cy9zcmMvYm9vdHN0cmFwL2pzL3NyYy9jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cy8uL3N0YXRpYy9wcm9qZWN0cy9zcmMvYm9vdHN0cmFwL2pzL3NyYy9jb2xsYXBzZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cy8uL3N0YXRpYy9wcm9qZWN0cy9zcmMvYm9vdHN0cmFwL2pzL3NyYy9kb20vZGF0YS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cy8uL3N0YXRpYy9wcm9qZWN0cy9zcmMvYm9vdHN0cmFwL2pzL3NyYy9kb20vZXZlbnQtaGFuZGxlci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cy8uL3N0YXRpYy9wcm9qZWN0cy9zcmMvYm9vdHN0cmFwL2pzL3NyYy9kb20vbWFuaXB1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zdGF0aWMvcHJvamVjdHMvc3JjL2Jvb3RzdHJhcC9qcy9zcmMvZG9tL3NlbGVjdG9yLWVuZ2luZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cy8uL3N0YXRpYy9wcm9qZWN0cy9zcmMvYm9vdHN0cmFwL2pzL3NyYy9kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cy8uL3N0YXRpYy9wcm9qZWN0cy9zcmMvYm9vdHN0cmFwL2pzL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cy8uL3N0YXRpYy9wcm9qZWN0cy9zcmMvYm9vdHN0cmFwL2pzL3NyYy9vZmZjYW52YXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zdGF0aWMvcHJvamVjdHMvc3JjL2Jvb3RzdHJhcC9qcy9zcmMvcG9wb3Zlci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cy8uL3N0YXRpYy9wcm9qZWN0cy9zcmMvYm9vdHN0cmFwL2pzL3NyYy9zY3JvbGxzcHkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zdGF0aWMvcHJvamVjdHMvc3JjL2Jvb3RzdHJhcC9qcy9zcmMvdGFiLmpzIiwid2VicGFjazovL3Byb2plY3RzLy4vc3RhdGljL3Byb2plY3RzL3NyYy9ib290c3RyYXAvanMvc3JjL3RvYXN0LmpzIiwid2VicGFjazovL3Byb2plY3RzLy4vc3RhdGljL3Byb2plY3RzL3NyYy9ib290c3RyYXAvanMvc3JjL3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zdGF0aWMvcHJvamVjdHMvc3JjL2Jvb3RzdHJhcC9qcy9zcmMvdXRpbC9iYWNrZHJvcC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cy8uL3N0YXRpYy9wcm9qZWN0cy9zcmMvYm9vdHN0cmFwL2pzL3NyYy91dGlsL2NvbXBvbmVudC1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zdGF0aWMvcHJvamVjdHMvc3JjL2Jvb3RzdHJhcC9qcy9zcmMvdXRpbC9jb25maWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zdGF0aWMvcHJvamVjdHMvc3JjL2Jvb3RzdHJhcC9qcy9zcmMvdXRpbC9mb2N1c3RyYXAuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zdGF0aWMvcHJvamVjdHMvc3JjL2Jvb3RzdHJhcC9qcy9zcmMvdXRpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cy8uL3N0YXRpYy9wcm9qZWN0cy9zcmMvYm9vdHN0cmFwL2pzL3NyYy91dGlsL3Nhbml0aXplci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cy8uL3N0YXRpYy9wcm9qZWN0cy9zcmMvYm9vdHN0cmFwL2pzL3NyYy91dGlsL3Njcm9sbGJhci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cy8uL3N0YXRpYy9wcm9qZWN0cy9zcmMvYm9vdHN0cmFwL2pzL3NyYy91dGlsL3N3aXBlLmpzIiwid2VicGFjazovL3Byb2plY3RzLy4vc3RhdGljL3Byb2plY3RzL3NyYy9ib290c3RyYXAvanMvc3JjL3V0aWwvdGVtcGxhdGUtZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cy8uL3N0YXRpYy9wcm9qZWN0cy9zcmMvanMvYm9vdHN0cmFwLXRhYmxlLmpzIiwid2VicGFjazovL3Byb2plY3RzLy4vc3RhdGljL3Byb2plY3RzL3NyYy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zdGF0aWMvcHJvamVjdHMvc3JjL2pzL2pxdWVyeS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cy8uL3N0YXRpYy9wcm9qZWN0cy9zcmMvanMveW91dml6LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMi4zKTogYWxlcnQuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBkZWZpbmVKUXVlcnlQbHVnaW4gfSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuaW1wb3J0IHsgZW5hYmxlRGlzbWlzc1RyaWdnZXIgfSBmcm9tICcuL3V0aWwvY29tcG9uZW50LWZ1bmN0aW9ucydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ2FsZXJ0J1xuY29uc3QgREFUQV9LRVkgPSAnYnMuYWxlcnQnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuXG5jb25zdCBFVkVOVF9DTE9TRSA9IGBjbG9zZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMT1NFRCA9IGBjbG9zZWQke0VWRU5UX0tFWX1gXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBBbGVydCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGNsb3NlKCkge1xuICAgIGNvbnN0IGNsb3NlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9DTE9TRSlcblxuICAgIGlmIChjbG9zZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBjb25zdCBpc0FuaW1hdGVkID0gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKVxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCkgPT4gdGhpcy5fZGVzdHJveUVsZW1lbnQoKSwgdGhpcy5fZWxlbWVudCwgaXNBbmltYXRlZClcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2Rlc3Ryb3lFbGVtZW50KCkge1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKClcbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9DTE9TRUQpXG4gICAgdGhpcy5kaXNwb3NlKClcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IEFsZXJ0LmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10odGhpcylcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5lbmFibGVEaXNtaXNzVHJpZ2dlcihBbGVydCwgJ2Nsb3NlJylcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oQWxlcnQpXG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjIuMyk6IGJhc2UtY29tcG9uZW50LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCB7IGV4ZWN1dGVBZnRlclRyYW5zaXRpb24sIGdldEVsZW1lbnQgfSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4vdXRpbC9jb25maWcnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgVkVSU0lPTiA9ICc1LjIuMydcblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQmFzZUNvbXBvbmVudCBleHRlbmRzIENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKClcblxuICAgIGVsZW1lbnQgPSBnZXRFbGVtZW50KGVsZW1lbnQpXG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG5cbiAgICBEYXRhLnNldCh0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLCB0aGlzKVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGRpc3Bvc2UoKSB7XG4gICAgRGF0YS5yZW1vdmUodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSlcbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuRVZFTlRfS0VZKVxuXG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eU5hbWUgb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpIHtcbiAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IG51bGxcbiAgICB9XG4gIH1cblxuICBfcXVldWVDYWxsYmFjayhjYWxsYmFjaywgZWxlbWVudCwgaXNBbmltYXRlZCA9IHRydWUpIHtcbiAgICBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uKGNhbGxiYWNrLCBlbGVtZW50LCBpc0FuaW1hdGVkKVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB0aGlzLl9tZXJnZUNvbmZpZ09iaihjb25maWcsIHRoaXMuX2VsZW1lbnQpXG4gICAgY29uZmlnID0gdGhpcy5fY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpXG4gICAgdGhpcy5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZylcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGdldEluc3RhbmNlKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gRGF0YS5nZXQoZ2V0RWxlbWVudChlbGVtZW50KSwgdGhpcy5EQVRBX0tFWSlcbiAgfVxuXG4gIHN0YXRpYyBnZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIGNvbmZpZyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SW5zdGFuY2UoZWxlbWVudCkgfHwgbmV3IHRoaXMoZWxlbWVudCwgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiBudWxsKVxuICB9XG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERBVEFfS0VZKCkge1xuICAgIHJldHVybiBgYnMuJHt0aGlzLk5BTUV9YFxuICB9XG5cbiAgc3RhdGljIGdldCBFVkVOVF9LRVkoKSB7XG4gICAgcmV0dXJuIGAuJHt0aGlzLkRBVEFfS0VZfWBcbiAgfVxuXG4gIHN0YXRpYyBldmVudE5hbWUobmFtZSkge1xuICAgIHJldHVybiBgJHtuYW1lfSR7dGhpcy5FVkVOVF9LRVl9YFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VDb21wb25lbnRcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMi4zKTogYnV0dG9uLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgZGVmaW5lSlF1ZXJ5UGx1Z2luIH0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ2J1dHRvbidcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmJ1dHRvbidcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJidXR0b25cIl0nXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgdG9nZ2xlKCkge1xuICAgIC8vIFRvZ2dsZSBjbGFzcyBhbmQgc3luYyB0aGUgYGFyaWEtcHJlc3NlZGAgYXR0cmlidXRlIHdpdGggdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgYC50b2dnbGUoKWAgbWV0aG9kXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX0FDVElWRSkpXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBCdXR0b24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKVxuXG4gICAgICBpZiAoY29uZmlnID09PSAndG9nZ2xlJykge1xuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBldmVudCA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICBjb25zdCBidXR0b24gPSBldmVudC50YXJnZXQuY2xvc2VzdChTRUxFQ1RPUl9EQVRBX1RPR0dMRSlcbiAgY29uc3QgZGF0YSA9IEJ1dHRvbi5nZXRPckNyZWF0ZUluc3RhbmNlKGJ1dHRvbilcblxuICBkYXRhLnRvZ2dsZSgpXG59KVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihCdXR0b24pXG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4yLjMpOiBjYXJvdXNlbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQsXG4gIGlzUlRMLFxuICBpc1Zpc2libGUsXG4gIHJlZmxvdyxcbiAgdHJpZ2dlclRyYW5zaXRpb25FbmRcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBTd2lwZSBmcm9tICcuL3V0aWwvc3dpcGUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnY2Fyb3VzZWwnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5jYXJvdXNlbCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBBUlJPV19MRUZUX0tFWSA9ICdBcnJvd0xlZnQnXG5jb25zdCBBUlJPV19SSUdIVF9LRVkgPSAnQXJyb3dSaWdodCdcbmNvbnN0IFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgPSA1MDAgLy8gVGltZSBmb3IgbW91c2UgY29tcGF0IGV2ZW50cyB0byBmaXJlIGFmdGVyIHRvdWNoXG5cbmNvbnN0IE9SREVSX05FWFQgPSAnbmV4dCdcbmNvbnN0IE9SREVSX1BSRVYgPSAncHJldidcbmNvbnN0IERJUkVDVElPTl9MRUZUID0gJ2xlZnQnXG5jb25zdCBESVJFQ1RJT05fUklHSFQgPSAncmlnaHQnXG5cbmNvbnN0IEVWRU5UX1NMSURFID0gYHNsaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0xJRCA9IGBzbGlkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTiA9IGBrZXlkb3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VFTlRFUiA9IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VMRUFWRSA9IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRFJBR19TVEFSVCA9IGBkcmFnc3RhcnQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9DQVJPVVNFTCA9ICdjYXJvdXNlbCdcbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcbmNvbnN0IENMQVNTX05BTUVfU0xJREUgPSAnc2xpZGUnXG5jb25zdCBDTEFTU19OQU1FX0VORCA9ICdjYXJvdXNlbC1pdGVtLWVuZCdcbmNvbnN0IENMQVNTX05BTUVfU1RBUlQgPSAnY2Fyb3VzZWwtaXRlbS1zdGFydCdcbmNvbnN0IENMQVNTX05BTUVfTkVYVCA9ICdjYXJvdXNlbC1pdGVtLW5leHQnXG5jb25zdCBDTEFTU19OQU1FX1BSRVYgPSAnY2Fyb3VzZWwtaXRlbS1wcmV2J1xuXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkUgPSAnLmFjdGl2ZSdcbmNvbnN0IFNFTEVDVE9SX0lURU0gPSAnLmNhcm91c2VsLWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkVfSVRFTSA9IFNFTEVDVE9SX0FDVElWRSArIFNFTEVDVE9SX0lURU1cbmNvbnN0IFNFTEVDVE9SX0lURU1fSU1HID0gJy5jYXJvdXNlbC1pdGVtIGltZydcbmNvbnN0IFNFTEVDVE9SX0lORElDQVRPUlMgPSAnLmNhcm91c2VsLWluZGljYXRvcnMnXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1NMSURFID0gJ1tkYXRhLWJzLXNsaWRlXSwgW2RhdGEtYnMtc2xpZGUtdG9dJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9SSURFID0gJ1tkYXRhLWJzLXJpZGU9XCJjYXJvdXNlbFwiXSdcblxuY29uc3QgS0VZX1RPX0RJUkVDVElPTiA9IHtcbiAgW0FSUk9XX0xFRlRfS0VZXTogRElSRUNUSU9OX1JJR0hULFxuICBbQVJST1dfUklHSFRfS0VZXTogRElSRUNUSU9OX0xFRlRcbn1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgaW50ZXJ2YWw6IDUwMDAsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBwYXVzZTogJ2hvdmVyJyxcbiAgcmlkZTogZmFsc2UsXG4gIHRvdWNoOiB0cnVlLFxuICB3cmFwOiB0cnVlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBpbnRlcnZhbDogJyhudW1iZXJ8Ym9vbGVhbiknLCAvLyBUT0RPOnY2IHJlbW92ZSBib29sZWFuIHN1cHBvcnRcbiAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgcGF1c2U6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgcmlkZTogJyhib29sZWFufHN0cmluZyknLFxuICB0b3VjaDogJ2Jvb2xlYW4nLFxuICB3cmFwOiAnYm9vbGVhbidcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQ2Fyb3VzZWwgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gbnVsbFxuICAgIHRoaXMuX3N3aXBlSGVscGVyID0gbnVsbFxuXG4gICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0lORElDQVRPUlMsIHRoaXMuX2VsZW1lbnQpXG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5yaWRlID09PSBDTEFTU19OQU1FX0NBUk9VU0VMKSB7XG4gICAgICB0aGlzLmN5Y2xlKClcbiAgICB9XG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIG5leHQoKSB7XG4gICAgdGhpcy5fc2xpZGUoT1JERVJfTkVYVClcbiAgfVxuXG4gIG5leHRXaGVuVmlzaWJsZSgpIHtcbiAgICAvLyBGSVhNRSBUT0RPIHVzZSBgZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlYFxuICAgIC8vIERvbid0IGNhbGwgbmV4dCB3aGVuIHRoZSBwYWdlIGlzbid0IHZpc2libGVcbiAgICAvLyBvciB0aGUgY2Fyb3VzZWwgb3IgaXRzIHBhcmVudCBpc24ndCB2aXNpYmxlXG4gICAgaWYgKCFkb2N1bWVudC5oaWRkZW4gJiYgaXNWaXNpYmxlKHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgIH1cbiAgfVxuXG4gIHByZXYoKSB7XG4gICAgdGhpcy5fc2xpZGUoT1JERVJfUFJFVilcbiAgfVxuXG4gIHBhdXNlKCkge1xuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kKHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5fY2xlYXJJbnRlcnZhbCgpXG4gIH1cblxuICBjeWNsZSgpIHtcbiAgICB0aGlzLl9jbGVhckludGVydmFsKClcbiAgICB0aGlzLl91cGRhdGVJbnRlcnZhbCgpXG5cbiAgICB0aGlzLl9pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHRoaXMubmV4dFdoZW5WaXNpYmxlKCksIHRoaXMuX2NvbmZpZy5pbnRlcnZhbClcbiAgfVxuXG4gIF9tYXliZUVuYWJsZUN5Y2xlKCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnLnJpZGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgRVZFTlRfU0xJRCwgKCkgPT4gdGhpcy5jeWNsZSgpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jeWNsZSgpXG4gIH1cblxuICB0byhpbmRleCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5fZ2V0SXRlbXMoKVxuICAgIGlmIChpbmRleCA+IGl0ZW1zLmxlbmd0aCAtIDEgfHwgaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSUQsICgpID0+IHRoaXMudG8oaW5kZXgpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgodGhpcy5fZ2V0QWN0aXZlKCkpXG4gICAgaWYgKGFjdGl2ZUluZGV4ID09PSBpbmRleCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgb3JkZXIgPSBpbmRleCA+IGFjdGl2ZUluZGV4ID8gT1JERVJfTkVYVCA6IE9SREVSX1BSRVZcblxuICAgIHRoaXMuX3NsaWRlKG9yZGVyLCBpdGVtc1tpbmRleF0pXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGlmICh0aGlzLl9zd2lwZUhlbHBlcikge1xuICAgICAgdGhpcy5fc3dpcGVIZWxwZXIuZGlzcG9zZSgpXG4gICAgfVxuXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgIGNvbmZpZy5kZWZhdWx0SW50ZXJ2YWwgPSBjb25maWcuaW50ZXJ2YWxcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV04sIGV2ZW50ID0+IHRoaXMuX2tleWRvd24oZXZlbnQpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcucGF1c2UgPT09ICdob3ZlcicpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRUVOVEVSLCAoKSA9PiB0aGlzLnBhdXNlKCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VMRUFWRSwgKCkgPT4gdGhpcy5fbWF5YmVFbmFibGVDeWNsZSgpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG91Y2ggJiYgU3dpcGUuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgdGhpcy5fYWRkVG91Y2hFdmVudExpc3RlbmVycygpXG4gICAgfVxuICB9XG5cbiAgX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgZm9yIChjb25zdCBpbWcgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JVEVNX0lNRywgdGhpcy5fZWxlbWVudCkpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbihpbWcsIEVWRU5UX0RSQUdfU1RBUlQsIGV2ZW50ID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpXG4gICAgfVxuXG4gICAgY29uc3QgZW5kQ2FsbEJhY2sgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlICE9PSAnaG92ZXInKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCdzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2UsIG1vdXNlZW50ZXIvbGVhdmUgYXJlIGZpcmVkIGFzXG4gICAgICAvLyBwYXJ0IG9mIHRoZSBtb3VzZSBjb21wYXRpYmlsaXR5IGV2ZW50cyBvbiBmaXJzdCB0YXAgLSB0aGUgY2Fyb3VzZWxcbiAgICAgIC8vIHdvdWxkIHN0b3AgY3ljbGluZyB1bnRpbCB1c2VyIHRhcHBlZCBvdXQgb2YgaXQ7XG4gICAgICAvLyBoZXJlLCB3ZSBsaXN0ZW4gZm9yIHRvdWNoZW5kLCBleHBsaWNpdGx5IHBhdXNlIHRoZSBjYXJvdXNlbFxuICAgICAgLy8gKGFzIGlmIGl0J3MgdGhlIHNlY29uZCB0aW1lIHdlIHRhcCBvbiBpdCwgbW91c2VlbnRlciBjb21wYXQgZXZlbnRcbiAgICAgIC8vIGlzIE5PVCBmaXJlZCkgYW5kIGFmdGVyIGEgdGltZW91dCAodG8gYWxsb3cgZm9yIG1vdXNlIGNvbXBhdGliaWxpdHlcbiAgICAgIC8vIGV2ZW50cyB0byBmaXJlKSB3ZSBleHBsaWNpdGx5IHJlc3RhcnQgY3ljbGluZ1xuXG4gICAgICB0aGlzLnBhdXNlKClcbiAgICAgIGlmICh0aGlzLnRvdWNoVGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50b3VjaFRpbWVvdXQpXG4gICAgICB9XG5cbiAgICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLl9tYXliZUVuYWJsZUN5Y2xlKCksIFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgKyB0aGlzLl9jb25maWcuaW50ZXJ2YWwpXG4gICAgfVxuXG4gICAgY29uc3Qgc3dpcGVDb25maWcgPSB7XG4gICAgICBsZWZ0Q2FsbGJhY2s6ICgpID0+IHRoaXMuX3NsaWRlKHRoaXMuX2RpcmVjdGlvblRvT3JkZXIoRElSRUNUSU9OX0xFRlQpKSxcbiAgICAgIHJpZ2h0Q2FsbGJhY2s6ICgpID0+IHRoaXMuX3NsaWRlKHRoaXMuX2RpcmVjdGlvblRvT3JkZXIoRElSRUNUSU9OX1JJR0hUKSksXG4gICAgICBlbmRDYWxsYmFjazogZW5kQ2FsbEJhY2tcbiAgICB9XG5cbiAgICB0aGlzLl9zd2lwZUhlbHBlciA9IG5ldyBTd2lwZSh0aGlzLl9lbGVtZW50LCBzd2lwZUNvbmZpZylcbiAgfVxuXG4gIF9rZXlkb3duKGV2ZW50KSB7XG4gICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBLRVlfVE9fRElSRUNUSU9OW2V2ZW50LmtleV1cbiAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLl9zbGlkZSh0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKGRpcmVjdGlvbikpXG4gICAgfVxuICB9XG5cbiAgX2dldEl0ZW1JbmRleChlbGVtZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldEl0ZW1zKCkuaW5kZXhPZihlbGVtZW50KVxuICB9XG5cbiAgX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQoaW5kZXgpIHtcbiAgICBpZiAoIXRoaXMuX2luZGljYXRvcnNFbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmVJbmRpY2F0b3IgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRSwgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpXG5cbiAgICBhY3RpdmVJbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcbiAgICBhY3RpdmVJbmRpY2F0b3IucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKVxuXG4gICAgY29uc3QgbmV3QWN0aXZlSW5kaWNhdG9yID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShgW2RhdGEtYnMtc2xpZGUtdG89XCIke2luZGV4fVwiXWAsIHRoaXMuX2luZGljYXRvcnNFbGVtZW50KVxuXG4gICAgaWYgKG5ld0FjdGl2ZUluZGljYXRvcikge1xuICAgICAgbmV3QWN0aXZlSW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICBuZXdBY3RpdmVJbmRpY2F0b3Iuc2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnLCAndHJ1ZScpXG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZUludGVydmFsKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9hY3RpdmVFbGVtZW50IHx8IHRoaXMuX2dldEFjdGl2ZSgpXG5cbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnRJbnRlcnZhbCA9IE51bWJlci5wYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1pbnRlcnZhbCcpLCAxMClcblxuICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCA9IGVsZW1lbnRJbnRlcnZhbCB8fCB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsXG4gIH1cblxuICBfc2xpZGUob3JkZXIsIGVsZW1lbnQgPSBudWxsKSB7XG4gICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IHRoaXMuX2dldEFjdGl2ZSgpXG4gICAgY29uc3QgaXNOZXh0ID0gb3JkZXIgPT09IE9SREVSX05FWFRcbiAgICBjb25zdCBuZXh0RWxlbWVudCA9IGVsZW1lbnQgfHwgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQodGhpcy5fZ2V0SXRlbXMoKSwgYWN0aXZlRWxlbWVudCwgaXNOZXh0LCB0aGlzLl9jb25maWcud3JhcClcblxuICAgIGlmIChuZXh0RWxlbWVudCA9PT0gYWN0aXZlRWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgbmV4dEVsZW1lbnRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChuZXh0RWxlbWVudClcblxuICAgIGNvbnN0IHRyaWdnZXJFdmVudCA9IGV2ZW50TmFtZSA9PiB7XG4gICAgICByZXR1cm4gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgZXZlbnROYW1lLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IG5leHRFbGVtZW50LFxuICAgICAgICBkaXJlY3Rpb246IHRoaXMuX29yZGVyVG9EaXJlY3Rpb24ob3JkZXIpLFxuICAgICAgICBmcm9tOiB0aGlzLl9nZXRJdGVtSW5kZXgoYWN0aXZlRWxlbWVudCksXG4gICAgICAgIHRvOiBuZXh0RWxlbWVudEluZGV4XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHNsaWRlRXZlbnQgPSB0cmlnZ2VyRXZlbnQoRVZFTlRfU0xJREUpXG5cbiAgICBpZiAoc2xpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWFjdGl2ZUVsZW1lbnQgfHwgIW5leHRFbGVtZW50KSB7XG4gICAgICAvLyBTb21lIHdlaXJkbmVzcyBpcyBoYXBwZW5pbmcsIHNvIHdlIGJhaWxcbiAgICAgIC8vIHRvZG86IGNoYW5nZSB0ZXN0cyB0aGF0IHVzZSBlbXB0eSBkaXZzIHRvIGF2b2lkIHRoaXMgY2hlY2tcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzQ3ljbGluZyA9IEJvb2xlYW4odGhpcy5faW50ZXJ2YWwpXG4gICAgdGhpcy5wYXVzZSgpXG5cbiAgICB0aGlzLl9pc1NsaWRpbmcgPSB0cnVlXG5cbiAgICB0aGlzLl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KG5leHRFbGVtZW50SW5kZXgpXG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG5leHRFbGVtZW50XG5cbiAgICBjb25zdCBkaXJlY3Rpb25hbENsYXNzTmFtZSA9IGlzTmV4dCA/IENMQVNTX05BTUVfU1RBUlQgOiBDTEFTU19OQU1FX0VORFxuICAgIGNvbnN0IG9yZGVyQ2xhc3NOYW1lID0gaXNOZXh0ID8gQ0xBU1NfTkFNRV9ORVhUIDogQ0xBU1NfTkFNRV9QUkVWXG5cbiAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKG9yZGVyQ2xhc3NOYW1lKVxuXG4gICAgcmVmbG93KG5leHRFbGVtZW50KVxuXG4gICAgYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uYWxDbGFzc05hbWUpXG5cbiAgICBjb25zdCBjb21wbGV0ZUNhbGxCYWNrID0gKCkgPT4ge1xuICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShkaXJlY3Rpb25hbENsYXNzTmFtZSwgb3JkZXJDbGFzc05hbWUpXG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUsIG9yZGVyQ2xhc3NOYW1lLCBkaXJlY3Rpb25hbENsYXNzTmFtZSlcblxuICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcblxuICAgICAgdHJpZ2dlckV2ZW50KEVWRU5UX1NMSUQpXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxCYWNrLCBhY3RpdmVFbGVtZW50LCB0aGlzLl9pc0FuaW1hdGVkKCkpXG5cbiAgICBpZiAoaXNDeWNsaW5nKSB7XG4gICAgICB0aGlzLmN5Y2xlKClcbiAgICB9XG4gIH1cblxuICBfaXNBbmltYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TTElERSlcbiAgfVxuXG4gIF9nZXRBY3RpdmUoKSB7XG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFX0lURU0sIHRoaXMuX2VsZW1lbnQpXG4gIH1cblxuICBfZ2V0SXRlbXMoKSB7XG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSVRFTSwgdGhpcy5fZWxlbWVudClcbiAgfVxuXG4gIF9jbGVhckludGVydmFsKCkge1xuICAgIGlmICh0aGlzLl9pbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbClcbiAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIF9kaXJlY3Rpb25Ub09yZGVyKGRpcmVjdGlvbikge1xuICAgIGlmIChpc1JUTCgpKSB7XG4gICAgICByZXR1cm4gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fTEVGVCA/IE9SREVSX1BSRVYgOiBPUkRFUl9ORVhUXG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX0xFRlQgPyBPUkRFUl9ORVhUIDogT1JERVJfUFJFVlxuICB9XG5cbiAgX29yZGVyVG9EaXJlY3Rpb24ob3JkZXIpIHtcbiAgICBpZiAoaXNSVEwoKSkge1xuICAgICAgcmV0dXJuIG9yZGVyID09PSBPUkRFUl9QUkVWID8gRElSRUNUSU9OX0xFRlQgOiBESVJFQ1RJT05fUklHSFRcbiAgICB9XG5cbiAgICByZXR1cm4gb3JkZXIgPT09IE9SREVSX1BSRVYgPyBESVJFQ1RJT05fUklHSFQgOiBESVJFQ1RJT05fTEVGVFxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gQ2Fyb3VzZWwuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnbnVtYmVyJykge1xuICAgICAgICBkYXRhLnRvKGNvbmZpZylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfU0xJREUsIGZ1bmN0aW9uIChldmVudCkge1xuICBjb25zdCB0YXJnZXQgPSBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpXG5cbiAgaWYgKCF0YXJnZXQgfHwgIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9DQVJPVVNFTCkpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICBjb25zdCBjYXJvdXNlbCA9IENhcm91c2VsLmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KVxuICBjb25zdCBzbGlkZUluZGV4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtc2xpZGUtdG8nKVxuXG4gIGlmIChzbGlkZUluZGV4KSB7XG4gICAgY2Fyb3VzZWwudG8oc2xpZGVJbmRleClcbiAgICBjYXJvdXNlbC5fbWF5YmVFbmFibGVDeWNsZSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZSh0aGlzLCAnc2xpZGUnKSA9PT0gJ25leHQnKSB7XG4gICAgY2Fyb3VzZWwubmV4dCgpXG4gICAgY2Fyb3VzZWwuX21heWJlRW5hYmxlQ3ljbGUoKVxuICAgIHJldHVyblxuICB9XG5cbiAgY2Fyb3VzZWwucHJldigpXG4gIGNhcm91c2VsLl9tYXliZUVuYWJsZUN5Y2xlKClcbn0pXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgY29uc3QgY2Fyb3VzZWxzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1JJREUpXG5cbiAgZm9yIChjb25zdCBjYXJvdXNlbCBvZiBjYXJvdXNlbHMpIHtcbiAgICBDYXJvdXNlbC5nZXRPckNyZWF0ZUluc3RhbmNlKGNhcm91c2VsKVxuICB9XG59KVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihDYXJvdXNlbClcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMi4zKTogY29sbGFwc2UuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldEVsZW1lbnQsXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsXG4gIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQsXG4gIHJlZmxvd1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ2NvbGxhcHNlJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuY29sbGFwc2UnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTRSA9ICdjb2xsYXBzZSdcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0lORyA9ICdjb2xsYXBzaW5nJ1xuY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTRUQgPSAnY29sbGFwc2VkJ1xuY29uc3QgQ0xBU1NfTkFNRV9ERUVQRVJfQ0hJTERSRU4gPSBgOnNjb3BlIC4ke0NMQVNTX05BTUVfQ09MTEFQU0V9IC4ke0NMQVNTX05BTUVfQ09MTEFQU0V9YFxuY29uc3QgQ0xBU1NfTkFNRV9IT1JJWk9OVEFMID0gJ2NvbGxhcHNlLWhvcml6b250YWwnXG5cbmNvbnN0IFdJRFRIID0gJ3dpZHRoJ1xuY29uc3QgSEVJR0hUID0gJ2hlaWdodCdcblxuY29uc3QgU0VMRUNUT1JfQUNUSVZFUyA9ICcuY29sbGFwc2Uuc2hvdywgLmNvbGxhcHNlLmNvbGxhcHNpbmcnXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgcGFyZW50OiBudWxsLFxuICB0b2dnbGU6IHRydWVcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIHBhcmVudDogJyhudWxsfGVsZW1lbnQpJyxcbiAgdG9nZ2xlOiAnYm9vbGVhbidcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQ29sbGFwc2UgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICB0aGlzLl90cmlnZ2VyQXJyYXkgPSBbXVxuXG4gICAgY29uc3QgdG9nZ2xlTGlzdCA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9UT0dHTEUpXG5cbiAgICBmb3IgKGNvbnN0IGVsZW0gb2YgdG9nZ2xlTGlzdCkge1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW0pXG4gICAgICBjb25zdCBmaWx0ZXJFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcilcbiAgICAgICAgLmZpbHRlcihmb3VuZEVsZW1lbnQgPT4gZm91bmRFbGVtZW50ID09PSB0aGlzLl9lbGVtZW50KVxuXG4gICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwgJiYgZmlsdGVyRWxlbWVudC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fdHJpZ2dlckFycmF5LnB1c2goZWxlbSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pbml0aWFsaXplQ2hpbGRyZW4oKVxuXG4gICAgaWYgKCF0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModGhpcy5fdHJpZ2dlckFycmF5LCB0aGlzLl9pc1Nob3duKCkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy50b2dnbGUpIHtcbiAgICAgIHRoaXMudG9nZ2xlKClcbiAgICB9XG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5faXNTaG93bigpKSB7XG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3coKVxuICAgIH1cbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCB0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBhY3RpdmVDaGlsZHJlbiA9IFtdXG5cbiAgICAvLyBmaW5kIGFjdGl2ZSBjaGlsZHJlblxuICAgIGlmICh0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICBhY3RpdmVDaGlsZHJlbiA9IHRoaXMuX2dldEZpcnN0TGV2ZWxDaGlsZHJlbihTRUxFQ1RPUl9BQ1RJVkVTKVxuICAgICAgICAuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudCAhPT0gdGhpcy5fZWxlbWVudClcbiAgICAgICAgLm1hcChlbGVtZW50ID0+IENvbGxhcHNlLmdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCwgeyB0b2dnbGU6IGZhbHNlIH0pKVxuICAgIH1cblxuICAgIGlmIChhY3RpdmVDaGlsZHJlbi5sZW5ndGggJiYgYWN0aXZlQ2hpbGRyZW5bMF0uX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1cpXG4gICAgaWYgKHN0YXJ0RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBhY3RpdmVJbnN0YW5jZSBvZiBhY3RpdmVDaGlsZHJlbikge1xuICAgICAgYWN0aXZlSW5zdGFuY2UuaGlkZSgpXG4gICAgfVxuXG4gICAgY29uc3QgZGltZW5zaW9uID0gdGhpcy5fZ2V0RGltZW5zaW9uKClcblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNJTkcpXG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAwXG5cbiAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModGhpcy5fdHJpZ2dlckFycmF5LCB0cnVlKVxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0lORylcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNFLCBDTEFTU19OQU1FX1NIT1cpXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnXG5cbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOKVxuICAgIH1cblxuICAgIGNvbnN0IGNhcGl0YWxpemVkRGltZW5zaW9uID0gZGltZW5zaW9uWzBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoMSlcbiAgICBjb25zdCBzY3JvbGxTaXplID0gYHNjcm9sbCR7Y2FwaXRhbGl6ZWREaW1lbnNpb259YFxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdHJ1ZSlcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSBgJHt0aGlzLl9lbGVtZW50W3Njcm9sbFNpemVdfXB4YFxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8ICF0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKVxuICAgIGlmIChzdGFydEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSBgJHt0aGlzLl9lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2RpbWVuc2lvbl19cHhgXG5cbiAgICByZWZsb3codGhpcy5fZWxlbWVudClcblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0UsIENMQVNTX05BTUVfU0hPVylcblxuICAgIGZvciAoY29uc3QgdHJpZ2dlciBvZiB0aGlzLl90cmlnZ2VyQXJyYXkpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRyaWdnZXIpXG5cbiAgICAgIGlmIChlbGVtZW50ICYmICF0aGlzLl9pc1Nob3duKGVsZW1lbnQpKSB7XG4gICAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhbdHJpZ2dlcl0sIGZhbHNlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRSlcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTilcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdHJ1ZSlcbiAgfVxuXG4gIF9pc1Nob3duKGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVylcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgY29uZmlnLnRvZ2dsZSA9IEJvb2xlYW4oY29uZmlnLnRvZ2dsZSkgLy8gQ29lcmNlIHN0cmluZyB2YWx1ZXNcbiAgICBjb25maWcucGFyZW50ID0gZ2V0RWxlbWVudChjb25maWcucGFyZW50KVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXREaW1lbnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfSE9SSVpPTlRBTCkgPyBXSURUSCA6IEhFSUdIVFxuICB9XG5cbiAgX2luaXRpYWxpemVDaGlsZHJlbigpIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5fZ2V0Rmlyc3RMZXZlbENoaWxkcmVuKFNFTEVDVE9SX0RBVEFfVE9HR0xFKVxuXG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGNoaWxkcmVuKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudClcblxuICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhbZWxlbWVudF0sIHRoaXMuX2lzU2hvd24oc2VsZWN0ZWQpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9nZXRGaXJzdExldmVsQ2hpbGRyZW4oc2VsZWN0b3IpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IFNlbGVjdG9yRW5naW5lLmZpbmQoQ0xBU1NfTkFNRV9ERUVQRVJfQ0hJTERSRU4sIHRoaXMuX2NvbmZpZy5wYXJlbnQpXG4gICAgLy8gcmVtb3ZlIGNoaWxkcmVuIGlmIGdyZWF0ZXIgZGVwdGhcbiAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvciwgdGhpcy5fY29uZmlnLnBhcmVudCkuZmlsdGVyKGVsZW1lbnQgPT4gIWNoaWxkcmVuLmluY2x1ZGVzKGVsZW1lbnQpKVxuICB9XG5cbiAgX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0cmlnZ2VyQXJyYXksIGlzT3Blbikge1xuICAgIGlmICghdHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIHRyaWdnZXJBcnJheSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKENMQVNTX05BTUVfQ09MTEFQU0VELCAhaXNPcGVuKVxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBpc09wZW4pXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgY29uc3QgX2NvbmZpZyA9IHt9XG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnICYmIC9zaG93fGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgX2NvbmZpZy50b2dnbGUgPSBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IENvbGxhcHNlLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgX2NvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAvLyBwcmV2ZW50RGVmYXVsdCBvbmx5IGZvciA8YT4gZWxlbWVudHMgKHdoaWNoIGNoYW5nZSB0aGUgVVJMKSBub3QgaW5zaWRlIHRoZSBjb2xsYXBzaWJsZSBlbGVtZW50XG4gIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0EnIHx8IChldmVudC5kZWxlZ2F0ZVRhcmdldCAmJiBldmVudC5kZWxlZ2F0ZVRhcmdldC50YWdOYW1lID09PSAnQScpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvckZyb21FbGVtZW50KHRoaXMpXG4gIGNvbnN0IHNlbGVjdG9yRWxlbWVudHMgPSBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yKVxuXG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBzZWxlY3RvckVsZW1lbnRzKSB7XG4gICAgQ29sbGFwc2UuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50LCB7IHRvZ2dsZTogZmFsc2UgfSkudG9nZ2xlKClcbiAgfVxufSlcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oQ29sbGFwc2UpXG5cbmV4cG9ydCBkZWZhdWx0IENvbGxhcHNlXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjIuMyk6IGRvbS9kYXRhLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBlbGVtZW50TWFwID0gbmV3IE1hcCgpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0KGVsZW1lbnQsIGtleSwgaW5zdGFuY2UpIHtcbiAgICBpZiAoIWVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICBlbGVtZW50TWFwLnNldChlbGVtZW50LCBuZXcgTWFwKCkpXG4gICAgfVxuXG4gICAgY29uc3QgaW5zdGFuY2VNYXAgPSBlbGVtZW50TWFwLmdldChlbGVtZW50KVxuXG4gICAgLy8gbWFrZSBpdCBjbGVhciB3ZSBvbmx5IHdhbnQgb25lIGluc3RhbmNlIHBlciBlbGVtZW50XG4gICAgLy8gY2FuIGJlIHJlbW92ZWQgbGF0ZXIgd2hlbiBtdWx0aXBsZSBrZXkvaW5zdGFuY2VzIGFyZSBmaW5lIHRvIGJlIHVzZWRcbiAgICBpZiAoIWluc3RhbmNlTWFwLmhhcyhrZXkpICYmIGluc3RhbmNlTWFwLnNpemUgIT09IDApIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKGBCb290c3RyYXAgZG9lc24ndCBhbGxvdyBtb3JlIHRoYW4gb25lIGluc3RhbmNlIHBlciBlbGVtZW50LiBCb3VuZCBpbnN0YW5jZTogJHtBcnJheS5mcm9tKGluc3RhbmNlTWFwLmtleXMoKSlbMF19LmApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpbnN0YW5jZU1hcC5zZXQoa2V5LCBpbnN0YW5jZSlcbiAgfSxcblxuICBnZXQoZWxlbWVudCwga2V5KSB7XG4gICAgaWYgKGVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm4gZWxlbWVudE1hcC5nZXQoZWxlbWVudCkuZ2V0KGtleSkgfHwgbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH0sXG5cbiAgcmVtb3ZlKGVsZW1lbnQsIGtleSkge1xuICAgIGlmICghZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGluc3RhbmNlTWFwID0gZWxlbWVudE1hcC5nZXQoZWxlbWVudClcblxuICAgIGluc3RhbmNlTWFwLmRlbGV0ZShrZXkpXG5cbiAgICAvLyBmcmVlIHVwIGVsZW1lbnQgcmVmZXJlbmNlcyBpZiB0aGVyZSBhcmUgbm8gaW5zdGFuY2VzIGxlZnQgZm9yIGFuIGVsZW1lbnRcbiAgICBpZiAoaW5zdGFuY2VNYXAuc2l6ZSA9PT0gMCkge1xuICAgICAgZWxlbWVudE1hcC5kZWxldGUoZWxlbWVudClcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMi4zKTogZG9tL2V2ZW50LWhhbmRsZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBnZXRqUXVlcnkgfSBmcm9tICcuLi91dGlsL2luZGV4J1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IG5hbWVzcGFjZVJlZ2V4ID0gL1teLl0qKD89XFwuLiopXFwufC4qL1xuY29uc3Qgc3RyaXBOYW1lUmVnZXggPSAvXFwuLiovXG5jb25zdCBzdHJpcFVpZFJlZ2V4ID0gLzo6XFxkKyQvXG5jb25zdCBldmVudFJlZ2lzdHJ5ID0ge30gLy8gRXZlbnRzIHN0b3JhZ2VcbmxldCB1aWRFdmVudCA9IDFcbmNvbnN0IGN1c3RvbUV2ZW50cyA9IHtcbiAgbW91c2VlbnRlcjogJ21vdXNlb3ZlcicsXG4gIG1vdXNlbGVhdmU6ICdtb3VzZW91dCdcbn1cblxuY29uc3QgbmF0aXZlRXZlbnRzID0gbmV3IFNldChbXG4gICdjbGljaycsXG4gICdkYmxjbGljaycsXG4gICdtb3VzZXVwJyxcbiAgJ21vdXNlZG93bicsXG4gICdjb250ZXh0bWVudScsXG4gICdtb3VzZXdoZWVsJyxcbiAgJ0RPTU1vdXNlU2Nyb2xsJyxcbiAgJ21vdXNlb3ZlcicsXG4gICdtb3VzZW91dCcsXG4gICdtb3VzZW1vdmUnLFxuICAnc2VsZWN0c3RhcnQnLFxuICAnc2VsZWN0ZW5kJyxcbiAgJ2tleWRvd24nLFxuICAna2V5cHJlc3MnLFxuICAna2V5dXAnLFxuICAnb3JpZW50YXRpb25jaGFuZ2UnLFxuICAndG91Y2hzdGFydCcsXG4gICd0b3VjaG1vdmUnLFxuICAndG91Y2hlbmQnLFxuICAndG91Y2hjYW5jZWwnLFxuICAncG9pbnRlcmRvd24nLFxuICAncG9pbnRlcm1vdmUnLFxuICAncG9pbnRlcnVwJyxcbiAgJ3BvaW50ZXJsZWF2ZScsXG4gICdwb2ludGVyY2FuY2VsJyxcbiAgJ2dlc3R1cmVzdGFydCcsXG4gICdnZXN0dXJlY2hhbmdlJyxcbiAgJ2dlc3R1cmVlbmQnLFxuICAnZm9jdXMnLFxuICAnYmx1cicsXG4gICdjaGFuZ2UnLFxuICAncmVzZXQnLFxuICAnc2VsZWN0JyxcbiAgJ3N1Ym1pdCcsXG4gICdmb2N1c2luJyxcbiAgJ2ZvY3Vzb3V0JyxcbiAgJ2xvYWQnLFxuICAndW5sb2FkJyxcbiAgJ2JlZm9yZXVubG9hZCcsXG4gICdyZXNpemUnLFxuICAnbW92ZScsXG4gICdET01Db250ZW50TG9hZGVkJyxcbiAgJ3JlYWR5c3RhdGVjaGFuZ2UnLFxuICAnZXJyb3InLFxuICAnYWJvcnQnLFxuICAnc2Nyb2xsJ1xuXSlcblxuLyoqXG4gKiBQcml2YXRlIG1ldGhvZHNcbiAqL1xuXG5mdW5jdGlvbiBtYWtlRXZlbnRVaWQoZWxlbWVudCwgdWlkKSB7XG4gIHJldHVybiAodWlkICYmIGAke3VpZH06OiR7dWlkRXZlbnQrK31gKSB8fCBlbGVtZW50LnVpZEV2ZW50IHx8IHVpZEV2ZW50Kytcbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudEV2ZW50cyhlbGVtZW50KSB7XG4gIGNvbnN0IHVpZCA9IG1ha2VFdmVudFVpZChlbGVtZW50KVxuXG4gIGVsZW1lbnQudWlkRXZlbnQgPSB1aWRcbiAgZXZlbnRSZWdpc3RyeVt1aWRdID0gZXZlbnRSZWdpc3RyeVt1aWRdIHx8IHt9XG5cbiAgcmV0dXJuIGV2ZW50UmVnaXN0cnlbdWlkXVxufVxuXG5mdW5jdGlvbiBib290c3RyYXBIYW5kbGVyKGVsZW1lbnQsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgaHlkcmF0ZU9iaihldmVudCwgeyBkZWxlZ2F0ZVRhcmdldDogZWxlbWVudCB9KVxuXG4gICAgaWYgKGhhbmRsZXIub25lT2ZmKSB7XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsIGV2ZW50LnR5cGUsIGZuKVxuICAgIH1cblxuICAgIHJldHVybiBmbi5hcHBseShlbGVtZW50LCBbZXZlbnRdKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyKGVsZW1lbnQsIHNlbGVjdG9yLCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnRzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuXG4gICAgZm9yIChsZXQgeyB0YXJnZXQgfSA9IGV2ZW50OyB0YXJnZXQgJiYgdGFyZ2V0ICE9PSB0aGlzOyB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZSkge1xuICAgICAgZm9yIChjb25zdCBkb21FbGVtZW50IG9mIGRvbUVsZW1lbnRzKSB7XG4gICAgICAgIGlmIChkb21FbGVtZW50ICE9PSB0YXJnZXQpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaHlkcmF0ZU9iaihldmVudCwgeyBkZWxlZ2F0ZVRhcmdldDogdGFyZ2V0IH0pXG5cbiAgICAgICAgaWYgKGhhbmRsZXIub25lT2ZmKSB7XG4gICAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCBldmVudC50eXBlLCBzZWxlY3RvciwgZm4pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm4uYXBwbHkodGFyZ2V0LCBbZXZlbnRdKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kSGFuZGxlcihldmVudHMsIGNhbGxhYmxlLCBkZWxlZ2F0aW9uU2VsZWN0b3IgPSBudWxsKSB7XG4gIHJldHVybiBPYmplY3QudmFsdWVzKGV2ZW50cylcbiAgICAuZmluZChldmVudCA9PiBldmVudC5jYWxsYWJsZSA9PT0gY2FsbGFibGUgJiYgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yID09PSBkZWxlZ2F0aW9uU2VsZWN0b3IpXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBhcmFtZXRlcnMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICBjb25zdCBpc0RlbGVnYXRlZCA9IHR5cGVvZiBoYW5kbGVyID09PSAnc3RyaW5nJ1xuICAvLyB0b2RvOiB0b29sdGlwIHBhc3NlcyBgZmFsc2VgIGluc3RlYWQgb2Ygc2VsZWN0b3IsIHNvIHdlIG5lZWQgdG8gY2hlY2tcbiAgY29uc3QgY2FsbGFibGUgPSBpc0RlbGVnYXRlZCA/IGRlbGVnYXRpb25GdW5jdGlvbiA6IChoYW5kbGVyIHx8IGRlbGVnYXRpb25GdW5jdGlvbilcbiAgbGV0IHR5cGVFdmVudCA9IGdldFR5cGVFdmVudChvcmlnaW5hbFR5cGVFdmVudClcblxuICBpZiAoIW5hdGl2ZUV2ZW50cy5oYXModHlwZUV2ZW50KSkge1xuICAgIHR5cGVFdmVudCA9IG9yaWdpbmFsVHlwZUV2ZW50XG4gIH1cblxuICByZXR1cm4gW2lzRGVsZWdhdGVkLCBjYWxsYWJsZSwgdHlwZUV2ZW50XVxufVxuXG5mdW5jdGlvbiBhZGRIYW5kbGVyKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24sIG9uZU9mZikge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsVHlwZUV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgbGV0IFtpc0RlbGVnYXRlZCwgY2FsbGFibGUsIHR5cGVFdmVudF0gPSBub3JtYWxpemVQYXJhbWV0ZXJzKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pXG5cbiAgLy8gaW4gY2FzZSBvZiBtb3VzZWVudGVyIG9yIG1vdXNlbGVhdmUgd3JhcCB0aGUgaGFuZGxlciB3aXRoaW4gYSBmdW5jdGlvbiB0aGF0IGNoZWNrcyBmb3IgaXRzIERPTSBwb3NpdGlvblxuICAvLyB0aGlzIHByZXZlbnRzIHRoZSBoYW5kbGVyIGZyb20gYmVpbmcgZGlzcGF0Y2hlZCB0aGUgc2FtZSB3YXkgYXMgbW91c2VvdmVyIG9yIG1vdXNlb3V0IGRvZXNcbiAgaWYgKG9yaWdpbmFsVHlwZUV2ZW50IGluIGN1c3RvbUV2ZW50cykge1xuICAgIGNvbnN0IHdyYXBGdW5jdGlvbiA9IGZuID0+IHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKCFldmVudC5yZWxhdGVkVGFyZ2V0IHx8IChldmVudC5yZWxhdGVkVGFyZ2V0ICE9PSBldmVudC5kZWxlZ2F0ZVRhcmdldCAmJiAhZXZlbnQuZGVsZWdhdGVUYXJnZXQuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCkpKSB7XG4gICAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYWxsYWJsZSA9IHdyYXBGdW5jdGlvbihjYWxsYWJsZSlcbiAgfVxuXG4gIGNvbnN0IGV2ZW50cyA9IGdldEVsZW1lbnRFdmVudHMoZWxlbWVudClcbiAgY29uc3QgaGFuZGxlcnMgPSBldmVudHNbdHlwZUV2ZW50XSB8fCAoZXZlbnRzW3R5cGVFdmVudF0gPSB7fSlcbiAgY29uc3QgcHJldmlvdXNGdW5jdGlvbiA9IGZpbmRIYW5kbGVyKGhhbmRsZXJzLCBjYWxsYWJsZSwgaXNEZWxlZ2F0ZWQgPyBoYW5kbGVyIDogbnVsbClcblxuICBpZiAocHJldmlvdXNGdW5jdGlvbikge1xuICAgIHByZXZpb3VzRnVuY3Rpb24ub25lT2ZmID0gcHJldmlvdXNGdW5jdGlvbi5vbmVPZmYgJiYgb25lT2ZmXG5cbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHVpZCA9IG1ha2VFdmVudFVpZChjYWxsYWJsZSwgb3JpZ2luYWxUeXBlRXZlbnQucmVwbGFjZShuYW1lc3BhY2VSZWdleCwgJycpKVxuICBjb25zdCBmbiA9IGlzRGVsZWdhdGVkID9cbiAgICBib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyLCBjYWxsYWJsZSkgOlxuICAgIGJvb3RzdHJhcEhhbmRsZXIoZWxlbWVudCwgY2FsbGFibGUpXG5cbiAgZm4uZGVsZWdhdGlvblNlbGVjdG9yID0gaXNEZWxlZ2F0ZWQgPyBoYW5kbGVyIDogbnVsbFxuICBmbi5jYWxsYWJsZSA9IGNhbGxhYmxlXG4gIGZuLm9uZU9mZiA9IG9uZU9mZlxuICBmbi51aWRFdmVudCA9IHVpZFxuICBoYW5kbGVyc1t1aWRdID0gZm5cblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZUV2ZW50LCBmbiwgaXNEZWxlZ2F0ZWQpXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3Rvcikge1xuICBjb25zdCBmbiA9IGZpbmRIYW5kbGVyKGV2ZW50c1t0eXBlRXZlbnRdLCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IpXG5cbiAgaWYgKCFmbikge1xuICAgIHJldHVyblxuICB9XG5cbiAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGVFdmVudCwgZm4sIEJvb2xlYW4oZGVsZWdhdGlvblNlbGVjdG9yKSlcbiAgZGVsZXRlIGV2ZW50c1t0eXBlRXZlbnRdW2ZuLnVpZEV2ZW50XVxufVxuXG5mdW5jdGlvbiByZW1vdmVOYW1lc3BhY2VkSGFuZGxlcnMoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIG5hbWVzcGFjZSkge1xuICBjb25zdCBzdG9yZUVsZW1lbnRFdmVudCA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IHt9XG5cbiAgZm9yIChjb25zdCBoYW5kbGVyS2V5IG9mIE9iamVjdC5rZXlzKHN0b3JlRWxlbWVudEV2ZW50KSkge1xuICAgIGlmIChoYW5kbGVyS2V5LmluY2x1ZGVzKG5hbWVzcGFjZSkpIHtcbiAgICAgIGNvbnN0IGV2ZW50ID0gc3RvcmVFbGVtZW50RXZlbnRbaGFuZGxlcktleV1cbiAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGV2ZW50LmNhbGxhYmxlLCBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFR5cGVFdmVudChldmVudCkge1xuICAvLyBhbGxvdyB0byBnZXQgdGhlIG5hdGl2ZSBldmVudHMgZnJvbSBuYW1lc3BhY2VkIGV2ZW50cyAoJ2NsaWNrLmJzLmJ1dHRvbicgLS0+ICdjbGljaycpXG4gIGV2ZW50ID0gZXZlbnQucmVwbGFjZShzdHJpcE5hbWVSZWdleCwgJycpXG4gIHJldHVybiBjdXN0b21FdmVudHNbZXZlbnRdIHx8IGV2ZW50XG59XG5cbmNvbnN0IEV2ZW50SGFuZGxlciA9IHtcbiAgb24oZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICAgIGFkZEhhbmRsZXIoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbiwgZmFsc2UpXG4gIH0sXG5cbiAgb25lKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgICBhZGRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24sIHRydWUpXG4gIH0sXG5cbiAgb2ZmKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgICBpZiAodHlwZW9mIG9yaWdpbmFsVHlwZUV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgW2lzRGVsZWdhdGVkLCBjYWxsYWJsZSwgdHlwZUV2ZW50XSA9IG5vcm1hbGl6ZVBhcmFtZXRlcnMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbilcbiAgICBjb25zdCBpbk5hbWVzcGFjZSA9IHR5cGVFdmVudCAhPT0gb3JpZ2luYWxUeXBlRXZlbnRcbiAgICBjb25zdCBldmVudHMgPSBnZXRFbGVtZW50RXZlbnRzKGVsZW1lbnQpXG4gICAgY29uc3Qgc3RvcmVFbGVtZW50RXZlbnQgPSBldmVudHNbdHlwZUV2ZW50XSB8fCB7fVxuICAgIGNvbnN0IGlzTmFtZXNwYWNlID0gb3JpZ2luYWxUeXBlRXZlbnQuc3RhcnRzV2l0aCgnLicpXG5cbiAgICBpZiAodHlwZW9mIGNhbGxhYmxlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gU2ltcGxlc3QgY2FzZTogaGFuZGxlciBpcyBwYXNzZWQsIHJlbW92ZSB0aGF0IGxpc3RlbmVyIE9OTFkuXG4gICAgICBpZiAoIU9iamVjdC5rZXlzKHN0b3JlRWxlbWVudEV2ZW50KS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGNhbGxhYmxlLCBpc0RlbGVnYXRlZCA/IGhhbmRsZXIgOiBudWxsKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGlzTmFtZXNwYWNlKSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnRFdmVudCBvZiBPYmplY3Qua2V5cyhldmVudHMpKSB7XG4gICAgICAgIHJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyhlbGVtZW50LCBldmVudHMsIGVsZW1lbnRFdmVudCwgb3JpZ2luYWxUeXBlRXZlbnQuc2xpY2UoMSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBrZXlIYW5kbGVycyBvZiBPYmplY3Qua2V5cyhzdG9yZUVsZW1lbnRFdmVudCkpIHtcbiAgICAgIGNvbnN0IGhhbmRsZXJLZXkgPSBrZXlIYW5kbGVycy5yZXBsYWNlKHN0cmlwVWlkUmVnZXgsICcnKVxuXG4gICAgICBpZiAoIWluTmFtZXNwYWNlIHx8IG9yaWdpbmFsVHlwZUV2ZW50LmluY2x1ZGVzKGhhbmRsZXJLZXkpKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gc3RvcmVFbGVtZW50RXZlbnRba2V5SGFuZGxlcnNdXG4gICAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGV2ZW50LmNhbGxhYmxlLCBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IpXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHRyaWdnZXIoZWxlbWVudCwgZXZlbnQsIGFyZ3MpIHtcbiAgICBpZiAodHlwZW9mIGV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCAkID0gZ2V0alF1ZXJ5KClcbiAgICBjb25zdCB0eXBlRXZlbnQgPSBnZXRUeXBlRXZlbnQoZXZlbnQpXG4gICAgY29uc3QgaW5OYW1lc3BhY2UgPSBldmVudCAhPT0gdHlwZUV2ZW50XG5cbiAgICBsZXQgalF1ZXJ5RXZlbnQgPSBudWxsXG4gICAgbGV0IGJ1YmJsZXMgPSB0cnVlXG4gICAgbGV0IG5hdGl2ZURpc3BhdGNoID0gdHJ1ZVxuICAgIGxldCBkZWZhdWx0UHJldmVudGVkID0gZmFsc2VcblxuICAgIGlmIChpbk5hbWVzcGFjZSAmJiAkKSB7XG4gICAgICBqUXVlcnlFdmVudCA9ICQuRXZlbnQoZXZlbnQsIGFyZ3MpXG5cbiAgICAgICQoZWxlbWVudCkudHJpZ2dlcihqUXVlcnlFdmVudClcbiAgICAgIGJ1YmJsZXMgPSAhalF1ZXJ5RXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKVxuICAgICAgbmF0aXZlRGlzcGF0Y2ggPSAhalF1ZXJ5RXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKVxuICAgICAgZGVmYXVsdFByZXZlbnRlZCA9IGpRdWVyeUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpXG4gICAgfVxuXG4gICAgbGV0IGV2dCA9IG5ldyBFdmVudChldmVudCwgeyBidWJibGVzLCBjYW5jZWxhYmxlOiB0cnVlIH0pXG4gICAgZXZ0ID0gaHlkcmF0ZU9iaihldnQsIGFyZ3MpXG5cbiAgICBpZiAoZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAobmF0aXZlRGlzcGF0Y2gpIHtcbiAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldnQpXG4gICAgfVxuXG4gICAgaWYgKGV2dC5kZWZhdWx0UHJldmVudGVkICYmIGpRdWVyeUV2ZW50KSB7XG4gICAgICBqUXVlcnlFdmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgcmV0dXJuIGV2dFxuICB9XG59XG5cbmZ1bmN0aW9uIGh5ZHJhdGVPYmoob2JqLCBtZXRhKSB7XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG1ldGEgfHwge30pKSB7XG4gICAgdHJ5IHtcbiAgICAgIG9ialtrZXldID0gdmFsdWVcbiAgICB9IGNhdGNoIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50SGFuZGxlclxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4yLjMpOiBkb20vbWFuaXB1bGF0b3IuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5mdW5jdGlvbiBub3JtYWxpemVEYXRhKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gJ3RydWUnKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gJ2ZhbHNlJykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKHZhbHVlID09PSBOdW1iZXIodmFsdWUpLnRvU3RyaW5nKCkpIHtcbiAgICByZXR1cm4gTnVtYmVyKHZhbHVlKVxuICB9XG5cbiAgaWYgKHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gJ251bGwnKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZURhdGFLZXkoa2V5KSB7XG4gIHJldHVybiBrZXkucmVwbGFjZSgvW0EtWl0vZywgY2hyID0+IGAtJHtjaHIudG9Mb3dlckNhc2UoKX1gKVxufVxuXG5jb25zdCBNYW5pcHVsYXRvciA9IHtcbiAgc2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXksIHZhbHVlKSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YCwgdmFsdWUpXG4gIH0sXG5cbiAgcmVtb3ZlRGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXkpIHtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gKVxuICB9LFxuXG4gIGdldERhdGFBdHRyaWJ1dGVzKGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH1cblxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB7fVxuICAgIGNvbnN0IGJzS2V5cyA9IE9iamVjdC5rZXlzKGVsZW1lbnQuZGF0YXNldCkuZmlsdGVyKGtleSA9PiBrZXkuc3RhcnRzV2l0aCgnYnMnKSAmJiAha2V5LnN0YXJ0c1dpdGgoJ2JzQ29uZmlnJykpXG5cbiAgICBmb3IgKGNvbnN0IGtleSBvZiBic0tleXMpIHtcbiAgICAgIGxldCBwdXJlS2V5ID0ga2V5LnJlcGxhY2UoL15icy8sICcnKVxuICAgICAgcHVyZUtleSA9IHB1cmVLZXkuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBwdXJlS2V5LnNsaWNlKDEsIHB1cmVLZXkubGVuZ3RoKVxuICAgICAgYXR0cmlidXRlc1twdXJlS2V5XSA9IG5vcm1hbGl6ZURhdGEoZWxlbWVudC5kYXRhc2V0W2tleV0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZXNcbiAgfSxcblxuICBnZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSkge1xuICAgIHJldHVybiBub3JtYWxpemVEYXRhKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWApKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmlwdWxhdG9yXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjIuMyk6IGRvbS9zZWxlY3Rvci1lbmdpbmUuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBpc0Rpc2FibGVkLCBpc1Zpc2libGUgfSBmcm9tICcuLi91dGlsL2luZGV4J1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IFNlbGVjdG9yRW5naW5lID0ge1xuICBmaW5kKHNlbGVjdG9yLCBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCguLi5FbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yQWxsLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpKVxuICB9LFxuXG4gIGZpbmRPbmUoc2VsZWN0b3IsIGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3Rvci5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKVxuICB9LFxuXG4gIGNoaWxkcmVuKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCguLi5lbGVtZW50LmNoaWxkcmVuKS5maWx0ZXIoY2hpbGQgPT4gY2hpbGQubWF0Y2hlcyhzZWxlY3RvcikpXG4gIH0sXG5cbiAgcGFyZW50cyhlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGNvbnN0IHBhcmVudHMgPSBbXVxuICAgIGxldCBhbmNlc3RvciA9IGVsZW1lbnQucGFyZW50Tm9kZS5jbG9zZXN0KHNlbGVjdG9yKVxuXG4gICAgd2hpbGUgKGFuY2VzdG9yKSB7XG4gICAgICBwYXJlbnRzLnB1c2goYW5jZXN0b3IpXG4gICAgICBhbmNlc3RvciA9IGFuY2VzdG9yLnBhcmVudE5vZGUuY2xvc2VzdChzZWxlY3RvcilcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50c1xuICB9LFxuXG4gIHByZXYoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBsZXQgcHJldmlvdXMgPSBlbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmdcblxuICAgIHdoaWxlIChwcmV2aW91cykge1xuICAgICAgaWYgKHByZXZpb3VzLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiBbcHJldmlvdXNdXG4gICAgICB9XG5cbiAgICAgIHByZXZpb3VzID0gcHJldmlvdXMucHJldmlvdXNFbGVtZW50U2libGluZ1xuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9LFxuICAvLyBUT0RPOiB0aGlzIGlzIG5vdyB1bnVzZWQ7IHJlbW92ZSBsYXRlciBhbG9uZyB3aXRoIHByZXYoKVxuICBuZXh0KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgbGV0IG5leHQgPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZ1xuXG4gICAgd2hpbGUgKG5leHQpIHtcbiAgICAgIGlmIChuZXh0Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiBbbmV4dF1cbiAgICAgIH1cblxuICAgICAgbmV4dCA9IG5leHQubmV4dEVsZW1lbnRTaWJsaW5nXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH0sXG5cbiAgZm9jdXNhYmxlQ2hpbGRyZW4oZWxlbWVudCkge1xuICAgIGNvbnN0IGZvY3VzYWJsZXMgPSBbXG4gICAgICAnYScsXG4gICAgICAnYnV0dG9uJyxcbiAgICAgICdpbnB1dCcsXG4gICAgICAndGV4dGFyZWEnLFxuICAgICAgJ3NlbGVjdCcsXG4gICAgICAnZGV0YWlscycsXG4gICAgICAnW3RhYmluZGV4XScsXG4gICAgICAnW2NvbnRlbnRlZGl0YWJsZT1cInRydWVcIl0nXG4gICAgXS5tYXAoc2VsZWN0b3IgPT4gYCR7c2VsZWN0b3J9Om5vdChbdGFiaW5kZXhePVwiLVwiXSlgKS5qb2luKCcsJylcblxuICAgIHJldHVybiB0aGlzLmZpbmQoZm9jdXNhYmxlcywgZWxlbWVudCkuZmlsdGVyKGVsID0+ICFpc0Rpc2FibGVkKGVsKSAmJiBpc1Zpc2libGUoZWwpKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdG9yRW5naW5lXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjIuMyk6IGRyb3Bkb3duLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICogYXMgUG9wcGVyIGZyb20gJ0Bwb3BwZXJqcy9jb3JlJ1xuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXRFbGVtZW50LFxuICBnZXROZXh0QWN0aXZlRWxlbWVudCxcbiAgaXNEaXNhYmxlZCxcbiAgaXNFbGVtZW50LFxuICBpc1JUTCxcbiAgaXNWaXNpYmxlLFxuICBub29wXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnZHJvcGRvd24nXG5jb25zdCBEQVRBX0tFWSA9ICdicy5kcm9wZG93bidcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBFU0NBUEVfS0VZID0gJ0VzY2FwZSdcbmNvbnN0IFRBQl9LRVkgPSAnVGFiJ1xuY29uc3QgQVJST1dfVVBfS0VZID0gJ0Fycm93VXAnXG5jb25zdCBBUlJPV19ET1dOX0tFWSA9ICdBcnJvd0Rvd24nXG5jb25zdCBSSUdIVF9NT1VTRV9CVVRUT04gPSAyIC8vIE1vdXNlRXZlbnQuYnV0dG9uIHZhbHVlIGZvciB0aGUgc2Vjb25kYXJ5IGJ1dHRvbiwgdXN1YWxseSB0aGUgcmlnaHQgYnV0dG9uXG5cbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSA9IGBrZXlkb3duJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfS0VZVVBfREFUQV9BUEkgPSBga2V5dXAke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QVVAgPSAnZHJvcHVwJ1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QRU5EID0gJ2Ryb3BlbmQnXG5jb25zdCBDTEFTU19OQU1FX0RST1BTVEFSVCA9ICdkcm9wc3RhcnQnXG5jb25zdCBDTEFTU19OQU1FX0RST1BVUF9DRU5URVIgPSAnZHJvcHVwLWNlbnRlcidcbmNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fQ0VOVEVSID0gJ2Ryb3Bkb3duLWNlbnRlcidcblxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIl06bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCknXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRV9TSE9XTiA9IGAke1NFTEVDVE9SX0RBVEFfVE9HR0xFfS4ke0NMQVNTX05BTUVfU0hPV31gXG5jb25zdCBTRUxFQ1RPUl9NRU5VID0gJy5kcm9wZG93bi1tZW51J1xuY29uc3QgU0VMRUNUT1JfTkFWQkFSID0gJy5uYXZiYXInXG5jb25zdCBTRUxFQ1RPUl9OQVZCQVJfTkFWID0gJy5uYXZiYXItbmF2J1xuY29uc3QgU0VMRUNUT1JfVklTSUJMRV9JVEVNUyA9ICcuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSdcblxuY29uc3QgUExBQ0VNRU5UX1RPUCA9IGlzUlRMKCkgPyAndG9wLWVuZCcgOiAndG9wLXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX1RPUEVORCA9IGlzUlRMKCkgPyAndG9wLXN0YXJ0JyA6ICd0b3AtZW5kJ1xuY29uc3QgUExBQ0VNRU5UX0JPVFRPTSA9IGlzUlRMKCkgPyAnYm90dG9tLWVuZCcgOiAnYm90dG9tLXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX0JPVFRPTUVORCA9IGlzUlRMKCkgPyAnYm90dG9tLXN0YXJ0JyA6ICdib3R0b20tZW5kJ1xuY29uc3QgUExBQ0VNRU5UX1JJR0hUID0gaXNSVEwoKSA/ICdsZWZ0LXN0YXJ0JyA6ICdyaWdodC1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9MRUZUID0gaXNSVEwoKSA/ICdyaWdodC1zdGFydCcgOiAnbGVmdC1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9UT1BDRU5URVIgPSAndG9wJ1xuY29uc3QgUExBQ0VNRU5UX0JPVFRPTUNFTlRFUiA9ICdib3R0b20nXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGF1dG9DbG9zZTogdHJ1ZSxcbiAgYm91bmRhcnk6ICdjbGlwcGluZ1BhcmVudHMnLFxuICBkaXNwbGF5OiAnZHluYW1pYycsXG4gIG9mZnNldDogWzAsIDJdLFxuICBwb3BwZXJDb25maWc6IG51bGwsXG4gIHJlZmVyZW5jZTogJ3RvZ2dsZSdcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGF1dG9DbG9zZTogJyhib29sZWFufHN0cmluZyknLFxuICBib3VuZGFyeTogJyhzdHJpbmd8ZWxlbWVudCknLFxuICBkaXNwbGF5OiAnc3RyaW5nJyxcbiAgb2Zmc2V0OiAnKGFycmF5fHN0cmluZ3xmdW5jdGlvbiknLFxuICBwb3BwZXJDb25maWc6ICcobnVsbHxvYmplY3R8ZnVuY3Rpb24pJyxcbiAgcmVmZXJlbmNlOiAnKHN0cmluZ3xlbGVtZW50fG9iamVjdCknXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIERyb3Bkb3duIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIHRoaXMuX3BvcHBlciA9IG51bGxcbiAgICB0aGlzLl9wYXJlbnQgPSB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUgLy8gZHJvcGRvd24gd3JhcHBlclxuICAgIC8vIHRvZG86IHY2IHJldmVydCAjMzcwMTEgJiBjaGFuZ2UgbWFya3VwIGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzUuMi9mb3Jtcy9pbnB1dC1ncm91cC9cbiAgICB0aGlzLl9tZW51ID0gU2VsZWN0b3JFbmdpbmUubmV4dCh0aGlzLl9lbGVtZW50LCBTRUxFQ1RPUl9NRU5VKVswXSB8fFxuICAgICAgU2VsZWN0b3JFbmdpbmUucHJldih0aGlzLl9lbGVtZW50LCBTRUxFQ1RPUl9NRU5VKVswXSB8fFxuICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9NRU5VLCB0aGlzLl9wYXJlbnQpXG4gICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICB0b2dnbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd24oKSA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KClcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKGlzRGlzYWJsZWQodGhpcy5fZWxlbWVudCkgfHwgdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1csIHJlbGF0ZWRUYXJnZXQpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2NyZWF0ZVBvcHBlcigpXG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgIXRoaXMuX3BhcmVudC5jbG9zZXN0KFNFTEVDVE9SX05BVkJBUl9OQVYpKSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG5cbiAgICB0aGlzLl9tZW51LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04sIHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmIChpc0Rpc2FibGVkKHRoaXMuX2VsZW1lbnQpIHx8ICF0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfVxuXG4gICAgdGhpcy5fY29tcGxldGVIaWRlKHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLnVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfY29tcGxldGVIaWRlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFLCByZWxhdGVkVGFyZ2V0KVxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgdGhpcy5fbWVudS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcbiAgICBNYW5pcHVsYXRvci5yZW1vdmVEYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsICdwb3BwZXInKVxuICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTiwgcmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0gc3VwZXIuX2dldENvbmZpZyhjb25maWcpXG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWZlcmVuY2UgPT09ICdvYmplY3QnICYmICFpc0VsZW1lbnQoY29uZmlnLnJlZmVyZW5jZSkgJiZcbiAgICAgIHR5cGVvZiBjb25maWcucmVmZXJlbmNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gJ2Z1bmN0aW9uJ1xuICAgICkge1xuICAgICAgLy8gUG9wcGVyIHZpcnR1YWwgZWxlbWVudHMgcmVxdWlyZSBhIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBtZXRob2RcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7TkFNRS50b1VwcGVyQ2FzZSgpfTogT3B0aW9uIFwicmVmZXJlbmNlXCIgcHJvdmlkZWQgdHlwZSBcIm9iamVjdFwiIHdpdGhvdXQgYSByZXF1aXJlZCBcImdldEJvdW5kaW5nQ2xpZW50UmVjdFwiIG1ldGhvZC5gKVxuICAgIH1cblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9jcmVhdGVQb3BwZXIoKSB7XG4gICAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIGRyb3Bkb3ducyByZXF1aXJlIFBvcHBlciAoaHR0cHM6Ly9wb3BwZXIuanMub3JnKScpXG4gICAgfVxuXG4gICAgbGV0IHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnJlZmVyZW5jZSA9PT0gJ3BhcmVudCcpIHtcbiAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9wYXJlbnRcbiAgICB9IGVsc2UgaWYgKGlzRWxlbWVudCh0aGlzLl9jb25maWcucmVmZXJlbmNlKSkge1xuICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IGdldEVsZW1lbnQodGhpcy5fY29uZmlnLnJlZmVyZW5jZSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucmVmZXJlbmNlID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2VcbiAgICB9XG5cbiAgICBjb25zdCBwb3BwZXJDb25maWcgPSB0aGlzLl9nZXRQb3BwZXJDb25maWcoKVxuICAgIHRoaXMuX3BvcHBlciA9IFBvcHBlci5jcmVhdGVQb3BwZXIocmVmZXJlbmNlRWxlbWVudCwgdGhpcy5fbWVudSwgcG9wcGVyQ29uZmlnKVxuICB9XG5cbiAgX2lzU2hvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX21lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVylcbiAgfVxuXG4gIF9nZXRQbGFjZW1lbnQoKSB7XG4gICAgY29uc3QgcGFyZW50RHJvcGRvd24gPSB0aGlzLl9wYXJlbnRcblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRU5EKSkge1xuICAgICAgcmV0dXJuIFBMQUNFTUVOVF9SSUdIVFxuICAgIH1cblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QU1RBUlQpKSB7XG4gICAgICByZXR1cm4gUExBQ0VNRU5UX0xFRlRcbiAgICB9XG5cbiAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUFVQX0NFTlRFUikpIHtcbiAgICAgIHJldHVybiBQTEFDRU1FTlRfVE9QQ0VOVEVSXG4gICAgfVxuXG4gICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BET1dOX0NFTlRFUikpIHtcbiAgICAgIHJldHVybiBQTEFDRU1FTlRfQk9UVE9NQ0VOVEVSXG4gICAgfVxuXG4gICAgLy8gV2UgbmVlZCB0byB0cmltIHRoZSB2YWx1ZSBiZWNhdXNlIGN1c3RvbSBwcm9wZXJ0aWVzIGNhbiBhbHNvIGluY2x1ZGUgc3BhY2VzXG4gICAgY29uc3QgaXNFbmQgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX21lbnUpLmdldFByb3BlcnR5VmFsdWUoJy0tYnMtcG9zaXRpb24nKS50cmltKCkgPT09ICdlbmQnXG5cbiAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUFVQKSkge1xuICAgICAgcmV0dXJuIGlzRW5kID8gUExBQ0VNRU5UX1RPUEVORCA6IFBMQUNFTUVOVF9UT1BcbiAgICB9XG5cbiAgICByZXR1cm4gaXNFbmQgPyBQTEFDRU1FTlRfQk9UVE9NRU5EIDogUExBQ0VNRU5UX0JPVFRPTVxuICB9XG5cbiAgX2RldGVjdE5hdmJhcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX05BVkJBUikgIT09IG51bGxcbiAgfVxuXG4gIF9nZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgeyBvZmZzZXQgfSA9IHRoaXMuX2NvbmZpZ1xuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gb2Zmc2V0LnNwbGl0KCcsJykubWFwKHZhbHVlID0+IE51bWJlci5wYXJzZUludCh2YWx1ZSwgMTApKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gcG9wcGVyRGF0YSA9PiBvZmZzZXQocG9wcGVyRGF0YSwgdGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBfZ2V0UG9wcGVyQ29uZmlnKCkge1xuICAgIGNvbnN0IGRlZmF1bHRCc1BvcHBlckNvbmZpZyA9IHtcbiAgICAgIHBsYWNlbWVudDogdGhpcy5fZ2V0UGxhY2VtZW50KCksXG4gICAgICBtb2RpZmllcnM6IFt7XG4gICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgYm91bmRhcnk6IHRoaXMuX2NvbmZpZy5ib3VuZGFyeVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KClcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9XG5cbiAgICAvLyBEaXNhYmxlIFBvcHBlciBpZiB3ZSBoYXZlIGEgc3RhdGljIGRpc3BsYXkgb3IgRHJvcGRvd24gaXMgaW4gTmF2YmFyXG4gICAgaWYgKHRoaXMuX2luTmF2YmFyIHx8IHRoaXMuX2NvbmZpZy5kaXNwbGF5ID09PSAnc3RhdGljJykge1xuICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZSh0aGlzLl9tZW51LCAncG9wcGVyJywgJ3N0YXRpYycpIC8vIHRvZG86djYgcmVtb3ZlXG4gICAgICBkZWZhdWx0QnNQb3BwZXJDb25maWcubW9kaWZpZXJzID0gW3tcbiAgICAgICAgbmFtZTogJ2FwcGx5U3R5bGVzJyxcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRlZmF1bHRCc1BvcHBlckNvbmZpZyxcbiAgICAgIC4uLih0eXBlb2YgdGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZyA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcoZGVmYXVsdEJzUG9wcGVyQ29uZmlnKSA6IHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcpXG4gICAgfVxuICB9XG5cbiAgX3NlbGVjdE1lbnVJdGVtKHsga2V5LCB0YXJnZXQgfSkge1xuICAgIGNvbnN0IGl0ZW1zID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9WSVNJQkxFX0lURU1TLCB0aGlzLl9tZW51KS5maWx0ZXIoZWxlbWVudCA9PiBpc1Zpc2libGUoZWxlbWVudCkpXG5cbiAgICBpZiAoIWl0ZW1zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gaWYgdGFyZ2V0IGlzbid0IGluY2x1ZGVkIGluIGl0ZW1zIChlLmcuIHdoZW4gZXhwYW5kaW5nIHRoZSBkcm9wZG93bilcbiAgICAvLyBhbGxvdyBjeWNsaW5nIHRvIGdldCB0aGUgbGFzdCBpdGVtIGluIGNhc2Uga2V5IGVxdWFscyBBUlJPV19VUF9LRVlcbiAgICBnZXROZXh0QWN0aXZlRWxlbWVudChpdGVtcywgdGFyZ2V0LCBrZXkgPT09IEFSUk9XX0RPV05fS0VZLCAhaXRlbXMuaW5jbHVkZXModGFyZ2V0KSkuZm9jdXMoKVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGNsZWFyTWVudXMoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuYnV0dG9uID09PSBSSUdIVF9NT1VTRV9CVVRUT04gfHwgKGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQua2V5ICE9PSBUQUJfS0VZKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgb3BlblRvZ2dsZXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFX1NIT1dOKVxuXG4gICAgZm9yIChjb25zdCB0b2dnbGUgb2Ygb3BlblRvZ2dsZXMpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBEcm9wZG93bi5nZXRJbnN0YW5jZSh0b2dnbGUpXG4gICAgICBpZiAoIWNvbnRleHQgfHwgY29udGV4dC5fY29uZmlnLmF1dG9DbG9zZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29tcG9zZWRQYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoKClcbiAgICAgIGNvbnN0IGlzTWVudVRhcmdldCA9IGNvbXBvc2VkUGF0aC5pbmNsdWRlcyhjb250ZXh0Ll9tZW51KVxuICAgICAgaWYgKFxuICAgICAgICBjb21wb3NlZFBhdGguaW5jbHVkZXMoY29udGV4dC5fZWxlbWVudCkgfHxcbiAgICAgICAgKGNvbnRleHQuX2NvbmZpZy5hdXRvQ2xvc2UgPT09ICdpbnNpZGUnICYmICFpc01lbnVUYXJnZXQpIHx8XG4gICAgICAgIChjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSAnb3V0c2lkZScgJiYgaXNNZW51VGFyZ2V0KVxuICAgICAgKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIFRhYiBuYXZpZ2F0aW9uIHRocm91Z2ggdGhlIGRyb3Bkb3duIG1lbnUgb3IgZXZlbnRzIGZyb20gY29udGFpbmVkIGlucHV0cyBzaG91bGRuJ3QgY2xvc2UgdGhlIG1lbnVcbiAgICAgIGlmIChjb250ZXh0Ll9tZW51LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgKChldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LmtleSA9PT0gVEFCX0tFWSkgfHwgL2lucHV0fHNlbGVjdHxvcHRpb258dGV4dGFyZWF8Zm9ybS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0geyByZWxhdGVkVGFyZ2V0OiBjb250ZXh0Ll9lbGVtZW50IH1cblxuICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldC5jbGlja0V2ZW50ID0gZXZlbnRcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5fY29tcGxldGVIaWRlKHJlbGF0ZWRUYXJnZXQpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGRhdGFBcGlLZXlkb3duSGFuZGxlcihldmVudCkge1xuICAgIC8vIElmIG5vdCBhbiBVUCB8IERPV04gfCBFU0NBUEUga2V5ID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAvLyBJZiBpbnB1dC90ZXh0YXJlYSAmJiBpZiBrZXkgaXMgb3RoZXIgdGhhbiBFU0NBUEUgPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuXG4gICAgY29uc3QgaXNJbnB1dCA9IC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpXG4gICAgY29uc3QgaXNFc2NhcGVFdmVudCA9IGV2ZW50LmtleSA9PT0gRVNDQVBFX0tFWVxuICAgIGNvbnN0IGlzVXBPckRvd25FdmVudCA9IFtBUlJPV19VUF9LRVksIEFSUk9XX0RPV05fS0VZXS5pbmNsdWRlcyhldmVudC5rZXkpXG5cbiAgICBpZiAoIWlzVXBPckRvd25FdmVudCAmJiAhaXNFc2NhcGVFdmVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGlzSW5wdXQgJiYgIWlzRXNjYXBlRXZlbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vIHRvZG86IHY2IHJldmVydCAjMzcwMTEgJiBjaGFuZ2UgbWFya3VwIGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzUuMi9mb3Jtcy9pbnB1dC1ncm91cC9cbiAgICBjb25zdCBnZXRUb2dnbGVCdXR0b24gPSB0aGlzLm1hdGNoZXMoU0VMRUNUT1JfREFUQV9UT0dHTEUpID9cbiAgICAgIHRoaXMgOlxuICAgICAgKFNlbGVjdG9yRW5naW5lLnByZXYodGhpcywgU0VMRUNUT1JfREFUQV9UT0dHTEUpWzBdIHx8XG4gICAgICAgIFNlbGVjdG9yRW5naW5lLm5leHQodGhpcywgU0VMRUNUT1JfREFUQV9UT0dHTEUpWzBdIHx8XG4gICAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfREFUQV9UT0dHTEUsIGV2ZW50LmRlbGVnYXRlVGFyZ2V0LnBhcmVudE5vZGUpKVxuXG4gICAgY29uc3QgaW5zdGFuY2UgPSBEcm9wZG93bi5nZXRPckNyZWF0ZUluc3RhbmNlKGdldFRvZ2dsZUJ1dHRvbilcblxuICAgIGlmIChpc1VwT3JEb3duRXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBpbnN0YW5jZS5zaG93KClcbiAgICAgIGluc3RhbmNlLl9zZWxlY3RNZW51SXRlbShldmVudClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpbnN0YW5jZS5faXNTaG93bigpKSB7IC8vIGVsc2UgaXMgZXNjYXBlIGFuZCB3ZSBjaGVjayBpZiBpdCBpcyBzaG93blxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGluc3RhbmNlLmhpZGUoKVxuICAgICAgZ2V0VG9nZ2xlQnV0dG9uLmZvY3VzKClcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIERyb3Bkb3duLmRhdGFBcGlLZXlkb3duSGFuZGxlcilcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSwgU0VMRUNUT1JfTUVOVSwgRHJvcGRvd24uZGF0YUFwaUtleWRvd25IYW5kbGVyKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgRHJvcGRvd24uY2xlYXJNZW51cylcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZVVBfREFUQV9BUEksIERyb3Bkb3duLmNsZWFyTWVudXMpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKS50b2dnbGUoKVxufSlcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oRHJvcGRvd24pXG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjIuMyk6IG1vZGFsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgZGVmaW5lSlF1ZXJ5UGx1Z2luLCBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLCBpc1JUTCwgaXNWaXNpYmxlLCByZWZsb3cgfSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IFNjcm9sbEJhckhlbHBlciBmcm9tICcuL3V0aWwvc2Nyb2xsYmFyJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcbmltcG9ydCBCYWNrZHJvcCBmcm9tICcuL3V0aWwvYmFja2Ryb3AnXG5pbXBvcnQgRm9jdXNUcmFwIGZyb20gJy4vdXRpbC9mb2N1c3RyYXAnXG5pbXBvcnQgeyBlbmFibGVEaXNtaXNzVHJpZ2dlciB9IGZyb20gJy4vdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnbW9kYWwnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5tb2RhbCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuY29uc3QgRVNDQVBFX0tFWSA9ICdFc2NhcGUnXG5cbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJREVfUFJFVkVOVEVEID0gYGhpZGVQcmV2ZW50ZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9SRVNJWkUgPSBgcmVzaXplJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfRElTTUlTUyA9IGBjbGljay5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VET1dOX0RJU01JU1MgPSBgbW91c2Vkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RJU01JU1MgPSBga2V5ZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfT1BFTiA9ICdtb2RhbC1vcGVuJ1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfU1RBVElDID0gJ21vZGFsLXN0YXRpYydcblxuY29uc3QgT1BFTl9TRUxFQ1RPUiA9ICcubW9kYWwuc2hvdydcbmNvbnN0IFNFTEVDVE9SX0RJQUxPRyA9ICcubW9kYWwtZGlhbG9nJ1xuY29uc3QgU0VMRUNUT1JfTU9EQUxfQk9EWSA9ICcubW9kYWwtYm9keSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cIm1vZGFsXCJdJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBiYWNrZHJvcDogdHJ1ZSxcbiAgZm9jdXM6IHRydWUsXG4gIGtleWJvYXJkOiB0cnVlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBiYWNrZHJvcDogJyhib29sZWFufHN0cmluZyknLFxuICBmb2N1czogJ2Jvb2xlYW4nLFxuICBrZXlib2FyZDogJ2Jvb2xlYW4nXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIE1vZGFsIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIHRoaXMuX2RpYWxvZyA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfRElBTE9HLCB0aGlzLl9lbGVtZW50KVxuICAgIHRoaXMuX2JhY2tkcm9wID0gdGhpcy5faW5pdGlhbGl6ZUJhY2tEcm9wKClcbiAgICB0aGlzLl9mb2N1c3RyYXAgPSB0aGlzLl9pbml0aWFsaXplRm9jdXNUcmFwKClcbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgIHRoaXMuX3Njcm9sbEJhciA9IG5ldyBTY3JvbGxCYXJIZWxwZXIoKVxuXG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3cocmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVywge1xuICAgICAgcmVsYXRlZFRhcmdldFxuICAgIH0pXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2hvd24gPSB0cnVlXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZVxuXG4gICAgdGhpcy5fc2Nyb2xsQmFyLmhpZGUoKVxuXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfT1BFTilcblxuICAgIHRoaXMuX2FkanVzdERpYWxvZygpXG5cbiAgICB0aGlzLl9iYWNrZHJvcC5zaG93KCgpID0+IHRoaXMuX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2hvd24gfHwgdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKVxuXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG4gICAgdGhpcy5fZm9jdXN0cmFwLmRlYWN0aXZhdGUoKVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCkgPT4gdGhpcy5faGlkZU1vZGFsKCksIHRoaXMuX2VsZW1lbnQsIHRoaXMuX2lzQW5pbWF0ZWQoKSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgZm9yIChjb25zdCBodG1sRWxlbWVudCBvZiBbd2luZG93LCB0aGlzLl9kaWFsb2ddKSB7XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKGh0bWxFbGVtZW50LCBFVkVOVF9LRVkpXG4gICAgfVxuXG4gICAgdGhpcy5fYmFja2Ryb3AuZGlzcG9zZSgpXG4gICAgdGhpcy5fZm9jdXN0cmFwLmRlYWN0aXZhdGUoKVxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgaGFuZGxlVXBkYXRlKCkge1xuICAgIHRoaXMuX2FkanVzdERpYWxvZygpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9pbml0aWFsaXplQmFja0Ryb3AoKSB7XG4gICAgcmV0dXJuIG5ldyBCYWNrZHJvcCh7XG4gICAgICBpc1Zpc2libGU6IEJvb2xlYW4odGhpcy5fY29uZmlnLmJhY2tkcm9wKSwgLy8gJ3N0YXRpYycgb3B0aW9uIHdpbGwgYmUgdHJhbnNsYXRlZCB0byB0cnVlLCBhbmQgYm9vbGVhbnMgd2lsbCBrZWVwIHRoZWlyIHZhbHVlLFxuICAgICAgaXNBbmltYXRlZDogdGhpcy5faXNBbmltYXRlZCgpXG4gICAgfSlcbiAgfVxuXG4gIF9pbml0aWFsaXplRm9jdXNUcmFwKCkge1xuICAgIHJldHVybiBuZXcgRm9jdXNUcmFwKHtcbiAgICAgIHRyYXBFbGVtZW50OiB0aGlzLl9lbGVtZW50XG4gICAgfSlcbiAgfVxuXG4gIF9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSB7XG4gICAgLy8gdHJ5IHRvIGFwcGVuZCBkeW5hbWljIG1vZGFsXG4gICAgaWYgKCFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgdHJ1ZSlcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICdkaWFsb2cnKVxuICAgIHRoaXMuX2VsZW1lbnQuc2Nyb2xsVG9wID0gMFxuXG4gICAgY29uc3QgbW9kYWxCb2R5ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9NT0RBTF9CT0RZLCB0aGlzLl9kaWFsb2cpXG4gICAgaWYgKG1vZGFsQm9keSkge1xuICAgICAgbW9kYWxCb2R5LnNjcm9sbFRvcCA9IDBcbiAgICB9XG5cbiAgICByZWZsb3codGhpcy5fZWxlbWVudClcblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBjb25zdCB0cmFuc2l0aW9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICAgIHRoaXMuX2ZvY3VzdHJhcC5hY3RpdmF0ZSgpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0XG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2sodHJhbnNpdGlvbkNvbXBsZXRlLCB0aGlzLl9kaWFsb2csIHRoaXMuX2lzQW5pbWF0ZWQoKSlcbiAgfVxuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTl9ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ICE9PSBFU0NBUEVfS0VZKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKVxuICAgIH0pXG5cbiAgICBFdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9SRVNJWkUsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9pc1Nob3duICYmICF0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgdGhpcy5fYWRqdXN0RGlhbG9nKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICAvLyBhIGJhZCB0cmljayB0byBzZWdyZWdhdGUgY2xpY2tzIHRoYXQgbWF5IHN0YXJ0IGluc2lkZSBkaWFsb2cgYnV0IGVuZCBvdXRzaWRlLCBhbmQgYXZvaWQgbGlzdGVuIHRvIHNjcm9sbGJhciBjbGlja3NcbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xJQ0tfRElTTUlTUywgZXZlbnQyID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2VsZW1lbnQgIT09IGV2ZW50LnRhcmdldCB8fCB0aGlzLl9lbGVtZW50ICE9PSBldmVudDIudGFyZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJykge1xuICAgICAgICAgIHRoaXMuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCkge1xuICAgICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIF9oaWRlTW9kYWwoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcpXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKVxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG5cbiAgICB0aGlzLl9iYWNrZHJvcC5oaWRlKCgpID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX09QRU4pXG4gICAgICB0aGlzLl9yZXNldEFkanVzdG1lbnRzKClcbiAgICAgIHRoaXMuX3Njcm9sbEJhci5yZXNldCgpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfSlcbiAgfVxuXG4gIF9pc0FuaW1hdGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpXG4gIH1cblxuICBfdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpIHtcbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFX1BSRVZFTlRFRClcbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzTW9kYWxPdmVyZmxvd2luZyA9IHRoaXMuX2VsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgIGNvbnN0IGluaXRpYWxPdmVyZmxvd1kgPSB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WVxuICAgIC8vIHJldHVybiBpZiB0aGUgZm9sbG93aW5nIGJhY2tncm91bmQgdHJhbnNpdGlvbiBoYXNuJ3QgeWV0IGNvbXBsZXRlZFxuICAgIGlmIChpbml0aWFsT3ZlcmZsb3dZID09PSAnaGlkZGVuJyB8fCB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NUQVRJQykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU1RBVElDKVxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU1RBVElDKVxuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZID0gaW5pdGlhbE92ZXJmbG93WVxuICAgICAgfSwgdGhpcy5fZGlhbG9nKVxuICAgIH0sIHRoaXMuX2RpYWxvZylcblxuICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBmb2xsb3dpbmcgbWV0aG9kcyBhcmUgdXNlZCB0byBoYW5kbGUgb3ZlcmZsb3dpbmcgbW9kYWxzXG4gICAqL1xuXG4gIF9hZGp1c3REaWFsb2coKSB7XG4gICAgY29uc3QgaXNNb2RhbE92ZXJmbG93aW5nID0gdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSB0aGlzLl9zY3JvbGxCYXIuZ2V0V2lkdGgoKVxuICAgIGNvbnN0IGlzQm9keU92ZXJmbG93aW5nID0gc2Nyb2xsYmFyV2lkdGggPiAwXG5cbiAgICBpZiAoaXNCb2R5T3ZlcmZsb3dpbmcgJiYgIWlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSBpc1JUTCgpID8gJ3BhZGRpbmdMZWZ0JyA6ICdwYWRkaW5nUmlnaHQnXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW3Byb3BlcnR5XSA9IGAke3Njcm9sbGJhcldpZHRofXB4YFxuICAgIH1cblxuICAgIGlmICghaXNCb2R5T3ZlcmZsb3dpbmcgJiYgaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IGlzUlRMKCkgPyAncGFkZGluZ1JpZ2h0JyA6ICdwYWRkaW5nTGVmdCdcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbcHJvcGVydHldID0gYCR7c2Nyb2xsYmFyV2lkdGh9cHhgXG4gICAgfVxuICB9XG5cbiAgX3Jlc2V0QWRqdXN0bWVudHMoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9ICcnXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJ1xuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnLCByZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gTW9kYWwuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKHJlbGF0ZWRUYXJnZXQpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBjb25zdCB0YXJnZXQgPSBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpXG5cbiAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9TSE9XLCBzaG93RXZlbnQgPT4ge1xuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgLy8gb25seSByZWdpc3RlciBmb2N1cyByZXN0b3JlciBpZiBtb2RhbCB3aWxsIGFjdHVhbGx5IGdldCBzaG93blxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uZSh0YXJnZXQsIEVWRU5UX0hJRERFTiwgKCkgPT4ge1xuICAgICAgaWYgKGlzVmlzaWJsZSh0aGlzKSkge1xuICAgICAgICB0aGlzLmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIC8vIGF2b2lkIGNvbmZsaWN0IHdoZW4gY2xpY2tpbmcgbW9kYWwgdG9nZ2xlciB3aGlsZSBhbm90aGVyIG9uZSBpcyBvcGVuXG4gIGNvbnN0IGFscmVhZHlPcGVuID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShPUEVOX1NFTEVDVE9SKVxuICBpZiAoYWxyZWFkeU9wZW4pIHtcbiAgICBNb2RhbC5nZXRJbnN0YW5jZShhbHJlYWR5T3BlbikuaGlkZSgpXG4gIH1cblxuICBjb25zdCBkYXRhID0gTW9kYWwuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0YXJnZXQpXG5cbiAgZGF0YS50b2dnbGUodGhpcylcbn0pXG5cbmVuYWJsZURpc21pc3NUcmlnZ2VyKE1vZGFsKVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihNb2RhbClcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMi4zKTogb2ZmY2FudmFzLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxuICBpc0Rpc2FibGVkLFxuICBpc1Zpc2libGVcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IFNjcm9sbEJhckhlbHBlciBmcm9tICcuL3V0aWwvc2Nyb2xsYmFyJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnLi91dGlsL2JhY2tkcm9wJ1xuaW1wb3J0IEZvY3VzVHJhcCBmcm9tICcuL3V0aWwvZm9jdXN0cmFwJ1xuaW1wb3J0IHsgZW5hYmxlRGlzbWlzc1RyaWdnZXIgfSBmcm9tICcuL3V0aWwvY29tcG9uZW50LWZ1bmN0aW9ucydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ29mZmNhbnZhcydcbmNvbnN0IERBVEFfS0VZID0gJ2JzLm9mZmNhbnZhcydcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVNDQVBFX0tFWSA9ICdFc2NhcGUnXG5cbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XSU5HID0gJ3Nob3dpbmcnXG5jb25zdCBDTEFTU19OQU1FX0hJRElORyA9ICdoaWRpbmcnXG5jb25zdCBDTEFTU19OQU1FX0JBQ0tEUk9QID0gJ29mZmNhbnZhcy1iYWNrZHJvcCdcbmNvbnN0IE9QRU5fU0VMRUNUT1IgPSAnLm9mZmNhbnZhcy5zaG93J1xuXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJREVfUFJFVkVOVEVEID0gYGhpZGVQcmV2ZW50ZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUkVTSVpFID0gYHJlc2l6ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTl9ESVNNSVNTID0gYGtleWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZfWBcblxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwib2ZmY2FudmFzXCJdJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBiYWNrZHJvcDogdHJ1ZSxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIHNjcm9sbDogZmFsc2Vcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGJhY2tkcm9wOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIGtleWJvYXJkOiAnYm9vbGVhbicsXG4gIHNjcm9sbDogJ2Jvb2xlYW4nXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIE9mZmNhbnZhcyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjb25maWcpXG5cbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICB0aGlzLl9iYWNrZHJvcCA9IHRoaXMuX2luaXRpYWxpemVCYWNrRHJvcCgpXG4gICAgdGhpcy5fZm9jdXN0cmFwID0gdGhpcy5faW5pdGlhbGl6ZUZvY3VzVHJhcCgpXG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3cocmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XLCB7IHJlbGF0ZWRUYXJnZXQgfSlcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTaG93biA9IHRydWVcbiAgICB0aGlzLl9iYWNrZHJvcC5zaG93KClcblxuICAgIGlmICghdGhpcy5fY29uZmlnLnNjcm9sbCkge1xuICAgICAgbmV3IFNjcm9sbEJhckhlbHBlcigpLmhpZGUoKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgdHJ1ZSlcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICdkaWFsb2cnKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1dJTkcpXG5cbiAgICBjb25zdCBjb21wbGV0ZUNhbGxCYWNrID0gKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9jb25maWcuc2Nyb2xsIHx8IHRoaXMuX2NvbmZpZy5iYWNrZHJvcCkge1xuICAgICAgICB0aGlzLl9mb2N1c3RyYXAuYWN0aXZhdGUoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPV0lORylcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOLCB7IHJlbGF0ZWRUYXJnZXQgfSlcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlQ2FsbEJhY2ssIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5faXNTaG93bikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcblxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZm9jdXN0cmFwLmRlYWN0aXZhdGUoKVxuICAgIHRoaXMuX2VsZW1lbnQuYmx1cigpXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfSElESU5HKVxuICAgIHRoaXMuX2JhY2tkcm9wLmhpZGUoKVxuXG4gICAgY29uc3QgY29tcGxldGVDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1csIENMQVNTX05BTUVfSElESU5HKVxuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnKVxuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKVxuXG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwpIHtcbiAgICAgICAgbmV3IFNjcm9sbEJhckhlbHBlcigpLnJlc2V0KClcbiAgICAgIH1cblxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOKVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGVDYWxsYmFjaywgdGhpcy5fZWxlbWVudCwgdHJ1ZSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgdGhpcy5fYmFja2Ryb3AuZGlzcG9zZSgpXG4gICAgdGhpcy5fZm9jdXN0cmFwLmRlYWN0aXZhdGUoKVxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfaW5pdGlhbGl6ZUJhY2tEcm9wKCkge1xuICAgIGNvbnN0IGNsaWNrQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJykge1xuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFX1BSRVZFTlRFRClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgfVxuXG4gICAgLy8gJ3N0YXRpYycgb3B0aW9uIHdpbGwgYmUgdHJhbnNsYXRlZCB0byB0cnVlLCBhbmQgYm9vbGVhbnMgd2lsbCBrZWVwIHRoZWlyIHZhbHVlXG4gICAgY29uc3QgaXNWaXNpYmxlID0gQm9vbGVhbih0aGlzLl9jb25maWcuYmFja2Ryb3ApXG5cbiAgICByZXR1cm4gbmV3IEJhY2tkcm9wKHtcbiAgICAgIGNsYXNzTmFtZTogQ0xBU1NfTkFNRV9CQUNLRFJPUCxcbiAgICAgIGlzVmlzaWJsZSxcbiAgICAgIGlzQW5pbWF0ZWQ6IHRydWUsXG4gICAgICByb290RWxlbWVudDogdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgY2xpY2tDYWxsYmFjazogaXNWaXNpYmxlID8gY2xpY2tDYWxsYmFjayA6IG51bGxcbiAgICB9KVxuICB9XG5cbiAgX2luaXRpYWxpemVGb2N1c1RyYXAoKSB7XG4gICAgcmV0dXJuIG5ldyBGb2N1c1RyYXAoe1xuICAgICAgdHJhcEVsZW1lbnQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9KVxuICB9XG5cbiAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOX0RJU01JU1MsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgIT09IEVTQ0FQRV9LRVkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREVfUFJFVkVOVEVEKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5oaWRlKClcbiAgICB9KVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKVxuXG4gIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgRXZlbnRIYW5kbGVyLm9uZSh0YXJnZXQsIEVWRU5UX0hJRERFTiwgKCkgPT4ge1xuICAgIC8vIGZvY3VzIG9uIHRyaWdnZXIgd2hlbiBpdCBpcyBjbG9zZWRcbiAgICBpZiAoaXNWaXNpYmxlKHRoaXMpKSB7XG4gICAgICB0aGlzLmZvY3VzKClcbiAgICB9XG4gIH0pXG5cbiAgLy8gYXZvaWQgY29uZmxpY3Qgd2hlbiBjbGlja2luZyBhIHRvZ2dsZXIgb2YgYW4gb2ZmY2FudmFzLCB3aGlsZSBhbm90aGVyIGlzIG9wZW5cbiAgY29uc3QgYWxyZWFkeU9wZW4gPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKE9QRU5fU0VMRUNUT1IpXG4gIGlmIChhbHJlYWR5T3BlbiAmJiBhbHJlYWR5T3BlbiAhPT0gdGFyZ2V0KSB7XG4gICAgT2ZmY2FudmFzLmdldEluc3RhbmNlKGFscmVhZHlPcGVuKS5oaWRlKClcbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSBPZmZjYW52YXMuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0YXJnZXQpXG4gIGRhdGEudG9nZ2xlKHRoaXMpXG59KVxuXG5FdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIGZvciAoY29uc3Qgc2VsZWN0b3Igb2YgU2VsZWN0b3JFbmdpbmUuZmluZChPUEVOX1NFTEVDVE9SKSkge1xuICAgIE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKHNlbGVjdG9yKS5zaG93KClcbiAgfVxufSlcblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfUkVTSVpFLCAoKSA9PiB7XG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBTZWxlY3RvckVuZ2luZS5maW5kKCdbYXJpYS1tb2RhbF1bY2xhc3MqPXNob3ddW2NsYXNzKj1vZmZjYW52YXMtXScpKSB7XG4gICAgaWYgKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gIT09ICdmaXhlZCcpIHtcbiAgICAgIE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQpLmhpZGUoKVxuICAgIH1cbiAgfVxufSlcblxuZW5hYmxlRGlzbWlzc1RyaWdnZXIoT2ZmY2FudmFzKVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihPZmZjYW52YXMpXG5cbmV4cG9ydCBkZWZhdWx0IE9mZmNhbnZhc1xuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4yLjMpOiBwb3BvdmVyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgZGVmaW5lSlF1ZXJ5UGx1Z2luIH0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAncG9wb3ZlcidcblxuY29uc3QgU0VMRUNUT1JfVElUTEUgPSAnLnBvcG92ZXItaGVhZGVyJ1xuY29uc3QgU0VMRUNUT1JfQ09OVEVOVCA9ICcucG9wb3Zlci1ib2R5J1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICAuLi5Ub29sdGlwLkRlZmF1bHQsXG4gIGNvbnRlbnQ6ICcnLFxuICBvZmZzZXQ6IFswLCA4XSxcbiAgcGxhY2VtZW50OiAncmlnaHQnLFxuICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJwb3BvdmVyXCIgcm9sZT1cInRvb2x0aXBcIj4nICtcbiAgICAnPGRpdiBjbGFzcz1cInBvcG92ZXItYXJyb3dcIj48L2Rpdj4nICtcbiAgICAnPGgzIGNsYXNzPVwicG9wb3Zlci1oZWFkZXJcIj48L2gzPicgK1xuICAgICc8ZGl2IGNsYXNzPVwicG9wb3Zlci1ib2R5XCI+PC9kaXY+JyArXG4gICAgJzwvZGl2PicsXG4gIHRyaWdnZXI6ICdjbGljaydcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIC4uLlRvb2x0aXAuRGVmYXVsdFR5cGUsXG4gIGNvbnRlbnQ6ICcobnVsbHxzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbiknXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIFBvcG92ZXIgZXh0ZW5kcyBUb29sdGlwIHtcbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIE92ZXJyaWRlc1xuICBfaXNXaXRoQ29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0VGl0bGUoKSB8fCB0aGlzLl9nZXRDb250ZW50KClcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2dldENvbnRlbnRGb3JUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW1NFTEVDVE9SX1RJVExFXTogdGhpcy5fZ2V0VGl0bGUoKSxcbiAgICAgIFtTRUxFQ1RPUl9DT05URU5UXTogdGhpcy5fZ2V0Q29udGVudCgpXG4gICAgfVxuICB9XG5cbiAgX2dldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHRoaXMuX2NvbmZpZy5jb250ZW50KVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gUG9wb3Zlci5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10oKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oUG9wb3ZlcilcblxuZXhwb3J0IGRlZmF1bHQgUG9wb3ZlclxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4yLjMpOiBzY3JvbGxzcHkuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBkZWZpbmVKUXVlcnlQbHVnaW4sIGdldEVsZW1lbnQsIGlzRGlzYWJsZWQsIGlzVmlzaWJsZSB9IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnc2Nyb2xsc3B5J1xuY29uc3QgREFUQV9LRVkgPSAnYnMuc2Nyb2xsc3B5J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEVWRU5UX0FDVElWQVRFID0gYGFjdGl2YXRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0sgPSBgY2xpY2ske0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fSVRFTSA9ICdkcm9wZG93bi1pdGVtJ1xuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1NQWSA9ICdbZGF0YS1icy1zcHk9XCJzY3JvbGxcIl0nXG5jb25zdCBTRUxFQ1RPUl9UQVJHRVRfTElOS1MgPSAnW2hyZWZdJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVAgPSAnLm5hdiwgLmxpc3QtZ3JvdXAnXG5jb25zdCBTRUxFQ1RPUl9OQVZfTElOS1MgPSAnLm5hdi1saW5rJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0lURU1TID0gJy5uYXYtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0xJU1RfSVRFTVMgPSAnLmxpc3QtZ3JvdXAtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0xJTktfSVRFTVMgPSBgJHtTRUxFQ1RPUl9OQVZfTElOS1N9LCAke1NFTEVDVE9SX05BVl9JVEVNU30gPiAke1NFTEVDVE9SX05BVl9MSU5LU30sICR7U0VMRUNUT1JfTElTVF9JVEVNU31gXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTiA9ICcuZHJvcGRvd24nXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUgPSAnLmRyb3Bkb3duLXRvZ2dsZSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgb2Zmc2V0OiBudWxsLCAvLyBUT0RPOiB2NiBAZGVwcmVjYXRlZCwga2VlcCBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgcmVhc29uc1xuICByb290TWFyZ2luOiAnMHB4IDBweCAtMjUlJyxcbiAgc21vb3RoU2Nyb2xsOiBmYWxzZSxcbiAgdGFyZ2V0OiBudWxsLFxuICB0aHJlc2hvbGQ6IFswLjEsIDAuNSwgMV1cbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIG9mZnNldDogJyhudW1iZXJ8bnVsbCknLCAvLyBUT0RPIHY2IEBkZXByZWNhdGVkLCBrZWVwIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSByZWFzb25zXG4gIHJvb3RNYXJnaW46ICdzdHJpbmcnLFxuICBzbW9vdGhTY3JvbGw6ICdib29sZWFuJyxcbiAgdGFyZ2V0OiAnZWxlbWVudCcsXG4gIHRocmVzaG9sZDogJ2FycmF5J1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBTY3JvbGxTcHkgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgLy8gdGhpcy5fZWxlbWVudCBpcyB0aGUgb2JzZXJ2YWJsZXNDb250YWluZXIgYW5kIGNvbmZpZy50YXJnZXQgdGhlIG1lbnUgbGlua3Mgd3JhcHBlclxuICAgIHRoaXMuX3RhcmdldExpbmtzID0gbmV3IE1hcCgpXG4gICAgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zID0gbmV3IE1hcCgpXG4gICAgdGhpcy5fcm9vdEVsZW1lbnQgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsZW1lbnQpLm92ZXJmbG93WSA9PT0gJ3Zpc2libGUnID8gbnVsbCA6IHRoaXMuX2VsZW1lbnRcbiAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsXG4gICAgdGhpcy5fb2JzZXJ2ZXIgPSBudWxsXG4gICAgdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhID0ge1xuICAgICAgdmlzaWJsZUVudHJ5VG9wOiAwLFxuICAgICAgcGFyZW50U2Nyb2xsVG9wOiAwXG4gICAgfVxuICAgIHRoaXMucmVmcmVzaCgpIC8vIGluaXRpYWxpemVcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLl9pbml0aWFsaXplVGFyZ2V0c0FuZE9ic2VydmFibGVzKClcbiAgICB0aGlzLl9tYXliZUVuYWJsZVNtb290aFNjcm9sbCgpXG5cbiAgICBpZiAodGhpcy5fb2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9vYnNlcnZlciA9IHRoaXMuX2dldE5ld09ic2VydmVyKClcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHNlY3Rpb24gb2YgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zLnZhbHVlcygpKSB7XG4gICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHNlY3Rpb24pXG4gICAgfVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICB0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgLy8gVE9ETzogb24gdjYgdGFyZ2V0IHNob3VsZCBiZSBnaXZlbiBleHBsaWNpdGx5ICYgcmVtb3ZlIHRoZSB7dGFyZ2V0OiAnc3MtdGFyZ2V0J30gY2FzZVxuICAgIGNvbmZpZy50YXJnZXQgPSBnZXRFbGVtZW50KGNvbmZpZy50YXJnZXQpIHx8IGRvY3VtZW50LmJvZHlcblxuICAgIC8vIFRPRE86IHY2IE9ubHkgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHJlYXNvbnMuIFVzZSByb290TWFyZ2luIG9ubHlcbiAgICBjb25maWcucm9vdE1hcmdpbiA9IGNvbmZpZy5vZmZzZXQgPyBgJHtjb25maWcub2Zmc2V0fXB4IDBweCAtMzAlYCA6IGNvbmZpZy5yb290TWFyZ2luXG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50aHJlc2hvbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25maWcudGhyZXNob2xkID0gY29uZmlnLnRocmVzaG9sZC5zcGxpdCgnLCcpLm1hcCh2YWx1ZSA9PiBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX21heWJlRW5hYmxlU21vb3RoU2Nyb2xsKCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnLnNtb290aFNjcm9sbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gdW5yZWdpc3RlciBhbnkgcHJldmlvdXMgbGlzdGVuZXJzXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9jb25maWcudGFyZ2V0LCBFVkVOVF9DTElDSylcblxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9jb25maWcudGFyZ2V0LCBFVkVOVF9DTElDSywgU0VMRUNUT1JfVEFSR0VUX0xJTktTLCBldmVudCA9PiB7XG4gICAgICBjb25zdCBvYnNlcnZhYmxlU2VjdGlvbiA9IHRoaXMuX29ic2VydmFibGVTZWN0aW9ucy5nZXQoZXZlbnQudGFyZ2V0Lmhhc2gpXG4gICAgICBpZiAob2JzZXJ2YWJsZVNlY3Rpb24pIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCByb290ID0gdGhpcy5fcm9vdEVsZW1lbnQgfHwgd2luZG93XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IG9ic2VydmFibGVTZWN0aW9uLm9mZnNldFRvcCAtIHRoaXMuX2VsZW1lbnQub2Zmc2V0VG9wXG4gICAgICAgIGlmIChyb290LnNjcm9sbFRvKSB7XG4gICAgICAgICAgcm9vdC5zY3JvbGxUbyh7IHRvcDogaGVpZ2h0LCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENocm9tZSA2MCBkb2Vzbid0IHN1cHBvcnQgYHNjcm9sbFRvYFxuICAgICAgICByb290LnNjcm9sbFRvcCA9IGhlaWdodFxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBfZ2V0TmV3T2JzZXJ2ZXIoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHJvb3Q6IHRoaXMuX3Jvb3RFbGVtZW50LFxuICAgICAgdGhyZXNob2xkOiB0aGlzLl9jb25maWcudGhyZXNob2xkLFxuICAgICAgcm9vdE1hcmdpbjogdGhpcy5fY29uZmlnLnJvb3RNYXJnaW5cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4gdGhpcy5fb2JzZXJ2ZXJDYWxsYmFjayhlbnRyaWVzKSwgb3B0aW9ucylcbiAgfVxuXG4gIC8vIFRoZSBsb2dpYyBvZiBzZWxlY3Rpb25cbiAgX29ic2VydmVyQ2FsbGJhY2soZW50cmllcykge1xuICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBlbnRyeSA9PiB0aGlzLl90YXJnZXRMaW5rcy5nZXQoYCMke2VudHJ5LnRhcmdldC5pZH1gKVxuICAgIGNvbnN0IGFjdGl2YXRlID0gZW50cnkgPT4ge1xuICAgICAgdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnZpc2libGVFbnRyeVRvcCA9IGVudHJ5LnRhcmdldC5vZmZzZXRUb3BcbiAgICAgIHRoaXMuX3Byb2Nlc3ModGFyZ2V0RWxlbWVudChlbnRyeSkpXG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50U2Nyb2xsVG9wID0gKHRoaXMuX3Jvb3RFbGVtZW50IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuc2Nyb2xsVG9wXG4gICAgY29uc3QgdXNlclNjcm9sbHNEb3duID0gcGFyZW50U2Nyb2xsVG9wID49IHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS5wYXJlbnRTY3JvbGxUb3BcbiAgICB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEucGFyZW50U2Nyb2xsVG9wID0gcGFyZW50U2Nyb2xsVG9wXG5cbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgIGlmICghZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbFxuICAgICAgICB0aGlzLl9jbGVhckFjdGl2ZUNsYXNzKHRhcmdldEVsZW1lbnQoZW50cnkpKVxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVudHJ5SXNMb3dlclRoYW5QcmV2aW91cyA9IGVudHJ5LnRhcmdldC5vZmZzZXRUb3AgPj0gdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnZpc2libGVFbnRyeVRvcFxuICAgICAgLy8gaWYgd2UgYXJlIHNjcm9sbGluZyBkb3duLCBwaWNrIHRoZSBiaWdnZXIgb2Zmc2V0VG9wXG4gICAgICBpZiAodXNlclNjcm9sbHNEb3duICYmIGVudHJ5SXNMb3dlclRoYW5QcmV2aW91cykge1xuICAgICAgICBhY3RpdmF0ZShlbnRyeSlcbiAgICAgICAgLy8gaWYgcGFyZW50IGlzbid0IHNjcm9sbGVkLCBsZXQncyBrZWVwIHRoZSBmaXJzdCB2aXNpYmxlIGl0ZW0sIGJyZWFraW5nIHRoZSBpdGVyYXRpb25cbiAgICAgICAgaWYgKCFwYXJlbnRTY3JvbGxUb3ApIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHdlIGFyZSBzY3JvbGxpbmcgdXAsIHBpY2sgdGhlIHNtYWxsZXN0IG9mZnNldFRvcFxuICAgICAgaWYgKCF1c2VyU2Nyb2xsc0Rvd24gJiYgIWVudHJ5SXNMb3dlclRoYW5QcmV2aW91cykge1xuICAgICAgICBhY3RpdmF0ZShlbnRyeSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfaW5pdGlhbGl6ZVRhcmdldHNBbmRPYnNlcnZhYmxlcygpIHtcbiAgICB0aGlzLl90YXJnZXRMaW5rcyA9IG5ldyBNYXAoKVxuICAgIHRoaXMuX29ic2VydmFibGVTZWN0aW9ucyA9IG5ldyBNYXAoKVxuXG4gICAgY29uc3QgdGFyZ2V0TGlua3MgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX1RBUkdFVF9MSU5LUywgdGhpcy5fY29uZmlnLnRhcmdldClcblxuICAgIGZvciAoY29uc3QgYW5jaG9yIG9mIHRhcmdldExpbmtzKSB7XG4gICAgICAvLyBlbnN1cmUgdGhhdCB0aGUgYW5jaG9yIGhhcyBhbiBpZCBhbmQgaXMgbm90IGRpc2FibGVkXG4gICAgICBpZiAoIWFuY2hvci5oYXNoIHx8IGlzRGlzYWJsZWQoYW5jaG9yKSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBvYnNlcnZhYmxlU2VjdGlvbiA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoYW5jaG9yLmhhc2gsIHRoaXMuX2VsZW1lbnQpXG5cbiAgICAgIC8vIGVuc3VyZSB0aGF0IHRoZSBvYnNlcnZhYmxlU2VjdGlvbiBleGlzdHMgJiBpcyB2aXNpYmxlXG4gICAgICBpZiAoaXNWaXNpYmxlKG9ic2VydmFibGVTZWN0aW9uKSkge1xuICAgICAgICB0aGlzLl90YXJnZXRMaW5rcy5zZXQoYW5jaG9yLmhhc2gsIGFuY2hvcilcbiAgICAgICAgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zLnNldChhbmNob3IuaGFzaCwgb2JzZXJ2YWJsZVNlY3Rpb24pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX3Byb2Nlc3ModGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuX2FjdGl2ZVRhcmdldCA9PT0gdGFyZ2V0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9jbGVhckFjdGl2ZUNsYXNzKHRoaXMuX2NvbmZpZy50YXJnZXQpXG4gICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gdGFyZ2V0XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgdGhpcy5fYWN0aXZhdGVQYXJlbnRzKHRhcmdldClcblxuICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0FDVElWQVRFLCB7IHJlbGF0ZWRUYXJnZXQ6IHRhcmdldCB9KVxuICB9XG5cbiAgX2FjdGl2YXRlUGFyZW50cyh0YXJnZXQpIHtcbiAgICAvLyBBY3RpdmF0ZSBkcm9wZG93biBwYXJlbnRzXG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNKSkge1xuICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUsIHRhcmdldC5jbG9zZXN0KFNFTEVDVE9SX0RST1BET1dOKSlcbiAgICAgICAgLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGxpc3RHcm91cCBvZiBTZWxlY3RvckVuZ2luZS5wYXJlbnRzKHRhcmdldCwgU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVApKSB7XG4gICAgICAvLyBTZXQgdHJpZ2dlcmVkIGxpbmtzIHBhcmVudHMgYXMgYWN0aXZlXG4gICAgICAvLyBXaXRoIGJvdGggPHVsPiBhbmQgPG5hdj4gbWFya3VwIGEgcGFyZW50IGlzIHRoZSBwcmV2aW91cyBzaWJsaW5nIG9mIGFueSBuYXYgYW5jZXN0b3JcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBTZWxlY3RvckVuZ2luZS5wcmV2KGxpc3RHcm91cCwgU0VMRUNUT1JfTElOS19JVEVNUykpIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9jbGVhckFjdGl2ZUNsYXNzKHBhcmVudCkge1xuICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgY29uc3QgYWN0aXZlTm9kZXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKGAke1NFTEVDVE9SX1RBUkdFVF9MSU5LU30uJHtDTEFTU19OQU1FX0FDVElWRX1gLCBwYXJlbnQpXG4gICAgZm9yIChjb25zdCBub2RlIG9mIGFjdGl2ZU5vZGVzKSB7XG4gICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gU2Nyb2xsU3B5LmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBmb3IgKGNvbnN0IHNweSBvZiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfU1BZKSkge1xuICAgIFNjcm9sbFNweS5nZXRPckNyZWF0ZUluc3RhbmNlKHNweSlcbiAgfVxufSlcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oU2Nyb2xsU3B5KVxuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxTcHlcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMi4zKTogdGFiLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgZGVmaW5lSlF1ZXJ5UGx1Z2luLCBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLCBnZXROZXh0QWN0aXZlRWxlbWVudCwgaXNEaXNhYmxlZCB9IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAndGFiJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMudGFiJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOID0gYGtleWRvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX1gXG5cbmNvbnN0IEFSUk9XX0xFRlRfS0VZID0gJ0Fycm93TGVmdCdcbmNvbnN0IEFSUk9XX1JJR0hUX0tFWSA9ICdBcnJvd1JpZ2h0J1xuY29uc3QgQVJST1dfVVBfS0VZID0gJ0Fycm93VXAnXG5jb25zdCBBUlJPV19ET1dOX0tFWSA9ICdBcnJvd0Rvd24nXG5cbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19EUk9QRE9XTiA9ICdkcm9wZG93bidcblxuY29uc3QgU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFID0gJy5kcm9wZG93bi10b2dnbGUnXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9NRU5VID0gJy5kcm9wZG93bi1tZW51J1xuY29uc3QgTk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9ICc6bm90KC5kcm9wZG93bi10b2dnbGUpJ1xuXG5jb25zdCBTRUxFQ1RPUl9UQUJfUEFORUwgPSAnLmxpc3QtZ3JvdXAsIC5uYXYsIFtyb2xlPVwidGFibGlzdFwiXSdcbmNvbnN0IFNFTEVDVE9SX09VVEVSID0gJy5uYXYtaXRlbSwgLmxpc3QtZ3JvdXAtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0lOTkVSID0gYC5uYXYtbGluayR7Tk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRX0sIC5saXN0LWdyb3VwLWl0ZW0ke05PVF9TRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEV9LCBbcm9sZT1cInRhYlwiXSR7Tk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRX1gXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJ0YWJcIl0sIFtkYXRhLWJzLXRvZ2dsZT1cInBpbGxcIl0sIFtkYXRhLWJzLXRvZ2dsZT1cImxpc3RcIl0nIC8vIHRvZG86djY6IGNvdWxkIGJlIG9ubHkgYHRhYmBcbmNvbnN0IFNFTEVDVE9SX0lOTkVSX0VMRU0gPSBgJHtTRUxFQ1RPUl9JTk5FUn0sICR7U0VMRUNUT1JfREFUQV9UT0dHTEV9YFxuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRV9BQ1RJVkUgPSBgLiR7Q0xBU1NfTkFNRV9BQ1RJVkV9W2RhdGEtYnMtdG9nZ2xlPVwidGFiXCJdLCAuJHtDTEFTU19OQU1FX0FDVElWRX1bZGF0YS1icy10b2dnbGU9XCJwaWxsXCJdLCAuJHtDTEFTU19OQU1FX0FDVElWRX1bZGF0YS1icy10b2dnbGU9XCJsaXN0XCJdYFxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBUYWIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHN1cGVyKGVsZW1lbnQpXG4gICAgdGhpcy5fcGFyZW50ID0gdGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX1RBQl9QQU5FTClcblxuICAgIGlmICghdGhpcy5fcGFyZW50KSB7XG4gICAgICByZXR1cm5cbiAgICAgIC8vIHRvZG86IHNob3VsZCBUaHJvdyBleGNlcHRpb24gb24gdjZcbiAgICAgIC8vIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7ZWxlbWVudC5vdXRlckhUTUx9IGhhcyBub3QgYSB2YWxpZCBwYXJlbnQgJHtTRUxFQ1RPUl9JTk5FUl9FTEVNfWApXG4gICAgfVxuXG4gICAgLy8gU2V0IHVwIGluaXRpYWwgYXJpYSBhdHRyaWJ1dGVzXG4gICAgdGhpcy5fc2V0SW5pdGlhbEF0dHJpYnV0ZXModGhpcy5fcGFyZW50LCB0aGlzLl9nZXRDaGlsZHJlbigpKVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV04sIGV2ZW50ID0+IHRoaXMuX2tleWRvd24oZXZlbnQpKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBzaG93KCkgeyAvLyBTaG93cyB0aGlzIGVsZW0gYW5kIGRlYWN0aXZhdGUgdGhlIGFjdGl2ZSBzaWJsaW5nIGlmIGV4aXN0c1xuICAgIGNvbnN0IGlubmVyRWxlbSA9IHRoaXMuX2VsZW1lbnRcbiAgICBpZiAodGhpcy5fZWxlbUlzQWN0aXZlKGlubmVyRWxlbSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIFNlYXJjaCBmb3IgYWN0aXZlIHRhYiBvbiBzYW1lIHBhcmVudCB0byBkZWFjdGl2YXRlIGl0XG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5fZ2V0QWN0aXZlRWxlbSgpXG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBhY3RpdmUgP1xuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIoYWN0aXZlLCBFVkVOVF9ISURFLCB7IHJlbGF0ZWRUYXJnZXQ6IGlubmVyRWxlbSB9KSA6XG4gICAgICBudWxsXG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcihpbm5lckVsZW0sIEVWRU5UX1NIT1csIHsgcmVsYXRlZFRhcmdldDogYWN0aXZlIH0pXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgfHwgKGhpZGVFdmVudCAmJiBoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2RlYWN0aXZhdGUoYWN0aXZlLCBpbm5lckVsZW0pXG4gICAgdGhpcy5fYWN0aXZhdGUoaW5uZXJFbGVtLCBhY3RpdmUpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9hY3RpdmF0ZShlbGVtZW50LCByZWxhdGVkRWxlbSkge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgdGhpcy5fYWN0aXZhdGUoZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KSkgLy8gU2VhcmNoIGFuZCBhY3RpdmF0ZS9zaG93IHRoZSBwcm9wZXIgc2VjdGlvblxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSAhPT0gJ3RhYicpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIHRydWUpXG4gICAgICB0aGlzLl90b2dnbGVEcm9wRG93bihlbGVtZW50LCB0cnVlKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIoZWxlbWVudCwgRVZFTlRfU0hPV04sIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogcmVsYXRlZEVsZW1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgZWxlbWVudCwgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKSlcbiAgfVxuXG4gIF9kZWFjdGl2YXRlKGVsZW1lbnQsIHJlbGF0ZWRFbGVtKSB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgZWxlbWVudC5ibHVyKClcblxuICAgIHRoaXMuX2RlYWN0aXZhdGUoZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KSkgLy8gU2VhcmNoIGFuZCBkZWFjdGl2YXRlIHRoZSBzaG93biBzZWN0aW9uIHRvb1xuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSAhPT0gJ3RhYicpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKVxuICAgICAgdGhpcy5fdG9nZ2xlRHJvcERvd24oZWxlbWVudCwgZmFsc2UpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihlbGVtZW50LCBFVkVOVF9ISURERU4sIHsgcmVsYXRlZFRhcmdldDogcmVsYXRlZEVsZW0gfSlcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCBlbGVtZW50LCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpKVxuICB9XG5cbiAgX2tleWRvd24oZXZlbnQpIHtcbiAgICBpZiAoIShbQVJST1dfTEVGVF9LRVksIEFSUk9XX1JJR0hUX0tFWSwgQVJST1dfVVBfS0VZLCBBUlJPV19ET1dOX0tFWV0uaW5jbHVkZXMoZXZlbnQua2V5KSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpLy8gc3RvcFByb3BhZ2F0aW9uL3ByZXZlbnREZWZhdWx0IGJvdGggYWRkZWQgdG8gc3VwcG9ydCB1cC9kb3duIGtleXMgd2l0aG91dCBzY3JvbGxpbmcgdGhlIHBhZ2VcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgaXNOZXh0ID0gW0FSUk9XX1JJR0hUX0tFWSwgQVJST1dfRE9XTl9LRVldLmluY2x1ZGVzKGV2ZW50LmtleSlcbiAgICBjb25zdCBuZXh0QWN0aXZlRWxlbWVudCA9IGdldE5leHRBY3RpdmVFbGVtZW50KHRoaXMuX2dldENoaWxkcmVuKCkuZmlsdGVyKGVsZW1lbnQgPT4gIWlzRGlzYWJsZWQoZWxlbWVudCkpLCBldmVudC50YXJnZXQsIGlzTmV4dCwgdHJ1ZSlcblxuICAgIGlmIChuZXh0QWN0aXZlRWxlbWVudCkge1xuICAgICAgbmV4dEFjdGl2ZUVsZW1lbnQuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pXG4gICAgICBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZShuZXh0QWN0aXZlRWxlbWVudCkuc2hvdygpXG4gICAgfVxuICB9XG5cbiAgX2dldENoaWxkcmVuKCkgeyAvLyBjb2xsZWN0aW9uIG9mIGlubmVyIGVsZW1lbnRzXG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSU5ORVJfRUxFTSwgdGhpcy5fcGFyZW50KVxuICB9XG5cbiAgX2dldEFjdGl2ZUVsZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldENoaWxkcmVuKCkuZmluZChjaGlsZCA9PiB0aGlzLl9lbGVtSXNBY3RpdmUoY2hpbGQpKSB8fCBudWxsXG4gIH1cblxuICBfc2V0SW5pdGlhbEF0dHJpYnV0ZXMocGFyZW50LCBjaGlsZHJlbikge1xuICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKHBhcmVudCwgJ3JvbGUnLCAndGFibGlzdCcpXG5cbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICB0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlc09uQ2hpbGQoY2hpbGQpXG4gICAgfVxuICB9XG5cbiAgX3NldEluaXRpYWxBdHRyaWJ1dGVzT25DaGlsZChjaGlsZCkge1xuICAgIGNoaWxkID0gdGhpcy5fZ2V0SW5uZXJFbGVtZW50KGNoaWxkKVxuICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5fZWxlbUlzQWN0aXZlKGNoaWxkKVxuICAgIGNvbnN0IG91dGVyRWxlbSA9IHRoaXMuX2dldE91dGVyRWxlbWVudChjaGlsZClcbiAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBpc0FjdGl2ZSlcblxuICAgIGlmIChvdXRlckVsZW0gIT09IGNoaWxkKSB7XG4gICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhvdXRlckVsZW0sICdyb2xlJywgJ3ByZXNlbnRhdGlvbicpXG4gICAgfVxuXG4gICAgaWYgKCFpc0FjdGl2ZSkge1xuICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMoY2hpbGQsICdyb2xlJywgJ3RhYicpXG5cbiAgICAvLyBzZXQgYXR0cmlidXRlcyB0byB0aGUgcmVsYXRlZCBwYW5lbCB0b29cbiAgICB0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlc09uVGFyZ2V0UGFuZWwoY2hpbGQpXG4gIH1cblxuICBfc2V0SW5pdGlhbEF0dHJpYnV0ZXNPblRhcmdldFBhbmVsKGNoaWxkKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0RWxlbWVudEZyb21TZWxlY3RvcihjaGlsZClcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyh0YXJnZXQsICdyb2xlJywgJ3RhYnBhbmVsJylcblxuICAgIGlmIChjaGlsZC5pZCkge1xuICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHModGFyZ2V0LCAnYXJpYS1sYWJlbGxlZGJ5JywgYCMke2NoaWxkLmlkfWApXG4gICAgfVxuICB9XG5cbiAgX3RvZ2dsZURyb3BEb3duKGVsZW1lbnQsIG9wZW4pIHtcbiAgICBjb25zdCBvdXRlckVsZW0gPSB0aGlzLl9nZXRPdXRlckVsZW1lbnQoZWxlbWVudClcbiAgICBpZiAoIW91dGVyRWxlbS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfRFJPUERPV04pKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGUgPSAoc2VsZWN0b3IsIGNsYXNzTmFtZSkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoc2VsZWN0b3IsIG91dGVyRWxlbSlcbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUsIG9wZW4pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlKFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSwgQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgdG9nZ2xlKFNFTEVDVE9SX0RST1BET1dOX01FTlUsIENMQVNTX05BTUVfU0hPVylcbiAgICBvdXRlckVsZW0uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgb3BlbilcbiAgfVxuXG4gIF9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhlbGVtZW50LCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgaWYgKCFlbGVtZW50Lmhhc0F0dHJpYnV0ZShhdHRyaWJ1dGUpKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIF9lbGVtSXNBY3RpdmUoZWxlbSkge1xuICAgIHJldHVybiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0FDVElWRSlcbiAgfVxuXG4gIC8vIFRyeSB0byBnZXQgdGhlIGlubmVyIGVsZW1lbnQgKHVzdWFsbHkgdGhlIC5uYXYtbGluaylcbiAgX2dldElubmVyRWxlbWVudChlbGVtKSB7XG4gICAgcmV0dXJuIGVsZW0ubWF0Y2hlcyhTRUxFQ1RPUl9JTk5FUl9FTEVNKSA/IGVsZW0gOiBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0lOTkVSX0VMRU0sIGVsZW0pXG4gIH1cblxuICAvLyBUcnkgdG8gZ2V0IHRoZSBvdXRlciBlbGVtZW50ICh1c3VhbGx5IHRoZSAubmF2LWl0ZW0pXG4gIF9nZXRPdXRlckVsZW1lbnQoZWxlbSkge1xuICAgIHJldHVybiBlbGVtLmNsb3Nlc3QoU0VMRUNUT1JfT1VURVIpIHx8IGVsZW1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IFRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcykuc2hvdygpXG59KVxuXG4vKipcbiAqIEluaXRpYWxpemUgb24gZm9jdXNcbiAqL1xuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRV9BQ1RJVkUpKSB7XG4gICAgVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudClcbiAgfVxufSlcbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFRhYilcblxuZXhwb3J0IGRlZmF1bHQgVGFiXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjIuMyk6IHRvYXN0LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgZGVmaW5lSlF1ZXJ5UGx1Z2luLCByZWZsb3cgfSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuaW1wb3J0IHsgZW5hYmxlRGlzbWlzc1RyaWdnZXIgfSBmcm9tICcuL3V0aWwvY29tcG9uZW50LWZ1bmN0aW9ucydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ3RvYXN0J1xuY29uc3QgREFUQV9LRVkgPSAnYnMudG9hc3QnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuXG5jb25zdCBFVkVOVF9NT1VTRU9WRVIgPSBgbW91c2VvdmVyJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VPVVQgPSBgbW91c2VvdXQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9GT0NVU0lOID0gYGZvY3VzaW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9GT0NVU09VVCA9IGBmb2N1c291dCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX0hJREUgPSAnaGlkZScgLy8gQGRlcHJlY2F0ZWQgLSBrZXB0IGhlcmUgb25seSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XSU5HID0gJ3Nob3dpbmcnXG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBhbmltYXRpb246ICdib29sZWFuJyxcbiAgYXV0b2hpZGU6ICdib29sZWFuJyxcbiAgZGVsYXk6ICdudW1iZXInXG59XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGFuaW1hdGlvbjogdHJ1ZSxcbiAgYXV0b2hpZGU6IHRydWUsXG4gIGRlbGF5OiA1MDAwXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIFRvYXN0IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsXG4gICAgdGhpcy5faGFzTW91c2VJbnRlcmFjdGlvbiA9IGZhbHNlXG4gICAgdGhpcy5faGFzS2V5Ym9hcmRJbnRlcmFjdGlvbiA9IGZhbHNlXG4gICAgdGhpcy5fc2V0TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgc2hvdygpIHtcbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XKVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9jbGVhclRpbWVvdXQoKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUpXG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XSU5HKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04pXG5cbiAgICAgIHRoaXMuX21heWJlU2NoZWR1bGVIaWRlKClcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9ISURFKSAvLyBAZGVwcmVjYXRlZFxuICAgIHJlZmxvdyh0aGlzLl9lbGVtZW50KVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1csIENMQVNTX05BTUVfU0hPV0lORylcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRoaXMuX2NvbmZpZy5hbmltYXRpb24pXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5pc1Nob3duKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUpXG5cbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfSElERSkgLy8gQGRlcHJlY2F0ZWRcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1dJTkcsIENMQVNTX05BTUVfU0hPVylcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTilcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XSU5HKVxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRoaXMuX2NvbmZpZy5hbmltYXRpb24pXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIHRoaXMuX2NsZWFyVGltZW91dCgpXG5cbiAgICBpZiAodGhpcy5pc1Nob3duKCkpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgfVxuXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICBpc1Nob3duKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX21heWJlU2NoZWR1bGVIaWRlKCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnLmF1dG9oaWRlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faGFzTW91c2VJbnRlcmFjdGlvbiB8fCB0aGlzLl9oYXNLZXlib2FyZEludGVyYWN0aW9uKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH0sIHRoaXMuX2NvbmZpZy5kZWxheSlcbiAgfVxuXG4gIF9vbkludGVyYWN0aW9uKGV2ZW50LCBpc0ludGVyYWN0aW5nKSB7XG4gICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICBjYXNlICdtb3VzZW92ZXInOlxuICAgICAgY2FzZSAnbW91c2VvdXQnOiB7XG4gICAgICAgIHRoaXMuX2hhc01vdXNlSW50ZXJhY3Rpb24gPSBpc0ludGVyYWN0aW5nXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGNhc2UgJ2ZvY3VzaW4nOlxuICAgICAgY2FzZSAnZm9jdXNvdXQnOiB7XG4gICAgICAgIHRoaXMuX2hhc0tleWJvYXJkSW50ZXJhY3Rpb24gPSBpc0ludGVyYWN0aW5nXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNJbnRlcmFjdGluZykge1xuICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0KClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG5leHRFbGVtZW50ID0gZXZlbnQucmVsYXRlZFRhcmdldFxuICAgIGlmICh0aGlzLl9lbGVtZW50ID09PSBuZXh0RWxlbWVudCB8fCB0aGlzLl9lbGVtZW50LmNvbnRhaW5zKG5leHRFbGVtZW50KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fbWF5YmVTY2hlZHVsZUhpZGUoKVxuICB9XG5cbiAgX3NldExpc3RlbmVycygpIHtcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VPVkVSLCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCB0cnVlKSlcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VPVVQsIGV2ZW50ID0+IHRoaXMuX29uSW50ZXJhY3Rpb24oZXZlbnQsIGZhbHNlKSlcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfRk9DVVNJTiwgZXZlbnQgPT4gdGhpcy5fb25JbnRlcmFjdGlvbihldmVudCwgdHJ1ZSkpXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0ZPQ1VTT1VULCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCBmYWxzZSkpXG4gIH1cblxuICBfY2xlYXJUaW1lb3V0KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KVxuICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBUb2FzdC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbmVuYWJsZURpc21pc3NUcmlnZ2VyKFRvYXN0KVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihUb2FzdClcblxuZXhwb3J0IGRlZmF1bHQgVG9hc3RcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMi4zKTogdG9vbHRpcC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAqIGFzIFBvcHBlciBmcm9tICdAcG9wcGVyanMvY29yZSdcbmltcG9ydCB7IGRlZmluZUpRdWVyeVBsdWdpbiwgZmluZFNoYWRvd1Jvb3QsIGdldEVsZW1lbnQsIGdldFVJRCwgaXNSVEwsIG5vb3AgfSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgeyBEZWZhdWx0QWxsb3dsaXN0IH0gZnJvbSAnLi91dGlsL3Nhbml0aXplcidcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5pbXBvcnQgVGVtcGxhdGVGYWN0b3J5IGZyb20gJy4vdXRpbC90ZW1wbGF0ZS1mYWN0b3J5J1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAndG9vbHRpcCdcbmNvbnN0IERJU0FMTE9XRURfQVRUUklCVVRFUyA9IG5ldyBTZXQoWydzYW5pdGl6ZScsICdhbGxvd0xpc3QnLCAnc2FuaXRpemVGbiddKVxuXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfTU9EQUwgPSAnbW9kYWwnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcblxuY29uc3QgU0VMRUNUT1JfVE9PTFRJUF9JTk5FUiA9ICcudG9vbHRpcC1pbm5lcidcbmNvbnN0IFNFTEVDVE9SX01PREFMID0gYC4ke0NMQVNTX05BTUVfTU9EQUx9YFxuXG5jb25zdCBFVkVOVF9NT0RBTF9ISURFID0gJ2hpZGUuYnMubW9kYWwnXG5cbmNvbnN0IFRSSUdHRVJfSE9WRVIgPSAnaG92ZXInXG5jb25zdCBUUklHR0VSX0ZPQ1VTID0gJ2ZvY3VzJ1xuY29uc3QgVFJJR0dFUl9DTElDSyA9ICdjbGljaydcbmNvbnN0IFRSSUdHRVJfTUFOVUFMID0gJ21hbnVhbCdcblxuY29uc3QgRVZFTlRfSElERSA9ICdoaWRlJ1xuY29uc3QgRVZFTlRfSElEREVOID0gJ2hpZGRlbidcbmNvbnN0IEVWRU5UX1NIT1cgPSAnc2hvdydcbmNvbnN0IEVWRU5UX1NIT1dOID0gJ3Nob3duJ1xuY29uc3QgRVZFTlRfSU5TRVJURUQgPSAnaW5zZXJ0ZWQnXG5jb25zdCBFVkVOVF9DTElDSyA9ICdjbGljaydcbmNvbnN0IEVWRU5UX0ZPQ1VTSU4gPSAnZm9jdXNpbidcbmNvbnN0IEVWRU5UX0ZPQ1VTT1VUID0gJ2ZvY3Vzb3V0J1xuY29uc3QgRVZFTlRfTU9VU0VFTlRFUiA9ICdtb3VzZWVudGVyJ1xuY29uc3QgRVZFTlRfTU9VU0VMRUFWRSA9ICdtb3VzZWxlYXZlJ1xuXG5jb25zdCBBdHRhY2htZW50TWFwID0ge1xuICBBVVRPOiAnYXV0bycsXG4gIFRPUDogJ3RvcCcsXG4gIFJJR0hUOiBpc1JUTCgpID8gJ2xlZnQnIDogJ3JpZ2h0JyxcbiAgQk9UVE9NOiAnYm90dG9tJyxcbiAgTEVGVDogaXNSVEwoKSA/ICdyaWdodCcgOiAnbGVmdCdcbn1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYWxsb3dMaXN0OiBEZWZhdWx0QWxsb3dsaXN0LFxuICBhbmltYXRpb246IHRydWUsXG4gIGJvdW5kYXJ5OiAnY2xpcHBpbmdQYXJlbnRzJyxcbiAgY29udGFpbmVyOiBmYWxzZSxcbiAgY3VzdG9tQ2xhc3M6ICcnLFxuICBkZWxheTogMCxcbiAgZmFsbGJhY2tQbGFjZW1lbnRzOiBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddLFxuICBodG1sOiBmYWxzZSxcbiAgb2Zmc2V0OiBbMCwgMF0sXG4gIHBsYWNlbWVudDogJ3RvcCcsXG4gIHBvcHBlckNvbmZpZzogbnVsbCxcbiAgc2FuaXRpemU6IHRydWUsXG4gIHNhbml0aXplRm46IG51bGwsXG4gIHNlbGVjdG9yOiBmYWxzZSxcbiAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwidG9vbHRpcFwiIHJvbGU9XCJ0b29sdGlwXCI+JyArXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3dcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PicgK1xuICAgICAgICAgICAgJzwvZGl2PicsXG4gIHRpdGxlOiAnJyxcbiAgdHJpZ2dlcjogJ2hvdmVyIGZvY3VzJ1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYWxsb3dMaXN0OiAnb2JqZWN0JyxcbiAgYW5pbWF0aW9uOiAnYm9vbGVhbicsXG4gIGJvdW5kYXJ5OiAnKHN0cmluZ3xlbGVtZW50KScsXG4gIGNvbnRhaW5lcjogJyhzdHJpbmd8ZWxlbWVudHxib29sZWFuKScsXG4gIGN1c3RvbUNsYXNzOiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICBkZWxheTogJyhudW1iZXJ8b2JqZWN0KScsXG4gIGZhbGxiYWNrUGxhY2VtZW50czogJ2FycmF5JyxcbiAgaHRtbDogJ2Jvb2xlYW4nLFxuICBvZmZzZXQ6ICcoYXJyYXl8c3RyaW5nfGZ1bmN0aW9uKScsXG4gIHBsYWNlbWVudDogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgcG9wcGVyQ29uZmlnOiAnKG51bGx8b2JqZWN0fGZ1bmN0aW9uKScsXG4gIHNhbml0aXplOiAnYm9vbGVhbicsXG4gIHNhbml0aXplRm46ICcobnVsbHxmdW5jdGlvbiknLFxuICBzZWxlY3RvcjogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICB0ZW1wbGF0ZTogJ3N0cmluZycsXG4gIHRpdGxlOiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKScsXG4gIHRyaWdnZXI6ICdzdHJpbmcnXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIHRvb2x0aXBzIHJlcXVpcmUgUG9wcGVyIChodHRwczovL3BvcHBlci5qcy5vcmcpJylcbiAgICB9XG5cbiAgICBzdXBlcihlbGVtZW50LCBjb25maWcpXG5cbiAgICAvLyBQcml2YXRlXG4gICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZVxuICAgIHRoaXMuX3RpbWVvdXQgPSAwXG4gICAgdGhpcy5faXNIb3ZlcmVkID0gbnVsbFxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgPSB7fVxuICAgIHRoaXMuX3BvcHBlciA9IG51bGxcbiAgICB0aGlzLl90ZW1wbGF0ZUZhY3RvcnkgPSBudWxsXG4gICAgdGhpcy5fbmV3Q29udGVudCA9IG51bGxcblxuICAgIC8vIFByb3RlY3RlZFxuICAgIHRoaXMudGlwID0gbnVsbFxuXG4gICAgdGhpcy5fc2V0TGlzdGVuZXJzKClcblxuICAgIGlmICghdGhpcy5fY29uZmlnLnNlbGVjdG9yKSB7XG4gICAgICB0aGlzLl9maXhUaXRsZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBlbmFibGUoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZVxuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSBmYWxzZVxuICB9XG5cbiAgdG9nZ2xlRW5hYmxlZCgpIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSAhdGhpcy5faXNFbmFibGVkXG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIuY2xpY2sgPSAhdGhpcy5fYWN0aXZlVHJpZ2dlci5jbGlja1xuICAgIGlmICh0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgIHRoaXMuX2xlYXZlKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2VudGVyKClcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpXG5cbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9NT0RBTCksIEVWRU5UX01PREFMX0hJREUsIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIpXG5cbiAgICBpZiAodGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnKSkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnKSlcbiAgICB9XG5cbiAgICB0aGlzLl9kaXNwb3NlUG9wcGVyKClcbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSB1c2Ugc2hvdyBvbiB2aXNpYmxlIGVsZW1lbnRzJylcbiAgICB9XG5cbiAgICBpZiAoISh0aGlzLl9pc1dpdGhDb250ZW50KCkgJiYgdGhpcy5faXNFbmFibGVkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfU0hPVykpXG4gICAgY29uc3Qgc2hhZG93Um9vdCA9IGZpbmRTaGFkb3dSb290KHRoaXMuX2VsZW1lbnQpXG4gICAgY29uc3QgaXNJblRoZURvbSA9IChzaGFkb3dSb290IHx8IHRoaXMuX2VsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmNvbnRhaW5zKHRoaXMuX2VsZW1lbnQpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgfHwgIWlzSW5UaGVEb20pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIHRvZG8gdjYgcmVtb3ZlIHRoaXMgT1IgbWFrZSBpdCBvcHRpb25hbFxuICAgIHRoaXMuX2Rpc3Bvc2VQb3BwZXIoKVxuXG4gICAgY29uc3QgdGlwID0gdGhpcy5fZ2V0VGlwRWxlbWVudCgpXG5cbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIHRpcC5nZXRBdHRyaWJ1dGUoJ2lkJykpXG5cbiAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gdGhpcy5fY29uZmlnXG5cbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnModGhpcy50aXApKSB7XG4gICAgICBjb250YWluZXIuYXBwZW5kKHRpcClcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0lOU0VSVEVEKSlcbiAgICB9XG5cbiAgICB0aGlzLl9wb3BwZXIgPSB0aGlzLl9jcmVhdGVQb3BwZXIodGlwKVxuXG4gICAgdGlwLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgdG8gdGhlIGJvZHkncyBpbW1lZGlhdGUgY2hpbGRyZW47XG4gICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX1NIT1dOKSlcblxuICAgICAgaWYgKHRoaXMuX2lzSG92ZXJlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5fbGVhdmUoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9pc0hvdmVyZWQgPSBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMudGlwLCB0aGlzLl9pc0FuaW1hdGVkKCkpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9ISURFKSlcbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRpcCA9IHRoaXMuX2dldFRpcEVsZW1lbnQoKVxuICAgIHRpcC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0NMSUNLXSA9IGZhbHNlXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0ZPQ1VTXSA9IGZhbHNlXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0hPVkVSXSA9IGZhbHNlXG4gICAgdGhpcy5faXNIb3ZlcmVkID0gbnVsbCAvLyBpdCBpcyBhIHRyaWNrIHRvIHN1cHBvcnQgbWFudWFsIHRyaWdnZXJpbmdcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLl9pc0hvdmVyZWQpIHtcbiAgICAgICAgdGhpcy5fZGlzcG9zZVBvcHBlcigpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JylcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0hJRERFTikpXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy50aXAsIHRoaXMuX2lzQW5pbWF0ZWQoKSlcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBQcm90ZWN0ZWRcbiAgX2lzV2l0aENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy5fZ2V0VGl0bGUoKSlcbiAgfVxuXG4gIF9nZXRUaXBFbGVtZW50KCkge1xuICAgIGlmICghdGhpcy50aXApIHtcbiAgICAgIHRoaXMudGlwID0gdGhpcy5fY3JlYXRlVGlwRWxlbWVudCh0aGlzLl9uZXdDb250ZW50IHx8IHRoaXMuX2dldENvbnRlbnRGb3JUZW1wbGF0ZSgpKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnRpcFxuICB9XG5cbiAgX2NyZWF0ZVRpcEVsZW1lbnQoY29udGVudCkge1xuICAgIGNvbnN0IHRpcCA9IHRoaXMuX2dldFRlbXBsYXRlRmFjdG9yeShjb250ZW50KS50b0h0bWwoKVxuXG4gICAgLy8gdG9kbzogcmVtb3ZlIHRoaXMgY2hlY2sgb24gdjZcbiAgICBpZiAoIXRpcCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0ZBREUsIENMQVNTX05BTUVfU0hPVylcbiAgICAvLyB0b2RvOiBvbiB2NiB0aGUgZm9sbG93aW5nIGNhbiBiZSBhY2hpZXZlZCB3aXRoIENTUyBvbmx5XG4gICAgdGlwLmNsYXNzTGlzdC5hZGQoYGJzLSR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FfS1hdXRvYClcblxuICAgIGNvbnN0IHRpcElkID0gZ2V0VUlEKHRoaXMuY29uc3RydWN0b3IuTkFNRSkudG9TdHJpbmcoKVxuXG4gICAgdGlwLnNldEF0dHJpYnV0ZSgnaWQnLCB0aXBJZClcblxuICAgIGlmICh0aGlzLl9pc0FuaW1hdGVkKCkpIHtcbiAgICAgIHRpcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGlwXG4gIH1cblxuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLl9uZXdDb250ZW50ID0gY29udGVudFxuICAgIGlmICh0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgIHRoaXMuX2Rpc3Bvc2VQb3BwZXIoKVxuICAgICAgdGhpcy5zaG93KClcbiAgICB9XG4gIH1cblxuICBfZ2V0VGVtcGxhdGVGYWN0b3J5KGNvbnRlbnQpIHtcbiAgICBpZiAodGhpcy5fdGVtcGxhdGVGYWN0b3J5KSB7XG4gICAgICB0aGlzLl90ZW1wbGF0ZUZhY3RvcnkuY2hhbmdlQ29udGVudChjb250ZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90ZW1wbGF0ZUZhY3RvcnkgPSBuZXcgVGVtcGxhdGVGYWN0b3J5KHtcbiAgICAgICAgLi4udGhpcy5fY29uZmlnLFxuICAgICAgICAvLyB0aGUgYGNvbnRlbnRgIHZhciBoYXMgdG8gYmUgYWZ0ZXIgYHRoaXMuX2NvbmZpZ2BcbiAgICAgICAgLy8gdG8gb3ZlcnJpZGUgY29uZmlnLmNvbnRlbnQgaW4gY2FzZSBvZiBwb3BvdmVyXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICAgIGV4dHJhQ2xhc3M6IHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHRoaXMuX2NvbmZpZy5jdXN0b21DbGFzcylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlRmFjdG9yeVxuICB9XG5cbiAgX2dldENvbnRlbnRGb3JUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW1NFTEVDVE9SX1RPT0xUSVBfSU5ORVJdOiB0aGlzLl9nZXRUaXRsZSgpXG4gICAgfVxuICB9XG5cbiAgX2dldFRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcudGl0bGUpIHx8IHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLW9yaWdpbmFsLXRpdGxlJylcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldChldmVudCkge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmdldE9yQ3JlYXRlSW5zdGFuY2UoZXZlbnQuZGVsZWdhdGVUYXJnZXQsIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKCkpXG4gIH1cblxuICBfaXNBbmltYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLmFuaW1hdGlvbiB8fCAodGhpcy50aXAgJiYgdGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpXG4gIH1cblxuICBfaXNTaG93bigpIHtcbiAgICByZXR1cm4gdGhpcy50aXAgJiYgdGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVylcbiAgfVxuXG4gIF9jcmVhdGVQb3BwZXIodGlwKSB7XG4gICAgY29uc3QgcGxhY2VtZW50ID0gdHlwZW9mIHRoaXMuX2NvbmZpZy5wbGFjZW1lbnQgPT09ICdmdW5jdGlvbicgP1xuICAgICAgdGhpcy5fY29uZmlnLnBsYWNlbWVudC5jYWxsKHRoaXMsIHRpcCwgdGhpcy5fZWxlbWVudCkgOlxuICAgICAgdGhpcy5fY29uZmlnLnBsYWNlbWVudFxuICAgIGNvbnN0IGF0dGFjaG1lbnQgPSBBdHRhY2htZW50TWFwW3BsYWNlbWVudC50b1VwcGVyQ2FzZSgpXVxuICAgIHJldHVybiBQb3BwZXIuY3JlYXRlUG9wcGVyKHRoaXMuX2VsZW1lbnQsIHRpcCwgdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKGF0dGFjaG1lbnQpKVxuICB9XG5cbiAgX2dldE9mZnNldCgpIHtcbiAgICBjb25zdCB7IG9mZnNldCB9ID0gdGhpcy5fY29uZmlnXG5cbiAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBvZmZzZXQuc3BsaXQoJywnKS5tYXAodmFsdWUgPT4gTnVtYmVyLnBhcnNlSW50KHZhbHVlLCAxMCkpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBwb3BwZXJEYXRhID0+IG9mZnNldChwb3BwZXJEYXRhLCB0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRcbiAgfVxuXG4gIF9yZXNvbHZlUG9zc2libGVGdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJyA/IGFyZy5jYWxsKHRoaXMuX2VsZW1lbnQpIDogYXJnXG4gIH1cblxuICBfZ2V0UG9wcGVyQ29uZmlnKGF0dGFjaG1lbnQpIHtcbiAgICBjb25zdCBkZWZhdWx0QnNQb3BwZXJDb25maWcgPSB7XG4gICAgICBwbGFjZW1lbnQ6IGF0dGFjaG1lbnQsXG4gICAgICBtb2RpZmllcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdmbGlwJyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBmYWxsYmFja1BsYWNlbWVudHM6IHRoaXMuX2NvbmZpZy5mYWxsYmFja1BsYWNlbWVudHNcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBvZmZzZXQ6IHRoaXMuX2dldE9mZnNldCgpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgYm91bmRhcnk6IHRoaXMuX2NvbmZpZy5ib3VuZGFyeVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdhcnJvdycsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgZWxlbWVudDogYC4ke3RoaXMuY29uc3RydWN0b3IuTkFNRX0tYXJyb3dgXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ3ByZVNldFBsYWNlbWVudCcsXG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICBwaGFzZTogJ2JlZm9yZU1haW4nLFxuICAgICAgICAgIGZuOiBkYXRhID0+IHtcbiAgICAgICAgICAgIC8vIFByZS1zZXQgUG9wcGVyJ3MgcGxhY2VtZW50IGF0dHJpYnV0ZSBpbiBvcmRlciB0byByZWFkIHRoZSBhcnJvdyBzaXplcyBwcm9wZXJseS5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgUG9wcGVyIG1peGVzIHVwIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IGRpbWVuc2lvbnMgc2luY2UgdGhlIGluaXRpYWwgYXJyb3cgc3R5bGUgaXMgZm9yIHRvcCBwbGFjZW1lbnRcbiAgICAgICAgICAgIHRoaXMuX2dldFRpcEVsZW1lbnQoKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcG9wcGVyLXBsYWNlbWVudCcsIGRhdGEuc3RhdGUucGxhY2VtZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5kZWZhdWx0QnNQb3BwZXJDb25maWcsXG4gICAgICAuLi4odHlwZW9mIHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnKGRlZmF1bHRCc1BvcHBlckNvbmZpZykgOiB0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnKVxuICAgIH1cbiAgfVxuXG4gIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgdHJpZ2dlcnMgPSB0aGlzLl9jb25maWcudHJpZ2dlci5zcGxpdCgnICcpXG5cbiAgICBmb3IgKGNvbnN0IHRyaWdnZXIgb2YgdHJpZ2dlcnMpIHtcbiAgICAgIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9DTElDSyksIHRoaXMuX2NvbmZpZy5zZWxlY3RvciwgZXZlbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQpXG4gICAgICAgICAgY29udGV4dC50b2dnbGUoKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyICE9PSBUUklHR0VSX01BTlVBTCkge1xuICAgICAgICBjb25zdCBldmVudEluID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUiA/XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfTU9VU0VFTlRFUikgOlxuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0ZPQ1VTSU4pXG4gICAgICAgIGNvbnN0IGV2ZW50T3V0ID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUiA/XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfTU9VU0VMRUFWRSkgOlxuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0ZPQ1VTT1VUKVxuXG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBldmVudEluLCB0aGlzLl9jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHtcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50KVxuICAgICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbZXZlbnQudHlwZSA9PT0gJ2ZvY3VzaW4nID8gVFJJR0dFUl9GT0NVUyA6IFRSSUdHRVJfSE9WRVJdID0gdHJ1ZVxuICAgICAgICAgIGNvbnRleHQuX2VudGVyKClcbiAgICAgICAgfSlcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIGV2ZW50T3V0LCB0aGlzLl9jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHtcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50KVxuICAgICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbZXZlbnQudHlwZSA9PT0gJ2ZvY3Vzb3V0JyA/IFRSSUdHRVJfRk9DVVMgOiBUUklHR0VSX0hPVkVSXSA9XG4gICAgICAgICAgICBjb250ZXh0Ll9lbGVtZW50LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpXG5cbiAgICAgICAgICBjb250ZXh0Ll9sZWF2ZSgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faGlkZU1vZGFsSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9NT0RBTCksIEVWRU5UX01PREFMX0hJREUsIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIpXG4gIH1cblxuICBfZml4VGl0bGUoKSB7XG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuXG4gICAgaWYgKCF0aXRsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpICYmICF0aGlzLl9lbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCB0aXRsZSlcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScsIHRpdGxlKSAvLyBETyBOT1QgVVNFIElULiBJcyBvbmx5IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0aXRsZScpXG4gIH1cblxuICBfZW50ZXIoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24oKSB8fCB0aGlzLl9pc0hvdmVyZWQpIHtcbiAgICAgIHRoaXMuX2lzSG92ZXJlZCA9IHRydWVcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzSG92ZXJlZCA9IHRydWVcblxuICAgIHRoaXMuX3NldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2lzSG92ZXJlZCkge1xuICAgICAgICB0aGlzLnNob3coKVxuICAgICAgfVxuICAgIH0sIHRoaXMuX2NvbmZpZy5kZWxheS5zaG93KVxuICB9XG5cbiAgX2xlYXZlKCkge1xuICAgIGlmICh0aGlzLl9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzSG92ZXJlZCA9IGZhbHNlXG5cbiAgICB0aGlzLl9zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5faXNIb3ZlcmVkKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICB9XG4gICAgfSwgdGhpcy5fY29uZmlnLmRlbGF5LmhpZGUpXG4gIH1cblxuICBfc2V0VGltZW91dChoYW5kbGVyLCB0aW1lb3V0KSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpXG4gICAgdGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoaGFuZGxlciwgdGltZW91dClcbiAgfVxuXG4gIF9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuX2FjdGl2ZVRyaWdnZXIpLmluY2x1ZGVzKHRydWUpXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbnN0IGRhdGFBdHRyaWJ1dGVzID0gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudClcblxuICAgIGZvciAoY29uc3QgZGF0YUF0dHJpYnV0ZSBvZiBPYmplY3Qua2V5cyhkYXRhQXR0cmlidXRlcykpIHtcbiAgICAgIGlmIChESVNBTExPV0VEX0FUVFJJQlVURVMuaGFzKGRhdGFBdHRyaWJ1dGUpKSB7XG4gICAgICAgIGRlbGV0ZSBkYXRhQXR0cmlidXRlc1tkYXRhQXR0cmlidXRlXVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLmRhdGFBdHRyaWJ1dGVzLFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cbiAgICBjb25maWcgPSB0aGlzLl9tZXJnZUNvbmZpZ09iaihjb25maWcpXG4gICAgY29uZmlnID0gdGhpcy5fY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpXG4gICAgdGhpcy5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZylcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICBjb25maWcuY29udGFpbmVyID0gY29uZmlnLmNvbnRhaW5lciA9PT0gZmFsc2UgPyBkb2N1bWVudC5ib2R5IDogZ2V0RWxlbWVudChjb25maWcuY29udGFpbmVyKVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcuZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcuZGVsYXkgPSB7XG4gICAgICAgIHNob3c6IGNvbmZpZy5kZWxheSxcbiAgICAgICAgaGlkZTogY29uZmlnLmRlbGF5XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGl0bGUgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcudGl0bGUgPSBjb25maWcudGl0bGUudG9TdHJpbmcoKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmNvbnRlbnQgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcuY29udGVudCA9IGNvbmZpZy5jb250ZW50LnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGVsZWdhdGVDb25maWcoKSB7XG4gICAgY29uc3QgY29uZmlnID0ge31cblxuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuX2NvbmZpZykge1xuICAgICAgaWYgKHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFtrZXldICE9PSB0aGlzLl9jb25maWdba2V5XSkge1xuICAgICAgICBjb25maWdba2V5XSA9IHRoaXMuX2NvbmZpZ1trZXldXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uZmlnLnNlbGVjdG9yID0gZmFsc2VcbiAgICBjb25maWcudHJpZ2dlciA9ICdtYW51YWwnXG5cbiAgICAvLyBJbiB0aGUgZnV0dXJlIGNhbiBiZSByZXBsYWNlZCB3aXRoOlxuICAgIC8vIGNvbnN0IGtleXNXaXRoRGlmZmVyZW50VmFsdWVzID0gT2JqZWN0LmVudHJpZXModGhpcy5fY29uZmlnKS5maWx0ZXIoZW50cnkgPT4gdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0W2VudHJ5WzBdXSAhPT0gdGhpcy5fY29uZmlnW2VudHJ5WzBdXSlcbiAgICAvLyBgT2JqZWN0LmZyb21FbnRyaWVzKGtleXNXaXRoRGlmZmVyZW50VmFsdWVzKWBcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZGlzcG9zZVBvcHBlcigpIHtcbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgICB0aGlzLl9wb3BwZXIgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGlwKSB7XG4gICAgICB0aGlzLnRpcC5yZW1vdmUoKVxuICAgICAgdGhpcy50aXAgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gVG9vbHRpcC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10oKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oVG9vbHRpcClcblxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4yLjMpOiB1dGlsL2JhY2tkcm9wLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCB7IGV4ZWN1dGUsIGV4ZWN1dGVBZnRlclRyYW5zaXRpb24sIGdldEVsZW1lbnQsIHJlZmxvdyB9IGZyb20gJy4vaW5kZXgnXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4vY29uZmlnJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnYmFja2Ryb3AnXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgRVZFTlRfTU9VU0VET1dOID0gYG1vdXNlZG93bi5icy4ke05BTUV9YFxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBjbGFzc05hbWU6ICdtb2RhbC1iYWNrZHJvcCcsXG4gIGNsaWNrQ2FsbGJhY2s6IG51bGwsXG4gIGlzQW5pbWF0ZWQ6IGZhbHNlLFxuICBpc1Zpc2libGU6IHRydWUsIC8vIGlmIGZhbHNlLCB3ZSB1c2UgdGhlIGJhY2tkcm9wIGhlbHBlciB3aXRob3V0IGFkZGluZyBhbnkgZWxlbWVudCB0byB0aGUgZG9tXG4gIHJvb3RFbGVtZW50OiAnYm9keScgLy8gZ2l2ZSB0aGUgY2hvaWNlIHRvIHBsYWNlIGJhY2tkcm9wIHVuZGVyIGRpZmZlcmVudCBlbGVtZW50c1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgY2xpY2tDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKScsXG4gIGlzQW5pbWF0ZWQ6ICdib29sZWFuJyxcbiAgaXNWaXNpYmxlOiAnYm9vbGVhbicsXG4gIHJvb3RFbGVtZW50OiAnKGVsZW1lbnR8c3RyaW5nKSdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQmFja2Ryb3AgZXh0ZW5kcyBDb25maWcge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9pc0FwcGVuZGVkID0gZmFsc2VcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBzaG93KGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuaXNWaXNpYmxlKSB7XG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fYXBwZW5kKClcblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9nZXRFbGVtZW50KClcbiAgICBpZiAodGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpIHtcbiAgICAgIHJlZmxvdyhlbGVtZW50KVxuICAgIH1cblxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG5cbiAgICB0aGlzLl9lbXVsYXRlQW5pbWF0aW9uKCgpID0+IHtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgfSlcbiAgfVxuXG4gIGhpZGUoY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5pc1Zpc2libGUpIHtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9nZXRFbGVtZW50KCkuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICB0aGlzLl9lbXVsYXRlQW5pbWF0aW9uKCgpID0+IHtcbiAgICAgIHRoaXMuZGlzcG9zZSgpXG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgIH0pXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGlmICghdGhpcy5faXNBcHBlbmRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRURPV04pXG5cbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpXG4gICAgdGhpcy5faXNBcHBlbmRlZCA9IGZhbHNlXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9nZXRFbGVtZW50KCkge1xuICAgIGlmICghdGhpcy5fZWxlbWVudCkge1xuICAgICAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgYmFja2Ryb3AuY2xhc3NOYW1lID0gdGhpcy5fY29uZmlnLmNsYXNzTmFtZVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKSB7XG4gICAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50ID0gYmFja2Ryb3BcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFxuICB9XG5cbiAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgLy8gdXNlIGdldEVsZW1lbnQoKSB3aXRoIHRoZSBkZWZhdWx0IFwiYm9keVwiIHRvIGdldCBhIGZyZXNoIEVsZW1lbnQgb24gZWFjaCBpbnN0YW50aWF0aW9uXG4gICAgY29uZmlnLnJvb3RFbGVtZW50ID0gZ2V0RWxlbWVudChjb25maWcucm9vdEVsZW1lbnQpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2FwcGVuZCgpIHtcbiAgICBpZiAodGhpcy5faXNBcHBlbmRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2dldEVsZW1lbnQoKVxuICAgIHRoaXMuX2NvbmZpZy5yb290RWxlbWVudC5hcHBlbmQoZWxlbWVudClcblxuICAgIEV2ZW50SGFuZGxlci5vbihlbGVtZW50LCBFVkVOVF9NT1VTRURPV04sICgpID0+IHtcbiAgICAgIGV4ZWN1dGUodGhpcy5fY29uZmlnLmNsaWNrQ2FsbGJhY2spXG4gICAgfSlcblxuICAgIHRoaXMuX2lzQXBwZW5kZWQgPSB0cnVlXG4gIH1cblxuICBfZW11bGF0ZUFuaW1hdGlvbihjYWxsYmFjaykge1xuICAgIGV4ZWN1dGVBZnRlclRyYW5zaXRpb24oY2FsbGJhY2ssIHRoaXMuX2dldEVsZW1lbnQoKSwgdGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja2Ryb3BcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMi4zKTogdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCB7IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsIGlzRGlzYWJsZWQgfSBmcm9tICcuL2luZGV4J1xuXG5jb25zdCBlbmFibGVEaXNtaXNzVHJpZ2dlciA9IChjb21wb25lbnQsIG1ldGhvZCA9ICdoaWRlJykgPT4ge1xuICBjb25zdCBjbGlja0V2ZW50ID0gYGNsaWNrLmRpc21pc3Mke2NvbXBvbmVudC5FVkVOVF9LRVl9YFxuICBjb25zdCBuYW1lID0gY29tcG9uZW50Lk5BTUVcblxuICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIGNsaWNrRXZlbnQsIGBbZGF0YS1icy1kaXNtaXNzPVwiJHtuYW1lfVwiXWAsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKSB8fCB0aGlzLmNsb3Nlc3QoYC4ke25hbWV9YClcbiAgICBjb25zdCBpbnN0YW5jZSA9IGNvbXBvbmVudC5nZXRPckNyZWF0ZUluc3RhbmNlKHRhcmdldClcblxuICAgIC8vIE1ldGhvZCBhcmd1bWVudCBpcyBsZWZ0LCBmb3IgQWxlcnQgYW5kIG9ubHksIGFzIGl0IGRvZXNuJ3QgaW1wbGVtZW50IHRoZSAnaGlkZScgbWV0aG9kXG4gICAgaW5zdGFuY2VbbWV0aG9kXSgpXG4gIH0pXG59XG5cbmV4cG9ydCB7XG4gIGVuYWJsZURpc21pc3NUcmlnZ2VyXG59XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjIuMyk6IHV0aWwvY29uZmlnLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgaXNFbGVtZW50LCB0b1R5cGUgfSBmcm9tICcuL2luZGV4J1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4uL2RvbS9tYW5pcHVsYXRvcidcblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQ29uZmlnIHtcbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiB7fVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignWW91IGhhdmUgdG8gaW1wbGVtZW50IHRoZSBzdGF0aWMgbWV0aG9kIFwiTkFNRVwiLCBmb3IgZWFjaCBjb21wb25lbnQhJylcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0gdGhpcy5fbWVyZ2VDb25maWdPYmooY29uZmlnKVxuICAgIGNvbmZpZyA9IHRoaXMuX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKVxuICAgIHRoaXMuX3R5cGVDaGVja0NvbmZpZyhjb25maWcpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX21lcmdlQ29uZmlnT2JqKGNvbmZpZywgZWxlbWVudCkge1xuICAgIGNvbnN0IGpzb25Db25maWcgPSBpc0VsZW1lbnQoZWxlbWVudCkgPyBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsICdjb25maWcnKSA6IHt9IC8vIHRyeSB0byBwYXJzZVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMuY29uc3RydWN0b3IuRGVmYXVsdCxcbiAgICAgIC4uLih0eXBlb2YganNvbkNvbmZpZyA9PT0gJ29iamVjdCcgPyBqc29uQ29uZmlnIDoge30pLFxuICAgICAgLi4uKGlzRWxlbWVudChlbGVtZW50KSA/IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKGVsZW1lbnQpIDoge30pLFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDoge30pXG4gICAgfVxuICB9XG5cbiAgX3R5cGVDaGVja0NvbmZpZyhjb25maWcsIGNvbmZpZ1R5cGVzID0gdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZSkge1xuICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgT2JqZWN0LmtleXMoY29uZmlnVHlwZXMpKSB7XG4gICAgICBjb25zdCBleHBlY3RlZFR5cGVzID0gY29uZmlnVHlwZXNbcHJvcGVydHldXG4gICAgICBjb25zdCB2YWx1ZSA9IGNvbmZpZ1twcm9wZXJ0eV1cbiAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IGlzRWxlbWVudCh2YWx1ZSkgPyAnZWxlbWVudCcgOiB0b1R5cGUodmFsdWUpXG5cbiAgICAgIGlmICghbmV3IFJlZ0V4cChleHBlY3RlZFR5cGVzKS50ZXN0KHZhbHVlVHlwZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBgJHt0aGlzLmNvbnN0cnVjdG9yLk5BTUUudG9VcHBlckNhc2UoKX06IE9wdGlvbiBcIiR7cHJvcGVydHl9XCIgcHJvdmlkZWQgdHlwZSBcIiR7dmFsdWVUeXBlfVwiIGJ1dCBleHBlY3RlZCB0eXBlIFwiJHtleHBlY3RlZFR5cGVzfVwiLmBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25maWdcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMi4zKTogdXRpbC9mb2N1c3RyYXAuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4uL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4uL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4vY29uZmlnJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnZm9jdXN0cmFwJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuZm9jdXN0cmFwJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTSU4gPSBgZm9jdXNpbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fVEFCID0gYGtleWRvd24udGFiJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBUQUJfS0VZID0gJ1RhYidcbmNvbnN0IFRBQl9OQVZfRk9SV0FSRCA9ICdmb3J3YXJkJ1xuY29uc3QgVEFCX05BVl9CQUNLV0FSRCA9ICdiYWNrd2FyZCdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYXV0b2ZvY3VzOiB0cnVlLFxuICB0cmFwRWxlbWVudDogbnVsbCAvLyBUaGUgZWxlbWVudCB0byB0cmFwIGZvY3VzIGluc2lkZSBvZlxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYXV0b2ZvY3VzOiAnYm9vbGVhbicsXG4gIHRyYXBFbGVtZW50OiAnZWxlbWVudCdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgRm9jdXNUcmFwIGV4dGVuZHMgQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZVxuICAgIHRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb24gPSBudWxsXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGFjdGl2YXRlKCkge1xuICAgIGlmICh0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hdXRvZm9jdXMpIHtcbiAgICAgIHRoaXMuX2NvbmZpZy50cmFwRWxlbWVudC5mb2N1cygpXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfS0VZKSAvLyBndWFyZCBhZ2FpbnN0IGluZmluaXRlIGZvY3VzIGxvb3BcbiAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4sIGV2ZW50ID0+IHRoaXMuX2hhbmRsZUZvY3VzaW4oZXZlbnQpKVxuICAgIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9UQUIsIGV2ZW50ID0+IHRoaXMuX2hhbmRsZUtleWRvd24oZXZlbnQpKVxuXG4gICAgdGhpcy5faXNBY3RpdmUgPSB0cnVlXG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIGlmICghdGhpcy5faXNBY3RpdmUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2VcbiAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9LRVkpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9oYW5kbGVGb2N1c2luKGV2ZW50KSB7XG4gICAgY29uc3QgeyB0cmFwRWxlbWVudCB9ID0gdGhpcy5fY29uZmlnXG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBkb2N1bWVudCB8fCBldmVudC50YXJnZXQgPT09IHRyYXBFbGVtZW50IHx8IHRyYXBFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnRzID0gU2VsZWN0b3JFbmdpbmUuZm9jdXNhYmxlQ2hpbGRyZW4odHJhcEVsZW1lbnQpXG5cbiAgICBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0cmFwRWxlbWVudC5mb2N1cygpXG4gICAgfSBlbHNlIGlmICh0aGlzLl9sYXN0VGFiTmF2RGlyZWN0aW9uID09PSBUQUJfTkFWX0JBQ0tXQVJEKSB7XG4gICAgICBlbGVtZW50c1tlbGVtZW50cy5sZW5ndGggLSAxXS5mb2N1cygpXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnRzWzBdLmZvY3VzKClcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlS2V5ZG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgIT09IFRBQl9LRVkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb24gPSBldmVudC5zaGlmdEtleSA/IFRBQl9OQVZfQkFDS1dBUkQgOiBUQUJfTkFWX0ZPUldBUkRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb2N1c1RyYXBcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMi4zKTogdXRpbC9pbmRleC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE1BWF9VSUQgPSAxXzAwMF8wMDBcbmNvbnN0IE1JTExJU0VDT05EU19NVUxUSVBMSUVSID0gMTAwMFxuY29uc3QgVFJBTlNJVElPTl9FTkQgPSAndHJhbnNpdGlvbmVuZCdcblxuLy8gU2hvdXQtb3V0IEFuZ3VzIENyb2xsIChodHRwczovL2dvby5nbC9weHdRR3ApXG5jb25zdCB0b1R5cGUgPSBvYmplY3QgPT4ge1xuICBpZiAob2JqZWN0ID09PSBudWxsIHx8IG9iamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGAke29iamVjdH1gXG4gIH1cblxuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkubWF0Y2goL1xccyhbYS16XSspL2kpWzFdLnRvTG93ZXJDYXNlKClcbn1cblxuLyoqXG4gKiBQdWJsaWMgVXRpbCBBUElcbiAqL1xuXG5jb25zdCBnZXRVSUQgPSBwcmVmaXggPT4ge1xuICBkbyB7XG4gICAgcHJlZml4ICs9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1BWF9VSUQpXG4gIH0gd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCkpXG5cbiAgcmV0dXJuIHByZWZpeFxufVxuXG5jb25zdCBnZXRTZWxlY3RvciA9IGVsZW1lbnQgPT4ge1xuICBsZXQgc2VsZWN0b3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy10YXJnZXQnKVxuXG4gIGlmICghc2VsZWN0b3IgfHwgc2VsZWN0b3IgPT09ICcjJykge1xuICAgIGxldCBocmVmQXR0cmlidXRlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuXG4gICAgLy8gVGhlIG9ubHkgdmFsaWQgY29udGVudCB0aGF0IGNvdWxkIGRvdWJsZSBhcyBhIHNlbGVjdG9yIGFyZSBJRHMgb3IgY2xhc3NlcyxcbiAgICAvLyBzbyBldmVyeXRoaW5nIHN0YXJ0aW5nIHdpdGggYCNgIG9yIGAuYC4gSWYgYSBcInJlYWxcIiBVUkwgaXMgdXNlZCBhcyB0aGUgc2VsZWN0b3IsXG4gICAgLy8gYGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JgIHdpbGwgcmlnaHRmdWxseSBjb21wbGFpbiBpdCBpcyBpbnZhbGlkLlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzMyMjczXG4gICAgaWYgKCFocmVmQXR0cmlidXRlIHx8ICghaHJlZkF0dHJpYnV0ZS5pbmNsdWRlcygnIycpICYmICFocmVmQXR0cmlidXRlLnN0YXJ0c1dpdGgoJy4nKSkpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgLy8gSnVzdCBpbiBjYXNlIHNvbWUgQ01TIHB1dHMgb3V0IGEgZnVsbCBVUkwgd2l0aCB0aGUgYW5jaG9yIGFwcGVuZGVkXG4gICAgaWYgKGhyZWZBdHRyaWJ1dGUuaW5jbHVkZXMoJyMnKSAmJiAhaHJlZkF0dHJpYnV0ZS5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgIGhyZWZBdHRyaWJ1dGUgPSBgIyR7aHJlZkF0dHJpYnV0ZS5zcGxpdCgnIycpWzFdfWBcbiAgICB9XG5cbiAgICBzZWxlY3RvciA9IGhyZWZBdHRyaWJ1dGUgJiYgaHJlZkF0dHJpYnV0ZSAhPT0gJyMnID8gaHJlZkF0dHJpYnV0ZS50cmltKCkgOiBudWxsXG4gIH1cblxuICByZXR1cm4gc2VsZWN0b3Jcbn1cblxuY29uc3QgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCA9IGVsZW1lbnQgPT4ge1xuICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgaWYgKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBudWxsXG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5jb25zdCBnZXRFbGVtZW50RnJvbVNlbGVjdG9yID0gZWxlbWVudCA9PiB7XG4gIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudClcblxuICByZXR1cm4gc2VsZWN0b3IgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6IG51bGxcbn1cblxuY29uc3QgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIC8vIEdldCB0cmFuc2l0aW9uLWR1cmF0aW9uIG9mIHRoZSBlbGVtZW50XG4gIGxldCB7IHRyYW5zaXRpb25EdXJhdGlvbiwgdHJhbnNpdGlvbkRlbGF5IH0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVxuXG4gIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uID0gTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICBjb25zdCBmbG9hdFRyYW5zaXRpb25EZWxheSA9IE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSlcblxuICAvLyBSZXR1cm4gMCBpZiBlbGVtZW50IG9yIHRyYW5zaXRpb24gZHVyYXRpb24gaXMgbm90IGZvdW5kXG4gIGlmICghZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gJiYgIWZsb2F0VHJhbnNpdGlvbkRlbGF5KSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIC8vIElmIG11bHRpcGxlIGR1cmF0aW9ucyBhcmUgZGVmaW5lZCwgdGFrZSB0aGUgZmlyc3RcbiAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uLnNwbGl0KCcsJylbMF1cbiAgdHJhbnNpdGlvbkRlbGF5ID0gdHJhbnNpdGlvbkRlbGF5LnNwbGl0KCcsJylbMF1cblxuICByZXR1cm4gKE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKyBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpKSAqIE1JTExJU0VDT05EU19NVUxUSVBMSUVSXG59XG5cbmNvbnN0IHRyaWdnZXJUcmFuc2l0aW9uRW5kID0gZWxlbWVudCA9PiB7XG4gIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoVFJBTlNJVElPTl9FTkQpKVxufVxuXG5jb25zdCBpc0VsZW1lbnQgPSBvYmplY3QgPT4ge1xuICBpZiAoIW9iamVjdCB8fCB0eXBlb2Ygb2JqZWN0ICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmplY3QuanF1ZXJ5ICE9PSAndW5kZWZpbmVkJykge1xuICAgIG9iamVjdCA9IG9iamVjdFswXVxuICB9XG5cbiAgcmV0dXJuIHR5cGVvZiBvYmplY3Qubm9kZVR5cGUgIT09ICd1bmRlZmluZWQnXG59XG5cbmNvbnN0IGdldEVsZW1lbnQgPSBvYmplY3QgPT4ge1xuICAvLyBpdCdzIGEgalF1ZXJ5IG9iamVjdCBvciBhIG5vZGUgZWxlbWVudFxuICBpZiAoaXNFbGVtZW50KG9iamVjdCkpIHtcbiAgICByZXR1cm4gb2JqZWN0LmpxdWVyeSA/IG9iamVjdFswXSA6IG9iamVjdFxuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdzdHJpbmcnICYmIG9iamVjdC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob2JqZWN0KVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuY29uc3QgaXNWaXNpYmxlID0gZWxlbWVudCA9PiB7XG4gIGlmICghaXNFbGVtZW50KGVsZW1lbnQpIHx8IGVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRJc1Zpc2libGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJ3Zpc2liaWxpdHknKSA9PT0gJ3Zpc2libGUnXG4gIC8vIEhhbmRsZSBgZGV0YWlsc2AgZWxlbWVudCBhcyBpdHMgY29udGVudCBtYXkgZmFsc2llIGFwcGVhciB2aXNpYmxlIHdoZW4gaXQgaXMgY2xvc2VkXG4gIGNvbnN0IGNsb3NlZERldGFpbHMgPSBlbGVtZW50LmNsb3Nlc3QoJ2RldGFpbHM6bm90KFtvcGVuXSknKVxuXG4gIGlmICghY2xvc2VkRGV0YWlscykge1xuICAgIHJldHVybiBlbGVtZW50SXNWaXNpYmxlXG4gIH1cblxuICBpZiAoY2xvc2VkRGV0YWlscyAhPT0gZWxlbWVudCkge1xuICAgIGNvbnN0IHN1bW1hcnkgPSBlbGVtZW50LmNsb3Nlc3QoJ3N1bW1hcnknKVxuICAgIGlmIChzdW1tYXJ5ICYmIHN1bW1hcnkucGFyZW50Tm9kZSAhPT0gY2xvc2VkRGV0YWlscykge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHN1bW1hcnkgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50SXNWaXNpYmxlXG59XG5cbmNvbnN0IGlzRGlzYWJsZWQgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAodHlwZW9mIGVsZW1lbnQuZGlzYWJsZWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZGlzYWJsZWRcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSAhPT0gJ2ZhbHNlJ1xufVxuXG5jb25zdCBmaW5kU2hhZG93Um9vdCA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hdHRhY2hTaGFkb3cpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLy8gQ2FuIGZpbmQgdGhlIHNoYWRvdyByb290IG90aGVyd2lzZSBpdCdsbCByZXR1cm4gdGhlIGRvY3VtZW50XG4gIGlmICh0eXBlb2YgZWxlbWVudC5nZXRSb290Tm9kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHJvb3QgPSBlbGVtZW50LmdldFJvb3ROb2RlKClcbiAgICByZXR1cm4gcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyByb290IDogbnVsbFxuICB9XG5cbiAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG4gICAgcmV0dXJuIGVsZW1lbnRcbiAgfVxuXG4gIC8vIHdoZW4gd2UgZG9uJ3QgZmluZCBhIHNoYWRvdyByb290XG4gIGlmICghZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiBmaW5kU2hhZG93Um9vdChlbGVtZW50LnBhcmVudE5vZGUpXG59XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG4vKipcbiAqIFRyaWNrIHRvIHJlc3RhcnQgYW4gZWxlbWVudCdzIGFuaW1hdGlvblxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm4gdm9pZFxuICpcbiAqIEBzZWUgaHR0cHM6Ly93d3cuY2hhcmlzdGhlby5pby9ibG9nLzIwMjEvMDIvcmVzdGFydC1hLWNzcy1hbmltYXRpb24td2l0aC1qYXZhc2NyaXB0LyNyZXN0YXJ0aW5nLWEtY3NzLWFuaW1hdGlvblxuICovXG5jb25zdCByZWZsb3cgPSBlbGVtZW50ID0+IHtcbiAgZWxlbWVudC5vZmZzZXRIZWlnaHQgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbn1cblxuY29uc3QgZ2V0alF1ZXJ5ID0gKCkgPT4ge1xuICBpZiAod2luZG93LmpRdWVyeSAmJiAhZG9jdW1lbnQuYm9keS5oYXNBdHRyaWJ1dGUoJ2RhdGEtYnMtbm8tanF1ZXJ5JykpIHtcbiAgICByZXR1cm4gd2luZG93LmpRdWVyeVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuY29uc3QgRE9NQ29udGVudExvYWRlZENhbGxiYWNrcyA9IFtdXG5cbmNvbnN0IG9uRE9NQ29udGVudExvYWRlZCA9IGNhbGxiYWNrID0+IHtcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgIC8vIGFkZCBsaXN0ZW5lciBvbiB0aGUgZmlyc3QgY2FsbCB3aGVuIHRoZSBkb2N1bWVudCBpcyBpbiBsb2FkaW5nIHN0YXRlXG4gICAgaWYgKCFET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzLmxlbmd0aCkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiBET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIERPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MucHVzaChjYWxsYmFjaylcbiAgfSBlbHNlIHtcbiAgICBjYWxsYmFjaygpXG4gIH1cbn1cblxuY29uc3QgaXNSVEwgPSAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlyID09PSAncnRsJ1xuXG5jb25zdCBkZWZpbmVKUXVlcnlQbHVnaW4gPSBwbHVnaW4gPT4ge1xuICBvbkRPTUNvbnRlbnRMb2FkZWQoKCkgPT4ge1xuICAgIGNvbnN0ICQgPSBnZXRqUXVlcnkoKVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICgkKSB7XG4gICAgICBjb25zdCBuYW1lID0gcGx1Z2luLk5BTUVcbiAgICAgIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bbmFtZV1cbiAgICAgICQuZm5bbmFtZV0gPSBwbHVnaW4ualF1ZXJ5SW50ZXJmYWNlXG4gICAgICAkLmZuW25hbWVdLkNvbnN0cnVjdG9yID0gcGx1Z2luXG4gICAgICAkLmZuW25hbWVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICAgICAgICQuZm5bbmFtZV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgICAgICAgcmV0dXJuIHBsdWdpbi5qUXVlcnlJbnRlcmZhY2VcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IGV4ZWN1dGUgPSBjYWxsYmFjayA9PiB7XG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjaygpXG4gIH1cbn1cblxuY29uc3QgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbiA9IChjYWxsYmFjaywgdHJhbnNpdGlvbkVsZW1lbnQsIHdhaXRGb3JUcmFuc2l0aW9uID0gdHJ1ZSkgPT4ge1xuICBpZiAoIXdhaXRGb3JUcmFuc2l0aW9uKSB7XG4gICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGR1cmF0aW9uUGFkZGluZyA9IDVcbiAgY29uc3QgZW11bGF0ZWREdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRyYW5zaXRpb25FbGVtZW50KSArIGR1cmF0aW9uUGFkZGluZ1xuXG4gIGxldCBjYWxsZWQgPSBmYWxzZVxuXG4gIGNvbnN0IGhhbmRsZXIgPSAoeyB0YXJnZXQgfSkgPT4ge1xuICAgIGlmICh0YXJnZXQgIT09IHRyYW5zaXRpb25FbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjYWxsZWQgPSB0cnVlXG4gICAgdHJhbnNpdGlvbkVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihUUkFOU0lUSU9OX0VORCwgaGFuZGxlcilcbiAgICBleGVjdXRlKGNhbGxiYWNrKVxuICB9XG5cbiAgdHJhbnNpdGlvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihUUkFOU0lUSU9OX0VORCwgaGFuZGxlcilcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25FbGVtZW50KVxuICAgIH1cbiAgfSwgZW11bGF0ZWREdXJhdGlvbilcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIHByZXZpb3VzL25leHQgZWxlbWVudCBvZiBhIGxpc3QuXG4gKlxuICogQHBhcmFtIHthcnJheX0gbGlzdCAgICBUaGUgbGlzdCBvZiBlbGVtZW50c1xuICogQHBhcmFtIGFjdGl2ZUVsZW1lbnQgICBUaGUgYWN0aXZlIGVsZW1lbnRcbiAqIEBwYXJhbSBzaG91bGRHZXROZXh0ICAgQ2hvb3NlIHRvIGdldCBuZXh0IG9yIHByZXZpb3VzIGVsZW1lbnRcbiAqIEBwYXJhbSBpc0N5Y2xlQWxsb3dlZFxuICogQHJldHVybiB7RWxlbWVudHxlbGVtfSBUaGUgcHJvcGVyIGVsZW1lbnRcbiAqL1xuY29uc3QgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQgPSAobGlzdCwgYWN0aXZlRWxlbWVudCwgc2hvdWxkR2V0TmV4dCwgaXNDeWNsZUFsbG93ZWQpID0+IHtcbiAgY29uc3QgbGlzdExlbmd0aCA9IGxpc3QubGVuZ3RoXG4gIGxldCBpbmRleCA9IGxpc3QuaW5kZXhPZihhY3RpdmVFbGVtZW50KVxuXG4gIC8vIGlmIHRoZSBlbGVtZW50IGRvZXMgbm90IGV4aXN0IGluIHRoZSBsaXN0IHJldHVybiBhbiBlbGVtZW50XG4gIC8vIGRlcGVuZGluZyBvbiB0aGUgZGlyZWN0aW9uIGFuZCBpZiBjeWNsZSBpcyBhbGxvd2VkXG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICByZXR1cm4gIXNob3VsZEdldE5leHQgJiYgaXNDeWNsZUFsbG93ZWQgPyBsaXN0W2xpc3RMZW5ndGggLSAxXSA6IGxpc3RbMF1cbiAgfVxuXG4gIGluZGV4ICs9IHNob3VsZEdldE5leHQgPyAxIDogLTFcblxuICBpZiAoaXNDeWNsZUFsbG93ZWQpIHtcbiAgICBpbmRleCA9IChpbmRleCArIGxpc3RMZW5ndGgpICUgbGlzdExlbmd0aFxuICB9XG5cbiAgcmV0dXJuIGxpc3RbTWF0aC5tYXgoMCwgTWF0aC5taW4oaW5kZXgsIGxpc3RMZW5ndGggLSAxKSldXG59XG5cbmV4cG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZXhlY3V0ZSxcbiAgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbixcbiAgZmluZFNoYWRvd1Jvb3QsXG4gIGdldEVsZW1lbnQsXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsXG4gIGdldGpRdWVyeSxcbiAgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQsXG4gIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQsXG4gIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50LFxuICBnZXRVSUQsXG4gIGlzRGlzYWJsZWQsXG4gIGlzRWxlbWVudCxcbiAgaXNSVEwsXG4gIGlzVmlzaWJsZSxcbiAgbm9vcCxcbiAgb25ET01Db250ZW50TG9hZGVkLFxuICByZWZsb3csXG4gIHRyaWdnZXJUcmFuc2l0aW9uRW5kLFxuICB0b1R5cGVcbn1cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMi4zKTogdXRpbC9zYW5pdGl6ZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCB1cmlBdHRyaWJ1dGVzID0gbmV3IFNldChbXG4gICdiYWNrZ3JvdW5kJyxcbiAgJ2NpdGUnLFxuICAnaHJlZicsXG4gICdpdGVtdHlwZScsXG4gICdsb25nZGVzYycsXG4gICdwb3N0ZXInLFxuICAnc3JjJyxcbiAgJ3hsaW5rOmhyZWYnXG5dKVxuXG5jb25zdCBBUklBX0FUVFJJQlVURV9QQVRURVJOID0gL15hcmlhLVtcXHctXSokL2lcblxuLyoqXG4gKiBBIHBhdHRlcm4gdGhhdCByZWNvZ25pemVzIGEgY29tbW9ubHkgdXNlZnVsIHN1YnNldCBvZiBVUkxzIHRoYXQgYXJlIHNhZmUuXG4gKlxuICogU2hvdXQtb3V0IHRvIEFuZ3VsYXIgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzEyLjIueC9wYWNrYWdlcy9jb3JlL3NyYy9zYW5pdGl6YXRpb24vdXJsX3Nhbml0aXplci50c1xuICovXG5jb25zdCBTQUZFX1VSTF9QQVRURVJOID0gL14oPzooPzpodHRwcz98bWFpbHRvfGZ0cHx0ZWx8ZmlsZXxzbXMpOnxbXiMmLzo/XSooPzpbIy8/XXwkKSkvaVxuXG4vKipcbiAqIEEgcGF0dGVybiB0aGF0IG1hdGNoZXMgc2FmZSBkYXRhIFVSTHMuIE9ubHkgbWF0Y2hlcyBpbWFnZSwgdmlkZW8gYW5kIGF1ZGlvIHR5cGVzLlxuICpcbiAqIFNob3V0LW91dCB0byBBbmd1bGFyIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi8xMi4yLngvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHNcbiAqL1xuY29uc3QgREFUQV9VUkxfUEFUVEVSTiA9IC9eZGF0YTooPzppbWFnZVxcLyg/OmJtcHxnaWZ8anBlZ3xqcGd8cG5nfHRpZmZ8d2VicCl8dmlkZW9cXC8oPzptcGVnfG1wNHxvZ2d8d2VibSl8YXVkaW9cXC8oPzptcDN8b2dhfG9nZ3xvcHVzKSk7YmFzZTY0LFtcXGQrL2Etel0rPSokL2lcblxuY29uc3QgYWxsb3dlZEF0dHJpYnV0ZSA9IChhdHRyaWJ1dGUsIGFsbG93ZWRBdHRyaWJ1dGVMaXN0KSA9PiB7XG4gIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBhdHRyaWJ1dGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKVxuXG4gIGlmIChhbGxvd2VkQXR0cmlidXRlTGlzdC5pbmNsdWRlcyhhdHRyaWJ1dGVOYW1lKSkge1xuICAgIGlmICh1cmlBdHRyaWJ1dGVzLmhhcyhhdHRyaWJ1dGVOYW1lKSkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4oU0FGRV9VUkxfUEFUVEVSTi50ZXN0KGF0dHJpYnV0ZS5ub2RlVmFsdWUpIHx8IERBVEFfVVJMX1BBVFRFUk4udGVzdChhdHRyaWJ1dGUubm9kZVZhbHVlKSlcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgYSByZWd1bGFyIGV4cHJlc3Npb24gdmFsaWRhdGVzIHRoZSBhdHRyaWJ1dGUuXG4gIHJldHVybiBhbGxvd2VkQXR0cmlidXRlTGlzdC5maWx0ZXIoYXR0cmlidXRlUmVnZXggPT4gYXR0cmlidXRlUmVnZXggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgLnNvbWUocmVnZXggPT4gcmVnZXgudGVzdChhdHRyaWJ1dGVOYW1lKSlcbn1cblxuZXhwb3J0IGNvbnN0IERlZmF1bHRBbGxvd2xpc3QgPSB7XG4gIC8vIEdsb2JhbCBhdHRyaWJ1dGVzIGFsbG93ZWQgb24gYW55IHN1cHBsaWVkIGVsZW1lbnQgYmVsb3cuXG4gICcqJzogWydjbGFzcycsICdkaXInLCAnaWQnLCAnbGFuZycsICdyb2xlJywgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTl0sXG4gIGE6IFsndGFyZ2V0JywgJ2hyZWYnLCAndGl0bGUnLCAncmVsJ10sXG4gIGFyZWE6IFtdLFxuICBiOiBbXSxcbiAgYnI6IFtdLFxuICBjb2w6IFtdLFxuICBjb2RlOiBbXSxcbiAgZGl2OiBbXSxcbiAgZW06IFtdLFxuICBocjogW10sXG4gIGgxOiBbXSxcbiAgaDI6IFtdLFxuICBoMzogW10sXG4gIGg0OiBbXSxcbiAgaDU6IFtdLFxuICBoNjogW10sXG4gIGk6IFtdLFxuICBpbWc6IFsnc3JjJywgJ3NyY3NldCcsICdhbHQnLCAndGl0bGUnLCAnd2lkdGgnLCAnaGVpZ2h0J10sXG4gIGxpOiBbXSxcbiAgb2w6IFtdLFxuICBwOiBbXSxcbiAgcHJlOiBbXSxcbiAgczogW10sXG4gIHNtYWxsOiBbXSxcbiAgc3BhbjogW10sXG4gIHN1YjogW10sXG4gIHN1cDogW10sXG4gIHN0cm9uZzogW10sXG4gIHU6IFtdLFxuICB1bDogW11cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplSHRtbCh1bnNhZmVIdG1sLCBhbGxvd0xpc3QsIHNhbml0aXplRnVuY3Rpb24pIHtcbiAgaWYgKCF1bnNhZmVIdG1sLmxlbmd0aCkge1xuICAgIHJldHVybiB1bnNhZmVIdG1sXG4gIH1cblxuICBpZiAoc2FuaXRpemVGdW5jdGlvbiAmJiB0eXBlb2Ygc2FuaXRpemVGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBzYW5pdGl6ZUZ1bmN0aW9uKHVuc2FmZUh0bWwpXG4gIH1cblxuICBjb25zdCBkb21QYXJzZXIgPSBuZXcgd2luZG93LkRPTVBhcnNlcigpXG4gIGNvbnN0IGNyZWF0ZWREb2N1bWVudCA9IGRvbVBhcnNlci5wYXJzZUZyb21TdHJpbmcodW5zYWZlSHRtbCwgJ3RleHQvaHRtbCcpXG4gIGNvbnN0IGVsZW1lbnRzID0gW10uY29uY2F0KC4uLmNyZWF0ZWREb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKSlcblxuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICBjb25zdCBlbGVtZW50TmFtZSA9IGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKVxuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhhbGxvd0xpc3QpLmluY2x1ZGVzKGVsZW1lbnROYW1lKSkge1xuICAgICAgZWxlbWVudC5yZW1vdmUoKVxuXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGNvbnN0IGF0dHJpYnV0ZUxpc3QgPSBbXS5jb25jYXQoLi4uZWxlbWVudC5hdHRyaWJ1dGVzKVxuICAgIGNvbnN0IGFsbG93ZWRBdHRyaWJ1dGVzID0gW10uY29uY2F0KGFsbG93TGlzdFsnKiddIHx8IFtdLCBhbGxvd0xpc3RbZWxlbWVudE5hbWVdIHx8IFtdKVxuXG4gICAgZm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgYXR0cmlidXRlTGlzdCkge1xuICAgICAgaWYgKCFhbGxvd2VkQXR0cmlidXRlKGF0dHJpYnV0ZSwgYWxsb3dlZEF0dHJpYnV0ZXMpKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZS5ub2RlTmFtZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY3JlYXRlZERvY3VtZW50LmJvZHkuaW5uZXJIVE1MXG59XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjIuMyk6IHV0aWwvc2Nyb2xsQmFyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4uL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi4vZG9tL21hbmlwdWxhdG9yJ1xuaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSAnLi9pbmRleCdcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBTRUxFQ1RPUl9GSVhFRF9DT05URU5UID0gJy5maXhlZC10b3AsIC5maXhlZC1ib3R0b20sIC5pcy1maXhlZCwgLnN0aWNreS10b3AnXG5jb25zdCBTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCA9ICcuc3RpY2t5LXRvcCdcbmNvbnN0IFBST1BFUlRZX1BBRERJTkcgPSAncGFkZGluZy1yaWdodCdcbmNvbnN0IFBST1BFUlRZX01BUkdJTiA9ICdtYXJnaW4tcmlnaHQnXG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIFNjcm9sbEJhckhlbHBlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBkb2N1bWVudC5ib2R5XG4gIH1cblxuICAvLyBQdWJsaWNcbiAgZ2V0V2lkdGgoKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy9pbm5lcldpZHRoI3VzYWdlX25vdGVzXG4gICAgY29uc3QgZG9jdW1lbnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICAgIHJldHVybiBNYXRoLmFicyh3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50V2lkdGgpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpXG4gICAgdGhpcy5fZGlzYWJsZU92ZXJGbG93KClcbiAgICAvLyBnaXZlIHBhZGRpbmcgdG8gZWxlbWVudCB0byBiYWxhbmNlIHRoZSBoaWRkZW4gc2Nyb2xsYmFyIHdpZHRoXG4gICAgdGhpcy5fc2V0RWxlbWVudEF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCwgUFJPUEVSVFlfUEFERElORywgY2FsY3VsYXRlZFZhbHVlID0+IGNhbGN1bGF0ZWRWYWx1ZSArIHdpZHRoKVxuICAgIC8vIHRyaWNrOiBXZSBhZGp1c3QgcG9zaXRpdmUgcGFkZGluZ1JpZ2h0IGFuZCBuZWdhdGl2ZSBtYXJnaW5SaWdodCB0byBzdGlja3ktdG9wIGVsZW1lbnRzIHRvIGtlZXAgc2hvd2luZyBmdWxsd2lkdGhcbiAgICB0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9GSVhFRF9DT05URU5ULCBQUk9QRVJUWV9QQURESU5HLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlICsgd2lkdGgpXG4gICAgdGhpcy5fc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQsIFBST1BFUlRZX01BUkdJTiwgY2FsY3VsYXRlZFZhbHVlID0+IGNhbGN1bGF0ZWRWYWx1ZSAtIHdpZHRoKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyh0aGlzLl9lbGVtZW50LCAnb3ZlcmZsb3cnKVxuICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCwgUFJPUEVSVFlfUEFERElORylcbiAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQsIFBST1BFUlRZX1BBRERJTkcpXG4gICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCwgUFJPUEVSVFlfTUFSR0lOKVxuICB9XG5cbiAgaXNPdmVyZmxvd2luZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRXaWR0aCgpID4gMFxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfZGlzYWJsZU92ZXJGbG93KCkge1xuICAgIHRoaXMuX3NhdmVJbml0aWFsQXR0cmlidXRlKHRoaXMuX2VsZW1lbnQsICdvdmVyZmxvdycpXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG4gIH1cblxuICBfc2V0RWxlbWVudEF0dHJpYnV0ZXMoc2VsZWN0b3IsIHN0eWxlUHJvcGVydHksIGNhbGxiYWNrKSB7XG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSB0aGlzLmdldFdpZHRoKClcbiAgICBjb25zdCBtYW5pcHVsYXRpb25DYWxsQmFjayA9IGVsZW1lbnQgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQgIT09IHRoaXMuX2VsZW1lbnQgJiYgd2luZG93LmlubmVyV2lkdGggPiBlbGVtZW50LmNsaWVudFdpZHRoICsgc2Nyb2xsYmFyV2lkdGgpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3NhdmVJbml0aWFsQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHkpXG4gICAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKHN0eWxlUHJvcGVydHkpXG4gICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHN0eWxlUHJvcGVydHksIGAke2NhbGxiYWNrKE51bWJlci5wYXJzZUZsb2F0KGNhbGN1bGF0ZWRWYWx1ZSkpfXB4YClcbiAgICB9XG5cbiAgICB0aGlzLl9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHNlbGVjdG9yLCBtYW5pcHVsYXRpb25DYWxsQmFjaylcbiAgfVxuXG4gIF9zYXZlSW5pdGlhbEF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5KSB7XG4gICAgY29uc3QgYWN0dWFsVmFsdWUgPSBlbGVtZW50LnN0eWxlLmdldFByb3BlcnR5VmFsdWUoc3R5bGVQcm9wZXJ0eSlcbiAgICBpZiAoYWN0dWFsVmFsdWUpIHtcbiAgICAgIE1hbmlwdWxhdG9yLnNldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSwgYWN0dWFsVmFsdWUpXG4gICAgfVxuICB9XG5cbiAgX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoc2VsZWN0b3IsIHN0eWxlUHJvcGVydHkpIHtcbiAgICBjb25zdCBtYW5pcHVsYXRpb25DYWxsQmFjayA9IGVsZW1lbnQgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHkpXG4gICAgICAvLyBXZSBvbmx5IHdhbnQgdG8gcmVtb3ZlIHRoZSBwcm9wZXJ0eSBpZiB0aGUgdmFsdWUgaXMgYG51bGxgOyB0aGUgdmFsdWUgY2FuIGFsc28gYmUgemVyb1xuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoc3R5bGVQcm9wZXJ0eSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIE1hbmlwdWxhdG9yLnJlbW92ZURhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSlcbiAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoc3R5bGVQcm9wZXJ0eSwgdmFsdWUpXG4gICAgfVxuXG4gICAgdGhpcy5fYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayhzZWxlY3RvciwgbWFuaXB1bGF0aW9uQ2FsbEJhY2spXG4gIH1cblxuICBfYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayhzZWxlY3RvciwgY2FsbEJhY2spIHtcbiAgICBpZiAoaXNFbGVtZW50KHNlbGVjdG9yKSkge1xuICAgICAgY2FsbEJhY2soc2VsZWN0b3IpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHNlbCBvZiBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yLCB0aGlzLl9lbGVtZW50KSkge1xuICAgICAgY2FsbEJhY2soc2VsKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxCYXJIZWxwZXJcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMi4zKTogdXRpbC9zd2lwZS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBDb25maWcgZnJvbSAnLi9jb25maWcnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4uL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IHsgZXhlY3V0ZSB9IGZyb20gJy4vaW5kZXgnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdzd2lwZSdcbmNvbnN0IEVWRU5UX0tFWSA9ICcuYnMuc3dpcGUnXG5jb25zdCBFVkVOVF9UT1VDSFNUQVJUID0gYHRvdWNoc3RhcnQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9UT1VDSE1PVkUgPSBgdG91Y2htb3ZlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfVE9VQ0hFTkQgPSBgdG91Y2hlbmQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9QT0lOVEVSRE9XTiA9IGBwb2ludGVyZG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1BPSU5URVJVUCA9IGBwb2ludGVydXAke0VWRU5UX0tFWX1gXG5jb25zdCBQT0lOVEVSX1RZUEVfVE9VQ0ggPSAndG91Y2gnXG5jb25zdCBQT0lOVEVSX1RZUEVfUEVOID0gJ3BlbidcbmNvbnN0IENMQVNTX05BTUVfUE9JTlRFUl9FVkVOVCA9ICdwb2ludGVyLWV2ZW50J1xuY29uc3QgU1dJUEVfVEhSRVNIT0xEID0gNDBcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgZW5kQ2FsbGJhY2s6IG51bGwsXG4gIGxlZnRDYWxsYmFjazogbnVsbCxcbiAgcmlnaHRDYWxsYmFjazogbnVsbFxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgZW5kQ2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknLFxuICBsZWZ0Q2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknLFxuICByaWdodENhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBTd2lwZSBleHRlbmRzIENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuXG4gICAgaWYgKCFlbGVtZW50IHx8ICFTd2lwZS5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2RlbHRhWCA9IDBcbiAgICB0aGlzLl9zdXBwb3J0UG9pbnRlckV2ZW50cyA9IEJvb2xlYW4od2luZG93LlBvaW50ZXJFdmVudClcbiAgICB0aGlzLl9pbml0RXZlbnRzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgZGlzcG9zZSgpIHtcbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWSlcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX3N0YXJ0KGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9zdXBwb3J0UG9pbnRlckV2ZW50cykge1xuICAgICAgdGhpcy5fZGVsdGFYID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYXG5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9ldmVudElzUG9pbnRlclBlblRvdWNoKGV2ZW50KSkge1xuICAgICAgdGhpcy5fZGVsdGFYID0gZXZlbnQuY2xpZW50WFxuICAgIH1cbiAgfVxuXG4gIF9lbmQoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5fZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaChldmVudCkpIHtcbiAgICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LmNsaWVudFggLSB0aGlzLl9kZWx0YVhcbiAgICB9XG5cbiAgICB0aGlzLl9oYW5kbGVTd2lwZSgpXG4gICAgZXhlY3V0ZSh0aGlzLl9jb25maWcuZW5kQ2FsbGJhY2spXG4gIH1cblxuICBfbW92ZShldmVudCkge1xuICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggPiAxID9cbiAgICAgIDAgOlxuICAgICAgZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy5fZGVsdGFYXG4gIH1cblxuICBfaGFuZGxlU3dpcGUoKSB7XG4gICAgY29uc3QgYWJzRGVsdGFYID0gTWF0aC5hYnModGhpcy5fZGVsdGFYKVxuXG4gICAgaWYgKGFic0RlbHRhWCA8PSBTV0lQRV9USFJFU0hPTEQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGFic0RlbHRhWCAvIHRoaXMuX2RlbHRhWFxuXG4gICAgdGhpcy5fZGVsdGFYID0gMFxuXG4gICAgaWYgKCFkaXJlY3Rpb24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV4ZWN1dGUoZGlyZWN0aW9uID4gMCA/IHRoaXMuX2NvbmZpZy5yaWdodENhbGxiYWNrIDogdGhpcy5fY29uZmlnLmxlZnRDYWxsYmFjaylcbiAgfVxuXG4gIF9pbml0RXZlbnRzKCkge1xuICAgIGlmICh0aGlzLl9zdXBwb3J0UG9pbnRlckV2ZW50cykge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1BPSU5URVJET1dOLCBldmVudCA9PiB0aGlzLl9zdGFydChldmVudCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfUE9JTlRFUlVQLCBldmVudCA9PiB0aGlzLl9lbmQoZXZlbnQpKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UKVxuICAgIH0gZWxzZSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hTVEFSVCwgZXZlbnQgPT4gdGhpcy5fc3RhcnQoZXZlbnQpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNITU9WRSwgZXZlbnQgPT4gdGhpcy5fbW92ZShldmVudCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hFTkQsIGV2ZW50ID0+IHRoaXMuX2VuZChldmVudCkpXG4gICAgfVxuICB9XG5cbiAgX2V2ZW50SXNQb2ludGVyUGVuVG91Y2goZXZlbnQpIHtcbiAgICByZXR1cm4gdGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMgJiYgKGV2ZW50LnBvaW50ZXJUeXBlID09PSBQT0lOVEVSX1RZUEVfUEVOIHx8IGV2ZW50LnBvaW50ZXJUeXBlID09PSBQT0lOVEVSX1RZUEVfVE9VQ0gpXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGlzU3VwcG9ydGVkKCkge1xuICAgIHJldHVybiAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN3aXBlXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjIuMyk6IHV0aWwvdGVtcGxhdGUtZmFjdG9yeS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7IERlZmF1bHRBbGxvd2xpc3QsIHNhbml0aXplSHRtbCB9IGZyb20gJy4vc2FuaXRpemVyJ1xuaW1wb3J0IHsgZ2V0RWxlbWVudCwgaXNFbGVtZW50IH0gZnJvbSAnLi4vdXRpbC9pbmRleCdcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IENvbmZpZyBmcm9tICcuL2NvbmZpZydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ1RlbXBsYXRlRmFjdG9yeSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYWxsb3dMaXN0OiBEZWZhdWx0QWxsb3dsaXN0LFxuICBjb250ZW50OiB7fSwgLy8geyBzZWxlY3RvciA6IHRleHQgLCAgc2VsZWN0b3IyIDogdGV4dDIgLCB9XG4gIGV4dHJhQ2xhc3M6ICcnLFxuICBodG1sOiBmYWxzZSxcbiAgc2FuaXRpemU6IHRydWUsXG4gIHNhbml0aXplRm46IG51bGwsXG4gIHRlbXBsYXRlOiAnPGRpdj48L2Rpdj4nXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBhbGxvd0xpc3Q6ICdvYmplY3QnLFxuICBjb250ZW50OiAnb2JqZWN0JyxcbiAgZXh0cmFDbGFzczogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgaHRtbDogJ2Jvb2xlYW4nLFxuICBzYW5pdGl6ZTogJ2Jvb2xlYW4nLFxuICBzYW5pdGl6ZUZuOiAnKG51bGx8ZnVuY3Rpb24pJyxcbiAgdGVtcGxhdGU6ICdzdHJpbmcnXG59XG5cbmNvbnN0IERlZmF1bHRDb250ZW50VHlwZSA9IHtcbiAgZW50cnk6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb258bnVsbCknLFxuICBzZWxlY3RvcjogJyhzdHJpbmd8ZWxlbWVudCknXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIFRlbXBsYXRlRmFjdG9yeSBleHRlbmRzIENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuX2NvbmZpZy5jb250ZW50KVxuICAgICAgLm1hcChjb25maWcgPT4gdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24oY29uZmlnKSlcbiAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgfVxuXG4gIGhhc0NvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29udGVudCgpLmxlbmd0aCA+IDBcbiAgfVxuXG4gIGNoYW5nZUNvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuX2NoZWNrQ29udGVudChjb250ZW50KVxuICAgIHRoaXMuX2NvbmZpZy5jb250ZW50ID0geyAuLi50aGlzLl9jb25maWcuY29udGVudCwgLi4uY29udGVudCB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHRvSHRtbCgpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRlbXBsYXRlV3JhcHBlci5pbm5lckhUTUwgPSB0aGlzLl9tYXliZVNhbml0aXplKHRoaXMuX2NvbmZpZy50ZW1wbGF0ZSlcblxuICAgIGZvciAoY29uc3QgW3NlbGVjdG9yLCB0ZXh0XSBvZiBPYmplY3QuZW50cmllcyh0aGlzLl9jb25maWcuY29udGVudCkpIHtcbiAgICAgIHRoaXMuX3NldENvbnRlbnQodGVtcGxhdGVXcmFwcGVyLCB0ZXh0LCBzZWxlY3RvcilcbiAgICB9XG5cbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRlbXBsYXRlV3JhcHBlci5jaGlsZHJlblswXVxuICAgIGNvbnN0IGV4dHJhQ2xhc3MgPSB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcuZXh0cmFDbGFzcylcblxuICAgIGlmIChleHRyYUNsYXNzKSB7XG4gICAgICB0ZW1wbGF0ZS5jbGFzc0xpc3QuYWRkKC4uLmV4dHJhQ2xhc3Muc3BsaXQoJyAnKSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGVtcGxhdGVcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX3R5cGVDaGVja0NvbmZpZyhjb25maWcpIHtcbiAgICBzdXBlci5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9jaGVja0NvbnRlbnQoY29uZmlnLmNvbnRlbnQpXG4gIH1cblxuICBfY2hlY2tDb250ZW50KGFyZykge1xuICAgIGZvciAoY29uc3QgW3NlbGVjdG9yLCBjb250ZW50XSBvZiBPYmplY3QuZW50cmllcyhhcmcpKSB7XG4gICAgICBzdXBlci5fdHlwZUNoZWNrQ29uZmlnKHsgc2VsZWN0b3IsIGVudHJ5OiBjb250ZW50IH0sIERlZmF1bHRDb250ZW50VHlwZSlcbiAgICB9XG4gIH1cblxuICBfc2V0Q29udGVudCh0ZW1wbGF0ZSwgY29udGVudCwgc2VsZWN0b3IpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZUVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKHNlbGVjdG9yLCB0ZW1wbGF0ZSlcblxuICAgIGlmICghdGVtcGxhdGVFbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb250ZW50ID0gdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24oY29udGVudClcblxuICAgIGlmICghY29udGVudCkge1xuICAgICAgdGVtcGxhdGVFbGVtZW50LnJlbW92ZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaXNFbGVtZW50KGNvbnRlbnQpKSB7XG4gICAgICB0aGlzLl9wdXRFbGVtZW50SW5UZW1wbGF0ZShnZXRFbGVtZW50KGNvbnRlbnQpLCB0ZW1wbGF0ZUVsZW1lbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmh0bWwpIHtcbiAgICAgIHRlbXBsYXRlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLl9tYXliZVNhbml0aXplKGNvbnRlbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0ZW1wbGF0ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50XG4gIH1cblxuICBfbWF5YmVTYW5pdGl6ZShhcmcpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLnNhbml0aXplID8gc2FuaXRpemVIdG1sKGFyZywgdGhpcy5fY29uZmlnLmFsbG93TGlzdCwgdGhpcy5fY29uZmlnLnNhbml0aXplRm4pIDogYXJnXG4gIH1cblxuICBfcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbicgPyBhcmcodGhpcykgOiBhcmdcbiAgfVxuXG4gIF9wdXRFbGVtZW50SW5UZW1wbGF0ZShlbGVtZW50LCB0ZW1wbGF0ZUVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLmh0bWwpIHtcbiAgICAgIHRlbXBsYXRlRWxlbWVudC5pbm5lckhUTUwgPSAnJ1xuICAgICAgdGVtcGxhdGVFbGVtZW50LmFwcGVuZChlbGVtZW50KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGVtcGxhdGVFbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudC50ZXh0Q29udGVudFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlbXBsYXRlRmFjdG9yeVxuIiwiaW1wb3J0ICdib290c3RyYXAtdGFibGUnIiwiLy9pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5pbXBvcnQgQWxlcnQgZnJvbSAnLi4vYm9vdHN0cmFwL2pzL2Rpc3QvYWxlcnQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9ib290c3RyYXAvanMvZGlzdC9idXR0b24nO1xuaW1wb3J0IENhcm91c2VsIGZyb20gJy4uL2Jvb3RzdHJhcC9qcy9kaXN0L2Nhcm91c2VsJztcbmltcG9ydCBDb2xsYXBzZSBmcm9tICcuLi9ib290c3RyYXAvanMvZGlzdC9jb2xsYXBzZSc7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSAgJy4uL2Jvb3RzdHJhcC9qcy9kaXN0L2Ryb3Bkb3duJztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9ib290c3RyYXAvanMvZGlzdC9tb2RhbCc7XG5pbXBvcnQgT2ZmY2FudmFzIGZyb20gJy4uL2Jvb3RzdHJhcC9qcy9kaXN0L29mZmNhbnZhcyc7XG5pbXBvcnQgUG9wb3ZlciBmcm9tICAnLi4vYm9vdHN0cmFwL2pzL2Rpc3QvcG9wb3Zlcic7XG5pbXBvcnQgU2Nyb2xsc3B5IGZyb20gJy4uL2Jvb3RzdHJhcC9qcy9kaXN0L3Njcm9sbHNweSc7XG5pbXBvcnQgVGFiIGZyb20gJy4uL2Jvb3RzdHJhcC9qcy9kaXN0L3RhYic7XG5pbXBvcnQgVG9hc3QgZnJvbSAnLi4vYm9vdHN0cmFwL2pzL2Rpc3QvdG9hc3QnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi4vYm9vdHN0cmFwL2pzL2Rpc3QvdG9vbHRpcCc7XG5cblxuZ2xvYmFsLkFsZXJ0ID0gQWxlcnQ7XG5nbG9iYWwuQnV0dG9uID0gQnV0dG9uO1xuZ2xvYmFsLkNhcm91c2VsID0gQ2Fyb3VzZWw7XG5nbG9iYWwuQ29sbGFwc2UgPSBDb2xsYXBzZTtcbmdsb2JhbC5Ecm9wZG93biA9IERyb3Bkb3duO1xuZ2xvYmFsLk1vZGFsID0gTW9kYWw7XG5nbG9iYWwuT2ZmY2FudmFzID0gT2ZmY2FudmFzO1xuZ2xvYmFsLlBvcG92ZXIgPSBQb3BvdmVyO1xuZ2xvYmFsLlNjcm9sbHNweSA9IFNjcm9sbHNweTtcbmdsb2JhbC5UYWIgPSBUYWI7XG5nbG9iYWwuVG9hc3QgPSBUb2FzdDtcbmdsb2JhbC5Ub29sdGlwID0gVG9vbHRpcDtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5nbG9iYWwuJCA9ICQ7XG5nbG9iYWwualF1ZXJ5ID0gJDsiLCIvLyBucG0gcGFja2FnZXNcbmltcG9ydCBQbG90bHkgZnJvbSAncGxvdGx5LmpzLWRpc3QnOyAvL2V4dGVybmFsXG5pbXBvcnQgJ2hhbW1lcmpzJztcbmltcG9ydCB7IERyb3B6b25lIH0gZnJvbSBcImRyb3B6b25lXCI7IC8vZXh0ZXJuYWxcbmNvbnN0IGRheWpzID0gcmVxdWlyZSgnZGF5anMtd2l0aC1wbHVnaW5zJyk7XG5pbXBvcnQgeyBjcmVhdGVQb3BwZXIgfSBmcm9tICdAcG9wcGVyanMvY29yZSc7XG5cbi8vIDEtc3RlcCB3b3JrYXJvdW5kIGZvciB0aGVzZSBucG0gcGFja2FnZXNcbmltcG9ydCAnLi9qcXVlcnknO1xuaW1wb3J0ICcuL2Jvb3RzdHJhcC10YWJsZSdcbmltcG9ydCAnLi9ib290c3RyYXAnXG5cbi8vIHNlbGVjdGVkIGJvb3RzdHJhcCBtb2R1bGVzXG4vL2ltcG9ydCB7IEFsZXJ0LCBCdXR0b24sIENhcm91c2VsLCBDb2xsYXBzZSwgRHJvcGRvd24sIE1vZGFsLCBPZmZjYW52YXMsIFBvcG92ZXIsIFNjcm9sbHNweSwgVGFiLCBUb2FzdCwgVG9vbHRpcH0gZnJvbSAnYm9vdHN0cmFwJztcblxuLyppbXBvcnQgQWxlcnQgZnJvbSAnLi4vYm9vdHN0cmFwL2pzL2Rpc3QvYWxlcnQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9ib290c3RyYXAvanMvZGlzdC9idXR0b24nO1xuaW1wb3J0IENhcm91c2VsIGZyb20gJy4uL2Jvb3RzdHJhcC9qcy9kaXN0L2Nhcm91c2VsJztcbmltcG9ydCBDb2xsYXBzZSBmcm9tICcuLi9ib290c3RyYXAvanMvZGlzdC9jb2xsYXBzZSc7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSAgJy4uL2Jvb3RzdHJhcC9qcy9kaXN0L2Ryb3Bkb3duJztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9ib290c3RyYXAvanMvZGlzdC9tb2RhbCc7XG5pbXBvcnQgT2ZmY2FudmFzIGZyb20gJy4uL2Jvb3RzdHJhcC9qcy9kaXN0L29mZmNhbnZhcyc7XG5pbXBvcnQgUG9wb3ZlciBmcm9tICAnLi4vYm9vdHN0cmFwL2pzL2Rpc3QvcG9wb3Zlcic7XG5pbXBvcnQgU2Nyb2xsc3B5IGZyb20gJy4uL2Jvb3RzdHJhcC9qcy9kaXN0L3Njcm9sbHNweSc7XG5pbXBvcnQgVGFiIGZyb20gJy4uL2Jvb3RzdHJhcC9qcy9kaXN0L3RhYic7XG5pbXBvcnQgVG9hc3QgZnJvbSAnLi4vYm9vdHN0cmFwL2pzL2Rpc3QvdG9hc3QnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi4vYm9vdHN0cmFwL2pzL2Rpc3QvdG9vbHRpcCc7Ki9cblxuLy8gc2FzcyBlbnRyeSBwb2ludFxuaW1wb3J0ICcuLi9zY3NzL3Byb2plY3RzLnNjc3MnO1xuXG4vLyBvdGhlciBmaWxlc1xuLy9pbXBvcnQgJy4uL2ZpeC9tYXBib3gtZ2wtdW5taW5pZmllZC5qcy5tYXAnO1xuLy9pbXBvcnQgJy4uL2ZpeC9iYXNlNjQtYXJyYXlidWZmZXIuZXM1LmpzLm1hcCc7XG4vL2ltcG9ydCAnLi4vZml4L2Ryb3B6b25lLm1qcy5tYXAnO1xuLy9pbXBvcnQgJy4uL2ZpeC9wZXJmb3JtYW5jZS1ub3cuanMubWFwJztcbnZhciBtMSA9IHJlcXVpcmUoXCIuLi9maXgvbWFwYm94LWdsLXVubWluaWZpZWQuanMubWFwXCIpO1xudmFyIG0yID0gcmVxdWlyZShcIi4uL2ZpeC9iYXNlNjQtYXJyYXlidWZmZXIuZXM1LmpzLm1hcFwiKTtcbnZhciBtMyA9IHJlcXVpcmUoXCIuLi9maXgvZHJvcHpvbmUubWpzLm1hcFwiKTtcbnZhciBtNCA9IHJlcXVpcmUoXCIuLi9maXgvcGVyZm9ybWFuY2Utbm93LmpzLm1hcFwiKTtcblxuLy8gY3VzdG9tIGpzXG5cbi8vIHRoZSByb290IG9iamVjdFxud2luZG93LkhhbmRsZXIgPSB7XG4gICAganM6e30sXG4gICAgY3NzOnt9XG59O1xuIFxuSGFuZGxlci5hbGVydCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgSGFuZGxlci5uYXZpZ2F0b3IucmVuYW1lKHZhbHVlWzBdLCB2YWx1ZVsxXSk7XG59XG5cbi8vIGV4OiB2aXotNS1lZGl0cGFuZVxuSGFuZGxlci5lbElEID0gZnVuY3Rpb24oY29tcG9uZW50TmFtZSwgaWQsIHJvbGUpIHtcbiAgICByZXR1cm4gY29tcG9uZW50TmFtZSArICctJyArIGlkICsgJy0nICsgcm9sZTtcbn1cbiBcbkhhbmRsZXIudGltZVJlZnJlc2ggPSBmdW5jdGlvbih0c3RhbXAsIHRhcikge1xuICAgIC8vdmFyIHJlbGF0aXZlVGltZSA9IHJlcXVpcmUoJ2RheWpzL3BsdWdpbi9yZWxhdGl2ZVRpbWUnKTtcbiAgICAvL2RheWpzLmV4dGVuZChyZWxhdGl2ZVRpbWUpO1xuICAgIHRhci5pbm5lckhUTUwgPSBkYXlqcyh0c3RhbXApLmZyb21Ob3coKTtcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgdGFyLmlubmVySFRNTCA9IGRheWpzKHRzdGFtcCkuZnJvbU5vdygpO1xuICAgIH0sIDYwMDAwKTtcbn1cbiBcbiAvLyBzaGFyZSBidXR0b25cbkhhbmRsZXIuc2hhcmVMaXN0ZW5lciA9IGZ1bmN0aW9uKGJ0blNlbGVjdG9yLCByZXNTZWxlY3RvciwgdGl0bGUsIHRleHQsIHVybCkge1xuICAgIGNvbnN0IHNoYXJlRGF0YSA9IHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgICB1cmw6IHVybFxuICAgIH1cbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ0blNlbGVjdG9yKTtcbiAgICAvL2NvbnN0IHJlc3VsdFBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlc1NlbGVjdG9yKTtcbiAgICBcbiAgICBpZighYnRuKSByZXR1cm47IFxuICAgIFxuICAgIC8vIFNoYXJlIG11c3QgYmUgdHJpZ2dlcmVkIGJ5IFwidXNlciBhY3RpdmF0aW9uXCJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBuYXZpZ2F0b3Iuc2hhcmUoc2hhcmVEYXRhKTtcbiAgICAgICAgICAgIC8vcmVzdWx0UGFyYS50ZXh0Q29udGVudCA9ICdNRE4gc2hhcmVkIHN1Y2Nlc3NmdWxseSc7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiAke2Vycn1gKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vKlxuZnVuY3Rpb24gc2hvd1Zpek9mZmNhbnZhcygpIHtcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24taXRlbS5hY3RpdmVcIik7XG4gICAgdmFyIG9mZmNhbnZhc0lEID0gIGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwib2ZmY2FudmFzSURcIik7XG4gICAgdmFyIG9mZmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9mZmNhbnZhc0lEKTtcbiAgICB2YXIgdml6T2ZmY2FudmFzID0gYm9vdHN0cmFwLk9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKG9mZmNhbnZhcyk7XG4gICAgdml6T2ZmY2FudmFzLnNob3coKTtcbn1cblxuZnVuY3Rpb24gdml6T2ZmY2FudmFzTWF4aW1pemUoYywgb2MpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9jKS5jbGFzc0xpc3QudG9nZ2xlKCdoLTEwMCcpO1xufSovXG5cbmNsYXNzIE5hdlRhcmdldCB7XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50LCBpZCwgbmFtZSkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5pZCA9IE51bWJlcihpZCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuICAgIFxuICAgIGdldCBjb21wSUQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudCArICctJyArIHRoaXMuaWQ7XG4gICAgfVxuICAgIFxuICAgIGdldCBlZGl0RWxlbWVudElEKCkge1xuICAgICAgICByZXR1cm4gSGFuZGxlci5lbElEKHRoaXMuY29tcG9uZW50LCB0aGlzLmlkLCAnZWRpdCcpO1xuICAgIH1cbiAgICBcbiAgICBnZXQgdGFiVHJpZ2dlckVsZW1lbnRJRCgpIHtcbiAgICAgICAgcmV0dXJuIEhhbmRsZXIuZWxJRCggdGhpcy5jb21wb25lbnQsIHRoaXMuaWQsICd0YWInKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IGNvcHlFbGVtZW50SUQoKSB7XG4gICAgICAgIHJldHVybiBIYW5kbGVyLmVsSUQodGhpcy5jb21wb25lbnQsIHRoaXMuaWQsICdjb3B5Jyk7XG4gICAgfVxufVxuXG4vL1RPRE86IEhhbmRsZSBjb21wb25lbnQta2V5IGNvbWJpbmF0aW9uc1xuY2xhc3MgTmF2aWdhdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy90aGlzLm5hdmlnYXRlQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgdGhpcy50YXJnZXRzID0gW107XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSAtMTtcbiAgICAgICAgdGhpcy5zaG93TmF2ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2hvd0VkaXQgPSBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgX25hdmlnYXRpb25DaGFuZ2VkKG5hbWUsIG5hdlRhcikge1xuICAgICAgICBjb25zdCBlID0gbmV3IEN1c3RvbUV2ZW50KCduYXZpZ2F0aW9uQ2hhbmdlZCcsIHtcbiAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yOiB0aGlzLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogdGhpcy50YXJnZXRzW3RoaXMuc2VsZWN0ZWRdLCBcbiAgICAgICAgICAgICAgICBpbmRleDogdGhpcy50YXJnZXRzLmZpbmRJbmRleCh0ID0+IHQuaWQgPT0gbmF2VGFyLmlkKSxcbiAgICAgICAgICAgICAgICBjb3VudDogdGhpcy50YXJnZXRzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBuYXZUYXI6IG5hdlRhclxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChlKTtcbiAgICB9XG5cbiAgICBnZXQgYWN0aXZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXRzW3RoaXMuc2VsZWN0ZWRdO1xuICAgIH1cbiAgICBcbiAgICBzZXQgYWN0aXZlKGlkKSB7XG4gICAgICAgIGlmKGlkID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgaSA9IHRoaXMudGFyZ2V0cy5maW5kSW5kZXgodCA9PiB0LmlkID09IGlkKTtcbiAgICAgICAgICAgIGlmKGkgPj0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBpO1xuICAgICAgICAgICAgICAgIHRoaXMuX25hdmlnYXRpb25DaGFuZ2VkKFwiYWN0aXZlXCIsIHRoaXMudGFyZ2V0c1t0aGlzLnNlbGVjdGVkXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZ2V0IGFsbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0cztcbiAgICB9XG5cbiAgICBnZXQgY291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldHMubGVuZ3RoO1xuICAgIH1cbiAgICBcbiAgICBhZGQoY29tcG9uZW50LCBpZCwgbmFtZSkge1xuICAgICAgICAvL3NraXAgaWYgYWxyZWFkeSBhZGRlZCB0byBhdm9pZCBndWkgZXJyb3JzXG4gICAgICAgIHZhciBpbmRleElmQWxyZWFkeUFkZGVkID0gdGhpcy50YXJnZXRzLmZpbmRJbmRleCh0ID0+IHQuaWQgPT0gaWQpO1xuICAgICAgICBpZiAoaW5kZXhJZkFscmVhZHlBZGRlZCA+PSAwKSB7cmV0dXJuO31cbiAgICAgICAgdmFyIGkgPSB0aGlzLnRhcmdldHMuZmluZEluZGV4KHQgPT4gdC5pZCA+IE51bWJlcihpZCkpO1xuICAgICAgICBpZiAoaSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0cy5wdXNoKG5ldyBOYXZUYXJnZXQoY29tcG9uZW50LCBpZCwgbmFtZSkpO1xuICAgICAgICAgICAgaSA9IHRoaXMudGFyZ2V0cy5sZW5ndGggLSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50YXJnZXRzLnNwbGljZShpLCAwLCBuZXcgTmF2VGFyZ2V0KGNvbXBvbmVudCwgaWQsIG5hbWUpKTtcbiAgICAgICAgfVxuICAgICAgICAvL3RoaXMuc2VsZWN0ZWQgPSBpO1xuICAgICAgICB0aGlzLl9uYXZpZ2F0aW9uQ2hhbmdlZChcImFkZFwiLCB0aGlzLnRhcmdldHNbaV0pO1xuICAgICAgICAvL3RoaXMuYWN0aXZlID0gaWQ7XG4gICAgfVxuICAgIFxuICAgIGFkZEFuZFJlc2V0KGNvbXBvbmVudCwgaWQsIG5hbWUpIHtcbiAgICAgICAgLy9za2lwIGlmIGFscmVhZHkgYWRkZWQgdG8gYXZvaWQgZ3VpIGVycm9yc1xuICAgICAgICB2YXIgaW5kZXhJZkFscmVhZHlBZGRlZCA9IHRoaXMudGFyZ2V0cy5maW5kSW5kZXgodCA9PiB0LmlkID09IGlkKTtcbiAgICAgICAgaWYgKGluZGV4SWZBbHJlYWR5QWRkZWQgPj0gMCkge3JldHVybjt9XG4gICAgICAgIHRoaXMuYWRkKGNvbXBvbmVudCwgaWQsIG5hbWUpO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRoaXMudGFyZ2V0c1swXS5pZDtcbiAgICB9XG5cbiAgICByZW1vdmUoaWQpIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLnRhcmdldHMuZmluZEluZGV4KHQgPT4gdC5pZCA9PSBpZCk7XG4gICAgICAgIGlmKGkpe1xuICAgICAgICAgICAgdmFyIHRhciA9IHRoaXMudGFyZ2V0cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB0aGlzLl9uYXZpZ2F0aW9uQ2hhbmdlZChcInJlbW92ZVwiLCB0YXJbMF0pO1xuICAgICAgICAgICAgaWYodGhpcy50YXJnZXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gXCJ1bmRlZmluZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAgICAgXG4gICAgZm9yd2FyZCgpIHtcbiAgICAgICAgaWYodGhpcy5zZWxlY3RlZCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZCArIDE7XG4gICAgICAgICAgICBpZih0aGlzLnNlbGVjdGVkID49IHRoaXMudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX25hdmlnYXRpb25DaGFuZ2VkKFwiYWN0aXZlXCIsIHRoaXMudGFyZ2V0c1t0aGlzLnNlbGVjdGVkXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiYWNrKCkge1xuICAgICAgICBpZih0aGlzLnNlbGVjdGVkID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkIC0gMTtcbiAgICAgICAgICAgIGlmKHRoaXMuc2VsZWN0ZWQgPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMudGFyZ2V0cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fbmF2aWdhdGlvbkNoYW5nZWQoXCJhY3RpdmVcIiwgdGhpcy50YXJnZXRzW3RoaXMuc2VsZWN0ZWRdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKlxuICAgIGp1bXAoaW5kZXgpIHtcbiAgICAgICAgaWYoaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBpbmRleDtcbiAgICAgICAgICAgIHRoaXMuX25hdmlnYXRpb25DaGFuZ2VkKFwiYWN0aXZlXCIsIHRoaXMudGFyZ2V0c1t0aGlzLnNlbGVjdGVkXSk7XG4gICAgICAgIH1cbiAgICB9Ki9cbiAgICBcbiAgICBqdW1wKGtleSkge1xuICAgICAgICB2YXIgdGFyID0gdGhpcy50YXJnZXRzLmZpbmQodCA9PiB0LmlkID09IGtleSk7XG4gICAgICAgIGlmKHRhciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMudGFyZ2V0cy5maW5kSW5kZXgodCA9PiB0LmlkID09IHRhci5pZCk7XG4gICAgICAgICAgICB0aGlzLl9uYXZpZ2F0aW9uQ2hhbmdlZChcImFjdGl2ZVwiLCB0YXIpO1xuICAgICAgICB9ICBcbiAgICB9XG4gICAgXG4gICAgcmVuYW1lKGtleSwgbmFtZSkge1xuICAgICAgICB2YXIgdGFyID0gdGhpcy50YXJnZXRzLmZpbmQodCA9PiB0LmlkID09IGtleSk7XG4gICAgICAgIGlmKHRhciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGFyLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgdGhpcy5fbmF2aWdhdGlvbkNoYW5nZWQoXCJuYW1lXCIsIHRhcik7XG4gICAgICAgIH0gICBcbiAgICB9XG4gICAgXG4gICAgLy8gbmVlZGVkIHRvIGNhdGNoIHNpbmdsZSBwYXJhbSBjYWxsIGZyb20gZGphbmdvLXVuaWNvcm4gdmlld1xuICAgIC8qcmVuYW1lKGFycnkpIHtcbiAgICAgICAgdGhpcy5yZW5hbWUoYXJyeVswXSwgYXJyeVsxXSk7ICAgXG4gICAgfSovXG4gICAgXG4gICAgdG9nZ2xlTmF2KCkge1xuICAgICAgICB0aGlzLnNob3dOYXYgPSAhdGhpcy5zaG93TmF2O1xuICAgICAgICB0aGlzLl9uYXZUb2dnbGVkKCk7XG4gICAgfVxuICAgIFxuICAgIHJlc2V0KCkge1xuICAgICAgICBhbGVydCh0aGlzLnRhcmdldHMubGVuZ3RoID4gMCk7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSB0aGlzLnRhcmdldHNbMF0uaWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgX25hdlRvZ2dsZWQoKSB7XG4gICAgICAgIGNvbnN0IGUgPSBuZXcgQ3VzdG9tRXZlbnQoJ25hdlRvZ2dsZWQnLCB7XG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnbmF2VG9nZ2xlZCcsXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yOiB0aGlzLFxuICAgICAgICAgICAgICAgIHNob3dOYXY6IHRoaXMuc2hvd05hdlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChlKTsgICAgXG4gICAgfVxuICAgIFxuICAgIHRvZ2dsZUVkaXQoKSB7XG4gICAgICAgIHRoaXMuc2hvd0VkaXQgPSAhdGhpcy5zaG93RWRpdDtcbiAgICAgICAgdGhpcy5fZWRpdFRvZ2dsZWQoKTtcbiAgICB9XG4gICAgXG4gICAgX2VkaXRUb2dnbGVkKCkge1xuICAgICAgICBjb25zdCBlID0gbmV3IEN1c3RvbUV2ZW50KCdlZGl0VG9nZ2xlZCcsIHtcbiAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdlZGl0VG9nZ2xlZCcsXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yOiB0aGlzLFxuICAgICAgICAgICAgICAgIHNob3dFZGl0OiB0aGlzLnNob3dFZGl0XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGUpOyAgICBcbiAgICB9XG4gICAgXG59O1xuXG5IYW5kbGVyLm5hdmlnYXRvciA9IG5ldyBOYXZpZ2F0b3IoKTtcbiBcbkhhbmRsZXIudGV4dF90cnVuY2F0ZSA9IGZ1bmN0aW9uKHN0ciwgbGVuZ3RoLCBlbmRpbmcpIHtcbiAgICBpZiAobGVuZ3RoID09IG51bGwpIHtcbiAgICAgICAgbGVuZ3RoID0gODtcbiAgICB9XG4gICAgaWYgKGVuZGluZyA9PSBudWxsKSB7XG4gICAgICAgIGVuZGluZyA9ICcuLi4nO1xuICAgIH1cbiAgICBpZiAoc3RyLmxlbmd0aCA+IGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cmluZygwLCBsZW5ndGggLSAxKSArIGVuZGluZztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH0gXG59XG5cbkhhbmRsZXIuYWRkVGFiID0gZnVuY3Rpb24obmF2VGFyLCBpbmRleCkge1xuICAgIC8vbWFrZSB0YWIgYnV0dG9uXG4gICAgY29uc3QgYmxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYi5pZCA9IG5hdlRhci50YWJUcmlnZ2VyRWxlbWVudElEOyAvL2lkPVwie3t2aWR9fS10YWJcIlxuICAgIGIudGV4dENvbnRlbnQgPSBuYXZUYXIubmFtZTtcbiAgICBiLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1pdGVtXCIpO1xuICAgIGIuc2V0QXR0cmlidXRlKFwiZGF0YS1icy10b2dnbGVcIiwgXCJ0YWJcIik7XG4gICAgYi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLXRhcmdldFwiLCBcIiNcIituYXZUYXIuY29tcElEKTtcbiAgICBiLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJ0YWJcIik7XG4gICAgYi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgIGIuc2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiLCBuYXZUYXIuY29tcElEKTtcbiAgICBiLnNldEF0dHJpYnV0ZShcImluZGV4XCIsIGluZGV4KTtcbiAgICBiLnNldEF0dHJpYnV0ZShcIm5hdlRhcklEXCIsIG5hdlRhci5pZCk7XG4gICAgYi5zZXRBdHRyaWJ1dGUoXCJvbmNsaWNrXCIsIFwiZXZlbnQucHJldmVudERlZmF1bHQoKTsgSGFuZGxlci5uYXZpZ2F0b3IuanVtcChcIiArIG5hdlRhci5pZCArIFwiKTtcIik7XG4gICAgXG4gICAgLy9tYWtlIGNvcHkgYW5jaG9yXG4gICAgY29uc3QgYWxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGEuaWQgPSBuYXZUYXIuY29weUVsZW1lbnRJRDsgLy9pZD1cInZpei17e3Zpei5wa319LWNvcHlcIiBcbiAgICBhLnRleHRDb250ZW50ID0gXCJDb3B5IFwiICsgbmF2VGFyLm5hbWU7XG4gICAgYS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24taXRlbVwiKTtcbiAgICBhLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjXCIpO1xuICAgIGEuc2V0QXR0cmlidXRlKFwib25jbGlja1wiLCBcIlVuaWNvcm4uY2FsbCgnYXBwJywgJ2NvcHlWaXonLCAnXCIgKyBuYXZUYXIuaWQgKyBcIicpO1wiKTsgLy91bmljb3JuOmNsaWNrPVwiY29weVZpeih7e3Zpei5wa319KVxuICAgIGEuc2V0QXR0cmlidXRlKFwiaW5kZXhcIiwgaW5kZXgpO1xuICAgIFxuICAgIC8vZWhcbiAgICAvL1RPRE9cbiAgICBcbiAgICAvL2FkZFxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWJCdXR0b25zXCIpO1xuICAgIHZhciBuYXZUYXJDb3VudCA9IEhhbmRsZXIubmF2aWdhdG9yLmNvdW50O1xuICAgIFxuICAgIGlmICh1bCAhPSBudWxsKSB7XG4gICAgICAgIC8vdWwuYXBwZW5kQ2hpbGQoYmxpKTtcbiAgICAgICAgY29uc3QgdG9wRml4ZWRJdGVtc0NvdW50ID0gMTtcbiAgICAgICAgdWwuaW5zZXJ0QmVmb3JlKGJsaSwgdWwuY2hpbGRyZW5bdG9wRml4ZWRJdGVtc0NvdW50ICsgaW5kZXhdKTtcbiAgICAgICAgYmxpLmFwcGVuZENoaWxkKGIpO1xuXG4gICAgICAgIC8vdWwuYXBwZW5kQ2hpbGQoYWxpKTtcbiAgICAgICAgY29uc3QgbWlkRml4ZWRJdGVtc0NvdW50ID0gMztcbiAgICAgICAgdWwuaW5zZXJ0QmVmb3JlKGFsaSwgdWwuY2hpbGRyZW5bdG9wRml4ZWRJdGVtc0NvdW50ICsgbWlkRml4ZWRJdGVtc0NvdW50ICsgbmF2VGFyQ291bnQgKyBpbmRleF0pO1xuICAgICAgICBhbGkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCduYXZpZ2F0aW9uQ2hhbmdlZCcsIChlKSA9PiB7XG4gICAgc3dpdGNoKGUuZGV0YWlsLm5hbWUpIHtcbiAgICAgICAgY2FzZSBcImFjdGl2ZVwiOiBcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBuYXZwYW5lbCB0ZXh0ICYgc2hvdyBhY3RpdmUgdGFiIFxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bkdyb3VwRHJvcDFcIik7XG4gICAgICAgICAgICBlbGVtZW50LmNoaWxkTm9kZXNbMF0ubm9kZVZhbHVlID0gSGFuZGxlci50ZXh0X3RydW5jYXRlKGUuZGV0YWlsLm5hdmlnYXRvci5hY3RpdmUubmFtZSkgKyBcIiBcIjtcbiAgICAgICAgICAgIHZhciB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS5kZXRhaWwuYWN0aXZlLnRhYlRyaWdnZXJFbGVtZW50SUQpO1xuICAgICAgICAgICAgLy9ib290c3RyYXAuVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UodCkuc2hvdygpO1xuICAgICAgICAgICAgVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UodCkuc2hvdygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJhZGRcIjpcbiAgICAgICAgICAgIC8vIGFkZCBUYWIgJiBDb3B5IGJ1dHRvbnNcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aXpDb3VudFwiKTtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gZS5kZXRhaWwuY291bnQgKyBcIiB2aXpzXCI7XG4gICAgICAgICAgICBIYW5kbGVyLmFkZFRhYihlLmRldGFpbC5uYXZUYXIsIGUuZGV0YWlsLmluZGV4KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwicmVtb3ZlXCI6XG4gICAgICAgICAgICAvLyByZW1vdmUgVGFiICYgQ29weSBidXR0b25zXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidml6Q291bnRcIik7XG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGUuZGV0YWlsLmNvdW50ICsgXCIgdml6c1wiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS5kZXRhaWwubmF2VGFyLmlkKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibmFtZVwiOlxuICAgICAgICAgICAgLy8gdXBkYXRlIG5hdnBhbmVsLCBUYWIgJiBDb3B5IGJ1dHRvbnMgXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuR3JvdXBEcm9wMVwiKTtcbiAgICAgICAgICAgIGVsZW1lbnQuZmlyc3RDaGlsZC5kYXRhID0gSGFuZGxlci50ZXh0X3RydW5jYXRlKGUuZGV0YWlsLm5hdlRhci5uYW1lKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUuZGV0YWlsLm5hdlRhci50YWJUcmlnZ2VyRWxlbWVudElEKS5pbm5lckhUTUwgPSBlLmRldGFpbC5uYXZUYXIubmFtZTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUuZGV0YWlsLm5hdlRhci5jb3B5RWxlbWVudElEKS5pbm5lckhUTUwgPSAnQ29weSAnICsgZS5kZXRhaWwubmF2VGFyLm5hbWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59KTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ25hdlRvZ2dsZWQnLCAoZSkgPT4ge1xuICAgIHN3aXRjaChlLmRldGFpbC5uYW1lKSB7XG4gICAgICAgIGNhc2UgXCJuYXZUb2dnbGVkXCI6IFxuICAgICAgICAgICAgLy9hbGVydChcIm5hdlRvZ2dsZWRcIik7XG4gICAgICAgICAgICAvL2Jvb3RzdHJhcC5Db2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdFBhbmVsXCIpKS50b2dnbGUoKTtcbiAgICAgICAgICAgIENvbGxhcHNlLmdldE9yQ3JlYXRlSW5zdGFuY2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0UGFuZWxcIikpLnRvZ2dsZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBhZG4gbmF2IHBhbmVcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xuICAgICAgICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhcl9jb250YWluZXJcIikuY2xhc3NMaXN0LnRvZ2dsZShcIm1haW4tY29udGVudFwiKTtcbiAgICAgICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS5kZXRhaWwubmF2aWdhdG9yLmFjdGl2ZS5uYXZFbGVtZW50SUQpLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xuICAgICAgICAgICAgLy8gaXMgc21hbGwgc2NyZWVuIGNhbGwgZHJvcHVwLCBlbHNlIGNhbGwgbGVmdCBwYW5lbFxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2VkaXRUb2dnbGVkJywgKGUpID0+IHtcbiAgICBzd2l0Y2goZS5kZXRhaWwubmFtZSkge1xuICAgICAgICBjYXNlIFwiZWRpdFRvZ2dsZWRcIjogXG4gICAgICAgICAgICAvLyB0b2dnbGUgcmlnaHQgcGFuZWxcbiAgICAgICAgICAgIC8vYm9vdHN0cmFwLkNvbGxhcHNlLmdldE9yQ3JlYXRlSW5zdGFuY2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodFBhbmVsXCIpKS50b2dnbGUoKTsgXG4gICAgICAgICAgICBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHRQYW5lbFwiKSkudG9nZ2xlKCk7IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAuLi5hbmQgZWRpdCBwYW5lc1xuICAgICAgICAgICAgY29uc3QgbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGVzdC1lZGl0XCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbFtpXS5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdHRvbS1uYXZiYXJcIikuY2xhc3NMaXN0LnRvZ2dsZShcImR5bmFtaWNcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS5kZXRhaWwubmF2aWdhdG9yLmFjdGl2ZS5lZGl0RWxlbWVudElEKS5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0pO1xuXG4vLyBDaGFuZ2UgRE9NIG9uIHNjcmVlbiBzaXplIGNoYW5nZVxuSGFuZGxlci5tZWRpYVF1ZXJ5ID0gZnVuY3Rpb24ocXVlcnksIGhhbmRsZVllcywgaGFuZGxlTm8pIHtcbiAgICAvLyBleDogXCIobWF4LXdpZHRoOiA3MDBweClcIlxuICAgIHZhciB4ID0gd2luZG93Lm1hdGNoTWVkaWEocXVlcnkpO1xuICAgIHZhciBmID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICh4Lm1hdGNoZXMpID8gaGFuZGxlWWVzKCkgOiBoYW5kbGVObygpO1xuICAgIH1cbiAgICAvLyBjYWxsIG9uY2UgaW1tZWRpYXRlbHkgdGhlbiBsaXN0ZW5cbiAgICBmKCk7XG4gICAgeC5hZGRMaXN0ZW5lcihmKTtcbn1cblxuLy8gQ2hhbmdlIHN0eWxlIG9uIHNjcmVlbiBzaXplIGNoYW5nZVxuSGFuZGxlci5tZWRpYVF1ZXJ5U3R5bGUgPSBmdW5jdGlvbihwYXJhbSkge1xuICAgIHZhciB7cXVlcnksIGVsZW0sIGF0dHIsIHllc1N0eWxlLCBub1N0eWxlfSA9IHBhcmFtO1xuICAgIHZhciBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKTtcbiAgICBIYW5kbGVyLm1lZGlhUXVlcnkoXG4gICAgICAgIHF1ZXJ5LCBcbiAgICAgICAgKCk9PnsgZS5zdHlsZS5zZXRQcm9wZXJ0eShhdHRyLCB5ZXNTdHlsZSk7IH0sIFxuICAgICAgICAoKT0+eyBlLnN0eWxlLnNldFByb3BlcnR5KGF0dHIsIG5vU3R5bGUpOyB9LFxuICAgICk7XG59XG4vKlxuSGFuZGxlci5vZmZzZXQgPSBmdW5jdGlvbihlbCkge1xuICAgIGJveCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiBib3gudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0IC0gZG9jRWxlbS5jbGllbnRUb3AsXG4gICAgICAgIGxlZnQ6IGJveC5sZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0IC0gZG9jRWxlbS5jbGllbnRMZWZ0XG4gICAgfTtcbn1cblxuSGFuZGxlci5maXhUb1ZpZXdwb3J0ID0gZnVuY3Rpb24oZWwsIHRvcCwgbGVmdCkge1xuICAgIHZhciBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCk7XG4gICAgZS5jc3MoXCJsZWZ0XCIsIGxlZnRPZmZzZXQgLSBlbGVtZW50Lm9mZnNldCgpLmxlZnQpO1xuICAgIGUuY3NzKFwidG9wXCIsIHRvcE9mZnNldCAtIGVsZW1lbnQub2Zmc2V0KCkudG9wKTsgICBcbn0qL1xuXG4vLyBDaGFuZ2UgRE9NIG9uIHNjcmVlbiBzaXplIGNoYW5nZVxuSGFuZGxlci5tZWRpYVF1ZXJ5U3dpdGNoID0gZnVuY3Rpb24ocGFyYW0pIHtcbiAgICB2YXIge3F1ZXJ5LCBlbGVtLCB5ZXNQYXJlbnQsIG5vUGFyZW50fSA9IHBhcmFtO1xuICAgIHZhciBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKTtcbiAgICB2YXIgeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoeWVzUGFyZW50KTtcbiAgICB2YXIgbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iobm9QYXJlbnQpO1xuICAgIEhhbmRsZXIubWVkaWFRdWVyeShcbiAgICAgICAgcXVlcnksIFxuICAgICAgICAoKT0+eyAvKmlmIChuLmNvbnRhaW5zKGUpKSovIHkuYXBwZW5kQ2hpbGQoZSk7IH0sIFxuICAgICAgICAoKT0+eyAvKmlmICh5LmNvbnRhaW5zKGUpKSovIG4uYXBwZW5kQ2hpbGQoZSk7IH0sXG4gICAgKTtcbn1cblxuSGFuZGxlci5zaG93VGFiID0gZnVuY3Rpb24ocXVlcnkpIHtcbiAgICBjb25zdCB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSk7XG4gICAgVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UodCkuc2hvdygpO1xufVxuXG5IYW5kbGVyLnZpekluaXQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgIC8vZ2V0IHBsb3QgZGl2LCB0YWJcbiAgICB2YXIgZCA9IG5vZGUuZGF0YXNldDtcbiAgICB2YXIgdmlkID0gXCJ2aXotXCIgKyBkLnl2SWQ7XG4gICAgdmFyIHBsb3RfZGl2ID0gXCJwbG90Qm94LVwiICsgdmlkO1xuICAgIHZhciBwbG90X2Rpdl9lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBsb3RfZGl2KTtcbiAgICB2YXIgdGFiX2RpdiA9IHZpZCArIFwiLXRhYlwiO1xuICAgIC8vdmFyIHRhYl9kaXZfZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWJfZGl2KTtcblxuICAgIC8vZ2V0IGpzb25cbiAgICB2YXIganNvbl9lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieW91dml6OmRhdGE6XCIgKyB2aWQpO1xuICAgIHZhciBqc29uID0gSlNPTi5wYXJzZShqc29uX2VsLnRleHRDb250ZW50KTtcblxuICAgIC8vbWFrZSBwbG90XG4gICAgdmFyIGRhdGEgPSBqc29uLnBsb3RfZGF0YTtcbiAgICB2YXIgbGF5b3V0ID0ganNvbi5wbG90X2xheW91dDtcbiAgICAvL3ZhciBjb25maWcgPSB7cmVzcG9uc2l2ZTogdHJ1ZX07XG4gICAgLy9sYXlvdXQuaGVpZ2h0ID0gMzkyO1xuICAgIGxheW91dC53aWR0aCA9IHBsb3RfZGl2X2VsLmNsaWVudFdpZHRoO1xuICAgIGxheW91dC5oZWlnaHQgPSBwbG90X2Rpdl9lbC5jbGllbnRIZWlnaHQ7XG4gICAgXG4gICAgbGF5b3V0Lm1hcmdpbi50ID0gMTU7XG4gICAgbGF5b3V0Lm1hcmdpbi5iID0gNjg7XG4gICAgbGF5b3V0Lm1hcmdpbi5yID0gMTA7XG4gICAgbGF5b3V0LnNob3dsZWdlbmQgPSB0cnVlO1xuICAgIGxheW91dC5sZWdlbmQgPSB7XG4gICAgICAgIHg6IDEsXG4gICAgICAgIHhhbmNob3I6ICdyaWdodCcsXG4gICAgICAgIHk6IDEsXG4gICAgICAgIGJnY29sb3I6ICcjMDAwMDAwMDAnLFxuICAgIH07XG4gICAgbGF5b3V0LmNsaWNrbW9kZSA9ICdub25lJztcbiAgICBsYXlvdXQuZHJhZ21vZGUgPSBmYWxzZTtcbiAgICBcbiAgICB2YXIgY29uZmlnID0ge2Rpc3BsYXlNb2RlQmFyOiBmYWxzZSwgc2Nyb2xsWm9vbTogZmFsc2V9O1xuICAgIFBsb3RseS5yZWFjdChwbG90X2RpdiwgZGF0YSwgbGF5b3V0LCBjb25maWcpO1xuXG4gICAgLy8gcG9wb3ZlciBzZXR1cFxuICAgIGNvbnN0IGxpc3QgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJzLXRvZ2dsZT1cInBvcG92ZXJcIl0nKSlcbiAgICBsaXN0Lm1hcCgoZWwpID0+IHtcbiAgICAgIGxldCBvcHRzID0ge1xuICAgICAgICBhbmltYXRpb246IGZhbHNlLFxuICAgICAgfVxuICAgICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1icy1jb250ZW50LWlkJykpIHtcbiAgICAgICAgb3B0cy5jb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLWNvbnRlbnQtaWQnKSkuaW5uZXJIVE1MO1xuICAgICAgICBvcHRzLmh0bWwgPSB0cnVlO1xuICAgICAgICBvcHRzLnNhbml0aXplID0gZmFsc2U7XG4gICAgICB9XG4gICAgICAvL25ldyBib290c3RyYXAuUG9wb3ZlcihlbCwgb3B0cyk7XG4gICAgICBuZXcgUG9wb3ZlcihlbCwgb3B0cyk7XG4gICAgfSlcblxuICAgIC8vdmFyIHl2bW9kYWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInl2bW9kYWxcIik7XG4gICAgdmFyIHl2bW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnl2bW9kYWwudml6Jyk7XG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB5dm1vZGFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHl2bW9kYWxzW2ldKTsgXG4gICAgfVxuXG4gICAgbGV0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgICAgICBmb3IobGV0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgICAgICAgIC8vIG9ubHkgcmVzcG9uZCBpZiBkaXNwbGF5ZWQgdG8gc2F2ZSBjcHVcbiAgICAgICAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwbG90X2Rpdl9lbCwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShcImRpc3BsYXlcIikgIT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuY29udGVudEJveFNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRmlyZWZveCBpbXBsZW1lbnRzIGBjb250ZW50Qm94U2l6ZWAgYXMgYSBzaW5nbGUgY29udGVudCByZWN0LCByYXRoZXIgdGhhbiBhbiBhcnJheVxuICAgICAgICAgICAgICAgICAgICAvL2NvbnN0IGNvbnRlbnRCb3hTaXplID0gQXJyYXkuaXNBcnJheShlbnRyeS5jb250ZW50Qm94U2l6ZSkgPyBlbnRyeS5jb250ZW50Qm94U2l6ZVswXSA6IGVudHJ5LmNvbnRlbnRCb3hTaXplO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGxvdF9kaXZfZWwuY2xpZW50V2lkdGggPj0gMTAgfHwgcGxvdF9kaXZfZWwuY2xpZW50SGVpZ2h0ID49IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXBkYXRlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBwbG90X2Rpdl9lbC5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHBsb3RfZGl2X2VsLmNsaWVudEhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsb3RseS5yZWxheW91dChwbG90X2RpdiwgdXBkYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbG90X2Rpdl9lbC5jbGllbnRXaWR0aCA+PSAxMCB8fCBwbG90X2Rpdl9lbC5jbGllbnRIZWlnaHQgPj0gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1cGRhdGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHBsb3RfZGl2X2VsLmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogcGxvdF9kaXZfZWwuY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgUGxvdGx5LnJlbGF5b3V0KHBsb3RfZGl2LCB1cGRhdGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgbGV0IG1pZFBhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pZFBhbmVsJyk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShtaWRQYW5lbCk7XG4gICAgXG4gICAgLy8gYWRkIGxpc3RlbmVyIHRvIGdlbmVyYXRlZCBkb21cbiAgICB2YXIgdGFiX2Rpdl9lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhYl9kaXYpO1xuICAgIHRhYl9kaXZfZWwuYWRkRXZlbnRMaXN0ZW5lcignc2hvd24uYnMudGFiJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuaWQgPT09IHRhYl9kaXYpIHsgLy8gbmV3bHkgYWN0aXZhdGVkIHRhYlxuICAgICAgICAvL2V2ZW50LnJlbGF0ZWRUYXJnZXQgLy8gcHJldmlvdXMgYWN0aXZlIHRhYlxuICAgICAgICAgICAgaWYgKHBsb3RfZGl2X2VsLmNsaWVudFdpZHRoID49IDEwIHx8IHBsb3RfZGl2X2VsLmNsaWVudEhlaWdodCA+PSAxMCkge1xuICAgICAgICAgICAgICAgIHZhciB1cGRhdGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBwbG90X2Rpdl9lbC5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBwbG90X2Rpdl9lbC5jbGllbnRIZWlnaHRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIFBsb3RseS5yZWxheW91dChwbG90X2RpdiwgdXBkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIC8vbmVzdGVkIGRhdGF0YWJsZSBpbml0XG4gICAgXG4gICAgJCgnI3RhYmxlJykuYm9vdHN0cmFwVGFibGUoKTsgLy8gaW5pdCB2aWEgamF2YXNjcmlwdFxuXG4gICAgLy8gZGF0YXRhYmxlIG1vZGFsXG4gICAgLy8gYXBwZW5kIG1vZGFscyB0byBwcmV2ZW50IHotbGF5ZXIgaXNzdWVzXG4gICAgdmFyIHl2bW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnl2bW9kYWwnKTtcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHl2bW9kYWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoeXZtb2RhbHNbaV0pOyBcbiAgICB9XG4gICAgLypcbiAgICBIYW5kbGVyLm1lZGlhUXVlcnlTd2l0Y2goe1xuICAgICAgICBxdWVyeTogJyhtYXgtd2lkdGg6IDk5MnB4KScsXG4gICAgICAgIGVsZW06ICcjc3dpdGNoJyxcbiAgICAgICAgeWVzUGFyZW50OiAnLm9mZmNhbnZhcy1ib3R0b20nLFxuICAgICAgICBub1BhcmVudDogJyNyaWdodFBhbmVsIGRpdicsXG4gICAgfSk7Ki9cbn1cblxuSGFuZGxlci5kYXRhZnJhbWVJbml0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICB2YXIgZCA9IG5vZGUuZGF0YXNldDtcbiAgICBjb25zdCBtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2RhbFRhYmxlXCIpO1xuICAgIFxuICAgIGlmIChtKSB7XG4gICAgICAgIC8vYm9vdHN0cmFwLk1vZGFsLmdldE9yQ3JlYXRlSW5zdGFuY2UobSkuZGlzcG9zZSgpO1xuICAgICAgICAvL2Jvb3RzdHJhcC5Nb2RhbC5nZXRPckNyZWF0ZUluc3RhbmNlKG0pO1xuICAgICAgICBNb2RhbC5nZXRPckNyZWF0ZUluc3RhbmNlKG0pLmRpc3Bvc2UoKTtcbiAgICAgICAgTW9kYWwuZ2V0T3JDcmVhdGVJbnN0YW5jZShtKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5XCIpLmFwcGVuZENoaWxkKG0pO1xuICAgICAgICB2YXIgJHRhYmxlID0gJCgnI3RhYmxlJyk7XG5cbiAgICAgICAgLy92YXIgZGZTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAvL2RmU2NyaXB0LnNyYyA9ICd7JSBzdGF0aWMgXCJwcm9qZWN0cy9qcy9ib290c3RyYXAtdGFibGUubWluLmpzXCIgJX0nO1xuICAgICAgICAvL2RmU2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICAgICAgLy8gICAgSGFuZGxlci5qcy5idCA9IHRydWU7XG4gICAgICAgIC8vfSk7XG4gICAgICAgIC8vbm9kZS5hcHBlbmRDaGlsZChkZlNjcmlwdCk7XG4gICAgICAgIFxuICAgICAgICAvLyBKUXVlcnkgZm9yIEJvb3RzdHJhcCBUYWJsZSBjb21wYXRpYmlsaXR5XG4gICAgICAgIGxldCBteVZhciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYoXG4gICAgICAgICAgICAgICAgLy9IYW5kbGVyLnNjcmlwdHNbJ2J0YyddICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICBIYW5kbGVyLmpzLmJ0ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAkdGFibGUuYm9vdHN0cmFwVGFibGUgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChteVZhcik7XG4gICAgICAgICAgICAgICAgLy8kKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8vICAgIG0uYWRkRXZlbnRMaXN0ZW5lcignc2hvd24uYnMubW9kYWwnLGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgJHRhYmxlLmJvb3RzdHJhcFRhYmxlKCdyZXNldFZpZXcnKTtcbiAgICAgICAgICAgICAgICAvLyAgICB9KTtcbiAgICAgICAgICAgICAgICAvL30pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAyNTApO1xuICAgIH1cbn1cblxuSGFuZGxlci52aXpyZXBvcnRJbml0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICB2YXIgZCA9IG5vZGUuZGF0YXNldDtcbiAgICAvL2dldCBtb2RhbFxuICAgIGNvbnN0IG1yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2RhbFJlcG9ydFwiKTtcbiAgICBpZiAobXIpIHtcbiAgICAgICAgLy9ib290c3RyYXAuTW9kYWwuZ2V0T3JDcmVhdGVJbnN0YW5jZShtcikuZGlzcG9zZSgpO1xuICAgICAgICAvL2Jvb3RzdHJhcC5Nb2RhbC5nZXRPckNyZWF0ZUluc3RhbmNlKG1yKTtcbiAgICAgICAgTW9kYWwuZ2V0T3JDcmVhdGVJbnN0YW5jZShtcikuZGlzcG9zZSgpO1xuICAgICAgICBNb2RhbC5nZXRPckNyZWF0ZUluc3RhbmNlKG1yKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5XCIpLmFwcGVuZENoaWxkKG1yKTtcblxuICAgICAgICAvLyBpbml0IHZpenNcbiAgICAgICAgLy92YXIgYXJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi55di12aXpyZXBvcnQgZGl2IHNjcmlwdFwiKTtcbiAgICAgICAgdmFyIGFyciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIueXYtdml6cmVwb3J0XCIpO1xuICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IGFyci5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL2dldCBwbG90IGRpdiwgdGFiXG4gICAgICAgICAgICBjb25zdCByZXAgPSBhcnJbbl07XG4gICAgICAgICAgICBjb25zdCByaWQgPSByZXAuaWQ7XG4gICAgICAgICAgICBjb25zdCBwbG90X2RpdiA9IFwicGxvdEJveC1yZXBvcnQtXCIgKyByaWQ7XG4gICAgICAgICAgICBjb25zdCBwbG90X2Rpdl9lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBsb3RfZGl2KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9nZXQganNvblxuICAgICAgICAgICAgY29uc3QganNvbl9lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieW91dml6OmRhdGE6cmVwb3J0LVwiICsgcmlkKTtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKGpzb25fZWwudGV4dENvbnRlbnQpO1xuXG4gICAgICAgICAgICAvL21ha2UgcGxvdFxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGpzb24ucGxvdF9kYXRhO1xuICAgICAgICAgICAgY29uc3QgbGF5b3V0ID0ganNvbi5wbG90X2xheW91dDtcbiAgICAgICAgICAgIC8vdmFyIGNvbmZpZyA9IHtyZXNwb25zaXZlOiB0cnVlfTtcbiAgICAgICAgICAgIGNvbnN0IHBsb3RfZGl2X291dGVyX2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmlkKTtcbiAgICAgICAgICAgIGxheW91dC53aWR0aCA9IHBsb3RfZGl2X291dGVyX2VsLmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgLy9sYXlvdXQuaGVpZ2h0ID0gcGxvdF9kaXZfb3V0ZXJfZWwuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgbGF5b3V0LmhlaWdodCA9IDI1MDtcbiAgICAgICAgICAgIGxheW91dC5tYXJnaW4udCA9IDE1O1xuICAgICAgICAgICAgbGF5b3V0Lm1hcmdpbi5iID0gNjg7XG4gICAgICAgICAgICBsYXlvdXQubWFyZ2luLnIgPSAxMDtcbiAgICAgICAgICAgIGxheW91dC5zaG93bGVnZW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIGxheW91dC5sZWdlbmQgPSB7XG4gICAgICAgICAgICAgICAgeDogMSxcbiAgICAgICAgICAgICAgICB4YW5jaG9yOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgIHk6IDEsXG4gICAgICAgICAgICAgICAgYmdjb2xvcjogJyMwMDAwMDAwMCcsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbGF5b3V0LmNsaWNrbW9kZSA9ICdub25lJztcbiAgICAgICAgICAgIGxheW91dC5kcmFnbW9kZSA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc3QgY29uZmlnID0ge2Rpc3BsYXlNb2RlQmFyOiBmYWxzZSwgc2Nyb2xsWm9vbTogZmFsc2V9O1xuICAgICAgICAgICAgUGxvdGx5LnJlYWN0KHBsb3RfZGl2LCBkYXRhLCBsYXlvdXQsIGNvbmZpZyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vYWRkIHJlc2l6ZSBsaXN0ZW5lclxuICAgICAgICAgICAgLyp3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUocGxvdF9kaXZfZWwpLmRpc3BsYXkgIT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICAgICAgIHZhciB1cGRhdGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBwbG90X2Rpdl9lbC5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBwbG90X2Rpdl9lbC5jbGllbnRIZWlnaHRcbiAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgaWYodXBkYXRlLndpZHRoICE9PSAwICYmIHVwZGF0ZS5oZWlnaHQgIT09IDApIFBsb3RseS5yZWxheW91dChwbG90X2RpdiwgdXBkYXRlKTtcbiAgICAgICAgICAgICAgICAgLy9ldmFsKHNjcmlwdC5pbm5lckhUTUwpO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pOyovXG4gICAgICAgICAgICBsZXQgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS5jb250ZW50Qm94U2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmlyZWZveCBpbXBsZW1lbnRzIGBjb250ZW50Qm94U2l6ZWAgYXMgYSBzaW5nbGUgY29udGVudCByZWN0LCByYXRoZXIgdGhhbiBhbiBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zdCBjb250ZW50Qm94U2l6ZSA9IEFycmF5LmlzQXJyYXkoZW50cnkuY29udGVudEJveFNpemUpID8gZW50cnkuY29udGVudEJveFNpemVbMF0gOiBlbnRyeS5jb250ZW50Qm94U2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbG90X2Rpdl9vdXRlcl9lbC5jbGllbnRXaWR0aCA+PSAxMCB8fCBwbG90X2Rpdl9vdXRlcl9lbC5jbGllbnRIZWlnaHQgPj0gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBwbG90X2Rpdl9vdXRlcl9lbC5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBwbG90X2Rpdl9vdXRlcl9lbC5jbGllbnRIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsb3RseS5yZWxheW91dChwbG90X2RpdiwgdXBkYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbG90X2Rpdl9vdXRlcl9lbC5jbGllbnRXaWR0aCA+PSAxMCB8fCBwbG90X2Rpdl9vdXRlcl9lbC5jbGllbnRIZWlnaHQgPj0gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBwbG90X2Rpdl9vdXRlcl9lbC5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBwbG90X2Rpdl9vdXRlcl9lbC5jbGllbnRIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsb3RseS5yZWxheW91dChwbG90X2RpdiwgdXBkYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvL2xldCBtaWRQYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaWRQYW5lbCcpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShwbG90X2Rpdl9lbCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHJlc2l6ZSBvbiBtb2RhbC5zaG93XG4gICAgICAgICAgICBtci5hZGRFdmVudExpc3RlbmVyKCdzaG93LmJzLm1vZGFsJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBsb3RfZGl2X291dGVyX2VsLmNsaWVudFdpZHRoID49IDEwIHx8IHBsb3RfZGl2X291dGVyX2VsLmNsaWVudEhlaWdodCA+PSAxMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogcGxvdF9kaXZfZWwuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHBsb3RfZGl2X2VsLmNsaWVudEhlaWdodFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBQbG90bHkucmVsYXlvdXQocGxvdF9kaXYsIHVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vcXIgY29kZVxuICAgICAgICAvKlxuICAgICAgICB2YXIgcXJjb2RlID0gbmV3IFFSQ29kZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpei1xcmNvZGUte3t2aWR9fVwiKSwge1xuICAgICAgICAgICAgdGV4dDogXCJ7e3JlcG9ydC5nZXRfYWJzb2x1dGVfdXJsfX1cIixcbiAgICAgICAgICAgIHdpZHRoOiA2MCxcbiAgICAgICAgICAgIGhlaWdodDogNjAsXG4gICAgICAgICAgICBjb2xvckRhcmsgOiBcIiMwMDAwMDBcIixcbiAgICAgICAgICAgIGNvbG9yTGlnaHQgOiBcIiNmZmZmZmZcIixcbiAgICAgICAgICAgIGNvcnJlY3RMZXZlbCA6IFFSQ29kZS5Db3JyZWN0TGV2ZWwuSFxuICAgICAgICB9KTsqL1xuICAgICAgICBcbiAgICAgICAgLy8gc2hhcmUgYnV0dG9uXG4gICAgICAgIC8qXG4gICAgICAgIGNvbnN0IHNoYXJlRGF0YSA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAne3tyZXBvcnQubmFtZX19JyxcbiAgICAgICAgICAgIHRleHQ6ICdDaGVjayBvdXQgdGhpcyBkYXRhIHZpenVhbGl6YXRpb24gb24gWW91Vml6IScsXG4gICAgICAgICAgICB1cmw6ICd7e3JlcG9ydC5nZXRfYWJzb2x1dGVfdXJsfX0nXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlcG9ydC1idXR0b24tc2hhcmUnKTtcbiAgICAgICAgY29uc3QgcmVzdWx0UGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXBvcnQtc2hhcmUtcmVzdWx0Jyk7XG4gICAgICAgIC8vIFNoYXJlIG11c3QgYmUgdHJpZ2dlcmVkIGJ5IFwidXNlciBhY3RpdmF0aW9uXCJcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBuYXZpZ2F0b3Iuc2hhcmUoc2hhcmVEYXRhKTtcbiAgICAgICAgICAgICAgICAvL3Jlc3VsdFBhcmEudGV4dENvbnRlbnQgPSAnTUROIHNoYXJlZCBzdWNjZXNzZnVsbHknO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiAke2Vycn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgICovXG4gICAgICAgIEhhbmRsZXIuc2hhcmVMaXN0ZW5lcignI3JlcG9ydC1idXR0b24tc2hhcmUnLCAnbnVsbCcsICdSZXBvcnQnLCAnQ2hlY2sgb3V0IHRoaXMgZGF0YSB2aXp1YWxpemF0aW9uIG9uIFlvdVZpeiEnLCAnaHR0cHM6Ly95b3V2aXouYXBwJyk7XG4gICAgfVxufVxuXG5IYW5kbGVyLmRzVGh1bWJJbml0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICB2YXIgZCA9IG5vZGUuZGF0YXNldDtcbiAgICAvLyBpbml0IHZpenNcbiAgICAvL3ZhciBhcnIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnl2LXZpenJlcG9ydCBkaXYgc2NyaXB0XCIpO1xuICAgIHZhciBzID0gXCIjY2Fyb3VzZWwtXCIuY29uY2F0KGQueXZJZCwgXCIgLnl2LWRzdGh1bWJcIik7XG4gICAgdmFyIGFyciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocyk7XG4gICAgZm9yICh2YXIgbiA9IDA7IG4gPCBhcnIubGVuZ3RoOyBuKyspIHtcblxuICAgICAgICAvL2dldCBwbG90IGRpdiwgdGFiXG4gICAgICAgIGNvbnN0IHRodW1iID0gYXJyW25dO1xuICAgICAgICBjb25zdCB0aHVtYmlkID0gdGh1bWIuaWQ7XG4gICAgICAgIGNvbnN0IHBsb3RfZGl2ID0gXCJwbG90Qm94LWRzdGh1bWItXCIgKyB0aHVtYmlkO1xuICAgICAgICBjb25zdCBwbG90X2Rpdl9lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBsb3RfZGl2KTtcblxuICAgICAgICAvL2dldCBqc29uXG4gICAgICAgIGNvbnN0IGpzb25fZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInlvdXZpejpkYXRhOmRzdGh1bWItXCIgKyB0aHVtYmlkKTtcbiAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UoanNvbl9lbC50ZXh0Q29udGVudCk7XG5cbiAgICAgICAgLy9tYWtlIHBsb3RcbiAgICAgICAgY29uc3QgZGF0YSA9IGpzb24ucGxvdF9kYXRhO1xuICAgICAgICBjb25zdCBsYXlvdXQgPSBqc29uLnBsb3RfbGF5b3V0O1xuICAgICAgICAvL3ZhciBjb25maWcgPSB7cmVzcG9uc2l2ZTogdHJ1ZX07XG4gICAgICAgIC8vY29uc3QgcGxvdF9kaXZfb3V0ZXJfZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aHVtYmlkKTtcbiAgICAgICAgY29uc3QgcGxvdF9kaXZfb3V0ZXJfZWwgPSB0aHVtYi5wYXJlbnRFbGVtZW50O1xuICAgICAgICBsYXlvdXQud2lkdGggPSBwbG90X2Rpdl9vdXRlcl9lbC5jbGllbnRXaWR0aDtcbiAgICAgICAgLy9sYXlvdXQuaGVpZ2h0ID0gcGxvdF9kaXZfb3V0ZXJfZWwuY2xpZW50SGVpZ2h0O1xuICAgICAgICBsYXlvdXQuaGVpZ2h0ID0gMjUwO1xuICAgICAgICBsYXlvdXQubWFyZ2luLnQgPSAxNTtcbiAgICAgICAgbGF5b3V0Lm1hcmdpbi5iID0gNjg7XG4gICAgICAgIGxheW91dC5tYXJnaW4uciA9IDEwO1xuICAgICAgICBsYXlvdXQuc2hvd2xlZ2VuZCA9IGZhbHNlO1xuICAgICAgICAvL2lmKGxheW91dC54YXhpcy52aXNpYmxlKSBsYXlvdXQueGF4aXMudmlzaWJsZSA9IGZhbHNlOyBcbiAgICAgICAgaWYobGF5b3V0LnhheGlzLnNob3d0aWNrbGFiZWxzKXtcbiAgICAgICAgICAgIGxheW91dC54YXhpcy5zaG93dGlja2xhYmVscyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vaWYobGF5b3V0LnlheGlzLnZpc2libGUpIGxheW91dC55YXhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIGlmKGxheW91dC55YXhpcy5zaG93dGlja2xhYmVscyl7IFxuICAgICAgICAgICAgbGF5b3V0LnlheGlzLnNob3d0aWNrbGFiZWxzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLypsYXlvdXQubGVnZW5kID0ge1xuICAgICAgICAgICAgeDogMSxcbiAgICAgICAgICAgIHhhbmNob3I6ICdyaWdodCcsXG4gICAgICAgICAgICB5OiAxLFxuICAgICAgICAgICAgYmdjb2xvcjogJyMwMDAwMDAwMCcsXG4gICAgICAgIH07Ki9cbiAgICAgICAgbGF5b3V0LmNsaWNrbW9kZSA9ICdub25lJztcbiAgICAgICAgbGF5b3V0LmRyYWdtb2RlID0gZmFsc2U7XG4gICAgICAgIGxheW91dC5ob3Zlcm1vZGUgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY29uZmlnID0ge2Rpc3BsYXlNb2RlQmFyOiBmYWxzZSwgc2Nyb2xsWm9vbTogZmFsc2V9O1xuICAgICAgICBcbiAgICAgICAgLy92YXIgaW1nX2pwZz0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pwZy1leHBvcnQnKTtcbiAgICAgICAgUGxvdGx5LnJlYWN0KHBsb3RfZGl2LCBkYXRhLCBsYXlvdXQsIGNvbmZpZyk7XG4gICAgICAgIFxuICAgICAgICAvLyBzdGF0aWMgaW1hZ2UgaW4ganBnIGZvcm1hdFxuICAgICAgICAvKlxuXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgICAgZnVuY3Rpb24oZ2QpXG4gICAgICAgICAgICAge1xuICAgICAgICAgICAgICBQbG90bHkudG9JbWFnZShnZCx7aGVpZ2h0OjMwMCx3aWR0aDozMDB9KVxuICAgICAgICAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKHVybClcbiAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICBpbWdfanBnLnNyYyA9IHVybDtcbiAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAqL1xuXG4gICAgICAgIC8vYWRkIHJlc2l6ZSBsaXN0ZW5lclxuICAgICAgICAvKndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBsb3RfZGl2X2VsKS5kaXNwbGF5ICE9PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgIHZhciB1cGRhdGUgPSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHBsb3RfZGl2X2VsLmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogcGxvdF9kaXZfZWwuY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICBpZih1cGRhdGUud2lkdGggIT09IDAgJiYgdXBkYXRlLmhlaWdodCAhPT0gMCkgUGxvdGx5LnJlbGF5b3V0KHBsb3RfZGl2LCB1cGRhdGUpO1xuICAgICAgICAgICAgIC8vZXZhbChzY3JpcHQuaW5uZXJIVE1MKTtcbiAgICAgICAgIH1cbiAgICAgICAgfSk7Ki9cbiAgICAgICAgbGV0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgICAgICAgICAgZm9yKGxldCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmNvbnRlbnRCb3hTaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZpcmVmb3ggaW1wbGVtZW50cyBgY29udGVudEJveFNpemVgIGFzIGEgc2luZ2xlIGNvbnRlbnQgcmVjdCwgcmF0aGVyIHRoYW4gYW4gYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zdCBjb250ZW50Qm94U2l6ZSA9IEFycmF5LmlzQXJyYXkoZW50cnkuY29udGVudEJveFNpemUpID8gZW50cnkuY29udGVudEJveFNpemVbMF0gOiBlbnRyeS5jb250ZW50Qm94U2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsb3RfZGl2X291dGVyX2VsLmNsaWVudFdpZHRoID49IDEwIHx8IHBsb3RfZGl2X291dGVyX2VsLmNsaWVudEhlaWdodCA+PSAxMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBwbG90X2Rpdl9vdXRlcl9lbC5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHBsb3RfZGl2X291dGVyX2VsLmNsaWVudEhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsb3RseS5yZWxheW91dChwbG90X2RpdiwgdXBkYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbG90X2Rpdl9vdXRlcl9lbC5jbGllbnRXaWR0aCA+PSAxMCB8fCBwbG90X2Rpdl9vdXRlcl9lbC5jbGllbnRIZWlnaHQgPj0gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogcGxvdF9kaXZfb3V0ZXJfZWwuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBwbG90X2Rpdl9vdXRlcl9lbC5jbGllbnRIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBQbG90bHkucmVsYXlvdXQocGxvdF9kaXYsIHVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vbGV0IG1pZFBhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pZFBhbmVsJyk7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUocGxvdF9kaXZfZWwpO1xuXG4gICAgICAgIC8vIHJlc2l6ZSBvbiBtb2RhbC5zaG93XG4gICAgICAgIC8qXG4gICAgICAgIG1yLmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZSA9IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogcGxvdF9kaXZfZWwuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBwbG90X2Rpdl9lbC5jbGllbnRIZWlnaHRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBQbG90bHkucmVsYXlvdXQocGxvdF9kaXYsIHVwZGF0ZSk7XG4gICAgICAgIH0pOyovXG5cbiAgICB9XG59XG4gXG5IYW5kbGVyLmNvbXBvbmVudEluaXQgPSBhc3luYyBmdW5jdGlvbihub2RlX2FycmF5KSB7XG4gICAgbm9kZV9hcnJheS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgIGlmKEhhbmRsZXJbbm9kZS5kYXRhc2V0Lnl2SW5pdF0pe1xuICAgICAgICAgICAgSGFuZGxlcltub2RlLmRhdGFzZXQueXZJbml0XShub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFjdGl2YXRlIGJ1dHRvblxuICAgICAgICBpZihub2RlLmRhdGFzZXQueXZCdXR0b24gIT0gXCJcIil7XG4gICAgICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5vZGUuZGF0YXNldC55dkJ1dHRvbikpe1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iobm9kZS5kYXRhc2V0Lnl2QnV0dG9uKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbkhhbmRsZXIubG9hZFlWQ29tcG9uZW50cyA9IGFzeW5jIGZ1bmN0aW9uIChyb290RWxlbWVudElEKSB7XG4gICAgXG4gICAgbGV0IG5vZGVMaXN0O1xuICAgIFxuICAgIGlmKHJvb3RFbGVtZW50SUQpIHtcbiAgICAgICAgbm9kZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHJvb3RFbGVtZW50SUQuY29uY2F0KFwiIFwiLCBcIi55di1jb21wb25lbnRcIikpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbm9kZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnl2LWNvbXBvbmVudFwiKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgbm9kZXMgPSBBcnJheS5mcm9tKG5vZGVMaXN0KTtcbiAgICBcbiAgICAvLzEuU29ydCBpbnRvIGdyb3VwczogZGF0YS15di1jb21wb25lbnQgLi4uTkVXICAgIFxuICAgIEhhbmRsZXIuY29tcG9uZW50cyA9IHt9O1xuICAgIFxuICAgIGF3YWl0IFByb21pc2UuYWxsKG5vZGVzLm1hcChhc3luYyAobm9kZSkgPT4ge1xuICAgICAgICAvLyBnZXQgdW5pY29ybiBkYXRhLCBhZGQgdG8gbm9kZVxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKG5vZGUuZGF0YXNldC55dkxpbmspO1xuICAgICAgICBub2RlLmlubmVySFRNTCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gJyMnICsgbm9kZS5pZCArICcgc2NyaXB0W2lkXj1cInVuaWNvcm46ZGF0YVwiXSc7XG4gICAgICAgIHZhciB1X3NjcmlwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICBpZih1X3NjcmlwdCkge1xuICAgICAgICAgICAgbm9kZS51bmljb3JuX2RhdGEgPSBKU09OLnBhcnNlKHVfc2NyaXB0LnRleHRDb250ZW50KTtcbiAgICAgICAgfVxuICAgICAgICAvL3VuaWNvcm4gaW5pdFxuICAgICAgICBVbmljb3JuLmNvbXBvbmVudEluaXQobm9kZS51bmljb3JuX2RhdGEpO1xuICAgICAgICAvLyBncm91cCBjb21wb25lbnRzXG4gICAgICAgIHZhciBjID0gbm9kZS5kYXRhc2V0Wyd5dkNvbXBvbmVudCddO1xuICAgICAgICBpZighSGFuZGxlci5jb21wb25lbnRzW2NdKSB7XG4gICAgICAgICAgICBIYW5kbGVyLmNvbXBvbmVudHNbY10gPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBIYW5kbGVyLmNvbXBvbmVudHNbY11bbm9kZS5pZF0gPSBub2RlO1xuICAgIH0pKTtcbiAgICBcbiAgICBPYmplY3Qua2V5cyhIYW5kbGVyLmNvbXBvbmVudHMpLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgLy8gcHJvY2VzcyBieSBncm91cFxuICAgICAgICBzd2l0Y2goYykge1xuICAgICAgICAgICAgY2FzZSAndml6JzogXG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhIYW5kbGVyLmNvbXBvbmVudHNbY10pLmZvckVhY2goKHYpPT57XG4gICAgICAgICAgICAgICAgICAgIEhhbmRsZXIubmF2aWdhdG9yLmFkZChcInZpelwiLCB2LmRhdGFzZXQueXZJZCwgdi51bmljb3JuX2RhdGEuZGF0YS52aXoubmFtZSk7IC8vbm9kZS51bmljb3JuX2RhdGEuZGF0YS52aXoubmFtZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIEhhbmRsZXIubmF2aWdhdG9yLmFjdGl2ZSA9IEhhbmRsZXIubmF2aWdhdG9yLnRhcmdldHNbMF0uaWQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZXBvcnQnOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGF0YWZyYW1lJzpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvLyBjdXN0b20gaW5pdCBlYWNoIGl0ZW1cbiAgICAgICAgSGFuZGxlci5jb21wb25lbnRJbml0KE9iamVjdC52YWx1ZXMoSGFuZGxlci5jb21wb25lbnRzW2NdKSk7XG4gICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvLyAgYXdhaXQgZ2l2ZVByaXplVG9QbGF5ZXIocGxheWVyKTtcbiAgICAvL30pKTtcbiAgICAvKlxuICAgIHZhciBwID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBub2Rlcy5mb3JFYWNoKGFzeW5jIChub2RlKSA9PiB7XG4gICAgICAgICAgICAvLyBnZXQgdW5pY29ybiBkYXRhLCBhZGQgdG8gbm9kZVxuICAgICAgICAgICAgZmV0Y2goXCIuXCIgKyBub2RlLmRhdGFzZXQueXZMaW5rKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCkgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBkYXRhO1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RvciA9ICcjJyArIG5vZGUuaWQgKyAnIHNjcmlwdFtpZF49XCJ1bmljb3JuOmRhdGFcIl0nO1xuICAgICAgICAgICAgICAgIHZhciB1X3NjcmlwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIGlmKHVfc2NyaXB0KSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudW5pY29ybl9kYXRhID0gSlNPTi5wYXJzZSh1X3NjcmlwdC50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vdW5pY29ybiBpbml0XG4gICAgICAgICAgICAgICAgVW5pY29ybi5jb21wb25lbnRJbml0KG5vZGUudW5pY29ybl9kYXRhKTsgIFxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGR1bW15ID0+IHtcbiAgICAgICAgICAgICAgICAvLyBncm91cCBjb21wb25lbnRzXG4gICAgICAgICAgICAgICAgdmFyIGMgPSBub2RlLmRhdGFzZXRbJ3l2Q29tcG9uZW50J107XG4gICAgICAgICAgICAgICAgaWYoIUhhbmRsZXIuY29tcG9uZW50c1tjXSkge1xuICAgICAgICAgICAgICAgICAgICBIYW5kbGVyLmNvbXBvbmVudHNbY10gPSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgSGFuZGxlci5jb21wb25lbnRzW2NdW25vZGUuaWRdID0gbm9kZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICB9KTsqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAvLyAgIDIuSW5pdDogZ2VuZXJpYywgY3VzdG9tICAuLi5TQU1FXG4vKiAgICBub2Rlcy5mb3JFYWNoKGFzeW5jIChub2RlKSA9PiB7XG4gICAgICAgIHZhciBub2RlX2RhdGEgPSBub2RlLmRhdGFzZXQ7XG5cbiAgICAgICAgLy9mZXRjaChcIi4vXCIgKyBub2RlX2RhdGEueXZDb21wb25lbnQgKyBcIi9cIiArIG5vZGVfZGF0YS55dklkKVxuICAgICAgICBmZXRjaChcIi5cIiArIG5vZGVfZGF0YS55dkxpbmspXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCkgXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBkYXRhO1xuICAgICAgICAgICAgbGV0IHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYod2luZG93LlVuaWNvcm4gIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgIC8vIHN0b3AgbG9vcFxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBpbml0IHVuaWNvcm4gY29tcG9uZW50IGZvciBhamF4IGVkaXRpbmdcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVfc2NyaXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBub2RlLmlkICsgJyBzY3JpcHRbaWRePVwidW5pY29ybjpkYXRhXCJdJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHVfc2NyaXB0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1ID0gVW5pY29ybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluaXQgdV9jb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHUuY29tcG9uZW50SW5pdChKU09OLnBhcnNlKHVfc2NyaXB0LnRleHRDb250ZW50KSk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2F2ZSB1X2RhdGEgZm9yIGxhdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnVuaWNvcm5fZGF0YSA9IEpTT04ucGFyc2UodV9zY3JpcHQudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBpbml0IGNvbXBvbmVudCB0byBzZXR1cCBhZnRlciBkb3dubG9hZFxuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIC0gbWFrZSBpbml0IHN1cHBvcnQgYXN5bmMgYnkgZGVmYXVsdD9cbiAgICAgICAgICAgICAgICAgICAgaWYoSGFuZGxlcltub2RlX2RhdGEueXZJbml0XSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIEhhbmRsZXJbbm9kZV9kYXRhLnl2SW5pdF0obm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBhY3RpdmF0ZSBidXR0b25cbiAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihub2RlX2RhdGEueXZCdXR0b24pICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihub2RlX2RhdGEueXZCdXR0b24pLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAyNTApO1xuICAgICAgICB9KTtcbiAgICB9KTsqL1xuICAgIFxufVxuXG4vLyBMT0FEIFlWLUNPTVBTXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgSGFuZGxlci5sb2FkWVZDb21wb25lbnRzKCk7XG59KTtcblxudmFyIHl2bW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnl2bW9kYWwnKTtcbnZhciBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5XCIpO1xuZm9yIChsZXQgaSA9IDA7IGkgPCB5dm1vZGFscy5sZW5ndGg7IGkrKykge1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoeXZtb2RhbHNbaV0pOyBcbn1cblxuLy9nbG9iYWwgdG9nZ2xlIHRvIGtlZXAgb2ZmY2FudmFzIG9wZW4gd2hpbGUgZWRpdGluZyBkYXRhIHNvdXJjZVxudmFyIGVkaXRpbmdfZmlsZSA9IGZhbHNlO1xuXG4vL3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZGV2aWNlb3JpZW50YXRpb25cIiwgKGV2ZW50KSA9PiB7XG4vLyAgICB2YXIgYWJzb2x1dGUgPSBldmVudC5hYnNvbHV0ZTtcbi8vICAgIHZhciBhbHBoYSAgICA9IGV2ZW50LmFscGhhO1xuLy8gICAgdmFyIGJldGEgICAgID0gZXZlbnQuYmV0YTtcbi8vICAgIHZhciBnYW1tYSAgICA9IGV2ZW50LmdhbW1hO1xuLy8gICAgYWxlcnQoYWxwaGEpO1xuLy99XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBoYW1tZXJ0aW1lID0gSGFtbWVyKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0pO1xuICAgIGhhbW1lcnRpbWUub24oJ3N3aXBlbGVmdCBzd2lwZXJpZ2h0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHN3aXRjaChldmVudC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdzd2lwZWxlZnQnOiBcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KGV2ZW50LnR5cGUpO1xuICAgICAgICAgICAgICAgIEhhbmRsZXIubmF2aWdhdG9yLmZvcndhcmQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3N3aXBlcmlnaHQnOlxuICAgICAgICAgICAgICAgIC8vYWxlcnQoZXZlbnQudHlwZSk7XG4gICAgICAgICAgICAgICAgSGFuZGxlci5uYXZpZ2F0b3IuYmFjaygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgLy90aW1lIHJlZnJlc2hcbiAgICBjb25zdCB0cmVmcmVzaGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRyZWZyZXNoJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmVmcmVzaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIEhhbmRsZXIudGltZVJlZnJlc2godHJlZnJlc2hlc1tpXS5sYXN0RWxlbWVudENoaWxkLmlubmVySFRNTCwgdHJlZnJlc2hlc1tpXS5maXJzdEVsZW1lbnRDaGlsZCk7IFxuICAgIH1cbn0pO1xuIFxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKGV2ZW50KSA9PiB7XG4gICAgdmFyIHRvcF9uYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvcC1uYXZcIik7XG4gICAgXG4gICAgbGV0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgICAgICAgICAgZm9yKGxldCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmNvbnRlbnRCb3hTaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZpcmVmb3ggaW1wbGVtZW50cyBgY29udGVudEJveFNpemVgIGFzIGEgc2luZ2xlIGNvbnRlbnQgcmVjdCwgcmF0aGVyIHRoYW4gYW4gYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zdCBjb250ZW50Qm94U2l6ZSA9IEFycmF5LmlzQXJyYXkoZW50cnkuY29udGVudEJveFNpemUpID8gZW50cnkuY29udGVudEJveFNpemVbMF0gOiBlbnRyeS5jb250ZW50Qm94U2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYoSGFuZGxlci50b3BfbmF2X2luaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvcC1uYXZcIikub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdmFyIHJzID0gZ2V0Q29tcHV0ZWRTdHlsZShyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcnMuZ2V0UHJvcGVydHlWYWx1ZSgnLS10LW5hdicpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuc3R5bGUuc2V0UHJvcGVydHkoJy0tdG9wLW5hdicsIGhlaWdodCArICdweCcpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgSGFuZGxlci50b3BfbmF2X2luaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoSGFuZGxlci50b3BfbmF2X2luaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9wLW5hdlwiKS5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdmFyIHJzID0gZ2V0Q29tcHV0ZWRTdHlsZShyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcnMuZ2V0UHJvcGVydHlWYWx1ZSgnLS10LW5hdicpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuc3R5bGUuc2V0UHJvcGVydHkoJy0tdG9wLW5hdicsIGhlaWdodCArICdweCcpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgSGFuZGxlci50b3BfbmF2X2luaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKHRvcF9uYXYpO1xufSk7XG4gXG4vKlxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIChldmVudCkgPT4ge1xuICAgIHZhciBtaWRQYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlkUGFuZWxcIilcbiBcbiAgICBsZXQgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICAgICAgICBmb3IobGV0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuY29udGVudEJveFNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRmlyZWZveCBpbXBsZW1lbnRzIGBjb250ZW50Qm94U2l6ZWAgYXMgYSBzaW5nbGUgY29udGVudCByZWN0LCByYXRoZXIgdGhhbiBhbiBhcnJheVxuICAgICAgICAgICAgICAgICAgICAvL2NvbnN0IGNvbnRlbnRCb3hTaXplID0gQXJyYXkuaXNBcnJheShlbnRyeS5jb250ZW50Qm94U2l6ZSkgPyBlbnRyeS5jb250ZW50Qm94U2l6ZVswXSA6IGVudHJ5LmNvbnRlbnRCb3hTaXplO1xuICAgICAgICAgICAgICAgICAgICBpZihIYW5kbGVyLmRhdGFzb3VyY2VfaW5mb19pbml0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pZFBhbmVsXCIpLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdmFyIHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy92YXIgcnMgPSBnZXRDb21wdXRlZFN0eWxlKHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9ycy5nZXRQcm9wZXJ0eVZhbHVlKCctLXQtbmF2JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9yLnN0eWxlLnNldFByb3BlcnR5KCctLXQtbmF2JywgaGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpei1pbmZvLXBhbmVsXCIpLnN0eWxlLnNldFByb3BlcnR5KCd3aWR0aCcsIHdpZHRoICsgJ3B4Jyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBIYW5kbGVyLmRhdGFzb3VyY2VfaW5mb19pbml0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKEhhbmRsZXIudG9wX25hdl9pbml0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlkUGFuZWxcIikub2Zmc2V0V2lkdGg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdmFyIHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy92YXIgcnMgPSBnZXRDb21wdXRlZFN0eWxlKHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9ycy5nZXRQcm9wZXJ0eVZhbHVlKCctLXQtbmF2JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aXotaW5mby1wYW5lbFwiKS5zdHlsZS5zZXRQcm9wZXJ0eSgnd2lkdGgnLCB3aWR0aCArICdweCFpbXBvcnRhbnQ7Jyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBIYW5kbGVyLmRhdGFzb3VyY2VfaW5mb19pbml0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShtaWRQYW5lbCk7XG59KTtcbiovXG4gXG4vLyBzaGFyaW5nIGFwcCBsaW5rXG4vKlxuY29uc3Qgc2hhcmVBcHAgPSB7XG4gICAgLy90aXRsZTogJ3t7cmVwb3J0Lm5hbWV9fScsXG4gICAgdGV4dDogJ0NoZWNrIG91dCBZb3VWaXogLSBjb29sIGRhdGEgdml6dWFsaXphdGlvbiBhcHAhJyxcbiAgICB1cmw6ICdodHRwczovL3d3dy55b3V2aXouYXBwLydcbn1cbmNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXR0aW5ncy1idXR0b24tc2hhcmUnKTtcbmJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBuYXZpZ2F0b3Iuc2hhcmUoc2hhcmVBcHApO1xuICAgICAgICAvL3Jlc3VsdFBhcmEudGV4dENvbnRlbnQgPSAnTUROIHNoYXJlZCBzdWNjZXNzZnVsbHknO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICR7ZXJyfWApO1xuICAgIH1cbn0pO1xuKi9cblxuSGFuZGxlci5zaGFyZUxpc3RlbmVyKCcjc2V0dGluZ3MtYnV0dG9uLXNoYXJlJywgJ251bGwnLCAnWW91Vml6JywgJ0NoZWNrIG91dCB0aGlzIGZyZWUgZGF0YSB2aXp1YWxpemF0aW9uIGFwcCEnLCAnaHR0cHM6Ly95b3V2aXouYXBwJyk7XG5IYW5kbGVyLnNoYXJlTGlzdGVuZXIoJyNzaGFyZS1idXR0b24tc2hhcmUnLCAnbnVsbCcsICdSZXBvcnQnLCAnQ2hlY2sgb3V0IHRoaXMgZGF0YSB2aXp1YWxpemF0aW9uIG9uIFlvdVZpeiEnLCAnaHR0cHM6Ly95b3V2aXouYXBwJyk7XG4gXG4gLy8gbmF2YmFyIHNoYXJlXG52YXIgc2hhcmVEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZiYXItYnV0dG9uLXNoYXJlXCIpXG5pZihzaGFyZURhdGEpe1xuICAgIEhhbmRsZXIuc2hhcmVMaXN0ZW5lcignI25hdmJhci1idXR0b24tc2hhcmUnLCAnbnVsbCcsIHNoYXJlRGF0YS5kYXRhc2V0LnRleHQsICBzaGFyZURhdGEuZGF0YXNldC50ZXh0LCAgc2hhcmVEYXRhLmRhdGFzZXQudXJsKTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIChldmVudCkgPT4ge1xuICAgIFVuaWNvcm4uYWRkRXZlbnRMaXN0ZW5lcihcInVwZGF0ZWRcIiwgKGNvbXBvbmVudCkgPT57XG5cbiAgICAgICAgc3dpdGNoKGNvbXBvbmVudC5uYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdhcHAnOlxuICAgICAgICAgICAgICAgIC8vIGRhdGEgc291cmNlIG9mZiBjYW52YXNcbiAgICAgICAgICAgICAgICBpZiAoZWRpdGluZ19maWxlID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlc3RPZmZDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk9GRkNBTlZBU1wiKTtcbiAgICAgICAgICAgICAgICAgICAgLy92YXIgYnNvYyA9IGJvb3RzdHJhcC5PZmZjYW52YXMuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0ZXN0T2ZmQ2FudmFzKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJzb2MgPSBPZmZjYW52YXMuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0ZXN0T2ZmQ2FudmFzKTtcbiAgICAgICAgICAgICAgICAgICAgYnNvYy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gZHJvcGRvd24gbWVudXNcbiAgICAgICAgICAgICAgICB2YXIgdG1kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWItbW9yZS1kcm9wZG93blwiKTtcbiAgICAgICAgICAgICAgICBpZiAodG1kKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vYm9vdHN0cmFwLkRyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodG1kKS5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vYm9vdHN0cmFwLkRyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodG1kKTtcbiAgICAgICAgICAgICAgICAgICAgRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0bWQpLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0bWQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciB1c2QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXItc2V0dGluZ3MtZHJvcGRvd25cIik7XG4gICAgICAgICAgICAgICAgaWYgKHVzZCkge1xuICAgICAgICAgICAgICAgICAgICAvL2Jvb3RzdHJhcC5Ecm9wZG93bi5nZXRPckNyZWF0ZUluc3RhbmNlKHVzZCkuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAvL2Jvb3RzdHJhcC5Ecm9wZG93bi5nZXRPckNyZWF0ZUluc3RhbmNlKHVzZCk7XG4gICAgICAgICAgICAgICAgICAgIERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodXNkKS5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodXNkKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL2Ryb3B6b25lXG4gICAgICAgICAgICAgICAgdmFyIGR6RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHJvcFwiKTtcbiAgICAgICAgICAgICAgICB2YXIgbXlEcm9wem9uZTtcbiAgICAgICAgICAgICAgICBpZiAoZHpFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkekVsZW1lbnQuZHJvcHpvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgZHpFbGVtZW50LmRyb3B6b25lLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBteURyb3B6b25lID0gbmV3IERyb3B6b25lKFwiI2Ryb3BcIik7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vYm9vdHN0cmFwIHRhYmxlIHRvIGhhbmRsZSByZXR1cm4gZnJvbSBmaWxlIGVkaXRcbiAgICAgICAgICAgICAgICAvL2Jvb3RzdHJhcCB0YWJsZVxuICAgICAgICAgICAgICAgICQoJyN0YWJsZScpLmJvb3RzdHJhcFRhYmxlKCk7IC8vIGluaXQgdmlhIGphdmFzY3JpcHRcblxuICAgICAgICAgICAgICAgIC8vIGRhdGF0YWJsZSBtb2RhbFxuICAgICAgICAgICAgICAgIC8vIGFwcGVuZCBtb2RhbHMgdG8gcHJldmVudCB6LWxheWVyIGlzc3Vlc1xuICAgICAgICAgICAgICAgIHZhciB5dm1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy55dm1vZGFsJyk7XG4gICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIik7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB5dm1vZGFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKHl2bW9kYWxzW2ldKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIG5hdmJhciBzaGFyZVxuICAgICAgICAgICAgICAgIHZhciBzZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2YmFyLWJ1dHRvbi1zaGFyZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoc2QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNoYXJlRGF0YSA9IHNkLmRhdGFzZXQ7XG4gICAgICAgICAgICAgICAgICAgIEhhbmRsZXIuc2hhcmVMaXN0ZW5lcignI25hdmJhci1idXR0b24tc2hhcmUnLCAnbnVsbCcsIHNoYXJlRGF0YS50ZXh0LCAgc2hhcmVEYXRhLnRleHQsICBzaGFyZURhdGEudXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAvLyBsaXN0IHNjcm9sbGRvd25cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXBvbmVudC5jdXJyZW50QWN0aW9uUXVldWVbMF0ucGFydGlhbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5jdXJyZW50QWN0aW9uUXVldWVbMF0ucGFydGlhbHNbaV0uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEhhbmRsZXIubG9hZFlWQ29tcG9uZW50cyhcIiNcIi5jb25jYXQoY29tcG9uZW50LmN1cnJlbnRBY3Rpb25RdWV1ZVswXS5wYXJ0aWFsc1tpXS5pZCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbXBvbmVudC5jdXJyZW50QWN0aW9uUXVldWVbMF0ucGFydGlhbHNbaV0udGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBIYW5kbGVyLmxvYWRZVkNvbXBvbmVudHMoXCIjXCIuY29uY2F0KGNvbXBvbmVudC5jdXJyZW50QWN0aW9uUXVldWVbMF0ucGFydGlhbHNbaV0udGFyZ2V0KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdsb2dpbic6XG4gICAgICAgICAgICAgICAgLy8gYXBwZW5kIG1vZGFscyB0byBwcmV2ZW50IHotbGF5ZXIgaXNzdWVzXG4gICAgICAgICAgICAgICAgdmFyIHl2bW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnl2bW9kYWwnKTtcbiAgICAgICAgICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHl2bW9kYWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoeXZtb2RhbHNbaV0pOyBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgdXNkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyLXNldHRpbmdzLWRyb3Bkb3duXCIpO1xuICAgICAgICAgICAgICAgIGlmICh1c2QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9ib290c3RyYXAuRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh1c2QpLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgLy9ib290c3RyYXAuRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh1c2QpO1xuICAgICAgICAgICAgICAgICAgICBEcm9wZG93bi5nZXRPckNyZWF0ZUluc3RhbmNlKHVzZCkuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICBEcm9wZG93bi5nZXRPckNyZWF0ZUluc3RhbmNlKHVzZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndml6JzpcbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgIHZhciBhcnIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwieW91Vml6T25VcGRhdGVcIik7IC8vIG9ubHkgcmVmcmVzaGVkIHZpei9zXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBhcnIubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZXZhbChhcnJbbl0uaW5uZXJIVE1MKTsgLy8gcnVuIHNjcmlwdFxuICAgICAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgICAgIC8vSGFuZGxlci52aXpJbml0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgY29tcG9uZW50LmlkKSk7XG4gICAgICAgICAgICAgICAgLy9hbGVydChjb21wb25lbnQucGFyZW50Tm9kZSk7XG4gICAgICAgICAgICAgICAgLy9hbGVydChjb21wb25lbnQuaWQpO1xuICAgICAgICAgICAgICAgIC8vYWxlcnQoY29tcG9uZW50LnJvb3QucGFyZW50Tm9kZSk7XG4gICAgICAgICAgICAgICAgSGFuZGxlci52aXpJbml0KGNvbXBvbmVudC5yb290LnBhcmVudE5vZGUpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICQoJyN0YWJsZScpLmJvb3RzdHJhcFRhYmxlKCk7IC8vIGluaXQgdmlhIGphdmFzY3JpcHRcblxuICAgICAgICAgICAgICAgIC8vIGRhdGF0YWJsZSBtb2RhbFxuICAgICAgICAgICAgICAgIC8vIGFwcGVuZCBtb2RhbHMgdG8gcHJldmVudCB6LWxheWVyIGlzc3Vlc1xuICAgICAgICAgICAgICAgIHZhciB5dm1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy55dm1vZGFsJyk7XG4gICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIik7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB5dm1vZGFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKHl2bW9kYWxzW2ldKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGF0YXRhYmxlJzpcbiAgICAgICAgICAgICAgICAvL2Jvb3RzdHJhcCB0YWJsZVxuICAgICAgICAgICAgICAgICQoJyN0YWJsZScpLmJvb3RzdHJhcFRhYmxlKCk7IC8vIGluaXQgdmlhIGphdmFzY3JpcHRcblxuICAgICAgICAgICAgICAgIC8vIGRhdGF0YWJsZSBtb2RhbFxuICAgICAgICAgICAgICAgIC8vIGFwcGVuZCBtb2RhbHMgdG8gcHJldmVudCB6LWxheWVyIGlzc3Vlc1xuICAgICAgICAgICAgICAgIHZhciB5dm1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy55dm1vZGFsJyk7XG4gICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIik7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB5dm1vZGFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKHl2bW9kYWxzW2ldKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZ2V0bW9yZSc6XG4gICAgICAgICAgICAgICAgLy8gZGF0YXRhYmxlIG1vZGFsXG4gICAgICAgICAgICAgICAgLy8gYXBwZW5kIG1vZGFscyB0byBwcmV2ZW50IHotbGF5ZXIgaXNzdWVzXG4gICAgICAgICAgICAgICAgdmFyIHl2bW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnl2bW9kYWwnKTtcbiAgICAgICAgICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHl2bW9kYWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoeXZtb2RhbHNbaV0pOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzb3VyY2Vjb250cm9sJzpcbiAgICAgICAgICAgICAgICAvLyBkYXRhdGFibGUgbW9kYWxcbiAgICAgICAgICAgICAgICAvLyBhcHBlbmQgbW9kYWxzIHRvIHByZXZlbnQgei1sYXllciBpc3N1ZXNcbiAgICAgICAgICAgICAgICB2YXIgeXZtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcueXZtb2RhbCcpO1xuICAgICAgICAgICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5XCIpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeXZtb2RhbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZCh5dm1vZGFsc1tpXSk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBEcm9wem9uZS5vcHRpb25zLmRyb3AgPSB7IC8vIGNhbWVsaXplZCB2ZXJzaW9uIG9mIHRoZSBgaWRgXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogXCJkb2N1bWVudFwiLCAvLyBUaGUgbmFtZSB0aGF0IHdpbGwgYmUgdXNlZCB0byB0cmFuc2ZlciB0aGUgZmlsZVxuICAgICAgICAgICAgICAgICAgICBtYXhGaWxlc2l6ZTogMiwgLy8gTUJcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndml6cmVwb3J0JzpcbiAgICAgICAgICAgICAgICAvLyBkYXRhdGFibGUgbW9kYWxcbiAgICAgICAgICAgICAgICAvLyBhcHBlbmQgbW9kYWxzIHRvIHByZXZlbnQgei1sYXllciBpc3N1ZXNcbiAgICAgICAgICAgICAgICB2YXIgeXZtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcueXZtb2RhbCcpO1xuICAgICAgICAgICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5XCIpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeXZtb2RhbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZCh5dm1vZGFsc1tpXSk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdmaWxlY29udHJvbCc6XG4gICAgICAgICAgICAgICAgJCgnI3RhYmxlJykuYm9vdHN0cmFwVGFibGUoKTsgLy8gaW5pdCB2aWEgamF2YXNjcmlwdFxuICAgICAgICAgICAgICAgIC8vIGRhdGF0YWJsZSBtb2RhbFxuICAgICAgICAgICAgICAgIC8vIGFwcGVuZCBtb2RhbHMgdG8gcHJldmVudCB6LWxheWVyIGlzc3Vlc1xuICAgICAgICAgICAgICAgIHZhciB5dm1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy55dm1vZGFsJyk7XG4gICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIik7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB5dm1vZGFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKHl2bW9kYWxzW2ldKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgfSk7XG59KTtcbiAiXSwibmFtZXMiOlsiTkFNRSIsIkRBVEFfS0VZIiwiRVZFTlRfS0VZIiwiRVZFTlRfQ0xPU0UiLCJFVkVOVF9DTE9TRUQiLCJDTEFTU19OQU1FX0ZBREUiLCJDTEFTU19OQU1FX1NIT1ciLCJBbGVydCIsIkJhc2VDb21wb25lbnQiLCJjbG9zZSIsImNsb3NlRXZlbnQiLCJFdmVudEhhbmRsZXIiLCJ0cmlnZ2VyIiwiX2VsZW1lbnQiLCJkZWZhdWx0UHJldmVudGVkIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiaXNBbmltYXRlZCIsImNvbnRhaW5zIiwiX3F1ZXVlQ2FsbGJhY2siLCJfZGVzdHJveUVsZW1lbnQiLCJkaXNwb3NlIiwialF1ZXJ5SW50ZXJmYWNlIiwiY29uZmlnIiwiZWFjaCIsImRhdGEiLCJnZXRPckNyZWF0ZUluc3RhbmNlIiwidW5kZWZpbmVkIiwic3RhcnRzV2l0aCIsIlR5cGVFcnJvciIsImVuYWJsZURpc21pc3NUcmlnZ2VyIiwiZGVmaW5lSlF1ZXJ5UGx1Z2luIiwiVkVSU0lPTiIsIkNvbmZpZyIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdldEVsZW1lbnQiLCJfY29uZmlnIiwiX2dldENvbmZpZyIsIkRhdGEiLCJzZXQiLCJvZmYiLCJwcm9wZXJ0eU5hbWUiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiY2FsbGJhY2siLCJleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uIiwiX21lcmdlQ29uZmlnT2JqIiwiX2NvbmZpZ0FmdGVyTWVyZ2UiLCJfdHlwZUNoZWNrQ29uZmlnIiwiZ2V0SW5zdGFuY2UiLCJnZXQiLCJldmVudE5hbWUiLCJuYW1lIiwiREFUQV9BUElfS0VZIiwiQ0xBU1NfTkFNRV9BQ1RJVkUiLCJTRUxFQ1RPUl9EQVRBX1RPR0dMRSIsIkVWRU5UX0NMSUNLX0RBVEFfQVBJIiwiQnV0dG9uIiwidG9nZ2xlIiwic2V0QXR0cmlidXRlIiwib24iLCJkb2N1bWVudCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJidXR0b24iLCJ0YXJnZXQiLCJjbG9zZXN0IiwiQVJST1dfTEVGVF9LRVkiLCJBUlJPV19SSUdIVF9LRVkiLCJUT1VDSEVWRU5UX0NPTVBBVF9XQUlUIiwiT1JERVJfTkVYVCIsIk9SREVSX1BSRVYiLCJESVJFQ1RJT05fTEVGVCIsIkRJUkVDVElPTl9SSUdIVCIsIkVWRU5UX1NMSURFIiwiRVZFTlRfU0xJRCIsIkVWRU5UX0tFWURPV04iLCJFVkVOVF9NT1VTRUVOVEVSIiwiRVZFTlRfTU9VU0VMRUFWRSIsIkVWRU5UX0RSQUdfU1RBUlQiLCJFVkVOVF9MT0FEX0RBVEFfQVBJIiwiQ0xBU1NfTkFNRV9DQVJPVVNFTCIsIkNMQVNTX05BTUVfU0xJREUiLCJDTEFTU19OQU1FX0VORCIsIkNMQVNTX05BTUVfU1RBUlQiLCJDTEFTU19OQU1FX05FWFQiLCJDTEFTU19OQU1FX1BSRVYiLCJTRUxFQ1RPUl9BQ1RJVkUiLCJTRUxFQ1RPUl9JVEVNIiwiU0VMRUNUT1JfQUNUSVZFX0lURU0iLCJTRUxFQ1RPUl9JVEVNX0lNRyIsIlNFTEVDVE9SX0lORElDQVRPUlMiLCJTRUxFQ1RPUl9EQVRBX1NMSURFIiwiU0VMRUNUT1JfREFUQV9SSURFIiwiS0VZX1RPX0RJUkVDVElPTiIsIkRlZmF1bHQiLCJpbnRlcnZhbCIsImtleWJvYXJkIiwicGF1c2UiLCJyaWRlIiwidG91Y2giLCJ3cmFwIiwiRGVmYXVsdFR5cGUiLCJDYXJvdXNlbCIsIl9pbnRlcnZhbCIsIl9hY3RpdmVFbGVtZW50IiwiX2lzU2xpZGluZyIsInRvdWNoVGltZW91dCIsIl9zd2lwZUhlbHBlciIsIl9pbmRpY2F0b3JzRWxlbWVudCIsIlNlbGVjdG9yRW5naW5lIiwiZmluZE9uZSIsIl9hZGRFdmVudExpc3RlbmVycyIsImN5Y2xlIiwibmV4dCIsIl9zbGlkZSIsIm5leHRXaGVuVmlzaWJsZSIsImhpZGRlbiIsImlzVmlzaWJsZSIsInByZXYiLCJ0cmlnZ2VyVHJhbnNpdGlvbkVuZCIsIl9jbGVhckludGVydmFsIiwiX3VwZGF0ZUludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJfbWF5YmVFbmFibGVDeWNsZSIsIm9uZSIsInRvIiwiaW5kZXgiLCJpdGVtcyIsIl9nZXRJdGVtcyIsImxlbmd0aCIsImFjdGl2ZUluZGV4IiwiX2dldEl0ZW1JbmRleCIsIl9nZXRBY3RpdmUiLCJvcmRlciIsImRlZmF1bHRJbnRlcnZhbCIsIl9rZXlkb3duIiwiU3dpcGUiLCJpc1N1cHBvcnRlZCIsIl9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzIiwiaW1nIiwiZmluZCIsImVuZENhbGxCYWNrIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInN3aXBlQ29uZmlnIiwibGVmdENhbGxiYWNrIiwiX2RpcmVjdGlvblRvT3JkZXIiLCJyaWdodENhbGxiYWNrIiwiZW5kQ2FsbGJhY2siLCJ0ZXN0IiwidGFnTmFtZSIsImRpcmVjdGlvbiIsImtleSIsImluZGV4T2YiLCJfc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudCIsImFjdGl2ZUluZGljYXRvciIsInJlbW92ZUF0dHJpYnV0ZSIsIm5ld0FjdGl2ZUluZGljYXRvciIsImFkZCIsImVsZW1lbnRJbnRlcnZhbCIsIk51bWJlciIsInBhcnNlSW50IiwiZ2V0QXR0cmlidXRlIiwiYWN0aXZlRWxlbWVudCIsImlzTmV4dCIsIm5leHRFbGVtZW50IiwiZ2V0TmV4dEFjdGl2ZUVsZW1lbnQiLCJuZXh0RWxlbWVudEluZGV4IiwidHJpZ2dlckV2ZW50IiwicmVsYXRlZFRhcmdldCIsIl9vcmRlclRvRGlyZWN0aW9uIiwiZnJvbSIsInNsaWRlRXZlbnQiLCJpc0N5Y2xpbmciLCJCb29sZWFuIiwiZGlyZWN0aW9uYWxDbGFzc05hbWUiLCJvcmRlckNsYXNzTmFtZSIsInJlZmxvdyIsImNvbXBsZXRlQ2FsbEJhY2siLCJfaXNBbmltYXRlZCIsImNsZWFySW50ZXJ2YWwiLCJpc1JUTCIsImdldEVsZW1lbnRGcm9tU2VsZWN0b3IiLCJjYXJvdXNlbCIsInNsaWRlSW5kZXgiLCJNYW5pcHVsYXRvciIsImdldERhdGFBdHRyaWJ1dGUiLCJ3aW5kb3ciLCJjYXJvdXNlbHMiLCJFVkVOVF9TSE9XIiwiRVZFTlRfU0hPV04iLCJFVkVOVF9ISURFIiwiRVZFTlRfSElEREVOIiwiQ0xBU1NfTkFNRV9DT0xMQVBTRSIsIkNMQVNTX05BTUVfQ09MTEFQU0lORyIsIkNMQVNTX05BTUVfQ09MTEFQU0VEIiwiQ0xBU1NfTkFNRV9ERUVQRVJfQ0hJTERSRU4iLCJDTEFTU19OQU1FX0hPUklaT05UQUwiLCJXSURUSCIsIkhFSUdIVCIsIlNFTEVDVE9SX0FDVElWRVMiLCJwYXJlbnQiLCJDb2xsYXBzZSIsIl9pc1RyYW5zaXRpb25pbmciLCJfdHJpZ2dlckFycmF5IiwidG9nZ2xlTGlzdCIsImVsZW0iLCJzZWxlY3RvciIsImdldFNlbGVjdG9yRnJvbUVsZW1lbnQiLCJmaWx0ZXJFbGVtZW50IiwiZmlsdGVyIiwiZm91bmRFbGVtZW50IiwicHVzaCIsIl9pbml0aWFsaXplQ2hpbGRyZW4iLCJfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzIiwiX2lzU2hvd24iLCJoaWRlIiwic2hvdyIsImFjdGl2ZUNoaWxkcmVuIiwiX2dldEZpcnN0TGV2ZWxDaGlsZHJlbiIsIm1hcCIsInN0YXJ0RXZlbnQiLCJhY3RpdmVJbnN0YW5jZSIsImRpbWVuc2lvbiIsIl9nZXREaW1lbnNpb24iLCJzdHlsZSIsImNvbXBsZXRlIiwiY2FwaXRhbGl6ZWREaW1lbnNpb24iLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwic2Nyb2xsU2l6ZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNoaWxkcmVuIiwic2VsZWN0ZWQiLCJpbmNsdWRlcyIsInRyaWdnZXJBcnJheSIsImlzT3BlbiIsImRlbGVnYXRlVGFyZ2V0Iiwic2VsZWN0b3JFbGVtZW50cyIsImVsZW1lbnRNYXAiLCJNYXAiLCJpbnN0YW5jZSIsImhhcyIsImluc3RhbmNlTWFwIiwic2l6ZSIsImNvbnNvbGUiLCJlcnJvciIsIkFycmF5Iiwia2V5cyIsImRlbGV0ZSIsIm5hbWVzcGFjZVJlZ2V4Iiwic3RyaXBOYW1lUmVnZXgiLCJzdHJpcFVpZFJlZ2V4IiwiZXZlbnRSZWdpc3RyeSIsInVpZEV2ZW50IiwiY3VzdG9tRXZlbnRzIiwibW91c2VlbnRlciIsIm1vdXNlbGVhdmUiLCJuYXRpdmVFdmVudHMiLCJTZXQiLCJtYWtlRXZlbnRVaWQiLCJ1aWQiLCJnZXRFbGVtZW50RXZlbnRzIiwiYm9vdHN0cmFwSGFuZGxlciIsImZuIiwiaGFuZGxlciIsImh5ZHJhdGVPYmoiLCJvbmVPZmYiLCJ0eXBlIiwiYXBwbHkiLCJib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlciIsImRvbUVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcmVudE5vZGUiLCJkb21FbGVtZW50IiwiZmluZEhhbmRsZXIiLCJldmVudHMiLCJjYWxsYWJsZSIsImRlbGVnYXRpb25TZWxlY3RvciIsInZhbHVlcyIsIm5vcm1hbGl6ZVBhcmFtZXRlcnMiLCJvcmlnaW5hbFR5cGVFdmVudCIsImRlbGVnYXRpb25GdW5jdGlvbiIsImlzRGVsZWdhdGVkIiwidHlwZUV2ZW50IiwiZ2V0VHlwZUV2ZW50IiwiYWRkSGFuZGxlciIsIndyYXBGdW5jdGlvbiIsImNhbGwiLCJoYW5kbGVycyIsInByZXZpb3VzRnVuY3Rpb24iLCJyZXBsYWNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlTmFtZXNwYWNlZEhhbmRsZXJzIiwibmFtZXNwYWNlIiwic3RvcmVFbGVtZW50RXZlbnQiLCJoYW5kbGVyS2V5IiwiaW5OYW1lc3BhY2UiLCJpc05hbWVzcGFjZSIsImVsZW1lbnRFdmVudCIsImtleUhhbmRsZXJzIiwiYXJncyIsIiQiLCJnZXRqUXVlcnkiLCJqUXVlcnlFdmVudCIsImJ1YmJsZXMiLCJuYXRpdmVEaXNwYXRjaCIsIkV2ZW50IiwiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCJpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCIsImlzRGVmYXVsdFByZXZlbnRlZCIsImV2dCIsImNhbmNlbGFibGUiLCJkaXNwYXRjaEV2ZW50Iiwib2JqIiwibWV0YSIsInZhbHVlIiwiZW50cmllcyIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwibm9ybWFsaXplRGF0YSIsInRvU3RyaW5nIiwiSlNPTiIsInBhcnNlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwibm9ybWFsaXplRGF0YUtleSIsImNociIsInRvTG93ZXJDYXNlIiwic2V0RGF0YUF0dHJpYnV0ZSIsInJlbW92ZURhdGFBdHRyaWJ1dGUiLCJnZXREYXRhQXR0cmlidXRlcyIsImF0dHJpYnV0ZXMiLCJic0tleXMiLCJkYXRhc2V0IiwicHVyZUtleSIsImNoYXJBdCIsImRvY3VtZW50RWxlbWVudCIsImNvbmNhdCIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJxdWVyeVNlbGVjdG9yIiwiY2hpbGQiLCJtYXRjaGVzIiwicGFyZW50cyIsImFuY2VzdG9yIiwicHJldmlvdXMiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiZm9jdXNhYmxlQ2hpbGRyZW4iLCJmb2N1c2FibGVzIiwiam9pbiIsImVsIiwiaXNEaXNhYmxlZCIsIkVTQ0FQRV9LRVkiLCJUQUJfS0VZIiwiQVJST1dfVVBfS0VZIiwiQVJST1dfRE9XTl9LRVkiLCJSSUdIVF9NT1VTRV9CVVRUT04iLCJFVkVOVF9LRVlET1dOX0RBVEFfQVBJIiwiRVZFTlRfS0VZVVBfREFUQV9BUEkiLCJDTEFTU19OQU1FX0RST1BVUCIsIkNMQVNTX05BTUVfRFJPUEVORCIsIkNMQVNTX05BTUVfRFJPUFNUQVJUIiwiQ0xBU1NfTkFNRV9EUk9QVVBfQ0VOVEVSIiwiQ0xBU1NfTkFNRV9EUk9QRE9XTl9DRU5URVIiLCJTRUxFQ1RPUl9EQVRBX1RPR0dMRV9TSE9XTiIsIlNFTEVDVE9SX01FTlUiLCJTRUxFQ1RPUl9OQVZCQVIiLCJTRUxFQ1RPUl9OQVZCQVJfTkFWIiwiU0VMRUNUT1JfVklTSUJMRV9JVEVNUyIsIlBMQUNFTUVOVF9UT1AiLCJQTEFDRU1FTlRfVE9QRU5EIiwiUExBQ0VNRU5UX0JPVFRPTSIsIlBMQUNFTUVOVF9CT1RUT01FTkQiLCJQTEFDRU1FTlRfUklHSFQiLCJQTEFDRU1FTlRfTEVGVCIsIlBMQUNFTUVOVF9UT1BDRU5URVIiLCJQTEFDRU1FTlRfQk9UVE9NQ0VOVEVSIiwiYXV0b0Nsb3NlIiwiYm91bmRhcnkiLCJkaXNwbGF5Iiwib2Zmc2V0IiwicG9wcGVyQ29uZmlnIiwicmVmZXJlbmNlIiwiRHJvcGRvd24iLCJfcG9wcGVyIiwiX3BhcmVudCIsIl9tZW51IiwiX2luTmF2YmFyIiwiX2RldGVjdE5hdmJhciIsInNob3dFdmVudCIsIl9jcmVhdGVQb3BwZXIiLCJib2R5Iiwibm9vcCIsImZvY3VzIiwiX2NvbXBsZXRlSGlkZSIsImRlc3Ryb3kiLCJ1cGRhdGUiLCJoaWRlRXZlbnQiLCJpc0VsZW1lbnQiLCJQb3BwZXIiLCJyZWZlcmVuY2VFbGVtZW50IiwiX2dldFBvcHBlckNvbmZpZyIsImNyZWF0ZVBvcHBlciIsIl9nZXRQbGFjZW1lbnQiLCJwYXJlbnREcm9wZG93biIsImlzRW5kIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJ0cmltIiwiX2dldE9mZnNldCIsInNwbGl0IiwicG9wcGVyRGF0YSIsImRlZmF1bHRCc1BvcHBlckNvbmZpZyIsInBsYWNlbWVudCIsIm1vZGlmaWVycyIsIm9wdGlvbnMiLCJlbmFibGVkIiwiX3NlbGVjdE1lbnVJdGVtIiwiY2xlYXJNZW51cyIsIm9wZW5Ub2dnbGVzIiwiY29udGV4dCIsImNvbXBvc2VkUGF0aCIsImlzTWVudVRhcmdldCIsImNsaWNrRXZlbnQiLCJkYXRhQXBpS2V5ZG93bkhhbmRsZXIiLCJpc0lucHV0IiwiaXNFc2NhcGVFdmVudCIsImlzVXBPckRvd25FdmVudCIsImdldFRvZ2dsZUJ1dHRvbiIsInN0b3BQcm9wYWdhdGlvbiIsIkVWRU5UX0hJREVfUFJFVkVOVEVEIiwiRVZFTlRfUkVTSVpFIiwiRVZFTlRfQ0xJQ0tfRElTTUlTUyIsIkVWRU5UX01PVVNFRE9XTl9ESVNNSVNTIiwiRVZFTlRfS0VZRE9XTl9ESVNNSVNTIiwiQ0xBU1NfTkFNRV9PUEVOIiwiQ0xBU1NfTkFNRV9TVEFUSUMiLCJPUEVOX1NFTEVDVE9SIiwiU0VMRUNUT1JfRElBTE9HIiwiU0VMRUNUT1JfTU9EQUxfQk9EWSIsImJhY2tkcm9wIiwiTW9kYWwiLCJfZGlhbG9nIiwiX2JhY2tkcm9wIiwiX2luaXRpYWxpemVCYWNrRHJvcCIsIl9mb2N1c3RyYXAiLCJfaW5pdGlhbGl6ZUZvY3VzVHJhcCIsIl9zY3JvbGxCYXIiLCJTY3JvbGxCYXJIZWxwZXIiLCJfYWRqdXN0RGlhbG9nIiwiX3Nob3dFbGVtZW50IiwiZGVhY3RpdmF0ZSIsIl9oaWRlTW9kYWwiLCJodG1sRWxlbWVudCIsImhhbmRsZVVwZGF0ZSIsIkJhY2tkcm9wIiwiRm9jdXNUcmFwIiwidHJhcEVsZW1lbnQiLCJhcHBlbmQiLCJzY3JvbGxUb3AiLCJtb2RhbEJvZHkiLCJ0cmFuc2l0aW9uQ29tcGxldGUiLCJhY3RpdmF0ZSIsIl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uIiwiZXZlbnQyIiwiX3Jlc2V0QWRqdXN0bWVudHMiLCJyZXNldCIsImlzTW9kYWxPdmVyZmxvd2luZyIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsImluaXRpYWxPdmVyZmxvd1kiLCJvdmVyZmxvd1kiLCJzY3JvbGxiYXJXaWR0aCIsImdldFdpZHRoIiwiaXNCb2R5T3ZlcmZsb3dpbmciLCJwcm9wZXJ0eSIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiYWxyZWFkeU9wZW4iLCJDTEFTU19OQU1FX1NIT1dJTkciLCJDTEFTU19OQU1FX0hJRElORyIsIkNMQVNTX05BTUVfQkFDS0RST1AiLCJzY3JvbGwiLCJPZmZjYW52YXMiLCJibHVyIiwiY29tcGxldGVDYWxsYmFjayIsImNsaWNrQ2FsbGJhY2siLCJjbGFzc05hbWUiLCJyb290RWxlbWVudCIsInBvc2l0aW9uIiwiU0VMRUNUT1JfVElUTEUiLCJTRUxFQ1RPUl9DT05URU5UIiwiVG9vbHRpcCIsImNvbnRlbnQiLCJ0ZW1wbGF0ZSIsIlBvcG92ZXIiLCJfaXNXaXRoQ29udGVudCIsIl9nZXRUaXRsZSIsIl9nZXRDb250ZW50IiwiX2dldENvbnRlbnRGb3JUZW1wbGF0ZSIsIl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbiIsIkVWRU5UX0FDVElWQVRFIiwiRVZFTlRfQ0xJQ0siLCJDTEFTU19OQU1FX0RST1BET1dOX0lURU0iLCJTRUxFQ1RPUl9EQVRBX1NQWSIsIlNFTEVDVE9SX1RBUkdFVF9MSU5LUyIsIlNFTEVDVE9SX05BVl9MSVNUX0dST1VQIiwiU0VMRUNUT1JfTkFWX0xJTktTIiwiU0VMRUNUT1JfTkFWX0lURU1TIiwiU0VMRUNUT1JfTElTVF9JVEVNUyIsIlNFTEVDVE9SX0xJTktfSVRFTVMiLCJTRUxFQ1RPUl9EUk9QRE9XTiIsIlNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSIsInJvb3RNYXJnaW4iLCJzbW9vdGhTY3JvbGwiLCJ0aHJlc2hvbGQiLCJTY3JvbGxTcHkiLCJfdGFyZ2V0TGlua3MiLCJfb2JzZXJ2YWJsZVNlY3Rpb25zIiwiX3Jvb3RFbGVtZW50IiwiX2FjdGl2ZVRhcmdldCIsIl9vYnNlcnZlciIsIl9wcmV2aW91c1Njcm9sbERhdGEiLCJ2aXNpYmxlRW50cnlUb3AiLCJwYXJlbnRTY3JvbGxUb3AiLCJyZWZyZXNoIiwiX2luaXRpYWxpemVUYXJnZXRzQW5kT2JzZXJ2YWJsZXMiLCJfbWF5YmVFbmFibGVTbW9vdGhTY3JvbGwiLCJkaXNjb25uZWN0IiwiX2dldE5ld09ic2VydmVyIiwic2VjdGlvbiIsIm9ic2VydmUiLCJwYXJzZUZsb2F0Iiwib2JzZXJ2YWJsZVNlY3Rpb24iLCJoYXNoIiwicm9vdCIsImhlaWdodCIsIm9mZnNldFRvcCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIl9vYnNlcnZlckNhbGxiYWNrIiwidGFyZ2V0RWxlbWVudCIsImVudHJ5IiwiaWQiLCJfcHJvY2VzcyIsInVzZXJTY3JvbGxzRG93biIsImlzSW50ZXJzZWN0aW5nIiwiX2NsZWFyQWN0aXZlQ2xhc3MiLCJlbnRyeUlzTG93ZXJUaGFuUHJldmlvdXMiLCJ0YXJnZXRMaW5rcyIsImFuY2hvciIsIl9hY3RpdmF0ZVBhcmVudHMiLCJsaXN0R3JvdXAiLCJpdGVtIiwiYWN0aXZlTm9kZXMiLCJub2RlIiwic3B5IiwiQ0xBU1NfRFJPUERPV04iLCJTRUxFQ1RPUl9EUk9QRE9XTl9NRU5VIiwiTk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRSIsIlNFTEVDVE9SX1RBQl9QQU5FTCIsIlNFTEVDVE9SX09VVEVSIiwiU0VMRUNUT1JfSU5ORVIiLCJTRUxFQ1RPUl9JTk5FUl9FTEVNIiwiU0VMRUNUT1JfREFUQV9UT0dHTEVfQUNUSVZFIiwiVGFiIiwiX3NldEluaXRpYWxBdHRyaWJ1dGVzIiwiX2dldENoaWxkcmVuIiwiaW5uZXJFbGVtIiwiX2VsZW1Jc0FjdGl2ZSIsImFjdGl2ZSIsIl9nZXRBY3RpdmVFbGVtIiwiX2RlYWN0aXZhdGUiLCJfYWN0aXZhdGUiLCJyZWxhdGVkRWxlbSIsIl90b2dnbGVEcm9wRG93biIsIm5leHRBY3RpdmVFbGVtZW50IiwicHJldmVudFNjcm9sbCIsIl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyIsIl9zZXRJbml0aWFsQXR0cmlidXRlc09uQ2hpbGQiLCJfZ2V0SW5uZXJFbGVtZW50IiwiaXNBY3RpdmUiLCJvdXRlckVsZW0iLCJfZ2V0T3V0ZXJFbGVtZW50IiwiX3NldEluaXRpYWxBdHRyaWJ1dGVzT25UYXJnZXRQYW5lbCIsIm9wZW4iLCJhdHRyaWJ1dGUiLCJoYXNBdHRyaWJ1dGUiLCJFVkVOVF9NT1VTRU9WRVIiLCJFVkVOVF9NT1VTRU9VVCIsIkVWRU5UX0ZPQ1VTSU4iLCJFVkVOVF9GT0NVU09VVCIsIkNMQVNTX05BTUVfSElERSIsImFuaW1hdGlvbiIsImF1dG9oaWRlIiwiZGVsYXkiLCJUb2FzdCIsIl90aW1lb3V0IiwiX2hhc01vdXNlSW50ZXJhY3Rpb24iLCJfaGFzS2V5Ym9hcmRJbnRlcmFjdGlvbiIsIl9zZXRMaXN0ZW5lcnMiLCJfY2xlYXJUaW1lb3V0IiwiX21heWJlU2NoZWR1bGVIaWRlIiwiaXNTaG93biIsIl9vbkludGVyYWN0aW9uIiwiaXNJbnRlcmFjdGluZyIsIkRJU0FMTE9XRURfQVRUUklCVVRFUyIsIkNMQVNTX05BTUVfTU9EQUwiLCJTRUxFQ1RPUl9UT09MVElQX0lOTkVSIiwiU0VMRUNUT1JfTU9EQUwiLCJFVkVOVF9NT0RBTF9ISURFIiwiVFJJR0dFUl9IT1ZFUiIsIlRSSUdHRVJfRk9DVVMiLCJUUklHR0VSX0NMSUNLIiwiVFJJR0dFUl9NQU5VQUwiLCJFVkVOVF9JTlNFUlRFRCIsIkF0dGFjaG1lbnRNYXAiLCJBVVRPIiwiVE9QIiwiUklHSFQiLCJCT1RUT00iLCJMRUZUIiwiYWxsb3dMaXN0IiwiRGVmYXVsdEFsbG93bGlzdCIsImNvbnRhaW5lciIsImN1c3RvbUNsYXNzIiwiZmFsbGJhY2tQbGFjZW1lbnRzIiwiaHRtbCIsInNhbml0aXplIiwic2FuaXRpemVGbiIsInRpdGxlIiwiX2lzRW5hYmxlZCIsIl9pc0hvdmVyZWQiLCJfYWN0aXZlVHJpZ2dlciIsIl90ZW1wbGF0ZUZhY3RvcnkiLCJfbmV3Q29udGVudCIsInRpcCIsIl9maXhUaXRsZSIsImVuYWJsZSIsImRpc2FibGUiLCJ0b2dnbGVFbmFibGVkIiwiY2xpY2siLCJfbGVhdmUiLCJfZW50ZXIiLCJfaGlkZU1vZGFsSGFuZGxlciIsIl9kaXNwb3NlUG9wcGVyIiwiRXJyb3IiLCJzaGFkb3dSb290IiwiZmluZFNoYWRvd1Jvb3QiLCJpc0luVGhlRG9tIiwib3duZXJEb2N1bWVudCIsIl9nZXRUaXBFbGVtZW50IiwiX2lzV2l0aEFjdGl2ZVRyaWdnZXIiLCJfY3JlYXRlVGlwRWxlbWVudCIsIl9nZXRUZW1wbGF0ZUZhY3RvcnkiLCJ0b0h0bWwiLCJ0aXBJZCIsImdldFVJRCIsInNldENvbnRlbnQiLCJjaGFuZ2VDb250ZW50IiwiVGVtcGxhdGVGYWN0b3J5IiwiZXh0cmFDbGFzcyIsIl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQiLCJfZ2V0RGVsZWdhdGVDb25maWciLCJhdHRhY2htZW50IiwiYXJnIiwicGhhc2UiLCJzdGF0ZSIsInRyaWdnZXJzIiwiZXZlbnRJbiIsImV2ZW50T3V0IiwidGV4dENvbnRlbnQiLCJfc2V0VGltZW91dCIsInRpbWVvdXQiLCJkYXRhQXR0cmlidXRlcyIsImRhdGFBdHRyaWJ1dGUiLCJFVkVOVF9NT1VTRURPV04iLCJfaXNBcHBlbmRlZCIsImV4ZWN1dGUiLCJfYXBwZW5kIiwiX2dldEVsZW1lbnQiLCJfZW11bGF0ZUFuaW1hdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJjb21wb25lbnQiLCJtZXRob2QiLCJqc29uQ29uZmlnIiwiY29uZmlnVHlwZXMiLCJleHBlY3RlZFR5cGVzIiwidmFsdWVUeXBlIiwidG9UeXBlIiwiUmVnRXhwIiwiRVZFTlRfS0VZRE9XTl9UQUIiLCJUQUJfTkFWX0ZPUldBUkQiLCJUQUJfTkFWX0JBQ0tXQVJEIiwiYXV0b2ZvY3VzIiwiX2lzQWN0aXZlIiwiX2xhc3RUYWJOYXZEaXJlY3Rpb24iLCJfaGFuZGxlRm9jdXNpbiIsIl9oYW5kbGVLZXlkb3duIiwiZWxlbWVudHMiLCJzaGlmdEtleSIsIk1BWF9VSUQiLCJNSUxMSVNFQ09ORFNfTVVMVElQTElFUiIsIlRSQU5TSVRJT05fRU5EIiwib2JqZWN0IiwibWF0Y2giLCJwcmVmaXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJnZXRFbGVtZW50QnlJZCIsImdldFNlbGVjdG9yIiwiaHJlZkF0dHJpYnV0ZSIsImdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvbkRlbGF5IiwiZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24iLCJmbG9hdFRyYW5zaXRpb25EZWxheSIsImpxdWVyeSIsIm5vZGVUeXBlIiwiZ2V0Q2xpZW50UmVjdHMiLCJlbGVtZW50SXNWaXNpYmxlIiwiY2xvc2VkRGV0YWlscyIsInN1bW1hcnkiLCJOb2RlIiwiRUxFTUVOVF9OT0RFIiwiZGlzYWJsZWQiLCJhdHRhY2hTaGFkb3ciLCJnZXRSb290Tm9kZSIsIlNoYWRvd1Jvb3QiLCJvZmZzZXRIZWlnaHQiLCJqUXVlcnkiLCJET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzIiwib25ET01Db250ZW50TG9hZGVkIiwicmVhZHlTdGF0ZSIsImRpciIsInBsdWdpbiIsIkpRVUVSWV9OT19DT05GTElDVCIsIkNvbnN0cnVjdG9yIiwibm9Db25mbGljdCIsInRyYW5zaXRpb25FbGVtZW50Iiwid2FpdEZvclRyYW5zaXRpb24iLCJkdXJhdGlvblBhZGRpbmciLCJlbXVsYXRlZER1cmF0aW9uIiwiY2FsbGVkIiwibGlzdCIsInNob3VsZEdldE5leHQiLCJpc0N5Y2xlQWxsb3dlZCIsImxpc3RMZW5ndGgiLCJtYXgiLCJtaW4iLCJ1cmlBdHRyaWJ1dGVzIiwiQVJJQV9BVFRSSUJVVEVfUEFUVEVSTiIsIlNBRkVfVVJMX1BBVFRFUk4iLCJEQVRBX1VSTF9QQVRURVJOIiwiYWxsb3dlZEF0dHJpYnV0ZSIsImFsbG93ZWRBdHRyaWJ1dGVMaXN0IiwiYXR0cmlidXRlTmFtZSIsIm5vZGVOYW1lIiwibm9kZVZhbHVlIiwiYXR0cmlidXRlUmVnZXgiLCJzb21lIiwicmVnZXgiLCJhIiwiYXJlYSIsImIiLCJiciIsImNvbCIsImNvZGUiLCJkaXYiLCJlbSIsImhyIiwiaDEiLCJoMiIsImgzIiwiaDQiLCJoNSIsImg2IiwiaSIsImxpIiwib2wiLCJwIiwicHJlIiwicyIsInNtYWxsIiwic3BhbiIsInN1YiIsInN1cCIsInN0cm9uZyIsInUiLCJ1bCIsInNhbml0aXplSHRtbCIsInVuc2FmZUh0bWwiLCJzYW5pdGl6ZUZ1bmN0aW9uIiwiZG9tUGFyc2VyIiwiRE9NUGFyc2VyIiwiY3JlYXRlZERvY3VtZW50IiwicGFyc2VGcm9tU3RyaW5nIiwiZWxlbWVudE5hbWUiLCJhdHRyaWJ1dGVMaXN0IiwiYWxsb3dlZEF0dHJpYnV0ZXMiLCJpbm5lckhUTUwiLCJTRUxFQ1RPUl9GSVhFRF9DT05URU5UIiwiU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQiLCJQUk9QRVJUWV9QQURESU5HIiwiUFJPUEVSVFlfTUFSR0lOIiwiZG9jdW1lbnRXaWR0aCIsImNsaWVudFdpZHRoIiwiYWJzIiwiaW5uZXJXaWR0aCIsIndpZHRoIiwiX2Rpc2FibGVPdmVyRmxvdyIsIl9zZXRFbGVtZW50QXR0cmlidXRlcyIsImNhbGN1bGF0ZWRWYWx1ZSIsIl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzIiwiaXNPdmVyZmxvd2luZyIsIl9zYXZlSW5pdGlhbEF0dHJpYnV0ZSIsIm92ZXJmbG93Iiwic3R5bGVQcm9wZXJ0eSIsIm1hbmlwdWxhdGlvbkNhbGxCYWNrIiwic2V0UHJvcGVydHkiLCJfYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayIsImFjdHVhbFZhbHVlIiwicmVtb3ZlUHJvcGVydHkiLCJjYWxsQmFjayIsInNlbCIsIkVWRU5UX1RPVUNIU1RBUlQiLCJFVkVOVF9UT1VDSE1PVkUiLCJFVkVOVF9UT1VDSEVORCIsIkVWRU5UX1BPSU5URVJET1dOIiwiRVZFTlRfUE9JTlRFUlVQIiwiUE9JTlRFUl9UWVBFX1RPVUNIIiwiUE9JTlRFUl9UWVBFX1BFTiIsIkNMQVNTX05BTUVfUE9JTlRFUl9FVkVOVCIsIlNXSVBFX1RIUkVTSE9MRCIsIl9kZWx0YVgiLCJfc3VwcG9ydFBvaW50ZXJFdmVudHMiLCJQb2ludGVyRXZlbnQiLCJfaW5pdEV2ZW50cyIsIl9zdGFydCIsInRvdWNoZXMiLCJjbGllbnRYIiwiX2V2ZW50SXNQb2ludGVyUGVuVG91Y2giLCJfZW5kIiwiX2hhbmRsZVN3aXBlIiwiX21vdmUiLCJhYnNEZWx0YVgiLCJwb2ludGVyVHlwZSIsIm5hdmlnYXRvciIsIm1heFRvdWNoUG9pbnRzIiwiRGVmYXVsdENvbnRlbnRUeXBlIiwiZ2V0Q29udGVudCIsImhhc0NvbnRlbnQiLCJfY2hlY2tDb250ZW50IiwidGVtcGxhdGVXcmFwcGVyIiwiX21heWJlU2FuaXRpemUiLCJ0ZXh0IiwiX3NldENvbnRlbnQiLCJ0ZW1wbGF0ZUVsZW1lbnQiLCJfcHV0RWxlbWVudEluVGVtcGxhdGUiXSwic291cmNlUm9vdCI6IiJ9
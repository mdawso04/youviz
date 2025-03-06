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
    
    openNavIfClosed() {
        if(!this.showNav) {
            this.showNav　= true;
        this._navToggled();
        }
    }
    
    closeNavIfOpen() {
        if(this.showNav) {
            this.showNav　= false;
        this._navToggled();
        }
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
    
    openEditIfClosed() {
        if(!this.showEdit) {
            this.showEdit　= true;
        this._editToggled();
        }
    }
    
    closeEditIfOpen() {
        if(this.showEdit) {
            this.showEdit　= false;
        this._editToggled();
        }
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

Handler.showTabInsideEdit = function(query) {
    Handler.showTab(query); 
    Handler.navigator.openEditIfClosed();
}

Handler.showTabInsideNav = function(query) {
    Handler.showTab(query); 
    Handler.navigator.openNavIfClosed();
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
        //layout.height = 250;
        //layout.margin.t = 15;
        //layout.margin.b = 68;
        //layout.margin.r = 10;
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
                
                var yvlisteners = document.querySelectorAll('[data-yv-listener="viz"]')
                for (let i = 0; i < yvlisteners.length; i++) {
                    let target = yvlisteners[i].dataset.yvTarget;
                    let value = yvlisteners[i].dataset.yvValue;
                    let el = document.getElementById(target);
                    if(el) {
                        el.value = value;
                    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVU7QUFDVixrQ0FBa0MsSUFBSTtBQUN0QztBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxRQUFRLEtBQUs7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELDBDQUEwQztBQUNqRztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxZQUFZLFFBQVE7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsbUZBQW1GLElBQUksMkJBQTJCLFFBQVE7QUFDMUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MscUJBQXFCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MscUJBQXFCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MscUJBQXFCO0FBQ3JEO0FBQ0E7QUFDQSxnQkFBZ0IsOENBQVEsa0JBQWtCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxxQkFBcUI7QUFDckQ7QUFDQTtBQUNBLGtDQUFrQyxxREFBcUQ7QUFDdkY7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxxQkFBcUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTCxDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0cy8uL3N0YXRpYy9wcm9qZWN0cy9zcmMvc2Nzcy9wcm9qZWN0cy5zY3NzPzhhYWQiLCJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zdGF0aWMvcHJvamVjdHMvc3JjL2Jvb3RzdHJhcC9qcy9zcmMvYWxlcnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zdGF0aWMvcHJvamVjdHMvc3JjL2Jvb3RzdHJhcC9qcy9zcmMvYmFzZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zdGF0aWMvcHJvamVjdHMvc3JjL2Jvb3RzdHJhcC9qcy9zcmMvYnV0dG9uLmpzIiwid2VicGFjazovL3Byb2plY3RzLy4vc3RhdGljL3Byb2plY3RzL3NyYy9ib290c3RyYXAvanMvc3JjL2Nhcm91c2VsLmpzIiwid2VicGFjazovL3Byb2plY3RzLy4vc3RhdGljL3Byb2plY3RzL3NyYy9ib290c3RyYXAvanMvc3JjL2NvbGxhcHNlLmpzIiwid2VicGFjazovL3Byb2plY3RzLy4vc3RhdGljL3Byb2plY3RzL3NyYy9ib290c3RyYXAvanMvc3JjL2RvbS9kYXRhLmpzIiwid2VicGFjazovL3Byb2plY3RzLy4vc3RhdGljL3Byb2plY3RzL3NyYy9ib290c3RyYXAvanMvc3JjL2RvbS9ldmVudC1oYW5kbGVyLmpzIiwid2VicGFjazovL3Byb2plY3RzLy4vc3RhdGljL3Byb2plY3RzL3NyYy9ib290c3RyYXAvanMvc3JjL2RvbS9tYW5pcHVsYXRvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cy8uL3N0YXRpYy9wcm9qZWN0cy9zcmMvYm9vdHN0cmFwL2pzL3NyYy9kb20vc2VsZWN0b3ItZW5naW5lLmpzIiwid2VicGFjazovL3Byb2plY3RzLy4vc3RhdGljL3Byb2plY3RzL3NyYy9ib290c3RyYXAvanMvc3JjL2Ryb3Bkb3duLmpzIiwid2VicGFjazovL3Byb2plY3RzLy4vc3RhdGljL3Byb2plY3RzL3NyYy9ib290c3RyYXAvanMvc3JjL21vZGFsLmpzIiwid2VicGFjazovL3Byb2plY3RzLy4vc3RhdGljL3Byb2plY3RzL3NyYy9ib290c3RyYXAvanMvc3JjL29mZmNhbnZhcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cy8uL3N0YXRpYy9wcm9qZWN0cy9zcmMvYm9vdHN0cmFwL2pzL3NyYy9wb3BvdmVyLmpzIiwid2VicGFjazovL3Byb2plY3RzLy4vc3RhdGljL3Byb2plY3RzL3NyYy9ib290c3RyYXAvanMvc3JjL3Njcm9sbHNweS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cy8uL3N0YXRpYy9wcm9qZWN0cy9zcmMvYm9vdHN0cmFwL2pzL3NyYy90YWIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zdGF0aWMvcHJvamVjdHMvc3JjL2Jvb3RzdHJhcC9qcy9zcmMvdG9hc3QuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zdGF0aWMvcHJvamVjdHMvc3JjL2Jvb3RzdHJhcC9qcy9zcmMvdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cy8uL3N0YXRpYy9wcm9qZWN0cy9zcmMvYm9vdHN0cmFwL2pzL3NyYy91dGlsL2JhY2tkcm9wLmpzIiwid2VicGFjazovL3Byb2plY3RzLy4vc3RhdGljL3Byb2plY3RzL3NyYy9ib290c3RyYXAvanMvc3JjL3V0aWwvY29tcG9uZW50LWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cy8uL3N0YXRpYy9wcm9qZWN0cy9zcmMvYm9vdHN0cmFwL2pzL3NyYy91dGlsL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cy8uL3N0YXRpYy9wcm9qZWN0cy9zcmMvYm9vdHN0cmFwL2pzL3NyYy91dGlsL2ZvY3VzdHJhcC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cy8uL3N0YXRpYy9wcm9qZWN0cy9zcmMvYm9vdHN0cmFwL2pzL3NyYy91dGlsL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3RzLy4vc3RhdGljL3Byb2plY3RzL3NyYy9ib290c3RyYXAvanMvc3JjL3V0aWwvc2FuaXRpemVyLmpzIiwid2VicGFjazovL3Byb2plY3RzLy4vc3RhdGljL3Byb2plY3RzL3NyYy9ib290c3RyYXAvanMvc3JjL3V0aWwvc2Nyb2xsYmFyLmpzIiwid2VicGFjazovL3Byb2plY3RzLy4vc3RhdGljL3Byb2plY3RzL3NyYy9ib290c3RyYXAvanMvc3JjL3V0aWwvc3dpcGUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zdGF0aWMvcHJvamVjdHMvc3JjL2Jvb3RzdHJhcC9qcy9zcmMvdXRpbC90ZW1wbGF0ZS1mYWN0b3J5LmpzIiwid2VicGFjazovL3Byb2plY3RzLy4vc3RhdGljL3Byb2plY3RzL3NyYy9qcy9ib290c3RyYXAtdGFibGUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdHMvLi9zdGF0aWMvcHJvamVjdHMvc3JjL2pzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0cy8uL3N0YXRpYy9wcm9qZWN0cy9zcmMvanMvanF1ZXJ5LmpzIiwid2VicGFjazovL3Byb2plY3RzLy4vc3RhdGljL3Byb2plY3RzL3NyYy9qcy95b3V2aXouanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4yLjMpOiBhbGVydC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7IGRlZmluZUpRdWVyeVBsdWdpbiB9IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5pbXBvcnQgeyBlbmFibGVEaXNtaXNzVHJpZ2dlciB9IGZyb20gJy4vdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnYWxlcnQnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5hbGVydCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5cbmNvbnN0IEVWRU5UX0NMT1NFID0gYGNsb3NlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xPU0VEID0gYGNsb3NlZCR7RVZFTlRfS0VZfWBcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIEFsZXJ0IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgY2xvc2UoKSB7XG4gICAgY29uc3QgY2xvc2VFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMT1NFKVxuXG4gICAgaWYgKGNsb3NlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgIGNvbnN0IGlzQW5pbWF0ZWQgPSB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjaygoKSA9PiB0aGlzLl9kZXN0cm95RWxlbWVudCgpLCB0aGlzLl9lbGVtZW50LCBpc0FuaW1hdGVkKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfZGVzdHJveUVsZW1lbnQoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKVxuICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMT1NFRClcbiAgICB0aGlzLmRpc3Bvc2UoKVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gQWxlcnQuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbmVuYWJsZURpc21pc3NUcmlnZ2VyKEFsZXJ0LCAnY2xvc2UnKVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihBbGVydClcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnRcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMi4zKTogYmFzZS1jb21wb25lbnQuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IHsgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbiwgZ2V0RWxlbWVudCB9IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBDb25maWcgZnJvbSAnLi91dGlsL2NvbmZpZydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBWRVJTSU9OID0gJzUuMi4zJ1xuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBCYXNlQ29tcG9uZW50IGV4dGVuZHMgQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgZWxlbWVudCA9IGdldEVsZW1lbnQoZWxlbWVudClcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcblxuICAgIERhdGEuc2V0KHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVksIHRoaXMpXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgZGlzcG9zZSgpIHtcbiAgICBEYXRhLnJlbW92ZSh0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZKVxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FVkVOVF9LRVkpXG5cbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5TmFtZSBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuICAgICAgdGhpc1twcm9wZXJ0eU5hbWVdID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIF9xdWV1ZUNhbGxiYWNrKGNhbGxiYWNrLCBlbGVtZW50LCBpc0FuaW1hdGVkID0gdHJ1ZSkge1xuICAgIGV4ZWN1dGVBZnRlclRyYW5zaXRpb24oY2FsbGJhY2ssIGVsZW1lbnQsIGlzQW5pbWF0ZWQpXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHRoaXMuX21lcmdlQ29uZmlnT2JqKGNvbmZpZywgdGhpcy5fZWxlbWVudClcbiAgICBjb25maWcgPSB0aGlzLl9jb25maWdBZnRlck1lcmdlKGNvbmZpZylcbiAgICB0aGlzLl90eXBlQ2hlY2tDb25maWcoY29uZmlnKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgZ2V0SW5zdGFuY2UoZWxlbWVudCkge1xuICAgIHJldHVybiBEYXRhLmdldChnZXRFbGVtZW50KGVsZW1lbnQpLCB0aGlzLkRBVEFfS0VZKVxuICB9XG5cbiAgc3RhdGljIGdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCwgY29uZmlnID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5nZXRJbnN0YW5jZShlbGVtZW50KSB8fCBuZXcgdGhpcyhlbGVtZW50LCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IG51bGwpXG4gIH1cblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIGBicy4ke3RoaXMuTkFNRX1gXG4gIH1cblxuICBzdGF0aWMgZ2V0IEVWRU5UX0tFWSgpIHtcbiAgICByZXR1cm4gYC4ke3RoaXMuREFUQV9LRVl9YFxuICB9XG5cbiAgc3RhdGljIGV2ZW50TmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIGAke25hbWV9JHt0aGlzLkVWRU5UX0tFWX1gXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUNvbXBvbmVudFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4yLjMpOiBidXR0b24uanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBkZWZpbmVKUXVlcnlQbHVnaW4gfSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnYnV0dG9uJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuYnV0dG9uJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cImJ1dHRvblwiXSdcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICB0b2dnbGUoKSB7XG4gICAgLy8gVG9nZ2xlIGNsYXNzIGFuZCBzeW5jIHRoZSBgYXJpYS1wcmVzc2VkYCBhdHRyaWJ1dGUgd2l0aCB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBgLnRvZ2dsZSgpYCBtZXRob2RcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJywgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKENMQVNTX05BTUVfQUNUSVZFKSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IEJ1dHRvbi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpXG5cbiAgICAgIGlmIChjb25maWcgPT09ICd0b2dnbGUnKSB7XG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGV2ZW50ID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFNFTEVDVE9SX0RBVEFfVE9HR0xFKVxuICBjb25zdCBkYXRhID0gQnV0dG9uLmdldE9yQ3JlYXRlSW5zdGFuY2UoYnV0dG9uKVxuXG4gIGRhdGEudG9nZ2xlKClcbn0pXG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKEJ1dHRvbilcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjIuMyk6IGNhcm91c2VsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxuICBnZXROZXh0QWN0aXZlRWxlbWVudCxcbiAgaXNSVEwsXG4gIGlzVmlzaWJsZSxcbiAgcmVmbG93LFxuICB0cmlnZ2VyVHJhbnNpdGlvbkVuZFxufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IFN3aXBlIGZyb20gJy4vdXRpbC9zd2lwZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdjYXJvdXNlbCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmNhcm91c2VsJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEFSUk9XX0xFRlRfS0VZID0gJ0Fycm93TGVmdCdcbmNvbnN0IEFSUk9XX1JJR0hUX0tFWSA9ICdBcnJvd1JpZ2h0J1xuY29uc3QgVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCA9IDUwMCAvLyBUaW1lIGZvciBtb3VzZSBjb21wYXQgZXZlbnRzIHRvIGZpcmUgYWZ0ZXIgdG91Y2hcblxuY29uc3QgT1JERVJfTkVYVCA9ICduZXh0J1xuY29uc3QgT1JERVJfUFJFViA9ICdwcmV2J1xuY29uc3QgRElSRUNUSU9OX0xFRlQgPSAnbGVmdCdcbmNvbnN0IERJUkVDVElPTl9SSUdIVCA9ICdyaWdodCdcblxuY29uc3QgRVZFTlRfU0xJREUgPSBgc2xpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TTElEID0gYHNsaWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOID0gYGtleWRvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRUVOVEVSID0gYG1vdXNlZW50ZXIke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRUxFQVZFID0gYG1vdXNlbGVhdmUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9EUkFHX1NUQVJUID0gYGRyYWdzdGFydCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkgPSBgbG9hZCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0NBUk9VU0VMID0gJ2Nhcm91c2VsJ1xuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TTElERSA9ICdzbGlkZSdcbmNvbnN0IENMQVNTX05BTUVfRU5EID0gJ2Nhcm91c2VsLWl0ZW0tZW5kJ1xuY29uc3QgQ0xBU1NfTkFNRV9TVEFSVCA9ICdjYXJvdXNlbC1pdGVtLXN0YXJ0J1xuY29uc3QgQ0xBU1NfTkFNRV9ORVhUID0gJ2Nhcm91c2VsLWl0ZW0tbmV4dCdcbmNvbnN0IENMQVNTX05BTUVfUFJFViA9ICdjYXJvdXNlbC1pdGVtLXByZXYnXG5cbmNvbnN0IFNFTEVDVE9SX0FDVElWRSA9ICcuYWN0aXZlJ1xuY29uc3QgU0VMRUNUT1JfSVRFTSA9ICcuY2Fyb3VzZWwtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0FDVElWRV9JVEVNID0gU0VMRUNUT1JfQUNUSVZFICsgU0VMRUNUT1JfSVRFTVxuY29uc3QgU0VMRUNUT1JfSVRFTV9JTUcgPSAnLmNhcm91c2VsLWl0ZW0gaW1nJ1xuY29uc3QgU0VMRUNUT1JfSU5ESUNBVE9SUyA9ICcuY2Fyb3VzZWwtaW5kaWNhdG9ycydcbmNvbnN0IFNFTEVDVE9SX0RBVEFfU0xJREUgPSAnW2RhdGEtYnMtc2xpZGVdLCBbZGF0YS1icy1zbGlkZS10b10nXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1JJREUgPSAnW2RhdGEtYnMtcmlkZT1cImNhcm91c2VsXCJdJ1xuXG5jb25zdCBLRVlfVE9fRElSRUNUSU9OID0ge1xuICBbQVJST1dfTEVGVF9LRVldOiBESVJFQ1RJT05fUklHSFQsXG4gIFtBUlJPV19SSUdIVF9LRVldOiBESVJFQ1RJT05fTEVGVFxufVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBpbnRlcnZhbDogNTAwMCxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIHBhdXNlOiAnaG92ZXInLFxuICByaWRlOiBmYWxzZSxcbiAgdG91Y2g6IHRydWUsXG4gIHdyYXA6IHRydWVcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGludGVydmFsOiAnKG51bWJlcnxib29sZWFuKScsIC8vIFRPRE86djYgcmVtb3ZlIGJvb2xlYW4gc3VwcG9ydFxuICBrZXlib2FyZDogJ2Jvb2xlYW4nLFxuICBwYXVzZTogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICByaWRlOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIHRvdWNoOiAnYm9vbGVhbicsXG4gIHdyYXA6ICdib29sZWFuJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBDYXJvdXNlbCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjb25maWcpXG5cbiAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG4gICAgdGhpcy50b3VjaFRpbWVvdXQgPSBudWxsXG4gICAgdGhpcy5fc3dpcGVIZWxwZXIgPSBudWxsXG5cbiAgICB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfSU5ESUNBVE9SUywgdGhpcy5fZWxlbWVudClcbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnJpZGUgPT09IENMQVNTX05BTUVfQ0FST1VTRUwpIHtcbiAgICAgIHRoaXMuY3ljbGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgbmV4dCgpIHtcbiAgICB0aGlzLl9zbGlkZShPUkRFUl9ORVhUKVxuICB9XG5cbiAgbmV4dFdoZW5WaXNpYmxlKCkge1xuICAgIC8vIEZJWE1FIFRPRE8gdXNlIGBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGVgXG4gICAgLy8gRG9uJ3QgY2FsbCBuZXh0IHdoZW4gdGhlIHBhZ2UgaXNuJ3QgdmlzaWJsZVxuICAgIC8vIG9yIHRoZSBjYXJvdXNlbCBvciBpdHMgcGFyZW50IGlzbid0IHZpc2libGVcbiAgICBpZiAoIWRvY3VtZW50LmhpZGRlbiAmJiBpc1Zpc2libGUodGhpcy5fZWxlbWVudCkpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgfVxuICB9XG5cbiAgcHJldigpIHtcbiAgICB0aGlzLl9zbGlkZShPUkRFUl9QUkVWKVxuICB9XG5cbiAgcGF1c2UoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgdHJpZ2dlclRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLl9jbGVhckludGVydmFsKClcbiAgfVxuXG4gIGN5Y2xlKCkge1xuICAgIHRoaXMuX2NsZWFySW50ZXJ2YWwoKVxuICAgIHRoaXMuX3VwZGF0ZUludGVydmFsKClcblxuICAgIHRoaXMuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5uZXh0V2hlblZpc2libGUoKSwgdGhpcy5fY29uZmlnLmludGVydmFsKVxuICB9XG5cbiAgX21heWJlRW5hYmxlQ3ljbGUoKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcucmlkZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBFVkVOVF9TTElELCAoKSA9PiB0aGlzLmN5Y2xlKCkpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmN5Y2xlKClcbiAgfVxuXG4gIHRvKGluZGV4KSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLl9nZXRJdGVtcygpXG4gICAgaWYgKGluZGV4ID4gaXRlbXMubGVuZ3RoIC0gMSB8fCBpbmRleCA8IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgRVZFTlRfU0xJRCwgKCkgPT4gdGhpcy50byhpbmRleCkpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleCh0aGlzLl9nZXRBY3RpdmUoKSlcbiAgICBpZiAoYWN0aXZlSW5kZXggPT09IGluZGV4KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBvcmRlciA9IGluZGV4ID4gYWN0aXZlSW5kZXggPyBPUkRFUl9ORVhUIDogT1JERVJfUFJFVlxuXG4gICAgdGhpcy5fc2xpZGUob3JkZXIsIGl0ZW1zW2luZGV4XSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgaWYgKHRoaXMuX3N3aXBlSGVscGVyKSB7XG4gICAgICB0aGlzLl9zd2lwZUhlbHBlci5kaXNwb3NlKClcbiAgICB9XG5cbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgY29uZmlnLmRlZmF1bHRJbnRlcnZhbCA9IGNvbmZpZy5pbnRlcnZhbFxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTiwgZXZlbnQgPT4gdGhpcy5fa2V5ZG93bihldmVudCkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFRU5URVIsICgpID0+IHRoaXMucGF1c2UoKSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRUxFQVZFLCAoKSA9PiB0aGlzLl9tYXliZUVuYWJsZUN5Y2xlKCkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy50b3VjaCAmJiBTd2lwZS5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICB0aGlzLl9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG4gIH1cblxuICBfYWRkVG91Y2hFdmVudExpc3RlbmVycygpIHtcbiAgICBmb3IgKGNvbnN0IGltZyBvZiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lURU1fSU1HLCB0aGlzLl9lbGVtZW50KSkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKGltZywgRVZFTlRfRFJBR19TVEFSVCwgZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSlcbiAgICB9XG5cbiAgICBjb25zdCBlbmRDYWxsQmFjayA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcucGF1c2UgIT09ICdob3ZlcicpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIElmIGl0J3MgYSB0b3VjaC1lbmFibGVkIGRldmljZSwgbW91c2VlbnRlci9sZWF2ZSBhcmUgZmlyZWQgYXNcbiAgICAgIC8vIHBhcnQgb2YgdGhlIG1vdXNlIGNvbXBhdGliaWxpdHkgZXZlbnRzIG9uIGZpcnN0IHRhcCAtIHRoZSBjYXJvdXNlbFxuICAgICAgLy8gd291bGQgc3RvcCBjeWNsaW5nIHVudGlsIHVzZXIgdGFwcGVkIG91dCBvZiBpdDtcbiAgICAgIC8vIGhlcmUsIHdlIGxpc3RlbiBmb3IgdG91Y2hlbmQsIGV4cGxpY2l0bHkgcGF1c2UgdGhlIGNhcm91c2VsXG4gICAgICAvLyAoYXMgaWYgaXQncyB0aGUgc2Vjb25kIHRpbWUgd2UgdGFwIG9uIGl0LCBtb3VzZWVudGVyIGNvbXBhdCBldmVudFxuICAgICAgLy8gaXMgTk9UIGZpcmVkKSBhbmQgYWZ0ZXIgYSB0aW1lb3V0ICh0byBhbGxvdyBmb3IgbW91c2UgY29tcGF0aWJpbGl0eVxuICAgICAgLy8gZXZlbnRzIHRvIGZpcmUpIHdlIGV4cGxpY2l0bHkgcmVzdGFydCBjeWNsaW5nXG5cbiAgICAgIHRoaXMucGF1c2UoKVxuICAgICAgaWYgKHRoaXMudG91Y2hUaW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRvdWNoVGltZW91dClcbiAgICAgIH1cblxuICAgICAgdGhpcy50b3VjaFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX21heWJlRW5hYmxlQ3ljbGUoKSwgVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCArIHRoaXMuX2NvbmZpZy5pbnRlcnZhbClcbiAgICB9XG5cbiAgICBjb25zdCBzd2lwZUNvbmZpZyA9IHtcbiAgICAgIGxlZnRDYWxsYmFjazogKCkgPT4gdGhpcy5fc2xpZGUodGhpcy5fZGlyZWN0aW9uVG9PcmRlcihESVJFQ1RJT05fTEVGVCkpLFxuICAgICAgcmlnaHRDYWxsYmFjazogKCkgPT4gdGhpcy5fc2xpZGUodGhpcy5fZGlyZWN0aW9uVG9PcmRlcihESVJFQ1RJT05fUklHSFQpKSxcbiAgICAgIGVuZENhbGxiYWNrOiBlbmRDYWxsQmFja1xuICAgIH1cblxuICAgIHRoaXMuX3N3aXBlSGVscGVyID0gbmV3IFN3aXBlKHRoaXMuX2VsZW1lbnQsIHN3aXBlQ29uZmlnKVxuICB9XG5cbiAgX2tleWRvd24oZXZlbnQpIHtcbiAgICBpZiAoL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IEtFWV9UT19ESVJFQ1RJT05bZXZlbnQua2V5XVxuICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuX3NsaWRlKHRoaXMuX2RpcmVjdGlvblRvT3JkZXIoZGlyZWN0aW9uKSlcbiAgICB9XG4gIH1cblxuICBfZ2V0SXRlbUluZGV4KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0SXRlbXMoKS5pbmRleE9mKGVsZW1lbnQpXG4gIH1cblxuICBfc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudChpbmRleCkge1xuICAgIGlmICghdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZUluZGljYXRvciA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFLCB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudClcblxuICAgIGFjdGl2ZUluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIGFjdGl2ZUluZGljYXRvci5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpXG5cbiAgICBjb25zdCBuZXdBY3RpdmVJbmRpY2F0b3IgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKGBbZGF0YS1icy1zbGlkZS10bz1cIiR7aW5kZXh9XCJdYCwgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpXG5cbiAgICBpZiAobmV3QWN0aXZlSW5kaWNhdG9yKSB7XG4gICAgICBuZXdBY3RpdmVJbmRpY2F0b3IuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgIG5ld0FjdGl2ZUluZGljYXRvci5zZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcsICd0cnVlJylcbiAgICB9XG4gIH1cblxuICBfdXBkYXRlSW50ZXJ2YWwoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2FjdGl2ZUVsZW1lbnQgfHwgdGhpcy5fZ2V0QWN0aXZlKClcblxuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudEludGVydmFsID0gTnVtYmVyLnBhcnNlSW50KGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLWludGVydmFsJyksIDEwKVxuXG4gICAgdGhpcy5fY29uZmlnLmludGVydmFsID0gZWxlbWVudEludGVydmFsIHx8IHRoaXMuX2NvbmZpZy5kZWZhdWx0SW50ZXJ2YWxcbiAgfVxuXG4gIF9zbGlkZShvcmRlciwgZWxlbWVudCA9IG51bGwpIHtcbiAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gdGhpcy5fZ2V0QWN0aXZlKClcbiAgICBjb25zdCBpc05leHQgPSBvcmRlciA9PT0gT1JERVJfTkVYVFxuICAgIGNvbnN0IG5leHRFbGVtZW50ID0gZWxlbWVudCB8fCBnZXROZXh0QWN0aXZlRWxlbWVudCh0aGlzLl9nZXRJdGVtcygpLCBhY3RpdmVFbGVtZW50LCBpc05leHQsIHRoaXMuX2NvbmZpZy53cmFwKVxuXG4gICAgaWYgKG5leHRFbGVtZW50ID09PSBhY3RpdmVFbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBuZXh0RWxlbWVudEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KG5leHRFbGVtZW50KVxuXG4gICAgY29uc3QgdHJpZ2dlckV2ZW50ID0gZXZlbnROYW1lID0+IHtcbiAgICAgIHJldHVybiBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBldmVudE5hbWUsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogbmV4dEVsZW1lbnQsXG4gICAgICAgIGRpcmVjdGlvbjogdGhpcy5fb3JkZXJUb0RpcmVjdGlvbihvcmRlciksXG4gICAgICAgIGZyb206IHRoaXMuX2dldEl0ZW1JbmRleChhY3RpdmVFbGVtZW50KSxcbiAgICAgICAgdG86IG5leHRFbGVtZW50SW5kZXhcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgc2xpZGVFdmVudCA9IHRyaWdnZXJFdmVudChFVkVOVF9TTElERSlcblxuICAgIGlmIChzbGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghYWN0aXZlRWxlbWVudCB8fCAhbmV4dEVsZW1lbnQpIHtcbiAgICAgIC8vIFNvbWUgd2VpcmRuZXNzIGlzIGhhcHBlbmluZywgc28gd2UgYmFpbFxuICAgICAgLy8gdG9kbzogY2hhbmdlIHRlc3RzIHRoYXQgdXNlIGVtcHR5IGRpdnMgdG8gYXZvaWQgdGhpcyBjaGVja1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNDeWNsaW5nID0gQm9vbGVhbih0aGlzLl9pbnRlcnZhbClcbiAgICB0aGlzLnBhdXNlKClcblxuICAgIHRoaXMuX2lzU2xpZGluZyA9IHRydWVcblxuICAgIHRoaXMuX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQobmV4dEVsZW1lbnRJbmRleClcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gbmV4dEVsZW1lbnRcblxuICAgIGNvbnN0IGRpcmVjdGlvbmFsQ2xhc3NOYW1lID0gaXNOZXh0ID8gQ0xBU1NfTkFNRV9TVEFSVCA6IENMQVNTX05BTUVfRU5EXG4gICAgY29uc3Qgb3JkZXJDbGFzc05hbWUgPSBpc05leHQgPyBDTEFTU19OQU1FX05FWFQgOiBDTEFTU19OQU1FX1BSRVZcblxuICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQob3JkZXJDbGFzc05hbWUpXG5cbiAgICByZWZsb3cobmV4dEVsZW1lbnQpXG5cbiAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uYWxDbGFzc05hbWUpXG4gICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChkaXJlY3Rpb25hbENsYXNzTmFtZSlcblxuICAgIGNvbnN0IGNvbXBsZXRlQ2FsbEJhY2sgPSAoKSA9PiB7XG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGRpcmVjdGlvbmFsQ2xhc3NOYW1lLCBvcmRlckNsYXNzTmFtZSlcbiAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSwgb3JkZXJDbGFzc05hbWUsIGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuXG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuXG4gICAgICB0cmlnZ2VyRXZlbnQoRVZFTlRfU0xJRClcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlQ2FsbEJhY2ssIGFjdGl2ZUVsZW1lbnQsIHRoaXMuX2lzQW5pbWF0ZWQoKSlcblxuICAgIGlmIChpc0N5Y2xpbmcpIHtcbiAgICAgIHRoaXMuY3ljbGUoKVxuICAgIH1cbiAgfVxuXG4gIF9pc0FuaW1hdGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NMSURFKVxuICB9XG5cbiAgX2dldEFjdGl2ZSgpIHtcbiAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkVfSVRFTSwgdGhpcy5fZWxlbWVudClcbiAgfVxuXG4gIF9nZXRJdGVtcygpIHtcbiAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JVEVNLCB0aGlzLl9lbGVtZW50KVxuICB9XG5cbiAgX2NsZWFySW50ZXJ2YWwoKSB7XG4gICAgaWYgKHRoaXMuX2ludGVydmFsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKVxuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgX2RpcmVjdGlvblRvT3JkZXIoZGlyZWN0aW9uKSB7XG4gICAgaWYgKGlzUlRMKCkpIHtcbiAgICAgIHJldHVybiBkaXJlY3Rpb24gPT09IERJUkVDVElPTl9MRUZUID8gT1JERVJfUFJFViA6IE9SREVSX05FWFRcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fTEVGVCA/IE9SREVSX05FWFQgOiBPUkRFUl9QUkVWXG4gIH1cblxuICBfb3JkZXJUb0RpcmVjdGlvbihvcmRlcikge1xuICAgIGlmIChpc1JUTCgpKSB7XG4gICAgICByZXR1cm4gb3JkZXIgPT09IE9SREVSX1BSRVYgPyBESVJFQ1RJT05fTEVGVCA6IERJUkVDVElPTl9SSUdIVFxuICAgIH1cblxuICAgIHJldHVybiBvcmRlciA9PT0gT1JERVJfUFJFViA/IERJUkVDVElPTl9SSUdIVCA6IERJUkVDVElPTl9MRUZUXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBDYXJvdXNlbC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGRhdGEudG8oY29uZmlnKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9TTElERSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcylcblxuICBpZiAoIXRhcmdldCB8fCAhdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0NBUk9VU0VMKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gIGNvbnN0IGNhcm91c2VsID0gQ2Fyb3VzZWwuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0YXJnZXQpXG4gIGNvbnN0IHNsaWRlSW5kZXggPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1icy1zbGlkZS10bycpXG5cbiAgaWYgKHNsaWRlSW5kZXgpIHtcbiAgICBjYXJvdXNlbC50byhzbGlkZUluZGV4KVxuICAgIGNhcm91c2VsLl9tYXliZUVuYWJsZUN5Y2xlKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlKHRoaXMsICdzbGlkZScpID09PSAnbmV4dCcpIHtcbiAgICBjYXJvdXNlbC5uZXh0KClcbiAgICBjYXJvdXNlbC5fbWF5YmVFbmFibGVDeWNsZSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBjYXJvdXNlbC5wcmV2KClcbiAgY2Fyb3VzZWwuX21heWJlRW5hYmxlQ3ljbGUoKVxufSlcblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBjb25zdCBjYXJvdXNlbHMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfUklERSlcblxuICBmb3IgKGNvbnN0IGNhcm91c2VsIG9mIGNhcm91c2Vscykge1xuICAgIENhcm91c2VsLmdldE9yQ3JlYXRlSW5zdGFuY2UoY2Fyb3VzZWwpXG4gIH1cbn0pXG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKENhcm91c2VsKVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4yLjMpOiBjb2xsYXBzZS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZ2V0RWxlbWVudCxcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCxcbiAgcmVmbG93XG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnY29sbGFwc2UnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5jb2xsYXBzZSdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNFID0gJ2NvbGxhcHNlJ1xuY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTSU5HID0gJ2NvbGxhcHNpbmcnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNFRCA9ICdjb2xsYXBzZWQnXG5jb25zdCBDTEFTU19OQU1FX0RFRVBFUl9DSElMRFJFTiA9IGA6c2NvcGUgLiR7Q0xBU1NfTkFNRV9DT0xMQVBTRX0gLiR7Q0xBU1NfTkFNRV9DT0xMQVBTRX1gXG5jb25zdCBDTEFTU19OQU1FX0hPUklaT05UQUwgPSAnY29sbGFwc2UtaG9yaXpvbnRhbCdcblxuY29uc3QgV0lEVEggPSAnd2lkdGgnXG5jb25zdCBIRUlHSFQgPSAnaGVpZ2h0J1xuXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkVTID0gJy5jb2xsYXBzZS5zaG93LCAuY29sbGFwc2UuY29sbGFwc2luZydcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCJdJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBwYXJlbnQ6IG51bGwsXG4gIHRvZ2dsZTogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgcGFyZW50OiAnKG51bGx8ZWxlbWVudCknLFxuICB0b2dnbGU6ICdib29sZWFuJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBDb2xsYXBzZSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjb25maWcpXG5cbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgIHRoaXMuX3RyaWdnZXJBcnJheSA9IFtdXG5cbiAgICBjb25zdCB0b2dnbGVMaXN0ID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRSlcblxuICAgIGZvciAoY29uc3QgZWxlbSBvZiB0b2dnbGVMaXN0KSB7XG4gICAgICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbSlcbiAgICAgIGNvbnN0IGZpbHRlckVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yKVxuICAgICAgICAuZmlsdGVyKGZvdW5kRWxlbWVudCA9PiBmb3VuZEVsZW1lbnQgPT09IHRoaXMuX2VsZW1lbnQpXG5cbiAgICAgIGlmIChzZWxlY3RvciAhPT0gbnVsbCAmJiBmaWx0ZXJFbGVtZW50Lmxlbmd0aCkge1xuICAgICAgICB0aGlzLl90cmlnZ2VyQXJyYXkucHVzaChlbGVtKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2luaXRpYWxpemVDaGlsZHJlbigpXG5cbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcbiAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0aGlzLl90cmlnZ2VyQXJyYXksIHRoaXMuX2lzU2hvd24oKSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnRvZ2dsZSkge1xuICAgICAgdGhpcy50b2dnbGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvdygpXG4gICAgfVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8IHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGFjdGl2ZUNoaWxkcmVuID0gW11cblxuICAgIC8vIGZpbmQgYWN0aXZlIGNoaWxkcmVuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcbiAgICAgIGFjdGl2ZUNoaWxkcmVuID0gdGhpcy5fZ2V0Rmlyc3RMZXZlbENoaWxkcmVuKFNFTEVDVE9SX0FDVElWRVMpXG4gICAgICAgIC5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50ICE9PSB0aGlzLl9lbGVtZW50KVxuICAgICAgICAubWFwKGVsZW1lbnQgPT4gQ29sbGFwc2UuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50LCB7IHRvZ2dsZTogZmFsc2UgfSkpXG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZUNoaWxkcmVuLmxlbmd0aCAmJiBhY3RpdmVDaGlsZHJlblswXS5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVylcbiAgICBpZiAoc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGFjdGl2ZUluc3RhbmNlIG9mIGFjdGl2ZUNoaWxkcmVuKSB7XG4gICAgICBhY3RpdmVJbnN0YW5jZS5oaWRlKClcbiAgICB9XG5cbiAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0UpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0lORylcblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IDBcblxuICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0aGlzLl90cmlnZ2VyQXJyYXksIHRydWUpXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0UsIENMQVNTX05BTUVfU0hPVylcblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcblxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04pXG4gICAgfVxuXG4gICAgY29uc3QgY2FwaXRhbGl6ZWREaW1lbnNpb24gPSBkaW1lbnNpb25bMF0udG9VcHBlckNhc2UoKSArIGRpbWVuc2lvbi5zbGljZSgxKVxuICAgIGNvbnN0IHNjcm9sbFNpemUgPSBgc2Nyb2xsJHtjYXBpdGFsaXplZERpbWVuc2lvbn1gXG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0cnVlKVxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnRbc2Nyb2xsU2l6ZV19cHhgXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgIXRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUpXG4gICAgaWYgKHN0YXJ0RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGltZW5zaW9uID0gdGhpcy5fZ2V0RGltZW5zaW9uKClcblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbZGltZW5zaW9uXX1weGBcblxuICAgIHJlZmxvdyh0aGlzLl9lbGVtZW50KVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0lORylcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRSwgQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgZm9yIChjb25zdCB0cmlnZ2VyIG9mIHRoaXMuX3RyaWdnZXJBcnJheSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IodHJpZ2dlcilcblxuICAgICAgaWYgKGVsZW1lbnQgJiYgIXRoaXMuX2lzU2hvd24oZWxlbWVudCkpIHtcbiAgICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFt0cmlnZ2VyXSwgZmFsc2UpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0lORylcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNFKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnXG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0cnVlKVxuICB9XG5cbiAgX2lzU2hvd24oZWxlbWVudCA9IHRoaXMuX2VsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICBjb25maWcudG9nZ2xlID0gQm9vbGVhbihjb25maWcudG9nZ2xlKSAvLyBDb2VyY2Ugc3RyaW5nIHZhbHVlc1xuICAgIGNvbmZpZy5wYXJlbnQgPSBnZXRFbGVtZW50KGNvbmZpZy5wYXJlbnQpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2dldERpbWVuc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9IT1JJWk9OVEFMKSA/IFdJRFRIIDogSEVJR0hUXG4gIH1cblxuICBfaW5pdGlhbGl6ZUNoaWxkcmVuKCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLl9nZXRGaXJzdExldmVsQ2hpbGRyZW4oU0VMRUNUT1JfREFUQV9UT0dHTEUpXG5cbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgY2hpbGRyZW4pIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KVxuXG4gICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFtlbGVtZW50XSwgdGhpcy5faXNTaG93bihzZWxlY3RlZCkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2dldEZpcnN0TGV2ZWxDaGlsZHJlbihzZWxlY3Rvcikge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gU2VsZWN0b3JFbmdpbmUuZmluZChDTEFTU19OQU1FX0RFRVBFUl9DSElMRFJFTiwgdGhpcy5fY29uZmlnLnBhcmVudClcbiAgICAvLyByZW1vdmUgY2hpbGRyZW4gaWYgZ3JlYXRlciBkZXB0aFxuICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yLCB0aGlzLl9jb25maWcucGFyZW50KS5maWx0ZXIoZWxlbWVudCA9PiAhY2hpbGRyZW4uaW5jbHVkZXMoZWxlbWVudCkpXG4gIH1cblxuICBfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRyaWdnZXJBcnJheSwgaXNPcGVuKSB7XG4gICAgaWYgKCF0cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgdHJpZ2dlckFycmF5KSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoQ0xBU1NfTkFNRV9DT0xMQVBTRUQsICFpc09wZW4pXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGlzT3BlbilcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICBjb25zdCBfY29uZmlnID0ge31cbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycgJiYgL3Nob3d8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICBfY29uZmlnLnRvZ2dsZSA9IGZhbHNlXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gQ29sbGFwc2UuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBfY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIC8vIHByZXZlbnREZWZhdWx0IG9ubHkgZm9yIDxhPiBlbGVtZW50cyAod2hpY2ggY2hhbmdlIHRoZSBVUkwpIG5vdCBpbnNpZGUgdGhlIGNvbGxhcHNpYmxlIGVsZW1lbnRcbiAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnQScgfHwgKGV2ZW50LmRlbGVnYXRlVGFyZ2V0ICYmIGV2ZW50LmRlbGVnYXRlVGFyZ2V0LnRhZ05hbWUgPT09ICdBJykpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yRnJvbUVsZW1lbnQodGhpcylcbiAgY29uc3Qgc2VsZWN0b3JFbGVtZW50cyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpXG5cbiAgZm9yIChjb25zdCBlbGVtZW50IG9mIHNlbGVjdG9yRWxlbWVudHMpIHtcbiAgICBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIHsgdG9nZ2xlOiBmYWxzZSB9KS50b2dnbGUoKVxuICB9XG59KVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihDb2xsYXBzZSlcblxuZXhwb3J0IGRlZmF1bHQgQ29sbGFwc2VcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMi4zKTogZG9tL2RhdGEuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IGVsZW1lbnRNYXAgPSBuZXcgTWFwKClcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzZXQoZWxlbWVudCwga2V5LCBpbnN0YW5jZSkge1xuICAgIGlmICghZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgIGVsZW1lbnRNYXAuc2V0KGVsZW1lbnQsIG5ldyBNYXAoKSlcbiAgICB9XG5cbiAgICBjb25zdCBpbnN0YW5jZU1hcCA9IGVsZW1lbnRNYXAuZ2V0KGVsZW1lbnQpXG5cbiAgICAvLyBtYWtlIGl0IGNsZWFyIHdlIG9ubHkgd2FudCBvbmUgaW5zdGFuY2UgcGVyIGVsZW1lbnRcbiAgICAvLyBjYW4gYmUgcmVtb3ZlZCBsYXRlciB3aGVuIG11bHRpcGxlIGtleS9pbnN0YW5jZXMgYXJlIGZpbmUgdG8gYmUgdXNlZFxuICAgIGlmICghaW5zdGFuY2VNYXAuaGFzKGtleSkgJiYgaW5zdGFuY2VNYXAuc2l6ZSAhPT0gMCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEJvb3RzdHJhcCBkb2Vzbid0IGFsbG93IG1vcmUgdGhhbiBvbmUgaW5zdGFuY2UgcGVyIGVsZW1lbnQuIEJvdW5kIGluc3RhbmNlOiAke0FycmF5LmZyb20oaW5zdGFuY2VNYXAua2V5cygpKVswXX0uYClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGluc3RhbmNlTWFwLnNldChrZXksIGluc3RhbmNlKVxuICB9LFxuXG4gIGdldChlbGVtZW50LCBrZXkpIHtcbiAgICBpZiAoZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgIHJldHVybiBlbGVtZW50TWFwLmdldChlbGVtZW50KS5nZXQoa2V5KSB8fCBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfSxcblxuICByZW1vdmUoZWxlbWVudCwga2V5KSB7XG4gICAgaWYgKCFlbGVtZW50TWFwLmhhcyhlbGVtZW50KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaW5zdGFuY2VNYXAgPSBlbGVtZW50TWFwLmdldChlbGVtZW50KVxuXG4gICAgaW5zdGFuY2VNYXAuZGVsZXRlKGtleSlcblxuICAgIC8vIGZyZWUgdXAgZWxlbWVudCByZWZlcmVuY2VzIGlmIHRoZXJlIGFyZSBubyBpbnN0YW5jZXMgbGVmdCBmb3IgYW4gZWxlbWVudFxuICAgIGlmIChpbnN0YW5jZU1hcC5zaXplID09PSAwKSB7XG4gICAgICBlbGVtZW50TWFwLmRlbGV0ZShlbGVtZW50KVxuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4yLjMpOiBkb20vZXZlbnQtaGFuZGxlci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7IGdldGpRdWVyeSB9IGZyb20gJy4uL3V0aWwvaW5kZXgnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgbmFtZXNwYWNlUmVnZXggPSAvW14uXSooPz1cXC4uKilcXC58LiovXG5jb25zdCBzdHJpcE5hbWVSZWdleCA9IC9cXC4uKi9cbmNvbnN0IHN0cmlwVWlkUmVnZXggPSAvOjpcXGQrJC9cbmNvbnN0IGV2ZW50UmVnaXN0cnkgPSB7fSAvLyBFdmVudHMgc3RvcmFnZVxubGV0IHVpZEV2ZW50ID0gMVxuY29uc3QgY3VzdG9tRXZlbnRzID0ge1xuICBtb3VzZWVudGVyOiAnbW91c2VvdmVyJyxcbiAgbW91c2VsZWF2ZTogJ21vdXNlb3V0J1xufVxuXG5jb25zdCBuYXRpdmVFdmVudHMgPSBuZXcgU2V0KFtcbiAgJ2NsaWNrJyxcbiAgJ2RibGNsaWNrJyxcbiAgJ21vdXNldXAnLFxuICAnbW91c2Vkb3duJyxcbiAgJ2NvbnRleHRtZW51JyxcbiAgJ21vdXNld2hlZWwnLFxuICAnRE9NTW91c2VTY3JvbGwnLFxuICAnbW91c2VvdmVyJyxcbiAgJ21vdXNlb3V0JyxcbiAgJ21vdXNlbW92ZScsXG4gICdzZWxlY3RzdGFydCcsXG4gICdzZWxlY3RlbmQnLFxuICAna2V5ZG93bicsXG4gICdrZXlwcmVzcycsXG4gICdrZXl1cCcsXG4gICdvcmllbnRhdGlvbmNoYW5nZScsXG4gICd0b3VjaHN0YXJ0JyxcbiAgJ3RvdWNobW92ZScsXG4gICd0b3VjaGVuZCcsXG4gICd0b3VjaGNhbmNlbCcsXG4gICdwb2ludGVyZG93bicsXG4gICdwb2ludGVybW92ZScsXG4gICdwb2ludGVydXAnLFxuICAncG9pbnRlcmxlYXZlJyxcbiAgJ3BvaW50ZXJjYW5jZWwnLFxuICAnZ2VzdHVyZXN0YXJ0JyxcbiAgJ2dlc3R1cmVjaGFuZ2UnLFxuICAnZ2VzdHVyZWVuZCcsXG4gICdmb2N1cycsXG4gICdibHVyJyxcbiAgJ2NoYW5nZScsXG4gICdyZXNldCcsXG4gICdzZWxlY3QnLFxuICAnc3VibWl0JyxcbiAgJ2ZvY3VzaW4nLFxuICAnZm9jdXNvdXQnLFxuICAnbG9hZCcsXG4gICd1bmxvYWQnLFxuICAnYmVmb3JldW5sb2FkJyxcbiAgJ3Jlc2l6ZScsXG4gICdtb3ZlJyxcbiAgJ0RPTUNvbnRlbnRMb2FkZWQnLFxuICAncmVhZHlzdGF0ZWNoYW5nZScsXG4gICdlcnJvcicsXG4gICdhYm9ydCcsXG4gICdzY3JvbGwnXG5dKVxuXG4vKipcbiAqIFByaXZhdGUgbWV0aG9kc1xuICovXG5cbmZ1bmN0aW9uIG1ha2VFdmVudFVpZChlbGVtZW50LCB1aWQpIHtcbiAgcmV0dXJuICh1aWQgJiYgYCR7dWlkfTo6JHt1aWRFdmVudCsrfWApIHx8IGVsZW1lbnQudWlkRXZlbnQgfHwgdWlkRXZlbnQrK1xufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50RXZlbnRzKGVsZW1lbnQpIHtcbiAgY29uc3QgdWlkID0gbWFrZUV2ZW50VWlkKGVsZW1lbnQpXG5cbiAgZWxlbWVudC51aWRFdmVudCA9IHVpZFxuICBldmVudFJlZ2lzdHJ5W3VpZF0gPSBldmVudFJlZ2lzdHJ5W3VpZF0gfHwge31cblxuICByZXR1cm4gZXZlbnRSZWdpc3RyeVt1aWRdXG59XG5cbmZ1bmN0aW9uIGJvb3RzdHJhcEhhbmRsZXIoZWxlbWVudCwgZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpIHtcbiAgICBoeWRyYXRlT2JqKGV2ZW50LCB7IGRlbGVnYXRlVGFyZ2V0OiBlbGVtZW50IH0pXG5cbiAgICBpZiAoaGFuZGxlci5vbmVPZmYpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgZXZlbnQudHlwZSwgZm4pXG4gICAgfVxuXG4gICAgcmV0dXJuIGZuLmFwcGx5KGVsZW1lbnQsIFtldmVudF0pXG4gIH1cbn1cblxuZnVuY3Rpb24gYm9vdHN0cmFwRGVsZWdhdGlvbkhhbmRsZXIoZWxlbWVudCwgc2VsZWN0b3IsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG5cbiAgICBmb3IgKGxldCB7IHRhcmdldCB9ID0gZXZlbnQ7IHRhcmdldCAmJiB0YXJnZXQgIT09IHRoaXM7IHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlKSB7XG4gICAgICBmb3IgKGNvbnN0IGRvbUVsZW1lbnQgb2YgZG9tRWxlbWVudHMpIHtcbiAgICAgICAgaWYgKGRvbUVsZW1lbnQgIT09IHRhcmdldCkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBoeWRyYXRlT2JqKGV2ZW50LCB7IGRlbGVnYXRlVGFyZ2V0OiB0YXJnZXQgfSlcblxuICAgICAgICBpZiAoaGFuZGxlci5vbmVPZmYpIHtcbiAgICAgICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsIGV2ZW50LnR5cGUsIHNlbGVjdG9yLCBmbilcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmbi5hcHBseSh0YXJnZXQsIFtldmVudF0pXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRIYW5kbGVyKGV2ZW50cywgY2FsbGFibGUsIGRlbGVnYXRpb25TZWxlY3RvciA9IG51bGwpIHtcbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoZXZlbnRzKVxuICAgIC5maW5kKGV2ZW50ID0+IGV2ZW50LmNhbGxhYmxlID09PSBjYWxsYWJsZSAmJiBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IgPT09IGRlbGVnYXRpb25TZWxlY3Rvcilcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUGFyYW1ldGVycyhvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKSB7XG4gIGNvbnN0IGlzRGVsZWdhdGVkID0gdHlwZW9mIGhhbmRsZXIgPT09ICdzdHJpbmcnXG4gIC8vIHRvZG86IHRvb2x0aXAgcGFzc2VzIGBmYWxzZWAgaW5zdGVhZCBvZiBzZWxlY3Rvciwgc28gd2UgbmVlZCB0byBjaGVja1xuICBjb25zdCBjYWxsYWJsZSA9IGlzRGVsZWdhdGVkID8gZGVsZWdhdGlvbkZ1bmN0aW9uIDogKGhhbmRsZXIgfHwgZGVsZWdhdGlvbkZ1bmN0aW9uKVxuICBsZXQgdHlwZUV2ZW50ID0gZ2V0VHlwZUV2ZW50KG9yaWdpbmFsVHlwZUV2ZW50KVxuXG4gIGlmICghbmF0aXZlRXZlbnRzLmhhcyh0eXBlRXZlbnQpKSB7XG4gICAgdHlwZUV2ZW50ID0gb3JpZ2luYWxUeXBlRXZlbnRcbiAgfVxuXG4gIHJldHVybiBbaXNEZWxlZ2F0ZWQsIGNhbGxhYmxlLCB0eXBlRXZlbnRdXG59XG5cbmZ1bmN0aW9uIGFkZEhhbmRsZXIoZWxlbWVudCwgb3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbiwgb25lT2ZmKSB7XG4gIGlmICh0eXBlb2Ygb3JpZ2luYWxUeXBlRXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBsZXQgW2lzRGVsZWdhdGVkLCBjYWxsYWJsZSwgdHlwZUV2ZW50XSA9IG5vcm1hbGl6ZVBhcmFtZXRlcnMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbilcblxuICAvLyBpbiBjYXNlIG9mIG1vdXNlZW50ZXIgb3IgbW91c2VsZWF2ZSB3cmFwIHRoZSBoYW5kbGVyIHdpdGhpbiBhIGZ1bmN0aW9uIHRoYXQgY2hlY2tzIGZvciBpdHMgRE9NIHBvc2l0aW9uXG4gIC8vIHRoaXMgcHJldmVudHMgdGhlIGhhbmRsZXIgZnJvbSBiZWluZyBkaXNwYXRjaGVkIHRoZSBzYW1lIHdheSBhcyBtb3VzZW92ZXIgb3IgbW91c2VvdXQgZG9lc1xuICBpZiAob3JpZ2luYWxUeXBlRXZlbnQgaW4gY3VzdG9tRXZlbnRzKSB7XG4gICAgY29uc3Qgd3JhcEZ1bmN0aW9uID0gZm4gPT4ge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoIWV2ZW50LnJlbGF0ZWRUYXJnZXQgfHwgKGV2ZW50LnJlbGF0ZWRUYXJnZXQgIT09IGV2ZW50LmRlbGVnYXRlVGFyZ2V0ICYmICFldmVudC5kZWxlZ2F0ZVRhcmdldC5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KSkpIHtcbiAgICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNhbGxhYmxlID0gd3JhcEZ1bmN0aW9uKGNhbGxhYmxlKVxuICB9XG5cbiAgY29uc3QgZXZlbnRzID0gZ2V0RWxlbWVudEV2ZW50cyhlbGVtZW50KVxuICBjb25zdCBoYW5kbGVycyA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IChldmVudHNbdHlwZUV2ZW50XSA9IHt9KVxuICBjb25zdCBwcmV2aW91c0Z1bmN0aW9uID0gZmluZEhhbmRsZXIoaGFuZGxlcnMsIGNhbGxhYmxlLCBpc0RlbGVnYXRlZCA/IGhhbmRsZXIgOiBudWxsKVxuXG4gIGlmIChwcmV2aW91c0Z1bmN0aW9uKSB7XG4gICAgcHJldmlvdXNGdW5jdGlvbi5vbmVPZmYgPSBwcmV2aW91c0Z1bmN0aW9uLm9uZU9mZiAmJiBvbmVPZmZcblxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgdWlkID0gbWFrZUV2ZW50VWlkKGNhbGxhYmxlLCBvcmlnaW5hbFR5cGVFdmVudC5yZXBsYWNlKG5hbWVzcGFjZVJlZ2V4LCAnJykpXG4gIGNvbnN0IGZuID0gaXNEZWxlZ2F0ZWQgP1xuICAgIGJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyKGVsZW1lbnQsIGhhbmRsZXIsIGNhbGxhYmxlKSA6XG4gICAgYm9vdHN0cmFwSGFuZGxlcihlbGVtZW50LCBjYWxsYWJsZSlcblxuICBmbi5kZWxlZ2F0aW9uU2VsZWN0b3IgPSBpc0RlbGVnYXRlZCA/IGhhbmRsZXIgOiBudWxsXG4gIGZuLmNhbGxhYmxlID0gY2FsbGFibGVcbiAgZm4ub25lT2ZmID0gb25lT2ZmXG4gIGZuLnVpZEV2ZW50ID0gdWlkXG4gIGhhbmRsZXJzW3VpZF0gPSBmblxuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlRXZlbnQsIGZuLCBpc0RlbGVnYXRlZClcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvblNlbGVjdG9yKSB7XG4gIGNvbnN0IGZuID0gZmluZEhhbmRsZXIoZXZlbnRzW3R5cGVFdmVudF0sIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3RvcilcblxuICBpZiAoIWZuKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZUV2ZW50LCBmbiwgQm9vbGVhbihkZWxlZ2F0aW9uU2VsZWN0b3IpKVxuICBkZWxldGUgZXZlbnRzW3R5cGVFdmVudF1bZm4udWlkRXZlbnRdXG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyhlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgbmFtZXNwYWNlKSB7XG4gIGNvbnN0IHN0b3JlRWxlbWVudEV2ZW50ID0gZXZlbnRzW3R5cGVFdmVudF0gfHwge31cblxuICBmb3IgKGNvbnN0IGhhbmRsZXJLZXkgb2YgT2JqZWN0LmtleXMoc3RvcmVFbGVtZW50RXZlbnQpKSB7XG4gICAgaWYgKGhhbmRsZXJLZXkuaW5jbHVkZXMobmFtZXNwYWNlKSkge1xuICAgICAgY29uc3QgZXZlbnQgPSBzdG9yZUVsZW1lbnRFdmVudFtoYW5kbGVyS2V5XVxuICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgZXZlbnQuY2FsbGFibGUsIGV2ZW50LmRlbGVnYXRpb25TZWxlY3RvcilcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VHlwZUV2ZW50KGV2ZW50KSB7XG4gIC8vIGFsbG93IHRvIGdldCB0aGUgbmF0aXZlIGV2ZW50cyBmcm9tIG5hbWVzcGFjZWQgZXZlbnRzICgnY2xpY2suYnMuYnV0dG9uJyAtLT4gJ2NsaWNrJylcbiAgZXZlbnQgPSBldmVudC5yZXBsYWNlKHN0cmlwTmFtZVJlZ2V4LCAnJylcbiAgcmV0dXJuIGN1c3RvbUV2ZW50c1tldmVudF0gfHwgZXZlbnRcbn1cblxuY29uc3QgRXZlbnRIYW5kbGVyID0ge1xuICBvbihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKSB7XG4gICAgYWRkSGFuZGxlcihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uLCBmYWxzZSlcbiAgfSxcblxuICBvbmUoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICAgIGFkZEhhbmRsZXIoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbiwgdHJ1ZSlcbiAgfSxcblxuICBvZmYoZWxlbWVudCwgb3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxUeXBlRXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBbaXNEZWxlZ2F0ZWQsIGNhbGxhYmxlLCB0eXBlRXZlbnRdID0gbm9ybWFsaXplUGFyYW1ldGVycyhvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKVxuICAgIGNvbnN0IGluTmFtZXNwYWNlID0gdHlwZUV2ZW50ICE9PSBvcmlnaW5hbFR5cGVFdmVudFxuICAgIGNvbnN0IGV2ZW50cyA9IGdldEVsZW1lbnRFdmVudHMoZWxlbWVudClcbiAgICBjb25zdCBzdG9yZUVsZW1lbnRFdmVudCA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IHt9XG4gICAgY29uc3QgaXNOYW1lc3BhY2UgPSBvcmlnaW5hbFR5cGVFdmVudC5zdGFydHNXaXRoKCcuJylcblxuICAgIGlmICh0eXBlb2YgY2FsbGFibGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBTaW1wbGVzdCBjYXNlOiBoYW5kbGVyIGlzIHBhc3NlZCwgcmVtb3ZlIHRoYXQgbGlzdGVuZXIgT05MWS5cbiAgICAgIGlmICghT2JqZWN0LmtleXMoc3RvcmVFbGVtZW50RXZlbnQpLmxlbmd0aCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgY2FsbGFibGUsIGlzRGVsZWdhdGVkID8gaGFuZGxlciA6IG51bGwpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaXNOYW1lc3BhY2UpIHtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudEV2ZW50IG9mIE9iamVjdC5rZXlzKGV2ZW50cykpIHtcbiAgICAgICAgcmVtb3ZlTmFtZXNwYWNlZEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50cywgZWxlbWVudEV2ZW50LCBvcmlnaW5hbFR5cGVFdmVudC5zbGljZSgxKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGtleUhhbmRsZXJzIG9mIE9iamVjdC5rZXlzKHN0b3JlRWxlbWVudEV2ZW50KSkge1xuICAgICAgY29uc3QgaGFuZGxlcktleSA9IGtleUhhbmRsZXJzLnJlcGxhY2Uoc3RyaXBVaWRSZWdleCwgJycpXG5cbiAgICAgIGlmICghaW5OYW1lc3BhY2UgfHwgb3JpZ2luYWxUeXBlRXZlbnQuaW5jbHVkZXMoaGFuZGxlcktleSkpIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBzdG9yZUVsZW1lbnRFdmVudFtrZXlIYW5kbGVyc11cbiAgICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgZXZlbnQuY2FsbGFibGUsIGV2ZW50LmRlbGVnYXRpb25TZWxlY3RvcilcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgdHJpZ2dlcihlbGVtZW50LCBldmVudCwgYXJncykge1xuICAgIGlmICh0eXBlb2YgZXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0ICQgPSBnZXRqUXVlcnkoKVxuICAgIGNvbnN0IHR5cGVFdmVudCA9IGdldFR5cGVFdmVudChldmVudClcbiAgICBjb25zdCBpbk5hbWVzcGFjZSA9IGV2ZW50ICE9PSB0eXBlRXZlbnRcblxuICAgIGxldCBqUXVlcnlFdmVudCA9IG51bGxcbiAgICBsZXQgYnViYmxlcyA9IHRydWVcbiAgICBsZXQgbmF0aXZlRGlzcGF0Y2ggPSB0cnVlXG4gICAgbGV0IGRlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZVxuXG4gICAgaWYgKGluTmFtZXNwYWNlICYmICQpIHtcbiAgICAgIGpRdWVyeUV2ZW50ID0gJC5FdmVudChldmVudCwgYXJncylcblxuICAgICAgJChlbGVtZW50KS50cmlnZ2VyKGpRdWVyeUV2ZW50KVxuICAgICAgYnViYmxlcyA9ICFqUXVlcnlFdmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpXG4gICAgICBuYXRpdmVEaXNwYXRjaCA9ICFqUXVlcnlFdmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpXG4gICAgICBkZWZhdWx0UHJldmVudGVkID0galF1ZXJ5RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKClcbiAgICB9XG5cbiAgICBsZXQgZXZ0ID0gbmV3IEV2ZW50KGV2ZW50LCB7IGJ1YmJsZXMsIGNhbmNlbGFibGU6IHRydWUgfSlcbiAgICBldnQgPSBoeWRyYXRlT2JqKGV2dCwgYXJncylcblxuICAgIGlmIChkZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmIChuYXRpdmVEaXNwYXRjaCkge1xuICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2dClcbiAgICB9XG5cbiAgICBpZiAoZXZ0LmRlZmF1bHRQcmV2ZW50ZWQgJiYgalF1ZXJ5RXZlbnQpIHtcbiAgICAgIGpRdWVyeUV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICByZXR1cm4gZXZ0XG4gIH1cbn1cblxuZnVuY3Rpb24gaHlkcmF0ZU9iaihvYmosIG1ldGEpIHtcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMobWV0YSB8fCB7fSkpIHtcbiAgICB0cnkge1xuICAgICAgb2JqW2tleV0gPSB2YWx1ZVxuICAgIH0gY2F0Y2gge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmpcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRIYW5kbGVyXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjIuMyk6IGRvbS9tYW5pcHVsYXRvci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZURhdGEodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSAndHJ1ZScpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKHZhbHVlID09PSAnZmFsc2UnKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBpZiAodmFsdWUgPT09IE51bWJlcih2YWx1ZSkudG9TdHJpbmcoKSkge1xuICAgIHJldHVybiBOdW1iZXIodmFsdWUpXG4gIH1cblxuICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSAnbnVsbCcpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSlcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplRGF0YUtleShrZXkpIHtcbiAgcmV0dXJuIGtleS5yZXBsYWNlKC9bQS1aXS9nLCBjaHIgPT4gYC0ke2Noci50b0xvd2VyQ2FzZSgpfWApXG59XG5cbmNvbnN0IE1hbmlwdWxhdG9yID0ge1xuICBzZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSwgdmFsdWUpIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gLCB2YWx1ZSlcbiAgfSxcblxuICByZW1vdmVEYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSkge1xuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWApXG4gIH0sXG5cbiAgZ2V0RGF0YUF0dHJpYnV0ZXMoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfVxuXG4gICAgY29uc3QgYXR0cmlidXRlcyA9IHt9XG4gICAgY29uc3QgYnNLZXlzID0gT2JqZWN0LmtleXMoZWxlbWVudC5kYXRhc2V0KS5maWx0ZXIoa2V5ID0+IGtleS5zdGFydHNXaXRoKCdicycpICYmICFrZXkuc3RhcnRzV2l0aCgnYnNDb25maWcnKSlcblxuICAgIGZvciAoY29uc3Qga2V5IG9mIGJzS2V5cykge1xuICAgICAgbGV0IHB1cmVLZXkgPSBrZXkucmVwbGFjZSgvXmJzLywgJycpXG4gICAgICBwdXJlS2V5ID0gcHVyZUtleS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHB1cmVLZXkuc2xpY2UoMSwgcHVyZUtleS5sZW5ndGgpXG4gICAgICBhdHRyaWJ1dGVzW3B1cmVLZXldID0gbm9ybWFsaXplRGF0YShlbGVtZW50LmRhdGFzZXRba2V5XSlcbiAgICB9XG5cbiAgICByZXR1cm4gYXR0cmlidXRlc1xuICB9LFxuXG4gIGdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5KSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZURhdGEoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YCkpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFuaXB1bGF0b3JcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMi4zKTogZG9tL3NlbGVjdG9yLWVuZ2luZS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7IGlzRGlzYWJsZWQsIGlzVmlzaWJsZSB9IGZyb20gJy4uL3V0aWwvaW5kZXgnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgU2VsZWN0b3JFbmdpbmUgPSB7XG4gIGZpbmQoc2VsZWN0b3IsIGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KC4uLkVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3JBbGwuY2FsbChlbGVtZW50LCBzZWxlY3RvcikpXG4gIH0sXG5cbiAgZmluZE9uZShzZWxlY3RvciwgZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgIHJldHVybiBFbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpXG4gIH0sXG5cbiAgY2hpbGRyZW4oZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KC4uLmVsZW1lbnQuY2hpbGRyZW4pLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5tYXRjaGVzKHNlbGVjdG9yKSlcbiAgfSxcblxuICBwYXJlbnRzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgY29uc3QgcGFyZW50cyA9IFtdXG4gICAgbGV0IGFuY2VzdG9yID0gZWxlbWVudC5wYXJlbnROb2RlLmNsb3Nlc3Qoc2VsZWN0b3IpXG5cbiAgICB3aGlsZSAoYW5jZXN0b3IpIHtcbiAgICAgIHBhcmVudHMucHVzaChhbmNlc3RvcilcbiAgICAgIGFuY2VzdG9yID0gYW5jZXN0b3IucGFyZW50Tm9kZS5jbG9zZXN0KHNlbGVjdG9yKVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRzXG4gIH0sXG5cbiAgcHJldihlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGxldCBwcmV2aW91cyA9IGVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZ1xuXG4gICAgd2hpbGUgKHByZXZpb3VzKSB7XG4gICAgICBpZiAocHJldmlvdXMubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIFtwcmV2aW91c11cbiAgICAgIH1cblxuICAgICAgcHJldmlvdXMgPSBwcmV2aW91cy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH0sXG4gIC8vIFRPRE86IHRoaXMgaXMgbm93IHVudXNlZDsgcmVtb3ZlIGxhdGVyIGFsb25nIHdpdGggcHJldigpXG4gIG5leHQoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBsZXQgbmV4dCA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nXG5cbiAgICB3aGlsZSAobmV4dCkge1xuICAgICAgaWYgKG5leHQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIFtuZXh0XVxuICAgICAgfVxuXG4gICAgICBuZXh0ID0gbmV4dC5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfSxcblxuICBmb2N1c2FibGVDaGlsZHJlbihlbGVtZW50KSB7XG4gICAgY29uc3QgZm9jdXNhYmxlcyA9IFtcbiAgICAgICdhJyxcbiAgICAgICdidXR0b24nLFxuICAgICAgJ2lucHV0JyxcbiAgICAgICd0ZXh0YXJlYScsXG4gICAgICAnc2VsZWN0JyxcbiAgICAgICdkZXRhaWxzJyxcbiAgICAgICdbdGFiaW5kZXhdJyxcbiAgICAgICdbY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiXSdcbiAgICBdLm1hcChzZWxlY3RvciA9PiBgJHtzZWxlY3Rvcn06bm90KFt0YWJpbmRleF49XCItXCJdKWApLmpvaW4oJywnKVxuXG4gICAgcmV0dXJuIHRoaXMuZmluZChmb2N1c2FibGVzLCBlbGVtZW50KS5maWx0ZXIoZWwgPT4gIWlzRGlzYWJsZWQoZWwpICYmIGlzVmlzaWJsZShlbCkpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0b3JFbmdpbmVcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMi4zKTogZHJvcGRvd24uanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgKiBhcyBQb3BwZXIgZnJvbSAnQHBvcHBlcmpzL2NvcmUnXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldEVsZW1lbnQsXG4gIGdldE5leHRBY3RpdmVFbGVtZW50LFxuICBpc0Rpc2FibGVkLFxuICBpc0VsZW1lbnQsXG4gIGlzUlRMLFxuICBpc1Zpc2libGUsXG4gIG5vb3Bcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdkcm9wZG93bidcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmRyb3Bkb3duJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEVTQ0FQRV9LRVkgPSAnRXNjYXBlJ1xuY29uc3QgVEFCX0tFWSA9ICdUYWInXG5jb25zdCBBUlJPV19VUF9LRVkgPSAnQXJyb3dVcCdcbmNvbnN0IEFSUk9XX0RPV05fS0VZID0gJ0Fycm93RG93bidcbmNvbnN0IFJJR0hUX01PVVNFX0JVVFRPTiA9IDIgLy8gTW91c2VFdmVudC5idXR0b24gdmFsdWUgZm9yIHRoZSBzZWNvbmRhcnkgYnV0dG9uLCB1c3VhbGx5IHRoZSByaWdodCBidXR0b25cblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJID0gYGtleWRvd24ke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlVUF9EQVRBX0FQSSA9IGBrZXl1cCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX0RST1BVUCA9ICdkcm9wdXAnXG5jb25zdCBDTEFTU19OQU1FX0RST1BFTkQgPSAnZHJvcGVuZCdcbmNvbnN0IENMQVNTX05BTUVfRFJPUFNUQVJUID0gJ2Ryb3BzdGFydCdcbmNvbnN0IENMQVNTX05BTUVfRFJPUFVQX0NFTlRFUiA9ICdkcm9wdXAtY2VudGVyJ1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QRE9XTl9DRU5URVIgPSAnZHJvcGRvd24tY2VudGVyJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiXTpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFX1NIT1dOID0gYCR7U0VMRUNUT1JfREFUQV9UT0dHTEV9LiR7Q0xBU1NfTkFNRV9TSE9XfWBcbmNvbnN0IFNFTEVDVE9SX01FTlUgPSAnLmRyb3Bkb3duLW1lbnUnXG5jb25zdCBTRUxFQ1RPUl9OQVZCQVIgPSAnLm5hdmJhcidcbmNvbnN0IFNFTEVDVE9SX05BVkJBUl9OQVYgPSAnLm5hdmJhci1uYXYnXG5jb25zdCBTRUxFQ1RPUl9WSVNJQkxFX0lURU1TID0gJy5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJ1xuXG5jb25zdCBQTEFDRU1FTlRfVE9QID0gaXNSVEwoKSA/ICd0b3AtZW5kJyA6ICd0b3Atc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfVE9QRU5EID0gaXNSVEwoKSA/ICd0b3Atc3RhcnQnIDogJ3RvcC1lbmQnXG5jb25zdCBQTEFDRU1FTlRfQk9UVE9NID0gaXNSVEwoKSA/ICdib3R0b20tZW5kJyA6ICdib3R0b20tc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfQk9UVE9NRU5EID0gaXNSVEwoKSA/ICdib3R0b20tc3RhcnQnIDogJ2JvdHRvbS1lbmQnXG5jb25zdCBQTEFDRU1FTlRfUklHSFQgPSBpc1JUTCgpID8gJ2xlZnQtc3RhcnQnIDogJ3JpZ2h0LXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX0xFRlQgPSBpc1JUTCgpID8gJ3JpZ2h0LXN0YXJ0JyA6ICdsZWZ0LXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX1RPUENFTlRFUiA9ICd0b3AnXG5jb25zdCBQTEFDRU1FTlRfQk9UVE9NQ0VOVEVSID0gJ2JvdHRvbSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYXV0b0Nsb3NlOiB0cnVlLFxuICBib3VuZGFyeTogJ2NsaXBwaW5nUGFyZW50cycsXG4gIGRpc3BsYXk6ICdkeW5hbWljJyxcbiAgb2Zmc2V0OiBbMCwgMl0sXG4gIHBvcHBlckNvbmZpZzogbnVsbCxcbiAgcmVmZXJlbmNlOiAndG9nZ2xlJ1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYXV0b0Nsb3NlOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIGJvdW5kYXJ5OiAnKHN0cmluZ3xlbGVtZW50KScsXG4gIGRpc3BsYXk6ICdzdHJpbmcnLFxuICBvZmZzZXQ6ICcoYXJyYXl8c3RyaW5nfGZ1bmN0aW9uKScsXG4gIHBvcHBlckNvbmZpZzogJyhudWxsfG9iamVjdHxmdW5jdGlvbiknLFxuICByZWZlcmVuY2U6ICcoc3RyaW5nfGVsZW1lbnR8b2JqZWN0KSdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIHRoaXMuX3BhcmVudCA9IHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSAvLyBkcm9wZG93biB3cmFwcGVyXG4gICAgLy8gdG9kbzogdjYgcmV2ZXJ0ICMzNzAxMSAmIGNoYW5nZSBtYXJrdXAgaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvNS4yL2Zvcm1zL2lucHV0LWdyb3VwL1xuICAgIHRoaXMuX21lbnUgPSBTZWxlY3RvckVuZ2luZS5uZXh0KHRoaXMuX2VsZW1lbnQsIFNFTEVDVE9SX01FTlUpWzBdIHx8XG4gICAgICBTZWxlY3RvckVuZ2luZS5wcmV2KHRoaXMuX2VsZW1lbnQsIFNFTEVDVE9SX01FTlUpWzBdIHx8XG4gICAgICBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX01FTlUsIHRoaXMuX3BhcmVudClcbiAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHRvZ2dsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNTaG93bigpID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3coKVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzLl9lbGVtZW50KSB8fCB0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVywgcmVsYXRlZFRhcmdldClcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY3JlYXRlUG9wcGVyKClcblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiAhdGhpcy5fcGFyZW50LmNsb3Nlc3QoU0VMRUNUT1JfTkFWQkFSX05BVikpIHtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcblxuICAgIHRoaXMuX21lbnUuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiwgcmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKGlzRGlzYWJsZWQodGhpcy5fZWxlbWVudCkgfHwgIXRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9XG5cbiAgICB0aGlzLl9jb21wbGV0ZUhpZGUocmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKClcbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9jb21wbGV0ZUhpZGUocmVsYXRlZFRhcmdldCkge1xuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUsIHJlbGF0ZWRUYXJnZXQpXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKSkge1xuICAgICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICB9XG5cbiAgICB0aGlzLl9tZW51LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxuICAgIE1hbmlwdWxhdG9yLnJlbW92ZURhdGFBdHRyaWJ1dGUodGhpcy5fbWVudSwgJ3BvcHBlcicpXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOLCByZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSBzdXBlci5fZ2V0Q29uZmlnKGNvbmZpZylcblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZmVyZW5jZSA9PT0gJ29iamVjdCcgJiYgIWlzRWxlbWVudChjb25maWcucmVmZXJlbmNlKSAmJlxuICAgICAgdHlwZW9mIGNvbmZpZy5yZWZlcmVuY2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICE9PSAnZnVuY3Rpb24nXG4gICAgKSB7XG4gICAgICAvLyBQb3BwZXIgdmlydHVhbCBlbGVtZW50cyByZXF1aXJlIGEgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG1ldGhvZFxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtOQU1FLnRvVXBwZXJDYXNlKCl9OiBPcHRpb24gXCJyZWZlcmVuY2VcIiBwcm92aWRlZCB0eXBlIFwib2JqZWN0XCIgd2l0aG91dCBhIHJlcXVpcmVkIFwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0XCIgbWV0aG9kLmApXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2NyZWF0ZVBvcHBlcigpIHtcbiAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgZHJvcGRvd25zIHJlcXVpcmUgUG9wcGVyIChodHRwczovL3BvcHBlci5qcy5vcmcpJylcbiAgICB9XG5cbiAgICBsZXQgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRcblxuICAgIGlmICh0aGlzLl9jb25maWcucmVmZXJlbmNlID09PSAncGFyZW50Jykge1xuICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX3BhcmVudFxuICAgIH0gZWxzZSBpZiAoaXNFbGVtZW50KHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpKSB7XG4gICAgICByZWZlcmVuY2VFbGVtZW50ID0gZ2V0RWxlbWVudCh0aGlzLl9jb25maWcucmVmZXJlbmNlKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UgPT09ICdvYmplY3QnKSB7XG4gICAgICByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fY29uZmlnLnJlZmVyZW5jZVxuICAgIH1cblxuICAgIGNvbnN0IHBvcHBlckNvbmZpZyA9IHRoaXMuX2dldFBvcHBlckNvbmZpZygpXG4gICAgdGhpcy5fcG9wcGVyID0gUG9wcGVyLmNyZWF0ZVBvcHBlcihyZWZlcmVuY2VFbGVtZW50LCB0aGlzLl9tZW51LCBwb3BwZXJDb25maWcpXG4gIH1cblxuICBfaXNTaG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5fbWVudS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKVxuICB9XG5cbiAgX2dldFBsYWNlbWVudCgpIHtcbiAgICBjb25zdCBwYXJlbnREcm9wZG93biA9IHRoaXMuX3BhcmVudFxuXG4gICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BFTkQpKSB7XG4gICAgICByZXR1cm4gUExBQ0VNRU5UX1JJR0hUXG4gICAgfVxuXG4gICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BTVEFSVCkpIHtcbiAgICAgIHJldHVybiBQTEFDRU1FTlRfTEVGVFxuICAgIH1cblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QVVBfQ0VOVEVSKSkge1xuICAgICAgcmV0dXJuIFBMQUNFTUVOVF9UT1BDRU5URVJcbiAgICB9XG5cbiAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUERPV05fQ0VOVEVSKSkge1xuICAgICAgcmV0dXJuIFBMQUNFTUVOVF9CT1RUT01DRU5URVJcbiAgICB9XG5cbiAgICAvLyBXZSBuZWVkIHRvIHRyaW0gdGhlIHZhbHVlIGJlY2F1c2UgY3VzdG9tIHByb3BlcnRpZXMgY2FuIGFsc28gaW5jbHVkZSBzcGFjZXNcbiAgICBjb25zdCBpc0VuZCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5fbWVudSkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1icy1wb3NpdGlvbicpLnRyaW0oKSA9PT0gJ2VuZCdcblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QVVApKSB7XG4gICAgICByZXR1cm4gaXNFbmQgPyBQTEFDRU1FTlRfVE9QRU5EIDogUExBQ0VNRU5UX1RPUFxuICAgIH1cblxuICAgIHJldHVybiBpc0VuZCA/IFBMQUNFTUVOVF9CT1RUT01FTkQgOiBQTEFDRU1FTlRfQk9UVE9NXG4gIH1cblxuICBfZGV0ZWN0TmF2YmFyKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfTkFWQkFSKSAhPT0gbnVsbFxuICB9XG5cbiAgX2dldE9mZnNldCgpIHtcbiAgICBjb25zdCB7IG9mZnNldCB9ID0gdGhpcy5fY29uZmlnXG5cbiAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBvZmZzZXQuc3BsaXQoJywnKS5tYXAodmFsdWUgPT4gTnVtYmVyLnBhcnNlSW50KHZhbHVlLCAxMCkpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBwb3BwZXJEYXRhID0+IG9mZnNldChwb3BwZXJEYXRhLCB0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRcbiAgfVxuXG4gIF9nZXRQb3BwZXJDb25maWcoKSB7XG4gICAgY29uc3QgZGVmYXVsdEJzUG9wcGVyQ29uZmlnID0ge1xuICAgICAgcGxhY2VtZW50OiB0aGlzLl9nZXRQbGFjZW1lbnQoKSxcbiAgICAgIG1vZGlmaWVyczogW3tcbiAgICAgICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBib3VuZGFyeTogdGhpcy5fY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdvZmZzZXQnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgb2Zmc2V0OiB0aGlzLl9nZXRPZmZzZXQoKVxuICAgICAgICB9XG4gICAgICB9XVxuICAgIH1cblxuICAgIC8vIERpc2FibGUgUG9wcGVyIGlmIHdlIGhhdmUgYSBzdGF0aWMgZGlzcGxheSBvciBEcm9wZG93biBpcyBpbiBOYXZiYXJcbiAgICBpZiAodGhpcy5faW5OYXZiYXIgfHwgdGhpcy5fY29uZmlnLmRpc3BsYXkgPT09ICdzdGF0aWMnKSB7XG4gICAgICBNYW5pcHVsYXRvci5zZXREYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsICdwb3BwZXInLCAnc3RhdGljJykgLy8gdG9kbzp2NiByZW1vdmVcbiAgICAgIGRlZmF1bHRCc1BvcHBlckNvbmZpZy5tb2RpZmllcnMgPSBbe1xuICAgICAgICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxuICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgfV1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uZGVmYXVsdEJzUG9wcGVyQ29uZmlnLFxuICAgICAgLi4uKHR5cGVvZiB0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnID09PSAnZnVuY3Rpb24nID8gdGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZyhkZWZhdWx0QnNQb3BwZXJDb25maWcpIDogdGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZylcbiAgICB9XG4gIH1cblxuICBfc2VsZWN0TWVudUl0ZW0oeyBrZXksIHRhcmdldCB9KSB7XG4gICAgY29uc3QgaXRlbXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMsIHRoaXMuX21lbnUpLmZpbHRlcihlbGVtZW50ID0+IGlzVmlzaWJsZShlbGVtZW50KSlcblxuICAgIGlmICghaXRlbXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBpZiB0YXJnZXQgaXNuJ3QgaW5jbHVkZWQgaW4gaXRlbXMgKGUuZy4gd2hlbiBleHBhbmRpbmcgdGhlIGRyb3Bkb3duKVxuICAgIC8vIGFsbG93IGN5Y2xpbmcgdG8gZ2V0IHRoZSBsYXN0IGl0ZW0gaW4gY2FzZSBrZXkgZXF1YWxzIEFSUk9XX1VQX0tFWVxuICAgIGdldE5leHRBY3RpdmVFbGVtZW50KGl0ZW1zLCB0YXJnZXQsIGtleSA9PT0gQVJST1dfRE9XTl9LRVksICFpdGVtcy5pbmNsdWRlcyh0YXJnZXQpKS5mb2N1cygpXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBEcm9wZG93bi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10oKVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgY2xlYXJNZW51cyhldmVudCkge1xuICAgIGlmIChldmVudC5idXR0b24gPT09IFJJR0hUX01PVVNFX0JVVFRPTiB8fCAoZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC5rZXkgIT09IFRBQl9LRVkpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBvcGVuVG9nZ2xlcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9UT0dHTEVfU0hPV04pXG5cbiAgICBmb3IgKGNvbnN0IHRvZ2dsZSBvZiBvcGVuVG9nZ2xlcykge1xuICAgICAgY29uc3QgY29udGV4dCA9IERyb3Bkb3duLmdldEluc3RhbmNlKHRvZ2dsZSlcbiAgICAgIGlmICghY29udGV4dCB8fCBjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSBmYWxzZSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjb21wb3NlZFBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKVxuICAgICAgY29uc3QgaXNNZW51VGFyZ2V0ID0gY29tcG9zZWRQYXRoLmluY2x1ZGVzKGNvbnRleHQuX21lbnUpXG4gICAgICBpZiAoXG4gICAgICAgIGNvbXBvc2VkUGF0aC5pbmNsdWRlcyhjb250ZXh0Ll9lbGVtZW50KSB8fFxuICAgICAgICAoY29udGV4dC5fY29uZmlnLmF1dG9DbG9zZSA9PT0gJ2luc2lkZScgJiYgIWlzTWVudVRhcmdldCkgfHxcbiAgICAgICAgKGNvbnRleHQuX2NvbmZpZy5hdXRvQ2xvc2UgPT09ICdvdXRzaWRlJyAmJiBpc01lbnVUYXJnZXQpXG4gICAgICApIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gVGFiIG5hdmlnYXRpb24gdGhyb3VnaCB0aGUgZHJvcGRvd24gbWVudSBvciBldmVudHMgZnJvbSBjb250YWluZWQgaW5wdXRzIHNob3VsZG4ndCBjbG9zZSB0aGUgbWVudVxuICAgICAgaWYgKGNvbnRleHQuX21lbnUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAoKGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQua2V5ID09PSBUQUJfS0VZKSB8fCAvaW5wdXR8c2VsZWN0fG9wdGlvbnx0ZXh0YXJlYXxmb3JtL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7IHJlbGF0ZWRUYXJnZXQ6IGNvbnRleHQuX2VsZW1lbnQgfVxuXG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICByZWxhdGVkVGFyZ2V0LmNsaWNrRXZlbnQgPSBldmVudFxuICAgICAgfVxuXG4gICAgICBjb250ZXh0Ll9jb21wbGV0ZUhpZGUocmVsYXRlZFRhcmdldClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZGF0YUFwaUtleWRvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgLy8gSWYgbm90IGFuIFVQIHwgRE9XTiB8IEVTQ0FQRSBrZXkgPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIC8vIElmIGlucHV0L3RleHRhcmVhICYmIGlmIGtleSBpcyBvdGhlciB0aGFuIEVTQ0FQRSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG5cbiAgICBjb25zdCBpc0lucHV0ID0gL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSlcbiAgICBjb25zdCBpc0VzY2FwZUV2ZW50ID0gZXZlbnQua2V5ID09PSBFU0NBUEVfS0VZXG4gICAgY29uc3QgaXNVcE9yRG93bkV2ZW50ID0gW0FSUk9XX1VQX0tFWSwgQVJST1dfRE9XTl9LRVldLmluY2x1ZGVzKGV2ZW50LmtleSlcblxuICAgIGlmICghaXNVcE9yRG93bkV2ZW50ICYmICFpc0VzY2FwZUV2ZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaXNJbnB1dCAmJiAhaXNFc2NhcGVFdmVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgLy8gdG9kbzogdjYgcmV2ZXJ0ICMzNzAxMSAmIGNoYW5nZSBtYXJrdXAgaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvNS4yL2Zvcm1zL2lucHV0LWdyb3VwL1xuICAgIGNvbnN0IGdldFRvZ2dsZUJ1dHRvbiA9IHRoaXMubWF0Y2hlcyhTRUxFQ1RPUl9EQVRBX1RPR0dMRSkgP1xuICAgICAgdGhpcyA6XG4gICAgICAoU2VsZWN0b3JFbmdpbmUucHJldih0aGlzLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSlbMF0gfHxcbiAgICAgICAgU2VsZWN0b3JFbmdpbmUubmV4dCh0aGlzLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSlbMF0gfHxcbiAgICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZXZlbnQuZGVsZWdhdGVUYXJnZXQucGFyZW50Tm9kZSkpXG5cbiAgICBjb25zdCBpbnN0YW5jZSA9IERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UoZ2V0VG9nZ2xlQnV0dG9uKVxuXG4gICAgaWYgKGlzVXBPckRvd25FdmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGluc3RhbmNlLnNob3coKVxuICAgICAgaW5zdGFuY2UuX3NlbGVjdE1lbnVJdGVtKGV2ZW50KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGluc3RhbmNlLl9pc1Nob3duKCkpIHsgLy8gZWxzZSBpcyBlc2NhcGUgYW5kIHdlIGNoZWNrIGlmIGl0IGlzIHNob3duXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgaW5zdGFuY2UuaGlkZSgpXG4gICAgICBnZXRUb2dnbGVCdXR0b24uZm9jdXMoKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgRHJvcGRvd24uZGF0YUFwaUtleWRvd25IYW5kbGVyKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJLCBTRUxFQ1RPUl9NRU5VLCBEcm9wZG93bi5kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBEcm9wZG93bi5jbGVhck1lbnVzKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlVUF9EQVRBX0FQSSwgRHJvcGRvd24uY2xlYXJNZW51cylcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBEcm9wZG93bi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpLnRvZ2dsZSgpXG59KVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihEcm9wZG93bilcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMi4zKTogbW9kYWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBkZWZpbmVKUXVlcnlQbHVnaW4sIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsIGlzUlRMLCBpc1Zpc2libGUsIHJlZmxvdyB9IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgU2Nyb2xsQmFySGVscGVyIGZyb20gJy4vdXRpbC9zY3JvbGxiYXInXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuaW1wb3J0IEJhY2tkcm9wIGZyb20gJy4vdXRpbC9iYWNrZHJvcCdcbmltcG9ydCBGb2N1c1RyYXAgZnJvbSAnLi91dGlsL2ZvY3VzdHJhcCdcbmltcG9ydCB7IGVuYWJsZURpc21pc3NUcmlnZ2VyIH0gZnJvbSAnLi91dGlsL2NvbXBvbmVudC1mdW5jdGlvbnMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdtb2RhbCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLm1vZGFsJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5jb25zdCBFU0NBUEVfS0VZID0gJ0VzY2FwZSdcblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERV9QUkVWRU5URUQgPSBgaGlkZVByZXZlbnRlZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1JFU0laRSA9IGByZXNpemUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19ESVNNSVNTID0gYGNsaWNrLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRURPV05fRElTTUlTUyA9IGBtb3VzZWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fRElTTUlTUyA9IGBrZXlkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9PUEVOID0gJ21vZGFsLW9wZW4nXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9TVEFUSUMgPSAnbW9kYWwtc3RhdGljJ1xuXG5jb25zdCBPUEVOX1NFTEVDVE9SID0gJy5tb2RhbC5zaG93J1xuY29uc3QgU0VMRUNUT1JfRElBTE9HID0gJy5tb2RhbC1kaWFsb2cnXG5jb25zdCBTRUxFQ1RPUl9NT0RBTF9CT0RZID0gJy5tb2RhbC1ib2R5J1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwibW9kYWxcIl0nXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGJhY2tkcm9wOiB0cnVlLFxuICBmb2N1czogdHJ1ZSxcbiAga2V5Ym9hcmQ6IHRydWVcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGJhY2tkcm9wOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIGZvY3VzOiAnYm9vbGVhbicsXG4gIGtleWJvYXJkOiAnYm9vbGVhbidcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgTW9kYWwgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgdGhpcy5fZGlhbG9nID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9ESUFMT0csIHRoaXMuX2VsZW1lbnQpXG4gICAgdGhpcy5fYmFja2Ryb3AgPSB0aGlzLl9pbml0aWFsaXplQmFja0Ryb3AoKVxuICAgIHRoaXMuX2ZvY3VzdHJhcCA9IHRoaXMuX2luaXRpYWxpemVGb2N1c1RyYXAoKVxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgdGhpcy5fc2Nyb2xsQmFyID0gbmV3IFNjcm9sbEJhckhlbHBlcigpXG5cbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHRvZ2dsZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhyZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgc2hvdyhyZWxhdGVkVGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24gfHwgdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0XG4gICAgfSlcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTaG93biA9IHRydWVcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG5cbiAgICB0aGlzLl9zY3JvbGxCYXIuaGlkZSgpXG5cbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9PUEVOKVxuXG4gICAgdGhpcy5fYWRqdXN0RGlhbG9nKClcblxuICAgIHRoaXMuX2JhY2tkcm9wLnNob3coKCkgPT4gdGhpcy5fc2hvd0VsZW1lbnQocmVsYXRlZFRhcmdldCkpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5faXNTaG93biB8fCB0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUpXG5cbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICB0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjaygoKSA9PiB0aGlzLl9oaWRlTW9kYWwoKSwgdGhpcy5fZWxlbWVudCwgdGhpcy5faXNBbmltYXRlZCgpKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBmb3IgKGNvbnN0IGh0bWxFbGVtZW50IG9mIFt3aW5kb3csIHRoaXMuX2RpYWxvZ10pIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vZmYoaHRtbEVsZW1lbnQsIEVWRU5UX0tFWSlcbiAgICB9XG5cbiAgICB0aGlzLl9iYWNrZHJvcC5kaXNwb3NlKClcbiAgICB0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICBoYW5kbGVVcGRhdGUoKSB7XG4gICAgdGhpcy5fYWRqdXN0RGlhbG9nKClcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2luaXRpYWxpemVCYWNrRHJvcCgpIHtcbiAgICByZXR1cm4gbmV3IEJhY2tkcm9wKHtcbiAgICAgIGlzVmlzaWJsZTogQm9vbGVhbih0aGlzLl9jb25maWcuYmFja2Ryb3ApLCAvLyAnc3RhdGljJyBvcHRpb24gd2lsbCBiZSB0cmFuc2xhdGVkIHRvIHRydWUsIGFuZCBib29sZWFucyB3aWxsIGtlZXAgdGhlaXIgdmFsdWUsXG4gICAgICBpc0FuaW1hdGVkOiB0aGlzLl9pc0FuaW1hdGVkKClcbiAgICB9KVxuICB9XG5cbiAgX2luaXRpYWxpemVGb2N1c1RyYXAoKSB7XG4gICAgcmV0dXJuIG5ldyBGb2N1c1RyYXAoe1xuICAgICAgdHJhcEVsZW1lbnQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9KVxuICB9XG5cbiAgX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAvLyB0cnkgdG8gYXBwZW5kIGR5bmFtaWMgbW9kYWxcbiAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnModGhpcy5fZWxlbWVudCkpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCB0cnVlKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpXG4gICAgdGhpcy5fZWxlbWVudC5zY3JvbGxUb3AgPSAwXG5cbiAgICBjb25zdCBtb2RhbEJvZHkgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX01PREFMX0JPRFksIHRoaXMuX2RpYWxvZylcbiAgICBpZiAobW9kYWxCb2R5KSB7XG4gICAgICBtb2RhbEJvZHkuc2Nyb2xsVG9wID0gMFxuICAgIH1cblxuICAgIHJlZmxvdyh0aGlzLl9lbGVtZW50KVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcblxuICAgIGNvbnN0IHRyYW5zaXRpb25Db21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcuZm9jdXMpIHtcbiAgICAgICAgdGhpcy5fZm9jdXN0cmFwLmFjdGl2YXRlKClcbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayh0cmFuc2l0aW9uQ29tcGxldGUsIHRoaXMuX2RpYWxvZywgdGhpcy5faXNBbmltYXRlZCgpKVxuICB9XG5cbiAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOX0RJU01JU1MsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgIT09IEVTQ0FQRV9LRVkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5fdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpXG4gICAgfSlcblxuICAgIEV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX1JFU0laRSwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2lzU2hvd24gJiYgIXRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICB0aGlzLl9hZGp1c3REaWFsb2coKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VET1dOX0RJU01JU1MsIGV2ZW50ID0+IHtcbiAgICAgIC8vIGEgYmFkIHRyaWNrIHRvIHNlZ3JlZ2F0ZSBjbGlja3MgdGhhdCBtYXkgc3RhcnQgaW5zaWRlIGRpYWxvZyBidXQgZW5kIG91dHNpZGUsIGFuZCBhdm9pZCBsaXN0ZW4gdG8gc2Nyb2xsYmFyIGNsaWNrc1xuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBFVkVOVF9DTElDS19ESVNNSVNTLCBldmVudDIgPT4ge1xuICAgICAgICBpZiAodGhpcy5fZWxlbWVudCAhPT0gZXZlbnQudGFyZ2V0IHx8IHRoaXMuX2VsZW1lbnQgIT09IGV2ZW50Mi50YXJnZXQpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgICAgdGhpcy5fdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wKSB7XG4gICAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgX2hpZGVNb2RhbCgpIHtcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKVxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLW1vZGFsJylcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcblxuICAgIHRoaXMuX2JhY2tkcm9wLmhpZGUoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfT1BFTilcbiAgICAgIHRoaXMuX3Jlc2V0QWRqdXN0bWVudHMoKVxuICAgICAgdGhpcy5fc2Nyb2xsQmFyLnJlc2V0KClcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTilcbiAgICB9KVxuICB9XG5cbiAgX2lzQW5pbWF0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSlcbiAgfVxuXG4gIF90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKCkge1xuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREVfUFJFVkVOVEVEKVxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNNb2RhbE92ZXJmbG93aW5nID0gdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgY29uc3QgaW5pdGlhbE92ZXJmbG93WSA9IHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZXG4gICAgLy8gcmV0dXJuIGlmIHRoZSBmb2xsb3dpbmcgYmFja2dyb3VuZCB0cmFuc2l0aW9uIGhhc24ndCB5ZXQgY29tcGxldGVkXG4gICAgaWYgKGluaXRpYWxPdmVyZmxvd1kgPT09ICdoaWRkZW4nIHx8IHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU1RBVElDKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbidcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TVEFUSUMpXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjaygoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TVEFUSUMpXG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvd1kgPSBpbml0aWFsT3ZlcmZsb3dZXG4gICAgICB9LCB0aGlzLl9kaWFsb2cpXG4gICAgfSwgdGhpcy5fZGlhbG9nKVxuXG4gICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gIH1cblxuICAvKipcbiAgICogVGhlIGZvbGxvd2luZyBtZXRob2RzIGFyZSB1c2VkIHRvIGhhbmRsZSBvdmVyZmxvd2luZyBtb2RhbHNcbiAgICovXG5cbiAgX2FkanVzdERpYWxvZygpIHtcbiAgICBjb25zdCBpc01vZGFsT3ZlcmZsb3dpbmcgPSB0aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHRoaXMuX3Njcm9sbEJhci5nZXRXaWR0aCgpXG4gICAgY29uc3QgaXNCb2R5T3ZlcmZsb3dpbmcgPSBzY3JvbGxiYXJXaWR0aCA+IDBcblxuICAgIGlmIChpc0JvZHlPdmVyZmxvd2luZyAmJiAhaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IGlzUlRMKCkgPyAncGFkZGluZ0xlZnQnIDogJ3BhZGRpbmdSaWdodCdcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbcHJvcGVydHldID0gYCR7c2Nyb2xsYmFyV2lkdGh9cHhgXG4gICAgfVxuXG4gICAgaWYgKCFpc0JvZHlPdmVyZmxvd2luZyAmJiBpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gaXNSVEwoKSA/ICdwYWRkaW5nUmlnaHQnIDogJ3BhZGRpbmdMZWZ0J1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtwcm9wZXJ0eV0gPSBgJHtzY3JvbGxiYXJXaWR0aH1weGBcbiAgICB9XG4gIH1cblxuICBfcmVzZXRBZGp1c3RtZW50cygpIHtcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gJydcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcnXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcsIHJlbGF0ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBNb2RhbC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10ocmVsYXRlZFRhcmdldClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcylcblxuICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgRXZlbnRIYW5kbGVyLm9uZSh0YXJnZXQsIEVWRU5UX1NIT1csIHNob3dFdmVudCA9PiB7XG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAvLyBvbmx5IHJlZ2lzdGVyIGZvY3VzIHJlc3RvcmVyIGlmIG1vZGFsIHdpbGwgYWN0dWFsbHkgZ2V0IHNob3duXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIub25lKHRhcmdldCwgRVZFTlRfSElEREVOLCAoKSA9PiB7XG4gICAgICBpZiAoaXNWaXNpYmxlKHRoaXMpKSB7XG4gICAgICAgIHRoaXMuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG5cbiAgLy8gYXZvaWQgY29uZmxpY3Qgd2hlbiBjbGlja2luZyBtb2RhbCB0b2dnbGVyIHdoaWxlIGFub3RoZXIgb25lIGlzIG9wZW5cbiAgY29uc3QgYWxyZWFkeU9wZW4gPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKE9QRU5fU0VMRUNUT1IpXG4gIGlmIChhbHJlYWR5T3Blbikge1xuICAgIE1vZGFsLmdldEluc3RhbmNlKGFscmVhZHlPcGVuKS5oaWRlKClcbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSBNb2RhbC5nZXRPckNyZWF0ZUluc3RhbmNlKHRhcmdldClcblxuICBkYXRhLnRvZ2dsZSh0aGlzKVxufSlcblxuZW5hYmxlRGlzbWlzc1RyaWdnZXIoTW9kYWwpXG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKE1vZGFsKVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4yLjMpOiBvZmZjYW52YXMuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsXG4gIGlzRGlzYWJsZWQsXG4gIGlzVmlzaWJsZVxufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgU2Nyb2xsQmFySGVscGVyIGZyb20gJy4vdXRpbC9zY3JvbGxiYXInXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBCYWNrZHJvcCBmcm9tICcuL3V0aWwvYmFja2Ryb3AnXG5pbXBvcnQgRm9jdXNUcmFwIGZyb20gJy4vdXRpbC9mb2N1c3RyYXAnXG5pbXBvcnQgeyBlbmFibGVEaXNtaXNzVHJpZ2dlciB9IGZyb20gJy4vdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnb2ZmY2FudmFzJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMub2ZmY2FudmFzJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFU0NBUEVfS0VZID0gJ0VzY2FwZSdcblxuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX1NIT1dJTkcgPSAnc2hvd2luZydcbmNvbnN0IENMQVNTX05BTUVfSElESU5HID0gJ2hpZGluZydcbmNvbnN0IENMQVNTX05BTUVfQkFDS0RST1AgPSAnb2ZmY2FudmFzLWJhY2tkcm9wJ1xuY29uc3QgT1BFTl9TRUxFQ1RPUiA9ICcub2ZmY2FudmFzLnNob3cnXG5cbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERV9QUkVWRU5URUQgPSBgaGlkZVByZXZlbnRlZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9SRVNJWkUgPSBgcmVzaXplJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RJU01JU1MgPSBga2V5ZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJvZmZjYW52YXNcIl0nXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGJhY2tkcm9wOiB0cnVlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgc2Nyb2xsOiBmYWxzZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYmFja2Ryb3A6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgc2Nyb2xsOiAnYm9vbGVhbidcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgT2ZmY2FudmFzIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIHRoaXMuX2JhY2tkcm9wID0gdGhpcy5faW5pdGlhbGl6ZUJhY2tEcm9wKClcbiAgICB0aGlzLl9mb2N1c3RyYXAgPSB0aGlzLl9pbml0aWFsaXplRm9jdXNUcmFwKClcbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHRvZ2dsZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhyZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgc2hvdyhyZWxhdGVkVGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1csIHsgcmVsYXRlZFRhcmdldCB9KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZVxuICAgIHRoaXMuX2JhY2tkcm9wLnNob3coKVxuXG4gICAgaWYgKCF0aGlzLl9jb25maWcuc2Nyb2xsKSB7XG4gICAgICBuZXcgU2Nyb2xsQmFySGVscGVyKCkuaGlkZSgpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCB0cnVlKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPV0lORylcblxuICAgIGNvbnN0IGNvbXBsZXRlQ2FsbEJhY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwgfHwgdGhpcy5fY29uZmlnLmJhY2tkcm9wKSB7XG4gICAgICAgIHRoaXMuX2ZvY3VzdHJhcC5hY3RpdmF0ZSgpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XSU5HKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04sIHsgcmVsYXRlZFRhcmdldCB9KVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGVDYWxsQmFjaywgdGhpcy5fZWxlbWVudCwgdHJ1ZSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1Nob3duKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKVxuXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpXG4gICAgdGhpcy5fZWxlbWVudC5ibHVyKClcbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9ISURJTkcpXG4gICAgdGhpcy5fYmFja2Ryb3AuaGlkZSgpXG5cbiAgICBjb25zdCBjb21wbGV0ZUNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVywgQ0xBU1NfTkFNRV9ISURJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcpXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpXG5cbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnNjcm9sbCkge1xuICAgICAgICBuZXcgU2Nyb2xsQmFySGVscGVyKCkucmVzZXQoKVxuICAgICAgfVxuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxiYWNrLCB0aGlzLl9lbGVtZW50LCB0cnVlKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICB0aGlzLl9iYWNrZHJvcC5kaXNwb3NlKClcbiAgICB0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9pbml0aWFsaXplQmFja0Ryb3AoKSB7XG4gICAgY29uc3QgY2xpY2tDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREVfUFJFVkVOVEVEKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5oaWRlKClcbiAgICB9XG5cbiAgICAvLyAnc3RhdGljJyBvcHRpb24gd2lsbCBiZSB0cmFuc2xhdGVkIHRvIHRydWUsIGFuZCBib29sZWFucyB3aWxsIGtlZXAgdGhlaXIgdmFsdWVcbiAgICBjb25zdCBpc1Zpc2libGUgPSBCb29sZWFuKHRoaXMuX2NvbmZpZy5iYWNrZHJvcClcblxuICAgIHJldHVybiBuZXcgQmFja2Ryb3Aoe1xuICAgICAgY2xhc3NOYW1lOiBDTEFTU19OQU1FX0JBQ0tEUk9QLFxuICAgICAgaXNWaXNpYmxlLFxuICAgICAgaXNBbmltYXRlZDogdHJ1ZSxcbiAgICAgIHJvb3RFbGVtZW50OiB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICBjbGlja0NhbGxiYWNrOiBpc1Zpc2libGUgPyBjbGlja0NhbGxiYWNrIDogbnVsbFxuICAgIH0pXG4gIH1cblxuICBfaW5pdGlhbGl6ZUZvY3VzVHJhcCgpIHtcbiAgICByZXR1cm4gbmV3IEZvY3VzVHJhcCh7XG4gICAgICB0cmFwRWxlbWVudDogdGhpcy5fZWxlbWVudFxuICAgIH0pXG4gIH1cblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV05fRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSAhPT0gRVNDQVBFX0tFWSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERV9QUkVWRU5URUQpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH0pXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBPZmZjYW52YXMuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKHRoaXMpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBjb25zdCB0YXJnZXQgPSBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpXG5cbiAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGlmIChpc0Rpc2FibGVkKHRoaXMpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBFdmVudEhhbmRsZXIub25lKHRhcmdldCwgRVZFTlRfSElEREVOLCAoKSA9PiB7XG4gICAgLy8gZm9jdXMgb24gdHJpZ2dlciB3aGVuIGl0IGlzIGNsb3NlZFxuICAgIGlmIChpc1Zpc2libGUodGhpcykpIHtcbiAgICAgIHRoaXMuZm9jdXMoKVxuICAgIH1cbiAgfSlcblxuICAvLyBhdm9pZCBjb25mbGljdCB3aGVuIGNsaWNraW5nIGEgdG9nZ2xlciBvZiBhbiBvZmZjYW52YXMsIHdoaWxlIGFub3RoZXIgaXMgb3BlblxuICBjb25zdCBhbHJlYWR5T3BlbiA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoT1BFTl9TRUxFQ1RPUilcbiAgaWYgKGFscmVhZHlPcGVuICYmIGFscmVhZHlPcGVuICE9PSB0YXJnZXQpIHtcbiAgICBPZmZjYW52YXMuZ2V0SW5zdGFuY2UoYWxyZWFkeU9wZW4pLmhpZGUoKVxuICB9XG5cbiAgY29uc3QgZGF0YSA9IE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKHRhcmdldClcbiAgZGF0YS50b2dnbGUodGhpcylcbn0pXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgZm9yIChjb25zdCBzZWxlY3RvciBvZiBTZWxlY3RvckVuZ2luZS5maW5kKE9QRU5fU0VMRUNUT1IpKSB7XG4gICAgT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2Uoc2VsZWN0b3IpLnNob3coKVxuICB9XG59KVxuXG5FdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9SRVNJWkUsICgpID0+IHtcbiAgZm9yIChjb25zdCBlbGVtZW50IG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoJ1thcmlhLW1vZGFsXVtjbGFzcyo9c2hvd11bY2xhc3MqPW9mZmNhbnZhcy1dJykpIHtcbiAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiAhPT0gJ2ZpeGVkJykge1xuICAgICAgT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCkuaGlkZSgpXG4gICAgfVxuICB9XG59KVxuXG5lbmFibGVEaXNtaXNzVHJpZ2dlcihPZmZjYW52YXMpXG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKE9mZmNhbnZhcylcblxuZXhwb3J0IGRlZmF1bHQgT2ZmY2FudmFzXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjIuMyk6IHBvcG92ZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBkZWZpbmVKUXVlcnlQbHVnaW4gfSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdwb3BvdmVyJ1xuXG5jb25zdCBTRUxFQ1RPUl9USVRMRSA9ICcucG9wb3Zlci1oZWFkZXInXG5jb25zdCBTRUxFQ1RPUl9DT05URU5UID0gJy5wb3BvdmVyLWJvZHknXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIC4uLlRvb2x0aXAuRGVmYXVsdCxcbiAgY29udGVudDogJycsXG4gIG9mZnNldDogWzAsIDhdLFxuICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInBvcG92ZXJcIiByb2xlPVwidG9vbHRpcFwiPicgK1xuICAgICc8ZGl2IGNsYXNzPVwicG9wb3Zlci1hcnJvd1wiPjwvZGl2PicgK1xuICAgICc8aDMgY2xhc3M9XCJwb3BvdmVyLWhlYWRlclwiPjwvaDM+JyArXG4gICAgJzxkaXYgY2xhc3M9XCJwb3BvdmVyLWJvZHlcIj48L2Rpdj4nICtcbiAgICAnPC9kaXY+JyxcbiAgdHJpZ2dlcjogJ2NsaWNrJ1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgLi4uVG9vbHRpcC5EZWZhdWx0VHlwZSxcbiAgY29udGVudDogJyhudWxsfHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKSdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgUG9wb3ZlciBleHRlbmRzIFRvb2x0aXAge1xuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gT3ZlcnJpZGVzXG4gIF9pc1dpdGhDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRUaXRsZSgpIHx8IHRoaXMuX2dldENvbnRlbnQoKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfZ2V0Q29udGVudEZvclRlbXBsYXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBbU0VMRUNUT1JfVElUTEVdOiB0aGlzLl9nZXRUaXRsZSgpLFxuICAgICAgW1NFTEVDVE9SX0NPTlRFTlRdOiB0aGlzLl9nZXRDb250ZW50KClcbiAgICB9XG4gIH1cblxuICBfZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24odGhpcy5fY29uZmlnLmNvbnRlbnQpXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBQb3BvdmVyLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihQb3BvdmVyKVxuXG5leHBvcnQgZGVmYXVsdCBQb3BvdmVyXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjIuMyk6IHNjcm9sbHNweS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7IGRlZmluZUpRdWVyeVBsdWdpbiwgZ2V0RWxlbWVudCwgaXNEaXNhYmxlZCwgaXNWaXNpYmxlIH0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdzY3JvbGxzcHknXG5jb25zdCBEQVRBX0tFWSA9ICdicy5zY3JvbGxzcHknXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgRVZFTlRfQUNUSVZBVEUgPSBgYWN0aXZhdGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDSyA9IGBjbGljayR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkgPSBgbG9hZCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNID0gJ2Ryb3Bkb3duLWl0ZW0nXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfU1BZID0gJ1tkYXRhLWJzLXNweT1cInNjcm9sbFwiXSdcbmNvbnN0IFNFTEVDVE9SX1RBUkdFVF9MSU5LUyA9ICdbaHJlZl0nXG5jb25zdCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCA9ICcubmF2LCAubGlzdC1ncm91cCdcbmNvbnN0IFNFTEVDVE9SX05BVl9MSU5LUyA9ICcubmF2LWxpbmsnXG5jb25zdCBTRUxFQ1RPUl9OQVZfSVRFTVMgPSAnLm5hdi1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfTElTVF9JVEVNUyA9ICcubGlzdC1ncm91cC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfTElOS19JVEVNUyA9IGAke1NFTEVDVE9SX05BVl9MSU5LU30sICR7U0VMRUNUT1JfTkFWX0lURU1TfSA+ICR7U0VMRUNUT1JfTkFWX0xJTktTfSwgJHtTRUxFQ1RPUl9MSVNUX0lURU1TfWBcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOID0gJy5kcm9wZG93bidcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9ICcuZHJvcGRvd24tdG9nZ2xlJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBvZmZzZXQ6IG51bGwsIC8vIFRPRE86IHY2IEBkZXByZWNhdGVkLCBrZWVwIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSByZWFzb25zXG4gIHJvb3RNYXJnaW46ICcwcHggMHB4IC0yNSUnLFxuICBzbW9vdGhTY3JvbGw6IGZhbHNlLFxuICB0YXJnZXQ6IG51bGwsXG4gIHRocmVzaG9sZDogWzAuMSwgMC41LCAxXVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgb2Zmc2V0OiAnKG51bWJlcnxudWxsKScsIC8vIFRPRE8gdjYgQGRlcHJlY2F0ZWQsIGtlZXAgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHJlYXNvbnNcbiAgcm9vdE1hcmdpbjogJ3N0cmluZycsXG4gIHNtb290aFNjcm9sbDogJ2Jvb2xlYW4nLFxuICB0YXJnZXQ6ICdlbGVtZW50JyxcbiAgdGhyZXNob2xkOiAnYXJyYXknXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIFNjcm9sbFNweSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjb25maWcpXG5cbiAgICAvLyB0aGlzLl9lbGVtZW50IGlzIHRoZSBvYnNlcnZhYmxlc0NvbnRhaW5lciBhbmQgY29uZmlnLnRhcmdldCB0aGUgbWVudSBsaW5rcyB3cmFwcGVyXG4gICAgdGhpcy5fdGFyZ2V0TGlua3MgPSBuZXcgTWFwKClcbiAgICB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMgPSBuZXcgTWFwKClcbiAgICB0aGlzLl9yb290RWxlbWVudCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5fZWxlbWVudCkub3ZlcmZsb3dZID09PSAndmlzaWJsZScgPyBudWxsIDogdGhpcy5fZWxlbWVudFxuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGxcbiAgICB0aGlzLl9vYnNlcnZlciA9IG51bGxcbiAgICB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEgPSB7XG4gICAgICB2aXNpYmxlRW50cnlUb3A6IDAsXG4gICAgICBwYXJlbnRTY3JvbGxUb3A6IDBcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoKCkgLy8gaW5pdGlhbGl6ZVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICByZWZyZXNoKCkge1xuICAgIHRoaXMuX2luaXRpYWxpemVUYXJnZXRzQW5kT2JzZXJ2YWJsZXMoKVxuICAgIHRoaXMuX21heWJlRW5hYmxlU21vb3RoU2Nyb2xsKClcblxuICAgIGlmICh0aGlzLl9vYnNlcnZlcikge1xuICAgICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29ic2VydmVyID0gdGhpcy5fZ2V0TmV3T2JzZXJ2ZXIoKVxuICAgIH1cblxuICAgIGZvciAoY29uc3Qgc2VjdGlvbiBvZiB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMudmFsdWVzKCkpIHtcbiAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUoc2VjdGlvbilcbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICAvLyBUT0RPOiBvbiB2NiB0YXJnZXQgc2hvdWxkIGJlIGdpdmVuIGV4cGxpY2l0bHkgJiByZW1vdmUgdGhlIHt0YXJnZXQ6ICdzcy10YXJnZXQnfSBjYXNlXG4gICAgY29uZmlnLnRhcmdldCA9IGdldEVsZW1lbnQoY29uZmlnLnRhcmdldCkgfHwgZG9jdW1lbnQuYm9keVxuXG4gICAgLy8gVE9ETzogdjYgT25seSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgcmVhc29ucy4gVXNlIHJvb3RNYXJnaW4gb25seVxuICAgIGNvbmZpZy5yb290TWFyZ2luID0gY29uZmlnLm9mZnNldCA/IGAke2NvbmZpZy5vZmZzZXR9cHggMHB4IC0zMCVgIDogY29uZmlnLnJvb3RNYXJnaW5cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnRocmVzaG9sZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbmZpZy50aHJlc2hvbGQgPSBjb25maWcudGhyZXNob2xkLnNwbGl0KCcsJykubWFwKHZhbHVlID0+IE51bWJlci5wYXJzZUZsb2F0KHZhbHVlKSlcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfbWF5YmVFbmFibGVTbW9vdGhTY3JvbGwoKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuc21vb3RoU2Nyb2xsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyB1bnJlZ2lzdGVyIGFueSBwcmV2aW91cyBsaXN0ZW5lcnNcbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2NvbmZpZy50YXJnZXQsIEVWRU5UX0NMSUNLKVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2NvbmZpZy50YXJnZXQsIEVWRU5UX0NMSUNLLCBTRUxFQ1RPUl9UQVJHRVRfTElOS1MsIGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IG9ic2VydmFibGVTZWN0aW9uID0gdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zLmdldChldmVudC50YXJnZXQuaGFzaClcbiAgICAgIGlmIChvYnNlcnZhYmxlU2VjdGlvbikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnN0IHJvb3QgPSB0aGlzLl9yb290RWxlbWVudCB8fCB3aW5kb3dcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gb2JzZXJ2YWJsZVNlY3Rpb24ub2Zmc2V0VG9wIC0gdGhpcy5fZWxlbWVudC5vZmZzZXRUb3BcbiAgICAgICAgaWYgKHJvb3Quc2Nyb2xsVG8pIHtcbiAgICAgICAgICByb290LnNjcm9sbFRvKHsgdG9wOiBoZWlnaHQsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hyb21lIDYwIGRvZXNuJ3Qgc3VwcG9ydCBgc2Nyb2xsVG9gXG4gICAgICAgIHJvb3Quc2Nyb2xsVG9wID0gaGVpZ2h0XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIF9nZXROZXdPYnNlcnZlcigpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgcm9vdDogdGhpcy5fcm9vdEVsZW1lbnQsXG4gICAgICB0aHJlc2hvbGQ6IHRoaXMuX2NvbmZpZy50aHJlc2hvbGQsXG4gICAgICByb290TWFyZ2luOiB0aGlzLl9jb25maWcucm9vdE1hcmdpblxuICAgIH1cblxuICAgIHJldHVybiBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB0aGlzLl9vYnNlcnZlckNhbGxiYWNrKGVudHJpZXMpLCBvcHRpb25zKVxuICB9XG5cbiAgLy8gVGhlIGxvZ2ljIG9mIHNlbGVjdGlvblxuICBfb2JzZXJ2ZXJDYWxsYmFjayhlbnRyaWVzKSB7XG4gICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGVudHJ5ID0+IHRoaXMuX3RhcmdldExpbmtzLmdldChgIyR7ZW50cnkudGFyZ2V0LmlkfWApXG4gICAgY29uc3QgYWN0aXZhdGUgPSBlbnRyeSA9PiB7XG4gICAgICB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEudmlzaWJsZUVudHJ5VG9wID0gZW50cnkudGFyZ2V0Lm9mZnNldFRvcFxuICAgICAgdGhpcy5fcHJvY2Vzcyh0YXJnZXRFbGVtZW50KGVudHJ5KSlcbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnRTY3JvbGxUb3AgPSAodGhpcy5fcm9vdEVsZW1lbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5zY3JvbGxUb3BcbiAgICBjb25zdCB1c2VyU2Nyb2xsc0Rvd24gPSBwYXJlbnRTY3JvbGxUb3AgPj0gdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnBhcmVudFNjcm9sbFRvcFxuICAgIHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS5wYXJlbnRTY3JvbGxUb3AgPSBwYXJlbnRTY3JvbGxUb3BcblxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgaWYgKCFlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsXG4gICAgICAgIHRoaXMuX2NsZWFyQWN0aXZlQ2xhc3ModGFyZ2V0RWxlbWVudChlbnRyeSkpXG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgZW50cnlJc0xvd2VyVGhhblByZXZpb3VzID0gZW50cnkudGFyZ2V0Lm9mZnNldFRvcCA+PSB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEudmlzaWJsZUVudHJ5VG9wXG4gICAgICAvLyBpZiB3ZSBhcmUgc2Nyb2xsaW5nIGRvd24sIHBpY2sgdGhlIGJpZ2dlciBvZmZzZXRUb3BcbiAgICAgIGlmICh1c2VyU2Nyb2xsc0Rvd24gJiYgZW50cnlJc0xvd2VyVGhhblByZXZpb3VzKSB7XG4gICAgICAgIGFjdGl2YXRlKGVudHJ5KVxuICAgICAgICAvLyBpZiBwYXJlbnQgaXNuJ3Qgc2Nyb2xsZWQsIGxldCdzIGtlZXAgdGhlIGZpcnN0IHZpc2libGUgaXRlbSwgYnJlYWtpbmcgdGhlIGl0ZXJhdGlvblxuICAgICAgICBpZiAoIXBhcmVudFNjcm9sbFRvcCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gaWYgd2UgYXJlIHNjcm9sbGluZyB1cCwgcGljayB0aGUgc21hbGxlc3Qgb2Zmc2V0VG9wXG4gICAgICBpZiAoIXVzZXJTY3JvbGxzRG93biAmJiAhZW50cnlJc0xvd2VyVGhhblByZXZpb3VzKSB7XG4gICAgICAgIGFjdGl2YXRlKGVudHJ5KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9pbml0aWFsaXplVGFyZ2V0c0FuZE9ic2VydmFibGVzKCkge1xuICAgIHRoaXMuX3RhcmdldExpbmtzID0gbmV3IE1hcCgpXG4gICAgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zID0gbmV3IE1hcCgpXG5cbiAgICBjb25zdCB0YXJnZXRMaW5rcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfVEFSR0VUX0xJTktTLCB0aGlzLl9jb25maWcudGFyZ2V0KVxuXG4gICAgZm9yIChjb25zdCBhbmNob3Igb2YgdGFyZ2V0TGlua3MpIHtcbiAgICAgIC8vIGVuc3VyZSB0aGF0IHRoZSBhbmNob3IgaGFzIGFuIGlkIGFuZCBpcyBub3QgZGlzYWJsZWRcbiAgICAgIGlmICghYW5jaG9yLmhhc2ggfHwgaXNEaXNhYmxlZChhbmNob3IpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9ic2VydmFibGVTZWN0aW9uID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShhbmNob3IuaGFzaCwgdGhpcy5fZWxlbWVudClcblxuICAgICAgLy8gZW5zdXJlIHRoYXQgdGhlIG9ic2VydmFibGVTZWN0aW9uIGV4aXN0cyAmIGlzIHZpc2libGVcbiAgICAgIGlmIChpc1Zpc2libGUob2JzZXJ2YWJsZVNlY3Rpb24pKSB7XG4gICAgICAgIHRoaXMuX3RhcmdldExpbmtzLnNldChhbmNob3IuaGFzaCwgYW5jaG9yKVxuICAgICAgICB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMuc2V0KGFuY2hvci5oYXNoLCBvYnNlcnZhYmxlU2VjdGlvbilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfcHJvY2Vzcyh0YXJnZXQpIHtcbiAgICBpZiAodGhpcy5fYWN0aXZlVGFyZ2V0ID09PSB0YXJnZXQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2NsZWFyQWN0aXZlQ2xhc3ModGhpcy5fY29uZmlnLnRhcmdldClcbiAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSB0YXJnZXRcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcbiAgICB0aGlzLl9hY3RpdmF0ZVBhcmVudHModGFyZ2V0KVxuXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfQUNUSVZBVEUsIHsgcmVsYXRlZFRhcmdldDogdGFyZ2V0IH0pXG4gIH1cblxuICBfYWN0aXZhdGVQYXJlbnRzKHRhcmdldCkge1xuICAgIC8vIEFjdGl2YXRlIGRyb3Bkb3duIHBhcmVudHNcbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BET1dOX0lURU0pKSB7XG4gICAgICBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSwgdGFyZ2V0LmNsb3Nlc3QoU0VMRUNUT1JfRFJPUERPV04pKVxuICAgICAgICAuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoY29uc3QgbGlzdEdyb3VwIG9mIFNlbGVjdG9yRW5naW5lLnBhcmVudHModGFyZ2V0LCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCkpIHtcbiAgICAgIC8vIFNldCB0cmlnZ2VyZWQgbGlua3MgcGFyZW50cyBhcyBhY3RpdmVcbiAgICAgIC8vIFdpdGggYm90aCA8dWw+IGFuZCA8bmF2PiBtYXJrdXAgYSBwYXJlbnQgaXMgdGhlIHByZXZpb3VzIHNpYmxpbmcgb2YgYW55IG5hdiBhbmNlc3RvclxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIFNlbGVjdG9yRW5naW5lLnByZXYobGlzdEdyb3VwLCBTRUxFQ1RPUl9MSU5LX0lURU1TKSkge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2NsZWFyQWN0aXZlQ2xhc3MocGFyZW50KSB7XG4gICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICBjb25zdCBhY3RpdmVOb2RlcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoYCR7U0VMRUNUT1JfVEFSR0VUX0xJTktTfS4ke0NMQVNTX05BTUVfQUNUSVZFfWAsIHBhcmVudClcbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgYWN0aXZlTm9kZXMpIHtcbiAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBTY3JvbGxTcHkuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5FdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIGZvciAoY29uc3Qgc3B5IG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9TUFkpKSB7XG4gICAgU2Nyb2xsU3B5LmdldE9yQ3JlYXRlSW5zdGFuY2Uoc3B5KVxuICB9XG59KVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihTY3JvbGxTcHkpXG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbFNweVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4yLjMpOiB0YWIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBkZWZpbmVKUXVlcnlQbHVnaW4sIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsIGdldE5leHRBY3RpdmVFbGVtZW50LCBpc0Rpc2FibGVkIH0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICd0YWInXG5jb25zdCBEQVRBX0tFWSA9ICdicy50YWInXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV04gPSBga2V5ZG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkgPSBgbG9hZCR7RVZFTlRfS0VZfWBcblxuY29uc3QgQVJST1dfTEVGVF9LRVkgPSAnQXJyb3dMZWZ0J1xuY29uc3QgQVJST1dfUklHSFRfS0VZID0gJ0Fycm93UmlnaHQnXG5jb25zdCBBUlJPV19VUF9LRVkgPSAnQXJyb3dVcCdcbmNvbnN0IEFSUk9XX0RPV05fS0VZID0gJ0Fycm93RG93bidcblxuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX0RST1BET1dOID0gJ2Ryb3Bkb3duJ1xuXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUgPSAnLmRyb3Bkb3duLXRvZ2dsZSdcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX01FTlUgPSAnLmRyb3Bkb3duLW1lbnUnXG5jb25zdCBOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFID0gJzpub3QoLmRyb3Bkb3duLXRvZ2dsZSknXG5cbmNvbnN0IFNFTEVDVE9SX1RBQl9QQU5FTCA9ICcubGlzdC1ncm91cCwgLm5hdiwgW3JvbGU9XCJ0YWJsaXN0XCJdJ1xuY29uc3QgU0VMRUNUT1JfT1VURVIgPSAnLm5hdi1pdGVtLCAubGlzdC1ncm91cC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfSU5ORVIgPSBgLm5hdi1saW5rJHtOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFfSwgLmxpc3QtZ3JvdXAtaXRlbSR7Tk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRX0sIFtyb2xlPVwidGFiXCJdJHtOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFfWBcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cInRhYlwiXSwgW2RhdGEtYnMtdG9nZ2xlPVwicGlsbFwiXSwgW2RhdGEtYnMtdG9nZ2xlPVwibGlzdFwiXScgLy8gdG9kbzp2NjogY291bGQgYmUgb25seSBgdGFiYFxuY29uc3QgU0VMRUNUT1JfSU5ORVJfRUxFTSA9IGAke1NFTEVDVE9SX0lOTkVSfSwgJHtTRUxFQ1RPUl9EQVRBX1RPR0dMRX1gXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFX0FDVElWRSA9IGAuJHtDTEFTU19OQU1FX0FDVElWRX1bZGF0YS1icy10b2dnbGU9XCJ0YWJcIl0sIC4ke0NMQVNTX05BTUVfQUNUSVZFfVtkYXRhLWJzLXRvZ2dsZT1cInBpbGxcIl0sIC4ke0NMQVNTX05BTUVfQUNUSVZFfVtkYXRhLWJzLXRvZ2dsZT1cImxpc3RcIl1gXG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIFRhYiBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgc3VwZXIoZWxlbWVudClcbiAgICB0aGlzLl9wYXJlbnQgPSB0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfVEFCX1BBTkVMKVxuXG4gICAgaWYgKCF0aGlzLl9wYXJlbnQpIHtcbiAgICAgIHJldHVyblxuICAgICAgLy8gdG9kbzogc2hvdWxkIFRocm93IGV4Y2VwdGlvbiBvbiB2NlxuICAgICAgLy8gdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtlbGVtZW50Lm91dGVySFRNTH0gaGFzIG5vdCBhIHZhbGlkIHBhcmVudCAke1NFTEVDVE9SX0lOTkVSX0VMRU19YClcbiAgICB9XG5cbiAgICAvLyBTZXQgdXAgaW5pdGlhbCBhcmlhIGF0dHJpYnV0ZXNcbiAgICB0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlcyh0aGlzLl9wYXJlbnQsIHRoaXMuX2dldENoaWxkcmVuKCkpXG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTiwgZXZlbnQgPT4gdGhpcy5fa2V5ZG93bihldmVudCkpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHNob3coKSB7IC8vIFNob3dzIHRoaXMgZWxlbSBhbmQgZGVhY3RpdmF0ZSB0aGUgYWN0aXZlIHNpYmxpbmcgaWYgZXhpc3RzXG4gICAgY29uc3QgaW5uZXJFbGVtID0gdGhpcy5fZWxlbWVudFxuICAgIGlmICh0aGlzLl9lbGVtSXNBY3RpdmUoaW5uZXJFbGVtKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gU2VhcmNoIGZvciBhY3RpdmUgdGFiIG9uIHNhbWUgcGFyZW50IHRvIGRlYWN0aXZhdGUgaXRcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLl9nZXRBY3RpdmVFbGVtKClcblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IGFjdGl2ZSA/XG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihhY3RpdmUsIEVWRU5UX0hJREUsIHsgcmVsYXRlZFRhcmdldDogaW5uZXJFbGVtIH0pIDpcbiAgICAgIG51bGxcblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKGlubmVyRWxlbSwgRVZFTlRfU0hPVywgeyByZWxhdGVkVGFyZ2V0OiBhY3RpdmUgfSlcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCB8fCAoaGlkZUV2ZW50ICYmIGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZGVhY3RpdmF0ZShhY3RpdmUsIGlubmVyRWxlbSlcbiAgICB0aGlzLl9hY3RpdmF0ZShpbm5lckVsZW0sIGFjdGl2ZSlcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2FjdGl2YXRlKGVsZW1lbnQsIHJlbGF0ZWRFbGVtKSB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICB0aGlzLl9hY3RpdmF0ZShnZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpKSAvLyBTZWFyY2ggYW5kIGFjdGl2YXRlL3Nob3cgdGhlIHByb3BlciBzZWN0aW9uXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpICE9PSAndGFiJykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4JylcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgdHJ1ZSlcbiAgICAgIHRoaXMuX3RvZ2dsZURyb3BEb3duKGVsZW1lbnQsIHRydWUpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihlbGVtZW50LCBFVkVOVF9TSE9XTiwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiByZWxhdGVkRWxlbVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCBlbGVtZW50LCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpKVxuICB9XG5cbiAgX2RlYWN0aXZhdGUoZWxlbWVudCwgcmVsYXRlZEVsZW0pIHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcbiAgICBlbGVtZW50LmJsdXIoKVxuXG4gICAgdGhpcy5fZGVhY3RpdmF0ZShnZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpKSAvLyBTZWFyY2ggYW5kIGRlYWN0aXZhdGUgdGhlIHNob3duIHNlY3Rpb24gdG9vXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpICE9PSAndGFiJykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBmYWxzZSlcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpXG4gICAgICB0aGlzLl90b2dnbGVEcm9wRG93bihlbGVtZW50LCBmYWxzZSlcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKGVsZW1lbnQsIEVWRU5UX0hJRERFTiwgeyByZWxhdGVkVGFyZ2V0OiByZWxhdGVkRWxlbSB9KVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIGVsZW1lbnQsIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpXG4gIH1cblxuICBfa2V5ZG93bihldmVudCkge1xuICAgIGlmICghKFtBUlJPV19MRUZUX0tFWSwgQVJST1dfUklHSFRfS0VZLCBBUlJPV19VUF9LRVksIEFSUk9XX0RPV05fS0VZXS5pbmNsdWRlcyhldmVudC5rZXkpKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkvLyBzdG9wUHJvcGFnYXRpb24vcHJldmVudERlZmF1bHQgYm90aCBhZGRlZCB0byBzdXBwb3J0IHVwL2Rvd24ga2V5cyB3aXRob3V0IHNjcm9sbGluZyB0aGUgcGFnZVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBpc05leHQgPSBbQVJST1dfUklHSFRfS0VZLCBBUlJPV19ET1dOX0tFWV0uaW5jbHVkZXMoZXZlbnQua2V5KVxuICAgIGNvbnN0IG5leHRBY3RpdmVFbGVtZW50ID0gZ2V0TmV4dEFjdGl2ZUVsZW1lbnQodGhpcy5fZ2V0Q2hpbGRyZW4oKS5maWx0ZXIoZWxlbWVudCA9PiAhaXNEaXNhYmxlZChlbGVtZW50KSksIGV2ZW50LnRhcmdldCwgaXNOZXh0LCB0cnVlKVxuXG4gICAgaWYgKG5leHRBY3RpdmVFbGVtZW50KSB7XG4gICAgICBuZXh0QWN0aXZlRWxlbWVudC5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSlcbiAgICAgIFRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKG5leHRBY3RpdmVFbGVtZW50KS5zaG93KClcbiAgICB9XG4gIH1cblxuICBfZ2V0Q2hpbGRyZW4oKSB7IC8vIGNvbGxlY3Rpb24gb2YgaW5uZXIgZWxlbWVudHNcbiAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JTk5FUl9FTEVNLCB0aGlzLl9wYXJlbnQpXG4gIH1cblxuICBfZ2V0QWN0aXZlRWxlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0Q2hpbGRyZW4oKS5maW5kKGNoaWxkID0+IHRoaXMuX2VsZW1Jc0FjdGl2ZShjaGlsZCkpIHx8IG51bGxcbiAgfVxuXG4gIF9zZXRJbml0aWFsQXR0cmlidXRlcyhwYXJlbnQsIGNoaWxkcmVuKSB7XG4gICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMocGFyZW50LCAncm9sZScsICd0YWJsaXN0JylcblxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgIHRoaXMuX3NldEluaXRpYWxBdHRyaWJ1dGVzT25DaGlsZChjaGlsZClcbiAgICB9XG4gIH1cblxuICBfc2V0SW5pdGlhbEF0dHJpYnV0ZXNPbkNoaWxkKGNoaWxkKSB7XG4gICAgY2hpbGQgPSB0aGlzLl9nZXRJbm5lckVsZW1lbnQoY2hpbGQpXG4gICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLl9lbGVtSXNBY3RpdmUoY2hpbGQpXG4gICAgY29uc3Qgb3V0ZXJFbGVtID0gdGhpcy5fZ2V0T3V0ZXJFbGVtZW50KGNoaWxkKVxuICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIGlzQWN0aXZlKVxuXG4gICAgaWYgKG91dGVyRWxlbSAhPT0gY2hpbGQpIHtcbiAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKG91dGVyRWxlbSwgJ3JvbGUnLCAncHJlc2VudGF0aW9uJylcbiAgICB9XG5cbiAgICBpZiAoIWlzQWN0aXZlKSB7XG4gICAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJylcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhjaGlsZCwgJ3JvbGUnLCAndGFiJylcblxuICAgIC8vIHNldCBhdHRyaWJ1dGVzIHRvIHRoZSByZWxhdGVkIHBhbmVsIHRvb1xuICAgIHRoaXMuX3NldEluaXRpYWxBdHRyaWJ1dGVzT25UYXJnZXRQYW5lbChjaGlsZClcbiAgfVxuXG4gIF9zZXRJbml0aWFsQXR0cmlidXRlc09uVGFyZ2V0UGFuZWwoY2hpbGQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKGNoaWxkKVxuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKHRhcmdldCwgJ3JvbGUnLCAndGFicGFuZWwnKVxuXG4gICAgaWYgKGNoaWxkLmlkKSB7XG4gICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyh0YXJnZXQsICdhcmlhLWxhYmVsbGVkYnknLCBgIyR7Y2hpbGQuaWR9YClcbiAgICB9XG4gIH1cblxuICBfdG9nZ2xlRHJvcERvd24oZWxlbWVudCwgb3Blbikge1xuICAgIGNvbnN0IG91dGVyRWxlbSA9IHRoaXMuX2dldE91dGVyRWxlbWVudChlbGVtZW50KVxuICAgIGlmICghb3V0ZXJFbGVtLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19EUk9QRE9XTikpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZSA9IChzZWxlY3RvciwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShzZWxlY3Rvciwgb3V0ZXJFbGVtKVxuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSwgb3BlbilcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGUoU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFLCBDTEFTU19OQU1FX0FDVElWRSlcbiAgICB0b2dnbGUoU0VMRUNUT1JfRFJPUERPV05fTUVOVSwgQ0xBU1NfTkFNRV9TSE9XKVxuICAgIG91dGVyRWxlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBvcGVuKVxuICB9XG5cbiAgX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKGVsZW1lbnQsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBpZiAoIWVsZW1lbnQuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZSkpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpXG4gICAgfVxuICB9XG5cbiAgX2VsZW1Jc0FjdGl2ZShlbGVtKSB7XG4gICAgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQUNUSVZFKVxuICB9XG5cbiAgLy8gVHJ5IHRvIGdldCB0aGUgaW5uZXIgZWxlbWVudCAodXN1YWxseSB0aGUgLm5hdi1saW5rKVxuICBfZ2V0SW5uZXJFbGVtZW50KGVsZW0pIHtcbiAgICByZXR1cm4gZWxlbS5tYXRjaGVzKFNFTEVDVE9SX0lOTkVSX0VMRU0pID8gZWxlbSA6IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfSU5ORVJfRUxFTSwgZWxlbSlcbiAgfVxuXG4gIC8vIFRyeSB0byBnZXQgdGhlIG91dGVyIGVsZW1lbnQgKHVzdWFsbHkgdGhlIC5uYXYtaXRlbSlcbiAgX2dldE91dGVyRWxlbWVudChlbGVtKSB7XG4gICAgcmV0dXJuIGVsZW0uY2xvc2VzdChTRUxFQ1RPUl9PVVRFUikgfHwgZWxlbVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10oKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGlmIChpc0Rpc2FibGVkKHRoaXMpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKS5zaG93KClcbn0pXG5cbi8qKlxuICogSW5pdGlhbGl6ZSBvbiBmb2N1c1xuICovXG5FdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFX0FDVElWRSkpIHtcbiAgICBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50KVxuICB9XG59KVxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oVGFiKVxuXG5leHBvcnQgZGVmYXVsdCBUYWJcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMi4zKTogdG9hc3QuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBkZWZpbmVKUXVlcnlQbHVnaW4sIHJlZmxvdyB9IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5pbXBvcnQgeyBlbmFibGVEaXNtaXNzVHJpZ2dlciB9IGZyb20gJy4vdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAndG9hc3QnXG5jb25zdCBEQVRBX0tFWSA9ICdicy50b2FzdCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5cbmNvbnN0IEVWRU5UX01PVVNFT1ZFUiA9IGBtb3VzZW92ZXIke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRU9VVCA9IGBtb3VzZW91dCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTSU4gPSBgZm9jdXNpbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTT1VUID0gYGZvY3Vzb3V0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfSElERSA9ICdoaWRlJyAvLyBAZGVwcmVjYXRlZCAtIGtlcHQgaGVyZSBvbmx5IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX1NIT1dJTkcgPSAnc2hvd2luZydcblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGFuaW1hdGlvbjogJ2Jvb2xlYW4nLFxuICBhdXRvaGlkZTogJ2Jvb2xlYW4nLFxuICBkZWxheTogJ251bWJlcidcbn1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYW5pbWF0aW9uOiB0cnVlLFxuICBhdXRvaGlkZTogdHJ1ZSxcbiAgZGVsYXk6IDUwMDBcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgVG9hc3QgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgdGhpcy5fdGltZW91dCA9IG51bGxcbiAgICB0aGlzLl9oYXNNb3VzZUludGVyYWN0aW9uID0gZmFsc2VcbiAgICB0aGlzLl9oYXNLZXlib2FyZEludGVyYWN0aW9uID0gZmFsc2VcbiAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBzaG93KCkge1xuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1cpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2NsZWFyVGltZW91dCgpXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSlcbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1dJTkcpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTilcblxuICAgICAgdGhpcy5fbWF5YmVTY2hlZHVsZUhpZGUoKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0hJREUpIC8vIEBkZXByZWNhdGVkXG4gICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVywgQ0xBU1NfTkFNRV9TSE9XSU5HKVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdGhpcy5fY29uZmlnLmFuaW1hdGlvbilcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLmlzU2hvd24oKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcblxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9ISURFKSAvLyBAZGVwcmVjYXRlZFxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPV0lORywgQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1dJTkcpXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdGhpcy5fY29uZmlnLmFuaW1hdGlvbilcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgdGhpcy5fY2xlYXJUaW1lb3V0KClcblxuICAgIGlmICh0aGlzLmlzU2hvd24oKSkge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICB9XG5cbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIGlzU2hvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVylcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfbWF5YmVTY2hlZHVsZUhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuYXV0b2hpZGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9oYXNNb3VzZUludGVyYWN0aW9uIHx8IHRoaXMuX2hhc0tleWJvYXJkSW50ZXJhY3Rpb24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgfSwgdGhpcy5fY29uZmlnLmRlbGF5KVxuICB9XG5cbiAgX29uSW50ZXJhY3Rpb24oZXZlbnQsIGlzSW50ZXJhY3RpbmcpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgIGNhc2UgJ21vdXNlb3Zlcic6XG4gICAgICBjYXNlICdtb3VzZW91dCc6IHtcbiAgICAgICAgdGhpcy5faGFzTW91c2VJbnRlcmFjdGlvbiA9IGlzSW50ZXJhY3RpbmdcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgY2FzZSAnZm9jdXNpbic6XG4gICAgICBjYXNlICdmb2N1c291dCc6IHtcbiAgICAgICAgdGhpcy5faGFzS2V5Ym9hcmRJbnRlcmFjdGlvbiA9IGlzSW50ZXJhY3RpbmdcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc0ludGVyYWN0aW5nKSB7XG4gICAgICB0aGlzLl9jbGVhclRpbWVvdXQoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgbmV4dEVsZW1lbnQgPSBldmVudC5yZWxhdGVkVGFyZ2V0XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQgPT09IG5leHRFbGVtZW50IHx8IHRoaXMuX2VsZW1lbnQuY29udGFpbnMobmV4dEVsZW1lbnQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9tYXliZVNjaGVkdWxlSGlkZSgpXG4gIH1cblxuICBfc2V0TGlzdGVuZXJzKCkge1xuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRU9WRVIsIGV2ZW50ID0+IHRoaXMuX29uSW50ZXJhY3Rpb24oZXZlbnQsIHRydWUpKVxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRU9VVCwgZXZlbnQgPT4gdGhpcy5fb25JbnRlcmFjdGlvbihldmVudCwgZmFsc2UpKVxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9GT0NVU0lOLCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCB0cnVlKSlcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfRk9DVVNPVVQsIGV2ZW50ID0+IHRoaXMuX29uSW50ZXJhY3Rpb24oZXZlbnQsIGZhbHNlKSlcbiAgfVxuXG4gIF9jbGVhclRpbWVvdXQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpXG4gICAgdGhpcy5fdGltZW91dCA9IG51bGxcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IFRvYXN0LmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKHRoaXMpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuZW5hYmxlRGlzbWlzc1RyaWdnZXIoVG9hc3QpXG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFRvYXN0KVxuXG5leHBvcnQgZGVmYXVsdCBUb2FzdFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4yLjMpOiB0b29sdGlwLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICogYXMgUG9wcGVyIGZyb20gJ0Bwb3BwZXJqcy9jb3JlJ1xuaW1wb3J0IHsgZGVmaW5lSlF1ZXJ5UGx1Z2luLCBmaW5kU2hhZG93Um9vdCwgZ2V0RWxlbWVudCwgZ2V0VUlELCBpc1JUTCwgbm9vcCB9IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCB7IERlZmF1bHRBbGxvd2xpc3QgfSBmcm9tICcuL3V0aWwvc2FuaXRpemVyJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcbmltcG9ydCBUZW1wbGF0ZUZhY3RvcnkgZnJvbSAnLi91dGlsL3RlbXBsYXRlLWZhY3RvcnknXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICd0b29sdGlwJ1xuY29uc3QgRElTQUxMT1dFRF9BVFRSSUJVVEVTID0gbmV3IFNldChbJ3Nhbml0aXplJywgJ2FsbG93TGlzdCcsICdzYW5pdGl6ZUZuJ10pXG5cbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9NT0RBTCA9ICdtb2RhbCdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuXG5jb25zdCBTRUxFQ1RPUl9UT09MVElQX0lOTkVSID0gJy50b29sdGlwLWlubmVyJ1xuY29uc3QgU0VMRUNUT1JfTU9EQUwgPSBgLiR7Q0xBU1NfTkFNRV9NT0RBTH1gXG5cbmNvbnN0IEVWRU5UX01PREFMX0hJREUgPSAnaGlkZS5icy5tb2RhbCdcblxuY29uc3QgVFJJR0dFUl9IT1ZFUiA9ICdob3ZlcidcbmNvbnN0IFRSSUdHRVJfRk9DVVMgPSAnZm9jdXMnXG5jb25zdCBUUklHR0VSX0NMSUNLID0gJ2NsaWNrJ1xuY29uc3QgVFJJR0dFUl9NQU5VQUwgPSAnbWFudWFsJ1xuXG5jb25zdCBFVkVOVF9ISURFID0gJ2hpZGUnXG5jb25zdCBFVkVOVF9ISURERU4gPSAnaGlkZGVuJ1xuY29uc3QgRVZFTlRfU0hPVyA9ICdzaG93J1xuY29uc3QgRVZFTlRfU0hPV04gPSAnc2hvd24nXG5jb25zdCBFVkVOVF9JTlNFUlRFRCA9ICdpbnNlcnRlZCdcbmNvbnN0IEVWRU5UX0NMSUNLID0gJ2NsaWNrJ1xuY29uc3QgRVZFTlRfRk9DVVNJTiA9ICdmb2N1c2luJ1xuY29uc3QgRVZFTlRfRk9DVVNPVVQgPSAnZm9jdXNvdXQnXG5jb25zdCBFVkVOVF9NT1VTRUVOVEVSID0gJ21vdXNlZW50ZXInXG5jb25zdCBFVkVOVF9NT1VTRUxFQVZFID0gJ21vdXNlbGVhdmUnXG5cbmNvbnN0IEF0dGFjaG1lbnRNYXAgPSB7XG4gIEFVVE86ICdhdXRvJyxcbiAgVE9QOiAndG9wJyxcbiAgUklHSFQ6IGlzUlRMKCkgPyAnbGVmdCcgOiAncmlnaHQnLFxuICBCT1RUT006ICdib3R0b20nLFxuICBMRUZUOiBpc1JUTCgpID8gJ3JpZ2h0JyA6ICdsZWZ0J1xufVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhbGxvd0xpc3Q6IERlZmF1bHRBbGxvd2xpc3QsXG4gIGFuaW1hdGlvbjogdHJ1ZSxcbiAgYm91bmRhcnk6ICdjbGlwcGluZ1BhcmVudHMnLFxuICBjb250YWluZXI6IGZhbHNlLFxuICBjdXN0b21DbGFzczogJycsXG4gIGRlbGF5OiAwLFxuICBmYWxsYmFja1BsYWNlbWVudHM6IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10sXG4gIGh0bWw6IGZhbHNlLFxuICBvZmZzZXQ6IFswLCAwXSxcbiAgcGxhY2VtZW50OiAndG9wJyxcbiAgcG9wcGVyQ29uZmlnOiBudWxsLFxuICBzYW5pdGl6ZTogdHJ1ZSxcbiAgc2FuaXRpemVGbjogbnVsbCxcbiAgc2VsZWN0b3I6IGZhbHNlLFxuICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj4nICtcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjwvZGl2PicgK1xuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+JyArXG4gICAgICAgICAgICAnPC9kaXY+JyxcbiAgdGl0bGU6ICcnLFxuICB0cmlnZ2VyOiAnaG92ZXIgZm9jdXMnXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBhbGxvd0xpc3Q6ICdvYmplY3QnLFxuICBhbmltYXRpb246ICdib29sZWFuJyxcbiAgYm91bmRhcnk6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgY29udGFpbmVyOiAnKHN0cmluZ3xlbGVtZW50fGJvb2xlYW4pJyxcbiAgY3VzdG9tQ2xhc3M6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gIGRlbGF5OiAnKG51bWJlcnxvYmplY3QpJyxcbiAgZmFsbGJhY2tQbGFjZW1lbnRzOiAnYXJyYXknLFxuICBodG1sOiAnYm9vbGVhbicsXG4gIG9mZnNldDogJyhhcnJheXxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgcGxhY2VtZW50OiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICBwb3BwZXJDb25maWc6ICcobnVsbHxvYmplY3R8ZnVuY3Rpb24pJyxcbiAgc2FuaXRpemU6ICdib29sZWFuJyxcbiAgc2FuaXRpemVGbjogJyhudWxsfGZ1bmN0aW9uKScsXG4gIHNlbGVjdG9yOiAnKHN0cmluZ3xib29sZWFuKScsXG4gIHRlbXBsYXRlOiAnc3RyaW5nJyxcbiAgdGl0bGU6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJyxcbiAgdHJpZ2dlcjogJ3N0cmluZydcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgVG9vbHRpcCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgdG9vbHRpcHMgcmVxdWlyZSBQb3BwZXIgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZyknKVxuICAgIH1cblxuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIC8vIFByaXZhdGVcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlXG4gICAgdGhpcy5fdGltZW91dCA9IDBcbiAgICB0aGlzLl9pc0hvdmVyZWQgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlciA9IHt9XG4gICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIHRoaXMuX3RlbXBsYXRlRmFjdG9yeSA9IG51bGxcbiAgICB0aGlzLl9uZXdDb250ZW50ID0gbnVsbFxuXG4gICAgLy8gUHJvdGVjdGVkXG4gICAgdGhpcy50aXAgPSBudWxsXG5cbiAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKVxuXG4gICAgaWYgKCF0aGlzLl9jb25maWcuc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuX2ZpeFRpdGxlKClcbiAgICB9XG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlXG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9IGZhbHNlXG4gIH1cblxuICB0b2dnbGVFbmFibGVkKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9ICF0aGlzLl9pc0VuYWJsZWRcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzRW5hYmxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlci5jbGljayA9ICF0aGlzLl9hY3RpdmVUcmlnZ2VyLmNsaWNrXG4gICAgaWYgKHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgdGhpcy5fbGVhdmUoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZW50ZXIoKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcblxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX01PREFMKSwgRVZFTlRfTU9EQUxfSElERSwgdGhpcy5faGlkZU1vZGFsSGFuZGxlcilcblxuICAgIGlmICh0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgndGl0bGUnLCB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScpKVxuICAgIH1cblxuICAgIHRoaXMuX2Rpc3Bvc2VQb3BwZXIoKVxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHVzZSBzaG93IG9uIHZpc2libGUgZWxlbWVudHMnKVxuICAgIH1cblxuICAgIGlmICghKHRoaXMuX2lzV2l0aENvbnRlbnQoKSAmJiB0aGlzLl9pc0VuYWJsZWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9TSE9XKSlcbiAgICBjb25zdCBzaGFkb3dSb290ID0gZmluZFNoYWRvd1Jvb3QodGhpcy5fZWxlbWVudClcbiAgICBjb25zdCBpc0luVGhlRG9tID0gKHNoYWRvd1Jvb3QgfHwgdGhpcy5fZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuY29udGFpbnModGhpcy5fZWxlbWVudClcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCB8fCAhaXNJblRoZURvbSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gdG9kbyB2NiByZW1vdmUgdGhpcyBPUiBtYWtlIGl0IG9wdGlvbmFsXG4gICAgdGhpcy5fZGlzcG9zZVBvcHBlcigpXG5cbiAgICBjb25zdCB0aXAgPSB0aGlzLl9nZXRUaXBFbGVtZW50KClcblxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgdGlwLmdldEF0dHJpYnV0ZSgnaWQnKSlcblxuICAgIGNvbnN0IHsgY29udGFpbmVyIH0gPSB0aGlzLl9jb25maWdcblxuICAgIGlmICghdGhpcy5fZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyh0aGlzLnRpcCkpIHtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmQodGlwKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfSU5TRVJURUQpKVxuICAgIH1cblxuICAgIHRoaXMuX3BvcHBlciA9IHRoaXMuX2NyZWF0ZVBvcHBlcih0aXApXG5cbiAgICB0aXAuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfU0hPV04pKVxuXG4gICAgICBpZiAodGhpcy5faXNIb3ZlcmVkID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLl9sZWF2ZSgpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2lzSG92ZXJlZCA9IGZhbHNlXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy50aXAsIHRoaXMuX2lzQW5pbWF0ZWQoKSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0hJREUpKVxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdGlwID0gdGhpcy5fZ2V0VGlwRWxlbWVudCgpXG4gICAgdGlwLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfQ0xJQ0tdID0gZmFsc2VcbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfRk9DVVNdID0gZmFsc2VcbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfSE9WRVJdID0gZmFsc2VcbiAgICB0aGlzLl9pc0hvdmVyZWQgPSBudWxsIC8vIGl0IGlzIGEgdHJpY2sgdG8gc3VwcG9ydCBtYW51YWwgdHJpZ2dlcmluZ1xuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuX2lzSG92ZXJlZCkge1xuICAgICAgICB0aGlzLl9kaXNwb3NlUG9wcGVyKClcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfSElEREVOKSlcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLnRpcCwgdGhpcy5faXNBbmltYXRlZCgpKVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci51cGRhdGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByb3RlY3RlZFxuICBfaXNXaXRoQ29udGVudCgpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLl9nZXRUaXRsZSgpKVxuICB9XG5cbiAgX2dldFRpcEVsZW1lbnQoKSB7XG4gICAgaWYgKCF0aGlzLnRpcCkge1xuICAgICAgdGhpcy50aXAgPSB0aGlzLl9jcmVhdGVUaXBFbGVtZW50KHRoaXMuX25ld0NvbnRlbnQgfHwgdGhpcy5fZ2V0Q29udGVudEZvclRlbXBsYXRlKCkpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudGlwXG4gIH1cblxuICBfY3JlYXRlVGlwRWxlbWVudChjb250ZW50KSB7XG4gICAgY29uc3QgdGlwID0gdGhpcy5fZ2V0VGVtcGxhdGVGYWN0b3J5KGNvbnRlbnQpLnRvSHRtbCgpXG5cbiAgICAvLyB0b2RvOiByZW1vdmUgdGhpcyBjaGVjayBvbiB2NlxuICAgIGlmICghdGlwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHRpcC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfRkFERSwgQ0xBU1NfTkFNRV9TSE9XKVxuICAgIC8vIHRvZG86IG9uIHY2IHRoZSBmb2xsb3dpbmcgY2FuIGJlIGFjaGlldmVkIHdpdGggQ1NTIG9ubHlcbiAgICB0aXAuY2xhc3NMaXN0LmFkZChgYnMtJHt0aGlzLmNvbnN0cnVjdG9yLk5BTUV9LWF1dG9gKVxuXG4gICAgY29uc3QgdGlwSWQgPSBnZXRVSUQodGhpcy5jb25zdHJ1Y3Rvci5OQU1FKS50b1N0cmluZygpXG5cbiAgICB0aXAuc2V0QXR0cmlidXRlKCdpZCcsIHRpcElkKVxuXG4gICAgaWYgKHRoaXMuX2lzQW5pbWF0ZWQoKSkge1xuICAgICAgdGlwLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFKVxuICAgIH1cblxuICAgIHJldHVybiB0aXBcbiAgfVxuXG4gIHNldENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuX25ld0NvbnRlbnQgPSBjb250ZW50XG4gICAgaWYgKHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgdGhpcy5fZGlzcG9zZVBvcHBlcigpXG4gICAgICB0aGlzLnNob3coKVxuICAgIH1cbiAgfVxuXG4gIF9nZXRUZW1wbGF0ZUZhY3RvcnkoY29udGVudCkge1xuICAgIGlmICh0aGlzLl90ZW1wbGF0ZUZhY3RvcnkpIHtcbiAgICAgIHRoaXMuX3RlbXBsYXRlRmFjdG9yeS5jaGFuZ2VDb250ZW50KGNvbnRlbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RlbXBsYXRlRmFjdG9yeSA9IG5ldyBUZW1wbGF0ZUZhY3Rvcnkoe1xuICAgICAgICAuLi50aGlzLl9jb25maWcsXG4gICAgICAgIC8vIHRoZSBgY29udGVudGAgdmFyIGhhcyB0byBiZSBhZnRlciBgdGhpcy5fY29uZmlnYFxuICAgICAgICAvLyB0byBvdmVycmlkZSBjb25maWcuY29udGVudCBpbiBjYXNlIG9mIHBvcG92ZXJcbiAgICAgICAgY29udGVudCxcbiAgICAgICAgZXh0cmFDbGFzczogdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24odGhpcy5fY29uZmlnLmN1c3RvbUNsYXNzKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVGYWN0b3J5XG4gIH1cblxuICBfZ2V0Q29udGVudEZvclRlbXBsYXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBbU0VMRUNUT1JfVE9PTFRJUF9JTk5FUl06IHRoaXMuX2dldFRpdGxlKClcbiAgICB9XG4gIH1cblxuICBfZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHRoaXMuX2NvbmZpZy50aXRsZSkgfHwgdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfaW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IuZ2V0T3JDcmVhdGVJbnN0YW5jZShldmVudC5kZWxlZ2F0ZVRhcmdldCwgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKSlcbiAgfVxuXG4gIF9pc0FuaW1hdGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9jb25maWcuYW5pbWF0aW9uIHx8ICh0aGlzLnRpcCAmJiB0aGlzLnRpcC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKSlcbiAgfVxuXG4gIF9pc1Nob3duKCkge1xuICAgIHJldHVybiB0aGlzLnRpcCAmJiB0aGlzLnRpcC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKVxuICB9XG5cbiAgX2NyZWF0ZVBvcHBlcih0aXApIHtcbiAgICBjb25zdCBwbGFjZW1lbnQgPSB0eXBlb2YgdGhpcy5fY29uZmlnLnBsYWNlbWVudCA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICB0aGlzLl9jb25maWcucGxhY2VtZW50LmNhbGwodGhpcywgdGlwLCB0aGlzLl9lbGVtZW50KSA6XG4gICAgICB0aGlzLl9jb25maWcucGxhY2VtZW50XG4gICAgY29uc3QgYXR0YWNobWVudCA9IEF0dGFjaG1lbnRNYXBbcGxhY2VtZW50LnRvVXBwZXJDYXNlKCldXG4gICAgcmV0dXJuIFBvcHBlci5jcmVhdGVQb3BwZXIodGhpcy5fZWxlbWVudCwgdGlwLCB0aGlzLl9nZXRQb3BwZXJDb25maWcoYXR0YWNobWVudCkpXG4gIH1cblxuICBfZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHsgb2Zmc2V0IH0gPSB0aGlzLl9jb25maWdcblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG9mZnNldC5zcGxpdCgnLCcpLm1hcCh2YWx1ZSA9PiBOdW1iZXIucGFyc2VJbnQodmFsdWUsIDEwKSlcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHBvcHBlckRhdGEgPT4gb2Zmc2V0KHBvcHBlckRhdGEsIHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldFxuICB9XG5cbiAgX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nID8gYXJnLmNhbGwodGhpcy5fZWxlbWVudCkgOiBhcmdcbiAgfVxuXG4gIF9nZXRQb3BwZXJDb25maWcoYXR0YWNobWVudCkge1xuICAgIGNvbnN0IGRlZmF1bHRCc1BvcHBlckNvbmZpZyA9IHtcbiAgICAgIHBsYWNlbWVudDogYXR0YWNobWVudCxcbiAgICAgIG1vZGlmaWVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2ZsaXAnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGZhbGxiYWNrUGxhY2VtZW50czogdGhpcy5fY29uZmlnLmZhbGxiYWNrUGxhY2VtZW50c1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdvZmZzZXQnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KClcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBib3VuZGFyeTogdGhpcy5fY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2Fycm93JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBlbGVtZW50OiBgLiR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FfS1hcnJvd2BcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAncHJlU2V0UGxhY2VtZW50JyxcbiAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgIHBoYXNlOiAnYmVmb3JlTWFpbicsXG4gICAgICAgICAgZm46IGRhdGEgPT4ge1xuICAgICAgICAgICAgLy8gUHJlLXNldCBQb3BwZXIncyBwbGFjZW1lbnQgYXR0cmlidXRlIGluIG9yZGVyIHRvIHJlYWQgdGhlIGFycm93IHNpemVzIHByb3Blcmx5LlxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBQb3BwZXIgbWl4ZXMgdXAgdGhlIHdpZHRoIGFuZCBoZWlnaHQgZGltZW5zaW9ucyBzaW5jZSB0aGUgaW5pdGlhbCBhcnJvdyBzdHlsZSBpcyBmb3IgdG9wIHBsYWNlbWVudFxuICAgICAgICAgICAgdGhpcy5fZ2V0VGlwRWxlbWVudCgpLnNldEF0dHJpYnV0ZSgnZGF0YS1wb3BwZXItcGxhY2VtZW50JywgZGF0YS5zdGF0ZS5wbGFjZW1lbnQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRlZmF1bHRCc1BvcHBlckNvbmZpZyxcbiAgICAgIC4uLih0eXBlb2YgdGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZyA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcoZGVmYXVsdEJzUG9wcGVyQ29uZmlnKSA6IHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcpXG4gICAgfVxuICB9XG5cbiAgX3NldExpc3RlbmVycygpIHtcbiAgICBjb25zdCB0cmlnZ2VycyA9IHRoaXMuX2NvbmZpZy50cmlnZ2VyLnNwbGl0KCcgJylcblxuICAgIGZvciAoY29uc3QgdHJpZ2dlciBvZiB0cmlnZ2Vycykge1xuICAgICAgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0NMSUNLKSwgdGhpcy5fY29uZmlnLnNlbGVjdG9yLCBldmVudCA9PiB7XG4gICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldChldmVudClcbiAgICAgICAgICBjb250ZXh0LnRvZ2dsZSgpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKHRyaWdnZXIgIT09IFRSSUdHRVJfTUFOVUFMKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50SW4gPSB0cmlnZ2VyID09PSBUUklHR0VSX0hPVkVSID9cbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9NT1VTRUVOVEVSKSA6XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfRk9DVVNJTilcbiAgICAgICAgY29uc3QgZXZlbnRPdXQgPSB0cmlnZ2VyID09PSBUUklHR0VSX0hPVkVSID9cbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9NT1VTRUxFQVZFKSA6XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfRk9DVVNPVVQpXG5cbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIGV2ZW50SW4sIHRoaXMuX2NvbmZpZy5zZWxlY3RvciwgZXZlbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQpXG4gICAgICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltldmVudC50eXBlID09PSAnZm9jdXNpbicgPyBUUklHR0VSX0ZPQ1VTIDogVFJJR0dFUl9IT1ZFUl0gPSB0cnVlXG4gICAgICAgICAgY29udGV4dC5fZW50ZXIoKVxuICAgICAgICB9KVxuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgZXZlbnRPdXQsIHRoaXMuX2NvbmZpZy5zZWxlY3RvciwgZXZlbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQpXG4gICAgICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltldmVudC50eXBlID09PSAnZm9jdXNvdXQnID8gVFJJR0dFUl9GT0NVUyA6IFRSSUdHRVJfSE9WRVJdID1cbiAgICAgICAgICAgIGNvbnRleHQuX2VsZW1lbnQuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldClcblxuICAgICAgICAgIGNvbnRleHQuX2xlYXZlKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX01PREFMKSwgRVZFTlRfTU9EQUxfSElERSwgdGhpcy5faGlkZU1vZGFsSGFuZGxlcilcbiAgfVxuXG4gIF9maXhUaXRsZSgpIHtcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG5cbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgJiYgIXRoaXMuX2VsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHRpdGxlKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWJzLW9yaWdpbmFsLXRpdGxlJywgdGl0bGUpIC8vIERPIE5PVCBVU0UgSVQuIElzIG9ubHkgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgfVxuXG4gIF9lbnRlcigpIHtcbiAgICBpZiAodGhpcy5faXNTaG93bigpIHx8IHRoaXMuX2lzSG92ZXJlZCkge1xuICAgICAgdGhpcy5faXNIb3ZlcmVkID0gdHJ1ZVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNIb3ZlcmVkID0gdHJ1ZVxuXG4gICAgdGhpcy5fc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5faXNIb3ZlcmVkKSB7XG4gICAgICAgIHRoaXMuc2hvdygpXG4gICAgICB9XG4gICAgfSwgdGhpcy5fY29uZmlnLmRlbGF5LnNob3cpXG4gIH1cblxuICBfbGVhdmUoKSB7XG4gICAgaWYgKHRoaXMuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNIb3ZlcmVkID0gZmFsc2VcblxuICAgIHRoaXMuX3NldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9pc0hvdmVyZWQpIHtcbiAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgIH1cbiAgICB9LCB0aGlzLl9jb25maWcuZGVsYXkuaGlkZSlcbiAgfVxuXG4gIF9zZXRUaW1lb3V0KGhhbmRsZXIsIHRpbWVvdXQpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcbiAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dChoYW5kbGVyLCB0aW1lb3V0KVxuICB9XG5cbiAgX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5fYWN0aXZlVHJpZ2dlcikuaW5jbHVkZXModHJ1ZSlcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uc3QgZGF0YUF0dHJpYnV0ZXMgPSBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzLl9lbGVtZW50KVxuXG4gICAgZm9yIChjb25zdCBkYXRhQXR0cmlidXRlIG9mIE9iamVjdC5rZXlzKGRhdGFBdHRyaWJ1dGVzKSkge1xuICAgICAgaWYgKERJU0FMTE9XRURfQVRUUklCVVRFUy5oYXMoZGF0YUF0dHJpYnV0ZSkpIHtcbiAgICAgICAgZGVsZXRlIGRhdGFBdHRyaWJ1dGVzW2RhdGFBdHRyaWJ1dGVdXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uZGF0YUF0dHJpYnV0ZXMsXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pXG4gICAgfVxuICAgIGNvbmZpZyA9IHRoaXMuX21lcmdlQ29uZmlnT2JqKGNvbmZpZylcbiAgICBjb25maWcgPSB0aGlzLl9jb25maWdBZnRlck1lcmdlKGNvbmZpZylcbiAgICB0aGlzLl90eXBlQ2hlY2tDb25maWcoY29uZmlnKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgIGNvbmZpZy5jb250YWluZXIgPSBjb25maWcuY29udGFpbmVyID09PSBmYWxzZSA/IGRvY3VtZW50LmJvZHkgOiBnZXRFbGVtZW50KGNvbmZpZy5jb250YWluZXIpXG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5kZWxheSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbmZpZy5kZWxheSA9IHtcbiAgICAgICAgc2hvdzogY29uZmlnLmRlbGF5LFxuICAgICAgICBoaWRlOiBjb25maWcuZGVsYXlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50aXRsZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbmZpZy50aXRsZSA9IGNvbmZpZy50aXRsZS50b1N0cmluZygpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcuY29udGVudCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbmZpZy5jb250ZW50ID0gY29uZmlnLmNvbnRlbnQudG9TdHJpbmcoKVxuICAgIH1cblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXREZWxlZ2F0ZUNvbmZpZygpIHtcbiAgICBjb25zdCBjb25maWcgPSB7fVxuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5fY29uZmlnKSB7XG4gICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0W2tleV0gIT09IHRoaXMuX2NvbmZpZ1trZXldKSB7XG4gICAgICAgIGNvbmZpZ1trZXldID0gdGhpcy5fY29uZmlnW2tleV1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25maWcuc2VsZWN0b3IgPSBmYWxzZVxuICAgIGNvbmZpZy50cmlnZ2VyID0gJ21hbnVhbCdcblxuICAgIC8vIEluIHRoZSBmdXR1cmUgY2FuIGJlIHJlcGxhY2VkIHdpdGg6XG4gICAgLy8gY29uc3Qga2V5c1dpdGhEaWZmZXJlbnRWYWx1ZXMgPSBPYmplY3QuZW50cmllcyh0aGlzLl9jb25maWcpLmZpbHRlcihlbnRyeSA9PiB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRbZW50cnlbMF1dICE9PSB0aGlzLl9jb25maWdbZW50cnlbMF1dKVxuICAgIC8vIGBPYmplY3QuZnJvbUVudHJpZXMoa2V5c1dpdGhEaWZmZXJlbnRWYWx1ZXMpYFxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9kaXNwb3NlUG9wcGVyKCkge1xuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICAgIHRoaXMuX3BvcHBlciA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAodGhpcy50aXApIHtcbiAgICAgIHRoaXMudGlwLnJlbW92ZSgpXG4gICAgICB0aGlzLnRpcCA9IG51bGxcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBUb29sdGlwLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihUb29sdGlwKVxuXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjIuMyk6IHV0aWwvYmFja2Ryb3AuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4uL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IHsgZXhlY3V0ZSwgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbiwgZ2V0RWxlbWVudCwgcmVmbG93IH0gZnJvbSAnLi9pbmRleCdcbmltcG9ydCBDb25maWcgZnJvbSAnLi9jb25maWcnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdiYWNrZHJvcCdcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBFVkVOVF9NT1VTRURPV04gPSBgbW91c2Vkb3duLmJzLiR7TkFNRX1gXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGNsYXNzTmFtZTogJ21vZGFsLWJhY2tkcm9wJyxcbiAgY2xpY2tDYWxsYmFjazogbnVsbCxcbiAgaXNBbmltYXRlZDogZmFsc2UsXG4gIGlzVmlzaWJsZTogdHJ1ZSwgLy8gaWYgZmFsc2UsIHdlIHVzZSB0aGUgYmFja2Ryb3AgaGVscGVyIHdpdGhvdXQgYWRkaW5nIGFueSBlbGVtZW50IHRvIHRoZSBkb21cbiAgcm9vdEVsZW1lbnQ6ICdib2R5JyAvLyBnaXZlIHRoZSBjaG9pY2UgdG8gcGxhY2UgYmFja2Ryb3AgdW5kZXIgZGlmZmVyZW50IGVsZW1lbnRzXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICBjbGlja0NhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJyxcbiAgaXNBbmltYXRlZDogJ2Jvb2xlYW4nLFxuICBpc1Zpc2libGU6ICdib29sZWFuJyxcbiAgcm9vdEVsZW1lbnQ6ICcoZWxlbWVudHxzdHJpbmcpJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBCYWNrZHJvcCBleHRlbmRzIENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2lzQXBwZW5kZWQgPSBmYWxzZVxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHNob3coY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5pc1Zpc2libGUpIHtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9hcHBlbmQoKVxuXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2dldEVsZW1lbnQoKVxuICAgIGlmICh0aGlzLl9jb25maWcuaXNBbmltYXRlZCkge1xuICAgICAgcmVmbG93KGVsZW1lbnQpXG4gICAgfVxuXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcblxuICAgIHRoaXMuX2VtdWxhdGVBbmltYXRpb24oKCkgPT4ge1xuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICB9KVxuICB9XG5cbiAgaGlkZShjYWxsYmFjaykge1xuICAgIGlmICghdGhpcy5fY29uZmlnLmlzVmlzaWJsZSkge1xuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2dldEVsZW1lbnQoKS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgIHRoaXMuX2VtdWxhdGVBbmltYXRpb24oKCkgPT4ge1xuICAgICAgdGhpcy5kaXNwb3NlKClcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgfSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0FwcGVuZGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFRE9XTilcblxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKClcbiAgICB0aGlzLl9pc0FwcGVuZGVkID0gZmFsc2VcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2dldEVsZW1lbnQoKSB7XG4gICAgaWYgKCF0aGlzLl9lbGVtZW50KSB7XG4gICAgICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBiYWNrZHJvcC5jbGFzc05hbWUgPSB0aGlzLl9jb25maWcuY2xhc3NOYW1lXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpIHtcbiAgICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBiYWNrZHJvcFxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50XG4gIH1cblxuICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICAvLyB1c2UgZ2V0RWxlbWVudCgpIHdpdGggdGhlIGRlZmF1bHQgXCJib2R5XCIgdG8gZ2V0IGEgZnJlc2ggRWxlbWVudCBvbiBlYWNoIGluc3RhbnRpYXRpb25cbiAgICBjb25maWcucm9vdEVsZW1lbnQgPSBnZXRFbGVtZW50KGNvbmZpZy5yb290RWxlbWVudClcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfYXBwZW5kKCkge1xuICAgIGlmICh0aGlzLl9pc0FwcGVuZGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fZ2V0RWxlbWVudCgpXG4gICAgdGhpcy5fY29uZmlnLnJvb3RFbGVtZW50LmFwcGVuZChlbGVtZW50KVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKGVsZW1lbnQsIEVWRU5UX01PVVNFRE9XTiwgKCkgPT4ge1xuICAgICAgZXhlY3V0ZSh0aGlzLl9jb25maWcuY2xpY2tDYWxsYmFjaylcbiAgICB9KVxuXG4gICAgdGhpcy5faXNBcHBlbmRlZCA9IHRydWVcbiAgfVxuXG4gIF9lbXVsYXRlQW5pbWF0aW9uKGNhbGxiYWNrKSB7XG4gICAgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbihjYWxsYmFjaywgdGhpcy5fZ2V0RWxlbWVudCgpLCB0aGlzLl9jb25maWcuaXNBbmltYXRlZClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZHJvcFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4yLjMpOiB1dGlsL2NvbXBvbmVudC1mdW5jdGlvbnMuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4uL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IHsgZ2V0RWxlbWVudEZyb21TZWxlY3RvciwgaXNEaXNhYmxlZCB9IGZyb20gJy4vaW5kZXgnXG5cbmNvbnN0IGVuYWJsZURpc21pc3NUcmlnZ2VyID0gKGNvbXBvbmVudCwgbWV0aG9kID0gJ2hpZGUnKSA9PiB7XG4gIGNvbnN0IGNsaWNrRXZlbnQgPSBgY2xpY2suZGlzbWlzcyR7Y29tcG9uZW50LkVWRU5UX0tFWX1gXG4gIGNvbnN0IG5hbWUgPSBjb21wb25lbnQuTkFNRVxuXG4gIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgY2xpY2tFdmVudCwgYFtkYXRhLWJzLWRpc21pc3M9XCIke25hbWV9XCJdYCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmIChpc0Rpc2FibGVkKHRoaXMpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXQgPSBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpIHx8IHRoaXMuY2xvc2VzdChgLiR7bmFtZX1gKVxuICAgIGNvbnN0IGluc3RhbmNlID0gY29tcG9uZW50LmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KVxuXG4gICAgLy8gTWV0aG9kIGFyZ3VtZW50IGlzIGxlZnQsIGZvciBBbGVydCBhbmQgb25seSwgYXMgaXQgZG9lc24ndCBpbXBsZW1lbnQgdGhlICdoaWRlJyBtZXRob2RcbiAgICBpbnN0YW5jZVttZXRob2RdKClcbiAgfSlcbn1cblxuZXhwb3J0IHtcbiAgZW5hYmxlRGlzbWlzc1RyaWdnZXJcbn1cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMi4zKTogdXRpbC9jb25maWcuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBpc0VsZW1lbnQsIHRvVHlwZSB9IGZyb20gJy4vaW5kZXgnXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi4vZG9tL21hbmlwdWxhdG9yJ1xuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBDb25maWcge1xuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgaGF2ZSB0byBpbXBsZW1lbnQgdGhlIHN0YXRpYyBtZXRob2QgXCJOQU1FXCIsIGZvciBlYWNoIGNvbXBvbmVudCEnKVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB0aGlzLl9tZXJnZUNvbmZpZ09iaihjb25maWcpXG4gICAgY29uZmlnID0gdGhpcy5fY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpXG4gICAgdGhpcy5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZylcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfbWVyZ2VDb25maWdPYmooY29uZmlnLCBlbGVtZW50KSB7XG4gICAgY29uc3QganNvbkNvbmZpZyA9IGlzRWxlbWVudChlbGVtZW50KSA/IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwgJ2NvbmZpZycpIDoge30gLy8gdHJ5IHRvIHBhcnNlXG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LFxuICAgICAgLi4uKHR5cGVvZiBqc29uQ29uZmlnID09PSAnb2JqZWN0JyA/IGpzb25Db25maWcgOiB7fSksXG4gICAgICAuLi4oaXNFbGVtZW50KGVsZW1lbnQpID8gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXMoZWxlbWVudCkgOiB7fSksXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiB7fSlcbiAgICB9XG4gIH1cblxuICBfdHlwZUNoZWNrQ29uZmlnKGNvbmZpZywgY29uZmlnVHlwZXMgPSB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKSB7XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiBPYmplY3Qua2V5cyhjb25maWdUeXBlcykpIHtcbiAgICAgIGNvbnN0IGV4cGVjdGVkVHlwZXMgPSBjb25maWdUeXBlc1twcm9wZXJ0eV1cbiAgICAgIGNvbnN0IHZhbHVlID0gY29uZmlnW3Byb3BlcnR5XVxuICAgICAgY29uc3QgdmFsdWVUeXBlID0gaXNFbGVtZW50KHZhbHVlKSA/ICdlbGVtZW50JyA6IHRvVHlwZSh2YWx1ZSlcblxuICAgICAgaWYgKCFuZXcgUmVnRXhwKGV4cGVjdGVkVHlwZXMpLnRlc3QodmFsdWVUeXBlKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIGAke3RoaXMuY29uc3RydWN0b3IuTkFNRS50b1VwcGVyQ2FzZSgpfTogT3B0aW9uIFwiJHtwcm9wZXJ0eX1cIiBwcm92aWRlZCB0eXBlIFwiJHt2YWx1ZVR5cGV9XCIgYnV0IGV4cGVjdGVkIHR5cGUgXCIke2V4cGVjdGVkVHlwZXN9XCIuYFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZ1xuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4yLjMpOiB1dGlsL2ZvY3VzdHJhcC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBDb25maWcgZnJvbSAnLi9jb25maWcnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdmb2N1c3RyYXAnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5mb2N1c3RyYXAnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgRVZFTlRfRk9DVVNJTiA9IGBmb2N1c2luJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTl9UQUIgPSBga2V5ZG93bi50YWIke0VWRU5UX0tFWX1gXG5cbmNvbnN0IFRBQl9LRVkgPSAnVGFiJ1xuY29uc3QgVEFCX05BVl9GT1JXQVJEID0gJ2ZvcndhcmQnXG5jb25zdCBUQUJfTkFWX0JBQ0tXQVJEID0gJ2JhY2t3YXJkJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhdXRvZm9jdXM6IHRydWUsXG4gIHRyYXBFbGVtZW50OiBudWxsIC8vIFRoZSBlbGVtZW50IHRvIHRyYXAgZm9jdXMgaW5zaWRlIG9mXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBhdXRvZm9jdXM6ICdib29sZWFuJyxcbiAgdHJhcEVsZW1lbnQ6ICdlbGVtZW50J1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBGb2N1c1RyYXAgZXh0ZW5kcyBDb25maWcge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlXG4gICAgdGhpcy5fbGFzdFRhYk5hdkRpcmVjdGlvbiA9IG51bGxcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgYWN0aXZhdGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzQWN0aXZlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmF1dG9mb2N1cykge1xuICAgICAgdGhpcy5fY29uZmlnLnRyYXBFbGVtZW50LmZvY3VzKClcbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9LRVkpIC8vIGd1YXJkIGFnYWluc3QgaW5maW5pdGUgZm9jdXMgbG9vcFxuICAgIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTiwgZXZlbnQgPT4gdGhpcy5faGFuZGxlRm9jdXNpbihldmVudCkpXG4gICAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlET1dOX1RBQiwgZXZlbnQgPT4gdGhpcy5faGFuZGxlS2V5ZG93bihldmVudCkpXG5cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IHRydWVcbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZVxuICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0tFWSlcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2hhbmRsZUZvY3VzaW4oZXZlbnQpIHtcbiAgICBjb25zdCB7IHRyYXBFbGVtZW50IH0gPSB0aGlzLl9jb25maWdcblxuICAgIGlmIChldmVudC50YXJnZXQgPT09IGRvY3VtZW50IHx8IGV2ZW50LnRhcmdldCA9PT0gdHJhcEVsZW1lbnQgfHwgdHJhcEVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudHMgPSBTZWxlY3RvckVuZ2luZS5mb2N1c2FibGVDaGlsZHJlbih0cmFwRWxlbWVudClcblxuICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRyYXBFbGVtZW50LmZvY3VzKClcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb24gPT09IFRBQl9OQVZfQkFDS1dBUkQpIHtcbiAgICAgIGVsZW1lbnRzW2VsZW1lbnRzLmxlbmd0aCAtIDFdLmZvY3VzKClcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudHNbMF0uZm9jdXMoKVxuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVLZXlkb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSAhPT0gVEFCX0tFWSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fbGFzdFRhYk5hdkRpcmVjdGlvbiA9IGV2ZW50LnNoaWZ0S2V5ID8gVEFCX05BVl9CQUNLV0FSRCA6IFRBQl9OQVZfRk9SV0FSRFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvY3VzVHJhcFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4yLjMpOiB1dGlsL2luZGV4LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTUFYX1VJRCA9IDFfMDAwXzAwMFxuY29uc3QgTUlMTElTRUNPTkRTX01VTFRJUExJRVIgPSAxMDAwXG5jb25zdCBUUkFOU0lUSU9OX0VORCA9ICd0cmFuc2l0aW9uZW5kJ1xuXG4vLyBTaG91dC1vdXQgQW5ndXMgQ3JvbGwgKGh0dHBzOi8vZ29vLmdsL3B4d1FHcClcbmNvbnN0IHRvVHlwZSA9IG9iamVjdCA9PiB7XG4gIGlmIChvYmplY3QgPT09IG51bGwgfHwgb2JqZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gYCR7b2JqZWN0fWBcbiAgfVxuXG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KS5tYXRjaCgvXFxzKFthLXpdKykvaSlbMV0udG9Mb3dlckNhc2UoKVxufVxuXG4vKipcbiAqIFB1YmxpYyBVdGlsIEFQSVxuICovXG5cbmNvbnN0IGdldFVJRCA9IHByZWZpeCA9PiB7XG4gIGRvIHtcbiAgICBwcmVmaXggKz0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTUFYX1VJRClcbiAgfSB3aGlsZSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJlZml4KSlcblxuICByZXR1cm4gcHJlZml4XG59XG5cbmNvbnN0IGdldFNlbGVjdG9yID0gZWxlbWVudCA9PiB7XG4gIGxldCBzZWxlY3RvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLXRhcmdldCcpXG5cbiAgaWYgKCFzZWxlY3RvciB8fCBzZWxlY3RvciA9PT0gJyMnKSB7XG4gICAgbGV0IGhyZWZBdHRyaWJ1dGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpXG5cbiAgICAvLyBUaGUgb25seSB2YWxpZCBjb250ZW50IHRoYXQgY291bGQgZG91YmxlIGFzIGEgc2VsZWN0b3IgYXJlIElEcyBvciBjbGFzc2VzLFxuICAgIC8vIHNvIGV2ZXJ5dGhpbmcgc3RhcnRpbmcgd2l0aCBgI2Agb3IgYC5gLiBJZiBhIFwicmVhbFwiIFVSTCBpcyB1c2VkIGFzIHRoZSBzZWxlY3RvcixcbiAgICAvLyBgZG9jdW1lbnQucXVlcnlTZWxlY3RvcmAgd2lsbCByaWdodGZ1bGx5IGNvbXBsYWluIGl0IGlzIGludmFsaWQuXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMzIyNzNcbiAgICBpZiAoIWhyZWZBdHRyaWJ1dGUgfHwgKCFocmVmQXR0cmlidXRlLmluY2x1ZGVzKCcjJykgJiYgIWhyZWZBdHRyaWJ1dGUuc3RhcnRzV2l0aCgnLicpKSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyBKdXN0IGluIGNhc2Ugc29tZSBDTVMgcHV0cyBvdXQgYSBmdWxsIFVSTCB3aXRoIHRoZSBhbmNob3IgYXBwZW5kZWRcbiAgICBpZiAoaHJlZkF0dHJpYnV0ZS5pbmNsdWRlcygnIycpICYmICFocmVmQXR0cmlidXRlLnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgICAgaHJlZkF0dHJpYnV0ZSA9IGAjJHtocmVmQXR0cmlidXRlLnNwbGl0KCcjJylbMV19YFxuICAgIH1cblxuICAgIHNlbGVjdG9yID0gaHJlZkF0dHJpYnV0ZSAmJiBocmVmQXR0cmlidXRlICE9PSAnIycgPyBocmVmQXR0cmlidXRlLnRyaW0oKSA6IG51bGxcbiAgfVxuXG4gIHJldHVybiBzZWxlY3RvclxufVxuXG5jb25zdCBnZXRTZWxlY3RvckZyb21FbGVtZW50ID0gZWxlbWVudCA9PiB7XG4gIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudClcblxuICBpZiAoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgPyBzZWxlY3RvciA6IG51bGxcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmNvbnN0IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IgPSBlbGVtZW50ID0+IHtcbiAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KVxuXG4gIHJldHVybiBzZWxlY3RvciA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDogbnVsbFxufVxuXG5jb25zdCBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgLy8gR2V0IHRyYW5zaXRpb24tZHVyYXRpb24gb2YgdGhlIGVsZW1lbnRcbiAgbGV0IHsgdHJhbnNpdGlvbkR1cmF0aW9uLCB0cmFuc2l0aW9uRGVsYXkgfSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpXG5cbiAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gPSBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkRlbGF5ID0gTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KVxuXG4gIC8vIFJldHVybiAwIGlmIGVsZW1lbnQgb3IgdHJhbnNpdGlvbiBkdXJhdGlvbiBpcyBub3QgZm91bmRcbiAgaWYgKCFmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiAmJiAhZmxvYXRUcmFuc2l0aW9uRGVsYXkpIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgLy8gSWYgbXVsdGlwbGUgZHVyYXRpb25zIGFyZSBkZWZpbmVkLCB0YWtlIHRoZSBmaXJzdFxuICB0cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb24uc3BsaXQoJywnKVswXVxuICB0cmFuc2l0aW9uRGVsYXkgPSB0cmFuc2l0aW9uRGVsYXkuc3BsaXQoJywnKVswXVxuXG4gIHJldHVybiAoTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKSArIE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSkpICogTUlMTElTRUNPTkRTX01VTFRJUExJRVJcbn1cblxuY29uc3QgdHJpZ2dlclRyYW5zaXRpb25FbmQgPSBlbGVtZW50ID0+IHtcbiAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChUUkFOU0lUSU9OX0VORCkpXG59XG5cbmNvbnN0IGlzRWxlbWVudCA9IG9iamVjdCA9PiB7XG4gIGlmICghb2JqZWN0IHx8IHR5cGVvZiBvYmplY3QgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBpZiAodHlwZW9mIG9iamVjdC5qcXVlcnkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgb2JqZWN0ID0gb2JqZWN0WzBdXG4gIH1cblxuICByZXR1cm4gdHlwZW9mIG9iamVjdC5ub2RlVHlwZSAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuY29uc3QgZ2V0RWxlbWVudCA9IG9iamVjdCA9PiB7XG4gIC8vIGl0J3MgYSBqUXVlcnkgb2JqZWN0IG9yIGEgbm9kZSBlbGVtZW50XG4gIGlmIChpc0VsZW1lbnQob2JqZWN0KSkge1xuICAgIHJldHVybiBvYmplY3QuanF1ZXJ5ID8gb2JqZWN0WzBdIDogb2JqZWN0XG4gIH1cblxuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ3N0cmluZycgJiYgb2JqZWN0Lmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvYmplY3QpXG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5jb25zdCBpc1Zpc2libGUgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFpc0VsZW1lbnQoZWxlbWVudCkgfHwgZWxlbWVudC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudElzVmlzaWJsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgndmlzaWJpbGl0eScpID09PSAndmlzaWJsZSdcbiAgLy8gSGFuZGxlIGBkZXRhaWxzYCBlbGVtZW50IGFzIGl0cyBjb250ZW50IG1heSBmYWxzaWUgYXBwZWFyIHZpc2libGUgd2hlbiBpdCBpcyBjbG9zZWRcbiAgY29uc3QgY2xvc2VkRGV0YWlscyA9IGVsZW1lbnQuY2xvc2VzdCgnZGV0YWlsczpub3QoW29wZW5dKScpXG5cbiAgaWYgKCFjbG9zZWREZXRhaWxzKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRJc1Zpc2libGVcbiAgfVxuXG4gIGlmIChjbG9zZWREZXRhaWxzICE9PSBlbGVtZW50KSB7XG4gICAgY29uc3Qgc3VtbWFyeSA9IGVsZW1lbnQuY2xvc2VzdCgnc3VtbWFyeScpXG4gICAgaWYgKHN1bW1hcnkgJiYgc3VtbWFyeS5wYXJlbnROb2RlICE9PSBjbG9zZWREZXRhaWxzKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoc3VtbWFyeSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRJc1Zpc2libGVcbn1cblxuY29uc3QgaXNEaXNhYmxlZCA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWVsZW1lbnQgfHwgZWxlbWVudC5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmICh0eXBlb2YgZWxlbWVudC5kaXNhYmxlZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZWxlbWVudC5kaXNhYmxlZFxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpICYmIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpICE9PSAnZmFsc2UnXG59XG5cbmNvbnN0IGZpbmRTaGFkb3dSb290ID0gZWxlbWVudCA9PiB7XG4gIGlmICghZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmF0dGFjaFNoYWRvdykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyBDYW4gZmluZCB0aGUgc2hhZG93IHJvb3Qgb3RoZXJ3aXNlIGl0J2xsIHJldHVybiB0aGUgZG9jdW1lbnRcbiAgaWYgKHR5cGVvZiBlbGVtZW50LmdldFJvb3ROb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3Qgcm9vdCA9IGVsZW1lbnQuZ2V0Um9vdE5vZGUoKVxuICAgIHJldHVybiByb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IHJvb3QgOiBudWxsXG4gIH1cblxuICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHtcbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG5cbiAgLy8gd2hlbiB3ZSBkb24ndCBmaW5kIGEgc2hhZG93IHJvb3RcbiAgaWYgKCFlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIGZpbmRTaGFkb3dSb290KGVsZW1lbnQucGFyZW50Tm9kZSlcbn1cblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbi8qKlxuICogVHJpY2sgdG8gcmVzdGFydCBhbiBlbGVtZW50J3MgYW5pbWF0aW9uXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybiB2b2lkXG4gKlxuICogQHNlZSBodHRwczovL3d3dy5jaGFyaXN0aGVvLmlvL2Jsb2cvMjAyMS8wMi9yZXN0YXJ0LWEtY3NzLWFuaW1hdGlvbi13aXRoLWphdmFzY3JpcHQvI3Jlc3RhcnRpbmctYS1jc3MtYW5pbWF0aW9uXG4gKi9cbmNvbnN0IHJlZmxvdyA9IGVsZW1lbnQgPT4ge1xuICBlbGVtZW50Lm9mZnNldEhlaWdodCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xufVxuXG5jb25zdCBnZXRqUXVlcnkgPSAoKSA9PiB7XG4gIGlmICh3aW5kb3cualF1ZXJ5ICYmICFkb2N1bWVudC5ib2R5Lmhhc0F0dHJpYnV0ZSgnZGF0YS1icy1uby1qcXVlcnknKSkge1xuICAgIHJldHVybiB3aW5kb3cualF1ZXJ5XG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5jb25zdCBET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzID0gW11cblxuY29uc3Qgb25ET01Db250ZW50TG9hZGVkID0gY2FsbGJhY2sgPT4ge1xuICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgLy8gYWRkIGxpc3RlbmVyIG9uIHRoZSBmaXJzdCBjYWxsIHdoZW4gdGhlIGRvY3VtZW50IGlzIGluIGxvYWRpbmcgc3RhdGVcbiAgICBpZiAoIURPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIERPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MpIHtcbiAgICAgICAgICBjYWxsYmFjaygpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgRE9NQ29udGVudExvYWRlZENhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKVxuICB9IGVsc2Uge1xuICAgIGNhbGxiYWNrKClcbiAgfVxufVxuXG5jb25zdCBpc1JUTCA9ICgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kaXIgPT09ICdydGwnXG5cbmNvbnN0IGRlZmluZUpRdWVyeVBsdWdpbiA9IHBsdWdpbiA9PiB7XG4gIG9uRE9NQ29udGVudExvYWRlZCgoKSA9PiB7XG4gICAgY29uc3QgJCA9IGdldGpRdWVyeSgpXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCQpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBwbHVnaW4uTkFNRVxuICAgICAgY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltuYW1lXVxuICAgICAgJC5mbltuYW1lXSA9IHBsdWdpbi5qUXVlcnlJbnRlcmZhY2VcbiAgICAgICQuZm5bbmFtZV0uQ29uc3RydWN0b3IgPSBwbHVnaW5cbiAgICAgICQuZm5bbmFtZV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgICAgICAgJC5mbltuYW1lXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgICAgICByZXR1cm4gcGx1Z2luLmpRdWVyeUludGVyZmFjZVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgZXhlY3V0ZSA9IGNhbGxiYWNrID0+IHtcbiAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrKClcbiAgfVxufVxuXG5jb25zdCBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uID0gKGNhbGxiYWNrLCB0cmFuc2l0aW9uRWxlbWVudCwgd2FpdEZvclRyYW5zaXRpb24gPSB0cnVlKSA9PiB7XG4gIGlmICghd2FpdEZvclRyYW5zaXRpb24pIHtcbiAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgZHVyYXRpb25QYWRkaW5nID0gNVxuICBjb25zdCBlbXVsYXRlZER1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodHJhbnNpdGlvbkVsZW1lbnQpICsgZHVyYXRpb25QYWRkaW5nXG5cbiAgbGV0IGNhbGxlZCA9IGZhbHNlXG5cbiAgY29uc3QgaGFuZGxlciA9ICh7IHRhcmdldCB9KSA9PiB7XG4gICAgaWYgKHRhcmdldCAhPT0gdHJhbnNpdGlvbkVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNhbGxlZCA9IHRydWVcbiAgICB0cmFuc2l0aW9uRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFRSQU5TSVRJT05fRU5ELCBoYW5kbGVyKVxuICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gIH1cblxuICB0cmFuc2l0aW9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFRSQU5TSVRJT05fRU5ELCBoYW5kbGVyKVxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgdHJpZ2dlclRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkVsZW1lbnQpXG4gICAgfVxuICB9LCBlbXVsYXRlZER1cmF0aW9uKVxufVxuXG4vKipcbiAqIFJldHVybiB0aGUgcHJldmlvdXMvbmV4dCBlbGVtZW50IG9mIGEgbGlzdC5cbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBsaXN0ICAgIFRoZSBsaXN0IG9mIGVsZW1lbnRzXG4gKiBAcGFyYW0gYWN0aXZlRWxlbWVudCAgIFRoZSBhY3RpdmUgZWxlbWVudFxuICogQHBhcmFtIHNob3VsZEdldE5leHQgICBDaG9vc2UgdG8gZ2V0IG5leHQgb3IgcHJldmlvdXMgZWxlbWVudFxuICogQHBhcmFtIGlzQ3ljbGVBbGxvd2VkXG4gKiBAcmV0dXJuIHtFbGVtZW50fGVsZW19IFRoZSBwcm9wZXIgZWxlbWVudFxuICovXG5jb25zdCBnZXROZXh0QWN0aXZlRWxlbWVudCA9IChsaXN0LCBhY3RpdmVFbGVtZW50LCBzaG91bGRHZXROZXh0LCBpc0N5Y2xlQWxsb3dlZCkgPT4ge1xuICBjb25zdCBsaXN0TGVuZ3RoID0gbGlzdC5sZW5ndGhcbiAgbGV0IGluZGV4ID0gbGlzdC5pbmRleE9mKGFjdGl2ZUVsZW1lbnQpXG5cbiAgLy8gaWYgdGhlIGVsZW1lbnQgZG9lcyBub3QgZXhpc3QgaW4gdGhlIGxpc3QgcmV0dXJuIGFuIGVsZW1lbnRcbiAgLy8gZGVwZW5kaW5nIG9uIHRoZSBkaXJlY3Rpb24gYW5kIGlmIGN5Y2xlIGlzIGFsbG93ZWRcbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIHJldHVybiAhc2hvdWxkR2V0TmV4dCAmJiBpc0N5Y2xlQWxsb3dlZCA/IGxpc3RbbGlzdExlbmd0aCAtIDFdIDogbGlzdFswXVxuICB9XG5cbiAgaW5kZXggKz0gc2hvdWxkR2V0TmV4dCA/IDEgOiAtMVxuXG4gIGlmIChpc0N5Y2xlQWxsb3dlZCkge1xuICAgIGluZGV4ID0gKGluZGV4ICsgbGlzdExlbmd0aCkgJSBsaXN0TGVuZ3RoXG4gIH1cblxuICByZXR1cm4gbGlzdFtNYXRoLm1heCgwLCBNYXRoLm1pbihpbmRleCwgbGlzdExlbmd0aCAtIDEpKV1cbn1cblxuZXhwb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBleGVjdXRlLFxuICBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uLFxuICBmaW5kU2hhZG93Um9vdCxcbiAgZ2V0RWxlbWVudCxcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgZ2V0alF1ZXJ5LFxuICBnZXROZXh0QWN0aXZlRWxlbWVudCxcbiAgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCxcbiAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQsXG4gIGdldFVJRCxcbiAgaXNEaXNhYmxlZCxcbiAgaXNFbGVtZW50LFxuICBpc1JUTCxcbiAgaXNWaXNpYmxlLFxuICBub29wLFxuICBvbkRPTUNvbnRlbnRMb2FkZWQsXG4gIHJlZmxvdyxcbiAgdHJpZ2dlclRyYW5zaXRpb25FbmQsXG4gIHRvVHlwZVxufVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4yLjMpOiB1dGlsL3Nhbml0aXplci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IHVyaUF0dHJpYnV0ZXMgPSBuZXcgU2V0KFtcbiAgJ2JhY2tncm91bmQnLFxuICAnY2l0ZScsXG4gICdocmVmJyxcbiAgJ2l0ZW10eXBlJyxcbiAgJ2xvbmdkZXNjJyxcbiAgJ3Bvc3RlcicsXG4gICdzcmMnLFxuICAneGxpbms6aHJlZidcbl0pXG5cbmNvbnN0IEFSSUFfQVRUUklCVVRFX1BBVFRFUk4gPSAvXmFyaWEtW1xcdy1dKiQvaVxuXG4vKipcbiAqIEEgcGF0dGVybiB0aGF0IHJlY29nbml6ZXMgYSBjb21tb25seSB1c2VmdWwgc3Vic2V0IG9mIFVSTHMgdGhhdCBhcmUgc2FmZS5cbiAqXG4gKiBTaG91dC1vdXQgdG8gQW5ndWxhciBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvMTIuMi54L3BhY2thZ2VzL2NvcmUvc3JjL3Nhbml0aXphdGlvbi91cmxfc2FuaXRpemVyLnRzXG4gKi9cbmNvbnN0IFNBRkVfVVJMX1BBVFRFUk4gPSAvXig/Oig/Omh0dHBzP3xtYWlsdG98ZnRwfHRlbHxmaWxlfHNtcyk6fFteIyYvOj9dKig/OlsjLz9dfCQpKS9pXG5cbi8qKlxuICogQSBwYXR0ZXJuIHRoYXQgbWF0Y2hlcyBzYWZlIGRhdGEgVVJMcy4gT25seSBtYXRjaGVzIGltYWdlLCB2aWRlbyBhbmQgYXVkaW8gdHlwZXMuXG4gKlxuICogU2hvdXQtb3V0IHRvIEFuZ3VsYXIgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzEyLjIueC9wYWNrYWdlcy9jb3JlL3NyYy9zYW5pdGl6YXRpb24vdXJsX3Nhbml0aXplci50c1xuICovXG5jb25zdCBEQVRBX1VSTF9QQVRURVJOID0gL15kYXRhOig/OmltYWdlXFwvKD86Ym1wfGdpZnxqcGVnfGpwZ3xwbmd8dGlmZnx3ZWJwKXx2aWRlb1xcLyg/Om1wZWd8bXA0fG9nZ3x3ZWJtKXxhdWRpb1xcLyg/Om1wM3xvZ2F8b2dnfG9wdXMpKTtiYXNlNjQsW1xcZCsvYS16XSs9KiQvaVxuXG5jb25zdCBhbGxvd2VkQXR0cmlidXRlID0gKGF0dHJpYnV0ZSwgYWxsb3dlZEF0dHJpYnV0ZUxpc3QpID0+IHtcbiAgY29uc3QgYXR0cmlidXRlTmFtZSA9IGF0dHJpYnV0ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXG5cbiAgaWYgKGFsbG93ZWRBdHRyaWJ1dGVMaXN0LmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgaWYgKHVyaUF0dHJpYnV0ZXMuaGFzKGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbihTQUZFX1VSTF9QQVRURVJOLnRlc3QoYXR0cmlidXRlLm5vZGVWYWx1ZSkgfHwgREFUQV9VUkxfUEFUVEVSTi50ZXN0KGF0dHJpYnV0ZS5ub2RlVmFsdWUpKVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAvLyBDaGVjayBpZiBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB2YWxpZGF0ZXMgdGhlIGF0dHJpYnV0ZS5cbiAgcmV0dXJuIGFsbG93ZWRBdHRyaWJ1dGVMaXN0LmZpbHRlcihhdHRyaWJ1dGVSZWdleCA9PiBhdHRyaWJ1dGVSZWdleCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAuc29tZShyZWdleCA9PiByZWdleC50ZXN0KGF0dHJpYnV0ZU5hbWUpKVxufVxuXG5leHBvcnQgY29uc3QgRGVmYXVsdEFsbG93bGlzdCA9IHtcbiAgLy8gR2xvYmFsIGF0dHJpYnV0ZXMgYWxsb3dlZCBvbiBhbnkgc3VwcGxpZWQgZWxlbWVudCBiZWxvdy5cbiAgJyonOiBbJ2NsYXNzJywgJ2RpcicsICdpZCcsICdsYW5nJywgJ3JvbGUnLCBBUklBX0FUVFJJQlVURV9QQVRURVJOXSxcbiAgYTogWyd0YXJnZXQnLCAnaHJlZicsICd0aXRsZScsICdyZWwnXSxcbiAgYXJlYTogW10sXG4gIGI6IFtdLFxuICBicjogW10sXG4gIGNvbDogW10sXG4gIGNvZGU6IFtdLFxuICBkaXY6IFtdLFxuICBlbTogW10sXG4gIGhyOiBbXSxcbiAgaDE6IFtdLFxuICBoMjogW10sXG4gIGgzOiBbXSxcbiAgaDQ6IFtdLFxuICBoNTogW10sXG4gIGg2OiBbXSxcbiAgaTogW10sXG4gIGltZzogWydzcmMnLCAnc3Jjc2V0JywgJ2FsdCcsICd0aXRsZScsICd3aWR0aCcsICdoZWlnaHQnXSxcbiAgbGk6IFtdLFxuICBvbDogW10sXG4gIHA6IFtdLFxuICBwcmU6IFtdLFxuICBzOiBbXSxcbiAgc21hbGw6IFtdLFxuICBzcGFuOiBbXSxcbiAgc3ViOiBbXSxcbiAgc3VwOiBbXSxcbiAgc3Ryb25nOiBbXSxcbiAgdTogW10sXG4gIHVsOiBbXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVIdG1sKHVuc2FmZUh0bWwsIGFsbG93TGlzdCwgc2FuaXRpemVGdW5jdGlvbikge1xuICBpZiAoIXVuc2FmZUh0bWwubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHVuc2FmZUh0bWxcbiAgfVxuXG4gIGlmIChzYW5pdGl6ZUZ1bmN0aW9uICYmIHR5cGVvZiBzYW5pdGl6ZUZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHNhbml0aXplRnVuY3Rpb24odW5zYWZlSHRtbClcbiAgfVxuXG4gIGNvbnN0IGRvbVBhcnNlciA9IG5ldyB3aW5kb3cuRE9NUGFyc2VyKClcbiAgY29uc3QgY3JlYXRlZERvY3VtZW50ID0gZG9tUGFyc2VyLnBhcnNlRnJvbVN0cmluZyh1bnNhZmVIdG1sLCAndGV4dC9odG1sJylcbiAgY29uc3QgZWxlbWVudHMgPSBbXS5jb25jYXQoLi4uY3JlYXRlZERvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnKicpKVxuXG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgIGNvbnN0IGVsZW1lbnROYW1lID0gZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKGFsbG93TGlzdCkuaW5jbHVkZXMoZWxlbWVudE5hbWUpKSB7XG4gICAgICBlbGVtZW50LnJlbW92ZSgpXG5cbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29uc3QgYXR0cmlidXRlTGlzdCA9IFtdLmNvbmNhdCguLi5lbGVtZW50LmF0dHJpYnV0ZXMpXG4gICAgY29uc3QgYWxsb3dlZEF0dHJpYnV0ZXMgPSBbXS5jb25jYXQoYWxsb3dMaXN0WycqJ10gfHwgW10sIGFsbG93TGlzdFtlbGVtZW50TmFtZV0gfHwgW10pXG5cbiAgICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBvZiBhdHRyaWJ1dGVMaXN0KSB7XG4gICAgICBpZiAoIWFsbG93ZWRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhbGxvd2VkQXR0cmlidXRlcykpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlLm5vZGVOYW1lKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjcmVhdGVkRG9jdW1lbnQuYm9keS5pbm5lckhUTUxcbn1cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMi4zKTogdXRpbC9zY3JvbGxCYXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tICcuL2luZGV4J1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQgPSAnLmZpeGVkLXRvcCwgLmZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkLCAuc3RpY2t5LXRvcCdcbmNvbnN0IFNFTEVDVE9SX1NUSUNLWV9DT05URU5UID0gJy5zdGlja3ktdG9wJ1xuY29uc3QgUFJPUEVSVFlfUEFERElORyA9ICdwYWRkaW5nLXJpZ2h0J1xuY29uc3QgUFJPUEVSVFlfTUFSR0lOID0gJ21hcmdpbi1yaWdodCdcblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgU2Nyb2xsQmFySGVscGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGRvY3VtZW50LmJvZHlcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBnZXRXaWR0aCgpIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L2lubmVyV2lkdGgjdXNhZ2Vfbm90ZXNcbiAgICBjb25zdCBkb2N1bWVudFdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgcmV0dXJuIE1hdGguYWJzKHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnRXaWR0aClcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKClcbiAgICB0aGlzLl9kaXNhYmxlT3ZlckZsb3coKVxuICAgIC8vIGdpdmUgcGFkZGluZyB0byBlbGVtZW50IHRvIGJhbGFuY2UgdGhlIGhpZGRlbiBzY3JvbGxiYXIgd2lkdGhcbiAgICB0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyh0aGlzLl9lbGVtZW50LCBQUk9QRVJUWV9QQURESU5HLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlICsgd2lkdGgpXG4gICAgLy8gdHJpY2s6IFdlIGFkanVzdCBwb3NpdGl2ZSBwYWRkaW5nUmlnaHQgYW5kIG5lZ2F0aXZlIG1hcmdpblJpZ2h0IHRvIHN0aWNreS10b3AgZWxlbWVudHMgdG8ga2VlcCBzaG93aW5nIGZ1bGx3aWR0aFxuICAgIHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQsIFBST1BFUlRZX1BBRERJTkcsIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgKyB3aWR0aClcbiAgICB0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCwgUFJPUEVSVFlfTUFSR0lOLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlIC0gd2lkdGgpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsICdvdmVyZmxvdycpXG4gICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyh0aGlzLl9lbGVtZW50LCBQUk9QRVJUWV9QQURESU5HKVxuICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfRklYRURfQ09OVEVOVCwgUFJPUEVSVFlfUEFERElORylcbiAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX1NUSUNLWV9DT05URU5ULCBQUk9QRVJUWV9NQVJHSU4pXG4gIH1cblxuICBpc092ZXJmbG93aW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldFdpZHRoKCkgPiAwXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9kaXNhYmxlT3ZlckZsb3coKSB7XG4gICAgdGhpcy5fc2F2ZUluaXRpYWxBdHRyaWJ1dGUodGhpcy5fZWxlbWVudCwgJ292ZXJmbG93JylcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgfVxuXG4gIF9zZXRFbGVtZW50QXR0cmlidXRlcyhzZWxlY3Rvciwgc3R5bGVQcm9wZXJ0eSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHRoaXMuZ2V0V2lkdGgoKVxuICAgIGNvbnN0IG1hbmlwdWxhdGlvbkNhbGxCYWNrID0gZWxlbWVudCA9PiB7XG4gICAgICBpZiAoZWxlbWVudCAhPT0gdGhpcy5fZWxlbWVudCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IGVsZW1lbnQuY2xpZW50V2lkdGggKyBzY3JvbGxiYXJXaWR0aCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2F2ZUluaXRpYWxBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSlcbiAgICAgIGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoc3R5bGVQcm9wZXJ0eSlcbiAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoc3R5bGVQcm9wZXJ0eSwgYCR7Y2FsbGJhY2soTnVtYmVyLnBhcnNlRmxvYXQoY2FsY3VsYXRlZFZhbHVlKSl9cHhgKVxuICAgIH1cblxuICAgIHRoaXMuX2FwcGx5TWFuaXB1bGF0aW9uQ2FsbGJhY2soc2VsZWN0b3IsIG1hbmlwdWxhdGlvbkNhbGxCYWNrKVxuICB9XG5cbiAgX3NhdmVJbml0aWFsQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHkpIHtcbiAgICBjb25zdCBhY3R1YWxWYWx1ZSA9IGVsZW1lbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShzdHlsZVByb3BlcnR5KVxuICAgIGlmIChhY3R1YWxWYWx1ZSkge1xuICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5LCBhY3R1YWxWYWx1ZSlcbiAgICB9XG4gIH1cblxuICBfcmVzZXRFbGVtZW50QXR0cmlidXRlcyhzZWxlY3Rvciwgc3R5bGVQcm9wZXJ0eSkge1xuICAgIGNvbnN0IG1hbmlwdWxhdGlvbkNhbGxCYWNrID0gZWxlbWVudCA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSlcbiAgICAgIC8vIFdlIG9ubHkgd2FudCB0byByZW1vdmUgdGhlIHByb3BlcnR5IGlmIHRoZSB2YWx1ZSBpcyBgbnVsbGA7IHRoZSB2YWx1ZSBjYW4gYWxzbyBiZSB6ZXJvXG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShzdHlsZVByb3BlcnR5KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgTWFuaXB1bGF0b3IucmVtb3ZlRGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5KVxuICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShzdHlsZVByb3BlcnR5LCB2YWx1ZSlcbiAgICB9XG5cbiAgICB0aGlzLl9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHNlbGVjdG9yLCBtYW5pcHVsYXRpb25DYWxsQmFjaylcbiAgfVxuXG4gIF9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHNlbGVjdG9yLCBjYWxsQmFjaykge1xuICAgIGlmIChpc0VsZW1lbnQoc2VsZWN0b3IpKSB7XG4gICAgICBjYWxsQmFjayhzZWxlY3RvcilcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoY29uc3Qgc2VsIG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IsIHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICBjYWxsQmFjayhzZWwpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbEJhckhlbHBlclxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4yLjMpOiB1dGlsL3N3aXBlLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IENvbmZpZyBmcm9tICcuL2NvbmZpZydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgeyBleGVjdXRlIH0gZnJvbSAnLi9pbmRleCdcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ3N3aXBlJ1xuY29uc3QgRVZFTlRfS0VZID0gJy5icy5zd2lwZSdcbmNvbnN0IEVWRU5UX1RPVUNIU1RBUlQgPSBgdG91Y2hzdGFydCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1RPVUNITU9WRSA9IGB0b3VjaG1vdmUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9UT1VDSEVORCA9IGB0b3VjaGVuZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1BPSU5URVJET1dOID0gYHBvaW50ZXJkb3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUE9JTlRFUlVQID0gYHBvaW50ZXJ1cCR7RVZFTlRfS0VZfWBcbmNvbnN0IFBPSU5URVJfVFlQRV9UT1VDSCA9ICd0b3VjaCdcbmNvbnN0IFBPSU5URVJfVFlQRV9QRU4gPSAncGVuJ1xuY29uc3QgQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UID0gJ3BvaW50ZXItZXZlbnQnXG5jb25zdCBTV0lQRV9USFJFU0hPTEQgPSA0MFxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBlbmRDYWxsYmFjazogbnVsbCxcbiAgbGVmdENhbGxiYWNrOiBudWxsLFxuICByaWdodENhbGxiYWNrOiBudWxsXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBlbmRDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKScsXG4gIGxlZnRDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKScsXG4gIHJpZ2h0Q2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIFN3aXBlIGV4dGVuZHMgQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG5cbiAgICBpZiAoIWVsZW1lbnQgfHwgIVN3aXBlLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fZGVsdGFYID0gMFxuICAgIHRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzID0gQm9vbGVhbih3aW5kb3cuUG9pbnRlckV2ZW50KVxuICAgIHRoaXMuX2luaXRFdmVudHMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBkaXNwb3NlKCkge1xuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfc3RhcnQoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzKSB7XG4gICAgICB0aGlzLl9kZWx0YVggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFhcblxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V2ZW50SXNQb2ludGVyUGVuVG91Y2goZXZlbnQpKSB7XG4gICAgICB0aGlzLl9kZWx0YVggPSBldmVudC5jbGllbnRYXG4gICAgfVxuICB9XG5cbiAgX2VuZChldmVudCkge1xuICAgIGlmICh0aGlzLl9ldmVudElzUG9pbnRlclBlblRvdWNoKGV2ZW50KSkge1xuICAgICAgdGhpcy5fZGVsdGFYID0gZXZlbnQuY2xpZW50WCAtIHRoaXMuX2RlbHRhWFxuICAgIH1cblxuICAgIHRoaXMuX2hhbmRsZVN3aXBlKClcbiAgICBleGVjdXRlKHRoaXMuX2NvbmZpZy5lbmRDYWxsYmFjaylcbiAgfVxuXG4gIF9tb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5fZGVsdGFYID0gZXZlbnQudG91Y2hlcyAmJiBldmVudC50b3VjaGVzLmxlbmd0aCA+IDEgP1xuICAgICAgMCA6XG4gICAgICBldmVudC50b3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLl9kZWx0YVhcbiAgfVxuXG4gIF9oYW5kbGVTd2lwZSgpIHtcbiAgICBjb25zdCBhYnNEZWx0YVggPSBNYXRoLmFicyh0aGlzLl9kZWx0YVgpXG5cbiAgICBpZiAoYWJzRGVsdGFYIDw9IFNXSVBFX1RIUkVTSE9MRCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGlyZWN0aW9uID0gYWJzRGVsdGFYIC8gdGhpcy5fZGVsdGFYXG5cbiAgICB0aGlzLl9kZWx0YVggPSAwXG5cbiAgICBpZiAoIWRpcmVjdGlvbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXhlY3V0ZShkaXJlY3Rpb24gPiAwID8gdGhpcy5fY29uZmlnLnJpZ2h0Q2FsbGJhY2sgOiB0aGlzLl9jb25maWcubGVmdENhbGxiYWNrKVxuICB9XG5cbiAgX2luaXRFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfUE9JTlRFUkRPV04sIGV2ZW50ID0+IHRoaXMuX3N0YXJ0KGV2ZW50KSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9QT0lOVEVSVVAsIGV2ZW50ID0+IHRoaXMuX2VuZChldmVudCkpXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQpXG4gICAgfSBlbHNlIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSFNUQVJULCBldmVudCA9PiB0aGlzLl9zdGFydChldmVudCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hNT1ZFLCBldmVudCA9PiB0aGlzLl9tb3ZlKGV2ZW50KSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSEVORCwgZXZlbnQgPT4gdGhpcy5fZW5kKGV2ZW50KSlcbiAgICB9XG4gIH1cblxuICBfZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaChldmVudCkge1xuICAgIHJldHVybiB0aGlzLl9zdXBwb3J0UG9pbnRlckV2ZW50cyAmJiAoZXZlbnQucG9pbnRlclR5cGUgPT09IFBPSU5URVJfVFlQRV9QRU4gfHwgZXZlbnQucG9pbnRlclR5cGUgPT09IFBPSU5URVJfVFlQRV9UT1VDSClcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgaXNTdXBwb3J0ZWQoKSB7XG4gICAgcmV0dXJuICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3dpcGVcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMi4zKTogdXRpbC90ZW1wbGF0ZS1mYWN0b3J5LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgRGVmYXVsdEFsbG93bGlzdCwgc2FuaXRpemVIdG1sIH0gZnJvbSAnLi9zYW5pdGl6ZXInXG5pbXBvcnQgeyBnZXRFbGVtZW50LCBpc0VsZW1lbnQgfSBmcm9tICcuLi91dGlsL2luZGV4J1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4uL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4vY29uZmlnJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnVGVtcGxhdGVGYWN0b3J5J1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhbGxvd0xpc3Q6IERlZmF1bHRBbGxvd2xpc3QsXG4gIGNvbnRlbnQ6IHt9LCAvLyB7IHNlbGVjdG9yIDogdGV4dCAsICBzZWxlY3RvcjIgOiB0ZXh0MiAsIH1cbiAgZXh0cmFDbGFzczogJycsXG4gIGh0bWw6IGZhbHNlLFxuICBzYW5pdGl6ZTogdHJ1ZSxcbiAgc2FuaXRpemVGbjogbnVsbCxcbiAgdGVtcGxhdGU6ICc8ZGl2PjwvZGl2Pidcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGFsbG93TGlzdDogJ29iamVjdCcsXG4gIGNvbnRlbnQ6ICdvYmplY3QnLFxuICBleHRyYUNsYXNzOiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICBodG1sOiAnYm9vbGVhbicsXG4gIHNhbml0aXplOiAnYm9vbGVhbicsXG4gIHNhbml0aXplRm46ICcobnVsbHxmdW5jdGlvbiknLFxuICB0ZW1wbGF0ZTogJ3N0cmluZydcbn1cblxuY29uc3QgRGVmYXVsdENvbnRlbnRUeXBlID0ge1xuICBlbnRyeTogJyhzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbnxudWxsKScsXG4gIHNlbGVjdG9yOiAnKHN0cmluZ3xlbGVtZW50KSdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgVGVtcGxhdGVGYWN0b3J5IGV4dGVuZHMgQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5fY29uZmlnLmNvbnRlbnQpXG4gICAgICAubWFwKGNvbmZpZyA9PiB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbihjb25maWcpKVxuICAgICAgLmZpbHRlcihCb29sZWFuKVxuICB9XG5cbiAgaGFzQ29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb250ZW50KCkubGVuZ3RoID4gMFxuICB9XG5cbiAgY2hhbmdlQ29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy5fY2hlY2tDb250ZW50KGNvbnRlbnQpXG4gICAgdGhpcy5fY29uZmlnLmNvbnRlbnQgPSB7IC4uLnRoaXMuX2NvbmZpZy5jb250ZW50LCAuLi5jb250ZW50IH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgdG9IdG1sKCkge1xuICAgIGNvbnN0IHRlbXBsYXRlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGVtcGxhdGVXcmFwcGVyLmlubmVySFRNTCA9IHRoaXMuX21heWJlU2FuaXRpemUodGhpcy5fY29uZmlnLnRlbXBsYXRlKVxuXG4gICAgZm9yIChjb25zdCBbc2VsZWN0b3IsIHRleHRdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuX2NvbmZpZy5jb250ZW50KSkge1xuICAgICAgdGhpcy5fc2V0Q29udGVudCh0ZW1wbGF0ZVdyYXBwZXIsIHRleHQsIHNlbGVjdG9yKVxuICAgIH1cblxuICAgIGNvbnN0IHRlbXBsYXRlID0gdGVtcGxhdGVXcmFwcGVyLmNoaWxkcmVuWzBdXG4gICAgY29uc3QgZXh0cmFDbGFzcyA9IHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHRoaXMuX2NvbmZpZy5leHRyYUNsYXNzKVxuXG4gICAgaWYgKGV4dHJhQ2xhc3MpIHtcbiAgICAgIHRlbXBsYXRlLmNsYXNzTGlzdC5hZGQoLi4uZXh0cmFDbGFzcy5zcGxpdCgnICcpKVxuICAgIH1cblxuICAgIHJldHVybiB0ZW1wbGF0ZVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfdHlwZUNoZWNrQ29uZmlnKGNvbmZpZykge1xuICAgIHN1cGVyLl90eXBlQ2hlY2tDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2NoZWNrQ29udGVudChjb25maWcuY29udGVudClcbiAgfVxuXG4gIF9jaGVja0NvbnRlbnQoYXJnKSB7XG4gICAgZm9yIChjb25zdCBbc2VsZWN0b3IsIGNvbnRlbnRdIG9mIE9iamVjdC5lbnRyaWVzKGFyZykpIHtcbiAgICAgIHN1cGVyLl90eXBlQ2hlY2tDb25maWcoeyBzZWxlY3RvciwgZW50cnk6IGNvbnRlbnQgfSwgRGVmYXVsdENvbnRlbnRUeXBlKVxuICAgIH1cbiAgfVxuXG4gIF9zZXRDb250ZW50KHRlbXBsYXRlLCBjb250ZW50LCBzZWxlY3Rvcikge1xuICAgIGNvbnN0IHRlbXBsYXRlRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoc2VsZWN0b3IsIHRlbXBsYXRlKVxuXG4gICAgaWYgKCF0ZW1wbGF0ZUVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnRlbnQgPSB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbihjb250ZW50KVxuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICB0ZW1wbGF0ZUVsZW1lbnQucmVtb3ZlKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpc0VsZW1lbnQoY29udGVudCkpIHtcbiAgICAgIHRoaXMuX3B1dEVsZW1lbnRJblRlbXBsYXRlKGdldEVsZW1lbnQoY29udGVudCksIHRlbXBsYXRlRWxlbWVudClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcuaHRtbCkge1xuICAgICAgdGVtcGxhdGVFbGVtZW50LmlubmVySFRNTCA9IHRoaXMuX21heWJlU2FuaXRpemUoY29udGVudClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRlbXBsYXRlRWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnRcbiAgfVxuXG4gIF9tYXliZVNhbml0aXplKGFyZykge1xuICAgIHJldHVybiB0aGlzLl9jb25maWcuc2FuaXRpemUgPyBzYW5pdGl6ZUh0bWwoYXJnLCB0aGlzLl9jb25maWcuYWxsb3dMaXN0LCB0aGlzLl9jb25maWcuc2FuaXRpemVGbikgOiBhcmdcbiAgfVxuXG4gIF9yZXNvbHZlUG9zc2libGVGdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJyA/IGFyZyh0aGlzKSA6IGFyZ1xuICB9XG5cbiAgX3B1dEVsZW1lbnRJblRlbXBsYXRlKGVsZW1lbnQsIHRlbXBsYXRlRWxlbWVudCkge1xuICAgIGlmICh0aGlzLl9jb25maWcuaHRtbCkge1xuICAgICAgdGVtcGxhdGVFbGVtZW50LmlubmVySFRNTCA9ICcnXG4gICAgICB0ZW1wbGF0ZUVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0ZW1wbGF0ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50LnRleHRDb250ZW50XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVtcGxhdGVGYWN0b3J5XG4iLCJpbXBvcnQgJ2Jvb3RzdHJhcC10YWJsZSciLCIvL2ltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmltcG9ydCBBbGVydCBmcm9tICcuLi9ib290c3RyYXAvanMvZGlzdC9hbGVydCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2Jvb3RzdHJhcC9qcy9kaXN0L2J1dHRvbic7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi4vYm9vdHN0cmFwL2pzL2Rpc3QvY2Fyb3VzZWwnO1xuaW1wb3J0IENvbGxhcHNlIGZyb20gJy4uL2Jvb3RzdHJhcC9qcy9kaXN0L2NvbGxhcHNlJztcbmltcG9ydCBEcm9wZG93biBmcm9tICAnLi4vYm9vdHN0cmFwL2pzL2Rpc3QvZHJvcGRvd24nO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2Jvb3RzdHJhcC9qcy9kaXN0L21vZGFsJztcbmltcG9ydCBPZmZjYW52YXMgZnJvbSAnLi4vYm9vdHN0cmFwL2pzL2Rpc3Qvb2ZmY2FudmFzJztcbmltcG9ydCBQb3BvdmVyIGZyb20gICcuLi9ib290c3RyYXAvanMvZGlzdC9wb3BvdmVyJztcbmltcG9ydCBTY3JvbGxzcHkgZnJvbSAnLi4vYm9vdHN0cmFwL2pzL2Rpc3Qvc2Nyb2xsc3B5JztcbmltcG9ydCBUYWIgZnJvbSAnLi4vYm9vdHN0cmFwL2pzL2Rpc3QvdGFiJztcbmltcG9ydCBUb2FzdCBmcm9tICcuLi9ib290c3RyYXAvanMvZGlzdC90b2FzdCc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuLi9ib290c3RyYXAvanMvZGlzdC90b29sdGlwJztcblxuXG5nbG9iYWwuQWxlcnQgPSBBbGVydDtcbmdsb2JhbC5CdXR0b24gPSBCdXR0b247XG5nbG9iYWwuQ2Fyb3VzZWwgPSBDYXJvdXNlbDtcbmdsb2JhbC5Db2xsYXBzZSA9IENvbGxhcHNlO1xuZ2xvYmFsLkRyb3Bkb3duID0gRHJvcGRvd247XG5nbG9iYWwuTW9kYWwgPSBNb2RhbDtcbmdsb2JhbC5PZmZjYW52YXMgPSBPZmZjYW52YXM7XG5nbG9iYWwuUG9wb3ZlciA9IFBvcG92ZXI7XG5nbG9iYWwuU2Nyb2xsc3B5ID0gU2Nyb2xsc3B5O1xuZ2xvYmFsLlRhYiA9IFRhYjtcbmdsb2JhbC5Ub2FzdCA9IFRvYXN0O1xuZ2xvYmFsLlRvb2x0aXAgPSBUb29sdGlwO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5Jztcbmdsb2JhbC4kID0gJDtcbmdsb2JhbC5qUXVlcnkgPSAkOyIsIi8vIG5wbSBwYWNrYWdlc1xuaW1wb3J0IFBsb3RseSBmcm9tICdwbG90bHkuanMtZGlzdCc7IC8vZXh0ZXJuYWxcbmltcG9ydCAnaGFtbWVyanMnO1xuaW1wb3J0IHsgRHJvcHpvbmUgfSBmcm9tIFwiZHJvcHpvbmVcIjsgLy9leHRlcm5hbFxuY29uc3QgZGF5anMgPSByZXF1aXJlKCdkYXlqcy13aXRoLXBsdWdpbnMnKTtcbmltcG9ydCB7IGNyZWF0ZVBvcHBlciB9IGZyb20gJ0Bwb3BwZXJqcy9jb3JlJztcblxuLy8gMS1zdGVwIHdvcmthcm91bmQgZm9yIHRoZXNlIG5wbSBwYWNrYWdlc1xuaW1wb3J0ICcuL2pxdWVyeSc7XG5pbXBvcnQgJy4vYm9vdHN0cmFwLXRhYmxlJ1xuaW1wb3J0ICcuL2Jvb3RzdHJhcCdcblxuLy8gc2VsZWN0ZWQgYm9vdHN0cmFwIG1vZHVsZXNcbi8vaW1wb3J0IHsgQWxlcnQsIEJ1dHRvbiwgQ2Fyb3VzZWwsIENvbGxhcHNlLCBEcm9wZG93biwgTW9kYWwsIE9mZmNhbnZhcywgUG9wb3ZlciwgU2Nyb2xsc3B5LCBUYWIsIFRvYXN0LCBUb29sdGlwfSBmcm9tICdib290c3RyYXAnO1xuXG4vKmltcG9ydCBBbGVydCBmcm9tICcuLi9ib290c3RyYXAvanMvZGlzdC9hbGVydCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2Jvb3RzdHJhcC9qcy9kaXN0L2J1dHRvbic7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi4vYm9vdHN0cmFwL2pzL2Rpc3QvY2Fyb3VzZWwnO1xuaW1wb3J0IENvbGxhcHNlIGZyb20gJy4uL2Jvb3RzdHJhcC9qcy9kaXN0L2NvbGxhcHNlJztcbmltcG9ydCBEcm9wZG93biBmcm9tICAnLi4vYm9vdHN0cmFwL2pzL2Rpc3QvZHJvcGRvd24nO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2Jvb3RzdHJhcC9qcy9kaXN0L21vZGFsJztcbmltcG9ydCBPZmZjYW52YXMgZnJvbSAnLi4vYm9vdHN0cmFwL2pzL2Rpc3Qvb2ZmY2FudmFzJztcbmltcG9ydCBQb3BvdmVyIGZyb20gICcuLi9ib290c3RyYXAvanMvZGlzdC9wb3BvdmVyJztcbmltcG9ydCBTY3JvbGxzcHkgZnJvbSAnLi4vYm9vdHN0cmFwL2pzL2Rpc3Qvc2Nyb2xsc3B5JztcbmltcG9ydCBUYWIgZnJvbSAnLi4vYm9vdHN0cmFwL2pzL2Rpc3QvdGFiJztcbmltcG9ydCBUb2FzdCBmcm9tICcuLi9ib290c3RyYXAvanMvZGlzdC90b2FzdCc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuLi9ib290c3RyYXAvanMvZGlzdC90b29sdGlwJzsqL1xuXG4vLyBzYXNzIGVudHJ5IHBvaW50XG5pbXBvcnQgJy4uL3Njc3MvcHJvamVjdHMuc2Nzcyc7XG5cbi8vIG90aGVyIGZpbGVzXG4vL2ltcG9ydCAnLi4vZml4L21hcGJveC1nbC11bm1pbmlmaWVkLmpzLm1hcCc7XG4vL2ltcG9ydCAnLi4vZml4L2Jhc2U2NC1hcnJheWJ1ZmZlci5lczUuanMubWFwJztcbi8vaW1wb3J0ICcuLi9maXgvZHJvcHpvbmUubWpzLm1hcCc7XG4vL2ltcG9ydCAnLi4vZml4L3BlcmZvcm1hbmNlLW5vdy5qcy5tYXAnO1xudmFyIG0xID0gcmVxdWlyZShcIi4uL2ZpeC9tYXBib3gtZ2wtdW5taW5pZmllZC5qcy5tYXBcIik7XG52YXIgbTIgPSByZXF1aXJlKFwiLi4vZml4L2Jhc2U2NC1hcnJheWJ1ZmZlci5lczUuanMubWFwXCIpO1xudmFyIG0zID0gcmVxdWlyZShcIi4uL2ZpeC9kcm9wem9uZS5tanMubWFwXCIpO1xudmFyIG00ID0gcmVxdWlyZShcIi4uL2ZpeC9wZXJmb3JtYW5jZS1ub3cuanMubWFwXCIpO1xuXG4vLyBjdXN0b20ganNcblxuLy8gdGhlIHJvb3Qgb2JqZWN0XG53aW5kb3cuSGFuZGxlciA9IHtcbiAgICBqczp7fSxcbiAgICBjc3M6e31cbn07XG4gXG5IYW5kbGVyLmFsZXJ0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICBIYW5kbGVyLm5hdmlnYXRvci5yZW5hbWUodmFsdWVbMF0sIHZhbHVlWzFdKTtcbn1cblxuLy8gZXg6IHZpei01LWVkaXRwYW5lXG5IYW5kbGVyLmVsSUQgPSBmdW5jdGlvbihjb21wb25lbnROYW1lLCBpZCwgcm9sZSkge1xuICAgIHJldHVybiBjb21wb25lbnROYW1lICsgJy0nICsgaWQgKyAnLScgKyByb2xlO1xufVxuIFxuSGFuZGxlci50aW1lUmVmcmVzaCA9IGZ1bmN0aW9uKHRzdGFtcCwgdGFyKSB7XG4gICAgLy92YXIgcmVsYXRpdmVUaW1lID0gcmVxdWlyZSgnZGF5anMvcGx1Z2luL3JlbGF0aXZlVGltZScpO1xuICAgIC8vZGF5anMuZXh0ZW5kKHJlbGF0aXZlVGltZSk7XG4gICAgdGFyLmlubmVySFRNTCA9IGRheWpzKHRzdGFtcCkuZnJvbU5vdygpO1xuICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICB0YXIuaW5uZXJIVE1MID0gZGF5anModHN0YW1wKS5mcm9tTm93KCk7XG4gICAgfSwgNjAwMDApO1xufVxuIFxuIC8vIHNoYXJlIGJ1dHRvblxuSGFuZGxlci5zaGFyZUxpc3RlbmVyID0gZnVuY3Rpb24oYnRuU2VsZWN0b3IsIHJlc1NlbGVjdG9yLCB0aXRsZSwgdGV4dCwgdXJsKSB7XG4gICAgY29uc3Qgc2hhcmVEYXRhID0ge1xuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIHRleHQ6IHRleHQsXG4gICAgICAgIHVybDogdXJsXG4gICAgfVxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnRuU2VsZWN0b3IpO1xuICAgIC8vY29uc3QgcmVzdWx0UGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVzU2VsZWN0b3IpO1xuICAgIFxuICAgIGlmKCFidG4pIHJldHVybjsgXG4gICAgXG4gICAgLy8gU2hhcmUgbXVzdCBiZSB0cmlnZ2VyZWQgYnkgXCJ1c2VyIGFjdGl2YXRpb25cIlxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IG5hdmlnYXRvci5zaGFyZShzaGFyZURhdGEpO1xuICAgICAgICAgICAgLy9yZXN1bHRQYXJhLnRleHRDb250ZW50ID0gJ01ETiBzaGFyZWQgc3VjY2Vzc2Z1bGx5JztcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICR7ZXJyfWApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8qXG5mdW5jdGlvbiBzaG93Vml6T2ZmY2FudmFzKCkge1xuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi1pdGVtLmFjdGl2ZVwiKTtcbiAgICB2YXIgb2ZmY2FudmFzSUQgPSAgZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJvZmZjYW52YXNJRFwiKTtcbiAgICB2YXIgb2ZmY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob2ZmY2FudmFzSUQpO1xuICAgIHZhciB2aXpPZmZjYW52YXMgPSBib290c3RyYXAuT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2Uob2ZmY2FudmFzKTtcbiAgICB2aXpPZmZjYW52YXMuc2hvdygpO1xufVxuXG5mdW5jdGlvbiB2aXpPZmZjYW52YXNNYXhpbWl6ZShjLCBvYykge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob2MpLmNsYXNzTGlzdC50b2dnbGUoJ2gtMTAwJyk7XG59Ki9cblxuY2xhc3MgTmF2VGFyZ2V0IHtcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnQsIGlkLCBuYW1lKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICB0aGlzLmlkID0gTnVtYmVyKGlkKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IGNvbXBJRCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50ICsgJy0nICsgdGhpcy5pZDtcbiAgICB9XG4gICAgXG4gICAgZ2V0IGVkaXRFbGVtZW50SUQoKSB7XG4gICAgICAgIHJldHVybiBIYW5kbGVyLmVsSUQodGhpcy5jb21wb25lbnQsIHRoaXMuaWQsICdlZGl0Jyk7XG4gICAgfVxuICAgIFxuICAgIGdldCB0YWJUcmlnZ2VyRWxlbWVudElEKCkge1xuICAgICAgICByZXR1cm4gSGFuZGxlci5lbElEKCB0aGlzLmNvbXBvbmVudCwgdGhpcy5pZCwgJ3RhYicpO1xuICAgIH1cbiAgICBcbiAgICBnZXQgY29weUVsZW1lbnRJRCgpIHtcbiAgICAgICAgcmV0dXJuIEhhbmRsZXIuZWxJRCh0aGlzLmNvbXBvbmVudCwgdGhpcy5pZCwgJ2NvcHknKTtcbiAgICB9XG59XG5cbi8vVE9ETzogSGFuZGxlIGNvbXBvbmVudC1rZXkgY29tYmluYXRpb25zXG5jbGFzcyBOYXZpZ2F0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvL3RoaXMubmF2aWdhdGVDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLnRhcmdldHMgPSBbXTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IC0xO1xuICAgICAgICB0aGlzLnNob3dOYXYgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaG93RWRpdCA9IGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICBfbmF2aWdhdGlvbkNoYW5nZWQobmFtZSwgbmF2VGFyKSB7XG4gICAgICAgIGNvbnN0IGUgPSBuZXcgQ3VzdG9tRXZlbnQoJ25hdmlnYXRpb25DaGFuZ2VkJywge1xuICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3I6IHRoaXMsXG4gICAgICAgICAgICAgICAgYWN0aXZlOiB0aGlzLnRhcmdldHNbdGhpcy5zZWxlY3RlZF0sIFxuICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLnRhcmdldHMuZmluZEluZGV4KHQgPT4gdC5pZCA9PSBuYXZUYXIuaWQpLFxuICAgICAgICAgICAgICAgIGNvdW50OiB0aGlzLnRhcmdldHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIG5hdlRhcjogbmF2VGFyXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGUpO1xuICAgIH1cblxuICAgIGdldCBhY3RpdmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldHNbdGhpcy5zZWxlY3RlZF07XG4gICAgfVxuICAgIFxuICAgIHNldCBhY3RpdmUoaWQpIHtcbiAgICAgICAgaWYoaWQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBpID0gdGhpcy50YXJnZXRzLmZpbmRJbmRleCh0ID0+IHQuaWQgPT0gaWQpO1xuICAgICAgICAgICAgaWYoaSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbmF2aWdhdGlvbkNoYW5nZWQoXCJhY3RpdmVcIiwgdGhpcy50YXJnZXRzW3RoaXMuc2VsZWN0ZWRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBnZXQgYWxsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXRzO1xuICAgIH1cblxuICAgIGdldCBjb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0cy5sZW5ndGg7XG4gICAgfVxuICAgIFxuICAgIGFkZChjb21wb25lbnQsIGlkLCBuYW1lKSB7XG4gICAgICAgIC8vc2tpcCBpZiBhbHJlYWR5IGFkZGVkIHRvIGF2b2lkIGd1aSBlcnJvcnNcbiAgICAgICAgdmFyIGluZGV4SWZBbHJlYWR5QWRkZWQgPSB0aGlzLnRhcmdldHMuZmluZEluZGV4KHQgPT4gdC5pZCA9PSBpZCk7XG4gICAgICAgIGlmIChpbmRleElmQWxyZWFkeUFkZGVkID49IDApIHtyZXR1cm47fVxuICAgICAgICB2YXIgaSA9IHRoaXMudGFyZ2V0cy5maW5kSW5kZXgodCA9PiB0LmlkID4gTnVtYmVyKGlkKSk7XG4gICAgICAgIGlmIChpIDwgMCkge1xuICAgICAgICAgICAgdGhpcy50YXJnZXRzLnB1c2gobmV3IE5hdlRhcmdldChjb21wb25lbnQsIGlkLCBuYW1lKSk7XG4gICAgICAgICAgICBpID0gdGhpcy50YXJnZXRzLmxlbmd0aCAtIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldHMuc3BsaWNlKGksIDAsIG5ldyBOYXZUYXJnZXQoY29tcG9uZW50LCBpZCwgbmFtZSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vdGhpcy5zZWxlY3RlZCA9IGk7XG4gICAgICAgIHRoaXMuX25hdmlnYXRpb25DaGFuZ2VkKFwiYWRkXCIsIHRoaXMudGFyZ2V0c1tpXSk7XG4gICAgICAgIC8vdGhpcy5hY3RpdmUgPSBpZDtcbiAgICB9XG4gICAgXG4gICAgYWRkQW5kUmVzZXQoY29tcG9uZW50LCBpZCwgbmFtZSkge1xuICAgICAgICAvL3NraXAgaWYgYWxyZWFkeSBhZGRlZCB0byBhdm9pZCBndWkgZXJyb3JzXG4gICAgICAgIHZhciBpbmRleElmQWxyZWFkeUFkZGVkID0gdGhpcy50YXJnZXRzLmZpbmRJbmRleCh0ID0+IHQuaWQgPT0gaWQpO1xuICAgICAgICBpZiAoaW5kZXhJZkFscmVhZHlBZGRlZCA+PSAwKSB7cmV0dXJuO31cbiAgICAgICAgdGhpcy5hZGQoY29tcG9uZW50LCBpZCwgbmFtZSk7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdGhpcy50YXJnZXRzWzBdLmlkO1xuICAgIH1cblxuICAgIHJlbW92ZShpZCkge1xuICAgICAgICB2YXIgaSA9IHRoaXMudGFyZ2V0cy5maW5kSW5kZXgodCA9PiB0LmlkID09IGlkKTtcbiAgICAgICAgaWYoaSl7XG4gICAgICAgICAgICB2YXIgdGFyID0gdGhpcy50YXJnZXRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIHRoaXMuX25hdmlnYXRpb25DaGFuZ2VkKFwicmVtb3ZlXCIsIHRhclswXSk7XG4gICAgICAgICAgICBpZih0aGlzLnRhcmdldHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSBcInVuZGVmaW5lZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgICAgICBcbiAgICBmb3J3YXJkKCkge1xuICAgICAgICBpZih0aGlzLnNlbGVjdGVkID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkICsgMTtcbiAgICAgICAgICAgIGlmKHRoaXMuc2VsZWN0ZWQgPj0gdGhpcy50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fbmF2aWdhdGlvbkNoYW5nZWQoXCJhY3RpdmVcIiwgdGhpcy50YXJnZXRzW3RoaXMuc2VsZWN0ZWRdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJhY2soKSB7XG4gICAgICAgIGlmKHRoaXMuc2VsZWN0ZWQgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQgLSAxO1xuICAgICAgICAgICAgaWYodGhpcy5zZWxlY3RlZCA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy50YXJnZXRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9uYXZpZ2F0aW9uQ2hhbmdlZChcImFjdGl2ZVwiLCB0aGlzLnRhcmdldHNbdGhpcy5zZWxlY3RlZF0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qXG4gICAganVtcChpbmRleCkge1xuICAgICAgICBpZihpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGluZGV4O1xuICAgICAgICAgICAgdGhpcy5fbmF2aWdhdGlvbkNoYW5nZWQoXCJhY3RpdmVcIiwgdGhpcy50YXJnZXRzW3RoaXMuc2VsZWN0ZWRdKTtcbiAgICAgICAgfVxuICAgIH0qL1xuICAgIFxuICAgIGp1bXAoa2V5KSB7XG4gICAgICAgIHZhciB0YXIgPSB0aGlzLnRhcmdldHMuZmluZCh0ID0+IHQuaWQgPT0ga2V5KTtcbiAgICAgICAgaWYodGFyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy50YXJnZXRzLmZpbmRJbmRleCh0ID0+IHQuaWQgPT0gdGFyLmlkKTtcbiAgICAgICAgICAgIHRoaXMuX25hdmlnYXRpb25DaGFuZ2VkKFwiYWN0aXZlXCIsIHRhcik7XG4gICAgICAgIH0gIFxuICAgIH1cbiAgICBcbiAgICByZW5hbWUoa2V5LCBuYW1lKSB7XG4gICAgICAgIHZhciB0YXIgPSB0aGlzLnRhcmdldHMuZmluZCh0ID0+IHQuaWQgPT0ga2V5KTtcbiAgICAgICAgaWYodGFyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0YXIubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICB0aGlzLl9uYXZpZ2F0aW9uQ2hhbmdlZChcIm5hbWVcIiwgdGFyKTtcbiAgICAgICAgfSAgIFxuICAgIH1cbiAgICBcbiAgICAvLyBuZWVkZWQgdG8gY2F0Y2ggc2luZ2xlIHBhcmFtIGNhbGwgZnJvbSBkamFuZ28tdW5pY29ybiB2aWV3XG4gICAgLypyZW5hbWUoYXJyeSkge1xuICAgICAgICB0aGlzLnJlbmFtZShhcnJ5WzBdLCBhcnJ5WzFdKTsgICBcbiAgICB9Ki9cbiAgICBcbiAgICB0b2dnbGVOYXYoKSB7XG4gICAgICAgIHRoaXMuc2hvd05hdiA9ICF0aGlzLnNob3dOYXY7XG4gICAgICAgIHRoaXMuX25hdlRvZ2dsZWQoKTtcbiAgICB9XG4gICAgXG4gICAgb3Blbk5hdklmQ2xvc2VkKCkge1xuICAgICAgICBpZighdGhpcy5zaG93TmF2KSB7XG4gICAgICAgICAgICB0aGlzLnNob3dOYXbjgIA9IHRydWU7XG4gICAgICAgIHRoaXMuX25hdlRvZ2dsZWQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjbG9zZU5hdklmT3BlbigpIHtcbiAgICAgICAgaWYodGhpcy5zaG93TmF2KSB7XG4gICAgICAgICAgICB0aGlzLnNob3dOYXbjgIA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9uYXZUb2dnbGVkKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIGFsZXJ0KHRoaXMudGFyZ2V0cy5sZW5ndGggPiAwKTtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IHRoaXMudGFyZ2V0c1swXS5pZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBfbmF2VG9nZ2xlZCgpIHtcbiAgICAgICAgY29uc3QgZSA9IG5ldyBDdXN0b21FdmVudCgnbmF2VG9nZ2xlZCcsIHtcbiAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgIG5hbWU6ICduYXZUb2dnbGVkJyxcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3I6IHRoaXMsXG4gICAgICAgICAgICAgICAgc2hvd05hdjogdGhpcy5zaG93TmF2XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGUpOyAgICBcbiAgICB9XG4gICAgXG4gICAgdG9nZ2xlRWRpdCgpIHtcbiAgICAgICAgdGhpcy5zaG93RWRpdCA9ICF0aGlzLnNob3dFZGl0O1xuICAgICAgICB0aGlzLl9lZGl0VG9nZ2xlZCgpO1xuICAgIH1cbiAgICBcbiAgICBvcGVuRWRpdElmQ2xvc2VkKCkge1xuICAgICAgICBpZighdGhpcy5zaG93RWRpdCkge1xuICAgICAgICAgICAgdGhpcy5zaG93RWRpdOOAgD0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fZWRpdFRvZ2dsZWQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjbG9zZUVkaXRJZk9wZW4oKSB7XG4gICAgICAgIGlmKHRoaXMuc2hvd0VkaXQpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0VkaXTjgIA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9lZGl0VG9nZ2xlZCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgXG4gICAgXG4gICAgX2VkaXRUb2dnbGVkKCkge1xuICAgICAgICBjb25zdCBlID0gbmV3IEN1c3RvbUV2ZW50KCdlZGl0VG9nZ2xlZCcsIHtcbiAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdlZGl0VG9nZ2xlZCcsXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yOiB0aGlzLFxuICAgICAgICAgICAgICAgIHNob3dFZGl0OiB0aGlzLnNob3dFZGl0XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGUpOyAgICBcbiAgICB9XG4gICAgXG59O1xuXG5IYW5kbGVyLm5hdmlnYXRvciA9IG5ldyBOYXZpZ2F0b3IoKTtcbiBcbkhhbmRsZXIudGV4dF90cnVuY2F0ZSA9IGZ1bmN0aW9uKHN0ciwgbGVuZ3RoLCBlbmRpbmcpIHtcbiAgICBpZiAobGVuZ3RoID09IG51bGwpIHtcbiAgICAgICAgbGVuZ3RoID0gODtcbiAgICB9XG4gICAgaWYgKGVuZGluZyA9PSBudWxsKSB7XG4gICAgICAgIGVuZGluZyA9ICcuLi4nO1xuICAgIH1cbiAgICBpZiAoc3RyLmxlbmd0aCA+IGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cmluZygwLCBsZW5ndGggLSAxKSArIGVuZGluZztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH0gXG59XG5cbkhhbmRsZXIuYWRkVGFiID0gZnVuY3Rpb24obmF2VGFyLCBpbmRleCkge1xuICAgIC8vbWFrZSB0YWIgYnV0dG9uXG4gICAgY29uc3QgYmxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYi5pZCA9IG5hdlRhci50YWJUcmlnZ2VyRWxlbWVudElEOyAvL2lkPVwie3t2aWR9fS10YWJcIlxuICAgIGIudGV4dENvbnRlbnQgPSBuYXZUYXIubmFtZTtcbiAgICBiLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1pdGVtXCIpO1xuICAgIGIuc2V0QXR0cmlidXRlKFwiZGF0YS1icy10b2dnbGVcIiwgXCJ0YWJcIik7XG4gICAgYi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJzLXRhcmdldFwiLCBcIiNcIituYXZUYXIuY29tcElEKTtcbiAgICBiLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJ0YWJcIik7XG4gICAgYi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgIGIuc2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiLCBuYXZUYXIuY29tcElEKTtcbiAgICBiLnNldEF0dHJpYnV0ZShcImluZGV4XCIsIGluZGV4KTtcbiAgICBiLnNldEF0dHJpYnV0ZShcIm5hdlRhcklEXCIsIG5hdlRhci5pZCk7XG4gICAgYi5zZXRBdHRyaWJ1dGUoXCJvbmNsaWNrXCIsIFwiZXZlbnQucHJldmVudERlZmF1bHQoKTsgSGFuZGxlci5uYXZpZ2F0b3IuanVtcChcIiArIG5hdlRhci5pZCArIFwiKTtcIik7XG4gICAgXG4gICAgLy9tYWtlIGNvcHkgYW5jaG9yXG4gICAgY29uc3QgYWxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGEuaWQgPSBuYXZUYXIuY29weUVsZW1lbnRJRDsgLy9pZD1cInZpei17e3Zpei5wa319LWNvcHlcIiBcbiAgICBhLnRleHRDb250ZW50ID0gXCJDb3B5IFwiICsgbmF2VGFyLm5hbWU7XG4gICAgYS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24taXRlbVwiKTtcbiAgICBhLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjXCIpO1xuICAgIGEuc2V0QXR0cmlidXRlKFwib25jbGlja1wiLCBcIlVuaWNvcm4uY2FsbCgnYXBwJywgJ2NvcHlWaXonLCAnXCIgKyBuYXZUYXIuaWQgKyBcIicpO1wiKTsgLy91bmljb3JuOmNsaWNrPVwiY29weVZpeih7e3Zpei5wa319KVxuICAgIGEuc2V0QXR0cmlidXRlKFwiaW5kZXhcIiwgaW5kZXgpO1xuICAgIFxuICAgIC8vZWhcbiAgICAvL1RPRE9cbiAgICBcbiAgICAvL2FkZFxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWJCdXR0b25zXCIpO1xuICAgIHZhciBuYXZUYXJDb3VudCA9IEhhbmRsZXIubmF2aWdhdG9yLmNvdW50O1xuICAgIFxuICAgIGlmICh1bCAhPSBudWxsKSB7XG4gICAgICAgIC8vdWwuYXBwZW5kQ2hpbGQoYmxpKTtcbiAgICAgICAgY29uc3QgdG9wRml4ZWRJdGVtc0NvdW50ID0gMTtcbiAgICAgICAgdWwuaW5zZXJ0QmVmb3JlKGJsaSwgdWwuY2hpbGRyZW5bdG9wRml4ZWRJdGVtc0NvdW50ICsgaW5kZXhdKTtcbiAgICAgICAgYmxpLmFwcGVuZENoaWxkKGIpO1xuXG4gICAgICAgIC8vdWwuYXBwZW5kQ2hpbGQoYWxpKTtcbiAgICAgICAgY29uc3QgbWlkRml4ZWRJdGVtc0NvdW50ID0gMztcbiAgICAgICAgdWwuaW5zZXJ0QmVmb3JlKGFsaSwgdWwuY2hpbGRyZW5bdG9wRml4ZWRJdGVtc0NvdW50ICsgbWlkRml4ZWRJdGVtc0NvdW50ICsgbmF2VGFyQ291bnQgKyBpbmRleF0pO1xuICAgICAgICBhbGkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCduYXZpZ2F0aW9uQ2hhbmdlZCcsIChlKSA9PiB7XG4gICAgc3dpdGNoKGUuZGV0YWlsLm5hbWUpIHtcbiAgICAgICAgY2FzZSBcImFjdGl2ZVwiOiBcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBuYXZwYW5lbCB0ZXh0ICYgc2hvdyBhY3RpdmUgdGFiIFxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bkdyb3VwRHJvcDFcIik7XG4gICAgICAgICAgICBlbGVtZW50LmNoaWxkTm9kZXNbMF0ubm9kZVZhbHVlID0gSGFuZGxlci50ZXh0X3RydW5jYXRlKGUuZGV0YWlsLm5hdmlnYXRvci5hY3RpdmUubmFtZSkgKyBcIiBcIjtcbiAgICAgICAgICAgIHZhciB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS5kZXRhaWwuYWN0aXZlLnRhYlRyaWdnZXJFbGVtZW50SUQpO1xuICAgICAgICAgICAgLy9ib290c3RyYXAuVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UodCkuc2hvdygpO1xuICAgICAgICAgICAgVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UodCkuc2hvdygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJhZGRcIjpcbiAgICAgICAgICAgIC8vIGFkZCBUYWIgJiBDb3B5IGJ1dHRvbnNcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aXpDb3VudFwiKTtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gZS5kZXRhaWwuY291bnQgKyBcIiB2aXpzXCI7XG4gICAgICAgICAgICBIYW5kbGVyLmFkZFRhYihlLmRldGFpbC5uYXZUYXIsIGUuZGV0YWlsLmluZGV4KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwicmVtb3ZlXCI6XG4gICAgICAgICAgICAvLyByZW1vdmUgVGFiICYgQ29weSBidXR0b25zXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidml6Q291bnRcIik7XG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGUuZGV0YWlsLmNvdW50ICsgXCIgdml6c1wiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS5kZXRhaWwubmF2VGFyLmlkKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibmFtZVwiOlxuICAgICAgICAgICAgLy8gdXBkYXRlIG5hdnBhbmVsLCBUYWIgJiBDb3B5IGJ1dHRvbnMgXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuR3JvdXBEcm9wMVwiKTtcbiAgICAgICAgICAgIGVsZW1lbnQuZmlyc3RDaGlsZC5kYXRhID0gSGFuZGxlci50ZXh0X3RydW5jYXRlKGUuZGV0YWlsLm5hdlRhci5uYW1lKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUuZGV0YWlsLm5hdlRhci50YWJUcmlnZ2VyRWxlbWVudElEKS5pbm5lckhUTUwgPSBlLmRldGFpbC5uYXZUYXIubmFtZTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUuZGV0YWlsLm5hdlRhci5jb3B5RWxlbWVudElEKS5pbm5lckhUTUwgPSAnQ29weSAnICsgZS5kZXRhaWwubmF2VGFyLm5hbWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59KTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ25hdlRvZ2dsZWQnLCAoZSkgPT4ge1xuICAgIHN3aXRjaChlLmRldGFpbC5uYW1lKSB7XG4gICAgICAgIGNhc2UgXCJuYXZUb2dnbGVkXCI6IFxuICAgICAgICAgICAgLy9hbGVydChcIm5hdlRvZ2dsZWRcIik7XG4gICAgICAgICAgICAvL2Jvb3RzdHJhcC5Db2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdFBhbmVsXCIpKS50b2dnbGUoKTtcbiAgICAgICAgICAgIENvbGxhcHNlLmdldE9yQ3JlYXRlSW5zdGFuY2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0UGFuZWxcIikpLnRvZ2dsZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBhZG4gbmF2IHBhbmVcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xuICAgICAgICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhcl9jb250YWluZXJcIikuY2xhc3NMaXN0LnRvZ2dsZShcIm1haW4tY29udGVudFwiKTtcbiAgICAgICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS5kZXRhaWwubmF2aWdhdG9yLmFjdGl2ZS5uYXZFbGVtZW50SUQpLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xuICAgICAgICAgICAgLy8gaXMgc21hbGwgc2NyZWVuIGNhbGwgZHJvcHVwLCBlbHNlIGNhbGwgbGVmdCBwYW5lbFxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2VkaXRUb2dnbGVkJywgKGUpID0+IHtcbiAgICBzd2l0Y2goZS5kZXRhaWwubmFtZSkge1xuICAgICAgICBjYXNlIFwiZWRpdFRvZ2dsZWRcIjogXG4gICAgICAgICAgICAvLyB0b2dnbGUgcmlnaHQgcGFuZWxcbiAgICAgICAgICAgIC8vYm9vdHN0cmFwLkNvbGxhcHNlLmdldE9yQ3JlYXRlSW5zdGFuY2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodFBhbmVsXCIpKS50b2dnbGUoKTsgXG4gICAgICAgICAgICBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHRQYW5lbFwiKSkudG9nZ2xlKCk7IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAuLi5hbmQgZWRpdCBwYW5lc1xuICAgICAgICAgICAgY29uc3QgbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGVzdC1lZGl0XCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbFtpXS5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdHRvbS1uYXZiYXJcIikuY2xhc3NMaXN0LnRvZ2dsZShcImR5bmFtaWNcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS5kZXRhaWwubmF2aWdhdG9yLmFjdGl2ZS5lZGl0RWxlbWVudElEKS5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0pO1xuXG4vLyBDaGFuZ2UgRE9NIG9uIHNjcmVlbiBzaXplIGNoYW5nZVxuSGFuZGxlci5tZWRpYVF1ZXJ5ID0gZnVuY3Rpb24ocXVlcnksIGhhbmRsZVllcywgaGFuZGxlTm8pIHtcbiAgICAvLyBleDogXCIobWF4LXdpZHRoOiA3MDBweClcIlxuICAgIHZhciB4ID0gd2luZG93Lm1hdGNoTWVkaWEocXVlcnkpO1xuICAgIHZhciBmID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICh4Lm1hdGNoZXMpID8gaGFuZGxlWWVzKCkgOiBoYW5kbGVObygpO1xuICAgIH1cbiAgICAvLyBjYWxsIG9uY2UgaW1tZWRpYXRlbHkgdGhlbiBsaXN0ZW5cbiAgICBmKCk7XG4gICAgeC5hZGRMaXN0ZW5lcihmKTtcbn1cblxuLy8gQ2hhbmdlIHN0eWxlIG9uIHNjcmVlbiBzaXplIGNoYW5nZVxuSGFuZGxlci5tZWRpYVF1ZXJ5U3R5bGUgPSBmdW5jdGlvbihwYXJhbSkge1xuICAgIHZhciB7cXVlcnksIGVsZW0sIGF0dHIsIHllc1N0eWxlLCBub1N0eWxlfSA9IHBhcmFtO1xuICAgIHZhciBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKTtcbiAgICBIYW5kbGVyLm1lZGlhUXVlcnkoXG4gICAgICAgIHF1ZXJ5LCBcbiAgICAgICAgKCk9PnsgZS5zdHlsZS5zZXRQcm9wZXJ0eShhdHRyLCB5ZXNTdHlsZSk7IH0sIFxuICAgICAgICAoKT0+eyBlLnN0eWxlLnNldFByb3BlcnR5KGF0dHIsIG5vU3R5bGUpOyB9LFxuICAgICk7XG59XG4vKlxuSGFuZGxlci5vZmZzZXQgPSBmdW5jdGlvbihlbCkge1xuICAgIGJveCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiBib3gudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0IC0gZG9jRWxlbS5jbGllbnRUb3AsXG4gICAgICAgIGxlZnQ6IGJveC5sZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0IC0gZG9jRWxlbS5jbGllbnRMZWZ0XG4gICAgfTtcbn1cblxuSGFuZGxlci5maXhUb1ZpZXdwb3J0ID0gZnVuY3Rpb24oZWwsIHRvcCwgbGVmdCkge1xuICAgIHZhciBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCk7XG4gICAgZS5jc3MoXCJsZWZ0XCIsIGxlZnRPZmZzZXQgLSBlbGVtZW50Lm9mZnNldCgpLmxlZnQpO1xuICAgIGUuY3NzKFwidG9wXCIsIHRvcE9mZnNldCAtIGVsZW1lbnQub2Zmc2V0KCkudG9wKTsgICBcbn0qL1xuXG4vLyBDaGFuZ2UgRE9NIG9uIHNjcmVlbiBzaXplIGNoYW5nZVxuSGFuZGxlci5tZWRpYVF1ZXJ5U3dpdGNoID0gZnVuY3Rpb24ocGFyYW0pIHtcbiAgICB2YXIge3F1ZXJ5LCBlbGVtLCB5ZXNQYXJlbnQsIG5vUGFyZW50fSA9IHBhcmFtO1xuICAgIHZhciBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKTtcbiAgICB2YXIgeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoeWVzUGFyZW50KTtcbiAgICB2YXIgbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iobm9QYXJlbnQpO1xuICAgIEhhbmRsZXIubWVkaWFRdWVyeShcbiAgICAgICAgcXVlcnksIFxuICAgICAgICAoKT0+eyAvKmlmIChuLmNvbnRhaW5zKGUpKSovIHkuYXBwZW5kQ2hpbGQoZSk7IH0sIFxuICAgICAgICAoKT0+eyAvKmlmICh5LmNvbnRhaW5zKGUpKSovIG4uYXBwZW5kQ2hpbGQoZSk7IH0sXG4gICAgKTtcbn1cblxuSGFuZGxlci5zaG93VGFiID0gZnVuY3Rpb24ocXVlcnkpIHtcbiAgICBjb25zdCB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSk7XG4gICAgVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UodCkuc2hvdygpO1xufVxuXG5IYW5kbGVyLnNob3dUYWJJbnNpZGVFZGl0ID0gZnVuY3Rpb24ocXVlcnkpIHtcbiAgICBIYW5kbGVyLnNob3dUYWIocXVlcnkpOyBcbiAgICBIYW5kbGVyLm5hdmlnYXRvci5vcGVuRWRpdElmQ2xvc2VkKCk7XG59XG5cbkhhbmRsZXIuc2hvd1RhYkluc2lkZU5hdiA9IGZ1bmN0aW9uKHF1ZXJ5KSB7XG4gICAgSGFuZGxlci5zaG93VGFiKHF1ZXJ5KTsgXG4gICAgSGFuZGxlci5uYXZpZ2F0b3Iub3Blbk5hdklmQ2xvc2VkKCk7XG59XG5cbkhhbmRsZXIudml6SW5pdCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgLy9nZXQgcGxvdCBkaXYsIHRhYlxuICAgIHZhciBkID0gbm9kZS5kYXRhc2V0O1xuICAgIHZhciB2aWQgPSBcInZpei1cIiArIGQueXZJZDtcbiAgICB2YXIgcGxvdF9kaXYgPSBcInBsb3RCb3gtXCIgKyB2aWQ7XG4gICAgdmFyIHBsb3RfZGl2X2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGxvdF9kaXYpO1xuICAgIHZhciB0YWJfZGl2ID0gdmlkICsgXCItdGFiXCI7XG4gICAgLy92YXIgdGFiX2Rpdl9lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhYl9kaXYpO1xuXG4gICAgLy9nZXQganNvblxuICAgIHZhciBqc29uX2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5b3V2aXo6ZGF0YTpcIiArIHZpZCk7XG4gICAgdmFyIGpzb24gPSBKU09OLnBhcnNlKGpzb25fZWwudGV4dENvbnRlbnQpO1xuXG4gICAgLy9tYWtlIHBsb3RcbiAgICB2YXIgZGF0YSA9IGpzb24ucGxvdF9kYXRhO1xuICAgIHZhciBsYXlvdXQgPSBqc29uLnBsb3RfbGF5b3V0O1xuICAgIC8vdmFyIGNvbmZpZyA9IHtyZXNwb25zaXZlOiB0cnVlfTtcbiAgICAvL2xheW91dC5oZWlnaHQgPSAzOTI7XG4gICAgbGF5b3V0LndpZHRoID0gcGxvdF9kaXZfZWwuY2xpZW50V2lkdGg7XG4gICAgbGF5b3V0LmhlaWdodCA9IHBsb3RfZGl2X2VsLmNsaWVudEhlaWdodDtcbiAgICBcbiAgICBsYXlvdXQubWFyZ2luLnQgPSAxNTtcbiAgICBsYXlvdXQubWFyZ2luLmIgPSA2ODtcbiAgICBsYXlvdXQubWFyZ2luLnIgPSAxMDtcbiAgICBsYXlvdXQuc2hvd2xlZ2VuZCA9IHRydWU7XG4gICAgbGF5b3V0LmxlZ2VuZCA9IHtcbiAgICAgICAgeDogMSxcbiAgICAgICAgeGFuY2hvcjogJ3JpZ2h0JyxcbiAgICAgICAgeTogMSxcbiAgICAgICAgYmdjb2xvcjogJyMwMDAwMDAwMCcsXG4gICAgfTtcbiAgICBsYXlvdXQuY2xpY2ttb2RlID0gJ25vbmUnO1xuICAgIGxheW91dC5kcmFnbW9kZSA9IGZhbHNlO1xuICAgIFxuICAgIHZhciBjb25maWcgPSB7ZGlzcGxheU1vZGVCYXI6IGZhbHNlLCBzY3JvbGxab29tOiBmYWxzZX07XG4gICAgUGxvdGx5LnJlYWN0KHBsb3RfZGl2LCBkYXRhLCBsYXlvdXQsIGNvbmZpZyk7XG5cbiAgICAvLyBwb3BvdmVyIHNldHVwXG4gICAgY29uc3QgbGlzdCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYnMtdG9nZ2xlPVwicG9wb3ZlclwiXScpKVxuICAgIGxpc3QubWFwKChlbCkgPT4ge1xuICAgICAgbGV0IG9wdHMgPSB7XG4gICAgICAgIGFuaW1hdGlvbjogZmFsc2UsXG4gICAgICB9XG4gICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKCdkYXRhLWJzLWNvbnRlbnQtaWQnKSkge1xuICAgICAgICBvcHRzLmNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtY29udGVudC1pZCcpKS5pbm5lckhUTUw7XG4gICAgICAgIG9wdHMuaHRtbCA9IHRydWU7XG4gICAgICAgIG9wdHMuc2FuaXRpemUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vbmV3IGJvb3RzdHJhcC5Qb3BvdmVyKGVsLCBvcHRzKTtcbiAgICAgIG5ldyBQb3BvdmVyKGVsLCBvcHRzKTtcbiAgICB9KVxuXG4gICAgLy92YXIgeXZtb2RhbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwieXZtb2RhbFwiKTtcbiAgICB2YXIgeXZtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcueXZtb2RhbC52aXonKTtcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHl2bW9kYWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoeXZtb2RhbHNbaV0pOyBcbiAgICB9XG5cbiAgICBsZXQgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICAgIGZvcihsZXQgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgICAgICAgLy8gb25seSByZXNwb25kIGlmIGRpc3BsYXllZCB0byBzYXZlIGNwdVxuICAgICAgICAgICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBsb3RfZGl2X2VsLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKFwiZGlzcGxheVwiKSAhPSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5jb250ZW50Qm94U2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBGaXJlZm94IGltcGxlbWVudHMgYGNvbnRlbnRCb3hTaXplYCBhcyBhIHNpbmdsZSBjb250ZW50IHJlY3QsIHJhdGhlciB0aGFuIGFuIGFycmF5XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc3QgY29udGVudEJveFNpemUgPSBBcnJheS5pc0FycmF5KGVudHJ5LmNvbnRlbnRCb3hTaXplKSA/IGVudHJ5LmNvbnRlbnRCb3hTaXplWzBdIDogZW50cnkuY29udGVudEJveFNpemU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbG90X2Rpdl9lbC5jbGllbnRXaWR0aCA+PSAxMCB8fCBwbG90X2Rpdl9lbC5jbGllbnRIZWlnaHQgPj0gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1cGRhdGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHBsb3RfZGl2X2VsLmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogcGxvdF9kaXZfZWwuY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgUGxvdGx5LnJlbGF5b3V0KHBsb3RfZGl2LCB1cGRhdGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsb3RfZGl2X2VsLmNsaWVudFdpZHRoID49IDEwIHx8IHBsb3RfZGl2X2VsLmNsaWVudEhlaWdodCA+PSAxMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVwZGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogcGxvdF9kaXZfZWwuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBwbG90X2Rpdl9lbC5jbGllbnRIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBQbG90bHkucmVsYXlvdXQocGxvdF9kaXYsIHVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICBsZXQgbWlkUGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWlkUGFuZWwnKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKG1pZFBhbmVsKTtcbiAgICBcbiAgICAvLyBhZGQgbGlzdGVuZXIgdG8gZ2VuZXJhdGVkIGRvbVxuICAgIHZhciB0YWJfZGl2X2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFiX2Rpdik7XG4gICAgdGFiX2Rpdl9lbC5hZGRFdmVudExpc3RlbmVyKCdzaG93bi5icy50YWInLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gdGFiX2RpdikgeyAvLyBuZXdseSBhY3RpdmF0ZWQgdGFiXG4gICAgICAgIC8vZXZlbnQucmVsYXRlZFRhcmdldCAvLyBwcmV2aW91cyBhY3RpdmUgdGFiXG4gICAgICAgICAgICBpZiAocGxvdF9kaXZfZWwuY2xpZW50V2lkdGggPj0gMTAgfHwgcGxvdF9kaXZfZWwuY2xpZW50SGVpZ2h0ID49IDEwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVwZGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHBsb3RfZGl2X2VsLmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHBsb3RfZGl2X2VsLmNsaWVudEhlaWdodFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgUGxvdGx5LnJlbGF5b3V0KHBsb3RfZGl2LCB1cGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgLy9uZXN0ZWQgZGF0YXRhYmxlIGluaXRcbiAgICBcbiAgICAkKCcjdGFibGUnKS5ib290c3RyYXBUYWJsZSgpOyAvLyBpbml0IHZpYSBqYXZhc2NyaXB0XG5cbiAgICAvLyBkYXRhdGFibGUgbW9kYWxcbiAgICAvLyBhcHBlbmQgbW9kYWxzIHRvIHByZXZlbnQgei1sYXllciBpc3N1ZXNcbiAgICB2YXIgeXZtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcueXZtb2RhbCcpO1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5XCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeXZtb2RhbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZCh5dm1vZGFsc1tpXSk7IFxuICAgIH1cbiAgICAvKlxuICAgIEhhbmRsZXIubWVkaWFRdWVyeVN3aXRjaCh7XG4gICAgICAgIHF1ZXJ5OiAnKG1heC13aWR0aDogOTkycHgpJyxcbiAgICAgICAgZWxlbTogJyNzd2l0Y2gnLFxuICAgICAgICB5ZXNQYXJlbnQ6ICcub2ZmY2FudmFzLWJvdHRvbScsXG4gICAgICAgIG5vUGFyZW50OiAnI3JpZ2h0UGFuZWwgZGl2JyxcbiAgICB9KTsqL1xufVxuXG5IYW5kbGVyLmRhdGFmcmFtZUluaXQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgIHZhciBkID0gbm9kZS5kYXRhc2V0O1xuICAgIGNvbnN0IG0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsVGFibGVcIik7XG4gICAgXG4gICAgaWYgKG0pIHtcbiAgICAgICAgLy9ib290c3RyYXAuTW9kYWwuZ2V0T3JDcmVhdGVJbnN0YW5jZShtKS5kaXNwb3NlKCk7XG4gICAgICAgIC8vYm9vdHN0cmFwLk1vZGFsLmdldE9yQ3JlYXRlSW5zdGFuY2UobSk7XG4gICAgICAgIE1vZGFsLmdldE9yQ3JlYXRlSW5zdGFuY2UobSkuZGlzcG9zZSgpO1xuICAgICAgICBNb2RhbC5nZXRPckNyZWF0ZUluc3RhbmNlKG0pO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIikuYXBwZW5kQ2hpbGQobSk7XG4gICAgICAgIHZhciAkdGFibGUgPSAkKCcjdGFibGUnKTtcblxuICAgICAgICAvL3ZhciBkZlNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgIC8vZGZTY3JpcHQuc3JjID0gJ3slIHN0YXRpYyBcInByb2plY3RzL2pzL2Jvb3RzdHJhcC10YWJsZS5taW4uanNcIiAlfSc7XG4gICAgICAgIC8vZGZTY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgICAgICAvLyAgICBIYW5kbGVyLmpzLmJ0ID0gdHJ1ZTtcbiAgICAgICAgLy99KTtcbiAgICAgICAgLy9ub2RlLmFwcGVuZENoaWxkKGRmU2NyaXB0KTtcbiAgICAgICAgXG4gICAgICAgIC8vIEpRdWVyeSBmb3IgQm9vdHN0cmFwIFRhYmxlIGNvbXBhdGliaWxpdHlcbiAgICAgICAgbGV0IG15VmFyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZihcbiAgICAgICAgICAgICAgICAvL0hhbmRsZXIuc2NyaXB0c1snYnRjJ10gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgIEhhbmRsZXIuanMuYnQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICR0YWJsZS5ib290c3RyYXBUYWJsZSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKG15VmFyKTtcbiAgICAgICAgICAgICAgICAvLyQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgbS5hZGRFdmVudExpc3RlbmVyKCdzaG93bi5icy5tb2RhbCcsZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAkdGFibGUuYm9vdHN0cmFwVGFibGUoJ3Jlc2V0VmlldycpO1xuICAgICAgICAgICAgICAgIC8vICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDI1MCk7XG4gICAgfVxufVxuXG5IYW5kbGVyLnZpenJlcG9ydEluaXQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgIHZhciBkID0gbm9kZS5kYXRhc2V0O1xuICAgIC8vZ2V0IG1vZGFsXG4gICAgY29uc3QgbXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsUmVwb3J0XCIpO1xuICAgIGlmIChtcikge1xuICAgICAgICAvL2Jvb3RzdHJhcC5Nb2RhbC5nZXRPckNyZWF0ZUluc3RhbmNlKG1yKS5kaXNwb3NlKCk7XG4gICAgICAgIC8vYm9vdHN0cmFwLk1vZGFsLmdldE9yQ3JlYXRlSW5zdGFuY2UobXIpO1xuICAgICAgICBNb2RhbC5nZXRPckNyZWF0ZUluc3RhbmNlKG1yKS5kaXNwb3NlKCk7XG4gICAgICAgIE1vZGFsLmdldE9yQ3JlYXRlSW5zdGFuY2UobXIpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIikuYXBwZW5kQ2hpbGQobXIpO1xuXG4gICAgICAgIC8vIGluaXQgdml6c1xuICAgICAgICAvL3ZhciBhcnIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnl2LXZpenJlcG9ydCBkaXYgc2NyaXB0XCIpO1xuICAgICAgICB2YXIgYXJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi55di12aXpyZXBvcnRcIik7XG4gICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgYXJyLmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vZ2V0IHBsb3QgZGl2LCB0YWJcbiAgICAgICAgICAgIGNvbnN0IHJlcCA9IGFycltuXTtcbiAgICAgICAgICAgIGNvbnN0IHJpZCA9IHJlcC5pZDtcbiAgICAgICAgICAgIGNvbnN0IHBsb3RfZGl2ID0gXCJwbG90Qm94LXJlcG9ydC1cIiArIHJpZDtcbiAgICAgICAgICAgIGNvbnN0IHBsb3RfZGl2X2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGxvdF9kaXYpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL2dldCBqc29uXG4gICAgICAgICAgICBjb25zdCBqc29uX2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5b3V2aXo6ZGF0YTpyZXBvcnQtXCIgKyByaWQpO1xuICAgICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UoanNvbl9lbC50ZXh0Q29udGVudCk7XG5cbiAgICAgICAgICAgIC8vbWFrZSBwbG90XG4gICAgICAgICAgICBjb25zdCBkYXRhID0ganNvbi5wbG90X2RhdGE7XG4gICAgICAgICAgICBjb25zdCBsYXlvdXQgPSBqc29uLnBsb3RfbGF5b3V0O1xuICAgICAgICAgICAgLy92YXIgY29uZmlnID0ge3Jlc3BvbnNpdmU6IHRydWV9O1xuICAgICAgICAgICAgY29uc3QgcGxvdF9kaXZfb3V0ZXJfZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyaWQpO1xuICAgICAgICAgICAgbGF5b3V0LndpZHRoID0gcGxvdF9kaXZfb3V0ZXJfZWwuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICAvL2xheW91dC5oZWlnaHQgPSBwbG90X2Rpdl9vdXRlcl9lbC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICBsYXlvdXQuaGVpZ2h0ID0gMjUwO1xuICAgICAgICAgICAgbGF5b3V0Lm1hcmdpbi50ID0gMTU7XG4gICAgICAgICAgICBsYXlvdXQubWFyZ2luLmIgPSA2ODtcbiAgICAgICAgICAgIGxheW91dC5tYXJnaW4uciA9IDEwO1xuICAgICAgICAgICAgbGF5b3V0LnNob3dsZWdlbmQgPSB0cnVlO1xuICAgICAgICAgICAgbGF5b3V0LmxlZ2VuZCA9IHtcbiAgICAgICAgICAgICAgICB4OiAxLFxuICAgICAgICAgICAgICAgIHhhbmNob3I6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgeTogMSxcbiAgICAgICAgICAgICAgICBiZ2NvbG9yOiAnIzAwMDAwMDAwJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsYXlvdXQuY2xpY2ttb2RlID0gJ25vbmUnO1xuICAgICAgICAgICAgbGF5b3V0LmRyYWdtb2RlID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBjb25maWcgPSB7ZGlzcGxheU1vZGVCYXI6IGZhbHNlLCBzY3JvbGxab29tOiBmYWxzZX07XG4gICAgICAgICAgICBQbG90bHkucmVhY3QocGxvdF9kaXYsIGRhdGEsIGxheW91dCwgY29uZmlnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9hZGQgcmVzaXplIGxpc3RlbmVyXG4gICAgICAgICAgICAvKndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwbG90X2Rpdl9lbCkuZGlzcGxheSAhPT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICAgdmFyIHVwZGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHBsb3RfZGl2X2VsLmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHBsb3RfZGl2X2VsLmNsaWVudEhlaWdodFxuICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICBpZih1cGRhdGUud2lkdGggIT09IDAgJiYgdXBkYXRlLmhlaWdodCAhPT0gMCkgUGxvdGx5LnJlbGF5b3V0KHBsb3RfZGl2LCB1cGRhdGUpO1xuICAgICAgICAgICAgICAgICAvL2V2YWwoc2NyaXB0LmlubmVySFRNTCk7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7Ki9cbiAgICAgICAgICAgIGxldCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LmNvbnRlbnRCb3hTaXplKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGaXJlZm94IGltcGxlbWVudHMgYGNvbnRlbnRCb3hTaXplYCBhcyBhIHNpbmdsZSBjb250ZW50IHJlY3QsIHJhdGhlciB0aGFuIGFuIGFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnN0IGNvbnRlbnRCb3hTaXplID0gQXJyYXkuaXNBcnJheShlbnRyeS5jb250ZW50Qm94U2l6ZSkgPyBlbnRyeS5jb250ZW50Qm94U2l6ZVswXSA6IGVudHJ5LmNvbnRlbnRCb3hTaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsb3RfZGl2X291dGVyX2VsLmNsaWVudFdpZHRoID49IDEwIHx8IHBsb3RfZGl2X291dGVyX2VsLmNsaWVudEhlaWdodCA+PSAxMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHBsb3RfZGl2X291dGVyX2VsLmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHBsb3RfZGl2X291dGVyX2VsLmNsaWVudEhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxvdGx5LnJlbGF5b3V0KHBsb3RfZGl2LCB1cGRhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsb3RfZGl2X291dGVyX2VsLmNsaWVudFdpZHRoID49IDEwIHx8IHBsb3RfZGl2X291dGVyX2VsLmNsaWVudEhlaWdodCA+PSAxMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHBsb3RfZGl2X291dGVyX2VsLmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHBsb3RfZGl2X291dGVyX2VsLmNsaWVudEhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxvdGx5LnJlbGF5b3V0KHBsb3RfZGl2LCB1cGRhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vbGV0IG1pZFBhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pZFBhbmVsJyk7XG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHBsb3RfZGl2X2VsKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gcmVzaXplIG9uIG1vZGFsLnNob3dcbiAgICAgICAgICAgIG1yLmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGxvdF9kaXZfb3V0ZXJfZWwuY2xpZW50V2lkdGggPj0gMTAgfHwgcGxvdF9kaXZfb3V0ZXJfZWwuY2xpZW50SGVpZ2h0ID49IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBwbG90X2Rpdl9lbC5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogcGxvdF9kaXZfZWwuY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIFBsb3RseS5yZWxheW91dChwbG90X2RpdiwgdXBkYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy9xciBjb2RlXG4gICAgICAgIC8qXG4gICAgICAgIHZhciBxcmNvZGUgPSBuZXcgUVJDb2RlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidml6LXFyY29kZS17e3ZpZH19XCIpLCB7XG4gICAgICAgICAgICB0ZXh0OiBcInt7cmVwb3J0LmdldF9hYnNvbHV0ZV91cmx9fVwiLFxuICAgICAgICAgICAgd2lkdGg6IDYwLFxuICAgICAgICAgICAgaGVpZ2h0OiA2MCxcbiAgICAgICAgICAgIGNvbG9yRGFyayA6IFwiIzAwMDAwMFwiLFxuICAgICAgICAgICAgY29sb3JMaWdodCA6IFwiI2ZmZmZmZlwiLFxuICAgICAgICAgICAgY29ycmVjdExldmVsIDogUVJDb2RlLkNvcnJlY3RMZXZlbC5IXG4gICAgICAgIH0pOyovXG4gICAgICAgIFxuICAgICAgICAvLyBzaGFyZSBidXR0b25cbiAgICAgICAgLypcbiAgICAgICAgY29uc3Qgc2hhcmVEYXRhID0ge1xuICAgICAgICAgICAgdGl0bGU6ICd7e3JlcG9ydC5uYW1lfX0nLFxuICAgICAgICAgICAgdGV4dDogJ0NoZWNrIG91dCB0aGlzIGRhdGEgdml6dWFsaXphdGlvbiBvbiBZb3VWaXohJyxcbiAgICAgICAgICAgIHVybDogJ3t7cmVwb3J0LmdldF9hYnNvbHV0ZV91cmx9fSdcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVwb3J0LWJ1dHRvbi1zaGFyZScpO1xuICAgICAgICBjb25zdCByZXN1bHRQYXJhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlcG9ydC1zaGFyZS1yZXN1bHQnKTtcbiAgICAgICAgLy8gU2hhcmUgbXVzdCBiZSB0cmlnZ2VyZWQgYnkgXCJ1c2VyIGFjdGl2YXRpb25cIlxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IG5hdmlnYXRvci5zaGFyZShzaGFyZURhdGEpO1xuICAgICAgICAgICAgICAgIC8vcmVzdWx0UGFyYS50ZXh0Q29udGVudCA9ICdNRE4gc2hhcmVkIHN1Y2Nlc3NmdWxseSc7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICR7ZXJyfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgKi9cbiAgICAgICAgSGFuZGxlci5zaGFyZUxpc3RlbmVyKCcjcmVwb3J0LWJ1dHRvbi1zaGFyZScsICdudWxsJywgJ1JlcG9ydCcsICdDaGVjayBvdXQgdGhpcyBkYXRhIHZpenVhbGl6YXRpb24gb24gWW91Vml6IScsICdodHRwczovL3lvdXZpei5hcHAnKTtcbiAgICB9XG59XG5cbkhhbmRsZXIuZHNUaHVtYkluaXQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgIHZhciBkID0gbm9kZS5kYXRhc2V0O1xuICAgIC8vIGluaXQgdml6c1xuICAgIC8vdmFyIGFyciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIueXYtdml6cmVwb3J0IGRpdiBzY3JpcHRcIik7XG4gICAgdmFyIHMgPSBcIiNjYXJvdXNlbC1cIi5jb25jYXQoZC55dklkLCBcIiAueXYtZHN0aHVtYlwiKTtcbiAgICB2YXIgYXJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzKTtcbiAgICBmb3IgKHZhciBuID0gMDsgbiA8IGFyci5sZW5ndGg7IG4rKykge1xuXG4gICAgICAgIC8vZ2V0IHBsb3QgZGl2LCB0YWJcbiAgICAgICAgY29uc3QgdGh1bWIgPSBhcnJbbl07XG4gICAgICAgIGNvbnN0IHRodW1iaWQgPSB0aHVtYi5pZDtcbiAgICAgICAgY29uc3QgcGxvdF9kaXYgPSBcInBsb3RCb3gtZHN0aHVtYi1cIiArIHRodW1iaWQ7XG4gICAgICAgIGNvbnN0IHBsb3RfZGl2X2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGxvdF9kaXYpO1xuXG4gICAgICAgIC8vZ2V0IGpzb25cbiAgICAgICAgY29uc3QganNvbl9lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieW91dml6OmRhdGE6ZHN0aHVtYi1cIiArIHRodW1iaWQpO1xuICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShqc29uX2VsLnRleHRDb250ZW50KTtcblxuICAgICAgICAvL21ha2UgcGxvdFxuICAgICAgICBjb25zdCBkYXRhID0ganNvbi5wbG90X2RhdGE7XG4gICAgICAgIGNvbnN0IGxheW91dCA9IGpzb24ucGxvdF9sYXlvdXQ7XG4gICAgICAgIC8vdmFyIGNvbmZpZyA9IHtyZXNwb25zaXZlOiB0cnVlfTtcbiAgICAgICAgLy9jb25zdCBwbG90X2Rpdl9vdXRlcl9lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRodW1iaWQpO1xuICAgICAgICBjb25zdCBwbG90X2Rpdl9vdXRlcl9lbCA9IHRodW1iLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGxheW91dC53aWR0aCA9IHBsb3RfZGl2X291dGVyX2VsLmNsaWVudFdpZHRoO1xuICAgICAgICAvL2xheW91dC5oZWlnaHQgPSBwbG90X2Rpdl9vdXRlcl9lbC5jbGllbnRIZWlnaHQ7XG4gICAgICAgIC8vbGF5b3V0LmhlaWdodCA9IDI1MDtcbiAgICAgICAgLy9sYXlvdXQubWFyZ2luLnQgPSAxNTtcbiAgICAgICAgLy9sYXlvdXQubWFyZ2luLmIgPSA2ODtcbiAgICAgICAgLy9sYXlvdXQubWFyZ2luLnIgPSAxMDtcbiAgICAgICAgbGF5b3V0LnNob3dsZWdlbmQgPSBmYWxzZTtcbiAgICAgICAgLy9pZihsYXlvdXQueGF4aXMudmlzaWJsZSkgbGF5b3V0LnhheGlzLnZpc2libGUgPSBmYWxzZTsgXG4gICAgICAgIGlmKGxheW91dC54YXhpcy5zaG93dGlja2xhYmVscyl7XG4gICAgICAgICAgICBsYXlvdXQueGF4aXMuc2hvd3RpY2tsYWJlbHMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvL2lmKGxheW91dC55YXhpcy52aXNpYmxlKSBsYXlvdXQueWF4aXMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICBpZihsYXlvdXQueWF4aXMuc2hvd3RpY2tsYWJlbHMpeyBcbiAgICAgICAgICAgIGxheW91dC55YXhpcy5zaG93dGlja2xhYmVscyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8qbGF5b3V0LmxlZ2VuZCA9IHtcbiAgICAgICAgICAgIHg6IDEsXG4gICAgICAgICAgICB4YW5jaG9yOiAncmlnaHQnLFxuICAgICAgICAgICAgeTogMSxcbiAgICAgICAgICAgIGJnY29sb3I6ICcjMDAwMDAwMDAnLFxuICAgICAgICB9OyovXG4gICAgICAgIGxheW91dC5jbGlja21vZGUgPSAnbm9uZSc7XG4gICAgICAgIGxheW91dC5kcmFnbW9kZSA9IGZhbHNlO1xuICAgICAgICBsYXlvdXQuaG92ZXJtb2RlID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtkaXNwbGF5TW9kZUJhcjogZmFsc2UsIHNjcm9sbFpvb206IGZhbHNlfTtcbiAgICAgICAgXG4gICAgICAgIC8vdmFyIGltZ19qcGc9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcGctZXhwb3J0Jyk7XG4gICAgICAgIFBsb3RseS5yZWFjdChwbG90X2RpdiwgZGF0YSwgbGF5b3V0LCBjb25maWcpO1xuICAgICAgICBcbiAgICAgICAgLy8gc3RhdGljIGltYWdlIGluIGpwZyBmb3JtYXRcbiAgICAgICAgLypcblxuICAgICAgICAudGhlbihcbiAgICAgICAgICAgIGZ1bmN0aW9uKGdkKVxuICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgUGxvdGx5LnRvSW1hZ2UoZ2Qse2hlaWdodDozMDAsd2lkdGg6MzAwfSlcbiAgICAgICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbih1cmwpXG4gICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgaW1nX2pwZy5zcmMgPSB1cmw7XG4gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgKi9cblxuICAgICAgICAvL2FkZCByZXNpemUgbGlzdGVuZXJcbiAgICAgICAgLyp3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwbG90X2Rpdl9lbCkuZGlzcGxheSAhPT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICB2YXIgdXBkYXRlID0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBwbG90X2Rpdl9lbC5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHBsb3RfZGl2X2VsLmNsaWVudEhlaWdodFxuICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgaWYodXBkYXRlLndpZHRoICE9PSAwICYmIHVwZGF0ZS5oZWlnaHQgIT09IDApIFBsb3RseS5yZWxheW91dChwbG90X2RpdiwgdXBkYXRlKTtcbiAgICAgICAgICAgICAvL2V2YWwoc2NyaXB0LmlubmVySFRNTCk7XG4gICAgICAgICB9XG4gICAgICAgIH0pOyovXG4gICAgICAgIGxldCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICAgICAgICAgIGZvcihsZXQgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5jb250ZW50Qm94U2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBGaXJlZm94IGltcGxlbWVudHMgYGNvbnRlbnRCb3hTaXplYCBhcyBhIHNpbmdsZSBjb250ZW50IHJlY3QsIHJhdGhlciB0aGFuIGFuIGFycmF5XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc3QgY29udGVudEJveFNpemUgPSBBcnJheS5pc0FycmF5KGVudHJ5LmNvbnRlbnRCb3hTaXplKSA/IGVudHJ5LmNvbnRlbnRCb3hTaXplWzBdIDogZW50cnkuY29udGVudEJveFNpemU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbG90X2Rpdl9vdXRlcl9lbC5jbGllbnRXaWR0aCA+PSAxMCB8fCBwbG90X2Rpdl9vdXRlcl9lbC5jbGllbnRIZWlnaHQgPj0gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogcGxvdF9kaXZfb3V0ZXJfZWwuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBwbG90X2Rpdl9vdXRlcl9lbC5jbGllbnRIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBQbG90bHkucmVsYXlvdXQocGxvdF9kaXYsIHVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGxvdF9kaXZfb3V0ZXJfZWwuY2xpZW50V2lkdGggPj0gMTAgfHwgcGxvdF9kaXZfb3V0ZXJfZWwuY2xpZW50SGVpZ2h0ID49IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHBsb3RfZGl2X291dGVyX2VsLmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogcGxvdF9kaXZfb3V0ZXJfZWwuY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgUGxvdGx5LnJlbGF5b3V0KHBsb3RfZGl2LCB1cGRhdGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvL2xldCBtaWRQYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaWRQYW5lbCcpO1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHBsb3RfZGl2X2VsKTtcblxuICAgICAgICAvLyByZXNpemUgb24gbW9kYWwuc2hvd1xuICAgICAgICAvKlxuICAgICAgICBtci5hZGRFdmVudExpc3RlbmVyKCdzaG93LmJzLm1vZGFsJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGUgPSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHBsb3RfZGl2X2VsLmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogcGxvdF9kaXZfZWwuY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgUGxvdGx5LnJlbGF5b3V0KHBsb3RfZGl2LCB1cGRhdGUpO1xuICAgICAgICB9KTsqL1xuXG4gICAgfVxufVxuIFxuSGFuZGxlci5jb21wb25lbnRJbml0ID0gYXN5bmMgZnVuY3Rpb24obm9kZV9hcnJheSkge1xuICAgIG5vZGVfYXJyYXkuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICBpZihIYW5kbGVyW25vZGUuZGF0YXNldC55dkluaXRdKXtcbiAgICAgICAgICAgIEhhbmRsZXJbbm9kZS5kYXRhc2V0Lnl2SW5pdF0obm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhY3RpdmF0ZSBidXR0b25cbiAgICAgICAgaWYobm9kZS5kYXRhc2V0Lnl2QnV0dG9uICE9IFwiXCIpe1xuICAgICAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihub2RlLmRhdGFzZXQueXZCdXR0b24pKXtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5vZGUuZGF0YXNldC55dkJ1dHRvbikuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5IYW5kbGVyLmxvYWRZVkNvbXBvbmVudHMgPSBhc3luYyBmdW5jdGlvbiAocm9vdEVsZW1lbnRJRCkge1xuICAgIFxuICAgIGxldCBub2RlTGlzdDtcbiAgICBcbiAgICBpZihyb290RWxlbWVudElEKSB7XG4gICAgICAgIG5vZGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChyb290RWxlbWVudElELmNvbmNhdChcIiBcIiwgXCIueXYtY29tcG9uZW50XCIpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG5vZGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi55di1jb21wb25lbnRcIik7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG5vZGVzID0gQXJyYXkuZnJvbShub2RlTGlzdCk7XG4gICAgXG4gICAgLy8xLlNvcnQgaW50byBncm91cHM6IGRhdGEteXYtY29tcG9uZW50IC4uLk5FVyAgICBcbiAgICBIYW5kbGVyLmNvbXBvbmVudHMgPSB7fTtcbiAgICBcbiAgICBhd2FpdCBQcm9taXNlLmFsbChub2Rlcy5tYXAoYXN5bmMgKG5vZGUpID0+IHtcbiAgICAgICAgLy8gZ2V0IHVuaWNvcm4gZGF0YSwgYWRkIHRvIG5vZGVcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChub2RlLmRhdGFzZXQueXZMaW5rKTtcbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgIHZhciBzZWxlY3RvciA9ICcjJyArIG5vZGUuaWQgKyAnIHNjcmlwdFtpZF49XCJ1bmljb3JuOmRhdGFcIl0nO1xuICAgICAgICB2YXIgdV9zY3JpcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgaWYodV9zY3JpcHQpIHtcbiAgICAgICAgICAgIG5vZGUudW5pY29ybl9kYXRhID0gSlNPTi5wYXJzZSh1X3NjcmlwdC50ZXh0Q29udGVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLy91bmljb3JuIGluaXRcbiAgICAgICAgVW5pY29ybi5jb21wb25lbnRJbml0KG5vZGUudW5pY29ybl9kYXRhKTtcbiAgICAgICAgLy8gZ3JvdXAgY29tcG9uZW50c1xuICAgICAgICB2YXIgYyA9IG5vZGUuZGF0YXNldFsneXZDb21wb25lbnQnXTtcbiAgICAgICAgaWYoIUhhbmRsZXIuY29tcG9uZW50c1tjXSkge1xuICAgICAgICAgICAgSGFuZGxlci5jb21wb25lbnRzW2NdID0ge307XG4gICAgICAgIH1cbiAgICAgICAgSGFuZGxlci5jb21wb25lbnRzW2NdW25vZGUuaWRdID0gbm9kZTtcbiAgICB9KSk7XG4gICAgXG4gICAgT2JqZWN0LmtleXMoSGFuZGxlci5jb21wb25lbnRzKS5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgIC8vIHByb2Nlc3MgYnkgZ3JvdXBcbiAgICAgICAgc3dpdGNoKGMpIHtcbiAgICAgICAgICAgIGNhc2UgJ3Zpeic6IFxuICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMoSGFuZGxlci5jb21wb25lbnRzW2NdKS5mb3JFYWNoKCh2KT0+e1xuICAgICAgICAgICAgICAgICAgICBIYW5kbGVyLm5hdmlnYXRvci5hZGQoXCJ2aXpcIiwgdi5kYXRhc2V0Lnl2SWQsIHYudW5pY29ybl9kYXRhLmRhdGEudml6Lm5hbWUpOyAvL25vZGUudW5pY29ybl9kYXRhLmRhdGEudml6Lm5hbWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBIYW5kbGVyLm5hdmlnYXRvci5hY3RpdmUgPSBIYW5kbGVyLm5hdmlnYXRvci50YXJnZXRzWzBdLmlkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVwb3J0JzpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RhdGFmcmFtZSc6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY3VzdG9tIGluaXQgZWFjaCBpdGVtXG4gICAgICAgIEhhbmRsZXIuY29tcG9uZW50SW5pdChPYmplY3QudmFsdWVzKEhhbmRsZXIuY29tcG9uZW50c1tjXSkpO1xuICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gIGF3YWl0IGdpdmVQcml6ZVRvUGxheWVyKHBsYXllcik7XG4gICAgLy99KSk7XG4gICAgLypcbiAgICB2YXIgcCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgbm9kZXMuZm9yRWFjaChhc3luYyAobm9kZSkgPT4ge1xuICAgICAgICAgICAgLy8gZ2V0IHVuaWNvcm4gZGF0YSwgYWRkIHRvIG5vZGVcbiAgICAgICAgICAgIGZldGNoKFwiLlwiICsgbm9kZS5kYXRhc2V0Lnl2TGluaylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuaW5uZXJIVE1MID0gZGF0YTtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0b3IgPSAnIycgKyBub2RlLmlkICsgJyBzY3JpcHRbaWRePVwidW5pY29ybjpkYXRhXCJdJztcbiAgICAgICAgICAgICAgICB2YXIgdV9zY3JpcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBpZih1X3NjcmlwdCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnVuaWNvcm5fZGF0YSA9IEpTT04ucGFyc2UodV9zY3JpcHQudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL3VuaWNvcm4gaW5pdFxuICAgICAgICAgICAgICAgIFVuaWNvcm4uY29tcG9uZW50SW5pdChub2RlLnVuaWNvcm5fZGF0YSk7ICBcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihkdW1teSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gZ3JvdXAgY29tcG9uZW50c1xuICAgICAgICAgICAgICAgIHZhciBjID0gbm9kZS5kYXRhc2V0Wyd5dkNvbXBvbmVudCddO1xuICAgICAgICAgICAgICAgIGlmKCFIYW5kbGVyLmNvbXBvbmVudHNbY10pIHtcbiAgICAgICAgICAgICAgICAgICAgSGFuZGxlci5jb21wb25lbnRzW2NdID0ge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEhhbmRsZXIuY29tcG9uZW50c1tjXVtub2RlLmlkXSA9IG5vZGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgfSk7Ki9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgLy8gICAyLkluaXQ6IGdlbmVyaWMsIGN1c3RvbSAgLi4uU0FNRVxuLyogICAgbm9kZXMuZm9yRWFjaChhc3luYyAobm9kZSkgPT4ge1xuICAgICAgICB2YXIgbm9kZV9kYXRhID0gbm9kZS5kYXRhc2V0O1xuXG4gICAgICAgIC8vZmV0Y2goXCIuL1wiICsgbm9kZV9kYXRhLnl2Q29tcG9uZW50ICsgXCIvXCIgKyBub2RlX2RhdGEueXZJZClcbiAgICAgICAgZmV0Y2goXCIuXCIgKyBub2RlX2RhdGEueXZMaW5rKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpIFxuICAgICAgICB9KVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIG5vZGUuaW5uZXJIVE1MID0gZGF0YTtcbiAgICAgICAgICAgIGxldCB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5Vbmljb3JuICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICAvLyBzdG9wIGxvb3BcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaW5pdCB1bmljb3JuIGNvbXBvbmVudCBmb3IgYWpheCBlZGl0aW5nXG4gICAgICAgICAgICAgICAgICAgIHZhciB1X3NjcmlwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgbm9kZS5pZCArICcgc2NyaXB0W2lkXj1cInVuaWNvcm46ZGF0YVwiXScpO1xuICAgICAgICAgICAgICAgICAgICBpZih1X3NjcmlwdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdSA9IFVuaWNvcm47XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbml0IHVfY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB1LmNvbXBvbmVudEluaXQoSlNPTi5wYXJzZSh1X3NjcmlwdC50ZXh0Q29udGVudCkpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNhdmUgdV9kYXRhIGZvciBsYXRlclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS51bmljb3JuX2RhdGEgPSBKU09OLnBhcnNlKHVfc2NyaXB0LnRleHRDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaW5pdCBjb21wb25lbnQgdG8gc2V0dXAgYWZ0ZXIgZG93bmxvYWRcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyAtIG1ha2UgaW5pdCBzdXBwb3J0IGFzeW5jIGJ5IGRlZmF1bHQ/XG4gICAgICAgICAgICAgICAgICAgIGlmKEhhbmRsZXJbbm9kZV9kYXRhLnl2SW5pdF0gIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBIYW5kbGVyW25vZGVfZGF0YS55dkluaXRdKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gYWN0aXZhdGUgYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iobm9kZV9kYXRhLnl2QnV0dG9uKSAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iobm9kZV9kYXRhLnl2QnV0dG9uKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMjUwKTtcbiAgICAgICAgfSk7XG4gICAgfSk7Ki9cbiAgICBcbn1cblxuLy8gTE9BRCBZVi1DT01QU1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGFzeW5jIChldmVudCkgPT4ge1xuICAgIEhhbmRsZXIubG9hZFlWQ29tcG9uZW50cygpO1xufSk7XG5cbnZhciB5dm1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy55dm1vZGFsJyk7XG52YXIgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKTtcbmZvciAobGV0IGkgPSAwOyBpIDwgeXZtb2RhbHMubGVuZ3RoOyBpKyspIHtcbiAgICBib2R5LmFwcGVuZENoaWxkKHl2bW9kYWxzW2ldKTsgXG59XG5cbi8vZ2xvYmFsIHRvZ2dsZSB0byBrZWVwIG9mZmNhbnZhcyBvcGVuIHdoaWxlIGVkaXRpbmcgZGF0YSBzb3VyY2VcbnZhciBlZGl0aW5nX2ZpbGUgPSBmYWxzZTtcblxuLy93aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImRldmljZW9yaWVudGF0aW9uXCIsIChldmVudCkgPT4ge1xuLy8gICAgdmFyIGFic29sdXRlID0gZXZlbnQuYWJzb2x1dGU7XG4vLyAgICB2YXIgYWxwaGEgICAgPSBldmVudC5hbHBoYTtcbi8vICAgIHZhciBiZXRhICAgICA9IGV2ZW50LmJldGE7XG4vLyAgICB2YXIgZ2FtbWEgICAgPSBldmVudC5nYW1tYTtcbi8vICAgIGFsZXJ0KGFscGhhKTtcbi8vfVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgaGFtbWVydGltZSA9IEhhbW1lcihkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdKTtcbiAgICBoYW1tZXJ0aW1lLm9uKCdzd2lwZWxlZnQgc3dpcGVyaWdodCcsIChldmVudCkgPT4ge1xuICAgICAgICBzd2l0Y2goZXZlbnQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnc3dpcGVsZWZ0JzogXG4gICAgICAgICAgICAgICAgLy9hbGVydChldmVudC50eXBlKTtcbiAgICAgICAgICAgICAgICBIYW5kbGVyLm5hdmlnYXRvci5mb3J3YXJkKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzd2lwZXJpZ2h0JzpcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KGV2ZW50LnR5cGUpO1xuICAgICAgICAgICAgICAgIEhhbmRsZXIubmF2aWdhdG9yLmJhY2soKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIC8vdGltZSByZWZyZXNoXG4gICAgY29uc3QgdHJlZnJlc2hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50cmVmcmVzaCcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJlZnJlc2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBIYW5kbGVyLnRpbWVSZWZyZXNoKHRyZWZyZXNoZXNbaV0ubGFzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwsIHRyZWZyZXNoZXNbaV0uZmlyc3RFbGVtZW50Q2hpbGQpOyBcbiAgICB9XG59KTtcbiBcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIChldmVudCkgPT4ge1xuICAgIHZhciB0b3BfbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3AtbmF2XCIpO1xuICAgIFxuICAgIGxldCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICAgICAgICAgIGZvcihsZXQgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5jb250ZW50Qm94U2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBGaXJlZm94IGltcGxlbWVudHMgYGNvbnRlbnRCb3hTaXplYCBhcyBhIHNpbmdsZSBjb250ZW50IHJlY3QsIHJhdGhlciB0aGFuIGFuIGFycmF5XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc3QgY29udGVudEJveFNpemUgPSBBcnJheS5pc0FycmF5KGVudHJ5LmNvbnRlbnRCb3hTaXplKSA/IGVudHJ5LmNvbnRlbnRCb3hTaXplWzBdIDogZW50cnkuY29udGVudEJveFNpemU7XG4gICAgICAgICAgICAgICAgICAgIGlmKEhhbmRsZXIudG9wX25hdl9pbml0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3AtbmF2XCIpLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3ZhciBycyA9IGdldENvbXB1dGVkU3R5bGUocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3JzLmdldFByb3BlcnR5VmFsdWUoJy0tdC1uYXYnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByLnN0eWxlLnNldFByb3BlcnR5KCctLXRvcC1uYXYnLCBoZWlnaHQgKyAncHgnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEhhbmRsZXIudG9wX25hdl9pbml0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKEhhbmRsZXIudG9wX25hdl9pbml0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvcC1uYXZcIikub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3ZhciBycyA9IGdldENvbXB1dGVkU3R5bGUocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3JzLmdldFByb3BlcnR5VmFsdWUoJy0tdC1uYXYnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByLnN0eWxlLnNldFByb3BlcnR5KCctLXRvcC1uYXYnLCBoZWlnaHQgKyAncHgnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEhhbmRsZXIudG9wX25hdl9pbml0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0b3BfbmF2KTtcbn0pO1xuIFxuLypcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoZXZlbnQpID0+IHtcbiAgICB2YXIgbWlkUGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pZFBhbmVsXCIpXG4gXG4gICAgbGV0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgICAgICAgICAgZm9yKGxldCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmNvbnRlbnRCb3hTaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZpcmVmb3ggaW1wbGVtZW50cyBgY29udGVudEJveFNpemVgIGFzIGEgc2luZ2xlIGNvbnRlbnQgcmVjdCwgcmF0aGVyIHRoYW4gYW4gYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zdCBjb250ZW50Qm94U2l6ZSA9IEFycmF5LmlzQXJyYXkoZW50cnkuY29udGVudEJveFNpemUpID8gZW50cnkuY29udGVudEJveFNpemVbMF0gOiBlbnRyeS5jb250ZW50Qm94U2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYoSGFuZGxlci5kYXRhc291cmNlX2luZm9faW5pdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaWRQYW5lbFwiKS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3ZhciByID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdmFyIHJzID0gZ2V0Q29tcHV0ZWRTdHlsZShyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcnMuZ2V0UHJvcGVydHlWYWx1ZSgnLS10LW5hdicpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS10LW5hdicsIGhlaWdodCArICdweCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aXotaW5mby1wYW5lbFwiKS5zdHlsZS5zZXRQcm9wZXJ0eSgnd2lkdGgnLCB3aWR0aCArICdweCcpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgSGFuZGxlci5kYXRhc291cmNlX2luZm9faW5pdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZihIYW5kbGVyLnRvcF9uYXZfaW5pdCkge1xuICAgICAgICAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pZFBhbmVsXCIpLm9mZnNldFdpZHRoO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3ZhciByID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdmFyIHJzID0gZ2V0Q29tcHV0ZWRTdHlsZShyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcnMuZ2V0UHJvcGVydHlWYWx1ZSgnLS10LW5hdicpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudml6LWluZm8tcGFuZWxcIikuc3R5bGUuc2V0UHJvcGVydHkoJ3dpZHRoJywgd2lkdGggKyAncHghaW1wb3J0YW50OycpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgSGFuZGxlci5kYXRhc291cmNlX2luZm9faW5pdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIG9ic2VydmVyLm9ic2VydmUobWlkUGFuZWwpO1xufSk7XG4qL1xuIFxuLy8gc2hhcmluZyBhcHAgbGlua1xuLypcbmNvbnN0IHNoYXJlQXBwID0ge1xuICAgIC8vdGl0bGU6ICd7e3JlcG9ydC5uYW1lfX0nLFxuICAgIHRleHQ6ICdDaGVjayBvdXQgWW91Vml6IC0gY29vbCBkYXRhIHZpenVhbGl6YXRpb24gYXBwIScsXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cueW91dml6LmFwcC8nXG59XG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2V0dGluZ3MtYnV0dG9uLXNoYXJlJyk7XG5idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgbmF2aWdhdG9yLnNoYXJlKHNoYXJlQXBwKTtcbiAgICAgICAgLy9yZXN1bHRQYXJhLnRleHRDb250ZW50ID0gJ01ETiBzaGFyZWQgc3VjY2Vzc2Z1bGx5JztcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiAke2Vycn1gKTtcbiAgICB9XG59KTtcbiovXG5cbkhhbmRsZXIuc2hhcmVMaXN0ZW5lcignI3NldHRpbmdzLWJ1dHRvbi1zaGFyZScsICdudWxsJywgJ1lvdVZpeicsICdDaGVjayBvdXQgdGhpcyBmcmVlIGRhdGEgdml6dWFsaXphdGlvbiBhcHAhJywgJ2h0dHBzOi8veW91dml6LmFwcCcpO1xuSGFuZGxlci5zaGFyZUxpc3RlbmVyKCcjc2hhcmUtYnV0dG9uLXNoYXJlJywgJ251bGwnLCAnUmVwb3J0JywgJ0NoZWNrIG91dCB0aGlzIGRhdGEgdml6dWFsaXphdGlvbiBvbiBZb3VWaXohJywgJ2h0dHBzOi8veW91dml6LmFwcCcpO1xuIFxuIC8vIG5hdmJhciBzaGFyZVxudmFyIHNoYXJlRGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2YmFyLWJ1dHRvbi1zaGFyZVwiKVxuaWYoc2hhcmVEYXRhKXtcbiAgICBIYW5kbGVyLnNoYXJlTGlzdGVuZXIoJyNuYXZiYXItYnV0dG9uLXNoYXJlJywgJ251bGwnLCBzaGFyZURhdGEuZGF0YXNldC50ZXh0LCAgc2hhcmVEYXRhLmRhdGFzZXQudGV4dCwgIHNoYXJlRGF0YS5kYXRhc2V0LnVybCk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoZXZlbnQpID0+IHtcbiAgICBVbmljb3JuLmFkZEV2ZW50TGlzdGVuZXIoXCJ1cGRhdGVkXCIsIChjb21wb25lbnQpID0+e1xuXG4gICAgICAgIHN3aXRjaChjb21wb25lbnQubmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnYXBwJzpcbiAgICAgICAgICAgICAgICAvLyBkYXRhIHNvdXJjZSBvZmYgY2FudmFzXG4gICAgICAgICAgICAgICAgaWYgKGVkaXRpbmdfZmlsZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0T2ZmQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJPRkZDQU5WQVNcIik7XG4gICAgICAgICAgICAgICAgICAgIC8vdmFyIGJzb2MgPSBib290c3RyYXAuT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2UodGVzdE9mZkNhbnZhcyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBic29jID0gT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2UodGVzdE9mZkNhbnZhcyk7XG4gICAgICAgICAgICAgICAgICAgIGJzb2MuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGRyb3Bkb3duIG1lbnVzXG4gICAgICAgICAgICAgICAgdmFyIHRtZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFiLW1vcmUtZHJvcGRvd25cIik7XG4gICAgICAgICAgICAgICAgaWYgKHRtZCkge1xuICAgICAgICAgICAgICAgICAgICAvL2Jvb3RzdHJhcC5Ecm9wZG93bi5nZXRPckNyZWF0ZUluc3RhbmNlKHRtZCkuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAvL2Jvb3RzdHJhcC5Ecm9wZG93bi5nZXRPckNyZWF0ZUluc3RhbmNlKHRtZCk7XG4gICAgICAgICAgICAgICAgICAgIERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodG1kKS5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodG1kKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgdXNkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyLXNldHRpbmdzLWRyb3Bkb3duXCIpO1xuICAgICAgICAgICAgICAgIGlmICh1c2QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9ib290c3RyYXAuRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh1c2QpLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgLy9ib290c3RyYXAuRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh1c2QpO1xuICAgICAgICAgICAgICAgICAgICBEcm9wZG93bi5nZXRPckNyZWF0ZUluc3RhbmNlKHVzZCkuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICBEcm9wZG93bi5nZXRPckNyZWF0ZUluc3RhbmNlKHVzZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9kcm9wem9uZVxuICAgICAgICAgICAgICAgIHZhciBkekVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3BcIik7XG4gICAgICAgICAgICAgICAgdmFyIG15RHJvcHpvbmU7XG4gICAgICAgICAgICAgICAgaWYgKGR6RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZHpFbGVtZW50LmRyb3B6b25lKSB7XG4gICAgICAgICAgICAgICAgICAgIGR6RWxlbWVudC5kcm9wem9uZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbXlEcm9wem9uZSA9IG5ldyBEcm9wem9uZShcIiNkcm9wXCIpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvL2Jvb3RzdHJhcCB0YWJsZSB0byBoYW5kbGUgcmV0dXJuIGZyb20gZmlsZSBlZGl0XG4gICAgICAgICAgICAgICAgLy9ib290c3RyYXAgdGFibGVcbiAgICAgICAgICAgICAgICAkKCcjdGFibGUnKS5ib290c3RyYXBUYWJsZSgpOyAvLyBpbml0IHZpYSBqYXZhc2NyaXB0XG5cbiAgICAgICAgICAgICAgICAvLyBkYXRhdGFibGUgbW9kYWxcbiAgICAgICAgICAgICAgICAvLyBhcHBlbmQgbW9kYWxzIHRvIHByZXZlbnQgei1sYXllciBpc3N1ZXNcbiAgICAgICAgICAgICAgICB2YXIgeXZtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcueXZtb2RhbCcpO1xuICAgICAgICAgICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5XCIpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeXZtb2RhbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZCh5dm1vZGFsc1tpXSk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBuYXZiYXIgc2hhcmVcbiAgICAgICAgICAgICAgICB2YXIgc2QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdmJhci1idXR0b24tc2hhcmVcIik7XG4gICAgICAgICAgICAgICAgaWYgKHNkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzaGFyZURhdGEgPSBzZC5kYXRhc2V0O1xuICAgICAgICAgICAgICAgICAgICBIYW5kbGVyLnNoYXJlTGlzdGVuZXIoJyNuYXZiYXItYnV0dG9uLXNoYXJlJywgJ251bGwnLCBzaGFyZURhdGEudGV4dCwgIHNoYXJlRGF0YS50ZXh0LCAgc2hhcmVEYXRhLnVybCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgLy8gbGlzdCBzY3JvbGxkb3duXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wb25lbnQuY3VycmVudEFjdGlvblF1ZXVlWzBdLnBhcnRpYWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQuY3VycmVudEFjdGlvblF1ZXVlWzBdLnBhcnRpYWxzW2ldLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBIYW5kbGVyLmxvYWRZVkNvbXBvbmVudHMoXCIjXCIuY29uY2F0KGNvbXBvbmVudC5jdXJyZW50QWN0aW9uUXVldWVbMF0ucGFydGlhbHNbaV0uaWQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjb21wb25lbnQuY3VycmVudEFjdGlvblF1ZXVlWzBdLnBhcnRpYWxzW2ldLnRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgSGFuZGxlci5sb2FkWVZDb21wb25lbnRzKFwiI1wiLmNvbmNhdChjb21wb25lbnQuY3VycmVudEFjdGlvblF1ZXVlWzBdLnBhcnRpYWxzW2ldLnRhcmdldCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbG9naW4nOlxuICAgICAgICAgICAgICAgIC8vIGFwcGVuZCBtb2RhbHMgdG8gcHJldmVudCB6LWxheWVyIGlzc3Vlc1xuICAgICAgICAgICAgICAgIHZhciB5dm1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy55dm1vZGFsJyk7XG4gICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIik7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB5dm1vZGFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKHl2bW9kYWxzW2ldKTsgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHVzZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlci1zZXR0aW5ncy1kcm9wZG93blwiKTtcbiAgICAgICAgICAgICAgICBpZiAodXNkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vYm9vdHN0cmFwLkRyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodXNkKS5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vYm9vdHN0cmFwLkRyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodXNkKTtcbiAgICAgICAgICAgICAgICAgICAgRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh1c2QpLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh1c2QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Zpeic6XG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICB2YXIgYXJyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInlvdVZpek9uVXBkYXRlXCIpOyAvLyBvbmx5IHJlZnJlc2hlZCB2aXovc1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgYXJyLmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2YWwoYXJyW25dLmlubmVySFRNTCk7IC8vIHJ1biBzY3JpcHRcbiAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICAvL0hhbmRsZXIudml6SW5pdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGNvbXBvbmVudC5pZCkpO1xuICAgICAgICAgICAgICAgIC8vYWxlcnQoY29tcG9uZW50LnBhcmVudE5vZGUpO1xuICAgICAgICAgICAgICAgIC8vYWxlcnQoY29tcG9uZW50LmlkKTtcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KGNvbXBvbmVudC5yb290LnBhcmVudE5vZGUpO1xuICAgICAgICAgICAgICAgIEhhbmRsZXIudml6SW5pdChjb21wb25lbnQucm9vdC5wYXJlbnROb2RlKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAkKCcjdGFibGUnKS5ib290c3RyYXBUYWJsZSgpOyAvLyBpbml0IHZpYSBqYXZhc2NyaXB0XG5cbiAgICAgICAgICAgICAgICAvLyBkYXRhdGFibGUgbW9kYWxcbiAgICAgICAgICAgICAgICAvLyBhcHBlbmQgbW9kYWxzIHRvIHByZXZlbnQgei1sYXllciBpc3N1ZXNcbiAgICAgICAgICAgICAgICB2YXIgeXZtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcueXZtb2RhbCcpO1xuICAgICAgICAgICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5XCIpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeXZtb2RhbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZCh5dm1vZGFsc1tpXSk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgeXZsaXN0ZW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS15di1saXN0ZW5lcj1cInZpelwiXScpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB5dmxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0ID0geXZsaXN0ZW5lcnNbaV0uZGF0YXNldC55dlRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0geXZsaXN0ZW5lcnNbaV0uZGF0YXNldC55dlZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICBpZihlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RhdGF0YWJsZSc6XG4gICAgICAgICAgICAgICAgLy9ib290c3RyYXAgdGFibGVcbiAgICAgICAgICAgICAgICAkKCcjdGFibGUnKS5ib290c3RyYXBUYWJsZSgpOyAvLyBpbml0IHZpYSBqYXZhc2NyaXB0XG5cbiAgICAgICAgICAgICAgICAvLyBkYXRhdGFibGUgbW9kYWxcbiAgICAgICAgICAgICAgICAvLyBhcHBlbmQgbW9kYWxzIHRvIHByZXZlbnQgei1sYXllciBpc3N1ZXNcbiAgICAgICAgICAgICAgICB2YXIgeXZtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcueXZtb2RhbCcpO1xuICAgICAgICAgICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5XCIpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeXZtb2RhbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZCh5dm1vZGFsc1tpXSk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2dldG1vcmUnOlxuICAgICAgICAgICAgICAgIC8vIGRhdGF0YWJsZSBtb2RhbFxuICAgICAgICAgICAgICAgIC8vIGFwcGVuZCBtb2RhbHMgdG8gcHJldmVudCB6LWxheWVyIGlzc3Vlc1xuICAgICAgICAgICAgICAgIHZhciB5dm1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy55dm1vZGFsJyk7XG4gICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIik7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB5dm1vZGFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKHl2bW9kYWxzW2ldKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc291cmNlY29udHJvbCc6XG4gICAgICAgICAgICAgICAgLy8gZGF0YXRhYmxlIG1vZGFsXG4gICAgICAgICAgICAgICAgLy8gYXBwZW5kIG1vZGFscyB0byBwcmV2ZW50IHotbGF5ZXIgaXNzdWVzXG4gICAgICAgICAgICAgICAgdmFyIHl2bW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnl2bW9kYWwnKTtcbiAgICAgICAgICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHl2bW9kYWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoeXZtb2RhbHNbaV0pOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgRHJvcHpvbmUub3B0aW9ucy5kcm9wID0geyAvLyBjYW1lbGl6ZWQgdmVyc2lvbiBvZiB0aGUgYGlkYFxuICAgICAgICAgICAgICAgICAgICBwYXJhbU5hbWU6IFwiZG9jdW1lbnRcIiwgLy8gVGhlIG5hbWUgdGhhdCB3aWxsIGJlIHVzZWQgdG8gdHJhbnNmZXIgdGhlIGZpbGVcbiAgICAgICAgICAgICAgICAgICAgbWF4RmlsZXNpemU6IDIsIC8vIE1CXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3ZpenJlcG9ydCc6XG4gICAgICAgICAgICAgICAgLy8gZGF0YXRhYmxlIG1vZGFsXG4gICAgICAgICAgICAgICAgLy8gYXBwZW5kIG1vZGFscyB0byBwcmV2ZW50IHotbGF5ZXIgaXNzdWVzXG4gICAgICAgICAgICAgICAgdmFyIHl2bW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnl2bW9kYWwnKTtcbiAgICAgICAgICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHl2bW9kYWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoeXZtb2RhbHNbaV0pOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZmlsZWNvbnRyb2wnOlxuICAgICAgICAgICAgICAgICQoJyN0YWJsZScpLmJvb3RzdHJhcFRhYmxlKCk7IC8vIGluaXQgdmlhIGphdmFzY3JpcHRcbiAgICAgICAgICAgICAgICAvLyBkYXRhdGFibGUgbW9kYWxcbiAgICAgICAgICAgICAgICAvLyBhcHBlbmQgbW9kYWxzIHRvIHByZXZlbnQgei1sYXllciBpc3N1ZXNcbiAgICAgICAgICAgICAgICB2YXIgeXZtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcueXZtb2RhbCcpO1xuICAgICAgICAgICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5XCIpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeXZtb2RhbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZCh5dm1vZGFsc1tpXSk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgIH0pO1xufSk7XG4gIl0sIm5hbWVzIjpbIk5BTUUiLCJEQVRBX0tFWSIsIkVWRU5UX0tFWSIsIkVWRU5UX0NMT1NFIiwiRVZFTlRfQ0xPU0VEIiwiQ0xBU1NfTkFNRV9GQURFIiwiQ0xBU1NfTkFNRV9TSE9XIiwiQWxlcnQiLCJCYXNlQ29tcG9uZW50IiwiY2xvc2UiLCJjbG9zZUV2ZW50IiwiRXZlbnRIYW5kbGVyIiwidHJpZ2dlciIsIl9lbGVtZW50IiwiZGVmYXVsdFByZXZlbnRlZCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImlzQW5pbWF0ZWQiLCJjb250YWlucyIsIl9xdWV1ZUNhbGxiYWNrIiwiX2Rlc3Ryb3lFbGVtZW50IiwiZGlzcG9zZSIsImpRdWVyeUludGVyZmFjZSIsImNvbmZpZyIsImVhY2giLCJkYXRhIiwiZ2V0T3JDcmVhdGVJbnN0YW5jZSIsInVuZGVmaW5lZCIsInN0YXJ0c1dpdGgiLCJUeXBlRXJyb3IiLCJlbmFibGVEaXNtaXNzVHJpZ2dlciIsImRlZmluZUpRdWVyeVBsdWdpbiIsIlZFUlNJT04iLCJDb25maWciLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZXRFbGVtZW50IiwiX2NvbmZpZyIsIl9nZXRDb25maWciLCJEYXRhIiwic2V0Iiwib2ZmIiwicHJvcGVydHlOYW1lIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImNhbGxiYWNrIiwiZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbiIsIl9tZXJnZUNvbmZpZ09iaiIsIl9jb25maWdBZnRlck1lcmdlIiwiX3R5cGVDaGVja0NvbmZpZyIsImdldEluc3RhbmNlIiwiZ2V0IiwiZXZlbnROYW1lIiwibmFtZSIsIkRBVEFfQVBJX0tFWSIsIkNMQVNTX05BTUVfQUNUSVZFIiwiU0VMRUNUT1JfREFUQV9UT0dHTEUiLCJFVkVOVF9DTElDS19EQVRBX0FQSSIsIkJ1dHRvbiIsInRvZ2dsZSIsInNldEF0dHJpYnV0ZSIsIm9uIiwiZG9jdW1lbnQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYnV0dG9uIiwidGFyZ2V0IiwiY2xvc2VzdCIsIkFSUk9XX0xFRlRfS0VZIiwiQVJST1dfUklHSFRfS0VZIiwiVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCIsIk9SREVSX05FWFQiLCJPUkRFUl9QUkVWIiwiRElSRUNUSU9OX0xFRlQiLCJESVJFQ1RJT05fUklHSFQiLCJFVkVOVF9TTElERSIsIkVWRU5UX1NMSUQiLCJFVkVOVF9LRVlET1dOIiwiRVZFTlRfTU9VU0VFTlRFUiIsIkVWRU5UX01PVVNFTEVBVkUiLCJFVkVOVF9EUkFHX1NUQVJUIiwiRVZFTlRfTE9BRF9EQVRBX0FQSSIsIkNMQVNTX05BTUVfQ0FST1VTRUwiLCJDTEFTU19OQU1FX1NMSURFIiwiQ0xBU1NfTkFNRV9FTkQiLCJDTEFTU19OQU1FX1NUQVJUIiwiQ0xBU1NfTkFNRV9ORVhUIiwiQ0xBU1NfTkFNRV9QUkVWIiwiU0VMRUNUT1JfQUNUSVZFIiwiU0VMRUNUT1JfSVRFTSIsIlNFTEVDVE9SX0FDVElWRV9JVEVNIiwiU0VMRUNUT1JfSVRFTV9JTUciLCJTRUxFQ1RPUl9JTkRJQ0FUT1JTIiwiU0VMRUNUT1JfREFUQV9TTElERSIsIlNFTEVDVE9SX0RBVEFfUklERSIsIktFWV9UT19ESVJFQ1RJT04iLCJEZWZhdWx0IiwiaW50ZXJ2YWwiLCJrZXlib2FyZCIsInBhdXNlIiwicmlkZSIsInRvdWNoIiwid3JhcCIsIkRlZmF1bHRUeXBlIiwiQ2Fyb3VzZWwiLCJfaW50ZXJ2YWwiLCJfYWN0aXZlRWxlbWVudCIsIl9pc1NsaWRpbmciLCJ0b3VjaFRpbWVvdXQiLCJfc3dpcGVIZWxwZXIiLCJfaW5kaWNhdG9yc0VsZW1lbnQiLCJTZWxlY3RvckVuZ2luZSIsImZpbmRPbmUiLCJfYWRkRXZlbnRMaXN0ZW5lcnMiLCJjeWNsZSIsIm5leHQiLCJfc2xpZGUiLCJuZXh0V2hlblZpc2libGUiLCJoaWRkZW4iLCJpc1Zpc2libGUiLCJwcmV2IiwidHJpZ2dlclRyYW5zaXRpb25FbmQiLCJfY2xlYXJJbnRlcnZhbCIsIl91cGRhdGVJbnRlcnZhbCIsInNldEludGVydmFsIiwiX21heWJlRW5hYmxlQ3ljbGUiLCJvbmUiLCJ0byIsImluZGV4IiwiaXRlbXMiLCJfZ2V0SXRlbXMiLCJsZW5ndGgiLCJhY3RpdmVJbmRleCIsIl9nZXRJdGVtSW5kZXgiLCJfZ2V0QWN0aXZlIiwib3JkZXIiLCJkZWZhdWx0SW50ZXJ2YWwiLCJfa2V5ZG93biIsIlN3aXBlIiwiaXNTdXBwb3J0ZWQiLCJfYWRkVG91Y2hFdmVudExpc3RlbmVycyIsImltZyIsImZpbmQiLCJlbmRDYWxsQmFjayIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJzd2lwZUNvbmZpZyIsImxlZnRDYWxsYmFjayIsIl9kaXJlY3Rpb25Ub09yZGVyIiwicmlnaHRDYWxsYmFjayIsImVuZENhbGxiYWNrIiwidGVzdCIsInRhZ05hbWUiLCJkaXJlY3Rpb24iLCJrZXkiLCJpbmRleE9mIiwiX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQiLCJhY3RpdmVJbmRpY2F0b3IiLCJyZW1vdmVBdHRyaWJ1dGUiLCJuZXdBY3RpdmVJbmRpY2F0b3IiLCJhZGQiLCJlbGVtZW50SW50ZXJ2YWwiLCJOdW1iZXIiLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsImFjdGl2ZUVsZW1lbnQiLCJpc05leHQiLCJuZXh0RWxlbWVudCIsImdldE5leHRBY3RpdmVFbGVtZW50IiwibmV4dEVsZW1lbnRJbmRleCIsInRyaWdnZXJFdmVudCIsInJlbGF0ZWRUYXJnZXQiLCJfb3JkZXJUb0RpcmVjdGlvbiIsImZyb20iLCJzbGlkZUV2ZW50IiwiaXNDeWNsaW5nIiwiQm9vbGVhbiIsImRpcmVjdGlvbmFsQ2xhc3NOYW1lIiwib3JkZXJDbGFzc05hbWUiLCJyZWZsb3ciLCJjb21wbGV0ZUNhbGxCYWNrIiwiX2lzQW5pbWF0ZWQiLCJjbGVhckludGVydmFsIiwiaXNSVEwiLCJnZXRFbGVtZW50RnJvbVNlbGVjdG9yIiwiY2Fyb3VzZWwiLCJzbGlkZUluZGV4IiwiTWFuaXB1bGF0b3IiLCJnZXREYXRhQXR0cmlidXRlIiwid2luZG93IiwiY2Fyb3VzZWxzIiwiRVZFTlRfU0hPVyIsIkVWRU5UX1NIT1dOIiwiRVZFTlRfSElERSIsIkVWRU5UX0hJRERFTiIsIkNMQVNTX05BTUVfQ09MTEFQU0UiLCJDTEFTU19OQU1FX0NPTExBUFNJTkciLCJDTEFTU19OQU1FX0NPTExBUFNFRCIsIkNMQVNTX05BTUVfREVFUEVSX0NISUxEUkVOIiwiQ0xBU1NfTkFNRV9IT1JJWk9OVEFMIiwiV0lEVEgiLCJIRUlHSFQiLCJTRUxFQ1RPUl9BQ1RJVkVTIiwicGFyZW50IiwiQ29sbGFwc2UiLCJfaXNUcmFuc2l0aW9uaW5nIiwiX3RyaWdnZXJBcnJheSIsInRvZ2dsZUxpc3QiLCJlbGVtIiwic2VsZWN0b3IiLCJnZXRTZWxlY3RvckZyb21FbGVtZW50IiwiZmlsdGVyRWxlbWVudCIsImZpbHRlciIsImZvdW5kRWxlbWVudCIsInB1c2giLCJfaW5pdGlhbGl6ZUNoaWxkcmVuIiwiX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyIsIl9pc1Nob3duIiwiaGlkZSIsInNob3ciLCJhY3RpdmVDaGlsZHJlbiIsIl9nZXRGaXJzdExldmVsQ2hpbGRyZW4iLCJtYXAiLCJzdGFydEV2ZW50IiwiYWN0aXZlSW5zdGFuY2UiLCJkaW1lbnNpb24iLCJfZ2V0RGltZW5zaW9uIiwic3R5bGUiLCJjb21wbGV0ZSIsImNhcGl0YWxpemVkRGltZW5zaW9uIiwidG9VcHBlckNhc2UiLCJzbGljZSIsInNjcm9sbFNpemUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjaGlsZHJlbiIsInNlbGVjdGVkIiwiaW5jbHVkZXMiLCJ0cmlnZ2VyQXJyYXkiLCJpc09wZW4iLCJkZWxlZ2F0ZVRhcmdldCIsInNlbGVjdG9yRWxlbWVudHMiLCJlbGVtZW50TWFwIiwiTWFwIiwiaW5zdGFuY2UiLCJoYXMiLCJpbnN0YW5jZU1hcCIsInNpemUiLCJjb25zb2xlIiwiZXJyb3IiLCJBcnJheSIsImtleXMiLCJkZWxldGUiLCJuYW1lc3BhY2VSZWdleCIsInN0cmlwTmFtZVJlZ2V4Iiwic3RyaXBVaWRSZWdleCIsImV2ZW50UmVnaXN0cnkiLCJ1aWRFdmVudCIsImN1c3RvbUV2ZW50cyIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwibmF0aXZlRXZlbnRzIiwiU2V0IiwibWFrZUV2ZW50VWlkIiwidWlkIiwiZ2V0RWxlbWVudEV2ZW50cyIsImJvb3RzdHJhcEhhbmRsZXIiLCJmbiIsImhhbmRsZXIiLCJoeWRyYXRlT2JqIiwib25lT2ZmIiwidHlwZSIsImFwcGx5IiwiYm9vdHN0cmFwRGVsZWdhdGlvbkhhbmRsZXIiLCJkb21FbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJlbnROb2RlIiwiZG9tRWxlbWVudCIsImZpbmRIYW5kbGVyIiwiZXZlbnRzIiwiY2FsbGFibGUiLCJkZWxlZ2F0aW9uU2VsZWN0b3IiLCJ2YWx1ZXMiLCJub3JtYWxpemVQYXJhbWV0ZXJzIiwib3JpZ2luYWxUeXBlRXZlbnQiLCJkZWxlZ2F0aW9uRnVuY3Rpb24iLCJpc0RlbGVnYXRlZCIsInR5cGVFdmVudCIsImdldFR5cGVFdmVudCIsImFkZEhhbmRsZXIiLCJ3cmFwRnVuY3Rpb24iLCJjYWxsIiwiaGFuZGxlcnMiLCJwcmV2aW91c0Z1bmN0aW9uIiwicmVwbGFjZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVIYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyIsIm5hbWVzcGFjZSIsInN0b3JlRWxlbWVudEV2ZW50IiwiaGFuZGxlcktleSIsImluTmFtZXNwYWNlIiwiaXNOYW1lc3BhY2UiLCJlbGVtZW50RXZlbnQiLCJrZXlIYW5kbGVycyIsImFyZ3MiLCIkIiwiZ2V0alF1ZXJ5IiwialF1ZXJ5RXZlbnQiLCJidWJibGVzIiwibmF0aXZlRGlzcGF0Y2giLCJFdmVudCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwiaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJldnQiLCJjYW5jZWxhYmxlIiwiZGlzcGF0Y2hFdmVudCIsIm9iaiIsIm1ldGEiLCJ2YWx1ZSIsImVudHJpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsIm5vcm1hbGl6ZURhdGEiLCJ0b1N0cmluZyIsIkpTT04iLCJwYXJzZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIm5vcm1hbGl6ZURhdGFLZXkiLCJjaHIiLCJ0b0xvd2VyQ2FzZSIsInNldERhdGFBdHRyaWJ1dGUiLCJyZW1vdmVEYXRhQXR0cmlidXRlIiwiZ2V0RGF0YUF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwiYnNLZXlzIiwiZGF0YXNldCIsInB1cmVLZXkiLCJjaGFyQXQiLCJkb2N1bWVudEVsZW1lbnQiLCJjb25jYXQiLCJFbGVtZW50IiwicHJvdG90eXBlIiwicXVlcnlTZWxlY3RvciIsImNoaWxkIiwibWF0Y2hlcyIsInBhcmVudHMiLCJhbmNlc3RvciIsInByZXZpb3VzIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm5leHRFbGVtZW50U2libGluZyIsImZvY3VzYWJsZUNoaWxkcmVuIiwiZm9jdXNhYmxlcyIsImpvaW4iLCJlbCIsImlzRGlzYWJsZWQiLCJFU0NBUEVfS0VZIiwiVEFCX0tFWSIsIkFSUk9XX1VQX0tFWSIsIkFSUk9XX0RPV05fS0VZIiwiUklHSFRfTU9VU0VfQlVUVE9OIiwiRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSIsIkVWRU5UX0tFWVVQX0RBVEFfQVBJIiwiQ0xBU1NfTkFNRV9EUk9QVVAiLCJDTEFTU19OQU1FX0RST1BFTkQiLCJDTEFTU19OQU1FX0RST1BTVEFSVCIsIkNMQVNTX05BTUVfRFJPUFVQX0NFTlRFUiIsIkNMQVNTX05BTUVfRFJPUERPV05fQ0VOVEVSIiwiU0VMRUNUT1JfREFUQV9UT0dHTEVfU0hPV04iLCJTRUxFQ1RPUl9NRU5VIiwiU0VMRUNUT1JfTkFWQkFSIiwiU0VMRUNUT1JfTkFWQkFSX05BViIsIlNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMiLCJQTEFDRU1FTlRfVE9QIiwiUExBQ0VNRU5UX1RPUEVORCIsIlBMQUNFTUVOVF9CT1RUT00iLCJQTEFDRU1FTlRfQk9UVE9NRU5EIiwiUExBQ0VNRU5UX1JJR0hUIiwiUExBQ0VNRU5UX0xFRlQiLCJQTEFDRU1FTlRfVE9QQ0VOVEVSIiwiUExBQ0VNRU5UX0JPVFRPTUNFTlRFUiIsImF1dG9DbG9zZSIsImJvdW5kYXJ5IiwiZGlzcGxheSIsIm9mZnNldCIsInBvcHBlckNvbmZpZyIsInJlZmVyZW5jZSIsIkRyb3Bkb3duIiwiX3BvcHBlciIsIl9wYXJlbnQiLCJfbWVudSIsIl9pbk5hdmJhciIsIl9kZXRlY3ROYXZiYXIiLCJzaG93RXZlbnQiLCJfY3JlYXRlUG9wcGVyIiwiYm9keSIsIm5vb3AiLCJmb2N1cyIsIl9jb21wbGV0ZUhpZGUiLCJkZXN0cm95IiwidXBkYXRlIiwiaGlkZUV2ZW50IiwiaXNFbGVtZW50IiwiUG9wcGVyIiwicmVmZXJlbmNlRWxlbWVudCIsIl9nZXRQb3BwZXJDb25maWciLCJjcmVhdGVQb3BwZXIiLCJfZ2V0UGxhY2VtZW50IiwicGFyZW50RHJvcGRvd24iLCJpc0VuZCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwidHJpbSIsIl9nZXRPZmZzZXQiLCJzcGxpdCIsInBvcHBlckRhdGEiLCJkZWZhdWx0QnNQb3BwZXJDb25maWciLCJwbGFjZW1lbnQiLCJtb2RpZmllcnMiLCJvcHRpb25zIiwiZW5hYmxlZCIsIl9zZWxlY3RNZW51SXRlbSIsImNsZWFyTWVudXMiLCJvcGVuVG9nZ2xlcyIsImNvbnRleHQiLCJjb21wb3NlZFBhdGgiLCJpc01lbnVUYXJnZXQiLCJjbGlja0V2ZW50IiwiZGF0YUFwaUtleWRvd25IYW5kbGVyIiwiaXNJbnB1dCIsImlzRXNjYXBlRXZlbnQiLCJpc1VwT3JEb3duRXZlbnQiLCJnZXRUb2dnbGVCdXR0b24iLCJzdG9wUHJvcGFnYXRpb24iLCJFVkVOVF9ISURFX1BSRVZFTlRFRCIsIkVWRU5UX1JFU0laRSIsIkVWRU5UX0NMSUNLX0RJU01JU1MiLCJFVkVOVF9NT1VTRURPV05fRElTTUlTUyIsIkVWRU5UX0tFWURPV05fRElTTUlTUyIsIkNMQVNTX05BTUVfT1BFTiIsIkNMQVNTX05BTUVfU1RBVElDIiwiT1BFTl9TRUxFQ1RPUiIsIlNFTEVDVE9SX0RJQUxPRyIsIlNFTEVDVE9SX01PREFMX0JPRFkiLCJiYWNrZHJvcCIsIk1vZGFsIiwiX2RpYWxvZyIsIl9iYWNrZHJvcCIsIl9pbml0aWFsaXplQmFja0Ryb3AiLCJfZm9jdXN0cmFwIiwiX2luaXRpYWxpemVGb2N1c1RyYXAiLCJfc2Nyb2xsQmFyIiwiU2Nyb2xsQmFySGVscGVyIiwiX2FkanVzdERpYWxvZyIsIl9zaG93RWxlbWVudCIsImRlYWN0aXZhdGUiLCJfaGlkZU1vZGFsIiwiaHRtbEVsZW1lbnQiLCJoYW5kbGVVcGRhdGUiLCJCYWNrZHJvcCIsIkZvY3VzVHJhcCIsInRyYXBFbGVtZW50IiwiYXBwZW5kIiwic2Nyb2xsVG9wIiwibW9kYWxCb2R5IiwidHJhbnNpdGlvbkNvbXBsZXRlIiwiYWN0aXZhdGUiLCJfdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbiIsImV2ZW50MiIsIl9yZXNldEFkanVzdG1lbnRzIiwicmVzZXQiLCJpc01vZGFsT3ZlcmZsb3dpbmciLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJpbml0aWFsT3ZlcmZsb3dZIiwib3ZlcmZsb3dZIiwic2Nyb2xsYmFyV2lkdGgiLCJnZXRXaWR0aCIsImlzQm9keU92ZXJmbG93aW5nIiwicHJvcGVydHkiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImFscmVhZHlPcGVuIiwiQ0xBU1NfTkFNRV9TSE9XSU5HIiwiQ0xBU1NfTkFNRV9ISURJTkciLCJDTEFTU19OQU1FX0JBQ0tEUk9QIiwic2Nyb2xsIiwiT2ZmY2FudmFzIiwiYmx1ciIsImNvbXBsZXRlQ2FsbGJhY2siLCJjbGlja0NhbGxiYWNrIiwiY2xhc3NOYW1lIiwicm9vdEVsZW1lbnQiLCJwb3NpdGlvbiIsIlNFTEVDVE9SX1RJVExFIiwiU0VMRUNUT1JfQ09OVEVOVCIsIlRvb2x0aXAiLCJjb250ZW50IiwidGVtcGxhdGUiLCJQb3BvdmVyIiwiX2lzV2l0aENvbnRlbnQiLCJfZ2V0VGl0bGUiLCJfZ2V0Q29udGVudCIsIl9nZXRDb250ZW50Rm9yVGVtcGxhdGUiLCJfcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24iLCJFVkVOVF9BQ1RJVkFURSIsIkVWRU5UX0NMSUNLIiwiQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNIiwiU0VMRUNUT1JfREFUQV9TUFkiLCJTRUxFQ1RPUl9UQVJHRVRfTElOS1MiLCJTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCIsIlNFTEVDVE9SX05BVl9MSU5LUyIsIlNFTEVDVE9SX05BVl9JVEVNUyIsIlNFTEVDVE9SX0xJU1RfSVRFTVMiLCJTRUxFQ1RPUl9MSU5LX0lURU1TIiwiU0VMRUNUT1JfRFJPUERPV04iLCJTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUiLCJyb290TWFyZ2luIiwic21vb3RoU2Nyb2xsIiwidGhyZXNob2xkIiwiU2Nyb2xsU3B5IiwiX3RhcmdldExpbmtzIiwiX29ic2VydmFibGVTZWN0aW9ucyIsIl9yb290RWxlbWVudCIsIl9hY3RpdmVUYXJnZXQiLCJfb2JzZXJ2ZXIiLCJfcHJldmlvdXNTY3JvbGxEYXRhIiwidmlzaWJsZUVudHJ5VG9wIiwicGFyZW50U2Nyb2xsVG9wIiwicmVmcmVzaCIsIl9pbml0aWFsaXplVGFyZ2V0c0FuZE9ic2VydmFibGVzIiwiX21heWJlRW5hYmxlU21vb3RoU2Nyb2xsIiwiZGlzY29ubmVjdCIsIl9nZXROZXdPYnNlcnZlciIsInNlY3Rpb24iLCJvYnNlcnZlIiwicGFyc2VGbG9hdCIsIm9ic2VydmFibGVTZWN0aW9uIiwiaGFzaCIsInJvb3QiLCJoZWlnaHQiLCJvZmZzZXRUb3AiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJfb2JzZXJ2ZXJDYWxsYmFjayIsInRhcmdldEVsZW1lbnQiLCJlbnRyeSIsImlkIiwiX3Byb2Nlc3MiLCJ1c2VyU2Nyb2xsc0Rvd24iLCJpc0ludGVyc2VjdGluZyIsIl9jbGVhckFjdGl2ZUNsYXNzIiwiZW50cnlJc0xvd2VyVGhhblByZXZpb3VzIiwidGFyZ2V0TGlua3MiLCJhbmNob3IiLCJfYWN0aXZhdGVQYXJlbnRzIiwibGlzdEdyb3VwIiwiaXRlbSIsImFjdGl2ZU5vZGVzIiwibm9kZSIsInNweSIsIkNMQVNTX0RST1BET1dOIiwiU0VMRUNUT1JfRFJPUERPV05fTUVOVSIsIk5PVF9TRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUiLCJTRUxFQ1RPUl9UQUJfUEFORUwiLCJTRUxFQ1RPUl9PVVRFUiIsIlNFTEVDVE9SX0lOTkVSIiwiU0VMRUNUT1JfSU5ORVJfRUxFTSIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFX0FDVElWRSIsIlRhYiIsIl9zZXRJbml0aWFsQXR0cmlidXRlcyIsIl9nZXRDaGlsZHJlbiIsImlubmVyRWxlbSIsIl9lbGVtSXNBY3RpdmUiLCJhY3RpdmUiLCJfZ2V0QWN0aXZlRWxlbSIsIl9kZWFjdGl2YXRlIiwiX2FjdGl2YXRlIiwicmVsYXRlZEVsZW0iLCJfdG9nZ2xlRHJvcERvd24iLCJuZXh0QWN0aXZlRWxlbWVudCIsInByZXZlbnRTY3JvbGwiLCJfc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMiLCJfc2V0SW5pdGlhbEF0dHJpYnV0ZXNPbkNoaWxkIiwiX2dldElubmVyRWxlbWVudCIsImlzQWN0aXZlIiwib3V0ZXJFbGVtIiwiX2dldE91dGVyRWxlbWVudCIsIl9zZXRJbml0aWFsQXR0cmlidXRlc09uVGFyZ2V0UGFuZWwiLCJvcGVuIiwiYXR0cmlidXRlIiwiaGFzQXR0cmlidXRlIiwiRVZFTlRfTU9VU0VPVkVSIiwiRVZFTlRfTU9VU0VPVVQiLCJFVkVOVF9GT0NVU0lOIiwiRVZFTlRfRk9DVVNPVVQiLCJDTEFTU19OQU1FX0hJREUiLCJhbmltYXRpb24iLCJhdXRvaGlkZSIsImRlbGF5IiwiVG9hc3QiLCJfdGltZW91dCIsIl9oYXNNb3VzZUludGVyYWN0aW9uIiwiX2hhc0tleWJvYXJkSW50ZXJhY3Rpb24iLCJfc2V0TGlzdGVuZXJzIiwiX2NsZWFyVGltZW91dCIsIl9tYXliZVNjaGVkdWxlSGlkZSIsImlzU2hvd24iLCJfb25JbnRlcmFjdGlvbiIsImlzSW50ZXJhY3RpbmciLCJESVNBTExPV0VEX0FUVFJJQlVURVMiLCJDTEFTU19OQU1FX01PREFMIiwiU0VMRUNUT1JfVE9PTFRJUF9JTk5FUiIsIlNFTEVDVE9SX01PREFMIiwiRVZFTlRfTU9EQUxfSElERSIsIlRSSUdHRVJfSE9WRVIiLCJUUklHR0VSX0ZPQ1VTIiwiVFJJR0dFUl9DTElDSyIsIlRSSUdHRVJfTUFOVUFMIiwiRVZFTlRfSU5TRVJURUQiLCJBdHRhY2htZW50TWFwIiwiQVVUTyIsIlRPUCIsIlJJR0hUIiwiQk9UVE9NIiwiTEVGVCIsImFsbG93TGlzdCIsIkRlZmF1bHRBbGxvd2xpc3QiLCJjb250YWluZXIiLCJjdXN0b21DbGFzcyIsImZhbGxiYWNrUGxhY2VtZW50cyIsImh0bWwiLCJzYW5pdGl6ZSIsInNhbml0aXplRm4iLCJ0aXRsZSIsIl9pc0VuYWJsZWQiLCJfaXNIb3ZlcmVkIiwiX2FjdGl2ZVRyaWdnZXIiLCJfdGVtcGxhdGVGYWN0b3J5IiwiX25ld0NvbnRlbnQiLCJ0aXAiLCJfZml4VGl0bGUiLCJlbmFibGUiLCJkaXNhYmxlIiwidG9nZ2xlRW5hYmxlZCIsImNsaWNrIiwiX2xlYXZlIiwiX2VudGVyIiwiX2hpZGVNb2RhbEhhbmRsZXIiLCJfZGlzcG9zZVBvcHBlciIsIkVycm9yIiwic2hhZG93Um9vdCIsImZpbmRTaGFkb3dSb290IiwiaXNJblRoZURvbSIsIm93bmVyRG9jdW1lbnQiLCJfZ2V0VGlwRWxlbWVudCIsIl9pc1dpdGhBY3RpdmVUcmlnZ2VyIiwiX2NyZWF0ZVRpcEVsZW1lbnQiLCJfZ2V0VGVtcGxhdGVGYWN0b3J5IiwidG9IdG1sIiwidGlwSWQiLCJnZXRVSUQiLCJzZXRDb250ZW50IiwiY2hhbmdlQ29udGVudCIsIlRlbXBsYXRlRmFjdG9yeSIsImV4dHJhQ2xhc3MiLCJfaW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0IiwiX2dldERlbGVnYXRlQ29uZmlnIiwiYXR0YWNobWVudCIsImFyZyIsInBoYXNlIiwic3RhdGUiLCJ0cmlnZ2VycyIsImV2ZW50SW4iLCJldmVudE91dCIsInRleHRDb250ZW50IiwiX3NldFRpbWVvdXQiLCJ0aW1lb3V0IiwiZGF0YUF0dHJpYnV0ZXMiLCJkYXRhQXR0cmlidXRlIiwiRVZFTlRfTU9VU0VET1dOIiwiX2lzQXBwZW5kZWQiLCJleGVjdXRlIiwiX2FwcGVuZCIsIl9nZXRFbGVtZW50IiwiX2VtdWxhdGVBbmltYXRpb24iLCJjcmVhdGVFbGVtZW50IiwiY29tcG9uZW50IiwibWV0aG9kIiwianNvbkNvbmZpZyIsImNvbmZpZ1R5cGVzIiwiZXhwZWN0ZWRUeXBlcyIsInZhbHVlVHlwZSIsInRvVHlwZSIsIlJlZ0V4cCIsIkVWRU5UX0tFWURPV05fVEFCIiwiVEFCX05BVl9GT1JXQVJEIiwiVEFCX05BVl9CQUNLV0FSRCIsImF1dG9mb2N1cyIsIl9pc0FjdGl2ZSIsIl9sYXN0VGFiTmF2RGlyZWN0aW9uIiwiX2hhbmRsZUZvY3VzaW4iLCJfaGFuZGxlS2V5ZG93biIsImVsZW1lbnRzIiwic2hpZnRLZXkiLCJNQVhfVUlEIiwiTUlMTElTRUNPTkRTX01VTFRJUExJRVIiLCJUUkFOU0lUSU9OX0VORCIsIm9iamVjdCIsIm1hdGNoIiwicHJlZml4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRTZWxlY3RvciIsImhyZWZBdHRyaWJ1dGUiLCJnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCIsInRyYW5zaXRpb25EdXJhdGlvbiIsInRyYW5zaXRpb25EZWxheSIsImZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uIiwiZmxvYXRUcmFuc2l0aW9uRGVsYXkiLCJqcXVlcnkiLCJub2RlVHlwZSIsImdldENsaWVudFJlY3RzIiwiZWxlbWVudElzVmlzaWJsZSIsImNsb3NlZERldGFpbHMiLCJzdW1tYXJ5IiwiTm9kZSIsIkVMRU1FTlRfTk9ERSIsImRpc2FibGVkIiwiYXR0YWNoU2hhZG93IiwiZ2V0Um9vdE5vZGUiLCJTaGFkb3dSb290Iiwib2Zmc2V0SGVpZ2h0IiwialF1ZXJ5IiwiRE9NQ29udGVudExvYWRlZENhbGxiYWNrcyIsIm9uRE9NQ29udGVudExvYWRlZCIsInJlYWR5U3RhdGUiLCJkaXIiLCJwbHVnaW4iLCJKUVVFUllfTk9fQ09ORkxJQ1QiLCJDb25zdHJ1Y3RvciIsIm5vQ29uZmxpY3QiLCJ0cmFuc2l0aW9uRWxlbWVudCIsIndhaXRGb3JUcmFuc2l0aW9uIiwiZHVyYXRpb25QYWRkaW5nIiwiZW11bGF0ZWREdXJhdGlvbiIsImNhbGxlZCIsImxpc3QiLCJzaG91bGRHZXROZXh0IiwiaXNDeWNsZUFsbG93ZWQiLCJsaXN0TGVuZ3RoIiwibWF4IiwibWluIiwidXJpQXR0cmlidXRlcyIsIkFSSUFfQVRUUklCVVRFX1BBVFRFUk4iLCJTQUZFX1VSTF9QQVRURVJOIiwiREFUQV9VUkxfUEFUVEVSTiIsImFsbG93ZWRBdHRyaWJ1dGUiLCJhbGxvd2VkQXR0cmlidXRlTGlzdCIsImF0dHJpYnV0ZU5hbWUiLCJub2RlTmFtZSIsIm5vZGVWYWx1ZSIsImF0dHJpYnV0ZVJlZ2V4Iiwic29tZSIsInJlZ2V4IiwiYSIsImFyZWEiLCJiIiwiYnIiLCJjb2wiLCJjb2RlIiwiZGl2IiwiZW0iLCJociIsImgxIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsImkiLCJsaSIsIm9sIiwicCIsInByZSIsInMiLCJzbWFsbCIsInNwYW4iLCJzdWIiLCJzdXAiLCJzdHJvbmciLCJ1IiwidWwiLCJzYW5pdGl6ZUh0bWwiLCJ1bnNhZmVIdG1sIiwic2FuaXRpemVGdW5jdGlvbiIsImRvbVBhcnNlciIsIkRPTVBhcnNlciIsImNyZWF0ZWREb2N1bWVudCIsInBhcnNlRnJvbVN0cmluZyIsImVsZW1lbnROYW1lIiwiYXR0cmlidXRlTGlzdCIsImFsbG93ZWRBdHRyaWJ1dGVzIiwiaW5uZXJIVE1MIiwiU0VMRUNUT1JfRklYRURfQ09OVEVOVCIsIlNFTEVDVE9SX1NUSUNLWV9DT05URU5UIiwiUFJPUEVSVFlfUEFERElORyIsIlBST1BFUlRZX01BUkdJTiIsImRvY3VtZW50V2lkdGgiLCJjbGllbnRXaWR0aCIsImFicyIsImlubmVyV2lkdGgiLCJ3aWR0aCIsIl9kaXNhYmxlT3ZlckZsb3ciLCJfc2V0RWxlbWVudEF0dHJpYnV0ZXMiLCJjYWxjdWxhdGVkVmFsdWUiLCJfcmVzZXRFbGVtZW50QXR0cmlidXRlcyIsImlzT3ZlcmZsb3dpbmciLCJfc2F2ZUluaXRpYWxBdHRyaWJ1dGUiLCJvdmVyZmxvdyIsInN0eWxlUHJvcGVydHkiLCJtYW5pcHVsYXRpb25DYWxsQmFjayIsInNldFByb3BlcnR5IiwiX2FwcGx5TWFuaXB1bGF0aW9uQ2FsbGJhY2siLCJhY3R1YWxWYWx1ZSIsInJlbW92ZVByb3BlcnR5IiwiY2FsbEJhY2siLCJzZWwiLCJFVkVOVF9UT1VDSFNUQVJUIiwiRVZFTlRfVE9VQ0hNT1ZFIiwiRVZFTlRfVE9VQ0hFTkQiLCJFVkVOVF9QT0lOVEVSRE9XTiIsIkVWRU5UX1BPSU5URVJVUCIsIlBPSU5URVJfVFlQRV9UT1VDSCIsIlBPSU5URVJfVFlQRV9QRU4iLCJDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQiLCJTV0lQRV9USFJFU0hPTEQiLCJfZGVsdGFYIiwiX3N1cHBvcnRQb2ludGVyRXZlbnRzIiwiUG9pbnRlckV2ZW50IiwiX2luaXRFdmVudHMiLCJfc3RhcnQiLCJ0b3VjaGVzIiwiY2xpZW50WCIsIl9ldmVudElzUG9pbnRlclBlblRvdWNoIiwiX2VuZCIsIl9oYW5kbGVTd2lwZSIsIl9tb3ZlIiwiYWJzRGVsdGFYIiwicG9pbnRlclR5cGUiLCJuYXZpZ2F0b3IiLCJtYXhUb3VjaFBvaW50cyIsIkRlZmF1bHRDb250ZW50VHlwZSIsImdldENvbnRlbnQiLCJoYXNDb250ZW50IiwiX2NoZWNrQ29udGVudCIsInRlbXBsYXRlV3JhcHBlciIsIl9tYXliZVNhbml0aXplIiwidGV4dCIsIl9zZXRDb250ZW50IiwidGVtcGxhdGVFbGVtZW50IiwiX3B1dEVsZW1lbnRJblRlbXBsYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==
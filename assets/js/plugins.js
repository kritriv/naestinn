!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis ? globalThis : e || self).bootstrap =
        t());
})(this, function () {
  "use strict";
  const s = new Map(),
    I = {
      set(e, t, i) {
        s.has(e) || s.set(e, new Map());
        e = s.get(e);
        e.has(t) || 0 === e.size
          ? e.set(t, i)
          : console.error(
              `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                Array.from(e.keys())[0]
              }.`
            );
      },
      get(e, t) {
        return (s.has(e) && s.get(e).get(t)) || null;
      },
      remove(e, t) {
        var i;
        s.has(e) && ((i = s.get(e)).delete(t), 0 === i.size) && s.delete(e);
      },
    },
    B = 1e3,
    N = "transitionend",
    R = (e) =>
      (e =
        e && window.CSS && window.CSS.escape
          ? e.replace(/#([^\s"#']+)/g, (e, t) => "#" + CSS.escape(t))
          : e),
    Y = (e) => {
      e.dispatchEvent(new Event(N));
    },
    r = (e) =>
      !(!e || "object" != typeof e) &&
      void 0 !== (e = void 0 !== e.jquery ? e[0] : e).nodeType,
    n = (e) =>
      r(e)
        ? e.jquery
          ? e[0]
          : e
        : "string" == typeof e && 0 < e.length
        ? document.querySelector(R(e))
        : null,
    a = (e) => {
      if (!r(e) || 0 === e.getClientRects().length) return !1;
      var t = "visible" === getComputedStyle(e).getPropertyValue("visibility"),
        i = e.closest("details:not([open])");
      if (i && i !== e) {
        e = e.closest("summary");
        if (e && e.parentNode !== i) return !1;
        if (null === e) return !1;
      }
      return t;
    },
    o = (e) =>
      !e ||
      e.nodeType !== Node.ELEMENT_NODE ||
      !!e.classList.contains("disabled") ||
      (void 0 !== e.disabled
        ? e.disabled
        : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")),
    X = (e) => {
      var t;
      return document.documentElement.attachShadow
        ? "function" == typeof e.getRootNode
          ? (t = e.getRootNode()) instanceof ShadowRoot
            ? t
            : null
          : e instanceof ShadowRoot
          ? e
          : e.parentNode
          ? X(e.parentNode)
          : null
        : null;
    },
    j = () => {},
    H = (e) => {
      e.offsetHeight;
    },
    q = () =>
      window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
        ? window.jQuery
        : null,
    W = [],
    l = () => "rtl" === document.documentElement.dir;
  var e = (s) => {
    var e;
    (e = () => {
      const e = q();
      if (e) {
        const t = s.NAME,
          i = e.fn[t];
        (e.fn[t] = s.jQueryInterface),
          (e.fn[t].Constructor = s),
          (e.fn[t].noConflict = () => ((e.fn[t] = i), s.jQueryInterface));
      }
    }),
      "loading" === document.readyState
        ? (W.length ||
            document.addEventListener("DOMContentLoaded", () => {
              for (const e of W) e();
            }),
          W.push(e))
        : e();
  };
  const d = (e, t = [], i = e) => ("function" == typeof e ? e(...t) : i),
    $ = (i, s, e = !0) => {
      if (e) {
        e =
          ((e) => {
            if (!e) return 0;
            let { transitionDuration: t, transitionDelay: i } =
              window.getComputedStyle(e);
            var e = Number.parseFloat(t),
              s = Number.parseFloat(i);
            return e || s
              ? ((t = t.split(",")[0]),
                (i = i.split(",")[0]),
                (Number.parseFloat(t) + Number.parseFloat(i)) * B)
              : 0;
          })(s) + 5;
        let t = !1;
        const n = ({ target: e }) => {
          e === s && ((t = !0), s.removeEventListener(N, n), d(i));
        };
        s.addEventListener(N, n),
          setTimeout(() => {
            t || Y(s);
          }, e);
      } else d(i);
    },
    G = (e, t, i, s) => {
      var n = e.length;
      let r = e.indexOf(t);
      return -1 === r
        ? !i && s
          ? e[n - 1]
          : e[0]
        : ((r += i ? 1 : -1),
          s && (r = (r + n) % n),
          e[Math.max(0, Math.min(r, n - 1))]);
    },
    V = /[^.]*(?=\..*)\.|.*/,
    U = /\..*/,
    K = /::\d+$/,
    Q = {};
  let Z = 1;
  const J = { mouseenter: "mouseover", mouseleave: "mouseout" },
    ee = new Set([
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll",
    ]);
  function te(e, t) {
    return (t && t + "::" + Z++) || e.uidEvent || Z++;
  }
  function ie(e) {
    var t = te(e);
    return (e.uidEvent = t), (Q[t] = Q[t] || {}), Q[t];
  }
  function se(e, t, i = null) {
    return Object.values(e).find(
      (e) => e.callable === t && e.delegationSelector === i
    );
  }
  function ne(e, t, i) {
    var s = "string" == typeof t,
      t = (!s && t) || i;
    let n = oe(e);
    return [s, t, (n = ee.has(n) ? n : e)];
  }
  function re(s, n, r, a, o) {
    if ("string" == typeof n && s) {
      let [e, t, i] = ne(n, r, a);
      n in J &&
        (t =
          ((l = t),
          function (e) {
            if (
              !e.relatedTarget ||
              (e.relatedTarget !== e.delegateTarget &&
                !e.delegateTarget.contains(e.relatedTarget))
            )
              return l.call(this, e);
          }));
      var l,
        d,
        u,
        c,
        h,
        p,
        a = ie(s),
        a = a[i] || (a[i] = {}),
        f = se(a, t, e ? r : null);
      f
        ? (f.oneOff = f.oneOff && o)
        : ((f = te(t, n.replace(V, ""))),
          ((n = e
            ? ((c = s),
              (h = r),
              (p = t),
              function t(i) {
                var s = c.querySelectorAll(h);
                for (let e = i["target"]; e && e !== this; e = e.parentNode)
                  for (const n of s)
                    if (n === e)
                      return (
                        le(i, { delegateTarget: e }),
                        t.oneOff && m.off(c, i.type, h, p),
                        p.apply(e, [i])
                      );
              })
            : ((d = s),
              (u = t),
              function e(t) {
                return (
                  le(t, { delegateTarget: d }),
                  e.oneOff && m.off(d, t.type, u),
                  u.apply(d, [t])
                );
              })).delegationSelector = e ? r : null),
          (n.callable = t),
          (n.oneOff = o),
          (a[(n.uidEvent = f)] = n),
          s.addEventListener(i, n, e));
    }
  }
  function ae(e, t, i, s, n) {
    s = se(t[i], s, n);
    s && (e.removeEventListener(i, s, Boolean(n)), delete t[i][s.uidEvent]);
  }
  function oe(e) {
    return (e = e.replace(U, "")), J[e] || e;
  }
  const m = {
    on(e, t, i, s) {
      re(e, t, i, s, !1);
    },
    one(e, t, i, s) {
      re(e, t, i, s, !0);
    },
    off(e, t, i, s) {
      if ("string" == typeof t && e) {
        var n,
          r,
          [s, a, o] = ne(t, i, s),
          l = o !== t,
          d = ie(e),
          u = d[o] || {},
          c = t.startsWith(".");
        if (void 0 !== a)
          return Object.keys(u).length
            ? void ae(e, d, o, a, s ? i : null)
            : void 0;
        if (c)
          for (const w of Object.keys(d)) {
            p = h = y = v = g = m = f = void 0;
            var h,
              p,
              f = e,
              m = d,
              g = w,
              v = t.slice(1),
              y = m[g] || {};
            for ([h, p] of Object.entries(y))
              h.includes(v) && ae(f, m, g, p.callable, p.delegationSelector);
          }
        for ([n, r] of Object.entries(u)) {
          var b = n.replace(K, "");
          (l && !t.includes(b)) ||
            ae(e, d, o, r.callable, r.delegationSelector);
        }
      }
    },
    trigger(e, t, i) {
      if ("string" != typeof t || !e) return null;
      var s = q();
      let n = null,
        r = !0,
        a = !0,
        o = !1;
      t !== oe(t) &&
        s &&
        ((n = s.Event(t, i)),
        s(e).trigger(n),
        (r = !n.isPropagationStopped()),
        (a = !n.isImmediatePropagationStopped()),
        (o = n.isDefaultPrevented()));
      s = le(new Event(t, { bubbles: r, cancelable: !0 }), i);
      return (
        o && s.preventDefault(),
        a && e.dispatchEvent(s),
        s.defaultPrevented && n && n.preventDefault(),
        s
      );
    },
  };
  function le(t, e = {}) {
    for (const [i, s] of Object.entries(e))
      try {
        t[i] = s;
      } catch (e) {
        Object.defineProperty(t, i, {
          configurable: !0,
          get() {
            return s;
          },
        });
      }
    return t;
  }
  function de(t) {
    if ("true" === t) return !0;
    if ("false" === t) return !1;
    if (t === Number(t).toString()) return Number(t);
    if ("" === t || "null" === t) return null;
    if ("string" != typeof t) return t;
    try {
      return JSON.parse(decodeURIComponent(t));
    } catch (e) {
      return t;
    }
  }
  function ue(e) {
    return e.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase());
  }
  const u = {
    setDataAttribute(e, t, i) {
      e.setAttribute("data-bs-" + ue(t), i);
    },
    removeDataAttribute(e, t) {
      e.removeAttribute("data-bs-" + ue(t));
    },
    getDataAttributes(t) {
      if (!t) return {};
      var i = {};
      for (const s of Object.keys(t.dataset).filter(
        (e) => e.startsWith("bs") && !e.startsWith("bsConfig")
      )) {
        let e = s.replace(/^bs/, "");
        i[(e = e.charAt(0).toLowerCase() + e.slice(1, e.length))] = de(
          t.dataset[s]
        );
      }
      return i;
    },
    getDataAttribute(e, t) {
      return de(e.getAttribute("data-bs-" + ue(t)));
    },
  };
  class ce {
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    _getConfig(e) {
      return (
        (e = this._mergeConfigObj(e)),
        (e = this._configAfterMerge(e)),
        this._typeCheckConfig(e),
        e
      );
    }
    _configAfterMerge(e) {
      return e;
    }
    _mergeConfigObj(e, t) {
      var i = r(t) ? u.getDataAttribute(t, "config") : {};
      return {
        ...this.constructor.Default,
        ...("object" == typeof i ? i : {}),
        ...(r(t) ? u.getDataAttributes(t) : {}),
        ...("object" == typeof e ? e : {}),
      };
    }
    _typeCheckConfig(e, t = this.constructor.DefaultType) {
      for (var [i, s] of Object.entries(t)) {
        var n = e[i],
          n = r(n)
            ? "element"
            : null == (n = n)
            ? "" + n
            : Object.prototype.toString
                .call(n)
                .match(/\s([a-z]+)/i)[1]
                .toLowerCase();
        if (!new RegExp(s).test(n))
          throw new TypeError(
            `${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${n}" but expected type "${s}".`
          );
      }
    }
  }
  class t extends ce {
    constructor(e, t) {
      super(),
        (e = n(e)) &&
          ((this._element = e),
          (this._config = this._getConfig(t)),
          I.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      I.remove(this._element, this.constructor.DATA_KEY),
        m.off(this._element, this.constructor.EVENT_KEY);
      for (const e of Object.getOwnPropertyNames(this)) this[e] = null;
    }
    _queueCallback(e, t, i = !0) {
      $(e, t, i);
    }
    _getConfig(e) {
      return (
        (e = this._mergeConfigObj(e, this._element)),
        (e = this._configAfterMerge(e)),
        this._typeCheckConfig(e),
        e
      );
    }
    static getInstance(e) {
      return I.get(n(e), this.DATA_KEY);
    }
    static getOrCreateInstance(e, t = {}) {
      return (
        this.getInstance(e) || new this(e, "object" == typeof t ? t : null)
      );
    }
    static get VERSION() {
      return "5.3.1";
    }
    static get DATA_KEY() {
      return "bs." + this.NAME;
    }
    static get EVENT_KEY() {
      return "." + this.DATA_KEY;
    }
    static eventName(e) {
      return "" + e + this.EVENT_KEY;
    }
  }
  const he = (t) => {
      let i = t.getAttribute("data-bs-target");
      if (!i || "#" === i) {
        let e = t.getAttribute("href");
        if (!e || (!e.includes("#") && !e.startsWith("."))) return null;
        e.includes("#") && !e.startsWith("#") && (e = "#" + e.split("#")[1]),
          (i = e && "#" !== e ? e.trim() : null);
      }
      return R(i);
    },
    c = {
      find(e, t = document.documentElement) {
        return [].concat(...Element.prototype.querySelectorAll.call(t, e));
      },
      findOne(e, t = document.documentElement) {
        return Element.prototype.querySelector.call(t, e);
      },
      children(e, t) {
        return [].concat(...e.children).filter((e) => e.matches(t));
      },
      parents(e, t) {
        var i = [];
        let s = e.parentNode.closest(t);
        for (; s; ) i.push(s), (s = s.parentNode.closest(t));
        return i;
      },
      prev(e, t) {
        let i = e.previousElementSibling;
        for (; i; ) {
          if (i.matches(t)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next(e, t) {
        let i = e.nextElementSibling;
        for (; i; ) {
          if (i.matches(t)) return [i];
          i = i.nextElementSibling;
        }
        return [];
      },
      focusableChildren(e) {
        var t = [
          "a",
          "button",
          "input",
          "textarea",
          "select",
          "details",
          "[tabindex]",
          '[contenteditable="true"]',
        ]
          .map((e) => e + ':not([tabindex^="-"])')
          .join(",");
        return this.find(t, e).filter((e) => !o(e) && a(e));
      },
      getSelectorFromElement(e) {
        e = he(e);
        return e && c.findOne(e) ? e : null;
      },
      getElementFromSelector(e) {
        e = he(e);
        return e ? c.findOne(e) : null;
      },
      getMultipleElementsFromSelector(e) {
        e = he(e);
        return e ? c.find(e) : [];
      },
    };
  var pe = (t, i = "hide") => {
    var e = "click.dismiss" + t.EVENT_KEY;
    const s = t.NAME;
    m.on(document, e, `[data-bs-dismiss="${s}"]`, function (e) {
      ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
        o(this) ||
          ((e = c.getElementFromSelector(this) || this.closest("." + s)),
          t.getOrCreateInstance(e)[i]());
    });
  };
  class fe extends t {
    static get NAME() {
      return "alert";
    }
    close() {
      var e;
      m.trigger(this._element, "close.bs.alert").defaultPrevented ||
        (this._element.classList.remove("show"),
        (e = this._element.classList.contains("fade")),
        this._queueCallback(() => this._destroyElement(), this._element, e));
    }
    _destroyElement() {
      this._element.remove(),
        m.trigger(this._element, "closed.bs.alert"),
        this.dispose();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        var e = fe.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  pe(fe, "close"), e(fe);
  const me = '[data-bs-toggle="button"]';
  class ge extends t {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute(
        "aria-pressed",
        this._element.classList.toggle("active")
      );
    }
    static jQueryInterface(t) {
      return this.each(function () {
        var e = ge.getOrCreateInstance(this);
        "toggle" === t && e[t]();
      });
    }
  }
  m.on(document, "click.bs.button.data-api", me, (e) => {
    e.preventDefault();
    e = e.target.closest(me);
    ge.getOrCreateInstance(e).toggle();
  }),
    e(ge);
  const i = ".bs.swipe",
    ve =
      (i,
      i,
      i,
      i,
      i,
      { endCallback: null, leftCallback: null, rightCallback: null }),
    ye = {
      endCallback: "(function|null)",
      leftCallback: "(function|null)",
      rightCallback: "(function|null)",
    };
  class be extends ce {
    constructor(e, t) {
      super(),
        (this._element = e) &&
          be.isSupported() &&
          ((this._config = this._getConfig(t)),
          (this._deltaX = 0),
          (this._supportPointerEvents = Boolean(window.PointerEvent)),
          this._initEvents());
    }
    static get Default() {
      return ve;
    }
    static get DefaultType() {
      return ye;
    }
    static get NAME() {
      return "swipe";
    }
    dispose() {
      m.off(this._element, i);
    }
    _start(e) {
      this._supportPointerEvents
        ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX)
        : (this._deltaX = e.touches[0].clientX);
    }
    _end(e) {
      this._eventIsPointerPenTouch(e) &&
        (this._deltaX = e.clientX - this._deltaX),
        this._handleSwipe(),
        d(this._config.endCallback);
    }
    _move(e) {
      this._deltaX =
        e.touches && 1 < e.touches.length
          ? 0
          : e.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      var e = Math.abs(this._deltaX);
      e <= 40 ||
        ((e = e / this._deltaX),
        (this._deltaX = 0),
        e && d(0 < e ? this._config.rightCallback : this._config.leftCallback));
    }
    _initEvents() {
      this._supportPointerEvents
        ? (m.on(this._element, "pointerdown.bs.swipe", (e) => this._start(e)),
          m.on(this._element, "pointerup.bs.swipe", (e) => this._end(e)),
          this._element.classList.add("pointer-event"))
        : (m.on(this._element, "touchstart.bs.swipe", (e) => this._start(e)),
          m.on(this._element, "touchmove.bs.swipe", (e) => this._move(e)),
          m.on(this._element, "touchend.bs.swipe", (e) => this._end(e)));
    }
    _eventIsPointerPenTouch(e) {
      return (
        this._supportPointerEvents &&
        ("pen" === e.pointerType || "touch" === e.pointerType)
      );
    }
    static isSupported() {
      return (
        "ontouchstart" in document.documentElement ||
        0 < navigator.maxTouchPoints
      );
    }
  }
  var h = ".bs.carousel";
  const we = "next",
    p = "prev",
    f = "left",
    _e = "right",
    De = "slid" + h;
  const xe = "carousel",
    Ee = "active",
    Ce = ".active",
    Te = ".carousel-item";
  Ce, Te;
  const Se = { ArrowLeft: _e, ArrowRight: f },
    Ae = {
      interval: 5e3,
      keyboard: !0,
      pause: "hover",
      ride: !1,
      touch: !0,
      wrap: !0,
    },
    Me = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      pause: "(string|boolean)",
      ride: "(boolean|string)",
      touch: "boolean",
      wrap: "boolean",
    };
  class ke extends t {
    constructor(e, t) {
      super(e, t),
        (this._interval = null),
        (this._activeElement = null),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this._swipeHelper = null),
        (this._indicatorsElement = c.findOne(
          ".carousel-indicators",
          this._element
        )),
        this._addEventListeners(),
        this._config.ride === xe && this.cycle();
    }
    static get Default() {
      return Ae;
    }
    static get DefaultType() {
      return Me;
    }
    static get NAME() {
      return "carousel";
    }
    next() {
      this._slide(we);
    }
    nextWhenVisible() {
      !document.hidden && a(this._element) && this.next();
    }
    prev() {
      this._slide(p);
    }
    pause() {
      this._isSliding && Y(this._element), this._clearInterval();
    }
    cycle() {
      this._clearInterval(),
        this._updateInterval(),
        (this._interval = setInterval(
          () => this.nextWhenVisible(),
          this._config.interval
        ));
    }
    _maybeEnableCycle() {
      this._config.ride &&
        (this._isSliding
          ? m.one(this._element, De, () => this.cycle())
          : this.cycle());
    }
    to(e) {
      var t,
        i = this._getItems();
      e > i.length - 1 ||
        e < 0 ||
        (this._isSliding
          ? m.one(this._element, De, () => this.to(e))
          : (t = this._getItemIndex(this._getActive())) !== e &&
            ((t = t < e ? we : p), this._slide(t, i[e])));
    }
    dispose() {
      this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
    }
    _configAfterMerge(e) {
      return (e.defaultInterval = e.interval), e;
    }
    _addEventListeners() {
      this._config.keyboard &&
        m.on(this._element, "keydown.bs.carousel", (e) => this._keydown(e)),
        "hover" === this._config.pause &&
          (m.on(this._element, "mouseenter.bs.carousel", () => this.pause()),
          m.on(this._element, "mouseleave.bs.carousel", () =>
            this._maybeEnableCycle()
          )),
        this._config.touch &&
          be.isSupported() &&
          this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      for (const t of c.find(".carousel-item img", this._element))
        m.on(t, "dragstart.bs.carousel", (e) => e.preventDefault());
      var e = {
        leftCallback: () => this._slide(this._directionToOrder(f)),
        rightCallback: () => this._slide(this._directionToOrder(_e)),
        endCallback: () => {
          "hover" === this._config.pause &&
            (this.pause(),
            this.touchTimeout && clearTimeout(this.touchTimeout),
            (this.touchTimeout = setTimeout(
              () => this._maybeEnableCycle(),
              500 + this._config.interval
            )));
        },
      };
      this._swipeHelper = new be(this._element, e);
    }
    _keydown(e) {
      var t;
      /input|textarea/i.test(e.target.tagName) ||
        ((t = Se[e.key]) &&
          (e.preventDefault(), this._slide(this._directionToOrder(t))));
    }
    _getItemIndex(e) {
      return this._getItems().indexOf(e);
    }
    _setActiveIndicatorElement(e) {
      var t;
      this._indicatorsElement &&
        ((t = c.findOne(Ce, this._indicatorsElement)).classList.remove(Ee),
        t.removeAttribute("aria-current"),
        (t = c.findOne(
          `[data-bs-slide-to="${e}"]`,
          this._indicatorsElement
        ))) &&
        (t.classList.add(Ee), t.setAttribute("aria-current", "true"));
    }
    _updateInterval() {
      var e = this._activeElement || this._getActive();
      e &&
        ((e = Number.parseInt(e.getAttribute("data-bs-interval"), 10)),
        (this._config.interval = e || this._config.defaultInterval));
    }
    _slide(t, e = null) {
      if (!this._isSliding) {
        const s = this._getActive();
        var i = t === we;
        const n = e || G(this._getItems(), s, i, this._config.wrap);
        if (n !== s) {
          const r = this._getItemIndex(n),
            a = (e) =>
              m.trigger(this._element, e, {
                relatedTarget: n,
                direction: this._orderToDirection(t),
                from: this._getItemIndex(s),
                to: r,
              });
          e = a("slide.bs.carousel");
          if (!e.defaultPrevented && s && n) {
            e = Boolean(this._interval);
            this.pause(),
              (this._isSliding = !0),
              this._setActiveIndicatorElement(r),
              (this._activeElement = n);
            const o = i ? "carousel-item-start" : "carousel-item-end",
              l = i ? "carousel-item-next" : "carousel-item-prev";
            n.classList.add(l), H(n), s.classList.add(o), n.classList.add(o);
            this._queueCallback(
              () => {
                n.classList.remove(o, l),
                  n.classList.add(Ee),
                  s.classList.remove(Ee, l, o),
                  (this._isSliding = !1),
                  a(De);
              },
              s,
              this._isAnimated()
            ),
              e && this.cycle();
          }
        }
      }
    }
    _isAnimated() {
      return this._element.classList.contains("slide");
    }
    _getActive() {
      return c.findOne(".active.carousel-item", this._element);
    }
    _getItems() {
      return c.find(Te, this._element);
    }
    _clearInterval() {
      this._interval &&
        (clearInterval(this._interval), (this._interval = null));
    }
    _directionToOrder(e) {
      return l() ? (e === f ? p : we) : e === f ? we : p;
    }
    _orderToDirection(e) {
      return l() ? (e === p ? f : _e) : e === p ? _e : f;
    }
    static jQueryInterface(t) {
      return this.each(function () {
        var e = ke.getOrCreateInstance(this, t);
        if ("number" == typeof t) e.to(t);
        else if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  m.on(
    document,
    "click.bs.carousel.data-api",
    "[data-bs-slide], [data-bs-slide-to]",
    function (e) {
      var t = c.getElementFromSelector(this);
      t &&
        t.classList.contains(xe) &&
        (e.preventDefault(),
        (e = ke.getOrCreateInstance(t)),
        (t = this.getAttribute("data-bs-slide-to"))
          ? e.to(t)
          : "next" === u.getDataAttribute(this, "slide")
          ? e.next()
          : e.prev(),
        e._maybeEnableCycle());
    }
  ),
    m.on(window, "load.bs.carousel.data-api", () => {
      for (const e of c.find('[data-bs-ride="carousel"]'))
        ke.getOrCreateInstance(e);
    }),
    e(ke);
  const Pe = "show",
    g = "collapse",
    Fe = "collapsing",
    Le = (g, g, '[data-bs-toggle="collapse"]'),
    Oe = { parent: null, toggle: !0 },
    ze = { parent: "(null|element)", toggle: "boolean" };
  class Ie extends t {
    constructor(e, t) {
      super(e, t), (this._isTransitioning = !1), (this._triggerArray = []);
      for (const n of c.find(Le)) {
        var i = c.getSelectorFromElement(n),
          s = c.find(i).filter((e) => e === this._element);
        null !== i && s.length && this._triggerArray.push(n);
      }
      this._initializeChildren(),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return Oe;
    }
    static get DefaultType() {
      return ze;
    }
    static get NAME() {
      return "collapse";
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (!this._isTransitioning && !this._isShown()) {
        let e = [];
        if (
          !(e = this._config.parent
            ? this._getFirstLevelChildren(
                ".collapse.show, .collapse.collapsing"
              )
                .filter((e) => e !== this._element)
                .map((e) => Ie.getOrCreateInstance(e, { toggle: !1 }))
            : e).length ||
          !e[0]._isTransitioning
        ) {
          var t = m.trigger(this._element, "show.bs.collapse");
          if (!t.defaultPrevented) {
            for (const s of e) s.hide();
            const i = this._getDimension();
            this._element.classList.remove(g),
              this._element.classList.add(Fe),
              (this._element.style[i] = 0),
              this._addAriaAndCollapsedClass(this._triggerArray, !0),
              (this._isTransitioning = !0);
            t = "scroll" + (i[0].toUpperCase() + i.slice(1));
            this._queueCallback(
              () => {
                (this._isTransitioning = !1),
                  this._element.classList.remove(Fe),
                  this._element.classList.add(g, Pe),
                  (this._element.style[i] = ""),
                  m.trigger(this._element, "shown.bs.collapse");
              },
              this._element,
              !0
            ),
              (this._element.style[i] = this._element[t] + "px");
          }
        }
      }
    }
    hide() {
      if (!this._isTransitioning && this._isShown()) {
        var e = m.trigger(this._element, "hide.bs.collapse");
        if (!e.defaultPrevented) {
          e = this._getDimension();
          (this._element.style[e] =
            this._element.getBoundingClientRect()[e] + "px"),
            H(this._element),
            this._element.classList.add(Fe),
            this._element.classList.remove(g, Pe);
          for (const i of this._triggerArray) {
            var t = c.getElementFromSelector(i);
            t && !this._isShown(t) && this._addAriaAndCollapsedClass([i], !1);
          }
          this._isTransitioning = !0;
          (this._element.style[e] = ""),
            this._queueCallback(
              () => {
                (this._isTransitioning = !1),
                  this._element.classList.remove(Fe),
                  this._element.classList.add(g),
                  m.trigger(this._element, "hidden.bs.collapse");
              },
              this._element,
              !0
            );
        }
      }
    }
    _isShown(e = this._element) {
      return e.classList.contains(Pe);
    }
    _configAfterMerge(e) {
      return (e.toggle = Boolean(e.toggle)), (e.parent = n(e.parent)), e;
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal")
        ? "width"
        : "height";
    }
    _initializeChildren() {
      if (this._config.parent)
        for (const t of this._getFirstLevelChildren(Le)) {
          var e = c.getElementFromSelector(t);
          e && this._addAriaAndCollapsedClass([t], this._isShown(e));
        }
    }
    _getFirstLevelChildren(e) {
      const t = c.find(":scope .collapse .collapse", this._config.parent);
      return c.find(e, this._config.parent).filter((e) => !t.includes(e));
    }
    _addAriaAndCollapsedClass(e, t) {
      if (e.length)
        for (const i of e)
          i.classList.toggle("collapsed", !t),
            i.setAttribute("aria-expanded", t);
    }
    static jQueryInterface(t) {
      const i = {};
      return (
        "string" == typeof t && /show|hide/.test(t) && (i.toggle = !1),
        this.each(function () {
          var e = Ie.getOrCreateInstance(this, i);
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
            e[t]();
          }
        })
      );
    }
  }
  m.on(document, "click.bs.collapse.data-api", Le, function (e) {
    ("A" === e.target.tagName ||
      (e.delegateTarget && "A" === e.delegateTarget.tagName)) &&
      e.preventDefault();
    for (const t of c.getMultipleElementsFromSelector(this))
      Ie.getOrCreateInstance(t, { toggle: !1 }).toggle();
  }),
    e(Ie);
  var S = "top",
    A = "bottom",
    M = "right",
    k = "left",
    Be = "auto",
    P = [S, A, M, k],
    F = "start",
    Ne = "end",
    Re = "clippingParents",
    Ye = "viewport",
    Xe = "popper",
    je = "reference",
    He = P.reduce(function (e, t) {
      return e.concat([t + "-" + F, t + "-" + Ne]);
    }, []),
    qe = [].concat(P, [Be]).reduce(function (e, t) {
      return e.concat([t, t + "-" + F, t + "-" + Ne]);
    }, []),
    h = "beforeRead",
    We = "afterRead",
    $e = "beforeMain",
    Ge = "afterMain",
    Ve = "beforeWrite",
    Ue = "afterWrite",
    Ke = [h, "read", We, $e, "main", Ge, Ve, "write", Ue];
  function v(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function b(e) {
    var t;
    return null == e
      ? window
      : "[object Window]" !== e.toString()
      ? ((t = e.ownerDocument) && t.defaultView) || window
      : e;
  }
  function y(e) {
    return e instanceof b(e).Element || e instanceof Element;
  }
  function w(e) {
    return e instanceof b(e).HTMLElement || e instanceof HTMLElement;
  }
  function Qe(e) {
    return (
      "undefined" != typeof ShadowRoot &&
      (e instanceof b(e).ShadowRoot || e instanceof ShadowRoot)
    );
  }
  var Ze = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (e) {
      var n = e.state;
      Object.keys(n.elements).forEach(function (e) {
        var t = n.styles[e] || {},
          i = n.attributes[e] || {},
          s = n.elements[e];
        w(s) &&
          v(s) &&
          (Object.assign(s.style, t),
          Object.keys(i).forEach(function (e) {
            var t = i[e];
            !1 === t
              ? s.removeAttribute(e)
              : s.setAttribute(e, !0 === t ? "" : t);
          }));
      });
    },
    effect: function (e) {
      var s = e.state,
        n = {
          popper: {
            position: s.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      return (
        Object.assign(s.elements.popper.style, n.popper),
        (s.styles = n),
        s.elements.arrow && Object.assign(s.elements.arrow.style, n.arrow),
        function () {
          Object.keys(s.elements).forEach(function (e) {
            var t = s.elements[e],
              i = s.attributes[e] || {},
              e = Object.keys(
                (s.styles.hasOwnProperty(e) ? s.styles : n)[e]
              ).reduce(function (e, t) {
                return (e[t] = ""), e;
              }, {});
            w(t) &&
              v(t) &&
              (Object.assign(t.style, e),
              Object.keys(i).forEach(function (e) {
                t.removeAttribute(e);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  function L(e) {
    return e.split("-")[0];
  }
  var T = Math.max,
    Je = Math.min,
    et = Math.round;
  function tt() {
    var e = navigator.userAgentData;
    return null != e && e.brands && Array.isArray(e.brands)
      ? e.brands
          .map(function (e) {
            return e.brand + "/" + e.version;
          })
          .join(" ")
      : navigator.userAgent;
  }
  function it() {
    return !/^((?!chrome|android).)*safari/i.test(tt());
  }
  function st(e, t, i) {
    void 0 === t && (t = !1), void 0 === i && (i = !1);
    var s = e.getBoundingClientRect(),
      n = 1,
      r = 1;
    t &&
      w(e) &&
      ((n = (0 < e.offsetWidth && et(s.width) / e.offsetWidth) || 1),
      (r = (0 < e.offsetHeight && et(s.height) / e.offsetHeight) || 1));
    (t = (y(e) ? b(e) : window).visualViewport),
      (e = !it() && i),
      (i = (s.left + (e && t ? t.offsetLeft : 0)) / n),
      (e = (s.top + (e && t ? t.offsetTop : 0)) / r),
      (t = s.width / n),
      (n = s.height / r);
    return {
      width: t,
      height: n,
      top: e,
      right: i + t,
      bottom: e + n,
      left: i,
      x: i,
      y: e,
    };
  }
  function nt(e) {
    var t = st(e),
      i = e.offsetWidth,
      s = e.offsetHeight;
    return (
      Math.abs(t.width - i) <= 1 && (i = t.width),
      Math.abs(t.height - s) <= 1 && (s = t.height),
      { x: e.offsetLeft, y: e.offsetTop, width: i, height: s }
    );
  }
  function rt(e, t) {
    var i = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (i && Qe(i)) {
      var s = t;
      do {
        if (s && e.isSameNode(s)) return !0;
      } while ((s = s.parentNode || s.host));
    }
    return !1;
  }
  function _(e) {
    return b(e).getComputedStyle(e);
  }
  function D(e) {
    return (
      (y(e) ? e.ownerDocument : e.document) || window.document
    ).documentElement;
  }
  function at(e) {
    return "html" === v(e)
      ? e
      : e.assignedSlot || e.parentNode || (Qe(e) ? e.host : null) || D(e);
  }
  function ot(e) {
    return w(e) && "fixed" !== _(e).position ? e.offsetParent : null;
  }
  function lt(e) {
    for (
      var t, i = b(e), s = ot(e);
      s &&
      ((t = s), 0 <= ["table", "td", "th"].indexOf(v(t))) &&
      "static" === _(s).position;

    )
      s = ot(s);
    return (
      ((!s ||
        ("html" !== v(s) && ("body" !== v(s) || "static" !== _(s).position))) &&
        (s ||
          (function (e) {
            var t = /firefox/i.test(tt()),
              i = /Trident/i.test(tt());
            if (!i || !w(e) || "fixed" !== _(e).position) {
              var s = at(e);
              for (
                Qe(s) && (s = s.host);
                w(s) && ["html", "body"].indexOf(v(s)) < 0;

              ) {
                var n = _(s);
                if (
                  "none" !== n.transform ||
                  "none" !== n.perspective ||
                  "paint" === n.contain ||
                  -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                  (t && "filter" === n.willChange) ||
                  (t && n.filter && "none" !== n.filter)
                )
                  return s;
                s = s.parentNode;
              }
            }
            return null;
          })(e))) ||
      i
    );
  }
  function dt(e) {
    return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y";
  }
  function ut(e, t, i) {
    return T(e, Je(t, i));
  }
  function ct() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }
  function ht(e) {
    return Object.assign({}, ct(), e);
  }
  function pt(i, e) {
    return e.reduce(function (e, t) {
      return (e[t] = i), e;
    }, {});
  }
  var ft = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var t,
        i,
        s,
        n,
        r = e.state,
        a = e.name,
        e = e.options,
        o = r.elements.arrow,
        l = r.modifiersData.popperOffsets,
        d = dt((u = L(r.placement))),
        u = 0 <= [k, M].indexOf(u) ? "height" : "width";
      o &&
        l &&
        ((e = e.padding),
        (i = r),
        (i = ht(
          "number" !=
            typeof (e =
              "function" == typeof e
                ? e(Object.assign({}, i.rects, { placement: i.placement }))
                : e)
            ? e
            : pt(e, P)
        )),
        (e = nt(o)),
        (n = "y" === d ? S : k),
        (s = "y" === d ? A : M),
        (t =
          r.rects.reference[u] +
          r.rects.reference[d] -
          l[d] -
          r.rects.popper[u]),
        (l = l[d] - r.rects.reference[d]),
        (o = (o = lt(o))
          ? "y" === d
            ? o.clientHeight || 0
            : o.clientWidth || 0
          : 0),
        (n = i[n]),
        (i = o - e[u] - i[s]),
        (n = ut(n, (s = o / 2 - e[u] / 2 + (t / 2 - l / 2)), i)),
        (r.modifiersData[a] =
          (((o = {})[d] = n), (o.centerOffset = n - s), o)));
    },
    effect: function (e) {
      var t = e.state;
      null !=
        (e = void 0 === (e = e.options.element) ? "[data-popper-arrow]" : e) &&
        ("string" != typeof e || (e = t.elements.popper.querySelector(e))) &&
        rt(t.elements.popper, e) &&
        (t.elements.arrow = e);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function mt(e) {
    return e.split("-")[1];
  }
  var gt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function vt(e) {
    var t,
      i = e.popper,
      s = e.popperRect,
      n = e.placement,
      r = e.variation,
      a = e.offsets,
      o = e.position,
      l = e.gpuAcceleration,
      d = e.adaptive,
      u = e.roundOffsets,
      e = e.isFixed,
      c = a.x,
      c = void 0 === c ? 0 : c,
      h = a.y,
      h = void 0 === h ? 0 : h,
      p = "function" == typeof u ? u({ x: c, y: h }) : { x: c, y: h },
      p = ((c = p.x), (h = p.y), a.hasOwnProperty("x")),
      a = a.hasOwnProperty("y"),
      f = k,
      m = S,
      g = window,
      v =
        (d &&
          ((v = "clientHeight"),
          (t = "clientWidth"),
          (y = lt(i)) === b(i) &&
            "static" !== _((y = D(i))).position &&
            "absolute" === o &&
            ((v = "scrollHeight"), (t = "scrollWidth")),
          (n !== S && ((n !== k && n !== M) || r !== Ne)) ||
            ((m = A),
            (h =
              (h -
                ((e && y === g && g.visualViewport
                  ? g.visualViewport.height
                  : y[v]) -
                  s.height)) *
              (l ? 1 : -1))),
          (n !== k && ((n !== S && n !== A) || r !== Ne)) ||
            ((f = M),
            (c =
              (c -
                ((e && y === g && g.visualViewport
                  ? g.visualViewport.width
                  : y[t]) -
                  s.width)) *
              (l ? 1 : -1)))),
        Object.assign({ position: o }, d && gt)),
      y =
        !0 === u
          ? ((n = { x: c, y: h }),
            (r = b(i)),
            (e = n.x),
            (n = n.y),
            (r = r.devicePixelRatio || 1),
            { x: et(e * r) / r || 0, y: et(n * r) / r || 0 })
          : { x: c, y: h };
    return (
      (c = y.x),
      (h = y.y),
      l
        ? Object.assign(
            {},
            v,
            (((t = {})[m] = a ? "0" : ""),
            (t[f] = p ? "0" : ""),
            (t.transform =
              (g.devicePixelRatio || 1) <= 1
                ? "translate(" + c + "px, " + h + "px)"
                : "translate3d(" + c + "px, " + h + "px, 0)"),
            t)
          )
        : Object.assign(
            {},
            v,
            (((s = {})[m] = a ? h + "px" : ""),
            (s[f] = p ? c + "px" : ""),
            (s.transform = ""),
            s)
          )
    );
  }
  var yt = {
      name: "computeStyles",
      enabled: !0,
      phase: "beforeWrite",
      fn: function (e) {
        var t = e.state,
          e = e.options,
          i = void 0 === (i = e.gpuAcceleration) || i,
          s = void 0 === (s = e.adaptive) || s,
          e = void 0 === (e = e.roundOffsets) || e,
          i = {
            placement: L(t.placement),
            variation: mt(t.placement),
            popper: t.elements.popper,
            popperRect: t.rects.popper,
            gpuAcceleration: i,
            isFixed: "fixed" === t.options.strategy,
          };
        null != t.modifiersData.popperOffsets &&
          (t.styles.popper = Object.assign(
            {},
            t.styles.popper,
            vt(
              Object.assign({}, i, {
                offsets: t.modifiersData.popperOffsets,
                position: t.options.strategy,
                adaptive: s,
                roundOffsets: e,
              })
            )
          )),
          null != t.modifiersData.arrow &&
            (t.styles.arrow = Object.assign(
              {},
              t.styles.arrow,
              vt(
                Object.assign({}, i, {
                  offsets: t.modifiersData.arrow,
                  position: "absolute",
                  adaptive: !1,
                  roundOffsets: e,
                })
              )
            )),
          (t.attributes.popper = Object.assign({}, t.attributes.popper, {
            "data-popper-placement": t.placement,
          }));
      },
      data: {},
    },
    bt = { passive: !0 };
  var wt = {
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function () {},
      effect: function (e) {
        var t = e.state,
          i = e.instance,
          s = (e = e.options).scroll,
          n = void 0 === s || s,
          r = void 0 === (s = e.resize) || s,
          a = b(t.elements.popper),
          o = [].concat(t.scrollParents.reference, t.scrollParents.popper);
        return (
          n &&
            o.forEach(function (e) {
              e.addEventListener("scroll", i.update, bt);
            }),
          r && a.addEventListener("resize", i.update, bt),
          function () {
            n &&
              o.forEach(function (e) {
                e.removeEventListener("scroll", i.update, bt);
              }),
              r && a.removeEventListener("resize", i.update, bt);
          }
        );
      },
      data: {},
    },
    _t = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function Dt(e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
      return _t[e];
    });
  }
  var xt = { start: "end", end: "start" };
  function Et(e) {
    return e.replace(/start|end/g, function (e) {
      return xt[e];
    });
  }
  function Ct(e) {
    e = b(e);
    return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
  }
  function Tt(e) {
    return st(D(e)).left + Ct(e).scrollLeft;
  }
  function St(e) {
    var e = _(e),
      t = e.overflow,
      i = e.overflowX,
      e = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(t + e + i);
  }
  function At(e, t) {
    void 0 === t && (t = []);
    var i = (function e(t) {
        return 0 <= ["html", "body", "#document"].indexOf(v(t))
          ? t.ownerDocument.body
          : w(t) && St(t)
          ? t
          : e(at(t));
      })(e),
      e = i === (null == (e = e.ownerDocument) ? void 0 : e.body),
      s = b(i),
      s = e ? [s].concat(s.visualViewport || [], St(i) ? i : []) : i,
      i = t.concat(s);
    return e ? i : i.concat(At(at(s)));
  }
  function Mt(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height,
    });
  }
  function kt(e, t, i) {
    return t === Ye
      ? Mt(
          ((n = i),
          (a = b((s = e))),
          (o = D(s)),
          (a = a.visualViewport),
          (l = o.clientWidth),
          (o = o.clientHeight),
          (u = d = 0),
          a &&
            ((l = a.width),
            (o = a.height),
            (r = it()) || (!r && "fixed" === n)) &&
            ((d = a.offsetLeft), (u = a.offsetTop)),
          { width: l, height: o, x: d + Tt(s), y: u })
        )
      : y(t)
      ? (((n = st((r = t), !1, "fixed" === (n = i))).top = n.top + r.clientTop),
        (n.left = n.left + r.clientLeft),
        (n.bottom = n.top + r.clientHeight),
        (n.right = n.left + r.clientWidth),
        (n.width = r.clientWidth),
        (n.height = r.clientHeight),
        (n.x = n.left),
        (n.y = n.top),
        n)
      : Mt(
          ((a = D(e)),
          (l = D(a)),
          (o = Ct(a)),
          (d = null == (d = a.ownerDocument) ? void 0 : d.body),
          (s = T(
            l.scrollWidth,
            l.clientWidth,
            d ? d.scrollWidth : 0,
            d ? d.clientWidth : 0
          )),
          (u = T(
            l.scrollHeight,
            l.clientHeight,
            d ? d.scrollHeight : 0,
            d ? d.clientHeight : 0
          )),
          (a = -o.scrollLeft + Tt(a)),
          (o = -o.scrollTop),
          "rtl" === _(d || l).direction &&
            (a += T(l.clientWidth, d ? d.clientWidth : 0) - s),
          { width: s, height: u, x: a, y: o })
        );
    var s, n, r, a, o, l, d, u;
  }
  function Pt(i, e, t, s) {
    var n,
      r =
        "clippingParents" === e
          ? ((a = At(at((r = i)))),
            y(
              (n =
                0 <= ["absolute", "fixed"].indexOf(_(r).position) && w(r)
                  ? lt(r)
                  : r)
            )
              ? a.filter(function (e) {
                  return y(e) && rt(e, n) && "body" !== v(e);
                })
              : [])
          : [].concat(e),
      a = [].concat(r, [t]),
      e = a[0],
      t = a.reduce(function (e, t) {
        t = kt(i, t, s);
        return (
          (e.top = T(t.top, e.top)),
          (e.right = Je(t.right, e.right)),
          (e.bottom = Je(t.bottom, e.bottom)),
          (e.left = T(t.left, e.left)),
          e
        );
      }, kt(i, e, s));
    return (
      (t.width = t.right - t.left),
      (t.height = t.bottom - t.top),
      (t.x = t.left),
      (t.y = t.top),
      t
    );
  }
  function Ft(e) {
    var t,
      i = e.reference,
      s = e.element,
      e = e.placement,
      n = e ? L(e) : null,
      e = e ? mt(e) : null,
      r = i.x + i.width / 2 - s.width / 2,
      a = i.y + i.height / 2 - s.height / 2;
    switch (n) {
      case S:
        t = { x: r, y: i.y - s.height };
        break;
      case A:
        t = { x: r, y: i.y + i.height };
        break;
      case M:
        t = { x: i.x + i.width, y: a };
        break;
      case k:
        t = { x: i.x - s.width, y: a };
        break;
      default:
        t = { x: i.x, y: i.y };
    }
    var o = n ? dt(n) : null;
    if (null != o) {
      var l = "y" === o ? "height" : "width";
      switch (e) {
        case F:
          t[o] = t[o] - (i[l] / 2 - s[l] / 2);
          break;
        case Ne:
          t[o] = t[o] + (i[l] / 2 - s[l] / 2);
      }
    }
    return t;
  }
  function Lt(e, t) {
    var s,
      t = (t = void 0 === t ? {} : t),
      i = t.placement,
      i = void 0 === i ? e.placement : i,
      n = t.strategy,
      n = void 0 === n ? e.strategy : n,
      r = t.boundary,
      r = void 0 === r ? Re : r,
      a = t.rootBoundary,
      a = void 0 === a ? Ye : a,
      o = t.elementContext,
      o = void 0 === o ? Xe : o,
      l = t.altBoundary,
      l = void 0 !== l && l,
      t = t.padding,
      t = void 0 === t ? 0 : t,
      t = ht("number" != typeof t ? t : pt(t, P)),
      d = e.rects.popper,
      l = e.elements[l ? (o === Xe ? je : Xe) : o],
      l = Pt(y(l) ? l : l.contextElement || D(e.elements.popper), r, a, n),
      r = st(e.elements.reference),
      a = Ft({ reference: r, element: d, strategy: "absolute", placement: i }),
      n = Mt(Object.assign({}, d, a)),
      d = o === Xe ? n : r,
      u = {
        top: l.top - d.top + t.top,
        bottom: d.bottom - l.bottom + t.bottom,
        left: l.left - d.left + t.left,
        right: d.right - l.right + t.right,
      },
      a = e.modifiersData.offset;
    return (
      o === Xe &&
        a &&
        ((s = a[i]),
        Object.keys(u).forEach(function (e) {
          var t = 0 <= [M, A].indexOf(e) ? 1 : -1,
            i = 0 <= [S, A].indexOf(e) ? "y" : "x";
          u[e] += s[i] * t;
        })),
      u
    );
  }
  var Ot = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var c = e.state,
        t = e.options,
        e = e.name;
      if (!c.modifiersData[e]._skip) {
        for (
          var i = t.mainAxis,
            s = void 0 === i || i,
            i = t.altAxis,
            n = void 0 === i || i,
            i = t.fallbackPlacements,
            h = t.padding,
            p = t.boundary,
            f = t.rootBoundary,
            r = t.altBoundary,
            a = t.flipVariations,
            m = void 0 === a || a,
            g = t.allowedAutoPlacements,
            a = c.options.placement,
            t = L(a),
            i =
              i ||
              (t === a || !m
                ? [Dt(a)]
                : L((i = a)) === Be
                ? []
                : ((t = Dt(i)), [Et(i), t, Et(t)])),
            o = [a].concat(i).reduce(function (e, t) {
              return e.concat(
                L(t) === Be
                  ? ((i = c),
                    (s = (e = e =
                      void 0 ===
                      (e = {
                        placement: t,
                        boundary: p,
                        rootBoundary: f,
                        padding: h,
                        flipVariations: m,
                        allowedAutoPlacements: g,
                      })
                        ? {}
                        : e).placement),
                    (n = e.boundary),
                    (r = e.rootBoundary),
                    (a = e.padding),
                    (o = e.flipVariations),
                    (l = void 0 === (e = e.allowedAutoPlacements) ? qe : e),
                    (d = mt(s)),
                    (e = d
                      ? o
                        ? He
                        : He.filter(function (e) {
                            return mt(e) === d;
                          })
                      : P),
                    (u = (s =
                      0 ===
                      (s = e.filter(function (e) {
                        return 0 <= l.indexOf(e);
                      })).length
                        ? e
                        : s).reduce(function (e, t) {
                      return (
                        (e[t] = Lt(i, {
                          placement: t,
                          boundary: n,
                          rootBoundary: r,
                          padding: a,
                        })[L(t)]),
                        e
                      );
                    }, {})),
                    Object.keys(u).sort(function (e, t) {
                      return u[e] - u[t];
                    }))
                  : t
              );
              var i, s, n, r, a, o, l, d, u;
            }, []),
            l = c.rects.reference,
            d = c.rects.popper,
            u = new Map(),
            v = !0,
            y = o[0],
            b = 0;
          b < o.length;
          b++
        ) {
          var w = o[b],
            _ = L(w),
            D = mt(w) === F,
            x = 0 <= [S, A].indexOf(_),
            E = x ? "width" : "height",
            C = Lt(c, {
              placement: w,
              boundary: p,
              rootBoundary: f,
              altBoundary: r,
              padding: h,
            }),
            x = x ? (D ? M : k) : D ? A : S,
            D = (l[E] > d[E] && (x = Dt(x)), Dt(x)),
            E = [];
          if (
            (s && E.push(C[_] <= 0),
            n && E.push(C[x] <= 0, C[D] <= 0),
            E.every(function (e) {
              return e;
            }))
          ) {
            (y = w), (v = !1);
            break;
          }
          u.set(w, E);
        }
        if (v)
          for (var T = m ? 3 : 1; 0 < T; T--)
            if (
              "break" ===
              (function (t) {
                var e = o.find(function (e) {
                  e = u.get(e);
                  if (e)
                    return e.slice(0, t).every(function (e) {
                      return e;
                    });
                });
                if (e) return (y = e), "break";
              })(T)
            )
              break;
        c.placement !== y &&
          ((c.modifiersData[e]._skip = !0), (c.placement = y), (c.reset = !0));
      }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function zt(e, t, i) {
    return {
      top: e.top - t.height - (i = void 0 === i ? { x: 0, y: 0 } : i).y,
      right: e.right - t.width + i.x,
      bottom: e.bottom - t.height + i.y,
      left: e.left - t.width - i.x,
    };
  }
  function It(t) {
    return [S, M, A, k].some(function (e) {
      return 0 <= t[e];
    });
  }
  var Bt = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: function (e) {
      var t = e.state,
        e = e.name,
        i = t.rects.reference,
        s = t.rects.popper,
        n = t.modifiersData.preventOverflow,
        r = Lt(t, { elementContext: "reference" }),
        a = Lt(t, { altBoundary: !0 }),
        r = zt(r, i),
        i = zt(a, s, n),
        a = It(r),
        s = It(i);
      (t.modifiersData[e] = {
        referenceClippingOffsets: r,
        popperEscapeOffsets: i,
        isReferenceHidden: a,
        hasPopperEscaped: s,
      }),
        (t.attributes.popper = Object.assign({}, t.attributes.popper, {
          "data-popper-reference-hidden": a,
          "data-popper-escaped": s,
        }));
    },
  };
  var Nt = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function (e) {
      var a = e.state,
        t = e.options,
        e = e.name,
        o = void 0 === (t = t.offset) ? [0, 0] : t,
        t = qe.reduce(function (e, t) {
          var i, s, n, r;
          return (
            (e[t] =
              ((t = t),
              (i = a.rects),
              (s = o),
              (n = L(t)),
              (r = 0 <= [k, S].indexOf(n) ? -1 : 1),
              (t =
                (i =
                  "function" == typeof s
                    ? s(Object.assign({}, i, { placement: t }))
                    : s)[0] || 0),
              (s = (i[1] || 0) * r),
              0 <= [k, M].indexOf(n) ? { x: s, y: t } : { x: t, y: s })),
            e
          );
        }, {}),
        i = (s = t[a.placement]).x,
        s = s.y;
      null != a.modifiersData.popperOffsets &&
        ((a.modifiersData.popperOffsets.x += i),
        (a.modifiersData.popperOffsets.y += s)),
        (a.modifiersData[e] = t);
    },
  };
  var Rt = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function (e) {
      var t = e.state,
        e = e.name;
      t.modifiersData[e] = Ft({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: "absolute",
        placement: t.placement,
      });
    },
    data: {},
  };
  var Yt = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var t,
        i,
        s,
        n,
        r,
        a,
        o,
        l,
        d,
        u = e.state,
        c = e.options,
        e = e.name,
        h = void 0 === (h = c.mainAxis) || h,
        p = void 0 !== (p = c.altAxis) && p,
        f = c.boundary,
        m = c.rootBoundary,
        g = c.altBoundary,
        v = c.padding,
        y = void 0 === (y = c.tether) || y,
        c = void 0 === (c = c.tetherOffset) ? 0 : c,
        f = Lt(u, { boundary: f, rootBoundary: m, padding: v, altBoundary: g }),
        m = L(u.placement),
        g = !(v = mt(u.placement)),
        b = dt(m),
        w = "x" === b ? "y" : "x",
        _ = u.modifiersData.popperOffsets,
        D = u.rects.reference,
        x = u.rects.popper,
        c =
          "number" ==
          typeof (c =
            "function" == typeof c
              ? c(Object.assign({}, u.rects, { placement: u.placement }))
              : c)
            ? { mainAxis: c, altAxis: c }
            : Object.assign({ mainAxis: 0, altAxis: 0 }, c),
        E = u.modifiersData.offset ? u.modifiersData.offset[u.placement] : null,
        C = { x: 0, y: 0 };
      _ &&
        (h &&
          ((h = "y" === b ? "height" : "width"),
          (a = (o = _[b]) + f[(i = "y" === b ? S : k)]),
          (l = o - f[(d = "y" === b ? A : M)]),
          (t = y ? -x[h] / 2 : 0),
          (n = (v === F ? D : x)[h]),
          (v = v === F ? -x[h] : -D[h]),
          (r = u.elements.arrow),
          (r = y && r ? nt(r) : { width: 0, height: 0 }),
          (i = (s = u.modifiersData["arrow#persistent"]
            ? u.modifiersData["arrow#persistent"].padding
            : ct())[i]),
          (s = s[d]),
          (d = ut(0, D[h], r[h])),
          (r = g ? D[h] / 2 - t - d - i - c.mainAxis : n - d - i - c.mainAxis),
          (n = g ? -D[h] / 2 + t + d + s + c.mainAxis : v + d + s + c.mainAxis),
          (g = (i = u.elements.arrow && lt(u.elements.arrow))
            ? "y" === b
              ? i.clientTop || 0
              : i.clientLeft || 0
            : 0),
          (v = o + n - (t = null != (h = null == E ? void 0 : E[b]) ? h : 0)),
          (d = ut(y ? Je(a, o + r - t - g) : a, o, y ? T(l, v) : l)),
          (_[b] = d),
          (C[b] = d - o)),
        p &&
          ((s = "y" == w ? "height" : "width"),
          (n = (i = _[w]) + f["x" === b ? S : k]),
          (h = i - f["x" === b ? A : M]),
          (r = -1 !== [S, k].indexOf(m)),
          (g = null != (t = null == E ? void 0 : E[w]) ? t : 0),
          (a = r ? n : i - D[s] - x[s] - g + c.altAxis),
          (v = r ? i + D[s] + x[s] - g - c.altAxis : h),
          (o =
            y && r
              ? ((l = ut((l = a), i, (d = v))), d < l ? d : l)
              : ut(y ? a : n, i, y ? v : h)),
          (_[w] = o),
          (C[w] = o - i)),
        (u.modifiersData[e] = C));
    },
    requiresIfExists: ["offset"],
  };
  function Xt(e, t, i) {
    void 0 === i && (i = !1);
    var s = w(t),
      n =
        w(t) &&
        ((a = (n = t).getBoundingClientRect()),
        (r = et(a.width) / n.offsetWidth || 1),
        (a = et(a.height) / n.offsetHeight || 1),
        1 !== r || 1 !== a),
      r = D(t),
      a = st(e, n, i),
      e = { scrollLeft: 0, scrollTop: 0 },
      o = { x: 0, y: 0 };
    return (
      (!s && i) ||
        (("body" === v(t) && !St(r)) ||
          (e =
            (s = t) !== b(s) && w(s)
              ? { scrollLeft: s.scrollLeft, scrollTop: s.scrollTop }
              : Ct(s)),
        w(t)
          ? (((o = st(t, !0)).x += t.clientLeft), (o.y += t.clientTop))
          : r && (o.x = Tt(r))),
      {
        x: a.left + e.scrollLeft - o.x,
        y: a.top + e.scrollTop - o.y,
        width: a.width,
        height: a.height,
      }
    );
  }
  function jt(e) {
    var i = new Map(),
      s = new Set(),
      n = [];
    return (
      e.forEach(function (e) {
        i.set(e.name, e);
      }),
      e.forEach(function (e) {
        s.has(e.name) ||
          !(function t(e) {
            s.add(e.name),
              []
                .concat(e.requires || [], e.requiresIfExists || [])
                .forEach(function (e) {
                  s.has(e) || ((e = i.get(e)) && t(e));
                }),
              n.push(e);
          })(e);
      }),
      n
    );
  }
  var Ht = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function qt() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return !t.some(function (e) {
      return !(e && "function" == typeof e.getBoundingClientRect);
    });
  }
  function Wt(e) {
    var e = (e = void 0 === e ? {} : e),
      t = e.defaultModifiers,
      c = void 0 === t ? [] : t,
      t = e.defaultOptions,
      h = void 0 === t ? Ht : t;
    return function (s, n, t) {
      void 0 === t && (t = h);
      var i,
        r,
        a = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, Ht, h),
          modifiersData: {},
          elements: { reference: s, popper: n },
          attributes: {},
          styles: {},
        },
        o = [],
        l = !1,
        d = {
          state: a,
          setOptions: function (e) {
            var i,
              t,
              e = "function" == typeof e ? e(a.options) : e,
              e =
                (u(),
                (a.options = Object.assign({}, h, a.options, e)),
                (a.scrollParents = {
                  reference: y(s)
                    ? At(s)
                    : s.contextElement
                    ? At(s.contextElement)
                    : [],
                  popper: At(n),
                }),
                (e = [].concat(c, a.options.modifiers)),
                (t = e.reduce(function (e, t) {
                  var i = e[t.name];
                  return (
                    (e[t.name] = i
                      ? Object.assign({}, i, t, {
                          options: Object.assign({}, i.options, t.options),
                          data: Object.assign({}, i.data, t.data),
                        })
                      : t),
                    e
                  );
                }, {})),
                (e = Object.keys(t).map(function (e) {
                  return t[e];
                })),
                (i = jt(e)),
                Ke.reduce(function (e, t) {
                  return e.concat(
                    i.filter(function (e) {
                      return e.phase === t;
                    })
                  );
                }, []));
            return (
              (a.orderedModifiers = e.filter(function (e) {
                return e.enabled;
              })),
              a.orderedModifiers.forEach(function (e) {
                var t = e.name,
                  i = e.options,
                  e = e.effect;
                "function" == typeof e &&
                  ((e = e({
                    state: a,
                    name: t,
                    instance: d,
                    options: void 0 === i ? {} : i,
                  })),
                  o.push(e || function () {}));
              }),
              d.update()
            );
          },
          forceUpdate: function () {
            if (!l) {
              var e = a.elements,
                t = e.reference,
                e = e.popper;
              if (qt(t, e)) {
                (a.rects = {
                  reference: Xt(t, lt(e), "fixed" === a.options.strategy),
                  popper: nt(e),
                }),
                  (a.reset = !1),
                  (a.placement = a.options.placement),
                  a.orderedModifiers.forEach(function (e) {
                    return (a.modifiersData[e.name] = Object.assign(
                      {},
                      e.data
                    ));
                  });
                for (var i, s, n, r = 0; r < a.orderedModifiers.length; r++)
                  !0 === a.reset
                    ? ((a.reset = !1), (r = -1))
                    : ((i = (n = a.orderedModifiers[r]).fn),
                      (s = n.options),
                      (n = n.name),
                      "function" == typeof i &&
                        (a =
                          i({
                            state: a,
                            options: void 0 === s ? {} : s,
                            name: n,
                            instance: d,
                          }) || a));
              }
            }
          },
          update:
            ((i = function () {
              return new Promise(function (e) {
                d.forceUpdate(), e(a);
              });
            }),
            function () {
              return (r =
                r ||
                new Promise(function (e) {
                  Promise.resolve().then(function () {
                    (r = void 0), e(i());
                  });
                }));
            }),
          destroy: function () {
            u(), (l = !0);
          },
        };
      return (
        qt(s, n) &&
          d.setOptions(t).then(function (e) {
            !l && t.onFirstUpdate && t.onFirstUpdate(e);
          }),
        d
      );
      function u() {
        o.forEach(function (e) {
          return e();
        }),
          (o = []);
      }
    };
  }
  var $t = Wt({ defaultModifiers: [wt, Rt, yt, Ze, Nt, Ot, Yt, ft, Bt] });
  const Gt = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          afterMain: Ge,
          afterRead: We,
          afterWrite: Ue,
          applyStyles: Ze,
          arrow: ft,
          auto: Be,
          basePlacements: P,
          beforeMain: $e,
          beforeRead: h,
          beforeWrite: Ve,
          bottom: A,
          clippingParents: Re,
          computeStyles: yt,
          createPopper: $t,
          createPopperBase: Wt(),
          createPopperLite: Wt({ defaultModifiers: [wt, Rt, yt, Ze] }),
          detectOverflow: Lt,
          end: Ne,
          eventListeners: wt,
          flip: Ot,
          hide: Bt,
          left: k,
          main: "main",
          modifierPhases: Ke,
          offset: Nt,
          placements: qe,
          popper: Xe,
          popperGenerator: Wt,
          popperOffsets: Rt,
          preventOverflow: Yt,
          read: "read",
          reference: je,
          right: M,
          start: F,
          top: S,
          variationPlacements: He,
          viewport: Ye,
          write: "write",
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    Vt = "dropdown";
  (Ge = ".bs.dropdown"), (We = ".data-api");
  const Ut = "ArrowDown";
  (Ue = "click" + Ge + We), (ft = "keydown" + Ge + We);
  const Kt = "show",
    x = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
    Qt = (x, ".dropdown-menu"),
    Zt = l() ? "top-end" : "top-start",
    Jt = l() ? "top-start" : "top-end",
    ei = l() ? "bottom-end" : "bottom-start",
    ti = l() ? "bottom-start" : "bottom-end",
    ii = l() ? "left-start" : "right-start",
    si = l() ? "right-start" : "left-start",
    ni = {
      autoClose: !0,
      boundary: "clippingParents",
      display: "dynamic",
      offset: [0, 2],
      popperConfig: null,
      reference: "toggle",
    },
    ri = {
      autoClose: "(boolean|string)",
      boundary: "(string|element)",
      display: "string",
      offset: "(array|string|function)",
      popperConfig: "(null|object|function)",
      reference: "(string|element|object)",
    };
  class E extends t {
    constructor(e, t) {
      super(e, t),
        (this._popper = null),
        (this._parent = this._element.parentNode),
        (this._menu =
          c.next(this._element, Qt)[0] ||
          c.prev(this._element, Qt)[0] ||
          c.findOne(Qt, this._parent)),
        (this._inNavbar = this._detectNavbar());
    }
    static get Default() {
      return ni;
    }
    static get DefaultType() {
      return ri;
    }
    static get NAME() {
      return Vt;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (!o(this._element) && !this._isShown()) {
        var e = { relatedTarget: this._element },
          t = m.trigger(this._element, "show.bs.dropdown", e);
        if (!t.defaultPrevented) {
          if (
            (this._createPopper(),
            "ontouchstart" in document.documentElement &&
              !this._parent.closest(".navbar-nav"))
          )
            for (const i of [].concat(...document.body.children))
              m.on(i, "mouseover", j);
          this._element.focus(),
            this._element.setAttribute("aria-expanded", !0),
            this._menu.classList.add(Kt),
            this._element.classList.add(Kt),
            m.trigger(this._element, "shown.bs.dropdown", e);
        }
      }
    }
    hide() {
      var e;
      !o(this._element) &&
        this._isShown() &&
        ((e = { relatedTarget: this._element }), this._completeHide(e));
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update();
    }
    _completeHide(e) {
      var t = m.trigger(this._element, "hide.bs.dropdown", e);
      if (!t.defaultPrevented) {
        if ("ontouchstart" in document.documentElement)
          for (const i of [].concat(...document.body.children))
            m.off(i, "mouseover", j);
        this._popper && this._popper.destroy(),
          this._menu.classList.remove(Kt),
          this._element.classList.remove(Kt),
          this._element.setAttribute("aria-expanded", "false"),
          u.removeDataAttribute(this._menu, "popper"),
          m.trigger(this._element, "hidden.bs.dropdown", e);
      }
    }
    _getConfig(e) {
      if (
        "object" != typeof (e = super._getConfig(e)).reference ||
        r(e.reference) ||
        "function" == typeof e.reference.getBoundingClientRect
      )
        return e;
      throw new TypeError(
        Vt.toUpperCase() +
          ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'
      );
    }
    _createPopper() {
      if (void 0 === Gt)
        throw new TypeError(
          "Bootstrap's dropdowns require Popper (https://popper.js.org)"
        );
      let e = this._element;
      "parent" === this._config.reference
        ? (e = this._parent)
        : r(this._config.reference)
        ? (e = n(this._config.reference))
        : "object" == typeof this._config.reference &&
          (e = this._config.reference);
      var t = this._getPopperConfig();
      this._popper = $t(e, this._menu, t);
    }
    _isShown() {
      return this._menu.classList.contains(Kt);
    }
    _getPlacement() {
      var e,
        t = this._parent;
      return t.classList.contains("dropend")
        ? ii
        : t.classList.contains("dropstart")
        ? si
        : t.classList.contains("dropup-center")
        ? "top"
        : t.classList.contains("dropdown-center")
        ? "bottom"
        : ((e =
            "end" ===
            getComputedStyle(this._menu)
              .getPropertyValue("--bs-position")
              .trim()),
          t.classList.contains("dropup") ? (e ? Jt : Zt) : e ? ti : ei);
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const t = this._config["offset"];
      return "string" == typeof t
        ? t.split(",").map((e) => Number.parseInt(e, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig() {
      var e = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          { name: "offset", options: { offset: this._getOffset() } },
        ],
      };
      return (
        (!this._inNavbar && "static" !== this._config.display) ||
          (u.setDataAttribute(this._menu, "popper", "static"),
          (e.modifiers = [{ name: "applyStyles", enabled: !1 }])),
        { ...e, ...d(this._config.popperConfig, [e]) }
      );
    }
    _selectMenuItem({ key: e, target: t }) {
      var i = c
        .find(
          ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
          this._menu
        )
        .filter((e) => a(e));
      i.length && G(i, t, e === Ut, !i.includes(t)).focus();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        var e = E.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
    static clearMenus(e) {
      if (2 !== e.button && ("keyup" !== e.type || "Tab" === e.key))
        for (const n of c.find(
          '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled).show'
        )) {
          var t,
            i,
            s = E.getInstance(n);
          s &&
            !1 !== s._config.autoClose &&
            ((t = (i = e.composedPath()).includes(s._menu)),
            i.includes(s._element) ||
              ("inside" === s._config.autoClose && !t) ||
              ("outside" === s._config.autoClose && t) ||
              (s._menu.contains(e.target) &&
                (("keyup" === e.type && "Tab" === e.key) ||
                  /input|select|option|textarea|form/i.test(
                    e.target.tagName
                  ))) ||
              ((i = { relatedTarget: s._element }),
              "click" === e.type && (i.clickEvent = e),
              s._completeHide(i)));
        }
    }
    static dataApiKeydownHandler(e) {
      var t = /input|textarea/i.test(e.target.tagName),
        i = "Escape" === e.key,
        s = ["ArrowUp", Ut].includes(e.key);
      (!s && !i) ||
        (t && !i) ||
        (e.preventDefault(),
        (t = this.matches(x)
          ? this
          : c.prev(this, x)[0] ||
            c.next(this, x)[0] ||
            c.findOne(x, e.delegateTarget.parentNode)),
        (i = E.getOrCreateInstance(t)),
        s
          ? (e.stopPropagation(), i.show(), i._selectMenuItem(e))
          : i._isShown() && (e.stopPropagation(), i.hide(), t.focus()));
    }
  }
  m.on(document, ft, x, E.dataApiKeydownHandler),
    m.on(document, ft, Qt, E.dataApiKeydownHandler),
    m.on(document, Ue, E.clearMenus),
    m.on(document, "keyup.bs.dropdown.data-api", E.clearMenus),
    m.on(document, Ue, x, function (e) {
      e.preventDefault(), E.getOrCreateInstance(this).toggle();
    }),
    e(E);
  const ai = "backdrop",
    oi = "mousedown.bs." + ai,
    li = {
      className: "modal-backdrop",
      clickCallback: null,
      isAnimated: !1,
      isVisible: !0,
      rootElement: "body",
    },
    di = {
      className: "string",
      clickCallback: "(function|null)",
      isAnimated: "boolean",
      isVisible: "boolean",
      rootElement: "(element|string)",
    };
  class ui extends ce {
    constructor(e) {
      super(),
        (this._config = this._getConfig(e)),
        (this._isAppended = !1),
        (this._element = null);
    }
    static get Default() {
      return li;
    }
    static get DefaultType() {
      return di;
    }
    static get NAME() {
      return ai;
    }
    show(e) {
      var t;
      this._config.isVisible
        ? (this._append(),
          (t = this._getElement()),
          this._config.isAnimated && H(t),
          t.classList.add("show"),
          this._emulateAnimation(() => {
            d(e);
          }))
        : d(e);
    }
    hide(e) {
      this._config.isVisible
        ? (this._getElement().classList.remove("show"),
          this._emulateAnimation(() => {
            this.dispose(), d(e);
          }))
        : d(e);
    }
    dispose() {
      this._isAppended &&
        (m.off(this._element, oi),
        this._element.remove(),
        (this._isAppended = !1));
    }
    _getElement() {
      var e;
      return (
        this._element ||
          (((e = document.createElement("div")).className =
            this._config.className),
          this._config.isAnimated && e.classList.add("fade"),
          (this._element = e)),
        this._element
      );
    }
    _configAfterMerge(e) {
      return (e.rootElement = n(e.rootElement)), e;
    }
    _append() {
      var e;
      this._isAppended ||
        ((e = this._getElement()),
        this._config.rootElement.append(e),
        m.on(e, oi, () => {
          d(this._config.clickCallback);
        }),
        (this._isAppended = !0));
    }
    _emulateAnimation(e) {
      $(e, this._getElement(), this._config.isAnimated);
    }
  }
  const ci = ".bs.focustrap",
    hi = (ci, ci, "backward"),
    pi = { autofocus: !0, trapElement: null },
    fi = { autofocus: "boolean", trapElement: "element" };
  class mi extends ce {
    constructor(e) {
      super(),
        (this._config = this._getConfig(e)),
        (this._isActive = !1),
        (this._lastTabNavDirection = null);
    }
    static get Default() {
      return pi;
    }
    static get DefaultType() {
      return fi;
    }
    static get NAME() {
      return "focustrap";
    }
    activate() {
      this._isActive ||
        (this._config.autofocus && this._config.trapElement.focus(),
        m.off(document, ci),
        m.on(document, "focusin.bs.focustrap", (e) => this._handleFocusin(e)),
        m.on(document, "keydown.tab.bs.focustrap", (e) =>
          this._handleKeydown(e)
        ),
        (this._isActive = !0));
    }
    deactivate() {
      this._isActive && ((this._isActive = !1), m.off(document, ci));
    }
    _handleFocusin(e) {
      var t = this._config["trapElement"];
      e.target === document ||
        e.target === t ||
        t.contains(e.target) ||
        (0 === (e = c.focusableChildren(t)).length
          ? t
          : this._lastTabNavDirection === hi
          ? e[e.length - 1]
          : e[0]
        ).focus();
    }
    _handleKeydown(e) {
      "Tab" === e.key &&
        (this._lastTabNavDirection = e.shiftKey ? hi : "forward");
    }
  }
  const gi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    vi = ".sticky-top",
    yi = "padding-right",
    bi = "margin-right";
  class wi {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      var e = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - e);
    }
    hide() {
      const t = this.getWidth();
      this._disableOverFlow(),
        this._setElementAttributes(this._element, yi, (e) => e + t),
        this._setElementAttributes(gi, yi, (e) => e + t),
        this._setElementAttributes(vi, bi, (e) => e - t);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"),
        this._resetElementAttributes(this._element, yi),
        this._resetElementAttributes(gi, yi),
        this._resetElementAttributes(vi, bi);
    }
    isOverflowing() {
      return 0 < this.getWidth();
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"),
        (this._element.style.overflow = "hidden");
    }
    _setElementAttributes(e, i, s) {
      const n = this.getWidth();
      this._applyManipulationCallback(e, (e) => {
        var t;
        (e !== this._element && window.innerWidth > e.clientWidth + n) ||
          (this._saveInitialAttribute(e, i),
          (t = window.getComputedStyle(e).getPropertyValue(i)),
          e.style.setProperty(i, s(Number.parseFloat(t)) + "px"));
      });
    }
    _saveInitialAttribute(e, t) {
      var i = e.style.getPropertyValue(t);
      i && u.setDataAttribute(e, t, i);
    }
    _resetElementAttributes(e, i) {
      this._applyManipulationCallback(e, (e) => {
        var t = u.getDataAttribute(e, i);
        null === t
          ? e.style.removeProperty(i)
          : (u.removeDataAttribute(e, i), e.style.setProperty(i, t));
      });
    }
    _applyManipulationCallback(e, t) {
      if (r(e)) t(e);
      else for (const i of c.find(e, this._element)) t(i);
    }
  }
  const C = ".bs.modal";
  C, C;
  const _i = "hidden" + C,
    Di = "show" + C;
  C, C, C, C, C;
  C;
  const xi = "modal-open",
    Ei = "modal-static";
  const Ci = { backdrop: !0, focus: !0, keyboard: !0 },
    Ti = {
      backdrop: "(boolean|string)",
      focus: "boolean",
      keyboard: "boolean",
    };
  class Si extends t {
    constructor(e, t) {
      super(e, t),
        (this._dialog = c.findOne(".modal-dialog", this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        (this._isShown = !1),
        (this._isTransitioning = !1),
        (this._scrollBar = new wi()),
        this._addEventListeners();
    }
    static get Default() {
      return Ci;
    }
    static get DefaultType() {
      return Ti;
    }
    static get NAME() {
      return "modal";
    }
    toggle(e) {
      return this._isShown ? this.hide() : this.show(e);
    }
    show(e) {
      this._isShown ||
        this._isTransitioning ||
        m.trigger(this._element, Di, { relatedTarget: e }).defaultPrevented ||
        ((this._isShown = !0),
        (this._isTransitioning = !0),
        this._scrollBar.hide(),
        document.body.classList.add(xi),
        this._adjustDialog(),
        this._backdrop.show(() => this._showElement(e)));
    }
    hide() {
      !this._isShown ||
        this._isTransitioning ||
        m.trigger(this._element, "hide.bs.modal").defaultPrevented ||
        ((this._isShown = !1),
        (this._isTransitioning = !0),
        this._focustrap.deactivate(),
        this._element.classList.remove("show"),
        this._queueCallback(
          () => this._hideModal(),
          this._element,
          this._isAnimated()
        ));
    }
    dispose() {
      m.off(window, C),
        m.off(this._dialog, C),
        this._backdrop.dispose(),
        this._focustrap.deactivate(),
        super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new ui({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated(),
      });
    }
    _initializeFocusTrap() {
      return new mi({ trapElement: this._element });
    }
    _showElement(e) {
      document.body.contains(this._element) ||
        document.body.append(this._element),
        (this._element.style.display = "block"),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        (this._element.scrollTop = 0);
      var t = c.findOne(".modal-body", this._dialog);
      t && (t.scrollTop = 0),
        H(this._element),
        this._element.classList.add("show");
      this._queueCallback(
        () => {
          this._config.focus && this._focustrap.activate(),
            (this._isTransitioning = !1),
            m.trigger(this._element, "shown.bs.modal", { relatedTarget: e });
        },
        this._dialog,
        this._isAnimated()
      );
    }
    _addEventListeners() {
      m.on(this._element, "keydown.dismiss.bs.modal", (e) => {
        "Escape" === e.key &&
          (this._config.keyboard
            ? this.hide()
            : this._triggerBackdropTransition());
      }),
        m.on(window, "resize.bs.modal", () => {
          this._isShown && !this._isTransitioning && this._adjustDialog();
        }),
        m.on(this._element, "mousedown.dismiss.bs.modal", (t) => {
          m.one(this._element, "click.dismiss.bs.modal", (e) => {
            this._element === t.target &&
              this._element === e.target &&
              ("static" === this._config.backdrop
                ? this._triggerBackdropTransition()
                : this._config.backdrop && this.hide());
          });
        });
    }
    _hideModal() {
      (this._element.style.display = "none"),
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove(xi),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            m.trigger(this._element, _i);
        });
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      var e = m.trigger(this._element, "hidePrevented.bs.modal");
      if (!e.defaultPrevented) {
        e = this._element.scrollHeight > document.documentElement.clientHeight;
        const t = this._element.style.overflowY;
        "hidden" === t ||
          this._element.classList.contains(Ei) ||
          (e || (this._element.style.overflowY = "hidden"),
          this._element.classList.add(Ei),
          this._queueCallback(() => {
            this._element.classList.remove(Ei),
              this._queueCallback(() => {
                this._element.style.overflowY = t;
              }, this._dialog);
          }, this._dialog),
          this._element.focus());
      }
    }
    _adjustDialog() {
      var e,
        t = this._element.scrollHeight > document.documentElement.clientHeight,
        i = this._scrollBar.getWidth(),
        s = 0 < i;
      s &&
        !t &&
        ((e = l() ? "paddingLeft" : "paddingRight"),
        (this._element.style[e] = i + "px")),
        !s &&
          t &&
          ((e = l() ? "paddingRight" : "paddingLeft"),
          (this._element.style[e] = i + "px"));
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ""),
        (this._element.style.paddingRight = "");
    }
    static jQueryInterface(t, i) {
      return this.each(function () {
        var e = Si.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](i);
        }
      });
    }
  }
  m.on(
    document,
    "click.bs.modal.data-api",
    '[data-bs-toggle="modal"]',
    function (e) {
      const t = c.getElementFromSelector(this);
      ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
        m.one(t, Di, (e) => {
          e.defaultPrevented ||
            m.one(t, _i, () => {
              a(this) && this.focus();
            });
        });
      e = c.findOne(".modal.show");
      e && Si.getInstance(e).hide(), Si.getOrCreateInstance(t).toggle(this);
    }
  ),
    pe(Si),
    e(Si);
  $e = ".bs.offcanvas";
  const Ai = "showing",
    Mi = ".offcanvas.show",
    ki = "hidePrevented" + $e,
    Pi = "hidden" + $e;
  const Fi = { backdrop: !0, keyboard: !0, scroll: !1 },
    Li = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      scroll: "boolean",
    };
  class O extends t {
    constructor(e, t) {
      super(e, t),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        this._addEventListeners();
    }
    static get Default() {
      return Fi;
    }
    static get DefaultType() {
      return Li;
    }
    static get NAME() {
      return "offcanvas";
    }
    toggle(e) {
      return this._isShown ? this.hide() : this.show(e);
    }
    show(e) {
      this._isShown ||
        m.trigger(this._element, "show.bs.offcanvas", { relatedTarget: e })
          .defaultPrevented ||
        ((this._isShown = !0),
        this._backdrop.show(),
        this._config.scroll || new wi().hide(),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add(Ai),
        this._queueCallback(
          () => {
            (this._config.scroll && !this._config.backdrop) ||
              this._focustrap.activate(),
              this._element.classList.add("show"),
              this._element.classList.remove(Ai),
              m.trigger(this._element, "shown.bs.offcanvas", {
                relatedTarget: e,
              });
          },
          this._element,
          !0
        ));
    }
    hide() {
      this._isShown &&
        !m.trigger(this._element, "hide.bs.offcanvas").defaultPrevented &&
        (this._focustrap.deactivate(),
        this._element.blur(),
        (this._isShown = !1),
        this._element.classList.add("hiding"),
        this._backdrop.hide(),
        this._queueCallback(
          () => {
            this._element.classList.remove("show", "hiding"),
              this._element.removeAttribute("aria-modal"),
              this._element.removeAttribute("role"),
              this._config.scroll || new wi().reset(),
              m.trigger(this._element, Pi);
          },
          this._element,
          !0
        ));
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _initializeBackDrop() {
      var e = Boolean(this._config.backdrop);
      return new ui({
        className: "offcanvas-backdrop",
        isVisible: e,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: e
          ? () => {
              "static" === this._config.backdrop
                ? m.trigger(this._element, ki)
                : this.hide();
            }
          : null,
      });
    }
    _initializeFocusTrap() {
      return new mi({ trapElement: this._element });
    }
    _addEventListeners() {
      m.on(this._element, "keydown.dismiss.bs.offcanvas", (e) => {
        "Escape" === e.key &&
          (this._config.keyboard ? this.hide() : m.trigger(this._element, ki));
      });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        var e = O.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  m.on(
    document,
    "click.bs.offcanvas.data-api",
    '[data-bs-toggle="offcanvas"]',
    function (e) {
      var t = c.getElementFromSelector(this);
      ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
        o(this) ||
          (m.one(t, Pi, () => {
            a(this) && this.focus();
          }),
          (e = c.findOne(Mi)) && e !== t && O.getInstance(e).hide(),
          O.getOrCreateInstance(t).toggle(this));
    }
  ),
    m.on(window, "load.bs.offcanvas.data-api", () => {
      for (const e of c.find(Mi)) O.getOrCreateInstance(e).show();
    }),
    m.on(window, "resize.bs.offcanvas", () => {
      for (const e of c.find("[aria-modal][class*=show][class*=offcanvas-]"))
        "fixed" !== getComputedStyle(e).position &&
          O.getOrCreateInstance(e).hide();
    }),
    pe(O),
    e(O);
  h = {
    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
    a: ["target", "href", "title", "rel"],
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
    img: ["src", "srcset", "alt", "title", "width", "height"],
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
    ul: [],
  };
  const Oi = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ]),
    zi = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
  function Ii(e, t, i) {
    if (!e.length) return e;
    if (i && "function" == typeof i) return i(e);
    i = new window.DOMParser().parseFromString(e, "text/html");
    for (const a of [].concat(...i.body.querySelectorAll("*"))) {
      var s = a.nodeName.toLowerCase();
      if (Object.keys(t).includes(s)) {
        var n = [].concat(...a.attributes),
          r = [].concat(t["*"] || [], t[s] || []);
        for (const o of n)
          ((e, t) => {
            const i = e.nodeName.toLowerCase();
            return t.includes(i)
              ? !Oi.has(i) || Boolean(zi.test(e.nodeValue))
              : t.filter((e) => e instanceof RegExp).some((e) => e.test(i));
          })(o, r) || a.removeAttribute(o.nodeName);
      } else a.remove();
    }
    return i.body.innerHTML;
  }
  const Bi = {
      allowList: h,
      content: {},
      extraClass: "",
      html: !1,
      sanitize: !0,
      sanitizeFn: null,
      template: "<div></div>",
    },
    Ni = {
      allowList: "object",
      content: "object",
      extraClass: "(string|function)",
      html: "boolean",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      template: "string",
    },
    Ri = {
      entry: "(string|element|function|null)",
      selector: "(string|element)",
    };
  class Yi extends ce {
    constructor(e) {
      super(), (this._config = this._getConfig(e));
    }
    static get Default() {
      return Bi;
    }
    static get DefaultType() {
      return Ni;
    }
    static get NAME() {
      return "TemplateFactory";
    }
    getContent() {
      return Object.values(this._config.content)
        .map((e) => this._resolvePossibleFunction(e))
        .filter(Boolean);
    }
    hasContent() {
      return 0 < this.getContent().length;
    }
    changeContent(e) {
      return (
        this._checkContent(e),
        (this._config.content = { ...this._config.content, ...e }),
        this
      );
    }
    toHtml() {
      var e,
        t,
        i = document.createElement("div");
      i.innerHTML = this._maybeSanitize(this._config.template);
      for ([e, t] of Object.entries(this._config.content))
        this._setContent(i, t, e);
      var s = i.children[0],
        n = this._resolvePossibleFunction(this._config.extraClass);
      return n && s.classList.add(...n.split(" ")), s;
    }
    _typeCheckConfig(e) {
      super._typeCheckConfig(e), this._checkContent(e.content);
    }
    _checkContent(e) {
      for (var [t, i] of Object.entries(e))
        super._typeCheckConfig({ selector: t, entry: i }, Ri);
    }
    _setContent(e, t, i) {
      i = c.findOne(i, e);
      i &&
        ((t = this._resolvePossibleFunction(t))
          ? r(t)
            ? this._putElementInTemplate(n(t), i)
            : this._config.html
            ? (i.innerHTML = this._maybeSanitize(t))
            : (i.textContent = t)
          : i.remove());
    }
    _maybeSanitize(e) {
      return this._config.sanitize
        ? Ii(e, this._config.allowList, this._config.sanitizeFn)
        : e;
    }
    _resolvePossibleFunction(e) {
      return d(e, [this]);
    }
    _putElementInTemplate(e, t) {
      this._config.html
        ? ((t.innerHTML = ""), t.append(e))
        : (t.textContent = e.textContent);
    }
  }
  const Xi = new Set(["sanitize", "allowList", "sanitizeFn"]),
    ji = "fade";
  const Hi = "show",
    qi = "hide.bs.modal",
    Wi = "hover",
    $i = "focus",
    Gi = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: l() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: l() ? "right" : "left",
    },
    Vi = {
      allowList: h,
      animation: !0,
      boundary: "clippingParents",
      container: !1,
      customClass: "",
      delay: 0,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      html: !1,
      offset: [0, 6],
      placement: "top",
      popperConfig: null,
      sanitize: !0,
      sanitizeFn: null,
      selector: !1,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      title: "",
      trigger: "hover focus",
    },
    Ui = {
      allowList: "object",
      animation: "boolean",
      boundary: "(string|element)",
      container: "(string|element|boolean)",
      customClass: "(string|function)",
      delay: "(number|object)",
      fallbackPlacements: "array",
      html: "boolean",
      offset: "(array|string|function)",
      placement: "(string|function)",
      popperConfig: "(null|object|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      selector: "(string|boolean)",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
    };
  class Ki extends t {
    constructor(e, t) {
      if (void 0 === Gt)
        throw new TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        );
      super(e, t),
        (this._isEnabled = !0),
        (this._timeout = 0),
        (this._isHovered = null),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this._templateFactory = null),
        (this._newContent = null),
        (this.tip = null),
        this._setListeners(),
        this._config.selector || this._fixTitle();
    }
    static get Default() {
      return Vi;
    }
    static get DefaultType() {
      return Ui;
    }
    static get NAME() {
      return "tooltip";
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      this._isEnabled &&
        ((this._activeTrigger.click = !this._activeTrigger.click),
        this._isShown() ? this._leave() : this._enter());
    }
    dispose() {
      clearTimeout(this._timeout),
        m.off(this._element.closest(".modal"), qi, this._hideModalHandler),
        this._element.getAttribute("data-bs-original-title") &&
          this._element.setAttribute(
            "title",
            this._element.getAttribute("data-bs-original-title")
          ),
        this._disposePopper(),
        super.dispose();
    }
    show() {
      if ("none" === this._element.style.display)
        throw new Error("Please use show on visible elements");
      if (this._isWithContent() && this._isEnabled) {
        var e = m.trigger(this._element, this.constructor.eventName("show")),
          t = (
            X(this._element) || this._element.ownerDocument.documentElement
          ).contains(this._element);
        if (!e.defaultPrevented && t) {
          this._disposePopper();
          (e = this._getTipElement()),
            (t = (this._element.setAttribute(
              "aria-describedby",
              e.getAttribute("id")
            ),
            this._config)["container"]);
          if (
            (this._element.ownerDocument.documentElement.contains(this.tip) ||
              (t.append(e),
              m.trigger(this._element, this.constructor.eventName("inserted"))),
            (this._popper = this._createPopper(e)),
            e.classList.add(Hi),
            "ontouchstart" in document.documentElement)
          )
            for (const i of [].concat(...document.body.children))
              m.on(i, "mouseover", j);
          this._queueCallback(
            () => {
              m.trigger(this._element, this.constructor.eventName("shown")),
                !1 === this._isHovered && this._leave(),
                (this._isHovered = !1);
            },
            this.tip,
            this._isAnimated()
          );
        }
      }
    }
    hide() {
      if (this._isShown()) {
        var e = m.trigger(this._element, this.constructor.eventName("hide"));
        if (!e.defaultPrevented) {
          if (
            (this._getTipElement().classList.remove(Hi),
            "ontouchstart" in document.documentElement)
          )
            for (const t of [].concat(...document.body.children))
              m.off(t, "mouseover", j);
          (this._activeTrigger.click = !1),
            (this._activeTrigger[$i] = !1),
            (this._activeTrigger[Wi] = !1),
            (this._isHovered = null);
          this._queueCallback(
            () => {
              this._isWithActiveTrigger() ||
                (this._isHovered || this._disposePopper(),
                this._element.removeAttribute("aria-describedby"),
                m.trigger(this._element, this.constructor.eventName("hidden")));
            },
            this.tip,
            this._isAnimated()
          );
        }
      }
    }
    update() {
      this._popper && this._popper.update();
    }
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      return (
        this.tip ||
          (this.tip = this._createTipElement(
            this._newContent || this._getContentForTemplate()
          )),
        this.tip
      );
    }
    _createTipElement(e) {
      e = this._getTemplateFactory(e).toHtml();
      if (!e) return null;
      e.classList.remove(ji, Hi),
        e.classList.add(`bs-${this.constructor.NAME}-auto`);
      var t = ((e) => {
        for (
          ;
          (e += Math.floor(1e6 * Math.random())), document.getElementById(e);

        );
        return e;
      })(this.constructor.NAME).toString();
      return (
        e.setAttribute("id", t), this._isAnimated() && e.classList.add(ji), e
      );
    }
    setContent(e) {
      (this._newContent = e),
        this._isShown() && (this._disposePopper(), this.show());
    }
    _getTemplateFactory(e) {
      return (
        this._templateFactory
          ? this._templateFactory.changeContent(e)
          : (this._templateFactory = new Yi({
              ...this._config,
              content: e,
              extraClass: this._resolvePossibleFunction(
                this._config.customClass
              ),
            })),
        this._templateFactory
      );
    }
    _getContentForTemplate() {
      return { ".tooltip-inner": this._getTitle() };
    }
    _getTitle() {
      return (
        this._resolvePossibleFunction(this._config.title) ||
        this._element.getAttribute("data-bs-original-title")
      );
    }
    _initializeOnDelegatedTarget(e) {
      return this.constructor.getOrCreateInstance(
        e.delegateTarget,
        this._getDelegateConfig()
      );
    }
    _isAnimated() {
      return (
        this._config.animation || (this.tip && this.tip.classList.contains(ji))
      );
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(Hi);
    }
    _createPopper(e) {
      var t = d(this._config.placement, [this, e, this._element]),
        t = Gi[t.toUpperCase()];
      return $t(this._element, e, this._getPopperConfig(t));
    }
    _getOffset() {
      const t = this._config["offset"];
      return "string" == typeof t
        ? t.split(",").map((e) => Number.parseInt(e, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _resolvePossibleFunction(e) {
      return d(e, [this._element]);
    }
    _getPopperConfig(e) {
      e = {
        placement: e,
        modifiers: [
          {
            name: "flip",
            options: { fallbackPlacements: this._config.fallbackPlacements },
          },
          { name: "offset", options: { offset: this._getOffset() } },
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          {
            name: "arrow",
            options: { element: `.${this.constructor.NAME}-arrow` },
          },
          {
            name: "preSetPlacement",
            enabled: !0,
            phase: "beforeMain",
            fn: (e) => {
              this._getTipElement().setAttribute(
                "data-popper-placement",
                e.state.placement
              );
            },
          },
        ],
      };
      return { ...e, ...d(this._config.popperConfig, [e]) };
    }
    _setListeners() {
      var e, t;
      for (const i of this._config.trigger.split(" "))
        "click" === i
          ? m.on(
              this._element,
              this.constructor.eventName("click"),
              this._config.selector,
              (e) => {
                this._initializeOnDelegatedTarget(e).toggle();
              }
            )
          : "manual" !== i &&
            ((e =
              i === Wi
                ? this.constructor.eventName("mouseenter")
                : this.constructor.eventName("focusin")),
            (t =
              i === Wi
                ? this.constructor.eventName("mouseleave")
                : this.constructor.eventName("focusout")),
            m.on(this._element, e, this._config.selector, (e) => {
              var t = this._initializeOnDelegatedTarget(e);
              (t._activeTrigger["focusin" === e.type ? $i : Wi] = !0),
                t._enter();
            }),
            m.on(this._element, t, this._config.selector, (e) => {
              var t = this._initializeOnDelegatedTarget(e);
              (t._activeTrigger["focusout" === e.type ? $i : Wi] =
                t._element.contains(e.relatedTarget)),
                t._leave();
            }));
      (this._hideModalHandler = () => {
        this._element && this.hide();
      }),
        m.on(this._element.closest(".modal"), qi, this._hideModalHandler);
    }
    _fixTitle() {
      var e = this._element.getAttribute("title");
      e &&
        (this._element.getAttribute("aria-label") ||
          this._element.textContent.trim() ||
          this._element.setAttribute("aria-label", e),
        this._element.setAttribute("data-bs-original-title", e),
        this._element.removeAttribute("title"));
    }
    _enter() {
      this._isShown() || this._isHovered
        ? (this._isHovered = !0)
        : ((this._isHovered = !0),
          this._setTimeout(() => {
            this._isHovered && this.show();
          }, this._config.delay.show));
    }
    _leave() {
      this._isWithActiveTrigger() ||
        ((this._isHovered = !1),
        this._setTimeout(() => {
          this._isHovered || this.hide();
        }, this._config.delay.hide));
    }
    _setTimeout(e, t) {
      clearTimeout(this._timeout), (this._timeout = setTimeout(e, t));
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(!0);
    }
    _getConfig(e) {
      var t = u.getDataAttributes(this._element);
      for (const i of Object.keys(t)) Xi.has(i) && delete t[i];
      return (
        (e = { ...t, ...("object" == typeof e && e ? e : {}) }),
        (e = this._mergeConfigObj(e)),
        (e = this._configAfterMerge(e)),
        this._typeCheckConfig(e),
        e
      );
    }
    _configAfterMerge(e) {
      return (
        (e.container = !1 === e.container ? document.body : n(e.container)),
        "number" == typeof e.delay &&
          (e.delay = { show: e.delay, hide: e.delay }),
        "number" == typeof e.title && (e.title = e.title.toString()),
        "number" == typeof e.content && (e.content = e.content.toString()),
        e
      );
    }
    _getDelegateConfig() {
      var e,
        t,
        i = {};
      for ([e, t] of Object.entries(this._config))
        this.constructor.Default[e] !== t && (i[e] = t);
      return (i.selector = !1), (i.trigger = "manual"), i;
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), (this._popper = null)),
        this.tip && (this.tip.remove(), (this.tip = null));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        var e = Ki.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  e(Ki);
  const Qi = {
      ...Ki.Default,
      content: "",
      offset: [0, 8],
      placement: "right",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      trigger: "click",
    },
    Zi = { ...Ki.DefaultType, content: "(null|string|element|function)" };
  class Ji extends Ki {
    static get Default() {
      return Qi;
    }
    static get DefaultType() {
      return Zi;
    }
    static get NAME() {
      return "popover";
    }
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }
    _getContentForTemplate() {
      return {
        ".popover-header": this._getTitle(),
        ".popover-body": this._getContent(),
      };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        var e = Ji.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  e(Ji);
  Ve = ".bs.scrollspy";
  const es = "click" + Ve;
  const ts = "active",
    is = "[href]";
  const ss = {
      offset: null,
      rootMargin: "0px 0px -25%",
      smoothScroll: !1,
      target: null,
      threshold: [0.1, 0.5, 1],
    },
    ns = {
      offset: "(number|null)",
      rootMargin: "string",
      smoothScroll: "boolean",
      target: "element",
      threshold: "array",
    };
  class rs extends t {
    constructor(e, t) {
      super(e, t),
        (this._targetLinks = new Map()),
        (this._observableSections = new Map()),
        (this._rootElement =
          "visible" === getComputedStyle(this._element).overflowY
            ? null
            : this._element),
        (this._activeTarget = null),
        (this._observer = null),
        (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
        this.refresh();
    }
    static get Default() {
      return ss;
    }
    static get DefaultType() {
      return ns;
    }
    static get NAME() {
      return "scrollspy";
    }
    refresh() {
      this._initializeTargetsAndObservables(),
        this._maybeEnableSmoothScroll(),
        this._observer
          ? this._observer.disconnect()
          : (this._observer = this._getNewObserver());
      for (const e of this._observableSections.values())
        this._observer.observe(e);
    }
    dispose() {
      this._observer.disconnect(), super.dispose();
    }
    _configAfterMerge(e) {
      return (
        (e.target = n(e.target) || document.body),
        (e.rootMargin = e.offset ? e.offset + "px 0px -30%" : e.rootMargin),
        "string" == typeof e.threshold &&
          (e.threshold = e.threshold
            .split(",")
            .map((e) => Number.parseFloat(e))),
        e
      );
    }
    _maybeEnableSmoothScroll() {
      this._config.smoothScroll &&
        (m.off(this._config.target, es),
        m.on(this._config.target, es, is, (e) => {
          var t = this._observableSections.get(e.target.hash);
          t &&
            (e.preventDefault(),
            (e = this._rootElement || window),
            (t = t.offsetTop - this._element.offsetTop),
            e.scrollTo
              ? e.scrollTo({ top: t, behavior: "smooth" })
              : (e.scrollTop = t));
        }));
    }
    _getNewObserver() {
      var e = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin,
      };
      return new IntersectionObserver((e) => this._observerCallback(e), e);
    }
    _observerCallback(e) {
      const t = (e) => this._targetLinks.get("#" + e.target.id);
      var i = (e) => {
          (this._previousScrollData.visibleEntryTop = e.target.offsetTop),
            this._process(t(e));
        },
        s = (this._rootElement || document.documentElement).scrollTop,
        n = s >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = s;
      for (const a of e)
        if (a.isIntersecting) {
          var r =
            a.target.offsetTop >= this._previousScrollData.visibleEntryTop;
          if (n && r) {
            if ((i(a), s)) continue;
            return;
          }
          n || r || i(a);
        } else (this._activeTarget = null), this._clearActiveClass(t(a));
    }
    _initializeTargetsAndObservables() {
      var e;
      (this._targetLinks = new Map()), (this._observableSections = new Map());
      for (const t of c.find(is, this._config.target))
        t.hash &&
          !o(t) &&
          ((e = c.findOne(decodeURI(t.hash), this._element)), a(e)) &&
          (this._targetLinks.set(decodeURI(t.hash), t),
          this._observableSections.set(t.hash, e));
    }
    _process(e) {
      this._activeTarget !== e &&
        (this._clearActiveClass(this._config.target),
        (this._activeTarget = e).classList.add(ts),
        this._activateParents(e),
        m.trigger(this._element, "activate.bs.scrollspy", {
          relatedTarget: e,
        }));
    }
    _activateParents(e) {
      if (e.classList.contains("dropdown-item"))
        c.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(ts);
      else
        for (const t of c.parents(e, ".nav, .list-group"))
          for (const i of c.prev(
            t,
            ".nav-link, .nav-item > .nav-link, .list-group-item"
          ))
            i.classList.add(ts);
    }
    _clearActiveClass(e) {
      e.classList.remove(ts);
      for (const t of c.find(is + "." + ts, e)) t.classList.remove(ts);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        var e = rs.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  m.on(window, "load.bs.scrollspy.data-api", () => {
    for (const e of c.find('[data-bs-spy="scroll"]')) rs.getOrCreateInstance(e);
  }),
    e(rs);
  const as = "ArrowRight",
    os = "ArrowDown",
    ls = "Home",
    z = "active",
    ds = "show";
  yt =
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
  const us =
    '.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ' +
    yt;
  z, z, z;
  class cs extends t {
    constructor(e) {
      super(e),
        (this._parent = this._element.closest(
          '.list-group, .nav, [role="tablist"]'
        )),
        this._parent &&
          (this._setInitialAttributes(this._parent, this._getChildren()),
          m.on(this._element, "keydown.bs.tab", (e) => this._keydown(e)));
    }
    static get NAME() {
      return "tab";
    }
    show() {
      var e,
        t,
        i = this._element;
      this._elemIsActive(i) ||
        ((t = (e = this._getActiveElem())
          ? m.trigger(e, "hide.bs.tab", { relatedTarget: i })
          : null),
        m.trigger(i, "show.bs.tab", { relatedTarget: e }).defaultPrevented) ||
        (t && t.defaultPrevented) ||
        (this._deactivate(e, i), this._activate(i, e));
    }
    _activate(e, t) {
      e &&
        (e.classList.add(z),
        this._activate(c.getElementFromSelector(e)),
        this._queueCallback(
          () => {
            "tab" !== e.getAttribute("role")
              ? e.classList.add(ds)
              : (e.removeAttribute("tabindex"),
                e.setAttribute("aria-selected", !0),
                this._toggleDropDown(e, !0),
                m.trigger(e, "shown.bs.tab", { relatedTarget: t }));
          },
          e,
          e.classList.contains("fade")
        ));
    }
    _deactivate(e, t) {
      e &&
        (e.classList.remove(z),
        e.blur(),
        this._deactivate(c.getElementFromSelector(e)),
        this._queueCallback(
          () => {
            "tab" !== e.getAttribute("role")
              ? e.classList.remove(ds)
              : (e.setAttribute("aria-selected", !1),
                e.setAttribute("tabindex", "-1"),
                this._toggleDropDown(e, !1),
                m.trigger(e, "hidden.bs.tab", { relatedTarget: t }));
          },
          e,
          e.classList.contains("fade")
        ));
    }
    _keydown(t) {
      if (["ArrowLeft", as, "ArrowUp", os, ls, "End"].includes(t.key)) {
        t.stopPropagation(), t.preventDefault();
        var i,
          s = this._getChildren().filter((e) => !o(e));
        let e;
        (e = [ls, "End"].includes(t.key)
          ? s[t.key === ls ? 0 : s.length - 1]
          : ((i = [as, os].includes(t.key)), G(s, t.target, i, !0))) &&
          (e.focus({ preventScroll: !0 }), cs.getOrCreateInstance(e).show());
      }
    }
    _getChildren() {
      return c.find(us, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((e) => this._elemIsActive(e)) || null;
    }
    _setInitialAttributes(e, t) {
      this._setAttributeIfNotExists(e, "role", "tablist");
      for (const i of t) this._setInitialAttributesOnChild(i);
    }
    _setInitialAttributesOnChild(e) {
      e = this._getInnerElement(e);
      var t = this._elemIsActive(e),
        i = this._getOuterElement(e);
      e.setAttribute("aria-selected", t),
        i !== e && this._setAttributeIfNotExists(i, "role", "presentation"),
        t || e.setAttribute("tabindex", "-1"),
        this._setAttributeIfNotExists(e, "role", "tab"),
        this._setInitialAttributesOnTargetPanel(e);
    }
    _setInitialAttributesOnTargetPanel(e) {
      var t = c.getElementFromSelector(e);
      t &&
        (this._setAttributeIfNotExists(t, "role", "tabpanel"), e.id) &&
        this._setAttributeIfNotExists(t, "aria-labelledby", "" + e.id);
    }
    _toggleDropDown(e, i) {
      const s = this._getOuterElement(e);
      s.classList.contains("dropdown") &&
        ((e = (e, t) => {
          e = c.findOne(e, s);
          e && e.classList.toggle(t, i);
        })(".dropdown-toggle", z),
        e(".dropdown-menu", ds),
        s.setAttribute("aria-expanded", i));
    }
    _setAttributeIfNotExists(e, t, i) {
      e.hasAttribute(t) || e.setAttribute(t, i);
    }
    _elemIsActive(e) {
      return e.classList.contains(z);
    }
    _getInnerElement(e) {
      return e.matches(us) ? e : c.findOne(us, e);
    }
    _getOuterElement(e) {
      return e.closest(".nav-item, .list-group-item") || e;
    }
    static jQueryInterface(t) {
      return this.each(function () {
        var e = cs.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  m.on(document, "click.bs.tab", yt, function (e) {
    ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
      o(this) || cs.getOrCreateInstance(this).show();
  }),
    m.on(window, "load.bs.tab", () => {
      for (const e of c.find(
        '.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'
      ))
        cs.getOrCreateInstance(e);
    }),
    e(cs);
  const hs = "show",
    ps = "showing",
    fs = { animation: "boolean", autohide: "boolean", delay: "number" },
    ms = { animation: !0, autohide: !0, delay: 5e3 };
  class gs extends t {
    constructor(e, t) {
      super(e, t),
        (this._timeout = null),
        (this._hasMouseInteraction = !1),
        (this._hasKeyboardInteraction = !1),
        this._setListeners();
    }
    static get Default() {
      return ms;
    }
    static get DefaultType() {
      return fs;
    }
    static get NAME() {
      return "toast";
    }
    show() {
      m.trigger(this._element, "show.bs.toast").defaultPrevented ||
        (this._clearTimeout(),
        this._config.animation && this._element.classList.add("fade"),
        this._element.classList.remove("hide"),
        H(this._element),
        this._element.classList.add(hs, ps),
        this._queueCallback(
          () => {
            this._element.classList.remove(ps),
              m.trigger(this._element, "shown.bs.toast"),
              this._maybeScheduleHide();
          },
          this._element,
          this._config.animation
        ));
    }
    hide() {
      this.isShown() &&
        !m.trigger(this._element, "hide.bs.toast").defaultPrevented &&
        (this._element.classList.add(ps),
        this._queueCallback(
          () => {
            this._element.classList.add("hide"),
              this._element.classList.remove(ps, hs),
              m.trigger(this._element, "hidden.bs.toast");
          },
          this._element,
          this._config.animation
        ));
    }
    dispose() {
      this._clearTimeout(),
        this.isShown() && this._element.classList.remove(hs),
        super.dispose();
    }
    isShown() {
      return this._element.classList.contains(hs);
    }
    _maybeScheduleHide() {
      !this._config.autohide ||
        this._hasMouseInteraction ||
        this._hasKeyboardInteraction ||
        (this._timeout = setTimeout(() => {
          this.hide();
        }, this._config.delay));
    }
    _onInteraction(e, t) {
      switch (e.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = t;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = t;
      }
      t
        ? this._clearTimeout()
        : ((e = e.relatedTarget),
          this._element === e ||
            this._element.contains(e) ||
            this._maybeScheduleHide());
    }
    _setListeners() {
      m.on(this._element, "mouseover.bs.toast", (e) =>
        this._onInteraction(e, !0)
      ),
        m.on(this._element, "mouseout.bs.toast", (e) =>
          this._onInteraction(e, !1)
        ),
        m.on(this._element, "focusin.bs.toast", (e) =>
          this._onInteraction(e, !0)
        ),
        m.on(this._element, "focusout.bs.toast", (e) =>
          this._onInteraction(e, !1)
        );
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        var e = gs.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  return (
    pe(gs),
    e(gs),
    {
      Alert: fe,
      Button: ge,
      Carousel: ke,
      Collapse: Ie,
      Dropdown: E,
      Modal: Si,
      Offcanvas: O,
      Popover: Ji,
      ScrollSpy: rs,
      Tab: cs,
      Toast: gs,
      Tooltip: Ki,
    }
  );
}),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : ((e = e || self).GLightbox = t());
  })(this, function () {
    "use strict";
    function t(e) {
      return (t =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function a(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function s(e, t) {
      for (var i = 0; i < t.length; i++) {
        var s = t[i];
        (s.enumerable = s.enumerable || !1),
          (s.configurable = !0),
          "value" in s && (s.writable = !0),
          Object.defineProperty(e, s.key, s);
      }
    }
    function e(e, t, i) {
      t && s(e.prototype, t), i && s(e, i);
    }
    var o = Date.now();
    function d(e) {
      var t = {},
        i = !0,
        s = 0,
        n = arguments.length;
      "[object Boolean]" === Object.prototype.toString.call(e) &&
        ((i = e), s++);
      for (; s < n; s++) {
        r = void 0;
        var r,
          a = arguments[s];
        for (r in a)
          Object.prototype.hasOwnProperty.call(a, r) &&
            (i && "[object Object]" === Object.prototype.toString.call(a[r])
              ? (t[r] = d(!0, t[r], a[r]))
              : (t[r] = a[r]));
      }
      return t;
    }
    function h(e, t) {
      if (
        0 !=
        M(
          (e =
            A((e = !X(e) && e !== window && e !== document ? e : [e])) || u(e)
              ? e
              : [e])
        )
      )
        if (A(e) && !u(e))
          for (
            var i = e.length, s = 0;
            s < i && !1 !== t.call(e[s], e[s], s, e);
            s++
          );
        else if (u(e))
          for (var n in e)
            if (w(e, n) && !1 === t.call(e[n], e[n], n, e)) break;
    }
    function E(e, t, i) {
      var s = 1 < arguments.length && void 0 !== t ? t : null,
        n = 2 < arguments.length && void 0 !== i ? i : null,
        t = (e[o] = e[o] || []),
        r = { all: t, evt: null, found: null };
      return (
        s &&
          n &&
          0 < M(t) &&
          h(t, function (e, t) {
            if (e.eventName == s && e.fn.toString() == n.toString())
              return (r.found = !0), (r.evt = t), !1;
          }),
        r
      );
    }
    function L(i, e, t) {
      var e = 1 < arguments.length && void 0 !== e ? e : {},
        s = e.onElement,
        n = e.withCallback,
        r = e.avoidDuplicate,
        a = void 0 === r || r,
        r = e.once,
        o = void 0 !== r && r,
        r = e.useCapture,
        l = void 0 !== r && r,
        d = 2 < arguments.length ? t : void 0,
        u = s || [];
      function c(e) {
        Y(n) && n.call(d, e, this), o && c.destroy();
      }
      return (
        b(u) && (u = document.querySelectorAll(u)),
        (c.destroy = function () {
          h(u, function (e) {
            var t = E(e, i, c);
            t.found && t.all.splice(t.evt, 1),
              e.removeEventListener && e.removeEventListener(i, c, l);
          });
        }),
        h(u, function (e) {
          var t = E(e, i, c);
          ((e.addEventListener && a && !t.found) || !a) &&
            (e.addEventListener(i, c, l), t.all.push({ eventName: i, fn: c }));
        }),
        c
      );
    }
    function O(t, e) {
      h(e.split(" "), function (e) {
        return t.classList.add(e);
      });
    }
    function z(t, e) {
      h(e.split(" "), function (e) {
        return t.classList.remove(e);
      });
    }
    function I(e, t) {
      return e.classList.contains(t);
    }
    function B(e, t) {
      for (; e !== document.body; ) {
        if (!(e = e.parentElement)) return !1;
        if (
          "function" == typeof e.matches ? e.matches(t) : e.msMatchesSelector(t)
        )
          return e;
      }
    }
    function N(t, e, i) {
      var s,
        e = 1 < arguments.length && void 0 !== e ? e : "",
        n = 2 < arguments.length && void 0 !== i && i;
      if (t && "" !== e)
        return "none" === e
          ? Y(n) && n()
          : ((i = (function () {
              var e,
                t = document.createElement("fakeelement"),
                i = {
                  animation: "animationend",
                  OAnimation: "oAnimationEnd",
                  MozAnimation: "animationend",
                  WebkitAnimation: "webkitAnimationEnd",
                };
              for (e in i) if (void 0 !== t.style[e]) return i[e];
            })()),
            h((s = e.split(" ")), function (e) {
              O(t, "g" + e);
            }),
            void L(i, {
              onElement: t,
              avoidDuplicate: !1,
              once: !0,
              withCallback: function (e, t) {
                h(s, function (e) {
                  z(t, "g" + e);
                }),
                  Y(n) && n();
              },
            }));
    }
    function R(e, t) {
      t = 1 < arguments.length && void 0 !== t ? t : "";
      if ("" === t)
        return (
          (e.style.webkitTransform = ""),
          (e.style.MozTransform = ""),
          (e.style.msTransform = ""),
          (e.style.OTransform = ""),
          (e.style.transform = ""),
          !1
        );
      (e.style.webkitTransform = t),
        (e.style.MozTransform = t),
        (e.style.msTransform = t),
        (e.style.OTransform = t),
        (e.style.transform = t);
    }
    function C(e) {
      e.style.display = "block";
    }
    function l(e) {
      e.style.display = "none";
    }
    function g(e) {
      var t = document.createDocumentFragment(),
        i = document.createElement("div");
      for (i.innerHTML = e; i.firstChild; ) t.appendChild(i.firstChild);
      return t;
    }
    function W() {
      return {
        width:
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth,
        height:
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight,
      };
    }
    function v(e, t, i, s) {
      var n, r;
      e()
        ? t()
        : ((i = i || 100),
          (r = setInterval(function () {
            e() && (clearInterval(r), n && clearTimeout(n), t());
          }, i)),
          s &&
            (n = setTimeout(function () {
              clearInterval(r);
            }, s)));
    }
    function T(e, t, i) {
      if (j(e)) console.error("Inject assets error");
      else if ((Y(t) && ((i = t), (t = !1)), b(t) && t in window)) Y(i) && i();
      else {
        var s, n, r;
        if (-1 !== e.indexOf(".css"))
          return (
            ((s = document.querySelectorAll('link[href="' + e + '"]')) &&
              0 < s.length) ||
              ((a = (n =
                document.getElementsByTagName("head")[0]).querySelectorAll(
                'link[rel="stylesheet"]'
              )),
              ((r = document.createElement("link")).rel = "stylesheet"),
              (r.type = "text/css"),
              (r.href = e),
              (r.media = "all"),
              a ? n.insertBefore(r, a[0]) : n.appendChild(r)),
            Y(i) && i()
          );
        if (
          (s = document.querySelectorAll('script[src="' + e + '"]')) &&
          0 < s.length
        ) {
          if (Y(i)) {
            if (b(t))
              return v(
                function () {
                  return void 0 !== window[t];
                },
                function () {
                  i();
                }
              );
            i();
          }
        } else {
          var a = document.createElement("script");
          (a.type = "text/javascript"),
            (a.src = e),
            (a.onload = function () {
              if (Y(i)) {
                if (b(t))
                  return (
                    v(
                      function () {
                        return void 0 !== window[t];
                      },
                      function () {
                        i();
                      }
                    ),
                    !1
                  );
                i();
              }
            }),
            document.body.appendChild(a);
        }
      }
    }
    function y() {
      return (
        "navigator" in window &&
        window.navigator.userAgent.match(
          /(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i
        )
      );
    }
    function Y(e) {
      return "function" == typeof e;
    }
    function b(e) {
      return "string" == typeof e;
    }
    function X(e) {
      return e && e.nodeType && 1 == e.nodeType;
    }
    function S(e) {
      return Array.isArray(e);
    }
    function A(e) {
      return e && e.length && isFinite(e.length);
    }
    function u(e) {
      return "object" === t(e) && null != e && !Y(e) && !S(e);
    }
    function j(e) {
      return null == e;
    }
    function w(e, t) {
      return null !== e && hasOwnProperty.call(e, t);
    }
    function M(e) {
      if (u(e)) {
        if (e.keys) return e.keys().length;
        var t,
          i = 0;
        for (t in e) w(e, t) && i++;
        return i;
      }
      return e.length;
    }
    function H(e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    }
    function $(e) {
      var e = 0 < arguments.length && void 0 !== e ? e : -1,
        t = document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");
      if (!t.length) return !1;
      if (1 == t.length) return t[0];
      "string" == typeof e && (e = parseInt(e));
      var i = [],
        t =
          (h(t, function (e) {
            i.push(e.getAttribute("data-taborder"));
          }),
          Math.max.apply(
            Math,
            i.map(function (e) {
              return parseInt(e);
            })
          )),
        s = e < 0 ? 1 : e + 1;
      t < s && (s = "1");
      e = i
        .filter(function (e) {
          return e >= parseInt(s);
        })
        .sort()[0];
      return document.querySelector('.gbtn[data-taborder="'.concat(e, '"]'));
    }
    function p(e) {
      return Math.sqrt(e.x * e.x + e.y * e.y);
    }
    e(i, [
      {
        key: "add",
        value: function (e) {
          this.handlers.push(e);
        },
      },
      {
        key: "del",
        value: function (e) {
          e || (this.handlers = []);
          for (var t = this.handlers.length; 0 <= t; t--)
            this.handlers[t] === e && this.handlers.splice(t, 1);
        },
      },
      {
        key: "dispatch",
        value: function () {
          for (var e = 0, t = this.handlers.length; e < t; e++) {
            var i = this.handlers[e];
            "function" == typeof i && i.apply(this.el, arguments);
          }
        },
      },
    ]);
    var k = i;
    function i(e) {
      a(this, i), (this.handlers = []), (this.el = e);
    }
    function n(e, t) {
      e = new k(e);
      return e.add(t), e;
    }
    e(r, [
      {
        key: "start",
        value: function (e) {
          var t, i;
          e.touches &&
            (e.target &&
            e.target.nodeName &&
            0 <=
              ["a", "button", "input"].indexOf(e.target.nodeName.toLowerCase())
              ? console.log(
                  "ignore drag for this touched element",
                  e.target.nodeName.toLowerCase()
                )
              : ((this.now = Date.now()),
                (this.x1 = e.touches[0].pageX),
                (this.y1 = e.touches[0].pageY),
                (this.delta = this.now - (this.last || this.now)),
                this.touchStart.dispatch(e, this.element),
                null !== this.preTapPosition.x &&
                  ((this.isDoubleTap =
                    0 < this.delta &&
                    this.delta <= 250 &&
                    Math.abs(this.preTapPosition.x - this.x1) < 30 &&
                    Math.abs(this.preTapPosition.y - this.y1) < 30),
                  this.isDoubleTap) &&
                  clearTimeout(this.singleTapTimeout),
                (this.preTapPosition.x = this.x1),
                (this.preTapPosition.y = this.y1),
                (this.last = this.now),
                (t = this.preV),
                1 < e.touches.length &&
                  (this._cancelLongTap(),
                  this._cancelSingleTap(),
                  (i = {
                    x: e.touches[1].pageX - this.x1,
                    y: e.touches[1].pageY - this.y1,
                  }),
                  (t.x = i.x),
                  (t.y = i.y),
                  (this.pinchStartLen = p(t)),
                  this.multipointStart.dispatch(e, this.element)),
                (this._preventTap = !1),
                (this.longTapTimeout = setTimeout(
                  function () {
                    this.longTap.dispatch(e, this.element),
                      (this._preventTap = !0);
                  }.bind(this),
                  750
                ))));
        },
      },
      {
        key: "move",
        value: function (e) {
          var t, i, s, n, r, a, o, l, d, u, c, h;
          e.touches &&
            ((t = this.preV),
            (i = e.touches.length),
            (s = e.touches[0].pageX),
            (n = e.touches[0].pageY),
            (this.isDoubleTap = !1),
            1 < i
              ? ((r = e.touches[1].pageX),
                (a = e.touches[1].pageY),
                (o = { x: e.touches[1].pageX - s, y: e.touches[1].pageY - n }),
                null !== t.x &&
                  (0 < this.pinchStartLen &&
                    ((e.zoom = p(o) / this.pinchStartLen),
                    this.pinch.dispatch(e, this.element)),
                  (e.angle =
                    ((h = d = t),
                    (h =
                      0 == (c = p((u = l = o)) * p(h))
                        ? 0
                        : (1 < (u = (u.x * h.x + u.y * h.y) / c) && (u = 1),
                          Math.acos(u))),
                    0 < l.x * d.y - d.x * l.y && (h *= -1),
                    (180 * h) / Math.PI)),
                  this.rotate.dispatch(e, this.element)),
                (t.x = o.x),
                (t.y = o.y),
                null !== this.x2 && null !== this.sx2
                  ? ((e.deltaX = (s - this.x2 + r - this.sx2) / 2),
                    (e.deltaY = (n - this.y2 + a - this.sy2) / 2))
                  : ((e.deltaX = 0), (e.deltaY = 0)),
                this.twoFingerPressMove.dispatch(e, this.element),
                (this.sx2 = r),
                (this.sy2 = a))
              : (null !== this.x2
                  ? ((e.deltaX = s - this.x2),
                    (e.deltaY = n - this.y2),
                    (c = Math.abs(this.x1 - this.x2)),
                    (u = Math.abs(this.y1 - this.y2)),
                    (10 < c || 10 < u) && (this._preventTap = !0))
                  : ((e.deltaX = 0), (e.deltaY = 0)),
                this.pressMove.dispatch(e, this.element)),
            this.touchMove.dispatch(e, this.element),
            this._cancelLongTap(),
            (this.x2 = s),
            (this.y2 = n),
            1 < i) &&
            e.preventDefault();
        },
      },
      {
        key: "end",
        value: function (e) {
          var t;
          e.changedTouches &&
            (this._cancelLongTap(),
            (t = this),
            e.touches.length < 2 &&
              (this.multipointEnd.dispatch(e, this.element),
              (this.sx2 = this.sy2 = null)),
            (this.x2 && 30 < Math.abs(this.x1 - this.x2)) ||
            (this.y2 && 30 < Math.abs(this.y1 - this.y2))
              ? ((e.direction = this._swipeDirection(
                  this.x1,
                  this.x2,
                  this.y1,
                  this.y2
                )),
                (this.swipeTimeout = setTimeout(function () {
                  t.swipe.dispatch(e, t.element);
                }, 0)))
              : ((this.tapTimeout = setTimeout(function () {
                  t._preventTap || t.tap.dispatch(e, t.element),
                    t.isDoubleTap &&
                      (t.doubleTap.dispatch(e, t.element),
                      (t.isDoubleTap = !1));
                }, 0)),
                t.isDoubleTap ||
                  (t.singleTapTimeout = setTimeout(function () {
                    t.singleTap.dispatch(e, t.element);
                  }, 250))),
            this.touchEnd.dispatch(e, this.element),
            (this.preV.x = 0),
            (this.preV.y = 0),
            (this.zoom = 1),
            (this.pinchStartLen = null),
            (this.x1 = this.x2 = this.y1 = this.y2 = null));
        },
      },
      {
        key: "cancelAll",
        value: function () {
          (this._preventTap = !0),
            clearTimeout(this.singleTapTimeout),
            clearTimeout(this.tapTimeout),
            clearTimeout(this.longTapTimeout),
            clearTimeout(this.swipeTimeout);
        },
      },
      {
        key: "cancel",
        value: function (e) {
          this.cancelAll(), this.touchCancel.dispatch(e, this.element);
        },
      },
      {
        key: "_cancelLongTap",
        value: function () {
          clearTimeout(this.longTapTimeout);
        },
      },
      {
        key: "_cancelSingleTap",
        value: function () {
          clearTimeout(this.singleTapTimeout);
        },
      },
      {
        key: "_swipeDirection",
        value: function (e, t, i, s) {
          return Math.abs(e - t) >= Math.abs(i - s)
            ? 0 < e - t
              ? "Left"
              : "Right"
            : 0 < i - s
            ? "Up"
            : "Down";
        },
      },
      {
        key: "on",
        value: function (e, t) {
          this[e] && this[e].add(t);
        },
      },
      {
        key: "off",
        value: function (e, t) {
          this[e] && this[e].del(t);
        },
      },
      {
        key: "destroy",
        value: function () {
          return (
            this.singleTapTimeout && clearTimeout(this.singleTapTimeout),
            this.tapTimeout && clearTimeout(this.tapTimeout),
            this.longTapTimeout && clearTimeout(this.longTapTimeout),
            this.swipeTimeout && clearTimeout(this.swipeTimeout),
            this.element.removeEventListener("touchstart", this.start),
            this.element.removeEventListener("touchmove", this.move),
            this.element.removeEventListener("touchend", this.end),
            this.element.removeEventListener("touchcancel", this.cancel),
            this.rotate.del(),
            this.touchStart.del(),
            this.multipointStart.del(),
            this.multipointEnd.del(),
            this.pinch.del(),
            this.swipe.del(),
            this.tap.del(),
            this.doubleTap.del(),
            this.longTap.del(),
            this.singleTap.del(),
            this.pressMove.del(),
            this.twoFingerPressMove.del(),
            this.touchMove.del(),
            this.touchEnd.del(),
            this.touchCancel.del(),
            (this.preV =
              this.pinchStartLen =
              this.zoom =
              this.isDoubleTap =
              this.delta =
              this.last =
              this.now =
              this.tapTimeout =
              this.singleTapTimeout =
              this.longTapTimeout =
              this.swipeTimeout =
              this.x1 =
              this.x2 =
              this.y1 =
              this.y2 =
              this.preTapPosition =
              this.rotate =
              this.touchStart =
              this.multipointStart =
              this.multipointEnd =
              this.pinch =
              this.swipe =
              this.tap =
              this.doubleTap =
              this.longTap =
              this.singleTap =
              this.pressMove =
              this.touchMove =
              this.touchEnd =
              this.touchCancel =
              this.twoFingerPressMove =
                null),
            window.removeEventListener("scroll", this._cancelAllHandler),
            null
          );
        },
      },
    ]);
    var G = r;
    function r(e, t) {
      a(this, r),
        (this.element = "string" == typeof e ? document.querySelector(e) : e),
        (this.start = this.start.bind(this)),
        (this.move = this.move.bind(this)),
        (this.end = this.end.bind(this)),
        (this.cancel = this.cancel.bind(this)),
        this.element.addEventListener("touchstart", this.start, !1),
        this.element.addEventListener("touchmove", this.move, !1),
        this.element.addEventListener("touchend", this.end, !1),
        this.element.addEventListener("touchcancel", this.cancel, !1),
        (this.preV = { x: null, y: null }),
        (this.pinchStartLen = null),
        (this.zoom = 1),
        (this.isDoubleTap = !1);
      function i() {}
      (this.rotate = n(this.element, t.rotate || i)),
        (this.touchStart = n(this.element, t.touchStart || i)),
        (this.multipointStart = n(this.element, t.multipointStart || i)),
        (this.multipointEnd = n(this.element, t.multipointEnd || i)),
        (this.pinch = n(this.element, t.pinch || i)),
        (this.swipe = n(this.element, t.swipe || i)),
        (this.tap = n(this.element, t.tap || i)),
        (this.doubleTap = n(this.element, t.doubleTap || i)),
        (this.longTap = n(this.element, t.longTap || i)),
        (this.singleTap = n(this.element, t.singleTap || i)),
        (this.pressMove = n(this.element, t.pressMove || i)),
        (this.twoFingerPressMove = n(this.element, t.twoFingerPressMove || i)),
        (this.touchMove = n(this.element, t.touchMove || i)),
        (this.touchEnd = n(this.element, t.touchEnd || i)),
        (this.touchCancel = n(this.element, t.touchCancel || i)),
        (this.translateContainer = this.element),
        (this._cancelAllHandler = this.cancelAll.bind(this)),
        window.addEventListener("scroll", this._cancelAllHandler),
        (this.delta = null),
        (this.last = null),
        (this.now = null),
        (this.tapTimeout = null),
        (this.singleTapTimeout = null),
        (this.longTapTimeout = null),
        (this.swipeTimeout = null),
        (this.x1 = this.x2 = this.y1 = this.y2 = null),
        (this.preTapPosition = { x: null, y: null });
    }
    function q(e) {
      var t = (function () {
          var e,
            t = document.createElement("fakeelement"),
            i = {
              transition: "transitionend",
              OTransition: "oTransitionEnd",
              MozTransition: "transitionend",
              WebkitTransition: "webkitTransitionEnd",
            };
          for (e in i) if (void 0 !== t.style[e]) return i[e];
        })(),
        i =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth,
        s = I(e, "gslide-media") ? e : e.querySelector(".gslide-media"),
        n = B(s, ".ginner-container"),
        e = e.querySelector(".gslide-description");
      O((s = 769 < i ? n : s), "greset"),
        R(s, "translate3d(0, 0, 0)"),
        L(t, {
          onElement: s,
          once: !0,
          withCallback: function (e, t) {
            z(s, "greset");
          },
        }),
        (s.style.opacity = ""),
        e && (e.style.opacity = "");
    }
    e(f, [
      {
        key: "zoomIn",
        value: function () {
          var e,
            t = this.widowWidth();
          this.zoomedIn ||
            t <= 768 ||
            ((e = this.img).setAttribute("data-style", e.getAttribute("style")),
            (e.style.maxWidth = e.naturalWidth + "px"),
            (e.style.maxHeight = e.naturalHeight + "px"),
            e.naturalWidth > t &&
              ((t = t / 2 - e.naturalWidth / 2),
              this.setTranslate(this.img.parentNode, t, 0)),
            this.slide.classList.add("zoomed"),
            (this.zoomedIn = !0));
        },
      },
      {
        key: "zoomOut",
        value: function () {
          this.img.parentNode.setAttribute("style", ""),
            this.img.setAttribute("style", this.img.getAttribute("data-style")),
            this.slide.classList.remove("zoomed"),
            (this.zoomedIn = !1),
            (this.currentX = null),
            (this.currentY = null),
            (this.initialX = null),
            (this.initialY = null),
            (this.xOffset = 0),
            (this.yOffset = 0),
            this.onclose && "function" == typeof this.onclose && this.onclose();
        },
      },
      {
        key: "dragStart",
        value: function (e) {
          e.preventDefault(),
            this.zoomedIn
              ? ("touchstart" === e.type
                  ? ((this.initialX = e.touches[0].clientX - this.xOffset),
                    (this.initialY = e.touches[0].clientY - this.yOffset))
                  : ((this.initialX = e.clientX - this.xOffset),
                    (this.initialY = e.clientY - this.yOffset)),
                e.target === this.img &&
                  ((this.active = !0), this.img.classList.add("dragging")))
              : (this.active = !1);
        },
      },
      {
        key: "dragEnd",
        value: function (e) {
          var t = this;
          e.preventDefault(),
            (this.initialX = this.currentX),
            (this.initialY = this.currentY),
            (this.active = !1),
            setTimeout(function () {
              (t.dragging = !1),
                (t.img.isDragging = !1),
                t.img.classList.remove("dragging");
            }, 100);
        },
      },
      {
        key: "drag",
        value: function (e) {
          this.active &&
            (e.preventDefault(),
            "touchmove" === e.type
              ? ((this.currentX = e.touches[0].clientX - this.initialX),
                (this.currentY = e.touches[0].clientY - this.initialY))
              : ((this.currentX = e.clientX - this.initialX),
                (this.currentY = e.clientY - this.initialY)),
            (this.xOffset = this.currentX),
            (this.yOffset = this.currentY),
            (this.img.isDragging = !0),
            (this.dragging = !0),
            this.setTranslate(this.img, this.currentX, this.currentY));
        },
      },
      {
        key: "onMove",
        value: function (e) {
          var t;
          this.zoomedIn &&
            ((t = e.clientX - this.img.naturalWidth / 2),
            (e = e.clientY - this.img.naturalHeight / 2),
            this.setTranslate(this.img, t, e));
        },
      },
      {
        key: "setTranslate",
        value: function (e, t, i) {
          e.style.transform = "translate3d(" + t + "px, " + i + "px, 0)";
        },
      },
      {
        key: "widowWidth",
        value: function () {
          return (
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth
          );
        },
      },
    ]);
    var P = f,
      F =
        (e(c, [
          {
            key: "dragStart",
            value: function (e) {
              var t;
              this.slide.classList.contains("zoomed") ||
              ("touchstart" === e.type
                ? ((this.initialX = e.touches[0].clientX - this.xOffset),
                  (this.initialY = e.touches[0].clientY - this.yOffset))
                : ((this.initialX = e.clientX - this.xOffset),
                  (this.initialY = e.clientY - this.yOffset)),
              (t = e.target.nodeName.toLowerCase()),
              e.target.classList.contains("nodrag")) ||
              B(e.target, ".nodrag") ||
              -1 !== ["input", "select", "textarea", "button", "a"].indexOf(t)
                ? (this.active = !1)
                : (e.preventDefault(),
                  (e.target === this.el ||
                    ("img" !== t && B(e.target, ".gslide-inline"))) &&
                    ((this.active = !0),
                    this.el.classList.add("dragging"),
                    (this.dragContainer = B(e.target, ".ginner-container"))));
            },
          },
          {
            key: "dragEnd",
            value: function (e) {
              var t = this;
              e && e.preventDefault(),
                (this.initialX = 0),
                (this.initialY = 0),
                (this.currentX = null),
                (this.currentY = null),
                (this.initialX = null),
                (this.initialY = null),
                (this.xOffset = 0),
                (this.yOffset = 0),
                (this.active = !1),
                this.doSlideChange &&
                  ((this.instance.preventOutsideClick = !0),
                  "right" == this.doSlideChange && this.instance.prevSlide(),
                  "left" == this.doSlideChange) &&
                  this.instance.nextSlide(),
                this.doSlideClose && this.instance.close(),
                this.toleranceReached ||
                  this.setTranslate(this.dragContainer, 0, 0, !0),
                setTimeout(function () {
                  (t.instance.preventOutsideClick = !1),
                    (t.toleranceReached = !1),
                    (t.lastDirection = null),
                    (t.dragging = !1),
                    (t.el.isDragging = !1),
                    t.el.classList.remove("dragging"),
                    t.slide.classList.remove("dragging-nav"),
                    (t.dragContainer.style.transform = ""),
                    (t.dragContainer.style.transition = "");
                }, 100);
            },
          },
          {
            key: "drag",
            value: function (e) {
              if (this.active) {
                e.preventDefault(),
                  this.slide.classList.add("dragging-nav"),
                  "touchmove" === e.type
                    ? ((this.currentX = e.touches[0].clientX - this.initialX),
                      (this.currentY = e.touches[0].clientY - this.initialY))
                    : ((this.currentX = e.clientX - this.initialX),
                      (this.currentY = e.clientY - this.initialY)),
                  (this.xOffset = this.currentX),
                  (this.yOffset = this.currentY),
                  (this.el.isDragging = !0),
                  (this.dragging = !0),
                  (this.doSlideChange = !1),
                  (this.doSlideClose = !1);
                var e = Math.abs(this.currentX),
                  t = Math.abs(this.currentY);
                if (
                  0 < e &&
                  e >= Math.abs(this.currentY) &&
                  (!this.lastDirection || "x" == this.lastDirection)
                ) {
                  (this.yOffset = 0),
                    (this.lastDirection = "x"),
                    this.setTranslate(this.dragContainer, this.currentX, 0);
                  var i = this.shouldChange();
                  if (
                    (!this.instance.settings.dragAutoSnap &&
                      i &&
                      (this.doSlideChange = i),
                    this.instance.settings.dragAutoSnap && i)
                  )
                    return (
                      (this.instance.preventOutsideClick = !0),
                      (this.toleranceReached = !0),
                      (this.active = !1),
                      (this.instance.preventOutsideClick = !0),
                      this.dragEnd(null),
                      "right" == i && this.instance.prevSlide(),
                      void ("left" == i && this.instance.nextSlide())
                    );
                }
                0 < this.toleranceY &&
                  0 < t &&
                  e <= t &&
                  (!this.lastDirection || "y" == this.lastDirection) &&
                  ((this.xOffset = 0),
                  (this.lastDirection = "y"),
                  this.setTranslate(this.dragContainer, 0, this.currentY),
                  (i = this.shouldClose()),
                  !this.instance.settings.dragAutoSnap &&
                    i &&
                    (this.doSlideClose = !0),
                  this.instance.settings.dragAutoSnap) &&
                  i &&
                  this.instance.close();
              }
            },
          },
          {
            key: "shouldChange",
            value: function () {
              var e,
                t = !1;
              return (t =
                Math.abs(this.currentX) >= this.toleranceX &&
                (("left" == (e = 0 < this.currentX ? "right" : "left") &&
                  this.slide !== this.slide.parentNode.lastChild) ||
                  ("right" == e &&
                    this.slide !== this.slide.parentNode.firstChild))
                  ? e
                  : t);
            },
          },
          {
            key: "shouldClose",
            value: function () {
              var e = !1;
              return (e = Math.abs(this.currentY) >= this.toleranceY ? !0 : e);
            },
          },
          {
            key: "setTranslate",
            value: function (e, t, i) {
              (e.style.transition =
                3 < arguments.length && void 0 !== arguments[3] && arguments[3]
                  ? "all .2s ease"
                  : ""),
                (e.style.transform = "translate3d("
                  .concat(t, "px, ")
                  .concat(i, "px, 0)"));
            },
          },
        ]),
        c);
    function c() {
      var t = this,
        e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
        i = (a(this, c), e.dragEl),
        s = e.toleranceX,
        s = void 0 === s ? 40 : s,
        n = e.toleranceY,
        n = void 0 === n ? 65 : n,
        r = e.slide,
        r = void 0 === r ? null : r,
        e = e.instance,
        e = void 0 === e ? null : e;
      (this.el = i),
        (this.active = !1),
        (this.dragging = !1),
        (this.currentX = null),
        (this.currentY = null),
        (this.initialX = null),
        (this.initialY = null),
        (this.xOffset = 0),
        (this.yOffset = 0),
        (this.direction = null),
        (this.lastDirection = null),
        (this.toleranceX = s),
        (this.toleranceY = n),
        (this.toleranceReached = !1),
        (this.dragContainer = this.el),
        (this.slide = r),
        (this.instance = e),
        this.el.addEventListener(
          "mousedown",
          function (e) {
            return t.dragStart(e);
          },
          !1
        ),
        this.el.addEventListener(
          "mouseup",
          function (e) {
            return t.dragEnd(e);
          },
          !1
        ),
        this.el.addEventListener(
          "mousemove",
          function (e) {
            return t.drag(e);
          },
          !1
        );
    }
    function f(e, t) {
      var i = this,
        s =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (
        (a(this, f),
        (this.img = e),
        (this.slide = t),
        (this.onclose = s),
        this.img.setZoomEvents)
      )
        return !1;
      (this.active = !1),
        (this.zoomedIn = !1),
        (this.dragging = !1),
        (this.currentX = null),
        (this.currentY = null),
        (this.initialX = null),
        (this.initialY = null),
        (this.xOffset = 0),
        (this.yOffset = 0),
        this.img.addEventListener(
          "mousedown",
          function (e) {
            return i.dragStart(e);
          },
          !1
        ),
        this.img.addEventListener(
          "mouseup",
          function (e) {
            return i.dragEnd(e);
          },
          !1
        ),
        this.img.addEventListener(
          "mousemove",
          function (e) {
            return i.drag(e);
          },
          !1
        ),
        this.img.addEventListener(
          "click",
          function (e) {
            return i.slide.classList.contains("dragging-nav")
              ? (i.zoomOut(), !1)
              : i.zoomedIn
              ? void (i.zoomedIn && !i.dragging && i.zoomOut())
              : i.zoomIn();
          },
          !1
        ),
        (this.img.setZoomEvents = !0);
    }
    function V(e) {
      var t = B(e.target, ".gslide-media");
      "enterfullscreen" === e.type && O(t, "fullscreen"),
        "exitfullscreen" === e.type && z(t, "fullscreen");
    }
    e(x, [
      {
        key: "sourceType",
        value: function (e) {
          var t = e;
          return null !==
            (e = e.toLowerCase()).match(
              /\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/
            )
            ? "image"
            : e.match(
                /(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/
              ) ||
              e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) ||
              e.match(
                /(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/
              ) ||
              e.match(/vimeo\.com\/([0-9]*)/) ||
              null !== e.match(/\.(mp4|ogg|webm|mov)/)
            ? "video"
            : null !== e.match(/\.(mp3|wav|wma|aac|ogg)/)
            ? "audio"
            : -1 < e.indexOf("#") && "" !== t.split("#").pop().trim()
            ? "inline"
            : -1 < e.indexOf("goajax=true")
            ? "ajax"
            : "external";
        },
      },
      {
        key: "parseConfig",
        value: function (s, n) {
          var r = this,
            a = d({ descPosition: n.descPosition }, this.defaults);
          if (u(s) && !X(s))
            return (
              w(s, "type") ||
                (w(s, "content") && s.content
                  ? (s.type = "inline")
                  : w(s, "href") && (s.type = this.sourceType(s.href))),
              (t = d(a, s)),
              this.setSize(t, n),
              t
            );
          var o,
            e,
            t = "",
            l = s.getAttribute("data-glightbox"),
            i = s.nodeName.toLowerCase();
          if (
            ("a" === i && (t = s.href),
            "img" === i && ((t = s.src), (a.alt = s.alt)),
            (a.href = t),
            h(a, function (e, t) {
              w(n, t) && "width" !== t && (a[t] = n[t]);
              var i = s.dataset[t];
              j(i) || (a[t] = r.sanitizeValue(i));
            }),
            a.content && (a.type = "inline"),
            !a.type && t && (a.type = this.sourceType(t)),
            j(l)
              ? (a.title ||
                  "a" != i ||
                  j((t = s.title)) ||
                  "" === t ||
                  (a.title = t),
                a.title ||
                  "img" != i ||
                  j((t = s.alt)) ||
                  "" === t ||
                  (a.title = t))
              : ((o = []),
                h(a, function (e, t) {
                  o.push(";\\s?" + t);
                }),
                (o = o.join("\\s?:|")),
                "" !== l.trim() &&
                  h(a, function (e, t) {
                    var i = l,
                      s = new RegExp("s?" + t + "s?:s?(.*?)(" + o + "s?:|$)"),
                      i = i.match(s);
                    i &&
                      i.length &&
                      i[1] &&
                      ((s = i[1].trim().replace(/;\s*$/, "")),
                      (a[t] = r.sanitizeValue(s)));
                  })),
            a.description && "." === a.description.substring(0, 1))
          ) {
            try {
              e = document.querySelector(a.description).innerHTML;
            } catch (s) {
              if (!(s instanceof DOMException)) throw s;
            }
            e && (a.description = e);
          }
          return (
            a.description ||
              ((i = s.querySelector(".glightbox-desc")) &&
                (a.description = i.innerHTML)),
            this.setSize(a, n, s),
            (this.slideConfig = a)
          );
        },
      },
      {
        key: "setSize",
        value: function (e, t) {
          var i =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            s =
              "video" == e.type
                ? this.checkSize(t.videosWidth)
                : this.checkSize(t.width),
            t = this.checkSize(t.height);
          return (
            (e.width =
              w(e, "width") && "" !== e.width ? this.checkSize(e.width) : s),
            (e.height =
              w(e, "height") && "" !== e.height ? this.checkSize(e.height) : t),
            i &&
              "image" == e.type &&
              ((e._hasCustomWidth = !!i.dataset.width),
              (e._hasCustomHeight = !!i.dataset.height)),
            e
          );
        },
      },
      {
        key: "checkSize",
        value: function (e) {
          return H(e) ? "".concat(e, "px") : e;
        },
      },
      {
        key: "sanitizeValue",
        value: function (e) {
          return "true" !== e && "false" !== e ? e : "true" === e;
        },
      },
    ]);
    var U = x,
      m =
        (e(D, [
          {
            key: "setContent",
            value: function () {
              var t = this,
                i =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : null,
                e =
                  1 < arguments.length &&
                  void 0 !== arguments[1] &&
                  arguments[1];
              if (I(i, "loaded")) return !1;
              var s,
                n = this.instance.settings,
                r = this.slideConfig,
                a = y(),
                o =
                  (Y(n.beforeSlideLoad) &&
                    n.beforeSlideLoad({
                      index: this.index,
                      slide: i,
                      player: !1,
                    }),
                  r.type),
                l = r.descPosition,
                d = i.querySelector(".gslide-media"),
                u = i.querySelector(".gslide-title"),
                c = i.querySelector(".gslide-desc"),
                h = i.querySelector(".gdesc-inner"),
                p = e,
                f = "gSlideTitle_" + this.index,
                m = "gSlideDesc_" + this.index;
              if (
                (Y(n.afterSlideLoad) &&
                  (p = function () {
                    Y(e) && e(),
                      n.afterSlideLoad({
                        index: t.index,
                        slide: i,
                        player: t.instance.getSlidePlayerInstance(t.index),
                      });
                  }),
                "" == r.title && "" == r.description
                  ? h && h.parentNode.parentNode.removeChild(h.parentNode)
                  : (u && "" !== r.title
                      ? ((u.id = f), (u.innerHTML = r.title))
                      : u.parentNode.removeChild(u),
                    c && "" !== r.description
                      ? ((c.id = m),
                        a && 0 < n.moreLength
                          ? ((r.smallDescription = this.slideShortDesc(
                              r.description,
                              n.moreLength,
                              n.moreText
                            )),
                            (c.innerHTML = r.smallDescription),
                            this.descriptionEvents(c, r))
                          : (c.innerHTML = r.description))
                      : c.parentNode.removeChild(c),
                    O(d.parentNode, "desc-".concat(l)),
                    O(h.parentNode, "description-".concat(l))),
                O(d, "gslide-".concat(o)),
                O(i, "loaded"),
                "video" !== o)
              ) {
                if ("external" !== o)
                  return "inline" === o
                    ? (function (e, t, i, s) {
                        var n,
                          r = this,
                          e = e.querySelector(".gslide-media"),
                          a =
                            !(!w(t, "href") || !t.href) &&
                            t.href.split("#").pop().trim(),
                          o = !(!w(t, "content") || !t.content) && t.content;
                        if (
                          (o &&
                            (b(o) &&
                              (n = g(
                                '<div class="ginlined-content">'.concat(
                                  o,
                                  "</div>"
                                )
                              )),
                            X(o)) &&
                            ("none" == o.style.display &&
                              (o.style.display = "block"),
                            ((l = document.createElement("div")).className =
                              "ginlined-content"),
                            l.appendChild(o),
                            (n = l)),
                          a)
                        ) {
                          o = document.getElementById(a);
                          if (!o) return !1;
                          var l = o.cloneNode(!0);
                          (l.style.height = t.height),
                            (l.style.maxWidth = t.width),
                            O(l, "ginlined-content"),
                            (n = l);
                        }
                        if (!n)
                          return (
                            console.error(
                              "Unable to append inline slide content",
                              t
                            ),
                            !1
                          );
                        (e.style.height = t.height),
                          (e.style.width = t.width),
                          e.appendChild(n),
                          (this.events["inlineclose" + a] = L("click", {
                            onElement: e.querySelectorAll(".gtrigger-close"),
                            withCallback: function (e) {
                              e.preventDefault(), r.close();
                            },
                          })),
                          Y(s) && s();
                      }.apply(this.instance, [i, r, this.index, p]),
                      void (
                        r.draggable &&
                        new F({
                          dragEl: i.querySelector(".gslide-inline"),
                          toleranceX: n.dragToleranceX,
                          toleranceY: n.dragToleranceY,
                          slide: i,
                          instance: this.instance,
                        })
                      ))
                    : void ("image" !== o
                        ? Y(p) && p()
                        : ((f = i),
                          (u = r),
                          (m = this.index),
                          (s = function () {
                            var e = i.querySelector("img");
                            r.draggable &&
                              new F({
                                dragEl: e,
                                toleranceX: n.dragToleranceX,
                                toleranceY: n.dragToleranceY,
                                slide: i,
                                instance: t.instance,
                              }),
                              r.zoomable &&
                                e.naturalWidth > e.offsetWidth &&
                                (O(e, "zoomable"),
                                new P(e, i, function () {
                                  t.instance.resize();
                                })),
                              Y(p) && p();
                          }),
                          (f = f.querySelector(".gslide-media")),
                          (a = new Image()),
                          (c = "gSlideTitle_" + m),
                          (m = "gSlideDesc_" + m),
                          a.addEventListener(
                            "load",
                            function () {
                              Y(s) && s();
                            },
                            !1
                          ),
                          (a.src = u.href),
                          "" != u.sizes &&
                            "" != u.srcset &&
                            ((a.sizes = u.sizes), (a.srcset = u.srcset)),
                          (a.alt = ""),
                          j(u.alt) || "" === u.alt || (a.alt = u.alt),
                          "" !== u.title &&
                            a.setAttribute("aria-labelledby", c),
                          "" !== u.description &&
                            a.setAttribute("aria-describedby", m),
                          u.hasOwnProperty("_hasCustomWidth") &&
                            u._hasCustomWidth &&
                            (a.style.width = u.width),
                          u.hasOwnProperty("_hasCustomHeight") &&
                            u._hasCustomHeight &&
                            (a.style.height = u.height),
                          f.insertBefore(a, f.firstChild)));
                !function (e, t, i, s) {
                  var n,
                    r,
                    a,
                    e = e.querySelector(".gslide-media"),
                    o =
                      ((s = { url: t.href, callback: s }),
                      (o = s.url),
                      (n = s.allow),
                      (r = s.callback),
                      (s = s.appendTo),
                      ((a = document.createElement("iframe")).className =
                        "vimeo-video gvideo"),
                      (a.src = o),
                      (a.style.width = "100%"),
                      (a.style.height = "100%"),
                      n && a.setAttribute("allow", n),
                      (a.onload = function () {
                        (a.onload = null), O(a, "node-ready"), Y(r) && r();
                      }),
                      s && s.appendChild(a),
                      a);
                  (e.parentNode.style.maxWidth = t.width),
                    (e.parentNode.style.height = t.height),
                    e.appendChild(o);
                }.apply(this, [i, r, this.index, p]);
              } else
                !function (t, i, s, n) {
                  var r = this,
                    e = t.querySelector(".ginner-container"),
                    a = "gvideo" + s,
                    o = t.querySelector(".gslide-media"),
                    l = this.getAllPlayers(),
                    d =
                      (O(e, "gvideo-container"),
                      o.insertBefore(
                        g('<div class="gvideo-wrapper"></div>'),
                        o.firstChild
                      ),
                      t.querySelector(".gvideo-wrapper")),
                    u = (T(this.settings.plyr.css, "Plyr"), i.href),
                    c = null == i ? void 0 : i.videoProvider,
                    h = !1;
                  (o.style.maxWidth = i.width),
                    T(this.settings.plyr.js, "Plyr", function () {
                      ("local" !==
                        (c =
                          !(c =
                            !c && u.match(/vimeo\.com\/([0-9]*)/)
                              ? "vimeo"
                              : c) &&
                          (u.match(
                            /(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/
                          ) ||
                            u.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) ||
                            u.match(
                              /(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/
                            ))
                            ? "youtube"
                            : c) &&
                        c) ||
                        ((c = "local"),
                        (e =
                          (e =
                            (e = '<video id="' + a + '" ') +
                            'style="background:#000; max-width: '.concat(
                              i.width,
                              ';" '
                            ) +
                            'preload="metadata" x-webkit-airplay="allow" playsinline controls class="gvideo-local">') +
                          '<source src="'.concat(u, '">')),
                        (h = g((e += "</video>"))));
                      var e =
                          h ||
                          g(
                            '<div id="'
                              .concat(a, '" data-plyr-provider="')
                              .concat(c, '" data-plyr-embed-id="')
                              .concat(u, '"></div>')
                          ),
                        e =
                          (O(d, "".concat(c, "-video gvideo")),
                          d.appendChild(e),
                          d.setAttribute("data-id", a),
                          d.setAttribute("data-index", s),
                          w(r.settings.plyr, "config")
                            ? r.settings.plyr.config
                            : {}),
                        e = new Plyr("#" + a, e);
                      e.on("ready", function (e) {
                        (l[a] = e.detail.plyr), Y(n) && n();
                      }),
                        v(
                          function () {
                            return (
                              t.querySelector("iframe") &&
                              "true" == t.querySelector("iframe").dataset.ready
                            );
                          },
                          function () {
                            r.resize(t);
                          }
                        ),
                        e.on("enterfullscreen", V),
                        e.on("exitfullscreen", V);
                    });
                }.apply(this.instance, [i, r, this.index, p]);
            },
          },
          {
            key: "slideShortDesc",
            value: function (e) {
              var t =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : 50,
                i =
                  2 < arguments.length &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                s = document.createElement("div");
              s.innerHTML = e;
              var n = i;
              return !((e = s.innerText.trim()).length <= t) &&
                ((e = e.substr(0, t - 1)), n)
                ? ((s = null),
                  e + '... <a href="#" class="desc-more">' + i + "</a>")
                : e;
            },
          },
          {
            key: "descriptionEvents",
            value: function (e, r) {
              var a = this,
                e = e.querySelector(".desc-more");
              if (!e) return !1;
              L("click", {
                onElement: e,
                withCallback: function (e, t) {
                  e.preventDefault();
                  var i = document.body,
                    s = B(t, ".gslide-desc");
                  if (!s) return !1;
                  (s.innerHTML = r.description), O(i, "gdesc-open");
                  var n = L("click", {
                    onElement: [i, B(s, ".gslide-description")],
                    withCallback: function (e, t) {
                      "a" !== e.target.nodeName.toLowerCase() &&
                        (z(i, "gdesc-open"),
                        O(i, "gdesc-closed"),
                        (s.innerHTML = r.smallDescription),
                        a.descriptionEvents(s, r),
                        setTimeout(function () {
                          z(i, "gdesc-closed");
                        }, 400),
                        n.destroy());
                    },
                  });
                },
              });
            },
          },
          {
            key: "create",
            value: function () {
              return g(this.instance.settings.slideHTML);
            },
          },
          {
            key: "getConfig",
            value: function () {
              X(this.element) ||
                this.element.hasOwnProperty("draggable") ||
                (this.element.draggable = this.instance.settings.draggable);
              var e = new U(this.instance.settings.slideExtraAttributes);
              return (
                (this.slideConfig = e.parseConfig(
                  this.element,
                  this.instance.settings
                )),
                this.slideConfig
              );
            },
          },
        ]),
        D),
      K = y(),
      Q =
        null !== y() ||
        void 0 !== document.createTouch ||
        "ontouchstart" in window ||
        "onmsgesturechange" in window ||
        navigator.msMaxTouchPoints,
      Z = document.getElementsByTagName("html")[0],
      J = {
        selector: ".glightbox",
        elements: null,
        skin: "clean",
        theme: "clean",
        closeButton: !0,
        startAt: null,
        autoplayVideos: !0,
        autofocusVideos: !0,
        descPosition: "bottom",
        width: "900px",
        height: "506px",
        videosWidth: "960px",
        beforeSlideChange: null,
        afterSlideChange: null,
        beforeSlideLoad: null,
        afterSlideLoad: null,
        slideInserted: null,
        slideRemoved: null,
        slideExtraAttributes: null,
        onOpen: null,
        onClose: null,
        loop: !1,
        zoomable: !0,
        draggable: !0,
        dragAutoSnap: !1,
        dragToleranceX: 40,
        dragToleranceY: 65,
        preload: !0,
        oneSlidePerOpen: !1,
        touchNavigation: !0,
        touchFollowAxis: !0,
        keyboardNavigation: !0,
        closeOnOutsideClick: !0,
        plugins: !1,
        plyr: {
          css: "https://cdn.plyr.io/3.6.12/plyr.css",
          js: "https://cdn.plyr.io/3.6.12/plyr.js",
          config: {
            ratio: "16:9",
            fullscreen: { enabled: !0, iosNative: !0 },
            youtube: { noCookie: !0, rel: 0, showinfo: 0, iv_load_policy: 3 },
            vimeo: { byline: !1, portrait: !1, title: !1, transparent: !1 },
          },
        },
        openEffect: "zoom",
        closeEffect: "zoom",
        slideEffect: "slide",
        moreText: "See more",
        moreLength: 60,
        cssEfects: {
          fade: { in: "fadeIn", out: "fadeOut" },
          zoom: { in: "zoomIn", out: "zoomOut" },
          slide: { in: "slideInRight", out: "slideOutLeft" },
          slideBack: { in: "slideInLeft", out: "slideOutRight" },
          none: { in: "none", out: "none" },
        },
        svg: {
          close:
            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
          next: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
          prev: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>',
        },
        slideHTML:
          '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
        lightboxHTML:
          '<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>',
      },
      ee =
        (e(_, [
          {
            key: "init",
            value: function () {
              var i = this,
                e = this.getSelector();
              e &&
                (this.baseEvents = L("click", {
                  onElement: e,
                  withCallback: function (e, t) {
                    e.preventDefault(), i.open(t);
                  },
                })),
                (this.elements = this.getElements());
            },
          },
          {
            key: "open",
            value: function () {
              var e =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : null,
                t =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
              if (0 === this.elements.length) return !1;
              (this.activeSlide = null),
                (this.prevActiveSlideIndex = null),
                (this.prevActiveSlide = null);
              var i,
                r,
                s,
                n,
                a,
                o,
                l,
                d,
                u,
                c,
                h,
                p,
                f,
                m,
                g,
                v,
                y,
                b,
                w,
                _,
                D,
                x,
                E,
                C,
                T,
                S,
                A,
                M,
                k,
                P,
                t = H(t) ? t : this.settings.startAt,
                F =
                  (H(
                    (t =
                      X(e) &&
                      ((F = e.getAttribute("data-gallery")) &&
                        ((this.fullElementsList = this.elements),
                        (this.elements = this.getGalleryElements(
                          this.elements,
                          F
                        ))),
                      j(t)) &&
                      (t = this.getElementIndex(e)) < 0
                        ? 0
                        : t)
                  ) || (t = 0),
                  this.build(),
                  N(
                    this.overlay,
                    "none" === this.settings.openEffect
                      ? "none"
                      : this.settings.cssEfects.fade.in
                  ),
                  document.body),
                e = window.innerWidth - document.documentElement.clientWidth;
              0 < e &&
                (((i = document.createElement("style")).type = "text/css"),
                (i.className = "gcss-styles"),
                (i.innerText = ".gscrollbar-fixer {margin-right: ".concat(
                  e,
                  "px}"
                )),
                document.head.appendChild(i),
                O(F, "gscrollbar-fixer")),
                O(F, "glightbox-open"),
                O(Z, "glightbox-open"),
                K &&
                  (O(document.body, "glightbox-mobile"),
                  (this.settings.slideEffect = "slide")),
                this.showSlide(t, !0),
                (1 === this.elements.length
                  ? (O(this.prevButton, "glightbox-button-hidden"), O)
                  : (z(this.prevButton, "glightbox-button-hidden"), z))(
                  this.nextButton,
                  "glightbox-button-hidden"
                ),
                (this.lightboxOpen = !0),
                this.trigger("open"),
                Y(this.settings.onOpen) && this.settings.onOpen(),
                Q &&
                  this.settings.touchNavigation &&
                  ((s = this).events.hasOwnProperty("touch") ||
                    ((e = W()),
                    (l = e.width),
                    (d = e.height),
                    (f = u = !1),
                    (D = _ = w = b = p = h = c = null),
                    (T = C = y = v = !(g = m = 1)),
                    (S = {}),
                    (A = {}),
                    (k = M = E = x = 0),
                    (e = document.getElementById("glightbox-slider")),
                    (P = document.querySelector(".goverlay")),
                    (e = new G(e, {
                      touchStart: function (e) {
                        (u = !0),
                          (I(e.targetTouches[0].target, "ginner-container") ||
                            B(e.targetTouches[0].target, ".gslide-desc") ||
                            "a" ==
                              e.targetTouches[0].target.nodeName.toLowerCase()) &&
                            (u = !1),
                          (u =
                            !(
                              B(e.targetTouches[0].target, ".gslide-inline") &&
                              !I(
                                e.targetTouches[0].target.parentNode,
                                "gslide-inline"
                              )
                            ) && u) &&
                            ((A = e.targetTouches[0]),
                            (S.pageX = e.targetTouches[0].pageX),
                            (S.pageY = e.targetTouches[0].pageY),
                            (M = e.targetTouches[0].clientX),
                            (k = e.targetTouches[0].clientY),
                            (c = s.activeSlide),
                            (h = c.querySelector(".gslide-media")),
                            (o = c.querySelector(".gslide-inline")),
                            (p = null),
                            I(h, "gslide-image") &&
                              (p = h.querySelector("img")),
                            769 <
                              (window.innerWidth ||
                                document.documentElement.clientWidth ||
                                document.body.clientWidth) &&
                              (h = c.querySelector(".ginner-container")),
                            z(P, "greset"),
                            (20 < e.pageX &&
                              e.pageX < window.innerWidth - 20) ||
                              e.preventDefault());
                      },
                      touchMove: function (e) {
                        if (u && ((A = e.targetTouches[0]), !v) && !y) {
                          if (o && o.offsetHeight > d) {
                            var t = S.pageX - A.pageX;
                            if (Math.abs(t) <= 13) return !1;
                          }
                          f = !0;
                          var i,
                            t = e.targetTouches[0].clientX,
                            e = e.targetTouches[0].clientY,
                            t = M - t,
                            e = k - e;
                          if (
                            (Math.abs(t) > Math.abs(e)
                              ? (T = !(C = !1))
                              : (C = !(T = !1)),
                            (n = A.pageX - S.pageX),
                            (x = (100 * n) / l),
                            (a = A.pageY - S.pageY),
                            (E = (100 * a) / d),
                            C &&
                              p &&
                              ((i = 1 - Math.abs(a) / d),
                              (P.style.opacity = i),
                              s.settings.touchFollowAxis) &&
                              (x = 0),
                            T &&
                              ((i = 1 - Math.abs(n) / l),
                              (h.style.opacity = i),
                              s.settings.touchFollowAxis) &&
                              (E = 0),
                            !p)
                          )
                            return R(h, "translate3d(".concat(x, "%, 0, 0)"));
                          R(
                            h,
                            "translate3d(".concat(x, "%, ").concat(E, "%, 0)")
                          );
                        }
                      },
                      touchEnd: function () {
                        if (u) {
                          var e, t;
                          if (((f = !1), !y && !v))
                            return (
                              (e = Math.abs(parseInt(E))),
                              (t = Math.abs(parseInt(x))),
                              29 < e && p
                                ? void s.close()
                                : e < 29 && t < 25
                                ? (O(P, "greset"), (P.style.opacity = 1), q(h))
                                : void 0
                            );
                          (_ = b), (D = w);
                        }
                      },
                      multipointEnd: function () {
                        setTimeout(function () {
                          v = !1;
                        }, 50);
                      },
                      multipointStart: function () {
                        (v = !0), (m = g || 1);
                      },
                      pinch: function (e) {
                        if (!p || f) return !1;
                        (v = !0), (p.scaleX = p.scaleY = m * e.zoom);
                        e = m * e.zoom;
                        (y = !0),
                          e <= 1
                            ? ((y = !1),
                              (e = 1),
                              (w = b = _ = D = null),
                              p.setAttribute("style", ""))
                            : ((p.style.transform = "scale3d("
                                .concat((e = 4.5 < e ? 4.5 : e), ", ")
                                .concat(e, ", 1)")),
                              (g = e));
                      },
                      pressMove: function (e) {
                        var t, i;
                        y &&
                          !v &&
                          ((i = A.pageX - S.pageX),
                          (t = A.pageY - S.pageY),
                          _ && (i += _),
                          D && (t += D),
                          (b = i),
                          (w = t),
                          (i = "translate3d("
                            .concat(i, "px, ")
                            .concat(t, "px, 0)")),
                          g &&
                            (i += " scale3d("
                              .concat(g, ", ")
                              .concat(g, ", 1)")),
                          R(p, i));
                      },
                      swipe: function (e) {
                        if (!y)
                          if (v) v = !1;
                          else {
                            if ("Left" == e.direction) {
                              if (s.index == s.elements.length - 1) return q(h);
                              s.nextSlide();
                            }
                            if ("Right" == e.direction) {
                              if (0 == s.index) return q(h);
                              s.prevSlide();
                            }
                          }
                      },
                    })),
                    (s.events.touch = e))),
                !this.settings.keyboardNavigation ||
                  (r = this).events.hasOwnProperty("keyboard") ||
                  (r.events.keyboard = L("keydown", {
                    onElement: window,
                    withCallback: function (e, t) {
                      var i = (e = e || window.event).keyCode;
                      if (9 == i) {
                        var s = document.querySelector(".gbtn.focused");
                        if (!s) {
                          var n =
                            !(
                              !document.activeElement ||
                              !document.activeElement.nodeName
                            ) &&
                            document.activeElement.nodeName.toLocaleLowerCase();
                          if ("input" == n || "textarea" == n || "button" == n)
                            return;
                        }
                        e.preventDefault();
                        n = document.querySelectorAll(".gbtn[data-taborder]");
                        if (!n || n.length <= 0) return;
                        if (!s)
                          return void (
                            (e = $()) && (e.focus(), O(e, "focused"))
                          );
                        n = $(s.getAttribute("data-taborder"));
                        z(s, "focused"), n && (n.focus(), O(n, "focused"));
                      }
                      39 == i && r.nextSlide(),
                        37 == i && r.prevSlide(),
                        27 == i && r.close();
                    },
                  }));
            },
          },
          {
            key: "openAt",
            value: function () {
              this.open(
                null,
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0
              );
            },
          },
          {
            key: "showSlide",
            value: function () {
              var e,
                t = this,
                i =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                s =
                  1 < arguments.length &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n =
                  (C(this.loader),
                  (this.index = parseInt(i)),
                  this.slidesContainer.querySelector(".current")),
                r =
                  (n && z(n, "current"),
                  this.slideAnimateOut(),
                  this.slidesContainer.querySelectorAll(".gslide")[i]);
              I(r, "loaded")
                ? (this.slideAnimateIn(r, s), l(this.loader))
                : (C(this.loader),
                  (n = this.elements[i]),
                  (e = {
                    index: this.index,
                    slide: r,
                    slideNode: r,
                    slideConfig: n.slideConfig,
                    slideIndex: this.index,
                    trigger: n.node,
                    player: null,
                  }),
                  this.trigger("slide_before_load", e),
                  n.instance.setContent(r, function () {
                    l(t.loader),
                      t.resize(),
                      t.slideAnimateIn(r, s),
                      t.trigger("slide_after_load", e);
                  })),
                (this.slideDescription = r.querySelector(
                  ".gslide-description"
                )),
                (this.slideDescriptionContained =
                  this.slideDescription &&
                  I(this.slideDescription.parentNode, "gslide-media")),
                this.settings.preload &&
                  (this.preloadSlide(i + 1), this.preloadSlide(i - 1)),
                this.updateNavigationClasses(),
                (this.activeSlide = r);
            },
          },
          {
            key: "preloadSlide",
            value: function (e) {
              var t,
                i,
                s,
                n,
                r = this;
              return (
                !(
                  e < 0 ||
                  e > this.elements.length - 1 ||
                  j(this.elements[e]) ||
                  I(
                    (t = this.slidesContainer.querySelectorAll(".gslide")[e]),
                    "loaded"
                  )
                ) &&
                ((s = (i = this.elements[e]).type),
                (n = {
                  index: e,
                  slide: t,
                  slideNode: t,
                  slideConfig: i.slideConfig,
                  slideIndex: e,
                  trigger: i.node,
                  player: null,
                }),
                this.trigger("slide_before_load", n),
                void ("video" === s || "external" === s
                  ? setTimeout(function () {
                      i.instance.setContent(t, function () {
                        r.trigger("slide_after_load", n);
                      });
                    }, 200)
                  : i.instance.setContent(t, function () {
                      r.trigger("slide_after_load", n);
                    })))
              );
            },
          },
          {
            key: "prevSlide",
            value: function () {
              this.goToSlide(this.index - 1);
            },
          },
          {
            key: "nextSlide",
            value: function () {
              this.goToSlide(this.index + 1);
            },
          },
          {
            key: "goToSlide",
            value: function () {
              var e =
                0 < arguments.length && void 0 !== arguments[0] && arguments[0];
              if (
                ((this.prevActiveSlide = this.activeSlide),
                (this.prevActiveSlideIndex = this.index),
                !this.loop() && (e < 0 || e > this.elements.length - 1))
              )
                return !1;
              e < 0
                ? (e = this.elements.length - 1)
                : e >= this.elements.length && (e = 0),
                this.showSlide(e);
            },
          },
          {
            key: "insertSlide",
            value: function () {
              var e =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : -1,
                e = (t < 0 && (t = this.elements.length), new m(e, this, t)),
                i = e.getConfig(),
                s = d({}, i),
                n = e.create(),
                r = this.elements.length - 1,
                e =
                  ((s.index = t),
                  (s.node = !1),
                  (s.instance = e),
                  (s.slideConfig = i),
                  this.elements.splice(t, 0, s),
                  null),
                a = null;
              this.slidesContainer &&
                (r < t
                  ? this.slidesContainer.appendChild(n)
                  : ((r = this.slidesContainer.querySelectorAll(".gslide")[t]),
                    this.slidesContainer.insertBefore(n, r)),
                ((this.settings.preload && 0 == this.index && 0 == t) ||
                  this.index - 1 == t ||
                  this.index + 1 == t) &&
                  this.preloadSlide(t),
                0 === this.index && 0 === t && (this.index = 1),
                this.updateNavigationClasses(),
                (e = this.slidesContainer.querySelectorAll(".gslide")[t]),
                (a = this.getSlidePlayerInstance(t)),
                (s.slideNode = e)),
                this.trigger("slide_inserted", {
                  index: t,
                  slide: e,
                  slideNode: e,
                  slideConfig: i,
                  slideIndex: t,
                  trigger: null,
                  player: a,
                }),
                Y(this.settings.slideInserted) &&
                  this.settings.slideInserted({
                    index: t,
                    slide: e,
                    player: a,
                  });
            },
          },
          {
            key: "removeSlide",
            value: function () {
              var e =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : -1;
              if (e < 0 || e > this.elements.length - 1) return !1;
              var t =
                this.slidesContainer &&
                this.slidesContainer.querySelectorAll(".gslide")[e];
              t &&
                (this.getActiveSlideIndex() == e &&
                  (e == this.elements.length - 1
                    ? this.prevSlide()
                    : this.nextSlide()),
                t.parentNode.removeChild(t)),
                this.elements.splice(e, 1),
                this.trigger("slide_removed", e),
                Y(this.settings.slideRemoved) && this.settings.slideRemoved(e);
            },
          },
          {
            key: "slideAnimateIn",
            value: function (e, t) {
              var i = this,
                s = e.querySelector(".gslide-media"),
                n = e.querySelector(".gslide-description"),
                r = {
                  index: this.prevActiveSlideIndex,
                  slide: this.prevActiveSlide,
                  slideNode: this.prevActiveSlide,
                  slideIndex: this.prevActiveSlide,
                  slideConfig: j(this.prevActiveSlideIndex)
                    ? null
                    : this.elements[this.prevActiveSlideIndex].slideConfig,
                  trigger: j(this.prevActiveSlideIndex)
                    ? null
                    : this.elements[this.prevActiveSlideIndex].node,
                  player: this.getSlidePlayerInstance(
                    this.prevActiveSlideIndex
                  ),
                },
                a = {
                  index: this.index,
                  slide: this.activeSlide,
                  slideNode: this.activeSlide,
                  slideConfig: this.elements[this.index].slideConfig,
                  slideIndex: this.index,
                  trigger: this.elements[this.index].node,
                  player: this.getSlidePlayerInstance(this.index),
                };
              0 < s.offsetWidth && n && (l(n), (n.style.display = "")),
                z(e, this.effectsClasses),
                t
                  ? N(
                      e,
                      this.settings.cssEfects[this.settings.openEffect].in,
                      function () {
                        i.settings.autoplayVideos && i.slidePlayerPlay(e),
                          i.trigger("slide_changed", { prev: r, current: a }),
                          Y(i.settings.afterSlideChange) &&
                            i.settings.afterSlideChange.apply(i, [r, a]);
                      }
                    )
                  : ((n =
                      "none" !== (s = this.settings.slideEffect)
                        ? this.settings.cssEfects[s].in
                        : s),
                    this.prevActiveSlideIndex > this.index &&
                      "slide" == this.settings.slideEffect &&
                      (n = this.settings.cssEfects.slideBack.in),
                    N(e, n, function () {
                      i.settings.autoplayVideos && i.slidePlayerPlay(e),
                        i.trigger("slide_changed", { prev: r, current: a }),
                        Y(i.settings.afterSlideChange) &&
                          i.settings.afterSlideChange.apply(i, [r, a]);
                    })),
                setTimeout(function () {
                  i.resize(e);
                }, 100),
                O(e, "current");
            },
          },
          {
            key: "slideAnimateOut",
            value: function () {
              if (!this.prevActiveSlide) return !1;
              var s = this.prevActiveSlide,
                e =
                  (z(s, this.effectsClasses),
                  O(s, "prev"),
                  this.settings.slideEffect),
                e = "none" !== e ? this.settings.cssEfects[e].out : e;
              this.slidePlayerPause(s),
                this.trigger("slide_before_change", {
                  prev: {
                    index: this.prevActiveSlideIndex,
                    slide: this.prevActiveSlide,
                    slideNode: this.prevActiveSlide,
                    slideIndex: this.prevActiveSlideIndex,
                    slideConfig: j(this.prevActiveSlideIndex)
                      ? null
                      : this.elements[this.prevActiveSlideIndex].slideConfig,
                    trigger: j(this.prevActiveSlideIndex)
                      ? null
                      : this.elements[this.prevActiveSlideIndex].node,
                    player: this.getSlidePlayerInstance(
                      this.prevActiveSlideIndex
                    ),
                  },
                  current: {
                    index: this.index,
                    slide: this.activeSlide,
                    slideNode: this.activeSlide,
                    slideIndex: this.index,
                    slideConfig: this.elements[this.index].slideConfig,
                    trigger: this.elements[this.index].node,
                    player: this.getSlidePlayerInstance(this.index),
                  },
                }),
                Y(this.settings.beforeSlideChange) &&
                  this.settings.beforeSlideChange.apply(this, [
                    {
                      index: this.prevActiveSlideIndex,
                      slide: this.prevActiveSlide,
                      player: this.getSlidePlayerInstance(
                        this.prevActiveSlideIndex
                      ),
                    },
                    {
                      index: this.index,
                      slide: this.activeSlide,
                      player: this.getSlidePlayerInstance(this.index),
                    },
                  ]),
                this.prevActiveSlideIndex > this.index &&
                  "slide" == this.settings.slideEffect &&
                  (e = this.settings.cssEfects.slideBack.out),
                N(s, e, function () {
                  var e = s.querySelector(".ginner-container"),
                    t = s.querySelector(".gslide-media"),
                    i = s.querySelector(".gslide-description");
                  (e.style.transform = ""),
                    (t.style.transform = ""),
                    z(t, "greset"),
                    (t.style.opacity = ""),
                    i && (i.style.opacity = ""),
                    z(s, "prev");
                });
            },
          },
          {
            key: "getAllPlayers",
            value: function () {
              return this.videoPlayers;
            },
          },
          {
            key: "getSlidePlayerInstance",
            value: function (e) {
              var e = "gvideo" + e,
                t = this.getAllPlayers();
              return !(!w(t, e) || !t[e]) && t[e];
            },
          },
          {
            key: "stopSlideVideo",
            value: function (e) {
              X(e) &&
                (t = e.querySelector(".gvideo-wrapper")) &&
                (e = t.getAttribute("data-index")),
                console.log(
                  "stopSlideVideo is deprecated, use slidePlayerPause"
                );
              var t = this.getSlidePlayerInstance(e);
              t && t.playing && t.pause();
            },
          },
          {
            key: "slidePlayerPause",
            value: function (e) {
              X(e) &&
                (t = e.querySelector(".gvideo-wrapper")) &&
                (e = t.getAttribute("data-index"));
              var t = this.getSlidePlayerInstance(e);
              t && t.playing && t.pause();
            },
          },
          {
            key: "playSlideVideo",
            value: function (e) {
              X(e) &&
                (t = e.querySelector(".gvideo-wrapper")) &&
                (e = t.getAttribute("data-index")),
                console.log(
                  "playSlideVideo is deprecated, use slidePlayerPlay"
                );
              var t = this.getSlidePlayerInstance(e);
              t && !t.playing && t.play();
            },
          },
          {
            key: "slidePlayerPlay",
            value: function (e) {
              var t;
              (!K || (null != (t = this.settings.plyr.config) && t.muted)) &&
                (X(e) &&
                  (t = e.querySelector(".gvideo-wrapper")) &&
                  (e = t.getAttribute("data-index")),
                (t = this.getSlidePlayerInstance(e))) &&
                !t.playing &&
                (t.play(), this.settings.autofocusVideos) &&
                t.elements.container.focus();
            },
          },
          {
            key: "setElements",
            value: function (e) {
              var n = this,
                r = ((this.settings.elements = !1), []);
              e &&
                e.length &&
                h(e, function (e, t) {
                  var e = new m(e, n, t),
                    i = e.getConfig(),
                    s = d({}, i);
                  (s.slideConfig = i),
                    (s.instance = e),
                    (s.index = t),
                    r.push(s);
                }),
                (this.elements = r),
                this.lightboxOpen &&
                  ((this.slidesContainer.innerHTML = ""),
                  this.elements.length) &&
                  (h(this.elements, function () {
                    var e = g(n.settings.slideHTML);
                    n.slidesContainer.appendChild(e);
                  }),
                  this.showSlide(0, !0));
            },
          },
          {
            key: "getElementIndex",
            value: function (i) {
              var s = !1;
              return (
                h(this.elements, function (e, t) {
                  if (w(e, "node") && e.node == i) return (s = t), !0;
                }),
                s
              );
            },
          },
          {
            key: "getElements",
            value: function () {
              var r = this,
                a = [],
                e =
                  ((this.elements = this.elements || []),
                  !j(this.settings.elements) &&
                    S(this.settings.elements) &&
                    this.settings.elements.length &&
                    h(this.settings.elements, function (e, t) {
                      var e = new m(e, r, t),
                        i = e.getConfig(),
                        s = d({}, i);
                      (s.node = !1),
                        (s.index = t),
                        (s.instance = e),
                        (s.slideConfig = i),
                        a.push(s);
                    }),
                  !1);
              return (
                (e = this.getSelector()
                  ? document.querySelectorAll(this.getSelector())
                  : e) &&
                  h(e, function (e, t) {
                    var i = new m(e, r, t),
                      s = i.getConfig(),
                      n = d({}, s);
                    (n.node = e),
                      (n.index = t),
                      (n.instance = i),
                      (n.slideConfig = s),
                      (n.gallery = e.getAttribute("data-gallery")),
                      a.push(n);
                  }),
                a
              );
            },
          },
          {
            key: "getGalleryElements",
            value: function (e, t) {
              return e.filter(function (e) {
                return e.gallery == t;
              });
            },
          },
          {
            key: "getSelector",
            value: function () {
              return (
                !this.settings.elements &&
                (this.settings.selector &&
                "data-" == this.settings.selector.substring(0, 5)
                  ? "*[".concat(this.settings.selector, "]")
                  : this.settings.selector)
              );
            },
          },
          {
            key: "getActiveSlide",
            value: function () {
              return this.slidesContainer.querySelectorAll(".gslide")[
                this.index
              ];
            },
          },
          {
            key: "getActiveSlideIndex",
            value: function () {
              return this.index;
            },
          },
          {
            key: "getAnimationClasses",
            value: function () {
              var e,
                t,
                i = [];
              for (e in this.settings.cssEfects)
                this.settings.cssEfects.hasOwnProperty(e) &&
                  ((t = this.settings.cssEfects[e]),
                  i.push("g".concat(t.in)),
                  i.push("g".concat(t.out)));
              return i.join(" ");
            },
          },
          {
            key: "build",
            value: function () {
              var i = this;
              if (this.built) return !1;
              var e = document.body.childNodes,
                t = [],
                e =
                  (h(e, function (e) {
                    e.parentNode == document.body &&
                      "#" !== e.nodeName.charAt(0) &&
                      e.hasAttribute &&
                      !e.hasAttribute("aria-hidden") &&
                      (t.push(e), e.setAttribute("aria-hidden", "true"));
                  }),
                  w(this.settings.svg, "next") ? this.settings.svg.next : ""),
                s = w(this.settings.svg, "prev") ? this.settings.svg.prev : "",
                n = w(this.settings.svg, "close")
                  ? this.settings.svg.close
                  : "",
                r = g(
                  (r = (r = (r = (r = this.settings.lightboxHTML).replace(
                    /{nextSVG}/g,
                    e
                  )).replace(/{prevSVG}/g, s)).replace(/{closeSVG}/g, n))
                ),
                e =
                  (document.body.appendChild(r),
                  document.getElementById("glightbox-body")),
                s = (this.modal = e).querySelector(".gclose");
              (this.prevButton = e.querySelector(".gprev")),
                (this.nextButton = e.querySelector(".gnext")),
                (this.overlay = e.querySelector(".goverlay")),
                (this.loader = e.querySelector(".gloader")),
                (this.slidesContainer =
                  document.getElementById("glightbox-slider")),
                (this.bodyHiddenChildElms = t),
                (this.events = {}),
                O(this.modal, "glightbox-" + this.settings.skin),
                this.settings.closeButton &&
                  s &&
                  (this.events.close = L("click", {
                    onElement: s,
                    withCallback: function (e, t) {
                      e.preventDefault(), i.close();
                    },
                  })),
                s && !this.settings.closeButton && s.parentNode.removeChild(s),
                this.nextButton &&
                  (this.events.next = L("click", {
                    onElement: this.nextButton,
                    withCallback: function (e, t) {
                      e.preventDefault(), i.nextSlide();
                    },
                  })),
                this.prevButton &&
                  (this.events.prev = L("click", {
                    onElement: this.prevButton,
                    withCallback: function (e, t) {
                      e.preventDefault(), i.prevSlide();
                    },
                  })),
                this.settings.closeOnOutsideClick &&
                  (this.events.outClose = L("click", {
                    onElement: e,
                    withCallback: function (e, t) {
                      i.preventOutsideClick ||
                        I(document.body, "glightbox-mobile") ||
                        B(e.target, ".ginner-container") ||
                        B(e.target, ".gbtn") ||
                        I(e.target, "gnext") ||
                        I(e.target, "gprev") ||
                        i.close();
                    },
                  })),
                h(this.elements, function (e, t) {
                  i.slidesContainer.appendChild(e.instance.create()),
                    (e.slideNode =
                      i.slidesContainer.querySelectorAll(".gslide")[t]);
                }),
                Q && O(document.body, "glightbox-touch"),
                (this.events.resize = L("resize", {
                  onElement: window,
                  withCallback: function () {
                    i.resize();
                  },
                })),
                (this.built = !0);
            },
          },
          {
            key: "resize",
            value: function () {
              var e,
                t,
                i,
                s,
                n,
                r,
                a,
                o =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : null;
              (o = o || this.activeSlide) &&
                !I(o, "zoomed") &&
                ((i = W()),
                (e = o.querySelector(".gvideo-wrapper")),
                (o = o.querySelector(".gslide-image")),
                (t = this.slideDescription),
                (r = i.width),
                (i = i.height),
                (r <= 768 ? O : z)(document.body, "glightbox-mobile"),
                e || o) &&
                ((s = !1),
                t &&
                  (I(t, "description-bottom") || I(t, "description-top")) &&
                  !I(t, "gabsolute") &&
                  (s = !0),
                o &&
                  (r <= 768
                    ? o.querySelector("img")
                    : s &&
                      ((n = t.offsetHeight),
                      (o = o.querySelector("img")).setAttribute(
                        "style",
                        "max-height: calc(100vh - ".concat(n, "px)")
                      ),
                      t.setAttribute(
                        "style",
                        "max-width: ".concat(o.offsetWidth, "px;")
                      ))),
                e) &&
                ((n = w(this.settings.plyr.config, "ratio")
                  ? this.settings.plyr.config.ratio
                  : "") ||
                  ((o = e.clientWidth),
                  (a = e.clientHeight),
                  (n = "".concat(o / (o = o / a), ":").concat(a / o))),
                (a = n.split(":")),
                (o = this.settings.videosWidth),
                (n = this.settings.videosWidth),
                (a =
                  (n =
                    H(o) || -1 !== o.indexOf("px")
                      ? parseInt(o)
                      : -1 !== o.indexOf("vw")
                      ? (r * parseInt(o)) / 100
                      : -1 !== o.indexOf("vh")
                      ? (i * parseInt(o)) / 100
                      : -1 !== o.indexOf("%")
                      ? (r * parseInt(o)) / 100
                      : parseInt(e.clientWidth)) /
                  (parseInt(a[0]) / parseInt(a[1]))),
                (a = Math.floor(a)),
                s && (i -= t.offsetHeight),
                r < n || i < a || (i < a && n < r)
                  ? ((a = e.offsetWidth),
                    (n = e.offsetHeight),
                    e.parentNode.setAttribute(
                      "style",
                      "max-width: ".concat(
                        (a = { width: a * (r = i / n), height: n * r }).width,
                        "px"
                      )
                    ),
                    s &&
                      t.setAttribute(
                        "style",
                        "max-width: ".concat(a.width, "px;")
                      ))
                  : ((e.parentNode.style.maxWidth = "".concat(o)),
                    s &&
                      t.setAttribute("style", "max-width: ".concat(o, ";"))));
            },
          },
          {
            key: "reload",
            value: function () {
              this.init();
            },
          },
          {
            key: "updateNavigationClasses",
            value: function () {
              var e = this.loop();
              z(this.nextButton, "disabled"),
                z(this.prevButton, "disabled"),
                0 == this.index && this.elements.length - 1 == 0
                  ? (O(this.prevButton, "disabled"),
                    O(this.nextButton, "disabled"))
                  : 0 !== this.index || e
                  ? this.index !== this.elements.length - 1 ||
                    e ||
                    O(this.nextButton, "disabled")
                  : O(this.prevButton, "disabled");
            },
          },
          {
            key: "loop",
            value: function () {
              var e = w(this.settings, "loopAtEnd")
                ? this.settings.loopAtEnd
                : null;
              return w(this.settings, "loop") ? this.settings.loop : e;
            },
          },
          {
            key: "close",
            value: function () {
              var i = this;
              if (!this.lightboxOpen) {
                if (this.events) {
                  for (var e in this.events)
                    this.events.hasOwnProperty(e) && this.events[e].destroy();
                  this.events = null;
                }
                return !1;
              }
              if (this.closing) return !1;
              (this.closing = !0),
                this.slidePlayerPause(this.activeSlide),
                this.fullElementsList &&
                  (this.elements = this.fullElementsList),
                this.bodyHiddenChildElms.length &&
                  h(this.bodyHiddenChildElms, function (e) {
                    e.removeAttribute("aria-hidden");
                  }),
                O(this.modal, "glightbox-closing"),
                N(
                  this.overlay,
                  "none" == this.settings.openEffect
                    ? "none"
                    : this.settings.cssEfects.fade.out
                ),
                N(
                  this.activeSlide,
                  this.settings.cssEfects[this.settings.closeEffect].out,
                  function () {
                    if (
                      ((i.activeSlide = null),
                      (i.prevActiveSlideIndex = null),
                      (i.prevActiveSlide = null),
                      (i.built = !1),
                      i.events)
                    ) {
                      for (var e in i.events)
                        i.events.hasOwnProperty(e) && i.events[e].destroy();
                      i.events = null;
                    }
                    var t = document.body,
                      t =
                        (z(Z, "glightbox-open"),
                        z(
                          t,
                          "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"
                        ),
                        i.modal.parentNode.removeChild(i.modal),
                        i.trigger("close"),
                        Y(i.settings.onClose) && i.settings.onClose(),
                        document.querySelector(".gcss-styles"));
                    t && t.parentNode.removeChild(t),
                      (i.lightboxOpen = !1),
                      (i.closing = null);
                  }
                );
            },
          },
          {
            key: "destroy",
            value: function () {
              this.close(),
                this.clearAllEvents(),
                this.baseEvents && this.baseEvents.destroy();
            },
          },
          {
            key: "on",
            value: function (e, t) {
              var i =
                2 < arguments.length && void 0 !== arguments[2] && arguments[2];
              if (!e || !Y(t))
                throw new TypeError("Event name and callback must be defined");
              this.apiEvents.push({ evt: e, once: i, callback: t });
            },
          },
          {
            key: "once",
            value: function (e, t) {
              this.on(e, t, !0);
            },
          },
          {
            key: "trigger",
            value: function (n) {
              var t = this,
                r =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : null,
                a = [];
              h(this.apiEvents, function (e, t) {
                var i = e.evt,
                  s = e.once,
                  e = e.callback;
                i == n && (e(r), s) && a.push(t);
              }),
                a.length &&
                  h(a, function (e) {
                    return t.apiEvents.splice(e, 1);
                  });
            },
          },
          {
            key: "clearAllEvents",
            value: function () {
              this.apiEvents.splice(0, this.apiEvents.length);
            },
          },
          {
            key: "version",
            value: function () {
              return "3.1.0";
            },
          },
        ]),
        _);
    function _() {
      var e =
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      a(this, _),
        (this.customOptions = e),
        (this.settings = d(J, e)),
        (this.effectsClasses = this.getAnimationClasses()),
        (this.videoPlayers = {}),
        (this.apiEvents = []),
        (this.fullElementsList = !1);
    }
    function D(e, t, i) {
      a(this, D), (this.element = e), (this.instance = t), (this.index = i);
    }
    function x() {
      var e =
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      a(this, x),
        (this.defaults = {
          href: "",
          sizes: "",
          srcset: "",
          title: "",
          type: "",
          videoProvider: "",
          description: "",
          alt: "",
          descPosition: "bottom",
          effect: "",
          width: "",
          height: "",
          content: !1,
          zoomable: !0,
          draggable: !0,
        }),
        u(e) && (this.defaults = d(this.defaults, e));
    }
    return function () {
      var e = new ee(
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
      );
      return e.init(), e;
    };
  }),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? t(exports)
      : "function" == typeof define && define.amd
      ? define(["exports"], t)
      : t(((e = e || self).window = e.window || {}));
  })(this, function (e) {
    "use strict";
    function i(e, t) {
      (e.prototype = Object.create(t.prototype)),
        ((e.prototype.constructor = e).__proto__ = t);
    }
    function Q(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function R(e) {
      return "string" == typeof e;
    }
    function c(e) {
      return "function" == typeof e;
    }
    function Z(e) {
      return "number" == typeof e;
    }
    function r(e) {
      return void 0 === e;
    }
    function S(e) {
      return "object" == typeof e;
    }
    function L(e) {
      return !1 !== e;
    }
    function o() {
      return "undefined" != typeof window;
    }
    function J(e) {
      return c(e) || R(e);
    }
    function s(e) {
      return (Ke = je(e, a)) && m;
    }
    function ee(e, t) {
      return console.warn(
        "Invalid property",
        e,
        "set to",
        t,
        "Missing plugin? gsap.registerPlugin()"
      );
    }
    function te(e, t) {
      return !t && console.warn(e);
    }
    function g(e, t) {
      return (e && (a[e] = t) && Ke && (Ke[e] = t)) || a;
    }
    function v() {
      return 0;
    }
    function ie(e) {
      var t,
        i,
        s = e[0];
      if ((S(s) || c(s) || (e = [e]), !(t = (s._gsap || {}).harness))) {
        for (i = Nt.length; i-- && !Nt[i].targetTest(s); );
        t = Nt[i];
      }
      for (i = e.length; i--; )
        (e[i] && (e[i]._gsap || (e[i]._gsap = new Jt(e[i], t)))) ||
          e.splice(i, 1);
      return e;
    }
    function se(e) {
      return e._gsap || ie(P(e))[0]._gsap;
    }
    function y(e, t, i) {
      return (i = e[t]) && c(i)
        ? e[t]()
        : (r(i) && e.getAttribute && e.getAttribute(t)) || i;
    }
    function p(e, t) {
      return (e = e.split(",")).forEach(t) || e;
    }
    function O(e) {
      return Math.round(1e5 * e) / 1e5 || 0;
    }
    function A(e) {
      return Math.round(1e7 * e) / 1e7 || 0;
    }
    function ne(e, t) {
      var i = t.charAt(0),
        t = parseFloat(t.substr(2));
      return (
        (e = parseFloat(e)),
        "+" === i ? e + t : "-" === i ? e - t : "*" === i ? e * t : e / t
      );
    }
    function re() {
      var e,
        t,
        i = Ot.length,
        s = Ot.slice(0);
      for (zt = {}, e = Ot.length = 0; e < i; e++)
        (t = s[e]) &&
          t._lazy &&
          (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0);
    }
    function b(e, t, i, s) {
      Ot.length && !I && re(),
        e.render(t, i, s || (I && t < 0 && (e._initted || e._startAt))),
        Ot.length && !I && re();
    }
    function w(e) {
      var t = parseFloat(e);
      return (t || 0 === t) && (e + "").match(At).length < 2
        ? t
        : R(e)
        ? e.trim()
        : e;
    }
    function _(e) {
      return e;
    }
    function z(e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    }
    function D(e, t) {
      for (var i in t)
        "__proto__" !== i &&
          "constructor" !== i &&
          "prototype" !== i &&
          (e[i] = S(t[i]) ? D(e[i] || (e[i] = {}), t[i]) : t[i]);
      return e;
    }
    function ae(e, t) {
      var i,
        s = {};
      for (i in e) i in t || (s[i] = e[i]);
      return s;
    }
    function oe(e) {
      var s,
        t = e.parent || B,
        i = e.keyframes
          ? ((s = k(e.keyframes)),
            function (e, t) {
              for (var i in t)
                i in e ||
                  ("duration" === i && s) ||
                  "ease" === i ||
                  (e[i] = t[i]);
            })
          : z;
      if (L(e.inherit))
        for (; t; ) i(e, t.vars.defaults), (t = t.parent || t._dp);
      return e;
    }
    function x(e, t, i, s, n) {
      void 0 === i && (i = "_first");
      var r,
        a = e[(s = void 0 === s ? "_last" : s)];
      if (n) for (r = t[n]; a && a[n] > r; ) a = a._prev;
      a ? ((t._next = a._next), (a._next = t)) : ((t._next = e[i]), (e[i] = t)),
        t._next ? (t._next._prev = t) : (e[s] = t),
        (t._prev = a),
        (t.parent = t._dp = e);
    }
    function E(e, t, i, s) {
      void 0 === i && (i = "_first"), void 0 === s && (s = "_last");
      var n = t._prev,
        r = t._next;
      n ? (n._next = r) : e[i] === t && (e[i] = r),
        r ? (r._prev = n) : e[s] === t && (e[s] = n),
        (t._next = t._prev = t.parent = null);
    }
    function le(e, t) {
      e.parent &&
        (!t || e.parent.autoRemoveChildren) &&
        e.parent.remove &&
        e.parent.remove(e),
        (e._act = 0);
    }
    function C(e, t) {
      if (e && (!t || t._end > e._dur || t._start < 0))
        for (var i = e; i; ) (i._dirty = 1), (i = i.parent);
      return e;
    }
    function T(e, t, i, s) {
      e._startAt &&
        (I
          ? e._startAt.revert(Pt)
          : (e.vars.immediateRender && !e.vars.autoRevert) ||
            e._startAt.render(t, !0, s));
    }
    function de(e) {
      return e._repeat ? He(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    }
    function ue(e, t) {
      return (
        (e - t._start) * t._ts +
        (0 <= t._ts ? 0 : t._dirty ? t.totalDuration() : t._tDur)
      );
    }
    function ce(e) {
      e._end = A(e._start + (e._tDur / Math.abs(e._ts || e._rts || j) || 0));
    }
    function he(e, t) {
      var i = e._dp;
      i &&
        i.smoothChildTiming &&
        e._ts &&
        ((e._start = A(
          i._time -
            (0 < e._ts
              ? t / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
        )),
        ce(e),
        i._dirty || C(i, e));
    }
    function pe(e, t) {
      var i;
      if (
        ((t._time ||
          (!t._dur && t._initted) ||
          (t._start < e._time && (t._dur || !t.add))) &&
          ((i = ue(e.rawTime(), t)),
          !t._dur || We(0, t.totalDuration(), i) - t._tTime > j) &&
          t.render(i, !0),
        C(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
      ) {
        if (e._dur < e.duration())
          for (i = e; i._dp; )
            0 <= i.rawTime() && i.totalTime(i._tTime), (i = i._dp);
        e._zTime = -j;
      }
    }
    function M(e, t, i, s) {
      return (
        t.parent && le(t),
        (t._start = A(
          (Z(i) ? i : i || e !== B ? d(e, i, t) : e._time) + t._delay
        )),
        (t._end = A(
          t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
        )),
        x(e, t, "_first", "_last", e._sort ? "_start" : 0),
        qe(t) || (e._recent = t),
        s || pe(e, t),
        e._ts < 0 && he(e, e._tTime),
        e
      );
    }
    function fe(e, t) {
      (a.ScrollTrigger || ee("scrollTrigger", t)) &&
        a.ScrollTrigger.create(t, e);
    }
    function me(e, t, i, s, n) {
      return (
        ri(e, t, n),
        !e._initted ||
          (!i &&
            e._pt &&
            !I &&
            ((e._dur && !1 !== e.vars.lazy) || (!e._dur && e.vars.lazy)) &&
            Ze !== f.frame &&
            (Ot.push(e), (e._lazy = [n, s])))
      );
    }
    function ge(e, t, i, s) {
      var n = e._repeat,
        t = A(t) || 0,
        r = e._tTime / e._tDur;
      return (
        r && !s && (e._time *= t / e._dur),
        (e._dur = t),
        (e._tDur = n ? (n < 0 ? 1e10 : A(t * (n + 1) + e._rDelay * n)) : t),
        0 < r && !s && he(e, (e._tTime = e._tDur * r)),
        e.parent && ce(e),
        i || C(e.parent, e),
        e
      );
    }
    function ve(e) {
      return e instanceof W ? C(e) : ge(e, e._dur);
    }
    function ye(e, t, i) {
      var s,
        n,
        r = Z(t[1]),
        a = (r ? 2 : 1) + (e < 2 ? 0 : 1),
        o = t[a];
      if ((r && (o.duration = t[1]), (o.parent = i), e)) {
        for (s = o, n = i; n && !("immediateRender" in s); )
          (s = n.vars.defaults || {}), (n = L(n.vars.inherit) && n.parent);
        (o.immediateRender = L(s.immediateRender)),
          e < 2 ? (o.runBackwards = 1) : (o.startAt = t[a - 1]);
      }
      return new $(t[0], o, t[1 + a]);
    }
    function be(e, t) {
      return e || 0 === e ? t(e) : t;
    }
    function Y(e, t) {
      return R(e) && (t = Mt.exec(e)) ? t[1] : "";
    }
    function we(e, t) {
      return (
        e &&
        S(e) &&
        "length" in e &&
        ((!t && !e.length) || (e.length - 1 in e && S(e[0]))) &&
        !e.nodeType &&
        e !== u
      );
    }
    function _e(i) {
      return (
        (i = P(i)[0] || te("Invalid scope") || {}),
        function (e) {
          var t = i.current || i.nativeElement || i;
          return P(
            e,
            t.querySelectorAll
              ? t
              : t === i
              ? te("Invalid scope") || Ue.createElement("div")
              : i
          );
        }
      );
    }
    function De(e) {
      return e.sort(function () {
        return 0.5 - Math.random();
      });
    }
    function xe(e) {
      var p, f, m, g, v, y, b, w, _;
      return c(e)
        ? e
        : ((p = S(e) ? e : { each: e }),
          (f = Kt(p.ease)),
          (m = p.from || 0),
          (g = parseFloat(p.base) || 0),
          (v = {}),
          (e = 0 < m && m < 1),
          (y = isNaN(m) || e),
          (b = p.axis),
          R((_ = w = m))
            ? (w = _ = { center: 0.5, edges: 0.5, end: 1 }[m] || 0)
            : !e && y && ((w = m[0]), (_ = m[1])),
          function (e, t, i) {
            var s,
              n,
              r,
              a,
              o,
              l,
              d,
              u,
              c = (i || p).length,
              h = v[c];
            if (!h) {
              if (!(u = "auto" === p.grid ? 0 : (p.grid || [1, N])[1])) {
                for (
                  l = -N;
                  l < (l = i[u++].getBoundingClientRect().left) && u < c;

                );
                u < c && u--;
              }
              for (
                h = v[c] = [],
                  s = y ? Math.min(u, c) * w - 0.5 : m % u,
                  n = u === N ? 0 : y ? (c * _) / u - 0.5 : (m / u) | 0,
                  d = N,
                  o = l = 0;
                o < c;
                o++
              )
                (a = (o % u) - s),
                  (r = n - ((o / u) | 0)),
                  (h[o] = a =
                    b ? Math.abs("y" === b ? r : a) : bt(a * a + r * r)),
                  l < a && (l = a),
                  a < d && (d = a);
              "random" === m && De(h),
                (h.max = l - d),
                (h.min = d),
                (h.v = c =
                  (parseFloat(p.amount) ||
                    parseFloat(p.each) *
                      (c < u
                        ? c - 1
                        : b
                        ? "y" === b
                          ? c / u
                          : u
                        : Math.max(u, c / u)) ||
                    0) * ("edges" === m ? -1 : 1)),
                (h.b = c < 0 ? g - c : g),
                (h.u = Y(p.amount || p.each) || 0),
                (f = f && c < 0 ? Ut(f) : f);
            }
            return (
              (c = (h[e] - h.min) / h.max || 0),
              A(h.b + (f ? f(c) : c) * h.v) + h.u
            );
          });
    }
    function Ee(i) {
      var s = Math.pow(10, ((i + "").split(".")[1] || "").length);
      return function (e) {
        var t = A(Math.round(parseFloat(e) / i) * i * s);
        return (t - (t % 1)) / s + (Z(e) ? 0 : Y(e));
      };
    }
    function Ce(l, e) {
      var d,
        u,
        t = k(l);
      return (
        !t &&
          S(l) &&
          ((d = t = l.radius || N),
          l.values
            ? ((l = P(l.values)), (u = !Z(l[0])) && (d *= d))
            : (l = Ee(l.increment))),
        be(
          e,
          t
            ? c(l)
              ? function (e) {
                  return (u = l(e)), Math.abs(u - e) <= d ? u : e;
                }
              : function (e) {
                  for (
                    var t,
                      i,
                      s = parseFloat(u ? e.x : e),
                      n = parseFloat(u ? e.y : 0),
                      r = N,
                      a = 0,
                      o = l.length;
                    o--;

                  )
                    (t = u
                      ? (t = l[o].x - s) * t + (i = l[o].y - n) * i
                      : Math.abs(l[o] - s)) < r && ((r = t), (a = o));
                  return (
                    (a = !d || r <= d ? l[a] : e),
                    u || a === e || Z(e) ? a : a + Y(e)
                  );
                }
            : Ee(l)
        )
      );
    }
    function Te(e, t, i, s) {
      return be(k(e) ? !t : !0 === i ? !!(i = 0) : !s, function () {
        return k(e)
          ? e[~~(Math.random() * e.length)]
          : (i = i || 1e-5) &&
              (s = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (e - i / 2 + Math.random() * (t - e + 0.99 * i)) / i
                ) *
                  i *
                  s
              ) / s;
      });
    }
    function Se(t, i, e) {
      return be(e, function (e) {
        return t[~~i(e)];
      });
    }
    function Ae(e) {
      for (var t, i, s, n, r = 0, a = ""; ~(t = e.indexOf("random(", r)); )
        (s = e.indexOf(")", t)),
          (n = "[" === e.charAt(t + 7)),
          (i = e.substr(t + 7, s - t - 7).match(n ? At : xt)),
          (a +=
            e.substr(r, t - r) +
            Te(n ? i : +i[0], n ? 0 : +i[1], +i[2] || 1e-5)),
          (r = s + 1);
      return a + e.substr(r, e.length - r);
    }
    function Me(e, t, i) {
      var s,
        n,
        r,
        a = e.labels,
        o = N;
      for (s in a)
        (n = a[s] - t) < 0 == !!i &&
          n &&
          o > (n = Math.abs(n)) &&
          ((r = s), (o = n));
      return r;
    }
    function ke(e) {
      return (
        le(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!I),
        e.progress() < 1 && q(e, "onInterrupt"),
        e
      );
    }
    function Pe(e) {
      if (e)
        if (((e = (!e.name && e.default) || e), o() || e.headless)) {
          var t = e.name,
            i = c(e),
            i =
              t && !i && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            s = {
              init: v,
              render: Di,
              add: ui,
              kill: Ei,
              modifier: xi,
              rawVars: 0,
            },
            n = {
              targetTest: 0,
              get: 0,
              getSetter: yi,
              aliases: {},
              register: 0,
            };
          if (($t(), e !== i)) {
            if (H[t]) return;
            z(i, z(ae(e, s), n)),
              je(i.prototype, je(s, ae(e, n))),
              (H[(i.prop = t)] = i),
              e.targetTest && (Nt.push(i), (Lt[t] = 1)),
              (t =
                ("css" === t
                  ? "CSS"
                  : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
          }
          g(t, i), e.register && e.register(m, i, G);
        } else jt.push(e);
    }
    function Fe(e, t, i) {
      return (
        ((6 * (e += e < 0 ? 1 : 1 < e ? -1 : 0) < 1
          ? t + (i - t) * e * 6
          : e < 0.5
          ? i
          : 3 * e < 2
          ? t + (i - t) * (2 / 3 - e) * 6
          : t) *
          h +
          0.5) |
        0
      );
    }
    function Le(e, t, i) {
      var s,
        n,
        r,
        a,
        o,
        l,
        d,
        u = e ? (Z(e) ? [e >> 16, (e >> 8) & h, e & h] : 0) : Ht.black;
      if (!u) {
        if (("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), Ht[e]))
          u = Ht[e];
        else if ("#" === e.charAt(0)) {
          if (
            9 ===
            (e =
              e.length < 6
                ? "#" +
                  (s = e.charAt(1)) +
                  s +
                  (n = e.charAt(2)) +
                  n +
                  (r = e.charAt(3)) +
                  r +
                  (5 === e.length ? e.charAt(4) + e.charAt(4) : "")
                : e).length
          )
            return [
              (u = parseInt(e.substr(1, 6), 16)) >> 16,
              (u >> 8) & h,
              u & h,
              parseInt(e.substr(7), 16) / 255,
            ];
          u = [(e = parseInt(e.substr(1), 16)) >> 16, (e >> 8) & h, e & h];
        } else if ("hsl" === e.substr(0, 3))
          if (((u = d = e.match(xt)), t)) {
            if (~e.indexOf("="))
              return (u = e.match(Et)), i && u.length < 4 && (u[3] = 1), u;
          } else
            (a = (+u[0] % 360) / 360),
              (o = u[1] / 100),
              (s =
                2 * (l = u[2] / 100) -
                (n = l <= 0.5 ? l * (o + 1) : l + o - l * o)),
              3 < u.length && (u[3] *= 1),
              (u[0] = Fe(a + 1 / 3, s, n)),
              (u[1] = Fe(a, s, n)),
              (u[2] = Fe(a - 1 / 3, s, n));
        else u = e.match(xt) || Ht.transparent;
        u = u.map(Number);
      }
      return (
        t &&
          !d &&
          ((s = u[0] / h),
          (n = u[1] / h),
          (r = u[2] / h),
          (l = ((e = Math.max(s, n, r)) + (t = Math.min(s, n, r))) / 2),
          e === t
            ? (a = o = 0)
            : ((d = e - t),
              (o = 0.5 < l ? d / (2 - e - t) : d / (e + t)),
              (a =
                e === s
                  ? (n - r) / d + (n < r ? 6 : 0)
                  : e === n
                  ? (r - s) / d + 2
                  : (s - n) / d + 4),
              (a *= 60)),
          (u[0] = ~~(a + 0.5)),
          (u[1] = ~~(100 * o + 0.5)),
          (u[2] = ~~(100 * l + 0.5))),
        i && u.length < 4 && (u[3] = 1),
        u
      );
    }
    function Oe(e) {
      var t = [],
        i = [],
        s = -1;
      return (
        e.split(qt).forEach(function (e) {
          e = e.match(Ct) || [];
          t.push.apply(t, e), i.push((s += e.length + 1));
        }),
        (t.c = i),
        t
      );
    }
    function ze(e, t, i) {
      var s,
        n,
        r,
        a,
        o = "",
        l = (e + o).match(qt),
        d = t ? "hsla(" : "rgba(",
        u = 0;
      if (!l) return e;
      if (
        ((l = l.map(function (e) {
          return (
            (e = Le(e, t, 1)) &&
            d +
              (t
                ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3]
                : e.join(",")) +
              ")"
          );
        })),
        i && ((r = Oe(e)), (s = i.c).join(o) !== r.c.join(o)))
      )
        for (a = (n = e.replace(qt, "1").split(Ct)).length - 1; u < a; u++)
          o +=
            n[u] +
            (~s.indexOf(u)
              ? l.shift() || d + "0,0,0,0)"
              : (r.length ? r : l.length ? l : i).shift());
      if (!n)
        for (a = (n = e.split(qt)).length - 1; u < a; u++) o += n[u] + l[u];
      return o + n[a];
    }
    function Ie(e) {
      var t = e.join(" ");
      if (((qt.lastIndex = 0), qt.test(t)))
        return (
          (t = Wt.test(t)),
          (e[1] = ze(e[1], t)),
          (e[0] = ze(e[0], t, Oe(e[1]))),
          !0
        );
    }
    function Be(e, t) {
      for (var i, s = e._first; s; )
        s instanceof W
          ? Be(s, t)
          : !s.vars.yoyoEase ||
            (s._yoyo && s._repeat) ||
            s._yoyo === t ||
            (s.timeline
              ? Be(s.timeline, t)
              : ((i = s._ease),
                (s._ease = s._yEase),
                (s._yEase = i),
                (s._yoyo = t))),
          (s = s._next);
    }
    function Ne(e, t, i, s) {
      var n,
        r = {
          easeIn: t,
          easeOut: (i =
            void 0 === i
              ? function (e) {
                  return 1 - t(1 - e);
                }
              : i),
          easeInOut: (s =
            void 0 === s
              ? function (e) {
                  return e < 0.5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2;
                }
              : s),
        };
      p(e, function (e) {
        for (var t in ((F[e] = a[e] = r), (F[(n = e.toLowerCase())] = i), r))
          F[
            n + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")
          ] = F[e + "." + t] = r[t];
      });
    }
    function Re(t) {
      return function (e) {
        return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
      };
    }
    function Ye(i, e, t) {
      function s(e) {
        return 1 === e ? 1 : n * Math.pow(2, -10 * e) * _t((e - r) * a) + 1;
      }
      var n = 1 <= e ? e : 1,
        r =
          ((a = (t || (i ? 0.3 : 0.45)) / (e < 1 ? e : 1)) / gt) *
          (Math.asin(1 / n) || 0),
        t =
          "out" === i
            ? s
            : "in" === i
            ? function (e) {
                return 1 - s(1 - e);
              }
            : Re(s),
        a = gt / a;
      return (
        (t.config = function (e, t) {
          return Ye(i, e, t);
        }),
        t
      );
    }
    function Xe(t, i) {
      function s(e) {
        return e ? --e * e * ((i + 1) * e + i) + 1 : 0;
      }
      void 0 === i && (i = 1.70158);
      var e =
        "out" === t
          ? s
          : "in" === t
          ? function (e) {
              return 1 - s(1 - e);
            }
          : Re(s);
      return (
        (e.config = function (e) {
          return Xe(t, e);
        }),
        e
      );
    }
    function je(e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    }
    function He(e, t) {
      return (t = Math.floor((e /= t))), e && t === e ? t - 1 : t;
    }
    function qe(e) {
      return "isFromStart" === (e = e.data) || "isStart" === e;
    }
    function d(e, t, i) {
      var s,
        n,
        r,
        a = e.labels,
        o = e._recent || Yt,
        l = e.duration() >= N ? o.endTime(!1) : e._dur;
      return R(t) && (isNaN(t) || t in a)
        ? ((n = t.charAt(0)),
          (r = "%" === t.substr(-1)),
          (s = t.indexOf("=")),
          "<" === n || ">" === n
            ? (0 <= s && (t = t.replace(/=/, "")),
              ("<" === n ? o._start : o.endTime(0 <= o._repeat)) +
                (parseFloat(t.substr(1)) || 0) *
                  (r ? (s < 0 ? o : i).totalDuration() / 100 : 1))
            : s < 0
            ? (t in a || (a[t] = l), a[t])
            : ((n = parseFloat(t.charAt(s - 1) + t.substr(s + 1))),
              r && i && (n = (n / 100) * (k(i) ? i[0] : i).totalDuration()),
              1 < s ? d(e, t.substr(0, s - 1), i) + n : l + n))
        : null == t
        ? l
        : +t;
    }
    function We(e, t, i) {
      return i < e ? e : t < i ? t : i;
    }
    function $e(t, e, i, s, n) {
      var r = e - t,
        a = s - i;
      return be(n, function (e) {
        return i + (((e - t) / r) * a || 0);
      });
    }
    var Ge,
      I,
      l,
      B,
      u,
      Ve,
      Ue,
      Ke,
      Qe,
      Ze,
      Je,
      et,
      tt,
      it,
      st,
      nt,
      rt,
      at,
      ot,
      lt,
      dt,
      ut,
      ct,
      ht,
      pt,
      ft,
      X = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: { lineHeight: "" },
      },
      mt = { duration: 0.5, overwrite: !1, delay: 0 },
      N = 1e8,
      j = 1 / N,
      gt = 2 * Math.PI,
      vt = gt / 4,
      yt = 0,
      bt = Math.sqrt,
      wt = Math.cos,
      _t = Math.sin,
      Dt =
        ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
        function () {},
      k = Array.isArray,
      xt = /(?:-?\.?\d|\.)+/gi,
      Et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      Ct = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      Tt = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      St = /[+-]=-?[.\d]+/,
      At = /[^,'"\[\]\s]+/gi,
      Mt = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
      a = {},
      kt = { suppressEvents: !0, isStart: !0, kill: !1 },
      Pt = { suppressEvents: !0, kill: !1 },
      Ft = { suppressEvents: !0 },
      Lt = {},
      Ot = [],
      zt = {},
      H = {},
      It = {},
      Bt = 30,
      Nt = [],
      Rt = "",
      Yt = { _start: 0, endTime: v, totalDuration: v },
      Xt = [].slice,
      P = function (e, t, i) {
        return l && !t && l.selector
          ? l.selector(e)
          : !R(e) || i || (!Ve && $t())
          ? k(e)
            ? ((s = i),
              void 0 === n && (n = []),
              e.forEach(function (e) {
                return (R(e) && !s) || we(e, 1)
                  ? n.push.apply(n, P(e))
                  : n.push(e);
              }) || n)
            : we(e)
            ? Xt.call(e, 0)
            : e
            ? [e]
            : []
          : Xt.call((t || Ue).querySelectorAll(e), 0);
        var s, n;
      },
      q = function (e, t, i) {
        var s = e.vars,
          n = s[t],
          r = l,
          a = e._ctx;
        if (n)
          return (
            (t = s[t + "Params"]),
            (s = s.callbackScope || e),
            i && Ot.length && re(),
            a && (l = a),
            (e = t ? n.apply(s, t) : n.call(s)),
            (l = r),
            e
          );
      },
      jt = [],
      h = 255,
      Ht = {
        aqua: [0, h, h],
        lime: [0, h, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, h],
        navy: [0, 0, 128],
        white: [h, h, h],
        olive: [128, 128, 0],
        yellow: [h, h, 0],
        orange: [h, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [h, 0, 0],
        pink: [h, 192, 203],
        cyan: [0, h, h],
        transparent: [h, h, h, 0],
      },
      qt = (function () {
        var e,
          t =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (e in Ht) t += "|" + e + "\\b";
        return new RegExp(t + ")", "gi");
      })(),
      Wt = /hsl[a]?\(/,
      f =
        ((at = Date.now),
        (ot = 500),
        (lt = 33),
        (dt = at()),
        (ut = dt),
        (ht = ct = 1e3 / 240),
        (st = {
          time: 0,
          frame: 0,
          tick: function () {
            Qt(!0);
          },
          deltaRatio: function (e) {
            return nt / (1e3 / (e || 60));
          },
          wake: function () {
            Qe &&
              (!Ve &&
                o() &&
                ((u = Ve = window),
                (Ue = u.document || {}),
                (a.gsap = m),
                (u.gsapVersions || (u.gsapVersions = [])).push(m.version),
                s(Ke || u.GreenSockGlobals || (!u.gsap && u) || {}),
                jt.forEach(Pe)),
              (it =
                "undefined" != typeof requestAnimationFrame &&
                requestAnimationFrame),
              et && st.sleep(),
              (tt =
                it ||
                function (e) {
                  return setTimeout(e, (ht - 1e3 * st.time + 1) | 0);
                }),
              (Je = 1),
              Qt(2));
          },
          sleep: function () {
            (it ? cancelAnimationFrame : clearTimeout)(et), (Je = 0), (tt = v);
          },
          lagSmoothing: function (e, t) {
            (ot = e || 1 / 0), (lt = Math.min(t || 33, ot));
          },
          fps: function (e) {
            (ct = 1e3 / (e || 240)), (ht = 1e3 * st.time + ct);
          },
          add: function (n, e, t) {
            var r = e
              ? function (e, t, i, s) {
                  n(e, t, i, s), st.remove(r);
                }
              : n;
            return st.remove(n), pt[t ? "unshift" : "push"](r), $t(), r;
          },
          remove: function (e, t) {
            ~(t = pt.indexOf(e)) && pt.splice(t, 1) && t <= rt && rt--;
          },
          _listeners: (pt = []),
        })),
      $t = function () {
        return !Je && f.wake();
      },
      F = {},
      Gt = /^[\d.\-M][\d.\-,\s]/,
      Vt = /["']/g,
      Ut = function (t) {
        return function (e) {
          return 1 - t(1 - e);
        };
      },
      Kt = function (e, t) {
        return (
          (e &&
            (c(e)
              ? e
              : F[e] ||
                ((r = ((e = e) + "").split("(")),
                (a = F[r[0]]) && 1 < r.length && a.config
                  ? a.config.apply(
                      null,
                      ~e.indexOf("{")
                        ? [
                            (function (e) {
                              for (
                                var t,
                                  i,
                                  s,
                                  n = {},
                                  r = e.substr(1, e.length - 3).split(":"),
                                  a = r[0],
                                  o = 1,
                                  l = r.length;
                                o < l;
                                o++
                              )
                                (i = r[o]),
                                  (t =
                                    o !== l - 1
                                      ? i.lastIndexOf(",")
                                      : i.length),
                                  (s = i.substr(0, t)),
                                  (n[a] = isNaN(s)
                                    ? s.replace(Vt, "").trim()
                                    : +s),
                                  (a = i.substr(t + 1).trim());
                              return n;
                            })(r[1]),
                          ]
                        : ((i = (r = e).indexOf("(") + 1),
                          (s = r.indexOf(")")),
                          (n = r.indexOf("(", i)),
                          r
                            .substring(
                              i,
                              ~n && n < s ? r.indexOf(")", s + 1) : s
                            )
                            .split(",")
                            .map(w))
                    )
                  : F._CE && Gt.test(e)
                  ? F._CE("", e)
                  : a))) ||
          t
        );
        var i, s, n, r, a;
      };
    function Qt(e) {
      var t,
        i,
        s,
        n = at() - ut,
        r = !0 === e;
      if (
        ((ot < n || n < 0) && (dt += n - lt),
        (0 < (n = (i = (ut += n) - dt) - ht) || r) &&
          ((s = ++st.frame),
          (nt = i - 1e3 * st.time),
          (st.time = i /= 1e3),
          (ht += n + (ct <= n ? 4 : ct - n)),
          (t = 1)),
        r || (et = tt(Qt)),
        t)
      )
        for (rt = 0; rt < pt.length; rt++) pt[rt](i, nt, s, e);
    }
    function Zt(e) {
      return e < 1 / 2.75
        ? ft * e * e
        : e < 0.7272727272727273
        ? ft * Math.pow(e - 1.5 / 2.75, 2) + 0.75
        : e < 0.9090909090909092
        ? ft * (e -= 2.25 / 2.75) * e + 0.9375
        : ft * Math.pow(e - 2.625 / 2.75, 2) + 0.984375;
    }
    p("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, t) {
      var i = t < 5 ? t + 1 : t;
      Ne(
        e + ",Power" + (i - 1),
        t
          ? function (e) {
              return Math.pow(e, i);
            }
          : function (e) {
              return e;
            },
        function (e) {
          return 1 - Math.pow(1 - e, i);
        },
        function (e) {
          return e < 0.5
            ? Math.pow(2 * e, i) / 2
            : 1 - Math.pow(2 * (1 - e), i) / 2;
        }
      );
    }),
      (F.Linear.easeNone = F.none = F.Linear.easeIn),
      Ne("Elastic", Ye("in"), Ye("out"), Ye()),
      (ft = 7.5625),
      Ne(
        "Bounce",
        function (e) {
          return 1 - Zt(1 - e);
        },
        Zt
      ),
      Ne("Expo", function (e) {
        return e ? Math.pow(2, 10 * (e - 1)) : 0;
      }),
      Ne("Circ", function (e) {
        return -(bt(1 - e * e) - 1);
      }),
      Ne("Sine", function (e) {
        return 1 === e ? 1 : 1 - wt(e * vt);
      }),
      Ne("Back", Xe("in"), Xe("out"), Xe()),
      (F.SteppedEase =
        F.steps =
        a.SteppedEase =
          {
            config: function (e, t) {
              var i = 1 / (e = void 0 === e ? 1 : e),
                s = e + (t ? 0 : 1),
                n = t ? 1 : 0;
              return function (e) {
                return (((s * We(0, 0.99999999, e)) | 0) + n) * i;
              };
            },
          }),
      (mt.ease = F["quad.out"]),
      p(
        "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
        function (e) {
          return (Rt += e + "," + e + "Params,");
        }
      );
    var Jt = function (e, t) {
        (this.id = yt++),
          ((e._gsap = this).target = e),
          (this.harness = t),
          (this.get = t ? t.get : y),
          (this.set = t ? t.getSetter : yi);
      },
      ei =
        (((t = ti.prototype).delay = function (e) {
          return e || 0 === e
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + e - this._delay),
              (this._delay = e),
              this)
            : this._delay;
        }),
        (t.duration = function (e) {
          return arguments.length
            ? this.totalDuration(
                0 < this._repeat ? e + (e + this._rDelay) * this._repeat : e
              )
            : this.totalDuration() && this._dur;
        }),
        (t.totalDuration = function (e) {
          return arguments.length
            ? ((this._dirty = 0),
              ge(
                this,
                this._repeat < 0
                  ? e
                  : (e - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (t.totalTime = function (e, t) {
          if (($t(), !arguments.length)) return this._tTime;
          var i = this._dp;
          if (i && i.smoothChildTiming && this._ts) {
            for (
              he(this, e), i._dp && !i.parent && pe(i, this);
              i && i.parent;

            )
              i.parent._time !==
                i._start +
                  (0 <= i._ts
                    ? i._tTime / i._ts
                    : (i.totalDuration() - i._tTime) / -i._ts) &&
                i.totalTime(i._tTime, !0),
                (i = i.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((0 < this._ts && e < this._tDur) ||
                (this._ts < 0 && 0 < e) ||
                (!this._tDur && !e)) &&
              M(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== e ||
              (!this._dur && !t) ||
              (this._initted && Math.abs(this._zTime) === j) ||
              (!e && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = e), b(this, e, t)),
            this
          );
        }),
        (t.time = function (e, t) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), e + de(this)) %
                  (this._dur + this._rDelay) || (e ? this._dur : 0),
                t
              )
            : this._time;
        }),
        (t.totalProgress = function (e, t) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * e, t)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : 0 < this.rawTime()
            ? 1
            : 0;
        }),
        (t.progress = function (e, t) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (!this._yoyo || 1 & this.iteration() ? e : 1 - e) +
                  de(this),
                t
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : 0 < this.rawTime()
            ? 1
            : 0;
        }),
        (t.iteration = function (e, t) {
          var i = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (e - 1) * i, t)
            : this._repeat
            ? He(this._tTime, i) + 1
            : 1;
        }),
        (t.timeScale = function (e, t) {
          if (!arguments.length) return this._rts === -j ? 0 : this._rts;
          if (this._rts === e) return this;
          for (
            var i =
                this.parent && this._ts
                  ? ue(this.parent._time, this)
                  : this._tTime,
              e =
                ((this._rts = +e || 0),
                (this._ts = this._ps || e === -j ? 0 : this._rts),
                this.totalTime(
                  We(-Math.abs(this._delay), this._tDur, i),
                  !1 !== t
                ),
                ce(this),
                this),
              s = e.parent;
            s && s.parent;

          )
            (s._dirty = 1), s.totalDuration(), (s = s.parent);
          return e;
        }),
        (t.paused = function (e) {
          return arguments.length
            ? (this._ps !== e &&
                ((this._ps = e)
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : ($t(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      1 === this.progress() &&
                        Math.abs(this._zTime) !== j &&
                        (this._tTime -= j)
                    ))),
              this)
            : this._ps;
        }),
        (t.startTime = function (e) {
          var t;
          return arguments.length
            ? ((this._start = e),
              !(t = this.parent || this._dp) ||
                (!t._sort && this.parent) ||
                M(t, this, e - this._delay),
              this)
            : this._start;
        }),
        (t.endTime = function (e) {
          return (
            this._start +
            (L(e) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (t.rawTime = function (e) {
          var t = this.parent || this._dp;
          return t
            ? e &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? ue(t.rawTime(e), this)
              : this._tTime
            : this._tTime;
        }),
        (t.revert = function (e) {
          var t = I;
          return (
            (I = e = void 0 === e ? Ft : e),
            (this._initted || this._startAt) &&
              (this.timeline && this.timeline.revert(e),
              this.totalTime(-0.01, e.suppressEvents)),
            "nested" !== this.data && !1 !== e.kill && this.kill(),
            (I = t),
            this
          );
        }),
        (t.globalTime = function (e) {
          for (var t = this, i = arguments.length ? e : t.rawTime(); t; )
            (i = t._start + i / (Math.abs(t._ts) || 1)), (t = t._dp);
          return !this.parent && this._sat ? this._sat.globalTime(e) : i;
        }),
        (t.repeat = function (e) {
          return arguments.length
            ? ((this._repeat = e === 1 / 0 ? -2 : e), ve(this))
            : -2 === this._repeat
            ? 1 / 0
            : this._repeat;
        }),
        (t.repeatDelay = function (e) {
          var t;
          return arguments.length
            ? ((t = this._time),
              (this._rDelay = e),
              ve(this),
              t ? this.time(t) : this)
            : this._rDelay;
        }),
        (t.yoyo = function (e) {
          return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
        }),
        (t.seek = function (e, t) {
          return this.totalTime(d(this, e), L(t));
        }),
        (t.restart = function (e, t) {
          return this.play().totalTime(e ? -this._delay : 0, L(t));
        }),
        (t.play = function (e, t) {
          return null != e && this.seek(e, t), this.reversed(!1).paused(!1);
        }),
        (t.reverse = function (e, t) {
          return (
            null != e && this.seek(e || this.totalDuration(), t),
            this.reversed(!0).paused(!1)
          );
        }),
        (t.pause = function (e, t) {
          return null != e && this.seek(e, t), this.paused(!0);
        }),
        (t.resume = function () {
          return this.paused(!1);
        }),
        (t.reversed = function (e) {
          return arguments.length
            ? (!!e !== this.reversed() &&
                this.timeScale(-this._rts || (e ? -j : 0)),
              this)
            : this._rts < 0;
        }),
        (t.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -j), this;
        }),
        (t.isActive = function () {
          var e = this.parent || this._dp,
            t = this._start;
          return !(
            e &&
            !(
              this._ts &&
              this._initted &&
              e.isActive() &&
              (e = e.rawTime(!0)) >= t &&
              e < this.endTime(!0) - j
            )
          );
        }),
        (t.eventCallback = function (e, t, i) {
          var s = this.vars;
          return 1 < arguments.length
            ? (t
                ? ((s[e] = t),
                  i && (s[e + "Params"] = i),
                  "onUpdate" === e && (this._onUpdate = t))
                : delete s[e],
              this)
            : s[e];
        }),
        (t.then = function (s) {
          var n = this;
          return new Promise(function (t) {
            function e() {
              var e = n.then;
              (n.then = null),
                c(i) && (i = i(n)) && (i.then || i === n) && (n.then = e),
                t(i),
                (n.then = e);
            }
            var i = c(s) ? s : _;
            (n._initted && 1 === n.totalProgress() && 0 <= n._ts) ||
            (!n._tTime && n._ts < 0)
              ? e()
              : (n._prom = e);
          });
        }),
        (t.kill = function () {
          ke(this);
        }),
        ti);
    function ti(e) {
      (this.vars = e),
        (this._delay = +e.delay || 0),
        (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
          ((this._rDelay = e.repeatDelay || 0),
          (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
        (this._ts = 1),
        ge(this, +e.duration, 1, 1),
        (this.data = e.data),
        l && (this._ctx = l).data.push(this),
        Je || f.wake();
    }
    z(ei.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: !1,
      parent: null,
      _initted: !1,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -j,
      _prom: 0,
      _ps: !1,
      _rts: 1,
    });
    i(si, (ii = ei)),
      ((t = si.prototype).to = function (e, t, i) {
        return ye(0, arguments, this), this;
      }),
      (t.from = function (e, t, i) {
        return ye(1, arguments, this), this;
      }),
      (t.fromTo = function (e, t, i, s) {
        return ye(2, arguments, this), this;
      }),
      (t.set = function (e, t, i) {
        return (
          (t.duration = 0),
          (t.parent = this),
          oe(t).repeatDelay || (t.repeat = 0),
          (t.immediateRender = !!t.immediateRender),
          new $(e, t, d(this, i), 1),
          this
        );
      }),
      (t.call = function (e, t, i) {
        return M(this, $.delayedCall(0, e, t), i);
      }),
      (t.staggerTo = function (e, t, i, s, n, r, a) {
        return (
          (i.duration = t),
          (i.stagger = i.stagger || s),
          (i.onComplete = r),
          (i.onCompleteParams = a),
          (i.parent = this),
          new $(e, i, d(this, n)),
          this
        );
      }),
      (t.staggerFrom = function (e, t, i, s, n, r, a) {
        return (
          (i.runBackwards = 1),
          (oe(i).immediateRender = L(i.immediateRender)),
          this.staggerTo(e, t, i, s, n, r, a)
        );
      }),
      (t.staggerFromTo = function (e, t, i, s, n, r, a, o) {
        return (
          (s.startAt = i),
          (oe(s).immediateRender = L(s.immediateRender)),
          this.staggerTo(e, t, s, n, r, a, o)
        );
      }),
      (t.render = function (e, t, i) {
        var s,
          n,
          r,
          a,
          o,
          l,
          d,
          u,
          c,
          h,
          p = this._time,
          f = this._dirty ? this.totalDuration() : this._tDur,
          m = this._dur,
          g = e <= 0 ? 0 : A(e),
          v = this._zTime < 0 != e < 0 && (this._initted || !m);
        if (
          (g = this !== B && f < g && 0 <= e ? f : g) !== this._tTime ||
          i ||
          v
        ) {
          if (
            (p !== this._time &&
              m &&
              ((g += this._time - p), (e += this._time - p)),
            (s = g),
            (u = this._start),
            (o = !(d = this._ts)),
            v && (m || (p = this._zTime), (!e && t) || (this._zTime = e)),
            this._repeat)
          ) {
            if (
              ((v = this._yoyo),
              (a = m + this._rDelay),
              this._repeat < -1 && e < 0)
            )
              return this.totalTime(100 * a + e, t, i);
            if (
              ((s = A(g % a)),
              g === f
                ? ((r = this._repeat), (s = m))
                : ((r = ~~(g / a)) && r === g / a && ((s = m), r--),
                  m < s && (s = m)),
              (c = He(this._tTime, a)),
              v && 1 & r && ((s = m - s), (h = 1)),
              r !==
                (c =
                  !p &&
                  this._tTime &&
                  c !== r &&
                  this._tTime - c * a - this._dur <= 0
                    ? r
                    : c) && !this._lock)
            ) {
              var y = v && 1 & c,
                v = y === (v && 1 & r),
                p = (y = r < c ? !y : y) ? 0 : g % m ? m : g;
              if (
                ((this._lock = 1),
                (this.render(p || (h ? 0 : A(r * a)), t, !m)._lock = 0),
                (this._tTime = g),
                !t && this.parent && q(this, "onRepeat"),
                this.vars.repeatRefresh && !h && (this.invalidate()._lock = 1),
                (p && p !== this._time) ||
                  o != !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((m = this._dur),
                (f = this._tDur),
                v &&
                  ((this._lock = 2),
                  this.render((p = y ? m : -1e-4), !0),
                  this.vars.repeatRefresh) &&
                  !h &&
                  this.invalidate(),
                (this._lock = 0),
                !this._ts && !o)
              )
                return this;
              Be(this, h);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              (l = (function (e, t, i) {
                var s;
                if (t < i)
                  for (s = e._first; s && s._start <= i; ) {
                    if ("isPause" === s.data && s._start > t) return s;
                    s = s._next;
                  }
                else
                  for (s = e._last; s && s._start >= i; ) {
                    if ("isPause" === s.data && s._start < t) return s;
                    s = s._prev;
                  }
              })(this, A(p), A(s))) &&
              (g -= s - (s = l._start)),
            (this._tTime = g),
            (this._time = s),
            (this._act = !d),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = e),
              (p = 0)),
            !p && s && !t && !r && (q(this, "onStart"), this._tTime !== g))
          )
            return this;
          if (p <= s && 0 <= e)
            for (b = this._first; b; ) {
              if (
                ((n = b._next), (b._act || s >= b._start) && b._ts && l !== b)
              ) {
                if (b.parent !== this) return this.render(e, t, i);
                if (
                  (b.render(
                    0 < b._ts
                      ? (s - b._start) * b._ts
                      : (b._dirty ? b.totalDuration() : b._tDur) +
                          (s - b._start) * b._ts,
                    t,
                    i
                  ),
                  s !== this._time || (!this._ts && !o))
                ) {
                  (l = 0), n && (g += this._zTime = -j);
                  break;
                }
              }
              b = n;
            }
          else
            for (var b = this._last, w = e < 0 ? e : s; b; ) {
              if (
                ((n = b._prev), (b._act || w <= b._end) && b._ts && l !== b)
              ) {
                if (b.parent !== this) return this.render(e, t, i);
                if (
                  (b.render(
                    0 < b._ts
                      ? (w - b._start) * b._ts
                      : (b._dirty ? b.totalDuration() : b._tDur) +
                          (w - b._start) * b._ts,
                    t,
                    i || (I && (b._initted || b._startAt))
                  ),
                  s !== this._time || (!this._ts && !o))
                ) {
                  (l = 0), n && (g += this._zTime = w ? -j : j);
                  break;
                }
              }
              b = n;
            }
          if (
            l &&
            !t &&
            (this.pause(),
            (l.render(p <= s ? 0 : -j)._zTime = p <= s ? 1 : -1),
            this._ts)
          )
            return (this._start = u), ce(this), this.render(e, t, i);
          this._onUpdate && !t && q(this, "onUpdate", !0),
            !((g === f && this._tTime >= this.totalDuration()) || (!g && p)) ||
              (u !== this._start && Math.abs(d) === Math.abs(this._ts)) ||
              this._lock ||
              ((!e && m) ||
                !((g === f && 0 < this._ts) || (!g && this._ts < 0)) ||
                le(this, 1),
              t) ||
              (e < 0 && !p) ||
              (!g && !p && f) ||
              (q(
                this,
                g === f && 0 <= e ? "onComplete" : "onReverseComplete",
                !0
              ),
              !this._prom) ||
              (g < f && 0 < this.timeScale()) ||
              this._prom();
        }
        return this;
      }),
      (t.add = function (e, t) {
        var i = this;
        if ((Z(t) || (t = d(this, t, e)), !(e instanceof ei))) {
          if (k(e))
            return (
              e.forEach(function (e) {
                return i.add(e, t);
              }),
              this
            );
          if (R(e)) return this.addLabel(e, t);
          if (!c(e)) return this;
          e = $.delayedCall(0, e);
        }
        return this !== e ? M(this, e, t) : this;
      }),
      (t.getChildren = function (e, t, i, s) {
        void 0 === e && (e = !0),
          void 0 === t && (t = !0),
          void 0 === i && (i = !0),
          void 0 === s && (s = -N);
        for (var n = [], r = this._first; r; )
          r._start >= s &&
            (r instanceof $
              ? t && n.push(r)
              : (i && n.push(r),
                e && n.push.apply(n, r.getChildren(!0, t, i)))),
            (r = r._next);
        return n;
      }),
      (t.getById = function (e) {
        for (var t = this.getChildren(1, 1, 1), i = t.length; i--; )
          if (t[i].vars.id === e) return t[i];
      }),
      (t.remove = function (e) {
        return R(e)
          ? this.removeLabel(e)
          : c(e)
          ? this.killTweensOf(e)
          : (E(this, e),
            e === this._recent && (this._recent = this._last),
            C(this));
      }),
      (t.totalTime = function (e, t) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = A(
                f.time -
                  (0 < this._ts
                    ? e / this._ts
                    : (this.totalDuration() - e) / -this._ts)
              )),
            ii.prototype.totalTime.call(this, e, t),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (t.addLabel = function (e, t) {
        return (this.labels[e] = d(this, t)), this;
      }),
      (t.removeLabel = function (e) {
        return delete this.labels[e], this;
      }),
      (t.addPause = function (e, t, i) {
        t = $.delayedCall(0, t || v, i);
        return (
          (t.data = "isPause"), (this._hasPause = 1), M(this, t, d(this, e))
        );
      }),
      (t.removePause = function (e) {
        var t = this._first;
        for (e = d(this, e); t; )
          t._start === e && "isPause" === t.data && le(t), (t = t._next);
      }),
      (t.killTweensOf = function (e, t, i) {
        for (var s = this.getTweensOf(e, i), n = s.length; n--; )
          oi !== s[n] && s[n].kill(e, t);
        return this;
      }),
      (t.getTweensOf = function (e, t) {
        for (var i, s = [], n = P(e), r = this._first, a = Z(t); r; )
          r instanceof $
            ? (function (e, t) {
                for (var i = t.length, s = 0; e.indexOf(t[s]) < 0 && ++s < i; );
                return s < i;
              })(r._targets, n) &&
              (a
                ? (!oi || (r._initted && r._ts)) &&
                  r.globalTime(0) <= t &&
                  r.globalTime(r.totalDuration()) > t
                : !t || r.isActive()) &&
              s.push(r)
            : (i = r.getTweensOf(n, t)).length && s.push.apply(s, i),
            (r = r._next);
        return s;
      }),
      (t.tweenTo = function (e, t) {
        t = t || {};
        var i,
          s = this,
          n = d(s, e),
          r = t.startAt,
          a = t.onStart,
          o = t.onStartParams,
          e = t.immediateRender,
          l = $.to(
            s,
            z(
              {
                ease: t.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: n,
                overwrite: "auto",
                duration:
                  t.duration ||
                  Math.abs(
                    (n - (r && "time" in r ? r.time : s._time)) / s.timeScale()
                  ) ||
                  j,
                onStart: function () {
                  var e;
                  s.pause(),
                    i ||
                      ((e =
                        t.duration ||
                        Math.abs(
                          (n - (r && "time" in r ? r.time : s._time)) /
                            s.timeScale()
                        )),
                      l._dur !== e && ge(l, e, 0, 1).render(l._time, !0, !0),
                      (i = 1)),
                    a && a.apply(l, o || []);
                },
              },
              t
            )
          );
        return e ? l.render(0) : l;
      }),
      (t.tweenFromTo = function (e, t, i) {
        return this.tweenTo(t, z({ startAt: { time: d(this, e) } }, i));
      }),
      (t.recent = function () {
        return this._recent;
      }),
      (t.nextLabel = function (e) {
        return void 0 === e && (e = this._time), Me(this, d(this, e));
      }),
      (t.previousLabel = function (e) {
        return void 0 === e && (e = this._time), Me(this, d(this, e), 1);
      }),
      (t.currentLabel = function (e) {
        return arguments.length
          ? this.seek(e, !0)
          : this.previousLabel(this._time + j);
      }),
      (t.shiftChildren = function (e, t, i) {
        void 0 === i && (i = 0);
        for (var s, n = this._first, r = this.labels; n; )
          n._start >= i && ((n._start += e), (n._end += e)), (n = n._next);
        if (t) for (s in r) r[s] >= i && (r[s] += e);
        return C(this);
      }),
      (t.invalidate = function (e) {
        var t = this._first;
        for (this._lock = 0; t; ) t.invalidate(e), (t = t._next);
        return ii.prototype.invalidate.call(this, e);
      }),
      (t.clear = function (e) {
        void 0 === e && (e = !0);
        for (var t, i = this._first; i; )
          (t = i._next), this.remove(i), (i = t);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          e && (this.labels = {}),
          C(this)
        );
      }),
      (t.totalDuration = function (e) {
        var t,
          i,
          s,
          n = 0,
          r = this,
          a = r._last,
          o = N;
        if (arguments.length)
          return r.timeScale(
            (r._repeat < 0 ? r.duration() : r.totalDuration()) /
              (r.reversed() ? -e : e)
          );
        if (r._dirty) {
          for (s = r.parent; a; )
            (t = a._prev),
              a._dirty && a.totalDuration(),
              o < (i = a._start) && r._sort && a._ts && !r._lock
                ? ((r._lock = 1), (M(r, a, i - a._delay, 1)._lock = 0))
                : (o = i),
              i < 0 &&
                a._ts &&
                ((n -= i),
                ((!s && !r._dp) || (s && s.smoothChildTiming)) &&
                  ((r._start += i / r._ts), (r._time -= i), (r._tTime -= i)),
                r.shiftChildren(-i, !1, -1 / 0),
                (o = 0)),
              a._end > n && a._ts && (n = a._end),
              (a = t);
          ge(r, r === B && r._time > n ? r._time : n, 1, 1), (r._dirty = 0);
        }
        return r._tDur;
      }),
      (si.updateRoot = function (e) {
        if ((B._ts && (b(B, ue(e, B)), (Ze = f.frame)), f.frame >= Bt)) {
          Bt += X.autoSleep || 120;
          var t = B._first;
          if ((!t || !t._ts) && X.autoSleep && f._listeners.length < 2) {
            for (; t && !t._ts; ) t = t._next;
            t || f.sleep();
          }
        }
      });
    var ii,
      W = si;
    function si(e, t) {
      var i;
      return (
        ((i = ii.call(this, (e = void 0 === e ? {} : e)) || this).labels = {}),
        (i.smoothChildTiming = !!e.smoothChildTiming),
        (i.autoRemoveChildren = !!e.autoRemoveChildren),
        (i._sort = L(e.sortChildren)),
        B && M(e.parent || B, Q(i), t),
        e.reversed && i.reverse(),
        e.paused && i.paused(!0),
        e.scrollTrigger && fe(Q(i), e.scrollTrigger),
        i
      );
    }
    function ni(e, t, i, s, n, r) {
      var a, o, l, d;
      if (
        H[e] &&
        !1 !==
          (a = new H[e]()).init(
            n,
            a.rawVars
              ? t[e]
              : (function (e, t, i, s, n) {
                  if (
                    !S((e = c(e) ? ai(e, n, t, i, s) : e)) ||
                    (e.style && e.nodeType) ||
                    k(e) ||
                    Dt(e)
                  )
                    return R(e) ? ai(e, n, t, i, s) : e;
                  var r,
                    a = {};
                  for (r in e) a[r] = ai(e[r], n, t, i, s);
                  return a;
                })(t[e], s, n, r, i),
            i,
            s,
            r
          ) &&
        ((i._pt = o = new G(i._pt, n, e, 0, 1, a.render, a, 0, a.priority)),
        i !== Yi)
      )
        for (l = i._ptLookup[i._targets.indexOf(n)], d = a._props.length; d--; )
          l[a._props[d]] = o;
      return a;
    }
    z(W.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
    function ri(e, t, i) {
      var s,
        n,
        r,
        a,
        o,
        l,
        d,
        u,
        c,
        h,
        p,
        f,
        m,
        g = e.vars,
        v = g.ease,
        y = g.startAt,
        b = g.immediateRender,
        w = g.lazy,
        _ = g.onUpdate,
        D = g.runBackwards,
        x = g.yoyoEase,
        E = g.keyframes,
        C = g.autoRevert,
        T = e._dur,
        S = e._startAt,
        A = e._targets,
        M = e.parent,
        k = M && "nested" === M.data ? M.vars.targets : A,
        P = "auto" === e._overwrite && !Ge,
        F = e.timeline;
      if (
        ((e._ease = Kt((v = !F || (E && v) ? v : "none"), mt.ease)),
        (e._yEase = x ? Ut(Kt(!0 === x ? v : x, mt.ease)) : 0),
        x &&
          e._yoyo &&
          !e._repeat &&
          ((x = e._yEase), (e._yEase = e._ease), (e._ease = x)),
        (e._from = !F && !!g.runBackwards),
        !F || (E && !g.stagger))
      ) {
        if (
          ((f = (u = A[0] ? se(A[0]).harness : 0) && g[u.prop]),
          (s = ae(g, Lt)),
          S &&
            (S._zTime < 0 && S.progress(1),
            t < 0 && D && b && !C
              ? S.render(-1, !0)
              : S.revert(D && T ? Pt : kt),
            (S._lazy = 0)),
          y)
        ) {
          if (
            (le(
              (e._startAt = $.set(
                A,
                z(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: M,
                    immediateRender: !0,
                    lazy: !S && L(w),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      _ &&
                      function () {
                        return q(e, "onUpdate");
                      },
                    stagger: 0,
                  },
                  y
                )
              ))
            ),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (I || (!b && !C)) && e._startAt.revert(Pt),
            b && T && t <= 0 && i <= 0)
          )
            return void (t && (e._zTime = t));
        } else if (D && T && !S)
          if (
            ((r = z(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: (b = t ? !1 : b) && !S && L(w),
                immediateRender: b,
                stagger: 0,
                parent: M,
              },
              s
            )),
            f && (r[u.prop] = f),
            le((e._startAt = $.set(A, r))),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (I ? e._startAt.revert(Pt) : e._startAt.render(-1, !0)),
            (e._zTime = t),
            b)
          ) {
            if (!t) return;
          } else ri(e._startAt, j, j);
        for (
          e._pt = e._ptCache = 0, w = (T && L(w)) || (w && !T), n = 0;
          n < A.length;
          n++
        ) {
          if (
            ((d = (o = A[n])._gsap || ie(A)[n]._gsap),
            (e._ptLookup[n] = h = {}),
            zt[d.id] && Ot.length && re(),
            (p = k === A ? n : k.indexOf(o)),
            u &&
              !1 !== (c = new u()).init(o, f || s, e, p, k) &&
              ((e._pt = a =
                new G(e._pt, o, c.name, 0, 1, c.render, c, 0, c.priority)),
              c._props.forEach(function (e) {
                h[e] = a;
              }),
              c.priority) &&
              (l = 1),
            !u || f)
          )
            for (r in s)
              H[r] && (c = ni(r, s, e, p, o, k))
                ? c.priority && (l = 1)
                : (h[r] = a =
                    ui.call(e, o, r, "get", s[r], p, k, 0, g.stringFilter));
          e._op && e._op[n] && e.kill(o, e._op[n]),
            P &&
              e._pt &&
              ((oi = e),
              B.killTweensOf(o, h, e.globalTime(t)),
              (m = !e.parent),
              (oi = 0)),
            e._pt && w && (zt[d.id] = 1);
        }
        l && Ci(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = _),
        (e._initted = (!e._op || e._pt) && !m),
        E && t <= 0 && F.render(N, !0, !0);
    }
    function ai(e, t, i, s, n) {
      return c(e)
        ? e.call(t, i, s, n)
        : R(e) && ~e.indexOf("random(")
        ? Ae(e)
        : e;
    }
    var oi,
      li,
      di,
      ui = function (e, t, i, s, n, r, a, o, l, d) {
        c(s) && (s = s(n || 0, e, r));
        var u,
          n = e[t],
          r =
            "get" !== i
              ? i
              : c(n)
              ? l
                ? e[
                    t.indexOf("set") || !c(e["get" + t.substr(3)])
                      ? t
                      : "get" + t.substr(3)
                  ](l)
                : e[t]()
              : n,
          i = c(n) ? (l ? vi : gi) : mi;
        if (
          (!R(s) ||
            "=" !== (s = ~s.indexOf("random(") ? Ae(s) : s).charAt(1) ||
            (!(u = ne(r, s) + (Y(r) || 0)) && 0 !== u) ||
            (s = u),
          !d || r !== s || li)
        )
          return isNaN(r * s) || "" === s
            ? (n || t in e || ee(t, s),
              function (e, t, i, s, n, r, a) {
                var o,
                  l,
                  d,
                  u,
                  c,
                  h = new G(this._pt, e, t, 0, 1, _i, null, n),
                  p = 0,
                  f = 0;
                for (
                  h.b = i,
                    h.e = s,
                    i += "",
                    (n = ~(s += "").indexOf("random(")) && (s = Ae(s)),
                    r && (r((r = [i, s]), e, t), (i = r[0]), (s = r[1])),
                    o = i.match(Tt) || [];
                  (u = Tt.exec(s));

                )
                  (d = u[0]),
                    (u = s.substring(p, u.index)),
                    l ? (l = (l + 1) % 5) : "rgba(" === u.substr(-5) && (l = 1),
                    d !== o[f++] &&
                      ((c = parseFloat(o[f - 1]) || 0),
                      (h._pt = {
                        _next: h._pt,
                        p: u || 1 === f ? u : ",",
                        s: c,
                        c:
                          "=" === d.charAt(1)
                            ? ne(c, d) - c
                            : parseFloat(d) - c,
                        m: l && l < 4 ? Math.round : 0,
                      }),
                      (p = Tt.lastIndex));
                return (
                  (h.c = p < s.length ? s.substring(p, s.length) : ""),
                  (h.fp = a),
                  (St.test(s) || n) && (h.e = 0),
                  (this._pt = h)
                );
              }.call(this, e, t, r, s, i, o || X.stringFilter, l))
            : ((u = new G(
                this._pt,
                e,
                t,
                +r || 0,
                s - (r || 0),
                "boolean" == typeof n ? wi : bi,
                0,
                i
              )),
              l && (u.fp = l),
              a && u.modifier(a, this, e),
              (this._pt = u));
      },
      ci = Rt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
      hi = {},
      $ =
        (p(
          ci + ",id,stagger,delay,duration,paused,scrollTrigger",
          function (e) {
            return (hi[e] = 1);
          }
        ),
        i(n, (di = ei)),
        ((t = n.prototype).render = function (e, t, i) {
          var s,
            n,
            r,
            a = this._time,
            o = this._tDur,
            l = this._dur,
            d = e < 0,
            u = o - j < e && !d ? o : e < j ? 0 : e;
          if (l) {
            if (
              u !== this._tTime ||
              !e ||
              i ||
              (!this._initted && this._tTime) ||
              (this._startAt && this._zTime < 0 != d)
            ) {
              if (((f = u), (p = this.timeline), this._repeat)) {
                if (((c = l + this._rDelay), this._repeat < -1 && d))
                  return this.totalTime(100 * c + e, t, i);
                if (
                  ((f = A(u % c)),
                  u === o
                    ? ((v = this._repeat), (f = l))
                    : ((v = ~~(u / c)) && v === A(u / c) && ((f = l), v--),
                      l < f && (f = l)),
                  (n = this._yoyo && 1 & v) && ((h = this._yEase), (f = l - f)),
                  (b = He(this._tTime, c)),
                  f === a && !i && this._initted && v === b)
                )
                  return (this._tTime = u), this;
                v !== b &&
                  (p && this._yEase && Be(p, n), this.vars.repeatRefresh) &&
                  !n &&
                  !this._lock &&
                  this._time !== c &&
                  this._initted &&
                  ((this._lock = i = 1),
                  (this.render(A(c * v), !0).invalidate()._lock = 0));
              }
              if (!this._initted) {
                if (me(this, d ? e : f, i, t, u))
                  return (this._tTime = 0), this;
                if (
                  !(
                    a === this._time ||
                    (i && this.vars.repeatRefresh && v !== b)
                  )
                )
                  return this;
                if (l !== this._dur) return this.render(e, t, i);
              }
              if (
                ((this._tTime = u),
                (this._time = f),
                !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                (this.ratio = r = (h || this._ease)(f / l)),
                this._from && (this.ratio = r = 1 - r),
                f && !a && !t && !v && (q(this, "onStart"), this._tTime !== u))
              )
                return this;
              for (s = this._pt; s; ) s.r(r, s.d), (s = s._next);
              (p &&
                p.render(e < 0 ? e : p._dur * p._ease(f / this._dur), t, i)) ||
                (this._startAt && (this._zTime = e)),
                this._onUpdate &&
                  !t &&
                  (d && T(this, e, 0, i), q(this, "onUpdate")),
                this._repeat &&
                  v !== b &&
                  this.vars.onRepeat &&
                  !t &&
                  this.parent &&
                  q(this, "onRepeat"),
                (u !== this._tDur && u) ||
                  this._tTime !== u ||
                  (d && !this._onUpdate && T(this, e, 0, !0),
                  (!e && l) ||
                    !(
                      (u === this._tDur && 0 < this._ts) ||
                      (!u && this._ts < 0)
                    ) ||
                    le(this, 1),
                  t) ||
                  (d && !a) ||
                  !(u || a || n) ||
                  (q(this, u === o ? "onComplete" : "onReverseComplete", !0),
                  !this._prom) ||
                  (u < o && 0 < this.timeScale()) ||
                  this._prom();
            }
          } else {
            var c = this;
            var h = e;
            var p = t;
            var f = i;
            var m,
              g,
              v = c.ratio,
              y =
                h < 0 ||
                (!h &&
                  ((!c._start &&
                    (function e(t) {
                      t = t.parent;
                      return (
                        t &&
                        t._ts &&
                        t._initted &&
                        !t._lock &&
                        (t.rawTime() < 0 || e(t))
                      );
                    })(c) &&
                    (c._initted || !qe(c))) ||
                    ((c._ts < 0 || c._dp._ts < 0) && !qe(c))))
                  ? 0
                  : 1,
              b = c._rDelay,
              l = 0;
            if (
              (b &&
                c._repeat &&
                ((l = We(0, c._tDur, h)),
                (g = He(l, b)),
                c._yoyo && 1 & g && (y = 1 - y),
                g !== He(c._tTime, b)) &&
                ((v = 1 - y), c.vars.repeatRefresh) &&
                c._initted &&
                c.invalidate(),
              y !== v || I || f || c._zTime === j || (!h && c._zTime))
            ) {
              if (c._initted || !me(c, h, f, p, l)) {
                for (
                  g = c._zTime,
                    c._zTime = h || (p ? j : 0),
                    p = p || (h && !g),
                    c.ratio = y,
                    c._from && (y = 1 - y),
                    c._time = 0,
                    c._tTime = l,
                    m = c._pt;
                  m;

                )
                  m.r(y, m.d), (m = m._next);
                h < 0 && T(c, h, 0, !0),
                  c._onUpdate && !p && q(c, "onUpdate"),
                  l && c._repeat && !p && c.parent && q(c, "onRepeat"),
                  (h >= c._tDur || h < 0) &&
                    c.ratio === y &&
                    (y && le(c, 1),
                    p ||
                      I ||
                      (q(c, y ? "onComplete" : "onReverseComplete", !0),
                      c._prom && c._prom()));
              }
            } else c._zTime || (c._zTime = h);
          }
          return this;
        }),
        (t.targets = function () {
          return this._targets;
        }),
        (t.invalidate = function (e) {
          return (
            (e && this.vars.runBackwards) || (this._startAt = 0),
            (this._pt =
              this._op =
              this._onUpdate =
              this._lazy =
              this.ratio =
                0),
            (this._ptLookup = []),
            this.timeline && this.timeline.invalidate(e),
            di.prototype.invalidate.call(this, e)
          );
        }),
        (t.resetTo = function (e, t, i, s, n) {
          Je || f.wake(), this._ts || this.play();
          var r,
            a = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
          return (
            this._initted || ri(this, a),
            (r = this._ease(a / this._dur)),
            (function (e, t, i, s, n, r, a, o) {
              var l,
                d,
                u,
                c,
                h = ((e._pt && e._ptCache) || (e._ptCache = {}))[t];
              if (!h)
                for (
                  h = e._ptCache[t] = [],
                    u = e._ptLookup,
                    c = e._targets.length;
                  c--;

                ) {
                  if ((l = u[c][t]) && l.d && l.d._pt)
                    for (l = l.d._pt; l && l.p !== t && l.fp !== t; )
                      l = l._next;
                  if (!l)
                    return (
                      (li = 1),
                      (e.vars[t] = "+=0"),
                      ri(e, a),
                      (li = 0),
                      !o || te(t + " not eligible for reset")
                    );
                  h.push(l);
                }
              for (c = h.length; c--; )
                ((l = (d = h[c])._pt || d).s =
                  (!s && 0 !== s) || n ? l.s + (s || 0) + r * l.c : s),
                  (l.c = i - l.s),
                  d.e && (d.e = O(i) + Y(d.e)),
                  d.b && (d.b = l.s + Y(d.b));
            })(this, e, t, i, s, r, a, n)
              ? this.resetTo(e, t, i, s, 1)
              : (he(this, 0),
                this.parent ||
                  x(
                    this._dp,
                    this,
                    "_first",
                    "_last",
                    this._dp._sort ? "_start" : 0
                  ),
                this.render(0))
          );
        }),
        (t.kill = function (e, t) {
          if ((void 0 === t && (t = "all"), !(e || (t && "all" !== t))))
            return (this._lazy = this._pt = 0), this.parent ? ke(this) : this;
          if (this.timeline)
            (h = this.timeline.totalDuration()),
              this.timeline.killTweensOf(e, t, oi && !0 !== oi.vars.overwrite)
                ._first || ke(this),
              this.parent &&
                h !== this.timeline.totalDuration() &&
                ge(this, (this._dur * this.timeline._tDur) / h, 0, 1);
          else {
            var i,
              s,
              n,
              r,
              a,
              o,
              l,
              d = this._targets,
              u = e ? P(e) : d,
              c = this._ptLookup,
              h = this._pt;
            if (
              (!t || "all" === t) &&
              (function (e, t) {
                for (
                  var i = e.length, s = i === t.length;
                  s && i-- && e[i] === t[i];

                );
                return i < 0;
              })(d, u)
            )
              return "all" === t && (this._pt = 0), ke(this);
            for (
              i = this._op = this._op || [],
                "all" !== t &&
                  (R(t) &&
                    ((a = {}),
                    p(t, function (e) {
                      return (a[e] = 1);
                    }),
                    (t = a)),
                  (t = (function (e, t) {
                    var i,
                      s,
                      n,
                      r,
                      e = e[0] ? se(e[0]).harness : 0,
                      a = e && e.aliases;
                    if (!a) return t;
                    for (s in ((i = je({}, t)), a))
                      if ((s in i))
                        for (n = (r = a[s].split(",")).length; n--; )
                          i[r[n]] = i[s];
                    return i;
                  })(d, t))),
                l = d.length;
              l--;

            )
              if (~u.indexOf(d[l]))
                for (a in ((s = c[l]),
                "all" === t
                  ? ((i[l] = t), (r = s), (n = {}))
                  : ((n = i[l] = i[l] || {}), (r = t)),
                r))
                  (o = s && s[a]) &&
                    (("kill" in o.d && !0 !== o.d.kill(a)) || E(this, o, "_pt"),
                    delete s[a]),
                    "all" !== n && (n[a] = 1);
            this._initted && !this._pt && h && ke(this);
          }
          return this;
        }),
        (n.to = function (e, t, i) {
          return new n(e, t, i);
        }),
        (n.from = function (e, t) {
          return ye(1, arguments);
        }),
        (n.delayedCall = function (e, t, i, s) {
          return new n(t, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: e,
            onComplete: t,
            onReverseComplete: t,
            onCompleteParams: i,
            onReverseCompleteParams: i,
            callbackScope: s,
          });
        }),
        (n.fromTo = function (e, t, i) {
          return ye(2, arguments);
        }),
        (n.set = function (e, t) {
          return (t.duration = 0), t.repeatDelay || (t.repeat = 0), new n(e, t);
        }),
        (n.killTweensOf = function (e, t, i) {
          return B.killTweensOf(e, t, i);
        }),
        n);
    function n(e, t, i, s) {
      var n;
      "number" == typeof t && ((i.duration = t), (t = i), (i = null));
      var r,
        a,
        o,
        l,
        d,
        u,
        c,
        h,
        s = (n = di.call(this, s ? t : oe(t)) || this).vars,
        p = s.duration,
        f = s.delay,
        m = s.immediateRender,
        g = s.stagger,
        v = s.overwrite,
        y = s.keyframes,
        b = s.defaults,
        w = s.scrollTrigger,
        _ = s.yoyoEase,
        s = t.parent || B,
        D = (k(e) || Dt(e) ? Z(e[0]) : "length" in t) ? [e] : P(e);
      if (
        ((n._targets = D.length
          ? ie(D)
          : te(
              "GSAP target " + e + " not found. https://gsap.com",
              !X.nullTargetWarn
            ) || []),
        (n._ptLookup = []),
        (n._overwrite = v),
        y || g || J(p) || J(f))
      ) {
        if (
          ((t = n.vars),
          (r = n.timeline =
            new W({
              data: "nested",
              defaults: b || {},
              targets: s && "nested" === s.data ? s.vars.targets : D,
            })).kill(),
          (r.parent = r._dp = Q(n)),
          (r._start = 0),
          g || J(p) || J(f))
        ) {
          if (((l = D.length), (c = g && xe(g)), S(g)))
            for (d in g) ~ci.indexOf(d) && ((h = h || {})[d] = g[d]);
          for (a = 0; a < l; a++)
            ((o = ae(t, hi)).stagger = 0),
              _ && (o.yoyoEase = _),
              h && je(o, h),
              (u = D[a]),
              (o.duration = +ai(p, Q(n), a, u, D)),
              (o.delay = (+ai(f, Q(n), a, u, D) || 0) - n._delay),
              !g &&
                1 === l &&
                o.delay &&
                ((n._delay = f = o.delay), (n._start += f), (o.delay = 0)),
              r.to(u, o, c ? c(a, u, D) : 0),
              (r._ease = F.none);
          r.duration() ? (p = f = 0) : (n.timeline = 0);
        } else if (y) {
          oe(z(r.vars.defaults, { ease: "none" })),
            (r._ease = Kt(y.ease || t.ease || "none"));
          var x,
            E,
            C,
            T = 0;
          if (k(y))
            y.forEach(function (e) {
              return r.to(D, e, ">");
            }),
              r.duration();
          else {
            for (d in ((o = {}), y))
              "ease" !== d &&
                "easeEach" !== d &&
                (function (e, i, t, s) {
                  var n,
                    r,
                    a = i.ease || s || "power1.inOut";
                  if (k(i))
                    (r = t[e] || (t[e] = [])),
                      i.forEach(function (e, t) {
                        return r.push({
                          t: (t / (i.length - 1)) * 100,
                          v: e,
                          e: a,
                        });
                      });
                  else
                    for (n in i)
                      (r = t[n] || (t[n] = [])),
                        "ease" !== n &&
                          r.push({ t: parseFloat(e), v: i[n], e: a });
                })(d, y[d], o, y.easeEach);
            for (d in o)
              for (
                x = o[d].sort(function (e, t) {
                  return e.t - t.t;
                }),
                  a = T = 0;
                a < x.length;
                a++
              )
                ((C = {
                  ease: (E = x[a]).e,
                  duration: ((E.t - (a ? x[a - 1].t : 0)) / 100) * p,
                })[d] = E.v),
                  r.to(D, C, T),
                  (T += C.duration);
            r.duration() < p && r.to({}, { duration: p - r.duration() });
          }
        }
        p || n.duration((p = r.duration()));
      } else n.timeline = 0;
      return (
        !0 !== v || Ge || ((oi = Q(n)), B.killTweensOf(D), (oi = 0)),
        M(s, Q(n), i),
        t.reversed && n.reverse(),
        t.paused && n.paused(!0),
        (m ||
          (!p &&
            !y &&
            n._start === A(s._time) &&
            L(m) &&
            (function e(t) {
              return !t || (t._ts && e(t.parent));
            })(Q(n)) &&
            "nested" !== s.data)) &&
          ((n._tTime = -j), n.render(Math.max(0, -f) || 0)),
        w && fe(Q(n), w),
        n
      );
    }
    function pi(e, t, i) {
      return e.setAttribute(t, i);
    }
    function fi(e, t, i, s) {
      s.mSet(e, t, s.m.call(s.tween, i, s.mt), s);
    }
    z($.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
      p("staggerTo,staggerFrom,staggerFromTo", function (i) {
        $[i] = function () {
          var e = new W(),
            t = Xt.call(arguments, 0);
          return (
            t.splice("staggerFromTo" === i ? 5 : 4, 0, 0), e[i].apply(e, t)
          );
        };
      });
    var mi = function (e, t, i) {
        return (e[t] = i);
      },
      gi = function (e, t, i) {
        return e[t](i);
      },
      vi = function (e, t, i, s) {
        return e[t](s.fp, i);
      },
      yi = function (e, t) {
        return c(e[t]) ? gi : r(e[t]) && e.setAttribute ? pi : mi;
      },
      bi = function (e, t) {
        return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t);
      },
      wi = function (e, t) {
        return t.set(t.t, t.p, !!(t.s + t.c * e), t);
      },
      _i = function (e, t) {
        var i = t._pt,
          s = "";
        if (!e && t.b) s = t.b;
        else if (1 === e && t.e) s = t.e;
        else {
          for (; i; )
            (s =
              i.p +
              (i.m
                ? i.m(i.s + i.c * e)
                : Math.round(1e4 * (i.s + i.c * e)) / 1e4) +
              s),
              (i = i._next);
          s += t.c;
        }
        t.set(t.t, t.p, s, t);
      },
      Di = function (e, t) {
        for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
      },
      xi = function (e, t, i, s) {
        for (var n, r = this._pt; r; )
          (n = r._next), r.p === s && r.modifier(e, t, i), (r = n);
      },
      Ei = function (e) {
        for (var t, i, s = this._pt; s; )
          (i = s._next),
            (s.p === e && !s.op) || s.op === e
              ? E(this, s, "_pt")
              : s.dep || (t = 1),
            (s = i);
        return !t;
      },
      Ci = function (e) {
        for (var t, i, s, n, r = e._pt; r; ) {
          for (t = r._next, i = s; i && i.pr > r.pr; ) i = i._next;
          (r._prev = i ? i._prev : n) ? (r._prev._next = r) : (s = r),
            (r._next = i) ? (i._prev = r) : (n = r),
            (r = t);
        }
        e._pt = s;
      },
      G =
        ((Ti.prototype.modifier = function (e, t, i) {
          (this.mSet = this.mSet || this.set),
            (this.set = fi),
            (this.m = e),
            (this.mt = i),
            (this.tween = t);
        }),
        Ti);
    function Ti(e, t, i, s, n, r, a, o, l) {
      (this.t = t),
        (this.s = s),
        (this.c = n),
        (this.p = i),
        (this.r = r || bi),
        (this.d = a || this),
        (this.set = o || mi),
        (this.pr = l || 0),
        (this._next = e) && (e._prev = this);
    }
    function Si(e) {
      (ki[e] || Pi).map(function (e) {
        return e();
      });
    }
    function Ai() {
      var e = Date.now(),
        o = [];
      2 < e - Fi &&
        (Si("matchMediaInit"),
        Mi.forEach(function (e) {
          var t,
            i,
            s,
            n,
            r = e.queries,
            a = e.conditions;
          for (i in r)
            (t = u.matchMedia(r[i]).matches) && (s = 1),
              t !== a[i] && ((a[i] = t), (n = 1));
          n && (e.revert(), s) && o.push(e);
        }),
        Si("matchMediaRevert"),
        o.forEach(function (t) {
          return t.onMatch(t, function (e) {
            return t.add(null, e);
          });
        }),
        (Fi = e),
        Si("matchMedia"));
    }
    p(
      Rt +
        "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
      function (e) {
        return (Lt[e] = 1);
      }
    ),
      (a.TweenMax = a.TweenLite = $),
      (a.TimelineLite = a.TimelineMax = W),
      (B = new W({
        sortChildren: !1,
        defaults: mt,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0,
      })),
      (X.stringFilter = Ie);
    var Mi = [],
      ki = {},
      Pi = [],
      Fi = 0,
      Li = 0,
      Oi =
        (((t = zi.prototype).add = function (e, s, n) {
          function t() {
            var e,
              t = l,
              i = r.selector;
            return (
              t && t !== r && t.data.push(r),
              n && (r.selector = _e(n)),
              (l = r),
              c((e = s.apply(r, arguments))) && r._r.push(e),
              (l = t),
              (r.selector = i),
              (r.isReverted = !1),
              e
            );
          }
          c(e) && ((n = s), (s = e), (e = c));
          var r = this;
          return (
            (r.last = t),
            e === c
              ? t(r, function (e) {
                  return r.add(null, e);
                })
              : e
              ? (r[e] = t)
              : t
          );
        }),
        (t.ignore = function (e) {
          var t = l;
          (l = null), e(this), (l = t);
        }),
        (t.getTweens = function () {
          var t = [];
          return (
            this.data.forEach(function (e) {
              return e instanceof zi
                ? t.push.apply(t, e.getTweens())
                : e instanceof $ &&
                    !(e.parent && "nested" === e.parent.data) &&
                    t.push(e);
            }),
            t
          );
        }),
        (t.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (t.kill = function (t, e) {
          var i = this;
          if (t) {
            for (var s, n = i.getTweens(), r = i.data.length; r--; )
              "isFlip" === (s = i.data[r]).data &&
                (s.revert(),
                s.getChildren(!0, !0, !1).forEach(function (e) {
                  return n.splice(n.indexOf(e), 1);
                }));
            for (
              n
                .map(function (e) {
                  return {
                    g:
                      e._dur ||
                      e._delay ||
                      (e._sat && !e._sat.vars.immediateRender)
                        ? e.globalTime(0)
                        : -1 / 0,
                    t: e,
                  };
                })
                .sort(function (e, t) {
                  return t.g - e.g || -1 / 0;
                })
                .forEach(function (e) {
                  return e.t.revert(t);
                }),
                r = i.data.length;
              r--;

            )
              (s = i.data[r]) instanceof W
                ? "nested" !== s.data &&
                  (s.scrollTrigger && s.scrollTrigger.revert(), s.kill())
                : s instanceof $ || !s.revert || s.revert(t);
            i._r.forEach(function (e) {
              return e(t, i);
            }),
              (i.isReverted = !0);
          } else
            this.data.forEach(function (e) {
              return e.kill && e.kill();
            });
          if ((this.clear(), e))
            for (var a = Mi.length; a--; )
              Mi[a].id === this.id && Mi.splice(a, 1);
        }),
        (t.revert = function (e) {
          this.kill(e || {});
        }),
        zi);
    function zi(e, t) {
      (this.selector = t && _e(t)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = Li++),
        e && this.add(e);
    }
    ((t = Bi.prototype).add = function (e, t, i) {
      S(e) || (e = { matches: e });
      var s,
        n,
        r,
        a = new Oi(0, i || this.scope),
        o = (a.conditions = {});
      for (n in (l && !a.selector && (a.selector = l.selector),
      this.contexts.push(a),
      (t = a.add("onMatch", t)),
      (a.queries = e)))
        "all" === n
          ? (r = 1)
          : (s = u.matchMedia(e[n])) &&
            (Mi.indexOf(a) < 0 && Mi.push(a),
            (o[n] = s.matches) && (r = 1),
            s.addListener
              ? s.addListener(Ai)
              : s.addEventListener("change", Ai));
      return (
        r &&
          t(a, function (e) {
            return a.add(null, e);
          }),
        this
      );
    }),
      (t.revert = function (e) {
        this.kill(e || {});
      }),
      (t.kill = function (t) {
        this.contexts.forEach(function (e) {
          return e.kill(t, !0);
        });
      });
    var Ii = Bi;
    function Bi(e) {
      (this.contexts = []), (this.scope = e), l && l.data.push(this);
    }
    var Ni = {
      registerPlugin: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        t.forEach(Pe);
      },
      timeline: function (e) {
        return new W(e);
      },
      getTweensOf: function (e, t) {
        return B.getTweensOf(e, t);
      },
      getProperty: function (s, e, t, i) {
        var n = se((s = R(s) ? P(s)[0] : s) || {}).get,
          r = t ? _ : w;
        return (
          "native" === t && (t = ""),
          s &&
            (e
              ? r(((H[e] && H[e].get) || n)(s, e, t, i))
              : function (e, t, i) {
                  return r(((H[e] && H[e].get) || n)(s, e, t, i));
                })
        );
      },
      quickSetter: function (i, t, s) {
        var n, r;
        if (1 < (i = P(i)).length)
          return (
            (n = i.map(function (e) {
              return m.quickSetter(e, t, s);
            })),
            (r = n.length),
            function (e) {
              for (var t = r; t--; ) n[t](e);
            }
          );
        i = i[0] || {};
        var a = H[t],
          o = se(i),
          l = (o.harness && (o.harness.aliases || {})[t]) || t,
          d = a
            ? function (e) {
                var t = new a();
                (Yi._pt = 0),
                  t.init(i, s ? e + s : e, Yi, 0, [i]),
                  t.render(1, t),
                  Yi._pt && Di(1, Yi);
              }
            : o.set(i, l);
        return a
          ? d
          : function (e) {
              return d(i, l, s ? e + s : e, o, 1);
            };
      },
      quickTo: function (e, s, t) {
        function i(e, t, i) {
          return n.resetTo(s, e, t, i);
        }
        var n = m.to(
          e,
          je((((e = {})[s] = "+=0.1"), (e.paused = !0), e), t || {})
        );
        return (i.tween = n), i;
      },
      isTweening: function (e) {
        return 0 < B.getTweensOf(e, !0).length;
      },
      defaults: function (e) {
        return e && e.ease && (e.ease = Kt(e.ease, mt.ease)), D(mt, e || {});
      },
      config: function (e) {
        return D(X, e || {});
      },
      registerEffect: function (e) {
        var s = e.name,
          n = e.effect,
          t = e.plugins,
          r = e.defaults,
          e = e.extendTimeline;
        (t || "").split(",").forEach(function (e) {
          return (
            e && !H[e] && !a[e] && te(s + " effect requires " + e + " plugin.")
          );
        }),
          (It[s] = function (e, t, i) {
            return n(P(e), z(t || {}, r), i);
          }),
          e &&
            (W.prototype[s] = function (e, t, i) {
              return this.add(It[s](e, S(t) ? t : (i = t) && {}, this), i);
            });
      },
      registerEase: function (e, t) {
        F[e] = Kt(t);
      },
      parseEase: function (e, t) {
        return arguments.length ? Kt(e, t) : F;
      },
      getById: function (e) {
        return B.getById(e);
      },
      exportRoot: function (e, t) {
        var i,
          s,
          n = new W((e = void 0 === e ? {} : e));
        for (
          n.smoothChildTiming = L(e.smoothChildTiming),
            B.remove(n),
            n._dp = 0,
            n._time = n._tTime = B._time,
            i = B._first;
          i;

        )
          (s = i._next),
            (!t &&
              !i._dur &&
              i instanceof $ &&
              i.vars.onComplete === i._targets[0]) ||
              M(n, i, i._start - i._delay),
            (i = s);
        return M(B, n, 0), n;
      },
      context: function (e, t) {
        return e ? new Oi(e, t) : l;
      },
      matchMedia: function (e) {
        return new Ii(e);
      },
      matchMediaRefresh: function () {
        return (
          Mi.forEach(function (e) {
            var t,
              i,
              s = e.conditions;
            for (i in s) s[i] && ((s[i] = !1), (t = 1));
            t && e.revert();
          }) || Ai()
        );
      },
      addEventListener: function (e, t) {
        e = ki[e] || (ki[e] = []);
        ~e.indexOf(t) || e.push(t);
      },
      removeEventListener: function (e, t) {
        (e = ki[e]), (t = e && e.indexOf(t));
        0 <= t && e.splice(t, 1);
      },
      utils: {
        wrap: function e(t, i, s) {
          var n = i - t;
          return k(t)
            ? Se(t, e(0, t.length), i)
            : be(s, function (e) {
                return ((n + ((e - t) % n)) % n) + t;
              });
        },
        wrapYoyo: function e(t, i, s) {
          var n = i - t,
            r = 2 * n;
          return k(t)
            ? Se(t, e(0, t.length - 1), i)
            : be(s, function (e) {
                return t + (n < (e = (r + ((e - t) % r)) % r || 0) ? r - e : e);
              });
        },
        distribute: xe,
        random: Te,
        snap: Ce,
        normalize: function (e, t, i) {
          return $e(e, t, 0, 1, i);
        },
        getUnit: Y,
        clamp: function (t, i, e) {
          return be(e, function (e) {
            return We(t, i, e);
          });
        },
        splitColor: Le,
        toArray: P,
        selector: _e,
        mapRange: $e,
        pipe: function () {
          for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          return function (e) {
            return t.reduce(function (e, t) {
              return t(e);
            }, e);
          };
        },
        unitize: function (t, i) {
          return function (e) {
            return t(parseFloat(e)) + (i || Y(e));
          };
        },
        interpolate: function e(t, i, s, n) {
          var r = isNaN(t + i)
            ? 0
            : function (e) {
                return (1 - e) * t + e * i;
              };
          if (!r) {
            var a,
              o,
              l,
              d,
              u,
              c = R(t),
              h = {};
            if ((!0 === s && ((n = 1), (s = null)), c))
              (t = { p: t }), (i = { p: i });
            else if (k(t) && !k(i)) {
              for (l = [], d = t.length, u = d - 2, o = 1; o < d; o++)
                l.push(e(t[o - 1], t[o]));
              d--,
                (r = function (e) {
                  e *= d;
                  var t = Math.min(u, ~~e);
                  return l[t](e - t);
                }),
                (s = i);
            } else n || (t = je(k(t) ? [] : {}, t));
            if (!l) {
              for (a in i) ui.call(h, t, a, "get", i[a]);
              r = function (e) {
                return Di(e, h) || (c ? t.p : t);
              };
            }
          }
          return be(s, r);
        },
        shuffle: De,
      },
      install: s,
      effects: It,
      ticker: f,
      updateRoot: W.updateRoot,
      plugins: H,
      globalTimeline: B,
      core: {
        PropTween: G,
        globals: g,
        Tween: $,
        Timeline: W,
        Animation: ei,
        getCache: se,
        _removeLinkedListItem: E,
        reverting: function () {
          return I;
        },
        context: function (e) {
          return e && l && (l.data.push(e), (e._ctx = l)), l;
        },
        suppressOverwrites: function (e) {
          return (Ge = e);
        },
      },
    };
    function Ri(e, u) {
      return {
        name: e,
        rawVars: 1,
        init: function (e, d, t) {
          t._onInit = function (e) {
            var t, i;
            if (
              (R(d) &&
                ((t = {}),
                p(d, function (e) {
                  return (t[e] = 1);
                }),
                (d = t)),
              u)
            ) {
              for (i in ((t = {}), d)) t[i] = u(d[i]);
              d = t;
            }
            var s,
              n,
              r,
              a = e,
              o = d,
              l = a._targets;
            for (s in o)
              for (n = l.length; n--; )
                (r = (r = a._ptLookup[n][s]) && r.d) &&
                  (r._pt &&
                    (r = (function (e, t) {
                      for (
                        var i = e._pt;
                        i && i.p !== t && i.op !== t && i.fp !== t;

                      )
                        i = i._next;
                      return i;
                    })(r, s)),
                  r) &&
                  r.modifier &&
                  r.modifier(o[s], a, l[n], s);
          };
        },
      };
    }
    p("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
      return (Ni[e] = $[e]);
    }),
      f.add(W.updateRoot);
    var Yi = Ni.to({}, { duration: 0 }),
      m =
        Ni.registerPlugin(
          {
            name: "attr",
            init: function (e, t, i, s, n) {
              var r, a, o;
              for (r in ((this.tween = i), t))
                (o = e.getAttribute(r) || ""),
                  ((a = this.add(
                    e,
                    "setAttribute",
                    (o || 0) + "",
                    t[r],
                    s,
                    n,
                    0,
                    0,
                    r
                  )).op = r),
                  (a.b = o),
                  this._props.push(r);
            },
            render: function (e, t) {
              for (var i = t._pt; i; )
                I ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), (i = i._next);
            },
          },
          {
            name: "endArray",
            init: function (e, t) {
              for (var i = t.length; i--; )
                this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1);
            },
          },
          Ri("roundProps", Ee),
          Ri("modifiers"),
          Ri("snap", Ce)
        ) || Ni;
    function Xi(e, t) {
      return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t);
    }
    function ji(e, t) {
      return t.set(
        t.t,
        t.p,
        1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
        t
      );
    }
    function Hi(e, t) {
      return t.set(
        t.t,
        t.p,
        e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b,
        t
      );
    }
    function qi(e, t) {
      e = t.s + t.c * e;
      t.set(t.t, t.p, ~~(e + (e < 0 ? -0.5 : 0.5)) + t.u, t);
    }
    function Wi(e, t) {
      return t.set(t.t, t.p, e ? t.e : t.b, t);
    }
    function $i(e, t) {
      return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
    }
    function Gi(e, t, i) {
      return (e.style[t] = i);
    }
    function Vi(e, t, i) {
      return e.style.setProperty(t, i);
    }
    function Ui(e, t, i) {
      return (e._gsap[t] = i);
    }
    function Ki(e, t, i) {
      return (e._gsap.scaleX = e._gsap.scaleY = i);
    }
    function Qi(e, t, i, s, n) {
      e = e._gsap;
      (e.scaleX = e.scaleY = i), e.renderTransform(n, e);
    }
    function Zi(e, t, i, s, n) {
      e = e._gsap;
      (e[t] = i), e.renderTransform(n, e);
    }
    function Ji(e, t) {
      var i = this,
        s = this.target,
        n = s.style,
        r = s._gsap;
      if (e in qs && n) {
        if (((this.tfm = this.tfm || {}), "transform" === e))
          return Qs.transform.split(",").forEach(function (e) {
            return Ji.call(i, e, t);
          });
        if (
          (~(e = Qs[e] || e).indexOf(",")
            ? e.split(",").forEach(function (e) {
                return (i.tfm[e] = sn(s, e));
              })
            : (this.tfm[e] = r.x ? r[e] : sn(s, e)),
          e === K && (this.tfm.zOrigin = r.zOrigin),
          0 <= this.props.indexOf(U))
        )
          return;
        r.svg &&
          ((this.svgo = s.getAttribute("data-svg-origin")),
          this.props.push(K, t, "")),
          (e = U);
      }
      (n || t) && this.props.push(e, t, n[e]);
    }
    function es(e) {
      e.translate &&
        (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"));
    }
    function ts() {
      for (
        var e, t = this.props, i = this.target, s = i.style, n = i._gsap, r = 0;
        r < t.length;
        r += 3
      )
        t[r + 1]
          ? (i[t[r]] = t[r + 2])
          : t[r + 2]
          ? (s[t[r]] = t[r + 2])
          : s.removeProperty(
              "--" === t[r].substr(0, 2)
                ? t[r]
                : t[r].replace(Vs, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (e in this.tfm) n[e] = this.tfm[e];
        n.svg &&
          (n.renderTransform(),
          i.setAttribute("data-svg-origin", this.svgo || "")),
          ((r = Cs()) && r.isStart) ||
            s[U] ||
            (es(s),
            n.zOrigin &&
              s[K] &&
              ((s[K] += " " + n.zOrigin + "px"),
              (n.zOrigin = 0),
              n.renderTransform()),
            (n.uncache = 1));
      }
    }
    function is(e, t) {
      var i = { target: e, props: [], revert: ts, save: Ji };
      return (
        e._gsap || m.core.getCache(e),
        t &&
          t.split(",").forEach(function (e) {
            return i.save(e);
          }),
        i
      );
    }
    function ss(e, t) {
      t = ws.createElementNS
        ? ws.createElementNS(
            (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            e
          )
        : ws.createElement(e);
      return t && t.style ? t : ws.createElement(e);
    }
    function V(e, t, i) {
      var s = getComputedStyle(e);
      return (
        s[t] ||
        s.getPropertyValue(t.replace(Vs, "-$1").toLowerCase()) ||
        s.getPropertyValue(t) ||
        (!i && V(e, Js(t) || t, 1)) ||
        ""
      );
    }
    function ns() {
      "undefined" != typeof window &&
        window.document &&
        ((_s = (ws = window.document).documentElement),
        (xs = ss("div") || { style: {} }),
        ss("div"),
        (U = Js(U)),
        (K = U + "Origin"),
        (xs.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (Ts = !!Js("perspective")),
        (Cs = m.core.reverting),
        (Ds = 1));
    }
    function rs(e) {
      var t,
        i = ss(
          "svg",
          (this.ownerSVGElement &&
            this.ownerSVGElement.getAttribute("xmlns")) ||
            "http://www.w3.org/2000/svg"
        ),
        s = this.parentNode,
        n = this.nextSibling,
        r = this.style.cssText;
      if (
        (_s.appendChild(i),
        i.appendChild(this),
        (this.style.display = "block"),
        e)
      )
        try {
          (t = this.getBBox()),
            (this._gsapBBox = this.getBBox),
            (this.getBBox = rs);
        } catch (e) {}
      else this._gsapBBox && (t = this._gsapBBox());
      return (
        s && (n ? s.insertBefore(this, n) : s.appendChild(this)),
        _s.removeChild(i),
        (this.style.cssText = r),
        t
      );
    }
    function as(e, t) {
      for (var i = t.length; i--; )
        if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
    }
    function os(t) {
      var i;
      try {
        i = t.getBBox();
      } catch (e) {
        i = rs.call(t, !0);
      }
      return !(i =
        (i && (i.width || i.height)) || t.getBBox === rs
          ? i
          : rs.call(t, !0)) ||
        i.width ||
        i.x ||
        i.y
        ? i
        : {
            x: +as(t, ["x", "cx", "x1"]) || 0,
            y: +as(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          };
    }
    function ls(e) {
      return !(!e.getCTM || (e.parentNode && !e.ownerSVGElement) || !os(e));
    }
    function ds(e, t) {
      var i;
      t &&
        ((e = e.style),
        t in qs && t !== K && (t = U),
        e.removeProperty
          ? (("ms" !== (i = t.substr(0, 2)) && "webkit" !== t.substr(0, 6)) ||
              (t = "-" + t),
            e.removeProperty(
              "--" === i ? t : t.replace(Vs, "-$1").toLowerCase()
            ))
          : e.removeAttribute(t));
    }
    function us(e, t, i, s, n, r) {
      t = new G(e._pt, t, i, 0, 1, r ? $i : Wi);
      ((e._pt = t).b = s), (t.e = n), e._props.push(i);
    }
    function cs(e, t, i, s) {
      var n,
        r,
        a = parseFloat(i) || 0,
        o = (i + "").trim().substr((a + "").length) || "px",
        l = xs.style,
        d = Us.test(t),
        u = "svg" === e.tagName.toLowerCase(),
        c = (u ? "client" : "offset") + (d ? "Width" : "Height"),
        h = "px" === s,
        p = "%" === s;
      return s === o || !a || en[s] || en[o]
        ? a
        : ("px" === o || h || (a = cs(e, t, i, "px")),
          (i = e.getCTM && ls(e)),
          (!p && "%" !== o) || (!qs[t] && !~t.indexOf("adius"))
            ? ((l[d ? "width" : "height"] = 100 + (h ? o : s)),
              (u =
                ~t.indexOf("adius") || ("em" === s && e.appendChild && !u)
                  ? e
                  : e.parentNode),
              (r = (u =
                (u = i ? (e.ownerSVGElement || {}).parentNode : u) &&
                u !== ws &&
                u.appendChild
                  ? u
                  : ws.body)._gsap) &&
              p &&
              r.width &&
              d &&
              r.time === f.time &&
              !r.uncache
                ? O((a / r.width) * 100)
                : (!p || ("height" !== t && "width" !== t)
                    ? ((!p && "%" !== o) ||
                        tn[V(u, "display")] ||
                        (l.position = V(e, "position")),
                      u === e && (l.position = "static"),
                      u.appendChild(xs),
                      (n = xs[c]),
                      u.removeChild(xs),
                      (l.position = "absolute"))
                    : ((o = e.style[t]),
                      (e.style[t] = 100 + s),
                      (n = e[c]),
                      o ? (e.style[t] = o) : ds(e, t)),
                  d && p && (((r = se(u)).time = f.time), (r.width = u[c])),
                  O(h ? (n * a) / 100 : n && a ? (100 / n) * a : 0)))
            : ((n = i ? e.getBBox()[d ? "width" : "height"] : e[c]),
              O(p ? (a / n) * 100 : (a / 100) * n)));
    }
    function hs(e, t, i, s) {
      var n;
      (i && "none" !== i) ||
        ((n = (r = Js(t, e, 1)) && V(e, r, 1)) && n !== i
          ? ((t = r), (i = n))
          : "borderColor" === t && (i = V(e, "borderTopColor")));
      var r,
        a,
        o,
        l,
        d,
        u,
        c,
        h,
        p,
        f = new G(this._pt, e.style, t, 0, 1, _i),
        m = 0,
        g = 0;
      if (
        ((f.b = i),
        (f.e = s),
        (i += ""),
        "auto" == (s += "") &&
          ((d = e.style[t]),
          (e.style[t] = s),
          (s = V(e, t) || s),
          d ? (e.style[t] = d) : ds(e, t)),
        Ie((r = [i, s])),
        (s = r[1]),
        (a = (i = r[0]).match(Ct) || []),
        (s.match(Ct) || []).length)
      ) {
        for (; (c = Ct.exec(s)); )
          (h = c[0]),
            (c = s.substring(m, c.index)),
            l
              ? (l = (l + 1) % 5)
              : ("rgba(" !== c.substr(-5) && "hsla(" !== c.substr(-5)) ||
                (l = 1),
            h !== (d = a[g++] || "") &&
              ((o = parseFloat(d) || 0),
              (p = d.substr((o + "").length)),
              "=" === h.charAt(1) && (h = ne(o, h) + p),
              (u = parseFloat(h)),
              (h = h.substr((u + "").length)),
              (m = Ct.lastIndex - h.length),
              h ||
                ((h = h || X.units[t] || p),
                m === s.length && ((s += h), (f.e += h))),
              p !== h && (o = cs(e, t, d, h) || 0),
              (f._pt = {
                _next: f._pt,
                p: c || 1 === g ? c : ",",
                s: o,
                c: u - o,
                m: (l && l < 4) || "zIndex" === t ? Math.round : 0,
              }));
        f.c = m < s.length ? s.substring(m, s.length) : "";
      } else f.r = "display" === t && "none" === s ? $i : Wi;
      return St.test(s) && (f.e = 0), (this._pt = f);
    }
    function ps(e, t) {
      if (t.tween && t.tween._time === t.tween._dur) {
        var i,
          s,
          n,
          r = t.t,
          a = r.style,
          o = t.u,
          t = r._gsap;
        if ("all" === o || !0 === o) (a.cssText = ""), (s = 1);
        else
          for (n = (o = o.split(",")).length; -1 < --n; )
            (i = o[n]),
              qs[i] && ((s = 1), (i = "transformOrigin" === i ? K : U)),
              ds(r, i);
        s &&
          (ds(r, U), t) &&
          (t.svg && r.removeAttribute("transform"),
          ln(r, 1),
          (t.uncache = 1),
          es(a));
      }
    }
    function fs(e) {
      return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e;
    }
    function ms(e) {
      e = V(e, U);
      return fs(e) ? an : e.substr(7).match(Et).map(O);
    }
    function gs(e, t) {
      var i,
        s,
        n,
        r = e._gsap || se(e),
        a = e.style,
        o = ms(e);
      return r.svg && e.getAttribute("transform")
        ? "1,0,0,1,0,0" ===
          (o = [
            (s = e.transform.baseVal.consolidate().matrix).a,
            s.b,
            s.c,
            s.d,
            s.e,
            s.f,
          ]).join(",")
          ? an
          : o
        : (o !== an ||
            e.offsetParent ||
            e === _s ||
            r.svg ||
            ((s = a.display),
            (a.display = "block"),
            ((r = e.parentNode) && e.offsetParent) ||
              ((n = 1), (i = e.nextElementSibling), _s.appendChild(e)),
            (o = ms(e)),
            s ? (a.display = s) : ds(e, "display"),
            n &&
              (i
                ? r.insertBefore(e, i)
                : r
                ? r.appendChild(e)
                : _s.removeChild(e))),
          t && 6 < o.length ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o);
    }
    function vs(e, t, i, s, n, r) {
      var a,
        o = e._gsap,
        n = n || gs(e, !0),
        l = o.xOrigin || 0,
        d = o.yOrigin || 0,
        u = o.xOffset || 0,
        c = o.yOffset || 0,
        h = n[0],
        p = n[1],
        f = n[2],
        m = n[3],
        g = n[4],
        v = n[5],
        y = t.split(" "),
        b = parseFloat(y[0]) || 0,
        w = parseFloat(y[1]) || 0;
      i
        ? n !== an &&
          (n = h * m - p * f) &&
          ((a = b * (-p / n) + w * (h / n) - (h * v - p * g) / n),
          (b = b * (m / n) + w * (-f / n) + (f * v - m * g) / n),
          (w = a))
        : ((b = (n = os(e)).x + (~y[0].indexOf("%") ? (b / 100) * n.width : b)),
          (w =
            n.y + (~(y[1] || y[0]).indexOf("%") ? (w / 100) * n.height : w))),
        s || (!1 !== s && o.smooth)
          ? ((o.xOffset = u + ((g = b - l) * h + (v = w - d) * f) - g),
            (o.yOffset = c + (g * p + v * m) - v))
          : (o.xOffset = o.yOffset = 0),
        (o.xOrigin = b),
        (o.yOrigin = w),
        (o.smooth = !!s),
        (o.origin = t),
        (o.originIsAbsolute = !!i),
        (e.style[K] = "0px 0px"),
        r &&
          (us(r, o, "xOrigin", l, b),
          us(r, o, "yOrigin", d, w),
          us(r, o, "xOffset", u, o.xOffset),
          us(r, o, "yOffset", c, o.yOffset)),
        e.setAttribute("data-svg-origin", b + " " + w);
    }
    function ys(e, t, i) {
      var s = Y(t);
      return O(parseFloat(t) + parseFloat(cs(e, "x", i + "px", s))) + s;
    }
    function bs(e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    }
    ($.version = W.version = m.version = "3.12.5"), (Qe = 1), o() && $t();
    var ws,
      _s,
      Ds,
      xs,
      Es,
      Cs,
      Ts,
      t = F.Power0,
      Ss = F.Power1,
      As = F.Power2,
      Ms = F.Power3,
      ks = F.Power4,
      Ps = F.Linear,
      Fs = F.Quad,
      Ls = F.Cubic,
      Os = F.Quart,
      zs = F.Quint,
      Is = F.Strong,
      Bs = F.Elastic,
      Ns = F.Back,
      Rs = F.SteppedEase,
      Ys = F.Bounce,
      Xs = F.Sine,
      js = F.Expo,
      Hs = F.Circ,
      qs = {},
      Ws = 180 / Math.PI,
      $s = Math.PI / 180,
      Gs = Math.atan2,
      Vs = /([A-Z])/g,
      Us = /(left|right|width|margin|padding|x)/i,
      Ks = /[\s,\(]\S/,
      Qs = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity",
      },
      U = "transform",
      K = U + "Origin",
      Zs = "O,Moz,ms,Ms,Webkit".split(","),
      Js = function (e, t, i) {
        var s = (t || xs).style,
          n = 5;
        if (e in s && !i) return e;
        for (
          e = e.charAt(0).toUpperCase() + e.substr(1);
          n-- && !(Zs[n] + e in s);

        );
        return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? Zs[n] : "") + e;
      },
      en = { deg: 1, rad: 1, turn: 1 },
      tn = { grid: 1, flex: 1 },
      sn = function (e, t, i, s) {
        var n;
        return (
          Ds || ns(),
          t in Qs &&
            "transform" !== t &&
            ~(t = Qs[t]).indexOf(",") &&
            (t = t.split(",")[0]),
          qs[t] && "transform" !== t
            ? ((n = ln(e, s)),
              (n =
                "transformOrigin" !== t
                  ? n[t]
                  : n.svg
                  ? n.origin
                  : dn(V(e, K)) + " " + n.zOrigin + "px"))
            : ((n = e.style[t]) &&
                "auto" !== n &&
                !s &&
                !~(n + "").indexOf("calc(")) ||
              (n =
                (rn[t] && rn[t](e, t, i)) ||
                V(e, t) ||
                y(e, t) ||
                ("opacity" === t ? 1 : 0)),
          i && !~(n + "").trim().indexOf(" ") ? cs(e, t, n, i) + i : n
        );
      },
      nn = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%",
      },
      rn = {
        clearProps: function (e, t, i, s, n) {
          if ("isFromStart" !== n.data)
            return (
              ((t = e._pt = new G(e._pt, t, i, 0, 0, ps)).u = s),
              (t.pr = -10),
              (t.tween = n),
              e._props.push(i),
              1
            );
        },
      },
      an = [1, 0, 0, 1, 0, 0],
      on = {},
      ln = function (e, t) {
        var i,
          s,
          n,
          r,
          a,
          o,
          l,
          d,
          u,
          c,
          h,
          p,
          f,
          m,
          g,
          v,
          y,
          b,
          w,
          _,
          D,
          x,
          E,
          C,
          T,
          S,
          A,
          M,
          k,
          P,
          F,
          L = e._gsap || new Jt(e);
        return (
          ("x" in L && !t && !L.uncache) ||
            ((S = e.style),
            (A = L.scaleX < 0),
            (M = getComputedStyle(e)),
            (k = V(e, K) || "0"),
            (P = i = s = r = a = o = l = d = 0),
            (F = n = 1),
            (L.svg = !(!e.getCTM || !ls(e))),
            M.translate &&
              (("none" === M.translate &&
                "none" === M.scale &&
                "none" === M.rotate) ||
                (S[U] =
                  ("none" !== M.translate
                    ? "translate3d(" +
                      (M.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                      ") "
                    : "") +
                  ("none" !== M.rotate ? "rotate(" + M.rotate + ") " : "") +
                  ("none" !== M.scale
                    ? "scale(" + M.scale.split(" ").join(",") + ") "
                    : "") +
                  ("none" !== M[U] ? M[U] : "")),
              (S.scale = S.rotate = S.translate = "none")),
            (M = gs(e, L.svg)),
            L.svg &&
              ((y = L.uncache
                ? ((b = e.getBBox()),
                  (k = L.xOrigin - b.x + "px " + (L.yOrigin - b.y) + "px"),
                  "")
                : !t && e.getAttribute("data-svg-origin")),
              vs(e, y || k, !!y || L.originIsAbsolute, !1 !== L.smooth, M)),
            (T = L.xOrigin || 0),
            (E = L.yOrigin || 0),
            M !== an &&
              ((h = M[0]),
              (p = M[1]),
              (f = M[2]),
              (m = M[3]),
              (P = g = M[4]),
              (i = v = M[5]),
              6 === M.length
                ? ((F = Math.sqrt(h * h + p * p)),
                  (n = Math.sqrt(m * m + f * f)),
                  (r = h || p ? Gs(p, h) * Ws : 0),
                  (l = f || m ? Gs(f, m) * Ws + r : 0) &&
                    (n *= Math.abs(Math.cos(l * $s))),
                  L.svg &&
                    ((P -= T - (T * h + E * f)), (i -= E - (T * p + E * m))))
                : ((T = M[6]),
                  (E = M[7]),
                  (_ = M[8]),
                  (D = M[9]),
                  (x = M[10]),
                  (C = M[11]),
                  (P = M[12]),
                  (i = M[13]),
                  (s = M[14]),
                  (a = (M = Gs(T, x)) * Ws),
                  M &&
                    ((y = g * (u = Math.cos(-M)) + _ * (c = Math.sin(-M))),
                    (b = v * u + D * c),
                    (w = T * u + x * c),
                    (_ = g * -c + _ * u),
                    (D = v * -c + D * u),
                    (x = T * -c + x * u),
                    (C = E * -c + C * u),
                    (g = y),
                    (v = b),
                    (T = w)),
                  (o = (M = Gs(-f, x)) * Ws),
                  M &&
                    ((u = Math.cos(-M)),
                    (C = m * (c = Math.sin(-M)) + C * u),
                    (h = y = h * u - _ * c),
                    (p = b = p * u - D * c),
                    (f = w = f * u - x * c)),
                  (r = (M = Gs(p, h)) * Ws),
                  M &&
                    ((y = h * (u = Math.cos(M)) + p * (c = Math.sin(M))),
                    (b = g * u + v * c),
                    (p = p * u - h * c),
                    (v = v * u - g * c),
                    (h = y),
                    (g = b)),
                  a &&
                    359.9 < Math.abs(a) + Math.abs(r) &&
                    ((a = r = 0), (o = 180 - o)),
                  (F = O(Math.sqrt(h * h + p * p + f * f))),
                  (n = O(Math.sqrt(v * v + T * T))),
                  (M = Gs(g, v)),
                  (l = 2e-4 < Math.abs(M) ? M * Ws : 0),
                  (d = C ? 1 / (C < 0 ? -C : C) : 0)),
              L.svg) &&
              ((y = e.getAttribute("transform")),
              (L.forceCSS = e.setAttribute("transform", "") || !fs(V(e, U))),
              y) &&
              e.setAttribute("transform", y),
            90 < Math.abs(l) &&
              Math.abs(l) < 270 &&
              (A
                ? ((F *= -1),
                  (l += r <= 0 ? 180 : -180),
                  (r += r <= 0 ? 180 : -180))
                : ((n *= -1), (l += l <= 0 ? 180 : -180))),
            (t = t || L.uncache),
            (L.x =
              P -
              ((L.xPercent =
                P &&
                ((!t && L.xPercent) ||
                  (Math.round(e.offsetWidth / 2) === Math.round(-P) ? -50 : 0)))
                ? (e.offsetWidth * L.xPercent) / 100
                : 0) +
              "px"),
            (L.y =
              i -
              ((L.yPercent =
                i &&
                ((!t && L.yPercent) ||
                  (Math.round(e.offsetHeight / 2) === Math.round(-i)
                    ? -50
                    : 0)))
                ? (e.offsetHeight * L.yPercent) / 100
                : 0) +
              "px"),
            (L.z = s + "px"),
            (L.scaleX = O(F)),
            (L.scaleY = O(n)),
            (L.rotation = O(r) + "deg"),
            (L.rotationX = O(a) + "deg"),
            (L.rotationY = O(o) + "deg"),
            (L.skewX = l + "deg"),
            (L.skewY = "0deg"),
            (L.transformPerspective = d + "px"),
            (L.zOrigin =
              parseFloat(k.split(" ")[2]) || (!t && L.zOrigin) || 0) &&
              (S[K] = dn(k)),
            (L.xOffset = L.yOffset = 0),
            (L.force3D = X.force3D),
            (L.renderTransform = L.svg ? mn : Ts ? fn : un),
            (L.uncache = 0)),
          L
        );
      },
      dn = function (e) {
        return (e = e.split(" "))[0] + " " + e[1];
      },
      un = function (e, t) {
        (t.z = "0px"),
          (t.rotationY = t.rotationX = "0deg"),
          (t.force3D = 0),
          fn(e, t);
      },
      cn = "0deg",
      hn = "0px",
      pn = ") ",
      fn = function (e, t) {
        var i,
          s,
          t = t || this,
          n = t.xPercent,
          r = t.yPercent,
          a = t.x,
          o = t.y,
          l = t.z,
          d = t.rotation,
          u = t.rotationY,
          c = t.rotationX,
          h = t.skewX,
          p = t.skewY,
          f = t.scaleX,
          m = t.scaleY,
          g = t.transformPerspective,
          v = t.force3D,
          y = t.target,
          t = t.zOrigin,
          b = "",
          e = ("auto" === v && e && 1 !== e) || !0 === v;
        !t ||
          (c === cn && u === cn) ||
          ((v = parseFloat(u) * $s),
          (s = Math.sin(v)),
          (i = Math.cos(v)),
          (v = parseFloat(c) * $s),
          (a = ys(y, a, s * (s = Math.cos(v)) * -t)),
          (o = ys(y, o, -Math.sin(v) * -t)),
          (l = ys(y, l, i * s * -t + t))),
          g !== hn && (b += "perspective(" + g + pn),
          (n || r) && (b += "translate(" + n + "%, " + r + "%) "),
          (!e && a === hn && o === hn && l === hn) ||
            (b +=
              l !== hn || e
                ? "translate3d(" + a + ", " + o + ", " + l + ") "
                : "translate(" + a + ", " + o + pn),
          d !== cn && (b += "rotate(" + d + pn),
          u !== cn && (b += "rotateY(" + u + pn),
          c !== cn && (b += "rotateX(" + c + pn),
          (h === cn && p === cn) || (b += "skew(" + h + ", " + p + pn),
          (1 === f && 1 === m) || (b += "scale(" + f + ", " + m + pn),
          (y.style[U] = b || "translate(0, 0)");
      },
      mn = function (e, t) {
        var i,
          s,
          n,
          r,
          a,
          t = t || this,
          o = t.xPercent,
          l = t.yPercent,
          d = t.x,
          u = t.y,
          c = t.rotation,
          h = t.skewX,
          p = t.skewY,
          f = t.scaleX,
          m = t.scaleY,
          g = t.target,
          v = t.xOrigin,
          y = t.yOrigin,
          b = t.xOffset,
          w = t.yOffset,
          t = t.forceCSS,
          _ = parseFloat(d),
          D = parseFloat(u),
          c = parseFloat(c),
          h = parseFloat(h);
        (p = parseFloat(p)) && ((h += p = parseFloat(p)), (c += p)),
          c || h
            ? ((c *= $s),
              (h *= $s),
              (i = Math.cos(c) * f),
              (s = Math.sin(c) * f),
              (n = Math.sin(c - h) * -m),
              (r = Math.cos(c - h) * m),
              h &&
                ((p *= $s),
                (a = Math.tan(h - p)),
                (n *= a = Math.sqrt(1 + a * a)),
                (r *= a),
                p) &&
                ((a = Math.tan(p)), (i *= a = Math.sqrt(1 + a * a)), (s *= a)),
              (i = O(i)),
              (s = O(s)),
              (n = O(n)),
              (r = O(r)))
            : ((i = f), (r = m), (s = n = 0)),
          ((_ && !~(d + "").indexOf("px")) ||
            (D && !~(u + "").indexOf("px"))) &&
            ((_ = cs(g, "x", d, "px")), (D = cs(g, "y", u, "px"))),
          (v || y || b || w) &&
            ((_ = O(_ + v - (v * i + y * n) + b)),
            (D = O(D + y - (v * s + y * r) + w))),
          (o || l) &&
            ((_ = O(_ + (o / 100) * (a = g.getBBox()).width)),
            (D = O(D + (l / 100) * a.height))),
          g.setAttribute(
            "transform",
            (a =
              "matrix(" +
              i +
              "," +
              s +
              "," +
              n +
              "," +
              r +
              "," +
              _ +
              "," +
              D +
              ")")
          ),
          t && (g.style[U] = a);
      };
    p("padding,margin,Width,Radius", function (t, i) {
      var e = "Bottom",
        o = (
          i < 3
            ? ["Top", "Right", e, "Left"]
            : ["TopLeft", "TopRight", e + "Right", e + "Left"]
        ).map(function (e) {
          return i < 2 ? t + e : "border" + e + t;
        });
      rn[1 < i ? "border" + t : t] = function (t, e, i, s, n) {
        var r, a;
        if (arguments.length < 4)
          return (
            (r = o.map(function (e) {
              return sn(t, e, i);
            })),
            5 === (a = r.join(" ")).split(r[0]).length ? r[0] : a
          );
        (r = (s + "").split(" ")),
          (a = {}),
          o.forEach(function (e, t) {
            return (a[e] = r[t] = r[t] || r[((t - 1) / 2) | 0]);
          }),
          t.init(e, a, n);
      };
    });
    var gn,
      vn = {
        name: "css",
        register: ns,
        targetTest: function (e) {
          return e.style && e.nodeType;
        },
        init: function (e, t, i, s, n) {
          var r,
            a,
            o,
            l,
            d,
            u,
            c,
            h,
            p,
            I,
            f,
            m,
            B,
            g,
            v,
            y,
            b,
            w,
            _,
            D,
            N = this._props,
            x = e.style,
            E = i.vars.startAt;
          for (d in (Ds || ns(),
          (this.styles = this.styles || is(e)),
          (g = this.styles.props),
          (this.tween = i),
          t))
            if (
              "autoRound" !== d &&
              ((a = t[d]), !H[d] || !ni(d, t, i, s, e, n))
            )
              if (
                ((h = typeof a),
                (l = rn[d]),
                "function" === h && (h = typeof (a = a.call(i, s, e, n))),
                "string" === h && ~a.indexOf("random(") && (a = Ae(a)),
                l)
              )
                l(this, e, d, a, i) && (B = 1);
              else if ("--" === d.substr(0, 2))
                (r = (getComputedStyle(e).getPropertyValue(d) + "").trim()),
                  (a += ""),
                  (qt.lastIndex = 0),
                  qt.test(r) || ((u = Y(r)), (c = Y(a))),
                  c ? u !== c && (r = cs(e, d, r, c) + c) : u && (a += u),
                  this.add(x, "setProperty", r, a, s, n, 0, 0, d),
                  N.push(d),
                  g.push(d, 0, x[d]);
              else if ("undefined" !== h) {
                if (
                  ((E &&
                    d in E &&
                    (Y(
                      (r =
                        R(
                          (r =
                            "function" == typeof E[d]
                              ? E[d].call(i, s, e, n)
                              : E[d])
                        ) && ~r.indexOf("random(")
                          ? Ae(r)
                          : r) + ""
                    ) ||
                      "auto" === r ||
                      (r += X.units[d] || Y(sn(e, d)) || ""),
                    "=" !== (r + "").charAt(1))) ||
                    (r = sn(e, d)),
                  (l = parseFloat(r)),
                  (h =
                    "string" === h && "=" === a.charAt(1) && a.substr(0, 2)) &&
                    (a = a.substr(2)),
                  (o = parseFloat(a)),
                  (p =
                    (d =
                      d in Qs &&
                      ("autoAlpha" === d &&
                        (1 === l &&
                          "hidden" === sn(e, "visibility") &&
                          o &&
                          (l = 0),
                        g.push("visibility", 0, x.visibility),
                        us(
                          this,
                          x,
                          "visibility",
                          l ? "inherit" : "hidden",
                          o ? "inherit" : "hidden",
                          !o
                        )),
                      "scale" !== d) &&
                      "transform" !== d &&
                      ~(d = Qs[d]).indexOf(",")
                        ? d.split(",")[0]
                        : d) in qs))
                )
                  if (
                    (this.styles.save(d),
                    I ||
                      (((f = e._gsap).renderTransform && !t.parseTransform) ||
                        ln(e, t.parseTransform),
                      (m = !1 !== t.smoothOrigin && f.smooth),
                      ((I = this._pt =
                        new G(
                          this._pt,
                          x,
                          U,
                          0,
                          1,
                          f.renderTransform,
                          f,
                          0,
                          -1
                        )).dep = 1)),
                    "scale" === d)
                  )
                    (this._pt = new G(
                      this._pt,
                      f,
                      "scaleY",
                      f.scaleY,
                      (h ? ne(f.scaleY, h + o) : o) - f.scaleY || 0,
                      Xi
                    )),
                      (this._pt.u = 0),
                      N.push("scaleY", d),
                      (d += "X");
                  else {
                    if ("transformOrigin" === d) {
                      g.push(K, 0, x[K]),
                        (D = _ = w = void 0),
                        (w = (b = a).split(" ")),
                        (_ = w[0]),
                        (D = w[1] || "50%"),
                        ("top" !== _ &&
                          "bottom" !== _ &&
                          "left" !== D &&
                          "right" !== D) ||
                          ((b = _), (_ = D), (D = b)),
                        (w[0] = nn[_] || _),
                        (w[1] = nn[D] || D),
                        (a = w.join(" ")),
                        f.svg
                          ? vs(e, a, 0, m, 0, this)
                          : ((c = parseFloat(a.split(" ")[2]) || 0) !==
                              f.zOrigin && us(this, f, "zOrigin", f.zOrigin, c),
                            us(this, x, d, dn(r), dn(a)));
                      continue;
                    }
                    if ("svgOrigin" === d) {
                      vs(e, a, 1, m, 0, this);
                      continue;
                    }
                    if (d in on) {
                      (b = this),
                        (_ = f),
                        (D = d),
                        (w = l),
                        (v = h ? ne(l, h + a) : a),
                        (y = z = F = void 0),
                        (F = R(v)),
                        (z =
                          parseFloat(v) * (F && ~v.indexOf("rad") ? Ws : 1) -
                          w),
                        (y = w + z + "deg"),
                        F &&
                          ("short" === (F = v.split("_")[1]) &&
                            (z %= 360) != z % 180 &&
                            (z += z < 0 ? 360 : -360),
                          "cw" === F && z < 0
                            ? (z = ((z + 36e9) % 360) - 360 * ~~(z / 360))
                            : "ccw" === F &&
                              0 < z &&
                              (z = ((z - 36e9) % 360) - 360 * ~~(z / 360))),
                        (b._pt = v = new G(b._pt, _, D, w, z, ji)),
                        (v.e = y),
                        (v.u = "deg"),
                        b._props.push(D);
                      continue;
                    }
                    if ("smoothOrigin" === d) {
                      us(this, f, "smooth", f.smooth, a);
                      continue;
                    }
                    if ("force3D" === d) {
                      f[d] = a;
                      continue;
                    }
                    if ("transform" === d) {
                      z = O = k = A = M = S = T = C = L = F = P = void 0;
                      var C,
                        T,
                        S,
                        A,
                        M,
                        k,
                        P = this,
                        F = a,
                        L = e,
                        O = bs({}, L._gsap),
                        z = L.style;
                      for (T in (O.svg
                        ? ((S = L.getAttribute("transform")),
                          L.setAttribute("transform", ""),
                          (z[U] = F),
                          (C = ln(L, 1)),
                          ds(L, U),
                          L.setAttribute("transform", S))
                        : ((S = getComputedStyle(L)[U]),
                          (z[U] = F),
                          (C = ln(L, 1)),
                          (z[U] = S)),
                      qs))
                        (S = O[T]) !== (M = C[T]) &&
                          "perspective,force3D,transformOrigin,svgOrigin".indexOf(
                            T
                          ) < 0 &&
                          ((A =
                            Y(S) !== (k = Y(M))
                              ? cs(L, T, S, k)
                              : parseFloat(S)),
                          (M = parseFloat(M)),
                          (P._pt = new G(P._pt, C, T, A, M - A, Xi)),
                          (P._pt.u = k || 0),
                          P._props.push(T));
                      bs(C, O);
                      continue;
                    }
                  }
                else d in x || (d = Js(d) || d);
                if (
                  p ||
                  ((o || 0 === o) && (l || 0 === l) && !Ks.test(a) && d in x)
                )
                  (o = o || 0),
                    (u = (r + "").substr((l + "").length)) !==
                      (c = Y(a) || (d in X.units ? X.units[d] : u)) &&
                      (l = cs(e, d, r, c)),
                    (this._pt = new G(
                      this._pt,
                      p ? f : x,
                      d,
                      l,
                      (h ? ne(l, h + o) : o) - l,
                      p || ("px" !== c && "zIndex" !== d) || !1 === t.autoRound
                        ? Xi
                        : qi
                    )),
                    (this._pt.u = c || 0),
                    u !== c &&
                      "%" !== c &&
                      ((this._pt.b = r), (this._pt.r = Hi));
                else if (d in x) hs.call(this, e, d, r, h ? h + a : a);
                else if (d in e) this.add(e, d, r || e[d], h ? h + a : a, s, n);
                else if ("parseTransform" !== d) {
                  ee(d, a);
                  continue;
                }
                p || (d in x ? g.push(d, 0, x[d]) : g.push(d, 1, r || e[d])),
                  N.push(d);
              }
          B && Ci(this);
        },
        render: function (e, t) {
          if (t.tween._time || !Cs())
            for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
          else t.styles.revert();
        },
        get: sn,
        aliases: Qs,
        getSetter: function (e, t, i) {
          var s = Qs[t];
          return (t = s && s.indexOf(",") < 0 ? s : t) in qs &&
            t !== K &&
            (e._gsap.x || sn(e, "x"))
            ? i && Es === i
              ? "scale" === t
                ? Ki
                : Ui
              : (Es = i || {}) && ("scale" === t ? Qi : Zi)
            : e.style && !r(e.style[t])
            ? Gi
            : ~t.indexOf("-")
            ? Vi
            : yi(e, t);
        },
        core: { _removeProperty: ds, _getMatrix: gs },
      },
      yn =
        ((m.utils.checkPrefix = Js),
        (m.core.getStyleSaver = is),
        (gn = p(
          "x,y,z,scale,scaleX,scaleY,xPercent,yPercent" +
            "," +
            (yn = "rotation,rotationX,rotationY,skewX,skewY") +
            ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
          function (e) {
            qs[e] = 1;
          }
        )),
        p(yn, function (e) {
          (X.units[e] = "deg"), (on[e] = 1);
        }),
        (Qs[gn[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + yn),
        p(
          "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
          function (e) {
            e = e.split(":");
            Qs[e[1]] = gn[e[0]];
          }
        ),
        p(
          "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
          function (e) {
            X.units[e] = "px";
          }
        ),
        m.registerPlugin(vn),
        m.registerPlugin(vn) || m),
      bn = yn.core.Tween;
    (e.Back = Ns),
      (e.Bounce = Ys),
      (e.CSSPlugin = vn),
      (e.Circ = Hs),
      (e.Cubic = Ls),
      (e.Elastic = Bs),
      (e.Expo = js),
      (e.Linear = Ps),
      (e.Power0 = t),
      (e.Power1 = Ss),
      (e.Power2 = As),
      (e.Power3 = Ms),
      (e.Power4 = ks),
      (e.Quad = Fs),
      (e.Quart = Os),
      (e.Quint = zs),
      (e.Sine = Xs),
      (e.SteppedEase = Rs),
      (e.Strong = Is),
      (e.TimelineLite = W),
      (e.TimelineMax = W),
      (e.TweenLite = $),
      (e.TweenMax = bn),
      (e.default = yn),
      (e.gsap = yn),
      "undefined" == typeof window || window !== e
        ? Object.defineProperty(e, "__esModule", { value: !0 })
        : delete e.default;
  }),
  (t = this),
  (e = function () {
    function u(e, t, i) {
      return Math.max(e, Math.min(t, i));
    }
    class y {
      advance(t) {
        if (this.isRunning) {
          let e = !1;
          if (this.lerp)
            (this.value =
              ((i = this.value),
              (s = this.to),
              (n = 60 * this.lerp),
              (i = i),
              (s = s),
              (1 - (n = 1 - Math.exp(-n * t))) * i + n * s)),
              Math.round(this.value) === this.to &&
                ((this.value = this.to), (e = !0));
          else {
            this.currentTime += t;
            const i = u(0, this.currentTime / this.duration, 1),
              s = (e = 1 <= i) ? 1 : this.easing(i);
            this.value = this.from + (this.to - this.from) * s;
          }
          var i, s, n;
          this.onUpdate?.(this.value, e), e && this.stop();
        }
      }
      stop() {
        this.isRunning = !1;
      }
      fromTo(
        e,
        t,
        {
          lerp: i = 0.1,
          duration: s = 1,
          easing: n = (e) => e,
          onStart: r,
          onUpdate: a,
        }
      ) {
        (this.from = this.value = e),
          (this.to = t),
          (this.lerp = i),
          (this.duration = s),
          (this.easing = n),
          (this.currentTime = 0),
          (this.isRunning = !0),
          r?.(),
          (this.onUpdate = a);
      }
    }
    class b {
      constructor({ wrapper: e, content: t, autoResize: i = !0 } = {}) {
        if (((this.wrapper = e), (this.content = t), i)) {
          const e = (function (i) {
            let s;
            return function () {
              let e = arguments,
                t = this;
              clearTimeout(s),
                (s = setTimeout(function () {
                  i.apply(t, e);
                }, 250));
            };
          })(this.resize);
          this.wrapper !== window &&
            ((this.wrapperResizeObserver = new ResizeObserver(e)),
            this.wrapperResizeObserver.observe(this.wrapper)),
            (this.contentResizeObserver = new ResizeObserver(e)),
            this.contentResizeObserver.observe(this.content);
        }
        this.resize();
      }
      destroy() {
        this.wrapperResizeObserver?.disconnect(),
          this.contentResizeObserver?.disconnect();
      }
      resize = () => {
        this.onWrapperResize(), this.onContentResize();
      };
      onWrapperResize = () => {
        this.wrapper === window
          ? ((this.width = window.innerWidth),
            (this.height = window.innerHeight))
          : ((this.width = this.wrapper.clientWidth),
            (this.height = this.wrapper.clientHeight));
      };
      onContentResize = () => {
        (this.scrollHeight = this.content.scrollHeight),
          (this.scrollWidth = this.content.scrollWidth);
      };
      get limit() {
        return {
          x: this.scrollWidth - this.width,
          y: this.scrollHeight - this.height,
        };
      }
    }
    class w {
      constructor() {
        this.events = {};
      }
      emit(e, ...i) {
        var s = this.events[e] || [];
        for (let e = 0, t = s.length; e < t; e++) s[e](...i);
      }
      on(e, t) {
        return (
          this.events[e]?.push(t) || (this.events[e] = [t]),
          () => {
            this.events[e] = this.events[e]?.filter((e) => t !== e);
          }
        );
      }
      off(e, t) {
        this.events[e] = this.events[e]?.filter((e) => t !== e);
      }
      destroy() {
        this.events = {};
      }
    }
    class _ {
      constructor(
        e,
        {
          wheelMultiplier: t = 1,
          touchMultiplier: i = 2,
          normalizeWheel: s = !1,
        }
      ) {
        (this.element = e),
          (this.wheelMultiplier = t),
          (this.touchMultiplier = i),
          (this.normalizeWheel = s),
          (this.touchStart = { x: null, y: null }),
          (this.emitter = new w()),
          this.element.addEventListener("wheel", this.onWheel, { passive: !1 }),
          this.element.addEventListener("touchstart", this.onTouchStart, {
            passive: !1,
          }),
          this.element.addEventListener("touchmove", this.onTouchMove, {
            passive: !1,
          }),
          this.element.addEventListener("touchend", this.onTouchEnd, {
            passive: !1,
          });
      }
      on(e, t) {
        return this.emitter.on(e, t);
      }
      destroy() {
        this.emitter.destroy(),
          this.element.removeEventListener("wheel", this.onWheel, {
            passive: !1,
          }),
          this.element.removeEventListener("touchstart", this.onTouchStart, {
            passive: !1,
          }),
          this.element.removeEventListener("touchmove", this.onTouchMove, {
            passive: !1,
          }),
          this.element.removeEventListener("touchend", this.onTouchEnd, {
            passive: !1,
          });
      }
      onTouchStart = (e) => {
        var { clientX: t, clientY: i } = e.targetTouches
          ? e.targetTouches[0]
          : e;
        (this.touchStart.x = t),
          (this.touchStart.y = i),
          (this.lastDelta = { x: 0, y: 0 }),
          this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: e });
      };
      onTouchMove = (e) => {
        var { clientX: t, clientY: i } = e.targetTouches
            ? e.targetTouches[0]
            : e,
          s = -(t - this.touchStart.x) * this.touchMultiplier,
          n = -(i - this.touchStart.y) * this.touchMultiplier;
        (this.touchStart.x = t),
          (this.touchStart.y = i),
          (this.lastDelta = { x: s, y: n }),
          this.emitter.emit("scroll", { deltaX: s, deltaY: n, event: e });
      };
      onTouchEnd = (e) => {
        this.emitter.emit("scroll", {
          deltaX: this.lastDelta.x,
          deltaY: this.lastDelta.y,
          event: e,
        });
      };
      onWheel = (e) => {
        let { deltaX: t, deltaY: i } = e;
        this.normalizeWheel && ((t = u(-100, t, 100)), (i = u(-100, i, 100))),
          (t *= this.wheelMultiplier),
          (i *= this.wheelMultiplier),
          this.emitter.emit("scroll", { deltaX: t, deltaY: i, event: e });
      };
    }
    return class {
      constructor({
        wrapper: e = window,
        content: t = document.documentElement,
        wheelEventsTarget: i = e,
        eventsTarget: s = i,
        smoothWheel: n = !0,
        syncTouch: r = !1,
        syncTouchLerp: a = 0.075,
        touchInertiaMultiplier: o = 35,
        duration: l,
        easing: d = (e) => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
        lerp: u = !l && 0.1,
        infinite: c = !1,
        orientation: h = "vertical",
        gestureOrientation: p = "vertical",
        touchMultiplier: f = 1,
        wheelMultiplier: m = 1,
        normalizeWheel: g = !1,
        autoResize: v = !0,
      } = {}) {
        (window.lenisVersion = "1.0.34"),
          (e !== document.documentElement && e !== document.body) ||
            (e = window),
          (this.options = {
            wrapper: e,
            content: t,
            wheelEventsTarget: i,
            eventsTarget: s,
            smoothWheel: n,
            syncTouch: r,
            syncTouchLerp: a,
            touchInertiaMultiplier: o,
            duration: l,
            easing: d,
            lerp: u,
            infinite: c,
            gestureOrientation: p,
            orientation: h,
            touchMultiplier: f,
            wheelMultiplier: m,
            normalizeWheel: g,
            autoResize: v,
          }),
          (this.animate = new y()),
          (this.emitter = new w()),
          (this.dimensions = new b({ wrapper: e, content: t, autoResize: v })),
          this.toggleClass("lenis", !0),
          (this.velocity = 0),
          (this.isLocked = !1),
          (this.isStopped = !1),
          (this.isSmooth = r || n),
          (this.isScrolling = !1),
          (this.targetScroll = this.animatedScroll = this.actualScroll),
          this.options.wrapper.addEventListener("scroll", this.onNativeScroll, {
            passive: !1,
          }),
          (this.virtualScroll = new _(s, {
            touchMultiplier: f,
            wheelMultiplier: m,
            normalizeWheel: g,
          })),
          this.virtualScroll.on("scroll", this.onVirtualScroll);
      }
      destroy() {
        this.emitter.destroy(),
          this.options.wrapper.removeEventListener(
            "scroll",
            this.onNativeScroll,
            { passive: !1 }
          ),
          this.virtualScroll.destroy(),
          this.dimensions.destroy(),
          this.toggleClass("lenis", !1),
          this.toggleClass("lenis-smooth", !1),
          this.toggleClass("lenis-scrolling", !1),
          this.toggleClass("lenis-stopped", !1),
          this.toggleClass("lenis-locked", !1);
      }
      on(e, t) {
        return this.emitter.on(e, t);
      }
      off(e, t) {
        return this.emitter.off(e, t);
      }
      setScroll(e) {
        this.isHorizontal
          ? (this.rootElement.scrollLeft = e)
          : (this.rootElement.scrollTop = e);
      }
      onVirtualScroll = ({ deltaX: t, deltaY: i, event: s }) => {
        if (!s.ctrlKey) {
          const a = s.type.includes("touch"),
            o = s.type.includes("wheel");
          if (this.options.syncTouch && a && "touchstart" === s.type)
            this.reset();
          else {
            var n = 0 === t && 0 === i,
              r =
                ("vertical" === this.options.gestureOrientation && 0 === i) ||
                ("horizontal" === this.options.gestureOrientation && 0 === t);
            if (!n && !r) {
              let e = s.composedPath();
              if (
                !(e = e.slice(0, e.indexOf(this.rootElement))).find(
                  (e) =>
                    e.hasAttribute?.("data-lenis-prevent") ||
                    (a && e.hasAttribute?.("data-lenis-prevent-touch")) ||
                    (o && e.hasAttribute?.("data-lenis-prevent-wheel")) ||
                    e.classList?.contains("lenis")
                )
              )
                if (this.isStopped || this.isLocked) s.preventDefault();
                else if (
                  ((this.isSmooth =
                    (this.options.syncTouch && a) ||
                    (this.options.smoothWheel && o)),
                  this.isSmooth)
                ) {
                  s.preventDefault();
                  let e = i;
                  "both" === this.options.gestureOrientation
                    ? (e = Math.abs(i) > Math.abs(t) ? i : t)
                    : "horizontal" === this.options.gestureOrientation &&
                      (e = t);
                  (n = a && this.options.syncTouch),
                    (r = a && "touchend" === s.type && 5 < Math.abs(e));
                  r &&
                    (e = this.velocity * this.options.touchInertiaMultiplier),
                    this.scrollTo(this.targetScroll + e, {
                      programmatic: !1,
                      ...(n
                        ? { lerp: r ? this.options.syncTouchLerp : 1 }
                        : {
                            lerp: this.options.lerp,
                            duration: this.options.duration,
                            easing: this.options.easing,
                          }),
                    });
                } else (this.isScrolling = !1), this.animate.stop();
            }
          }
        }
      };
      resize() {
        this.dimensions.resize();
      }
      emit() {
        this.emitter.emit("scroll", this);
      }
      onNativeScroll = () => {
        var e;
        this.__preventNextScrollEvent ||
          this.isScrolling ||
          ((e = this.animatedScroll),
          (this.animatedScroll = this.targetScroll = this.actualScroll),
          (this.velocity = 0),
          (this.direction = Math.sign(this.animatedScroll - e)),
          this.emit());
      };
      reset() {
        (this.isLocked = !1),
          (this.isScrolling = !1),
          (this.animatedScroll = this.targetScroll = this.actualScroll),
          (this.velocity = 0),
          this.animate.stop();
      }
      start() {
        (this.isStopped = !1), this.reset();
      }
      stop() {
        (this.isStopped = !0), this.animate.stop(), this.reset();
      }
      raf(e) {
        var t = e - (this.time || e);
        (this.time = e), this.animate.advance(0.001 * t);
      }
      scrollTo(
        t,
        {
          offset: i = 0,
          immediate: s = !1,
          lock: e = !1,
          duration: n = this.options.duration,
          easing: r = this.options.easing,
          lerp: a = !n && this.options.lerp,
          onComplete: o = null,
          force: l = !1,
          programmatic: d = !0,
        } = {}
      ) {
        if ((!this.isStopped && !this.isLocked) || l) {
          if (["top", "left", "start"].includes(t)) t = 0;
          else if (["bottom", "right", "end"].includes(t)) t = this.limit;
          else {
            let e;
            if (
              ("string" == typeof t
                ? (e = document.querySelector(t))
                : t?.nodeType && (e = t),
              e)
            ) {
              if (this.options.wrapper !== window) {
                const u = this.options.wrapper.getBoundingClientRect();
                i -= this.isHorizontal ? u.left : u.top;
              }
              const s = e.getBoundingClientRect();
              t = (this.isHorizontal ? s.left : s.top) + this.animatedScroll;
            }
          }
          if ("number" == typeof t)
            if (
              ((t += i),
              (t = Math.round(t)),
              this.options.infinite
                ? d && (this.targetScroll = this.animatedScroll = this.scroll)
                : (t = u(0, t, this.limit)),
              s)
            )
              (this.animatedScroll = this.targetScroll = t),
                this.setScroll(this.scroll),
                this.reset(),
                o?.(this);
            else {
              if (!d) {
                if (t === this.targetScroll) return;
                this.targetScroll = t;
              }
              this.animate.fromTo(this.animatedScroll, t, {
                duration: n,
                easing: r,
                lerp: a,
                onStart: () => {
                  e && (this.isLocked = !0), (this.isScrolling = !0);
                },
                onUpdate: (e, t) => {
                  (this.isScrolling = !0),
                    (this.velocity = e - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = e),
                    this.setScroll(this.scroll),
                    d && (this.targetScroll = e),
                    t || this.emit(),
                    t &&
                      (this.reset(),
                      this.emit(),
                      o?.(this),
                      (this.__preventNextScrollEvent = !0),
                      requestAnimationFrame(() => {
                        delete this.__preventNextScrollEvent;
                      }));
                },
              });
            }
        }
      }
      get rootElement() {
        return this.options.wrapper === window
          ? document.documentElement
          : this.options.wrapper;
      }
      get limit() {
        return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
      }
      get isHorizontal() {
        return "horizontal" === this.options.orientation;
      }
      get actualScroll() {
        return this.isHorizontal
          ? this.rootElement.scrollLeft
          : this.rootElement.scrollTop;
      }
      get scroll() {
        return this.options.infinite
          ? ((this.animatedScroll % (e = this.limit)) + e) % e
          : this.animatedScroll;
        var e;
      }
      get progress() {
        return 0 === this.limit ? 1 : this.scroll / this.limit;
      }
      get isSmooth() {
        return this.__isSmooth;
      }
      set isSmooth(e) {
        this.__isSmooth !== e &&
          ((this.__isSmooth = e), this.toggleClass("lenis-smooth", e));
      }
      get isScrolling() {
        return this.__isScrolling;
      }
      set isScrolling(e) {
        this.__isScrolling !== e &&
          ((this.__isScrolling = e), this.toggleClass("lenis-scrolling", e));
      }
      get isStopped() {
        return this.__isStopped;
      }
      set isStopped(e) {
        this.__isStopped !== e &&
          ((this.__isStopped = e), this.toggleClass("lenis-stopped", e));
      }
      get isLocked() {
        return this.__isLocked;
      }
      set isLocked(e) {
        this.__isLocked !== e &&
          ((this.__isLocked = e), this.toggleClass("lenis-locked", e));
      }
      get className() {
        let e = "lenis";
        return (
          this.isStopped && (e += " lenis-stopped"),
          this.isLocked && (e += " lenis-locked"),
          this.isScrolling && (e += " lenis-scrolling"),
          this.isSmooth && (e += " lenis-smooth"),
          e
        );
      }
      toggleClass(e, t) {
        this.rootElement.classList.toggle(e, t),
          this.emitter.emit("className change", this);
      }
    };
  }),
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t = "undefined" != typeof globalThis ? globalThis : t || self).Lenis =
        e());
var t,
  e,
  _self =
    "undefined" != typeof window
      ? window
      : "undefined" != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope
      ? self
      : {},
  Prism = (function (l) {
    var e,
      i = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
      t = 0,
      s = {},
      k = {
        manual: l.Prism && l.Prism.manual,
        disableWorkerMessageHandler:
          l.Prism && l.Prism.disableWorkerMessageHandler,
        util: {
          encode: function e(t) {
            return t instanceof P
              ? new P(t.type, e(t.content), t.alias)
              : Array.isArray(t)
              ? t.map(e)
              : t
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/\u00a0/g, " ");
          },
          type: function (e) {
            return Object.prototype.toString.call(e).slice(8, -1);
          },
          objId: function (e) {
            return (
              e.__id || Object.defineProperty(e, "__id", { value: ++t }), e.__id
            );
          },
          clone: function i(e, s) {
            var n, t;
            switch (((s = s || {}), k.util.type(e))) {
              case "Object":
                if (((t = k.util.objId(e)), s[t])) return s[t];
                for (var r in ((n = {}), (s[t] = n), e))
                  e.hasOwnProperty(r) && (n[r] = i(e[r], s));
                return n;
              case "Array":
                return (
                  (t = k.util.objId(e)),
                  s[t] ||
                    ((n = []),
                    (s[t] = n),
                    e.forEach(function (e, t) {
                      n[t] = i(e, s);
                    }),
                    n)
                );
              default:
                return e;
            }
          },
          getLanguage: function (e) {
            for (; e; ) {
              var t = i.exec(e.className);
              if (t) return t[1].toLowerCase();
              e = e.parentElement;
            }
            return "none";
          },
          setLanguage: function (e, t) {
            (e.className = e.className.replace(RegExp(i, "gi"), "")),
              e.classList.add("language-" + t);
          },
          currentScript: function () {
            if ("undefined" == typeof document) return null;
            if ("currentScript" in document) return document.currentScript;
            try {
              throw new Error();
            } catch (e) {
              var t = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(e.stack) ||
                [])[1];
              if (t) {
                var i,
                  s = document.getElementsByTagName("script");
                for (i in s) if (s[i].src == t) return s[i];
              }
              return null;
            }
          },
          isActive: function (e, t, i) {
            for (var s = "no-" + t; e; ) {
              var n = e.classList;
              if (n.contains(t)) return !0;
              if (n.contains(s)) return !1;
              e = e.parentElement;
            }
            return !!i;
          },
        },
        languages: {
          plain: s,
          plaintext: s,
          text: s,
          txt: s,
          extend: function (e, t) {
            var i,
              s = k.util.clone(k.languages[e]);
            for (i in t) s[i] = t[i];
            return s;
          },
          insertBefore: function (i, e, t, s) {
            var n,
              r = (s = s || k.languages)[i],
              a = {};
            for (n in r)
              if (r.hasOwnProperty(n)) {
                if (n == e)
                  for (var o in t) t.hasOwnProperty(o) && (a[o] = t[o]);
                t.hasOwnProperty(n) || (a[n] = r[n]);
              }
            var l = s[i];
            return (
              (s[i] = a),
              k.languages.DFS(k.languages, function (e, t) {
                t === l && e != i && (this[e] = a);
              }),
              a
            );
          },
          DFS: function e(t, i, s, n) {
            n = n || {};
            var r,
              a,
              o,
              l = k.util.objId;
            for (r in t)
              t.hasOwnProperty(r) &&
                (i.call(t, r, t[r], s || r),
                (a = t[r]),
                "Object" !== (o = k.util.type(a)) || n[l(a)]
                  ? "Array" !== o || n[l(a)] || ((n[l(a)] = !0), e(a, i, r, n))
                  : ((n[l(a)] = !0), e(a, i, null, n)));
          },
        },
        plugins: {},
        highlightAll: function (e, t) {
          k.highlightAllUnder(document, e, t);
        },
        highlightAllUnder: function (e, t, i) {
          var s = {
            callback: i,
            container: e,
            selector:
              'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
          };
          k.hooks.run("before-highlightall", s),
            (s.elements = Array.prototype.slice.apply(
              s.container.querySelectorAll(s.selector)
            )),
            k.hooks.run("before-all-elements-highlight", s);
          for (var n, r = 0; (n = s.elements[r++]); )
            k.highlightElement(n, !0 === t, s.callback);
        },
        highlightElement: function (e, t, i) {
          var s = k.util.getLanguage(e),
            n = k.languages[s],
            r = (k.util.setLanguage(e, s), e.parentElement),
            a =
              (r &&
                "pre" === r.nodeName.toLowerCase() &&
                k.util.setLanguage(r, s),
              { element: e, language: s, grammar: n, code: e.textContent });
          function o(e) {
            (a.highlightedCode = e),
              k.hooks.run("before-insert", a),
              (a.element.innerHTML = a.highlightedCode),
              k.hooks.run("after-highlight", a),
              k.hooks.run("complete", a),
              i && i.call(a.element);
          }
          k.hooks.run("before-sanity-check", a),
            (r = a.element.parentElement) &&
              "pre" === r.nodeName.toLowerCase() &&
              !r.hasAttribute("tabindex") &&
              r.setAttribute("tabindex", "0"),
            a.code
              ? (k.hooks.run("before-highlight", a),
                a.grammar
                  ? t && l.Worker
                    ? (((s = new Worker(k.filename)).onmessage = function (e) {
                        o(e.data);
                      }),
                      s.postMessage(
                        JSON.stringify({
                          language: a.language,
                          code: a.code,
                          immediateClose: !0,
                        })
                      ))
                    : o(k.highlight(a.code, a.grammar, a.language))
                  : o(k.util.encode(a.code)))
              : (k.hooks.run("complete", a), i && i.call(a.element));
        },
        highlight: function (e, t, i) {
          e = { code: e, grammar: t, language: i };
          if ((k.hooks.run("before-tokenize", e), e.grammar))
            return (
              (e.tokens = k.tokenize(e.code, e.grammar)),
              k.hooks.run("after-tokenize", e),
              P.stringify(k.util.encode(e.tokens), e.language)
            );
          throw new Error('The language "' + e.language + '" has no grammar.');
        },
        tokenize: function (e, t) {
          var i = t.rest;
          if (i) {
            for (var s in i) t[s] = i[s];
            delete t.rest;
          }
          for (
            var n = new d(),
              r =
                (L(n, n.head, e),
                (function e(t, i, s, n, r, a) {
                  for (var o in s)
                    if (s.hasOwnProperty(o) && s[o]) {
                      var l = s[o];
                      l = Array.isArray(l) ? l : [l];
                      for (var d = 0; d < l.length; ++d) {
                        if (a && a.cause == o + "," + d) return;
                        var u,
                          c = l[d],
                          h = c.inside,
                          p = !!c.lookbehind,
                          f = !!c.greedy,
                          m = c.alias;
                        f &&
                          !c.pattern.global &&
                          ((u = c.pattern.toString().match(/[imsuy]*$/)[0]),
                          (c.pattern = RegExp(c.pattern.source, u + "g")));
                        for (
                          var g = c.pattern || c, v = n.next, y = r;
                          v !== i.tail && !(a && y >= a.reach);
                          y += v.value.length, v = v.next
                        ) {
                          var b = v.value;
                          if (i.length > t.length) return;
                          if (!(b instanceof P)) {
                            var w,
                              _ = 1;
                            if (f) {
                              if (!(w = F(g, y, t, p)) || w.index >= t.length)
                                break;
                              var D = w.index,
                                x = w.index + w[0].length,
                                E = y;
                              for (E += v.value.length; E <= D; )
                                E += (v = v.next).value.length;
                              if (
                                ((y = E -= v.value.length),
                                v.value instanceof P)
                              )
                                continue;
                              for (
                                var C = v;
                                C !== i.tail &&
                                (E < x || "string" == typeof C.value);
                                C = C.next
                              )
                                _++, (E += C.value.length);
                              _--, (b = t.slice(y, E)), (w.index -= y);
                            } else if (!(w = F(g, 0, b, p))) continue;
                            D = w.index;
                            var T = w[0],
                              S = b.slice(0, D),
                              A = b.slice(D + T.length),
                              b = y + b.length,
                              M = (a && b > a.reach && (a.reach = b), v.prev);
                            S && ((M = L(i, M, S)), (y += S.length)),
                              O(i, M, _),
                              (v = L(
                                i,
                                M,
                                new P(o, h ? k.tokenize(T, h) : T, m, T)
                              )),
                              A && L(i, v, A),
                              1 < _ &&
                                ((S = { cause: o + "," + d, reach: b }),
                                e(t, i, s, v.prev, y, S),
                                a) &&
                                S.reach > a.reach &&
                                (a.reach = S.reach);
                          }
                        }
                      }
                    }
                })(e, n, t, n.head, 0),
                n),
              a = [],
              o = r.head.next;
            o !== r.tail;

          )
            a.push(o.value), (o = o.next);
          return a;
        },
        hooks: {
          all: {},
          add: function (e, t) {
            var i = k.hooks.all;
            (i[e] = i[e] || []), i[e].push(t);
          },
          run: function (e, t) {
            var i = k.hooks.all[e];
            if (i && i.length) for (var s, n = 0; (s = i[n++]); ) s(t);
          },
        },
        Token: P,
      };
    function P(e, t, i, s) {
      (this.type = e),
        (this.content = t),
        (this.alias = i),
        (this.length = 0 | (s || "").length);
    }
    function F(e, t, i, s) {
      e.lastIndex = t;
      t = e.exec(i);
      return (
        t &&
          s &&
          t[1] &&
          ((e = t[1].length), (t.index += e), (t[0] = t[0].slice(e))),
        t
      );
    }
    function d() {
      var e = { value: null, prev: null, next: null },
        t = { value: null, prev: e, next: null };
      (e.next = t), (this.head = e), (this.tail = t), (this.length = 0);
    }
    function L(e, t, i) {
      var s = t.next,
        i = { value: i, prev: t, next: s };
      return (t.next = i), (s.prev = i), e.length++, i;
    }
    function O(e, t, i) {
      for (var s = t.next, n = 0; n < i && s !== e.tail; n++) s = s.next;
      ((t.next = s).prev = t), (e.length -= n);
    }
    return (
      ((l.Prism = k),
      (P.stringify = function t(e, i) {
        if ("string" == typeof e) return e;
        var s;
        if (Array.isArray(e))
          return (
            (s = ""),
            e.forEach(function (e) {
              s += t(e, i);
            }),
            s
          );
        var n,
          r = {
            type: e.type,
            content: t(e.content, i),
            tag: "span",
            classes: ["token", e.type],
            attributes: {},
            language: i,
          },
          e = e.alias,
          a =
            (e &&
              (Array.isArray(e)
                ? Array.prototype.push.apply(r.classes, e)
                : r.classes.push(e)),
            k.hooks.run("wrap", r),
            "");
        for (n in r.attributes)
          a +=
            " " +
            n +
            '="' +
            (r.attributes[n] || "").replace(/"/g, "&quot;") +
            '"';
        return (
          "<" +
          r.tag +
          ' class="' +
          r.classes.join(" ") +
          '"' +
          a +
          ">" +
          r.content +
          "</" +
          r.tag +
          ">"
        );
      }),
      l.document)
        ? ((s = k.util.currentScript()) &&
            ((k.filename = s.src), s.hasAttribute("data-manual")) &&
            (k.manual = !0),
          k.manual ||
            ("loading" === (e = document.readyState) ||
            ("interactive" === e && s && s.defer)
              ? document.addEventListener("DOMContentLoaded", n)
              : window.requestAnimationFrame
              ? window.requestAnimationFrame(n)
              : window.setTimeout(n, 16)))
        : l.addEventListener &&
          !k.disableWorkerMessageHandler &&
          l.addEventListener(
            "message",
            function (e) {
              var e = JSON.parse(e.data),
                t = e.language,
                i = e.code,
                e = e.immediateClose;
              l.postMessage(k.highlight(i, k.languages[t], t)), e && l.close();
            },
            !1
          ),
      k
    );
    function n() {
      k.manual || k.highlightAll();
    }
  })(_self),
  Swiper =
    ("undefined" != typeof module && module.exports && (module.exports = Prism),
    "undefined" != typeof global && (global.Prism = Prism),
    (Prism.languages.markup = {
      comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
      prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
      doctype: {
        pattern:
          /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: !0,
        inside: {
          "internal-subset": {
            pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
            lookbehind: !0,
            greedy: !0,
            inside: null,
          },
          string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
          punctuation: /^<!|>$|[[\]]/,
          "doctype-tag": /^DOCTYPE/i,
          name: /[^\s<>'"]+/,
        },
      },
      cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
      tag: {
        pattern:
          /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: !0,
        inside: {
          tag: {
            pattern: /^<\/?[^\s>\/]+/,
            inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
          },
          "special-attr": [],
          "attr-value": {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
            inside: {
              punctuation: [
                { pattern: /^=/, alias: "attr-equals" },
                { pattern: /^(\s*)["']|["']$/, lookbehind: !0 },
              ],
            },
          },
          punctuation: /\/?>/,
          "attr-name": {
            pattern: /[^\s>\/]+/,
            inside: { namespace: /^[^\s>\/:]+:/ },
          },
        },
      },
      entity: [
        { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
        /&#x?[\da-f]{1,8};/i,
      ],
    }),
    (Prism.languages.markup.tag.inside["attr-value"].inside.entity =
      Prism.languages.markup.entity),
    (Prism.languages.markup.doctype.inside["internal-subset"].inside =
      Prism.languages.markup),
    Prism.hooks.add("wrap", function (e) {
      "entity" === e.type &&
        (e.attributes.title = e.content.replace(/&amp;/, "&"));
    }),
    Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
      value: function (e, t) {
        var i = {},
          i =
            ((i["language-" + t] = {
              pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
              lookbehind: !0,
              inside: Prism.languages[t],
            }),
            (i.cdata = /^<!\[CDATA\[|\]\]>$/i),
            {
              "included-cdata": {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: i,
              },
            }),
          t =
            ((i["language-" + t] = {
              pattern: /[\s\S]+/,
              inside: Prism.languages[t],
            }),
            {});
        (t[e] = {
          pattern: RegExp(
            "(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(
              /__/g,
              function () {
                return e;
              }
            ),
            "i"
          ),
          lookbehind: !0,
          greedy: !0,
          inside: i,
        }),
          Prism.languages.insertBefore("markup", "cdata", t);
      },
    }),
    Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
      value: function (e, t) {
        Prism.languages.markup.tag.inside["special-attr"].push({
          pattern: RegExp(
            "(^|[\"'\\s])(?:" +
              e +
              ")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))",
            "i"
          ),
          lookbehind: !0,
          inside: {
            "attr-name": /^[^\s=]+/,
            "attr-value": {
              pattern: /=[\s\S]+/,
              inside: {
                value: {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                  lookbehind: !0,
                  alias: [t, "language-" + t],
                  inside: Prism.languages[t],
                },
                punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
              },
            },
          },
        });
      },
    }),
    (Prism.languages.html = Prism.languages.markup),
    (Prism.languages.mathml = Prism.languages.markup),
    (Prism.languages.svg = Prism.languages.markup),
    (Prism.languages.xml = Prism.languages.extend("markup", {})),
    (Prism.languages.ssml = Prism.languages.xml),
    (Prism.languages.atom = Prism.languages.xml),
    (Prism.languages.rss = Prism.languages.xml),
    !(function (e) {
      var t =
          /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,
        t =
          ((e.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: RegExp(
                "@[\\w-](?:[^;{\\s\"']|\\s+(?!\\s)|" +
                  t.source +
                  ")*?(?:;|(?=\\s*\\{))"
              ),
              inside: {
                rule: /^@[\w-]+/,
                "selector-function-argument": {
                  pattern:
                    /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                  lookbehind: !0,
                  alias: "selector",
                },
                keyword: {
                  pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                  lookbehind: !0,
                },
              },
            },
            url: {
              pattern: RegExp(
                "\\burl\\((?:" +
                  t.source +
                  "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)",
                "i"
              ),
              greedy: !0,
              inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: { pattern: RegExp("^" + t.source + "$"), alias: "url" },
              },
            },
            selector: {
              pattern: RegExp(
                "(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" +
                  t.source +
                  ")*(?=\\s*\\{)"
              ),
              lookbehind: !0,
            },
            string: { pattern: t, greedy: !0 },
            property: {
              pattern:
                /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
              lookbehind: !0,
            },
            important: /!important\b/i,
            function: {
              pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
              lookbehind: !0,
            },
            punctuation: /[(){};:,]/,
          }),
          (e.languages.css.atrule.inside.rest = e.languages.css),
          e.languages.markup);
      t &&
        (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"));
    })(Prism),
    (Prism.languages.clike = {
      comment: [
        {
          pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
          lookbehind: !0,
          greedy: !0,
        },
        { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
      ],
      string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0,
      },
      "class-name": {
        pattern:
          /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: { punctuation: /[.\\]/ },
      },
      keyword:
        /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
      boolean: /\b(?:false|true)\b/,
      function: /\b\w+(?=\()/,
      number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
      operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
      punctuation: /[{}[\];(),.:]/,
    }),
    (Prism.languages.javascript = Prism.languages.extend("clike", {
      "class-name": [
        Prism.languages.clike["class-name"],
        {
          pattern:
            /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
          lookbehind: !0,
        },
      ],
      keyword: [
        { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
        {
          pattern:
            /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
          lookbehind: !0,
        },
      ],
      function:
        /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      number: {
        pattern: RegExp(
          "(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"
        ),
        lookbehind: !0,
      },
      operator:
        /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
    })),
    (Prism.languages.javascript["class-name"][0].pattern =
      /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
    Prism.languages.insertBefore("javascript", "keyword", {
      regex: {
        pattern: RegExp(
          "((?:^|[^$\\w\\xA0-\\uFFFF.\"'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r\n,.;:})\\]]|//))"
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          "regex-source": {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: !0,
            alias: "language-regex",
            inside: Prism.languages.regex,
          },
          "regex-delimiter": /^\/|\/$/,
          "regex-flags": /^[a-z]+$/,
        },
      },
      "function-variable": {
        pattern:
          /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function",
      },
      parameter: [
        {
          pattern:
            /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
          lookbehind: !0,
          inside: Prism.languages.javascript,
        },
        {
          pattern:
            /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: !0,
          inside: Prism.languages.javascript,
        },
        {
          pattern:
            /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: !0,
          inside: Prism.languages.javascript,
        },
        {
          pattern:
            /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: !0,
          inside: Prism.languages.javascript,
        },
      ],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
    }),
    Prism.languages.insertBefore("javascript", "string", {
      hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
      "template-string": {
        pattern:
          /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: !0,
        inside: {
          "template-punctuation": { pattern: /^`|`$/, alias: "string" },
          interpolation: {
            pattern:
              /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: !0,
            inside: {
              "interpolation-punctuation": {
                pattern: /^\$\{|\}$/,
                alias: "punctuation",
              },
              rest: Prism.languages.javascript,
            },
          },
          string: /[\s\S]+/,
        },
      },
      "string-property": {
        pattern:
          /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: !0,
        greedy: !0,
        alias: "property",
      },
    }),
    Prism.languages.insertBefore("javascript", "operator", {
      "literal-property": {
        pattern:
          /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: !0,
        alias: "property",
      },
    }),
    Prism.languages.markup &&
      (Prism.languages.markup.tag.addInlined("script", "javascript"),
      Prism.languages.markup.tag.addAttribute(
        "on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)",
        "javascript"
      )),
    (Prism.languages.js = Prism.languages.javascript),
    !(function (e) {
      var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        t =
          ((e.languages.css.selector = {
            pattern: e.languages.css.selector.pattern,
            lookbehind: !0,
            inside: (t = {
              "pseudo-element":
                /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
              "pseudo-class": /:[-\w]+/,
              class: /\.[-\w]+/,
              id: /#[-\w]+/,
              attribute: {
                pattern: RegExp("\\[(?:[^[\\]\"']|" + t.source + ")*\\]"),
                greedy: !0,
                inside: {
                  punctuation: /^\[|\]$/,
                  "case-sensitivity": {
                    pattern: /(\s)[si]$/i,
                    lookbehind: !0,
                    alias: "keyword",
                  },
                  namespace: {
                    pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                    lookbehind: !0,
                    inside: { punctuation: /\|$/ },
                  },
                  "attr-name": {
                    pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
                    lookbehind: !0,
                  },
                  "attr-value": [
                    t,
                    {
                      pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
                      lookbehind: !0,
                    },
                  ],
                  operator: /[|~*^$]?=/,
                },
              },
              "n-th": [
                {
                  pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                  lookbehind: !0,
                  inside: { number: /[\dn]+/, operator: /[+-]/ },
                },
                { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 },
              ],
              combinator: />|\+|~|\|\|/,
              punctuation: /[(),]/,
            }),
          }),
          (e.languages.css.atrule.inside["selector-function-argument"].inside =
            t),
          e.languages.insertBefore("css", "property", {
            variable: {
              pattern:
                /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
              lookbehind: !0,
            },
          }),
          { pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/, lookbehind: !0 }),
        i = { pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: !0 };
      e.languages.insertBefore("css", "function", {
        operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 },
        hexcode: { pattern: /\B#[\da-f]{3,8}\b/i, alias: "color" },
        color: [
          {
            pattern:
              /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
            lookbehind: !0,
          },
          {
            pattern:
              /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
            inside: {
              unit: t,
              number: i,
              function: /[\w-]+(?=\()/,
              punctuation: /[(),]/,
            },
          },
        ],
        entity: /\\[\da-f]{1,8}/i,
        unit: t,
        number: i,
      });
    })(Prism),
    !(function () {
      var a, l, o;
      void 0 !== Prism &&
        "undefined" != typeof document &&
        ((a =
          /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/g),
        (l = /^#?((?:[\da-f]){3,4}|(?:[\da-f]{2}){3,4})$/i),
        (o = [
          function (e) {
            var t = l.exec(e);
            if (t) {
              for (
                var i = 6 <= (e = t[1]).length ? 2 : 1,
                  s = e.length / i,
                  n = 1 == i ? 1 / 15 : 1 / 255,
                  r = [],
                  a = 0;
                a < s;
                a++
              ) {
                var o = parseInt(e.substr(a * i, i), 16);
                r.push(o * n);
              }
              return (
                3 == s && r.push(1),
                "rgba(" +
                  r
                    .slice(0, 3)
                    .map(function (e) {
                      return String(Math.round(255 * e));
                    })
                    .join(",") +
                  "," +
                  String(Number(r[3].toFixed(3))) +
                  ")"
              );
            }
          },
          function (e) {
            var t = new Option().style;
            return (t.color = e), t.color ? e : void 0;
          },
        ]),
        Prism.hooks.add("wrap", function (e) {
          if ("color" === e.type || 0 <= e.classes.indexOf("color")) {
            for (
              var t,
                i = e.content,
                s = i.split(a).join(""),
                n = 0,
                r = o.length;
              n < r && !t;
              n++
            )
              t = o[n](s);
            t &&
              (e.content =
                '<span class="inline-color-wrapper"><span class="inline-color" style="background-color:' +
                t +
                ';"></span></span>' +
                i);
          }
        }));
    })(),
    void 0 !== Prism &&
      "undefined" != typeof document &&
      (Element.prototype.matches ||
        (Element.prototype.matches =
          Element.prototype.msMatchesSelector ||
          Element.prototype.webkitMatchesSelector),
      (Prism.plugins.UnescapedMarkup = !0),
      Prism.hooks.add("before-highlightall", function (e) {
        e.selector +=
          ', [class*="lang-"] script[type="text/plain"], [class*="language-"] script[type="text/plain"], script[type="text/plain"][class*="lang-"], script[type="text/plain"][class*="language-"]';
      }),
      Prism.hooks.add("before-sanity-check", function (e) {
        var t,
          i,
          s,
          n = e.element;
        n.matches('script[type="text/plain"]')
          ? ((s = document.createElement("code")),
            ((t = document.createElement("pre")).className = s.className =
              n.className),
            (i = n.dataset),
            Object.keys(i || {}).forEach(function (e) {
              Object.prototype.hasOwnProperty.call(i, e) &&
                (t.dataset[e] = i[e]);
            }),
            (s.textContent = e.code =
              e.code.replace(/&lt;\/script(?:>|&gt;)/gi, "</script>")),
            t.appendChild(s),
            n.parentNode.replaceChild(t, n),
            (e.element = s))
          : e.code ||
            (1 === (s = n.childNodes).length &&
              "#comment" == s[0].nodeName &&
              (n.textContent = e.code = s[0].textContent));
      })),
    !(function () {
      var n, p;
      function e(e) {
        this.defaults = n({}, e);
      }
      function l(e) {
        for (var t = 0, i = 0; i < e.length; ++i)
          e.charCodeAt(i) == "\t".charCodeAt(0) && (t += 3);
        return e.length + t;
      }
      void 0 !== Prism &&
        ((n =
          Object.assign ||
          function (e, t) {
            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
            return e;
          }),
        (p = {
          "remove-trailing": "boolean",
          "remove-indent": "boolean",
          "left-trim": "boolean",
          "right-trim": "boolean",
          "break-lines": "number",
          indent: "number",
          "remove-initial-line-feed": "boolean",
          "tabs-to-spaces": "number",
          "spaces-to-tabs": "number",
        }),
        (e.prototype = {
          setDefaults: function (e) {
            this.defaults = n(this.defaults, e);
          },
          normalize: function (e, t) {
            for (var i in (t = n(this.defaults, t))) {
              var s = i.replace(/-(\w)/g, function (e, t) {
                return t.toUpperCase();
              });
              "normalize" !== i &&
                "setDefaults" !== s &&
                t[i] &&
                this[s] &&
                (e = this[s].call(this, e, t[i]));
            }
            return e;
          },
          leftTrim: function (e) {
            return e.replace(/^\s+/, "");
          },
          rightTrim: function (e) {
            return e.replace(/\s+$/, "");
          },
          tabsToSpaces: function (e, t) {
            return (t = 0 | t || 4), e.replace(/\t/g, new Array(++t).join(" "));
          },
          spacesToTabs: function (e, t) {
            return (
              (t = 0 | t || 4), e.replace(RegExp(" {" + t + "}", "g"), "\t")
            );
          },
          removeTrailing: function (e) {
            return e.replace(/\s*?$/gm, "");
          },
          removeInitialLineFeed: function (e) {
            return e.replace(/^(?:\r?\n|\r)/, "");
          },
          removeIndent: function (e) {
            var t = e.match(/^[^\S\n\r]*(?=\S)/gm);
            return t &&
              t[0].length &&
              (t.sort(function (e, t) {
                return e.length - t.length;
              }),
              t[0].length)
              ? e.replace(RegExp("^" + t[0], "gm"), "")
              : e;
          },
          indent: function (e, t) {
            return e.replace(
              /^[^\S\n\r]*(?=\S)/gm,
              new Array(++t).join("\t") + "$&"
            );
          },
          breakLines: function (e, t) {
            t = (!0 !== t && 0 | t) || 80;
            for (var i = e.split("\n"), s = 0; s < i.length; ++s)
              if (!(l(i[s]) <= t)) {
                for (
                  var n = i[s].split(/(\s+)/g), r = 0, a = 0;
                  a < n.length;
                  ++a
                ) {
                  var o = l(n[a]);
                  (r += o) > t && ((n[a] = "\n" + n[a]), (r = o));
                }
                i[s] = n.join("");
              }
            return i.join("\n");
          },
        }),
        "undefined" != typeof module && module.exports && (module.exports = e),
        (Prism.plugins.NormalizeWhitespace = new e({
          "remove-trailing": !0,
          "remove-indent": !0,
          "left-trim": !0,
          "right-trim": !0,
        })),
        Prism.hooks.add("before-sanity-check", function (e) {
          var t = Prism.plugins.NormalizeWhitespace;
          if (
            (!e.settings || !1 !== e.settings["whitespace-normalization"]) &&
            Prism.util.isActive(e.element, "whitespace-normalization", !0)
          )
            if ((e.element && e.element.parentNode) || !e.code) {
              var i = e.element.parentNode;
              if (e.code && i && "pre" === i.nodeName.toLowerCase()) {
                for (var s in (null == e.settings && (e.settings = {}), p))
                  if (Object.hasOwnProperty.call(p, s)) {
                    var n = p[s];
                    if (i.hasAttribute("data-" + s))
                      try {
                        var r = JSON.parse(
                          i.getAttribute("data-" + s) || "true"
                        );
                        typeof r === n && (e.settings[s] = r);
                      } catch (e) {}
                  }
                for (
                  var a, o = i.childNodes, l = "", d = "", u = !1, c = 0;
                  c < o.length;
                  ++c
                ) {
                  var h = o[c];
                  h == e.element
                    ? (u = !0)
                    : "#text" === h.nodeName &&
                      (u ? (d += h.nodeValue) : (l += h.nodeValue),
                      i.removeChild(h),
                      --c);
                }
                e.element.children.length && Prism.plugins.KeepMarkup
                  ? ((a = l + e.element.innerHTML + d),
                    (e.element.innerHTML = t.normalize(a, e.settings)),
                    (e.code = e.element.textContent))
                  : ((e.code = l + e.code + d),
                    (e.code = t.normalize(e.code, e.settings)));
              }
            } else e.code = t.normalize(e.code, e.settings);
        }));
    })(),
    !(function () {
      var r, a, o, e, t;
      void 0 !== Prism &&
        "undefined" != typeof document &&
        ((r = []),
        (a = {}),
        (o = function () {}),
        (Prism.plugins.toolbar = {}),
        (e = Prism.plugins.toolbar.registerButton =
          function (e, i) {
            var t =
              "function" == typeof i
                ? i
                : function (e) {
                    var t;
                    return (
                      "function" == typeof i.onClick
                        ? (((t = document.createElement("button")).type =
                            "button"),
                          t.addEventListener("click", function () {
                            i.onClick.call(this, e);
                          }))
                        : "string" == typeof i.url
                        ? ((t = document.createElement("a")).href = i.url)
                        : (t = document.createElement("span")),
                      i.className && t.classList.add(i.className),
                      (t.textContent = i.text),
                      t
                    );
                  };
            e in a
              ? console.warn(
                  'There is a button with the key "' +
                    e +
                    '" registered already.'
                )
              : r.push((a[e] = t));
          }),
        (t = Prism.plugins.toolbar.hook =
          function (i) {
            var e,
              s,
              t,
              n = i.element.parentNode;
            n &&
              /pre/i.test(n.nodeName) &&
              !n.parentNode.classList.contains("code-toolbar") &&
              ((e = document.createElement("div")).classList.add(
                "code-toolbar"
              ),
              n.parentNode.insertBefore(e, n),
              e.appendChild(n),
              (s = document.createElement("div")).classList.add("toolbar"),
              (n = r),
              (n = (t = (function (e) {
                for (; e; ) {
                  var t = e.getAttribute("data-toolbar-order");
                  if (null != t)
                    return (t = t.trim()).length ? t.split(/\s*,\s*/g) : [];
                  e = e.parentElement;
                }
              })(i.element))
                ? t.map(function (e) {
                    return a[e] || o;
                  })
                : n).forEach(function (e) {
                var t,
                  e = e(i);
                e &&
                  ((t = document.createElement("div")).classList.add(
                    "toolbar-item"
                  ),
                  t.appendChild(e),
                  s.appendChild(t));
              }),
              e.appendChild(s));
          }),
        e("label", function (e) {
          var t = e.element.parentNode;
          if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-label")) {
            var i,
              s,
              n = t.getAttribute("data-label");
            try {
              s = document.querySelector("template#" + n);
            } catch (e) {}
            return (
              s
                ? (i = s.content)
                : (t.hasAttribute("data-url")
                    ? ((i = document.createElement("a")).href =
                        t.getAttribute("data-url"))
                    : (i = document.createElement("span")),
                  (i.textContent = n)),
              i
            );
          }
        }),
        Prism.hooks.add("complete", t));
    })(),
    !(function () {
      function l(e) {
        var t = document.createElement("textarea");
        (t.value = e.getText()),
          (t.style.top = "0"),
          (t.style.left = "0"),
          (t.style.position = "fixed"),
          document.body.appendChild(t),
          t.focus(),
          t.select();
        try {
          var i = document.execCommand("copy");
          setTimeout(function () {
            i ? e.success() : e.error();
          }, 1);
        } catch (t) {
          setTimeout(function () {
            e.error(t);
          }, 1);
        }
        document.body.removeChild(t);
      }
      void 0 !== Prism &&
        "undefined" != typeof document &&
        (Prism.plugins.toolbar
          ? Prism.plugins.toolbar.registerButton(
              "copy-to-clipboard",
              function (e) {
                var t,
                  i = e.element,
                  s = (function (e) {
                    var t,
                      i = {
                        copy: "Copy",
                        "copy-error": "Press Ctrl+C to copy",
                        "copy-success": "Copied!",
                        "copy-timeout": 5e3,
                      };
                    for (t in i) {
                      for (
                        var s = "data-prismjs-" + t, n = e;
                        n && !n.hasAttribute(s);

                      )
                        n = n.parentElement;
                      n && (i[t] = n.getAttribute(s));
                    }
                    return i;
                  })(i),
                  n = document.createElement("button"),
                  r =
                    ((n.className = "copy-to-clipboard-button"),
                    n.setAttribute("type", "button"),
                    document.createElement("span"));
                return (
                  n.appendChild(r),
                  o("copy"),
                  (t = {
                    getText: function () {
                      return i.textContent;
                    },
                    success: function () {
                      o("copy-success"), a();
                    },
                    error: function () {
                      o("copy-error"),
                        setTimeout(function () {
                          var e;
                          (e = i), window.getSelection().selectAllChildren(e);
                        }, 1),
                        a();
                    },
                  }),
                  n.addEventListener("click", function () {
                    var e;
                    (e = t),
                      navigator.clipboard
                        ? navigator.clipboard
                            .writeText(e.getText())
                            .then(e.success, function () {
                              l(e);
                            })
                        : l(e);
                  }),
                  n
                );
                function a() {
                  setTimeout(function () {
                    o("copy");
                  }, s["copy-timeout"]);
                }
                function o(e) {
                  (r.textContent = s[e]), n.setAttribute("data-copy-state", e);
                }
              }
            )
          : console.warn(
              "Copy to Clipboard plugin loaded before Toolbar plugin."
            ));
    })(),
    !(function () {
      var u, c, h, p, t;
      function f(e) {
        var t = Prism.plugins.customClass;
        return t ? t.apply(e, "none") : e;
      }
      function e(e) {
        e = t.exec(e.id);
        return document.querySelector(
          "#" + e[1] + ("open" == e[2] ? "close" : "open")
        );
      }
      function m() {
        Prism.util.isActive(this, "brace-hover", !0) &&
          [this, e(this)].forEach(function (e) {
            e.classList.add(f("brace-hover"));
          });
      }
      function g() {
        [this, e(this)].forEach(function (e) {
          e.classList.remove(f("brace-hover"));
        });
      }
      function v() {
        Prism.util.isActive(this, "brace-select", !0) &&
          [this, e(this)].forEach(function (e) {
            e.classList.add(f("brace-selected"));
          });
      }
      void 0 !== Prism &&
        "undefined" != typeof document &&
        ((u = { "(": ")", "[": "]", "{": "}" }),
        (c = { "(": "brace-round", "[": "brace-square", "{": "brace-curly" }),
        (h = { "${": "{" }),
        (p = 0),
        (t = /^(pair-\d+-)(close|open)$/),
        Prism.hooks.add("complete", function (e) {
          var t,
            l,
            d,
            i,
            e = e.element,
            s = e.parentElement;
          s &&
            "PRE" == s.tagName &&
            ((t = []),
            Prism.util.isActive(e, "match-braces") && t.push("(", "[", "{"),
            0 != t.length) &&
            (s.__listenerAdded ||
              (s.addEventListener("mousedown", function () {
                var e = s.querySelector("code"),
                  t = f("brace-selected");
                Array.prototype.slice
                  .call(e.querySelectorAll("." + t))
                  .forEach(function (e) {
                    e.classList.remove(t);
                  });
              }),
              Object.defineProperty(s, "__listenerAdded", { value: !0 })),
            (l = Array.prototype.slice.call(
              e.querySelectorAll("span." + f("token") + "." + f("punctuation"))
            )),
            (d = []),
            t.forEach(function (e) {
              for (
                var t = u[e], i = f(c[e]), s = [], n = [], r = 0;
                r < l.length;
                r++
              ) {
                var a,
                  o = l[r];
                0 == o.childElementCount &&
                  ((a = o.textContent),
                  (a = h[a] || a) === e
                    ? (d.push({ index: r, open: !0, element: o }),
                      o.classList.add(i),
                      o.classList.add(f("brace-open")),
                      n.push(r))
                    : a === t &&
                      (d.push({ index: r, open: !1, element: o }),
                      o.classList.add(i),
                      o.classList.add(f("brace-close")),
                      n.length) &&
                      s.push([r, n.pop()]));
              }
              s.forEach(function (e) {
                var t = "pair-" + p++ + "-",
                  i = l[e[0]],
                  e = l[e[1]];
                (i.id = t + "open"),
                  (e.id = t + "close"),
                  [i, e].forEach(function (e) {
                    e.addEventListener("mouseenter", m),
                      e.addEventListener("mouseleave", g),
                      e.addEventListener("click", v);
                  });
              });
            }),
            (i = 0),
            d.sort(function (e, t) {
              return e.index - t.index;
            }),
            d.forEach(function (e) {
              e.open
                ? (e.element.classList.add(f("brace-level-" + ((i % 12) + 1))),
                  i++)
                : ((i = Math.max(0, i - 1)),
                  e.element.classList.add(f("brace-level-" + ((i % 12) + 1))));
            }));
        }));
    })(),
    !(function (e, t) {
      "object" == typeof exports && "undefined" != typeof module
        ? t(exports)
        : "function" == typeof define && define.amd
        ? define(["exports"], t)
        : t(((e = e || self).window = e.window || {}));
    })(this, function (e) {
      "use strict";
      function t(e, t) {
        for (var i = 0; i < t.length; i++) {
          var s = t[i];
          (s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            "value" in s && (s.writable = !0),
            Object.defineProperty(e, s.key, s);
        }
      }
      function n() {
        return (
          Ae ||
          ("undefined" != typeof window &&
            (Ae = window.gsap) &&
            Ae.registerPlugin &&
            Ae)
        );
      }
      function ot(e, t) {
        return ~Ie.indexOf(e) && Ie[Ie.indexOf(e) + 1][t];
      }
      function Pe(e) {
        return !!~r.indexOf(e);
      }
      function Te(e, t, i, s, n) {
        e.addEventListener(t, i, { passive: !1 !== s, capture: !!n });
      }
      function Se(e, t, i, s) {
        e.removeEventListener(t, i, !!s);
      }
      function Fe() {
        return (wt && wt.isPressed) || ze.cache++;
      }
      function a(i, s) {
        function n(e) {
          var t;
          return (
            e || 0 === e
              ? (u && (Me.history.scrollRestoration = "manual"),
                (t = wt && wt.isPressed),
                (e = n.v = Math.round(e) || (wt && wt.iOS ? 1 : 0)),
                i(e),
                (n.cacheID = ze.cache),
                t && c("ss", e))
              : (s || ze.cache !== n.cacheID || c("ref")) &&
                ((n.cacheID = ze.cache), (n.v = i())),
            n.v + n.offset
          );
        }
        return (n.offset = 0), i && n;
      }
      function Oe(e, t) {
        return (
          ((t && t._ctx && t._ctx.selector) || Ae.utils.toArray)(e)[0] ||
          ("string" == typeof e && !1 !== Ae.config().nullTargetWarn
            ? console.warn("Element not found:", e)
            : null)
        );
      }
      function lt(t, e) {
        var i = e.s,
          e = e.sc,
          s = (Pe(t) && (t = ft.scrollingElement || mt), ze.indexOf(t)),
          n = e === Ne.sc ? 1 : 2,
          r =
            (~s || (s = ze.push(t) - 1),
            ze[s + n] || Te(t, "scroll", Fe),
            ze[s + n]),
          s =
            r ||
            (ze[s + n] =
              a(ot(t, i), !0) ||
              (Pe(t)
                ? e
                : a(function (e) {
                    return arguments.length ? (t[i] = e) : t[i];
                  })));
        return (
          (s.target = t),
          r || (s.smooth = "smooth" === Ae.getProperty(t, "scrollBehavior")),
          s
        );
      }
      function Le(e, t, n) {
        function r(e, t) {
          var i = xt();
          t || s < i - l
            ? ((o = a), (a = e), (d = l), (l = i))
            : n
            ? (a += e)
            : (a = o + ((e - o) / (i - d)) * (l - d));
        }
        var a = e,
          o = e,
          l = xt(),
          d = l,
          s = t || 50,
          u = Math.max(500, 3 * s);
        return {
          update: r,
          reset: function () {
            (o = a = n ? 0 : a), (d = l = 0);
          },
          getVelocity: function (e) {
            var t = d,
              i = o,
              s = xt();
            return (
              (!e && 0 !== e) || e === a || r(e),
              l === d || u < s - d
                ? 0
                : ((a + (n ? i : -i)) / ((n ? s : l) - t)) * 1e3
            );
          },
        };
      }
      function dt(e, t) {
        return (
          t && !e._gsapAllow && e.preventDefault(),
          e.changedTouches ? e.changedTouches[0] : e
        );
      }
      function ut(e) {
        var t = Math.max.apply(Math, e),
          e = Math.min.apply(Math, e);
        return Math.abs(t) >= Math.abs(e) ? t : e;
      }
      function ct() {
        var e, i, t;
        (bt = Ae.core.globals().ScrollTrigger) &&
          bt.core &&
          ((e = bt.core),
          (i = e.bridge || {}),
          (t = e._scrollers),
          (e = e._proxies),
          t.push.apply(t, ze),
          e.push.apply(e, Ie),
          (ze = t),
          (Ie = e),
          (c = function (e, t) {
            return i[e](t);
          }));
      }
      function ht(e) {
        return (
          (Ae = e || n()),
          !pt &&
            Ae &&
            "undefined" != typeof document &&
            document.body &&
            ((Me = window),
            (mt = (ft = document).documentElement),
            (gt = ft.body),
            (r = [Me, ft, mt, gt]),
            Ae.utils.clamp,
            (_t = Ae.core.context || function () {}),
            (yt = "onpointerenter" in gt ? "pointer" : "mouse"),
            (vt = M.isTouch =
              Me.matchMedia &&
              Me.matchMedia("(hover: none), (pointer: coarse)").matches
                ? 1
                : "ontouchstart" in Me ||
                  0 < navigator.maxTouchPoints ||
                  0 < navigator.msMaxTouchPoints
                ? 2
                : 0),
            (ke = M.eventTypes =
              (
                "ontouchstart" in mt
                  ? "touchstart,touchmove,touchcancel,touchend"
                  : "onpointerdown" in mt
                  ? "pointerdown,pointermove,pointercancel,pointerup"
                  : "mousedown,mousemove,mouseup,mouseup"
              ).split(",")),
            setTimeout(function () {
              return (u = 0);
            }, 500),
            ct(),
            (pt = 1)),
          pt
        );
      }
      var Ae,
        pt,
        Me,
        ft,
        mt,
        gt,
        vt,
        yt,
        bt,
        r,
        wt,
        ke,
        _t,
        o,
        l,
        d,
        u = 1,
        Dt = [],
        ze = [],
        Ie = [],
        xt = Date.now,
        c = function (e, t) {
          return t;
        },
        h = "scrollLeft",
        p = "scrollTop",
        Be = {
          s: h,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: a(function (e) {
            return arguments.length
              ? Me.scrollTo(e, Ne.sc())
              : Me.pageXOffset || ft[h] || mt[h] || gt[h] || 0;
          }),
        },
        Ne = {
          s: p,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: Be,
          sc: a(function (e) {
            return arguments.length
              ? Me.scrollTo(Be.sc(), e)
              : Me.pageYOffset || ft[p] || mt[p] || gt[p] || 0;
          }),
        },
        M =
          ((Be.op = Ne),
          (ze.cache = 0),
          (f.prototype.init = function (e) {
            pt ||
              ht(Ae) ||
              console.warn("Please gsap.registerPlugin(Observer)"),
              bt || ct();
            var n = e.tolerance,
              r = e.dragMinimum,
              t = e.type,
              a = e.target,
              i = e.lineHeight,
              s = e.debounce,
              o = e.preventDefault,
              l = e.onStop,
              I = e.onStopDelay,
              d = e.ignore,
              B = e.wheelSpeed,
              N = e.event,
              R = e.onDragStart,
              Y = e.onDragEnd,
              X = e.onDrag,
              j = e.onPress,
              H = e.onRelease,
              q = e.onRight,
              W = e.onLeft,
              $ = e.onUp,
              G = e.onDown,
              V = e.onChangeX,
              U = e.onChangeY,
              K = e.onChange,
              Q = e.onToggleX,
              Z = e.onToggleY,
              J = e.onHover,
              ee = e.onHoverEnd,
              u = e.onMove,
              te = e.ignoreCheck,
              c = e.isNormalizer,
              ie = e.onGestureStart,
              se = e.onGestureEnd,
              ne = e.onWheel,
              re = e.onEnable,
              ae = e.onDisable,
              oe = e.onClick,
              h = e.scrollSpeed,
              p = e.capture,
              le = e.allowClicks,
              de = e.lockAxis,
              ue = e.onLockAxis;
            function ce() {
              return (Ce = xt());
            }
            function f(e, t) {
              return (
                ((x.event = e) && d && ~d.indexOf(e.target)) ||
                (t && Ee && "touch" !== e.pointerType) ||
                (te && te(e, t))
              );
            }
            function m() {
              var e = (x.deltaX = ut(P)),
                t = (x.deltaY = ut(F)),
                i = Math.abs(e) >= n,
                s = Math.abs(t) >= n;
              K && (i || s) && K(x, e, t, P, F),
                i &&
                  (q && 0 < x.deltaX && q(x),
                  W && x.deltaX < 0 && W(x),
                  V && V(x),
                  Q && x.deltaX < 0 != E < 0 && Q(x),
                  (E = x.deltaX),
                  (P[0] = P[1] = P[2] = 0)),
                s &&
                  (G && 0 < x.deltaY && G(x),
                  $ && x.deltaY < 0 && $(x),
                  U && U(x),
                  Z && x.deltaY < 0 != C < 0 && Z(x),
                  (C = x.deltaY),
                  (F[0] = F[1] = F[2] = 0)),
                (b || y) && (u && u(x), y && (X(x), (y = !1)), (b = !1)),
                _ && ((_ = !1), ue) && ue(x),
                w && (ne(x), (w = !1)),
                (v = 0);
            }
            function he(e, t, i) {
              (P[i] += e),
                (F[i] += t),
                x._vx.update(e),
                x._vy.update(t),
                s ? (v = v || requestAnimationFrame(m)) : m();
            }
            function pe(e, t) {
              de &&
                !D &&
                ((x.axis = D = Math.abs(e) > Math.abs(t) ? "x" : "y"),
                (_ = !0)),
                "y" !== D && ((P[2] += e), x._vx.update(e, !0)),
                "x" !== D && ((F[2] += t), x._vy.update(t, !0)),
                s ? (v = v || requestAnimationFrame(m)) : m();
            }
            function g(e) {
              var t, i, s, n;
              !f(e, 1) &&
                ((t = (e = dt(e, o)).clientX),
                (e = e.clientY),
                (i = t - x.x),
                (s = e - x.y),
                (n = x.isDragging),
                (x.x = t),
                (x.y = e),
                n ||
                  Math.abs(x.startX - t) >= r ||
                  Math.abs(x.startY - e) >= r) &&
                (X && (y = !0),
                n || (x.isDragging = !0),
                pe(i, s),
                n || (R && R(x)));
            }
            function fe(e) {
              return (
                e.touches &&
                1 < e.touches.length &&
                ((x.isGesturing = !0), ie(e, x.isDragging))
              );
            }
            function me() {
              return (x.isGesturing = !1), se(x);
            }
            function ge(e) {
              var t;
              f(e) ||
                ((e = S()),
                (t = A()),
                he((e - De) * h, (t - xe) * h, 1),
                (De = e),
                (xe = t),
                l && z.restart(!0));
            }
            function ve(e) {
              var t;
              f(e) ||
                ((e = dt(e, o)),
                ne && (w = !0),
                (t =
                  (1 === e.deltaMode
                    ? i
                    : 2 === e.deltaMode
                    ? Me.innerHeight
                    : 1) * B),
                he(e.deltaX * t, e.deltaY * t, 0),
                l && !c && z.restart(!0));
            }
            function ye(e) {
              var t, i, s;
              !f(e) &&
                ((t = e.clientX),
                (e = e.clientY),
                (i = t - x.x),
                (s = e - x.y),
                (x.x = t),
                (x.y = e),
                (b = !0),
                l && z.restart(!0),
                i || s) &&
                pe(i, s);
            }
            function be(e) {
              (x.event = e), J(x);
            }
            function we(e) {
              (x.event = e), ee(x);
            }
            function _e(e) {
              return f(e) || (dt(e, o) && oe(x));
            }
            (this.target = a = Oe(a) || mt), (this.vars = e);
            var v,
              y,
              b,
              w,
              _,
              D,
              d = d && Ae.utils.toArray(d),
              n = n || 1e-9,
              r = r || 0,
              B = B || 1,
              h = h || 1,
              t = t || "wheel,touch,pointer",
              s = !1 !== s,
              i = i || parseFloat(Me.getComputedStyle(gt).lineHeight) || 22,
              x = this,
              E = 0,
              C = 0,
              T = e.passive || !o,
              S = lt(a, Be),
              A = lt(a, Ne),
              De = S(),
              xe = A(),
              Ee =
                ~t.indexOf("touch") &&
                !~t.indexOf("pointer") &&
                "pointerdown" === ke[0],
              M = Pe(a),
              k = a.ownerDocument || ft,
              P = [0, 0, 0],
              F = [0, 0, 0],
              Ce = 0,
              L = (x.onPress = function (e) {
                f(e, 1) ||
                  (e && e.button) ||
                  ((x.axis = D = null),
                  z.pause(),
                  (x.isPressed = !0),
                  (e = dt(e)),
                  (E = C = 0),
                  (x.startX = x.x = e.clientX),
                  (x.startY = x.y = e.clientY),
                  x._vx.reset(),
                  x._vy.reset(),
                  Te(c ? a : k, ke[1], g, T, !0),
                  (x.deltaX = x.deltaY = 0),
                  j && j(x));
              }),
              O = (x.onRelease = function (t) {
                var e, i, s, n;
                f(t, 1) ||
                  (Se(c ? a : k, ke[1], g, !0),
                  (e = !isNaN(x.y - x.startY)),
                  (s =
                    (i = x.isDragging) &&
                    (3 < Math.abs(x.x - x.startX) ||
                      3 < Math.abs(x.y - x.startY))),
                  (n = dt(t)),
                  !s &&
                    e &&
                    (x._vx.reset(), x._vy.reset(), o) &&
                    le &&
                    Ae.delayedCall(0.08, function () {
                      var e;
                      300 < xt() - Ce &&
                        !t.defaultPrevented &&
                        (t.target.click
                          ? t.target.click()
                          : k.createEvent &&
                            ((e = k.createEvent("MouseEvents")).initMouseEvent(
                              "click",
                              !0,
                              !0,
                              Me,
                              1,
                              n.screenX,
                              n.screenY,
                              n.clientX,
                              n.clientY,
                              !1,
                              !1,
                              !1,
                              !1,
                              0,
                              null
                            ),
                            t.target.dispatchEvent(e)));
                    }),
                  (x.isDragging = x.isGesturing = x.isPressed = !1),
                  l && i && !c && z.restart(!0),
                  Y && i && Y(x),
                  H && H(x, s));
              }),
              z = (x._dc = Ae.delayedCall(I || 0.25, function () {
                x._vx.reset(), x._vy.reset(), z.pause(), l && l(x);
              }).pause());
            (x.deltaX = x.deltaY = 0),
              (x._vx = Le(0, 50, !0)),
              (x._vy = Le(0, 50, !0)),
              (x.scrollX = S),
              (x.scrollY = A),
              (x.isDragging = x.isGesturing = x.isPressed = !1),
              _t(this),
              (x.enable = function (e) {
                return (
                  x.isEnabled ||
                    (Te(M ? k : a, "scroll", Fe),
                    0 <= t.indexOf("scroll") &&
                      Te(M ? k : a, "scroll", ge, T, p),
                    0 <= t.indexOf("wheel") && Te(a, "wheel", ve, T, p),
                    ((0 <= t.indexOf("touch") && vt) ||
                      0 <= t.indexOf("pointer")) &&
                      (Te(a, ke[0], L, T, p),
                      Te(k, ke[2], O),
                      Te(k, ke[3], O),
                      le && Te(a, "click", ce, !0, !0),
                      oe && Te(a, "click", _e),
                      ie && Te(k, "gesturestart", fe),
                      se && Te(k, "gestureend", me),
                      J && Te(a, yt + "enter", be),
                      ee && Te(a, yt + "leave", we),
                      u) &&
                      Te(a, yt + "move", ye),
                    (x.isEnabled = !0),
                    e && e.type && L(e),
                    re && re(x)),
                  x
                );
              }),
              (x.disable = function () {
                x.isEnabled &&
                  (Dt.filter(function (e) {
                    return e !== x && Pe(e.target);
                  }).length || Se(M ? k : a, "scroll", Fe),
                  x.isPressed &&
                    (x._vx.reset(), x._vy.reset(), Se(c ? a : k, ke[1], g, !0)),
                  Se(M ? k : a, "scroll", ge, p),
                  Se(a, "wheel", ve, p),
                  Se(a, ke[0], L, p),
                  Se(k, ke[2], O),
                  Se(k, ke[3], O),
                  Se(a, "click", ce, !0),
                  Se(a, "click", _e),
                  Se(k, "gesturestart", fe),
                  Se(k, "gestureend", me),
                  Se(a, yt + "enter", be),
                  Se(a, yt + "leave", we),
                  Se(a, yt + "move", ye),
                  (x.isEnabled = x.isPressed = x.isDragging = !1),
                  ae) &&
                  ae(x);
              }),
              (x.kill = x.revert =
                function () {
                  x.disable();
                  var e = Dt.indexOf(x);
                  0 <= e && Dt.splice(e, 1), wt === x && (wt = 0);
                }),
              Dt.push(x),
              c && Pe(a) && (wt = x),
              x.enable(N);
          }),
          (o = f),
          (l = [
            {
              key: "velocityX",
              get: function () {
                return this._vx.getVelocity();
              },
            },
            {
              key: "velocityY",
              get: function () {
                return this._vy.getVelocity();
              },
            },
          ]) && t(o.prototype, l),
          d && t(o, d),
          f);
      function f(e) {
        this.init(e);
      }
      function Et(e, t, i) {
        var s = tt(e) && ("clamp(" === e.substr(0, 6) || -1 < e.indexOf("max"));
        return (i["_" + t + "Clamp"] = s) ? e.substr(6, e.length - 7) : e;
      }
      function Ct(e, t) {
        return !t || (tt(e) && "clamp(" === e.substr(0, 6))
          ? e
          : "clamp(" + e + ")";
      }
      function m() {
        return (ti = 1);
      }
      function g() {
        return (ti = 0);
      }
      function Re(e) {
        return e;
      }
      function Tt(e) {
        return Math.round(1e5 * e) / 1e5 || 0;
      }
      function v() {
        return "undefined" != typeof window;
      }
      function y() {
        return We || (v() && (We = window.gsap) && We.registerPlugin && We);
      }
      function St(e) {
        return !!~O.indexOf(e);
      }
      function At(e) {
        return (
          ("Height" === e ? U : $e["inner" + e]) ||
          Ve["client" + e] ||
          Ue["client" + e]
        );
      }
      function Mt(e) {
        return (
          ot(e, "getBoundingClientRect") ||
          (St(e)
            ? function () {
                return (Di.width = $e.innerWidth), (Di.height = U), Di;
              }
            : function () {
                return Ut(e);
              })
        );
      }
      function Ye(e, t) {
        t.s;
        var i,
          s = t.d2,
          n = t.d,
          t = t.a;
        return Math.max(
          0,
          (i = "scroll" + s) && (t = ot(e, i))
            ? t() - Mt(e)()[n]
            : St(e)
            ? (Ve[i] || Ue[i]) - At(s)
            : e[i] - e["offset" + s]
        );
      }
      function b(e, t) {
        for (var i = 0; i < Y.length; i += 3)
          (t && !~t.indexOf(Y[i + 1])) || e(Y[i], Y[i + 1], Y[i + 2]);
      }
      function Xe(e) {
        return "function" == typeof e;
      }
      function kt(e) {
        return "number" == typeof e;
      }
      function Pt(e) {
        return "object" == typeof e;
      }
      function Ft(e, t, i) {
        e && e.progress(t ? 0 : 1) && i && e.pause();
      }
      function Lt(e, t) {
        var i;
        e.enabled &&
          (i = e._ctx
            ? e._ctx.add(function () {
                return t(e);
              })
            : t(e)) &&
          i.totalTime &&
          (e.callbackAnimation = i);
      }
      function je(e) {
        return $e.getComputedStyle(e);
      }
      function Ot(e, t) {
        for (var i in t) i in e || (e[i] = t[i]);
        return e;
      }
      function zt(e, t) {
        t = t.d2;
        return e["offset" + t] || e["client" + t] || 0;
      }
      function It(e) {
        var t,
          i = [],
          s = e.labels,
          n = e.duration();
        for (t in s) i.push(s[t] / n);
        return i;
      }
      function Bt(n) {
        var r = We.utils.snap(n),
          a =
            Array.isArray(n) &&
            n.slice(0).sort(function (e, t) {
              return e - t;
            });
        return a
          ? function (e, t, i) {
              var s;
              if ((void 0 === i && (i = 0.001), !t)) return r(e);
              if (0 < t) {
                for (e -= i, s = 0; s < a.length; s++)
                  if (a[s] >= e) return a[s];
                return a[s - 1];
              }
              for (s = a.length, e += i; s--; ) if (a[s] <= e) return a[s];
              return a[0];
            }
          : function (e, t, i) {
              void 0 === i && (i = 0.001);
              var s = r(e);
              return !t || Math.abs(s - e) < i || s - e < 0 == t < 0
                ? s
                : r(t < 0 ? e - n : e + n);
            };
      }
      function w(t, i, e, s) {
        e.split(",").forEach(function (e) {
          return t(i, e, s);
        });
      }
      function He(e, t, i, s, n) {
        return e.addEventListener(t, i, { passive: !s, capture: !!n });
      }
      function qe(e, t, i, s) {
        return e.removeEventListener(t, i, !!s);
      }
      function _(e, t, i) {
        (i = i && i.wheelHandler) && (e(t, "wheel", i), e(t, "touchmove", i));
      }
      function Nt(e, t) {
        var i, s;
        return (
          tt(e) &&
            ((s = ~(i = e.indexOf("="))
              ? (e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1))
              : 0),
            ~i &&
              (e.indexOf("%") > i && (s *= t / 100), (e = e.substr(0, i - 1))),
            (e =
              s +
              (e in ee
                ? ee[e] * t
                : ~e.indexOf("%")
                ? (parseFloat(e) * t) / 100
                : parseFloat(e) || 0))),
          e
        );
      }
      function Rt(e, t, i, s, n, r, a, o) {
        var l = n.startColor,
          d = n.endColor,
          u = n.fontSize,
          c = n.indent,
          n = n.fontWeight,
          h = Ge.createElement("div"),
          p = St(i) || "fixed" === ot(i, "pinType"),
          f = -1 !== e.indexOf("scroller"),
          i = p ? Ue : i,
          m = -1 !== e.indexOf("start"),
          l = m ? l : d,
          d =
            "border-color:" +
            l +
            ";font-size:" +
            u +
            ";color:" +
            l +
            ";font-weight:" +
            n +
            ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return (
          (d += "position:" + ((f || o) && p ? "fixed;" : "absolute;")),
          (!f && !o && p) ||
            (d += (s === Ne ? "right" : J) + ":" + (r + parseFloat(c)) + "px;"),
          a &&
            (d +=
              "box-sizing:border-box;text-align:left;width:" +
              a.offsetWidth +
              "px;"),
          (h._isStart = m),
          h.setAttribute(
            "class",
            "gsap-marker-" + e + (t ? " marker-" + t : "")
          ),
          (h.style.cssText = d),
          (h.innerText = t || 0 === t ? e + "-" + t : e),
          i.children[0] ? i.insertBefore(h, i.children[0]) : i.appendChild(h),
          (h._offset = h["offset" + s.op.d2]),
          F(h, 0, s, m),
          h
        );
      }
      function D() {
        return 34 < Je() - et && (Q = Q || requestAnimationFrame(re));
      }
      function Yt() {
        (i && i.isPressed && !(i.startX > Ue.clientWidth)) ||
          (ze.cache++,
          i ? (Q = Q || requestAnimationFrame(re)) : re(),
          et || se("scrollStart"),
          (et = Je()));
      }
      function x() {
        (q = $e.innerWidth), (H = $e.innerHeight);
      }
      function Xt() {
        ze.cache++,
          Ke ||
            X ||
            Ge.fullscreenElement ||
            Ge.webkitFullscreenElement ||
            (j &&
              q === $e.innerWidth &&
              !(Math.abs($e.innerHeight - H) > 0.25 * $e.innerHeight)) ||
            z.restart(!0);
      }
      function jt() {
        return qe(k, "scrollEnd", jt) || Kt(!0);
      }
      function E(e) {
        for (var t = 0; t < s.length; t += 5)
          (!e || (s[t + 4] && s[t + 4].query === e)) &&
            ((s[t].style.cssText = s[t + 1]),
            s[t].getBBox && s[t].setAttribute("transform", s[t + 2] || ""),
            (s[t + 3].uncache = 1));
      }
      function C(e, t) {
        var i;
        for (Qe = 0; Qe < rt.length; Qe++)
          !(i = rt[Qe]) ||
            (t && i._ctx !== t) ||
            (e ? i.kill(1) : i.revert(!0, !0));
        (K = !0), t && E(t), t || se("revert");
      }
      function T(e, t) {
        ze.cache++,
          (!t && Ze) ||
            ze.forEach(function (e) {
              return Xe(e) && e.cacheID++ && (e.rec = 0);
            }),
          tt(e) && ($e.history.scrollRestoration = G = e);
      }
      function S() {
        Ue.appendChild(V),
          (U = (!i && V.offsetHeight) || $e.innerHeight),
          Ue.removeChild(V);
      }
      function A(t) {
        Zt(
          ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
        ).forEach(function (e) {
          return (e.style.display = t ? "none" : "block");
        });
      }
      function Ht(e, t, i, s) {
        if (!e._gsap.swappedIn) {
          for (var n, r = ae.length, a = t.style, o = e.style; r--; )
            a[(n = ae[r])] = i[n];
          (a.position = "absolute" === i.position ? "absolute" : "relative"),
            "inline" === i.display && (a.display = "inline-block"),
            (o[J] = o.right = "auto"),
            (a.flexBasis = i.flexBasis || "auto"),
            (a.overflow = "visible"),
            (a.boxSizing = "border-box"),
            (a[ci] = zt(e, Be) + nt),
            (a[hi] = zt(e, Ne) + nt),
            (a[it] = o[st] = o.top = o.left = "0"),
            Qt(s),
            (o[ci] = o.maxWidth = i[ci]),
            (o[hi] = o.maxHeight = i[hi]),
            (o[it] = i[it]),
            e.parentNode !== t &&
              (e.parentNode.insertBefore(t, e), t.appendChild(e)),
            (e._gsap.swappedIn = !0);
        }
      }
      function qt(e) {
        for (var t = oe.length, i = e.style, s = [], n = 0; n < t; n++)
          s.push(oe[n], i[oe[n]]);
        return (s.t = e), s;
      }
      function Wt(e, t, i, s, n, r, a, o, l, d, u, c, h, p) {
        Xe(e) && (e = e(o)),
          tt(e) &&
            "max" === e.substr(0, 3) &&
            (e = c + ("=" === e.charAt(4) ? Nt("0" + e.substr(3), i) : 0));
        var f,
          m,
          g,
          v,
          y = h ? h.time() : 0;
        return (
          h && h.seek(0),
          kt((e = isNaN(e) ? e : +e))
            ? (h &&
                (e = We.utils.mapRange(
                  h.scrollTrigger.start,
                  h.scrollTrigger.end,
                  0,
                  c,
                  e
                )),
              a && F(a, i, s, !0))
            : (Xe(t) && (t = t(o)),
              (m = (e || "0").split(" ")),
              (g = Oe(t, o) || Ue),
              ((t = Ut(g) || {}) && (t.left || t.top)) ||
                "none" !== je(g).display ||
                ((f = g.style.display),
                (g.style.display = "block"),
                (t = Ut(g)),
                f ? (g.style.display = f) : g.style.removeProperty("display")),
              (f = Nt(m[0], t[s.d])),
              (m = Nt(m[1] || "0", i)),
              (e = t[s.p] - l[s.p] - d + f + n - m),
              a && F(a, m, s, i - m < 20 || (a._isStart && 20 < m)),
              (i -= i - m)),
          p && ((o[p] = e || -0.001), e < 0) && (e = 0),
          r &&
            ((t = r._isStart),
            (v = "scroll" + s.d2),
            F(
              r,
              (d = e + i),
              s,
              (t && 20 < d) ||
                (!t && (u ? Math.max(Ue[v], Ve[v]) : r.parentNode[v]) <= d + 1)
            ),
            u) &&
            ((l = Ut(a)), u) &&
            (r.style[s.op.p] = l[s.op.p] - s.op.m - r._offset + nt),
          h &&
            g &&
            ((v = Ut(g)),
            h.seek(c),
            (f = Ut(g)),
            (h._caScrollDist = v[s.p] - f[s.p]),
            (e = (e / h._caScrollDist) * c)),
          h && h.seek(y),
          h ? e : Math.round(e)
        );
      }
      function $t(e, t, i, s) {
        if (e.parentNode !== t) {
          var n,
            r,
            a = e.style;
          if (t === Ue) {
            for (n in ((e._stOrig = a.cssText), (r = je(e))))
              +n ||
                de.test(n) ||
                !r[n] ||
                "string" != typeof a[n] ||
                "0" === n ||
                (a[n] = r[n]);
            (a.top = i), (a.left = s);
          } else a.cssText = e._stOrig;
          (We.core.getCache(e).uncache = 1), t.appendChild(e);
        }
      }
      function P(i, e, s) {
        var n = e,
          r = n;
        return function (e) {
          var t = Math.round(i());
          return (
            t !== n &&
              t !== r &&
              3 < Math.abs(t - n) &&
              3 < Math.abs(t - r) &&
              ((e = t), s) &&
              s(),
            (r = n),
            (n = e)
          );
        };
      }
      function Gt(e, t, i) {
        var s = {};
        (s[t.p] = "+=" + i), We.set(e, s);
      }
      function Vt(l, e) {
        function d(e, t, i, s, n) {
          var r = d.tween,
            a = t.onComplete,
            o =
              ((i = i || u()),
              P(u, i, function () {
                r.kill(), (d.tween = 0);
              }));
          return (
            (n = (s && n) || 0),
            (s = s || e - i),
            r && r.kill(),
            (t[c] = e),
            (t.inherit = !1),
            ((t.modifiers = {})[c] = function () {
              return o(i + s * r.ratio + n * r.ratio * r.ratio);
            }),
            (t.onUpdate = function () {
              ze.cache++, d.tween && re();
            }),
            (t.onComplete = function () {
              (d.tween = 0), a && a.call(r);
            }),
            (r = d.tween = We.to(l, t))
          );
        }
        var u = lt(l, e),
          c = "_scroll" + e.p2;
        return (
          ((l[c] = u).wheelHandler = function () {
            return d.tween && d.tween.kill() && (d.tween = 0);
          }),
          He(l, "wheel", u.wheelHandler),
          k.isTouch && He(l, "touchmove", u.wheelHandler),
          d
        );
      }
      (M.version = "3.12.5"),
        (M.create = function (e) {
          return new M(e);
        }),
        (M.register = ht),
        (M.getAll = function () {
          return Dt.slice();
        }),
        (M.getById = function (t) {
          return Dt.filter(function (e) {
            return e.vars.id === t;
          })[0];
        }),
        n() && Ae.registerPlugin(M);
      function Ut(e, t) {
        return (
          (t =
            t &&
            "matrix(1, 0, 0, 1, 0, 0)" !== je(e)[B] &&
            We.to(e, {
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              skewX: 0,
              skewY: 0,
            }).progress(1)),
          (e = e.getBoundingClientRect()),
          t && t.progress(0).kill(),
          e
        );
      }
      function F(e, t, i, s) {
        var n = { display: "block" },
          r = i[s ? "os2" : "p2"],
          a = i[s ? "p2" : "os2"];
        (e._isFlipped = s),
          (n[i.a + "Percent"] = s ? -100 : 0),
          (n[i.a] = s ? "1px" : 0),
          (n["border" + r + gi] = 1),
          (n["border" + a + gi] = 0),
          (n[i.p] = t + "px"),
          We.set(e, n);
      }
      function Kt(e, t) {
        !et || e || K
          ? (S(),
            (Ze = k.isRefreshing = !0),
            ze.forEach(function (e) {
              return Xe(e) && ++e.cacheID && (e.rec = e());
            }),
            (e = se("refreshInit")),
            ii && k.sort(),
            t || C(),
            ze.forEach(function (e) {
              Xe(e) &&
                (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
            }),
            rt.slice(0).forEach(function (e) {
              return e.refresh();
            }),
            (K = !1),
            rt.forEach(function (e) {
              var t, i;
              e._subPinOffset &&
                e.pin &&
                ((t = e.vars.horizontal ? "offsetWidth" : "offsetHeight"),
                (i = e.pin[t]),
                e.revert(!0, 1),
                e.adjustPinSpacing(e.pin[t] - i),
                e.refresh());
            }),
            (ni = 1),
            A(!0),
            rt.forEach(function (e) {
              var t = Ye(e.scroller, e._dir),
                i = "max" === e.vars.end || (e._endClamp && e.end > t),
                s = e._startClamp && e.start >= t;
              (i || s) &&
                e.setPositions(
                  s ? t - 1 : e.start,
                  i ? Math.max(s ? t : e.start + 1, t) : e.end,
                  !0
                );
            }),
            A(!1),
            (ni = 0),
            e.forEach(function (e) {
              return e && e.render && e.render(-1);
            }),
            ze.forEach(function (e) {
              Xe(e) &&
                (e.smooth &&
                  requestAnimationFrame(function () {
                    return (e.target.style.scrollBehavior = "smooth");
                  }),
                e.rec) &&
                e(e.rec);
            }),
            T(G, 1),
            z.pause(),
            wi++,
            re((Ze = 2)),
            rt.forEach(function (e) {
              return Xe(e.vars.onRefresh) && e.vars.onRefresh(e);
            }),
            (Ze = k.isRefreshing = !1),
            se("refresh"))
          : He(k, "scrollEnd", jt);
      }
      function Qt(e) {
        if (e) {
          var t,
            i,
            s = e.t.style,
            n = e.length,
            r = 0;
          for ((e.t._gsap || We.core.getCache(e.t)).uncache = 1; r < n; r += 2)
            (i = e[r + 1]),
              (t = e[r]),
              i
                ? (s[t] = i)
                : s[t] && s.removeProperty(t.replace(le, "-$1").toLowerCase());
        }
      }
      var We,
        L,
        $e,
        Ge,
        Ve,
        Ue,
        O,
        z,
        Zt,
        Jt,
        ei,
        I,
        Ke,
        ti,
        B,
        Qe,
        N,
        R,
        Y,
        ii,
        si,
        X,
        i,
        j,
        H,
        q,
        W,
        $,
        G,
        V,
        U,
        K,
        ni,
        ri,
        Q,
        Ze,
        ai,
        oi,
        li = 1,
        Je = Date.now,
        Z = Je(),
        et = 0,
        di = 0,
        tt = function (e) {
          return "string" == typeof e;
        },
        ui = Math.abs,
        J = "bottom",
        ci = "width",
        hi = "height",
        pi = "Right",
        fi = "Left",
        mi = "Bottom",
        it = "padding",
        st = "margin",
        gi = "Width",
        nt = "px",
        vi = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal",
        },
        yi = { toggleActions: "play", anticipatePin: 0 },
        ee = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
        rt = [],
        bi = {},
        te = {},
        ie = [],
        se = function (e) {
          return (
            (te[e] &&
              te[e].map(function (e) {
                return e();
              })) ||
            ie
          );
        },
        s = [],
        wi = 0,
        ne = 0,
        _i = 1,
        re = function (e) {
          if (2 === e || (!Ze && !K)) {
            (k.isUpdating = !0), oi && oi.update(0);
            var t = rt.length,
              e = Je(),
              i = 50 <= e - Z,
              s = t && rt[0].scroll();
            if (
              ((_i = s < ne ? -1 : 1),
              Ze || (ne = s),
              i &&
                (et && !ti && 200 < e - et && ((et = 0), se("scrollEnd")),
                (ei = Z),
                (Z = e)),
              _i < 0)
            ) {
              for (Qe = t; 0 < Qe--; ) rt[Qe] && rt[Qe].update(0, i);
              _i = 1;
            } else for (Qe = 0; Qe < t; Qe++) rt[Qe] && rt[Qe].update(0, i);
            k.isUpdating = !1;
          }
          Q = 0;
        },
        ae = [
          "left",
          "top",
          J,
          "right",
          st + mi,
          st + pi,
          st + "Top",
          st + fi,
          "display",
          "flexShrink",
          "float",
          "zIndex",
          "gridColumnStart",
          "gridColumnEnd",
          "gridRowStart",
          "gridRowEnd",
          "gridArea",
          "justifySelf",
          "alignSelf",
          "placeSelf",
          "order",
        ],
        oe = ae.concat([
          ci,
          hi,
          "boxSizing",
          "max" + gi,
          "maxHeight",
          "position",
          st,
          it,
          it + "Top",
          it + pi,
          it + mi,
          it + fi,
        ]),
        le = /([A-Z])/g,
        Di = { left: 0, top: 0 },
        de = /(webkit|moz|length|cssText|inset)/i,
        k =
          ((at.prototype.init = function (D, x) {
            var E,
              s,
              g,
              C,
              U,
              T,
              S,
              K,
              A,
              Q,
              Z,
              J,
              M,
              ee,
              v,
              te,
              ie,
              y,
              k,
              b,
              se,
              w,
              _,
              ne,
              P,
              r,
              h,
              F,
              L,
              re,
              ae,
              p,
              f,
              n,
              oe,
              le,
              de,
              O,
              z,
              I,
              ue,
              ce,
              a,
              he,
              pe,
              m,
              fe,
              B,
              me,
              ge,
              N,
              R,
              Y,
              X,
              j,
              ve,
              ye,
              be,
              we,
              H,
              _e,
              De,
              xe,
              Ee,
              Ce,
              q,
              W,
              $,
              G,
              e,
              V,
              Te,
              o,
              l,
              d,
              u,
              c,
              t,
              Se,
              Ae,
              Me,
              ke,
              i,
              Pe,
              Fe,
              Le;
            (this.progress = this.start = 0),
              this.vars && this.kill(!0, !0),
              di
                ? ((p = (D = Ot(
                    tt(D) || kt(D) || D.nodeType ? { trigger: D } : D,
                    yi
                  )).onUpdate),
                  (f = D.toggleClass),
                  (n = D.id),
                  (oe = D.onToggle),
                  (le = D.onRefresh),
                  (de = D.scrub),
                  (O = D.trigger),
                  (z = D.pin),
                  (I = D.pinSpacing),
                  (ue = D.invalidateOnRefresh),
                  (ce = D.anticipatePin),
                  (a = D.onScrubComplete),
                  (he = D.onSnapComplete),
                  (pe = D.once),
                  (m = D.snap),
                  (fe = D.pinReparent),
                  (t = D.pinSpacer),
                  (B = D.containerAnimation),
                  (me = D.fastScrollEnd),
                  (ge = D.preventOverlaps),
                  (N =
                    D.horizontal ||
                    (D.containerAnimation && !1 !== D.horizontal)
                      ? Be
                      : Ne),
                  (R = !de && 0 !== de),
                  (Y = Oe(D.scroller || $e)),
                  (e = We.core.getCache(Y)),
                  (X = St(Y)),
                  (j =
                    "fixed" ===
                    ("pinType" in D
                      ? D.pinType
                      : ot(Y, "pinType") || (X && "fixed"))),
                  (ve = [D.onEnter, D.onLeave, D.onEnterBack, D.onLeaveBack]),
                  (ye = R && D.toggleActions.split(" ")),
                  (be = ("markers" in D ? D : yi).markers),
                  (we = (!X && parseFloat(je(Y)["border" + N.p2 + gi])) || 0),
                  (H = this),
                  (_e =
                    D.onRefreshInit &&
                    function () {
                      return D.onRefreshInit(H);
                    }),
                  (Me = Y),
                  (ke = X),
                  (Pe = (i = N).d),
                  (Fe = i.d2),
                  (Le = i.a),
                  (De = (Le = ot(Me, "getBoundingClientRect"))
                    ? function () {
                        return Le()[Pe];
                      }
                    : function () {
                        return (ke ? At(Fe) : Me["client" + Fe]) || 0;
                      }),
                  (i = Y),
                  (xe =
                    !X || ~Ie.indexOf(i)
                      ? Mt(i)
                      : function () {
                          return Di;
                        }),
                  (q = Ce = Ee = 0),
                  (W = lt(Y, N)),
                  (H._startClamp = H._endClamp = !1),
                  (H._dir = N),
                  (ce *= 45),
                  (H.scroller = Y),
                  (H.scroll = B ? B.time.bind(B) : W),
                  (C = W()),
                  (H.vars = D),
                  (x = x || D.animation),
                  "refreshPriority" in D &&
                    ((ii = 1), -9999 === D.refreshPriority) &&
                    (oi = H),
                  (e.tweenScroll = e.tweenScroll || {
                    top: Vt(Y, Ne),
                    left: Vt(Y, Be),
                  }),
                  (H.tweenTo = E = e.tweenScroll[N.p]),
                  (H.scrubDuration = function (e) {
                    (r = kt(e) && e)
                      ? P
                        ? P.duration(e)
                        : (P = We.to(x, {
                            ease: "expo",
                            totalProgress: "+=0",
                            inherit: !1,
                            duration: r,
                            paused: !0,
                            onComplete: function () {
                              return a && a(H);
                            },
                          }))
                      : (P && P.progress(1).kill(), (P = 0));
                  }),
                  x &&
                    ((x.vars.lazy = !1),
                    (x._initted && !H.isReverted) ||
                      (!1 !== x.vars.immediateRender &&
                        !1 !== D.immediateRender &&
                        x.duration() &&
                        x.render(0, !0, !0)),
                    (H.animation = x.pause()),
                    (x.scrollTrigger = H).scrubDuration(de),
                    (_ = 0),
                    (n = n || x.vars.id)),
                  m &&
                    ((Pt(m) && !m.push) || (m = { snapTo: m }),
                    "scrollBehavior" in Ue.style &&
                      We.set(X ? [Ue, Ve] : Y, { scrollBehavior: "auto" }),
                    ze.forEach(function (e) {
                      return (
                        Xe(e) &&
                        e.target === (X ? Ge.scrollingElement || Ve : Y) &&
                        (e.smooth = !1)
                      );
                    }),
                    (g = Xe(m.snapTo)
                      ? m.snapTo
                      : "labels" === m.snapTo
                      ? ((Ae = x),
                        function (e) {
                          return We.utils.snap(It(Ae), e);
                        })
                      : "labelsDirectional" === m.snapTo
                      ? ((Se = x),
                        function (e, t) {
                          return Bt(It(Se))(e, t.direction);
                        })
                      : !1 !== m.directional
                      ? function (e, t) {
                          return Bt(m.snapTo)(
                            e,
                            Je() - Ce < 500 ? 0 : t.direction
                          );
                        }
                      : We.utils.snap(m.snapTo)),
                    (h = Pt((h = m.duration || { min: 0.1, max: 2 }))
                      ? Jt(h.min, h.max)
                      : Jt(h, h)),
                    (F = We.delayedCall(m.delay || r / 2 || 0.1, function () {
                      var e,
                        t,
                        i,
                        s,
                        n,
                        r,
                        a,
                        o,
                        l,
                        d = W(),
                        u = Je() - Ce < 500,
                        c = E.tween;
                      !(u || Math.abs(H.getVelocity()) < 10) ||
                      c ||
                      ti ||
                      Ee === d
                        ? H.isActive && Ee !== d && F.restart(!0)
                        : ((i = (d - T) / A),
                          (s = x && !R ? x.totalProgress() : i),
                          (u = (!u && ((s - ne) / (Je() - ei)) * 1e3) || 0),
                          (n = We.utils.clamp(
                            -i,
                            1 - i,
                            (ui(u / 2) * u) / 0.185
                          )),
                          (r = i + (!1 === m.inertia ? 0 : n)),
                          (a = m.onStart),
                          (o = m.onInterrupt),
                          (l = m.onComplete),
                          kt((e = g(r, H))) || (e = r),
                          (t = Math.round(T + e * A)),
                          d <= S &&
                            T <= d &&
                            t !== d &&
                            ((c && !c._initted && c.data <= ui(t - d)) ||
                              (!1 === m.inertia && (n = e - i),
                              E(
                                t,
                                {
                                  duration: h(
                                    ui(
                                      (0.185 * Math.max(ui(r - s), ui(e - s))) /
                                        u /
                                        0.05 || 0
                                    )
                                  ),
                                  ease: m.ease || "power3",
                                  data: ui(t - d),
                                  onInterrupt: function () {
                                    return F.restart(!0) && o && o(H);
                                  },
                                  onComplete: function () {
                                    H.update(),
                                      (Ee = W()),
                                      x &&
                                        (P
                                          ? P.resetTo(
                                              "totalProgress",
                                              e,
                                              x._tTime / x._tDur
                                            )
                                          : x.progress(e)),
                                      (_ = ne =
                                        x && !R
                                          ? x.totalProgress()
                                          : H.progress),
                                      he && he(H),
                                      l && l(H);
                                  },
                                },
                                d,
                                n * A,
                                t - d - n * A
                              ),
                              a && a(H, E.tween))));
                    }).pause())),
                  n && (bi[n] = H),
                  (i =
                    (i =
                      (O = H.trigger = Oe(O || (!0 !== z && z))) &&
                      O._gsap &&
                      O._gsap.stRevert) && i(H)),
                  (z = !0 === z ? O : Oe(z)),
                  tt(f) && (f = { targets: O, className: f }),
                  z &&
                    (!1 !== I &&
                      I !== st &&
                      (I =
                        !(
                          !I &&
                          z.parentNode &&
                          z.parentNode.style &&
                          "flex" === je(z.parentNode).display
                        ) && it),
                    (H.pin = z),
                    (s = We.core.getCache(z)).spacer
                      ? (Q = s.pinState)
                      : (t &&
                          ((t = Oe(t)) &&
                            !t.nodeType &&
                            (t = t.current || t.nativeElement),
                          (s.spacerIsNative = !!t),
                          t) &&
                          (s.spacerState = qt(t)),
                        (s.spacer = M = t || Ge.createElement("div")),
                        M.classList.add("pin-spacer"),
                        n && M.classList.add("pin-spacer-" + n),
                        (s.pinState = Q = qt(z))),
                    !1 !== D.force3D && We.set(z, { force3D: !0 }),
                    (H.spacer = M = s.spacer),
                    (e = je(z)),
                    (y = e[I + N.os2]),
                    (ee = We.getProperty(z)),
                    (v = We.quickSetter(z, N.a, nt)),
                    Ht(z, M, e),
                    (J = qt(z))),
                  be &&
                    ((t = Pt(be) ? Ot(be, vi) : vi),
                    ($ = Rt("scroller-start", n, Y, N, t, 0)),
                    (G = Rt("scroller-end", n, Y, N, t, 0, $)),
                    (e = $["offset" + N.op.d2]),
                    (c = Oe(ot(Y, "content") || Y)),
                    (V = this.markerStart = Rt("start", n, c, N, t, e, 0, B)),
                    (Te = this.markerEnd = Rt("end", n, c, N, t, e, 0, B)),
                    B && (ae = We.quickSetter([V, Te], N.a, nt)),
                    j ||
                      (Ie.length && !0 === ot(Y, "fixedMarkers")) ||
                      ((t = je((c = X ? Ue : Y)).position),
                      (c.style.position =
                        "absolute" === t || "fixed" === t ? t : "relative"),
                      We.set([$, G], { force3D: !0 }),
                      (b = We.quickSetter($, N.a, nt)),
                      (w = We.quickSetter(G, N.a, nt)))),
                  B &&
                    ((o = B.vars.onUpdate),
                    (l = B.vars.onUpdateParams),
                    B.eventCallback("onUpdate", function () {
                      H.update(0, 0, 1), o && o.apply(B, l || []);
                    })),
                  (H.previous = function () {
                    return rt[rt.indexOf(H) - 1];
                  }),
                  (H.next = function () {
                    return rt[rt.indexOf(H) + 1];
                  }),
                  (H.revert = function (e, t) {
                    if (!t) return H.kill(!0);
                    var i,
                      s,
                      n = !1 !== e || !H.enabled,
                      t = Ke;
                    n !== H.isReverted &&
                      (n &&
                        ((L = Math.max(W(), H.scroll.rec || 0)),
                        (q = H.progress),
                        (re = x && x.progress())),
                      V &&
                        [V, Te, $, G].forEach(function (e) {
                          return (e.style.display = n ? "none" : "block");
                        }),
                      n && (Ke = H).update(n),
                      !z ||
                        (fe && H.isActive) ||
                        (n
                          ? ((e = z),
                            (i = M),
                            Qt((s = Q)),
                            (s = e._gsap).spacerIsNative
                              ? Qt(s.spacerState)
                              : e._gsap.swappedIn &&
                                (s = i.parentNode) &&
                                (s.insertBefore(e, i), s.removeChild(i)),
                            (e._gsap.swappedIn = !1))
                          : Ht(z, M, je(z), k)),
                      n || H.update(n),
                      (Ke = t),
                      (H.isReverted = n));
                  }),
                  (H.refresh = function (e, t, i, s) {
                    if ((!Ke && H.enabled) || t)
                      if (z && e && et) He(at, "scrollEnd", jt);
                      else {
                        !Ze && _e && _e(H),
                          (Ke = H),
                          E.tween && !i && (E.tween.kill(), (E.tween = 0)),
                          P && P.pause(),
                          ue && x && x.revert({ kill: !1 }).invalidate(),
                          H.isReverted || H.revert(!0, !0),
                          (H._subPinOffset = !1);
                        var n,
                          r,
                          a,
                          o,
                          l,
                          d,
                          u,
                          c,
                          t = De(),
                          e = xe(),
                          h = B ? B.duration() : Ye(Y, N),
                          p = A <= 0.01,
                          f = 0,
                          m = s || 0,
                          g = (Pt(i) ? i : D).end,
                          v = D.endTrigger || O,
                          y = Pt(i)
                            ? i.start
                            : D.start ||
                              (0 !== D.start && O ? (z ? "0 0" : "0 100%") : 0),
                          b = (H.pinnedContainer =
                            D.pinnedContainer && Oe(D.pinnedContainer, H)),
                          w = (O && Math.max(0, rt.indexOf(H))) || 0,
                          _ = w;
                        for (
                          be &&
                          Pt(i) &&
                          ((u = We.getProperty($, N.p)),
                          (c = We.getProperty(G, N.p)));
                          _--;

                        )
                          (a = rt[_]).end || a.refresh(0, 1) || (Ke = H),
                            !(o = a.pin) ||
                              (o !== O && o !== z && o !== b) ||
                              a.isReverted ||
                              ((l = l || []).unshift(a), a.revert(!0, !0)),
                            a !== rt[_] && (w--, _--);
                        for (
                          y = Et((y = Xe(y) ? y(H) : y), "start", H),
                            T =
                              Wt(
                                y,
                                O,
                                t,
                                N,
                                W(),
                                V,
                                $,
                                H,
                                e,
                                we,
                                j,
                                h,
                                B,
                                H._startClamp && "_startClamp"
                              ) || (z ? -0.001 : 0),
                            Xe(g) && (g = g(H)),
                            tt(g) &&
                              !g.indexOf("+=") &&
                              (~g.indexOf(" ")
                                ? (g = (tt(y) ? y.split(" ")[0] : "") + g)
                                : ((f = Nt(g.substr(2), t)),
                                  (g = tt(y)
                                    ? y
                                    : (B
                                        ? We.utils.mapRange(
                                            0,
                                            B.duration(),
                                            B.scrollTrigger.start,
                                            B.scrollTrigger.end,
                                            T
                                          )
                                        : T) + f),
                                  (v = O))),
                            g = Et(g, "end", H),
                            S =
                              Math.max(
                                T,
                                Wt(
                                  g || (v ? "100% 0" : h),
                                  v,
                                  t,
                                  N,
                                  W() + f,
                                  Te,
                                  G,
                                  H,
                                  e,
                                  we,
                                  j,
                                  h,
                                  B,
                                  H._endClamp && "_endClamp"
                                )
                              ) || -0.001,
                            f = 0,
                            _ = w;
                          _--;

                        )
                          (o = (a = rt[_]).pin) &&
                            a.start - a._pinPush <= T &&
                            !B &&
                            0 < a.end &&
                            ((n =
                              a.end -
                              (H._startClamp ? Math.max(0, a.start) : a.start)),
                            ((o === O && a.start - a._pinPush < T) ||
                              o === b) &&
                              isNaN(y) &&
                              (f += n * (1 - a.progress)),
                            o === z) &&
                            (m += n);
                        if (
                          ((T += f),
                          (S += f),
                          H._startClamp && (H._startClamp += f),
                          H._endClamp &&
                            !Ze &&
                            ((H._endClamp = S || -0.001),
                            (S = Math.min(S, Ye(Y, N)))),
                          (A = S - T || ((T -= 0.01) && 0.001)),
                          p &&
                            (q = We.utils.clamp(
                              0,
                              1,
                              We.utils.normalize(T, S, L)
                            )),
                          (H._pinPush = m),
                          V &&
                            f &&
                            (((n = {})[N.a] = "+=" + f),
                            b && (n[N.p] = "-=" + W()),
                            We.set([V, Te], n)),
                          !z || (ni && H.end >= Ye(Y, N)))
                        ) {
                          if (O && W() && !B)
                            for (r = O.parentNode; r && r !== Ue; )
                              r._pinOffset &&
                                ((T -= r._pinOffset), (S -= r._pinOffset)),
                                (r = r.parentNode);
                        } else
                          (n = je(z)),
                            (i = N === Ne),
                            (g = W()),
                            (te = parseFloat(ee(N.a)) + m),
                            !h &&
                              1 < S &&
                              ((d = {
                                style: (d = (X ? Ge.scrollingElement || Ve : Y)
                                  .style),
                                value: d["overflow" + N.a.toUpperCase()],
                              }),
                              X) &&
                              "scroll" !==
                                je(Ue)["overflow" + N.a.toUpperCase()] &&
                              (d.style["overflow" + N.a.toUpperCase()] =
                                "scroll"),
                            Ht(z, M, n),
                            (J = qt(z)),
                            (r = Ut(z, !0)),
                            (v = j && lt(Y, i ? Be : Ne)()),
                            I
                              ? (((k = [I + N.os2, A + m + nt]).t = M),
                                (_ = I === it ? zt(z, N) + A + m : 0) &&
                                  (k.push(N.d, _ + nt),
                                  "auto" !== M.style.flexBasis) &&
                                  (M.style.flexBasis = _ + nt),
                                Qt(k),
                                b &&
                                  rt.forEach(function (e) {
                                    e.pin === b &&
                                      !1 !== e.vars.pinSpacing &&
                                      (e._subPinOffset = !0);
                                  }),
                                j && W(L))
                              : (_ = zt(z, N)) &&
                                "auto" !== M.style.flexBasis &&
                                (M.style.flexBasis = _ + nt),
                            j &&
                              (((t = {
                                top: r.top + (i ? g - T : v) + nt,
                                left: r.left + (i ? v : g - T) + nt,
                                boxSizing: "border-box",
                                position: "fixed",
                              })[ci] = t.maxWidth =
                                Math.ceil(r.width) + nt),
                              (t[hi] = t.maxHeight = Math.ceil(r.height) + nt),
                              (t[st] =
                                t.marginTop =
                                t[st + pi] =
                                t[st + mi] =
                                t[st + fi] =
                                  "0"),
                              (t[it] = n[it]),
                              (t.paddingTop = n.paddingTop),
                              (t[it + pi] = n[it + pi]),
                              (t[it + mi] = n[it + mi]),
                              (t[it + fi] = n[it + fi]),
                              (Z = (function (e, t, i) {
                                for (
                                  var s, n = [], r = e.length, a = i ? 8 : 0;
                                  a < r;
                                  a += 2
                                )
                                  (s = e[a]),
                                    n.push(s, s in t ? t[s] : e[a + 1]);
                                return (n.t = e.t), n;
                              })(Q, t, fe)),
                              Ze) &&
                              W(0),
                            x
                              ? ((e = x._initted),
                                si(1),
                                x.render(x.duration(), !0, !0),
                                (ie = ee(N.a) - te + A + m),
                                (se = 1 < Math.abs(A - ie)),
                                j && se && Z.splice(Z.length - 2, 2),
                                x.render(0, !0, !0),
                                e || x.invalidate(!0),
                                x.parent || x.totalTime(x.totalTime()),
                                si(0))
                              : (ie = A),
                            d &&
                              (d.value
                                ? (d.style["overflow" + N.a.toUpperCase()] =
                                    d.value)
                                : d.style.removeProperty("overflow-" + N.a));
                        l &&
                          l.forEach(function (e) {
                            return e.revert(!1, !0);
                          }),
                          (H.start = T),
                          (H.end = S),
                          (C = U = Ze ? L : W()),
                          B || Ze || (C < L && W(L), (H.scroll.rec = 0)),
                          H.revert(!1, !0),
                          (Ce = Je()),
                          F && ((Ee = -1), F.restart(!0)),
                          (Ke = 0),
                          x &&
                            R &&
                            (x._initted || re) &&
                            x.progress() !== re &&
                            x.progress(re || 0, !0).render(x.time(), !0, !0),
                          (p || q !== H.progress || B || ue) &&
                            (x &&
                              !R &&
                              x.totalProgress(
                                B && T < -0.001 && !q
                                  ? We.utils.normalize(T, S, 0)
                                  : q,
                                !0
                              ),
                            (H.progress = p || (C - T) / A === q ? 0 : q)),
                          z &&
                            I &&
                            (M._pinOffset = Math.round(H.progress * ie)),
                          P && P.invalidate(),
                          isNaN(u) ||
                            ((u -= We.getProperty($, N.p)),
                            (c -= We.getProperty(G, N.p)),
                            Gt($, N, u),
                            Gt(V, N, u - (s || 0)),
                            Gt(G, N, c),
                            Gt(Te, N, c - (s || 0))),
                          p && !Ze && H.update(),
                          !le || Ze || K || ((K = !0), le(H), (K = !1));
                      }
                  }),
                  (H.getVelocity = function () {
                    return ((W() - U) / (Je() - ei)) * 1e3 || 0;
                  }),
                  (H.endAnimation = function () {
                    Ft(H.callbackAnimation),
                      x &&
                        (P
                          ? P.progress(1)
                          : x.paused()
                          ? R || Ft(x, H.direction < 0, 1)
                          : Ft(x, x.reversed()));
                  }),
                  (H.labelToScroll = function (e) {
                    return (
                      (x &&
                        x.labels &&
                        (T || H.refresh() || T) +
                          (x.labels[e] / x.duration()) * A) ||
                      0
                    );
                  }),
                  (H.getTrailing = function (t) {
                    var e = rt.indexOf(H),
                      e =
                        0 < H.direction
                          ? rt.slice(0, e).reverse()
                          : rt.slice(e + 1);
                    return (
                      tt(t)
                        ? e.filter(function (e) {
                            return e.vars.preventOverlaps === t;
                          })
                        : e
                    ).filter(function (e) {
                      return 0 < H.direction ? e.end <= T : e.start >= S;
                    });
                  }),
                  (H.update = function (e, t, i) {
                    var s, n, r, a, o, l, d, u, c;
                    (!B || i || e) &&
                      ((i = !0 === Ze ? L : H.scroll()),
                      (o =
                        (o = e ? 0 : (i - T) / A) < 0 ? 0 : 1 < o ? 1 : o || 0),
                      (d = H.progress),
                      t &&
                        ((U = C), (C = B ? W() : i), m) &&
                        ((ne = _), (_ = x && !R ? x.totalProgress() : o)),
                      ce &&
                        z &&
                        !Ke &&
                        !li &&
                        et &&
                        (!o && T < i + ((i - U) / (Je() - ei)) * ce
                          ? (o = 1e-4)
                          : 1 === o &&
                            S > i + ((i - U) / (Je() - ei)) * ce &&
                            (o = 0.9999)),
                      o !== d &&
                        H.enabled &&
                        ((u =
                          (t =
                            (s = H.isActive = !!o && o < 1) !=
                            (!!d && d < 1)) || !!o != !!d),
                        (H.direction = d < o ? 1 : -1),
                        (H.progress = o),
                        u &&
                          !Ke &&
                          ((n = o && !d ? 0 : 1 === o ? 1 : 1 === d ? 2 : 3),
                          R) &&
                          ((r =
                            (!t && "none" !== ye[n + 1] && ye[n + 1]) || ye[n]),
                          (a =
                            x &&
                            ("complete" === r || "reset" === r || r in x))),
                        ge &&
                          (t || a) &&
                          (a || de || !x) &&
                          (Xe(ge)
                            ? ge(H)
                            : H.getTrailing(ge).forEach(function (e) {
                                return e.endAnimation();
                              })),
                        R ||
                          (!P || Ke || li
                            ? x && x.totalProgress(o, !(!Ke || (!Ce && !e)))
                            : (P._dp._time - P._start !== P._time &&
                                P.render(P._dp._time - P._start),
                              P.resetTo
                                ? P.resetTo(
                                    "totalProgress",
                                    o,
                                    x._tTime / x._tDur
                                  )
                                : ((P.vars.totalProgress = o),
                                  P.invalidate().restart()))),
                        z &&
                          (e && I && (M.style[I + N.os2] = y),
                          j
                            ? u &&
                              ((d =
                                !e && d < o && i < S + 1 && i + 1 >= Ye(Y, N)),
                              fe &&
                                (e || (!s && !d)
                                  ? $t(z, M)
                                  : ((c = Ut(z, !0)),
                                    (l = i - T),
                                    $t(
                                      z,
                                      Ue,
                                      c.top + (N === Ne ? l : 0) + nt,
                                      c.left + (N === Ne ? 0 : l) + nt
                                    ))),
                              Qt(s || d ? Z : J),
                              (se && o < 1 && s) ||
                                v(te + (1 !== o || d ? 0 : ie)))
                            : v(Tt(te + ie * o))),
                        !m || E.tween || Ke || li || F.restart(!0),
                        f &&
                          (t || (pe && o && (o < 1 || !ri))) &&
                          Zt(f.targets).forEach(function (e) {
                            return e.classList[s || pe ? "add" : "remove"](
                              f.className
                            );
                          }),
                        !p || R || e || p(H),
                        u && !Ke
                          ? (R &&
                              (a &&
                                ("complete" === r
                                  ? x.pause().totalProgress(1)
                                  : "reset" === r
                                  ? x.restart(!0).pause()
                                  : "restart" === r
                                  ? x.restart(!0)
                                  : x[r]()),
                              p) &&
                              p(H),
                            (!t && ri) ||
                              (oe && t && Lt(H, oe),
                              ve[n] && Lt(H, ve[n]),
                              pe && (1 === o ? H.kill(!1, 1) : (ve[n] = 0)),
                              t) ||
                              (ve[(n = 1 === o ? 1 : 3)] && Lt(H, ve[n])),
                            me &&
                              !s &&
                              Math.abs(H.getVelocity()) >
                                (kt(me) ? me : 2500) &&
                              (Ft(H.callbackAnimation),
                              P
                                ? P.progress(1)
                                : Ft(x, "reverse" === r ? 1 : !o, 1)))
                          : R && p && !Ke && p(H)),
                      w &&
                        ((c = B
                          ? (i / B.duration()) * (B._caScrollDist || 0)
                          : i),
                        b(c + ($._isFlipped ? 1 : 0)),
                        w(c)),
                      ae) &&
                      ae((-i / B.duration()) * (B._caScrollDist || 0));
                  }),
                  (H.enable = function (e, t) {
                    H.enabled ||
                      ((H.enabled = !0),
                      He(Y, "resize", Xt),
                      X || He(Y, "scroll", Yt),
                      _e && He(at, "refreshInit", _e),
                      !1 !== e && ((H.progress = q = 0), (C = U = Ee = W())),
                      !1 !== t && H.refresh());
                  }),
                  (H.getTween = function (e) {
                    return e && E ? E.tween : P;
                  }),
                  (H.setPositions = function (e, t, i, s) {
                    var n, r, a;
                    B &&
                      ((n = B.scrollTrigger),
                      (r = B.duration()),
                      (a = n.end - n.start),
                      (e = n.start + (a * e) / r),
                      (t = n.start + (a * t) / r)),
                      H.refresh(
                        !1,
                        !1,
                        {
                          start: Ct(e, i && !!H._startClamp),
                          end: Ct(t, i && !!H._endClamp),
                        },
                        s
                      ),
                      H.update();
                  }),
                  (H.adjustPinSpacing = function (e) {
                    var t;
                    k &&
                      e &&
                      ((t = k.indexOf(N.d) + 1),
                      (k[t] = parseFloat(k[t]) + e + nt),
                      (k[1] = parseFloat(k[1]) + e + nt),
                      Qt(k));
                  }),
                  (H.disable = function (e, t) {
                    if (
                      H.enabled &&
                      (!1 !== e && H.revert(!0, !0),
                      (H.enabled = H.isActive = !1),
                      t || (P && P.pause()),
                      (L = 0),
                      s && (s.uncache = 1),
                      _e && qe(at, "refreshInit", _e),
                      F &&
                        (F.pause(), E.tween) &&
                        E.tween.kill() &&
                        (E.tween = 0),
                      !X)
                    ) {
                      for (var i = rt.length; i--; )
                        if (rt[i].scroller === Y && rt[i] !== H) return;
                      qe(Y, "resize", Xt), X || qe(Y, "scroll", Yt);
                    }
                  }),
                  (H.kill = function (e, t) {
                    H.disable(e, t), P && !t && P.kill(), n && delete bi[n];
                    var i = rt.indexOf(H);
                    0 <= i && rt.splice(i, 1),
                      i === Qe && 0 < _i && Qe--,
                      (i = 0),
                      rt.forEach(function (e) {
                        return e.scroller === H.scroller && (i = 1);
                      }),
                      i || Ze || (H.scroll.rec = 0),
                      x &&
                        ((x.scrollTrigger = null),
                        e && x.revert({ kill: !1 }),
                        t || x.kill()),
                      V &&
                        [V, Te, $, G].forEach(function (e) {
                          return e.parentNode && e.parentNode.removeChild(e);
                        }),
                      oi === H && (oi = 0),
                      z &&
                        (s && (s.uncache = 1),
                        (i = 0),
                        rt.forEach(function (e) {
                          return e.pin === z && i++;
                        }),
                        i || (s.spacer = 0)),
                      D.onKill && D.onKill(H);
                  }),
                  rt.push(H),
                  H.enable(!1, !1),
                  i && i(H),
                  x && x.add && !A
                    ? ((d = H.update),
                      (H.update = function () {
                        (H.update = d), T || S || H.refresh();
                      }),
                      We.delayedCall(0.01, H.update),
                      (A = 0.01),
                      (T = S = 0))
                    : H.refresh(),
                  z &&
                    ai !== wi &&
                    ((u = ai = wi),
                    requestAnimationFrame(function () {
                      return u === wi && Kt(!0);
                    })))
                : (this.update = this.refresh = this.kill = Re);
          }),
          (at.register = function (e) {
            return (
              L ||
                ((We = e || y()),
                v() && window.document && at.enable(),
                (L = di)),
              L
            );
          }),
          (at.defaults = function (e) {
            if (e) for (var t in e) yi[t] = e[t];
            return yi;
          }),
          (at.disable = function (t, i) {
            (di = 0),
              rt.forEach(function (e) {
                return e[i ? "kill" : "disable"](t);
              }),
              qe($e, "wheel", Yt),
              qe(Ge, "scroll", Yt),
              clearInterval(I),
              qe(Ge, "touchcancel", Re),
              qe(Ue, "touchstart", Re),
              w(qe, Ge, "pointerdown,touchstart,mousedown", m),
              w(qe, Ge, "pointerup,touchend,mouseup", g),
              z.kill(),
              b(qe);
            for (var e = 0; e < ze.length; e += 3)
              _(qe, ze[e], ze[e + 1]), _(qe, ze[e], ze[e + 2]);
          }),
          (at.enable = function () {
            if (
              (($e = window),
              (Ge = document),
              (Ve = Ge.documentElement),
              (Ue = Ge.body),
              We &&
                ((Zt = We.utils.toArray),
                (Jt = We.utils.clamp),
                ($ = We.core.context || Re),
                (si = We.core.suppressOverwrites || Re),
                (G = $e.history.scrollRestoration || "auto"),
                (ne = $e.pageYOffset),
                We.core.globals("ScrollTrigger", at),
                Ue))
            ) {
              (di = 1),
                ((V = document.createElement("div")).style.height = "100vh"),
                (V.style.position = "absolute"),
                S(),
                (function e() {
                  return di && requestAnimationFrame(e);
                })(),
                M.register(We),
                (at.isTouch = M.isTouch),
                (W =
                  M.isTouch &&
                  /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                (j = 1 === M.isTouch),
                He($e, "wheel", Yt),
                (O = [$e, Ge, Ve, Ue]),
                We.matchMedia
                  ? ((at.matchMedia = function (e) {
                      var t,
                        i = We.matchMedia();
                      for (t in e) i.add(t, e[t]);
                      return i;
                    }),
                    We.addEventListener("matchMediaInit", function () {
                      return C();
                    }),
                    We.addEventListener("matchMediaRevert", function () {
                      return E();
                    }),
                    We.addEventListener("matchMedia", function () {
                      Kt(0, 1), se("matchMedia");
                    }),
                    We.matchMedia("(orientation: portrait)", function () {
                      return x(), x;
                    }))
                  : console.warn("Requires GSAP 3.11.0 or later"),
                x(),
                He(Ge, "scroll", Yt);
              var e,
                t = Ue.style,
                i = t.borderTopStyle,
                s = We.core.Animation.prototype;
              for (
                s.revert ||
                  Object.defineProperty(s, "revert", {
                    value: function () {
                      return this.time(-0.01, !0);
                    },
                  }),
                  t.borderTopStyle = "solid",
                  s = Ut(Ue),
                  Ne.m = Math.round(s.top + Ne.sc()) || 0,
                  Be.m = Math.round(s.left + Be.sc()) || 0,
                  i
                    ? (t.borderTopStyle = i)
                    : t.removeProperty("border-top-style"),
                  I = setInterval(D, 250),
                  We.delayedCall(0.5, function () {
                    return (li = 0);
                  }),
                  He(Ge, "touchcancel", Re),
                  He(Ue, "touchstart", Re),
                  w(He, Ge, "pointerdown,touchstart,mousedown", m),
                  w(He, Ge, "pointerup,touchend,mouseup", g),
                  B = We.utils.checkPrefix("transform"),
                  oe.push(B),
                  L = Je(),
                  z = We.delayedCall(0.2, Kt).pause(),
                  Y = [
                    Ge,
                    "visibilitychange",
                    function () {
                      var e = $e.innerWidth,
                        t = $e.innerHeight;
                      Ge.hidden
                        ? ((N = e), (R = t))
                        : (N === e && R === t) || Xt();
                    },
                    Ge,
                    "DOMContentLoaded",
                    Kt,
                    $e,
                    "load",
                    Kt,
                    $e,
                    "resize",
                    Xt,
                  ],
                  b(He),
                  rt.forEach(function (e) {
                    return e.enable(0, 1);
                  }),
                  e = 0;
                e < ze.length;
                e += 3
              )
                _(qe, ze[e], ze[e + 1]), _(qe, ze[e], ze[e + 2]);
            }
          }),
          (at.config = function (e) {
            "limitCallbacks" in e && (ri = !!e.limitCallbacks);
            var t = e.syncInterval;
            (t && clearInterval(I)) || ((I = t) && setInterval(D, t)),
              "ignoreMobileResize" in e &&
                (j = 1 === at.isTouch && e.ignoreMobileResize),
              "autoRefreshEvents" in e &&
                (b(qe),
                b(He, e.autoRefreshEvents || "none"),
                (X = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
          }),
          (at.scrollerProxy = function (e, t) {
            var e = Oe(e),
              i = ze.indexOf(e),
              s = St(e);
            ~i && ze.splice(i, s ? 6 : 2),
              t && (s ? Ie.unshift($e, t, Ue, t, Ve, t) : Ie.unshift(e, t));
          }),
          (at.clearMatchMedia = function (t) {
            rt.forEach(function (e) {
              return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
            });
          }),
          (at.isInViewport = function (e, t, i) {
            (e = (tt(e) ? Oe(e) : e).getBoundingClientRect()),
              (t = e[i ? ci : hi] * t || 0);
            return i
              ? 0 < e.right - t && e.left + t < $e.innerWidth
              : 0 < e.bottom - t && e.top + t < $e.innerHeight;
          }),
          (at.positionInViewport = function (e, t, i) {
            var e = (e = tt(e) ? Oe(e) : e).getBoundingClientRect(),
              s = e[i ? ci : hi],
              s =
                null == t
                  ? s / 2
                  : t in ee
                  ? ee[t] * s
                  : ~t.indexOf("%")
                  ? (parseFloat(t) * s) / 100
                  : parseFloat(t) || 0;
            return i
              ? (e.left + s) / $e.innerWidth
              : (e.top + s) / $e.innerHeight;
          }),
          (at.killAll = function (e) {
            rt.slice(0).forEach(function (e) {
              return "ScrollSmoother" !== e.vars.id && e.kill();
            }),
              !0 !== e &&
                ((e = te.killAll || []),
                (te = {}),
                e.forEach(function (e) {
                  return e();
                }));
          }),
          at);
      function at(e, t) {
        L ||
          at.register(We) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          $(this),
          this.init(e, t);
      }
      function ue(e, t, i, s) {
        return (
          s < t ? e(s) : t < 0 && e(0),
          s < i ? (s - t) / (i - t) : i < 0 ? t / (t - i) : 1
        );
      }
      function ce(e, t) {
        !0 === t
          ? e.style.removeProperty("touch-action")
          : (e.style.touchAction =
              !0 === t
                ? "auto"
                : t
                ? "pan-" + t + (M.isTouch ? " pinch-zoom" : "")
                : "none"),
          e === Ve && ce(Ue, t);
      }
      function he(e) {
        var t,
          i = e.event,
          s = e.target,
          e = e.axis,
          n = (i.changedTouches ? i.changedTouches[0] : i).target,
          r = n._gsap || We.core.getCache(n),
          a = Je();
        if (!r._isScrollT || 2e3 < a - r._isScrollT) {
          for (
            ;
            n &&
            n !== Ue &&
            ((n.scrollHeight <= n.clientHeight &&
              n.scrollWidth <= n.clientWidth) ||
              (!ge[(t = je(n)).overflowY] && !ge[t.overflowX]));

          )
            n = n.parentNode;
          (r._isScroll =
            n &&
            n !== s &&
            !St(n) &&
            (ge[(t = je(n)).overflowY] || ge[t.overflowX])),
            (r._isScrollT = a);
        }
        (!r._isScroll && "x" !== e) ||
          (i.stopPropagation(), (i._gsapAllow = !0));
      }
      function pe(e, t, i, s) {
        return M.create({
          target: e,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: t,
          onWheel: (s = s && he),
          onPress: s,
          onDrag: s,
          onScroll: s,
          onEnable: function () {
            return i && He(Ge, M.eventTypes[0], ye, !1, !0);
          },
          onDisable: function () {
            return qe(Ge, M.eventTypes[0], ye, !0);
          },
        });
      }
      function fe(e) {
        function i() {
          return (d = !1);
        }
        function r() {
          (o = Ye(v, Ne)),
            (A = Jt(W ? 1 : 0, o)),
            f && (S = Jt(0, Ye(v, Be))),
            (l = wi);
        }
        function a() {
          (b._gsap.y = Tt(parseFloat(b._gsap.y) + w.offset) + "px"),
            (b.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(b._gsap.y) +
              ", 0, 1)"),
            (w.offset = w.cacheID = 0);
        }
        function n() {
          r(),
            u.isActive() &&
              u.vars.scrollY > o &&
              (w() > o ? u.progress(1) && w(o) : u.resetTo("scrollY", o));
        }
        ((e = Pt(e) ? e : {}).preventDefault =
          e.isNormalizer =
          e.allowClicks =
            !0),
          e.type || (e.type = "wheel,touch"),
          (e.debounce = !!e.debounce),
          (e.id = e.id || "normalizer");
        var s,
          o,
          l,
          d,
          u,
          c,
          h,
          p,
          f = e.normalizeScrollX,
          t = e.momentum,
          m = e.allowNestedScroll,
          g = e.onRelease,
          v = Oe(e.target) || Ve,
          y = We.core.globals().ScrollSmoother,
          y = y && y.get(),
          b =
            W &&
            ((e.content && Oe(e.content)) ||
              (y && !1 !== e.content && !y.smooth() && y.content())),
          w = lt(v, Ne),
          _ = lt(v, Be),
          D = 1,
          x =
            (M.isTouch && $e.visualViewport
              ? $e.visualViewport.scale * $e.visualViewport.width
              : $e.outerWidth) / $e.innerWidth,
          E = 0,
          C = Xe(t)
            ? function () {
                return t(s);
              }
            : function () {
                return t || 2.8;
              },
          T = pe(v, e.type, !0, m),
          S = Re,
          A = Re;
        return (
          b && We.set(b, { y: "+=0" }),
          (e.ignoreCheck = function (e) {
            return (
              (W &&
                "touchmove" === e.type &&
                (d
                  ? (requestAnimationFrame(i),
                    (t = Tt(s.deltaY / 2)),
                    (t = A(w.v - t)),
                    b &&
                      t !== w.v + w.offset &&
                      ((w.offset = t - w.v),
                      (t = Tt((parseFloat(b && b._gsap.y) || 0) - w.offset)),
                      (b.style.transform =
                        "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                        t +
                        ", 0, 1)"),
                      (b._gsap.y = t + "px"),
                      (w.cacheID = ze.cache),
                      re()),
                    !0)
                  : (w.offset && a(), void (d = !0)))) ||
              (1.05 < D && "touchstart" !== e.type) ||
              s.isGesturing ||
              (e.touches && 1 < e.touches.length)
            );
            var t;
          }),
          (e.onPress = function () {
            d = !1;
            var e = D;
            (D = Tt((($e.visualViewport && $e.visualViewport.scale) || 1) / x)),
              u.pause(),
              e !== D && ce(v, 1.01 < D || (!f && "x")),
              (c = _()),
              (h = w()),
              r(),
              (l = wi);
          }),
          (e.onRelease = e.onGestureStart =
            function (e, t) {
              var i, s;
              w.offset && a(),
                t
                  ? (ze.cache++,
                    (t = C()),
                    f &&
                      ((s = (i = _()) + (0.05 * t * -e.velocityX) / 0.227),
                      (t *= ue(_, i, s, Ye(v, Be))),
                      (u.vars.scrollX = S(s))),
                    (s = (i = w()) + (0.05 * t * -e.velocityY) / 0.227),
                    (t *= ue(w, i, s, Ye(v, Ne))),
                    (u.vars.scrollY = A(s)),
                    u.invalidate().duration(t).play(0.01),
                    ((W && u.vars.scrollY >= o) || o - 1 <= i) &&
                      We.to({}, { onUpdate: n, duration: t }))
                  : p.restart(!0),
                g && g(e);
            }),
          (e.onWheel = function () {
            u._ts && u.pause(), 1e3 < Je() - E && ((l = 0), (E = Je()));
          }),
          (e.onChange = function (e, t, i, s, n) {
            wi !== l && r(),
              t &&
                f &&
                _(S(s[2] === t ? c + (e.startX - e.x) : _() + t - s[1])),
              i &&
                (w.offset && a(),
                (e = (s = n[2] === i) ? h + e.startY - e.y : w() + i - n[1]),
                (n = A(e)),
                s && e !== n && (h += n - e),
                w(n)),
              (i || t) && re();
          }),
          (e.onEnable = function () {
            ce(v, !f && "x"),
              k.addEventListener("refresh", n),
              He($e, "resize", n),
              w.smooth &&
                ((w.target.style.scrollBehavior = "auto"),
                (w.smooth = _.smooth = !1)),
              T.enable();
          }),
          (e.onDisable = function () {
            ce(v, !0),
              qe($e, "resize", n),
              k.removeEventListener("refresh", n),
              T.kill();
          }),
          (e.lockAxis = !1 !== e.lockAxis),
          ((s = new M(e)).iOS = W) && !w() && w(1),
          W && We.ticker.add(Re),
          (p = s._dc),
          (u = We.to(s, {
            ease: "power4",
            paused: !0,
            inherit: !1,
            scrollX: f ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: P(w, w(), function () {
                return u.pause();
              }),
            },
            onUpdate: re,
            onComplete: p.vars.onComplete,
          })),
          s
        );
      }
      (k.version = "3.12.5"),
        (k.saveStyles = function (e) {
          return e
            ? Zt(e).forEach(function (e) {
                var t;
                e &&
                  e.style &&
                  (0 <= (t = s.indexOf(e)) && s.splice(t, 5),
                  s.push(
                    e,
                    e.style.cssText,
                    e.getBBox && e.getAttribute("transform"),
                    We.core.getCache(e),
                    $()
                  ));
              })
            : s;
        }),
        (k.revert = function (e, t) {
          return C(!e, t);
        }),
        (k.create = function (e, t) {
          return new k(e, t);
        }),
        (k.refresh = function (e) {
          return e ? Xt() : (L || k.register()) && Kt(!0);
        }),
        (k.update = function (e) {
          return ++ze.cache && re(!0 === e ? 2 : 0);
        }),
        (k.clearScrollMemory = T),
        (k.maxScroll = function (e, t) {
          return Ye(e, t ? Be : Ne);
        }),
        (k.getScrollFunc = function (e, t) {
          return lt(Oe(e), t ? Be : Ne);
        }),
        (k.getById = function (e) {
          return bi[e];
        }),
        (k.getAll = function () {
          return rt.filter(function (e) {
            return "ScrollSmoother" !== e.vars.id;
          });
        }),
        (k.isScrolling = function () {
          return !!et;
        }),
        (k.snapDirectional = Bt),
        (k.addEventListener = function (e, t) {
          e = te[e] || (te[e] = []);
          ~e.indexOf(t) || e.push(t);
        }),
        (k.removeEventListener = function (e, t) {
          (e = te[e]), (t = e && e.indexOf(t));
          0 <= t && e.splice(t, 1);
        }),
        (k.batch = function (e, t) {
          var i,
            s = [],
            n = {},
            r = t.interval || 0.016,
            a = t.batchMax || 1e9;
          for (i in t)
            n[i] =
              "on" === i.substr(0, 2) && Xe(t[i]) && "onRefreshInit" !== i
                ? (function (e) {
                    var t = [],
                      i = [],
                      s = We.delayedCall(r, function () {
                        e(t, i), (t = []), (i = []);
                      }).pause();
                    return function (e) {
                      t.length || s.restart(!0),
                        t.push(e.trigger),
                        i.push(e),
                        a <= t.length && s.progress(1);
                    };
                  })(t[i])
                : t[i];
          return (
            Xe(a) &&
              ((a = a()),
              He(k, "refresh", function () {
                return (a = t.batchMax());
              })),
            Zt(e).forEach(function (e) {
              var t = {};
              for (i in n) t[i] = n[i];
              (t.trigger = e), s.push(k.create(t));
            }),
            s
          );
        });
      var me,
        ge = { auto: 1, scroll: 1 },
        ve = /(input|label|select|textarea)/i,
        ye = function (e) {
          var t = ve.test(e.target.tagName);
          (t || me) && ((e._gsapAllow = !0), (me = t));
        };
      (k.sort = function (e) {
        return rt.sort(
          e ||
            function (e, t) {
              return (
                -1e6 * (e.vars.refreshPriority || 0) +
                e.start -
                (t.start + -1e6 * (t.vars.refreshPriority || 0))
              );
            }
        );
      }),
        (k.observe = function (e) {
          return new M(e);
        }),
        (k.normalizeScroll = function (e) {
          var t;
          return void 0 === e
            ? i
            : !0 === e && i
            ? i.enable()
            : !1 !== e
            ? ((t = e instanceof M ? e : fe(e)),
              i && i.target === t.target && i.kill(),
              St(t.target) && (i = t),
              t)
            : (i && i.kill(), void (i = e));
        }),
        (k.core = {
          _getVelocityProp: Le,
          _inputObserver: pe,
          _scrollers: ze,
          _proxies: Ie,
          bridge: {
            ss: function () {
              et || se("scrollStart"), (et = Je());
            },
            ref: function () {
              return Ke;
            },
          },
        }),
        y() && We.registerPlugin(k),
        (e.ScrollTrigger = k),
        (e.default = k),
        "undefined" == typeof window || window !== e
          ? Object.defineProperty(e, "__esModule", { value: !0 })
          : delete e.default;
    }),
    !(function (e, t) {
      "object" == typeof exports && "undefined" != typeof module
        ? t(exports)
        : "function" == typeof define && define.amd
        ? define(["exports"], t)
        : t(((e = e || self).window = e.window || {}));
    })(this, function (e) {
      "use strict";
      var A =
        /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
      function X(e) {
        return i.getComputedStyle(e);
      }
      function j(e, t) {
        var i;
        return n(e)
          ? e
          : "string" == (i = typeof e) && !t && e
          ? r.call(V.querySelectorAll(e), 0)
          : e && "object" == i && "length" in e
          ? r.call(e, 0)
          : e
          ? [e]
          : [];
      }
      function H(e) {
        return "absolute" === e.position || !0 === e.absolute;
      }
      function M(e, t) {
        for (var i, s = t.length; -1 < --s; )
          if (((i = t[s]), e.substr(0, i.length) === i)) return i.length;
      }
      function l(e, t) {
        var i = ~(e = void 0 === e ? "" : e).indexOf("++"),
          s = 1;
        return (
          i && (e = e.split("++").join("")),
          function () {
            return (
              "<" +
              t +
              " style='position:relative;display:inline-block;'" +
              (e ? " class='" + e + (i ? s++ : "") + "'>" : ">")
            );
          }
        );
      }
      function q(e, t, i) {
        var s = e.nodeType;
        if (1 === s || 9 === s || 11 === s)
          for (e = e.firstChild; e; e = e.nextSibling) q(e, t, i);
        else
          (3 !== s && 4 !== s) || (e.nodeValue = e.nodeValue.split(t).join(i));
      }
      function W(e, t) {
        for (var i = t.length; -1 < --i; ) e.push(t[i]);
      }
      function $(e, t, i) {
        for (var s; e && e !== t; ) {
          if ((s = e._next || e.nextSibling))
            return s.textContent.charAt(0) === i;
          e = e.parentNode || e._parent;
        }
      }
      function G(e, t) {
        return parseFloat(t[e]) || 0;
      }
      function d(e, t, i, s, n, r, a) {
        var o,
          l,
          d,
          u,
          c,
          h,
          p,
          f,
          m,
          g,
          v,
          y,
          b = X(e),
          w = G("paddingLeft", b),
          _ = -999,
          D = G("borderBottomWidth", b) + G("borderTopWidth", b),
          I = G("borderLeftWidth", b) + G("borderRightWidth", b),
          B = G("paddingTop", b) + G("paddingBottom", b),
          N = G("paddingLeft", b) + G("paddingRight", b),
          R = G("fontSize", b) * (t.lineThreshold || 0.2),
          Y = b.textAlign,
          x = [],
          E = [],
          C = [],
          T = t.wordDelimiter || " ",
          S = t.tag || (t.span ? "span" : "div"),
          A = t.type || t.split || "chars,words,lines",
          M = n && ~A.indexOf("lines") ? [] : null,
          k = ~A.indexOf("words"),
          P = ~A.indexOf("chars"),
          F = H(t),
          L = t.linesClass,
          O = ~(L || "").indexOf("++"),
          z = [],
          A = "flex" === b.display,
          t = e.style.display;
        for (
          O && (L = L.split("++").join("")),
            A && (e.style.display = "block"),
            d = (l = e.getElementsByTagName("*")).length,
            c = [],
            o = 0;
          o < d;
          o++
        )
          c[o] = l[o];
        if (M || F)
          for (o = 0; o < d; o++)
            ((h = (u = c[o]).parentNode === e) || F || (P && !k)) &&
              ((y = u.offsetTop),
              M &&
                h &&
                Math.abs(y - _) > R &&
                ("BR" !== u.nodeName || 0 === o) &&
                (M.push((p = [])), (_ = y)),
              F &&
                ((u._x = u.offsetLeft),
                (u._y = y),
                (u._w = u.offsetWidth),
                (u._h = u.offsetHeight)),
              M) &&
              (((u._isSplit && h) ||
                (!P && h) ||
                (k && h) ||
                (!k &&
                  u.parentNode.parentNode === e &&
                  !u.parentNode._isSplit)) &&
                (p.push(u), (u._x -= w), $(u, e, T)) &&
                (u._wordEnd = !0),
              "BR" === u.nodeName) &&
              ((u.nextSibling && "BR" === u.nextSibling.nodeName) || 0 === o) &&
              M.push([]);
        for (o = 0; o < d; o++)
          if (((h = (u = c[o]).parentNode === e), "BR" !== u.nodeName))
            if (
              (F &&
                ((m = u.style),
                k ||
                  h ||
                  ((u._x += u.parentNode._x), (u._y += u.parentNode._y)),
                (m.left = u._x + "px"),
                (m.top = u._y + "px"),
                (m.position = "absolute"),
                (m.display = "block"),
                (m.width = u._w + 1 + "px"),
                (m.height = u._h + "px")),
              !k && P)
            )
              if (u._isSplit)
                for (
                  u._next = l = u.nextSibling, u.parentNode.appendChild(u);
                  l && 3 === l.nodeType && " " === l.textContent;

                )
                  (u._next = l.nextSibling),
                    u.parentNode.appendChild(l),
                    (l = l.nextSibling);
              else
                u.parentNode._isSplit
                  ? ((u._parent = u.parentNode),
                    !u.previousSibling &&
                      u.firstChild &&
                      (u.firstChild._isFirst = !0),
                    u.nextSibling &&
                      " " === u.nextSibling.textContent &&
                      !u.nextSibling.nextSibling &&
                      z.push(u.nextSibling),
                    (u._next =
                      u.nextSibling && u.nextSibling._isFirst
                        ? null
                        : u.nextSibling),
                    u.parentNode.removeChild(u),
                    c.splice(o--, 1),
                    d--)
                  : h ||
                    ((y = !u.nextSibling && $(u.parentNode, e, T)),
                    u.parentNode._parent && u.parentNode._parent.appendChild(u),
                    y && u.parentNode.appendChild(V.createTextNode(" ")),
                    "span" === S && (u.style.display = "inline"),
                    x.push(u));
            else
              u.parentNode._isSplit && !u._isSplit && "" !== u.innerHTML
                ? E.push(u)
                : P &&
                  !u._isSplit &&
                  ("span" === S && (u.style.display = "inline"), x.push(u));
          else
            M || F
              ? (u.parentNode && u.parentNode.removeChild(u),
                c.splice(o--, 1),
                d--)
              : k || e.appendChild(u);
        for (o = z.length; -1 < --o; ) z[o].parentNode.removeChild(z[o]);
        if (M) {
          for (
            F &&
              ((g = V.createElement(S)),
              e.appendChild(g),
              (v = g.offsetWidth + "px"),
              (y = g.offsetParent === e ? 0 : e.offsetLeft),
              e.removeChild(g)),
              m = e.style.cssText,
              e.style.cssText = "display:none;";
            e.firstChild;

          )
            e.removeChild(e.firstChild);
          for (f = " " === T && (!F || (!k && !P)), o = 0; o < M.length; o++) {
            for (
              p = M[o],
                (g = V.createElement(S)).style.cssText =
                  "display:block;text-align:" +
                  Y +
                  ";position:" +
                  (F ? "absolute;" : "relative;"),
                L && (g.className = L + (O ? o + 1 : "")),
                C.push(g),
                d = p.length,
                l = 0;
              l < d;
              l++
            )
              "BR" !== p[l].nodeName &&
                ((u = p[l]),
                g.appendChild(u),
                f && u._wordEnd && g.appendChild(V.createTextNode(" ")),
                F) &&
                (0 === l &&
                  ((g.style.top = u._y + "px"), (g.style.left = w + y + "px")),
                (u.style.top = "0px"),
                y) &&
                (u.style.left = u._x - y + "px");
            0 === d
              ? (g.innerHTML = "&nbsp;")
              : k ||
                P ||
                ((function e(t) {
                  for (
                    var i, s = j(t.childNodes), n = s.length, r = 0;
                    r < n;
                    r++
                  )
                    (i = s[r])._isSplit
                      ? e(i)
                      : r &&
                        i.previousSibling &&
                        3 === i.previousSibling.nodeType
                      ? ((i.previousSibling.nodeValue += (
                          3 === i.nodeType ? i : i.firstChild
                        ).nodeValue),
                        t.removeChild(i))
                      : 3 !== i.nodeType &&
                        (t.insertBefore(i.firstChild, i), t.removeChild(i));
                })(g),
                q(g, String.fromCharCode(160), " ")),
              F && ((g.style.width = v), (g.style.height = u._h + "px")),
              e.appendChild(g);
          }
          e.style.cssText = m;
        }
        F &&
          (a > e.clientHeight &&
            ((e.style.height = a - B + "px"), e.clientHeight < a) &&
            (e.style.height = a + D + "px"),
          r > e.clientWidth) &&
          ((e.style.width = r - N + "px"), e.clientWidth < r) &&
          (e.style.width = r + I + "px"),
          A && (t ? (e.style.display = t) : e.style.removeProperty("display")),
          W(i, x),
          k && W(s, E),
          W(n, C);
      }
      function k(e, t, i, s) {
        var n,
          r,
          a = j(e.childNodes),
          o = a.length,
          l = H(t);
        if (3 !== e.nodeType || 1 < o) {
          for (t.absolute = !1, n = 0; n < o; n++)
            ((r = a[n])._next = r._isFirst = r._parent = r._wordEnd = null),
              (3 === r.nodeType && !/\S+/.test(r.nodeValue)) ||
                (l &&
                  3 !== r.nodeType &&
                  "inline" === X(r).display &&
                  ((r.style.display = "inline-block"),
                  (r.style.position = "relative")),
                (r._isSplit = !0),
                k(r, t, i, s));
          return (t.absolute = l), (e._isSplit = !0);
        }
        var d,
          u,
          c,
          h,
          p,
          f,
          m,
          g = t,
          v = i,
          y = s,
          b = g.tag || (g.span ? "span" : "div"),
          w = ~(g.type || g.split || "chars,words,lines").indexOf("chars"),
          _ = H(g),
          D = g.wordDelimiter || " ",
          x = " " !== D ? "" : _ ? "&#173; " : " ",
          E = "</" + b + ">",
          C = 1,
          T = g.specialChars
            ? "function" == typeof g.specialChars
              ? g.specialChars
              : M
            : null,
          _ = V.createElement("div"),
          S = e.parentNode;
        for (
          S.insertBefore(_, e),
            _.textContent = e.nodeValue,
            S.removeChild(e),
            _ =
              -1 !==
              (d = (function e(t) {
                var i = t.nodeType,
                  s = "";
                if (1 === i || 9 === i || 11 === i) {
                  if ("string" == typeof t.textContent) return t.textContent;
                  for (t = t.firstChild; t; t = t.nextSibling) s += e(t);
                } else if (3 === i || 4 === i) return t.nodeValue;
                return s;
              })((e = _))).indexOf("<"),
            !1 !== g.reduceWhiteSpace && (d = d.replace(F, " ").replace(P, "")),
            p = (d = _ ? d.split("<").join("{{LT}}") : d).length,
            u = (" " === d.charAt(0) ? x : "") + v(),
            c = 0;
          c < p;
          c++
        )
          if (((f = d.charAt(c)), T && (m = T(d.substr(c), g.specialChars))))
            (f = d.substr(c, m || 1)),
              (u += w && " " !== f ? y() + f + "</" + b + ">" : f),
              (c += m - 1);
          else if (f === D && d.charAt(c - 1) !== D && c) {
            for (u += C ? E : "", C = 0; d.charAt(c + 1) === D; ) (u += x), c++;
            c === p - 1
              ? (u += x)
              : ")" !== d.charAt(c + 1) && ((u += x + v()), (C = 1));
          } else
            "{" === f && "{{LT}}" === d.substr(c, 6)
              ? ((u += w ? y() + "{{LT}}</" + b + ">" : "{{LT}}"), (c += 5))
              : (55296 <= f.charCodeAt(0) && f.charCodeAt(0) <= 56319) ||
                (65024 <= d.charCodeAt(c + 1) && d.charCodeAt(c + 1) <= 65039)
              ? ((h = ((d.substr(c, 12).split(A) || [])[1] || "").length || 2),
                (u +=
                  w && " " !== f
                    ? y() + d.substr(c, h) + "</" + b + ">"
                    : d.substr(c, h)),
                (c += h - 1))
              : (u += w && " " !== f ? y() + f + "</" + b + ">" : f);
        (e.outerHTML = u + (C ? E : "")), _ && q(S, "{{LT}}", "<");
      }
      var V,
        i,
        s,
        P = /(?:\r|\n|\t\t)/g,
        F = /(?:\s\s+)/g,
        n = Array.isArray,
        r = [].slice,
        t =
          (((t = a.prototype).split = function (e) {
            this.isSplit && this.revert(),
              (this.vars = e = e || this.vars),
              (this._originals.length =
                this.chars.length =
                this.words.length =
                this.lines.length =
                  0);
            for (
              var t,
                i,
                s,
                n = this.elements.length,
                r = e.tag || (e.span ? "span" : "div"),
                a = l(e.wordsClass, r),
                o = l(e.charsClass, r);
              -1 < --n;

            )
              (s = this.elements[n]),
                (this._originals[n] = s.innerHTML),
                (t = s.clientHeight),
                (i = s.clientWidth),
                k(s, e, a, o),
                d(s, e, this.chars, this.words, this.lines, i, t);
            return (
              this.chars.reverse(),
              this.words.reverse(),
              this.lines.reverse(),
              (this.isSplit = !0),
              this
            );
          }),
          (t.revert = function () {
            var i = this._originals;
            if (i)
              return (
                this.elements.forEach(function (e, t) {
                  return (e.innerHTML = i[t]);
                }),
                (this.chars = []),
                (this.words = []),
                (this.lines = []),
                (this.isSplit = !1),
                this
              );
            throw "revert() call wasn't scoped properly.";
          }),
          (a.create = function (e, t) {
            return new a(e, t);
          }),
          a);
      function a(e, t) {
        s || ((V = document), (i = window), (s = 1)),
          (this.elements = j(e)),
          (this.chars = []),
          (this.words = []),
          (this.lines = []),
          (this._originals = []),
          (this.vars = t || {}),
          this.split(t);
      }
      (t.version = "3.11.2"),
        (e.SplitText = t),
        (e.default = t),
        "undefined" == typeof window || window !== e
          ? Object.defineProperty(e, "__esModule", { value: !0 })
          : delete e.default;
    }),
    (function () {
      "use strict";
      function s(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function n(t, i) {
        void 0 === t && (t = {}),
          void 0 === i && (i = {}),
          Object.keys(i).forEach((e) => {
            void 0 === t[e]
              ? (t[e] = i[e])
              : s(i[e]) &&
                s(t[e]) &&
                0 < Object.keys(i[e]).length &&
                n(t[e], i[e]);
          });
      }
      const t = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function M() {
        var e = "undefined" != typeof document ? document : {};
        return n(e, t), e;
      }
      const b = {
        document: t,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function A() {
        var e = "undefined" != typeof window ? window : {};
        return n(e, b), e;
      }
      function E(e) {
        return (e = void 0 === e ? "" : e)
          .trim()
          .split(" ")
          .filter((e) => !!e.trim());
      }
      function C(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function v() {
        return Date.now();
      }
      function k(e, t) {
        void 0 === t && (t = "x");
        var i = A();
        let s, n, r;
        e = (function (e) {
          var t = A();
          let i;
          return (i =
            (i =
              !(i = t.getComputedStyle ? t.getComputedStyle(e, null) : i) &&
              e.currentStyle
                ? e.currentStyle
                : i) || e.style);
        })(e);
        return (
          i.WebKitCSSMatrix
            ? (6 < (n = e.transform || e.webkitTransform).split(",").length &&
                (n = n
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (r = new i.WebKitCSSMatrix("none" === n ? "" : n)))
            : ((r =
                e.MozTransform ||
                e.OTransform ||
                e.MsTransform ||
                e.msTransform ||
                e.transform ||
                e
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,")),
              (s = r.toString().split(","))),
          "x" === t &&
            (n = i.WebKitCSSMatrix
              ? r.m41
              : 16 === s.length
              ? parseFloat(s[12])
              : parseFloat(s[4])),
          (n =
            "y" === t
              ? i.WebKitCSSMatrix
                ? r.m42
                : 16 === s.length
                ? parseFloat(s[13])
                : parseFloat(s[5])
              : n) || 0
        );
      }
      function d(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function m(e) {
        const i = Object(arguments.length <= 0 ? void 0 : e),
          t = ["__proto__", "constructor", "prototype"];
        for (let e = 1; e < arguments.length; e += 1) {
          var s = e < 0 || arguments.length <= e ? void 0 : arguments[e];
          if (
            null != s &&
            ((a = s),
            !("undefined" != typeof window && void 0 !== window.HTMLElement
              ? a instanceof HTMLElement
              : a && (1 === a.nodeType || 11 === a.nodeType)))
          ) {
            const a = Object.keys(Object(s)).filter((e) => t.indexOf(e) < 0);
            for (let e = 0, t = a.length; e < t; e += 1) {
              var n = a[e],
                r = Object.getOwnPropertyDescriptor(s, n);
              void 0 !== r &&
                r.enumerable &&
                (d(i[n]) && d(s[n])
                  ? s[n].__swiper__
                    ? (i[n] = s[n])
                    : m(i[n], s[n])
                  : d(i[n]) || !d(s[n]) || ((i[n] = {}), s[n].__swiper__)
                  ? (i[n] = s[n])
                  : m(i[n], s[n]));
            }
          }
        }
        var a;
        return i;
      }
      function S(e, t, i) {
        e.style.setProperty(t, i);
      }
      function y(e) {
        let { swiper: i, targetPosition: s, side: n } = e;
        const r = A(),
          a = -i.translate;
        let o,
          l = null;
        const d = i.params.speed,
          u =
            ((i.wrapperEl.style.scrollSnapType = "none"),
            r.cancelAnimationFrame(i.cssModeFrameID),
            s > a ? "next" : "prev"),
          c = (e, t) => ("next" === u && t <= e) || ("prev" === u && e <= t),
          h = () => {
            (o = new Date().getTime()), null === l && (l = o);
            var e = Math.max(Math.min((o - l) / d, 1), 0),
              e = 0.5 - Math.cos(e * Math.PI) / 2;
            let t = a + e * (s - a);
            c(t, s) && (t = s),
              i.wrapperEl.scrollTo({ [n]: t }),
              c(t, s)
                ? ((i.wrapperEl.style.overflow = "hidden"),
                  (i.wrapperEl.style.scrollSnapType = ""),
                  setTimeout(() => {
                    (i.wrapperEl.style.overflow = ""),
                      i.wrapperEl.scrollTo({ [n]: t });
                  }),
                  r.cancelAnimationFrame(i.cssModeFrameID))
                : (i.cssModeFrameID = r.requestAnimationFrame(h));
          };
        h();
      }
      function r(e) {
        return (
          e.querySelector(".swiper-slide-transform") ||
          (e.shadowRoot &&
            e.shadowRoot.querySelector(".swiper-slide-transform")) ||
          e
        );
      }
      function P(e, t) {
        return (
          void 0 === t && (t = ""), [...e.children].filter((e) => e.matches(t))
        );
      }
      function F(e) {
        try {
          console.warn(e);
        } catch (e) {}
      }
      function L(e, t) {
        void 0 === t && (t = []);
        e = document.createElement(e);
        return e.classList.add(...(Array.isArray(t) ? t : E(t))), e;
      }
      function O(e) {
        var t = A(),
          i = M(),
          s = e.getBoundingClientRect(),
          i = i.body,
          n = e.clientTop || i.clientTop || 0,
          i = e.clientLeft || i.clientLeft || 0,
          r = e === t ? t.scrollY : e.scrollTop,
          t = e === t ? t.scrollX : e.scrollLeft;
        return { top: s.top + r - n, left: s.left + t - i };
      }
      function T(e, t) {
        return A().getComputedStyle(e, null).getPropertyValue(t);
      }
      function D(e) {
        let t,
          i = e;
        if (i) {
          for (t = 0; null !== (i = i.previousSibling); )
            1 === i.nodeType && (t += 1);
          return t;
        }
      }
      function z(e, t) {
        var i = [];
        let s = e.parentElement;
        for (; s; ) (t && !s.matches(t)) || i.push(s), (s = s.parentElement);
        return i;
      }
      function g(i, s) {
        s &&
          i.addEventListener("transitionend", function e(t) {
            t.target === i &&
              (s.call(i, t), i.removeEventListener("transitionend", e));
          });
      }
      function I(e, t, i) {
        var s = A();
        return i
          ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
              parseFloat(
                s
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-right" : "margin-top"
                  )
              ) +
              parseFloat(
                s
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-left" : "margin-bottom"
                  )
              )
          : e.offsetWidth;
      }
      let i, w, R;
      function Y() {
        return (i =
          i ||
          ((e = A()),
          {
            smoothScroll:
              (t = M()).documentElement &&
              t.documentElement.style &&
              "scrollBehavior" in t.documentElement.style,
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
          }));
        var e, t;
      }
      const a = (t, e) => {
          if (t && !t.destroyed && t.params) {
            const i = e.closest(
              t.isElement ? "swiper-slide" : "." + t.params.slideClass
            );
            if (i) {
              let e = i.querySelector("." + t.params.lazyPreloaderClass);
              !e &&
                t.isElement &&
                (i.shadowRoot
                  ? (e = i.shadowRoot.querySelector(
                      "." + t.params.lazyPreloaderClass
                    ))
                  : requestAnimationFrame(() => {
                      i.shadowRoot &&
                        (e = i.shadowRoot.querySelector(
                          "." + t.params.lazyPreloaderClass
                        )) &&
                        e.remove();
                    })),
                e && e.remove();
            }
          }
        },
        l = (e, t) => {
          e.slides[t] &&
            (e = e.slides[t].querySelector('[loading="lazy"]')) &&
            e.removeAttribute("loading");
        },
        c = (s) => {
          if (s && !s.destroyed && s.params) {
            let i = s.params.lazyPreloadPrevNext;
            const n = s.slides.length;
            if (n && i && !(i < 0)) {
              i = Math.min(i, n);
              const r =
                  "auto" === s.params.slidesPerView
                    ? s.slidesPerViewDynamic()
                    : Math.ceil(s.params.slidesPerView),
                a = s.activeIndex;
              if (s.params.grid && 1 < s.params.grid.rows) {
                const n = a,
                  o = [n - i];
                o.push(...Array.from({ length: i }).map((e, t) => n + r + t)),
                  void s.slides.forEach((e, t) => {
                    o.includes(e.column) && l(s, t);
                  });
              } else {
                const o = a + r - 1;
                if (s.params.rewind || s.params.loop)
                  for (let t = a - i; t <= o + i; t += 1) {
                    const e = ((t % n) + n) % n;
                    (e < a || e > o) && l(s, e);
                  }
                else
                  for (
                    let e = Math.max(a - i, 0);
                    e <= Math.min(o + i, n - 1);
                    e += 1
                  )
                    e !== a && (e > o || e < a) && l(s, e);
              }
            }
          }
        };
      function X(e) {
        var { swiper: e, runCallbacks: t, direction: i, step: s } = e,
          { activeIndex: n, previousIndex: r } = e;
        let a = i;
        if (
          ((a = a || (r < n ? "next" : n < r ? "prev" : "reset")),
          e.emit("transition" + s),
          t && n !== r)
        ) {
          if ("reset" === a) return e.emit("slideResetTransition" + s);
          e.emit("slideChangeTransition" + s),
            "next" === a
              ? e.emit("slideNextTransition" + s)
              : e.emit("slidePrevTransition" + s);
        }
      }
      function j(e, t, i) {
        var s = A(),
          e = e["params"],
          n = e.edgeSwipeDetection,
          e = e.edgeSwipeThreshold;
        return (
          !n ||
          !(i <= e || i >= s.innerWidth - e) ||
          ("prevent" === n && (t.preventDefault(), !0))
        );
      }
      function H() {
        const e = this,
          { params: t, el: i } = e;
        var s, n, r, a, o;
        (i && 0 === i.offsetWidth) ||
          (t.breakpoints && e.setBreakpoint(),
          ({ allowSlideNext: s, allowSlidePrev: n, snapGrid: r } = e),
          (a = e.virtual && e.params.virtual.enabled),
          (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses(),
          (o = a && t.loop),
          !("auto" === t.slidesPerView || 1 < t.slidesPerView) ||
          !e.isEnd ||
          e.isBeginning ||
          e.params.centeredSlides ||
          o
            ? e.params.loop && !a
              ? e.slideToLoop(e.realIndex, 0, !1, !0)
              : e.slideTo(e.activeIndex, 0, !1, !0)
            : e.slideTo(e.slides.length - 1, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            (clearTimeout(e.autoplay.resizeTimeout),
            (e.autoplay.resizeTimeout = setTimeout(() => {
              e.autoplay &&
                e.autoplay.running &&
                e.autoplay.paused &&
                e.autoplay.resume();
            }, 500))),
          (e.allowSlidePrev = n),
          (e.allowSlideNext = s),
          e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow());
      }
      const q = (e, t) => {
          var i = M(),
            { params: s, el: n, wrapperEl: r, device: a } = e,
            o = !!s.nested,
            l = "on" === t ? "addEventListener" : "removeEventListener";
          i[l]("touchstart", e.onDocumentTouchStart, {
            passive: !1,
            capture: o,
          }),
            n[l]("touchstart", e.onTouchStart, { passive: !1 }),
            n[l]("pointerdown", e.onTouchStart, { passive: !1 }),
            i[l]("touchmove", e.onTouchMove, { passive: !1, capture: o }),
            i[l]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
            i[l]("touchend", e.onTouchEnd, { passive: !0 }),
            i[l]("pointerup", e.onTouchEnd, { passive: !0 }),
            i[l]("pointercancel", e.onTouchEnd, { passive: !0 }),
            i[l]("touchcancel", e.onTouchEnd, { passive: !0 }),
            i[l]("pointerout", e.onTouchEnd, { passive: !0 }),
            i[l]("pointerleave", e.onTouchEnd, { passive: !0 }),
            i[l]("contextmenu", e.onTouchEnd, { passive: !0 }),
            (s.preventClicks || s.preventClicksPropagation) &&
              n[l]("click", e.onClick, !0),
            s.cssMode && r[l]("scroll", e.onScroll),
            s.updateOnWindowResize
              ? e[t](
                  a.ios || a.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  H,
                  !0
                )
              : e[t]("observerUpdate", H, !0),
            n[l]("load", e.onLoad, { capture: !0 });
        },
        W = (e, t) => e.grid && t.grid && 1 < t.grid.rows;
      var $ = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      const o = {
          eventsEmitter: {
            on(e, t, i) {
              const s = this;
              if (s.eventsListeners && !s.destroyed && "function" == typeof t) {
                const n = i ? "unshift" : "push";
                e.split(" ").forEach((e) => {
                  s.eventsListeners[e] || (s.eventsListeners[e] = []),
                    s.eventsListeners[e][n](t);
                });
              }
              return s;
            },
            once(s, n, e) {
              const r = this;
              return !r.eventsListeners || r.destroyed || "function" != typeof n
                ? r
                : ((a.__emitterProxy = n), r.on(s, a, e));
              function a() {
                r.off(s, a), a.__emitterProxy && delete a.__emitterProxy;
                for (
                  var e = arguments.length, t = new Array(e), i = 0;
                  i < e;
                  i++
                )
                  t[i] = arguments[i];
                n.apply(r, t);
              }
            },
            onAny(e, t) {
              return (
                this.eventsListeners &&
                  !this.destroyed &&
                  "function" == typeof e &&
                  ((t = t ? "unshift" : "push"),
                  this.eventsAnyListeners.indexOf(e) < 0) &&
                  this.eventsAnyListeners[t](e),
                this
              );
            },
            offAny(e) {
              return (
                this.eventsListeners &&
                  !this.destroyed &&
                  this.eventsAnyListeners &&
                  0 <= (e = this.eventsAnyListeners.indexOf(e)) &&
                  this.eventsAnyListeners.splice(e, 1),
                this
              );
            },
            off(e, s) {
              const n = this;
              return (
                !n.eventsListeners ||
                  n.destroyed ||
                  (n.eventsListeners &&
                    e.split(" ").forEach((i) => {
                      void 0 === s
                        ? (n.eventsListeners[i] = [])
                        : n.eventsListeners[i] &&
                          n.eventsListeners[i].forEach((e, t) => {
                            (e === s ||
                              (e.__emitterProxy && e.__emitterProxy === s)) &&
                              n.eventsListeners[i].splice(t, 1);
                          });
                    })),
                n
              );
            },
            emit() {
              const n = this;
              if (n.eventsListeners && !n.destroyed && n.eventsListeners) {
                let e, i, s;
                for (
                  var t = arguments.length, r = new Array(t), a = 0;
                  a < t;
                  a++
                )
                  r[a] = arguments[a];
                (s =
                  "string" == typeof r[0] || Array.isArray(r[0])
                    ? ((e = r[0]), (i = r.slice(1, r.length)), n)
                    : ((e = r[0].events), (i = r[0].data), r[0].context || n)),
                  i.unshift(s),
                  (Array.isArray(e) ? e : e.split(" ")).forEach((t) => {
                    n.eventsAnyListeners &&
                      n.eventsAnyListeners.length &&
                      n.eventsAnyListeners.forEach((e) => {
                        e.apply(s, [t, ...i]);
                      }),
                      n.eventsListeners &&
                        n.eventsListeners[t] &&
                        n.eventsListeners[t].forEach((e) => {
                          e.apply(s, i);
                        });
                  });
              }
              return n;
            },
          },
          update: {
            updateSize: function () {
              var e = this;
              let t, i;
              var s = e.el;
              (t =
                void 0 !== e.params.width && null !== e.params.width
                  ? e.params.width
                  : s.clientWidth),
                (i =
                  void 0 !== e.params.height && null !== e.params.height
                    ? e.params.height
                    : s.clientHeight),
                (0 === t && e.isHorizontal()) ||
                  (0 === i && e.isVertical()) ||
                  ((t =
                    t -
                    parseInt(T(s, "padding-left") || 0, 10) -
                    parseInt(T(s, "padding-right") || 0, 10)),
                  (i =
                    i -
                    parseInt(T(s, "padding-top") || 0, 10) -
                    parseInt(T(s, "padding-bottom") || 0, 10)),
                  Number.isNaN(t) && (t = 0),
                  Number.isNaN(i) && (i = 0),
                  Object.assign(e, {
                    width: t,
                    height: i,
                    size: e.isHorizontal() ? t : i,
                  }));
            },
            updateSlides: function () {
              const s = this;
              function n(e, t) {
                return parseFloat(
                  e.getPropertyValue(s.getDirectionLabel(t)) || 0
                );
              }
              const r = s.params,
                {
                  wrapperEl: a,
                  slidesEl: t,
                  size: o,
                  rtlTranslate: l,
                  wrongRTL: d,
                } = s,
                u = s.virtual && r.virtual.enabled,
                e = (u ? s.virtual : s).slides.length,
                c = P(t, `.${s.params.slideClass}, swiper-slide`),
                h = (u ? s.virtual.slides : c).length;
              let p = [];
              const f = [],
                m = [];
              let g = r.slidesOffsetBefore,
                v =
                  ("function" == typeof g && (g = r.slidesOffsetBefore.call(s)),
                  r.slidesOffsetAfter);
              "function" == typeof v && (v = r.slidesOffsetAfter.call(s));
              var y = s.snapGrid.length,
                b = s.slidesGrid.length;
              let w = r.spaceBetween,
                _ = -g,
                D = 0,
                x = 0;
              if (void 0 !== o) {
                "string" == typeof w && 0 <= w.indexOf("%")
                  ? (w = (parseFloat(w.replace("%", "")) / 100) * o)
                  : "string" == typeof w && (w = parseFloat(w)),
                  (s.virtualSize = -w),
                  c.forEach((e) => {
                    l ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
                      (e.style.marginBottom = ""),
                      (e.style.marginTop = "");
                  }),
                  r.centeredSlides &&
                    r.cssMode &&
                    (S(a, "--swiper-centered-offset-before", ""),
                    S(a, "--swiper-centered-offset-after", ""));
                var E = r.grid && 1 < r.grid.rows && s.grid;
                let i;
                E ? s.grid.initSlides(c) : s.grid && s.grid.unsetSlides();
                var C =
                  "auto" === r.slidesPerView &&
                  r.breakpoints &&
                  0 <
                    Object.keys(r.breakpoints).filter(
                      (e) => void 0 !== r.breakpoints[e].slidesPerView
                    ).length;
                for (let t = 0; t < h; t += 1) {
                  let e;
                  if (
                    ((i = 0),
                    c[t] && (e = c[t]),
                    E && s.grid.updateSlide(t, e, c),
                    !c[t] || "none" !== T(e, "display"))
                  ) {
                    if ("auto" === r.slidesPerView) {
                      C && (c[t].style[s.getDirectionLabel("width")] = "");
                      const o = getComputedStyle(e),
                        l = e.style.transform,
                        d = e.style.webkitTransform;
                      if (
                        (l && (e.style.transform = "none"),
                        d && (e.style.webkitTransform = "none"),
                        r.roundLengths)
                      )
                        i = s.isHorizontal()
                          ? I(e, "width", !0)
                          : I(e, "height", !0);
                      else {
                        const s = n(o, "width"),
                          r = n(o, "padding-left"),
                          a = n(o, "padding-right"),
                          l = n(o, "margin-left"),
                          d = n(o, "margin-right"),
                          u = o.getPropertyValue("box-sizing");
                        if (u && "border-box" === u) i = s + l + d;
                        else {
                          const { clientWidth: n, offsetWidth: o } = e;
                          i = s + r + a + l + d + (o - n);
                        }
                      }
                      l && (e.style.transform = l),
                        d && (e.style.webkitTransform = d),
                        r.roundLengths && (i = Math.floor(i));
                    } else
                      (i = (o - (r.slidesPerView - 1) * w) / r.slidesPerView),
                        r.roundLengths && (i = Math.floor(i)),
                        c[t] &&
                          (c[t].style[s.getDirectionLabel("width")] = i + "px");
                    c[t] && (c[t].swiperSlideSize = i),
                      m.push(i),
                      r.centeredSlides
                        ? ((_ = _ + i / 2 + D / 2 + w),
                          0 === D && 0 !== t && (_ = _ - o / 2 - w),
                          0 === t && (_ = _ - o / 2 - w),
                          Math.abs(_) < 0.001 && (_ = 0),
                          r.roundLengths && (_ = Math.floor(_)),
                          x % r.slidesPerGroup == 0 && p.push(_),
                          f.push(_))
                        : (r.roundLengths && (_ = Math.floor(_)),
                          (x - Math.min(s.params.slidesPerGroupSkip, x)) %
                            s.params.slidesPerGroup ==
                            0 && p.push(_),
                          f.push(_),
                          (_ = _ + i + w)),
                      (s.virtualSize += i + w),
                      (D = i),
                      (x += 1);
                  }
                }
                if (
                  ((s.virtualSize = Math.max(s.virtualSize, o) + v),
                  l &&
                    d &&
                    ("slide" === r.effect || "coverflow" === r.effect) &&
                    (a.style.width = s.virtualSize + w + "px"),
                  r.setWrapperSize &&
                    (a.style[s.getDirectionLabel("width")] =
                      s.virtualSize + w + "px"),
                  E && s.grid.updateWrapperSize(i, p),
                  !r.centeredSlides)
                ) {
                  const n = [];
                  for (let t = 0; t < p.length; t += 1) {
                    let e = p[t];
                    r.roundLengths && (e = Math.floor(e)),
                      p[t] <= s.virtualSize - o && n.push(e);
                  }
                  (p = n),
                    1 <
                      Math.floor(s.virtualSize - o) -
                        Math.floor(p[p.length - 1]) &&
                      p.push(s.virtualSize - o);
                }
                if (u && r.loop) {
                  const n = m[0] + w;
                  if (1 < r.slidesPerGroup) {
                    const a = Math.ceil(
                        (s.virtual.slidesBefore + s.virtual.slidesAfter) /
                          r.slidesPerGroup
                      ),
                      t = n * r.slidesPerGroup;
                    for (let e = 0; e < a; e += 1) p.push(p[p.length - 1] + t);
                  }
                  for (
                    let e = 0;
                    e < s.virtual.slidesBefore + s.virtual.slidesAfter;
                    e += 1
                  )
                    1 === r.slidesPerGroup && p.push(p[p.length - 1] + n),
                      f.push(f[f.length - 1] + n),
                      (s.virtualSize += n);
                }
                if ((0 === p.length && (p = [0]), 0 !== w)) {
                  const n =
                    s.isHorizontal() && l
                      ? "marginLeft"
                      : s.getDirectionLabel("marginRight");
                  c.filter(
                    (e, t) => !(r.cssMode && !r.loop) || t !== c.length - 1
                  ).forEach((e) => {
                    e.style[n] = w + "px";
                  });
                }
                if (r.centeredSlides && r.centeredSlidesBounds) {
                  let t = 0;
                  m.forEach((e) => {
                    t += e + (w || 0);
                  });
                  const n = (t -= w) - o;
                  p = p.map((e) => (e <= 0 ? -g : e > n ? n + v : e));
                }
                if (r.centerInsufficientSlides) {
                  let t = 0;
                  if (
                    (m.forEach((e) => {
                      t += e + (w || 0);
                    }),
                    (t -= w) < o)
                  ) {
                    const n = (o - t) / 2;
                    p.forEach((e, t) => {
                      p[t] = e - n;
                    }),
                      f.forEach((e, t) => {
                        f[t] = e + n;
                      });
                  }
                }
                if (
                  (Object.assign(s, {
                    slides: c,
                    snapGrid: p,
                    slidesGrid: f,
                    slidesSizesGrid: m,
                  }),
                  r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
                ) {
                  S(a, "--swiper-centered-offset-before", -p[0] + "px"),
                    S(
                      a,
                      "--swiper-centered-offset-after",
                      s.size / 2 - m[m.length - 1] / 2 + "px"
                    );
                  const n = -s.snapGrid[0],
                    r = -s.slidesGrid[0];
                  (s.snapGrid = s.snapGrid.map((e) => e + n)),
                    (s.slidesGrid = s.slidesGrid.map((e) => e + r));
                }
                if (
                  (h !== e && s.emit("slidesLengthChange"),
                  p.length !== y &&
                    (s.params.watchOverflow && s.checkOverflow(),
                    s.emit("snapGridLengthChange")),
                  f.length !== b && s.emit("slidesGridLengthChange"),
                  r.watchSlidesProgress && s.updateSlidesOffset(),
                  !(
                    u ||
                    r.cssMode ||
                    ("slide" !== r.effect && "fade" !== r.effect)
                  ))
                ) {
                  const n = r.containerModifierClass + "backface-hidden",
                    a = s.el.classList.contains(n);
                  h <= r.maxBackfaceHiddenSlides
                    ? a || s.el.classList.add(n)
                    : a && s.el.classList.remove(n);
                }
              }
            },
            updateAutoHeight: function (e) {
              const t = this,
                i = [],
                s = t.virtual && t.params.virtual.enabled;
              let n,
                r = 0;
              "number" == typeof e
                ? t.setTransition(e)
                : !0 === e && t.setTransition(t.params.speed);
              var a = (e) =>
                s ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
              if (
                "auto" !== t.params.slidesPerView &&
                1 < t.params.slidesPerView
              )
                if (t.params.centeredSlides)
                  (t.visibleSlides || []).forEach((e) => {
                    i.push(e);
                  });
                else
                  for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                    const e = t.activeIndex + n;
                    if (e > t.slides.length && !s) break;
                    i.push(a(e));
                  }
              else i.push(a(t.activeIndex));
              for (n = 0; n < i.length; n += 1)
                if (void 0 !== i[n]) {
                  const e = i[n].offsetHeight;
                  r = e > r ? e : r;
                }
              (!r && 0 !== r) || (t.wrapperEl.style.height = r + "px");
            },
            updateSlidesOffset: function () {
              var t = this.slides,
                i = this.isElement
                  ? this.isHorizontal()
                    ? this.wrapperEl.offsetLeft
                    : this.wrapperEl.offsetTop
                  : 0;
              for (let e = 0; e < t.length; e += 1)
                t[e].swiperSlideOffset =
                  (this.isHorizontal() ? t[e].offsetLeft : t[e].offsetTop) -
                  i -
                  this.cssOverflowAdjustment();
            },
            updateSlidesProgress: function (e) {
              void 0 === e && (e = (this && this.translate) || 0);
              const n = this,
                r = n.params,
                { slides: a, rtlTranslate: o, snapGrid: l } = n;
              if (0 !== a.length) {
                void 0 === a[0].swiperSlideOffset && n.updateSlidesOffset();
                let i = o ? e : -e,
                  s =
                    (a.forEach((e) => {
                      e.classList.remove(
                        r.slideVisibleClass,
                        r.slideFullyVisibleClass
                      );
                    }),
                    (n.visibleSlidesIndexes = []),
                    (n.visibleSlides = []),
                    r.spaceBetween);
                "string" == typeof s && 0 <= s.indexOf("%")
                  ? (s = (parseFloat(s.replace("%", "")) / 100) * n.size)
                  : "string" == typeof s && (s = parseFloat(s));
                for (let t = 0; t < a.length; t += 1) {
                  var d = a[t];
                  let e = d.swiperSlideOffset;
                  r.cssMode &&
                    r.centeredSlides &&
                    (e -= a[0].swiperSlideOffset);
                  var u =
                      (i + (r.centeredSlides ? n.minTranslate() : 0) - e) /
                      (d.swiperSlideSize + s),
                    c =
                      (i -
                        l[0] +
                        (r.centeredSlides ? n.minTranslate() : 0) -
                        e) /
                      (d.swiperSlideSize + s),
                    h = -(i - e),
                    p = h + n.slidesSizesGrid[t],
                    f = 0 <= h && h <= n.size - n.slidesSizesGrid[t];
                  ((0 <= h && h < n.size - 1) ||
                    (1 < p && p <= n.size) ||
                    (h <= 0 && p >= n.size)) &&
                    (n.visibleSlides.push(d),
                    n.visibleSlidesIndexes.push(t),
                    a[t].classList.add(r.slideVisibleClass)),
                    f && a[t].classList.add(r.slideFullyVisibleClass),
                    (d.progress = o ? -u : u),
                    (d.originalProgress = o ? -c : c);
                }
              }
            },
            updateProgress: function (e) {
              var t = this;
              if (void 0 === e) {
                const i = t.rtlTranslate ? -1 : 1;
                e = (t && t.translate && t.translate * i) || 0;
              }
              const i = t.params,
                s = t.maxTranslate() - t.minTranslate();
              let {
                progress: n,
                isBeginning: r,
                isEnd: a,
                progressLoop: o,
              } = t;
              const l = r,
                d = a;
              if (0 === s) (n = 0), (r = !0), (a = !0);
              else {
                n = (e - t.minTranslate()) / s;
                const i = Math.abs(e - t.minTranslate()) < 1,
                  o = Math.abs(e - t.maxTranslate()) < 1;
                (r = i || n <= 0),
                  (a = o || 1 <= n),
                  i && (n = 0),
                  o && (n = 1);
              }
              if (i.loop) {
                const i = t.getSlideIndexByData(0),
                  s = t.getSlideIndexByData(t.slides.length - 1),
                  n = t.slidesGrid[i],
                  r = t.slidesGrid[s],
                  a = t.slidesGrid[t.slidesGrid.length - 1],
                  l = Math.abs(e);
                1 < (o = l >= n ? (l - n) / a : (l + a - r) / a) && --o;
              }
              Object.assign(t, {
                progress: n,
                progressLoop: o,
                isBeginning: r,
                isEnd: a,
              }),
                (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
                  t.updateSlidesProgress(e),
                r && !l && t.emit("reachBeginning toEdge"),
                a && !d && t.emit("reachEnd toEdge"),
                ((l && !r) || (d && !a)) && t.emit("fromEdge"),
                t.emit("progress", n);
            },
            updateSlidesClasses: function () {
              const {
                  slides: e,
                  params: t,
                  slidesEl: i,
                  activeIndex: s,
                } = this,
                n = this.virtual && t.virtual.enabled,
                r = this.grid && t.grid && 1 < t.grid.rows,
                a = (e) => P(i, `.${t.slideClass}${e}, swiper-slide` + e)[0];
              let o, l, d;
              if (
                (e.forEach((e) => {
                  e.classList.remove(
                    t.slideActiveClass,
                    t.slideNextClass,
                    t.slidePrevClass
                  );
                }),
                n)
              )
                if (t.loop) {
                  let e = s - this.virtual.slidesBefore;
                  (e = e < 0 ? this.virtual.slides.length + e : e) >=
                    this.virtual.slides.length &&
                    (e -= this.virtual.slides.length),
                    (o = a(`[data-swiper-slide-index="${e}"]`));
                } else o = a(`[data-swiper-slide-index="${s}"]`);
              else
                r
                  ? ((o = e.filter((e) => e.column === s)[0]),
                    (d = e.filter((e) => e.column === s + 1)[0]),
                    (l = e.filter((e) => e.column === s - 1)[0]))
                  : (o = e[s]);
              o &&
                (o.classList.add(t.slideActiveClass),
                r
                  ? d && d.classList.add(t.slideNextClass)
                  : ((d = (function (e, t) {
                      for (var i = []; e.nextElementSibling; ) {
                        var s = e.nextElementSibling;
                        (t && !s.matches(t)) || i.push(s), (e = s);
                      }
                      return i;
                    })(o, `.${t.slideClass}, swiper-slide`)[0]),
                    (d = t.loop && !d ? e[0] : d) &&
                      d.classList.add(t.slideNextClass),
                    (l = (function (e, t) {
                      for (var i = []; e.previousElementSibling; ) {
                        var s = e.previousElementSibling;
                        (t && !s.matches(t)) || i.push(s), (e = s);
                      }
                      return i;
                    })(o, `.${t.slideClass}, swiper-slide`)[0]),
                    t.loop && 0 === !l && (l = e[e.length - 1])),
                l) &&
                l.classList.add(t.slidePrevClass),
                this.emitSlidesClasses();
            },
            updateActiveIndex: function (i) {
              const s = this,
                e = s.rtlTranslate ? s.translate : -s.translate,
                {
                  snapGrid: t,
                  params: n,
                  activeIndex: r,
                  realIndex: a,
                  snapIndex: o,
                } = s;
              let l,
                d = i;
              i = (e) => {
                let t = e - s.virtual.slidesBefore;
                return (
                  (t = t < 0 ? s.virtual.slides.length + t : t) >=
                    s.virtual.slides.length && (t -= s.virtual.slides.length),
                  t
                );
              };
              if (
                (void 0 === d &&
                  (d = (function (e) {
                    var { slidesGrid: t, params: i } = e,
                      s = e.rtlTranslate ? e.translate : -e.translate;
                    let n;
                    for (let e = 0; e < t.length; e += 1)
                      void 0 !== t[e + 1]
                        ? s >= t[e] && s < t[e + 1] - (t[e + 1] - t[e]) / 2
                          ? (n = e)
                          : s >= t[e] && s < t[e + 1] && (n = e + 1)
                        : s >= t[e] && (n = e);
                    return (n =
                      i.normalizeSlideIndex && (n < 0 || void 0 === n) ? 0 : n);
                  })(s)),
                0 <= t.indexOf(e))
              )
                l = t.indexOf(e);
              else {
                const i = Math.min(n.slidesPerGroupSkip, d);
                l = i + Math.floor((d - i) / n.slidesPerGroup);
              }
              if (
                (l >= t.length && (l = t.length - 1), d !== r || s.params.loop)
              )
                if (
                  d === r &&
                  s.params.loop &&
                  s.virtual &&
                  s.params.virtual.enabled
                )
                  s.realIndex = i(d);
                else {
                  var u = s.grid && n.grid && 1 < n.grid.rows;
                  let t;
                  if (s.virtual && n.virtual.enabled && n.loop) t = i(d);
                  else if (u) {
                    const i = s.slides.filter((e) => e.column === d)[0];
                    let e = parseInt(
                      i.getAttribute("data-swiper-slide-index"),
                      10
                    );
                    Number.isNaN(e) && (e = Math.max(s.slides.indexOf(i), 0)),
                      (t = Math.floor(e / n.grid.rows));
                  } else if (s.slides[d]) {
                    const i = s.slides[d].getAttribute(
                      "data-swiper-slide-index"
                    );
                    t = i ? parseInt(i, 10) : d;
                  } else t = d;
                  Object.assign(s, {
                    previousSnapIndex: o,
                    snapIndex: l,
                    previousRealIndex: a,
                    realIndex: t,
                    previousIndex: r,
                    activeIndex: d,
                  }),
                    s.initialized && c(s),
                    s.emit("activeIndexChange"),
                    s.emit("snapIndexChange"),
                    (s.initialized || s.params.runCallbacksOnInit) &&
                      (a !== t && s.emit("realIndexChange"),
                      s.emit("slideChange"));
                }
              else l !== o && ((s.snapIndex = l), s.emit("snapIndexChange"));
            },
            updateClickedSlide: function (e, t) {
              const i = this,
                s = i.params;
              let n = e.closest(`.${s.slideClass}, swiper-slide`);
              !n &&
                i.isElement &&
                t &&
                1 < t.length &&
                t.includes(e) &&
                [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
                  !n &&
                    e.matches &&
                    e.matches(`.${s.slideClass}, swiper-slide`) &&
                    (n = e);
                });
              let r,
                a = !1;
              if (n)
                for (let e = 0; e < i.slides.length; e += 1)
                  if (i.slides[e] === n) {
                    (a = !0), (r = e);
                    break;
                  }
              n && a
                ? ((i.clickedSlide = n),
                  i.virtual && i.params.virtual.enabled
                    ? (i.clickedIndex = parseInt(
                        n.getAttribute("data-swiper-slide-index"),
                        10
                      ))
                    : (i.clickedIndex = r),
                  s.slideToClickedSlide &&
                    void 0 !== i.clickedIndex &&
                    i.clickedIndex !== i.activeIndex &&
                    i.slideToClickedSlide())
                : ((i.clickedSlide = void 0), (i.clickedIndex = void 0));
            },
          },
          translate: {
            getTranslate: function (e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              var {
                params: t,
                rtlTranslate: i,
                translate: s,
                wrapperEl: n,
              } = this;
              if (t.virtualTranslate) return i ? -s : s;
              if (t.cssMode) return s;
              let r = k(n, e);
              return (r += this.cssOverflowAdjustment()), (r = i ? -r : r) || 0;
            },
            setTranslate: function (e, t) {
              var i = this,
                { rtlTranslate: s, params: n, wrapperEl: r, progress: a } = i;
              let o = 0,
                l = 0;
              i.isHorizontal() ? (o = s ? -e : e) : (l = e),
                n.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
                (i.previousTranslate = i.translate),
                (i.translate = i.isHorizontal() ? o : l),
                n.cssMode
                  ? (r[i.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                      i.isHorizontal() ? -o : -l)
                  : n.virtualTranslate ||
                    (i.isHorizontal()
                      ? (o -= i.cssOverflowAdjustment())
                      : (l -= i.cssOverflowAdjustment()),
                    (r.style.transform = `translate3d(${o}px, ${l}px, 0px)`));
              s = i.maxTranslate() - i.minTranslate();
              (0 == s ? 0 : (e - i.minTranslate()) / s) !== a &&
                i.updateProgress(e),
                i.emit("setTranslate", i.translate, t);
            },
            minTranslate: function () {
              return -this.snapGrid[0];
            },
            maxTranslate: function () {
              return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function (e, t, i, s, n) {
              void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0),
                void 0 === s && (s = !0);
              const r = this,
                { params: a, wrapperEl: o } = r;
              if (r.animating && a.preventInteractionOnTransition) return !1;
              var l = r.minTranslate(),
                d = r.maxTranslate(),
                l = s && l < e ? l : s && e < d ? d : e;
              if ((r.updateProgress(l), a.cssMode)) {
                const e = r.isHorizontal();
                if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -l;
                else {
                  if (!r.support.smoothScroll)
                    return (
                      y({
                        swiper: r,
                        targetPosition: -l,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  o.scrollTo({ [e ? "left" : "top"]: -l, behavior: "smooth" });
                }
              } else
                0 === t
                  ? (r.setTransition(0),
                    r.setTranslate(l),
                    i &&
                      (r.emit("beforeTransitionStart", t, n),
                      r.emit("transitionEnd")))
                  : (r.setTransition(t),
                    r.setTranslate(l),
                    i &&
                      (r.emit("beforeTransitionStart", t, n),
                      r.emit("transitionStart")),
                    r.animating ||
                      ((r.animating = !0),
                      r.onTranslateToWrapperTransitionEnd ||
                        (r.onTranslateToWrapperTransitionEnd = function (e) {
                          r &&
                            !r.destroyed &&
                            e.target === this &&
                            (r.wrapperEl.removeEventListener(
                              "transitionend",
                              r.onTranslateToWrapperTransitionEnd
                            ),
                            (r.onTranslateToWrapperTransitionEnd = null),
                            delete r.onTranslateToWrapperTransitionEnd,
                            i) &&
                            r.emit("transitionEnd");
                        }),
                      r.wrapperEl.addEventListener(
                        "transitionend",
                        r.onTranslateToWrapperTransitionEnd
                      )));
              return !0;
            },
          },
          transition: {
            setTransition: function (e, t) {
              this.params.cssMode ||
                ((this.wrapperEl.style.transitionDuration = e + "ms"),
                (this.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
                this.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              var i = this["params"];
              i.cssMode ||
                (i.autoHeight && this.updateAutoHeight(),
                X({
                  swiper: this,
                  runCallbacks: e,
                  direction: t,
                  step: "Start",
                }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              var i = this["params"];
              (this.animating = !1),
                i.cssMode ||
                  (this.setTransition(0),
                  X({
                    swiper: this,
                    runCallbacks: e,
                    direction: t,
                    step: "End",
                  }));
            },
          },
          slide: {
            slideTo: function (e, t, i, s, n) {
              void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0),
                "string" == typeof (e = void 0 === e ? 0 : e) &&
                  (e = parseInt(e, 10));
              const r = this;
              let a = e;
              a < 0 && (a = 0);
              const {
                params: o,
                snapGrid: l,
                slidesGrid: d,
                previousIndex: u,
                activeIndex: c,
                rtlTranslate: h,
                wrapperEl: p,
                enabled: f,
              } = r;
              if (
                (r.animating && o.preventInteractionOnTransition) ||
                (!f && !s && !n)
              )
                return !1;
              e = Math.min(r.params.slidesPerGroupSkip, a);
              let m = e + Math.floor((a - e) / r.params.slidesPerGroup);
              var g = -l[(m = m >= l.length ? l.length - 1 : m)];
              if (o.normalizeSlideIndex)
                for (let e = 0; e < d.length; e += 1) {
                  const t = -Math.floor(100 * g),
                    i = Math.floor(100 * d[e]),
                    s = Math.floor(100 * d[e + 1]);
                  void 0 !== d[e + 1]
                    ? t >= i && t < s - (s - i) / 2
                      ? (a = e)
                      : t >= i && t < s && (a = e + 1)
                    : t >= i && (a = e);
                }
              if (r.initialized && a !== c) {
                if (
                  !r.allowSlideNext &&
                  (h
                    ? g > r.translate && g > r.minTranslate()
                    : g < r.translate && g < r.minTranslate())
                )
                  return !1;
                if (
                  !r.allowSlidePrev &&
                  g > r.translate &&
                  g > r.maxTranslate() &&
                  (c || 0) !== a
                )
                  return !1;
              }
              let v;
              if (
                (a !== (u || 0) && i && r.emit("beforeSlideChangeStart"),
                r.updateProgress(g),
                (v = a > c ? "next" : a < c ? "prev" : "reset"),
                (h && -g === r.translate) || (!h && g === r.translate))
              )
                return (
                  r.updateActiveIndex(a),
                  o.autoHeight && r.updateAutoHeight(),
                  r.updateSlidesClasses(),
                  "slide" !== o.effect && r.setTranslate(g),
                  "reset" != v &&
                    (r.transitionStart(i, v), r.transitionEnd(i, v)),
                  !1
                );
              if (o.cssMode) {
                const e = r.isHorizontal(),
                  i = h ? g : -g;
                if (0 === t) {
                  const t = r.virtual && r.params.virtual.enabled;
                  t &&
                    ((r.wrapperEl.style.scrollSnapType = "none"),
                    (r._immediateVirtual = !0)),
                    t &&
                    !r._cssModeVirtualInitialSet &&
                    0 < r.params.initialSlide
                      ? ((r._cssModeVirtualInitialSet = !0),
                        requestAnimationFrame(() => {
                          p[e ? "scrollLeft" : "scrollTop"] = i;
                        }))
                      : (p[e ? "scrollLeft" : "scrollTop"] = i),
                    t &&
                      requestAnimationFrame(() => {
                        (r.wrapperEl.style.scrollSnapType = ""),
                          (r._immediateVirtual = !1);
                      });
                } else {
                  if (!r.support.smoothScroll)
                    return (
                      y({
                        swiper: r,
                        targetPosition: i,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  p.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
                }
              } else
                r.setTransition(t),
                  r.setTranslate(g),
                  r.updateActiveIndex(a),
                  r.updateSlidesClasses(),
                  r.emit("beforeTransitionStart", t, s),
                  r.transitionStart(i, v),
                  0 === t
                    ? r.transitionEnd(i, v)
                    : r.animating ||
                      ((r.animating = !0),
                      r.onSlideToWrapperTransitionEnd ||
                        (r.onSlideToWrapperTransitionEnd = function (e) {
                          r &&
                            !r.destroyed &&
                            e.target === this &&
                            (r.wrapperEl.removeEventListener(
                              "transitionend",
                              r.onSlideToWrapperTransitionEnd
                            ),
                            (r.onSlideToWrapperTransitionEnd = null),
                            delete r.onSlideToWrapperTransitionEnd,
                            r.transitionEnd(i, v));
                        }),
                      r.wrapperEl.addEventListener(
                        "transitionend",
                        r.onSlideToWrapperTransitionEnd
                      ));
              return !0;
            },
            slideToLoop: function (s, n, r, a) {
              void 0 === n && (n = this.params.speed),
                void 0 === r && (r = !0),
                "string" == typeof (s = void 0 === s ? 0 : s) &&
                  (s = parseInt(s, 10));
              const o = this,
                l = o.grid && o.params.grid && 1 < o.params.grid.rows;
              let d = s;
              if (o.params.loop)
                if (o.virtual && o.params.virtual.enabled)
                  d += o.virtual.slidesBefore;
                else {
                  let e;
                  if (l) {
                    const n = d * o.params.grid.rows;
                    e = o.slides.filter(
                      (e) => +e.getAttribute("data-swiper-slide-index") == n
                    )[0].column;
                  } else e = o.getSlideIndexByData(d);
                  const n = l
                      ? Math.ceil(o.slides.length / o.params.grid.rows)
                      : o.slides.length,
                    r = o.params["centeredSlides"];
                  let t = o.params.slidesPerView,
                    i =
                      ("auto" === t
                        ? (t = o.slidesPerViewDynamic())
                        : ((t = Math.ceil(
                            parseFloat(o.params.slidesPerView, 10)
                          )),
                          r && t % 2 == 0 && (t += 1)),
                      n - e < t);
                  if ((i = r ? i || e < Math.ceil(t / 2) : i)) {
                    const a = r
                      ? e < o.activeIndex
                        ? "prev"
                        : "next"
                      : e - o.activeIndex - 1 < o.params.slidesPerView
                      ? "next"
                      : "prev";
                    o.loopFix({
                      direction: a,
                      slideTo: !0,
                      activeSlideIndex: "next" == a ? e + 1 : e - n + 1,
                      slideRealIndex: "next" == a ? o.realIndex : void 0,
                    });
                  }
                  if (l) {
                    const s = d * o.params.grid.rows;
                    d = o.slides.filter(
                      (e) => +e.getAttribute("data-swiper-slide-index") == s
                    )[0].column;
                  } else d = o.getSlideIndexByData(d);
                }
              return (
                requestAnimationFrame(() => {
                  o.slideTo(d, n, r, a);
                }),
                o
              );
            },
            slideNext: function (e, t, i) {
              void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
              const s = this,
                { enabled: n, params: r, animating: a } = s;
              if (!n) return s;
              let o = r.slidesPerGroup;
              "auto" === r.slidesPerView &&
                1 === r.slidesPerGroup &&
                r.slidesPerGroupAuto &&
                (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
              const l = s.activeIndex < r.slidesPerGroupSkip ? 1 : o,
                d = s.virtual && r.virtual.enabled;
              if (r.loop) {
                if (a && !d && r.loopPreventsSliding) return !1;
                if (
                  (s.loopFix({ direction: "next" }),
                  (s._clientLeft = s.wrapperEl.clientLeft),
                  s.activeIndex === s.slides.length - 1 && r.cssMode)
                )
                  return (
                    requestAnimationFrame(() => {
                      s.slideTo(s.activeIndex + l, e, t, i);
                    }),
                    !0
                  );
              }
              return r.rewind && s.isEnd
                ? s.slideTo(0, e, t, i)
                : s.slideTo(s.activeIndex + l, e, t, i);
            },
            slidePrev: function (e, t, i) {
              void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
              const s = this,
                {
                  params: n,
                  snapGrid: r,
                  slidesGrid: a,
                  rtlTranslate: o,
                  enabled: l,
                  animating: d,
                } = s;
              if (!l) return s;
              var u = s.virtual && n.virtual.enabled;
              if (n.loop) {
                if (d && !u && n.loopPreventsSliding) return !1;
                s.loopFix({ direction: "prev" }),
                  (s._clientLeft = s.wrapperEl.clientLeft);
              }
              function c(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
              }
              const h = c(o ? s.translate : -s.translate),
                p = r.map((e) => c(e));
              let f = r[p.indexOf(h) - 1];
              if (void 0 === f && n.cssMode) {
                let i;
                r.forEach((e, t) => {
                  h >= e && (i = t);
                }),
                  void 0 !== i && (f = r[0 < i ? i - 1 : i]);
              }
              let m = 0;
              if (
                (void 0 !== f &&
                  ((m = a.indexOf(f)) < 0 && (m = s.activeIndex - 1),
                  "auto" === n.slidesPerView) &&
                  1 === n.slidesPerGroup &&
                  n.slidesPerGroupAuto &&
                  ((m = m - s.slidesPerViewDynamic("previous", !0) + 1),
                  (m = Math.max(m, 0))),
                n.rewind && s.isBeginning)
              ) {
                const n =
                  s.params.virtual && s.params.virtual.enabled && s.virtual
                    ? s.virtual.slides.length - 1
                    : s.slides.length - 1;
                return s.slideTo(n, e, t, i);
              }
              return n.loop && 0 === s.activeIndex && n.cssMode
                ? (requestAnimationFrame(() => {
                    s.slideTo(m, e, t, i);
                  }),
                  !0)
                : s.slideTo(m, e, t, i);
            },
            slideReset: function (e, t, i) {
              return (
                void 0 === e && (e = this.params.speed),
                this.slideTo(
                  this.activeIndex,
                  e,
                  (t = void 0 === t ? !0 : t),
                  i
                )
              );
            },
            slideToClosest: function (e, t, i, s) {
              void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0),
                void 0 === s && (s = 0.5);
              var n = this;
              let r = n.activeIndex;
              var a = Math.min(n.params.slidesPerGroupSkip, r),
                a = a + Math.floor((r - a) / n.params.slidesPerGroup),
                o = n.rtlTranslate ? n.translate : -n.translate;
              if (o >= n.snapGrid[a]) {
                const e = n.snapGrid[a];
                o - e > (n.snapGrid[a + 1] - e) * s &&
                  (r += n.params.slidesPerGroup);
              } else {
                const e = n.snapGrid[a - 1];
                o - e <= (n.snapGrid[a] - e) * s &&
                  (r -= n.params.slidesPerGroup);
              }
              return (
                (r = Math.max(r, 0)),
                (r = Math.min(r, n.slidesGrid.length - 1)),
                n.slideTo(r, e, t, i)
              );
            },
            slideToClickedSlide: function () {
              const e = this,
                { params: t, slidesEl: i } = e,
                s =
                  "auto" === t.slidesPerView
                    ? e.slidesPerViewDynamic()
                    : t.slidesPerView;
              let n,
                r = e.clickedIndex;
              var a = e.isElement ? "swiper-slide" : "." + t.slideClass;
              t.loop
                ? e.animating ||
                  ((n = parseInt(
                    e.clickedSlide.getAttribute("data-swiper-slide-index"),
                    10
                  )),
                  t.centeredSlides
                    ? r < e.loopedSlides - s / 2 ||
                      r > e.slides.length - e.loopedSlides + s / 2
                      ? (e.loopFix(),
                        (r = e.getSlideIndex(
                          P(i, a + `[data-swiper-slide-index="${n}"]`)[0]
                        )),
                        C(() => {
                          e.slideTo(r);
                        }))
                      : e.slideTo(r)
                    : r > e.slides.length - s
                    ? (e.loopFix(),
                      (r = e.getSlideIndex(
                        P(i, a + `[data-swiper-slide-index="${n}"]`)[0]
                      )),
                      C(() => {
                        e.slideTo(r);
                      }))
                    : e.slideTo(r))
                : e.slideTo(r);
            },
          },
          loop: {
            loopCreate: function (e) {
              const i = this,
                { params: s, slidesEl: t } = i;
              var n, r, a, o, l;
              !s.loop ||
                (i.virtual && i.params.virtual.enabled) ||
                ((n = () => {
                  P(t, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
                    e.setAttribute("data-swiper-slide-index", t);
                  });
                }),
                (o = i.grid && s.grid && 1 < s.grid.rows),
                (r = s.slidesPerGroup * (o ? s.grid.rows : 1)),
                (a = i.slides.length % r != 0),
                (o = o && i.slides.length % s.grid.rows != 0),
                (l = (t) => {
                  for (let e = 0; e < t; e += 1) {
                    const t = i.isElement
                      ? L("swiper-slide", [s.slideBlankClass])
                      : L("div", [s.slideClass, s.slideBlankClass]);
                    i.slidesEl.append(t);
                  }
                }),
                a
                  ? s.loopAddBlankSlides
                    ? (l(r - (i.slides.length % r)),
                      i.recalcSlides(),
                      i.updateSlides())
                    : F(
                        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
                      )
                  : o &&
                    (s.loopAddBlankSlides
                      ? (l(s.grid.rows - (i.slides.length % s.grid.rows)),
                        i.recalcSlides(),
                        i.updateSlides())
                      : F(
                          "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
                        )),
                n(),
                i.loopFix({
                  slideRealIndex: e,
                  direction: s.centeredSlides ? void 0 : "next",
                }));
            },
            loopFix: function (r) {
              let {
                slideRealIndex: a,
                slideTo: o = !0,
                direction: l,
                setTranslate: d,
                activeSlideIndex: u,
                byController: c,
                byMousewheel: h,
              } = void 0 === r ? {} : r;
              const p = this;
              if (p.params.loop) {
                p.emit("beforeLoopFix");
                const {
                    slides: b,
                    allowSlidePrev: w,
                    allowSlideNext: _,
                    slidesEl: D,
                    params: x,
                  } = p,
                  E = x["centeredSlides"];
                if (
                  ((p.allowSlidePrev = !0),
                  (p.allowSlideNext = !0),
                  p.virtual && x.virtual.enabled)
                )
                  o &&
                    (x.centeredSlides || 0 !== p.snapIndex
                      ? x.centeredSlides && p.snapIndex < x.slidesPerView
                        ? p.slideTo(
                            p.virtual.slides.length + p.snapIndex,
                            0,
                            !1,
                            !0
                          )
                        : p.snapIndex === p.snapGrid.length - 1 &&
                          p.slideTo(p.virtual.slidesBefore, 0, !1, !0)
                      : p.slideTo(p.virtual.slides.length, 0, !1, !0)),
                    (p.allowSlidePrev = w),
                    (p.allowSlideNext = _);
                else {
                  let e = x.slidesPerView;
                  "auto" === e
                    ? (e = p.slidesPerViewDynamic())
                    : ((e = Math.ceil(parseFloat(x.slidesPerView, 10))),
                      E && e % 2 == 0 && (e += 1));
                  r = x.slidesPerGroupAuto ? e : x.slidesPerGroup;
                  let t = r;
                  t % r != 0 && (t += r - (t % r)),
                    (p.loopedSlides = t + x.loopAdditionalSlides);
                  var f = p.grid && x.grid && 1 < x.grid.rows;
                  b.length < e + t
                    ? F(
                        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
                      )
                    : f &&
                      "row" === x.grid.fill &&
                      F(
                        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
                      );
                  const C = [],
                    T = [];
                  let i = p.activeIndex;
                  void 0 === u
                    ? (u = p.getSlideIndex(
                        b.filter((e) =>
                          e.classList.contains(x.slideActiveClass)
                        )[0]
                      ))
                    : (i = u);
                  var m = "next" === l || !l,
                    g = "prev" === l || !l;
                  let s = 0,
                    n = 0;
                  var v = f ? Math.ceil(b.length / x.grid.rows) : b.length,
                    y =
                      (f ? b[u].column : u) +
                      (E && void 0 === d ? -e / 2 + 0.5 : 0);
                  if (y < t) {
                    s = Math.max(t - y, r);
                    for (let e = 0; e < t - y; e += 1) {
                      const a = e - Math.floor(e / v) * v;
                      if (f) {
                        const r = v - a - 1;
                        for (let e = b.length - 1; 0 <= e; --e)
                          b[e].column === r && C.push(e);
                      } else C.push(v - a - 1);
                    }
                  } else if (y + e > v - t) {
                    n = Math.max(y - (v - 2 * t), r);
                    for (let e = 0; e < n; e += 1) {
                      const a = e - Math.floor(e / v) * v;
                      f
                        ? b.forEach((e, t) => {
                            e.column === a && T.push(t);
                          })
                        : T.push(a);
                    }
                  }
                  if (
                    (g &&
                      C.forEach((e) => {
                        (b[e].swiperLoopMoveDOM = !0),
                          D.prepend(b[e]),
                          (b[e].swiperLoopMoveDOM = !1);
                      }),
                    m &&
                      T.forEach((e) => {
                        (b[e].swiperLoopMoveDOM = !0),
                          D.append(b[e]),
                          (b[e].swiperLoopMoveDOM = !1);
                      }),
                    p.recalcSlides(),
                    "auto" === x.slidesPerView
                      ? p.updateSlides()
                      : f &&
                        ((0 < C.length && g) || (0 < T.length && m)) &&
                        p.slides.forEach((e, t) => {
                          p.grid.updateSlide(t, e, p.slides);
                        }),
                    x.watchSlidesProgress && p.updateSlidesOffset(),
                    o)
                  )
                    if (0 < C.length && g) {
                      if (void 0 === a) {
                        const r = p.slidesGrid[i],
                          a = p.slidesGrid[i + s] - r;
                        h
                          ? p.setTranslate(p.translate - a)
                          : (p.slideTo(i + s, 0, !1, !0),
                            d &&
                              ((p.touchEventsData.startTranslate =
                                p.touchEventsData.startTranslate - a),
                              (p.touchEventsData.currentTranslate =
                                p.touchEventsData.currentTranslate - a)));
                      } else if (d) {
                        const r = f ? C.length / x.grid.rows : C.length;
                        p.slideTo(p.activeIndex + r, 0, !1, !0),
                          (p.touchEventsData.currentTranslate = p.translate);
                      }
                    } else if (0 < T.length && m)
                      if (void 0 === a) {
                        const r = p.slidesGrid[i],
                          a = p.slidesGrid[i - n] - r;
                        h
                          ? p.setTranslate(p.translate - a)
                          : (p.slideTo(i - n, 0, !1, !0),
                            d &&
                              ((p.touchEventsData.startTranslate =
                                p.touchEventsData.startTranslate - a),
                              (p.touchEventsData.currentTranslate =
                                p.touchEventsData.currentTranslate - a)));
                      } else {
                        const r = f ? T.length / x.grid.rows : T.length;
                        p.slideTo(p.activeIndex - r, 0, !1, !0);
                      }
                  if (
                    ((p.allowSlidePrev = w),
                    (p.allowSlideNext = _),
                    p.controller && p.controller.control && !c)
                  ) {
                    const r = {
                      slideRealIndex: a,
                      direction: l,
                      setTranslate: d,
                      activeSlideIndex: u,
                      byController: !0,
                    };
                    Array.isArray(p.controller.control)
                      ? p.controller.control.forEach((e) => {
                          !e.destroyed &&
                            e.params.loop &&
                            e.loopFix({
                              ...r,
                              slideTo:
                                e.params.slidesPerView === x.slidesPerView && o,
                            });
                        })
                      : p.controller.control instanceof p.constructor &&
                        p.controller.control.params.loop &&
                        p.controller.control.loopFix({
                          ...r,
                          slideTo:
                            p.controller.control.params.slidesPerView ===
                              x.slidesPerView && o,
                        });
                  }
                }
                p.emit("loopFix");
              }
            },
            loopDestroy: function () {
              const { params: e, slidesEl: t } = this;
              if (!(!e.loop || (this.virtual && this.params.virtual.enabled))) {
                this.recalcSlides();
                const i = [];
                this.slides.forEach((e) => {
                  var t =
                    void 0 === e.swiperSlideIndex
                      ? +e.getAttribute("data-swiper-slide-index")
                      : e.swiperSlideIndex;
                  i[t] = e;
                }),
                  this.slides.forEach((e) => {
                    e.removeAttribute("data-swiper-slide-index");
                  }),
                  i.forEach((e) => {
                    t.append(e);
                  }),
                  this.recalcSlides(),
                  this.slideTo(this.realIndex, 0);
              }
            },
          },
          grabCursor: {
            setGrabCursor: function (e) {
              const t = this;
              var i;
              !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode ||
                ((i =
                  "container" === t.params.touchEventsTarget
                    ? t.el
                    : t.wrapperEl),
                t.isElement && (t.__preventObserver__ = !0),
                (i.style.cursor = "move"),
                (i.style.cursor = e ? "grabbing" : "grab"),
                t.isElement &&
                  requestAnimationFrame(() => {
                    t.__preventObserver__ = !1;
                  }));
            },
            unsetGrabCursor: function () {
              const e = this;
              (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e.isElement && (e.__preventObserver__ = !0),
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = ""),
                e.isElement &&
                  requestAnimationFrame(() => {
                    e.__preventObserver__ = !1;
                  }));
            },
          },
          events: {
            attachEvents: function () {
              var e = this,
                t = e["params"];
              (e.onTouchStart = function (i) {
                var s = this,
                  n = M();
                let r = i;
                if (
                  (r.originalEvent && (r = r.originalEvent),
                  (i = s.touchEventsData),
                  "pointerdown" === r.type)
                ) {
                  if (null !== i.pointerId && i.pointerId !== r.pointerId)
                    return;
                  i.pointerId = r.pointerId;
                } else
                  "touchstart" === r.type &&
                    1 === r.targetTouches.length &&
                    (i.touchId = r.targetTouches[0].identifier);
                if ("touchstart" === r.type) j(s, r, r.targetTouches[0].pageX);
                else {
                  var { params: a, touches: o, enabled: l } = s;
                  if (
                    l &&
                    (a.simulateTouch || "mouse" !== r.pointerType) &&
                    (!s.animating || !a.preventInteractionOnTransition)
                  ) {
                    !s.animating && a.cssMode && a.loop && s.loopFix();
                    let t = r.target;
                    if (
                      ("wrapper" !== a.touchEventsTarget ||
                        s.wrapperEl.contains(t)) &&
                      !(
                        ("which" in r && 3 === r.which) ||
                        ("button" in r && 0 < r.button) ||
                        (i.isTouched && i.isMoved)
                      )
                    ) {
                      var l = !!a.noSwipingClass && "" !== a.noSwipingClass,
                        d = r.composedPath ? r.composedPath() : r.path,
                        l =
                          (l &&
                            r.target &&
                            r.target.shadowRoot &&
                            d &&
                            (t = d[0]),
                          a.noSwipingSelector || "." + a.noSwipingClass),
                        d = !(!r.target || !r.target.shadowRoot);
                      if (
                        a.noSwiping &&
                        (d
                          ? (function (s, e) {
                              return (function e(t) {
                                var i;
                                return t &&
                                  t !== M() &&
                                  t !== A() &&
                                  ((i = (t = t.assignedSlot
                                    ? t.assignedSlot
                                    : t).closest(s)) ||
                                    t.getRootNode)
                                  ? i || e(t.getRootNode().host)
                                  : null;
                              })((e = void 0 === t ? this : e));
                            })(l, t)
                          : t.closest(l))
                      )
                        s.allowClick = !0;
                      else if (!a.swipeHandler || t.closest(a.swipeHandler)) {
                        (o.currentX = r.pageX), (o.currentY = r.pageY);
                        (d = o.currentX), (l = o.currentY);
                        if (j(s, r, d)) {
                          Object.assign(i, {
                            isTouched: !0,
                            isMoved: !1,
                            allowTouchCallbacks: !0,
                            isScrolling: void 0,
                            startMoving: void 0,
                          }),
                            (o.startX = d),
                            (o.startY = l),
                            (i.touchStartTime = v()),
                            (s.allowClick = !0),
                            s.updateSize(),
                            (s.swipeDirection = void 0),
                            0 < a.threshold && (i.allowThresholdMove = !1);
                          let e = !0;
                          t.matches(i.focusableElements) &&
                            ((e = !1), "SELECT" === t.nodeName) &&
                            (i.isTouched = !1),
                            n.activeElement &&
                              n.activeElement.matches(i.focusableElements) &&
                              n.activeElement !== t &&
                              n.activeElement.blur();
                          d =
                            e && s.allowTouchMove && a.touchStartPreventDefault;
                          (!a.touchStartForcePreventDefault && !d) ||
                            t.isContentEditable ||
                            r.preventDefault(),
                            a.freeMode &&
                              a.freeMode.enabled &&
                              s.freeMode &&
                              s.animating &&
                              !a.cssMode &&
                              s.freeMode.onTouchStart(),
                            s.emit("touchStart", r);
                        }
                      }
                    }
                  }
                }
              }.bind(e)),
                (e.onTouchMove = function (t) {
                  const i = M(),
                    n = this,
                    r = n.touchEventsData,
                    { params: a, touches: o, rtlTranslate: l, enabled: e } = n;
                  if (e && (a.simulateTouch || "mouse" !== t.pointerType)) {
                    let e,
                      s = t;
                    if (
                      "pointermove" ===
                      (s = s.originalEvent ? s.originalEvent : s).type
                    ) {
                      if (null !== r.touchId) return;
                      if (s.pointerId !== r.pointerId) return;
                    }
                    if ("touchmove" === s.type) {
                      if (
                        !(e = [...s.changedTouches].filter(
                          (e) => e.identifier === r.touchId
                        )[0]) ||
                        e.identifier !== r.touchId
                      )
                        return;
                    } else e = s;
                    if (r.isTouched) {
                      var t = e.pageX,
                        d = e.pageY;
                      if (s.preventedByNestedSwiper)
                        (o.startX = t), (o.startY = d);
                      else if (n.allowTouchMove) {
                        if (a.touchReleaseOnEdges && !a.loop)
                          if (n.isVertical()) {
                            if (
                              (d < o.startY &&
                                n.translate <= n.maxTranslate()) ||
                              (d > o.startY && n.translate >= n.minTranslate())
                            )
                              return (r.isTouched = !1), void (r.isMoved = !1);
                          } else if (
                            (t < o.startX && n.translate <= n.maxTranslate()) ||
                            (t > o.startX && n.translate >= n.minTranslate())
                          )
                            return;
                        if (
                          i.activeElement &&
                          s.target === i.activeElement &&
                          s.target.matches(r.focusableElements)
                        )
                          (r.isMoved = !0), (n.allowClick = !1);
                        else {
                          r.allowTouchCallbacks && n.emit("touchMove", s),
                            (o.previousX = o.currentX),
                            (o.previousY = o.currentY),
                            (o.currentX = t),
                            (o.currentY = d);
                          var u = o.currentX - o.startX,
                            c = o.currentY - o.startY;
                          if (
                            !(
                              n.params.threshold &&
                              Math.sqrt(u ** 2 + c ** 2) < n.params.threshold
                            )
                          )
                            if (
                              (void 0 === r.isScrolling &&
                                ((n.isHorizontal() &&
                                  o.currentY === o.startY) ||
                                (n.isVertical() && o.currentX === o.startX)
                                  ? (r.isScrolling = !1)
                                  : 25 <= u * u + c * c &&
                                    ((h =
                                      (180 *
                                        Math.atan2(Math.abs(c), Math.abs(u))) /
                                      Math.PI),
                                    (r.isScrolling = n.isHorizontal()
                                      ? h > a.touchAngle
                                      : 90 - h > a.touchAngle))),
                              r.isScrolling && n.emit("touchMoveOpposite", s),
                              void 0 !== r.startMoving ||
                                (o.currentX === o.startX &&
                                  o.currentY === o.startY) ||
                                (r.startMoving = !0),
                              r.isScrolling ||
                                (n.zoom &&
                                  n.params.zoom &&
                                  n.params.zoom.enabled))
                            )
                              r.isTouched = !1;
                            else if (r.startMoving) {
                              (n.allowClick = !1),
                                !a.cssMode &&
                                  s.cancelable &&
                                  s.preventDefault(),
                                a.touchMoveStopPropagation &&
                                  !a.nested &&
                                  s.stopPropagation();
                              let i = n.isHorizontal() ? u : c,
                                e = n.isHorizontal()
                                  ? o.currentX - o.previousX
                                  : o.currentY - o.previousY;
                              a.oneWayMovement &&
                                ((i = Math.abs(i) * (l ? 1 : -1)),
                                (e = Math.abs(e) * (l ? 1 : -1))),
                                (o.diff = i),
                                (i *= a.touchRatio),
                                l && ((i = -i), (e = -e));
                              var h = n.touchesDirection,
                                u =
                                  ((n.swipeDirection = 0 < i ? "prev" : "next"),
                                  (n.touchesDirection =
                                    0 < e ? "prev" : "next"),
                                  n.params.loop && !a.cssMode),
                                c =
                                  ("next" === n.touchesDirection &&
                                    n.allowSlideNext) ||
                                  ("prev" === n.touchesDirection &&
                                    n.allowSlidePrev);
                              if (!r.isMoved) {
                                if (
                                  (u &&
                                    c &&
                                    n.loopFix({ direction: n.swipeDirection }),
                                  (r.startTranslate = n.getTranslate()),
                                  n.setTransition(0),
                                  n.animating)
                                ) {
                                  const t = new window.CustomEvent(
                                    "transitionend",
                                    { bubbles: !0, cancelable: !0 }
                                  );
                                  n.wrapperEl.dispatchEvent(t);
                                }
                                (r.allowMomentumBounce = !1),
                                  !a.grabCursor ||
                                    (!0 !== n.allowSlideNext &&
                                      !0 !== n.allowSlidePrev) ||
                                    n.setGrabCursor(!0),
                                  n.emit("sliderFirstMove", s);
                              }
                              if (
                                (new Date().getTime(),
                                r.isMoved &&
                                  r.allowThresholdMove &&
                                  h !== n.touchesDirection &&
                                  u &&
                                  c &&
                                  1 <= Math.abs(i))
                              )
                                Object.assign(o, {
                                  startX: t,
                                  startY: d,
                                  currentX: t,
                                  currentY: d,
                                  startTranslate: r.currentTranslate,
                                }),
                                  (r.loopSwapReset = !0),
                                  (r.startTranslate = r.currentTranslate);
                              else {
                                n.emit("sliderMove", s),
                                  (r.isMoved = !0),
                                  (r.currentTranslate = i + r.startTranslate);
                                let e = !0,
                                  t = a.resistanceRatio;
                                if (
                                  (a.touchReleaseOnEdges && (t = 0),
                                  0 < i
                                    ? (u &&
                                        c &&
                                        r.allowThresholdMove &&
                                        r.currentTranslate >
                                          (a.centeredSlides
                                            ? n.minTranslate() -
                                              n.slidesSizesGrid[
                                                n.activeIndex + 1
                                              ]
                                            : n.minTranslate()) &&
                                        n.loopFix({
                                          direction: "prev",
                                          setTranslate: !0,
                                          activeSlideIndex: 0,
                                        }),
                                      r.currentTranslate > n.minTranslate() &&
                                        ((e = !1), a.resistance) &&
                                        (r.currentTranslate =
                                          n.minTranslate() -
                                          1 +
                                          (-n.minTranslate() +
                                            r.startTranslate +
                                            i) **
                                            t))
                                    : i < 0 &&
                                      (u &&
                                        c &&
                                        r.allowThresholdMove &&
                                        r.currentTranslate <
                                          (a.centeredSlides
                                            ? n.maxTranslate() +
                                              n.slidesSizesGrid[
                                                n.slidesSizesGrid.length - 1
                                              ]
                                            : n.maxTranslate()) &&
                                        n.loopFix({
                                          direction: "next",
                                          setTranslate: !0,
                                          activeSlideIndex:
                                            n.slides.length -
                                            ("auto" === a.slidesPerView
                                              ? n.slidesPerViewDynamic()
                                              : Math.ceil(
                                                  parseFloat(
                                                    a.slidesPerView,
                                                    10
                                                  )
                                                )),
                                        }),
                                      r.currentTranslate < n.maxTranslate()) &&
                                      ((e = !1), a.resistance) &&
                                      (r.currentTranslate =
                                        n.maxTranslate() +
                                        1 -
                                        (n.maxTranslate() -
                                          r.startTranslate -
                                          i) **
                                          t),
                                  e && (s.preventedByNestedSwiper = !0),
                                  !n.allowSlideNext &&
                                    "next" === n.swipeDirection &&
                                    r.currentTranslate < r.startTranslate &&
                                    (r.currentTranslate = r.startTranslate),
                                  !n.allowSlidePrev &&
                                    "prev" === n.swipeDirection &&
                                    r.currentTranslate > r.startTranslate &&
                                    (r.currentTranslate = r.startTranslate),
                                  n.allowSlidePrev ||
                                    n.allowSlideNext ||
                                    (r.currentTranslate = r.startTranslate),
                                  0 < a.threshold)
                                ) {
                                  if (
                                    !(
                                      Math.abs(i) > a.threshold ||
                                      r.allowThresholdMove
                                    )
                                  )
                                    return void (r.currentTranslate =
                                      r.startTranslate);
                                  if (!r.allowThresholdMove)
                                    return (
                                      (r.allowThresholdMove = !0),
                                      (o.startX = o.currentX),
                                      (o.startY = o.currentY),
                                      (r.currentTranslate = r.startTranslate),
                                      void (o.diff = n.isHorizontal()
                                        ? o.currentX - o.startX
                                        : o.currentY - o.startY)
                                    );
                                }
                                a.followFinger &&
                                  !a.cssMode &&
                                  (((a.freeMode &&
                                    a.freeMode.enabled &&
                                    n.freeMode) ||
                                    a.watchSlidesProgress) &&
                                    (n.updateActiveIndex(),
                                    n.updateSlidesClasses()),
                                  a.freeMode &&
                                    a.freeMode.enabled &&
                                    n.freeMode &&
                                    n.freeMode.onTouchMove(),
                                  n.updateProgress(r.currentTranslate),
                                  n.setTranslate(r.currentTranslate));
                              }
                            }
                        }
                      } else
                        s.target.matches(r.focusableElements) ||
                          (n.allowClick = !1),
                          r.isTouched &&
                            (Object.assign(o, {
                              startX: t,
                              startY: d,
                              currentX: t,
                              currentY: d,
                            }),
                            (r.touchStartTime = v()));
                    } else
                      r.startMoving &&
                        r.isScrolling &&
                        n.emit("touchMoveOpposite", s);
                  }
                }.bind(e)),
                (e.onTouchEnd = function (n) {
                  const r = this,
                    t = r.touchEventsData;
                  let e,
                    a = n;
                  if (
                    "touchend" ===
                      (a = a.originalEvent ? a.originalEvent : a).type ||
                    "touchcancel" === a.type
                  ) {
                    if (
                      !(e = [...a.changedTouches].filter(
                        (e) => e.identifier === t.touchId
                      )[0]) ||
                      e.identifier !== t.touchId
                    )
                      return;
                  } else {
                    if (null !== t.touchId) return;
                    if (a.pointerId !== t.pointerId) return;
                    e = a;
                  }
                  if (
                    ![
                      "pointercancel",
                      "pointerout",
                      "pointerleave",
                      "contextmenu",
                    ].includes(a.type) ||
                    (["pointercancel", "contextmenu"].includes(a.type) &&
                      (r.browser.isSafari || r.browser.isWebView))
                  ) {
                    (t.pointerId = null), (t.touchId = null);
                    var {
                      params: o,
                      touches: n,
                      rtlTranslate: i,
                      slidesGrid: l,
                      enabled: d,
                    } = r;
                    if (d && (o.simulateTouch || "mouse" !== a.pointerType))
                      if (
                        (t.allowTouchCallbacks && r.emit("touchEnd", a),
                        (t.allowTouchCallbacks = !1),
                        t.isTouched)
                      ) {
                        o.grabCursor &&
                          t.isMoved &&
                          t.isTouched &&
                          (!0 === r.allowSlideNext ||
                            !0 === r.allowSlidePrev) &&
                          r.setGrabCursor(!1);
                        var u,
                          d = v(),
                          c = d - t.touchStartTime;
                        if (r.allowClick) {
                          const n =
                            a.path || (a.composedPath && a.composedPath());
                          r.updateClickedSlide((n && n[0]) || a.target, n),
                            r.emit("tap click", a),
                            c < 300 &&
                              d - t.lastClickTime < 300 &&
                              r.emit("doubleTap doubleClick", a);
                        }
                        if (
                          ((t.lastClickTime = v()),
                          C(() => {
                            r.destroyed || (r.allowClick = !0);
                          }),
                          t.isTouched &&
                            t.isMoved &&
                            r.swipeDirection &&
                            (0 !== n.diff || t.loopSwapReset) &&
                            (t.currentTranslate !== t.startTranslate ||
                              t.loopSwapReset))
                        ) {
                          if (
                            ((t.isTouched = !1),
                            (t.isMoved = !1),
                            (t.startMoving = !1),
                            (u = o.followFinger
                              ? i
                                ? r.translate
                                : -r.translate
                              : -t.currentTranslate),
                            !o.cssMode)
                          )
                            if (o.freeMode && o.freeMode.enabled)
                              r.freeMode.onTouchEnd({ currentPos: u });
                            else {
                              let t = 0,
                                i = r.slidesSizesGrid[0];
                              for (
                                let e = 0;
                                e < l.length;
                                e +=
                                  e < o.slidesPerGroupSkip
                                    ? 1
                                    : o.slidesPerGroup
                              ) {
                                const r =
                                  e < o.slidesPerGroupSkip - 1
                                    ? 1
                                    : o.slidesPerGroup;
                                void 0 !== l[e + r]
                                  ? u >= l[e] &&
                                    u < l[e + r] &&
                                    ((t = e), (i = l[e + r] - l[e]))
                                  : u >= l[e] &&
                                    ((t = e),
                                    (i = l[l.length - 1] - l[l.length - 2]));
                              }
                              let e = null,
                                s = null;
                              o.rewind &&
                                (r.isBeginning
                                  ? (s =
                                      o.virtual &&
                                      o.virtual.enabled &&
                                      r.virtual
                                        ? r.virtual.slides.length - 1
                                        : r.slides.length - 1)
                                  : r.isEnd && (e = 0));
                              (d = (u - l[t]) / i),
                                (n =
                                  t < o.slidesPerGroupSkip - 1
                                    ? 1
                                    : o.slidesPerGroup);
                              c > o.longSwipesMs
                                ? o.longSwipes
                                  ? ("next" === r.swipeDirection &&
                                      (d >= o.longSwipesRatio
                                        ? r.slideTo(
                                            o.rewind && r.isEnd ? e : t + n
                                          )
                                        : r.slideTo(t)),
                                    "prev" === r.swipeDirection &&
                                      (d > 1 - o.longSwipesRatio
                                        ? r.slideTo(t + n)
                                        : null !== s &&
                                          d < 0 &&
                                          Math.abs(d) > o.longSwipesRatio
                                        ? r.slideTo(s)
                                        : r.slideTo(t)))
                                  : r.slideTo(r.activeIndex)
                                : o.shortSwipes
                                ? !r.navigation ||
                                  (a.target !== r.navigation.nextEl &&
                                    a.target !== r.navigation.prevEl)
                                  ? ("next" === r.swipeDirection &&
                                      r.slideTo(null !== e ? e : t + n),
                                    "prev" === r.swipeDirection &&
                                      r.slideTo(null !== s ? s : t))
                                  : a.target === r.navigation.nextEl
                                  ? r.slideTo(t + n)
                                  : r.slideTo(t)
                                : r.slideTo(r.activeIndex);
                            }
                        } else
                          (t.isTouched = !1),
                            (t.isMoved = !1),
                            (t.startMoving = !1);
                      } else
                        t.isMoved && o.grabCursor && r.setGrabCursor(!1),
                          (t.isMoved = !1),
                          (t.startMoving = !1);
                  }
                }.bind(e)),
                (e.onDocumentTouchStart = function () {
                  this.documentTouchHandlerProceeded ||
                    ((this.documentTouchHandlerProceeded = !0),
                    this.params.touchReleaseOnEdges &&
                      (this.el.style.touchAction = "auto"));
                }.bind(e)),
                t.cssMode &&
                  (e.onScroll = function () {
                    var e = this,
                      { wrapperEl: t, rtlTranslate: i, enabled: s } = e;
                    s &&
                      ((e.previousTranslate = e.translate),
                      e.isHorizontal()
                        ? (e.translate = -t.scrollLeft)
                        : (e.translate = -t.scrollTop),
                      0 === e.translate && (e.translate = 0),
                      e.updateActiveIndex(),
                      e.updateSlidesClasses(),
                      (0 == (s = e.maxTranslate() - e.minTranslate())
                        ? 0
                        : (e.translate - e.minTranslate()) / s) !==
                        e.progress &&
                        e.updateProgress(i ? -e.translate : e.translate),
                      e.emit("setTranslate", e.translate, !1));
                  }.bind(e)),
                (e.onClick = function (e) {
                  this.enabled &&
                    !this.allowClick &&
                    (this.params.preventClicks && e.preventDefault(),
                    this.params.preventClicksPropagation) &&
                    this.animating &&
                    (e.stopPropagation(), e.stopImmediatePropagation());
                }.bind(e)),
                (e.onLoad = function (e) {
                  a(this, e.target),
                    this.params.cssMode ||
                      ("auto" !== this.params.slidesPerView &&
                        !this.params.autoHeight) ||
                      this.update();
                }.bind(e)),
                q(e, "on");
            },
            detachEvents: function () {
              q(this, "off");
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              const s = this,
                { realIndex: e, initialized: t, params: n, el: i } = s,
                r = n.breakpoints;
              if (r && 0 !== Object.keys(r).length) {
                var a = s.getBreakpoint(r, s.params.breakpointsBase, s.el);
                if (a && s.currentBreakpoint !== a) {
                  const c = (a in r ? r[a] : void 0) || s.originalParams,
                    h = W(s, n),
                    p = W(s, c),
                    f = n.enabled;
                  h && !p
                    ? (i.classList.remove(
                        n.containerModifierClass + "grid",
                        n.containerModifierClass + "grid-column"
                      ),
                      s.emitContainerClasses())
                    : !h &&
                      p &&
                      (i.classList.add(n.containerModifierClass + "grid"),
                      ((c.grid.fill && "column" === c.grid.fill) ||
                        (!c.grid.fill && "column" === n.grid.fill)) &&
                        i.classList.add(
                          n.containerModifierClass + "grid-column"
                        ),
                      s.emitContainerClasses()),
                    ["navigation", "pagination", "scrollbar"].forEach((e) => {
                      var t, i;
                      void 0 !== c[e] &&
                        ((t = n[e] && n[e].enabled),
                        (i = c[e] && c[e].enabled),
                        t && !i && s[e].disable(),
                        !t) &&
                        i &&
                        s[e].enable();
                    });
                  var o = c.direction && c.direction !== n.direction,
                    l = n.loop && (c.slidesPerView !== n.slidesPerView || o),
                    d = n.loop,
                    o =
                      (o && t && s.changeDirection(),
                      m(s.params, c),
                      s.params.enabled),
                    u = s.params.loop;
                  Object.assign(s, {
                    allowTouchMove: s.params.allowTouchMove,
                    allowSlideNext: s.params.allowSlideNext,
                    allowSlidePrev: s.params.allowSlidePrev,
                  }),
                    f && !o ? s.disable() : !f && o && s.enable(),
                    (s.currentBreakpoint = a),
                    s.emit("_beforeBreakpoint", c),
                    t &&
                      (l
                        ? (s.loopDestroy(), s.loopCreate(e), s.updateSlides())
                        : !d && u
                        ? (s.loopCreate(e), s.updateSlides())
                        : d && !u && s.loopDestroy()),
                    s.emit("breakpoint", c);
                }
              }
            },
            getBreakpoint: function (e, i, s) {
              if (
                (void 0 === i && (i = "window"), e && ("container" !== i || s))
              ) {
                let t = !1;
                const n = A(),
                  r = "window" === i ? n.innerHeight : s.clientHeight,
                  a = Object.keys(e).map((e) => {
                    var t;
                    return "string" == typeof e && 0 === e.indexOf("@")
                      ? ((t = parseFloat(e.substr(1))),
                        { value: r * t, point: e })
                      : { value: e, point: e };
                  });
                a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                for (let e = 0; e < a.length; e += 1) {
                  const { point: A, value: r } = a[e];
                  "window" === i
                    ? n.matchMedia(`(min-width: ${r}px)`).matches && (t = A)
                    : r <= s.clientWidth && (t = A);
                }
                return t || "max";
              }
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              const e = this,
                { isLocked: t, params: i } = e,
                s = i["slidesOffsetBefore"];
              if (s) {
                const t = e.slides.length - 1,
                  i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
                e.isLocked = e.size > i;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: {
            addClasses: function () {
              var { classNames: e, params: t, rtl: i, el: s, device: n } = this,
                i = (function (e, i) {
                  const s = [];
                  return (
                    e.forEach((t) => {
                      "object" == typeof t
                        ? Object.keys(t).forEach((e) => {
                            t[e] && s.push(i + e);
                          })
                        : "string" == typeof t && s.push(i + t);
                    }),
                    s
                  );
                })(
                  [
                    "initialized",
                    t.direction,
                    { "free-mode": this.params.freeMode && t.freeMode.enabled },
                    { autoheight: t.autoHeight },
                    { rtl: i },
                    { grid: t.grid && 1 < t.grid.rows },
                    {
                      "grid-column":
                        t.grid && 1 < t.grid.rows && "column" === t.grid.fill,
                    },
                    { android: n.android },
                    { ios: n.ios },
                    { "css-mode": t.cssMode },
                    { centered: t.cssMode && t.centeredSlides },
                    { "watch-progress": t.watchSlidesProgress },
                  ],
                  t.containerModifierClass
                );
              e.push(...i), s.classList.add(...e), this.emitContainerClasses();
            },
            removeClasses: function () {
              var { el: e, classNames: t } = this;
              e.classList.remove(...t), this.emitContainerClasses();
            },
          },
        },
        u = {};
      class h {
        constructor() {
          let t, i;
          for (var e = arguments.length, s = new Array(e), n = 0; n < e; n++)
            s[n] = arguments[n];
          1 === s.length &&
          s[0].constructor &&
          "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
            ? (i = s[0])
            : ([t, i] = s),
            (i = m({}, (i = i || {}))),
            t && !i.el && (i.el = t);
          var c,
            r = M();
          if (
            i.el &&
            "string" == typeof i.el &&
            1 < r.querySelectorAll(i.el).length
          ) {
            const t = [];
            return (
              r.querySelectorAll(i.el).forEach((e) => {
                e = m({}, i, { el: e });
                t.push(new h(e));
              }),
              t
            );
          }
          const a = this,
            o =
              ((a.__swiper__ = !0),
              (a.support = Y()),
              (a.device =
                (void 0 === (c = { userAgent: i.userAgent }) && (c = {}),
                (w =
                  w ||
                  (function () {
                    var e = (void 0 === c ? {} : c)["userAgent"],
                      t = Y(),
                      i = A(),
                      s = i.navigator.platform,
                      e = e || i.navigator.userAgent,
                      n = { ios: !1, android: !1 },
                      r = i.screen.width,
                      i = i.screen.height,
                      a = e.match(/(Android);?[\s\/]+([\d.]+)?/);
                    let o = e.match(/(iPad).*OS\s([\d_]+)/);
                    var l = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                      d = !o && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                      u = "Win32" === s,
                      s = "MacIntel" === s;
                    return (
                      !o &&
                        s &&
                        t.touch &&
                        0 <=
                          [
                            "1024x1366",
                            "1366x1024",
                            "834x1194",
                            "1194x834",
                            "834x1112",
                            "1112x834",
                            "768x1024",
                            "1024x768",
                            "820x1180",
                            "1180x820",
                            "810x1080",
                            "1080x810",
                          ].indexOf(r + "x" + i) &&
                        (o = (o = e.match(/(Version)\/([\d.]+)/)) || [
                          0,
                          1,
                          "13_0_0",
                        ]),
                      a && !u && ((n.os = "android"), (n.android = !0)),
                      (o || d || l) && ((n.os = "ios"), (n.ios = !0)),
                      n
                    );
                  })()))),
              (a.browser = R =
                R ||
                (function () {
                  const t = A();
                  let e = !1;
                  function i() {
                    var e = t.navigator.userAgent.toLowerCase();
                    return (
                      0 <= e.indexOf("safari") &&
                      e.indexOf("chrome") < 0 &&
                      e.indexOf("android") < 0
                    );
                  }
                  if (i()) {
                    const i = String(t.navigator.userAgent);
                    if (i.includes("Version/")) {
                      const [t, s] = i
                        .split("Version/")[1]
                        .split(" ")[0]
                        .split(".")
                        .map((e) => Number(e));
                      e = t < 16 || (16 === t && s < 2);
                    }
                  }
                  return {
                    isSafari: e || i(),
                    needPerspectiveFix: e,
                    isWebView:
                      /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                        t.navigator.userAgent
                      ),
                  };
                })()),
              (a.eventsListeners = {}),
              (a.eventsAnyListeners = []),
              (a.modules = [...a.__modules__]),
              i.modules &&
                Array.isArray(i.modules) &&
                a.modules.push(...i.modules),
              {});
          a.modules.forEach((e) => {
            var s, n;
            e({
              params: i,
              swiper: a,
              extendParams:
                ((s = i),
                (n = o),
                function (e) {
                  void 0 === e && (e = {});
                  var t = Object.keys(e)[0],
                    i = e[t];
                  "object" == typeof i &&
                    null !== i &&
                    (!0 === s[t] && (s[t] = { enabled: !0 }),
                    "navigation" === t &&
                      s[t] &&
                      s[t].enabled &&
                      !s[t].prevEl &&
                      !s[t].nextEl &&
                      (s[t].auto = !0),
                    0 <= ["pagination", "scrollbar"].indexOf(t) &&
                      s[t] &&
                      s[t].enabled &&
                      !s[t].el &&
                      (s[t].auto = !0),
                    t in s) &&
                    "enabled" in i &&
                    ("object" != typeof s[t] ||
                      "enabled" in s[t] ||
                      (s[t].enabled = !0),
                    s[t] || (s[t] = { enabled: !1 })),
                    m(n, e);
                }),
              on: a.on.bind(a),
              once: a.once.bind(a),
              off: a.off.bind(a),
              emit: a.emit.bind(a),
            });
          });
          r = m({}, $, o);
          return (
            (a.params = m({}, r, u, i)),
            (a.originalParams = m({}, a.params)),
            (a.passedParams = m({}, i)),
            a.params &&
              a.params.on &&
              Object.keys(a.params.on).forEach((e) => {
                a.on(e, a.params.on[e]);
              }),
            a.params && a.params.onAny && a.onAny(a.params.onAny),
            Object.assign(a, {
              enabled: a.params.enabled,
              el: t,
              classNames: [],
              slides: [],
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === a.params.direction,
              isVertical: () => "vertical" === a.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
              },
              allowSlideNext: a.params.allowSlideNext,
              allowSlidePrev: a.params.allowSlidePrev,
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: a.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null,
              },
              allowClick: !0,
              allowTouchMove: a.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            a.emit("_swiper"),
            a.params.init && a.init(),
            a
          );
        }
        getDirectionLabel(e) {
          return this.isHorizontal()
            ? e
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[e];
        }
        getSlideIndex(e) {
          var { slidesEl: t, params: i } = this,
            t = D(P(t, `.${i.slideClass}, swiper-slide`)[0]);
          return D(e) - t;
        }
        getSlideIndexByData(t) {
          return this.getSlideIndex(
            this.slides.filter(
              (e) => +e.getAttribute("data-swiper-slide-index") === t
            )[0]
          );
        }
        recalcSlides() {
          var { slidesEl: e, params: t } = this;
          this.slides = P(e, `.${t.slideClass}, swiper-slide`);
        }
        enable() {
          this.enabled ||
            ((this.enabled = !0),
            this.params.grabCursor && this.setGrabCursor(),
            this.emit("enable"));
        }
        disable() {
          this.enabled &&
            ((this.enabled = !1),
            this.params.grabCursor && this.unsetGrabCursor(),
            this.emit("disable"));
        }
        setProgress(e, t) {
          e = Math.min(Math.max(e, 0), 1);
          var i = this.minTranslate(),
            e = (this.maxTranslate() - i) * e + i;
          this.translateTo(e, void 0 === t ? 0 : t),
            this.updateActiveIndex(),
            this.updateSlidesClasses();
        }
        emitContainerClasses() {
          const t = this;
          var e;
          t.params._emitClasses &&
            t.el &&
            ((e = t.el.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper") ||
                  0 === e.indexOf(t.params.containerModifierClass)
              )),
            t.emit("_containerClasses", e.join(" ")));
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed
            ? ""
            : e.className
                .split(" ")
                .filter(
                  (e) =>
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(t.params.slideClass)
                )
                .join(" ");
        }
        emitSlidesClasses() {
          const i = this;
          if (i.params._emitClasses && i.el) {
            const s = [];
            i.slides.forEach((e) => {
              var t = i.getSlideClasses(e);
              s.push({ slideEl: e, classNames: t }),
                i.emit("_slideClass", e, t);
            }),
              i.emit("_slideClasses", s);
          }
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          var {
            params: i,
            slides: s,
            slidesGrid: n,
            slidesSizesGrid: r,
            size: a,
            activeIndex: o,
          } = this;
          let l = 1;
          if ("number" == typeof i.slidesPerView) return i.slidesPerView;
          if (i.centeredSlides) {
            let t,
              i = s[o] ? s[o].swiperSlideSize : 0;
            for (let e = o + 1; e < s.length; e += 1)
              s[e] &&
                !t &&
                ((i += s[e].swiperSlideSize), (l += 1), i > a) &&
                (t = !0);
            for (let e = o - 1; 0 <= e; --e)
              s[e] &&
                !t &&
                ((i += s[e].swiperSlideSize), (l += 1), i > a) &&
                (t = !0);
          } else if ("current" === e)
            for (let e = o + 1; e < s.length; e += 1)
              (t ? n[e] + r[e] - n[o] < a : n[e] - n[o] < a) && (l += 1);
          else for (let e = o - 1; 0 <= e; --e) n[o] - n[e] < a && (l += 1);
          return l;
        }
        update() {
          const t = this;
          if (t && !t.destroyed) {
            const { snapGrid: s, params: n } = t;
            let e;
            if (
              (n.breakpoints && t.setBreakpoint(),
              [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
                e.complete && a(t, e);
              }),
              t.updateSize(),
              t.updateSlides(),
              t.updateProgress(),
              t.updateSlidesClasses(),
              n.freeMode && n.freeMode.enabled && !n.cssMode)
            )
              i(), n.autoHeight && t.updateAutoHeight();
            else {
              if (
                ("auto" === n.slidesPerView || 1 < n.slidesPerView) &&
                t.isEnd &&
                !n.centeredSlides
              ) {
                const s = (t.virtual && n.virtual.enabled ? t.virtual : t)
                  .slides;
                e = t.slideTo(s.length - 1, 0, !1, !0);
              } else e = t.slideTo(t.activeIndex, 0, !1, !0);
              e || i();
            }
            function i() {
              var e = t.rtlTranslate ? -1 * t.translate : t.translate,
                e = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
              t.setTranslate(e), t.updateActiveIndex(), t.updateSlidesClasses();
            }
            n.watchOverflow && s !== t.snapGrid && t.checkOverflow(),
              t.emit("update");
          }
        }
        changeDirection(t, e) {
          void 0 === e && (e = !0);
          var i = this,
            s = i.params.direction;
          return (
            (t = t || ("horizontal" === s ? "vertical" : "horizontal")) === s ||
              ("horizontal" !== t && "vertical" !== t) ||
              (i.el.classList.remove("" + i.params.containerModifierClass + s),
              i.el.classList.add("" + i.params.containerModifierClass + t),
              i.emitContainerClasses(),
              (i.params.direction = t),
              i.slides.forEach((e) => {
                "vertical" === t ? (e.style.width = "") : (e.style.height = "");
              }),
              i.emit("changeDirection"),
              e && i.update()),
            i
          );
        }
        changeLanguageDirection(e) {
          var t = this;
          (t.rtl && "rtl" === e) ||
            (!t.rtl && "ltr" === e) ||
            ((t.rtl = "rtl" === e),
            (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
            t.rtl
              ? (t.el.classList.add(t.params.containerModifierClass + "rtl"),
                (t.el.dir = "rtl"))
              : (t.el.classList.remove(t.params.containerModifierClass + "rtl"),
                (t.el.dir = "ltr")),
            t.update());
        }
        mount(i) {
          const s = this;
          if (!s.mounted) {
            let e = i || s.params.el;
            if (!(e = "string" == typeof e ? document.querySelector(e) : e))
              return !1;
            (e.swiper = s),
              e.parentNode &&
                e.parentNode.host &&
                "SWIPER-CONTAINER" === e.parentNode.host.nodeName &&
                (s.isElement = !0);
            const n = () =>
              "." + (s.params.wrapperClass || "").trim().split(" ").join(".");
            let t =
              e && e.shadowRoot && e.shadowRoot.querySelector
                ? e.shadowRoot.querySelector(n())
                : P(e, n())[0];
            !t &&
              s.params.createElements &&
              ((t = L("div", s.params.wrapperClass)),
              e.append(t),
              P(e, "." + s.params.slideClass).forEach((e) => {
                t.append(e);
              })),
              Object.assign(s, {
                el: e,
                wrapperEl: t,
                slidesEl:
                  s.isElement && !e.parentNode.host.slideSlots
                    ? e.parentNode.host
                    : t,
                hostEl: s.isElement ? e.parentNode.host : e,
                mounted: !0,
                rtl:
                  "rtl" === e.dir.toLowerCase() || "rtl" === T(e, "direction"),
                rtlTranslate:
                  "horizontal" === s.params.direction &&
                  ("rtl" === e.dir.toLowerCase() ||
                    "rtl" === T(e, "direction")),
                wrongRTL: "-webkit-box" === T(t, "display"),
              });
          }
          return !0;
        }
        init(e) {
          const t = this;
          return (
            t.initialized ||
              (!1 !== t.mount(e) &&
                (t.emit("beforeInit"),
                t.params.breakpoints && t.setBreakpoint(),
                t.addClasses(),
                t.updateSize(),
                t.updateSlides(),
                t.params.watchOverflow && t.checkOverflow(),
                t.params.grabCursor && t.enabled && t.setGrabCursor(),
                t.params.loop && t.virtual && t.params.virtual.enabled
                  ? t.slideTo(
                      t.params.initialSlide + t.virtual.slidesBefore,
                      0,
                      t.params.runCallbacksOnInit,
                      !1,
                      !0
                    )
                  : t.slideTo(
                      t.params.initialSlide,
                      0,
                      t.params.runCallbacksOnInit,
                      !1,
                      !0
                    ),
                t.params.loop && t.loopCreate(),
                t.attachEvents(),
                (e = [...t.el.querySelectorAll('[loading="lazy"]')]),
                t.isElement &&
                  e.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
                e.forEach((e) => {
                  e.complete
                    ? a(t, e)
                    : e.addEventListener("load", (e) => {
                        a(t, e.target);
                      });
                }),
                c(t),
                (t.initialized = !0),
                c(t),
                t.emit("init"),
                t.emit("afterInit"))),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const i = this,
            { params: s, el: n, wrapperEl: r, slides: a } = i;
          if (void 0 !== i.params && !i.destroyed) {
            if (
              (i.emit("beforeDestroy"),
              (i.initialized = !1),
              i.detachEvents(),
              s.loop && i.loopDestroy(),
              t &&
                (i.removeClasses(),
                n.removeAttribute("style"),
                r.removeAttribute("style"),
                a) &&
                a.length &&
                a.forEach((e) => {
                  e.classList.remove(
                    s.slideVisibleClass,
                    s.slideFullyVisibleClass,
                    s.slideActiveClass,
                    s.slideNextClass,
                    s.slidePrevClass
                  ),
                    e.removeAttribute("style"),
                    e.removeAttribute("data-swiper-slide-index");
                }),
              i.emit("destroy"),
              Object.keys(i.eventsListeners).forEach((e) => {
                i.off(e);
              }),
              !1 !== e)
            ) {
              i.el.swiper = null;
              {
                const o = i;
                Object.keys(o).forEach((e) => {
                  try {
                    o[e] = null;
                  } catch (e) {}
                  try {
                    delete o[e];
                  } catch (e) {}
                });
              }
            }
            i.destroyed = !0;
          }
          return null;
        }
        static extendDefaults(e) {
          m(u, e);
        }
        static get extendedDefaults() {
          return u;
        }
        static get defaults() {
          return $;
        }
        static installModule(e) {
          h.prototype.__modules__ || (h.prototype.__modules__ = []);
          var t = h.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
          return (
            Array.isArray(e)
              ? e.forEach((e) => h.installModule(e))
              : h.installModule(e),
            h
          );
        }
      }
      function B(i, s, n, r) {
        return (
          i.params.createElements &&
            Object.keys(r).forEach((t) => {
              if (!n[t] && !0 === n.auto) {
                let e = P(i.el, "." + r[t])[0];
                e || (((e = L("div", r[t])).className = r[t]), i.el.append(e)),
                  (n[t] = e),
                  (s[t] = e);
              }
            }),
          n
        );
      }
      function N(e) {
        return (
          "." +
          (e = void 0 === e ? "" : e)
            .trim()
            .replace(/([\.:!+\/])/g, "\\$1")
            .replace(/ /g, ".")
        );
      }
      function p(e) {
        const {
          effect: i,
          swiper: s,
          on: t,
          setTranslate: n,
          setTransition: r,
          overwriteParams: a,
          perspective: o,
          recreateShadows: l,
          getEffectParams: d,
        } = e;
        let u;
        t("beforeInit", () => {
          var e;
          s.params.effect === i &&
            (s.classNames.push("" + s.params.containerModifierClass + i),
            o &&
              o() &&
              s.classNames.push(s.params.containerModifierClass + "3d"),
            (e = a ? a() : {}),
            Object.assign(s.params, e),
            Object.assign(s.originalParams, e));
        }),
          t("setTranslate", () => {
            s.params.effect === i && n();
          }),
          t("setTransition", (e, t) => {
            s.params.effect === i && r(t);
          }),
          t("transitionEnd", () => {
            s.params.effect === i &&
              l &&
              d &&
              d().slideShadows &&
              (s.slides.forEach((e) => {
                e.querySelectorAll(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                ).forEach((e) => e.remove());
              }),
              l());
          }),
          t("virtualUpdate", () => {
            s.params.effect === i &&
              (s.slides.length || (u = !0),
              requestAnimationFrame(() => {
                u && s.slides && s.slides.length && (n(), (u = !1));
              }));
          });
      }
      function _(e, t) {
        var i = r(t);
        return (
          i !== t &&
            ((i.style.backfaceVisibility = "hidden"),
            (i.style["-webkit-backface-visibility"] = "hidden")),
          i
        );
      }
      function f(e) {
        let { swiper: i, duration: t, transformElements: s, allSlides: n } = e;
        const r = i["activeIndex"];
        if (i.params.virtualTranslate && 0 !== t) {
          let t = !1;
          (n
            ? s
            : s.filter((e) => {
                var t,
                  e = e.classList.contains("swiper-slide-transform")
                    ? (t = e).parentElement ||
                      i.slides.filter(
                        (e) => e.shadowRoot && e.shadowRoot === t.parentNode
                      )[0]
                    : e;
                return i.getSlideIndex(e) === r;
              })
          ).forEach((e) => {
            g(e, () => {
              var e;
              t ||
                (i &&
                  !i.destroyed &&
                  ((t = !0),
                  (i.animating = !1),
                  (e = new window.CustomEvent("transitionend", {
                    bubbles: !0,
                    cancelable: !0,
                  })),
                  i.wrapperEl.dispatchEvent(e)));
            });
          });
        }
      }
      function x(e, t, i) {
        (i =
          "swiper-slide-shadow" +
          (i ? "-" + i : "") +
          (e ? " swiper-slide-shadow-" + e : "")),
          (e = r(t));
        let s = e.querySelector("." + i.split(" ").join("."));
        return s || ((s = L("div", i.split(" "))), e.append(s)), s;
      }
      return (
        Object.keys(o).forEach((t) => {
          Object.keys(o[t]).forEach((e) => {
            h.prototype[e] = o[t][e];
          });
        }),
        h.use([
          function (e) {
            let { swiper: r, on: t, emit: i } = e;
            const s = A();
            let n = null,
              a = null;
            const o = () => {
                r &&
                  !r.destroyed &&
                  r.initialized &&
                  (i("beforeResize"), i("resize"));
              },
              l = () => {
                r && !r.destroyed && r.initialized && i("orientationchange");
              };
            t("init", () => {
              r.params.resizeObserver && void 0 !== s.ResizeObserver
                ? r &&
                  !r.destroyed &&
                  r.initialized &&
                  (n = new ResizeObserver((i) => {
                    a = s.requestAnimationFrame(() => {
                      var { width: e, height: t } = r;
                      let s = e,
                        n = t;
                      i.forEach((e) => {
                        var {
                          contentBoxSize: e,
                          contentRect: t,
                          target: i,
                        } = e;
                        (i && i !== r.el) ||
                          ((s = t ? t.width : (e[0] || e).inlineSize),
                          (n = t ? t.height : (e[0] || e).blockSize));
                      }),
                        (s === e && n === t) || o();
                    });
                  })).observe(r.el)
                : (s.addEventListener("resize", o),
                  s.addEventListener("orientationchange", l));
            }),
              t("destroy", () => {
                a && s.cancelAnimationFrame(a),
                  n && n.unobserve && r.el && (n.unobserve(r.el), (n = null)),
                  s.removeEventListener("resize", o),
                  s.removeEventListener("orientationchange", l);
              });
          },
          function (e) {
            let { swiper: s, extendParams: t, on: i, emit: n } = e;
            function r(e, t) {
              void 0 === t && (t = {});
              var i = new (o.MutationObserver || o.WebkitMutationObserver)(
                (e) => {
                  var t;
                  s.__preventObserver__ ||
                    (1 === e.length
                      ? n("observerUpdate", e[0])
                      : ((t = function () {
                          n("observerUpdate", e[0]);
                        }),
                        o.requestAnimationFrame
                          ? o.requestAnimationFrame(t)
                          : o.setTimeout(t, 0)));
                }
              );
              i.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                a.push(i);
            }
            const a = [],
              o = A();
            t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              i("init", () => {
                if (s.params.observer) {
                  if (s.params.observeParents) {
                    var t = z(s.hostEl);
                    for (let e = 0; e < t.length; e += 1) r(t[e]);
                  }
                  r(s.hostEl, { childList: s.params.observeSlideChildren }),
                    r(s.wrapperEl, { attributes: !1 });
                }
              }),
              i("destroy", () => {
                a.forEach((e) => {
                  e.disconnect();
                }),
                  a.splice(0, a.length);
              });
          },
        ]),
        h.use([
          function (e) {
            let t,
              { swiper: E, extendParams: i, on: s, emit: C } = e;
            i({
              virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0,
              },
            });
            e = M();
            E.virtual = {
              cache: {},
              from: void 0,
              to: void 0,
              slides: [],
              offset: 0,
              slidesGrid: [],
            };
            const n = e.createElement("div");
            function T(e, t) {
              var i = E.params.virtual;
              if (i.cache && E.virtual.cache[t]) return E.virtual.cache[t];
              let s;
              return (
                i.renderSlide
                  ? "string" == typeof (s = i.renderSlide.call(E, e, t)) &&
                    ((n.innerHTML = s), (s = n.children[0]))
                  : (s = E.isElement
                      ? L("swiper-slide")
                      : L("div", E.params.slideClass)),
                s.setAttribute("data-swiper-slide-index", t),
                i.renderSlide || (s.innerHTML = e),
                i.cache && (E.virtual.cache[t] = s),
                s
              );
            }
            function a(t) {
              const {
                  slidesPerView: i,
                  slidesPerGroup: e,
                  centeredSlides: s,
                  loop: n,
                } = E.params,
                { addSlidesBefore: r, addSlidesAfter: a } = E.params.virtual,
                {
                  from: o,
                  to: l,
                  slides: d,
                  slidesGrid: u,
                  offset: c,
                } = E.virtual;
              E.params.cssMode || E.updateActiveIndex();
              var h = E.activeIndex || 0;
              let p,
                f,
                m,
                g =
                  ((p = E.rtlTranslate
                    ? "right"
                    : E.isHorizontal()
                    ? "left"
                    : "top"),
                  h -
                    (m = s
                      ? ((f = Math.floor(i / 2) + e + a),
                        Math.floor(i / 2) + e + r)
                      : ((f = i + (e - 1) + a), (n ? i : e) + r))),
                v = h + f,
                y =
                  (n || ((g = Math.max(g, 0)), (v = Math.min(v, d.length - 1))),
                  (E.slidesGrid[g] || 0) - (E.slidesGrid[0] || 0));
              function b() {
                E.updateSlides(),
                  E.updateProgress(),
                  E.updateSlidesClasses(),
                  C("virtualUpdate");
              }
              if (
                (n && h >= m
                  ? ((g -= m), s || (y += E.slidesGrid[0]))
                  : n && h < m && ((g = -m), s) && (y += E.slidesGrid[0]),
                Object.assign(E.virtual, {
                  from: g,
                  to: v,
                  offset: y,
                  slidesGrid: E.slidesGrid,
                  slidesBefore: m,
                  slidesAfter: f,
                }),
                o !== g || l !== v || t)
              )
                if (E.params.virtual.renderExternal)
                  E.params.virtual.renderExternal.call(E, {
                    offset: y,
                    from: g,
                    to: v,
                    slides: (function () {
                      var t = [];
                      for (let e = g; e <= v; e += 1) t.push(d[e]);
                      return t;
                    })(),
                  }),
                    E.params.virtual.renderExternalUpdate
                      ? b()
                      : C("virtualUpdate");
                else {
                  var w = [],
                    _ = [],
                    D = (e) => {
                      let t = e;
                      return (
                        e < 0
                          ? (t = d.length + e)
                          : t >= d.length && (t -= d.length),
                        t
                      );
                    };
                  if (t)
                    E.slides
                      .filter((e) =>
                        e.matches(`.${E.params.slideClass}, swiper-slide`)
                      )
                      .forEach((e) => {
                        e.remove();
                      });
                  else
                    for (let e = o; e <= l; e += 1)
                      if (e < g || e > v) {
                        const i = D(e);
                        E.slides
                          .filter((e) =>
                            e.matches(
                              `.${E.params.slideClass}[data-swiper-slide-index="${i}"], swiper-slide[data-swiper-slide-index="${i}"]`
                            )
                          )
                          .forEach((e) => {
                            e.remove();
                          });
                      }
                  var h = n ? -d.length : 0,
                    x = n ? 2 * d.length : d.length;
                  for (let e = h; e < x; e += 1)
                    if (e >= g && e <= v) {
                      const E = D(e);
                      void 0 === l || t
                        ? _.push(E)
                        : (e > l && _.push(E), e < o && w.push(E));
                    }
                  if (
                    (_.forEach((e) => {
                      E.slidesEl.append(T(d[e], e));
                    }),
                    n)
                  )
                    for (let e = w.length - 1; 0 <= e; --e) {
                      const i = w[e];
                      E.slidesEl.prepend(T(d[i], i));
                    }
                  else
                    w.sort((e, t) => t - e),
                      w.forEach((e) => {
                        E.slidesEl.prepend(T(d[e], e));
                      });
                  P(E.slidesEl, ".swiper-slide, swiper-slide").forEach((e) => {
                    e.style[p] = y - Math.abs(E.cssOverflowAdjustment()) + "px";
                  }),
                    b();
                }
              else
                E.slidesGrid !== u &&
                  y !== c &&
                  E.slides.forEach((e) => {
                    e.style[p] = y - Math.abs(E.cssOverflowAdjustment()) + "px";
                  }),
                  E.updateProgress(),
                  C("virtualUpdate");
            }
            s("beforeInit", () => {
              if (E.params.virtual.enabled) {
                let e;
                var t;
                void 0 === E.passedParams.virtual.slides &&
                  (t = [...E.slidesEl.children].filter((e) =>
                    e.matches(`.${E.params.slideClass}, swiper-slide`)
                  )) &&
                  t.length &&
                  ((E.virtual.slides = [...t]),
                  (e = !0),
                  t.forEach((e, t) => {
                    e.setAttribute("data-swiper-slide-index", t),
                      (E.virtual.cache[t] = e).remove();
                  })),
                  e || (E.virtual.slides = E.params.virtual.slides),
                  E.classNames.push(
                    E.params.containerModifierClass + "virtual"
                  ),
                  (E.params.watchSlidesProgress = !0),
                  (E.originalParams.watchSlidesProgress = !0),
                  a();
              }
            }),
              s("setTranslate", () => {
                E.params.virtual.enabled &&
                  (E.params.cssMode && !E._immediateVirtual
                    ? (clearTimeout(t),
                      (t = setTimeout(() => {
                        a();
                      }, 100)))
                    : a());
              }),
              s("init update resize", () => {
                E.params.virtual.enabled &&
                  E.params.cssMode &&
                  S(E.wrapperEl, "--swiper-virtual-size", E.virtualSize + "px");
              }),
              Object.assign(E.virtual, {
                appendSlide: function (t) {
                  if ("object" == typeof t && "length" in t)
                    for (let e = 0; e < t.length; e += 1)
                      t[e] && E.virtual.slides.push(t[e]);
                  else E.virtual.slides.push(t);
                  a(!0);
                },
                prependSlide: function (s) {
                  const n = E.activeIndex;
                  let e = n + 1,
                    r = 1;
                  if (Array.isArray(s)) {
                    for (let e = 0; e < s.length; e += 1)
                      s[e] && E.virtual.slides.unshift(s[e]);
                    (e = n + s.length), (r = s.length);
                  } else E.virtual.slides.unshift(s);
                  if (E.params.virtual.cache) {
                    const s = E.virtual.cache,
                      n = {};
                    Object.keys(s).forEach((e) => {
                      var t = s[e],
                        i = t.getAttribute("data-swiper-slide-index");
                      i &&
                        t.setAttribute(
                          "data-swiper-slide-index",
                          parseInt(i, 10) + r
                        ),
                        (n[parseInt(e, 10) + r] = t);
                    }),
                      (E.virtual.cache = n);
                  }
                  a(!0), E.slideTo(e, 0);
                },
                removeSlide: function (i) {
                  if (null != i) {
                    let t = E.activeIndex;
                    if (Array.isArray(i))
                      for (let e = i.length - 1; 0 <= e; --e)
                        E.params.virtual.cache &&
                          (delete E.virtual.cache[i[e]],
                          Object.keys(E.virtual.cache).forEach((e) => {
                            i < e &&
                              ((E.virtual.cache[e - 1] = E.virtual.cache[e]),
                              E.virtual.cache[e - 1].setAttribute(
                                "data-swiper-slide-index",
                                e - 1
                              ),
                              delete E.virtual.cache[e]);
                          })),
                          E.virtual.slides.splice(i[e], 1),
                          i[e] < t && --t,
                          (t = Math.max(t, 0));
                    else
                      E.params.virtual.cache &&
                        (delete E.virtual.cache[i],
                        Object.keys(E.virtual.cache).forEach((e) => {
                          i < e &&
                            ((E.virtual.cache[e - 1] = E.virtual.cache[e]),
                            E.virtual.cache[e - 1].setAttribute(
                              "data-swiper-slide-index",
                              e - 1
                            ),
                            delete E.virtual.cache[e]);
                        })),
                        E.virtual.slides.splice(i, 1),
                        i < t && --t,
                        (t = Math.max(t, 0));
                    a(!0), E.slideTo(t, 0);
                  }
                },
                removeAllSlides: function () {
                  (E.virtual.slides = []),
                    E.params.virtual.cache && (E.virtual.cache = {}),
                    a(!0),
                    E.slideTo(0, 0);
                },
                update: a,
              });
          },
          function (e) {
            let { swiper: c, extendParams: t, on: i, emit: h } = e;
            const p = M(),
              f = A();
            function s(t) {
              if (c.enabled) {
                const i = c["rtlTranslate"];
                let e = t;
                const s =
                    (e = e.originalEvent ? e.originalEvent : e).keyCode ||
                    e.charCode,
                  n = c.params.keyboard.pageUpDown,
                  r = n && 33 === s,
                  a = n && 34 === s,
                  o = 37 === s,
                  l = 39 === s,
                  d = 38 === s,
                  u = 40 === s;
                if (
                  !c.allowSlideNext &&
                  ((c.isHorizontal() && l) || (c.isVertical() && u) || a)
                )
                  return !1;
                if (
                  !c.allowSlidePrev &&
                  ((c.isHorizontal() && o) || (c.isVertical() && d) || r)
                )
                  return !1;
                if (
                  !(
                    e.shiftKey ||
                    e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    (p.activeElement &&
                      p.activeElement.nodeName &&
                      ("input" === p.activeElement.nodeName.toLowerCase() ||
                        "textarea" === p.activeElement.nodeName.toLowerCase()))
                  )
                ) {
                  if (
                    c.params.keyboard.onlyInViewport &&
                    (r || a || o || l || d || u)
                  ) {
                    let t = !1;
                    if (
                      0 <
                        z(c.el, `.${c.params.slideClass}, swiper-slide`)
                          .length &&
                      0 === z(c.el, "." + c.params.slideActiveClass).length
                    )
                      return;
                    const e = c.el,
                      s = e.clientWidth,
                      n = e.clientHeight,
                      h = f.innerWidth,
                      p = f.innerHeight,
                      r = O(e),
                      a =
                        (i && (r.left -= e.scrollLeft),
                        [
                          [r.left, r.top],
                          [r.left + s, r.top],
                          [r.left, r.top + n],
                          [r.left + s, r.top + n],
                        ]);
                    for (let e = 0; e < a.length; e += 1) {
                      const i = a[e];
                      0 <= i[0] &&
                        i[0] <= h &&
                        0 <= i[1] &&
                        i[1] <= p &&
                        ((0 === i[0] && 0 === i[1]) || (t = !0));
                    }
                    if (!t) return;
                  }
                  c.isHorizontal()
                    ? ((r || a || o || l) &&
                        (e.preventDefault
                          ? e.preventDefault()
                          : (e.returnValue = !1)),
                      (((a || l) && !i) || ((r || o) && i)) && c.slideNext(),
                      (((r || o) && !i) || ((a || l) && i)) && c.slidePrev())
                    : ((r || a || d || u) &&
                        (e.preventDefault
                          ? e.preventDefault()
                          : (e.returnValue = !1)),
                      (a || u) && c.slideNext(),
                      (r || d) && c.slidePrev()),
                    h("keyPress", s);
                }
              }
            }
            function n() {
              c.keyboard.enabled ||
                (p.addEventListener("keydown", s), (c.keyboard.enabled = !0));
            }
            function r() {
              c.keyboard.enabled &&
                (p.removeEventListener("keydown", s),
                (c.keyboard.enabled = !1));
            }
            (c.keyboard = { enabled: !1 }),
              t({
                keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 },
              }),
              i("init", () => {
                c.params.keyboard.enabled && n();
              }),
              i("destroy", () => {
                c.keyboard.enabled && r();
              }),
              Object.assign(c.keyboard, { enable: n, disable: r });
          },
          function (e) {
            let { swiper: u, extendParams: t, on: i, emit: c } = e;
            const s = A();
            let h;
            t({
              mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null,
                noMousewheelClass: "swiper-no-mousewheel",
              },
            }),
              (u.mousewheel = { enabled: !1 });
            let p,
              n = v();
            const f = [];
            function r() {
              u.enabled && (u.mouseEntered = !0);
            }
            function a() {
              u.enabled && (u.mouseEntered = !1);
            }
            function m(e) {
              (u.params.mousewheel.thresholdDelta &&
                e.delta < u.params.mousewheel.thresholdDelta) ||
                (u.params.mousewheel.thresholdTime &&
                  v() - n < u.params.mousewheel.thresholdTime) ||
                (6 <= e.delta && v() - n < 60) ||
                (e.direction < 0
                  ? (u.isEnd && !u.params.loop) ||
                    u.animating ||
                    (u.slideNext(), c("scroll", e.raw))
                  : (u.isBeginning && !u.params.loop) ||
                    u.animating ||
                    (u.slidePrev(), c("scroll", e.raw)),
                (n = new s.Date().getTime()));
            }
            function o(s) {
              let n = s,
                r = !0;
              if (
                u.enabled &&
                !s.target.closest("." + u.params.mousewheel.noMousewheelClass)
              ) {
                var a = u.params.mousewheel;
                u.params.cssMode && n.preventDefault();
                let e = u.el;
                const d =
                  (e =
                    "container" !== u.params.mousewheel.eventsTarget
                      ? document.querySelector(u.params.mousewheel.eventsTarget)
                      : e) && e.contains(n.target);
                if (!u.mouseEntered && !d && !a.releaseOnEdges) return !0;
                n.originalEvent && (n = n.originalEvent);
                let t = 0;
                var o = u.rtlTranslate ? -1 : 1,
                  l = (function (e) {
                    let t = 0,
                      i = 0,
                      s = 0,
                      n = 0;
                    return (
                      "detail" in e && (i = e.detail),
                      "wheelDelta" in e && (i = -e.wheelDelta / 120),
                      "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120),
                      "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                      "axis" in e &&
                        e.axis === e.HORIZONTAL_AXIS &&
                        ((t = i), (i = 0)),
                      (s = 10 * t),
                      (n = 10 * i),
                      "deltaY" in e && (n = e.deltaY),
                      "deltaX" in e && (s = e.deltaX),
                      e.shiftKey && !s && ((s = n), (n = 0)),
                      (s || n) &&
                        e.deltaMode &&
                        (1 === e.deltaMode
                          ? ((s *= 40), (n *= 40))
                          : ((s *= 800), (n *= 800))),
                      s && !t && (t = s < 1 ? -1 : 1),
                      n && !i && (i = n < 1 ? -1 : 1),
                      { spinX: t, spinY: i, pixelX: s, pixelY: n }
                    );
                  })(n);
                if (a.forceToAxis)
                  if (u.isHorizontal()) {
                    if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
                    t = -l.pixelX * o;
                  } else {
                    if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
                    t = -l.pixelY;
                  }
                else
                  t =
                    Math.abs(l.pixelX) > Math.abs(l.pixelY)
                      ? -l.pixelX * o
                      : -l.pixelY;
                if (0 === t) return !0;
                a.invert && (t = -t);
                let i = u.getTranslate() + t * a.sensitivity;
                if (
                  ((i = i >= u.minTranslate() ? u.minTranslate() : i) <=
                    u.maxTranslate() && (i = u.maxTranslate()),
                  (r =
                    !!u.params.loop ||
                    !(i === u.minTranslate() || i === u.maxTranslate())) &&
                    u.params.nested &&
                    n.stopPropagation(),
                  u.params.freeMode && u.params.freeMode.enabled)
                ) {
                  const s = {
                      time: v(),
                      delta: Math.abs(t),
                      direction: Math.sign(t),
                    },
                    r =
                      p &&
                      s.time < p.time + 500 &&
                      s.delta <= p.delta &&
                      s.direction === p.direction;
                  if (!r) {
                    p = void 0;
                    let e = u.getTranslate() + t * a.sensitivity;
                    const v = u.isBeginning,
                      d = u.isEnd;
                    if (
                      ((e = e >= u.minTranslate() ? u.minTranslate() : e) <=
                        u.maxTranslate() && (e = u.maxTranslate()),
                      u.setTransition(0),
                      u.setTranslate(e),
                      u.updateProgress(),
                      u.updateActiveIndex(),
                      u.updateSlidesClasses(),
                      ((!v && u.isBeginning) || (!d && u.isEnd)) &&
                        u.updateSlidesClasses(),
                      u.params.loop &&
                        u.loopFix({
                          direction: s.direction < 0 ? "next" : "prev",
                          byMousewheel: !0,
                        }),
                      u.params.freeMode.sticky)
                    ) {
                      clearTimeout(h),
                        (h = void 0),
                        15 <= f.length && f.shift();
                      const n = f.length ? f[f.length - 1] : void 0,
                        r = f[0];
                      if (
                        (f.push(s),
                        n && (s.delta > n.delta || s.direction !== n.direction))
                      )
                        f.splice(0);
                      else if (
                        15 <= f.length &&
                        s.time - r.time < 500 &&
                        1 <= r.delta - s.delta &&
                        s.delta <= 6
                      ) {
                        const n = 0 < t ? 0.8 : 0.2;
                        (p = s),
                          f.splice(0),
                          (h = C(() => {
                            u.slideToClosest(u.params.speed, !0, void 0, n);
                          }, 0));
                      }
                      h =
                        h ||
                        C(() => {
                          (p = s),
                            f.splice(0),
                            u.slideToClosest(u.params.speed, !0, void 0, 0.5);
                        }, 500);
                    }
                    if (
                      (r || c("scroll", n),
                      u.params.autoplay &&
                        u.params.autoplayDisableOnInteraction &&
                        u.autoplay.stop(),
                      a.releaseOnEdges &&
                        (e === u.minTranslate() || e === u.maxTranslate()))
                    )
                      return !0;
                  }
                } else {
                  const n = {
                      time: v(),
                      delta: Math.abs(t),
                      direction: Math.sign(t),
                      raw: s,
                    },
                    r =
                      (2 <= f.length && f.shift(),
                      f.length ? f[f.length - 1] : void 0);
                  if (
                    (f.push(n),
                    (!r ||
                      n.direction !== r.direction ||
                      n.delta > r.delta ||
                      n.time > r.time + 150) &&
                      m(n),
                    (function (e) {
                      var t = u.params.mousewheel;
                      if (e.direction < 0) {
                        if (u.isEnd && !u.params.loop && t.releaseOnEdges)
                          return 1;
                      } else if (
                        u.isBeginning &&
                        !u.params.loop &&
                        t.releaseOnEdges
                      )
                        return 1;
                    })(n))
                  )
                    return !0;
                }
                return (
                  n.preventDefault ? n.preventDefault() : (n.returnValue = !1),
                  !1
                );
              }
            }
            function l(e) {
              let t = u.el;
              (t =
                "container" !== u.params.mousewheel.eventsTarget
                  ? document.querySelector(u.params.mousewheel.eventsTarget)
                  : t)[e]("mouseenter", r),
                t[e]("mouseleave", a),
                t[e]("wheel", o);
            }
            function d() {
              return u.params.cssMode
                ? (u.wrapperEl.removeEventListener("wheel", o), !0)
                : !u.mousewheel.enabled &&
                    (l("addEventListener"), (u.mousewheel.enabled = !0));
            }
            function g() {
              return u.params.cssMode
                ? (u.wrapperEl.addEventListener(event, o), !0)
                : !!u.mousewheel.enabled &&
                    (l("removeEventListener"), !(u.mousewheel.enabled = !1));
            }
            i("init", () => {
              !u.params.mousewheel.enabled && u.params.cssMode && g(),
                u.params.mousewheel.enabled && d();
            }),
              i("destroy", () => {
                u.params.cssMode && d(), u.mousewheel.enabled && g();
              }),
              Object.assign(u.mousewheel, { enable: d, disable: g });
          },
          function (e) {
            let { swiper: n, extendParams: t, on: i, emit: r } = e;
            t({
              navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
                navigationDisabledClass: "swiper-navigation-disabled",
              },
            }),
              (n.navigation = { nextEl: null, prevEl: null });
            const a = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
            function o(e) {
              let t;
              return !(
                e &&
                "string" == typeof e &&
                n.isElement &&
                (t = n.el.querySelector(e))
              ) &&
                (e &&
                  ("string" == typeof e &&
                    (t = [...document.querySelectorAll(e)]),
                  n.params.uniqueNavElements) &&
                  "string" == typeof e &&
                  1 < t.length &&
                  1 === n.el.querySelectorAll(e).length &&
                  (t = n.el.querySelector(e)),
                e) &&
                !t
                ? e
                : t;
            }
            function s(e, t) {
              const i = n.params.navigation;
              (e = a(e)).forEach((e) => {
                e &&
                  (e.classList[t ? "add" : "remove"](
                    ...i.disabledClass.split(" ")
                  ),
                  "BUTTON" === e.tagName && (e.disabled = t),
                  n.params.watchOverflow) &&
                  n.enabled &&
                  e.classList[n.isLocked ? "add" : "remove"](i.lockClass);
              });
            }
            function l() {
              var { nextEl: e, prevEl: t } = n.navigation;
              n.params.loop
                ? (s(t, !1), s(e, !1))
                : (s(t, n.isBeginning && !n.params.rewind),
                  s(e, n.isEnd && !n.params.rewind));
            }
            function d(e) {
              e.preventDefault(),
                (n.isBeginning && !n.params.loop && !n.params.rewind) ||
                  (n.slidePrev(), r("navigationPrev"));
            }
            function u(e) {
              e.preventDefault(),
                (n.isEnd && !n.params.loop && !n.params.rewind) ||
                  (n.slideNext(), r("navigationNext"));
            }
            function c() {
              const i = n.params.navigation;
              if (
                ((n.params.navigation = B(
                  n,
                  n.originalParams.navigation,
                  n.params.navigation,
                  { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
                )),
                i.nextEl || i.prevEl)
              ) {
                var e = o(i.nextEl),
                  t = o(i.prevEl);
                Object.assign(n.navigation, { nextEl: e, prevEl: t }),
                  (e = a(e)),
                  (t = a(t));
                const s = (e, t) => {
                  e && e.addEventListener("click", "next" === t ? u : d),
                    !n.enabled &&
                      e &&
                      e.classList.add(...i.lockClass.split(" "));
                };
                e.forEach((e) => s(e, "next")), t.forEach((e) => s(e, "prev"));
              }
            }
            function h() {
              var { nextEl: e, prevEl: t } = n.navigation,
                e = a(e),
                t = a(t);
              const i = (e, t) => {
                e.removeEventListener("click", "next" === t ? u : d),
                  e.classList.remove(
                    ...n.params.navigation.disabledClass.split(" ")
                  );
              };
              e.forEach((e) => i(e, "next")), t.forEach((e) => i(e, "prev"));
            }
            i("init", () => {
              (!1 === n.params.navigation.enabled ? p : (c(), l))();
            }),
              i("toEdge fromEdge lock unlock", () => {
                l();
              }),
              i("destroy", () => {
                h();
              }),
              i("enable disable", () => {
                var { nextEl: e, prevEl: t } = n.navigation,
                  e = a(e),
                  t = a(t);
                n.enabled
                  ? l()
                  : [...e, ...t]
                      .filter((e) => !!e)
                      .forEach((e) =>
                        e.classList.add(n.params.navigation.lockClass)
                      );
              }),
              i("click", (e, t) => {
                var { nextEl: i, prevEl: s } = n.navigation,
                  i = a(i),
                  s = a(s),
                  t = t.target;
                if (
                  n.params.navigation.hideOnClick &&
                  !s.includes(t) &&
                  !i.includes(t) &&
                  (!(
                    n.pagination &&
                    n.params.pagination &&
                    n.params.pagination.clickable
                  ) ||
                    (n.pagination.el !== t && !n.pagination.el.contains(t)))
                ) {
                  let e;
                  i.length
                    ? (e = i[0].classList.contains(
                        n.params.navigation.hiddenClass
                      ))
                    : s.length &&
                      (e = s[0].classList.contains(
                        n.params.navigation.hiddenClass
                      )),
                    r(!0 === e ? "navigationShow" : "navigationHide"),
                    [...i, ...s]
                      .filter((e) => !!e)
                      .forEach((e) =>
                        e.classList.toggle(n.params.navigation.hiddenClass)
                      );
                }
              });
            const p = () => {
              n.el.classList.add(
                ...n.params.navigation.navigationDisabledClass.split(" ")
              ),
                h();
            };
            Object.assign(n.navigation, {
              enable: () => {
                n.el.classList.remove(
                  ...n.params.navigation.navigationDisabledClass.split(" ")
                ),
                  c(),
                  l();
              },
              disable: p,
              update: l,
              init: c,
              destroy: h,
            });
          },
          function (e) {
            let { swiper: d, extendParams: t, on: i, emit: u } = e;
            e = "swiper-pagination";
            let c,
              h =
                (t({
                  pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: (e) => e,
                    formatFractionTotal: (e) => e,
                    bulletClass: e + "-bullet",
                    bulletActiveClass: e + "-bullet-active",
                    modifierClass: e + "-",
                    currentClass: e + "-current",
                    totalClass: e + "-total",
                    hiddenClass: e + "-hidden",
                    progressbarFillClass: e + "-progressbar-fill",
                    progressbarOppositeClass: e + "-progressbar-opposite",
                    clickableClass: e + "-clickable",
                    lockClass: e + "-lock",
                    horizontalClass: e + "-horizontal",
                    verticalClass: e + "-vertical",
                    paginationDisabledClass: e + "-disabled",
                  },
                }),
                (d.pagination = { el: null, bullets: [] }),
                0);
            const n = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
            function r() {
              return (
                !d.params.pagination.el ||
                !d.pagination.el ||
                (Array.isArray(d.pagination.el) && 0 === d.pagination.el.length)
              );
            }
            function p(e, t) {
              var i = d.params.pagination["bulletActiveClass"];
              (e =
                e &&
                e[("prev" === t ? "previous" : "next") + "ElementSibling"]) &&
                (e.classList.add(i + "-" + t),
                (e =
                  e[
                    ("prev" === t ? "previous" : "next") + "ElementSibling"
                  ])) &&
                e.classList.add(i + `-${t}-` + t);
            }
            function s(e) {
              var t = e.target.closest(N(d.params.pagination.bulletClass));
              t &&
                (e.preventDefault(),
                (e = D(t) * d.params.slidesPerGroup),
                d.params.loop
                  ? d.realIndex !== e && d.slideToLoop(e)
                  : d.slideTo(e));
            }
            function a() {
              const a = d.rtl,
                o = d.params.pagination;
              if (!r()) {
                let r,
                  e,
                  t = d.pagination.el;
                t = n(t);
                const i = (
                    d.virtual && d.params.virtual.enabled ? d.virtual : d
                  ).slides.length,
                  l = d.params.loop
                    ? Math.ceil(i / d.params.slidesPerGroup)
                    : d.snapGrid.length;
                if (
                  (d.params.loop
                    ? ((e = d.previousRealIndex || 0),
                      (r =
                        1 < d.params.slidesPerGroup
                          ? Math.floor(d.realIndex / d.params.slidesPerGroup)
                          : d.realIndex))
                    : void 0 !== d.snapIndex
                    ? ((r = d.snapIndex), (e = d.previousSnapIndex))
                    : ((e = d.previousIndex || 0), (r = d.activeIndex || 0)),
                  "bullets" === o.type &&
                    d.pagination.bullets &&
                    0 < d.pagination.bullets.length)
                ) {
                  const u = d.pagination.bullets;
                  let i, s, n;
                  if (
                    (o.dynamicBullets &&
                      ((c = I(u[0], d.isHorizontal() ? "width" : "height", !0)),
                      t.forEach((e) => {
                        e.style[d.isHorizontal() ? "width" : "height"] =
                          c * (o.dynamicMainBullets + 4) + "px";
                      }),
                      1 < o.dynamicMainBullets &&
                        void 0 !== e &&
                        ((h += r - (e || 0)) > o.dynamicMainBullets - 1
                          ? (h = o.dynamicMainBullets - 1)
                          : h < 0 && (h = 0)),
                      (i = Math.max(r - h, 0)),
                      (s = i + (Math.min(u.length, o.dynamicMainBullets) - 1)),
                      (n = (s + i) / 2)),
                    u.forEach((e) => {
                      var t = [
                        ...[
                          "",
                          "-next",
                          "-next-next",
                          "-prev",
                          "-prev-prev",
                          "-main",
                        ].map((e) => "" + o.bulletActiveClass + e),
                      ]
                        .map((e) =>
                          "string" == typeof e && e.includes(" ")
                            ? e.split(" ")
                            : e
                        )
                        .flat();
                      e.classList.remove(...t);
                    }),
                    1 < t.length)
                  )
                    u.forEach((e) => {
                      var t = D(e);
                      t === r
                        ? e.classList.add(...o.bulletActiveClass.split(" "))
                        : d.isElement && e.setAttribute("part", "bullet"),
                        o.dynamicBullets &&
                          (t >= i &&
                            t <= s &&
                            e.classList.add(
                              ...(o.bulletActiveClass + "-main").split(" ")
                            ),
                          t === i && p(e, "prev"),
                          t === s) &&
                          p(e, "next");
                    });
                  else {
                    const a = u[r];
                    if (
                      (a && a.classList.add(...o.bulletActiveClass.split(" ")),
                      d.isElement &&
                        u.forEach((e, t) => {
                          e.setAttribute(
                            "part",
                            t === r ? "bullet-active" : "bullet"
                          );
                        }),
                      o.dynamicBullets)
                    ) {
                      const a = u[i],
                        d = u[s];
                      for (let e = i; e <= s; e += 1)
                        u[e] &&
                          u[e].classList.add(
                            ...(o.bulletActiveClass + "-main").split(" ")
                          );
                      p(a, "prev"), p(d, "next");
                    }
                  }
                  if (o.dynamicBullets) {
                    const e = Math.min(u.length, o.dynamicMainBullets + 4),
                      t = (c * e - c) / 2 - n * c,
                      h = a ? "right" : "left";
                    u.forEach((e) => {
                      e.style[d.isHorizontal() ? h : "top"] = t + "px";
                    });
                  }
                }
                t.forEach((e, s) => {
                  if (
                    ("fraction" === o.type &&
                      (e.querySelectorAll(N(o.currentClass)).forEach((e) => {
                        e.textContent = o.formatFractionCurrent(r + 1);
                      }),
                      e.querySelectorAll(N(o.totalClass)).forEach((e) => {
                        e.textContent = o.formatFractionTotal(l);
                      })),
                    "progressbar" === o.type)
                  ) {
                    var n = o.progressbarOpposite
                      ? d.isHorizontal()
                        ? "vertical"
                        : "horizontal"
                      : d.isHorizontal()
                      ? "horizontal"
                      : "vertical";
                    const s = (r + 1) / l;
                    let t = 1,
                      i = 1;
                    "horizontal" == n ? (t = s) : (i = s),
                      e
                        .querySelectorAll(N(o.progressbarFillClass))
                        .forEach((e) => {
                          (e.style.transform = `translate3d(0,0,0) scaleX(${t}) scaleY(${i})`),
                            (e.style.transitionDuration =
                              d.params.speed + "ms");
                        });
                  }
                  "custom" === o.type && o.renderCustom
                    ? ((e.innerHTML = o.renderCustom(d, r + 1, l)),
                      0 === s && u("paginationRender", e))
                    : (0 === s && u("paginationRender", e),
                      u("paginationUpdate", e)),
                    d.params.watchOverflow &&
                      d.enabled &&
                      e.classList[d.isLocked ? "add" : "remove"](o.lockClass);
                });
              }
            }
            function o() {
              const s = d.params.pagination;
              if (!r()) {
                var e =
                    d.virtual && d.params.virtual.enabled
                      ? d.virtual.slides.length
                      : d.grid && 1 < d.params.grid.rows
                      ? d.slides.length / Math.ceil(d.params.grid.rows)
                      : d.slides.length,
                  t = d.pagination.el,
                  t = n(t);
                let i = "";
                if ("bullets" === s.type) {
                  let t = d.params.loop
                    ? Math.ceil(e / d.params.slidesPerGroup)
                    : d.snapGrid.length;
                  d.params.freeMode &&
                    d.params.freeMode.enabled &&
                    t > e &&
                    (t = e);
                  for (let e = 0; e < t; e += 1)
                    s.renderBullet
                      ? (i += s.renderBullet.call(d, e, s.bulletClass))
                      : (i += `<${s.bulletElement} ${
                          d.isElement ? 'part="bullet"' : ""
                        } class="${s.bulletClass}"></${s.bulletElement}>`);
                }
                "fraction" === s.type &&
                  (i = s.renderFraction
                    ? s.renderFraction.call(d, s.currentClass, s.totalClass)
                    : `<span class="${s.currentClass}"></span> / <span class="${s.totalClass}"></span>`),
                  "progressbar" === s.type &&
                    (i = s.renderProgressbar
                      ? s.renderProgressbar.call(d, s.progressbarFillClass)
                      : `<span class="${s.progressbarFillClass}"></span>`),
                  (d.pagination.bullets = []),
                  t.forEach((e) => {
                    "custom" !== s.type && (e.innerHTML = i || ""),
                      "bullets" === s.type &&
                        d.pagination.bullets.push(
                          ...e.querySelectorAll(N(s.bulletClass))
                        );
                  }),
                  "custom" !== s.type && u("paginationRender", t[0]);
              }
            }
            function l() {
              d.params.pagination = B(
                d,
                d.originalParams.pagination,
                d.params.pagination,
                { el: "swiper-pagination" }
              );
              const t = d.params.pagination;
              if (t.el) {
                let e;
                (e =
                  (e =
                    (e =
                      "string" == typeof t.el && d.isElement
                        ? d.el.querySelector(t.el)
                        : e) || "string" != typeof t.el
                      ? e
                      : [...document.querySelectorAll(t.el)]) || t.el) &&
                  0 !== e.length &&
                  (d.params.uniqueNavElements &&
                    "string" == typeof t.el &&
                    Array.isArray(e) &&
                    1 < e.length &&
                    1 < (e = [...d.el.querySelectorAll(t.el)]).length &&
                    (e = e.filter((e) => z(e, ".swiper")[0] === d.el)[0]),
                  Array.isArray(e) && 1 === e.length && (e = e[0]),
                  Object.assign(d.pagination, { el: e }),
                  (e = n(e)).forEach((e) => {
                    "bullets" === t.type &&
                      t.clickable &&
                      e.classList.add(...(t.clickableClass || "").split(" ")),
                      e.classList.add(t.modifierClass + t.type),
                      e.classList.add(
                        d.isHorizontal() ? t.horizontalClass : t.verticalClass
                      ),
                      "bullets" === t.type &&
                        t.dynamicBullets &&
                        (e.classList.add(
                          "" + t.modifierClass + t.type + "-dynamic"
                        ),
                        (h = 0),
                        t.dynamicMainBullets < 1) &&
                        (t.dynamicMainBullets = 1),
                      "progressbar" === t.type &&
                        t.progressbarOpposite &&
                        e.classList.add(t.progressbarOppositeClass),
                      t.clickable && e.addEventListener("click", s),
                      d.enabled || e.classList.add(t.lockClass);
                  }));
              }
            }
            function f() {
              const t = d.params.pagination;
              var e;
              r() ||
                ((e = d.pagination.el) &&
                  (e = n(e)).forEach((e) => {
                    e.classList.remove(t.hiddenClass),
                      e.classList.remove(t.modifierClass + t.type),
                      e.classList.remove(
                        d.isHorizontal() ? t.horizontalClass : t.verticalClass
                      ),
                      t.clickable &&
                        (e.classList.remove(
                          ...(t.clickableClass || "").split(" ")
                        ),
                        e.removeEventListener("click", s));
                  }),
                d.pagination.bullets &&
                  d.pagination.bullets.forEach((e) =>
                    e.classList.remove(...t.bulletActiveClass.split(" "))
                  ));
            }
            i("changeDirection", () => {
              if (d.pagination && d.pagination.el) {
                const t = d.params.pagination;
                var e = d.pagination["el"];
                (e = n(e)).forEach((e) => {
                  e.classList.remove(t.horizontalClass, t.verticalClass),
                    e.classList.add(
                      d.isHorizontal() ? t.horizontalClass : t.verticalClass
                    );
                });
              }
            }),
              i("init", () => {
                (!1 === d.params.pagination.enabled ? m : (l(), o(), a))();
              }),
              i("activeIndexChange", () => {
                void 0 === d.snapIndex && a();
              }),
              i("snapIndexChange", () => {
                a();
              }),
              i("snapGridLengthChange", () => {
                o(), a();
              }),
              i("destroy", () => {
                f();
              }),
              i("enable disable", () => {
                var e = d.pagination["el"];
                e &&
                  (e = n(e)).forEach((e) =>
                    e.classList[d.enabled ? "remove" : "add"](
                      d.params.pagination.lockClass
                    )
                  );
              }),
              i("lock unlock", () => {
                a();
              }),
              i("click", (e, t) => {
                var t = t.target,
                  i = n(d.pagination.el);
                if (
                  d.params.pagination.el &&
                  d.params.pagination.hideOnClick &&
                  i &&
                  0 < i.length &&
                  !t.classList.contains(d.params.pagination.bulletClass) &&
                  (!d.navigation ||
                    !(
                      (d.navigation.nextEl && t === d.navigation.nextEl) ||
                      (d.navigation.prevEl && t === d.navigation.prevEl)
                    ))
                ) {
                  const e = i[0].classList.contains(
                    d.params.pagination.hiddenClass
                  );
                  u(!0 === e ? "paginationShow" : "paginationHide"),
                    i.forEach((e) =>
                      e.classList.toggle(d.params.pagination.hiddenClass)
                    );
                }
              });
            const m = () => {
              d.el.classList.add(d.params.pagination.paginationDisabledClass);
              var e = d.pagination["el"];
              e &&
                (e = n(e)).forEach((e) =>
                  e.classList.add(d.params.pagination.paginationDisabledClass)
                ),
                f();
            };
            Object.assign(d.pagination, {
              enable: () => {
                d.el.classList.remove(
                  d.params.pagination.paginationDisabledClass
                );
                var e = d.pagination["el"];
                e &&
                  (e = n(e)).forEach((e) =>
                    e.classList.remove(
                      d.params.pagination.paginationDisabledClass
                    )
                  ),
                  l(),
                  o(),
                  a();
              },
              disable: m,
              render: o,
              update: a,
              init: l,
              destroy: f,
            });
          },
          function (e) {
            let { swiper: l, extendParams: t, on: i, emit: r } = e;
            const a = M();
            let o,
              d,
              u,
              s,
              c = !1,
              h = null,
              p = null;
            function n() {
              if (l.params.scrollbar.el && l.scrollbar.el) {
                const { scrollbar: i, rtlTranslate: s } = l,
                  { dragEl: n, el: r } = i,
                  a = l.params.scrollbar,
                  o = l.params.loop ? l.progressLoop : l.progress;
                let e = d,
                  t = (u - d) * o;
                s
                  ? 0 < (t = -t)
                    ? ((e = d - t), (t = 0))
                    : -t + d > u && (e = u + t)
                  : t < 0
                  ? ((e = d + t), (t = 0))
                  : t + d > u && (e = u - t),
                  l.isHorizontal()
                    ? ((n.style.transform = `translate3d(${t}px, 0, 0)`),
                      (n.style.width = e + "px"))
                    : ((n.style.transform = `translate3d(0px, ${t}px, 0)`),
                      (n.style.height = e + "px")),
                  a.hide &&
                    (clearTimeout(h),
                    (r.style.opacity = 1),
                    (h = setTimeout(() => {
                      (r.style.opacity = 0),
                        (r.style.transitionDuration = "400ms");
                    }, 1e3)));
              }
            }
            function f() {
              var e, t, i;
              l.params.scrollbar.el &&
                l.scrollbar.el &&
                ((e = l["scrollbar"]),
                ({ dragEl: t, el: i } = e),
                (t.style.width = ""),
                (t.style.height = ""),
                (u = l.isHorizontal() ? i.offsetWidth : i.offsetHeight),
                (s =
                  l.size /
                  (l.virtualSize +
                    l.params.slidesOffsetBefore -
                    (l.params.centeredSlides ? l.snapGrid[0] : 0))),
                (d =
                  "auto" === l.params.scrollbar.dragSize
                    ? u * s
                    : parseInt(l.params.scrollbar.dragSize, 10)),
                l.isHorizontal()
                  ? (t.style.width = d + "px")
                  : (t.style.height = d + "px"),
                (i.style.display = 1 <= s ? "none" : ""),
                l.params.scrollbar.hide && (i.style.opacity = 0),
                l.params.watchOverflow) &&
                l.enabled &&
                e.el.classList[l.isLocked ? "add" : "remove"](
                  l.params.scrollbar.lockClass
                );
            }
            function m(e) {
              return l.isHorizontal() ? e.clientX : e.clientY;
            }
            function g(e) {
              var { scrollbar: t, rtlTranslate: i } = l,
                t = t["el"];
              let s;
              (s =
                (m(e) -
                  O(t)[l.isHorizontal() ? "left" : "top"] -
                  (null !== o ? o : d / 2)) /
                (u - d)),
                (s = Math.max(Math.min(s, 1), 0)),
                i && (s = 1 - s);
              e = l.minTranslate() + (l.maxTranslate() - l.minTranslate()) * s;
              l.updateProgress(e),
                l.setTranslate(e),
                l.updateActiveIndex(),
                l.updateSlidesClasses();
            }
            function v(e) {
              var t = l.params.scrollbar,
                { scrollbar: i, wrapperEl: s } = l,
                { el: i, dragEl: n } = i;
              (c = !0),
                (o =
                  e.target === n
                    ? m(e) -
                      e.target.getBoundingClientRect()[
                        l.isHorizontal() ? "left" : "top"
                      ]
                    : null),
                e.preventDefault(),
                e.stopPropagation(),
                (s.style.transitionDuration = "100ms"),
                (n.style.transitionDuration = "100ms"),
                g(e),
                clearTimeout(p),
                (i.style.transitionDuration = "0ms"),
                t.hide && (i.style.opacity = 1),
                l.params.cssMode &&
                  (l.wrapperEl.style["scroll-snap-type"] = "none"),
                r("scrollbarDragStart", e);
            }
            function y(e) {
              var { scrollbar: t, wrapperEl: i } = l,
                { el: t, dragEl: s } = t;
              c &&
                (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                g(e),
                (i.style.transitionDuration = "0ms"),
                (t.style.transitionDuration = "0ms"),
                (s.style.transitionDuration = "0ms"),
                r("scrollbarDragMove", e));
            }
            function b(e) {
              const t = l.params.scrollbar,
                { scrollbar: i, wrapperEl: s } = l,
                n = i["el"];
              c &&
                ((c = !1),
                l.params.cssMode &&
                  ((l.wrapperEl.style["scroll-snap-type"] = ""),
                  (s.style.transitionDuration = "")),
                t.hide &&
                  (clearTimeout(p),
                  (p = C(() => {
                    (n.style.opacity = 0),
                      (n.style.transitionDuration = "400ms");
                  }, 1e3))),
                r("scrollbarDragEnd", e),
                t.snapOnRelease) &&
                l.slideToClosest();
            }
            function w(e) {
              var t,
                { scrollbar: i, params: s } = l,
                i = i.el;
              i &&
                ((t = !!s.passiveListeners && { passive: !1, capture: !1 }),
                (s = !!s.passiveListeners && { passive: !0, capture: !1 }),
                (i = i)) &&
                (i[
                  (i = "on" === e ? "addEventListener" : "removeEventListener")
                ]("pointerdown", v, t),
                a[i]("pointermove", y, t),
                a[i]("pointerup", b, s));
            }
            function _() {
              var { scrollbar: i, el: s } = l,
                n =
                  ((l.params.scrollbar = B(
                    l,
                    l.originalParams.scrollbar,
                    l.params.scrollbar,
                    { el: "swiper-scrollbar" }
                  )),
                  l.params.scrollbar);
              if (n.el) {
                let e, t;
                if (
                  (e =
                    "string" == typeof n.el && l.isElement
                      ? l.el.querySelector(n.el)
                      : e) ||
                  "string" != typeof n.el
                )
                  e = e || n.el;
                else if (!(e = a.querySelectorAll(n.el)).length) return;
                (e =
                  0 <
                  (e =
                    l.params.uniqueNavElements &&
                    "string" == typeof n.el &&
                    1 < e.length &&
                    1 === s.querySelectorAll(n.el).length
                      ? s.querySelector(n.el)
                      : e).length
                    ? e[0]
                    : e).classList.add(
                  l.isHorizontal() ? n.horizontalClass : n.verticalClass
                ),
                  e &&
                    ((t = e.querySelector(N(l.params.scrollbar.dragClass))) ||
                      ((t = L("div", l.params.scrollbar.dragClass)),
                      e.append(t))),
                  Object.assign(i, { el: e, dragEl: t }),
                  n.draggable &&
                    l.params.scrollbar.el &&
                    l.scrollbar.el &&
                    w("on"),
                  e &&
                    e.classList[l.enabled ? "remove" : "add"](
                      ...E(l.params.scrollbar.lockClass)
                    );
              }
            }
            function D() {
              var e = l.params.scrollbar,
                t = l.scrollbar.el;
              t &&
                t.classList.remove(
                  ...E(l.isHorizontal() ? e.horizontalClass : e.verticalClass)
                ),
                l.params.scrollbar.el && l.scrollbar.el && w("off");
            }
            t({
              scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag",
                scrollbarDisabledClass: "swiper-scrollbar-disabled",
                horizontalClass: "swiper-scrollbar-horizontal",
                verticalClass: "swiper-scrollbar-vertical",
              },
            }),
              (l.scrollbar = { el: null, dragEl: null }),
              i("init", () => {
                (!1 === l.params.scrollbar.enabled ? x : (_(), f(), n))();
              }),
              i("update resize observerUpdate lock unlock", () => {
                f();
              }),
              i("setTranslate", () => {
                n();
              }),
              i("setTransition", (e, t) => {
                (t = t),
                  l.params.scrollbar.el &&
                    l.scrollbar.el &&
                    (l.scrollbar.dragEl.style.transitionDuration = t + "ms");
              }),
              i("enable disable", () => {
                var e = l.scrollbar["el"];
                e &&
                  e.classList[l.enabled ? "remove" : "add"](
                    ...E(l.params.scrollbar.lockClass)
                  );
              }),
              i("destroy", () => {
                D();
              });
            const x = () => {
              l.el.classList.add(
                ...E(l.params.scrollbar.scrollbarDisabledClass)
              ),
                l.scrollbar.el &&
                  l.scrollbar.el.classList.add(
                    ...E(l.params.scrollbar.scrollbarDisabledClass)
                  ),
                D();
            };
            Object.assign(l.scrollbar, {
              enable: () => {
                l.el.classList.remove(
                  ...E(l.params.scrollbar.scrollbarDisabledClass)
                ),
                  l.scrollbar.el &&
                    l.scrollbar.el.classList.remove(
                      ...E(l.params.scrollbar.scrollbarDisabledClass)
                    ),
                  _(),
                  f(),
                  n();
              },
              disable: x,
              updateSize: f,
              setTranslate: n,
              init: _,
              destroy: D,
            });
          },
          function (e) {
            let { swiper: u, extendParams: t, on: i } = e;
            t({ parallax: { enabled: !1 } });
            const r =
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
              a = (e, t) => {
                var i = u["rtl"],
                  i = i ? -1 : 1,
                  s = e.getAttribute("data-swiper-parallax") || "0";
                let n = e.getAttribute("data-swiper-parallax-x"),
                  r = e.getAttribute("data-swiper-parallax-y");
                var a = e.getAttribute("data-swiper-parallax-scale"),
                  o = e.getAttribute("data-swiper-parallax-opacity"),
                  l = e.getAttribute("data-swiper-parallax-rotate");
                if (
                  (n || r
                    ? ((n = n || "0"), (r = r || "0"))
                    : u.isHorizontal()
                    ? ((n = s), (r = "0"))
                    : ((r = s), (n = "0")),
                  (n =
                    0 <= n.indexOf("%")
                      ? parseInt(n, 10) * t * i + "%"
                      : n * t * i + "px"),
                  (r =
                    0 <= r.indexOf("%")
                      ? parseInt(r, 10) * t + "%"
                      : r * t + "px"),
                  null != o)
                ) {
                  const u = o - (o - 1) * (1 - Math.abs(t));
                  e.style.opacity = u;
                }
                let d = `translate3d(${n}, ${r}, 0px)`;
                null != a &&
                  (d += ` scale(${a - (a - 1) * (1 - Math.abs(t))})`),
                  l && null != l && (d += ` rotate(${l * t * -1}deg)`),
                  (e.style.transform = d);
              },
              s = () => {
                const { el: e, slides: t, progress: s, snapGrid: n } = u,
                  i = P(e, r);
                u.isElement && i.push(...P(u.hostEl, r)),
                  i.forEach((e) => {
                    a(e, s);
                  }),
                  t.forEach((e, t) => {
                    let i = e.progress;
                    1 < u.params.slidesPerGroup &&
                      "auto" !== u.params.slidesPerView &&
                      (i += Math.ceil(t / 2) - s * (n.length - 1)),
                      (i = Math.min(Math.max(i, -1), 1)),
                      e
                        .querySelectorAll(r + ", [data-swiper-parallax-rotate]")
                        .forEach((e) => {
                          a(e, i);
                        });
                  });
              };
            i("beforeInit", () => {
              u.params.parallax.enabled &&
                ((u.params.watchSlidesProgress = !0),
                (u.originalParams.watchSlidesProgress = !0));
            }),
              i("init", () => {
                u.params.parallax.enabled && s();
              }),
              i("setTranslate", () => {
                u.params.parallax.enabled && s();
              }),
              i("setTransition", (e, t) => {
                var i, s;
                u.params.parallax.enabled &&
                  (({ el: t, hostEl: s } =
                    (void 0 === (i = t) && (i = u.params.speed), u)),
                  (t = [...t.querySelectorAll(r)]),
                  u.isElement && t.push(...s.querySelectorAll(r)),
                  t.forEach((e) => {
                    let t =
                      parseInt(
                        e.getAttribute("data-swiper-parallax-duration"),
                        10
                      ) || i;
                    0 === i && (t = 0), (e.style.transitionDuration = t + "ms");
                  }));
              });
          },
          function (e) {
            let { swiper: D, extendParams: t, on: i, emit: s } = e;
            const x = A();
            t({
              zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed",
              },
            }),
              (D.zoom = { enabled: !1 });
            let n,
              r,
              E = 1,
              a = !1;
            const o = [],
              C = {
                originX: 0,
                originY: 0,
                slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                imageEl: void 0,
                imageWrapEl: void 0,
                maxRatio: 3,
              },
              T = {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {},
              },
              l = {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0,
              };
            let d = 1;
            function u() {
              var e, t, i, s;
              return o.length < 2
                ? 1
                : ((e = o[0].pageX),
                  (t = o[0].pageY),
                  (i = o[1].pageX),
                  (s = o[1].pageY),
                  Math.sqrt((i - e) ** 2 + (s - t) ** 2));
            }
            function c(t) {
              var e = D.isElement ? "swiper-slide" : "." + D.params.slideClass;
              return (
                t.target.matches(e) ||
                0 < D.slides.filter((e) => e.contains(t.target)).length
              );
            }
            function h(t) {
              if (("mouse" === t.pointerType && o.splice(0, o.length), c(t))) {
                var i = D.params.zoom;
                if (((n = !1), (r = !1), o.push(t), !(o.length < 2))) {
                  if (((n = !0), (C.scaleStart = u()), !C.slideEl)) {
                    (C.slideEl = t.target.closest(
                      `.${D.params.slideClass}, swiper-slide`
                    )),
                      C.slideEl || (C.slideEl = D.slides[D.activeIndex]);
                    let e = C.slideEl.querySelector("." + i.containerClass);
                    if (
                      ((e =
                        e &&
                        e.querySelectorAll(
                          "picture, img, svg, canvas, .swiper-zoom-target"
                        )[0]),
                      (C.imageEl = e),
                      (C.imageWrapEl = e
                        ? z(C.imageEl, "." + i.containerClass)[0]
                        : void 0),
                      !C.imageWrapEl)
                    )
                      return void (C.imageEl = void 0);
                    C.maxRatio =
                      C.imageWrapEl.getAttribute("data-swiper-zoom") ||
                      i.maxRatio;
                  }
                  if (C.imageEl) {
                    const [t, D] =
                      o.length < 2
                        ? { x: null, y: null }
                        : ((i = C.imageEl.getBoundingClientRect()),
                          [
                            (o[0].pageX +
                              (o[1].pageX - o[0].pageX) / 2 -
                              i.x -
                              x.scrollX) /
                              E,
                            (o[0].pageY +
                              (o[1].pageY - o[0].pageY) / 2 -
                              i.y -
                              x.scrollY) /
                              E,
                          ]);
                    (C.originX = t),
                      (C.originY = D),
                      (C.imageEl.style.transitionDuration = "0ms");
                  }
                  a = !0;
                }
              }
            }
            function p(t) {
              var e, i, s;
              c(t) &&
                ((e = D.params.zoom),
                (i = D.zoom),
                0 <= (s = o.findIndex((e) => e.pointerId === t.pointerId)) &&
                  (o[s] = t),
                o.length < 2 ||
                  ((r = !0),
                  (C.scaleMove = u()),
                  C.imageEl &&
                    ((i.scale = (C.scaleMove / C.scaleStart) * E),
                    i.scale > C.maxRatio &&
                      (i.scale =
                        C.maxRatio - 1 + (i.scale - C.maxRatio + 1) ** 0.5),
                    i.scale < e.minRatio &&
                      (i.scale =
                        e.minRatio + 1 - (e.minRatio - i.scale + 1) ** 0.5),
                    (C.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`))));
            }
            function f(t) {
              var e, i, s;
              !c(t) ||
                ("mouse" === t.pointerType && "pointerout" === t.type) ||
                ((e = D.params.zoom),
                (i = D.zoom),
                0 <= (s = o.findIndex((e) => e.pointerId === t.pointerId)) &&
                  o.splice(s, 1),
                n &&
                  r &&
                  ((n = !1), (r = !1), C.imageEl) &&
                  ((i.scale = Math.max(
                    Math.min(i.scale, C.maxRatio),
                    e.minRatio
                  )),
                  (C.imageEl.style.transitionDuration = D.params.speed + "ms"),
                  (C.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`),
                  (E = i.scale),
                  (a = !1),
                  1 < i.scale && C.slideEl
                    ? C.slideEl.classList.add("" + e.zoomedSlideClass)
                    : i.scale <= 1 &&
                      C.slideEl &&
                      C.slideEl.classList.remove("" + e.zoomedSlideClass),
                  1 === i.scale) &&
                  ((C.originX = 0), (C.originY = 0), (C.slideEl = void 0)));
            }
            function m(e) {
              if (
                c(e) &&
                ((t = e),
                (i = "." + D.params.zoom.containerClass),
                t.target.matches(i) ||
                  0 <
                    [...D.hostEl.querySelectorAll(i)].filter((e) =>
                      e.contains(t.target)
                    ).length)
              ) {
                var t,
                  i = D.zoom;
                if (C.imageEl && T.isTouched && C.slideEl) {
                  T.isMoved ||
                    ((T.width = C.imageEl.offsetWidth),
                    (T.height = C.imageEl.offsetHeight),
                    (T.startX = k(C.imageWrapEl, "x") || 0),
                    (T.startY = k(C.imageWrapEl, "y") || 0),
                    (C.slideWidth = C.slideEl.offsetWidth),
                    (C.slideHeight = C.slideEl.offsetHeight),
                    (C.imageWrapEl.style.transitionDuration = "0ms"));
                  var s = T.width * i.scale,
                    n = T.height * i.scale;
                  if (!(s < C.slideWidth && n < C.slideHeight)) {
                    if (
                      ((T.minX = Math.min(C.slideWidth / 2 - s / 2, 0)),
                      (T.maxX = -T.minX),
                      (T.minY = Math.min(C.slideHeight / 2 - n / 2, 0)),
                      (T.maxY = -T.minY),
                      (T.touchesCurrent.x = (0 < o.length ? o[0] : e).pageX),
                      (T.touchesCurrent.y = (0 < o.length ? o[0] : e).pageY),
                      5 <
                        Math.max(
                          Math.abs(T.touchesCurrent.x - T.touchesStart.x),
                          Math.abs(T.touchesCurrent.y - T.touchesStart.y)
                        ) && (D.allowClick = !1),
                      !T.isMoved && !a)
                    ) {
                      if (
                        D.isHorizontal() &&
                        ((Math.floor(T.minX) === Math.floor(T.startX) &&
                          T.touchesCurrent.x < T.touchesStart.x) ||
                          (Math.floor(T.maxX) === Math.floor(T.startX) &&
                            T.touchesCurrent.x > T.touchesStart.x))
                      )
                        return void (T.isTouched = !1);
                      if (
                        !D.isHorizontal() &&
                        ((Math.floor(T.minY) === Math.floor(T.startY) &&
                          T.touchesCurrent.y < T.touchesStart.y) ||
                          (Math.floor(T.maxY) === Math.floor(T.startY) &&
                            T.touchesCurrent.y > T.touchesStart.y))
                      )
                        return void (T.isTouched = !1);
                    }
                    e.cancelable && e.preventDefault(),
                      e.stopPropagation(),
                      (T.isMoved = !0);
                    var s =
                        (i.scale - E) / (C.maxRatio - D.params.zoom.minRatio),
                      { originX: n, originY: e } = C;
                    (T.currentX =
                      T.touchesCurrent.x -
                      T.touchesStart.x +
                      T.startX +
                      s * (T.width - 2 * n)),
                      (T.currentY =
                        T.touchesCurrent.y -
                        T.touchesStart.y +
                        T.startY +
                        s * (T.height - 2 * e)),
                      T.currentX < T.minX &&
                        (T.currentX =
                          T.minX + 1 - (T.minX - T.currentX + 1) ** 0.8),
                      T.currentX > T.maxX &&
                        (T.currentX =
                          T.maxX - 1 + (T.currentX - T.maxX + 1) ** 0.8),
                      T.currentY < T.minY &&
                        (T.currentY =
                          T.minY + 1 - (T.minY - T.currentY + 1) ** 0.8),
                      T.currentY > T.maxY &&
                        (T.currentY =
                          T.maxY - 1 + (T.currentY - T.maxY + 1) ** 0.8),
                      l.prevPositionX || (l.prevPositionX = T.touchesCurrent.x),
                      l.prevPositionY || (l.prevPositionY = T.touchesCurrent.y),
                      l.prevTime || (l.prevTime = Date.now()),
                      (l.x =
                        (T.touchesCurrent.x - l.prevPositionX) /
                        (Date.now() - l.prevTime) /
                        2),
                      (l.y =
                        (T.touchesCurrent.y - l.prevPositionY) /
                        (Date.now() - l.prevTime) /
                        2),
                      Math.abs(T.touchesCurrent.x - l.prevPositionX) < 2 &&
                        (l.x = 0),
                      Math.abs(T.touchesCurrent.y - l.prevPositionY) < 2 &&
                        (l.y = 0),
                      (l.prevPositionX = T.touchesCurrent.x),
                      (l.prevPositionY = T.touchesCurrent.y),
                      (l.prevTime = Date.now()),
                      (C.imageWrapEl.style.transform = `translate3d(${T.currentX}px, ${T.currentY}px,0)`);
                  }
                }
              }
            }
            function g() {
              var e = D.zoom;
              C.slideEl &&
                D.activeIndex !== D.slides.indexOf(C.slideEl) &&
                (C.imageEl &&
                  (C.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
                C.imageWrapEl &&
                  (C.imageWrapEl.style.transform = "translate3d(0,0,0)"),
                C.slideEl.classList.remove("" + D.params.zoom.zoomedSlideClass),
                (e.scale = 1),
                (E = 1),
                (C.slideEl = void 0),
                (C.imageEl = void 0),
                (C.imageWrapEl = void 0),
                (C.originX = 0),
                (C.originY = 0));
            }
            function v(y) {
              var b = D.zoom,
                w = D.params.zoom;
              if (!C.slideEl) {
                y &&
                  y.target &&
                  (C.slideEl = y.target.closest(
                    `.${D.params.slideClass}, swiper-slide`
                  )),
                  C.slideEl ||
                    (D.params.virtual && D.params.virtual.enabled && D.virtual
                      ? (C.slideEl = P(
                          D.slidesEl,
                          "." + D.params.slideActiveClass
                        )[0])
                      : (C.slideEl = D.slides[D.activeIndex]));
                let e = C.slideEl.querySelector("." + w.containerClass);
                (e =
                  e &&
                  e.querySelectorAll(
                    "picture, img, svg, canvas, .swiper-zoom-target"
                  )[0]),
                  (C.imageEl = e),
                  (C.imageWrapEl = e
                    ? z(C.imageEl, "." + w.containerClass)[0]
                    : void 0);
              }
              if (C.imageEl && C.imageWrapEl) {
                let e, t, i, s, n, r, a, o, l, d, u, c, h, p, f, m, g, v;
                D.params.cssMode &&
                  ((D.wrapperEl.style.overflow = "hidden"),
                  (D.wrapperEl.style.touchAction = "none")),
                  C.slideEl.classList.add("" + w.zoomedSlideClass),
                  (t =
                    void 0 === T.touchesStart.x && y
                      ? ((e = y.pageX), y.pageY)
                      : ((e = T.touchesStart.x), T.touchesStart.y));
                var _ = "number" == typeof y ? y : null;
                1 === E && _ && ((e = void 0), (t = void 0)),
                  (b.scale =
                    _ ||
                    C.imageWrapEl.getAttribute("data-swiper-zoom") ||
                    w.maxRatio),
                  (E =
                    _ ||
                    C.imageWrapEl.getAttribute("data-swiper-zoom") ||
                    w.maxRatio),
                  !y || (1 === E && _)
                    ? ((a = 0), (o = 0))
                    : ((g = C.slideEl.offsetWidth),
                      (v = C.slideEl.offsetHeight),
                      (i = O(C.slideEl).left + x.scrollX),
                      (s = O(C.slideEl).top + x.scrollY),
                      (n = i + g / 2 - e),
                      (r = s + v / 2 - t),
                      (l = C.imageEl.offsetWidth),
                      (d = C.imageEl.offsetHeight),
                      (u = l * b.scale),
                      (c = d * b.scale),
                      (f = -(h = Math.min(g / 2 - u / 2, 0))),
                      (m = -(p = Math.min(v / 2 - c / 2, 0))),
                      (a = n * b.scale),
                      (o = r * b.scale),
                      (a = a < h ? h : a) > f && (a = f),
                      (o = o < p ? p : o) > m && (o = m)),
                  _ && 1 === b.scale && ((C.originX = 0), (C.originY = 0)),
                  (C.imageWrapEl.style.transitionDuration = "300ms"),
                  (C.imageWrapEl.style.transform = `translate3d(${a}px, ${o}px,0)`),
                  (C.imageEl.style.transitionDuration = "300ms"),
                  (C.imageEl.style.transform = `translate3d(0,0,0) scale(${b.scale})`);
              }
            }
            function y() {
              var e = D.zoom,
                t = D.params.zoom;
              if (!C.slideEl) {
                D.params.virtual && D.params.virtual.enabled && D.virtual
                  ? (C.slideEl = P(
                      D.slidesEl,
                      "." + D.params.slideActiveClass
                    )[0])
                  : (C.slideEl = D.slides[D.activeIndex]);
                let e = C.slideEl.querySelector("." + t.containerClass);
                (e =
                  e &&
                  e.querySelectorAll(
                    "picture, img, svg, canvas, .swiper-zoom-target"
                  )[0]),
                  (C.imageEl = e),
                  (C.imageWrapEl = e
                    ? z(C.imageEl, "." + t.containerClass)[0]
                    : void 0);
              }
              C.imageEl &&
                C.imageWrapEl &&
                (D.params.cssMode &&
                  ((D.wrapperEl.style.overflow = ""),
                  (D.wrapperEl.style.touchAction = "")),
                (e.scale = 1),
                (E = 1),
                (C.imageWrapEl.style.transitionDuration = "300ms"),
                (C.imageWrapEl.style.transform = "translate3d(0,0,0)"),
                (C.imageEl.style.transitionDuration = "300ms"),
                (C.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
                C.slideEl.classList.remove("" + t.zoomedSlideClass),
                (C.slideEl = void 0),
                (C.originX = 0),
                (C.originY = 0));
            }
            function b(e) {
              var t = D.zoom;
              t.scale && 1 !== t.scale ? y() : v(e);
            }
            function w() {
              return {
                passiveListener: !!D.params.passiveListeners && {
                  passive: !0,
                  capture: !1,
                },
                activeListenerWithCapture: !D.params.passiveListeners || {
                  passive: !1,
                  capture: !0,
                },
              };
            }
            function _() {
              var e = D.zoom;
              if (!e.enabled) {
                e.enabled = !0;
                const { passiveListener: t, activeListenerWithCapture: i } =
                  w();
                D.wrapperEl.addEventListener("pointerdown", h, t),
                  D.wrapperEl.addEventListener("pointermove", p, i),
                  ["pointerup", "pointercancel", "pointerout"].forEach((e) => {
                    D.wrapperEl.addEventListener(e, f, t);
                  }),
                  D.wrapperEl.addEventListener("pointermove", m, i);
              }
            }
            function S() {
              var e = D.zoom;
              if (e.enabled) {
                e.enabled = !1;
                const { passiveListener: t, activeListenerWithCapture: i } =
                  w();
                D.wrapperEl.removeEventListener("pointerdown", h, t),
                  D.wrapperEl.removeEventListener("pointermove", p, i),
                  ["pointerup", "pointercancel", "pointerout"].forEach((e) => {
                    D.wrapperEl.removeEventListener(e, f, t);
                  }),
                  D.wrapperEl.removeEventListener("pointermove", m, i);
              }
            }
            Object.defineProperty(D.zoom, "scale", {
              get: () => d,
              set(e) {
                var t, i;
                d !== e &&
                  ((t = C.imageEl), (i = C.slideEl), s("zoomChange", e, t, i)),
                  (d = e);
              },
            }),
              i("init", () => {
                D.params.zoom.enabled && _();
              }),
              i("destroy", () => {
                S();
              }),
              i("touchStart", (e, t) => {
                var i;
                D.zoom.enabled &&
                  ((t = t), (i = D.device), C.imageEl) &&
                  !T.isTouched &&
                  (i.android && t.cancelable && t.preventDefault(),
                  (T.isTouched = !0),
                  (i = 0 < o.length ? o[0] : t),
                  (T.touchesStart.x = i.pageX),
                  (T.touchesStart.y = i.pageY));
              }),
              i("touchEnd", (e, t) => {
                if (D.zoom.enabled) {
                  var i = D.zoom;
                  if (C.imageEl) {
                    if (!T.isTouched || !T.isMoved)
                      return void ((T.isTouched = !1), (T.isMoved = !1));
                    (T.isTouched = !1), (T.isMoved = !1);
                    let e = 300,
                      t = 300;
                    var s = l.x * e,
                      s = T.currentX + s,
                      n = l.y * t,
                      n = T.currentY + n,
                      r =
                        (0 !== l.x && (e = Math.abs((s - T.currentX) / l.x)),
                        0 !== l.y && (t = Math.abs((n - T.currentY) / l.y)),
                        Math.max(e, t)),
                      s =
                        ((T.currentX = s), (T.currentY = n), T.width * i.scale),
                      n = T.height * i.scale;
                    (T.minX = Math.min(C.slideWidth / 2 - s / 2, 0)),
                      (T.maxX = -T.minX),
                      (T.minY = Math.min(C.slideHeight / 2 - n / 2, 0)),
                      (T.maxY = -T.minY),
                      (T.currentX = Math.max(
                        Math.min(T.currentX, T.maxX),
                        T.minX
                      )),
                      (T.currentY = Math.max(
                        Math.min(T.currentY, T.maxY),
                        T.minY
                      )),
                      (C.imageWrapEl.style.transitionDuration = r + "ms"),
                      (C.imageWrapEl.style.transform = `translate3d(${T.currentX}px, ${T.currentY}px,0)`);
                  }
                }
              }),
              i("doubleTap", (e, t) => {
                !D.animating &&
                  D.params.zoom.enabled &&
                  D.zoom.enabled &&
                  D.params.zoom.toggle &&
                  b(t);
              }),
              i("transitionEnd", () => {
                D.zoom.enabled && D.params.zoom.enabled && g();
              }),
              i("slideChange", () => {
                D.zoom.enabled &&
                  D.params.zoom.enabled &&
                  D.params.cssMode &&
                  g();
              }),
              Object.assign(D.zoom, {
                enable: _,
                disable: S,
                in: v,
                out: y,
                toggle: b,
              });
          },
          function (e) {
            let { swiper: o, extendParams: t, on: i } = e;
            function l(e, t) {
              const i = (function () {
                let i, s, n;
                return (e, t) => {
                  for (s = -1, i = e.length; 1 < i - s; )
                    e[(n = (i + s) >> 1)] <= t ? (s = n) : (i = n);
                  return i;
                };
              })();
              let s, n;
              return (
                (this.x = e),
                (this.y = t),
                (this.lastIndex = e.length - 1),
                (this.interpolate = function (e) {
                  return e
                    ? ((n = i(this.x, e)),
                      (s = n - 1),
                      ((e - this.x[s]) * (this.y[n] - this.y[s])) /
                        (this.x[n] - this.x[s]) +
                        this.y[s])
                    : 0;
                }),
                this
              );
            }
            function s() {
              o.controller.control &&
                o.controller.spline &&
                ((o.controller.spline = void 0), delete o.controller.spline);
            }
            t({ controller: { control: void 0, inverse: !1, by: "slide" } }),
              (o.controller = { control: void 0 }),
              i("beforeInit", () => {
                if (
                  "undefined" != typeof window &&
                  ("string" == typeof o.params.controller.control ||
                    o.params.controller.control instanceof HTMLElement)
                ) {
                  const t = document.querySelector(o.params.controller.control);
                  if (t && t.swiper) o.controller.control = t.swiper;
                  else if (t) {
                    const i = (e) => {
                      (o.controller.control = e.detail[0]),
                        o.update(),
                        t.removeEventListener("init", i);
                    };
                    t.addEventListener("init", i);
                  }
                } else o.controller.control = o.params.controller.control;
              }),
              i("update", () => {
                s();
              }),
              i("resize", () => {
                s();
              }),
              i("observerUpdate", () => {
                s();
              }),
              i("setTranslate", (e, t, i) => {
                o.controller.control &&
                  !o.controller.control.destroyed &&
                  o.controller.setTranslate(t, i);
              }),
              i("setTransition", (e, t, i) => {
                o.controller.control &&
                  !o.controller.control.destroyed &&
                  o.controller.setTransition(t, i);
              }),
              Object.assign(o.controller, {
                setTranslate: function (e, t) {
                  var i = o.controller.control;
                  let s, n;
                  var r = o.constructor;
                  function a(e) {
                    var t, i;
                    e.destroyed ||
                      ((t = o.rtlTranslate ? -o.translate : o.translate),
                      "slide" === o.params.controller.by &&
                        ((i = e),
                        (o.controller.spline = o.params.loop
                          ? new l(o.slidesGrid, i.slidesGrid)
                          : new l(o.snapGrid, i.snapGrid)),
                        (n = -o.controller.spline.interpolate(-t))),
                      (n && "container" !== o.params.controller.by) ||
                        ((s =
                          (e.maxTranslate() - e.minTranslate()) /
                          (o.maxTranslate() - o.minTranslate())),
                        (!Number.isNaN(s) && Number.isFinite(s)) || (s = 1),
                        (n = (t - o.minTranslate()) * s + e.minTranslate())),
                      o.params.controller.inverse && (n = e.maxTranslate() - n),
                      e.updateProgress(n),
                      e.setTranslate(n, o),
                      e.updateActiveIndex(),
                      e.updateSlidesClasses());
                  }
                  if (Array.isArray(i))
                    for (let e = 0; e < i.length; e += 1)
                      i[e] !== t && i[e] instanceof r && a(i[e]);
                  else i instanceof r && t !== i && a(i);
                },
                setTransition: function (t, e) {
                  const i = o.constructor,
                    s = o.controller.control;
                  let n;
                  function r(e) {
                    e.destroyed ||
                      (e.setTransition(t, o),
                      0 !== t &&
                        (e.transitionStart(),
                        e.params.autoHeight &&
                          C(() => {
                            e.updateAutoHeight();
                          }),
                        g(e.wrapperEl, () => {
                          s && e.transitionEnd();
                        })));
                  }
                  if (Array.isArray(s))
                    for (n = 0; n < s.length; n += 1)
                      s[n] !== e && s[n] instanceof i && r(s[n]);
                  else s instanceof i && e !== s && r(s);
                },
              });
          },
          function (e) {
            let { swiper: o, extendParams: t, on: i } = e,
              l =
                (t({
                  a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    slideLabelMessage: "{{index}} / {{slidesLength}}",
                    containerMessage: null,
                    containerRoleDescriptionMessage: null,
                    itemRoleDescriptionMessage: null,
                    slideRole: "group",
                    id: null,
                  },
                }),
                (o.a11y = { clicked: !1 }),
                null);
            function s(e) {
              var t = l;
              0 !== t.length && ((t.innerHTML = ""), (t.innerHTML = e));
            }
            const d = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
            function n(e) {
              (e = d(e)).forEach((e) => {
                e.setAttribute("tabIndex", "0");
              });
            }
            function r(e) {
              (e = d(e)).forEach((e) => {
                e.setAttribute("tabIndex", "-1");
              });
            }
            function a(e, t) {
              (e = d(e)).forEach((e) => {
                e.setAttribute("role", t);
              });
            }
            function u(e, t) {
              (e = d(e)).forEach((e) => {
                e.setAttribute("aria-roledescription", t);
              });
            }
            function c(e, t) {
              (e = d(e)).forEach((e) => {
                e.setAttribute("aria-label", t);
              });
            }
            function h(e) {
              (e = d(e)).forEach((e) => {
                e.setAttribute("aria-disabled", !0);
              });
            }
            function p(e) {
              (e = d(e)).forEach((e) => {
                e.setAttribute("aria-disabled", !1);
              });
            }
            function f(e) {
              var t, i;
              (13 !== e.keyCode && 32 !== e.keyCode) ||
                ((t = o.params.a11y),
                (i = e.target),
                o.pagination &&
                  o.pagination.el &&
                  (i === o.pagination.el ||
                    o.pagination.el.contains(e.target)) &&
                  !e.target.matches(N(o.params.pagination.bulletClass))) ||
                (o.navigation &&
                  o.navigation.nextEl &&
                  i === o.navigation.nextEl &&
                  ((o.isEnd && !o.params.loop) || o.slideNext(),
                  o.isEnd ? s(t.lastSlideMessage) : s(t.nextSlideMessage)),
                o.navigation &&
                  o.navigation.prevEl &&
                  i === o.navigation.prevEl &&
                  ((o.isBeginning && !o.params.loop) || o.slidePrev(),
                  o.isBeginning
                    ? s(t.firstSlideMessage)
                    : s(t.prevSlideMessage)),
                o.pagination &&
                  i.matches(N(o.params.pagination.bulletClass)) &&
                  i.click());
            }
            function m() {
              return (
                o.pagination &&
                o.pagination.bullets &&
                o.pagination.bullets.length
              );
            }
            function g() {
              return m() && o.params.pagination.clickable;
            }
            const v = (e, t, i) => {
                var s;
                n(e),
                  "BUTTON" !== e.tagName &&
                    (a(e, "button"), e.addEventListener("keydown", f)),
                  c(e, i),
                  (i = e),
                  (s = t),
                  (i = d(i)).forEach((e) => {
                    e.setAttribute("aria-controls", s);
                  });
              },
              y = () => {
                o.a11y.clicked = !0;
              },
              b = () => {
                requestAnimationFrame(() => {
                  requestAnimationFrame(() => {
                    o.destroyed || (o.a11y.clicked = !1);
                  });
                });
              },
              w = (e) => {
                var t, i, s;
                o.a11y.clicked ||
                  ((t = e.target.closest(
                    `.${o.params.slideClass}, swiper-slide`
                  )) &&
                    o.slides.includes(t) &&
                    ((i = o.slides.indexOf(t) === o.activeIndex),
                    (s =
                      o.params.watchSlidesProgress &&
                      o.visibleSlides &&
                      o.visibleSlides.includes(t)),
                    i ||
                      s ||
                      (e.sourceCapabilities &&
                        e.sourceCapabilities.firesTouchEvents) ||
                      (o.isHorizontal()
                        ? (o.el.scrollLeft = 0)
                        : (o.el.scrollTop = 0),
                      o.slideTo(o.slides.indexOf(t), 0))));
              },
              _ = () => {
                const i = o.params.a11y,
                  s =
                    (i.itemRoleDescriptionMessage &&
                      u(o.slides, i.itemRoleDescriptionMessage),
                    i.slideRole && a(o.slides, i.slideRole),
                    o.slides.length);
                i.slideLabelMessage &&
                  o.slides.forEach((e, t) => {
                    t = o.params.loop
                      ? parseInt(e.getAttribute("data-swiper-slide-index"), 10)
                      : t;
                    c(
                      e,
                      i.slideLabelMessage
                        .replace(/\{\{index\}\}/, t + 1)
                        .replace(/\{\{slidesLength\}\}/, s)
                    );
                  });
              };
            i("beforeInit", () => {
              (l = L("span", o.params.a11y.notificationClass)).setAttribute(
                "aria-live",
                "assertive"
              ),
                l.setAttribute("aria-atomic", "true");
            }),
              i("afterInit", () => {
                if (o.params.a11y.enabled) {
                  const n = o.params.a11y;
                  o.el.append(l);
                  var e = o.el;
                  n.containerRoleDescriptionMessage &&
                    u(e, n.containerRoleDescriptionMessage),
                    n.containerMessage && c(e, n.containerMessage);
                  const r = o.wrapperEl,
                    a =
                      n.id ||
                      r.getAttribute("id") ||
                      "swiper-wrapper-" +
                        "x"
                          .repeat((e = void 0 === (e = 16) ? 16 : e))
                          .replace(/x/g, () =>
                            Math.round(16 * Math.random()).toString(16)
                          );
                  var t,
                    e =
                      o.params.autoplay && o.params.autoplay.enabled
                        ? "off"
                        : "polite",
                    i = a,
                    { nextEl: e, prevEl: s } =
                      (d(r).forEach((e) => {
                        e.setAttribute("id", i);
                      }),
                      (s = r),
                      (t = e),
                      (s = d(s)).forEach((e) => {
                        e.setAttribute("aria-live", t);
                      }),
                      _(),
                      o.navigation || {}),
                    e = d(e),
                    s = d(s);
                  e && e.forEach((e) => v(e, a, n.nextSlideMessage)),
                    s && s.forEach((e) => v(e, a, n.prevSlideMessage)),
                    g() &&
                      (Array.isArray(o.pagination.el)
                        ? o.pagination.el
                        : [o.pagination.el]
                      ).forEach((e) => {
                        e.addEventListener("keydown", f);
                      }),
                    o.el.addEventListener("focus", w, !0),
                    o.el.addEventListener("pointerdown", y, !0),
                    o.el.addEventListener("pointerup", b, !0);
                }
              }),
              i(
                "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
                () => {
                  o.params.a11y.enabled && _();
                }
              ),
              i("fromEdge toEdge afterInit lock unlock", () => {
                var e, t;
                o.params.a11y.enabled &&
                  !o.params.loop &&
                  !o.params.rewind &&
                  o.navigation &&
                  (({ nextEl: e, prevEl: t } = o.navigation),
                  t && (o.isBeginning ? (h(t), r) : (p(t), n))(t),
                  e) &&
                  (o.isEnd ? (h(e), r) : (p(e), n))(e);
              }),
              i("paginationUpdate", () => {
                if (o.params.a11y.enabled) {
                  const t = o.params.a11y;
                  m() &&
                    o.pagination.bullets.forEach((e) => {
                      o.params.pagination.clickable &&
                        (n(e),
                        o.params.pagination.renderBullet ||
                          (a(e, "button"),
                          c(
                            e,
                            t.paginationBulletMessage.replace(
                              /\{\{index\}\}/,
                              D(e) + 1
                            )
                          ))),
                        e.matches(N(o.params.pagination.bulletActiveClass))
                          ? e.setAttribute("aria-current", "true")
                          : e.removeAttribute("aria-current");
                    });
                }
              }),
              i("destroy", () => {
                var e, t;
                o.params.a11y.enabled &&
                  (l && l.remove(),
                  ({ nextEl: e, prevEl: t } = o.navigation || {}),
                  (e = d(e)),
                  (t = d(t)),
                  e && e.forEach((e) => e.removeEventListener("keydown", f)),
                  t && t.forEach((e) => e.removeEventListener("keydown", f)),
                  g() &&
                    (Array.isArray(o.pagination.el)
                      ? o.pagination.el
                      : [o.pagination.el]
                    ).forEach((e) => {
                      e.removeEventListener("keydown", f);
                    }),
                  o.el.removeEventListener("focus", w, !0),
                  o.el.removeEventListener("pointerdown", y, !0),
                  o.el.removeEventListener("pointerup", b, !0));
              });
          },
          function (e) {
            let { swiper: a, extendParams: t, on: i } = e,
              r =
                (t({
                  history: {
                    enabled: !1,
                    root: "",
                    replaceState: !1,
                    key: "slides",
                    keepQuery: !1,
                  },
                }),
                !1),
              s = {};
            const o = (e) =>
                e
                  .toString()
                  .replace(/\s+/g, "-")
                  .replace(/[^\w-]+/g, "")
                  .replace(/--+/g, "-")
                  .replace(/^-+/, "")
                  .replace(/-+$/, ""),
              n = (e) => {
                var t = A(),
                  e = (e ? new URL(e) : t.location).pathname
                    .slice(1)
                    .split("/")
                    .filter((e) => "" !== e),
                  t = e.length;
                return { key: e[t - 2], value: e[t - 1] };
              },
              l = (i, e) => {
                var s = A();
                if (r && a.params.history.enabled) {
                  var n = a.params.url ? new URL(a.params.url) : s.location,
                    e = a.slides[e];
                  let t = o(e.getAttribute("data-history"));
                  if (0 < a.params.history.root.length) {
                    let e = a.params.history.root;
                    "/" === e[e.length - 1] && (e = e.slice(0, e.length - 1)),
                      (t = e + "/" + (i ? i + "/" : "") + t);
                  } else n.pathname.includes(i) || (t = (i ? i + "/" : "") + t);
                  a.params.history.keepQuery && (t += n.search);
                  e = s.history.state;
                  (e && e.value === t) ||
                    (a.params.history.replaceState
                      ? s.history.replaceState({ value: t }, null, t)
                      : s.history.pushState({ value: t }, null, t));
                }
              },
              d = (i, s, n) => {
                if (s)
                  for (let e = 0, t = a.slides.length; e < t; e += 1) {
                    var r = a.slides[e];
                    if (o(r.getAttribute("data-history")) === s) {
                      const s = a.getSlideIndex(r);
                      a.slideTo(s, i, n);
                    }
                  }
                else a.slideTo(0, i, n);
              },
              u = () => {
                (s = n(a.params.url)), d(a.params.speed, s.value, !1);
              };
            i("init", () => {
              var e;
              a.params.history.enabled &&
                ((e = A()), a.params.history) &&
                (e.history && e.history.pushState
                  ? ((r = !0),
                    ((s = n(a.params.url)).key || s.value) &&
                      d(0, s.value, a.params.runCallbacksOnInit),
                    a.params.history.replaceState ||
                      e.addEventListener("popstate", u))
                  : ((a.params.history.enabled = !1),
                    (a.params.hashNavigation.enabled = !0)));
            }),
              i("destroy", () => {
                var e;
                a.params.history.enabled &&
                  ((e = A()),
                  a.params.history.replaceState ||
                    e.removeEventListener("popstate", u));
              }),
              i("transitionEnd _freeModeNoMomentumRelease", () => {
                r && l(a.params.history.key, a.activeIndex);
              }),
              i("slideChange", () => {
                r && a.params.cssMode && l(a.params.history.key, a.activeIndex);
              });
          },
          function (e) {
            let { swiper: i, extendParams: t, emit: s, on: n } = e,
              r = !1;
            const a = M(),
              o = A(),
              l =
                (t({
                  hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1,
                    getSlideIndex(e, t) {
                      if (i.virtual && i.params.virtual.enabled) {
                        const e = i.slides.filter(
                          (e) => e.getAttribute("data-hash") === t
                        )[0];
                        return e
                          ? parseInt(
                              e.getAttribute("data-swiper-slide-index"),
                              10
                            )
                          : 0;
                      }
                      return i.getSlideIndex(
                        P(
                          i.slidesEl,
                          `.${i.params.slideClass}[data-hash="${t}"], swiper-slide[data-hash="${t}"]`
                        )[0]
                      );
                    },
                  },
                }),
                () => {
                  s("hashChange");
                  const e = a.location.hash.replace("#", ""),
                    t =
                      i.virtual && i.params.virtual.enabled
                        ? i.slidesEl.querySelector(
                            `[data-swiper-slide-index="${i.activeIndex}"]`
                          )
                        : i.slides[i.activeIndex];
                  if (e !== (t ? t.getAttribute("data-hash") : "")) {
                    const t = i.params.hashNavigation.getSlideIndex(i, e);
                    void 0 === t || Number.isNaN(t) || i.slideTo(t);
                  }
                }),
              d = () => {
                var e;
                r &&
                  i.params.hashNavigation.enabled &&
                  ((e = (e =
                    i.virtual && i.params.virtual.enabled
                      ? i.slidesEl.querySelector(
                          `[data-swiper-slide-index="${i.activeIndex}"]`
                        )
                      : i.slides[i.activeIndex])
                    ? e.getAttribute("data-hash") ||
                      e.getAttribute("data-history")
                    : ""),
                  i.params.hashNavigation.replaceState &&
                  o.history &&
                  o.history.replaceState
                    ? o.history.replaceState(null, null, "#" + e || "")
                    : (a.location.hash = e || ""),
                  s("hashSet"));
              };
            n("init", () => {
              var e;
              !i.params.hashNavigation.enabled ||
                !i.params.hashNavigation.enabled ||
                (i.params.history && i.params.history.enabled) ||
                ((r = !0),
                (e = a.location.hash.replace("#", "")) &&
                  ((e = i.params.hashNavigation.getSlideIndex(i, e)),
                  i.slideTo(e || 0, 0, i.params.runCallbacksOnInit, !0)),
                i.params.hashNavigation.watchState &&
                  o.addEventListener("hashchange", l));
            }),
              n("destroy", () => {
                i.params.hashNavigation.enabled &&
                  i.params.hashNavigation.watchState &&
                  o.removeEventListener("hashchange", l);
              }),
              n("transitionEnd _freeModeNoMomentumRelease", () => {
                r && d();
              }),
              n("slideChange", () => {
                r && i.params.cssMode && d();
              });
          },
          function (e) {
            let r,
              a,
              { swiper: o, extendParams: t, on: i, emit: l, params: s } = e;
            (o.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
              t({
                autoplay: {
                  enabled: !1,
                  delay: 3e3,
                  waitForTransition: !0,
                  disableOnInteraction: !1,
                  stopOnLastSlide: !1,
                  reverseDirection: !1,
                  pauseOnMouseEnter: !1,
                },
              });
            let d,
              n,
              u,
              c,
              h,
              p,
              f,
              m,
              g = s && s.autoplay ? s.autoplay.delay : 3e3,
              v = s && s.autoplay ? s.autoplay.delay : 3e3,
              y = new Date().getTime();
            function b(e) {
              o &&
                !o.destroyed &&
                o.wrapperEl &&
                e.target === o.wrapperEl &&
                (o.wrapperEl.removeEventListener("transitionend", b), m || C());
            }
            const w = () => {
                var e;
                !o.destroyed &&
                  o.autoplay.running &&
                  (o.autoplay.paused ? (n = !0) : n && ((v = d), (n = !1)),
                  (e = o.autoplay.paused ? d : y + v - new Date().getTime()),
                  (o.autoplay.timeLeft = e),
                  l("autoplayTimeLeft", e, e / g),
                  (a = requestAnimationFrame(() => {
                    w();
                  })));
              },
              _ = (t) => {
                if (!o.destroyed && o.autoplay.running) {
                  cancelAnimationFrame(a), w();
                  let e = void 0 === t ? o.params.autoplay.delay : t;
                  (g = o.params.autoplay.delay), (v = o.params.autoplay.delay);
                  var i = (() => {
                    var e =
                      o.virtual && o.params.virtual.enabled
                        ? o.slides.filter((e) =>
                            e.classList.contains("swiper-slide-active")
                          )[0]
                        : o.slides[o.activeIndex];
                    if (e)
                      return parseInt(
                        e.getAttribute("data-swiper-autoplay"),
                        10
                      );
                  })();
                  !Number.isNaN(i) &&
                    0 < i &&
                    void 0 === t &&
                    ((e = i), (g = i), (v = i)),
                    (d = e);
                  const s = o.params.speed,
                    n = () => {
                      o &&
                        !o.destroyed &&
                        (o.params.autoplay.reverseDirection
                          ? !o.isBeginning || o.params.loop || o.params.rewind
                            ? (o.slidePrev(s, !0, !0), l("autoplay"))
                            : o.params.autoplay.stopOnLastSlide ||
                              (o.slideTo(o.slides.length - 1, s, !0, !0),
                              l("autoplay"))
                          : !o.isEnd || o.params.loop || o.params.rewind
                          ? (o.slideNext(s, !0, !0), l("autoplay"))
                          : o.params.autoplay.stopOnLastSlide ||
                            (o.slideTo(0, s, !0, !0), l("autoplay")),
                        o.params.cssMode) &&
                        ((y = new Date().getTime()),
                        requestAnimationFrame(() => {
                          _();
                        }));
                    };
                  return (
                    0 < e
                      ? (clearTimeout(r),
                        (r = setTimeout(() => {
                          n();
                        }, e)))
                      : requestAnimationFrame(() => {
                          n();
                        }),
                    e
                  );
                }
              },
              D = () => {
                (y = new Date().getTime()),
                  (o.autoplay.running = !0),
                  _(),
                  l("autoplayStart");
              },
              x = () => {
                (o.autoplay.running = !1),
                  clearTimeout(r),
                  cancelAnimationFrame(a),
                  l("autoplayStop");
              },
              E = (e, t) => {
                !o.destroyed &&
                  o.autoplay.running &&
                  (clearTimeout(r),
                  e || (f = !0),
                  (e = () => {
                    l("autoplayPause"),
                      o.params.autoplay.waitForTransition
                        ? o.wrapperEl.addEventListener("transitionend", b)
                        : C();
                  }),
                  (o.autoplay.paused = !0),
                  t
                    ? (p && (d = o.params.autoplay.delay), (p = !1), e())
                    : ((t = d || o.params.autoplay.delay),
                      (d = t - (new Date().getTime() - y)),
                      (o.isEnd && d < 0 && !o.params.loop) ||
                        (d < 0 && (d = 0), e())));
              },
              C = () => {
                (o.isEnd && d < 0 && !o.params.loop) ||
                  o.destroyed ||
                  !o.autoplay.running ||
                  ((y = new Date().getTime()),
                  f ? ((f = !1), _(d)) : _(),
                  (o.autoplay.paused = !1),
                  l("autoplayResume"));
              },
              T = () => {
                var e;
                !o.destroyed &&
                  o.autoplay.running &&
                  ("hidden" === (e = M()).visibilityState && ((f = !0), E(!0)),
                  "visible" === e.visibilityState) &&
                  C();
              },
              S = (e) => {
                "mouse" === e.pointerType &&
                  ((f = !0),
                  (m = !0),
                  o.animating || o.autoplay.paused || E(!0));
              },
              A = (e) => {
                "mouse" === e.pointerType &&
                  ((m = !1), o.autoplay.paused) &&
                  C();
              };
            i("init", () => {
              o.params.autoplay.enabled &&
                (o.params.autoplay.pauseOnMouseEnter &&
                  (o.el.addEventListener("pointerenter", S),
                  o.el.addEventListener("pointerleave", A)),
                M().addEventListener("visibilitychange", T),
                D());
            }),
              i("destroy", () => {
                o.el.removeEventListener("pointerenter", S),
                  o.el.removeEventListener("pointerleave", A),
                  M().removeEventListener("visibilitychange", T),
                  o.autoplay.running && x();
              }),
              i("_freeModeStaticRelease", () => {
                (c || f) && C();
              }),
              i("_freeModeNoMomentumRelease", () => {
                o.params.autoplay.disableOnInteraction ? x() : E(!0, !0);
              }),
              i("beforeTransitionStart", (e, t, i) => {
                !o.destroyed &&
                  o.autoplay.running &&
                  (i || !o.params.autoplay.disableOnInteraction
                    ? E(!0, !0)
                    : x());
              }),
              i("sliderFirstMove", () => {
                !o.destroyed &&
                  o.autoplay.running &&
                  (o.params.autoplay.disableOnInteraction
                    ? x()
                    : ((u = !0),
                      (c = !1),
                      (f = !1),
                      (h = setTimeout(() => {
                        (f = !0), (c = !0), E(!0);
                      }, 200))));
              }),
              i("touchEnd", () => {
                !o.destroyed &&
                  o.autoplay.running &&
                  u &&
                  (clearTimeout(h),
                  clearTimeout(r),
                  (u =
                    ((c =
                      (o.params.autoplay.disableOnInteraction ||
                        (c && o.params.cssMode && C()),
                      !1)),
                    !1)));
              }),
              i("slideChange", () => {
                !o.destroyed && o.autoplay.running && (p = !0);
              }),
              Object.assign(o.autoplay, {
                start: D,
                stop: x,
                pause: E,
                resume: C,
              });
          },
          function (e) {
            let { swiper: l, extendParams: t, on: i } = e,
              s =
                (t({
                  thumbs: {
                    swiper: null,
                    multipleActiveThumbs: !0,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-thumbs",
                  },
                }),
                !1),
              n = !1;
            function r() {
              var e,
                t,
                i = l.thumbs.swiper;
              !i ||
                i.destroyed ||
                ((e = i.clickedIndex),
                (t = i.clickedSlide) &&
                  t.classList.contains(
                    l.params.thumbs.slideThumbActiveClass
                  )) ||
                (null != e &&
                  ((t = i.params.loop
                    ? parseInt(
                        i.clickedSlide.getAttribute("data-swiper-slide-index"),
                        10
                      )
                    : e),
                  l.params.loop ? l.slideToLoop(t) : l.slideTo(t)));
            }
            function a() {
              var e = l.params["thumbs"];
              if (s) return !1;
              s = !0;
              var t = l.constructor;
              return (
                e.swiper instanceof t
                  ? ((l.thumbs.swiper = e.swiper),
                    Object.assign(l.thumbs.swiper.originalParams, {
                      watchSlidesProgress: !0,
                      slideToClickedSlide: !1,
                    }),
                    Object.assign(l.thumbs.swiper.params, {
                      watchSlidesProgress: !0,
                      slideToClickedSlide: !1,
                    }),
                    l.thumbs.swiper.update())
                  : d(e.swiper) &&
                    ((e = Object.assign({}, e.swiper)),
                    Object.assign(e, {
                      watchSlidesProgress: !0,
                      slideToClickedSlide: !1,
                    }),
                    (l.thumbs.swiper = new t(e)),
                    (n = !0)),
                l.thumbs.swiper.el.classList.add(
                  l.params.thumbs.thumbsContainerClass
                ),
                l.thumbs.swiper.on("tap", r),
                !0
              );
            }
            function o(s) {
              var n = l.thumbs.swiper;
              if (n && !n.destroyed) {
                var r =
                  "auto" === n.params.slidesPerView
                    ? n.slidesPerViewDynamic()
                    : n.params.slidesPerView;
                let t = 1;
                const i = l.params.thumbs.slideThumbActiveClass;
                if (
                  (1 < l.params.slidesPerView &&
                    !l.params.centeredSlides &&
                    (t = l.params.slidesPerView),
                  l.params.thumbs.multipleActiveThumbs || (t = 1),
                  (t = Math.floor(t)),
                  n.slides.forEach((e) => e.classList.remove(i)),
                  n.params.loop ||
                    (n.params.virtual && n.params.virtual.enabled))
                )
                  for (let e = 0; e < t; e += 1)
                    P(
                      n.slidesEl,
                      `[data-swiper-slide-index="${l.realIndex + e}"]`
                    ).forEach((e) => {
                      e.classList.add(i);
                    });
                else
                  for (let e = 0; e < t; e += 1)
                    n.slides[l.realIndex + e] &&
                      n.slides[l.realIndex + e].classList.add(i);
                var a = l.params.thumbs.autoScrollOffset,
                  o = a && !n.params.loop;
                if (l.realIndex !== n.realIndex || o) {
                  const e = n.activeIndex;
                  let t, i;
                  if (n.params.loop) {
                    const s = n.slides.filter(
                      (e) =>
                        e.getAttribute("data-swiper-slide-index") ===
                        "" + l.realIndex
                    )[0];
                    (t = n.slides.indexOf(s)),
                      (i = l.activeIndex > l.previousIndex ? "next" : "prev");
                  } else
                    (t = l.realIndex),
                      (i = t > l.previousIndex ? "next" : "prev");
                  o && (t += "next" === i ? a : -1 * a),
                    n.visibleSlidesIndexes &&
                      n.visibleSlidesIndexes.indexOf(t) < 0 &&
                      (n.params.centeredSlides
                        ? (t =
                            t > e
                              ? t - Math.floor(r / 2) + 1
                              : t + Math.floor(r / 2) - 1)
                        : t > e && n.params.slidesPerGroup,
                      n.slideTo(t, s ? 0 : void 0));
                }
              }
            }
            (l.thumbs = { swiper: null }),
              i("beforeInit", () => {
                const i = l.params["thumbs"];
                if (i && i.swiper)
                  if (
                    "string" == typeof i.swiper ||
                    i.swiper instanceof HTMLElement
                  ) {
                    const s = M(),
                      e = () => {
                        l.destroyed ||
                          (() => {
                            const t =
                              "string" == typeof i.swiper
                                ? s.querySelector(i.swiper)
                                : i.swiper;
                            if (t && t.swiper)
                              (i.swiper = t.swiper), a(), o(!0);
                            else if (t) {
                              const s = (e) => {
                                (i.swiper = e.detail[0]),
                                  t.removeEventListener("init", s),
                                  a(),
                                  o(!0),
                                  i.swiper.update(),
                                  l.update();
                              };
                              t.addEventListener("init", s);
                            }
                            return t;
                          })() ||
                          requestAnimationFrame(e);
                      };
                    requestAnimationFrame(e);
                  } else a(), o(!0);
              }),
              i("slideChange update resize observerUpdate", () => {
                o();
              }),
              i("setTransition", (e, t) => {
                var i = l.thumbs.swiper;
                i && !i.destroyed && i.setTransition(t);
              }),
              i("beforeDestroy", () => {
                var e = l.thumbs.swiper;
                e && !e.destroyed && n && e.destroy();
              }),
              Object.assign(l.thumbs, { init: a, update: o });
          },
          function (e) {
            let { swiper: h, extendParams: t, emit: p, once: f } = e;
            t({
              freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: 0.02,
              },
            }),
              Object.assign(h, {
                freeMode: {
                  onTouchStart: function () {
                    var e;
                    h.params.cssMode ||
                      ((e = h.getTranslate()),
                      h.setTranslate(e),
                      h.setTransition(0),
                      (h.touchEventsData.velocities.length = 0),
                      h.freeMode.onTouchEnd({
                        currentPos: h.rtl ? h.translate : -h.translate,
                      }));
                  },
                  onTouchMove: function () {
                    var e, t;
                    h.params.cssMode ||
                      (({ touchEventsData: e, touches: t } = h),
                      0 === e.velocities.length &&
                        e.velocities.push({
                          position: t[h.isHorizontal() ? "startX" : "startY"],
                          time: e.touchStartTime,
                        }),
                      e.velocities.push({
                        position: t[h.isHorizontal() ? "currentX" : "currentY"],
                        time: v(),
                      }));
                  },
                  onTouchEnd: function (r) {
                    let a = r["currentPos"];
                    if (!h.params.cssMode) {
                      const {
                          params: o,
                          wrapperEl: l,
                          rtlTranslate: d,
                          snapGrid: u,
                          touchEventsData: c,
                        } = h,
                        e = v() - c.touchStartTime;
                      if (a < -h.minTranslate()) h.slideTo(h.activeIndex);
                      else if (a > -h.maxTranslate())
                        h.slides.length < u.length
                          ? h.slideTo(u.length - 1)
                          : h.slideTo(h.slides.length - 1);
                      else {
                        if (o.freeMode.momentum) {
                          if (1 < c.velocities.length) {
                            const r = c.velocities.pop(),
                              a = c.velocities.pop(),
                              p = r.position - a.position,
                              f = r.time - a.time;
                            (h.velocity = p / f),
                              (h.velocity /= 2),
                              Math.abs(h.velocity) <
                                o.freeMode.minimumVelocity && (h.velocity = 0),
                              (150 < f || 300 < v() - r.time) &&
                                (h.velocity = 0);
                          } else h.velocity = 0;
                          (h.velocity *= o.freeMode.momentumVelocityRatio),
                            (c.velocities.length = 0);
                          let e = 1e3 * o.freeMode.momentumRatio;
                          const a = h.velocity * e;
                          let i = h.translate + a;
                          d && (i = -i);
                          let t,
                            s = !1;
                          r =
                            20 *
                            Math.abs(h.velocity) *
                            o.freeMode.momentumBounceRatio;
                          let n;
                          if (i < h.maxTranslate())
                            o.freeMode.momentumBounce
                              ? (i + h.maxTranslate() < -r &&
                                  (i = h.maxTranslate() - r),
                                (t = h.maxTranslate()),
                                (s = !0),
                                (c.allowMomentumBounce = !0))
                              : (i = h.maxTranslate()),
                              o.loop && o.centeredSlides && (n = !0);
                          else if (i > h.minTranslate())
                            o.freeMode.momentumBounce
                              ? (i - h.minTranslate() > r &&
                                  (i = h.minTranslate() + r),
                                (t = h.minTranslate()),
                                (s = !0),
                                (c.allowMomentumBounce = !0))
                              : (i = h.minTranslate()),
                              o.loop && o.centeredSlides && (n = !0);
                          else if (o.freeMode.sticky) {
                            let t;
                            for (let e = 0; e < u.length; e += 1)
                              if (u[e] > -i) {
                                t = e;
                                break;
                              }
                            i = -(i =
                              Math.abs(u[t] - i) < Math.abs(u[t - 1] - i) ||
                              "next" === h.swipeDirection
                                ? u[t]
                                : u[t - 1]);
                          }
                          if (
                            (n &&
                              f("transitionEnd", () => {
                                h.loopFix();
                              }),
                            0 !== h.velocity)
                          ) {
                            if (
                              ((e = d
                                ? Math.abs((-i - h.translate) / h.velocity)
                                : Math.abs((i - h.translate) / h.velocity)),
                              o.freeMode.sticky)
                            ) {
                              const a = Math.abs((d ? -i : i) - h.translate),
                                p = h.slidesSizesGrid[h.activeIndex];
                              e =
                                a < p
                                  ? o.speed
                                  : a < 2 * p
                                  ? 1.5 * o.speed
                                  : 2.5 * o.speed;
                            }
                          } else if (o.freeMode.sticky)
                            return void h.slideToClosest();
                          o.freeMode.momentumBounce && s
                            ? (h.updateProgress(t),
                              h.setTransition(e),
                              h.setTranslate(i),
                              h.transitionStart(!0, h.swipeDirection),
                              (h.animating = !0),
                              g(l, () => {
                                h &&
                                  !h.destroyed &&
                                  c.allowMomentumBounce &&
                                  (p("momentumBounce"),
                                  h.setTransition(o.speed),
                                  setTimeout(() => {
                                    h.setTranslate(t),
                                      g(l, () => {
                                        h && !h.destroyed && h.transitionEnd();
                                      });
                                  }, 0));
                              }))
                            : h.velocity
                            ? (p("_freeModeNoMomentumRelease"),
                              h.updateProgress(i),
                              h.setTransition(e),
                              h.setTranslate(i),
                              h.transitionStart(!0, h.swipeDirection),
                              h.animating ||
                                ((h.animating = !0),
                                g(l, () => {
                                  h && !h.destroyed && h.transitionEnd();
                                })))
                            : h.updateProgress(i),
                            h.updateActiveIndex(),
                            h.updateSlidesClasses();
                        } else {
                          if (o.freeMode.sticky) return void h.slideToClosest();
                          o.freeMode && p("_freeModeNoMomentumRelease");
                        }
                        (!o.freeMode.momentum || e >= o.longSwipesMs) &&
                          (p("_freeModeStaticRelease"),
                          h.updateProgress(),
                          h.updateActiveIndex(),
                          h.updateSlidesClasses());
                      }
                    }
                  },
                },
              });
          },
          function (e) {
            let u,
              c,
              h,
              s,
              { swiper: p, extendParams: t, on: i } = e;
            t({ grid: { rows: 1, fill: "column" } });
            const f = () => {
              let e = p.params.spaceBetween;
              return (
                "string" == typeof e && 0 <= e.indexOf("%")
                  ? (e = (parseFloat(e.replace("%", "")) / 100) * p.size)
                  : "string" == typeof e && (e = parseFloat(e)),
                e
              );
            };
            i("init", () => {
              s = p.params.grid && 1 < p.params.grid.rows;
            }),
              i("update", () => {
                var { params: e, el: t } = p,
                  i = e.grid && 1 < e.grid.rows;
                s && !i
                  ? (t.classList.remove(
                      e.containerModifierClass + "grid",
                      e.containerModifierClass + "grid-column"
                    ),
                    (h = 1),
                    p.emitContainerClasses())
                  : !s &&
                    i &&
                    (t.classList.add(e.containerModifierClass + "grid"),
                    "column" === e.grid.fill &&
                      t.classList.add(e.containerModifierClass + "grid-column"),
                    p.emitContainerClasses()),
                  (s = i);
              }),
              (p.grid = {
                initSlides: (e) => {
                  var t = p.params["slidesPerView"],
                    { rows: i, fill: s } = p.params.grid,
                    e = (
                      p.virtual && p.params.virtual.enabled
                        ? p.virtual.slides
                        : e
                    ).length;
                  (h = Math.floor(e / i)),
                    (u =
                      Math.floor(e / i) === e / i ? e : Math.ceil(e / i) * i),
                    "auto" !== t && "row" === s && (u = Math.max(u, t * i)),
                    (c = u / i);
                },
                unsetSlides: () => {
                  p.slides &&
                    p.slides.forEach((e) => {
                      e.swiperSlideGridSet &&
                        ((e.style.height = ""),
                        (e.style[p.getDirectionLabel("margin-top")] = ""));
                    });
                },
                updateSlide: (e, t, i) => {
                  var s = p.params["slidesPerGroup"],
                    n = f(),
                    { rows: r, fill: a } = p.params.grid,
                    i = (
                      p.virtual && p.params.virtual.enabled
                        ? p.virtual.slides
                        : i
                    ).length;
                  let o, l, d;
                  if ("row" === a && 1 < s) {
                    const c = Math.floor(e / (s * r)),
                      h = e - r * s * c,
                      p =
                        0 === c
                          ? s
                          : Math.min(Math.ceil((i - c * r * s) / r), s);
                    (d = Math.floor(h / p)),
                      (o = (l = h - d * p + c * s) + (d * u) / r),
                      (t.style.order = o);
                  } else
                    "column" === a
                      ? ((l = Math.floor(e / r)),
                        (d = e - l * r),
                        (l > h || (l === h && d === r - 1)) &&
                          (d += 1) >= r &&
                          ((d = 0), (l += 1)))
                      : ((d = Math.floor(e / c)), (l = e - d * c));
                  (t.row = d),
                    (t.column = l),
                    (t.style.height = `calc((100% - ${(r - 1) * n}px) / ${r})`),
                    (t.style[p.getDirectionLabel("margin-top")] =
                      0 !== d ? n && n + "px" : ""),
                    (t.swiperSlideGridSet = !0);
                },
                updateWrapperSize: (i, s) => {
                  var { centeredSlides: e, roundLengths: n } = p.params,
                    t = f(),
                    r = p.params.grid["rows"];
                  if (
                    ((p.virtualSize = (i + t) * u),
                    (p.virtualSize = Math.ceil(p.virtualSize / r) - t),
                    p.params.cssMode ||
                      (p.wrapperEl.style[p.getDirectionLabel("width")] =
                        p.virtualSize + t + "px"),
                    e)
                  ) {
                    const i = [];
                    for (let t = 0; t < s.length; t += 1) {
                      let e = s[t];
                      n && (e = Math.floor(e)),
                        s[t] < p.virtualSize + s[0] && i.push(e);
                    }
                    s.splice(0, s.length), s.push(...i);
                  }
                },
              });
          },
          function (e) {
            e = e.swiper;
            Object.assign(e, {
              appendSlide: function (t) {
                const { params: e, slidesEl: i } = this;
                e.loop && this.loopDestroy();
                var s = (e) => {
                  var t;
                  "string" == typeof e
                    ? (((t = document.createElement("div")).innerHTML = e),
                      i.append(t.children[0]),
                      (t.innerHTML = ""))
                    : i.append(e);
                };
                if ("object" == typeof t && "length" in t)
                  for (let e = 0; e < t.length; e += 1) t[e] && s(t[e]);
                else s(t);
                this.recalcSlides(),
                  e.loop && this.loopCreate(),
                  (e.observer && !this.isElement) || this.update();
              }.bind(e),
              prependSlide: function (t) {
                const { params: e, activeIndex: i, slidesEl: s } = this;
                e.loop && this.loopDestroy();
                let n = i + 1;
                var r = (e) => {
                  var t;
                  "string" == typeof e
                    ? (((t = document.createElement("div")).innerHTML = e),
                      s.prepend(t.children[0]),
                      (t.innerHTML = ""))
                    : s.prepend(e);
                };
                if ("object" == typeof t && "length" in t) {
                  for (let e = 0; e < t.length; e += 1) t[e] && r(t[e]);
                  n = i + t.length;
                } else r(t);
                this.recalcSlides(),
                  e.loop && this.loopCreate(),
                  (e.observer && !this.isElement) || this.update(),
                  this.slideTo(n, 0, !1);
              }.bind(e),
              addSlide: function (t, i) {
                var s = this,
                  { params: n, activeIndex: r, slidesEl: a } = s;
                let o = r;
                if (
                  (n.loop &&
                    ((o -= s.loopedSlides), s.loopDestroy(), s.recalcSlides()),
                  (r = s.slides.length),
                  t <= 0)
                )
                  s.prependSlide(i);
                else if (r <= t) s.appendSlide(i);
                else {
                  let e = o > t ? o + 1 : o;
                  var l = [];
                  for (let e = r - 1; e >= t; --e) {
                    const t = s.slides[e];
                    t.remove(), l.unshift(t);
                  }
                  if ("object" == typeof i && "length" in i) {
                    for (let e = 0; e < i.length; e += 1)
                      i[e] && a.append(i[e]);
                    e = o > t ? o + i.length : o;
                  } else a.append(i);
                  for (let e = 0; e < l.length; e += 1) a.append(l[e]);
                  s.recalcSlides(),
                    n.loop && s.loopCreate(),
                    (n.observer && !s.isElement) || s.update(),
                    n.loop
                      ? s.slideTo(e + s.loopedSlides, 0, !1)
                      : s.slideTo(e, 0, !1);
                }
              }.bind(e),
              removeSlide: function (t) {
                var i = this,
                  { params: e, activeIndex: s } = i;
                let n = s;
                e.loop && ((n -= i.loopedSlides), i.loopDestroy());
                let r,
                  a = n;
                if ("object" == typeof t && "length" in t)
                  for (let e = 0; e < t.length; e += 1)
                    (r = t[e]),
                      i.slides[r] && i.slides[r].remove(),
                      r < a && --a;
                else (r = t), i.slides[r] && i.slides[r].remove(), r < a && --a;
                (a = Math.max(a, 0)),
                  i.recalcSlides(),
                  e.loop && i.loopCreate(),
                  (e.observer && !i.isElement) || i.update(),
                  e.loop
                    ? i.slideTo(a + i.loopedSlides, 0, !1)
                    : i.slideTo(a, 0, !1);
              }.bind(e),
              removeAllSlides: function () {
                var t = [];
                for (let e = 0; e < this.slides.length; e += 1) t.push(e);
                this.removeSlide(t);
              }.bind(e),
            });
          },
          function (e) {
            let { swiper: a, extendParams: t, on: i } = e;
            t({ fadeEffect: { crossFade: !1 } }),
              p({
                effect: "fade",
                swiper: a,
                on: i,
                setTranslate: () => {
                  const s = a["slides"];
                  a.params.fadeEffect;
                  for (let i = 0; i < s.length; i += 1) {
                    const s = a.slides[i];
                    let e = -s.swiperSlideOffset,
                      t = (a.params.virtualTranslate || (e -= a.translate), 0);
                    a.isHorizontal() || ((t = e), (e = 0));
                    var n = a.params.fadeEffect.crossFade
                        ? Math.max(1 - Math.abs(s.progress), 0)
                        : 1 + Math.min(Math.max(s.progress, -1), 0),
                      r = _(0, s);
                    (r.style.opacity = n),
                      (r.style.transform = `translate3d(${e}px, ${t}px, 0px)`);
                  }
                },
                setTransition: (t) => {
                  var e = a.slides.map((e) => r(e));
                  e.forEach((e) => {
                    e.style.transitionDuration = t + "ms";
                  }),
                    f({
                      swiper: a,
                      duration: t,
                      transformElements: e,
                      allSlides: !0,
                    });
                },
                overwriteParams: () => ({
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !a.params.cssMode,
                }),
              });
          },
          function (e) {
            let { swiper: m, extendParams: t, on: i } = e;
            t({
              cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: 0.94,
              },
            });
            const g = (e, t, i) => {
              let s = i
                  ? e.querySelector(".swiper-slide-shadow-left")
                  : e.querySelector(".swiper-slide-shadow-top"),
                n = i
                  ? e.querySelector(".swiper-slide-shadow-right")
                  : e.querySelector(".swiper-slide-shadow-bottom");
              s ||
                ((s = L(
                  "div",
                  (
                    "swiper-slide-shadow-cube swiper-slide-shadow-" +
                    (i ? "left" : "top")
                  ).split(" ")
                )),
                e.append(s)),
                n ||
                  ((n = L(
                    "div",
                    (
                      "swiper-slide-shadow-cube swiper-slide-shadow-" +
                      (i ? "right" : "bottom")
                    ).split(" ")
                  )),
                  e.append(n)),
                s && (s.style.opacity = Math.max(-t, 0)),
                n && (n.style.opacity = Math.max(t, 0));
            };
            p({
              effect: "cube",
              swiper: m,
              on: i,
              setTranslate: () => {
                const {
                    el: e,
                    wrapperEl: t,
                    slides: o,
                    width: i,
                    height: s,
                    rtlTranslate: l,
                    size: d,
                    browser: u,
                  } = m,
                  c = m.params.cubeEffect,
                  h = m.isHorizontal(),
                  p = m.virtual && m.params.virtual.enabled;
                let n,
                  f = 0;
                c.shadow &&
                  (h
                    ? ((n = m.wrapperEl.querySelector(".swiper-cube-shadow")) ||
                        ((n = L("div", "swiper-cube-shadow")),
                        m.wrapperEl.append(n)),
                      (n.style.height = i + "px"))
                    : (n = e.querySelector(".swiper-cube-shadow")) ||
                      ((n = L("div", "swiper-cube-shadow")), e.append(n)));
                for (let a = 0; a < o.length; a += 1) {
                  const m = o[a];
                  let e = a,
                    t =
                      90 *
                      (e = p
                        ? parseInt(
                            m.getAttribute("data-swiper-slide-index"),
                            10
                          )
                        : e),
                    i = Math.floor(t / 360);
                  l && ((t = -t), (i = Math.floor(-t / 360)));
                  const u = Math.max(Math.min(m.progress, 1), -1);
                  let s = 0,
                    n = 0,
                    r = 0;
                  e % 4 == 0
                    ? ((s = 4 * -i * d), (r = 0))
                    : (e - 1) % 4 == 0
                    ? ((s = 0), (r = 4 * -i * d))
                    : (e - 2) % 4 == 0
                    ? ((s = d + 4 * i * d), (r = d))
                    : (e - 3) % 4 == 0 && ((s = -d), (r = 3 * d + 4 * d * i)),
                    l && (s = -s),
                    h || ((n = s), (s = 0));
                  const L = `rotateX(${h ? 0 : -t}deg) rotateY(${
                    h ? t : 0
                  }deg) translate3d(${s}px, ${n}px, ${r}px)`;
                  u <= 1 &&
                    -1 < u &&
                    ((f = 90 * e + 90 * u), l) &&
                    (f = 90 * -e - 90 * u),
                    (m.style.transform = L),
                    c.slideShadows && g(m, u, h);
                }
                if (
                  ((t.style.transformOrigin = `50% 50% -${d / 2}px`),
                  (t.style["-webkit-transform-origin"] = `50% 50% -${d / 2}px`),
                  c.shadow)
                )
                  if (h)
                    n.style.transform = `translate3d(0px, ${
                      i / 2 + c.shadowOffset
                    }px, ${-i / 2}px) rotateX(90deg) rotateZ(0deg) scale(${
                      c.shadowScale
                    })`;
                  else {
                    const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                      m =
                        1.5 -
                        (Math.sin((2 * e * Math.PI) / 360) / 2 +
                          Math.cos((2 * e * Math.PI) / 360) / 2),
                      t = c.shadowScale,
                      o = c.shadowScale / m,
                      g = c.shadowOffset;
                    n.style.transform = `scale3d(${t}, 1, ${o}) translate3d(0px, ${
                      s / 2 + g
                    }px, ${-s / 2 / o}px) rotateX(-90deg)`;
                  }
                var r =
                  (u.isSafari || u.isWebView) && u.needPerspectiveFix
                    ? -d / 2
                    : 0;
                (t.style.transform = `translate3d(0px,0,${r}px) rotateX(${
                  m.isHorizontal() ? 0 : f
                }deg) rotateY(${m.isHorizontal() ? -f : 0}deg)`),
                  t.style.setProperty("--swiper-cube-translate-z", r + "px");
              },
              setTransition: (t) => {
                var { el: e, slides: i } = m;
                if (
                  (i.forEach((e) => {
                    (e.style.transitionDuration = t + "ms"),
                      e
                        .querySelectorAll(
                          ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                        )
                        .forEach((e) => {
                          e.style.transitionDuration = t + "ms";
                        });
                  }),
                  m.params.cubeEffect.shadow && !m.isHorizontal())
                ) {
                  const m = e.querySelector(".swiper-cube-shadow");
                  m && (m.style.transitionDuration = t + "ms");
                }
              },
              recreateShadows: () => {
                const i = m.isHorizontal();
                m.slides.forEach((e) => {
                  var t = Math.max(Math.min(e.progress, 1), -1);
                  g(e, t, i);
                });
              },
              getEffectParams: () => m.params.cubeEffect,
              perspective: () => !0,
              overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0,
              }),
            });
          },
          function (e) {
            let { swiper: c, extendParams: t, on: i } = e;
            t({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
            const h = (e, t) => {
              let i = c.isHorizontal()
                  ? e.querySelector(".swiper-slide-shadow-left")
                  : e.querySelector(".swiper-slide-shadow-top"),
                s = c.isHorizontal()
                  ? e.querySelector(".swiper-slide-shadow-right")
                  : e.querySelector(".swiper-slide-shadow-bottom");
              (i = i || x("flip", e, c.isHorizontal() ? "left" : "top")),
                (s = s || x("flip", e, c.isHorizontal() ? "right" : "bottom")),
                i && (i.style.opacity = Math.max(-t, 0)),
                s && (s.style.opacity = Math.max(t, 0));
            };
            p({
              effect: "flip",
              swiper: c,
              on: i,
              setTranslate: () => {
                var { slides: a, rtlTranslate: o } = c,
                  l = c.params.flipEffect;
                for (let r = 0; r < a.length; r += 1) {
                  var d = a[r];
                  let e = d.progress;
                  c.params.flipEffect.limitRotation &&
                    (e = Math.max(Math.min(d.progress, 1), -1));
                  var u = d.swiperSlideOffset;
                  let t = -180 * e,
                    i = 0,
                    s = c.params.cssMode ? -u - c.translate : -u,
                    n = 0;
                  c.isHorizontal()
                    ? o && (t = -t)
                    : ((n = s), (s = 0), (i = -t), (t = 0)),
                    (d.style.zIndex = -Math.abs(Math.round(e)) + a.length),
                    l.slideShadows && h(d, e);
                  u = `translate3d(${s}px, ${n}px, 0px) rotateX(${i}deg) rotateY(${t}deg)`;
                  _(0, d).style.transform = u;
                }
              },
              setTransition: (t) => {
                var e = c.slides.map((e) => r(e));
                e.forEach((e) => {
                  (e.style.transitionDuration = t + "ms"),
                    e
                      .querySelectorAll(
                        ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                      )
                      .forEach((e) => {
                        e.style.transitionDuration = t + "ms";
                      });
                }),
                  f({ swiper: c, duration: t, transformElements: e });
              },
              recreateShadows: () => {
                c.params.flipEffect,
                  c.slides.forEach((e) => {
                    let t = e.progress;
                    c.params.flipEffect.limitRotation &&
                      (t = Math.max(Math.min(e.progress, 1), -1)),
                      h(e, t);
                  });
              },
              getEffectParams: () => c.params.flipEffect,
              perspective: () => !0,
              overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !c.params.cssMode,
              }),
            });
          },
          function (e) {
            let { swiper: b, extendParams: t, on: i } = e;
            t({
              coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0,
              },
            }),
              p({
                effect: "coverflow",
                swiper: b,
                on: i,
                setTranslate: () => {
                  const {
                      width: e,
                      height: l,
                      slides: d,
                      slidesSizesGrid: u,
                    } = b,
                    c = b.params.coverflowEffect,
                    h = b.isHorizontal(),
                    p = b.translate,
                    f = h ? e / 2 - p : l / 2 - p,
                    m = h ? c.rotate : -c.rotate,
                    g = c.depth;
                  for (let o = 0, e = d.length; o < e; o += 1) {
                    const b = d[o],
                      l = u[o],
                      p = (f - b.swiperSlideOffset - l / 2) / l,
                      y =
                        "function" == typeof c.modifier
                          ? c.modifier(p)
                          : p * c.modifier;
                    let e = h ? m * y : 0,
                      t = h ? 0 : m * y,
                      i = -g * Math.abs(y),
                      s = c.stretch,
                      n =
                        ("string" == typeof s &&
                          -1 !== s.indexOf("%") &&
                          (s = (parseFloat(c.stretch) / 100) * l),
                        h ? 0 : s * y),
                      r = h ? s * y : 0,
                      a = 1 - (1 - c.scale) * Math.abs(y);
                    Math.abs(r) < 0.001 && (r = 0),
                      Math.abs(n) < 0.001 && (n = 0),
                      Math.abs(i) < 0.001 && (i = 0),
                      Math.abs(e) < 0.001 && (e = 0),
                      Math.abs(t) < 0.001 && (t = 0),
                      Math.abs(a) < 0.001 && (a = 0);
                    var v = `translate3d(${r}px,${n}px,${i}px)  rotateX(${t}deg) rotateY(${e}deg) scale(${a})`;
                    if (
                      ((_(0, b).style.transform = v),
                      (b.style.zIndex = 1 - Math.abs(Math.round(y))),
                      c.slideShadows)
                    ) {
                      let e = h
                          ? b.querySelector(".swiper-slide-shadow-left")
                          : b.querySelector(".swiper-slide-shadow-top"),
                        t = h
                          ? b.querySelector(".swiper-slide-shadow-right")
                          : b.querySelector(".swiper-slide-shadow-bottom");
                      (e = e || x("coverflow", b, h ? "left" : "top")),
                        (t = t || x("coverflow", b, h ? "right" : "bottom")),
                        e && (e.style.opacity = 0 < y ? y : 0),
                        t && (t.style.opacity = 0 < -y ? -y : 0);
                    }
                  }
                },
                setTransition: (t) => {
                  b.slides
                    .map((e) => r(e))
                    .forEach((e) => {
                      (e.style.transitionDuration = t + "ms"),
                        e
                          .querySelectorAll(
                            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                          )
                          .forEach((e) => {
                            e.style.transitionDuration = t + "ms";
                          });
                    });
                },
                perspective: () => !0,
                overwriteParams: () => ({ watchSlidesProgress: !0 }),
              });
          },
          function (e) {
            let { swiper: y, extendParams: t, on: i } = e;
            t({
              creativeEffect: {
                limitProgress: 1,
                shadowPerProgress: !1,
                progressMultiplier: 1,
                perspective: !0,
                prev: {
                  translate: [0, 0, 0],
                  rotate: [0, 0, 0],
                  opacity: 1,
                  scale: 1,
                },
                next: {
                  translate: [0, 0, 0],
                  rotate: [0, 0, 0],
                  opacity: 1,
                  scale: 1,
                },
              },
            });
            p({
              effect: "creative",
              swiper: y,
              on: i,
              setTranslate: () => {
                const { slides: n, wrapperEl: e, slidesSizesGrid: r } = y,
                  a = y.params.creativeEffect,
                  o = a["progressMultiplier"],
                  l = y.params.centeredSlides;
                if (l) {
                  const n = r[0] / 2 - y.params.slidesOffsetBefore || 0;
                  e.style.transform = `translateX(calc(50% - ${n}px))`;
                }
                for (let s = 0; s < n.length; s += 1) {
                  const r = n[s],
                    p = r.progress,
                    f = Math.min(
                      Math.max(r.progress, -a.limitProgress),
                      a.limitProgress
                    );
                  let e = f;
                  l ||
                    (e = Math.min(
                      Math.max(r.originalProgress, -a.limitProgress),
                      a.limitProgress
                    ));
                  const m = r.swiperSlideOffset,
                    g = [y.params.cssMode ? -m - y.translate : -m, 0, 0],
                    v = [0, 0, 0];
                  let t = !1,
                    i =
                      (y.isHorizontal() || ((g[1] = g[0]), (g[0] = 0)),
                      {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        scale: 1,
                        opacity: 1,
                      });
                  f < 0
                    ? ((i = a.next), (t = !0))
                    : 0 < f && ((i = a.prev), (t = !0)),
                    g.forEach((e, t) => {
                      g[t] = `calc(${e}px + (${
                        ((e = i.translate[t]),
                        "string" == typeof e ? e : e + "px")
                      } * ${Math.abs(f * o)}))`;
                    }),
                    v.forEach((e, t) => {
                      v[t] = i.rotate[t] * Math.abs(f * o);
                    }),
                    (r.style.zIndex = -Math.abs(Math.round(p)) + n.length);
                  var d = g.join(", "),
                    u = `rotateX(${v[0]}deg) rotateY(${v[1]}deg) rotateZ(${v[2]}deg)`,
                    c =
                      e < 0
                        ? `scale(${1 + (1 - i.scale) * e * o})`
                        : `scale(${1 - (1 - i.scale) * e * o})`,
                    h =
                      e < 0
                        ? 1 + (1 - i.opacity) * e * o
                        : 1 - (1 - i.opacity) * e * o,
                    d = `translate3d(${d}) ${u} ` + c;
                  if ((t && i.shadow) || !t) {
                    let e = r.querySelector(".swiper-slide-shadow");
                    if ((e = !e && i.shadow ? x("creative", r) : e)) {
                      const y = a.shadowPerProgress
                        ? f * (1 / a.limitProgress)
                        : f;
                      e.style.opacity = Math.min(Math.max(Math.abs(y), 0), 1);
                    }
                  }
                  u = _(0, r);
                  (u.style.transform = d),
                    (u.style.opacity = h),
                    i.origin && (u.style.transformOrigin = i.origin);
                }
              },
              setTransition: (t) => {
                var e = y.slides.map((e) => r(e));
                e.forEach((e) => {
                  (e.style.transitionDuration = t + "ms"),
                    e.querySelectorAll(".swiper-slide-shadow").forEach((e) => {
                      e.style.transitionDuration = t + "ms";
                    });
                }),
                  f({
                    swiper: y,
                    duration: t,
                    transformElements: e,
                    allSlides: !0,
                  });
              },
              perspective: () => y.params.creativeEffect.perspective,
              overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !y.params.cssMode,
              }),
            });
          },
          function (e) {
            let { swiper: w, extendParams: t, on: i } = e;
            t({
              cardsEffect: {
                slideShadows: !0,
                rotate: !0,
                perSlideRotate: 2,
                perSlideOffset: 8,
              },
            }),
              p({
                effect: "cards",
                swiper: w,
                on: i,
                setTranslate: () => {
                  const { slides: o, activeIndex: l, rtlTranslate: d } = w,
                    u = w.params.cardsEffect,
                    { startTranslate: c, isTouched: h } = w.touchEventsData,
                    p = d ? -w.translate : w.translate;
                  for (let a = 0; a < o.length; a += 1) {
                    var f = o[a],
                      m = f.progress,
                      g = Math.min(Math.max(m, -4), 4);
                    let e = f.swiperSlideOffset,
                      t =
                        (w.params.centeredSlides &&
                          !w.params.cssMode &&
                          (w.wrapperEl.style.transform = `translateX(${w.minTranslate()}px)`),
                        w.params.centeredSlides &&
                          w.params.cssMode &&
                          (e -= o[0].swiperSlideOffset),
                        w.params.cssMode ? -e - w.translate : -e),
                      i = 0;
                    var v = -100 * Math.abs(g);
                    let s = 1,
                      n = -u.perSlideRotate * g,
                      r = u.perSlideOffset - 0.75 * Math.abs(g);
                    var y =
                        w.virtual && w.params.virtual.enabled
                          ? w.virtual.from + a
                          : a,
                      b =
                        (y === l || y === l - 1) &&
                        0 < g &&
                        g < 1 &&
                        (h || w.params.cssMode) &&
                        p < c,
                      y =
                        (y === l || y === l + 1) &&
                        g < 0 &&
                        -1 < g &&
                        (h || w.params.cssMode) &&
                        c < p;
                    if (b || y) {
                      const o =
                        (1 - Math.abs((Math.abs(g) - 0.5) / 0.5)) ** 0.5;
                      (n += -28 * g * o),
                        (s += -0.5 * o),
                        (r += 96 * o),
                        (i = -25 * o * Math.abs(g) + "%");
                    }
                    if (
                      ((t =
                        g < 0
                          ? `calc(${t}px ${d ? "-" : "+"} (${
                              r * Math.abs(g)
                            }%))`
                          : 0 < g
                          ? `calc(${t}px ${d ? "-" : "+"} (-${
                              r * Math.abs(g)
                            }%))`
                          : t + "px"),
                      !w.isHorizontal())
                    ) {
                      const o = i;
                      (i = t), (t = o);
                    }
                    (b =
                      g < 0 ? "" + (1 + (1 - s) * g) : "" + (1 - (1 - s) * g)),
                      (y = `
        translate3d(${t}, ${i}, ${v}px)
        rotateZ(${u.rotate ? (d ? -n : n) : 0}deg)
        scale(${b})
      `);
                    if (u.slideShadows) {
                      let e = f.querySelector(".swiper-slide-shadow");
                      (e = e || x("cards", f)) &&
                        (e.style.opacity = Math.min(
                          Math.max((Math.abs(g) - 0.5) / 0.5, 0),
                          1
                        ));
                    }
                    (f.style.zIndex = -Math.abs(Math.round(m)) + o.length),
                      (_(0, f).style.transform = y);
                  }
                },
                setTransition: (t) => {
                  var e = w.slides.map((e) => r(e));
                  e.forEach((e) => {
                    (e.style.transitionDuration = t + "ms"),
                      e
                        .querySelectorAll(".swiper-slide-shadow")
                        .forEach((e) => {
                          e.style.transitionDuration = t + "ms";
                        });
                  }),
                    f({ swiper: w, duration: t, transformElements: e });
                },
                perspective: () => !0,
                overwriteParams: () => ({
                  watchSlidesProgress: !0,
                  virtualTranslate: !w.params.cssMode,
                }),
              });
          },
        ]),
        h
      );
    })()),
  VanillaTilt = (function () {
    "use strict";
    class i {
      constructor(e, t = {}) {
        if (!(e instanceof Node))
          throw "Can't initialize VanillaTilt because " + e + " is not a Node.";
        (this.width = null),
          (this.height = null),
          (this.clientWidth = null),
          (this.clientHeight = null),
          (this.left = null),
          (this.top = null),
          (this.gammazero = null),
          (this.betazero = null),
          (this.lastgammazero = null),
          (this.lastbetazero = null),
          (this.transitionTimeout = null),
          (this.updateCall = null),
          (this.event = null),
          (this.updateBind = this.update.bind(this)),
          (this.resetBind = this.reset.bind(this)),
          (this.element = e),
          (this.settings = this.extendSettings(t)),
          (this.reverse = this.settings.reverse ? -1 : 1),
          (this.resetToStart = i.isSettingTrue(
            this.settings["reset-to-start"]
          )),
          (this.glare = i.isSettingTrue(this.settings.glare)),
          (this.glarePrerender = i.isSettingTrue(
            this.settings["glare-prerender"]
          )),
          (this.fullPageListening = i.isSettingTrue(
            this.settings["full-page-listening"]
          )),
          (this.gyroscope = i.isSettingTrue(this.settings.gyroscope)),
          (this.gyroscopeSamples = this.settings.gyroscopeSamples),
          (this.elementListener = this.getElementListener()),
          this.glare && this.prepareGlare(),
          this.fullPageListening && this.updateClientSize(),
          this.addEventListeners(),
          this.reset(),
          !1 === this.resetToStart &&
            ((this.settings.startX = 0), (this.settings.startY = 0));
      }
      static isSettingTrue(e) {
        return "" === e || !0 === e || 1 === e;
      }
      getElementListener() {
        if (this.fullPageListening) return window.document;
        if ("string" == typeof this.settings["mouse-event-element"]) {
          var e = document.querySelector(this.settings["mouse-event-element"]);
          if (e) return e;
        }
        return this.settings["mouse-event-element"] instanceof Node
          ? this.settings["mouse-event-element"]
          : this.element;
      }
      addEventListeners() {
        (this.onMouseEnterBind = this.onMouseEnter.bind(this)),
          (this.onMouseMoveBind = this.onMouseMove.bind(this)),
          (this.onMouseLeaveBind = this.onMouseLeave.bind(this)),
          (this.onWindowResizeBind = this.onWindowResize.bind(this)),
          (this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this)),
          this.elementListener.addEventListener(
            "mouseenter",
            this.onMouseEnterBind
          ),
          this.elementListener.addEventListener(
            "mouseleave",
            this.onMouseLeaveBind
          ),
          this.elementListener.addEventListener(
            "mousemove",
            this.onMouseMoveBind
          ),
          (this.glare || this.fullPageListening) &&
            window.addEventListener("resize", this.onWindowResizeBind),
          this.gyroscope &&
            window.addEventListener(
              "deviceorientation",
              this.onDeviceOrientationBind
            );
      }
      removeEventListeners() {
        this.elementListener.removeEventListener(
          "mouseenter",
          this.onMouseEnterBind
        ),
          this.elementListener.removeEventListener(
            "mouseleave",
            this.onMouseLeaveBind
          ),
          this.elementListener.removeEventListener(
            "mousemove",
            this.onMouseMoveBind
          ),
          this.gyroscope &&
            window.removeEventListener(
              "deviceorientation",
              this.onDeviceOrientationBind
            ),
          (this.glare || this.fullPageListening) &&
            window.removeEventListener("resize", this.onWindowResizeBind);
      }
      destroy() {
        clearTimeout(this.transitionTimeout),
          null !== this.updateCall && cancelAnimationFrame(this.updateCall),
          (this.element.style.willChange = ""),
          (this.element.style.transition = ""),
          (this.element.style.transform = ""),
          this.resetGlare(),
          this.removeEventListeners(),
          (this.element.vanillaTilt = null),
          delete this.element.vanillaTilt,
          (this.element = null);
      }
      onDeviceOrientation(e) {
        var t, i;
        null !== e.gamma &&
          null !== e.beta &&
          (this.updateElementPosition(),
          0 < this.gyroscopeSamples &&
            ((this.lastgammazero = this.gammazero),
            (this.lastbetazero = this.betazero),
            null === this.gammazero
              ? ((this.gammazero = e.gamma), (this.betazero = e.beta))
              : ((this.gammazero = (e.gamma + this.lastgammazero) / 2),
                (this.betazero = (e.beta + this.lastbetazero) / 2)),
            --this.gyroscopeSamples),
          (i =
            this.settings.gyroscopeMaxAngleX -
            this.settings.gyroscopeMinAngleX),
          (t =
            this.settings.gyroscopeMaxAngleY -
            this.settings.gyroscopeMinAngleY),
          (i = i / this.width),
          (t = t / this.height),
          (i =
            (e.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero)) /
            i),
          (e =
            (e.beta - (this.settings.gyroscopeMinAngleY + this.betazero)) / t),
          null !== this.updateCall && cancelAnimationFrame(this.updateCall),
          (this.event = { clientX: i + this.left, clientY: e + this.top }),
          (this.updateCall = requestAnimationFrame(this.updateBind)));
      }
      onMouseEnter() {
        this.updateElementPosition(),
          (this.element.style.willChange = "transform"),
          this.setTransition();
      }
      onMouseMove(e) {
        null !== this.updateCall && cancelAnimationFrame(this.updateCall),
          (this.event = e),
          (this.updateCall = requestAnimationFrame(this.updateBind));
      }
      onMouseLeave() {
        this.setTransition(),
          this.settings.reset && requestAnimationFrame(this.resetBind);
      }
      reset() {
        this.onMouseEnter(),
          this.fullPageListening
            ? (this.event = {
                clientX:
                  ((this.settings.startX + this.settings.max) /
                    (2 * this.settings.max)) *
                  this.clientWidth,
                clientY:
                  ((this.settings.startY + this.settings.max) /
                    (2 * this.settings.max)) *
                  this.clientHeight,
              })
            : (this.event = {
                clientX:
                  this.left +
                  ((this.settings.startX + this.settings.max) /
                    (2 * this.settings.max)) *
                    this.width,
                clientY:
                  this.top +
                  ((this.settings.startY + this.settings.max) /
                    (2 * this.settings.max)) *
                    this.height,
              });
        var e = this.settings.scale;
        (this.settings.scale = 1),
          this.update(),
          (this.settings.scale = e),
          this.resetGlare();
      }
      resetGlare() {
        this.glare &&
          ((this.glareElement.style.transform =
            "rotate(180deg) translate(-50%, -50%)"),
          (this.glareElement.style.opacity = "0"));
      }
      getValues() {
        let e, t;
        return (
          (t = this.fullPageListening
            ? ((e = this.event.clientX / this.clientWidth),
              this.event.clientY / this.clientHeight)
            : ((e = (this.event.clientX - this.left) / this.width),
              (this.event.clientY - this.top) / this.height)),
          (e = Math.min(Math.max(e, 0), 1)),
          (t = Math.min(Math.max(t, 0), 1)),
          {
            tiltX: (
              this.reverse *
              (this.settings.max - e * this.settings.max * 2)
            ).toFixed(2),
            tiltY: (
              this.reverse *
              (t * this.settings.max * 2 - this.settings.max)
            ).toFixed(2),
            percentageX: 100 * e,
            percentageY: 100 * t,
            angle:
              Math.atan2(
                this.event.clientX - (this.left + this.width / 2),
                -(this.event.clientY - (this.top + this.height / 2))
              ) *
              (180 / Math.PI),
          }
        );
      }
      updateElementPosition() {
        var e = this.element.getBoundingClientRect();
        (this.width = this.element.offsetWidth),
          (this.height = this.element.offsetHeight),
          (this.left = e.left),
          (this.top = e.top);
      }
      update() {
        var e = this.getValues();
        (this.element.style.transform =
          "perspective(" +
          this.settings.perspective +
          "px) rotateX(" +
          ("x" === this.settings.axis ? 0 : e.tiltY) +
          "deg) rotateY(" +
          ("y" === this.settings.axis ? 0 : e.tiltX) +
          "deg) scale3d(" +
          this.settings.scale +
          ", " +
          this.settings.scale +
          ", " +
          this.settings.scale +
          ")"),
          this.glare &&
            ((this.glareElement.style.transform = `rotate(${e.angle}deg) translate(-50%, -50%)`),
            (this.glareElement.style.opacity =
              "" + (e.percentageY * this.settings["max-glare"]) / 100)),
          this.element.dispatchEvent(
            new CustomEvent("tiltChange", { detail: e })
          ),
          (this.updateCall = null);
      }
      prepareGlare() {
        var e, t;
        this.glarePrerender ||
          ((e = document.createElement("div")).classList.add("js-tilt-glare"),
          (t = document.createElement("div")).classList.add(
            "js-tilt-glare-inner"
          ),
          e.appendChild(t),
          this.element.appendChild(e)),
          (this.glareElementWrapper =
            this.element.querySelector(".js-tilt-glare")),
          (this.glareElement = this.element.querySelector(
            ".js-tilt-glare-inner"
          )),
          this.glarePrerender ||
            (Object.assign(this.glareElementWrapper.style, {
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              overflow: "hidden",
              "pointer-events": "none",
              "border-radius": "inherit",
            }),
            Object.assign(this.glareElement.style, {
              position: "absolute",
              top: "50%",
              left: "50%",
              "pointer-events": "none",
              "background-image":
                "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
              transform: "rotate(180deg) translate(-50%, -50%)",
              "transform-origin": "0% 0%",
              opacity: "0",
            }),
            this.updateGlareSize());
      }
      updateGlareSize() {
        var e;
        this.glare &&
          ((e =
            2 *
            (this.element.offsetWidth > this.element.offsetHeight
              ? this.element.offsetWidth
              : this.element.offsetHeight)),
          Object.assign(this.glareElement.style, {
            width: e + "px",
            height: e + "px",
          }));
      }
      updateClientSize() {
        (this.clientWidth =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth),
          (this.clientHeight =
            window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight);
      }
      onWindowResize() {
        this.updateGlareSize(), this.updateClientSize();
      }
      setTransition() {
        clearTimeout(this.transitionTimeout),
          (this.element.style.transition =
            this.settings.speed + "ms " + this.settings.easing),
          this.glare &&
            (this.glareElement.style.transition =
              `opacity ${this.settings.speed}ms ` + this.settings.easing),
          (this.transitionTimeout = setTimeout(() => {
            (this.element.style.transition = ""),
              this.glare && (this.glareElement.style.transition = "");
          }, this.settings.speed));
      }
      extendSettings(e) {
        var t,
          i = {
            reverse: !1,
            max: 15,
            startX: 0,
            startY: 0,
            perspective: 1e3,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            scale: 1,
            speed: 300,
            transition: !0,
            axis: null,
            glare: !1,
            "max-glare": 1,
            "glare-prerender": !1,
            "full-page-listening": !1,
            "mouse-event-element": null,
            reset: !0,
            "reset-to-start": !0,
            gyroscope: !0,
            gyroscopeMinAngleX: -45,
            gyroscopeMaxAngleX: 45,
            gyroscopeMinAngleY: -45,
            gyroscopeMaxAngleY: 45,
            gyroscopeSamples: 10,
          },
          s = {};
        for (t in i)
          if (t in e) s[t] = e[t];
          else if (this.element.hasAttribute("data-tilt-" + t)) {
            var n = this.element.getAttribute("data-tilt-" + t);
            try {
              s[t] = JSON.parse(n);
            } catch (i) {
              s[t] = n;
            }
          } else s[t] = i[t];
        return s;
      }
      static init(e, t) {
        (e =
          (e = e instanceof Node ? [e] : e) instanceof NodeList
            ? [].slice.call(e)
            : e) instanceof Array &&
          e.forEach((e) => {
            "vanillaTilt" in e || (e.vanillaTilt = new i(e, t));
          });
      }
    }
    return (
      "undefined" != typeof document &&
        (window.VanillaTilt = i).init(document.querySelectorAll("[data-tilt]")),
      i
    );
  })();

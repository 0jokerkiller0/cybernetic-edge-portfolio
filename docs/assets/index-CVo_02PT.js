function mg(n, o) {
  for (var i = 0; i < o.length; i++) {
    const a = o[i];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const c in a)
        if (c !== "default" && !(c in n)) {
          const d = Object.getOwnPropertyDescriptor(a, c);
          d &&
            Object.defineProperty(
              n,
              c,
              d.get ? d : { enumerable: !0, get: () => a[c] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(n, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) a(c);
  new MutationObserver((c) => {
    for (const d of c)
      if (d.type === "childList")
        for (const f of d.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && a(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(c) {
    const d = {};
    return (
      c.integrity && (d.integrity = c.integrity),
      c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (d.credentials = "omit")
        : (d.credentials = "same-origin"),
      d
    );
  }
  function a(c) {
    if (c.ep) return;
    c.ep = !0;
    const d = i(c);
    fetch(c.href, d);
  }
})();
function Lf(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var ga = { exports: {} },
  Mo = {},
  va = { exports: {} },
  we = {};
var $d;
function gg() {
  if ($d) return we;
  $d = 1;
  var n = Symbol.for("react.element"),
    o = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    a = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    d = Symbol.for("react.provider"),
    f = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    x = Symbol.for("react.lazy"),
    w = Symbol.iterator;
  function T(N) {
    return N === null || typeof N != "object"
      ? null
      : ((N = (w && N[w]) || N["@@iterator"]),
        typeof N == "function" ? N : null);
  }
  var y = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    j = Object.assign,
    C = {};
  function k(N, M, G) {
    (this.props = N),
      (this.context = M),
      (this.refs = C),
      (this.updater = G || y);
  }
  (k.prototype.isReactComponent = {}),
    (k.prototype.setState = function (N, M) {
      if (typeof N != "object" && typeof N != "function" && N != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, N, M, "setState");
    }),
    (k.prototype.forceUpdate = function (N) {
      this.updater.enqueueForceUpdate(this, N, "forceUpdate");
    });
  function A() {}
  A.prototype = k.prototype;
  function L(N, M, G) {
    (this.props = N),
      (this.context = M),
      (this.refs = C),
      (this.updater = G || y);
  }
  var D = (L.prototype = new A());
  (D.constructor = L), j(D, k.prototype), (D.isPureReactComponent = !0);
  var F = Array.isArray,
    H = Object.prototype.hasOwnProperty,
    K = { current: null },
    Y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ce(N, M, G) {
    var J,
      ue = {},
      ve = null,
      ie = null;
    if (M != null)
      for (J in (M.ref !== void 0 && (ie = M.ref),
      M.key !== void 0 && (ve = "" + M.key),
      M))
        H.call(M, J) && !Y.hasOwnProperty(J) && (ue[J] = M[J]);
    var Se = arguments.length - 2;
    if (Se === 1) ue.children = G;
    else if (1 < Se) {
      for (var ke = Array(Se), Fe = 0; Fe < Se; Fe++)
        ke[Fe] = arguments[Fe + 2];
      ue.children = ke;
    }
    if (N && N.defaultProps)
      for (J in ((Se = N.defaultProps), Se))
        ue[J] === void 0 && (ue[J] = Se[J]);
    return {
      $$typeof: n,
      type: N,
      key: ve,
      ref: ie,
      props: ue,
      _owner: K.current,
    };
  }
  function ge(N, M) {
    return {
      $$typeof: n,
      type: N.type,
      key: M,
      ref: N.ref,
      props: N.props,
      _owner: N._owner,
    };
  }
  function pe(N) {
    return typeof N == "object" && N !== null && N.$$typeof === n;
  }
  function xe(N) {
    var M = { "=": "=0", ":": "=2" };
    return (
      "$" +
      N.replace(/[=:]/g, function (G) {
        return M[G];
      })
    );
  }
  var Z = /\/+/g;
  function he(N, M) {
    return typeof N == "object" && N !== null && N.key != null
      ? xe("" + N.key)
      : M.toString(36);
  }
  function q(N, M, G, J, ue) {
    var ve = typeof N;
    (ve === "undefined" || ve === "boolean") && (N = null);
    var ie = !1;
    if (N === null) ie = !0;
    else
      switch (ve) {
        case "string":
        case "number":
          ie = !0;
          break;
        case "object":
          switch (N.$$typeof) {
            case n:
            case o:
              ie = !0;
          }
      }
    if (ie)
      return (
        (ie = N),
        (ue = ue(ie)),
        (N = J === "" ? "." + he(ie, 0) : J),
        F(ue)
          ? ((G = ""),
            N != null && (G = N.replace(Z, "$&/") + "/"),
            q(ue, M, G, "", function (Fe) {
              return Fe;
            }))
          : ue != null &&
            (pe(ue) &&
              (ue = ge(
                ue,
                G +
                  (!ue.key || (ie && ie.key === ue.key)
                    ? ""
                    : ("" + ue.key).replace(Z, "$&/") + "/") +
                  N
              )),
            M.push(ue)),
        1
      );
    if (((ie = 0), (J = J === "" ? "." : J + ":"), F(N)))
      for (var Se = 0; Se < N.length; Se++) {
        ve = N[Se];
        var ke = J + he(ve, Se);
        ie += q(ve, M, G, ke, ue);
      }
    else if (((ke = T(N)), typeof ke == "function"))
      for (N = ke.call(N), Se = 0; !(ve = N.next()).done; )
        (ve = ve.value), (ke = J + he(ve, Se++)), (ie += q(ve, M, G, ke, ue));
    else if (ve === "object")
      throw (
        ((M = String(N)),
        Error(
          "Objects are not valid as a React child (found: " +
            (M === "[object Object]"
              ? "object with keys {" + Object.keys(N).join(", ") + "}"
              : M) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return ie;
  }
  function me(N, M, G) {
    if (N == null) return N;
    var J = [],
      ue = 0;
    return (
      q(N, J, "", "", function (ve) {
        return M.call(G, ve, ue++);
      }),
      J
    );
  }
  function se(N) {
    if (N._status === -1) {
      var M = N._result;
      (M = M()),
        M.then(
          function (G) {
            (N._status === 0 || N._status === -1) &&
              ((N._status = 1), (N._result = G));
          },
          function (G) {
            (N._status === 0 || N._status === -1) &&
              ((N._status = 2), (N._result = G));
          }
        ),
        N._status === -1 && ((N._status = 0), (N._result = M));
    }
    if (N._status === 1) return N._result.default;
    throw N._result;
  }
  var re = { current: null },
    I = { transition: null },
    z = {
      ReactCurrentDispatcher: re,
      ReactCurrentBatchConfig: I,
      ReactCurrentOwner: K,
    };
  function V() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (we.Children = {
      map: me,
      forEach: function (N, M, G) {
        me(
          N,
          function () {
            M.apply(this, arguments);
          },
          G
        );
      },
      count: function (N) {
        var M = 0;
        return (
          me(N, function () {
            M++;
          }),
          M
        );
      },
      toArray: function (N) {
        return (
          me(N, function (M) {
            return M;
          }) || []
        );
      },
      only: function (N) {
        if (!pe(N))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return N;
      },
    }),
    (we.Component = k),
    (we.Fragment = i),
    (we.Profiler = c),
    (we.PureComponent = L),
    (we.StrictMode = a),
    (we.Suspense = m),
    (we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z),
    (we.act = V),
    (we.cloneElement = function (N, M, G) {
      if (N == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            N +
            "."
        );
      var J = j({}, N.props),
        ue = N.key,
        ve = N.ref,
        ie = N._owner;
      if (M != null) {
        if (
          (M.ref !== void 0 && ((ve = M.ref), (ie = K.current)),
          M.key !== void 0 && (ue = "" + M.key),
          N.type && N.type.defaultProps)
        )
          var Se = N.type.defaultProps;
        for (ke in M)
          H.call(M, ke) &&
            !Y.hasOwnProperty(ke) &&
            (J[ke] = M[ke] === void 0 && Se !== void 0 ? Se[ke] : M[ke]);
      }
      var ke = arguments.length - 2;
      if (ke === 1) J.children = G;
      else if (1 < ke) {
        Se = Array(ke);
        for (var Fe = 0; Fe < ke; Fe++) Se[Fe] = arguments[Fe + 2];
        J.children = Se;
      }
      return {
        $$typeof: n,
        type: N.type,
        key: ue,
        ref: ve,
        props: J,
        _owner: ie,
      };
    }),
    (we.createContext = function (N) {
      return (
        (N = {
          $$typeof: f,
          _currentValue: N,
          _currentValue2: N,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (N.Provider = { $$typeof: d, _context: N }),
        (N.Consumer = N)
      );
    }),
    (we.createElement = ce),
    (we.createFactory = function (N) {
      var M = ce.bind(null, N);
      return (M.type = N), M;
    }),
    (we.createRef = function () {
      return { current: null };
    }),
    (we.forwardRef = function (N) {
      return { $$typeof: h, render: N };
    }),
    (we.isValidElement = pe),
    (we.lazy = function (N) {
      return { $$typeof: x, _payload: { _status: -1, _result: N }, _init: se };
    }),
    (we.memo = function (N, M) {
      return { $$typeof: g, type: N, compare: M === void 0 ? null : M };
    }),
    (we.startTransition = function (N) {
      var M = I.transition;
      I.transition = {};
      try {
        N();
      } finally {
        I.transition = M;
      }
    }),
    (we.unstable_act = V),
    (we.useCallback = function (N, M) {
      return re.current.useCallback(N, M);
    }),
    (we.useContext = function (N) {
      return re.current.useContext(N);
    }),
    (we.useDebugValue = function () {}),
    (we.useDeferredValue = function (N) {
      return re.current.useDeferredValue(N);
    }),
    (we.useEffect = function (N, M) {
      return re.current.useEffect(N, M);
    }),
    (we.useId = function () {
      return re.current.useId();
    }),
    (we.useImperativeHandle = function (N, M, G) {
      return re.current.useImperativeHandle(N, M, G);
    }),
    (we.useInsertionEffect = function (N, M) {
      return re.current.useInsertionEffect(N, M);
    }),
    (we.useLayoutEffect = function (N, M) {
      return re.current.useLayoutEffect(N, M);
    }),
    (we.useMemo = function (N, M) {
      return re.current.useMemo(N, M);
    }),
    (we.useReducer = function (N, M, G) {
      return re.current.useReducer(N, M, G);
    }),
    (we.useRef = function (N) {
      return re.current.useRef(N);
    }),
    (we.useState = function (N) {
      return re.current.useState(N);
    }),
    (we.useSyncExternalStore = function (N, M, G) {
      return re.current.useSyncExternalStore(N, M, G);
    }),
    (we.useTransition = function () {
      return re.current.useTransition();
    }),
    (we.version = "18.3.1"),
    we
  );
}
var Ud;
function Va() {
  return Ud || ((Ud = 1), (va.exports = gg())), va.exports;
}
var Vd;
function vg() {
  if (Vd) return Mo;
  Vd = 1;
  var n = Va(),
    o = Symbol.for("react.element"),
    i = Symbol.for("react.fragment"),
    a = Object.prototype.hasOwnProperty,
    c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(h, m, g) {
    var x,
      w = {},
      T = null,
      y = null;
    g !== void 0 && (T = "" + g),
      m.key !== void 0 && (T = "" + m.key),
      m.ref !== void 0 && (y = m.ref);
    for (x in m) a.call(m, x) && !d.hasOwnProperty(x) && (w[x] = m[x]);
    if (h && h.defaultProps)
      for (x in ((m = h.defaultProps), m)) w[x] === void 0 && (w[x] = m[x]);
    return {
      $$typeof: o,
      type: h,
      key: T,
      ref: y,
      props: w,
      _owner: c.current,
    };
  }
  return (Mo.Fragment = i), (Mo.jsx = f), (Mo.jsxs = f), Mo;
}
var Hd;
function yg() {
  return Hd || ((Hd = 1), (ga.exports = vg())), ga.exports;
}
var v = yg(),
  si = {},
  ya = { exports: {} },
  ft = {},
  xa = { exports: {} },
  wa = {};
var Wd;
function xg() {
  return (
    Wd ||
      ((Wd = 1),
      (function (n) {
        function o(I, z) {
          var V = I.length;
          I.push(z);
          e: for (; 0 < V; ) {
            var N = (V - 1) >>> 1,
              M = I[N];
            if (0 < c(M, z)) (I[N] = z), (I[V] = M), (V = N);
            else break e;
          }
        }
        function i(I) {
          return I.length === 0 ? null : I[0];
        }
        function a(I) {
          if (I.length === 0) return null;
          var z = I[0],
            V = I.pop();
          if (V !== z) {
            I[0] = V;
            e: for (var N = 0, M = I.length, G = M >>> 1; N < G; ) {
              var J = 2 * (N + 1) - 1,
                ue = I[J],
                ve = J + 1,
                ie = I[ve];
              if (0 > c(ue, V))
                ve < M && 0 > c(ie, ue)
                  ? ((I[N] = ie), (I[ve] = V), (N = ve))
                  : ((I[N] = ue), (I[J] = V), (N = J));
              else if (ve < M && 0 > c(ie, V))
                (I[N] = ie), (I[ve] = V), (N = ve);
              else break e;
            }
          }
          return z;
        }
        function c(I, z) {
          var V = I.sortIndex - z.sortIndex;
          return V !== 0 ? V : I.id - z.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var d = performance;
          n.unstable_now = function () {
            return d.now();
          };
        } else {
          var f = Date,
            h = f.now();
          n.unstable_now = function () {
            return f.now() - h;
          };
        }
        var m = [],
          g = [],
          x = 1,
          w = null,
          T = 3,
          y = !1,
          j = !1,
          C = !1,
          k = typeof setTimeout == "function" ? setTimeout : null,
          A = typeof clearTimeout == "function" ? clearTimeout : null,
          L = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function D(I) {
          for (var z = i(g); z !== null; ) {
            if (z.callback === null) a(g);
            else if (z.startTime <= I)
              a(g), (z.sortIndex = z.expirationTime), o(m, z);
            else break;
            z = i(g);
          }
        }
        function F(I) {
          if (((C = !1), D(I), !j))
            if (i(m) !== null) (j = !0), se(H);
            else {
              var z = i(g);
              z !== null && re(F, z.startTime - I);
            }
        }
        function H(I, z) {
          (j = !1), C && ((C = !1), A(ce), (ce = -1)), (y = !0);
          var V = T;
          try {
            for (
              D(z), w = i(m);
              w !== null && (!(w.expirationTime > z) || (I && !xe()));

            ) {
              var N = w.callback;
              if (typeof N == "function") {
                (w.callback = null), (T = w.priorityLevel);
                var M = N(w.expirationTime <= z);
                (z = n.unstable_now()),
                  typeof M == "function"
                    ? (w.callback = M)
                    : w === i(m) && a(m),
                  D(z);
              } else a(m);
              w = i(m);
            }
            if (w !== null) var G = !0;
            else {
              var J = i(g);
              J !== null && re(F, J.startTime - z), (G = !1);
            }
            return G;
          } finally {
            (w = null), (T = V), (y = !1);
          }
        }
        var K = !1,
          Y = null,
          ce = -1,
          ge = 5,
          pe = -1;
        function xe() {
          return !(n.unstable_now() - pe < ge);
        }
        function Z() {
          if (Y !== null) {
            var I = n.unstable_now();
            pe = I;
            var z = !0;
            try {
              z = Y(!0, I);
            } finally {
              z ? he() : ((K = !1), (Y = null));
            }
          } else K = !1;
        }
        var he;
        if (typeof L == "function")
          he = function () {
            L(Z);
          };
        else if (typeof MessageChannel < "u") {
          var q = new MessageChannel(),
            me = q.port2;
          (q.port1.onmessage = Z),
            (he = function () {
              me.postMessage(null);
            });
        } else
          he = function () {
            k(Z, 0);
          };
        function se(I) {
          (Y = I), K || ((K = !0), he());
        }
        function re(I, z) {
          ce = k(function () {
            I(n.unstable_now());
          }, z);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (I) {
            I.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            j || y || ((j = !0), se(H));
          }),
          (n.unstable_forceFrameRate = function (I) {
            0 > I || 125 < I
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (ge = 0 < I ? Math.floor(1e3 / I) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return T;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return i(m);
          }),
          (n.unstable_next = function (I) {
            switch (T) {
              case 1:
              case 2:
              case 3:
                var z = 3;
                break;
              default:
                z = T;
            }
            var V = T;
            T = z;
            try {
              return I();
            } finally {
              T = V;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (I, z) {
            switch (I) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                I = 3;
            }
            var V = T;
            T = I;
            try {
              return z();
            } finally {
              T = V;
            }
          }),
          (n.unstable_scheduleCallback = function (I, z, V) {
            var N = n.unstable_now();
            switch (
              (typeof V == "object" && V !== null
                ? ((V = V.delay),
                  (V = typeof V == "number" && 0 < V ? N + V : N))
                : (V = N),
              I)
            ) {
              case 1:
                var M = -1;
                break;
              case 2:
                M = 250;
                break;
              case 5:
                M = 1073741823;
                break;
              case 4:
                M = 1e4;
                break;
              default:
                M = 5e3;
            }
            return (
              (M = V + M),
              (I = {
                id: x++,
                callback: z,
                priorityLevel: I,
                startTime: V,
                expirationTime: M,
                sortIndex: -1,
              }),
              V > N
                ? ((I.sortIndex = V),
                  o(g, I),
                  i(m) === null &&
                    I === i(g) &&
                    (C ? (A(ce), (ce = -1)) : (C = !0), re(F, V - N)))
                : ((I.sortIndex = M), o(m, I), j || y || ((j = !0), se(H))),
              I
            );
          }),
          (n.unstable_shouldYield = xe),
          (n.unstable_wrapCallback = function (I) {
            var z = T;
            return function () {
              var V = T;
              T = z;
              try {
                return I.apply(this, arguments);
              } finally {
                T = V;
              }
            };
          });
      })(wa)),
    wa
  );
}
var Qd;
function wg() {
  return Qd || ((Qd = 1), (xa.exports = xg())), xa.exports;
}
var Kd;
function Sg() {
  if (Kd) return ft;
  Kd = 1;
  var n = Va(),
    o = wg();
  function i(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        r = 1;
      r < arguments.length;
      r++
    )
      t += "&args[]=" + encodeURIComponent(arguments[r]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var a = new Set(),
    c = {};
  function d(e, t) {
    f(e, t), f(e + "Capture", t);
  }
  function f(e, t) {
    for (c[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
  }
  var h = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    m = Object.prototype.hasOwnProperty,
    g =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    x = {},
    w = {};
  function T(e) {
    return m.call(w, e)
      ? !0
      : m.call(x, e)
      ? !1
      : g.test(e)
      ? (w[e] = !0)
      : ((x[e] = !0), !1);
  }
  function y(e, t, r, s) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s
          ? !1
          : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function j(e, t, r, s) {
    if (t === null || typeof t > "u" || y(e, t, r, s)) return !0;
    if (s) return !1;
    if (r !== null)
      switch (r.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function C(e, t, r, s, l, u, p) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = s),
      (this.attributeNamespace = l),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = u),
      (this.removeEmptyString = p);
  }
  var k = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      k[e] = new C(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      k[t] = new C(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      k[e] = new C(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      k[e] = new C(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        k[e] = new C(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      k[e] = new C(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      k[e] = new C(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      k[e] = new C(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      k[e] = new C(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var A = /[\-:]([a-z])/g;
  function L(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(A, L);
      k[t] = new C(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(A, L);
        k[t] = new C(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(A, L);
      k[t] = new C(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      k[e] = new C(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (k.xlinkHref = new C(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      k[e] = new C(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function D(e, t, r, s) {
    var l = k.hasOwnProperty(t) ? k[t] : null;
    (l !== null
      ? l.type !== 0
      : s ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (j(t, r, l, s) && (r = null),
      s || l === null
        ? T(t) &&
          (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
        : l.mustUseProperty
        ? (e[l.propertyName] = r === null ? (l.type === 3 ? !1 : "") : r)
        : ((t = l.attributeName),
          (s = l.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (r = l === 3 || (l === 4 && r === !0) ? "" : "" + r),
              s ? e.setAttributeNS(s, t, r) : e.setAttribute(t, r))));
  }
  var F = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    H = Symbol.for("react.element"),
    K = Symbol.for("react.portal"),
    Y = Symbol.for("react.fragment"),
    ce = Symbol.for("react.strict_mode"),
    ge = Symbol.for("react.profiler"),
    pe = Symbol.for("react.provider"),
    xe = Symbol.for("react.context"),
    Z = Symbol.for("react.forward_ref"),
    he = Symbol.for("react.suspense"),
    q = Symbol.for("react.suspense_list"),
    me = Symbol.for("react.memo"),
    se = Symbol.for("react.lazy"),
    re = Symbol.for("react.offscreen"),
    I = Symbol.iterator;
  function z(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (I && e[I]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var V = Object.assign,
    N;
  function M(e) {
    if (N === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        N = (t && t[1]) || "";
      }
    return (
      `
` +
      N +
      e
    );
  }
  var G = !1;
  function J(e, t) {
    if (!e || G) return "";
    G = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (_) {
            var s = _;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (_) {
            s = _;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (_) {
          s = _;
        }
        e();
      }
    } catch (_) {
      if (_ && s && typeof _.stack == "string") {
        for (
          var l = _.stack.split(`
`),
            u = s.stack.split(`
`),
            p = l.length - 1,
            S = u.length - 1;
          1 <= p && 0 <= S && l[p] !== u[S];

        )
          S--;
        for (; 1 <= p && 0 <= S; p--, S--)
          if (l[p] !== u[S]) {
            if (p !== 1 || S !== 1)
              do
                if ((p--, S--, 0 > S || l[p] !== u[S])) {
                  var b =
                    `
` + l[p].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      b.includes("<anonymous>") &&
                      (b = b.replace("<anonymous>", e.displayName)),
                    b
                  );
                }
              while (1 <= p && 0 <= S);
            break;
          }
      }
    } finally {
      (G = !1), (Error.prepareStackTrace = r);
    }
    return (e = e ? e.displayName || e.name : "") ? M(e) : "";
  }
  function ue(e) {
    switch (e.tag) {
      case 5:
        return M(e.type);
      case 16:
        return M("Lazy");
      case 13:
        return M("Suspense");
      case 19:
        return M("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = J(e.type, !1)), e;
      case 11:
        return (e = J(e.type.render, !1)), e;
      case 1:
        return (e = J(e.type, !0)), e;
      default:
        return "";
    }
  }
  function ve(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Y:
        return "Fragment";
      case K:
        return "Portal";
      case ge:
        return "Profiler";
      case ce:
        return "StrictMode";
      case he:
        return "Suspense";
      case q:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case xe:
          return (e.displayName || "Context") + ".Consumer";
        case pe:
          return (e._context.displayName || "Context") + ".Provider";
        case Z:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case me:
          return (
            (t = e.displayName || null), t !== null ? t : ve(e.type) || "Memo"
          );
        case se:
          (t = e._payload), (e = e._init);
          try {
            return ve(e(t));
          } catch {}
      }
    return null;
  }
  function ie(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ve(t);
      case 8:
        return t === ce ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Se(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ke(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Fe(e) {
    var t = ke(e) ? "checked" : "value",
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      s = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < "u" &&
      typeof r.get == "function" &&
      typeof r.set == "function"
    ) {
      var l = r.get,
        u = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (p) {
            (s = "" + p), u.call(this, p);
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return s;
          },
          setValue: function (p) {
            s = "" + p;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Et(e) {
    e._valueTracker || (e._valueTracker = Fe(e));
  }
  function xn(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      s = "";
    return (
      e && (s = ke(e) ? (e.checked ? "true" : "false") : e.value),
      (e = s),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function kt(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Kr(e, t) {
    var r = t.checked;
    return V({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function Wo(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue,
      s = t.checked != null ? t.checked : t.defaultChecked;
    (r = Se(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: s,
        initialValue: r,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function qr(e, t) {
    (t = t.checked), t != null && D(e, "checked", t, !1);
  }
  function Yr(e, t) {
    qr(e, t);
    var r = Se(t.value),
      s = t.type;
    if (r != null)
      s === "number"
        ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
        : e.value !== "" + r && (e.value = "" + r);
    else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Gr(e, t.type, r)
      : t.hasOwnProperty("defaultValue") && Gr(e, t.type, Se(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function cr(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (
        !(
          (s !== "submit" && s !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (r = e.name),
      r !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      r !== "" && (e.name = r);
  }
  function Gr(e, t, r) {
    (t !== "number" || kt(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var wn = Array.isArray;
  function Ct(e, t, r, s) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < r.length; l++) t["$" + r[l]] = !0;
      for (r = 0; r < e.length; r++)
        (l = t.hasOwnProperty("$" + e[r].value)),
          e[r].selected !== l && (e[r].selected = l),
          l && s && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + Se(r), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === r) {
          (e[l].selected = !0), s && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function dr(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return V({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Wt(e, t) {
    var r = t.value;
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(i(92));
        if (wn(r)) {
          if (1 < r.length) throw Error(i(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ""), (r = t);
    }
    e._wrapperState = { initialValue: Se(r) };
  }
  function Qo(e, t) {
    var r = Se(t.value),
      s = Se(t.defaultValue);
    r != null &&
      ((r = "" + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      s != null && (e.defaultValue = "" + s);
  }
  function Ko(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function et(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Qt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? et(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var fr,
    qo = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, r, s, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, r, s, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          fr = fr || document.createElement("div"),
            fr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = fr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Kt(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Yn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Yo = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Yn).forEach(function (e) {
    Yo.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Yn[t] = Yn[e]);
    });
  });
  function pr(e, t, r) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : r || typeof t != "number" || t === 0 || (Yn.hasOwnProperty(e) && Yn[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function ln(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var s = r.indexOf("--") === 0,
          l = pr(r, t[r], s);
        r === "float" && (r = "cssFloat"), s ? e.setProperty(r, l) : (e[r] = l);
      }
  }
  var Go = V(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function qt(e, t) {
    if (t) {
      if (Go[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(i(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(i(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(i(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(i(62));
    }
  }
  function Xr(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Zr = null;
  function hr(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var mr = null,
    Sn = null,
    Yt = null;
  function Ot(e) {
    if ((e = xo(e))) {
      if (typeof mr != "function") throw Error(i(280));
      var t = e.stateNode;
      t && ((t = ws(t)), mr(e.stateNode, e.type, t));
    }
  }
  function Xo(e) {
    Sn ? (Yt ? Yt.push(e) : (Yt = [e])) : (Sn = e);
  }
  function fe() {
    if (Sn) {
      var e = Sn,
        t = Yt;
      if (((Yt = Sn = null), Ot(e), t)) for (e = 0; e < t.length; e++) Ot(t[e]);
    }
  }
  function be(e, t) {
    return e(t);
  }
  function Ne() {}
  var tt = !1;
  function st(e, t, r) {
    if (tt) return e(t, r);
    tt = !0;
    try {
      return be(e, t, r);
    } finally {
      (tt = !1), (Sn !== null || Yt !== null) && (Ne(), fe());
    }
  }
  function it(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var s = ws(r);
    if (s === null) return null;
    r = s[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (s = !s.disabled) ||
          ((e = e.type),
          (s = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !s);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(i(231, t, typeof r));
    return r;
  }
  var _t = !1;
  if (h)
    try {
      var Ke = {};
      Object.defineProperty(Ke, "passive", {
        get: function () {
          _t = !0;
        },
      }),
        window.addEventListener("test", Ke, Ke),
        window.removeEventListener("test", Ke, Ke);
    } catch {
      _t = !1;
    }
  function Gt(e, t, r, s, l, u, p, S, b) {
    var _ = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, _);
    } catch ($) {
      this.onError($);
    }
  }
  var Jr = !1,
    Zo = null,
    Jo = !1,
    Li = null,
    Eh = {
      onError: function (e) {
        (Jr = !0), (Zo = e);
      },
    };
  function kh(e, t, r, s, l, u, p, S, b) {
    (Jr = !1), (Zo = null), Gt.apply(Eh, arguments);
  }
  function Ch(e, t, r, s, l, u, p, S, b) {
    if ((kh.apply(this, arguments), Jr)) {
      if (Jr) {
        var _ = Zo;
        (Jr = !1), (Zo = null);
      } else throw Error(i(198));
      Jo || ((Jo = !0), (Li = _));
    }
  }
  function Gn(e) {
    var t = e,
      r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (r = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function cu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function du(e) {
    if (Gn(e) !== e) throw Error(i(188));
  }
  function bh(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Gn(e)), t === null)) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var r = e, s = t; ; ) {
      var l = r.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (((s = l.return), s !== null)) {
          r = s;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === r) return du(l), e;
          if (u === s) return du(l), t;
          u = u.sibling;
        }
        throw Error(i(188));
      }
      if (r.return !== s.return) (r = l), (s = u);
      else {
        for (var p = !1, S = l.child; S; ) {
          if (S === r) {
            (p = !0), (r = l), (s = u);
            break;
          }
          if (S === s) {
            (p = !0), (s = l), (r = u);
            break;
          }
          S = S.sibling;
        }
        if (!p) {
          for (S = u.child; S; ) {
            if (S === r) {
              (p = !0), (r = u), (s = l);
              break;
            }
            if (S === s) {
              (p = !0), (s = u), (r = l);
              break;
            }
            S = S.sibling;
          }
          if (!p) throw Error(i(189));
        }
      }
      if (r.alternate !== s) throw Error(i(190));
    }
    if (r.tag !== 3) throw Error(i(188));
    return r.stateNode.current === r ? e : t;
  }
  function fu(e) {
    return (e = bh(e)), e !== null ? pu(e) : null;
  }
  function pu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = pu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var hu = o.unstable_scheduleCallback,
    mu = o.unstable_cancelCallback,
    Ph = o.unstable_shouldYield,
    Nh = o.unstable_requestPaint,
    De = o.unstable_now,
    Th = o.unstable_getCurrentPriorityLevel,
    Ii = o.unstable_ImmediatePriority,
    gu = o.unstable_UserBlockingPriority,
    es = o.unstable_NormalPriority,
    Rh = o.unstable_LowPriority,
    vu = o.unstable_IdlePriority,
    ts = null,
    Xt = null;
  function jh(e) {
    if (Xt && typeof Xt.onCommitFiberRoot == "function")
      try {
        Xt.onCommitFiberRoot(ts, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var At = Math.clz32 ? Math.clz32 : Ah,
    Oh = Math.log,
    _h = Math.LN2;
  function Ah(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Oh(e) / _h) | 0)) | 0;
  }
  var ns = 64,
    rs = 4194304;
  function eo(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function os(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var s = 0,
      l = e.suspendedLanes,
      u = e.pingedLanes,
      p = r & 268435455;
    if (p !== 0) {
      var S = p & ~l;
      S !== 0 ? (s = eo(S)) : ((u &= p), u !== 0 && (s = eo(u)));
    } else (p = r & ~l), p !== 0 ? (s = eo(p)) : u !== 0 && (s = eo(u));
    if (s === 0) return 0;
    if (
      t !== 0 &&
      t !== s &&
      (t & l) === 0 &&
      ((l = s & -s), (u = t & -t), l >= u || (l === 16 && (u & 4194240) !== 0))
    )
      return t;
    if (((s & 4) !== 0 && (s |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= s; 0 < t; )
        (r = 31 - At(t)), (l = 1 << r), (s |= e[r]), (t &= ~l);
    return s;
  }
  function Mh(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Lh(e, t) {
    for (
      var r = e.suspendedLanes,
        s = e.pingedLanes,
        l = e.expirationTimes,
        u = e.pendingLanes;
      0 < u;

    ) {
      var p = 31 - At(u),
        S = 1 << p,
        b = l[p];
      b === -1
        ? ((S & r) === 0 || (S & s) !== 0) && (l[p] = Mh(S, t))
        : b <= t && (e.expiredLanes |= S),
        (u &= ~S);
    }
  }
  function Di(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function yu() {
    var e = ns;
    return (ns <<= 1), (ns & 4194240) === 0 && (ns = 64), e;
  }
  function zi(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function to(e, t, r) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - At(t)),
      (e[t] = r);
  }
  function Ih(e, t) {
    var r = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var s = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var l = 31 - At(r),
        u = 1 << l;
      (t[l] = 0), (s[l] = -1), (e[l] = -1), (r &= ~u);
    }
  }
  function Fi(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var s = 31 - At(r),
        l = 1 << s;
      (l & t) | (e[s] & t) && (e[s] |= t), (r &= ~l);
    }
  }
  var Pe = 0;
  function xu(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var wu,
    Bi,
    Su,
    Eu,
    ku,
    $i = !1,
    ss = [],
    En = null,
    kn = null,
    Cn = null,
    no = new Map(),
    ro = new Map(),
    bn = [],
    Dh =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Cu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        En = null;
        break;
      case "dragenter":
      case "dragleave":
        kn = null;
        break;
      case "mouseover":
      case "mouseout":
        Cn = null;
        break;
      case "pointerover":
      case "pointerout":
        no.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ro.delete(t.pointerId);
    }
  }
  function oo(e, t, r, s, l, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: s,
          nativeEvent: u,
          targetContainers: [l],
        }),
        t !== null && ((t = xo(t)), t !== null && Bi(t)),
        e)
      : ((e.eventSystemFlags |= s),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function zh(e, t, r, s, l) {
    switch (t) {
      case "focusin":
        return (En = oo(En, e, t, r, s, l)), !0;
      case "dragenter":
        return (kn = oo(kn, e, t, r, s, l)), !0;
      case "mouseover":
        return (Cn = oo(Cn, e, t, r, s, l)), !0;
      case "pointerover":
        var u = l.pointerId;
        return no.set(u, oo(no.get(u) || null, e, t, r, s, l)), !0;
      case "gotpointercapture":
        return (
          (u = l.pointerId), ro.set(u, oo(ro.get(u) || null, e, t, r, s, l)), !0
        );
    }
    return !1;
  }
  function bu(e) {
    var t = Xn(e.target);
    if (t !== null) {
      var r = Gn(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = cu(r)), t !== null)) {
            (e.blockedOn = t),
              ku(e.priority, function () {
                Su(r);
              });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function is(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = Vi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var s = new r.constructor(r.type, r);
        (Zr = s), r.target.dispatchEvent(s), (Zr = null);
      } else return (t = xo(r)), t !== null && Bi(t), (e.blockedOn = r), !1;
      t.shift();
    }
    return !0;
  }
  function Pu(e, t, r) {
    is(e) && r.delete(t);
  }
  function Fh() {
    ($i = !1),
      En !== null && is(En) && (En = null),
      kn !== null && is(kn) && (kn = null),
      Cn !== null && is(Cn) && (Cn = null),
      no.forEach(Pu),
      ro.forEach(Pu);
  }
  function so(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      $i ||
        (($i = !0),
        o.unstable_scheduleCallback(o.unstable_NormalPriority, Fh)));
  }
  function io(e) {
    function t(l) {
      return so(l, e);
    }
    if (0 < ss.length) {
      so(ss[0], e);
      for (var r = 1; r < ss.length; r++) {
        var s = ss[r];
        s.blockedOn === e && (s.blockedOn = null);
      }
    }
    for (
      En !== null && so(En, e),
        kn !== null && so(kn, e),
        Cn !== null && so(Cn, e),
        no.forEach(t),
        ro.forEach(t),
        r = 0;
      r < bn.length;
      r++
    )
      (s = bn[r]), s.blockedOn === e && (s.blockedOn = null);
    for (; 0 < bn.length && ((r = bn[0]), r.blockedOn === null); )
      bu(r), r.blockedOn === null && bn.shift();
  }
  var gr = F.ReactCurrentBatchConfig,
    ls = !0;
  function Bh(e, t, r, s) {
    var l = Pe,
      u = gr.transition;
    gr.transition = null;
    try {
      (Pe = 1), Ui(e, t, r, s);
    } finally {
      (Pe = l), (gr.transition = u);
    }
  }
  function $h(e, t, r, s) {
    var l = Pe,
      u = gr.transition;
    gr.transition = null;
    try {
      (Pe = 4), Ui(e, t, r, s);
    } finally {
      (Pe = l), (gr.transition = u);
    }
  }
  function Ui(e, t, r, s) {
    if (ls) {
      var l = Vi(e, t, r, s);
      if (l === null) il(e, t, s, as, r), Cu(e, s);
      else if (zh(l, e, t, r, s)) s.stopPropagation();
      else if ((Cu(e, s), t & 4 && -1 < Dh.indexOf(e))) {
        for (; l !== null; ) {
          var u = xo(l);
          if (
            (u !== null && wu(u),
            (u = Vi(e, t, r, s)),
            u === null && il(e, t, s, as, r),
            u === l)
          )
            break;
          l = u;
        }
        l !== null && s.stopPropagation();
      } else il(e, t, s, null, r);
    }
  }
  var as = null;
  function Vi(e, t, r, s) {
    if (((as = null), (e = hr(s)), (e = Xn(e)), e !== null))
      if (((t = Gn(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = cu(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (as = e), null;
  }
  function Nu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Th()) {
          case Ii:
            return 1;
          case gu:
            return 4;
          case es:
          case Rh:
            return 16;
          case vu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Pn = null,
    Hi = null,
    us = null;
  function Tu() {
    if (us) return us;
    var e,
      t = Hi,
      r = t.length,
      s,
      l = "value" in Pn ? Pn.value : Pn.textContent,
      u = l.length;
    for (e = 0; e < r && t[e] === l[e]; e++);
    var p = r - e;
    for (s = 1; s <= p && t[r - s] === l[u - s]; s++);
    return (us = l.slice(e, 1 < s ? 1 - s : void 0));
  }
  function cs(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function ds() {
    return !0;
  }
  function Ru() {
    return !1;
  }
  function gt(e) {
    function t(r, s, l, u, p) {
      (this._reactName = r),
        (this._targetInst = l),
        (this.type = s),
        (this.nativeEvent = u),
        (this.target = p),
        (this.currentTarget = null);
      for (var S in e)
        e.hasOwnProperty(S) && ((r = e[S]), (this[S] = r ? r(u) : u[S]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? ds
          : Ru),
        (this.isPropagationStopped = Ru),
        this
      );
    }
    return (
      V(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            (this.isDefaultPrevented = ds));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            (this.isPropagationStopped = ds));
        },
        persist: function () {},
        isPersistent: ds,
      }),
      t
    );
  }
  var vr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Wi = gt(vr),
    lo = V({}, vr, { view: 0, detail: 0 }),
    Uh = gt(lo),
    Qi,
    Ki,
    ao,
    fs = V({}, lo, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Yi,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== ao &&
              (ao && e.type === "mousemove"
                ? ((Qi = e.screenX - ao.screenX), (Ki = e.screenY - ao.screenY))
                : (Ki = Qi = 0),
              (ao = e)),
            Qi);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Ki;
      },
    }),
    ju = gt(fs),
    Vh = V({}, fs, { dataTransfer: 0 }),
    Hh = gt(Vh),
    Wh = V({}, lo, { relatedTarget: 0 }),
    qi = gt(Wh),
    Qh = V({}, vr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Kh = gt(Qh),
    qh = V({}, vr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Yh = gt(qh),
    Gh = V({}, vr, { data: 0 }),
    Ou = gt(Gh),
    Xh = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Zh = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Jh = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function em(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Jh[e])
      ? !!t[e]
      : !1;
  }
  function Yi() {
    return em;
  }
  var tm = V({}, lo, {
      key: function (e) {
        if (e.key) {
          var t = Xh[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = cs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Zh[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Yi,
      charCode: function (e) {
        return e.type === "keypress" ? cs(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? cs(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    nm = gt(tm),
    rm = V({}, fs, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    _u = gt(rm),
    om = V({}, lo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Yi,
    }),
    sm = gt(om),
    im = V({}, vr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    lm = gt(im),
    am = V({}, fs, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    um = gt(am),
    cm = [9, 13, 27, 32],
    Gi = h && "CompositionEvent" in window,
    uo = null;
  h && "documentMode" in document && (uo = document.documentMode);
  var dm = h && "TextEvent" in window && !uo,
    Au = h && (!Gi || (uo && 8 < uo && 11 >= uo)),
    Mu = " ",
    Lu = !1;
  function Iu(e, t) {
    switch (e) {
      case "keyup":
        return cm.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Du(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var yr = !1;
  function fm(e, t) {
    switch (e) {
      case "compositionend":
        return Du(t);
      case "keypress":
        return t.which !== 32 ? null : ((Lu = !0), Mu);
      case "textInput":
        return (e = t.data), e === Mu && Lu ? null : e;
      default:
        return null;
    }
  }
  function pm(e, t) {
    if (yr)
      return e === "compositionend" || (!Gi && Iu(e, t))
        ? ((e = Tu()), (us = Hi = Pn = null), (yr = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Au && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var hm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function zu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!hm[e.type] : t === "textarea";
  }
  function Fu(e, t, r, s) {
    Xo(s),
      (t = vs(t, "onChange")),
      0 < t.length &&
        ((r = new Wi("onChange", "change", null, r, s)),
        e.push({ event: r, listeners: t }));
  }
  var co = null,
    fo = null;
  function mm(e) {
    rc(e, 0);
  }
  function ps(e) {
    var t = kr(e);
    if (xn(t)) return e;
  }
  function gm(e, t) {
    if (e === "change") return t;
  }
  var Bu = !1;
  if (h) {
    var Xi;
    if (h) {
      var Zi = "oninput" in document;
      if (!Zi) {
        var $u = document.createElement("div");
        $u.setAttribute("oninput", "return;"),
          (Zi = typeof $u.oninput == "function");
      }
      Xi = Zi;
    } else Xi = !1;
    Bu = Xi && (!document.documentMode || 9 < document.documentMode);
  }
  function Uu() {
    co && (co.detachEvent("onpropertychange", Vu), (fo = co = null));
  }
  function Vu(e) {
    if (e.propertyName === "value" && ps(fo)) {
      var t = [];
      Fu(t, fo, e, hr(e)), st(mm, t);
    }
  }
  function vm(e, t, r) {
    e === "focusin"
      ? (Uu(), (co = t), (fo = r), co.attachEvent("onpropertychange", Vu))
      : e === "focusout" && Uu();
  }
  function ym(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ps(fo);
  }
  function xm(e, t) {
    if (e === "click") return ps(t);
  }
  function wm(e, t) {
    if (e === "input" || e === "change") return ps(t);
  }
  function Sm(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Mt = typeof Object.is == "function" ? Object.is : Sm;
  function po(e, t) {
    if (Mt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var r = Object.keys(e),
      s = Object.keys(t);
    if (r.length !== s.length) return !1;
    for (s = 0; s < r.length; s++) {
      var l = r[s];
      if (!m.call(t, l) || !Mt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Hu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Wu(e, t) {
    var r = Hu(e);
    e = 0;
    for (var s; r; ) {
      if (r.nodeType === 3) {
        if (((s = e + r.textContent.length), e <= t && s >= t))
          return { node: r, offset: t - e };
        e = s;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = Hu(r);
    }
  }
  function Qu(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Qu(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Ku() {
    for (var e = window, t = kt(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = kt(e.document);
    }
    return t;
  }
  function Ji(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Em(e) {
    var t = Ku(),
      r = e.focusedElem,
      s = e.selectionRange;
    if (
      t !== r &&
      r &&
      r.ownerDocument &&
      Qu(r.ownerDocument.documentElement, r)
    ) {
      if (s !== null && Ji(r)) {
        if (
          ((t = s.start),
          (e = s.end),
          e === void 0 && (e = t),
          "selectionStart" in r)
        )
          (r.selectionStart = t),
            (r.selectionEnd = Math.min(e, r.value.length));
        else if (
          ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = r.textContent.length,
            u = Math.min(s.start, l);
          (s = s.end === void 0 ? u : Math.min(s.end, l)),
            !e.extend && u > s && ((l = s), (s = u), (u = l)),
            (l = Wu(r, u));
          var p = Wu(r, s);
          l &&
            p &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== p.node ||
              e.focusOffset !== p.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            u > s
              ? (e.addRange(t), e.extend(p.node, p.offset))
              : (t.setEnd(p.node, p.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
        (e = t[r]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var km = h && "documentMode" in document && 11 >= document.documentMode,
    xr = null,
    el = null,
    ho = null,
    tl = !1;
  function qu(e, t, r) {
    var s =
      r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    tl ||
      xr == null ||
      xr !== kt(s) ||
      ((s = xr),
      "selectionStart" in s && Ji(s)
        ? (s = { start: s.selectionStart, end: s.selectionEnd })
        : ((s = (
            (s.ownerDocument && s.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (s = {
            anchorNode: s.anchorNode,
            anchorOffset: s.anchorOffset,
            focusNode: s.focusNode,
            focusOffset: s.focusOffset,
          })),
      (ho && po(ho, s)) ||
        ((ho = s),
        (s = vs(el, "onSelect")),
        0 < s.length &&
          ((t = new Wi("onSelect", "select", null, t, r)),
          e.push({ event: t, listeners: s }),
          (t.target = xr))));
  }
  function hs(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r["Webkit" + e] = "webkit" + t),
      (r["Moz" + e] = "moz" + t),
      r
    );
  }
  var wr = {
      animationend: hs("Animation", "AnimationEnd"),
      animationiteration: hs("Animation", "AnimationIteration"),
      animationstart: hs("Animation", "AnimationStart"),
      transitionend: hs("Transition", "TransitionEnd"),
    },
    nl = {},
    Yu = {};
  h &&
    ((Yu = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete wr.animationend.animation,
      delete wr.animationiteration.animation,
      delete wr.animationstart.animation),
    "TransitionEvent" in window || delete wr.transitionend.transition);
  function ms(e) {
    if (nl[e]) return nl[e];
    if (!wr[e]) return e;
    var t = wr[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in Yu) return (nl[e] = t[r]);
    return e;
  }
  var Gu = ms("animationend"),
    Xu = ms("animationiteration"),
    Zu = ms("animationstart"),
    Ju = ms("transitionend"),
    ec = new Map(),
    tc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Nn(e, t) {
    ec.set(e, t), d(t, [e]);
  }
  for (var rl = 0; rl < tc.length; rl++) {
    var ol = tc[rl],
      Cm = ol.toLowerCase(),
      bm = ol[0].toUpperCase() + ol.slice(1);
    Nn(Cm, "on" + bm);
  }
  Nn(Gu, "onAnimationEnd"),
    Nn(Xu, "onAnimationIteration"),
    Nn(Zu, "onAnimationStart"),
    Nn("dblclick", "onDoubleClick"),
    Nn("focusin", "onFocus"),
    Nn("focusout", "onBlur"),
    Nn(Ju, "onTransitionEnd"),
    f("onMouseEnter", ["mouseout", "mouseover"]),
    f("onMouseLeave", ["mouseout", "mouseover"]),
    f("onPointerEnter", ["pointerout", "pointerover"]),
    f("onPointerLeave", ["pointerout", "pointerover"]),
    d(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    d(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    d("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    d(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    d(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    d(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var mo =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Pm = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(mo)
    );
  function nc(e, t, r) {
    var s = e.type || "unknown-event";
    (e.currentTarget = r), Ch(s, t, void 0, e), (e.currentTarget = null);
  }
  function rc(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var s = e[r],
        l = s.event;
      s = s.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var p = s.length - 1; 0 <= p; p--) {
            var S = s[p],
              b = S.instance,
              _ = S.currentTarget;
            if (((S = S.listener), b !== u && l.isPropagationStopped()))
              break e;
            nc(l, S, _), (u = b);
          }
        else
          for (p = 0; p < s.length; p++) {
            if (
              ((S = s[p]),
              (b = S.instance),
              (_ = S.currentTarget),
              (S = S.listener),
              b !== u && l.isPropagationStopped())
            )
              break e;
            nc(l, S, _), (u = b);
          }
      }
    }
    if (Jo) throw ((e = Li), (Jo = !1), (Li = null), e);
  }
  function Re(e, t) {
    var r = t[fl];
    r === void 0 && (r = t[fl] = new Set());
    var s = e + "__bubble";
    r.has(s) || (oc(t, e, 2, !1), r.add(s));
  }
  function sl(e, t, r) {
    var s = 0;
    t && (s |= 4), oc(r, e, s, t);
  }
  var gs = "_reactListening" + Math.random().toString(36).slice(2);
  function go(e) {
    if (!e[gs]) {
      (e[gs] = !0),
        a.forEach(function (r) {
          r !== "selectionchange" && (Pm.has(r) || sl(r, !1, e), sl(r, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[gs] || ((t[gs] = !0), sl("selectionchange", !1, t));
    }
  }
  function oc(e, t, r, s) {
    switch (Nu(t)) {
      case 1:
        var l = Bh;
        break;
      case 4:
        l = $h;
        break;
      default:
        l = Ui;
    }
    (r = l.bind(null, t, r, e)),
      (l = void 0),
      !_t ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      s
        ? l !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: l })
          : e.addEventListener(t, r, !0)
        : l !== void 0
        ? e.addEventListener(t, r, { passive: l })
        : e.addEventListener(t, r, !1);
  }
  function il(e, t, r, s, l) {
    var u = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null)
      e: for (;;) {
        if (s === null) return;
        var p = s.tag;
        if (p === 3 || p === 4) {
          var S = s.stateNode.containerInfo;
          if (S === l || (S.nodeType === 8 && S.parentNode === l)) break;
          if (p === 4)
            for (p = s.return; p !== null; ) {
              var b = p.tag;
              if (
                (b === 3 || b === 4) &&
                ((b = p.stateNode.containerInfo),
                b === l || (b.nodeType === 8 && b.parentNode === l))
              )
                return;
              p = p.return;
            }
          for (; S !== null; ) {
            if (((p = Xn(S)), p === null)) return;
            if (((b = p.tag), b === 5 || b === 6)) {
              s = u = p;
              continue e;
            }
            S = S.parentNode;
          }
        }
        s = s.return;
      }
    st(function () {
      var _ = u,
        $ = hr(r),
        U = [];
      e: {
        var B = ec.get(e);
        if (B !== void 0) {
          var X = Wi,
            te = e;
          switch (e) {
            case "keypress":
              if (cs(r) === 0) break e;
            case "keydown":
            case "keyup":
              X = nm;
              break;
            case "focusin":
              (te = "focus"), (X = qi);
              break;
            case "focusout":
              (te = "blur"), (X = qi);
              break;
            case "beforeblur":
            case "afterblur":
              X = qi;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              X = ju;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              X = Hh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              X = sm;
              break;
            case Gu:
            case Xu:
            case Zu:
              X = Kh;
              break;
            case Ju:
              X = lm;
              break;
            case "scroll":
              X = Uh;
              break;
            case "wheel":
              X = um;
              break;
            case "copy":
            case "cut":
            case "paste":
              X = Yh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              X = _u;
          }
          var ne = (t & 4) !== 0,
            ze = !ne && e === "scroll",
            R = ne ? (B !== null ? B + "Capture" : null) : B;
          ne = [];
          for (var P = _, O; P !== null; ) {
            O = P;
            var W = O.stateNode;
            if (
              (O.tag === 5 &&
                W !== null &&
                ((O = W),
                R !== null &&
                  ((W = it(P, R)), W != null && ne.push(vo(P, W, O)))),
              ze)
            )
              break;
            P = P.return;
          }
          0 < ne.length &&
            ((B = new X(B, te, null, r, $)),
            U.push({ event: B, listeners: ne }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((B = e === "mouseover" || e === "pointerover"),
            (X = e === "mouseout" || e === "pointerout"),
            B &&
              r !== Zr &&
              (te = r.relatedTarget || r.fromElement) &&
              (Xn(te) || te[an]))
          )
            break e;
          if (
            (X || B) &&
            ((B =
              $.window === $
                ? $
                : (B = $.ownerDocument)
                ? B.defaultView || B.parentWindow
                : window),
            X
              ? ((te = r.relatedTarget || r.toElement),
                (X = _),
                (te = te ? Xn(te) : null),
                te !== null &&
                  ((ze = Gn(te)),
                  te !== ze || (te.tag !== 5 && te.tag !== 6)) &&
                  (te = null))
              : ((X = null), (te = _)),
            X !== te)
          ) {
            if (
              ((ne = ju),
              (W = "onMouseLeave"),
              (R = "onMouseEnter"),
              (P = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ne = _u),
                (W = "onPointerLeave"),
                (R = "onPointerEnter"),
                (P = "pointer")),
              (ze = X == null ? B : kr(X)),
              (O = te == null ? B : kr(te)),
              (B = new ne(W, P + "leave", X, r, $)),
              (B.target = ze),
              (B.relatedTarget = O),
              (W = null),
              Xn($) === _ &&
                ((ne = new ne(R, P + "enter", te, r, $)),
                (ne.target = O),
                (ne.relatedTarget = ze),
                (W = ne)),
              (ze = W),
              X && te)
            )
              t: {
                for (ne = X, R = te, P = 0, O = ne; O; O = Sr(O)) P++;
                for (O = 0, W = R; W; W = Sr(W)) O++;
                for (; 0 < P - O; ) (ne = Sr(ne)), P--;
                for (; 0 < O - P; ) (R = Sr(R)), O--;
                for (; P--; ) {
                  if (ne === R || (R !== null && ne === R.alternate)) break t;
                  (ne = Sr(ne)), (R = Sr(R));
                }
                ne = null;
              }
            else ne = null;
            X !== null && sc(U, B, X, ne, !1),
              te !== null && ze !== null && sc(U, ze, te, ne, !0);
          }
        }
        e: {
          if (
            ((B = _ ? kr(_) : window),
            (X = B.nodeName && B.nodeName.toLowerCase()),
            X === "select" || (X === "input" && B.type === "file"))
          )
            var oe = gm;
          else if (zu(B))
            if (Bu) oe = wm;
            else {
              oe = ym;
              var le = vm;
            }
          else
            (X = B.nodeName) &&
              X.toLowerCase() === "input" &&
              (B.type === "checkbox" || B.type === "radio") &&
              (oe = xm);
          if (oe && (oe = oe(e, _))) {
            Fu(U, oe, r, $);
            break e;
          }
          le && le(e, B, _),
            e === "focusout" &&
              (le = B._wrapperState) &&
              le.controlled &&
              B.type === "number" &&
              Gr(B, "number", B.value);
        }
        switch (((le = _ ? kr(_) : window), e)) {
          case "focusin":
            (zu(le) || le.contentEditable === "true") &&
              ((xr = le), (el = _), (ho = null));
            break;
          case "focusout":
            ho = el = xr = null;
            break;
          case "mousedown":
            tl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (tl = !1), qu(U, r, $);
            break;
          case "selectionchange":
            if (km) break;
          case "keydown":
          case "keyup":
            qu(U, r, $);
        }
        var ae;
        if (Gi)
          e: {
            switch (e) {
              case "compositionstart":
                var de = "onCompositionStart";
                break e;
              case "compositionend":
                de = "onCompositionEnd";
                break e;
              case "compositionupdate":
                de = "onCompositionUpdate";
                break e;
            }
            de = void 0;
          }
        else
          yr
            ? Iu(e, r) && (de = "onCompositionEnd")
            : e === "keydown" &&
              r.keyCode === 229 &&
              (de = "onCompositionStart");
        de &&
          (Au &&
            r.locale !== "ko" &&
            (yr || de !== "onCompositionStart"
              ? de === "onCompositionEnd" && yr && (ae = Tu())
              : ((Pn = $),
                (Hi = "value" in Pn ? Pn.value : Pn.textContent),
                (yr = !0))),
          (le = vs(_, de)),
          0 < le.length &&
            ((de = new Ou(de, e, null, r, $)),
            U.push({ event: de, listeners: le }),
            ae
              ? (de.data = ae)
              : ((ae = Du(r)), ae !== null && (de.data = ae)))),
          (ae = dm ? fm(e, r) : pm(e, r)) &&
            ((_ = vs(_, "onBeforeInput")),
            0 < _.length &&
              (($ = new Ou("onBeforeInput", "beforeinput", null, r, $)),
              U.push({ event: $, listeners: _ }),
              ($.data = ae)));
      }
      rc(U, t);
    });
  }
  function vo(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function vs(e, t) {
    for (var r = t + "Capture", s = []; e !== null; ) {
      var l = e,
        u = l.stateNode;
      l.tag === 5 &&
        u !== null &&
        ((l = u),
        (u = it(e, r)),
        u != null && s.unshift(vo(e, u, l)),
        (u = it(e, t)),
        u != null && s.push(vo(e, u, l))),
        (e = e.return);
    }
    return s;
  }
  function Sr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function sc(e, t, r, s, l) {
    for (var u = t._reactName, p = []; r !== null && r !== s; ) {
      var S = r,
        b = S.alternate,
        _ = S.stateNode;
      if (b !== null && b === s) break;
      S.tag === 5 &&
        _ !== null &&
        ((S = _),
        l
          ? ((b = it(r, u)), b != null && p.unshift(vo(r, b, S)))
          : l || ((b = it(r, u)), b != null && p.push(vo(r, b, S)))),
        (r = r.return);
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var Nm = /\r\n?/g,
    Tm = /\u0000|\uFFFD/g;
  function ic(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Nm,
        `
`
      )
      .replace(Tm, "");
  }
  function ys(e, t, r) {
    if (((t = ic(t)), ic(e) !== t && r)) throw Error(i(425));
  }
  function xs() {}
  var ll = null,
    al = null;
  function ul(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var cl = typeof setTimeout == "function" ? setTimeout : void 0,
    Rm = typeof clearTimeout == "function" ? clearTimeout : void 0,
    lc = typeof Promise == "function" ? Promise : void 0,
    jm =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof lc < "u"
        ? function (e) {
            return lc.resolve(null).then(e).catch(Om);
          }
        : cl;
  function Om(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function dl(e, t) {
    var r = t,
      s = 0;
    do {
      var l = r.nextSibling;
      if ((e.removeChild(r), l && l.nodeType === 8))
        if (((r = l.data), r === "/$")) {
          if (s === 0) {
            e.removeChild(l), io(t);
            return;
          }
          s--;
        } else (r !== "$" && r !== "$?" && r !== "$!") || s++;
      r = l;
    } while (r);
    io(t);
  }
  function Tn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function ac(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (t === 0) return e;
          t--;
        } else r === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Er = Math.random().toString(36).slice(2),
    Zt = "__reactFiber$" + Er,
    yo = "__reactProps$" + Er,
    an = "__reactContainer$" + Er,
    fl = "__reactEvents$" + Er,
    _m = "__reactListeners$" + Er,
    Am = "__reactHandles$" + Er;
  function Xn(e) {
    var t = e[Zt];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[an] || r[Zt])) {
        if (
          ((r = t.alternate),
          t.child !== null || (r !== null && r.child !== null))
        )
          for (e = ac(e); e !== null; ) {
            if ((r = e[Zt])) return r;
            e = ac(e);
          }
        return t;
      }
      (e = r), (r = e.parentNode);
    }
    return null;
  }
  function xo(e) {
    return (
      (e = e[Zt] || e[an]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function kr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function ws(e) {
    return e[yo] || null;
  }
  var pl = [],
    Cr = -1;
  function Rn(e) {
    return { current: e };
  }
  function je(e) {
    0 > Cr || ((e.current = pl[Cr]), (pl[Cr] = null), Cr--);
  }
  function Te(e, t) {
    Cr++, (pl[Cr] = e.current), (e.current = t);
  }
  var jn = {},
    Ge = Rn(jn),
    lt = Rn(!1),
    Zn = jn;
  function br(e, t) {
    var r = e.type.contextTypes;
    if (!r) return jn;
    var s = e.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t)
      return s.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      u;
    for (u in r) l[u] = t[u];
    return (
      s &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function at(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Ss() {
    je(lt), je(Ge);
  }
  function uc(e, t, r) {
    if (Ge.current !== jn) throw Error(i(168));
    Te(Ge, t), Te(lt, r);
  }
  function cc(e, t, r) {
    var s = e.stateNode;
    if (((t = t.childContextTypes), typeof s.getChildContext != "function"))
      return r;
    s = s.getChildContext();
    for (var l in s) if (!(l in t)) throw Error(i(108, ie(e) || "Unknown", l));
    return V({}, r, s);
  }
  function Es(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        jn),
      (Zn = Ge.current),
      Te(Ge, e),
      Te(lt, lt.current),
      !0
    );
  }
  function dc(e, t, r) {
    var s = e.stateNode;
    if (!s) throw Error(i(169));
    r
      ? ((e = cc(e, t, Zn)),
        (s.__reactInternalMemoizedMergedChildContext = e),
        je(lt),
        je(Ge),
        Te(Ge, e))
      : je(lt),
      Te(lt, r);
  }
  var un = null,
    ks = !1,
    hl = !1;
  function fc(e) {
    un === null ? (un = [e]) : un.push(e);
  }
  function Mm(e) {
    (ks = !0), fc(e);
  }
  function On() {
    if (!hl && un !== null) {
      hl = !0;
      var e = 0,
        t = Pe;
      try {
        var r = un;
        for (Pe = 1; e < r.length; e++) {
          var s = r[e];
          do s = s(!0);
          while (s !== null);
        }
        (un = null), (ks = !1);
      } catch (l) {
        throw (un !== null && (un = un.slice(e + 1)), hu(Ii, On), l);
      } finally {
        (Pe = t), (hl = !1);
      }
    }
    return null;
  }
  var Pr = [],
    Nr = 0,
    Cs = null,
    bs = 0,
    bt = [],
    Pt = 0,
    Jn = null,
    cn = 1,
    dn = "";
  function er(e, t) {
    (Pr[Nr++] = bs), (Pr[Nr++] = Cs), (Cs = e), (bs = t);
  }
  function pc(e, t, r) {
    (bt[Pt++] = cn), (bt[Pt++] = dn), (bt[Pt++] = Jn), (Jn = e);
    var s = cn;
    e = dn;
    var l = 32 - At(s) - 1;
    (s &= ~(1 << l)), (r += 1);
    var u = 32 - At(t) + l;
    if (30 < u) {
      var p = l - (l % 5);
      (u = (s & ((1 << p) - 1)).toString(32)),
        (s >>= p),
        (l -= p),
        (cn = (1 << (32 - At(t) + l)) | (r << l) | s),
        (dn = u + e);
    } else (cn = (1 << u) | (r << l) | s), (dn = e);
  }
  function ml(e) {
    e.return !== null && (er(e, 1), pc(e, 1, 0));
  }
  function gl(e) {
    for (; e === Cs; )
      (Cs = Pr[--Nr]), (Pr[Nr] = null), (bs = Pr[--Nr]), (Pr[Nr] = null);
    for (; e === Jn; )
      (Jn = bt[--Pt]),
        (bt[Pt] = null),
        (dn = bt[--Pt]),
        (bt[Pt] = null),
        (cn = bt[--Pt]),
        (bt[Pt] = null);
  }
  var vt = null,
    yt = null,
    _e = !1,
    Lt = null;
  function hc(e, t) {
    var r = jt(5, null, null, 0);
    (r.elementType = "DELETED"),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
  }
  function mc(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t =
            t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (vt = e), (yt = Tn(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (vt = e), (yt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = Jn !== null ? { id: cn, overflow: dn } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: r,
                retryLane: 1073741824,
              }),
              (r = jt(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (vt = e),
              (yt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function vl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function yl(e) {
    if (_e) {
      var t = yt;
      if (t) {
        var r = t;
        if (!mc(e, t)) {
          if (vl(e)) throw Error(i(418));
          t = Tn(r.nextSibling);
          var s = vt;
          t && mc(e, t)
            ? hc(s, r)
            : ((e.flags = (e.flags & -4097) | 2), (_e = !1), (vt = e));
        }
      } else {
        if (vl(e)) throw Error(i(418));
        (e.flags = (e.flags & -4097) | 2), (_e = !1), (vt = e);
      }
    }
  }
  function gc(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    vt = e;
  }
  function Ps(e) {
    if (e !== vt) return !1;
    if (!_e) return gc(e), (_e = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !ul(e.type, e.memoizedProps))),
      t && (t = yt))
    ) {
      if (vl(e)) throw (vc(), Error(i(418)));
      for (; t; ) hc(e, t), (t = Tn(t.nextSibling));
    }
    if ((gc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                yt = Tn(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        yt = null;
      }
    } else yt = vt ? Tn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function vc() {
    for (var e = yt; e; ) e = Tn(e.nextSibling);
  }
  function Tr() {
    (yt = vt = null), (_e = !1);
  }
  function xl(e) {
    Lt === null ? (Lt = [e]) : Lt.push(e);
  }
  var Lm = F.ReactCurrentBatchConfig;
  function wo(e, t, r) {
    if (
      ((e = r.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(i(309));
          var s = r.stateNode;
        }
        if (!s) throw Error(i(147, e));
        var l = s,
          u = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === u
          ? t.ref
          : ((t = function (p) {
              var S = l.refs;
              p === null ? delete S[u] : (S[u] = p);
            }),
            (t._stringRef = u),
            t);
      }
      if (typeof e != "string") throw Error(i(284));
      if (!r._owner) throw Error(i(290, e));
    }
    return e;
  }
  function Ns(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        i(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function yc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function xc(e) {
    function t(R, P) {
      if (e) {
        var O = R.deletions;
        O === null ? ((R.deletions = [P]), (R.flags |= 16)) : O.push(P);
      }
    }
    function r(R, P) {
      if (!e) return null;
      for (; P !== null; ) t(R, P), (P = P.sibling);
      return null;
    }
    function s(R, P) {
      for (R = new Map(); P !== null; )
        P.key !== null ? R.set(P.key, P) : R.set(P.index, P), (P = P.sibling);
      return R;
    }
    function l(R, P) {
      return (R = Fn(R, P)), (R.index = 0), (R.sibling = null), R;
    }
    function u(R, P, O) {
      return (
        (R.index = O),
        e
          ? ((O = R.alternate),
            O !== null
              ? ((O = O.index), O < P ? ((R.flags |= 2), P) : O)
              : ((R.flags |= 2), P))
          : ((R.flags |= 1048576), P)
      );
    }
    function p(R) {
      return e && R.alternate === null && (R.flags |= 2), R;
    }
    function S(R, P, O, W) {
      return P === null || P.tag !== 6
        ? ((P = ca(O, R.mode, W)), (P.return = R), P)
        : ((P = l(P, O)), (P.return = R), P);
    }
    function b(R, P, O, W) {
      var oe = O.type;
      return oe === Y
        ? $(R, P, O.props.children, W, O.key)
        : P !== null &&
          (P.elementType === oe ||
            (typeof oe == "object" &&
              oe !== null &&
              oe.$$typeof === se &&
              yc(oe) === P.type))
        ? ((W = l(P, O.props)), (W.ref = wo(R, P, O)), (W.return = R), W)
        : ((W = Xs(O.type, O.key, O.props, null, R.mode, W)),
          (W.ref = wo(R, P, O)),
          (W.return = R),
          W);
    }
    function _(R, P, O, W) {
      return P === null ||
        P.tag !== 4 ||
        P.stateNode.containerInfo !== O.containerInfo ||
        P.stateNode.implementation !== O.implementation
        ? ((P = da(O, R.mode, W)), (P.return = R), P)
        : ((P = l(P, O.children || [])), (P.return = R), P);
    }
    function $(R, P, O, W, oe) {
      return P === null || P.tag !== 7
        ? ((P = ar(O, R.mode, W, oe)), (P.return = R), P)
        : ((P = l(P, O)), (P.return = R), P);
    }
    function U(R, P, O) {
      if ((typeof P == "string" && P !== "") || typeof P == "number")
        return (P = ca("" + P, R.mode, O)), (P.return = R), P;
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case H:
            return (
              (O = Xs(P.type, P.key, P.props, null, R.mode, O)),
              (O.ref = wo(R, null, P)),
              (O.return = R),
              O
            );
          case K:
            return (P = da(P, R.mode, O)), (P.return = R), P;
          case se:
            var W = P._init;
            return U(R, W(P._payload), O);
        }
        if (wn(P) || z(P))
          return (P = ar(P, R.mode, O, null)), (P.return = R), P;
        Ns(R, P);
      }
      return null;
    }
    function B(R, P, O, W) {
      var oe = P !== null ? P.key : null;
      if ((typeof O == "string" && O !== "") || typeof O == "number")
        return oe !== null ? null : S(R, P, "" + O, W);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case H:
            return O.key === oe ? b(R, P, O, W) : null;
          case K:
            return O.key === oe ? _(R, P, O, W) : null;
          case se:
            return (oe = O._init), B(R, P, oe(O._payload), W);
        }
        if (wn(O) || z(O)) return oe !== null ? null : $(R, P, O, W, null);
        Ns(R, O);
      }
      return null;
    }
    function X(R, P, O, W, oe) {
      if ((typeof W == "string" && W !== "") || typeof W == "number")
        return (R = R.get(O) || null), S(P, R, "" + W, oe);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case H:
            return (
              (R = R.get(W.key === null ? O : W.key) || null), b(P, R, W, oe)
            );
          case K:
            return (
              (R = R.get(W.key === null ? O : W.key) || null), _(P, R, W, oe)
            );
          case se:
            var le = W._init;
            return X(R, P, O, le(W._payload), oe);
        }
        if (wn(W) || z(W)) return (R = R.get(O) || null), $(P, R, W, oe, null);
        Ns(P, W);
      }
      return null;
    }
    function te(R, P, O, W) {
      for (
        var oe = null, le = null, ae = P, de = (P = 0), Qe = null;
        ae !== null && de < O.length;
        de++
      ) {
        ae.index > de ? ((Qe = ae), (ae = null)) : (Qe = ae.sibling);
        var Ce = B(R, ae, O[de], W);
        if (Ce === null) {
          ae === null && (ae = Qe);
          break;
        }
        e && ae && Ce.alternate === null && t(R, ae),
          (P = u(Ce, P, de)),
          le === null ? (oe = Ce) : (le.sibling = Ce),
          (le = Ce),
          (ae = Qe);
      }
      if (de === O.length) return r(R, ae), _e && er(R, de), oe;
      if (ae === null) {
        for (; de < O.length; de++)
          (ae = U(R, O[de], W)),
            ae !== null &&
              ((P = u(ae, P, de)),
              le === null ? (oe = ae) : (le.sibling = ae),
              (le = ae));
        return _e && er(R, de), oe;
      }
      for (ae = s(R, ae); de < O.length; de++)
        (Qe = X(ae, R, de, O[de], W)),
          Qe !== null &&
            (e &&
              Qe.alternate !== null &&
              ae.delete(Qe.key === null ? de : Qe.key),
            (P = u(Qe, P, de)),
            le === null ? (oe = Qe) : (le.sibling = Qe),
            (le = Qe));
      return (
        e &&
          ae.forEach(function (Bn) {
            return t(R, Bn);
          }),
        _e && er(R, de),
        oe
      );
    }
    function ne(R, P, O, W) {
      var oe = z(O);
      if (typeof oe != "function") throw Error(i(150));
      if (((O = oe.call(O)), O == null)) throw Error(i(151));
      for (
        var le = (oe = null), ae = P, de = (P = 0), Qe = null, Ce = O.next();
        ae !== null && !Ce.done;
        de++, Ce = O.next()
      ) {
        ae.index > de ? ((Qe = ae), (ae = null)) : (Qe = ae.sibling);
        var Bn = B(R, ae, Ce.value, W);
        if (Bn === null) {
          ae === null && (ae = Qe);
          break;
        }
        e && ae && Bn.alternate === null && t(R, ae),
          (P = u(Bn, P, de)),
          le === null ? (oe = Bn) : (le.sibling = Bn),
          (le = Bn),
          (ae = Qe);
      }
      if (Ce.done) return r(R, ae), _e && er(R, de), oe;
      if (ae === null) {
        for (; !Ce.done; de++, Ce = O.next())
          (Ce = U(R, Ce.value, W)),
            Ce !== null &&
              ((P = u(Ce, P, de)),
              le === null ? (oe = Ce) : (le.sibling = Ce),
              (le = Ce));
        return _e && er(R, de), oe;
      }
      for (ae = s(R, ae); !Ce.done; de++, Ce = O.next())
        (Ce = X(ae, R, de, Ce.value, W)),
          Ce !== null &&
            (e &&
              Ce.alternate !== null &&
              ae.delete(Ce.key === null ? de : Ce.key),
            (P = u(Ce, P, de)),
            le === null ? (oe = Ce) : (le.sibling = Ce),
            (le = Ce));
      return (
        e &&
          ae.forEach(function (hg) {
            return t(R, hg);
          }),
        _e && er(R, de),
        oe
      );
    }
    function ze(R, P, O, W) {
      if (
        (typeof O == "object" &&
          O !== null &&
          O.type === Y &&
          O.key === null &&
          (O = O.props.children),
        typeof O == "object" && O !== null)
      ) {
        switch (O.$$typeof) {
          case H:
            e: {
              for (var oe = O.key, le = P; le !== null; ) {
                if (le.key === oe) {
                  if (((oe = O.type), oe === Y)) {
                    if (le.tag === 7) {
                      r(R, le.sibling),
                        (P = l(le, O.props.children)),
                        (P.return = R),
                        (R = P);
                      break e;
                    }
                  } else if (
                    le.elementType === oe ||
                    (typeof oe == "object" &&
                      oe !== null &&
                      oe.$$typeof === se &&
                      yc(oe) === le.type)
                  ) {
                    r(R, le.sibling),
                      (P = l(le, O.props)),
                      (P.ref = wo(R, le, O)),
                      (P.return = R),
                      (R = P);
                    break e;
                  }
                  r(R, le);
                  break;
                } else t(R, le);
                le = le.sibling;
              }
              O.type === Y
                ? ((P = ar(O.props.children, R.mode, W, O.key)),
                  (P.return = R),
                  (R = P))
                : ((W = Xs(O.type, O.key, O.props, null, R.mode, W)),
                  (W.ref = wo(R, P, O)),
                  (W.return = R),
                  (R = W));
            }
            return p(R);
          case K:
            e: {
              for (le = O.key; P !== null; ) {
                if (P.key === le)
                  if (
                    P.tag === 4 &&
                    P.stateNode.containerInfo === O.containerInfo &&
                    P.stateNode.implementation === O.implementation
                  ) {
                    r(R, P.sibling),
                      (P = l(P, O.children || [])),
                      (P.return = R),
                      (R = P);
                    break e;
                  } else {
                    r(R, P);
                    break;
                  }
                else t(R, P);
                P = P.sibling;
              }
              (P = da(O, R.mode, W)), (P.return = R), (R = P);
            }
            return p(R);
          case se:
            return (le = O._init), ze(R, P, le(O._payload), W);
        }
        if (wn(O)) return te(R, P, O, W);
        if (z(O)) return ne(R, P, O, W);
        Ns(R, O);
      }
      return (typeof O == "string" && O !== "") || typeof O == "number"
        ? ((O = "" + O),
          P !== null && P.tag === 6
            ? (r(R, P.sibling), (P = l(P, O)), (P.return = R), (R = P))
            : (r(R, P), (P = ca(O, R.mode, W)), (P.return = R), (R = P)),
          p(R))
        : r(R, P);
    }
    return ze;
  }
  var Rr = xc(!0),
    wc = xc(!1),
    Ts = Rn(null),
    Rs = null,
    jr = null,
    wl = null;
  function Sl() {
    wl = jr = Rs = null;
  }
  function El(e) {
    var t = Ts.current;
    je(Ts), (e._currentValue = t);
  }
  function kl(e, t, r) {
    for (; e !== null; ) {
      var s = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), s !== null && (s.childLanes |= t))
          : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function Or(e, t) {
    (Rs = e),
      (wl = jr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (ut = !0), (e.firstContext = null));
  }
  function Nt(e) {
    var t = e._currentValue;
    if (wl !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), jr === null)) {
        if (Rs === null) throw Error(i(308));
        (jr = e), (Rs.dependencies = { lanes: 0, firstContext: e });
      } else jr = jr.next = e;
    return t;
  }
  var tr = null;
  function Cl(e) {
    tr === null ? (tr = [e]) : tr.push(e);
  }
  function Sc(e, t, r, s) {
    var l = t.interleaved;
    return (
      l === null ? ((r.next = r), Cl(t)) : ((r.next = l.next), (l.next = r)),
      (t.interleaved = r),
      fn(e, s)
    );
  }
  function fn(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (r = e.alternate),
        r !== null && (r.childLanes |= t),
        (r = e),
        (e = e.return);
    return r.tag === 3 ? r.stateNode : null;
  }
  var _n = !1;
  function bl(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Ec(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function pn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function An(e, t, r) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (((s = s.shared), (Ee & 2) !== 0)) {
      var l = s.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (s.pending = t),
        fn(e, r)
      );
    }
    return (
      (l = s.interleaved),
      l === null ? ((t.next = t), Cl(s)) : ((t.next = l.next), (l.next = t)),
      (s.interleaved = t),
      fn(e, r)
    );
  }
  function js(e, t, r) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
    ) {
      var s = t.lanes;
      (s &= e.pendingLanes), (r |= s), (t.lanes = r), Fi(e, r);
    }
  }
  function kc(e, t) {
    var r = e.updateQueue,
      s = e.alternate;
    if (s !== null && ((s = s.updateQueue), r === s)) {
      var l = null,
        u = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var p = {
            eventTime: r.eventTime,
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          };
          u === null ? (l = u = p) : (u = u.next = p), (r = r.next);
        } while (r !== null);
        u === null ? (l = u = t) : (u = u.next = t);
      } else l = u = t;
      (r = {
        baseState: s.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: u,
        shared: s.shared,
        effects: s.effects,
      }),
        (e.updateQueue = r);
      return;
    }
    (e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t);
  }
  function Os(e, t, r, s) {
    var l = e.updateQueue;
    _n = !1;
    var u = l.firstBaseUpdate,
      p = l.lastBaseUpdate,
      S = l.shared.pending;
    if (S !== null) {
      l.shared.pending = null;
      var b = S,
        _ = b.next;
      (b.next = null), p === null ? (u = _) : (p.next = _), (p = b);
      var $ = e.alternate;
      $ !== null &&
        (($ = $.updateQueue),
        (S = $.lastBaseUpdate),
        S !== p &&
          (S === null ? ($.firstBaseUpdate = _) : (S.next = _),
          ($.lastBaseUpdate = b)));
    }
    if (u !== null) {
      var U = l.baseState;
      (p = 0), ($ = _ = b = null), (S = u);
      do {
        var B = S.lane,
          X = S.eventTime;
        if ((s & B) === B) {
          $ !== null &&
            ($ = $.next =
              {
                eventTime: X,
                lane: 0,
                tag: S.tag,
                payload: S.payload,
                callback: S.callback,
                next: null,
              });
          e: {
            var te = e,
              ne = S;
            switch (((B = t), (X = r), ne.tag)) {
              case 1:
                if (((te = ne.payload), typeof te == "function")) {
                  U = te.call(X, U, B);
                  break e;
                }
                U = te;
                break e;
              case 3:
                te.flags = (te.flags & -65537) | 128;
              case 0:
                if (
                  ((te = ne.payload),
                  (B = typeof te == "function" ? te.call(X, U, B) : te),
                  B == null)
                )
                  break e;
                U = V({}, U, B);
                break e;
              case 2:
                _n = !0;
            }
          }
          S.callback !== null &&
            S.lane !== 0 &&
            ((e.flags |= 64),
            (B = l.effects),
            B === null ? (l.effects = [S]) : B.push(S));
        } else
          (X = {
            eventTime: X,
            lane: B,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null,
          }),
            $ === null ? ((_ = $ = X), (b = U)) : ($ = $.next = X),
            (p |= B);
        if (((S = S.next), S === null)) {
          if (((S = l.shared.pending), S === null)) break;
          (B = S),
            (S = B.next),
            (B.next = null),
            (l.lastBaseUpdate = B),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        ($ === null && (b = U),
        (l.baseState = b),
        (l.firstBaseUpdate = _),
        (l.lastBaseUpdate = $),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (p |= l.lane), (l = l.next);
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      (or |= p), (e.lanes = p), (e.memoizedState = U);
    }
  }
  function Cc(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var s = e[t],
          l = s.callback;
        if (l !== null) {
          if (((s.callback = null), (s = r), typeof l != "function"))
            throw Error(i(191, l));
          l.call(s);
        }
      }
  }
  var So = {},
    Jt = Rn(So),
    Eo = Rn(So),
    ko = Rn(So);
  function nr(e) {
    if (e === So) throw Error(i(174));
    return e;
  }
  function Pl(e, t) {
    switch ((Te(ko, t), Te(Eo, e), Te(Jt, So), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Qt(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Qt(t, e));
    }
    je(Jt), Te(Jt, t);
  }
  function _r() {
    je(Jt), je(Eo), je(ko);
  }
  function bc(e) {
    nr(ko.current);
    var t = nr(Jt.current),
      r = Qt(t, e.type);
    t !== r && (Te(Eo, e), Te(Jt, r));
  }
  function Nl(e) {
    Eo.current === e && (je(Jt), je(Eo));
  }
  var Ae = Rn(0);
  function _s(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (
          r !== null &&
          ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Tl = [];
  function Rl() {
    for (var e = 0; e < Tl.length; e++)
      Tl[e]._workInProgressVersionPrimary = null;
    Tl.length = 0;
  }
  var As = F.ReactCurrentDispatcher,
    jl = F.ReactCurrentBatchConfig,
    rr = 0,
    Me = null,
    $e = null,
    He = null,
    Ms = !1,
    Co = !1,
    bo = 0,
    Im = 0;
  function Xe() {
    throw Error(i(321));
  }
  function Ol(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!Mt(e[r], t[r])) return !1;
    return !0;
  }
  function _l(e, t, r, s, l, u) {
    if (
      ((rr = u),
      (Me = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (As.current = e === null || e.memoizedState === null ? Bm : $m),
      (e = r(s, l)),
      Co)
    ) {
      u = 0;
      do {
        if (((Co = !1), (bo = 0), 25 <= u)) throw Error(i(301));
        (u += 1),
          (He = $e = null),
          (t.updateQueue = null),
          (As.current = Um),
          (e = r(s, l));
      } while (Co);
    }
    if (
      ((As.current = Ds),
      (t = $e !== null && $e.next !== null),
      (rr = 0),
      (He = $e = Me = null),
      (Ms = !1),
      t)
    )
      throw Error(i(300));
    return e;
  }
  function Al() {
    var e = bo !== 0;
    return (bo = 0), e;
  }
  function en() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return He === null ? (Me.memoizedState = He = e) : (He = He.next = e), He;
  }
  function Tt() {
    if ($e === null) {
      var e = Me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = $e.next;
    var t = He === null ? Me.memoizedState : He.next;
    if (t !== null) (He = t), ($e = e);
    else {
      if (e === null) throw Error(i(310));
      ($e = e),
        (e = {
          memoizedState: $e.memoizedState,
          baseState: $e.baseState,
          baseQueue: $e.baseQueue,
          queue: $e.queue,
          next: null,
        }),
        He === null ? (Me.memoizedState = He = e) : (He = He.next = e);
    }
    return He;
  }
  function Po(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ml(e) {
    var t = Tt(),
      r = t.queue;
    if (r === null) throw Error(i(311));
    r.lastRenderedReducer = e;
    var s = $e,
      l = s.baseQueue,
      u = r.pending;
    if (u !== null) {
      if (l !== null) {
        var p = l.next;
        (l.next = u.next), (u.next = p);
      }
      (s.baseQueue = l = u), (r.pending = null);
    }
    if (l !== null) {
      (u = l.next), (s = s.baseState);
      var S = (p = null),
        b = null,
        _ = u;
      do {
        var $ = _.lane;
        if ((rr & $) === $)
          b !== null &&
            (b = b.next =
              {
                lane: 0,
                action: _.action,
                hasEagerState: _.hasEagerState,
                eagerState: _.eagerState,
                next: null,
              }),
            (s = _.hasEagerState ? _.eagerState : e(s, _.action));
        else {
          var U = {
            lane: $,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null,
          };
          b === null ? ((S = b = U), (p = s)) : (b = b.next = U),
            (Me.lanes |= $),
            (or |= $);
        }
        _ = _.next;
      } while (_ !== null && _ !== u);
      b === null ? (p = s) : (b.next = S),
        Mt(s, t.memoizedState) || (ut = !0),
        (t.memoizedState = s),
        (t.baseState = p),
        (t.baseQueue = b),
        (r.lastRenderedState = s);
    }
    if (((e = r.interleaved), e !== null)) {
      l = e;
      do (u = l.lane), (Me.lanes |= u), (or |= u), (l = l.next);
      while (l !== e);
    } else l === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function Ll(e) {
    var t = Tt(),
      r = t.queue;
    if (r === null) throw Error(i(311));
    r.lastRenderedReducer = e;
    var s = r.dispatch,
      l = r.pending,
      u = t.memoizedState;
    if (l !== null) {
      r.pending = null;
      var p = (l = l.next);
      do (u = e(u, p.action)), (p = p.next);
      while (p !== l);
      Mt(u, t.memoizedState) || (ut = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (r.lastRenderedState = u);
    }
    return [u, s];
  }
  function Pc() {}
  function Nc(e, t) {
    var r = Me,
      s = Tt(),
      l = t(),
      u = !Mt(s.memoizedState, l);
    if (
      (u && ((s.memoizedState = l), (ut = !0)),
      (s = s.queue),
      Il(jc.bind(null, r, s, e), [e]),
      s.getSnapshot !== t || u || (He !== null && He.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        No(9, Rc.bind(null, r, s, l, t), void 0, null),
        We === null)
      )
        throw Error(i(349));
      (rr & 30) !== 0 || Tc(r, t, l);
    }
    return l;
  }
  function Tc(e, t, r) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = Me.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Me.updateQueue = t),
          (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
  }
  function Rc(e, t, r, s) {
    (t.value = r), (t.getSnapshot = s), Oc(t) && _c(e);
  }
  function jc(e, t, r) {
    return r(function () {
      Oc(t) && _c(e);
    });
  }
  function Oc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Mt(e, r);
    } catch {
      return !0;
    }
  }
  function _c(e) {
    var t = fn(e, 1);
    t !== null && Ft(t, e, 1, -1);
  }
  function Ac(e) {
    var t = en();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Po,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Fm.bind(null, Me, e)),
      [t.memoizedState, e]
    );
  }
  function No(e, t, r, s) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: s, next: null }),
      (t = Me.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Me.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((s = r.next), (r.next = e), (e.next = s), (t.lastEffect = e))),
      e
    );
  }
  function Mc() {
    return Tt().memoizedState;
  }
  function Ls(e, t, r, s) {
    var l = en();
    (Me.flags |= e),
      (l.memoizedState = No(1 | t, r, void 0, s === void 0 ? null : s));
  }
  function Is(e, t, r, s) {
    var l = Tt();
    s = s === void 0 ? null : s;
    var u = void 0;
    if ($e !== null) {
      var p = $e.memoizedState;
      if (((u = p.destroy), s !== null && Ol(s, p.deps))) {
        l.memoizedState = No(t, r, u, s);
        return;
      }
    }
    (Me.flags |= e), (l.memoizedState = No(1 | t, r, u, s));
  }
  function Lc(e, t) {
    return Ls(8390656, 8, e, t);
  }
  function Il(e, t) {
    return Is(2048, 8, e, t);
  }
  function Ic(e, t) {
    return Is(4, 2, e, t);
  }
  function Dc(e, t) {
    return Is(4, 4, e, t);
  }
  function zc(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Fc(e, t, r) {
    return (
      (r = r != null ? r.concat([e]) : null), Is(4, 4, zc.bind(null, t, e), r)
    );
  }
  function Dl() {}
  function Bc(e, t) {
    var r = Tt();
    t = t === void 0 ? null : t;
    var s = r.memoizedState;
    return s !== null && t !== null && Ol(t, s[1])
      ? s[0]
      : ((r.memoizedState = [e, t]), e);
  }
  function $c(e, t) {
    var r = Tt();
    t = t === void 0 ? null : t;
    var s = r.memoizedState;
    return s !== null && t !== null && Ol(t, s[1])
      ? s[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function Uc(e, t, r) {
    return (rr & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (ut = !0)), (e.memoizedState = r))
      : (Mt(r, t) ||
          ((r = yu()), (Me.lanes |= r), (or |= r), (e.baseState = !0)),
        t);
  }
  function Dm(e, t) {
    var r = Pe;
    (Pe = r !== 0 && 4 > r ? r : 4), e(!0);
    var s = jl.transition;
    jl.transition = {};
    try {
      e(!1), t();
    } finally {
      (Pe = r), (jl.transition = s);
    }
  }
  function Vc() {
    return Tt().memoizedState;
  }
  function zm(e, t, r) {
    var s = Dn(e);
    if (
      ((r = {
        lane: s,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Hc(e))
    )
      Wc(t, r);
    else if (((r = Sc(e, t, r, s)), r !== null)) {
      var l = rt();
      Ft(r, e, s, l), Qc(r, t, s);
    }
  }
  function Fm(e, t, r) {
    var s = Dn(e),
      l = {
        lane: s,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Hc(e)) Wc(t, l);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var p = t.lastRenderedState,
            S = u(p, r);
          if (((l.hasEagerState = !0), (l.eagerState = S), Mt(S, p))) {
            var b = t.interleaved;
            b === null
              ? ((l.next = l), Cl(t))
              : ((l.next = b.next), (b.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (r = Sc(e, t, l, s)),
        r !== null && ((l = rt()), Ft(r, e, s, l), Qc(r, t, s));
    }
  }
  function Hc(e) {
    var t = e.alternate;
    return e === Me || (t !== null && t === Me);
  }
  function Wc(e, t) {
    Co = Ms = !0;
    var r = e.pending;
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t);
  }
  function Qc(e, t, r) {
    if ((r & 4194240) !== 0) {
      var s = t.lanes;
      (s &= e.pendingLanes), (r |= s), (t.lanes = r), Fi(e, r);
    }
  }
  var Ds = {
      readContext: Nt,
      useCallback: Xe,
      useContext: Xe,
      useEffect: Xe,
      useImperativeHandle: Xe,
      useInsertionEffect: Xe,
      useLayoutEffect: Xe,
      useMemo: Xe,
      useReducer: Xe,
      useRef: Xe,
      useState: Xe,
      useDebugValue: Xe,
      useDeferredValue: Xe,
      useTransition: Xe,
      useMutableSource: Xe,
      useSyncExternalStore: Xe,
      useId: Xe,
      unstable_isNewReconciler: !1,
    },
    Bm = {
      readContext: Nt,
      useCallback: function (e, t) {
        return (en().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Nt,
      useEffect: Lc,
      useImperativeHandle: function (e, t, r) {
        return (
          (r = r != null ? r.concat([e]) : null),
          Ls(4194308, 4, zc.bind(null, t, e), r)
        );
      },
      useLayoutEffect: function (e, t) {
        return Ls(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Ls(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = en();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (r.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, r) {
        var s = en();
        return (
          (t = r !== void 0 ? r(t) : t),
          (s.memoizedState = s.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (s.queue = e),
          (e = e.dispatch = zm.bind(null, Me, e)),
          [s.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = en();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Ac,
      useDebugValue: Dl,
      useDeferredValue: function (e) {
        return (en().memoizedState = e);
      },
      useTransition: function () {
        var e = Ac(!1),
          t = e[0];
        return (e = Dm.bind(null, e[1])), (en().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var s = Me,
          l = en();
        if (_e) {
          if (r === void 0) throw Error(i(407));
          r = r();
        } else {
          if (((r = t()), We === null)) throw Error(i(349));
          (rr & 30) !== 0 || Tc(s, t, r);
        }
        l.memoizedState = r;
        var u = { value: r, getSnapshot: t };
        return (
          (l.queue = u),
          Lc(jc.bind(null, s, u, e), [e]),
          (s.flags |= 2048),
          No(9, Rc.bind(null, s, u, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = en(),
          t = We.identifierPrefix;
        if (_e) {
          var r = dn,
            s = cn;
          (r = (s & ~(1 << (32 - At(s) - 1))).toString(32) + r),
            (t = ":" + t + "R" + r),
            (r = bo++),
            0 < r && (t += "H" + r.toString(32)),
            (t += ":");
        } else (r = Im++), (t = ":" + t + "r" + r.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    $m = {
      readContext: Nt,
      useCallback: Bc,
      useContext: Nt,
      useEffect: Il,
      useImperativeHandle: Fc,
      useInsertionEffect: Ic,
      useLayoutEffect: Dc,
      useMemo: $c,
      useReducer: Ml,
      useRef: Mc,
      useState: function () {
        return Ml(Po);
      },
      useDebugValue: Dl,
      useDeferredValue: function (e) {
        var t = Tt();
        return Uc(t, $e.memoizedState, e);
      },
      useTransition: function () {
        var e = Ml(Po)[0],
          t = Tt().memoizedState;
        return [e, t];
      },
      useMutableSource: Pc,
      useSyncExternalStore: Nc,
      useId: Vc,
      unstable_isNewReconciler: !1,
    },
    Um = {
      readContext: Nt,
      useCallback: Bc,
      useContext: Nt,
      useEffect: Il,
      useImperativeHandle: Fc,
      useInsertionEffect: Ic,
      useLayoutEffect: Dc,
      useMemo: $c,
      useReducer: Ll,
      useRef: Mc,
      useState: function () {
        return Ll(Po);
      },
      useDebugValue: Dl,
      useDeferredValue: function (e) {
        var t = Tt();
        return $e === null ? (t.memoizedState = e) : Uc(t, $e.memoizedState, e);
      },
      useTransition: function () {
        var e = Ll(Po)[0],
          t = Tt().memoizedState;
        return [e, t];
      },
      useMutableSource: Pc,
      useSyncExternalStore: Nc,
      useId: Vc,
      unstable_isNewReconciler: !1,
    };
  function It(e, t) {
    if (e && e.defaultProps) {
      (t = V({}, t)), (e = e.defaultProps);
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function zl(e, t, r, s) {
    (t = e.memoizedState),
      (r = r(s, t)),
      (r = r == null ? t : V({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var zs = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Gn(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var s = rt(),
        l = Dn(e),
        u = pn(s, l);
      (u.payload = t),
        r != null && (u.callback = r),
        (t = An(e, u, l)),
        t !== null && (Ft(t, e, l, s), js(t, e, l));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var s = rt(),
        l = Dn(e),
        u = pn(s, l);
      (u.tag = 1),
        (u.payload = t),
        r != null && (u.callback = r),
        (t = An(e, u, l)),
        t !== null && (Ft(t, e, l, s), js(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = rt(),
        s = Dn(e),
        l = pn(r, s);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = An(e, l, s)),
        t !== null && (Ft(t, e, s, r), js(t, e, s));
    },
  };
  function Kc(e, t, r, s, l, u, p) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(s, u, p)
        : t.prototype && t.prototype.isPureReactComponent
        ? !po(r, s) || !po(l, u)
        : !0
    );
  }
  function qc(e, t, r) {
    var s = !1,
      l = jn,
      u = t.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = Nt(u))
        : ((l = at(t) ? Zn : Ge.current),
          (s = t.contextTypes),
          (u = (s = s != null) ? br(e, l) : jn)),
      (t = new t(r, u)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = zs),
      (e.stateNode = t),
      (t._reactInternals = e),
      s &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      t
    );
  }
  function Yc(e, t, r, s) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(r, s),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(r, s),
      t.state !== e && zs.enqueueReplaceState(t, t.state, null);
  }
  function Fl(e, t, r, s) {
    var l = e.stateNode;
    (l.props = r), (l.state = e.memoizedState), (l.refs = {}), bl(e);
    var u = t.contextType;
    typeof u == "object" && u !== null
      ? (l.context = Nt(u))
      : ((u = at(t) ? Zn : Ge.current), (l.context = br(e, u))),
      (l.state = e.memoizedState),
      (u = t.getDerivedStateFromProps),
      typeof u == "function" && (zl(e, t, u, r), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && zs.enqueueReplaceState(l, l.state, null),
        Os(e, r, l, s),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Ar(e, t) {
    try {
      var r = "",
        s = t;
      do (r += ue(s)), (s = s.return);
      while (s);
      var l = r;
    } catch (u) {
      l =
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Bl(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function $l(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var Vm = typeof WeakMap == "function" ? WeakMap : Map;
  function Gc(e, t, r) {
    (r = pn(-1, r)), (r.tag = 3), (r.payload = { element: null });
    var s = t.value;
    return (
      (r.callback = function () {
        Ws || ((Ws = !0), (na = s)), $l(e, t);
      }),
      r
    );
  }
  function Xc(e, t, r) {
    (r = pn(-1, r)), (r.tag = 3);
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var l = t.value;
      (r.payload = function () {
        return s(l);
      }),
        (r.callback = function () {
          $l(e, t);
        });
    }
    var u = e.stateNode;
    return (
      u !== null &&
        typeof u.componentDidCatch == "function" &&
        (r.callback = function () {
          $l(e, t),
            typeof s != "function" &&
              (Ln === null ? (Ln = new Set([this])) : Ln.add(this));
          var p = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: p !== null ? p : "",
          });
        }),
      r
    );
  }
  function Zc(e, t, r) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new Vm();
      var l = new Set();
      s.set(t, l);
    } else (l = s.get(t)), l === void 0 && ((l = new Set()), s.set(t, l));
    l.has(r) || (l.add(r), (e = rg.bind(null, e, t, r)), t.then(e, e));
  }
  function Jc(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function ed(e, t, r, s, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null
                ? (r.tag = 17)
                : ((t = pn(-1, 1)), (t.tag = 2), An(r, t, 1))),
            (r.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var Hm = F.ReactCurrentOwner,
    ut = !1;
  function nt(e, t, r, s) {
    t.child = e === null ? wc(t, null, r, s) : Rr(t, e.child, r, s);
  }
  function td(e, t, r, s, l) {
    r = r.render;
    var u = t.ref;
    return (
      Or(t, l),
      (s = _l(e, t, r, s, u, l)),
      (r = Al()),
      e !== null && !ut
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          hn(e, t, l))
        : (_e && r && ml(t), (t.flags |= 1), nt(e, t, s, l), t.child)
    );
  }
  function nd(e, t, r, s, l) {
    if (e === null) {
      var u = r.type;
      return typeof u == "function" &&
        !ua(u) &&
        u.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), rd(e, t, u, s, l))
        : ((e = Xs(r.type, null, s, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), (e.lanes & l) === 0)) {
      var p = u.memoizedProps;
      if (
        ((r = r.compare), (r = r !== null ? r : po), r(p, s) && e.ref === t.ref)
      )
        return hn(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = Fn(u, s)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function rd(e, t, r, s, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (po(u, s) && e.ref === t.ref)
        if (((ut = !1), (t.pendingProps = s = u), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (ut = !0);
        else return (t.lanes = e.lanes), hn(e, t, l);
    }
    return Ul(e, t, r, s, l);
  }
  function od(e, t, r) {
    var s = t.pendingProps,
      l = s.children,
      u = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden")
      if ((t.mode & 1) === 0)
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Te(Lr, xt),
          (xt |= r);
      else {
        if ((r & 1073741824) === 0)
          return (
            (e = u !== null ? u.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Te(Lr, xt),
            (xt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (s = u !== null ? u.baseLanes : r),
          Te(Lr, xt),
          (xt |= s);
      }
    else
      u !== null ? ((s = u.baseLanes | r), (t.memoizedState = null)) : (s = r),
        Te(Lr, xt),
        (xt |= s);
    return nt(e, t, l, r), t.child;
  }
  function sd(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Ul(e, t, r, s, l) {
    var u = at(r) ? Zn : Ge.current;
    return (
      (u = br(t, u)),
      Or(t, l),
      (r = _l(e, t, r, s, u, l)),
      (s = Al()),
      e !== null && !ut
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          hn(e, t, l))
        : (_e && s && ml(t), (t.flags |= 1), nt(e, t, r, l), t.child)
    );
  }
  function id(e, t, r, s, l) {
    if (at(r)) {
      var u = !0;
      Es(t);
    } else u = !1;
    if ((Or(t, l), t.stateNode === null))
      Bs(e, t), qc(t, r, s), Fl(t, r, s, l), (s = !0);
    else if (e === null) {
      var p = t.stateNode,
        S = t.memoizedProps;
      p.props = S;
      var b = p.context,
        _ = r.contextType;
      typeof _ == "object" && _ !== null
        ? (_ = Nt(_))
        : ((_ = at(r) ? Zn : Ge.current), (_ = br(t, _)));
      var $ = r.getDerivedStateFromProps,
        U =
          typeof $ == "function" ||
          typeof p.getSnapshotBeforeUpdate == "function";
      U ||
        (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
          typeof p.componentWillReceiveProps != "function") ||
        ((S !== s || b !== _) && Yc(t, p, s, _)),
        (_n = !1);
      var B = t.memoizedState;
      (p.state = B),
        Os(t, s, p, l),
        (b = t.memoizedState),
        S !== s || B !== b || lt.current || _n
          ? (typeof $ == "function" && (zl(t, r, $, s), (b = t.memoizedState)),
            (S = _n || Kc(t, r, S, s, B, b, _))
              ? (U ||
                  (typeof p.UNSAFE_componentWillMount != "function" &&
                    typeof p.componentWillMount != "function") ||
                  (typeof p.componentWillMount == "function" &&
                    p.componentWillMount(),
                  typeof p.UNSAFE_componentWillMount == "function" &&
                    p.UNSAFE_componentWillMount()),
                typeof p.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof p.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = s),
                (t.memoizedState = b)),
            (p.props = s),
            (p.state = b),
            (p.context = _),
            (s = S))
          : (typeof p.componentDidMount == "function" && (t.flags |= 4194308),
            (s = !1));
    } else {
      (p = t.stateNode),
        Ec(e, t),
        (S = t.memoizedProps),
        (_ = t.type === t.elementType ? S : It(t.type, S)),
        (p.props = _),
        (U = t.pendingProps),
        (B = p.context),
        (b = r.contextType),
        typeof b == "object" && b !== null
          ? (b = Nt(b))
          : ((b = at(r) ? Zn : Ge.current), (b = br(t, b)));
      var X = r.getDerivedStateFromProps;
      ($ =
        typeof X == "function" ||
        typeof p.getSnapshotBeforeUpdate == "function") ||
        (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
          typeof p.componentWillReceiveProps != "function") ||
        ((S !== U || B !== b) && Yc(t, p, s, b)),
        (_n = !1),
        (B = t.memoizedState),
        (p.state = B),
        Os(t, s, p, l);
      var te = t.memoizedState;
      S !== U || B !== te || lt.current || _n
        ? (typeof X == "function" && (zl(t, r, X, s), (te = t.memoizedState)),
          (_ = _n || Kc(t, r, _, s, B, te, b) || !1)
            ? ($ ||
                (typeof p.UNSAFE_componentWillUpdate != "function" &&
                  typeof p.componentWillUpdate != "function") ||
                (typeof p.componentWillUpdate == "function" &&
                  p.componentWillUpdate(s, te, b),
                typeof p.UNSAFE_componentWillUpdate == "function" &&
                  p.UNSAFE_componentWillUpdate(s, te, b)),
              typeof p.componentDidUpdate == "function" && (t.flags |= 4),
              typeof p.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof p.componentDidUpdate != "function" ||
                (S === e.memoizedProps && B === e.memoizedState) ||
                (t.flags |= 4),
              typeof p.getSnapshotBeforeUpdate != "function" ||
                (S === e.memoizedProps && B === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = s),
              (t.memoizedState = te)),
          (p.props = s),
          (p.state = te),
          (p.context = b),
          (s = _))
        : (typeof p.componentDidUpdate != "function" ||
            (S === e.memoizedProps && B === e.memoizedState) ||
            (t.flags |= 4),
          typeof p.getSnapshotBeforeUpdate != "function" ||
            (S === e.memoizedProps && B === e.memoizedState) ||
            (t.flags |= 1024),
          (s = !1));
    }
    return Vl(e, t, r, s, u, l);
  }
  function Vl(e, t, r, s, l, u) {
    sd(e, t);
    var p = (t.flags & 128) !== 0;
    if (!s && !p) return l && dc(t, r, !1), hn(e, t, u);
    (s = t.stateNode), (Hm.current = t);
    var S =
      p && typeof r.getDerivedStateFromError != "function" ? null : s.render();
    return (
      (t.flags |= 1),
      e !== null && p
        ? ((t.child = Rr(t, e.child, null, u)), (t.child = Rr(t, null, S, u)))
        : nt(e, t, S, u),
      (t.memoizedState = s.state),
      l && dc(t, r, !0),
      t.child
    );
  }
  function ld(e) {
    var t = e.stateNode;
    t.pendingContext
      ? uc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && uc(e, t.context, !1),
      Pl(e, t.containerInfo);
  }
  function ad(e, t, r, s, l) {
    return Tr(), xl(l), (t.flags |= 256), nt(e, t, r, s), t.child;
  }
  var Hl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Wl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ud(e, t, r) {
    var s = t.pendingProps,
      l = Ae.current,
      u = !1,
      p = (t.flags & 128) !== 0,
      S;
    if (
      ((S = p) ||
        (S = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      S
        ? ((u = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      Te(Ae, l & 1),
      e === null)
    )
      return (
        yl(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824),
            null)
          : ((p = s.children),
            (e = s.fallback),
            u
              ? ((s = t.mode),
                (u = t.child),
                (p = { mode: "hidden", children: p }),
                (s & 1) === 0 && u !== null
                  ? ((u.childLanes = 0), (u.pendingProps = p))
                  : (u = Zs(p, s, 0, null)),
                (e = ar(e, s, r, null)),
                (u.return = t),
                (e.return = t),
                (u.sibling = e),
                (t.child = u),
                (t.child.memoizedState = Wl(r)),
                (t.memoizedState = Hl),
                e)
              : Ql(t, p))
      );
    if (((l = e.memoizedState), l !== null && ((S = l.dehydrated), S !== null)))
      return Wm(e, t, p, s, S, l, r);
    if (u) {
      (u = s.fallback), (p = t.mode), (l = e.child), (S = l.sibling);
      var b = { mode: "hidden", children: s.children };
      return (
        (p & 1) === 0 && t.child !== l
          ? ((s = t.child),
            (s.childLanes = 0),
            (s.pendingProps = b),
            (t.deletions = null))
          : ((s = Fn(l, b)), (s.subtreeFlags = l.subtreeFlags & 14680064)),
        S !== null ? (u = Fn(S, u)) : ((u = ar(u, p, r, null)), (u.flags |= 2)),
        (u.return = t),
        (s.return = t),
        (s.sibling = u),
        (t.child = s),
        (s = u),
        (u = t.child),
        (p = e.child.memoizedState),
        (p =
          p === null
            ? Wl(r)
            : {
                baseLanes: p.baseLanes | r,
                cachePool: null,
                transitions: p.transitions,
              }),
        (u.memoizedState = p),
        (u.childLanes = e.childLanes & ~r),
        (t.memoizedState = Hl),
        s
      );
    }
    return (
      (u = e.child),
      (e = u.sibling),
      (s = Fn(u, { mode: "visible", children: s.children })),
      (t.mode & 1) === 0 && (s.lanes = r),
      (s.return = t),
      (s.sibling = null),
      e !== null &&
        ((r = t.deletions),
        r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
      (t.child = s),
      (t.memoizedState = null),
      s
    );
  }
  function Ql(e, t) {
    return (
      (t = Zs({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Fs(e, t, r, s) {
    return (
      s !== null && xl(s),
      Rr(t, e.child, null, r),
      (e = Ql(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Wm(e, t, r, s, l, u, p) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (s = Bl(Error(i(422)))), Fs(e, t, p, s))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((u = s.fallback),
          (l = t.mode),
          (s = Zs({ mode: "visible", children: s.children }, l, 0, null)),
          (u = ar(u, l, p, null)),
          (u.flags |= 2),
          (s.return = t),
          (u.return = t),
          (s.sibling = u),
          (t.child = s),
          (t.mode & 1) !== 0 && Rr(t, e.child, null, p),
          (t.child.memoizedState = Wl(p)),
          (t.memoizedState = Hl),
          u);
    if ((t.mode & 1) === 0) return Fs(e, t, p, null);
    if (l.data === "$!") {
      if (((s = l.nextSibling && l.nextSibling.dataset), s)) var S = s.dgst;
      return (
        (s = S), (u = Error(i(419))), (s = Bl(u, s, void 0)), Fs(e, t, p, s)
      );
    }
    if (((S = (p & e.childLanes) !== 0), ut || S)) {
      if (((s = We), s !== null)) {
        switch (p & -p) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = (l & (s.suspendedLanes | p)) !== 0 ? 0 : l),
          l !== 0 &&
            l !== u.retryLane &&
            ((u.retryLane = l), fn(e, l), Ft(s, e, l, -1));
      }
      return aa(), (s = Bl(Error(i(421)))), Fs(e, t, p, s);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = og.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = u.treeContext),
        (yt = Tn(l.nextSibling)),
        (vt = t),
        (_e = !0),
        (Lt = null),
        e !== null &&
          ((bt[Pt++] = cn),
          (bt[Pt++] = dn),
          (bt[Pt++] = Jn),
          (cn = e.id),
          (dn = e.overflow),
          (Jn = t)),
        (t = Ql(t, s.children)),
        (t.flags |= 4096),
        t);
  }
  function cd(e, t, r) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), kl(e.return, t, r);
  }
  function Kl(e, t, r, s, l) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: s,
          tail: r,
          tailMode: l,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = s),
        (u.tail = r),
        (u.tailMode = l));
  }
  function dd(e, t, r) {
    var s = t.pendingProps,
      l = s.revealOrder,
      u = s.tail;
    if ((nt(e, t, s.children, r), (s = Ae.current), (s & 2) !== 0))
      (s = (s & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && cd(e, r, t);
          else if (e.tag === 19) cd(e, r, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      s &= 1;
    }
    if ((Te(Ae, s), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (r = t.child, l = null; r !== null; )
            (e = r.alternate),
              e !== null && _s(e) === null && (l = r),
              (r = r.sibling);
          (r = l),
            r === null
              ? ((l = t.child), (t.child = null))
              : ((l = r.sibling), (r.sibling = null)),
            Kl(t, !1, l, r, u);
          break;
        case "backwards":
          for (r = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && _s(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = r), (r = l), (l = e);
          }
          Kl(t, !0, r, null, u);
          break;
        case "together":
          Kl(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Bs(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function hn(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (or |= t.lanes),
      (r & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (
        e = t.child, r = Fn(e, e.pendingProps), t.child = r, r.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (r = r.sibling = Fn(e, e.pendingProps)),
          (r.return = t);
      r.sibling = null;
    }
    return t.child;
  }
  function Qm(e, t, r) {
    switch (t.tag) {
      case 3:
        ld(t), Tr();
        break;
      case 5:
        bc(t);
        break;
      case 1:
        at(t.type) && Es(t);
        break;
      case 4:
        Pl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context,
          l = t.memoizedProps.value;
        Te(Ts, s._currentValue), (s._currentValue = l);
        break;
      case 13:
        if (((s = t.memoizedState), s !== null))
          return s.dehydrated !== null
            ? (Te(Ae, Ae.current & 1), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
            ? ud(e, t, r)
            : (Te(Ae, Ae.current & 1),
              (e = hn(e, t, r)),
              e !== null ? e.sibling : null);
        Te(Ae, Ae.current & 1);
        break;
      case 19:
        if (((s = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (s) return dd(e, t, r);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          Te(Ae, Ae.current),
          s)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), od(e, t, r);
    }
    return hn(e, t, r);
  }
  var fd, ql, pd, hd;
  (fd = function (e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
  }),
    (ql = function () {}),
    (pd = function (e, t, r, s) {
      var l = e.memoizedProps;
      if (l !== s) {
        (e = t.stateNode), nr(Jt.current);
        var u = null;
        switch (r) {
          case "input":
            (l = Kr(e, l)), (s = Kr(e, s)), (u = []);
            break;
          case "select":
            (l = V({}, l, { value: void 0 })),
              (s = V({}, s, { value: void 0 })),
              (u = []);
            break;
          case "textarea":
            (l = dr(e, l)), (s = dr(e, s)), (u = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof s.onClick == "function" &&
              (e.onclick = xs);
        }
        qt(r, s);
        var p;
        r = null;
        for (_ in l)
          if (!s.hasOwnProperty(_) && l.hasOwnProperty(_) && l[_] != null)
            if (_ === "style") {
              var S = l[_];
              for (p in S) S.hasOwnProperty(p) && (r || (r = {}), (r[p] = ""));
            } else
              _ !== "dangerouslySetInnerHTML" &&
                _ !== "children" &&
                _ !== "suppressContentEditableWarning" &&
                _ !== "suppressHydrationWarning" &&
                _ !== "autoFocus" &&
                (c.hasOwnProperty(_)
                  ? u || (u = [])
                  : (u = u || []).push(_, null));
        for (_ in s) {
          var b = s[_];
          if (
            ((S = l?.[_]),
            s.hasOwnProperty(_) && b !== S && (b != null || S != null))
          )
            if (_ === "style")
              if (S) {
                for (p in S)
                  !S.hasOwnProperty(p) ||
                    (b && b.hasOwnProperty(p)) ||
                    (r || (r = {}), (r[p] = ""));
                for (p in b)
                  b.hasOwnProperty(p) &&
                    S[p] !== b[p] &&
                    (r || (r = {}), (r[p] = b[p]));
              } else r || (u || (u = []), u.push(_, r)), (r = b);
            else
              _ === "dangerouslySetInnerHTML"
                ? ((b = b ? b.__html : void 0),
                  (S = S ? S.__html : void 0),
                  b != null && S !== b && (u = u || []).push(_, b))
                : _ === "children"
                ? (typeof b != "string" && typeof b != "number") ||
                  (u = u || []).push(_, "" + b)
                : _ !== "suppressContentEditableWarning" &&
                  _ !== "suppressHydrationWarning" &&
                  (c.hasOwnProperty(_)
                    ? (b != null && _ === "onScroll" && Re("scroll", e),
                      u || S === b || (u = []))
                    : (u = u || []).push(_, b));
        }
        r && (u = u || []).push("style", r);
        var _ = u;
        (t.updateQueue = _) && (t.flags |= 4);
      }
    }),
    (hd = function (e, t, r, s) {
      r !== s && (t.flags |= 4);
    });
  function To(e, t) {
    if (!_e)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling);
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case "collapsed":
          r = e.tail;
          for (var s = null; r !== null; )
            r.alternate !== null && (s = r), (r = r.sibling);
          s === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (s.sibling = null);
      }
  }
  function Ze(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      s = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (r |= l.lanes | l.childLanes),
          (s |= l.subtreeFlags & 14680064),
          (s |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (r |= l.lanes | l.childLanes),
          (s |= l.subtreeFlags),
          (s |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= s), (e.childLanes = r), t;
  }
  function Km(e, t, r) {
    var s = t.pendingProps;
    switch ((gl(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ze(t), null;
      case 1:
        return at(t.type) && Ss(), Ze(t), null;
      case 3:
        return (
          (s = t.stateNode),
          _r(),
          je(lt),
          je(Ge),
          Rl(),
          s.pendingContext &&
            ((s.context = s.pendingContext), (s.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ps(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Lt !== null && (sa(Lt), (Lt = null)))),
          ql(e, t),
          Ze(t),
          null
        );
      case 5:
        Nl(t);
        var l = nr(ko.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          pd(e, t, r, s, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(i(166));
            return Ze(t), null;
          }
          if (((e = nr(Jt.current)), Ps(t))) {
            (s = t.stateNode), (r = t.type);
            var u = t.memoizedProps;
            switch (((s[Zt] = t), (s[yo] = u), (e = (t.mode & 1) !== 0), r)) {
              case "dialog":
                Re("cancel", s), Re("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                Re("load", s);
                break;
              case "video":
              case "audio":
                for (l = 0; l < mo.length; l++) Re(mo[l], s);
                break;
              case "source":
                Re("error", s);
                break;
              case "img":
              case "image":
              case "link":
                Re("error", s), Re("load", s);
                break;
              case "details":
                Re("toggle", s);
                break;
              case "input":
                Wo(s, u), Re("invalid", s);
                break;
              case "select":
                (s._wrapperState = { wasMultiple: !!u.multiple }),
                  Re("invalid", s);
                break;
              case "textarea":
                Wt(s, u), Re("invalid", s);
            }
            qt(r, u), (l = null);
            for (var p in u)
              if (u.hasOwnProperty(p)) {
                var S = u[p];
                p === "children"
                  ? typeof S == "string"
                    ? s.textContent !== S &&
                      (u.suppressHydrationWarning !== !0 &&
                        ys(s.textContent, S, e),
                      (l = ["children", S]))
                    : typeof S == "number" &&
                      s.textContent !== "" + S &&
                      (u.suppressHydrationWarning !== !0 &&
                        ys(s.textContent, S, e),
                      (l = ["children", "" + S]))
                  : c.hasOwnProperty(p) &&
                    S != null &&
                    p === "onScroll" &&
                    Re("scroll", s);
              }
            switch (r) {
              case "input":
                Et(s), cr(s, u, !0);
                break;
              case "textarea":
                Et(s), Ko(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (s.onclick = xs);
            }
            (s = l), (t.updateQueue = s), s !== null && (t.flags |= 4);
          } else {
            (p = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = et(r)),
              e === "http://www.w3.org/1999/xhtml"
                ? r === "script"
                  ? ((e = p.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof s.is == "string"
                  ? (e = p.createElement(r, { is: s.is }))
                  : ((e = p.createElement(r)),
                    r === "select" &&
                      ((p = e),
                      s.multiple
                        ? (p.multiple = !0)
                        : s.size && (p.size = s.size)))
                : (e = p.createElementNS(e, r)),
              (e[Zt] = t),
              (e[yo] = s),
              fd(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((p = Xr(r, s)), r)) {
                case "dialog":
                  Re("cancel", e), Re("close", e), (l = s);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Re("load", e), (l = s);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < mo.length; l++) Re(mo[l], e);
                  l = s;
                  break;
                case "source":
                  Re("error", e), (l = s);
                  break;
                case "img":
                case "image":
                case "link":
                  Re("error", e), Re("load", e), (l = s);
                  break;
                case "details":
                  Re("toggle", e), (l = s);
                  break;
                case "input":
                  Wo(e, s), (l = Kr(e, s)), Re("invalid", e);
                  break;
                case "option":
                  l = s;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!s.multiple }),
                    (l = V({}, s, { value: void 0 })),
                    Re("invalid", e);
                  break;
                case "textarea":
                  Wt(e, s), (l = dr(e, s)), Re("invalid", e);
                  break;
                default:
                  l = s;
              }
              qt(r, l), (S = l);
              for (u in S)
                if (S.hasOwnProperty(u)) {
                  var b = S[u];
                  u === "style"
                    ? ln(e, b)
                    : u === "dangerouslySetInnerHTML"
                    ? ((b = b ? b.__html : void 0), b != null && qo(e, b))
                    : u === "children"
                    ? typeof b == "string"
                      ? (r !== "textarea" || b !== "") && Kt(e, b)
                      : typeof b == "number" && Kt(e, "" + b)
                    : u !== "suppressContentEditableWarning" &&
                      u !== "suppressHydrationWarning" &&
                      u !== "autoFocus" &&
                      (c.hasOwnProperty(u)
                        ? b != null && u === "onScroll" && Re("scroll", e)
                        : b != null && D(e, u, b, p));
                }
              switch (r) {
                case "input":
                  Et(e), cr(e, s, !1);
                  break;
                case "textarea":
                  Et(e), Ko(e);
                  break;
                case "option":
                  s.value != null && e.setAttribute("value", "" + Se(s.value));
                  break;
                case "select":
                  (e.multiple = !!s.multiple),
                    (u = s.value),
                    u != null
                      ? Ct(e, !!s.multiple, u, !1)
                      : s.defaultValue != null &&
                        Ct(e, !!s.multiple, s.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = xs);
              }
              switch (r) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break e;
                case "img":
                  s = !0;
                  break e;
                default:
                  s = !1;
              }
            }
            s && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Ze(t), null;
      case 6:
        if (e && t.stateNode != null) hd(e, t, e.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(i(166));
          if (((r = nr(ko.current)), nr(Jt.current), Ps(t))) {
            if (
              ((s = t.stateNode),
              (r = t.memoizedProps),
              (s[Zt] = t),
              (u = s.nodeValue !== r) && ((e = vt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  ys(s.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    ys(s.nodeValue, r, (e.mode & 1) !== 0);
              }
            u && (t.flags |= 4);
          } else
            (s = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(s)),
              (s[Zt] = t),
              (t.stateNode = s);
        }
        return Ze(t), null;
      case 13:
        if (
          (je(Ae),
          (s = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (_e && yt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            vc(), Tr(), (t.flags |= 98560), (u = !1);
          else if (((u = Ps(t)), s !== null && s.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(i(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(i(317));
              u[Zt] = t;
            } else
              Tr(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Ze(t), (u = !1);
          } else Lt !== null && (sa(Lt), (Lt = null)), (u = !0);
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = r), t)
          : ((s = s !== null),
            s !== (e !== null && e.memoizedState !== null) &&
              s &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Ae.current & 1) !== 0
                  ? Ue === 0 && (Ue = 3)
                  : aa())),
            t.updateQueue !== null && (t.flags |= 4),
            Ze(t),
            null);
      case 4:
        return (
          _r(),
          ql(e, t),
          e === null && go(t.stateNode.containerInfo),
          Ze(t),
          null
        );
      case 10:
        return El(t.type._context), Ze(t), null;
      case 17:
        return at(t.type) && Ss(), Ze(t), null;
      case 19:
        if ((je(Ae), (u = t.memoizedState), u === null)) return Ze(t), null;
        if (((s = (t.flags & 128) !== 0), (p = u.rendering), p === null))
          if (s) To(u, !1);
          else {
            if (Ue !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((p = _s(e)), p !== null)) {
                  for (
                    t.flags |= 128,
                      To(u, !1),
                      s = p.updateQueue,
                      s !== null && ((t.updateQueue = s), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      s = r,
                      r = t.child;
                    r !== null;

                  )
                    (u = r),
                      (e = s),
                      (u.flags &= 14680066),
                      (p = u.alternate),
                      p === null
                        ? ((u.childLanes = 0),
                          (u.lanes = e),
                          (u.child = null),
                          (u.subtreeFlags = 0),
                          (u.memoizedProps = null),
                          (u.memoizedState = null),
                          (u.updateQueue = null),
                          (u.dependencies = null),
                          (u.stateNode = null))
                        : ((u.childLanes = p.childLanes),
                          (u.lanes = p.lanes),
                          (u.child = p.child),
                          (u.subtreeFlags = 0),
                          (u.deletions = null),
                          (u.memoizedProps = p.memoizedProps),
                          (u.memoizedState = p.memoizedState),
                          (u.updateQueue = p.updateQueue),
                          (u.type = p.type),
                          (e = p.dependencies),
                          (u.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (r = r.sibling);
                  return Te(Ae, (Ae.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            u.tail !== null &&
              De() > Ir &&
              ((t.flags |= 128), (s = !0), To(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!s)
            if (((e = _s(p)), e !== null)) {
              if (
                ((t.flags |= 128),
                (s = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                To(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !p.alternate &&
                  !_e)
              )
                return Ze(t), null;
            } else
              2 * De() - u.renderingStartTime > Ir &&
                r !== 1073741824 &&
                ((t.flags |= 128), (s = !0), To(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((p.sibling = t.child), (t.child = p))
            : ((r = u.last),
              r !== null ? (r.sibling = p) : (t.child = p),
              (u.last = p));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = De()),
            (t.sibling = null),
            (r = Ae.current),
            Te(Ae, s ? (r & 1) | 2 : r & 1),
            t)
          : (Ze(t), null);
      case 22:
      case 23:
        return (
          la(),
          (s = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== s && (t.flags |= 8192),
          s && (t.mode & 1) !== 0
            ? (xt & 1073741824) !== 0 &&
              (Ze(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ze(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function qm(e, t) {
    switch ((gl(t), t.tag)) {
      case 1:
        return (
          at(t.type) && Ss(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          _r(),
          je(lt),
          je(Ge),
          Rl(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return Nl(t), null;
      case 13:
        if (
          (je(Ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(i(340));
          Tr();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return je(Ae), null;
      case 4:
        return _r(), null;
      case 10:
        return El(t.type._context), null;
      case 22:
      case 23:
        return la(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var $s = !1,
    Je = !1,
    Ym = typeof WeakSet == "function" ? WeakSet : Set,
    ee = null;
  function Mr(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == "function")
        try {
          r(null);
        } catch (s) {
          Le(e, t, s);
        }
      else r.current = null;
  }
  function Yl(e, t, r) {
    try {
      r();
    } catch (s) {
      Le(e, t, s);
    }
  }
  var md = !1;
  function Gm(e, t) {
    if (((ll = ls), (e = Ku()), Ji(e))) {
      if ("selectionStart" in e)
        var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var s = r.getSelection && r.getSelection();
          if (s && s.rangeCount !== 0) {
            r = s.anchorNode;
            var l = s.anchorOffset,
              u = s.focusNode;
            s = s.focusOffset;
            try {
              r.nodeType, u.nodeType;
            } catch {
              r = null;
              break e;
            }
            var p = 0,
              S = -1,
              b = -1,
              _ = 0,
              $ = 0,
              U = e,
              B = null;
            t: for (;;) {
              for (
                var X;
                U !== r || (l !== 0 && U.nodeType !== 3) || (S = p + l),
                  U !== u || (s !== 0 && U.nodeType !== 3) || (b = p + s),
                  U.nodeType === 3 && (p += U.nodeValue.length),
                  (X = U.firstChild) !== null;

              )
                (B = U), (U = X);
              for (;;) {
                if (U === e) break t;
                if (
                  (B === r && ++_ === l && (S = p),
                  B === u && ++$ === s && (b = p),
                  (X = U.nextSibling) !== null)
                )
                  break;
                (U = B), (B = U.parentNode);
              }
              U = X;
            }
            r = S === -1 || b === -1 ? null : { start: S, end: b };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (
      al = { focusedElem: e, selectionRange: r }, ls = !1, ee = t;
      ee !== null;

    )
      if (
        ((t = ee), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (ee = e);
      else
        for (; ee !== null; ) {
          t = ee;
          try {
            var te = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (te !== null) {
                    var ne = te.memoizedProps,
                      ze = te.memoizedState,
                      R = t.stateNode,
                      P = R.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? ne : It(t.type, ne),
                        ze
                      );
                    R.__reactInternalSnapshotBeforeUpdate = P;
                  }
                  break;
                case 3:
                  var O = t.stateNode.containerInfo;
                  O.nodeType === 1
                    ? (O.textContent = "")
                    : O.nodeType === 9 &&
                      O.documentElement &&
                      O.removeChild(O.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(i(163));
              }
          } catch (W) {
            Le(t, t.return, W);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (ee = e);
            break;
          }
          ee = t.return;
        }
    return (te = md), (md = !1), te;
  }
  function Ro(e, t, r) {
    var s = t.updateQueue;
    if (((s = s !== null ? s.lastEffect : null), s !== null)) {
      var l = (s = s.next);
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          (l.destroy = void 0), u !== void 0 && Yl(t, r, u);
        }
        l = l.next;
      } while (l !== s);
    }
  }
  function Us(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var r = (t = t.next);
      do {
        if ((r.tag & e) === e) {
          var s = r.create;
          r.destroy = s();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function Gl(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
        case 5:
          e = r;
          break;
        default:
          e = r;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function gd(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), gd(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Zt],
          delete t[yo],
          delete t[fl],
          delete t[_m],
          delete t[Am])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function vd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function yd(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || vd(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Xl(e, t, r) {
    var s = e.tag;
    if (s === 5 || s === 6)
      (e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8
              ? ((t = r.parentNode), t.insertBefore(e, r))
              : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = xs));
    else if (s !== 4 && ((e = e.child), e !== null))
      for (Xl(e, t, r), e = e.sibling; e !== null; )
        Xl(e, t, r), (e = e.sibling);
  }
  function Zl(e, t, r) {
    var s = e.tag;
    if (s === 5 || s === 6)
      (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (s !== 4 && ((e = e.child), e !== null))
      for (Zl(e, t, r), e = e.sibling; e !== null; )
        Zl(e, t, r), (e = e.sibling);
  }
  var qe = null,
    Dt = !1;
  function Mn(e, t, r) {
    for (r = r.child; r !== null; ) xd(e, t, r), (r = r.sibling);
  }
  function xd(e, t, r) {
    if (Xt && typeof Xt.onCommitFiberUnmount == "function")
      try {
        Xt.onCommitFiberUnmount(ts, r);
      } catch {}
    switch (r.tag) {
      case 5:
        Je || Mr(r, t);
      case 6:
        var s = qe,
          l = Dt;
        (qe = null),
          Mn(e, t, r),
          (qe = s),
          (Dt = l),
          qe !== null &&
            (Dt
              ? ((e = qe),
                (r = r.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(r)
                  : e.removeChild(r))
              : qe.removeChild(r.stateNode));
        break;
      case 18:
        qe !== null &&
          (Dt
            ? ((e = qe),
              (r = r.stateNode),
              e.nodeType === 8
                ? dl(e.parentNode, r)
                : e.nodeType === 1 && dl(e, r),
              io(e))
            : dl(qe, r.stateNode));
        break;
      case 4:
        (s = qe),
          (l = Dt),
          (qe = r.stateNode.containerInfo),
          (Dt = !0),
          Mn(e, t, r),
          (qe = s),
          (Dt = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Je &&
          ((s = r.updateQueue), s !== null && ((s = s.lastEffect), s !== null))
        ) {
          l = s = s.next;
          do {
            var u = l,
              p = u.destroy;
            (u = u.tag),
              p !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && Yl(r, t, p),
              (l = l.next);
          } while (l !== s);
        }
        Mn(e, t, r);
        break;
      case 1:
        if (
          !Je &&
          (Mr(r, t),
          (s = r.stateNode),
          typeof s.componentWillUnmount == "function")
        )
          try {
            (s.props = r.memoizedProps),
              (s.state = r.memoizedState),
              s.componentWillUnmount();
          } catch (S) {
            Le(r, t, S);
          }
        Mn(e, t, r);
        break;
      case 21:
        Mn(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? ((Je = (s = Je) || r.memoizedState !== null), Mn(e, t, r), (Je = s))
          : Mn(e, t, r);
        break;
      default:
        Mn(e, t, r);
    }
  }
  function wd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new Ym()),
        t.forEach(function (s) {
          var l = sg.bind(null, e, s);
          r.has(s) || (r.add(s), s.then(l, l));
        });
    }
  }
  function zt(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var s = 0; s < r.length; s++) {
        var l = r[s];
        try {
          var u = e,
            p = t,
            S = p;
          e: for (; S !== null; ) {
            switch (S.tag) {
              case 5:
                (qe = S.stateNode), (Dt = !1);
                break e;
              case 3:
                (qe = S.stateNode.containerInfo), (Dt = !0);
                break e;
              case 4:
                (qe = S.stateNode.containerInfo), (Dt = !0);
                break e;
            }
            S = S.return;
          }
          if (qe === null) throw Error(i(160));
          xd(u, p, l), (qe = null), (Dt = !1);
          var b = l.alternate;
          b !== null && (b.return = null), (l.return = null);
        } catch (_) {
          Le(l, t, _);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Sd(t, e), (t = t.sibling);
  }
  function Sd(e, t) {
    var r = e.alternate,
      s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((zt(t, e), tn(e), s & 4)) {
          try {
            Ro(3, e, e.return), Us(3, e);
          } catch (ne) {
            Le(e, e.return, ne);
          }
          try {
            Ro(5, e, e.return);
          } catch (ne) {
            Le(e, e.return, ne);
          }
        }
        break;
      case 1:
        zt(t, e), tn(e), s & 512 && r !== null && Mr(r, r.return);
        break;
      case 5:
        if (
          (zt(t, e),
          tn(e),
          s & 512 && r !== null && Mr(r, r.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Kt(l, "");
          } catch (ne) {
            Le(e, e.return, ne);
          }
        }
        if (s & 4 && ((l = e.stateNode), l != null)) {
          var u = e.memoizedProps,
            p = r !== null ? r.memoizedProps : u,
            S = e.type,
            b = e.updateQueue;
          if (((e.updateQueue = null), b !== null))
            try {
              S === "input" && u.type === "radio" && u.name != null && qr(l, u),
                Xr(S, p);
              var _ = Xr(S, u);
              for (p = 0; p < b.length; p += 2) {
                var $ = b[p],
                  U = b[p + 1];
                $ === "style"
                  ? ln(l, U)
                  : $ === "dangerouslySetInnerHTML"
                  ? qo(l, U)
                  : $ === "children"
                  ? Kt(l, U)
                  : D(l, $, U, _);
              }
              switch (S) {
                case "input":
                  Yr(l, u);
                  break;
                case "textarea":
                  Qo(l, u);
                  break;
                case "select":
                  var B = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!u.multiple;
                  var X = u.value;
                  X != null
                    ? Ct(l, !!u.multiple, X, !1)
                    : B !== !!u.multiple &&
                      (u.defaultValue != null
                        ? Ct(l, !!u.multiple, u.defaultValue, !0)
                        : Ct(l, !!u.multiple, u.multiple ? [] : "", !1));
              }
              l[yo] = u;
            } catch (ne) {
              Le(e, e.return, ne);
            }
        }
        break;
      case 6:
        if ((zt(t, e), tn(e), s & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          (l = e.stateNode), (u = e.memoizedProps);
          try {
            l.nodeValue = u;
          } catch (ne) {
            Le(e, e.return, ne);
          }
        }
        break;
      case 3:
        if (
          (zt(t, e), tn(e), s & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            io(t.containerInfo);
          } catch (ne) {
            Le(e, e.return, ne);
          }
        break;
      case 4:
        zt(t, e), tn(e);
        break;
      case 13:
        zt(t, e),
          tn(e),
          (l = e.child),
          l.flags & 8192 &&
            ((u = l.memoizedState !== null),
            (l.stateNode.isHidden = u),
            !u ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (ta = De())),
          s & 4 && wd(e);
        break;
      case 22:
        if (
          (($ = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((Je = (_ = Je) || $), zt(t, e), (Je = _)) : zt(t, e),
          tn(e),
          s & 8192)
        ) {
          if (
            ((_ = e.memoizedState !== null),
            (e.stateNode.isHidden = _) && !$ && (e.mode & 1) !== 0)
          )
            for (ee = e, $ = e.child; $ !== null; ) {
              for (U = ee = $; ee !== null; ) {
                switch (((B = ee), (X = B.child), B.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ro(4, B, B.return);
                    break;
                  case 1:
                    Mr(B, B.return);
                    var te = B.stateNode;
                    if (typeof te.componentWillUnmount == "function") {
                      (s = B), (r = B.return);
                      try {
                        (t = s),
                          (te.props = t.memoizedProps),
                          (te.state = t.memoizedState),
                          te.componentWillUnmount();
                      } catch (ne) {
                        Le(s, r, ne);
                      }
                    }
                    break;
                  case 5:
                    Mr(B, B.return);
                    break;
                  case 22:
                    if (B.memoizedState !== null) {
                      Cd(U);
                      continue;
                    }
                }
                X !== null ? ((X.return = B), (ee = X)) : Cd(U);
              }
              $ = $.sibling;
            }
          e: for ($ = null, U = e; ; ) {
            if (U.tag === 5) {
              if ($ === null) {
                $ = U;
                try {
                  (l = U.stateNode),
                    _
                      ? ((u = l.style),
                        typeof u.setProperty == "function"
                          ? u.setProperty("display", "none", "important")
                          : (u.display = "none"))
                      : ((S = U.stateNode),
                        (b = U.memoizedProps.style),
                        (p =
                          b != null && b.hasOwnProperty("display")
                            ? b.display
                            : null),
                        (S.style.display = pr("display", p)));
                } catch (ne) {
                  Le(e, e.return, ne);
                }
              }
            } else if (U.tag === 6) {
              if ($ === null)
                try {
                  U.stateNode.nodeValue = _ ? "" : U.memoizedProps;
                } catch (ne) {
                  Le(e, e.return, ne);
                }
            } else if (
              ((U.tag !== 22 && U.tag !== 23) ||
                U.memoizedState === null ||
                U === e) &&
              U.child !== null
            ) {
              (U.child.return = U), (U = U.child);
              continue;
            }
            if (U === e) break e;
            for (; U.sibling === null; ) {
              if (U.return === null || U.return === e) break e;
              $ === U && ($ = null), (U = U.return);
            }
            $ === U && ($ = null),
              (U.sibling.return = U.return),
              (U = U.sibling);
          }
        }
        break;
      case 19:
        zt(t, e), tn(e), s & 4 && wd(e);
        break;
      case 21:
        break;
      default:
        zt(t, e), tn(e);
    }
  }
  function tn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (vd(r)) {
              var s = r;
              break e;
            }
            r = r.return;
          }
          throw Error(i(160));
        }
        switch (s.tag) {
          case 5:
            var l = s.stateNode;
            s.flags & 32 && (Kt(l, ""), (s.flags &= -33));
            var u = yd(e);
            Zl(e, u, l);
            break;
          case 3:
          case 4:
            var p = s.stateNode.containerInfo,
              S = yd(e);
            Xl(e, S, p);
            break;
          default:
            throw Error(i(161));
        }
      } catch (b) {
        Le(e, e.return, b);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Xm(e, t, r) {
    (ee = e), Ed(e);
  }
  function Ed(e, t, r) {
    for (var s = (e.mode & 1) !== 0; ee !== null; ) {
      var l = ee,
        u = l.child;
      if (l.tag === 22 && s) {
        var p = l.memoizedState !== null || $s;
        if (!p) {
          var S = l.alternate,
            b = (S !== null && S.memoizedState !== null) || Je;
          S = $s;
          var _ = Je;
          if ((($s = p), (Je = b) && !_))
            for (ee = l; ee !== null; )
              (p = ee),
                (b = p.child),
                p.tag === 22 && p.memoizedState !== null
                  ? bd(l)
                  : b !== null
                  ? ((b.return = p), (ee = b))
                  : bd(l);
          for (; u !== null; ) (ee = u), Ed(u), (u = u.sibling);
          (ee = l), ($s = S), (Je = _);
        }
        kd(e);
      } else
        (l.subtreeFlags & 8772) !== 0 && u !== null
          ? ((u.return = l), (ee = u))
          : kd(e);
    }
  }
  function kd(e) {
    for (; ee !== null; ) {
      var t = ee;
      if ((t.flags & 8772) !== 0) {
        var r = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Je || Us(5, t);
                break;
              case 1:
                var s = t.stateNode;
                if (t.flags & 4 && !Je)
                  if (r === null) s.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? r.memoizedProps
                        : It(t.type, r.memoizedProps);
                    s.componentDidUpdate(
                      l,
                      r.memoizedState,
                      s.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var u = t.updateQueue;
                u !== null && Cc(t, u, s);
                break;
              case 3:
                var p = t.updateQueue;
                if (p !== null) {
                  if (((r = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        r = t.child.stateNode;
                        break;
                      case 1:
                        r = t.child.stateNode;
                    }
                  Cc(t, p, r);
                }
                break;
              case 5:
                var S = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = S;
                  var b = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      b.autoFocus && r.focus();
                      break;
                    case "img":
                      b.src && (r.src = b.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var _ = t.alternate;
                  if (_ !== null) {
                    var $ = _.memoizedState;
                    if ($ !== null) {
                      var U = $.dehydrated;
                      U !== null && io(U);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(i(163));
            }
          Je || (t.flags & 512 && Gl(t));
        } catch (B) {
          Le(t, t.return, B);
        }
      }
      if (t === e) {
        ee = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        (r.return = t.return), (ee = r);
        break;
      }
      ee = t.return;
    }
  }
  function Cd(e) {
    for (; ee !== null; ) {
      var t = ee;
      if (t === e) {
        ee = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        (r.return = t.return), (ee = r);
        break;
      }
      ee = t.return;
    }
  }
  function bd(e) {
    for (; ee !== null; ) {
      var t = ee;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              Us(4, t);
            } catch (b) {
              Le(t, r, b);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == "function") {
              var l = t.return;
              try {
                s.componentDidMount();
              } catch (b) {
                Le(t, l, b);
              }
            }
            var u = t.return;
            try {
              Gl(t);
            } catch (b) {
              Le(t, u, b);
            }
            break;
          case 5:
            var p = t.return;
            try {
              Gl(t);
            } catch (b) {
              Le(t, p, b);
            }
        }
      } catch (b) {
        Le(t, t.return, b);
      }
      if (t === e) {
        ee = null;
        break;
      }
      var S = t.sibling;
      if (S !== null) {
        (S.return = t.return), (ee = S);
        break;
      }
      ee = t.return;
    }
  }
  var Zm = Math.ceil,
    Vs = F.ReactCurrentDispatcher,
    Jl = F.ReactCurrentOwner,
    Rt = F.ReactCurrentBatchConfig,
    Ee = 0,
    We = null,
    Be = null,
    Ye = 0,
    xt = 0,
    Lr = Rn(0),
    Ue = 0,
    jo = null,
    or = 0,
    Hs = 0,
    ea = 0,
    Oo = null,
    ct = null,
    ta = 0,
    Ir = 1 / 0,
    mn = null,
    Ws = !1,
    na = null,
    Ln = null,
    Qs = !1,
    In = null,
    Ks = 0,
    _o = 0,
    ra = null,
    qs = -1,
    Ys = 0;
  function rt() {
    return (Ee & 6) !== 0 ? De() : qs !== -1 ? qs : (qs = De());
  }
  function Dn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (Ee & 2) !== 0 && Ye !== 0
      ? Ye & -Ye
      : Lm.transition !== null
      ? (Ys === 0 && (Ys = yu()), Ys)
      : ((e = Pe),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Nu(e.type))),
        e);
  }
  function Ft(e, t, r, s) {
    if (50 < _o) throw ((_o = 0), (ra = null), Error(i(185)));
    to(e, r, s),
      ((Ee & 2) === 0 || e !== We) &&
        (e === We && ((Ee & 2) === 0 && (Hs |= r), Ue === 4 && zn(e, Ye)),
        dt(e, s),
        r === 1 &&
          Ee === 0 &&
          (t.mode & 1) === 0 &&
          ((Ir = De() + 500), ks && On()));
  }
  function dt(e, t) {
    var r = e.callbackNode;
    Lh(e, t);
    var s = os(e, e === We ? Ye : 0);
    if (s === 0)
      r !== null && mu(r), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = s & -s), e.callbackPriority !== t)) {
      if ((r != null && mu(r), t === 1))
        e.tag === 0 ? Mm(Nd.bind(null, e)) : fc(Nd.bind(null, e)),
          jm(function () {
            (Ee & 6) === 0 && On();
          }),
          (r = null);
      else {
        switch (xu(s)) {
          case 1:
            r = Ii;
            break;
          case 4:
            r = gu;
            break;
          case 16:
            r = es;
            break;
          case 536870912:
            r = vu;
            break;
          default:
            r = es;
        }
        r = Ld(r, Pd.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = r);
    }
  }
  function Pd(e, t) {
    if (((qs = -1), (Ys = 0), (Ee & 6) !== 0)) throw Error(i(327));
    var r = e.callbackNode;
    if (Dr() && e.callbackNode !== r) return null;
    var s = os(e, e === We ? Ye : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t) t = Gs(e, s);
    else {
      t = s;
      var l = Ee;
      Ee |= 2;
      var u = Rd();
      (We !== e || Ye !== t) && ((mn = null), (Ir = De() + 500), ir(e, t));
      do
        try {
          tg();
          break;
        } catch (S) {
          Td(e, S);
        }
      while (!0);
      Sl(),
        (Vs.current = u),
        (Ee = l),
        Be !== null ? (t = 0) : ((We = null), (Ye = 0), (t = Ue));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = Di(e)), l !== 0 && ((s = l), (t = oa(e, l)))),
        t === 1)
      )
        throw ((r = jo), ir(e, 0), zn(e, s), dt(e, De()), r);
      if (t === 6) zn(e, s);
      else {
        if (
          ((l = e.current.alternate),
          (s & 30) === 0 &&
            !Jm(l) &&
            ((t = Gs(e, s)),
            t === 2 && ((u = Di(e)), u !== 0 && ((s = u), (t = oa(e, u)))),
            t === 1))
        )
          throw ((r = jo), ir(e, 0), zn(e, s), dt(e, De()), r);
        switch (((e.finishedWork = l), (e.finishedLanes = s), t)) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            lr(e, ct, mn);
            break;
          case 3:
            if (
              (zn(e, s),
              (s & 130023424) === s && ((t = ta + 500 - De()), 10 < t))
            ) {
              if (os(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & s) !== s)) {
                rt(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = cl(lr.bind(null, e, ct, mn), t);
              break;
            }
            lr(e, ct, mn);
            break;
          case 4:
            if ((zn(e, s), (s & 4194240) === s)) break;
            for (t = e.eventTimes, l = -1; 0 < s; ) {
              var p = 31 - At(s);
              (u = 1 << p), (p = t[p]), p > l && (l = p), (s &= ~u);
            }
            if (
              ((s = l),
              (s = De() - s),
              (s =
                (120 > s
                  ? 120
                  : 480 > s
                  ? 480
                  : 1080 > s
                  ? 1080
                  : 1920 > s
                  ? 1920
                  : 3e3 > s
                  ? 3e3
                  : 4320 > s
                  ? 4320
                  : 1960 * Zm(s / 1960)) - s),
              10 < s)
            ) {
              e.timeoutHandle = cl(lr.bind(null, e, ct, mn), s);
              break;
            }
            lr(e, ct, mn);
            break;
          case 5:
            lr(e, ct, mn);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return dt(e, De()), e.callbackNode === r ? Pd.bind(null, e) : null;
  }
  function oa(e, t) {
    var r = Oo;
    return (
      e.current.memoizedState.isDehydrated && (ir(e, t).flags |= 256),
      (e = Gs(e, t)),
      e !== 2 && ((t = ct), (ct = r), t !== null && sa(t)),
      e
    );
  }
  function sa(e) {
    ct === null ? (ct = e) : ct.push.apply(ct, e);
  }
  function Jm(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var s = 0; s < r.length; s++) {
            var l = r[s],
              u = l.getSnapshot;
            l = l.value;
            try {
              if (!Mt(u(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
        (r.return = t), (t = r);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function zn(e, t) {
    for (
      t &= ~ea,
        t &= ~Hs,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var r = 31 - At(t),
        s = 1 << r;
      (e[r] = -1), (t &= ~s);
    }
  }
  function Nd(e) {
    if ((Ee & 6) !== 0) throw Error(i(327));
    Dr();
    var t = os(e, 0);
    if ((t & 1) === 0) return dt(e, De()), null;
    var r = Gs(e, t);
    if (e.tag !== 0 && r === 2) {
      var s = Di(e);
      s !== 0 && ((t = s), (r = oa(e, s)));
    }
    if (r === 1) throw ((r = jo), ir(e, 0), zn(e, t), dt(e, De()), r);
    if (r === 6) throw Error(i(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      lr(e, ct, mn),
      dt(e, De()),
      null
    );
  }
  function ia(e, t) {
    var r = Ee;
    Ee |= 1;
    try {
      return e(t);
    } finally {
      (Ee = r), Ee === 0 && ((Ir = De() + 500), ks && On());
    }
  }
  function sr(e) {
    In !== null && In.tag === 0 && (Ee & 6) === 0 && Dr();
    var t = Ee;
    Ee |= 1;
    var r = Rt.transition,
      s = Pe;
    try {
      if (((Rt.transition = null), (Pe = 1), e)) return e();
    } finally {
      (Pe = s), (Rt.transition = r), (Ee = t), (Ee & 6) === 0 && On();
    }
  }
  function la() {
    (xt = Lr.current), je(Lr);
  }
  function ir(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), Rm(r)), Be !== null))
      for (r = Be.return; r !== null; ) {
        var s = r;
        switch ((gl(s), s.tag)) {
          case 1:
            (s = s.type.childContextTypes), s != null && Ss();
            break;
          case 3:
            _r(), je(lt), je(Ge), Rl();
            break;
          case 5:
            Nl(s);
            break;
          case 4:
            _r();
            break;
          case 13:
            je(Ae);
            break;
          case 19:
            je(Ae);
            break;
          case 10:
            El(s.type._context);
            break;
          case 22:
          case 23:
            la();
        }
        r = r.return;
      }
    if (
      ((We = e),
      (Be = e = Fn(e.current, null)),
      (Ye = xt = t),
      (Ue = 0),
      (jo = null),
      (ea = Hs = or = 0),
      (ct = Oo = null),
      tr !== null)
    ) {
      for (t = 0; t < tr.length; t++)
        if (((r = tr[t]), (s = r.interleaved), s !== null)) {
          r.interleaved = null;
          var l = s.next,
            u = r.pending;
          if (u !== null) {
            var p = u.next;
            (u.next = l), (s.next = p);
          }
          r.pending = s;
        }
      tr = null;
    }
    return e;
  }
  function Td(e, t) {
    do {
      var r = Be;
      try {
        if ((Sl(), (As.current = Ds), Ms)) {
          for (var s = Me.memoizedState; s !== null; ) {
            var l = s.queue;
            l !== null && (l.pending = null), (s = s.next);
          }
          Ms = !1;
        }
        if (
          ((rr = 0),
          (He = $e = Me = null),
          (Co = !1),
          (bo = 0),
          (Jl.current = null),
          r === null || r.return === null)
        ) {
          (Ue = 1), (jo = t), (Be = null);
          break;
        }
        e: {
          var u = e,
            p = r.return,
            S = r,
            b = t;
          if (
            ((t = Ye),
            (S.flags |= 32768),
            b !== null && typeof b == "object" && typeof b.then == "function")
          ) {
            var _ = b,
              $ = S,
              U = $.tag;
            if (($.mode & 1) === 0 && (U === 0 || U === 11 || U === 15)) {
              var B = $.alternate;
              B
                ? (($.updateQueue = B.updateQueue),
                  ($.memoizedState = B.memoizedState),
                  ($.lanes = B.lanes))
                : (($.updateQueue = null), ($.memoizedState = null));
            }
            var X = Jc(p);
            if (X !== null) {
              (X.flags &= -257),
                ed(X, p, S, u, t),
                X.mode & 1 && Zc(u, _, t),
                (t = X),
                (b = _);
              var te = t.updateQueue;
              if (te === null) {
                var ne = new Set();
                ne.add(b), (t.updateQueue = ne);
              } else te.add(b);
              break e;
            } else {
              if ((t & 1) === 0) {
                Zc(u, _, t), aa();
                break e;
              }
              b = Error(i(426));
            }
          } else if (_e && S.mode & 1) {
            var ze = Jc(p);
            if (ze !== null) {
              (ze.flags & 65536) === 0 && (ze.flags |= 256),
                ed(ze, p, S, u, t),
                xl(Ar(b, S));
              break e;
            }
          }
          (u = b = Ar(b, S)),
            Ue !== 4 && (Ue = 2),
            Oo === null ? (Oo = [u]) : Oo.push(u),
            (u = p);
          do {
            switch (u.tag) {
              case 3:
                (u.flags |= 65536), (t &= -t), (u.lanes |= t);
                var R = Gc(u, b, t);
                kc(u, R);
                break e;
              case 1:
                S = b;
                var P = u.type,
                  O = u.stateNode;
                if (
                  (u.flags & 128) === 0 &&
                  (typeof P.getDerivedStateFromError == "function" ||
                    (O !== null &&
                      typeof O.componentDidCatch == "function" &&
                      (Ln === null || !Ln.has(O))))
                ) {
                  (u.flags |= 65536), (t &= -t), (u.lanes |= t);
                  var W = Xc(u, S, t);
                  kc(u, W);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        Od(r);
      } catch (oe) {
        (t = oe), Be === r && r !== null && (Be = r = r.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Rd() {
    var e = Vs.current;
    return (Vs.current = Ds), e === null ? Ds : e;
  }
  function aa() {
    (Ue === 0 || Ue === 3 || Ue === 2) && (Ue = 4),
      We === null ||
        ((or & 268435455) === 0 && (Hs & 268435455) === 0) ||
        zn(We, Ye);
  }
  function Gs(e, t) {
    var r = Ee;
    Ee |= 2;
    var s = Rd();
    (We !== e || Ye !== t) && ((mn = null), ir(e, t));
    do
      try {
        eg();
        break;
      } catch (l) {
        Td(e, l);
      }
    while (!0);
    if ((Sl(), (Ee = r), (Vs.current = s), Be !== null)) throw Error(i(261));
    return (We = null), (Ye = 0), Ue;
  }
  function eg() {
    for (; Be !== null; ) jd(Be);
  }
  function tg() {
    for (; Be !== null && !Ph(); ) jd(Be);
  }
  function jd(e) {
    var t = Md(e.alternate, e, xt);
    (e.memoizedProps = e.pendingProps),
      t === null ? Od(e) : (Be = t),
      (Jl.current = null);
  }
  function Od(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((r = Km(r, t, xt)), r !== null)) {
          Be = r;
          return;
        }
      } else {
        if (((r = qm(r, t)), r !== null)) {
          (r.flags &= 32767), (Be = r);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Ue = 6), (Be = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Be = t;
        return;
      }
      Be = t = e;
    } while (t !== null);
    Ue === 0 && (Ue = 5);
  }
  function lr(e, t, r) {
    var s = Pe,
      l = Rt.transition;
    try {
      (Rt.transition = null), (Pe = 1), ng(e, t, r, s);
    } finally {
      (Rt.transition = l), (Pe = s);
    }
    return null;
  }
  function ng(e, t, r, s) {
    do Dr();
    while (In !== null);
    if ((Ee & 6) !== 0) throw Error(i(327));
    r = e.finishedWork;
    var l = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
      throw Error(i(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var u = r.lanes | r.childLanes;
    if (
      (Ih(e, u),
      e === We && ((Be = We = null), (Ye = 0)),
      ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
        Qs ||
        ((Qs = !0),
        Ld(es, function () {
          return Dr(), null;
        })),
      (u = (r.flags & 15990) !== 0),
      (r.subtreeFlags & 15990) !== 0 || u)
    ) {
      (u = Rt.transition), (Rt.transition = null);
      var p = Pe;
      Pe = 1;
      var S = Ee;
      (Ee |= 4),
        (Jl.current = null),
        Gm(e, r),
        Sd(r, e),
        Em(al),
        (ls = !!ll),
        (al = ll = null),
        (e.current = r),
        Xm(r),
        Nh(),
        (Ee = S),
        (Pe = p),
        (Rt.transition = u);
    } else e.current = r;
    if (
      (Qs && ((Qs = !1), (In = e), (Ks = l)),
      (u = e.pendingLanes),
      u === 0 && (Ln = null),
      jh(r.stateNode),
      dt(e, De()),
      t !== null)
    )
      for (s = e.onRecoverableError, r = 0; r < t.length; r++)
        (l = t[r]), s(l.value, { componentStack: l.stack, digest: l.digest });
    if (Ws) throw ((Ws = !1), (e = na), (na = null), e);
    return (
      (Ks & 1) !== 0 && e.tag !== 0 && Dr(),
      (u = e.pendingLanes),
      (u & 1) !== 0 ? (e === ra ? _o++ : ((_o = 0), (ra = e))) : (_o = 0),
      On(),
      null
    );
  }
  function Dr() {
    if (In !== null) {
      var e = xu(Ks),
        t = Rt.transition,
        r = Pe;
      try {
        if (((Rt.transition = null), (Pe = 16 > e ? 16 : e), In === null))
          var s = !1;
        else {
          if (((e = In), (In = null), (Ks = 0), (Ee & 6) !== 0))
            throw Error(i(331));
          var l = Ee;
          for (Ee |= 4, ee = e.current; ee !== null; ) {
            var u = ee,
              p = u.child;
            if ((ee.flags & 16) !== 0) {
              var S = u.deletions;
              if (S !== null) {
                for (var b = 0; b < S.length; b++) {
                  var _ = S[b];
                  for (ee = _; ee !== null; ) {
                    var $ = ee;
                    switch ($.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ro(8, $, u);
                    }
                    var U = $.child;
                    if (U !== null) (U.return = $), (ee = U);
                    else
                      for (; ee !== null; ) {
                        $ = ee;
                        var B = $.sibling,
                          X = $.return;
                        if ((gd($), $ === _)) {
                          ee = null;
                          break;
                        }
                        if (B !== null) {
                          (B.return = X), (ee = B);
                          break;
                        }
                        ee = X;
                      }
                  }
                }
                var te = u.alternate;
                if (te !== null) {
                  var ne = te.child;
                  if (ne !== null) {
                    te.child = null;
                    do {
                      var ze = ne.sibling;
                      (ne.sibling = null), (ne = ze);
                    } while (ne !== null);
                  }
                }
                ee = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && p !== null)
              (p.return = u), (ee = p);
            else
              e: for (; ee !== null; ) {
                if (((u = ee), (u.flags & 2048) !== 0))
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ro(9, u, u.return);
                  }
                var R = u.sibling;
                if (R !== null) {
                  (R.return = u.return), (ee = R);
                  break e;
                }
                ee = u.return;
              }
          }
          var P = e.current;
          for (ee = P; ee !== null; ) {
            p = ee;
            var O = p.child;
            if ((p.subtreeFlags & 2064) !== 0 && O !== null)
              (O.return = p), (ee = O);
            else
              e: for (p = P; ee !== null; ) {
                if (((S = ee), (S.flags & 2048) !== 0))
                  try {
                    switch (S.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Us(9, S);
                    }
                  } catch (oe) {
                    Le(S, S.return, oe);
                  }
                if (S === p) {
                  ee = null;
                  break e;
                }
                var W = S.sibling;
                if (W !== null) {
                  (W.return = S.return), (ee = W);
                  break e;
                }
                ee = S.return;
              }
          }
          if (
            ((Ee = l),
            On(),
            Xt && typeof Xt.onPostCommitFiberRoot == "function")
          )
            try {
              Xt.onPostCommitFiberRoot(ts, e);
            } catch {}
          s = !0;
        }
        return s;
      } finally {
        (Pe = r), (Rt.transition = t);
      }
    }
    return !1;
  }
  function _d(e, t, r) {
    (t = Ar(r, t)),
      (t = Gc(e, t, 1)),
      (e = An(e, t, 1)),
      (t = rt()),
      e !== null && (to(e, 1, t), dt(e, t));
  }
  function Le(e, t, r) {
    if (e.tag === 3) _d(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          _d(t, e, r);
          break;
        } else if (t.tag === 1) {
          var s = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof s.componentDidCatch == "function" &&
              (Ln === null || !Ln.has(s)))
          ) {
            (e = Ar(r, e)),
              (e = Xc(t, e, 1)),
              (t = An(t, e, 1)),
              (e = rt()),
              t !== null && (to(t, 1, e), dt(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function rg(e, t, r) {
    var s = e.pingCache;
    s !== null && s.delete(t),
      (t = rt()),
      (e.pingedLanes |= e.suspendedLanes & r),
      We === e &&
        (Ye & r) === r &&
        (Ue === 4 || (Ue === 3 && (Ye & 130023424) === Ye && 500 > De() - ta)
          ? ir(e, 0)
          : (ea |= r)),
      dt(e, t);
  }
  function Ad(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = rs), (rs <<= 1), (rs & 130023424) === 0 && (rs = 4194304)));
    var r = rt();
    (e = fn(e, t)), e !== null && (to(e, t, r), dt(e, r));
  }
  function og(e) {
    var t = e.memoizedState,
      r = 0;
    t !== null && (r = t.retryLane), Ad(e, r);
  }
  function sg(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var s = e.stateNode,
          l = e.memoizedState;
        l !== null && (r = l.retryLane);
        break;
      case 19:
        s = e.stateNode;
        break;
      default:
        throw Error(i(314));
    }
    s !== null && s.delete(t), Ad(e, r);
  }
  var Md;
  Md = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || lt.current) ut = !0;
      else {
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0)
          return (ut = !1), Qm(e, t, r);
        ut = (e.flags & 131072) !== 0;
      }
    else (ut = !1), _e && (t.flags & 1048576) !== 0 && pc(t, bs, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var s = t.type;
        Bs(e, t), (e = t.pendingProps);
        var l = br(t, Ge.current);
        Or(t, r), (l = _l(null, t, s, e, l, r));
        var u = Al();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              at(s) ? ((u = !0), Es(t)) : (u = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              bl(t),
              (l.updater = zs),
              (t.stateNode = l),
              (l._reactInternals = t),
              Fl(t, s, e, r),
              (t = Vl(null, t, s, !0, u, r)))
            : ((t.tag = 0), _e && u && ml(t), nt(null, t, l, r), (t = t.child)),
          t
        );
      case 16:
        s = t.elementType;
        e: {
          switch (
            (Bs(e, t),
            (e = t.pendingProps),
            (l = s._init),
            (s = l(s._payload)),
            (t.type = s),
            (l = t.tag = lg(s)),
            (e = It(s, e)),
            l)
          ) {
            case 0:
              t = Ul(null, t, s, e, r);
              break e;
            case 1:
              t = id(null, t, s, e, r);
              break e;
            case 11:
              t = td(null, t, s, e, r);
              break e;
            case 14:
              t = nd(null, t, s, It(s.type, e), r);
              break e;
          }
          throw Error(i(306, s, ""));
        }
        return t;
      case 0:
        return (
          (s = t.type),
          (l = t.pendingProps),
          (l = t.elementType === s ? l : It(s, l)),
          Ul(e, t, s, l, r)
        );
      case 1:
        return (
          (s = t.type),
          (l = t.pendingProps),
          (l = t.elementType === s ? l : It(s, l)),
          id(e, t, s, l, r)
        );
      case 3:
        e: {
          if ((ld(t), e === null)) throw Error(i(387));
          (s = t.pendingProps),
            (u = t.memoizedState),
            (l = u.element),
            Ec(e, t),
            Os(t, s, null, r);
          var p = t.memoizedState;
          if (((s = p.element), u.isDehydrated))
            if (
              ((u = {
                element: s,
                isDehydrated: !1,
                cache: p.cache,
                pendingSuspenseBoundaries: p.pendingSuspenseBoundaries,
                transitions: p.transitions,
              }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              (l = Ar(Error(i(423)), t)), (t = ad(e, t, s, r, l));
              break e;
            } else if (s !== l) {
              (l = Ar(Error(i(424)), t)), (t = ad(e, t, s, r, l));
              break e;
            } else
              for (
                yt = Tn(t.stateNode.containerInfo.firstChild),
                  vt = t,
                  _e = !0,
                  Lt = null,
                  r = wc(t, null, s, r),
                  t.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
          else {
            if ((Tr(), s === l)) {
              t = hn(e, t, r);
              break e;
            }
            nt(e, t, s, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          bc(t),
          e === null && yl(t),
          (s = t.type),
          (l = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (p = l.children),
          ul(s, l) ? (p = null) : u !== null && ul(s, u) && (t.flags |= 32),
          sd(e, t),
          nt(e, t, p, r),
          t.child
        );
      case 6:
        return e === null && yl(t), null;
      case 13:
        return ud(e, t, r);
      case 4:
        return (
          Pl(t, t.stateNode.containerInfo),
          (s = t.pendingProps),
          e === null ? (t.child = Rr(t, null, s, r)) : nt(e, t, s, r),
          t.child
        );
      case 11:
        return (
          (s = t.type),
          (l = t.pendingProps),
          (l = t.elementType === s ? l : It(s, l)),
          td(e, t, s, l, r)
        );
      case 7:
        return nt(e, t, t.pendingProps, r), t.child;
      case 8:
        return nt(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return nt(e, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          if (
            ((s = t.type._context),
            (l = t.pendingProps),
            (u = t.memoizedProps),
            (p = l.value),
            Te(Ts, s._currentValue),
            (s._currentValue = p),
            u !== null)
          )
            if (Mt(u.value, p)) {
              if (u.children === l.children && !lt.current) {
                t = hn(e, t, r);
                break e;
              }
            } else
              for (u = t.child, u !== null && (u.return = t); u !== null; ) {
                var S = u.dependencies;
                if (S !== null) {
                  p = u.child;
                  for (var b = S.firstContext; b !== null; ) {
                    if (b.context === s) {
                      if (u.tag === 1) {
                        (b = pn(-1, r & -r)), (b.tag = 2);
                        var _ = u.updateQueue;
                        if (_ !== null) {
                          _ = _.shared;
                          var $ = _.pending;
                          $ === null
                            ? (b.next = b)
                            : ((b.next = $.next), ($.next = b)),
                            (_.pending = b);
                        }
                      }
                      (u.lanes |= r),
                        (b = u.alternate),
                        b !== null && (b.lanes |= r),
                        kl(u.return, r, t),
                        (S.lanes |= r);
                      break;
                    }
                    b = b.next;
                  }
                } else if (u.tag === 10) p = u.type === t.type ? null : u.child;
                else if (u.tag === 18) {
                  if (((p = u.return), p === null)) throw Error(i(341));
                  (p.lanes |= r),
                    (S = p.alternate),
                    S !== null && (S.lanes |= r),
                    kl(p, r, t),
                    (p = u.sibling);
                } else p = u.child;
                if (p !== null) p.return = u;
                else
                  for (p = u; p !== null; ) {
                    if (p === t) {
                      p = null;
                      break;
                    }
                    if (((u = p.sibling), u !== null)) {
                      (u.return = p.return), (p = u);
                      break;
                    }
                    p = p.return;
                  }
                u = p;
              }
          nt(e, t, l.children, r), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (s = t.pendingProps.children),
          Or(t, r),
          (l = Nt(l)),
          (s = s(l)),
          (t.flags |= 1),
          nt(e, t, s, r),
          t.child
        );
      case 14:
        return (
          (s = t.type),
          (l = It(s, t.pendingProps)),
          (l = It(s.type, l)),
          nd(e, t, s, l, r)
        );
      case 15:
        return rd(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (s = t.type),
          (l = t.pendingProps),
          (l = t.elementType === s ? l : It(s, l)),
          Bs(e, t),
          (t.tag = 1),
          at(s) ? ((e = !0), Es(t)) : (e = !1),
          Or(t, r),
          qc(t, s, l),
          Fl(t, s, l, r),
          Vl(null, t, s, !0, e, r)
        );
      case 19:
        return dd(e, t, r);
      case 22:
        return od(e, t, r);
    }
    throw Error(i(156, t.tag));
  };
  function Ld(e, t) {
    return hu(e, t);
  }
  function ig(e, t, r, s) {
    (this.tag = e),
      (this.key = r),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = s),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function jt(e, t, r, s) {
    return new ig(e, t, r, s);
  }
  function ua(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function lg(e) {
    if (typeof e == "function") return ua(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Z)) return 11;
      if (e === me) return 14;
    }
    return 2;
  }
  function Fn(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = jt(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 14680064),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      r
    );
  }
  function Xs(e, t, r, s, l, u) {
    var p = 2;
    if (((s = e), typeof e == "function")) ua(e) && (p = 1);
    else if (typeof e == "string") p = 5;
    else
      e: switch (e) {
        case Y:
          return ar(r.children, l, u, t);
        case ce:
          (p = 8), (l |= 8);
          break;
        case ge:
          return (
            (e = jt(12, r, t, l | 2)), (e.elementType = ge), (e.lanes = u), e
          );
        case he:
          return (e = jt(13, r, t, l)), (e.elementType = he), (e.lanes = u), e;
        case q:
          return (e = jt(19, r, t, l)), (e.elementType = q), (e.lanes = u), e;
        case re:
          return Zs(r, l, u, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case pe:
                p = 10;
                break e;
              case xe:
                p = 9;
                break e;
              case Z:
                p = 11;
                break e;
              case me:
                p = 14;
                break e;
              case se:
                (p = 16), (s = null);
                break e;
            }
          throw Error(i(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = jt(p, r, t, l)), (t.elementType = e), (t.type = s), (t.lanes = u), t
    );
  }
  function ar(e, t, r, s) {
    return (e = jt(7, e, s, t)), (e.lanes = r), e;
  }
  function Zs(e, t, r, s) {
    return (
      (e = jt(22, e, s, t)),
      (e.elementType = re),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function ca(e, t, r) {
    return (e = jt(6, e, null, t)), (e.lanes = r), e;
  }
  function da(e, t, r) {
    return (
      (t = jt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function ag(e, t, r, s, l) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = zi(0)),
      (this.expirationTimes = zi(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = zi(0)),
      (this.identifierPrefix = s),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function fa(e, t, r, s, l, u, p, S, b) {
    return (
      (e = new ag(e, t, r, S, b)),
      t === 1 ? ((t = 1), u === !0 && (t |= 8)) : (t = 0),
      (u = jt(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (u.memoizedState = {
        element: s,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      bl(u),
      e
    );
  }
  function ug(e, t, r) {
    var s =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: K,
      key: s == null ? null : "" + s,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function Id(e) {
    if (!e) return jn;
    e = e._reactInternals;
    e: {
      if (Gn(e) !== e || e.tag !== 1) throw Error(i(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (at(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(i(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (at(r)) return cc(e, r, t);
    }
    return t;
  }
  function Dd(e, t, r, s, l, u, p, S, b) {
    return (
      (e = fa(r, s, !0, e, l, u, p, S, b)),
      (e.context = Id(null)),
      (r = e.current),
      (s = rt()),
      (l = Dn(r)),
      (u = pn(s, l)),
      (u.callback = t ?? null),
      An(r, u, l),
      (e.current.lanes = l),
      to(e, l, s),
      dt(e, s),
      e
    );
  }
  function Js(e, t, r, s) {
    var l = t.current,
      u = rt(),
      p = Dn(l);
    return (
      (r = Id(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = pn(u, p)),
      (t.payload = { element: e }),
      (s = s === void 0 ? null : s),
      s !== null && (t.callback = s),
      (e = An(l, t, p)),
      e !== null && (Ft(e, l, p, u), js(e, l, p)),
      p
    );
  }
  function ei(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function zd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function pa(e, t) {
    zd(e, t), (e = e.alternate) && zd(e, t);
  }
  function cg() {
    return null;
  }
  var Fd =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function ha(e) {
    this._internalRoot = e;
  }
  (ti.prototype.render = ha.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(i(409));
      Js(e, t, null, null);
    }),
    (ti.prototype.unmount = ha.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          sr(function () {
            Js(null, e, null, null);
          }),
            (t[an] = null);
        }
      });
  function ti(e) {
    this._internalRoot = e;
  }
  ti.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Eu();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < bn.length && t !== 0 && t < bn[r].priority; r++);
      bn.splice(r, 0, e), r === 0 && bu(e);
    }
  };
  function ma(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function ni(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Bd() {}
  function dg(e, t, r, s, l) {
    if (l) {
      if (typeof s == "function") {
        var u = s;
        s = function () {
          var _ = ei(p);
          u.call(_);
        };
      }
      var p = Dd(t, s, e, 0, null, !1, !1, "", Bd);
      return (
        (e._reactRootContainer = p),
        (e[an] = p.current),
        go(e.nodeType === 8 ? e.parentNode : e),
        sr(),
        p
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof s == "function") {
      var S = s;
      s = function () {
        var _ = ei(b);
        S.call(_);
      };
    }
    var b = fa(e, 0, !1, null, null, !1, !1, "", Bd);
    return (
      (e._reactRootContainer = b),
      (e[an] = b.current),
      go(e.nodeType === 8 ? e.parentNode : e),
      sr(function () {
        Js(t, b, r, s);
      }),
      b
    );
  }
  function ri(e, t, r, s, l) {
    var u = r._reactRootContainer;
    if (u) {
      var p = u;
      if (typeof l == "function") {
        var S = l;
        l = function () {
          var b = ei(p);
          S.call(b);
        };
      }
      Js(t, p, e, l);
    } else p = dg(r, t, e, l, s);
    return ei(p);
  }
  (wu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = eo(t.pendingLanes);
          r !== 0 &&
            (Fi(t, r | 1),
            dt(t, De()),
            (Ee & 6) === 0 && ((Ir = De() + 500), On()));
        }
        break;
      case 13:
        sr(function () {
          var s = fn(e, 1);
          if (s !== null) {
            var l = rt();
            Ft(s, e, 1, l);
          }
        }),
          pa(e, 1);
    }
  }),
    (Bi = function (e) {
      if (e.tag === 13) {
        var t = fn(e, 134217728);
        if (t !== null) {
          var r = rt();
          Ft(t, e, 134217728, r);
        }
        pa(e, 134217728);
      }
    }),
    (Su = function (e) {
      if (e.tag === 13) {
        var t = Dn(e),
          r = fn(e, t);
        if (r !== null) {
          var s = rt();
          Ft(r, e, t, s);
        }
        pa(e, t);
      }
    }),
    (Eu = function () {
      return Pe;
    }),
    (ku = function (e, t) {
      var r = Pe;
      try {
        return (Pe = e), t();
      } finally {
        Pe = r;
      }
    }),
    (mr = function (e, t, r) {
      switch (t) {
        case "input":
          if ((Yr(e, r), (t = r.name), r.type === "radio" && t != null)) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < r.length;
              t++
            ) {
              var s = r[t];
              if (s !== e && s.form === e.form) {
                var l = ws(s);
                if (!l) throw Error(i(90));
                xn(s), Yr(s, l);
              }
            }
          }
          break;
        case "textarea":
          Qo(e, r);
          break;
        case "select":
          (t = r.value), t != null && Ct(e, !!r.multiple, t, !1);
      }
    }),
    (be = ia),
    (Ne = sr);
  var fg = { usingClientEntryPoint: !1, Events: [xo, kr, ws, Xo, fe, ia] },
    Ao = {
      findFiberByHostInstance: Xn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    pg = {
      bundleType: Ao.bundleType,
      version: Ao.version,
      rendererPackageName: Ao.rendererPackageName,
      rendererConfig: Ao.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: F.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = fu(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Ao.findFiberByHostInstance || cg,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var oi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!oi.isDisabled && oi.supportsFiber)
      try {
        (ts = oi.inject(pg)), (Xt = oi);
      } catch {}
  }
  return (
    (ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fg),
    (ft.createPortal = function (e, t) {
      var r =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ma(t)) throw Error(i(200));
      return ug(e, t, null, r);
    }),
    (ft.createRoot = function (e, t) {
      if (!ma(e)) throw Error(i(299));
      var r = !1,
        s = "",
        l = Fd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = fa(e, 1, !1, null, null, r, !1, s, l)),
        (e[an] = t.current),
        go(e.nodeType === 8 ? e.parentNode : e),
        new ha(t)
      );
    }),
    (ft.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(i(188))
          : ((e = Object.keys(e).join(",")), Error(i(268, e)));
      return (e = fu(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (ft.flushSync = function (e) {
      return sr(e);
    }),
    (ft.hydrate = function (e, t, r) {
      if (!ni(t)) throw Error(i(200));
      return ri(null, e, t, !0, r);
    }),
    (ft.hydrateRoot = function (e, t, r) {
      if (!ma(e)) throw Error(i(405));
      var s = (r != null && r.hydratedSources) || null,
        l = !1,
        u = "",
        p = Fd;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (l = !0),
          r.identifierPrefix !== void 0 && (u = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (p = r.onRecoverableError)),
        (t = Dd(t, null, e, 1, r ?? null, l, !1, u, p)),
        (e[an] = t.current),
        go(e),
        s)
      )
        for (e = 0; e < s.length; e++)
          (r = s[e]),
            (l = r._getVersion),
            (l = l(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, l])
              : t.mutableSourceEagerHydrationData.push(r, l);
      return new ti(t);
    }),
    (ft.render = function (e, t, r) {
      if (!ni(t)) throw Error(i(200));
      return ri(null, e, t, !1, r);
    }),
    (ft.unmountComponentAtNode = function (e) {
      if (!ni(e)) throw Error(i(40));
      return e._reactRootContainer
        ? (sr(function () {
            ri(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[an] = null);
            });
          }),
          !0)
        : !1;
    }),
    (ft.unstable_batchedUpdates = ia),
    (ft.unstable_renderSubtreeIntoContainer = function (e, t, r, s) {
      if (!ni(r)) throw Error(i(200));
      if (e == null || e._reactInternals === void 0) throw Error(i(38));
      return ri(e, t, r, !1, s);
    }),
    (ft.version = "18.3.1-next-f1338f8080-20240426"),
    ft
  );
}
var qd;
function If() {
  if (qd) return ya.exports;
  qd = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (o) {
        console.error(o);
      }
  }
  return n(), (ya.exports = Sg()), ya.exports;
}
var Yd;
function Eg() {
  if (Yd) return si;
  Yd = 1;
  var n = If();
  return (si.createRoot = n.createRoot), (si.hydrateRoot = n.hydrateRoot), si;
}
var kg = Eg(),
  E = Va();
const Q = Lf(E),
  Df = mg({ __proto__: null, default: Q }, [E]);
var Gd = ["light", "dark"],
  Cg = "(prefers-color-scheme: dark)",
  bg = E.createContext(void 0),
  Pg = { setTheme: (n) => {}, themes: [] },
  Ng = () => {
    var n;
    return (n = E.useContext(bg)) != null ? n : Pg;
  };
E.memo(
  ({
    forcedTheme: n,
    storageKey: o,
    attribute: i,
    enableSystem: a,
    enableColorScheme: c,
    defaultTheme: d,
    value: f,
    attrs: h,
    nonce: m,
  }) => {
    let g = d === "system",
      x =
        i === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${h
              .map((j) => `'${j}'`)
              .join(",")})`};`
          : `var d=document.documentElement,n='${i}',s='setAttribute';`,
      w = c
        ? Gd.includes(d) && d
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${d}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      T = (j, C = !1, k = !0) => {
        let A = f ? f[j] : j,
          L = C ? j + "|| ''" : `'${A}'`,
          D = "";
        return (
          c &&
            k &&
            !C &&
            Gd.includes(j) &&
            (D += `d.style.colorScheme = '${j}';`),
          i === "class"
            ? C || A
              ? (D += `c.add(${L})`)
              : (D += "null")
            : A && (D += `d[s](n,${L})`),
          D
        );
      },
      y = n
        ? `!function(){${x}${T(n)}}()`
        : a
        ? `!function(){try{${x}var e=localStorage.getItem('${o}');if('system'===e||(!e&&${g})){var t='${Cg}',m=window.matchMedia(t);if(m.media!==t||m.matches){${T(
            "dark"
          )}}else{${T("light")}}}else if(e){${
            f ? `var x=${JSON.stringify(f)};` : ""
          }${T(f ? "x[e]" : "e", !0)}}${
            g ? "" : "else{" + T(d, !1, !1) + "}"
          }${w}}catch(e){}}()`
        : `!function(){try{${x}var e=localStorage.getItem('${o}');if(e){${
            f ? `var x=${JSON.stringify(f)};` : ""
          }${T(f ? "x[e]" : "e", !0)}}else{${T(
            d,
            !1,
            !1
          )};}${w}}catch(t){}}();`;
    return E.createElement("script", {
      nonce: m,
      dangerouslySetInnerHTML: { __html: y },
    });
  }
);
var Ei = If();
const zf = Lf(Ei);
var Tg = (n) => {
    switch (n) {
      case "success":
        return Og;
      case "info":
        return Ag;
      case "warning":
        return _g;
      case "error":
        return Mg;
      default:
        return null;
    }
  },
  Rg = Array(12).fill(0),
  jg = ({ visible: n, className: o }) =>
    Q.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", o].filter(Boolean).join(" "),
        "data-visible": n,
      },
      Q.createElement(
        "div",
        { className: "sonner-spinner" },
        Rg.map((i, a) =>
          Q.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${a}`,
          })
        )
      )
    ),
  Og = Q.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    Q.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  _g = Q.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    Q.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  Ag = Q.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    Q.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  Mg = Q.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    Q.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  Lg = Q.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    Q.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    Q.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  Ig = () => {
    let [n, o] = Q.useState(document.hidden);
    return (
      Q.useEffect(() => {
        let i = () => {
          o(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", i),
          () => window.removeEventListener("visibilitychange", i)
        );
      }, []),
      n
    );
  },
  Ta = 1,
  Dg = class {
    constructor() {
      (this.subscribe = (n) => (
        this.subscribers.push(n),
        () => {
          let o = this.subscribers.indexOf(n);
          this.subscribers.splice(o, 1);
        }
      )),
        (this.publish = (n) => {
          this.subscribers.forEach((o) => o(n));
        }),
        (this.addToast = (n) => {
          this.publish(n), (this.toasts = [...this.toasts, n]);
        }),
        (this.create = (n) => {
          var o;
          let { message: i, ...a } = n,
            c =
              typeof n?.id == "number" ||
              ((o = n.id) == null ? void 0 : o.length) > 0
                ? n.id
                : Ta++,
            d = this.toasts.find((h) => h.id === c),
            f = n.dismissible === void 0 ? !0 : n.dismissible;
          return (
            this.dismissedToasts.has(c) && this.dismissedToasts.delete(c),
            d
              ? (this.toasts = this.toasts.map((h) =>
                  h.id === c
                    ? (this.publish({ ...h, ...n, id: c, title: i }),
                      { ...h, ...n, id: c, dismissible: f, title: i })
                    : h
                ))
              : this.addToast({ title: i, ...a, dismissible: f, id: c }),
            c
          );
        }),
        (this.dismiss = (n) => (
          this.dismissedToasts.add(n),
          n ||
            this.toasts.forEach((o) => {
              this.subscribers.forEach((i) => i({ id: o.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((o) => o({ id: n, dismiss: !0 })),
          n
        )),
        (this.message = (n, o) => this.create({ ...o, message: n })),
        (this.error = (n, o) =>
          this.create({ ...o, message: n, type: "error" })),
        (this.success = (n, o) =>
          this.create({ ...o, type: "success", message: n })),
        (this.info = (n, o) => this.create({ ...o, type: "info", message: n })),
        (this.warning = (n, o) =>
          this.create({ ...o, type: "warning", message: n })),
        (this.loading = (n, o) =>
          this.create({ ...o, type: "loading", message: n })),
        (this.promise = (n, o) => {
          if (!o) return;
          let i;
          o.loading !== void 0 &&
            (i = this.create({
              ...o,
              promise: n,
              type: "loading",
              message: o.loading,
              description:
                typeof o.description != "function" ? o.description : void 0,
            }));
          let a = n instanceof Promise ? n : n(),
            c = i !== void 0,
            d,
            f = a
              .then(async (m) => {
                if (((d = ["resolve", m]), Q.isValidElement(m)))
                  (c = !1), this.create({ id: i, type: "default", message: m });
                else if (Fg(m) && !m.ok) {
                  c = !1;
                  let g =
                      typeof o.error == "function"
                        ? await o.error(`HTTP error! status: ${m.status}`)
                        : o.error,
                    x =
                      typeof o.description == "function"
                        ? await o.description(`HTTP error! status: ${m.status}`)
                        : o.description;
                  this.create({
                    id: i,
                    type: "error",
                    message: g,
                    description: x,
                  });
                } else if (o.success !== void 0) {
                  c = !1;
                  let g =
                      typeof o.success == "function"
                        ? await o.success(m)
                        : o.success,
                    x =
                      typeof o.description == "function"
                        ? await o.description(m)
                        : o.description;
                  this.create({
                    id: i,
                    type: "success",
                    message: g,
                    description: x,
                  });
                }
              })
              .catch(async (m) => {
                if (((d = ["reject", m]), o.error !== void 0)) {
                  c = !1;
                  let g =
                      typeof o.error == "function" ? await o.error(m) : o.error,
                    x =
                      typeof o.description == "function"
                        ? await o.description(m)
                        : o.description;
                  this.create({
                    id: i,
                    type: "error",
                    message: g,
                    description: x,
                  });
                }
              })
              .finally(() => {
                var m;
                c && (this.dismiss(i), (i = void 0)),
                  (m = o.finally) == null || m.call(o);
              }),
            h = () =>
              new Promise((m, g) =>
                f.then(() => (d[0] === "reject" ? g(d[1]) : m(d[1]))).catch(g)
              );
          return typeof i != "string" && typeof i != "number"
            ? { unwrap: h }
            : Object.assign(i, { unwrap: h });
        }),
        (this.custom = (n, o) => {
          let i = o?.id || Ta++;
          return this.create({ jsx: n(i), id: i, ...o }), i;
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((n) => !this.dismissedToasts.has(n.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set());
    }
  },
  pt = new Dg(),
  zg = (n, o) => {
    let i = o?.id || Ta++;
    return pt.addToast({ title: n, ...o, id: i }), i;
  },
  Fg = (n) =>
    n &&
    typeof n == "object" &&
    "ok" in n &&
    typeof n.ok == "boolean" &&
    "status" in n &&
    typeof n.status == "number",
  Bg = zg,
  $g = () => pt.toasts,
  Ug = () => pt.getActiveToasts();
Object.assign(
  Bg,
  {
    success: pt.success,
    info: pt.info,
    warning: pt.warning,
    error: pt.error,
    custom: pt.custom,
    message: pt.message,
    promise: pt.promise,
    dismiss: pt.dismiss,
    loading: pt.loading,
  },
  { getHistory: $g, getToasts: Ug }
);
function Vg(n, { insertAt: o } = {}) {
  if (typeof document > "u") return;
  let i = document.head || document.getElementsByTagName("head")[0],
    a = document.createElement("style");
  (a.type = "text/css"),
    o === "top" && i.firstChild
      ? i.insertBefore(a, i.firstChild)
      : i.appendChild(a),
    a.styleSheet
      ? (a.styleSheet.cssText = n)
      : a.appendChild(document.createTextNode(n));
}
Vg(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function ii(n) {
  return n.label !== void 0;
}
var Hg = 3,
  Wg = "32px",
  Qg = "16px",
  Xd = 4e3,
  Kg = 356,
  qg = 14,
  Yg = 20,
  Gg = 200;
function Bt(...n) {
  return n.filter(Boolean).join(" ");
}
function Xg(n) {
  let [o, i] = n.split("-"),
    a = [];
  return o && a.push(o), i && a.push(i), a;
}
var Zg = (n) => {
  var o, i, a, c, d, f, h, m, g, x, w;
  let {
      invert: T,
      toast: y,
      unstyled: j,
      interacting: C,
      setHeights: k,
      visibleToasts: A,
      heights: L,
      index: D,
      toasts: F,
      expanded: H,
      removeToast: K,
      defaultRichColors: Y,
      closeButton: ce,
      style: ge,
      cancelButtonStyle: pe,
      actionButtonStyle: xe,
      className: Z = "",
      descriptionClassName: he = "",
      duration: q,
      position: me,
      gap: se,
      loadingIcon: re,
      expandByDefault: I,
      classNames: z,
      icons: V,
      closeButtonAriaLabel: N = "Close toast",
      pauseWhenPageIsHidden: M,
    } = n,
    [G, J] = Q.useState(null),
    [ue, ve] = Q.useState(null),
    [ie, Se] = Q.useState(!1),
    [ke, Fe] = Q.useState(!1),
    [Et, xn] = Q.useState(!1),
    [kt, Kr] = Q.useState(!1),
    [Wo, qr] = Q.useState(!1),
    [Yr, cr] = Q.useState(0),
    [Gr, wn] = Q.useState(0),
    Ct = Q.useRef(y.duration || q || Xd),
    dr = Q.useRef(null),
    Wt = Q.useRef(null),
    Qo = D === 0,
    Ko = D + 1 <= A,
    et = y.type,
    Qt = y.dismissible !== !1,
    fr = y.className || "",
    qo = y.descriptionClassName || "",
    Kt = Q.useMemo(
      () => L.findIndex((fe) => fe.toastId === y.id) || 0,
      [L, y.id]
    ),
    Yn = Q.useMemo(() => {
      var fe;
      return (fe = y.closeButton) != null ? fe : ce;
    }, [y.closeButton, ce]),
    Yo = Q.useMemo(() => y.duration || q || Xd, [y.duration, q]),
    pr = Q.useRef(0),
    ln = Q.useRef(0),
    Go = Q.useRef(0),
    qt = Q.useRef(null),
    [Xr, Zr] = me.split("-"),
    hr = Q.useMemo(
      () => L.reduce((fe, be, Ne) => (Ne >= Kt ? fe : fe + be.height), 0),
      [L, Kt]
    ),
    mr = Ig(),
    Sn = y.invert || T,
    Yt = et === "loading";
  (ln.current = Q.useMemo(() => Kt * se + hr, [Kt, hr])),
    Q.useEffect(() => {
      Ct.current = Yo;
    }, [Yo]),
    Q.useEffect(() => {
      Se(!0);
    }, []),
    Q.useEffect(() => {
      let fe = Wt.current;
      if (fe) {
        let be = fe.getBoundingClientRect().height;
        return (
          wn(be),
          k((Ne) => [
            { toastId: y.id, height: be, position: y.position },
            ...Ne,
          ]),
          () => k((Ne) => Ne.filter((tt) => tt.toastId !== y.id))
        );
      }
    }, [k, y.id]),
    Q.useLayoutEffect(() => {
      if (!ie) return;
      let fe = Wt.current,
        be = fe.style.height;
      fe.style.height = "auto";
      let Ne = fe.getBoundingClientRect().height;
      (fe.style.height = be),
        wn(Ne),
        k((tt) =>
          tt.find((st) => st.toastId === y.id)
            ? tt.map((st) => (st.toastId === y.id ? { ...st, height: Ne } : st))
            : [{ toastId: y.id, height: Ne, position: y.position }, ...tt]
        );
    }, [ie, y.title, y.description, k, y.id]);
  let Ot = Q.useCallback(() => {
    Fe(!0),
      cr(ln.current),
      k((fe) => fe.filter((be) => be.toastId !== y.id)),
      setTimeout(() => {
        K(y);
      }, Gg);
  }, [y, K, k, ln]);
  Q.useEffect(() => {
    if (
      (y.promise && et === "loading") ||
      y.duration === 1 / 0 ||
      y.type === "loading"
    )
      return;
    let fe;
    return (
      H || C || (M && mr)
        ? (() => {
            if (Go.current < pr.current) {
              let be = new Date().getTime() - pr.current;
              Ct.current = Ct.current - be;
            }
            Go.current = new Date().getTime();
          })()
        : Ct.current !== 1 / 0 &&
          ((pr.current = new Date().getTime()),
          (fe = setTimeout(() => {
            var be;
            (be = y.onAutoClose) == null || be.call(y, y), Ot();
          }, Ct.current))),
      () => clearTimeout(fe)
    );
  }, [H, C, y, et, M, mr, Ot]),
    Q.useEffect(() => {
      y.delete && Ot();
    }, [Ot, y.delete]);
  function Xo() {
    var fe, be, Ne;
    return V != null && V.loading
      ? Q.createElement(
          "div",
          {
            className: Bt(
              z?.loader,
              (fe = y?.classNames) == null ? void 0 : fe.loader,
              "sonner-loader"
            ),
            "data-visible": et === "loading",
          },
          V.loading
        )
      : re
      ? Q.createElement(
          "div",
          {
            className: Bt(
              z?.loader,
              (be = y?.classNames) == null ? void 0 : be.loader,
              "sonner-loader"
            ),
            "data-visible": et === "loading",
          },
          re
        )
      : Q.createElement(jg, {
          className: Bt(
            z?.loader,
            (Ne = y?.classNames) == null ? void 0 : Ne.loader
          ),
          visible: et === "loading",
        });
  }
  return Q.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Wt,
      className: Bt(
        Z,
        fr,
        z?.toast,
        (o = y?.classNames) == null ? void 0 : o.toast,
        z?.default,
        z?.[et],
        (i = y?.classNames) == null ? void 0 : i[et]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (a = y.richColors) != null ? a : Y,
      "data-styled": !(y.jsx || y.unstyled || j),
      "data-mounted": ie,
      "data-promise": !!y.promise,
      "data-swiped": Wo,
      "data-removed": ke,
      "data-visible": Ko,
      "data-y-position": Xr,
      "data-x-position": Zr,
      "data-index": D,
      "data-front": Qo,
      "data-swiping": Et,
      "data-dismissible": Qt,
      "data-type": et,
      "data-invert": Sn,
      "data-swipe-out": kt,
      "data-swipe-direction": ue,
      "data-expanded": !!(H || (I && ie)),
      style: {
        "--index": D,
        "--toasts-before": D,
        "--z-index": F.length - D,
        "--offset": `${ke ? Yr : ln.current}px`,
        "--initial-height": I ? "auto" : `${Gr}px`,
        ...ge,
        ...y.style,
      },
      onDragEnd: () => {
        xn(!1), J(null), (qt.current = null);
      },
      onPointerDown: (fe) => {
        Yt ||
          !Qt ||
          ((dr.current = new Date()),
          cr(ln.current),
          fe.target.setPointerCapture(fe.pointerId),
          fe.target.tagName !== "BUTTON" &&
            (xn(!0), (qt.current = { x: fe.clientX, y: fe.clientY })));
      },
      onPointerUp: () => {
        var fe, be, Ne, tt;
        if (kt || !Qt) return;
        qt.current = null;
        let st = Number(
            ((fe = Wt.current) == null
              ? void 0
              : fe.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0
          ),
          it = Number(
            ((be = Wt.current) == null
              ? void 0
              : be.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0
          ),
          _t =
            new Date().getTime() -
            ((Ne = dr.current) == null ? void 0 : Ne.getTime()),
          Ke = G === "x" ? st : it,
          Gt = Math.abs(Ke) / _t;
        if (Math.abs(Ke) >= Yg || Gt > 0.11) {
          cr(ln.current),
            (tt = y.onDismiss) == null || tt.call(y, y),
            ve(
              G === "x" ? (st > 0 ? "right" : "left") : it > 0 ? "down" : "up"
            ),
            Ot(),
            Kr(!0),
            qr(!1);
          return;
        }
        xn(!1), J(null);
      },
      onPointerMove: (fe) => {
        var be, Ne, tt, st;
        if (
          !qt.current ||
          !Qt ||
          ((be = window.getSelection()) == null
            ? void 0
            : be.toString().length) > 0
        )
          return;
        let it = fe.clientY - qt.current.y,
          _t = fe.clientX - qt.current.x,
          Ke = (Ne = n.swipeDirections) != null ? Ne : Xg(me);
        !G &&
          (Math.abs(_t) > 1 || Math.abs(it) > 1) &&
          J(Math.abs(_t) > Math.abs(it) ? "x" : "y");
        let Gt = { x: 0, y: 0 };
        G === "y"
          ? (Ke.includes("top") || Ke.includes("bottom")) &&
            ((Ke.includes("top") && it < 0) ||
              (Ke.includes("bottom") && it > 0)) &&
            (Gt.y = it)
          : G === "x" &&
            (Ke.includes("left") || Ke.includes("right")) &&
            ((Ke.includes("left") && _t < 0) ||
              (Ke.includes("right") && _t > 0)) &&
            (Gt.x = _t),
          (Math.abs(Gt.x) > 0 || Math.abs(Gt.y) > 0) && qr(!0),
          (tt = Wt.current) == null ||
            tt.style.setProperty("--swipe-amount-x", `${Gt.x}px`),
          (st = Wt.current) == null ||
            st.style.setProperty("--swipe-amount-y", `${Gt.y}px`);
      },
    },
    Yn && !y.jsx
      ? Q.createElement(
          "button",
          {
            "aria-label": N,
            "data-disabled": Yt,
            "data-close-button": !0,
            onClick:
              Yt || !Qt
                ? () => {}
                : () => {
                    var fe;
                    Ot(), (fe = y.onDismiss) == null || fe.call(y, y);
                  },
            className: Bt(
              z?.closeButton,
              (c = y?.classNames) == null ? void 0 : c.closeButton
            ),
          },
          (d = V?.close) != null ? d : Lg
        )
      : null,
    y.jsx || E.isValidElement(y.title)
      ? y.jsx
        ? y.jsx
        : typeof y.title == "function"
        ? y.title()
        : y.title
      : Q.createElement(
          Q.Fragment,
          null,
          et || y.icon || y.promise
            ? Q.createElement(
                "div",
                {
                  "data-icon": "",
                  className: Bt(
                    z?.icon,
                    (f = y?.classNames) == null ? void 0 : f.icon
                  ),
                },
                y.promise || (y.type === "loading" && !y.icon)
                  ? y.icon || Xo()
                  : null,
                y.type !== "loading" ? y.icon || V?.[et] || Tg(et) : null
              )
            : null,
          Q.createElement(
            "div",
            {
              "data-content": "",
              className: Bt(
                z?.content,
                (h = y?.classNames) == null ? void 0 : h.content
              ),
            },
            Q.createElement(
              "div",
              {
                "data-title": "",
                className: Bt(
                  z?.title,
                  (m = y?.classNames) == null ? void 0 : m.title
                ),
              },
              typeof y.title == "function" ? y.title() : y.title
            ),
            y.description
              ? Q.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: Bt(
                      he,
                      qo,
                      z?.description,
                      (g = y?.classNames) == null ? void 0 : g.description
                    ),
                  },
                  typeof y.description == "function"
                    ? y.description()
                    : y.description
                )
              : null
          ),
          E.isValidElement(y.cancel)
            ? y.cancel
            : y.cancel && ii(y.cancel)
            ? Q.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: y.cancelButtonStyle || pe,
                  onClick: (fe) => {
                    var be, Ne;
                    ii(y.cancel) &&
                      Qt &&
                      ((Ne = (be = y.cancel).onClick) == null ||
                        Ne.call(be, fe),
                      Ot());
                  },
                  className: Bt(
                    z?.cancelButton,
                    (x = y?.classNames) == null ? void 0 : x.cancelButton
                  ),
                },
                y.cancel.label
              )
            : null,
          E.isValidElement(y.action)
            ? y.action
            : y.action && ii(y.action)
            ? Q.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-action": !0,
                  style: y.actionButtonStyle || xe,
                  onClick: (fe) => {
                    var be, Ne;
                    ii(y.action) &&
                      ((Ne = (be = y.action).onClick) == null ||
                        Ne.call(be, fe),
                      !fe.defaultPrevented && Ot());
                  },
                  className: Bt(
                    z?.actionButton,
                    (w = y?.classNames) == null ? void 0 : w.actionButton
                  ),
                },
                y.action.label
              )
            : null
        )
  );
};
function Zd() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let n = document.documentElement.getAttribute("dir");
  return n === "auto" || !n
    ? window.getComputedStyle(document.documentElement).direction
    : n;
}
function Jg(n, o) {
  let i = {};
  return (
    [n, o].forEach((a, c) => {
      let d = c === 1,
        f = d ? "--mobile-offset" : "--offset",
        h = d ? Qg : Wg;
      function m(g) {
        ["top", "right", "bottom", "left"].forEach((x) => {
          i[`${f}-${x}`] = typeof g == "number" ? `${g}px` : g;
        });
      }
      typeof a == "number" || typeof a == "string"
        ? m(a)
        : typeof a == "object"
        ? ["top", "right", "bottom", "left"].forEach((g) => {
            a[g] === void 0
              ? (i[`${f}-${g}`] = h)
              : (i[`${f}-${g}`] = typeof a[g] == "number" ? `${a[g]}px` : a[g]);
          })
        : m(h);
    }),
    i
  );
}
var ev = E.forwardRef(function (n, o) {
  let {
      invert: i,
      position: a = "bottom-right",
      hotkey: c = ["altKey", "KeyT"],
      expand: d,
      closeButton: f,
      className: h,
      offset: m,
      mobileOffset: g,
      theme: x = "light",
      richColors: w,
      duration: T,
      style: y,
      visibleToasts: j = Hg,
      toastOptions: C,
      dir: k = Zd(),
      gap: A = qg,
      loadingIcon: L,
      icons: D,
      containerAriaLabel: F = "Notifications",
      pauseWhenPageIsHidden: H,
    } = n,
    [K, Y] = Q.useState([]),
    ce = Q.useMemo(
      () =>
        Array.from(
          new Set(
            [a].concat(K.filter((M) => M.position).map((M) => M.position))
          )
        ),
      [K, a]
    ),
    [ge, pe] = Q.useState([]),
    [xe, Z] = Q.useState(!1),
    [he, q] = Q.useState(!1),
    [me, se] = Q.useState(
      x !== "system"
        ? x
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    re = Q.useRef(null),
    I = c.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    z = Q.useRef(null),
    V = Q.useRef(!1),
    N = Q.useCallback((M) => {
      Y((G) => {
        var J;
        return (
          ((J = G.find((ue) => ue.id === M.id)) != null && J.delete) ||
            pt.dismiss(M.id),
          G.filter(({ id: ue }) => ue !== M.id)
        );
      });
    }, []);
  return (
    Q.useEffect(
      () =>
        pt.subscribe((M) => {
          if (M.dismiss) {
            Y((G) => G.map((J) => (J.id === M.id ? { ...J, delete: !0 } : J)));
            return;
          }
          setTimeout(() => {
            zf.flushSync(() => {
              Y((G) => {
                let J = G.findIndex((ue) => ue.id === M.id);
                return J !== -1
                  ? [...G.slice(0, J), { ...G[J], ...M }, ...G.slice(J + 1)]
                  : [M, ...G];
              });
            });
          });
        }),
      []
    ),
    Q.useEffect(() => {
      if (x !== "system") {
        se(x);
        return;
      }
      if (
        (x === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? se("dark")
            : se("light")),
        typeof window > "u")
      )
        return;
      let M = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        M.addEventListener("change", ({ matches: G }) => {
          se(G ? "dark" : "light");
        });
      } catch {
        M.addListener(({ matches: J }) => {
          try {
            se(J ? "dark" : "light");
          } catch (ue) {
            console.error(ue);
          }
        });
      }
    }, [x]),
    Q.useEffect(() => {
      K.length <= 1 && Z(!1);
    }, [K]),
    Q.useEffect(() => {
      let M = (G) => {
        var J, ue;
        c.every((ve) => G[ve] || G.code === ve) &&
          (Z(!0), (J = re.current) == null || J.focus()),
          G.code === "Escape" &&
            (document.activeElement === re.current ||
              ((ue = re.current) != null &&
                ue.contains(document.activeElement))) &&
            Z(!1);
      };
      return (
        document.addEventListener("keydown", M),
        () => document.removeEventListener("keydown", M)
      );
    }, [c]),
    Q.useEffect(() => {
      if (re.current)
        return () => {
          z.current &&
            (z.current.focus({ preventScroll: !0 }),
            (z.current = null),
            (V.current = !1));
        };
    }, [re.current]),
    Q.createElement(
      "section",
      {
        ref: o,
        "aria-label": `${F} ${I}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      ce.map((M, G) => {
        var J;
        let [ue, ve] = M.split("-");
        return K.length
          ? Q.createElement(
              "ol",
              {
                key: M,
                dir: k === "auto" ? Zd() : k,
                tabIndex: -1,
                ref: re,
                className: h,
                "data-sonner-toaster": !0,
                "data-theme": me,
                "data-y-position": ue,
                "data-lifted": xe && K.length > 1 && !d,
                "data-x-position": ve,
                style: {
                  "--front-toast-height": `${
                    ((J = ge[0]) == null ? void 0 : J.height) || 0
                  }px`,
                  "--width": `${Kg}px`,
                  "--gap": `${A}px`,
                  ...y,
                  ...Jg(m, g),
                },
                onBlur: (ie) => {
                  V.current &&
                    !ie.currentTarget.contains(ie.relatedTarget) &&
                    ((V.current = !1),
                    z.current &&
                      (z.current.focus({ preventScroll: !0 }),
                      (z.current = null)));
                },
                onFocus: (ie) => {
                  (ie.target instanceof HTMLElement &&
                    ie.target.dataset.dismissible === "false") ||
                    V.current ||
                    ((V.current = !0), (z.current = ie.relatedTarget));
                },
                onMouseEnter: () => Z(!0),
                onMouseMove: () => Z(!0),
                onMouseLeave: () => {
                  he || Z(!1);
                },
                onDragEnd: () => Z(!1),
                onPointerDown: (ie) => {
                  (ie.target instanceof HTMLElement &&
                    ie.target.dataset.dismissible === "false") ||
                    q(!0);
                },
                onPointerUp: () => q(!1),
              },
              K.filter(
                (ie) => (!ie.position && G === 0) || ie.position === M
              ).map((ie, Se) => {
                var ke, Fe;
                return Q.createElement(Zg, {
                  key: ie.id,
                  icons: D,
                  index: Se,
                  toast: ie,
                  defaultRichColors: w,
                  duration: (ke = C?.duration) != null ? ke : T,
                  className: C?.className,
                  descriptionClassName: C?.descriptionClassName,
                  invert: i,
                  visibleToasts: j,
                  closeButton: (Fe = C?.closeButton) != null ? Fe : f,
                  interacting: he,
                  position: M,
                  style: C?.style,
                  unstyled: C?.unstyled,
                  classNames: C?.classNames,
                  cancelButtonStyle: C?.cancelButtonStyle,
                  actionButtonStyle: C?.actionButtonStyle,
                  removeToast: N,
                  toasts: K.filter((Et) => Et.position == ie.position),
                  heights: ge.filter((Et) => Et.position == ie.position),
                  setHeights: pe,
                  expandByDefault: d,
                  gap: A,
                  loadingIcon: L,
                  expanded: xe,
                  pauseWhenPageIsHidden: H,
                  swipeDirections: n.swipeDirections,
                });
              })
            )
          : null;
      })
    )
  );
});
const tv = ({ ...n }) => {
    const { theme: o = "system" } = Ng();
    return v.jsx(ev, {
      theme: o,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      },
      ...n,
    });
  },
  nv = 1,
  rv = 1e6;
let Sa = 0;
function ov() {
  return (Sa = (Sa + 1) % Number.MAX_SAFE_INTEGER), Sa.toString();
}
const Ea = new Map(),
  Jd = (n) => {
    if (Ea.has(n)) return;
    const o = setTimeout(() => {
      Ea.delete(n), Do({ type: "REMOVE_TOAST", toastId: n });
    }, rv);
    Ea.set(n, o);
  },
  sv = (n, o) => {
    switch (o.type) {
      case "ADD_TOAST":
        return { ...n, toasts: [o.toast, ...n.toasts].slice(0, nv) };
      case "UPDATE_TOAST":
        return {
          ...n,
          toasts: n.toasts.map((i) =>
            i.id === o.toast.id ? { ...i, ...o.toast } : i
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: i } = o;
        return (
          i
            ? Jd(i)
            : n.toasts.forEach((a) => {
                Jd(a.id);
              }),
          {
            ...n,
            toasts: n.toasts.map((a) =>
              a.id === i || i === void 0 ? { ...a, open: !1 } : a
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return o.toastId === void 0
          ? { ...n, toasts: [] }
          : { ...n, toasts: n.toasts.filter((i) => i.id !== o.toastId) };
    }
  },
  di = [];
let fi = { toasts: [] };
function Do(n) {
  (fi = sv(fi, n)),
    di.forEach((o) => {
      o(fi);
    });
}
function iv({ ...n }) {
  const o = ov(),
    i = (c) => Do({ type: "UPDATE_TOAST", toast: { ...c, id: o } }),
    a = () => Do({ type: "DISMISS_TOAST", toastId: o });
  return (
    Do({
      type: "ADD_TOAST",
      toast: {
        ...n,
        id: o,
        open: !0,
        onOpenChange: (c) => {
          c || a();
        },
      },
    }),
    { id: o, dismiss: a, update: i }
  );
}
function lv() {
  const [n, o] = E.useState(fi);
  return (
    E.useEffect(
      () => (
        di.push(o),
        () => {
          const i = di.indexOf(o);
          i > -1 && di.splice(i, 1);
        }
      ),
      [n]
    ),
    {
      ...n,
      toast: iv,
      dismiss: (i) => Do({ type: "DISMISS_TOAST", toastId: i }),
    }
  );
}
function Ve(n, o, { checkForDefaultPrevented: i = !0 } = {}) {
  return function (c) {
    if ((n?.(c), i === !1 || !c.defaultPrevented)) return o?.(c);
  };
}
function ef(n, o) {
  if (typeof n == "function") return n(o);
  n != null && (n.current = o);
}
function Ff(...n) {
  return (o) => {
    let i = !1;
    const a = n.map((c) => {
      const d = ef(c, o);
      return !i && typeof d == "function" && (i = !0), d;
    });
    if (i)
      return () => {
        for (let c = 0; c < a.length; c++) {
          const d = a[c];
          typeof d == "function" ? d() : ef(n[c], null);
        }
      };
  };
}
function Ut(...n) {
  return E.useCallback(Ff(...n), n);
}
function ki(n, o = []) {
  let i = [];
  function a(d, f) {
    const h = E.createContext(f),
      m = i.length;
    i = [...i, f];
    const g = (w) => {
      const { scope: T, children: y, ...j } = w,
        C = T?.[n]?.[m] || h,
        k = E.useMemo(() => j, Object.values(j));
      return v.jsx(C.Provider, { value: k, children: y });
    };
    g.displayName = d + "Provider";
    function x(w, T) {
      const y = T?.[n]?.[m] || h,
        j = E.useContext(y);
      if (j) return j;
      if (f !== void 0) return f;
      throw new Error(`\`${w}\` must be used within \`${d}\``);
    }
    return [g, x];
  }
  const c = () => {
    const d = i.map((f) => E.createContext(f));
    return function (h) {
      const m = h?.[n] || d;
      return E.useMemo(() => ({ [`__scope${n}`]: { ...h, [n]: m } }), [h, m]);
    };
  };
  return (c.scopeName = n), [a, av(c, ...o)];
}
function av(...n) {
  const o = n[0];
  if (n.length === 1) return o;
  const i = () => {
    const a = n.map((c) => ({ useScope: c(), scopeName: c.scopeName }));
    return function (d) {
      const f = a.reduce((h, { useScope: m, scopeName: g }) => {
        const w = m(d)[`__scope${g}`];
        return { ...h, ...w };
      }, {});
      return E.useMemo(() => ({ [`__scope${o.scopeName}`]: f }), [f]);
    };
  };
  return (i.scopeName = o.scopeName), i;
}
function hi(n) {
  const o = cv(n),
    i = E.forwardRef((a, c) => {
      const { children: d, ...f } = a,
        h = E.Children.toArray(d),
        m = h.find(fv);
      if (m) {
        const g = m.props.children,
          x = h.map((w) =>
            w === m
              ? E.Children.count(g) > 1
                ? E.Children.only(null)
                : E.isValidElement(g)
                ? g.props.children
                : null
              : w
          );
        return v.jsx(o, {
          ...f,
          ref: c,
          children: E.isValidElement(g) ? E.cloneElement(g, void 0, x) : null,
        });
      }
      return v.jsx(o, { ...f, ref: c, children: d });
    });
  return (i.displayName = `${n}.Slot`), i;
}
var uv = hi("Slot");
function cv(n) {
  const o = E.forwardRef((i, a) => {
    const { children: c, ...d } = i;
    if (E.isValidElement(c)) {
      const f = hv(c),
        h = pv(d, c.props);
      return (
        c.type !== E.Fragment && (h.ref = a ? Ff(a, f) : f),
        E.cloneElement(c, h)
      );
    }
    return E.Children.count(c) > 1 ? E.Children.only(null) : null;
  });
  return (o.displayName = `${n}.SlotClone`), o;
}
var Bf = Symbol("radix.slottable");
function dv(n) {
  const o = ({ children: i }) => v.jsx(v.Fragment, { children: i });
  return (o.displayName = `${n}.Slottable`), (o.__radixId = Bf), o;
}
function fv(n) {
  return (
    E.isValidElement(n) &&
    typeof n.type == "function" &&
    "__radixId" in n.type &&
    n.type.__radixId === Bf
  );
}
function pv(n, o) {
  const i = { ...o };
  for (const a in o) {
    const c = n[a],
      d = o[a];
    /^on[A-Z]/.test(a)
      ? c && d
        ? (i[a] = (...h) => {
            const m = d(...h);
            return c(...h), m;
          })
        : c && (i[a] = c)
      : a === "style"
      ? (i[a] = { ...c, ...d })
      : a === "className" && (i[a] = [c, d].filter(Boolean).join(" "));
  }
  return { ...n, ...i };
}
function hv(n) {
  let o = Object.getOwnPropertyDescriptor(n.props, "ref")?.get,
    i = o && "isReactWarning" in o && o.isReactWarning;
  return i
    ? n.ref
    : ((o = Object.getOwnPropertyDescriptor(n, "ref")?.get),
      (i = o && "isReactWarning" in o && o.isReactWarning),
      i ? n.props.ref : n.props.ref || n.ref);
}
function mv(n) {
  const o = n + "CollectionProvider",
    [i, a] = ki(o),
    [c, d] = i(o, { collectionRef: { current: null }, itemMap: new Map() }),
    f = (C) => {
      const { scope: k, children: A } = C,
        L = Q.useRef(null),
        D = Q.useRef(new Map()).current;
      return v.jsx(c, { scope: k, itemMap: D, collectionRef: L, children: A });
    };
  f.displayName = o;
  const h = n + "CollectionSlot",
    m = hi(h),
    g = Q.forwardRef((C, k) => {
      const { scope: A, children: L } = C,
        D = d(h, A),
        F = Ut(k, D.collectionRef);
      return v.jsx(m, { ref: F, children: L });
    });
  g.displayName = h;
  const x = n + "CollectionItemSlot",
    w = "data-radix-collection-item",
    T = hi(x),
    y = Q.forwardRef((C, k) => {
      const { scope: A, children: L, ...D } = C,
        F = Q.useRef(null),
        H = Ut(k, F),
        K = d(x, A);
      return (
        Q.useEffect(
          () => (
            K.itemMap.set(F, { ref: F, ...D }), () => void K.itemMap.delete(F)
          )
        ),
        v.jsx(T, { [w]: "", ref: H, children: L })
      );
    });
  y.displayName = x;
  function j(C) {
    const k = d(n + "CollectionConsumer", C);
    return Q.useCallback(() => {
      const L = k.collectionRef.current;
      if (!L) return [];
      const D = Array.from(L.querySelectorAll(`[${w}]`));
      return Array.from(k.itemMap.values()).sort(
        (K, Y) => D.indexOf(K.ref.current) - D.indexOf(Y.ref.current)
      );
    }, [k.collectionRef, k.itemMap]);
  }
  return [{ Provider: f, Slot: g, ItemSlot: y }, j, a];
}
var gv = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  mt = gv.reduce((n, o) => {
    const i = hi(`Primitive.${o}`),
      a = E.forwardRef((c, d) => {
        const { asChild: f, ...h } = c,
          m = f ? i : o;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          v.jsx(m, { ...h, ref: d })
        );
      });
    return (a.displayName = `Primitive.${o}`), { ...n, [o]: a };
  }, {});
function $f(n, o) {
  n && Ei.flushSync(() => n.dispatchEvent(o));
}
function Hn(n) {
  const o = E.useRef(n);
  return (
    E.useEffect(() => {
      o.current = n;
    }),
    E.useMemo(
      () =>
        (...i) =>
          o.current?.(...i),
      []
    )
  );
}
function vv(n, o = globalThis?.document) {
  const i = Hn(n);
  E.useEffect(() => {
    const a = (c) => {
      c.key === "Escape" && i(c);
    };
    return (
      o.addEventListener("keydown", a, { capture: !0 }),
      () => o.removeEventListener("keydown", a, { capture: !0 })
    );
  }, [i, o]);
}
var yv = "DismissableLayer",
  Ra = "dismissableLayer.update",
  xv = "dismissableLayer.pointerDownOutside",
  wv = "dismissableLayer.focusOutside",
  tf,
  Uf = E.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Ha = E.forwardRef((n, o) => {
    const {
        disableOutsidePointerEvents: i = !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: c,
        onFocusOutside: d,
        onInteractOutside: f,
        onDismiss: h,
        ...m
      } = n,
      g = E.useContext(Uf),
      [x, w] = E.useState(null),
      T = x?.ownerDocument ?? globalThis?.document,
      [, y] = E.useState({}),
      j = Ut(o, (Y) => w(Y)),
      C = Array.from(g.layers),
      [k] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1),
      A = C.indexOf(k),
      L = x ? C.indexOf(x) : -1,
      D = g.layersWithOutsidePointerEventsDisabled.size > 0,
      F = L >= A,
      H = Ev((Y) => {
        const ce = Y.target,
          ge = [...g.branches].some((pe) => pe.contains(ce));
        !F || ge || (c?.(Y), f?.(Y), Y.defaultPrevented || h?.());
      }, T),
      K = kv((Y) => {
        const ce = Y.target;
        [...g.branches].some((pe) => pe.contains(ce)) ||
          (d?.(Y), f?.(Y), Y.defaultPrevented || h?.());
      }, T);
    return (
      vv((Y) => {
        L === g.layers.size - 1 &&
          (a?.(Y), !Y.defaultPrevented && h && (Y.preventDefault(), h()));
      }, T),
      E.useEffect(() => {
        if (x)
          return (
            i &&
              (g.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((tf = T.body.style.pointerEvents),
                (T.body.style.pointerEvents = "none")),
              g.layersWithOutsidePointerEventsDisabled.add(x)),
            g.layers.add(x),
            nf(),
            () => {
              i &&
                g.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (T.body.style.pointerEvents = tf);
            }
          );
      }, [x, T, i, g]),
      E.useEffect(
        () => () => {
          x &&
            (g.layers.delete(x),
            g.layersWithOutsidePointerEventsDisabled.delete(x),
            nf());
        },
        [x, g]
      ),
      E.useEffect(() => {
        const Y = () => y({});
        return (
          document.addEventListener(Ra, Y),
          () => document.removeEventListener(Ra, Y)
        );
      }, []),
      v.jsx(mt.div, {
        ...m,
        ref: j,
        style: {
          pointerEvents: D ? (F ? "auto" : "none") : void 0,
          ...n.style,
        },
        onFocusCapture: Ve(n.onFocusCapture, K.onFocusCapture),
        onBlurCapture: Ve(n.onBlurCapture, K.onBlurCapture),
        onPointerDownCapture: Ve(
          n.onPointerDownCapture,
          H.onPointerDownCapture
        ),
      })
    );
  });
Ha.displayName = yv;
var Sv = "DismissableLayerBranch",
  Vf = E.forwardRef((n, o) => {
    const i = E.useContext(Uf),
      a = E.useRef(null),
      c = Ut(o, a);
    return (
      E.useEffect(() => {
        const d = a.current;
        if (d)
          return (
            i.branches.add(d),
            () => {
              i.branches.delete(d);
            }
          );
      }, [i.branches]),
      v.jsx(mt.div, { ...n, ref: c })
    );
  });
Vf.displayName = Sv;
function Ev(n, o = globalThis?.document) {
  const i = Hn(n),
    a = E.useRef(!1),
    c = E.useRef(() => {});
  return (
    E.useEffect(() => {
      const d = (h) => {
          if (h.target && !a.current) {
            let m = function () {
              Hf(xv, i, g, { discrete: !0 });
            };
            const g = { originalEvent: h };
            h.pointerType === "touch"
              ? (o.removeEventListener("click", c.current),
                (c.current = m),
                o.addEventListener("click", c.current, { once: !0 }))
              : m();
          } else o.removeEventListener("click", c.current);
          a.current = !1;
        },
        f = window.setTimeout(() => {
          o.addEventListener("pointerdown", d);
        }, 0);
      return () => {
        window.clearTimeout(f),
          o.removeEventListener("pointerdown", d),
          o.removeEventListener("click", c.current);
      };
    }, [o, i]),
    { onPointerDownCapture: () => (a.current = !0) }
  );
}
function kv(n, o = globalThis?.document) {
  const i = Hn(n),
    a = E.useRef(!1);
  return (
    E.useEffect(() => {
      const c = (d) => {
        d.target &&
          !a.current &&
          Hf(wv, i, { originalEvent: d }, { discrete: !1 });
      };
      return (
        o.addEventListener("focusin", c),
        () => o.removeEventListener("focusin", c)
      );
    }, [o, i]),
    {
      onFocusCapture: () => (a.current = !0),
      onBlurCapture: () => (a.current = !1),
    }
  );
}
function nf() {
  const n = new CustomEvent(Ra);
  document.dispatchEvent(n);
}
function Hf(n, o, i, { discrete: a }) {
  const c = i.originalEvent.target,
    d = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: i });
  o && c.addEventListener(n, o, { once: !0 }),
    a ? $f(c, d) : c.dispatchEvent(d);
}
var Cv = Ha,
  bv = Vf,
  Wn = globalThis?.document ? E.useLayoutEffect : () => {},
  Pv = "Portal",
  Wf = E.forwardRef((n, o) => {
    const { container: i, ...a } = n,
      [c, d] = E.useState(!1);
    Wn(() => d(!0), []);
    const f = i || (c && globalThis?.document?.body);
    return f ? zf.createPortal(v.jsx(mt.div, { ...a, ref: o }), f) : null;
  });
Wf.displayName = Pv;
function Nv(n, o) {
  return E.useReducer((i, a) => o[i][a] ?? i, n);
}
var Wa = (n) => {
  const { present: o, children: i } = n,
    a = Tv(o),
    c =
      typeof i == "function" ? i({ present: a.isPresent }) : E.Children.only(i),
    d = Ut(a.ref, Rv(c));
  return typeof i == "function" || a.isPresent
    ? E.cloneElement(c, { ref: d })
    : null;
};
Wa.displayName = "Presence";
function Tv(n) {
  const [o, i] = E.useState(),
    a = E.useRef(null),
    c = E.useRef(n),
    d = E.useRef("none"),
    f = n ? "mounted" : "unmounted",
    [h, m] = Nv(f, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    E.useEffect(() => {
      const g = li(a.current);
      d.current = h === "mounted" ? g : "none";
    }, [h]),
    Wn(() => {
      const g = a.current,
        x = c.current;
      if (x !== n) {
        const T = d.current,
          y = li(g);
        n
          ? m("MOUNT")
          : y === "none" || g?.display === "none"
          ? m("UNMOUNT")
          : m(x && T !== y ? "ANIMATION_OUT" : "UNMOUNT"),
          (c.current = n);
      }
    }, [n, m]),
    Wn(() => {
      if (o) {
        let g;
        const x = o.ownerDocument.defaultView ?? window,
          w = (y) => {
            const C = li(a.current).includes(y.animationName);
            if (y.target === o && C && (m("ANIMATION_END"), !c.current)) {
              const k = o.style.animationFillMode;
              (o.style.animationFillMode = "forwards"),
                (g = x.setTimeout(() => {
                  o.style.animationFillMode === "forwards" &&
                    (o.style.animationFillMode = k);
                }));
            }
          },
          T = (y) => {
            y.target === o && (d.current = li(a.current));
          };
        return (
          o.addEventListener("animationstart", T),
          o.addEventListener("animationcancel", w),
          o.addEventListener("animationend", w),
          () => {
            x.clearTimeout(g),
              o.removeEventListener("animationstart", T),
              o.removeEventListener("animationcancel", w),
              o.removeEventListener("animationend", w);
          }
        );
      } else m("ANIMATION_END");
    }, [o, m]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(h),
      ref: E.useCallback((g) => {
        (a.current = g ? getComputedStyle(g) : null), i(g);
      }, []),
    }
  );
}
function li(n) {
  return n?.animationName || "none";
}
function Rv(n) {
  let o = Object.getOwnPropertyDescriptor(n.props, "ref")?.get,
    i = o && "isReactWarning" in o && o.isReactWarning;
  return i
    ? n.ref
    : ((o = Object.getOwnPropertyDescriptor(n, "ref")?.get),
      (i = o && "isReactWarning" in o && o.isReactWarning),
      i ? n.props.ref : n.props.ref || n.ref);
}
var jv = Df[" useInsertionEffect ".trim().toString()] || Wn;
function Ov({ prop: n, defaultProp: o, onChange: i = () => {}, caller: a }) {
  const [c, d, f] = _v({ defaultProp: o, onChange: i }),
    h = n !== void 0,
    m = h ? n : c;
  {
    const x = E.useRef(n !== void 0);
    E.useEffect(() => {
      const w = x.current;
      w !== h &&
        console.warn(
          `${a} is changing from ${w ? "controlled" : "uncontrolled"} to ${
            h ? "controlled" : "uncontrolled"
          }. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (x.current = h);
    }, [h, a]);
  }
  const g = E.useCallback(
    (x) => {
      if (h) {
        const w = Av(x) ? x(n) : x;
        w !== n && f.current?.(w);
      } else d(x);
    },
    [h, n, d, f]
  );
  return [m, g];
}
function _v({ defaultProp: n, onChange: o }) {
  const [i, a] = E.useState(n),
    c = E.useRef(i),
    d = E.useRef(o);
  return (
    jv(() => {
      d.current = o;
    }, [o]),
    E.useEffect(() => {
      c.current !== i && (d.current?.(i), (c.current = i));
    }, [i, c]),
    [i, a, d]
  );
}
function Av(n) {
  return typeof n == "function";
}
var Mv = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  Lv = "VisuallyHidden",
  Ci = E.forwardRef((n, o) =>
    v.jsx(mt.span, { ...n, ref: o, style: { ...Mv, ...n.style } })
  );
Ci.displayName = Lv;
var Iv = Ci,
  Qa = "ToastProvider",
  [Ka, Dv, zv] = mv("Toast"),
  [Qf] = ki("Toast", [zv]),
  [Fv, bi] = Qf(Qa),
  Kf = (n) => {
    const {
        __scopeToast: o,
        label: i = "Notification",
        duration: a = 5e3,
        swipeDirection: c = "right",
        swipeThreshold: d = 50,
        children: f,
      } = n,
      [h, m] = E.useState(null),
      [g, x] = E.useState(0),
      w = E.useRef(!1),
      T = E.useRef(!1);
    return (
      i.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${Qa}\`. Expected non-empty \`string\`.`
        ),
      v.jsx(Ka.Provider, {
        scope: o,
        children: v.jsx(Fv, {
          scope: o,
          label: i,
          duration: a,
          swipeDirection: c,
          swipeThreshold: d,
          toastCount: g,
          viewport: h,
          onViewportChange: m,
          onToastAdd: E.useCallback(() => x((y) => y + 1), []),
          onToastRemove: E.useCallback(() => x((y) => y - 1), []),
          isFocusedToastEscapeKeyDownRef: w,
          isClosePausedRef: T,
          children: f,
        }),
      })
    );
  };
Kf.displayName = Qa;
var qf = "ToastViewport",
  Bv = ["F8"],
  ja = "toast.viewportPause",
  Oa = "toast.viewportResume",
  Yf = E.forwardRef((n, o) => {
    const {
        __scopeToast: i,
        hotkey: a = Bv,
        label: c = "Notifications ({hotkey})",
        ...d
      } = n,
      f = bi(qf, i),
      h = Dv(i),
      m = E.useRef(null),
      g = E.useRef(null),
      x = E.useRef(null),
      w = E.useRef(null),
      T = Ut(o, w, f.onViewportChange),
      y = a.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      j = f.toastCount > 0;
    E.useEffect(() => {
      const k = (A) => {
        a.length !== 0 &&
          a.every((D) => A[D] || A.code === D) &&
          w.current?.focus();
      };
      return (
        document.addEventListener("keydown", k),
        () => document.removeEventListener("keydown", k)
      );
    }, [a]),
      E.useEffect(() => {
        const k = m.current,
          A = w.current;
        if (j && k && A) {
          const L = () => {
              if (!f.isClosePausedRef.current) {
                const K = new CustomEvent(ja);
                A.dispatchEvent(K), (f.isClosePausedRef.current = !0);
              }
            },
            D = () => {
              if (f.isClosePausedRef.current) {
                const K = new CustomEvent(Oa);
                A.dispatchEvent(K), (f.isClosePausedRef.current = !1);
              }
            },
            F = (K) => {
              !k.contains(K.relatedTarget) && D();
            },
            H = () => {
              k.contains(document.activeElement) || D();
            };
          return (
            k.addEventListener("focusin", L),
            k.addEventListener("focusout", F),
            k.addEventListener("pointermove", L),
            k.addEventListener("pointerleave", H),
            window.addEventListener("blur", L),
            window.addEventListener("focus", D),
            () => {
              k.removeEventListener("focusin", L),
                k.removeEventListener("focusout", F),
                k.removeEventListener("pointermove", L),
                k.removeEventListener("pointerleave", H),
                window.removeEventListener("blur", L),
                window.removeEventListener("focus", D);
            }
          );
        }
      }, [j, f.isClosePausedRef]);
    const C = E.useCallback(
      ({ tabbingDirection: k }) => {
        const L = h().map((D) => {
          const F = D.ref.current,
            H = [F, ...Jv(F)];
          return k === "forwards" ? H : H.reverse();
        });
        return (k === "forwards" ? L.reverse() : L).flat();
      },
      [h]
    );
    return (
      E.useEffect(() => {
        const k = w.current;
        if (k) {
          const A = (L) => {
            const D = L.altKey || L.ctrlKey || L.metaKey;
            if (L.key === "Tab" && !D) {
              const H = document.activeElement,
                K = L.shiftKey;
              if (L.target === k && K) {
                g.current?.focus();
                return;
              }
              const ge = C({ tabbingDirection: K ? "backwards" : "forwards" }),
                pe = ge.findIndex((xe) => xe === H);
              ka(ge.slice(pe + 1))
                ? L.preventDefault()
                : K
                ? g.current?.focus()
                : x.current?.focus();
            }
          };
          return (
            k.addEventListener("keydown", A),
            () => k.removeEventListener("keydown", A)
          );
        }
      }, [h, C]),
      v.jsxs(bv, {
        ref: m,
        role: "region",
        "aria-label": c.replace("{hotkey}", y),
        tabIndex: -1,
        style: { pointerEvents: j ? void 0 : "none" },
        children: [
          j &&
            v.jsx(_a, {
              ref: g,
              onFocusFromOutsideViewport: () => {
                const k = C({ tabbingDirection: "forwards" });
                ka(k);
              },
            }),
          v.jsx(Ka.Slot, {
            scope: i,
            children: v.jsx(mt.ol, { tabIndex: -1, ...d, ref: T }),
          }),
          j &&
            v.jsx(_a, {
              ref: x,
              onFocusFromOutsideViewport: () => {
                const k = C({ tabbingDirection: "backwards" });
                ka(k);
              },
            }),
        ],
      })
    );
  });
Yf.displayName = qf;
var Gf = "ToastFocusProxy",
  _a = E.forwardRef((n, o) => {
    const { __scopeToast: i, onFocusFromOutsideViewport: a, ...c } = n,
      d = bi(Gf, i);
    return v.jsx(Ci, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...c,
      ref: o,
      style: { position: "fixed" },
      onFocus: (f) => {
        const h = f.relatedTarget;
        !d.viewport?.contains(h) && a();
      },
    });
  });
_a.displayName = Gf;
var Uo = "Toast",
  $v = "toast.swipeStart",
  Uv = "toast.swipeMove",
  Vv = "toast.swipeCancel",
  Hv = "toast.swipeEnd",
  Xf = E.forwardRef((n, o) => {
    const { forceMount: i, open: a, defaultOpen: c, onOpenChange: d, ...f } = n,
      [h, m] = Ov({ prop: a, defaultProp: c ?? !0, onChange: d, caller: Uo });
    return v.jsx(Wa, {
      present: i || h,
      children: v.jsx(Kv, {
        open: h,
        ...f,
        ref: o,
        onClose: () => m(!1),
        onPause: Hn(n.onPause),
        onResume: Hn(n.onResume),
        onSwipeStart: Ve(n.onSwipeStart, (g) => {
          g.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: Ve(n.onSwipeMove, (g) => {
          const { x, y: w } = g.detail.delta;
          g.currentTarget.setAttribute("data-swipe", "move"),
            g.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${x}px`
            ),
            g.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${w}px`
            );
        }),
        onSwipeCancel: Ve(n.onSwipeCancel, (g) => {
          g.currentTarget.setAttribute("data-swipe", "cancel"),
            g.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            g.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            g.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            g.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: Ve(n.onSwipeEnd, (g) => {
          const { x, y: w } = g.detail.delta;
          g.currentTarget.setAttribute("data-swipe", "end"),
            g.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            g.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            g.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${x}px`
            ),
            g.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${w}px`
            ),
            m(!1);
        }),
      }),
    });
  });
Xf.displayName = Uo;
var [Wv, Qv] = Qf(Uo, { onClose() {} }),
  Kv = E.forwardRef((n, o) => {
    const {
        __scopeToast: i,
        type: a = "foreground",
        duration: c,
        open: d,
        onClose: f,
        onEscapeKeyDown: h,
        onPause: m,
        onResume: g,
        onSwipeStart: x,
        onSwipeMove: w,
        onSwipeCancel: T,
        onSwipeEnd: y,
        ...j
      } = n,
      C = bi(Uo, i),
      [k, A] = E.useState(null),
      L = Ut(o, (q) => A(q)),
      D = E.useRef(null),
      F = E.useRef(null),
      H = c || C.duration,
      K = E.useRef(0),
      Y = E.useRef(H),
      ce = E.useRef(0),
      { onToastAdd: ge, onToastRemove: pe } = C,
      xe = Hn(() => {
        k?.contains(document.activeElement) && C.viewport?.focus(), f();
      }),
      Z = E.useCallback(
        (q) => {
          !q ||
            q === 1 / 0 ||
            (window.clearTimeout(ce.current),
            (K.current = new Date().getTime()),
            (ce.current = window.setTimeout(xe, q)));
        },
        [xe]
      );
    E.useEffect(() => {
      const q = C.viewport;
      if (q) {
        const me = () => {
            Z(Y.current), g?.();
          },
          se = () => {
            const re = new Date().getTime() - K.current;
            (Y.current = Y.current - re),
              window.clearTimeout(ce.current),
              m?.();
          };
        return (
          q.addEventListener(ja, se),
          q.addEventListener(Oa, me),
          () => {
            q.removeEventListener(ja, se), q.removeEventListener(Oa, me);
          }
        );
      }
    }, [C.viewport, H, m, g, Z]),
      E.useEffect(() => {
        d && !C.isClosePausedRef.current && Z(H);
      }, [d, H, C.isClosePausedRef, Z]),
      E.useEffect(() => (ge(), () => pe()), [ge, pe]);
    const he = E.useMemo(() => (k ? op(k) : null), [k]);
    return C.viewport
      ? v.jsxs(v.Fragment, {
          children: [
            he &&
              v.jsx(qv, {
                __scopeToast: i,
                role: "status",
                "aria-live": a === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: he,
              }),
            v.jsx(Wv, {
              scope: i,
              onClose: xe,
              children: Ei.createPortal(
                v.jsx(Ka.ItemSlot, {
                  scope: i,
                  children: v.jsx(Cv, {
                    asChild: !0,
                    onEscapeKeyDown: Ve(h, () => {
                      C.isFocusedToastEscapeKeyDownRef.current || xe(),
                        (C.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: v.jsx(mt.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": d ? "open" : "closed",
                      "data-swipe-direction": C.swipeDirection,
                      ...j,
                      ref: L,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...n.style,
                      },
                      onKeyDown: Ve(n.onKeyDown, (q) => {
                        q.key === "Escape" &&
                          (h?.(q.nativeEvent),
                          q.nativeEvent.defaultPrevented ||
                            ((C.isFocusedToastEscapeKeyDownRef.current = !0),
                            xe()));
                      }),
                      onPointerDown: Ve(n.onPointerDown, (q) => {
                        q.button === 0 &&
                          (D.current = { x: q.clientX, y: q.clientY });
                      }),
                      onPointerMove: Ve(n.onPointerMove, (q) => {
                        if (!D.current) return;
                        const me = q.clientX - D.current.x,
                          se = q.clientY - D.current.y,
                          re = !!F.current,
                          I = ["left", "right"].includes(C.swipeDirection),
                          z = ["left", "up"].includes(C.swipeDirection)
                            ? Math.min
                            : Math.max,
                          V = I ? z(0, me) : 0,
                          N = I ? 0 : z(0, se),
                          M = q.pointerType === "touch" ? 10 : 2,
                          G = { x: V, y: N },
                          J = { originalEvent: q, delta: G };
                        re
                          ? ((F.current = G), ai(Uv, w, J, { discrete: !1 }))
                          : rf(G, C.swipeDirection, M)
                          ? ((F.current = G),
                            ai($v, x, J, { discrete: !1 }),
                            q.target.setPointerCapture(q.pointerId))
                          : (Math.abs(me) > M || Math.abs(se) > M) &&
                            (D.current = null);
                      }),
                      onPointerUp: Ve(n.onPointerUp, (q) => {
                        const me = F.current,
                          se = q.target;
                        if (
                          (se.hasPointerCapture(q.pointerId) &&
                            se.releasePointerCapture(q.pointerId),
                          (F.current = null),
                          (D.current = null),
                          me)
                        ) {
                          const re = q.currentTarget,
                            I = { originalEvent: q, delta: me };
                          rf(me, C.swipeDirection, C.swipeThreshold)
                            ? ai(Hv, y, I, { discrete: !0 })
                            : ai(Vv, T, I, { discrete: !0 }),
                            re.addEventListener(
                              "click",
                              (z) => z.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                C.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  qv = (n) => {
    const { __scopeToast: o, children: i, ...a } = n,
      c = bi(Uo, o),
      [d, f] = E.useState(!1),
      [h, m] = E.useState(!1);
    return (
      Xv(() => f(!0)),
      E.useEffect(() => {
        const g = window.setTimeout(() => m(!0), 1e3);
        return () => window.clearTimeout(g);
      }, []),
      h
        ? null
        : v.jsx(Wf, {
            asChild: !0,
            children: v.jsx(Ci, {
              ...a,
              children:
                d && v.jsxs(v.Fragment, { children: [c.label, " ", i] }),
            }),
          })
    );
  },
  Yv = "ToastTitle",
  Zf = E.forwardRef((n, o) => {
    const { __scopeToast: i, ...a } = n;
    return v.jsx(mt.div, { ...a, ref: o });
  });
Zf.displayName = Yv;
var Gv = "ToastDescription",
  Jf = E.forwardRef((n, o) => {
    const { __scopeToast: i, ...a } = n;
    return v.jsx(mt.div, { ...a, ref: o });
  });
Jf.displayName = Gv;
var ep = "ToastAction",
  tp = E.forwardRef((n, o) => {
    const { altText: i, ...a } = n;
    return i.trim()
      ? v.jsx(rp, {
          altText: i,
          asChild: !0,
          children: v.jsx(qa, { ...a, ref: o }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${ep}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
tp.displayName = ep;
var np = "ToastClose",
  qa = E.forwardRef((n, o) => {
    const { __scopeToast: i, ...a } = n,
      c = Qv(np, i);
    return v.jsx(rp, {
      asChild: !0,
      children: v.jsx(mt.button, {
        type: "button",
        ...a,
        ref: o,
        onClick: Ve(n.onClick, c.onClose),
      }),
    });
  });
qa.displayName = np;
var rp = E.forwardRef((n, o) => {
  const { __scopeToast: i, altText: a, ...c } = n;
  return v.jsx(mt.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": a || void 0,
    ...c,
    ref: o,
  });
});
function op(n) {
  const o = [];
  return (
    Array.from(n.childNodes).forEach((a) => {
      if (
        (a.nodeType === a.TEXT_NODE && a.textContent && o.push(a.textContent),
        Zv(a))
      ) {
        const c = a.ariaHidden || a.hidden || a.style.display === "none",
          d = a.dataset.radixToastAnnounceExclude === "";
        if (!c)
          if (d) {
            const f = a.dataset.radixToastAnnounceAlt;
            f && o.push(f);
          } else o.push(...op(a));
      }
    }),
    o
  );
}
function ai(n, o, i, { discrete: a }) {
  const c = i.originalEvent.currentTarget,
    d = new CustomEvent(n, { bubbles: !0, cancelable: !0, detail: i });
  o && c.addEventListener(n, o, { once: !0 }),
    a ? $f(c, d) : c.dispatchEvent(d);
}
var rf = (n, o, i = 0) => {
  const a = Math.abs(n.x),
    c = Math.abs(n.y),
    d = a > c;
  return o === "left" || o === "right" ? d && a > i : !d && c > i;
};
function Xv(n = () => {}) {
  const o = Hn(n);
  Wn(() => {
    let i = 0,
      a = 0;
    return (
      (i = window.requestAnimationFrame(
        () => (a = window.requestAnimationFrame(o))
      )),
      () => {
        window.cancelAnimationFrame(i), window.cancelAnimationFrame(a);
      }
    );
  }, [o]);
}
function Zv(n) {
  return n.nodeType === n.ELEMENT_NODE;
}
function Jv(n) {
  const o = [],
    i = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (a) => {
        const c = a.tagName === "INPUT" && a.type === "hidden";
        return a.disabled || a.hidden || c
          ? NodeFilter.FILTER_SKIP
          : a.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; i.nextNode(); ) o.push(i.currentNode);
  return o;
}
function ka(n) {
  const o = document.activeElement;
  return n.some((i) =>
    i === o ? !0 : (i.focus(), document.activeElement !== o)
  );
}
var ey = Kf,
  sp = Yf,
  ip = Xf,
  lp = Zf,
  ap = Jf,
  up = tp,
  cp = qa;
function dp(n) {
  var o,
    i,
    a = "";
  if (typeof n == "string" || typeof n == "number") a += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var c = n.length;
      for (o = 0; o < c; o++)
        n[o] && (i = dp(n[o])) && (a && (a += " "), (a += i));
    } else for (i in n) n[i] && (a && (a += " "), (a += i));
  return a;
}
function fp() {
  for (var n, o, i = 0, a = "", c = arguments.length; i < c; i++)
    (n = arguments[i]) && (o = dp(n)) && (a && (a += " "), (a += o));
  return a;
}
const of = (n) => (typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n),
  sf = fp,
  pp = (n, o) => (i) => {
    var a;
    if (o?.variants == null) return sf(n, i?.class, i?.className);
    const { variants: c, defaultVariants: d } = o,
      f = Object.keys(c).map((g) => {
        const x = i?.[g],
          w = d?.[g];
        if (x === null) return null;
        const T = of(x) || of(w);
        return c[g][T];
      }),
      h =
        i &&
        Object.entries(i).reduce((g, x) => {
          let [w, T] = x;
          return T === void 0 || (g[w] = T), g;
        }, {}),
      m =
        o == null || (a = o.compoundVariants) === null || a === void 0
          ? void 0
          : a.reduce((g, x) => {
              let { class: w, className: T, ...y } = x;
              return Object.entries(y).every((j) => {
                let [C, k] = j;
                return Array.isArray(k)
                  ? k.includes({ ...d, ...h }[C])
                  : { ...d, ...h }[C] === k;
              })
                ? [...g, w, T]
                : g;
            }, []);
    return sf(n, f, m, i?.class, i?.className);
  };
const ty = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  hp = (...n) =>
    n
      .filter((o, i, a) => !!o && o.trim() !== "" && a.indexOf(o) === i)
      .join(" ")
      .trim();
var ny = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const ry = E.forwardRef(
  (
    {
      color: n = "currentColor",
      size: o = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: a,
      className: c = "",
      children: d,
      iconNode: f,
      ...h
    },
    m
  ) =>
    E.createElement(
      "svg",
      {
        ref: m,
        ...ny,
        width: o,
        height: o,
        stroke: n,
        strokeWidth: a ? (Number(i) * 24) / Number(o) : i,
        className: hp("lucide", c),
        ...h,
      },
      [
        ...f.map(([g, x]) => E.createElement(g, x)),
        ...(Array.isArray(d) ? d : [d]),
      ]
    )
);
const Ie = (n, o) => {
  const i = E.forwardRef(({ className: a, ...c }, d) =>
    E.createElement(ry, {
      ref: d,
      iconNode: o,
      className: hp(`lucide-${ty(n)}`, a),
      ...c,
    })
  );
  return (i.displayName = `${n}`), i;
};
const oy = Ie("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }],
]);
const sy = Ie("Award", [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv",
    },
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
]);
const iy = Ie("Bot", [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  [
    "rect",
    { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" },
  ],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }],
]);
const mp = Ie("Brain", [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja",
    },
  ],
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
      key: "ep3f8r",
    },
  ],
  ["path", { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4", key: "1p4c4q" }],
  ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }],
]);
const ly = Ie("Briefcase", [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" },
  ],
]);
const ay = Ie("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
const uy = Ie("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp",
    },
  ],
]);
const Ya = Ie("Github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef",
    },
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
]);
const cy = Ie("GraduationCap", [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0",
    },
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }],
]);
const gp = Ie("Linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f",
    },
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
]);
const dy = Ie("Lock", [
  [
    "rect",
    {
      width: "18",
      height: "11",
      x: "3",
      y: "11",
      rx: "2",
      ry: "2",
      key: "1w4ew1",
    },
  ],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
]);
const vp = Ie("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
const fy = Ie("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
const py = Ie("Network", [
  [
    "rect",
    { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" },
  ],
  [
    "rect",
    { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" },
  ],
  ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }],
  ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }],
  ["path", { d: "M12 12V8", key: "2874zd" }],
]);
const hy = Ie("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
const my = Ie("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3",
    },
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
]);
const gy = Ie("Server", [
  [
    "rect",
    {
      width: "20",
      height: "8",
      x: "2",
      y: "2",
      rx: "2",
      ry: "2",
      key: "ngkwjq",
    },
  ],
  [
    "rect",
    {
      width: "20",
      height: "8",
      x: "2",
      y: "14",
      rx: "2",
      ry: "2",
      key: "iecqi9",
    },
  ],
  ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
  ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }],
]);
const yp = Ie("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
]);
const vy = Ie("Target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
]);
const yy = Ie("Terminal", [
  ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
  ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
]);
const xy = Ie("Wrench", [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
      key: "cbrjhi",
    },
  ],
]);
const xp = Ie("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Ga = "-",
  wy = (n) => {
    const o = Ey(n),
      { conflictingClassGroups: i, conflictingClassGroupModifiers: a } = n;
    return {
      getClassGroupId: (f) => {
        const h = f.split(Ga);
        return h[0] === "" && h.length !== 1 && h.shift(), wp(h, o) || Sy(f);
      },
      getConflictingClassGroupIds: (f, h) => {
        const m = i[f] || [];
        return h && a[f] ? [...m, ...a[f]] : m;
      },
    };
  },
  wp = (n, o) => {
    if (n.length === 0) return o.classGroupId;
    const i = n[0],
      a = o.nextPart.get(i),
      c = a ? wp(n.slice(1), a) : void 0;
    if (c) return c;
    if (o.validators.length === 0) return;
    const d = n.join(Ga);
    return o.validators.find(({ validator: f }) => f(d))?.classGroupId;
  },
  lf = /^\[(.+)\]$/,
  Sy = (n) => {
    if (lf.test(n)) {
      const o = lf.exec(n)[1],
        i = o?.substring(0, o.indexOf(":"));
      if (i) return "arbitrary.." + i;
    }
  },
  Ey = (n) => {
    const { theme: o, prefix: i } = n,
      a = { nextPart: new Map(), validators: [] };
    return (
      Cy(Object.entries(n.classGroups), i).forEach(([d, f]) => {
        Aa(f, a, d, o);
      }),
      a
    );
  },
  Aa = (n, o, i, a) => {
    n.forEach((c) => {
      if (typeof c == "string") {
        const d = c === "" ? o : af(o, c);
        d.classGroupId = i;
        return;
      }
      if (typeof c == "function") {
        if (ky(c)) {
          Aa(c(a), o, i, a);
          return;
        }
        o.validators.push({ validator: c, classGroupId: i });
        return;
      }
      Object.entries(c).forEach(([d, f]) => {
        Aa(f, af(o, d), i, a);
      });
    });
  },
  af = (n, o) => {
    let i = n;
    return (
      o.split(Ga).forEach((a) => {
        i.nextPart.has(a) ||
          i.nextPart.set(a, { nextPart: new Map(), validators: [] }),
          (i = i.nextPart.get(a));
      }),
      i
    );
  },
  ky = (n) => n.isThemeGetter,
  Cy = (n, o) =>
    o
      ? n.map(([i, a]) => {
          const c = a.map((d) =>
            typeof d == "string"
              ? o + d
              : typeof d == "object"
              ? Object.fromEntries(
                  Object.entries(d).map(([f, h]) => [o + f, h])
                )
              : d
          );
          return [i, c];
        })
      : n,
  by = (n) => {
    if (n < 1) return { get: () => {}, set: () => {} };
    let o = 0,
      i = new Map(),
      a = new Map();
    const c = (d, f) => {
      i.set(d, f), o++, o > n && ((o = 0), (a = i), (i = new Map()));
    };
    return {
      get(d) {
        let f = i.get(d);
        if (f !== void 0) return f;
        if ((f = a.get(d)) !== void 0) return c(d, f), f;
      },
      set(d, f) {
        i.has(d) ? i.set(d, f) : c(d, f);
      },
    };
  },
  Sp = "!",
  Py = (n) => {
    const { separator: o, experimentalParseClassName: i } = n,
      a = o.length === 1,
      c = o[0],
      d = o.length,
      f = (h) => {
        const m = [];
        let g = 0,
          x = 0,
          w;
        for (let k = 0; k < h.length; k++) {
          let A = h[k];
          if (g === 0) {
            if (A === c && (a || h.slice(k, k + d) === o)) {
              m.push(h.slice(x, k)), (x = k + d);
              continue;
            }
            if (A === "/") {
              w = k;
              continue;
            }
          }
          A === "[" ? g++ : A === "]" && g--;
        }
        const T = m.length === 0 ? h : h.substring(x),
          y = T.startsWith(Sp),
          j = y ? T.substring(1) : T,
          C = w && w > x ? w - x : void 0;
        return {
          modifiers: m,
          hasImportantModifier: y,
          baseClassName: j,
          maybePostfixModifierPosition: C,
        };
      };
    return i ? (h) => i({ className: h, parseClassName: f }) : f;
  },
  Ny = (n) => {
    if (n.length <= 1) return n;
    const o = [];
    let i = [];
    return (
      n.forEach((a) => {
        a[0] === "[" ? (o.push(...i.sort(), a), (i = [])) : i.push(a);
      }),
      o.push(...i.sort()),
      o
    );
  },
  Ty = (n) => ({ cache: by(n.cacheSize), parseClassName: Py(n), ...wy(n) }),
  Ry = /\s+/,
  jy = (n, o) => {
    const {
        parseClassName: i,
        getClassGroupId: a,
        getConflictingClassGroupIds: c,
      } = o,
      d = [],
      f = n.trim().split(Ry);
    let h = "";
    for (let m = f.length - 1; m >= 0; m -= 1) {
      const g = f[m],
        {
          modifiers: x,
          hasImportantModifier: w,
          baseClassName: T,
          maybePostfixModifierPosition: y,
        } = i(g);
      let j = !!y,
        C = a(j ? T.substring(0, y) : T);
      if (!C) {
        if (!j) {
          h = g + (h.length > 0 ? " " + h : h);
          continue;
        }
        if (((C = a(T)), !C)) {
          h = g + (h.length > 0 ? " " + h : h);
          continue;
        }
        j = !1;
      }
      const k = Ny(x).join(":"),
        A = w ? k + Sp : k,
        L = A + C;
      if (d.includes(L)) continue;
      d.push(L);
      const D = c(C, j);
      for (let F = 0; F < D.length; ++F) {
        const H = D[F];
        d.push(A + H);
      }
      h = g + (h.length > 0 ? " " + h : h);
    }
    return h;
  };
function Oy() {
  let n = 0,
    o,
    i,
    a = "";
  for (; n < arguments.length; )
    (o = arguments[n++]) && (i = Ep(o)) && (a && (a += " "), (a += i));
  return a;
}
const Ep = (n) => {
  if (typeof n == "string") return n;
  let o,
    i = "";
  for (let a = 0; a < n.length; a++)
    n[a] && (o = Ep(n[a])) && (i && (i += " "), (i += o));
  return i;
};
function _y(n, ...o) {
  let i,
    a,
    c,
    d = f;
  function f(m) {
    const g = o.reduce((x, w) => w(x), n());
    return (i = Ty(g)), (a = i.cache.get), (c = i.cache.set), (d = h), h(m);
  }
  function h(m) {
    const g = a(m);
    if (g) return g;
    const x = jy(m, i);
    return c(m, x), x;
  }
  return function () {
    return d(Oy.apply(null, arguments));
  };
}
const Oe = (n) => {
    const o = (i) => i[n] || [];
    return (o.isThemeGetter = !0), o;
  },
  kp = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Ay = /^\d+\/\d+$/,
  My = new Set(["px", "full", "screen"]),
  Ly = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Iy =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Dy = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  zy = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Fy =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  gn = (n) => zr(n) || My.has(n) || Ay.test(n),
  $n = (n) => Hr(n, "length", Ky),
  zr = (n) => !!n && !Number.isNaN(Number(n)),
  Ca = (n) => Hr(n, "number", zr),
  Lo = (n) => !!n && Number.isInteger(Number(n)),
  By = (n) => n.endsWith("%") && zr(n.slice(0, -1)),
  ye = (n) => kp.test(n),
  Un = (n) => Ly.test(n),
  $y = new Set(["length", "size", "percentage"]),
  Uy = (n) => Hr(n, $y, Cp),
  Vy = (n) => Hr(n, "position", Cp),
  Hy = new Set(["image", "url"]),
  Wy = (n) => Hr(n, Hy, Yy),
  Qy = (n) => Hr(n, "", qy),
  Io = () => !0,
  Hr = (n, o, i) => {
    const a = kp.exec(n);
    return a
      ? a[1]
        ? typeof o == "string"
          ? a[1] === o
          : o.has(a[1])
        : i(a[2])
      : !1;
  },
  Ky = (n) => Iy.test(n) && !Dy.test(n),
  Cp = () => !1,
  qy = (n) => zy.test(n),
  Yy = (n) => Fy.test(n),
  Gy = () => {
    const n = Oe("colors"),
      o = Oe("spacing"),
      i = Oe("blur"),
      a = Oe("brightness"),
      c = Oe("borderColor"),
      d = Oe("borderRadius"),
      f = Oe("borderSpacing"),
      h = Oe("borderWidth"),
      m = Oe("contrast"),
      g = Oe("grayscale"),
      x = Oe("hueRotate"),
      w = Oe("invert"),
      T = Oe("gap"),
      y = Oe("gradientColorStops"),
      j = Oe("gradientColorStopPositions"),
      C = Oe("inset"),
      k = Oe("margin"),
      A = Oe("opacity"),
      L = Oe("padding"),
      D = Oe("saturate"),
      F = Oe("scale"),
      H = Oe("sepia"),
      K = Oe("skew"),
      Y = Oe("space"),
      ce = Oe("translate"),
      ge = () => ["auto", "contain", "none"],
      pe = () => ["auto", "hidden", "clip", "visible", "scroll"],
      xe = () => ["auto", ye, o],
      Z = () => [ye, o],
      he = () => ["", gn, $n],
      q = () => ["auto", zr, ye],
      me = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      se = () => ["solid", "dashed", "dotted", "double", "none"],
      re = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      I = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      z = () => ["", "0", ye],
      V = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      N = () => [zr, ye];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Io],
        spacing: [gn, $n],
        blur: ["none", "", Un, ye],
        brightness: N(),
        borderColor: [n],
        borderRadius: ["none", "", "full", Un, ye],
        borderSpacing: Z(),
        borderWidth: he(),
        contrast: N(),
        grayscale: z(),
        hueRotate: N(),
        invert: z(),
        gap: Z(),
        gradientColorStops: [n],
        gradientColorStopPositions: [By, $n],
        inset: xe(),
        margin: xe(),
        opacity: N(),
        padding: Z(),
        saturate: N(),
        scale: N(),
        sepia: z(),
        skew: N(),
        space: Z(),
        translate: Z(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", ye] }],
        container: ["container"],
        columns: [{ columns: [Un] }],
        "break-after": [{ "break-after": V() }],
        "break-before": [{ "break-before": V() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...me(), ye] }],
        overflow: [{ overflow: pe() }],
        "overflow-x": [{ "overflow-x": pe() }],
        "overflow-y": [{ "overflow-y": pe() }],
        overscroll: [{ overscroll: ge() }],
        "overscroll-x": [{ "overscroll-x": ge() }],
        "overscroll-y": [{ "overscroll-y": ge() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [C] }],
        "inset-x": [{ "inset-x": [C] }],
        "inset-y": [{ "inset-y": [C] }],
        start: [{ start: [C] }],
        end: [{ end: [C] }],
        top: [{ top: [C] }],
        right: [{ right: [C] }],
        bottom: [{ bottom: [C] }],
        left: [{ left: [C] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Lo, ye] }],
        basis: [{ basis: xe() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", ye] }],
        grow: [{ grow: z() }],
        shrink: [{ shrink: z() }],
        order: [{ order: ["first", "last", "none", Lo, ye] }],
        "grid-cols": [{ "grid-cols": [Io] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Lo, ye] }, ye] }],
        "col-start": [{ "col-start": q() }],
        "col-end": [{ "col-end": q() }],
        "grid-rows": [{ "grid-rows": [Io] }],
        "row-start-end": [{ row: ["auto", { span: [Lo, ye] }, ye] }],
        "row-start": [{ "row-start": q() }],
        "row-end": [{ "row-end": q() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", ye] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", ye] }],
        gap: [{ gap: [T] }],
        "gap-x": [{ "gap-x": [T] }],
        "gap-y": [{ "gap-y": [T] }],
        "justify-content": [{ justify: ["normal", ...I()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...I(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...I(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [L] }],
        px: [{ px: [L] }],
        py: [{ py: [L] }],
        ps: [{ ps: [L] }],
        pe: [{ pe: [L] }],
        pt: [{ pt: [L] }],
        pr: [{ pr: [L] }],
        pb: [{ pb: [L] }],
        pl: [{ pl: [L] }],
        m: [{ m: [k] }],
        mx: [{ mx: [k] }],
        my: [{ my: [k] }],
        ms: [{ ms: [k] }],
        me: [{ me: [k] }],
        mt: [{ mt: [k] }],
        mr: [{ mr: [k] }],
        mb: [{ mb: [k] }],
        ml: [{ ml: [k] }],
        "space-x": [{ "space-x": [Y] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [Y] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ye, o] }],
        "min-w": [{ "min-w": [ye, o, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              ye,
              o,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Un] },
              Un,
            ],
          },
        ],
        h: [{ h: [ye, o, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [ye, o, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [ye, o, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [ye, o, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Un, $n] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Ca,
            ],
          },
        ],
        "font-family": [{ font: [Io] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              ye,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", zr, Ca] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              gn,
              ye,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", ye] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", ye] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [n] }],
        "placeholder-opacity": [{ "placeholder-opacity": [A] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [n] }],
        "text-opacity": [{ "text-opacity": [A] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...se(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", gn, $n] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", gn, ye] }],
        "text-decoration-color": [{ decoration: [n] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: Z() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              ye,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", ye] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [A] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...me(), Vy] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Uy] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              Wy,
            ],
          },
        ],
        "bg-color": [{ bg: [n] }],
        "gradient-from-pos": [{ from: [j] }],
        "gradient-via-pos": [{ via: [j] }],
        "gradient-to-pos": [{ to: [j] }],
        "gradient-from": [{ from: [y] }],
        "gradient-via": [{ via: [y] }],
        "gradient-to": [{ to: [y] }],
        rounded: [{ rounded: [d] }],
        "rounded-s": [{ "rounded-s": [d] }],
        "rounded-e": [{ "rounded-e": [d] }],
        "rounded-t": [{ "rounded-t": [d] }],
        "rounded-r": [{ "rounded-r": [d] }],
        "rounded-b": [{ "rounded-b": [d] }],
        "rounded-l": [{ "rounded-l": [d] }],
        "rounded-ss": [{ "rounded-ss": [d] }],
        "rounded-se": [{ "rounded-se": [d] }],
        "rounded-ee": [{ "rounded-ee": [d] }],
        "rounded-es": [{ "rounded-es": [d] }],
        "rounded-tl": [{ "rounded-tl": [d] }],
        "rounded-tr": [{ "rounded-tr": [d] }],
        "rounded-br": [{ "rounded-br": [d] }],
        "rounded-bl": [{ "rounded-bl": [d] }],
        "border-w": [{ border: [h] }],
        "border-w-x": [{ "border-x": [h] }],
        "border-w-y": [{ "border-y": [h] }],
        "border-w-s": [{ "border-s": [h] }],
        "border-w-e": [{ "border-e": [h] }],
        "border-w-t": [{ "border-t": [h] }],
        "border-w-r": [{ "border-r": [h] }],
        "border-w-b": [{ "border-b": [h] }],
        "border-w-l": [{ "border-l": [h] }],
        "border-opacity": [{ "border-opacity": [A] }],
        "border-style": [{ border: [...se(), "hidden"] }],
        "divide-x": [{ "divide-x": [h] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [h] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [A] }],
        "divide-style": [{ divide: se() }],
        "border-color": [{ border: [c] }],
        "border-color-x": [{ "border-x": [c] }],
        "border-color-y": [{ "border-y": [c] }],
        "border-color-s": [{ "border-s": [c] }],
        "border-color-e": [{ "border-e": [c] }],
        "border-color-t": [{ "border-t": [c] }],
        "border-color-r": [{ "border-r": [c] }],
        "border-color-b": [{ "border-b": [c] }],
        "border-color-l": [{ "border-l": [c] }],
        "divide-color": [{ divide: [c] }],
        "outline-style": [{ outline: ["", ...se()] }],
        "outline-offset": [{ "outline-offset": [gn, ye] }],
        "outline-w": [{ outline: [gn, $n] }],
        "outline-color": [{ outline: [n] }],
        "ring-w": [{ ring: he() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [n] }],
        "ring-opacity": [{ "ring-opacity": [A] }],
        "ring-offset-w": [{ "ring-offset": [gn, $n] }],
        "ring-offset-color": [{ "ring-offset": [n] }],
        shadow: [{ shadow: ["", "inner", "none", Un, Qy] }],
        "shadow-color": [{ shadow: [Io] }],
        opacity: [{ opacity: [A] }],
        "mix-blend": [
          { "mix-blend": [...re(), "plus-lighter", "plus-darker"] },
        ],
        "bg-blend": [{ "bg-blend": re() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [i] }],
        brightness: [{ brightness: [a] }],
        contrast: [{ contrast: [m] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Un, ye] }],
        grayscale: [{ grayscale: [g] }],
        "hue-rotate": [{ "hue-rotate": [x] }],
        invert: [{ invert: [w] }],
        saturate: [{ saturate: [D] }],
        sepia: [{ sepia: [H] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [i] }],
        "backdrop-brightness": [{ "backdrop-brightness": [a] }],
        "backdrop-contrast": [{ "backdrop-contrast": [m] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [g] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [x] }],
        "backdrop-invert": [{ "backdrop-invert": [w] }],
        "backdrop-opacity": [{ "backdrop-opacity": [A] }],
        "backdrop-saturate": [{ "backdrop-saturate": [D] }],
        "backdrop-sepia": [{ "backdrop-sepia": [H] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [f] }],
        "border-spacing-x": [{ "border-spacing-x": [f] }],
        "border-spacing-y": [{ "border-spacing-y": [f] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              ye,
            ],
          },
        ],
        duration: [{ duration: N() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", ye] }],
        delay: [{ delay: N() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", ye] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [F] }],
        "scale-x": [{ "scale-x": [F] }],
        "scale-y": [{ "scale-y": [F] }],
        rotate: [{ rotate: [Lo, ye] }],
        "translate-x": [{ "translate-x": [ce] }],
        "translate-y": [{ "translate-y": [ce] }],
        "skew-x": [{ "skew-x": [K] }],
        "skew-y": [{ "skew-y": [K] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              ye,
            ],
          },
        ],
        accent: [{ accent: ["auto", n] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              ye,
            ],
          },
        ],
        "caret-color": [{ caret: [n] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": Z() }],
        "scroll-mx": [{ "scroll-mx": Z() }],
        "scroll-my": [{ "scroll-my": Z() }],
        "scroll-ms": [{ "scroll-ms": Z() }],
        "scroll-me": [{ "scroll-me": Z() }],
        "scroll-mt": [{ "scroll-mt": Z() }],
        "scroll-mr": [{ "scroll-mr": Z() }],
        "scroll-mb": [{ "scroll-mb": Z() }],
        "scroll-ml": [{ "scroll-ml": Z() }],
        "scroll-p": [{ "scroll-p": Z() }],
        "scroll-px": [{ "scroll-px": Z() }],
        "scroll-py": [{ "scroll-py": Z() }],
        "scroll-ps": [{ "scroll-ps": Z() }],
        "scroll-pe": [{ "scroll-pe": Z() }],
        "scroll-pt": [{ "scroll-pt": Z() }],
        "scroll-pr": [{ "scroll-pr": Z() }],
        "scroll-pb": [{ "scroll-pb": Z() }],
        "scroll-pl": [{ "scroll-pl": Z() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", ye] },
        ],
        fill: [{ fill: [n, "none"] }],
        "stroke-w": [{ stroke: [gn, $n, Ca] }],
        stroke: [{ stroke: [n, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  Xy = _y(Gy);
function qn(...n) {
  return Xy(fp(n));
}
const Zy = ey,
  bp = E.forwardRef(({ className: n, ...o }, i) =>
    v.jsx(sp, {
      ref: i,
      className: qn(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        n
      ),
      ...o,
    })
  );
bp.displayName = sp.displayName;
const Jy = pp(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  Pp = E.forwardRef(({ className: n, variant: o, ...i }, a) =>
    v.jsx(ip, { ref: a, className: qn(Jy({ variant: o }), n), ...i })
  );
Pp.displayName = ip.displayName;
const e0 = E.forwardRef(({ className: n, ...o }, i) =>
  v.jsx(up, {
    ref: i,
    className: qn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      n
    ),
    ...o,
  })
);
e0.displayName = up.displayName;
const Np = E.forwardRef(({ className: n, ...o }, i) =>
  v.jsx(cp, {
    ref: i,
    className: qn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      n
    ),
    "toast-close": "",
    ...o,
    children: v.jsx(xp, { className: "h-4 w-4" }),
  })
);
Np.displayName = cp.displayName;
const Tp = E.forwardRef(({ className: n, ...o }, i) =>
  v.jsx(lp, { ref: i, className: qn("text-sm font-semibold", n), ...o })
);
Tp.displayName = lp.displayName;
const Rp = E.forwardRef(({ className: n, ...o }, i) =>
  v.jsx(ap, { ref: i, className: qn("text-sm opacity-90", n), ...o })
);
Rp.displayName = ap.displayName;
function t0() {
  const { toasts: n } = lv();
  return v.jsxs(Zy, {
    children: [
      n.map(function ({ id: o, title: i, description: a, action: c, ...d }) {
        return v.jsxs(
          Pp,
          {
            ...d,
            children: [
              v.jsxs("div", {
                className: "grid gap-1",
                children: [
                  i && v.jsx(Tp, { children: i }),
                  a && v.jsx(Rp, { children: a }),
                ],
              }),
              c,
              v.jsx(Np, {}),
            ],
          },
          o
        );
      }),
      v.jsx(bp, {}),
    ],
  });
}
const n0 = ["top", "right", "bottom", "left"],
  Qn = Math.min,
  wt = Math.max,
  mi = Math.round,
  ui = Math.floor,
  rn = (n) => ({ x: n, y: n }),
  r0 = { left: "right", right: "left", bottom: "top", top: "bottom" },
  o0 = { start: "end", end: "start" };
function Ma(n, o, i) {
  return wt(n, Qn(o, i));
}
function vn(n, o) {
  return typeof n == "function" ? n(o) : n;
}
function yn(n) {
  return n.split("-")[0];
}
function Wr(n) {
  return n.split("-")[1];
}
function Xa(n) {
  return n === "x" ? "y" : "x";
}
function Za(n) {
  return n === "y" ? "height" : "width";
}
const s0 = new Set(["top", "bottom"]);
function nn(n) {
  return s0.has(yn(n)) ? "y" : "x";
}
function Ja(n) {
  return Xa(nn(n));
}
function i0(n, o, i) {
  i === void 0 && (i = !1);
  const a = Wr(n),
    c = Ja(n),
    d = Za(c);
  let f =
    c === "x"
      ? a === (i ? "end" : "start")
        ? "right"
        : "left"
      : a === "start"
      ? "bottom"
      : "top";
  return o.reference[d] > o.floating[d] && (f = gi(f)), [f, gi(f)];
}
function l0(n) {
  const o = gi(n);
  return [La(n), o, La(o)];
}
function La(n) {
  return n.replace(/start|end/g, (o) => o0[o]);
}
const uf = ["left", "right"],
  cf = ["right", "left"],
  a0 = ["top", "bottom"],
  u0 = ["bottom", "top"];
function c0(n, o, i) {
  switch (n) {
    case "top":
    case "bottom":
      return i ? (o ? cf : uf) : o ? uf : cf;
    case "left":
    case "right":
      return o ? a0 : u0;
    default:
      return [];
  }
}
function d0(n, o, i, a) {
  const c = Wr(n);
  let d = c0(yn(n), i === "start", a);
  return (
    c && ((d = d.map((f) => f + "-" + c)), o && (d = d.concat(d.map(La)))), d
  );
}
function gi(n) {
  return n.replace(/left|right|bottom|top/g, (o) => r0[o]);
}
function f0(n) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...n };
}
function jp(n) {
  return typeof n != "number"
    ? f0(n)
    : { top: n, right: n, bottom: n, left: n };
}
function vi(n) {
  const { x: o, y: i, width: a, height: c } = n;
  return {
    width: a,
    height: c,
    top: i,
    left: o,
    right: o + a,
    bottom: i + c,
    x: o,
    y: i,
  };
}
function df(n, o, i) {
  let { reference: a, floating: c } = n;
  const d = nn(o),
    f = Ja(o),
    h = Za(f),
    m = yn(o),
    g = d === "y",
    x = a.x + a.width / 2 - c.width / 2,
    w = a.y + a.height / 2 - c.height / 2,
    T = a[h] / 2 - c[h] / 2;
  let y;
  switch (m) {
    case "top":
      y = { x, y: a.y - c.height };
      break;
    case "bottom":
      y = { x, y: a.y + a.height };
      break;
    case "right":
      y = { x: a.x + a.width, y: w };
      break;
    case "left":
      y = { x: a.x - c.width, y: w };
      break;
    default:
      y = { x: a.x, y: a.y };
  }
  switch (Wr(o)) {
    case "start":
      y[f] -= T * (i && g ? -1 : 1);
      break;
    case "end":
      y[f] += T * (i && g ? -1 : 1);
      break;
  }
  return y;
}
const p0 = async (n, o, i) => {
  const {
      placement: a = "bottom",
      strategy: c = "absolute",
      middleware: d = [],
      platform: f,
    } = i,
    h = d.filter(Boolean),
    m = await (f.isRTL == null ? void 0 : f.isRTL(o));
  let g = await f.getElementRects({ reference: n, floating: o, strategy: c }),
    { x, y: w } = df(g, a, m),
    T = a,
    y = {},
    j = 0;
  for (let C = 0; C < h.length; C++) {
    const { name: k, fn: A } = h[C],
      {
        x: L,
        y: D,
        data: F,
        reset: H,
      } = await A({
        x,
        y: w,
        initialPlacement: a,
        placement: T,
        strategy: c,
        middlewareData: y,
        rects: g,
        platform: f,
        elements: { reference: n, floating: o },
      });
    (x = L ?? x),
      (w = D ?? w),
      (y = { ...y, [k]: { ...y[k], ...F } }),
      H &&
        j <= 50 &&
        (j++,
        typeof H == "object" &&
          (H.placement && (T = H.placement),
          H.rects &&
            (g =
              H.rects === !0
                ? await f.getElementRects({
                    reference: n,
                    floating: o,
                    strategy: c,
                  })
                : H.rects),
          ({ x, y: w } = df(g, T, m))),
        (C = -1));
  }
  return { x, y: w, placement: T, strategy: c, middlewareData: y };
};
async function zo(n, o) {
  var i;
  o === void 0 && (o = {});
  const { x: a, y: c, platform: d, rects: f, elements: h, strategy: m } = n,
    {
      boundary: g = "clippingAncestors",
      rootBoundary: x = "viewport",
      elementContext: w = "floating",
      altBoundary: T = !1,
      padding: y = 0,
    } = vn(o, n),
    j = jp(y),
    k = h[T ? (w === "floating" ? "reference" : "floating") : w],
    A = vi(
      await d.getClippingRect({
        element:
          (i = await (d.isElement == null ? void 0 : d.isElement(k))) == null ||
          i
            ? k
            : k.contextElement ||
              (await (d.getDocumentElement == null
                ? void 0
                : d.getDocumentElement(h.floating))),
        boundary: g,
        rootBoundary: x,
        strategy: m,
      })
    ),
    L =
      w === "floating"
        ? { x: a, y: c, width: f.floating.width, height: f.floating.height }
        : f.reference,
    D = await (d.getOffsetParent == null
      ? void 0
      : d.getOffsetParent(h.floating)),
    F = (await (d.isElement == null ? void 0 : d.isElement(D)))
      ? (await (d.getScale == null ? void 0 : d.getScale(D))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    H = vi(
      d.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await d.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: h,
            rect: L,
            offsetParent: D,
            strategy: m,
          })
        : L
    );
  return {
    top: (A.top - H.top + j.top) / F.y,
    bottom: (H.bottom - A.bottom + j.bottom) / F.y,
    left: (A.left - H.left + j.left) / F.x,
    right: (H.right - A.right + j.right) / F.x,
  };
}
const h0 = (n) => ({
    name: "arrow",
    options: n,
    async fn(o) {
      const {
          x: i,
          y: a,
          placement: c,
          rects: d,
          platform: f,
          elements: h,
          middlewareData: m,
        } = o,
        { element: g, padding: x = 0 } = vn(n, o) || {};
      if (g == null) return {};
      const w = jp(x),
        T = { x: i, y: a },
        y = Ja(c),
        j = Za(y),
        C = await f.getDimensions(g),
        k = y === "y",
        A = k ? "top" : "left",
        L = k ? "bottom" : "right",
        D = k ? "clientHeight" : "clientWidth",
        F = d.reference[j] + d.reference[y] - T[y] - d.floating[j],
        H = T[y] - d.reference[y],
        K = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(g));
      let Y = K ? K[D] : 0;
      (!Y || !(await (f.isElement == null ? void 0 : f.isElement(K)))) &&
        (Y = h.floating[D] || d.floating[j]);
      const ce = F / 2 - H / 2,
        ge = Y / 2 - C[j] / 2 - 1,
        pe = Qn(w[A], ge),
        xe = Qn(w[L], ge),
        Z = pe,
        he = Y - C[j] - xe,
        q = Y / 2 - C[j] / 2 + ce,
        me = Ma(Z, q, he),
        se =
          !m.arrow &&
          Wr(c) != null &&
          q !== me &&
          d.reference[j] / 2 - (q < Z ? pe : xe) - C[j] / 2 < 0,
        re = se ? (q < Z ? q - Z : q - he) : 0;
      return {
        [y]: T[y] + re,
        data: {
          [y]: me,
          centerOffset: q - me - re,
          ...(se && { alignmentOffset: re }),
        },
        reset: se,
      };
    },
  }),
  m0 = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: "flip",
        options: n,
        async fn(o) {
          var i, a;
          const {
              placement: c,
              middlewareData: d,
              rects: f,
              initialPlacement: h,
              platform: m,
              elements: g,
            } = o,
            {
              mainAxis: x = !0,
              crossAxis: w = !0,
              fallbackPlacements: T,
              fallbackStrategy: y = "bestFit",
              fallbackAxisSideDirection: j = "none",
              flipAlignment: C = !0,
              ...k
            } = vn(n, o);
          if ((i = d.arrow) != null && i.alignmentOffset) return {};
          const A = yn(c),
            L = nn(h),
            D = yn(h) === h,
            F = await (m.isRTL == null ? void 0 : m.isRTL(g.floating)),
            H = T || (D || !C ? [gi(h)] : l0(h)),
            K = j !== "none";
          !T && K && H.push(...d0(h, C, j, F));
          const Y = [h, ...H],
            ce = await zo(o, k),
            ge = [];
          let pe = ((a = d.flip) == null ? void 0 : a.overflows) || [];
          if ((x && ge.push(ce[A]), w)) {
            const q = i0(c, f, F);
            ge.push(ce[q[0]], ce[q[1]]);
          }
          if (
            ((pe = [...pe, { placement: c, overflows: ge }]),
            !ge.every((q) => q <= 0))
          ) {
            var xe, Z;
            const q = (((xe = d.flip) == null ? void 0 : xe.index) || 0) + 1,
              me = Y[q];
            if (
              me &&
              (!(w === "alignment" ? L !== nn(me) : !1) ||
                pe.every((I) => I.overflows[0] > 0 && nn(I.placement) === L))
            )
              return {
                data: { index: q, overflows: pe },
                reset: { placement: me },
              };
            let se =
              (Z = pe
                .filter((re) => re.overflows[0] <= 0)
                .sort((re, I) => re.overflows[1] - I.overflows[1])[0]) == null
                ? void 0
                : Z.placement;
            if (!se)
              switch (y) {
                case "bestFit": {
                  var he;
                  const re =
                    (he = pe
                      .filter((I) => {
                        if (K) {
                          const z = nn(I.placement);
                          return z === L || z === "y";
                        }
                        return !0;
                      })
                      .map((I) => [
                        I.placement,
                        I.overflows
                          .filter((z) => z > 0)
                          .reduce((z, V) => z + V, 0),
                      ])
                      .sort((I, z) => I[1] - z[1])[0]) == null
                      ? void 0
                      : he[0];
                  re && (se = re);
                  break;
                }
                case "initialPlacement":
                  se = h;
                  break;
              }
            if (c !== se) return { reset: { placement: se } };
          }
          return {};
        },
      }
    );
  };
function ff(n, o) {
  return {
    top: n.top - o.height,
    right: n.right - o.width,
    bottom: n.bottom - o.height,
    left: n.left - o.width,
  };
}
function pf(n) {
  return n0.some((o) => n[o] >= 0);
}
const g0 = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: "hide",
        options: n,
        async fn(o) {
          const { rects: i } = o,
            { strategy: a = "referenceHidden", ...c } = vn(n, o);
          switch (a) {
            case "referenceHidden": {
              const d = await zo(o, { ...c, elementContext: "reference" }),
                f = ff(d, i.reference);
              return {
                data: { referenceHiddenOffsets: f, referenceHidden: pf(f) },
              };
            }
            case "escaped": {
              const d = await zo(o, { ...c, altBoundary: !0 }),
                f = ff(d, i.floating);
              return { data: { escapedOffsets: f, escaped: pf(f) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Op = new Set(["left", "top"]);
async function v0(n, o) {
  const { placement: i, platform: a, elements: c } = n,
    d = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)),
    f = yn(i),
    h = Wr(i),
    m = nn(i) === "y",
    g = Op.has(f) ? -1 : 1,
    x = d && m ? -1 : 1,
    w = vn(o, n);
  let {
    mainAxis: T,
    crossAxis: y,
    alignmentAxis: j,
  } = typeof w == "number"
    ? { mainAxis: w, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: w.mainAxis || 0,
        crossAxis: w.crossAxis || 0,
        alignmentAxis: w.alignmentAxis,
      };
  return (
    h && typeof j == "number" && (y = h === "end" ? j * -1 : j),
    m ? { x: y * x, y: T * g } : { x: T * g, y: y * x }
  );
}
const y0 = function (n) {
    return (
      n === void 0 && (n = 0),
      {
        name: "offset",
        options: n,
        async fn(o) {
          var i, a;
          const { x: c, y: d, placement: f, middlewareData: h } = o,
            m = await v0(o, n);
          return f === ((i = h.offset) == null ? void 0 : i.placement) &&
            (a = h.arrow) != null &&
            a.alignmentOffset
            ? {}
            : { x: c + m.x, y: d + m.y, data: { ...m, placement: f } };
        },
      }
    );
  },
  x0 = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: "shift",
        options: n,
        async fn(o) {
          const { x: i, y: a, placement: c } = o,
            {
              mainAxis: d = !0,
              crossAxis: f = !1,
              limiter: h = {
                fn: (k) => {
                  let { x: A, y: L } = k;
                  return { x: A, y: L };
                },
              },
              ...m
            } = vn(n, o),
            g = { x: i, y: a },
            x = await zo(o, m),
            w = nn(yn(c)),
            T = Xa(w);
          let y = g[T],
            j = g[w];
          if (d) {
            const k = T === "y" ? "top" : "left",
              A = T === "y" ? "bottom" : "right",
              L = y + x[k],
              D = y - x[A];
            y = Ma(L, y, D);
          }
          if (f) {
            const k = w === "y" ? "top" : "left",
              A = w === "y" ? "bottom" : "right",
              L = j + x[k],
              D = j - x[A];
            j = Ma(L, j, D);
          }
          const C = h.fn({ ...o, [T]: y, [w]: j });
          return {
            ...C,
            data: { x: C.x - i, y: C.y - a, enabled: { [T]: d, [w]: f } },
          };
        },
      }
    );
  },
  w0 = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        options: n,
        fn(o) {
          const { x: i, y: a, placement: c, rects: d, middlewareData: f } = o,
            { offset: h = 0, mainAxis: m = !0, crossAxis: g = !0 } = vn(n, o),
            x = { x: i, y: a },
            w = nn(c),
            T = Xa(w);
          let y = x[T],
            j = x[w];
          const C = vn(h, o),
            k =
              typeof C == "number"
                ? { mainAxis: C, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...C };
          if (m) {
            const D = T === "y" ? "height" : "width",
              F = d.reference[T] - d.floating[D] + k.mainAxis,
              H = d.reference[T] + d.reference[D] - k.mainAxis;
            y < F ? (y = F) : y > H && (y = H);
          }
          if (g) {
            var A, L;
            const D = T === "y" ? "width" : "height",
              F = Op.has(yn(c)),
              H =
                d.reference[w] -
                d.floating[D] +
                ((F && ((A = f.offset) == null ? void 0 : A[w])) || 0) +
                (F ? 0 : k.crossAxis),
              K =
                d.reference[w] +
                d.reference[D] +
                (F ? 0 : ((L = f.offset) == null ? void 0 : L[w]) || 0) -
                (F ? k.crossAxis : 0);
            j < H ? (j = H) : j > K && (j = K);
          }
          return { [T]: y, [w]: j };
        },
      }
    );
  },
  S0 = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: "size",
        options: n,
        async fn(o) {
          var i, a;
          const { placement: c, rects: d, platform: f, elements: h } = o,
            { apply: m = () => {}, ...g } = vn(n, o),
            x = await zo(o, g),
            w = yn(c),
            T = Wr(c),
            y = nn(c) === "y",
            { width: j, height: C } = d.floating;
          let k, A;
          w === "top" || w === "bottom"
            ? ((k = w),
              (A =
                T ===
                ((await (f.isRTL == null ? void 0 : f.isRTL(h.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((A = w), (k = T === "end" ? "top" : "bottom"));
          const L = C - x.top - x.bottom,
            D = j - x.left - x.right,
            F = Qn(C - x[k], L),
            H = Qn(j - x[A], D),
            K = !o.middlewareData.shift;
          let Y = F,
            ce = H;
          if (
            ((i = o.middlewareData.shift) != null && i.enabled.x && (ce = D),
            (a = o.middlewareData.shift) != null && a.enabled.y && (Y = L),
            K && !T)
          ) {
            const pe = wt(x.left, 0),
              xe = wt(x.right, 0),
              Z = wt(x.top, 0),
              he = wt(x.bottom, 0);
            y
              ? (ce =
                  j -
                  2 * (pe !== 0 || xe !== 0 ? pe + xe : wt(x.left, x.right)))
              : (Y =
                  C - 2 * (Z !== 0 || he !== 0 ? Z + he : wt(x.top, x.bottom)));
          }
          await m({ ...o, availableWidth: ce, availableHeight: Y });
          const ge = await f.getDimensions(h.floating);
          return j !== ge.width || C !== ge.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Pi() {
  return typeof window < "u";
}
function Qr(n) {
  return _p(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function St(n) {
  var o;
  return (
    (n == null || (o = n.ownerDocument) == null ? void 0 : o.defaultView) ||
    window
  );
}
function sn(n) {
  var o;
  return (o = (_p(n) ? n.ownerDocument : n.document) || window.document) == null
    ? void 0
    : o.documentElement;
}
function _p(n) {
  return Pi() ? n instanceof Node || n instanceof St(n).Node : !1;
}
function Vt(n) {
  return Pi() ? n instanceof Element || n instanceof St(n).Element : !1;
}
function on(n) {
  return Pi() ? n instanceof HTMLElement || n instanceof St(n).HTMLElement : !1;
}
function hf(n) {
  return !Pi() || typeof ShadowRoot > "u"
    ? !1
    : n instanceof ShadowRoot || n instanceof St(n).ShadowRoot;
}
const E0 = new Set(["inline", "contents"]);
function Vo(n) {
  const { overflow: o, overflowX: i, overflowY: a, display: c } = Ht(n);
  return /auto|scroll|overlay|hidden|clip/.test(o + a + i) && !E0.has(c);
}
const k0 = new Set(["table", "td", "th"]);
function C0(n) {
  return k0.has(Qr(n));
}
const b0 = [":popover-open", ":modal"];
function Ni(n) {
  return b0.some((o) => {
    try {
      return n.matches(o);
    } catch {
      return !1;
    }
  });
}
const P0 = ["transform", "translate", "scale", "rotate", "perspective"],
  N0 = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  T0 = ["paint", "layout", "strict", "content"];
function eu(n) {
  const o = tu(),
    i = Vt(n) ? Ht(n) : n;
  return (
    P0.some((a) => (i[a] ? i[a] !== "none" : !1)) ||
    (i.containerType ? i.containerType !== "normal" : !1) ||
    (!o && (i.backdropFilter ? i.backdropFilter !== "none" : !1)) ||
    (!o && (i.filter ? i.filter !== "none" : !1)) ||
    N0.some((a) => (i.willChange || "").includes(a)) ||
    T0.some((a) => (i.contain || "").includes(a))
  );
}
function R0(n) {
  let o = Kn(n);
  for (; on(o) && !$r(o); ) {
    if (eu(o)) return o;
    if (Ni(o)) return null;
    o = Kn(o);
  }
  return null;
}
function tu() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const j0 = new Set(["html", "body", "#document"]);
function $r(n) {
  return j0.has(Qr(n));
}
function Ht(n) {
  return St(n).getComputedStyle(n);
}
function Ti(n) {
  return Vt(n)
    ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop }
    : { scrollLeft: n.scrollX, scrollTop: n.scrollY };
}
function Kn(n) {
  if (Qr(n) === "html") return n;
  const o = n.assignedSlot || n.parentNode || (hf(n) && n.host) || sn(n);
  return hf(o) ? o.host : o;
}
function Ap(n) {
  const o = Kn(n);
  return $r(o)
    ? n.ownerDocument
      ? n.ownerDocument.body
      : n.body
    : on(o) && Vo(o)
    ? o
    : Ap(o);
}
function Fo(n, o, i) {
  var a;
  o === void 0 && (o = []), i === void 0 && (i = !0);
  const c = Ap(n),
    d = c === ((a = n.ownerDocument) == null ? void 0 : a.body),
    f = St(c);
  if (d) {
    const h = Ia(f);
    return o.concat(
      f,
      f.visualViewport || [],
      Vo(c) ? c : [],
      h && i ? Fo(h) : []
    );
  }
  return o.concat(c, Fo(c, [], i));
}
function Ia(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function Mp(n) {
  const o = Ht(n);
  let i = parseFloat(o.width) || 0,
    a = parseFloat(o.height) || 0;
  const c = on(n),
    d = c ? n.offsetWidth : i,
    f = c ? n.offsetHeight : a,
    h = mi(i) !== d || mi(a) !== f;
  return h && ((i = d), (a = f)), { width: i, height: a, $: h };
}
function nu(n) {
  return Vt(n) ? n : n.contextElement;
}
function Fr(n) {
  const o = nu(n);
  if (!on(o)) return rn(1);
  const i = o.getBoundingClientRect(),
    { width: a, height: c, $: d } = Mp(o);
  let f = (d ? mi(i.width) : i.width) / a,
    h = (d ? mi(i.height) : i.height) / c;
  return (
    (!f || !Number.isFinite(f)) && (f = 1),
    (!h || !Number.isFinite(h)) && (h = 1),
    { x: f, y: h }
  );
}
const O0 = rn(0);
function Lp(n) {
  const o = St(n);
  return !tu() || !o.visualViewport
    ? O0
    : { x: o.visualViewport.offsetLeft, y: o.visualViewport.offsetTop };
}
function _0(n, o, i) {
  return o === void 0 && (o = !1), !i || (o && i !== St(n)) ? !1 : o;
}
function ur(n, o, i, a) {
  o === void 0 && (o = !1), i === void 0 && (i = !1);
  const c = n.getBoundingClientRect(),
    d = nu(n);
  let f = rn(1);
  o && (a ? Vt(a) && (f = Fr(a)) : (f = Fr(n)));
  const h = _0(d, i, a) ? Lp(d) : rn(0);
  let m = (c.left + h.x) / f.x,
    g = (c.top + h.y) / f.y,
    x = c.width / f.x,
    w = c.height / f.y;
  if (d) {
    const T = St(d),
      y = a && Vt(a) ? St(a) : a;
    let j = T,
      C = Ia(j);
    for (; C && a && y !== j; ) {
      const k = Fr(C),
        A = C.getBoundingClientRect(),
        L = Ht(C),
        D = A.left + (C.clientLeft + parseFloat(L.paddingLeft)) * k.x,
        F = A.top + (C.clientTop + parseFloat(L.paddingTop)) * k.y;
      (m *= k.x),
        (g *= k.y),
        (x *= k.x),
        (w *= k.y),
        (m += D),
        (g += F),
        (j = St(C)),
        (C = Ia(j));
    }
  }
  return vi({ width: x, height: w, x: m, y: g });
}
function ru(n, o) {
  const i = Ti(n).scrollLeft;
  return o ? o.left + i : ur(sn(n)).left + i;
}
function Ip(n, o, i) {
  i === void 0 && (i = !1);
  const a = n.getBoundingClientRect(),
    c = a.left + o.scrollLeft - (i ? 0 : ru(n, a)),
    d = a.top + o.scrollTop;
  return { x: c, y: d };
}
function A0(n) {
  let { elements: o, rect: i, offsetParent: a, strategy: c } = n;
  const d = c === "fixed",
    f = sn(a),
    h = o ? Ni(o.floating) : !1;
  if (a === f || (h && d)) return i;
  let m = { scrollLeft: 0, scrollTop: 0 },
    g = rn(1);
  const x = rn(0),
    w = on(a);
  if (
    (w || (!w && !d)) &&
    ((Qr(a) !== "body" || Vo(f)) && (m = Ti(a)), on(a))
  ) {
    const y = ur(a);
    (g = Fr(a)), (x.x = y.x + a.clientLeft), (x.y = y.y + a.clientTop);
  }
  const T = f && !w && !d ? Ip(f, m, !0) : rn(0);
  return {
    width: i.width * g.x,
    height: i.height * g.y,
    x: i.x * g.x - m.scrollLeft * g.x + x.x + T.x,
    y: i.y * g.y - m.scrollTop * g.y + x.y + T.y,
  };
}
function M0(n) {
  return Array.from(n.getClientRects());
}
function L0(n) {
  const o = sn(n),
    i = Ti(n),
    a = n.ownerDocument.body,
    c = wt(o.scrollWidth, o.clientWidth, a.scrollWidth, a.clientWidth),
    d = wt(o.scrollHeight, o.clientHeight, a.scrollHeight, a.clientHeight);
  let f = -i.scrollLeft + ru(n);
  const h = -i.scrollTop;
  return (
    Ht(a).direction === "rtl" && (f += wt(o.clientWidth, a.clientWidth) - c),
    { width: c, height: d, x: f, y: h }
  );
}
function I0(n, o) {
  const i = St(n),
    a = sn(n),
    c = i.visualViewport;
  let d = a.clientWidth,
    f = a.clientHeight,
    h = 0,
    m = 0;
  if (c) {
    (d = c.width), (f = c.height);
    const g = tu();
    (!g || (g && o === "fixed")) && ((h = c.offsetLeft), (m = c.offsetTop));
  }
  return { width: d, height: f, x: h, y: m };
}
const D0 = new Set(["absolute", "fixed"]);
function z0(n, o) {
  const i = ur(n, !0, o === "fixed"),
    a = i.top + n.clientTop,
    c = i.left + n.clientLeft,
    d = on(n) ? Fr(n) : rn(1),
    f = n.clientWidth * d.x,
    h = n.clientHeight * d.y,
    m = c * d.x,
    g = a * d.y;
  return { width: f, height: h, x: m, y: g };
}
function mf(n, o, i) {
  let a;
  if (o === "viewport") a = I0(n, i);
  else if (o === "document") a = L0(sn(n));
  else if (Vt(o)) a = z0(o, i);
  else {
    const c = Lp(n);
    a = { x: o.x - c.x, y: o.y - c.y, width: o.width, height: o.height };
  }
  return vi(a);
}
function Dp(n, o) {
  const i = Kn(n);
  return i === o || !Vt(i) || $r(i)
    ? !1
    : Ht(i).position === "fixed" || Dp(i, o);
}
function F0(n, o) {
  const i = o.get(n);
  if (i) return i;
  let a = Fo(n, [], !1).filter((h) => Vt(h) && Qr(h) !== "body"),
    c = null;
  const d = Ht(n).position === "fixed";
  let f = d ? Kn(n) : n;
  for (; Vt(f) && !$r(f); ) {
    const h = Ht(f),
      m = eu(f);
    !m && h.position === "fixed" && (c = null),
      (
        d
          ? !m && !c
          : (!m && h.position === "static" && !!c && D0.has(c.position)) ||
            (Vo(f) && !m && Dp(n, f))
      )
        ? (a = a.filter((x) => x !== f))
        : (c = h),
      (f = Kn(f));
  }
  return o.set(n, a), a;
}
function B0(n) {
  let { element: o, boundary: i, rootBoundary: a, strategy: c } = n;
  const f = [
      ...(i === "clippingAncestors"
        ? Ni(o)
          ? []
          : F0(o, this._c)
        : [].concat(i)),
      a,
    ],
    h = f[0],
    m = f.reduce((g, x) => {
      const w = mf(o, x, c);
      return (
        (g.top = wt(w.top, g.top)),
        (g.right = Qn(w.right, g.right)),
        (g.bottom = Qn(w.bottom, g.bottom)),
        (g.left = wt(w.left, g.left)),
        g
      );
    }, mf(o, h, c));
  return {
    width: m.right - m.left,
    height: m.bottom - m.top,
    x: m.left,
    y: m.top,
  };
}
function $0(n) {
  const { width: o, height: i } = Mp(n);
  return { width: o, height: i };
}
function U0(n, o, i) {
  const a = on(o),
    c = sn(o),
    d = i === "fixed",
    f = ur(n, !0, d, o);
  let h = { scrollLeft: 0, scrollTop: 0 };
  const m = rn(0);
  function g() {
    m.x = ru(c);
  }
  if (a || (!a && !d))
    if (((Qr(o) !== "body" || Vo(c)) && (h = Ti(o)), a)) {
      const y = ur(o, !0, d, o);
      (m.x = y.x + o.clientLeft), (m.y = y.y + o.clientTop);
    } else c && g();
  d && !a && c && g();
  const x = c && !a && !d ? Ip(c, h) : rn(0),
    w = f.left + h.scrollLeft - m.x - x.x,
    T = f.top + h.scrollTop - m.y - x.y;
  return { x: w, y: T, width: f.width, height: f.height };
}
function ba(n) {
  return Ht(n).position === "static";
}
function gf(n, o) {
  if (!on(n) || Ht(n).position === "fixed") return null;
  if (o) return o(n);
  let i = n.offsetParent;
  return sn(n) === i && (i = i.ownerDocument.body), i;
}
function zp(n, o) {
  const i = St(n);
  if (Ni(n)) return i;
  if (!on(n)) {
    let c = Kn(n);
    for (; c && !$r(c); ) {
      if (Vt(c) && !ba(c)) return c;
      c = Kn(c);
    }
    return i;
  }
  let a = gf(n, o);
  for (; a && C0(a) && ba(a); ) a = gf(a, o);
  return a && $r(a) && ba(a) && !eu(a) ? i : a || R0(n) || i;
}
const V0 = async function (n) {
  const o = this.getOffsetParent || zp,
    i = this.getDimensions,
    a = await i(n.floating);
  return {
    reference: U0(n.reference, await o(n.floating), n.strategy),
    floating: { x: 0, y: 0, width: a.width, height: a.height },
  };
};
function H0(n) {
  return Ht(n).direction === "rtl";
}
const W0 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: A0,
  getDocumentElement: sn,
  getClippingRect: B0,
  getOffsetParent: zp,
  getElementRects: V0,
  getClientRects: M0,
  getDimensions: $0,
  getScale: Fr,
  isElement: Vt,
  isRTL: H0,
};
function Fp(n, o) {
  return (
    n.x === o.x && n.y === o.y && n.width === o.width && n.height === o.height
  );
}
function Q0(n, o) {
  let i = null,
    a;
  const c = sn(n);
  function d() {
    var h;
    clearTimeout(a), (h = i) == null || h.disconnect(), (i = null);
  }
  function f(h, m) {
    h === void 0 && (h = !1), m === void 0 && (m = 1), d();
    const g = n.getBoundingClientRect(),
      { left: x, top: w, width: T, height: y } = g;
    if ((h || o(), !T || !y)) return;
    const j = ui(w),
      C = ui(c.clientWidth - (x + T)),
      k = ui(c.clientHeight - (w + y)),
      A = ui(x),
      D = {
        rootMargin: -j + "px " + -C + "px " + -k + "px " + -A + "px",
        threshold: wt(0, Qn(1, m)) || 1,
      };
    let F = !0;
    function H(K) {
      const Y = K[0].intersectionRatio;
      if (Y !== m) {
        if (!F) return f();
        Y
          ? f(!1, Y)
          : (a = setTimeout(() => {
              f(!1, 1e-7);
            }, 1e3));
      }
      Y === 1 && !Fp(g, n.getBoundingClientRect()) && f(), (F = !1);
    }
    try {
      i = new IntersectionObserver(H, { ...D, root: c.ownerDocument });
    } catch {
      i = new IntersectionObserver(H, D);
    }
    i.observe(n);
  }
  return f(!0), d;
}
function K0(n, o, i, a) {
  a === void 0 && (a = {});
  const {
      ancestorScroll: c = !0,
      ancestorResize: d = !0,
      elementResize: f = typeof ResizeObserver == "function",
      layoutShift: h = typeof IntersectionObserver == "function",
      animationFrame: m = !1,
    } = a,
    g = nu(n),
    x = c || d ? [...(g ? Fo(g) : []), ...Fo(o)] : [];
  x.forEach((A) => {
    c && A.addEventListener("scroll", i, { passive: !0 }),
      d && A.addEventListener("resize", i);
  });
  const w = g && h ? Q0(g, i) : null;
  let T = -1,
    y = null;
  f &&
    ((y = new ResizeObserver((A) => {
      let [L] = A;
      L &&
        L.target === g &&
        y &&
        (y.unobserve(o),
        cancelAnimationFrame(T),
        (T = requestAnimationFrame(() => {
          var D;
          (D = y) == null || D.observe(o);
        }))),
        i();
    })),
    g && !m && y.observe(g),
    y.observe(o));
  let j,
    C = m ? ur(n) : null;
  m && k();
  function k() {
    const A = ur(n);
    C && !Fp(C, A) && i(), (C = A), (j = requestAnimationFrame(k));
  }
  return (
    i(),
    () => {
      var A;
      x.forEach((L) => {
        c && L.removeEventListener("scroll", i),
          d && L.removeEventListener("resize", i);
      }),
        w?.(),
        (A = y) == null || A.disconnect(),
        (y = null),
        m && cancelAnimationFrame(j);
    }
  );
}
const q0 = y0,
  Y0 = x0,
  G0 = m0,
  X0 = S0,
  Z0 = g0,
  vf = h0,
  J0 = w0,
  ex = (n, o, i) => {
    const a = new Map(),
      c = { platform: W0, ...i },
      d = { ...c.platform, _c: a };
    return p0(n, o, { ...c, platform: d });
  };
var tx = typeof document < "u",
  nx = function () {},
  pi = tx ? E.useLayoutEffect : nx;
function yi(n, o) {
  if (n === o) return !0;
  if (typeof n != typeof o) return !1;
  if (typeof n == "function" && n.toString() === o.toString()) return !0;
  let i, a, c;
  if (n && o && typeof n == "object") {
    if (Array.isArray(n)) {
      if (((i = n.length), i !== o.length)) return !1;
      for (a = i; a-- !== 0; ) if (!yi(n[a], o[a])) return !1;
      return !0;
    }
    if (((c = Object.keys(n)), (i = c.length), i !== Object.keys(o).length))
      return !1;
    for (a = i; a-- !== 0; ) if (!{}.hasOwnProperty.call(o, c[a])) return !1;
    for (a = i; a-- !== 0; ) {
      const d = c[a];
      if (!(d === "_owner" && n.$$typeof) && !yi(n[d], o[d])) return !1;
    }
    return !0;
  }
  return n !== n && o !== o;
}
function Bp(n) {
  return typeof window > "u"
    ? 1
    : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function yf(n, o) {
  const i = Bp(n);
  return Math.round(o * i) / i;
}
function Pa(n) {
  const o = E.useRef(n);
  return (
    pi(() => {
      o.current = n;
    }),
    o
  );
}
function rx(n) {
  n === void 0 && (n = {});
  const {
      placement: o = "bottom",
      strategy: i = "absolute",
      middleware: a = [],
      platform: c,
      elements: { reference: d, floating: f } = {},
      transform: h = !0,
      whileElementsMounted: m,
      open: g,
    } = n,
    [x, w] = E.useState({
      x: 0,
      y: 0,
      strategy: i,
      placement: o,
      middlewareData: {},
      isPositioned: !1,
    }),
    [T, y] = E.useState(a);
  yi(T, a) || y(a);
  const [j, C] = E.useState(null),
    [k, A] = E.useState(null),
    L = E.useCallback((I) => {
      I !== K.current && ((K.current = I), C(I));
    }, []),
    D = E.useCallback((I) => {
      I !== Y.current && ((Y.current = I), A(I));
    }, []),
    F = d || j,
    H = f || k,
    K = E.useRef(null),
    Y = E.useRef(null),
    ce = E.useRef(x),
    ge = m != null,
    pe = Pa(m),
    xe = Pa(c),
    Z = Pa(g),
    he = E.useCallback(() => {
      if (!K.current || !Y.current) return;
      const I = { placement: o, strategy: i, middleware: T };
      xe.current && (I.platform = xe.current),
        ex(K.current, Y.current, I).then((z) => {
          const V = { ...z, isPositioned: Z.current !== !1 };
          q.current &&
            !yi(ce.current, V) &&
            ((ce.current = V),
            Ei.flushSync(() => {
              w(V);
            }));
        });
    }, [T, o, i, xe, Z]);
  pi(() => {
    g === !1 &&
      ce.current.isPositioned &&
      ((ce.current.isPositioned = !1), w((I) => ({ ...I, isPositioned: !1 })));
  }, [g]);
  const q = E.useRef(!1);
  pi(
    () => (
      (q.current = !0),
      () => {
        q.current = !1;
      }
    ),
    []
  ),
    pi(() => {
      if ((F && (K.current = F), H && (Y.current = H), F && H)) {
        if (pe.current) return pe.current(F, H, he);
        he();
      }
    }, [F, H, he, pe, ge]);
  const me = E.useMemo(
      () => ({ reference: K, floating: Y, setReference: L, setFloating: D }),
      [L, D]
    ),
    se = E.useMemo(() => ({ reference: F, floating: H }), [F, H]),
    re = E.useMemo(() => {
      const I = { position: i, left: 0, top: 0 };
      if (!se.floating) return I;
      const z = yf(se.floating, x.x),
        V = yf(se.floating, x.y);
      return h
        ? {
            ...I,
            transform: "translate(" + z + "px, " + V + "px)",
            ...(Bp(se.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: i, left: z, top: V };
    }, [i, h, se.floating, x.x, x.y]);
  return E.useMemo(
    () => ({ ...x, update: he, refs: me, elements: se, floatingStyles: re }),
    [x, he, me, se, re]
  );
}
const ox = (n) => {
    function o(i) {
      return {}.hasOwnProperty.call(i, "current");
    }
    return {
      name: "arrow",
      options: n,
      fn(i) {
        const { element: a, padding: c } = typeof n == "function" ? n(i) : n;
        return a && o(a)
          ? a.current != null
            ? vf({ element: a.current, padding: c }).fn(i)
            : {}
          : a
          ? vf({ element: a, padding: c }).fn(i)
          : {};
      },
    };
  },
  sx = (n, o) => ({ ...q0(n), options: [n, o] }),
  ix = (n, o) => ({ ...Y0(n), options: [n, o] }),
  lx = (n, o) => ({ ...J0(n), options: [n, o] }),
  ax = (n, o) => ({ ...G0(n), options: [n, o] }),
  ux = (n, o) => ({ ...X0(n), options: [n, o] }),
  cx = (n, o) => ({ ...Z0(n), options: [n, o] }),
  dx = (n, o) => ({ ...ox(n), options: [n, o] });
var fx = "Arrow",
  $p = E.forwardRef((n, o) => {
    const { children: i, width: a = 10, height: c = 5, ...d } = n;
    return v.jsx(mt.svg, {
      ...d,
      ref: o,
      width: a,
      height: c,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: n.asChild ? i : v.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
$p.displayName = fx;
var px = $p;
function hx(n) {
  const [o, i] = E.useState(void 0);
  return (
    Wn(() => {
      if (n) {
        i({ width: n.offsetWidth, height: n.offsetHeight });
        const a = new ResizeObserver((c) => {
          if (!Array.isArray(c) || !c.length) return;
          const d = c[0];
          let f, h;
          if ("borderBoxSize" in d) {
            const m = d.borderBoxSize,
              g = Array.isArray(m) ? m[0] : m;
            (f = g.inlineSize), (h = g.blockSize);
          } else (f = n.offsetWidth), (h = n.offsetHeight);
          i({ width: f, height: h });
        });
        return a.observe(n, { box: "border-box" }), () => a.unobserve(n);
      } else i(void 0);
    }, [n]),
    o
  );
}
var Up = "Popper",
  [Vp, Hp] = ki(Up),
  [x1, Wp] = Vp(Up),
  Qp = "PopperAnchor",
  Kp = E.forwardRef((n, o) => {
    const { __scopePopper: i, virtualRef: a, ...c } = n,
      d = Wp(Qp, i),
      f = E.useRef(null),
      h = Ut(o, f);
    return (
      E.useEffect(() => {
        d.onAnchorChange(a?.current || f.current);
      }),
      a ? null : v.jsx(mt.div, { ...c, ref: h })
    );
  });
Kp.displayName = Qp;
var ou = "PopperContent",
  [mx, gx] = Vp(ou),
  qp = E.forwardRef((n, o) => {
    const {
        __scopePopper: i,
        side: a = "bottom",
        sideOffset: c = 0,
        align: d = "center",
        alignOffset: f = 0,
        arrowPadding: h = 0,
        avoidCollisions: m = !0,
        collisionBoundary: g = [],
        collisionPadding: x = 0,
        sticky: w = "partial",
        hideWhenDetached: T = !1,
        updatePositionStrategy: y = "optimized",
        onPlaced: j,
        ...C
      } = n,
      k = Wp(ou, i),
      [A, L] = E.useState(null),
      D = Ut(o, (ie) => L(ie)),
      [F, H] = E.useState(null),
      K = hx(F),
      Y = K?.width ?? 0,
      ce = K?.height ?? 0,
      ge = a + (d !== "center" ? "-" + d : ""),
      pe =
        typeof x == "number"
          ? x
          : { top: 0, right: 0, bottom: 0, left: 0, ...x },
      xe = Array.isArray(g) ? g : [g],
      Z = xe.length > 0,
      he = { padding: pe, boundary: xe.filter(yx), altBoundary: Z },
      {
        refs: q,
        floatingStyles: me,
        placement: se,
        isPositioned: re,
        middlewareData: I,
      } = rx({
        strategy: "fixed",
        placement: ge,
        whileElementsMounted: (...ie) =>
          K0(...ie, { animationFrame: y === "always" }),
        elements: { reference: k.anchor },
        middleware: [
          sx({ mainAxis: c + ce, alignmentAxis: f }),
          m &&
            ix({
              mainAxis: !0,
              crossAxis: !1,
              limiter: w === "partial" ? lx() : void 0,
              ...he,
            }),
          m && ax({ ...he }),
          ux({
            ...he,
            apply: ({
              elements: ie,
              rects: Se,
              availableWidth: ke,
              availableHeight: Fe,
            }) => {
              const { width: Et, height: xn } = Se.reference,
                kt = ie.floating.style;
              kt.setProperty("--radix-popper-available-width", `${ke}px`),
                kt.setProperty("--radix-popper-available-height", `${Fe}px`),
                kt.setProperty("--radix-popper-anchor-width", `${Et}px`),
                kt.setProperty("--radix-popper-anchor-height", `${xn}px`);
            },
          }),
          F && dx({ element: F, padding: h }),
          xx({ arrowWidth: Y, arrowHeight: ce }),
          T && cx({ strategy: "referenceHidden", ...he }),
        ],
      }),
      [z, V] = Xp(se),
      N = Hn(j);
    Wn(() => {
      re && N?.();
    }, [re, N]);
    const M = I.arrow?.x,
      G = I.arrow?.y,
      J = I.arrow?.centerOffset !== 0,
      [ue, ve] = E.useState();
    return (
      Wn(() => {
        A && ve(window.getComputedStyle(A).zIndex);
      }, [A]),
      v.jsx("div", {
        ref: q.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...me,
          transform: re ? me.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: ue,
          "--radix-popper-transform-origin": [
            I.transformOrigin?.x,
            I.transformOrigin?.y,
          ].join(" "),
          ...(I.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: n.dir,
        children: v.jsx(mx, {
          scope: i,
          placedSide: z,
          onArrowChange: H,
          arrowX: M,
          arrowY: G,
          shouldHideArrow: J,
          children: v.jsx(mt.div, {
            "data-side": z,
            "data-align": V,
            ...C,
            ref: D,
            style: { ...C.style, animation: re ? void 0 : "none" },
          }),
        }),
      })
    );
  });
qp.displayName = ou;
var Yp = "PopperArrow",
  vx = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Gp = E.forwardRef(function (o, i) {
    const { __scopePopper: a, ...c } = o,
      d = gx(Yp, a),
      f = vx[d.placedSide];
    return v.jsx("span", {
      ref: d.onArrowChange,
      style: {
        position: "absolute",
        left: d.arrowX,
        top: d.arrowY,
        [f]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[d.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[d.placedSide],
        visibility: d.shouldHideArrow ? "hidden" : void 0,
      },
      children: v.jsx(px, {
        ...c,
        ref: i,
        style: { ...c.style, display: "block" },
      }),
    });
  });
Gp.displayName = Yp;
function yx(n) {
  return n !== null;
}
var xx = (n) => ({
  name: "transformOrigin",
  options: n,
  fn(o) {
    const { placement: i, rects: a, middlewareData: c } = o,
      f = c.arrow?.centerOffset !== 0,
      h = f ? 0 : n.arrowWidth,
      m = f ? 0 : n.arrowHeight,
      [g, x] = Xp(i),
      w = { start: "0%", center: "50%", end: "100%" }[x],
      T = (c.arrow?.x ?? 0) + h / 2,
      y = (c.arrow?.y ?? 0) + m / 2;
    let j = "",
      C = "";
    return (
      g === "bottom"
        ? ((j = f ? w : `${T}px`), (C = `${-m}px`))
        : g === "top"
        ? ((j = f ? w : `${T}px`), (C = `${a.floating.height + m}px`))
        : g === "right"
        ? ((j = `${-m}px`), (C = f ? w : `${y}px`))
        : g === "left" &&
          ((j = `${a.floating.width + m}px`), (C = f ? w : `${y}px`)),
      { data: { x: j, y: C } }
    );
  },
});
function Xp(n) {
  const [o, i = "center"] = n.split("-");
  return [o, i];
}
var wx = Kp,
  Sx = qp,
  Ex = Gp,
  [Ri] = ki("Tooltip", [Hp]),
  su = Hp(),
  Zp = "TooltipProvider",
  kx = 700,
  xf = "tooltip.open",
  [Cx, Jp] = Ri(Zp),
  eh = (n) => {
    const {
        __scopeTooltip: o,
        delayDuration: i = kx,
        skipDelayDuration: a = 300,
        disableHoverableContent: c = !1,
        children: d,
      } = n,
      f = E.useRef(!0),
      h = E.useRef(!1),
      m = E.useRef(0);
    return (
      E.useEffect(() => {
        const g = m.current;
        return () => window.clearTimeout(g);
      }, []),
      v.jsx(Cx, {
        scope: o,
        isOpenDelayedRef: f,
        delayDuration: i,
        onOpen: E.useCallback(() => {
          window.clearTimeout(m.current), (f.current = !1);
        }, []),
        onClose: E.useCallback(() => {
          window.clearTimeout(m.current),
            (m.current = window.setTimeout(() => (f.current = !0), a));
        }, [a]),
        isPointerInTransitRef: h,
        onPointerInTransitChange: E.useCallback((g) => {
          h.current = g;
        }, []),
        disableHoverableContent: c,
        children: d,
      })
    );
  };
eh.displayName = Zp;
var th = "Tooltip",
  [w1, ji] = Ri(th),
  Da = "TooltipTrigger",
  bx = E.forwardRef((n, o) => {
    const { __scopeTooltip: i, ...a } = n,
      c = ji(Da, i),
      d = Jp(Da, i),
      f = su(i),
      h = E.useRef(null),
      m = Ut(o, h, c.onTriggerChange),
      g = E.useRef(!1),
      x = E.useRef(!1),
      w = E.useCallback(() => (g.current = !1), []);
    return (
      E.useEffect(
        () => () => document.removeEventListener("pointerup", w),
        [w]
      ),
      v.jsx(wx, {
        asChild: !0,
        ...f,
        children: v.jsx(mt.button, {
          "aria-describedby": c.open ? c.contentId : void 0,
          "data-state": c.stateAttribute,
          ...a,
          ref: m,
          onPointerMove: Ve(n.onPointerMove, (T) => {
            T.pointerType !== "touch" &&
              !x.current &&
              !d.isPointerInTransitRef.current &&
              (c.onTriggerEnter(), (x.current = !0));
          }),
          onPointerLeave: Ve(n.onPointerLeave, () => {
            c.onTriggerLeave(), (x.current = !1);
          }),
          onPointerDown: Ve(n.onPointerDown, () => {
            c.open && c.onClose(),
              (g.current = !0),
              document.addEventListener("pointerup", w, { once: !0 });
          }),
          onFocus: Ve(n.onFocus, () => {
            g.current || c.onOpen();
          }),
          onBlur: Ve(n.onBlur, c.onClose),
          onClick: Ve(n.onClick, c.onClose),
        }),
      })
    );
  });
bx.displayName = Da;
var Px = "TooltipPortal",
  [S1, Nx] = Ri(Px, { forceMount: void 0 }),
  Ur = "TooltipContent",
  nh = E.forwardRef((n, o) => {
    const i = Nx(Ur, n.__scopeTooltip),
      { forceMount: a = i.forceMount, side: c = "top", ...d } = n,
      f = ji(Ur, n.__scopeTooltip);
    return v.jsx(Wa, {
      present: a || f.open,
      children: f.disableHoverableContent
        ? v.jsx(rh, { side: c, ...d, ref: o })
        : v.jsx(Tx, { side: c, ...d, ref: o }),
    });
  }),
  Tx = E.forwardRef((n, o) => {
    const i = ji(Ur, n.__scopeTooltip),
      a = Jp(Ur, n.__scopeTooltip),
      c = E.useRef(null),
      d = Ut(o, c),
      [f, h] = E.useState(null),
      { trigger: m, onClose: g } = i,
      x = c.current,
      { onPointerInTransitChange: w } = a,
      T = E.useCallback(() => {
        h(null), w(!1);
      }, [w]),
      y = E.useCallback(
        (j, C) => {
          const k = j.currentTarget,
            A = { x: j.clientX, y: j.clientY },
            L = Ax(A, k.getBoundingClientRect()),
            D = Mx(A, L),
            F = Lx(C.getBoundingClientRect()),
            H = Dx([...D, ...F]);
          h(H), w(!0);
        },
        [w]
      );
    return (
      E.useEffect(() => () => T(), [T]),
      E.useEffect(() => {
        if (m && x) {
          const j = (k) => y(k, x),
            C = (k) => y(k, m);
          return (
            m.addEventListener("pointerleave", j),
            x.addEventListener("pointerleave", C),
            () => {
              m.removeEventListener("pointerleave", j),
                x.removeEventListener("pointerleave", C);
            }
          );
        }
      }, [m, x, y, T]),
      E.useEffect(() => {
        if (f) {
          const j = (C) => {
            const k = C.target,
              A = { x: C.clientX, y: C.clientY },
              L = m?.contains(k) || x?.contains(k),
              D = !Ix(A, f);
            L ? T() : D && (T(), g());
          };
          return (
            document.addEventListener("pointermove", j),
            () => document.removeEventListener("pointermove", j)
          );
        }
      }, [m, x, f, g, T]),
      v.jsx(rh, { ...n, ref: d })
    );
  }),
  [Rx, jx] = Ri(th, { isInside: !1 }),
  Ox = dv("TooltipContent"),
  rh = E.forwardRef((n, o) => {
    const {
        __scopeTooltip: i,
        children: a,
        "aria-label": c,
        onEscapeKeyDown: d,
        onPointerDownOutside: f,
        ...h
      } = n,
      m = ji(Ur, i),
      g = su(i),
      { onClose: x } = m;
    return (
      E.useEffect(
        () => (
          document.addEventListener(xf, x),
          () => document.removeEventListener(xf, x)
        ),
        [x]
      ),
      E.useEffect(() => {
        if (m.trigger) {
          const w = (T) => {
            T.target?.contains(m.trigger) && x();
          };
          return (
            window.addEventListener("scroll", w, { capture: !0 }),
            () => window.removeEventListener("scroll", w, { capture: !0 })
          );
        }
      }, [m.trigger, x]),
      v.jsx(Ha, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: d,
        onPointerDownOutside: f,
        onFocusOutside: (w) => w.preventDefault(),
        onDismiss: x,
        children: v.jsxs(Sx, {
          "data-state": m.stateAttribute,
          ...g,
          ...h,
          ref: o,
          style: {
            ...h.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            v.jsx(Ox, { children: a }),
            v.jsx(Rx, {
              scope: i,
              isInside: !0,
              children: v.jsx(Iv, {
                id: m.contentId,
                role: "tooltip",
                children: c || a,
              }),
            }),
          ],
        }),
      })
    );
  });
nh.displayName = Ur;
var oh = "TooltipArrow",
  _x = E.forwardRef((n, o) => {
    const { __scopeTooltip: i, ...a } = n,
      c = su(i);
    return jx(oh, i).isInside ? null : v.jsx(Ex, { ...c, ...a, ref: o });
  });
_x.displayName = oh;
function Ax(n, o) {
  const i = Math.abs(o.top - n.y),
    a = Math.abs(o.bottom - n.y),
    c = Math.abs(o.right - n.x),
    d = Math.abs(o.left - n.x);
  switch (Math.min(i, a, c, d)) {
    case d:
      return "left";
    case c:
      return "right";
    case i:
      return "top";
    case a:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Mx(n, o, i = 5) {
  const a = [];
  switch (o) {
    case "top":
      a.push({ x: n.x - i, y: n.y + i }, { x: n.x + i, y: n.y + i });
      break;
    case "bottom":
      a.push({ x: n.x - i, y: n.y - i }, { x: n.x + i, y: n.y - i });
      break;
    case "left":
      a.push({ x: n.x + i, y: n.y - i }, { x: n.x + i, y: n.y + i });
      break;
    case "right":
      a.push({ x: n.x - i, y: n.y - i }, { x: n.x - i, y: n.y + i });
      break;
  }
  return a;
}
function Lx(n) {
  const { top: o, right: i, bottom: a, left: c } = n;
  return [
    { x: c, y: o },
    { x: i, y: o },
    { x: i, y: a },
    { x: c, y: a },
  ];
}
function Ix(n, o) {
  const { x: i, y: a } = n;
  let c = !1;
  for (let d = 0, f = o.length - 1; d < o.length; f = d++) {
    const h = o[d],
      m = o[f],
      g = h.x,
      x = h.y,
      w = m.x,
      T = m.y;
    x > a != T > a && i < ((w - g) * (a - x)) / (T - x) + g && (c = !c);
  }
  return c;
}
function Dx(n) {
  const o = n.slice();
  return (
    o.sort((i, a) =>
      i.x < a.x ? -1 : i.x > a.x ? 1 : i.y < a.y ? -1 : i.y > a.y ? 1 : 0
    ),
    zx(o)
  );
}
function zx(n) {
  if (n.length <= 1) return n.slice();
  const o = [];
  for (let a = 0; a < n.length; a++) {
    const c = n[a];
    for (; o.length >= 2; ) {
      const d = o[o.length - 1],
        f = o[o.length - 2];
      if ((d.x - f.x) * (c.y - f.y) >= (d.y - f.y) * (c.x - f.x)) o.pop();
      else break;
    }
    o.push(c);
  }
  o.pop();
  const i = [];
  for (let a = n.length - 1; a >= 0; a--) {
    const c = n[a];
    for (; i.length >= 2; ) {
      const d = i[i.length - 1],
        f = i[i.length - 2];
      if ((d.x - f.x) * (c.y - f.y) >= (d.y - f.y) * (c.x - f.x)) i.pop();
      else break;
    }
    i.push(c);
  }
  return (
    i.pop(),
    o.length === 1 && i.length === 1 && o[0].x === i[0].x && o[0].y === i[0].y
      ? o
      : o.concat(i)
  );
}
var Fx = eh,
  sh = nh;
const Bx = Fx,
  $x = E.forwardRef(({ className: n, sideOffset: o = 4, ...i }, a) =>
    v.jsx(sh, {
      ref: a,
      sideOffset: o,
      className: qn(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        n
      ),
      ...i,
    })
  );
$x.displayName = sh.displayName;
var Oi = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(n) {
      return (
        this.listeners.add(n),
        this.onSubscribe(),
        () => {
          this.listeners.delete(n), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  _i = typeof window > "u" || "Deno" in globalThis;
function $t() {}
function Ux(n, o) {
  return typeof n == "function" ? n(o) : n;
}
function Vx(n) {
  return typeof n == "number" && n >= 0 && n !== 1 / 0;
}
function Hx(n, o) {
  return Math.max(n + (o || 0) - Date.now(), 0);
}
function za(n, o) {
  return typeof n == "function" ? n(o) : n;
}
function Wx(n, o) {
  return typeof n == "function" ? n(o) : n;
}
function wf(n, o) {
  const {
    type: i = "all",
    exact: a,
    fetchStatus: c,
    predicate: d,
    queryKey: f,
    stale: h,
  } = n;
  if (f) {
    if (a) {
      if (o.queryHash !== iu(f, o.options)) return !1;
    } else if (!$o(o.queryKey, f)) return !1;
  }
  if (i !== "all") {
    const m = o.isActive();
    if ((i === "active" && !m) || (i === "inactive" && m)) return !1;
  }
  return !(
    (typeof h == "boolean" && o.isStale() !== h) ||
    (c && c !== o.state.fetchStatus) ||
    (d && !d(o))
  );
}
function Sf(n, o) {
  const { exact: i, status: a, predicate: c, mutationKey: d } = n;
  if (d) {
    if (!o.options.mutationKey) return !1;
    if (i) {
      if (Bo(o.options.mutationKey) !== Bo(d)) return !1;
    } else if (!$o(o.options.mutationKey, d)) return !1;
  }
  return !((a && o.state.status !== a) || (c && !c(o)));
}
function iu(n, o) {
  return (o?.queryKeyHashFn || Bo)(n);
}
function Bo(n) {
  return JSON.stringify(n, (o, i) =>
    Fa(i)
      ? Object.keys(i)
          .sort()
          .reduce((a, c) => ((a[c] = i[c]), a), {})
      : i
  );
}
function $o(n, o) {
  return n === o
    ? !0
    : typeof n != typeof o
    ? !1
    : n && o && typeof n == "object" && typeof o == "object"
    ? Object.keys(o).every((i) => $o(n[i], o[i]))
    : !1;
}
function ih(n, o) {
  if (n === o) return n;
  const i = Ef(n) && Ef(o);
  if (i || (Fa(n) && Fa(o))) {
    const a = i ? n : Object.keys(n),
      c = a.length,
      d = i ? o : Object.keys(o),
      f = d.length,
      h = i ? [] : {},
      m = new Set(a);
    let g = 0;
    for (let x = 0; x < f; x++) {
      const w = i ? x : d[x];
      ((!i && m.has(w)) || i) && n[w] === void 0 && o[w] === void 0
        ? ((h[w] = void 0), g++)
        : ((h[w] = ih(n[w], o[w])), h[w] === n[w] && n[w] !== void 0 && g++);
    }
    return c === f && g === c ? n : h;
  }
  return o;
}
function Ef(n) {
  return Array.isArray(n) && n.length === Object.keys(n).length;
}
function Fa(n) {
  if (!kf(n)) return !1;
  const o = n.constructor;
  if (o === void 0) return !0;
  const i = o.prototype;
  return !(
    !kf(i) ||
    !i.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(n) !== Object.prototype
  );
}
function kf(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function Qx(n) {
  return new Promise((o) => {
    setTimeout(o, n);
  });
}
function Kx(n, o, i) {
  return typeof i.structuralSharing == "function"
    ? i.structuralSharing(n, o)
    : i.structuralSharing !== !1
    ? ih(n, o)
    : o;
}
function qx(n, o, i = 0) {
  const a = [...n, o];
  return i && a.length > i ? a.slice(1) : a;
}
function Yx(n, o, i = 0) {
  const a = [o, ...n];
  return i && a.length > i ? a.slice(0, -1) : a;
}
var lu = Symbol();
function lh(n, o) {
  return !n.queryFn && o?.initialPromise
    ? () => o.initialPromise
    : !n.queryFn || n.queryFn === lu
    ? () => Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`))
    : n.queryFn;
}
var Gx = class extends Oi {
    #e;
    #t;
    #n;
    constructor() {
      super(),
        (this.#n = (n) => {
          if (!_i && window.addEventListener) {
            const o = () => n();
            return (
              window.addEventListener("visibilitychange", o, !1),
              () => {
                window.removeEventListener("visibilitychange", o);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(n) {
      (this.#n = n),
        this.#t?.(),
        (this.#t = n((o) => {
          typeof o == "boolean" ? this.setFocused(o) : this.onFocus();
        }));
    }
    setFocused(n) {
      this.#e !== n && ((this.#e = n), this.onFocus());
    }
    onFocus() {
      const n = this.isFocused();
      this.listeners.forEach((o) => {
        o(n);
      });
    }
    isFocused() {
      return typeof this.#e == "boolean"
        ? this.#e
        : globalThis.document?.visibilityState !== "hidden";
    }
  },
  ah = new Gx(),
  Xx = class extends Oi {
    #e = !0;
    #t;
    #n;
    constructor() {
      super(),
        (this.#n = (n) => {
          if (!_i && window.addEventListener) {
            const o = () => n(!0),
              i = () => n(!1);
            return (
              window.addEventListener("online", o, !1),
              window.addEventListener("offline", i, !1),
              () => {
                window.removeEventListener("online", o),
                  window.removeEventListener("offline", i);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(n) {
      (this.#n = n), this.#t?.(), (this.#t = n(this.setOnline.bind(this)));
    }
    setOnline(n) {
      this.#e !== n &&
        ((this.#e = n),
        this.listeners.forEach((i) => {
          i(n);
        }));
    }
    isOnline() {
      return this.#e;
    }
  },
  xi = new Xx();
function Zx() {
  let n, o;
  const i = new Promise((c, d) => {
    (n = c), (o = d);
  });
  (i.status = "pending"), i.catch(() => {});
  function a(c) {
    Object.assign(i, c), delete i.resolve, delete i.reject;
  }
  return (
    (i.resolve = (c) => {
      a({ status: "fulfilled", value: c }), n(c);
    }),
    (i.reject = (c) => {
      a({ status: "rejected", reason: c }), o(c);
    }),
    i
  );
}
function Jx(n) {
  return Math.min(1e3 * 2 ** n, 3e4);
}
function uh(n) {
  return (n ?? "online") === "online" ? xi.isOnline() : !0;
}
var ch = class extends Error {
  constructor(n) {
    super("CancelledError"),
      (this.revert = n?.revert),
      (this.silent = n?.silent);
  }
};
function Na(n) {
  return n instanceof ch;
}
function dh(n) {
  let o = !1,
    i = 0,
    a = !1,
    c;
  const d = Zx(),
    f = (C) => {
      a || (T(new ch(C)), n.abort?.());
    },
    h = () => {
      o = !0;
    },
    m = () => {
      o = !1;
    },
    g = () =>
      ah.isFocused() &&
      (n.networkMode === "always" || xi.isOnline()) &&
      n.canRun(),
    x = () => uh(n.networkMode) && n.canRun(),
    w = (C) => {
      a || ((a = !0), n.onSuccess?.(C), c?.(), d.resolve(C));
    },
    T = (C) => {
      a || ((a = !0), n.onError?.(C), c?.(), d.reject(C));
    },
    y = () =>
      new Promise((C) => {
        (c = (k) => {
          (a || g()) && C(k);
        }),
          n.onPause?.();
      }).then(() => {
        (c = void 0), a || n.onContinue?.();
      }),
    j = () => {
      if (a) return;
      let C;
      const k = i === 0 ? n.initialPromise : void 0;
      try {
        C = k ?? n.fn();
      } catch (A) {
        C = Promise.reject(A);
      }
      Promise.resolve(C)
        .then(w)
        .catch((A) => {
          if (a) return;
          const L = n.retry ?? (_i ? 0 : 3),
            D = n.retryDelay ?? Jx,
            F = typeof D == "function" ? D(i, A) : D,
            H =
              L === !0 ||
              (typeof L == "number" && i < L) ||
              (typeof L == "function" && L(i, A));
          if (o || !H) {
            T(A);
            return;
          }
          i++,
            n.onFail?.(i, A),
            Qx(F)
              .then(() => (g() ? void 0 : y()))
              .then(() => {
                o ? T(A) : j();
              });
        });
    };
  return {
    promise: d,
    cancel: f,
    continue: () => (c?.(), d),
    cancelRetry: h,
    continueRetry: m,
    canStart: x,
    start: () => (x() ? j() : y().then(j), d),
  };
}
var ew = (n) => setTimeout(n, 0);
function tw() {
  let n = [],
    o = 0,
    i = (h) => {
      h();
    },
    a = (h) => {
      h();
    },
    c = ew;
  const d = (h) => {
      o
        ? n.push(h)
        : c(() => {
            i(h);
          });
    },
    f = () => {
      const h = n;
      (n = []),
        h.length &&
          c(() => {
            a(() => {
              h.forEach((m) => {
                i(m);
              });
            });
          });
    };
  return {
    batch: (h) => {
      let m;
      o++;
      try {
        m = h();
      } finally {
        o--, o || f();
      }
      return m;
    },
    batchCalls:
      (h) =>
      (...m) => {
        d(() => {
          h(...m);
        });
      },
    schedule: d,
    setNotifyFunction: (h) => {
      i = h;
    },
    setBatchNotifyFunction: (h) => {
      a = h;
    },
    setScheduler: (h) => {
      c = h;
    },
  };
}
var ot = tw(),
  fh = class {
    #e;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      this.clearGcTimeout(),
        Vx(this.gcTime) &&
          (this.#e = setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime));
    }
    updateGcTime(n) {
      this.gcTime = Math.max(this.gcTime || 0, n ?? (_i ? 1 / 0 : 300 * 1e3));
    }
    clearGcTimeout() {
      this.#e && (clearTimeout(this.#e), (this.#e = void 0));
    }
  },
  nw = class extends fh {
    #e;
    #t;
    #n;
    #o;
    #r;
    #i;
    #l;
    constructor(n) {
      super(),
        (this.#l = !1),
        (this.#i = n.defaultOptions),
        this.setOptions(n.options),
        (this.observers = []),
        (this.#o = n.client),
        (this.#n = this.#o.getQueryCache()),
        (this.queryKey = n.queryKey),
        (this.queryHash = n.queryHash),
        (this.#e = ow(this.options)),
        (this.state = n.state ?? this.#e),
        this.scheduleGc();
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      return this.#r?.promise;
    }
    setOptions(n) {
      (this.options = { ...this.#i, ...n }),
        this.updateGcTime(this.options.gcTime);
    }
    optionalRemove() {
      !this.observers.length &&
        this.state.fetchStatus === "idle" &&
        this.#n.remove(this);
    }
    setData(n, o) {
      const i = Kx(this.state.data, n, this.options);
      return (
        this.#s({
          data: i,
          type: "success",
          dataUpdatedAt: o?.updatedAt,
          manual: o?.manual,
        }),
        i
      );
    }
    setState(n, o) {
      this.#s({ type: "setState", state: n, setStateOptions: o });
    }
    cancel(n) {
      const o = this.#r?.promise;
      return this.#r?.cancel(n), o ? o.then($t).catch($t) : Promise.resolve();
    }
    destroy() {
      super.destroy(), this.cancel({ silent: !0 });
    }
    reset() {
      this.destroy(), this.setState(this.#e);
    }
    isActive() {
      return this.observers.some((n) => Wx(n.options.enabled, this) !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === lu ||
            this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
      return this.getObserversCount() > 0
        ? this.observers.some((n) => za(n.options.staleTime, this) === "static")
        : !1;
    }
    isStale() {
      return this.getObserversCount() > 0
        ? this.observers.some((n) => n.getCurrentResult().isStale)
        : this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(n = 0) {
      return this.state.data === void 0
        ? !0
        : n === "static"
        ? !1
        : this.state.isInvalidated
        ? !0
        : !Hx(this.state.dataUpdatedAt, n);
    }
    onFocus() {
      this.observers
        .find((o) => o.shouldFetchOnWindowFocus())
        ?.refetch({ cancelRefetch: !1 }),
        this.#r?.continue();
    }
    onOnline() {
      this.observers
        .find((o) => o.shouldFetchOnReconnect())
        ?.refetch({ cancelRefetch: !1 }),
        this.#r?.continue();
    }
    addObserver(n) {
      this.observers.includes(n) ||
        (this.observers.push(n),
        this.clearGcTimeout(),
        this.#n.notify({ type: "observerAdded", query: this, observer: n }));
    }
    removeObserver(n) {
      this.observers.includes(n) &&
        ((this.observers = this.observers.filter((o) => o !== n)),
        this.observers.length ||
          (this.#r &&
            (this.#l ? this.#r.cancel({ revert: !0 }) : this.#r.cancelRetry()),
          this.scheduleGc()),
        this.#n.notify({ type: "observerRemoved", query: this, observer: n }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    invalidate() {
      this.state.isInvalidated || this.#s({ type: "invalidate" });
    }
    fetch(n, o) {
      if (this.state.fetchStatus !== "idle") {
        if (this.state.data !== void 0 && o?.cancelRefetch)
          this.cancel({ silent: !0 });
        else if (this.#r) return this.#r.continueRetry(), this.#r.promise;
      }
      if ((n && this.setOptions(n), !this.options.queryFn)) {
        const m = this.observers.find((g) => g.options.queryFn);
        m && this.setOptions(m.options);
      }
      const i = new AbortController(),
        a = (m) => {
          Object.defineProperty(m, "signal", {
            enumerable: !0,
            get: () => ((this.#l = !0), i.signal),
          });
        },
        c = () => {
          const m = lh(this.options, o),
            x = (() => {
              const w = {
                client: this.#o,
                queryKey: this.queryKey,
                meta: this.meta,
              };
              return a(w), w;
            })();
          return (
            (this.#l = !1),
            this.options.persister ? this.options.persister(m, x, this) : m(x)
          );
        },
        f = (() => {
          const m = {
            fetchOptions: o,
            options: this.options,
            queryKey: this.queryKey,
            client: this.#o,
            state: this.state,
            fetchFn: c,
          };
          return a(m), m;
        })();
      this.options.behavior?.onFetch(f, this),
        (this.#t = this.state),
        (this.state.fetchStatus === "idle" ||
          this.state.fetchMeta !== f.fetchOptions?.meta) &&
          this.#s({ type: "fetch", meta: f.fetchOptions?.meta });
      const h = (m) => {
        (Na(m) && m.silent) || this.#s({ type: "error", error: m }),
          Na(m) ||
            (this.#n.config.onError?.(m, this),
            this.#n.config.onSettled?.(this.state.data, m, this)),
          this.scheduleGc();
      };
      return (
        (this.#r = dh({
          initialPromise: o?.initialPromise,
          fn: f.fetchFn,
          abort: i.abort.bind(i),
          onSuccess: (m) => {
            if (m === void 0) {
              h(new Error(`${this.queryHash} data is undefined`));
              return;
            }
            try {
              this.setData(m);
            } catch (g) {
              h(g);
              return;
            }
            this.#n.config.onSuccess?.(m, this),
              this.#n.config.onSettled?.(m, this.state.error, this),
              this.scheduleGc();
          },
          onError: h,
          onFail: (m, g) => {
            this.#s({ type: "failed", failureCount: m, error: g });
          },
          onPause: () => {
            this.#s({ type: "pause" });
          },
          onContinue: () => {
            this.#s({ type: "continue" });
          },
          retry: f.options.retry,
          retryDelay: f.options.retryDelay,
          networkMode: f.options.networkMode,
          canRun: () => !0,
        })),
        this.#r.start()
      );
    }
    #s(n) {
      const o = (i) => {
        switch (n.type) {
          case "failed":
            return {
              ...i,
              fetchFailureCount: n.failureCount,
              fetchFailureReason: n.error,
            };
          case "pause":
            return { ...i, fetchStatus: "paused" };
          case "continue":
            return { ...i, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...i,
              ...rw(i.data, this.options),
              fetchMeta: n.meta ?? null,
            };
          case "success":
            return (
              (this.#t = void 0),
              {
                ...i,
                data: n.data,
                dataUpdateCount: i.dataUpdateCount + 1,
                dataUpdatedAt: n.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!n.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              }
            );
          case "error":
            const a = n.error;
            return Na(a) && a.revert && this.#t
              ? { ...this.#t, fetchStatus: "idle" }
              : {
                  ...i,
                  error: a,
                  errorUpdateCount: i.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: i.fetchFailureCount + 1,
                  fetchFailureReason: a,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...i, isInvalidated: !0 };
          case "setState":
            return { ...i, ...n.state };
        }
      };
      (this.state = o(this.state)),
        ot.batch(() => {
          this.observers.forEach((i) => {
            i.onQueryUpdate();
          }),
            this.#n.notify({ query: this, type: "updated", action: n });
        });
    }
  };
function rw(n, o) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: uh(o.networkMode) ? "fetching" : "paused",
    ...(n === void 0 && { error: null, status: "pending" }),
  };
}
function ow(n) {
  const o =
      typeof n.initialData == "function" ? n.initialData() : n.initialData,
    i = o !== void 0,
    a = i
      ? typeof n.initialDataUpdatedAt == "function"
        ? n.initialDataUpdatedAt()
        : n.initialDataUpdatedAt
      : 0;
  return {
    data: o,
    dataUpdateCount: 0,
    dataUpdatedAt: i ? a ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: i ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var sw = class extends Oi {
    constructor(n = {}) {
      super(), (this.config = n), (this.#e = new Map());
    }
    #e;
    build(n, o, i) {
      const a = o.queryKey,
        c = o.queryHash ?? iu(a, o);
      let d = this.get(c);
      return (
        d ||
          ((d = new nw({
            client: n,
            queryKey: a,
            queryHash: c,
            options: n.defaultQueryOptions(o),
            state: i,
            defaultOptions: n.getQueryDefaults(a),
          })),
          this.add(d)),
        d
      );
    }
    add(n) {
      this.#e.has(n.queryHash) ||
        (this.#e.set(n.queryHash, n), this.notify({ type: "added", query: n }));
    }
    remove(n) {
      const o = this.#e.get(n.queryHash);
      o &&
        (n.destroy(),
        o === n && this.#e.delete(n.queryHash),
        this.notify({ type: "removed", query: n }));
    }
    clear() {
      ot.batch(() => {
        this.getAll().forEach((n) => {
          this.remove(n);
        });
      });
    }
    get(n) {
      return this.#e.get(n);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(n) {
      const o = { exact: !0, ...n };
      return this.getAll().find((i) => wf(o, i));
    }
    findAll(n = {}) {
      const o = this.getAll();
      return Object.keys(n).length > 0 ? o.filter((i) => wf(n, i)) : o;
    }
    notify(n) {
      ot.batch(() => {
        this.listeners.forEach((o) => {
          o(n);
        });
      });
    }
    onFocus() {
      ot.batch(() => {
        this.getAll().forEach((n) => {
          n.onFocus();
        });
      });
    }
    onOnline() {
      ot.batch(() => {
        this.getAll().forEach((n) => {
          n.onOnline();
        });
      });
    }
  },
  iw = class extends fh {
    #e;
    #t;
    #n;
    constructor(n) {
      super(),
        (this.mutationId = n.mutationId),
        (this.#t = n.mutationCache),
        (this.#e = []),
        (this.state = n.state || lw()),
        this.setOptions(n.options),
        this.scheduleGc();
    }
    setOptions(n) {
      (this.options = n), this.updateGcTime(this.options.gcTime);
    }
    get meta() {
      return this.options.meta;
    }
    addObserver(n) {
      this.#e.includes(n) ||
        (this.#e.push(n),
        this.clearGcTimeout(),
        this.#t.notify({ type: "observerAdded", mutation: this, observer: n }));
    }
    removeObserver(n) {
      (this.#e = this.#e.filter((o) => o !== n)),
        this.scheduleGc(),
        this.#t.notify({
          type: "observerRemoved",
          mutation: this,
          observer: n,
        });
    }
    optionalRemove() {
      this.#e.length ||
        (this.state.status === "pending"
          ? this.scheduleGc()
          : this.#t.remove(this));
    }
    continue() {
      return this.#n?.continue() ?? this.execute(this.state.variables);
    }
    async execute(n) {
      const o = () => {
        this.#o({ type: "continue" });
      };
      this.#n = dh({
        fn: () =>
          this.options.mutationFn
            ? this.options.mutationFn(n)
            : Promise.reject(new Error("No mutationFn found")),
        onFail: (c, d) => {
          this.#o({ type: "failed", failureCount: c, error: d });
        },
        onPause: () => {
          this.#o({ type: "pause" });
        },
        onContinue: o,
        retry: this.options.retry ?? 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode,
        canRun: () => this.#t.canRun(this),
      });
      const i = this.state.status === "pending",
        a = !this.#n.canStart();
      try {
        if (i) o();
        else {
          this.#o({ type: "pending", variables: n, isPaused: a }),
            await this.#t.config.onMutate?.(n, this);
          const d = await this.options.onMutate?.(n);
          d !== this.state.context &&
            this.#o({ type: "pending", context: d, variables: n, isPaused: a });
        }
        const c = await this.#n.start();
        return (
          await this.#t.config.onSuccess?.(c, n, this.state.context, this),
          await this.options.onSuccess?.(c, n, this.state.context),
          await this.#t.config.onSettled?.(
            c,
            null,
            this.state.variables,
            this.state.context,
            this
          ),
          await this.options.onSettled?.(c, null, n, this.state.context),
          this.#o({ type: "success", data: c }),
          c
        );
      } catch (c) {
        try {
          throw (
            (await this.#t.config.onError?.(c, n, this.state.context, this),
            await this.options.onError?.(c, n, this.state.context),
            await this.#t.config.onSettled?.(
              void 0,
              c,
              this.state.variables,
              this.state.context,
              this
            ),
            await this.options.onSettled?.(void 0, c, n, this.state.context),
            c)
          );
        } finally {
          this.#o({ type: "error", error: c });
        }
      } finally {
        this.#t.runNext(this);
      }
    }
    #o(n) {
      const o = (i) => {
        switch (n.type) {
          case "failed":
            return {
              ...i,
              failureCount: n.failureCount,
              failureReason: n.error,
            };
          case "pause":
            return { ...i, isPaused: !0 };
          case "continue":
            return { ...i, isPaused: !1 };
          case "pending":
            return {
              ...i,
              context: n.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: n.isPaused,
              status: "pending",
              variables: n.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...i,
              data: n.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...i,
              data: void 0,
              error: n.error,
              failureCount: i.failureCount + 1,
              failureReason: n.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = o(this.state)),
        ot.batch(() => {
          this.#e.forEach((i) => {
            i.onMutationUpdate(n);
          }),
            this.#t.notify({ mutation: this, type: "updated", action: n });
        });
    }
  };
function lw() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var aw = class extends Oi {
  constructor(n = {}) {
    super(),
      (this.config = n),
      (this.#e = new Set()),
      (this.#t = new Map()),
      (this.#n = 0);
  }
  #e;
  #t;
  #n;
  build(n, o, i) {
    const a = new iw({
      mutationCache: this,
      mutationId: ++this.#n,
      options: n.defaultMutationOptions(o),
      state: i,
    });
    return this.add(a), a;
  }
  add(n) {
    this.#e.add(n);
    const o = ci(n);
    if (typeof o == "string") {
      const i = this.#t.get(o);
      i ? i.push(n) : this.#t.set(o, [n]);
    }
    this.notify({ type: "added", mutation: n });
  }
  remove(n) {
    if (this.#e.delete(n)) {
      const o = ci(n);
      if (typeof o == "string") {
        const i = this.#t.get(o);
        if (i)
          if (i.length > 1) {
            const a = i.indexOf(n);
            a !== -1 && i.splice(a, 1);
          } else i[0] === n && this.#t.delete(o);
      }
    }
    this.notify({ type: "removed", mutation: n });
  }
  canRun(n) {
    const o = ci(n);
    if (typeof o == "string") {
      const a = this.#t.get(o)?.find((c) => c.state.status === "pending");
      return !a || a === n;
    } else return !0;
  }
  runNext(n) {
    const o = ci(n);
    return typeof o == "string"
      ? this.#t
          .get(o)
          ?.find((a) => a !== n && a.state.isPaused)
          ?.continue() ?? Promise.resolve()
      : Promise.resolve();
  }
  clear() {
    ot.batch(() => {
      this.#e.forEach((n) => {
        this.notify({ type: "removed", mutation: n });
      }),
        this.#e.clear(),
        this.#t.clear();
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(n) {
    const o = { exact: !0, ...n };
    return this.getAll().find((i) => Sf(o, i));
  }
  findAll(n = {}) {
    return this.getAll().filter((o) => Sf(n, o));
  }
  notify(n) {
    ot.batch(() => {
      this.listeners.forEach((o) => {
        o(n);
      });
    });
  }
  resumePausedMutations() {
    const n = this.getAll().filter((o) => o.state.isPaused);
    return ot.batch(() => Promise.all(n.map((o) => o.continue().catch($t))));
  }
};
function ci(n) {
  return n.options.scope?.id;
}
function Cf(n) {
  return {
    onFetch: (o, i) => {
      const a = o.options,
        c = o.fetchOptions?.meta?.fetchMore?.direction,
        d = o.state.data?.pages || [],
        f = o.state.data?.pageParams || [];
      let h = { pages: [], pageParams: [] },
        m = 0;
      const g = async () => {
        let x = !1;
        const w = (j) => {
            Object.defineProperty(j, "signal", {
              enumerable: !0,
              get: () => (
                o.signal.aborted
                  ? (x = !0)
                  : o.signal.addEventListener("abort", () => {
                      x = !0;
                    }),
                o.signal
              ),
            });
          },
          T = lh(o.options, o.fetchOptions),
          y = async (j, C, k) => {
            if (x) return Promise.reject();
            if (C == null && j.pages.length) return Promise.resolve(j);
            const L = (() => {
                const K = {
                  client: o.client,
                  queryKey: o.queryKey,
                  pageParam: C,
                  direction: k ? "backward" : "forward",
                  meta: o.options.meta,
                };
                return w(K), K;
              })(),
              D = await T(L),
              { maxPages: F } = o.options,
              H = k ? Yx : qx;
            return {
              pages: H(j.pages, D, F),
              pageParams: H(j.pageParams, C, F),
            };
          };
        if (c && d.length) {
          const j = c === "backward",
            C = j ? uw : bf,
            k = { pages: d, pageParams: f },
            A = C(a, k);
          h = await y(k, A, j);
        } else {
          const j = n ?? d.length;
          do {
            const C = m === 0 ? f[0] ?? a.initialPageParam : bf(a, h);
            if (m > 0 && C == null) break;
            (h = await y(h, C)), m++;
          } while (m < j);
        }
        return h;
      };
      o.options.persister
        ? (o.fetchFn = () =>
            o.options.persister?.(
              g,
              {
                client: o.client,
                queryKey: o.queryKey,
                meta: o.options.meta,
                signal: o.signal,
              },
              i
            ))
        : (o.fetchFn = g);
    },
  };
}
function bf(n, { pages: o, pageParams: i }) {
  const a = o.length - 1;
  return o.length > 0 ? n.getNextPageParam(o[a], o, i[a], i) : void 0;
}
function uw(n, { pages: o, pageParams: i }) {
  return o.length > 0 ? n.getPreviousPageParam?.(o[0], o, i[0], i) : void 0;
}
var cw = class {
    #e;
    #t;
    #n;
    #o;
    #r;
    #i;
    #l;
    #s;
    constructor(n = {}) {
      (this.#e = n.queryCache || new sw()),
        (this.#t = n.mutationCache || new aw()),
        (this.#n = n.defaultOptions || {}),
        (this.#o = new Map()),
        (this.#r = new Map()),
        (this.#i = 0);
    }
    mount() {
      this.#i++,
        this.#i === 1 &&
          ((this.#l = ah.subscribe(async (n) => {
            n && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#s = xi.subscribe(async (n) => {
            n && (await this.resumePausedMutations(), this.#e.onOnline());
          })));
    }
    unmount() {
      this.#i--,
        this.#i === 0 &&
          (this.#l?.(), (this.#l = void 0), this.#s?.(), (this.#s = void 0));
    }
    isFetching(n) {
      return this.#e.findAll({ ...n, fetchStatus: "fetching" }).length;
    }
    isMutating(n) {
      return this.#t.findAll({ ...n, status: "pending" }).length;
    }
    getQueryData(n) {
      const o = this.defaultQueryOptions({ queryKey: n });
      return this.#e.get(o.queryHash)?.state.data;
    }
    ensureQueryData(n) {
      const o = this.defaultQueryOptions(n),
        i = this.#e.build(this, o),
        a = i.state.data;
      return a === void 0
        ? this.fetchQuery(n)
        : (n.revalidateIfStale &&
            i.isStaleByTime(za(o.staleTime, i)) &&
            this.prefetchQuery(o),
          Promise.resolve(a));
    }
    getQueriesData(n) {
      return this.#e.findAll(n).map(({ queryKey: o, state: i }) => {
        const a = i.data;
        return [o, a];
      });
    }
    setQueryData(n, o, i) {
      const a = this.defaultQueryOptions({ queryKey: n }),
        d = this.#e.get(a.queryHash)?.state.data,
        f = Ux(o, d);
      if (f !== void 0)
        return this.#e.build(this, a).setData(f, { ...i, manual: !0 });
    }
    setQueriesData(n, o, i) {
      return ot.batch(() =>
        this.#e
          .findAll(n)
          .map(({ queryKey: a }) => [a, this.setQueryData(a, o, i)])
      );
    }
    getQueryState(n) {
      const o = this.defaultQueryOptions({ queryKey: n });
      return this.#e.get(o.queryHash)?.state;
    }
    removeQueries(n) {
      const o = this.#e;
      ot.batch(() => {
        o.findAll(n).forEach((i) => {
          o.remove(i);
        });
      });
    }
    resetQueries(n, o) {
      const i = this.#e;
      return ot.batch(
        () => (
          i.findAll(n).forEach((a) => {
            a.reset();
          }),
          this.refetchQueries({ type: "active", ...n }, o)
        )
      );
    }
    cancelQueries(n, o = {}) {
      const i = { revert: !0, ...o },
        a = ot.batch(() => this.#e.findAll(n).map((c) => c.cancel(i)));
      return Promise.all(a).then($t).catch($t);
    }
    invalidateQueries(n, o = {}) {
      return ot.batch(
        () => (
          this.#e.findAll(n).forEach((i) => {
            i.invalidate();
          }),
          n?.refetchType === "none"
            ? Promise.resolve()
            : this.refetchQueries(
                { ...n, type: n?.refetchType ?? n?.type ?? "active" },
                o
              )
        )
      );
    }
    refetchQueries(n, o = {}) {
      const i = { ...o, cancelRefetch: o.cancelRefetch ?? !0 },
        a = ot.batch(() =>
          this.#e
            .findAll(n)
            .filter((c) => !c.isDisabled() && !c.isStatic())
            .map((c) => {
              let d = c.fetch(void 0, i);
              return (
                i.throwOnError || (d = d.catch($t)),
                c.state.fetchStatus === "paused" ? Promise.resolve() : d
              );
            })
        );
      return Promise.all(a).then($t);
    }
    fetchQuery(n) {
      const o = this.defaultQueryOptions(n);
      o.retry === void 0 && (o.retry = !1);
      const i = this.#e.build(this, o);
      return i.isStaleByTime(za(o.staleTime, i))
        ? i.fetch(o)
        : Promise.resolve(i.state.data);
    }
    prefetchQuery(n) {
      return this.fetchQuery(n).then($t).catch($t);
    }
    fetchInfiniteQuery(n) {
      return (n.behavior = Cf(n.pages)), this.fetchQuery(n);
    }
    prefetchInfiniteQuery(n) {
      return this.fetchInfiniteQuery(n).then($t).catch($t);
    }
    ensureInfiniteQueryData(n) {
      return (n.behavior = Cf(n.pages)), this.ensureQueryData(n);
    }
    resumePausedMutations() {
      return xi.isOnline()
        ? this.#t.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(n) {
      this.#n = n;
    }
    setQueryDefaults(n, o) {
      this.#o.set(Bo(n), { queryKey: n, defaultOptions: o });
    }
    getQueryDefaults(n) {
      const o = [...this.#o.values()],
        i = {};
      return (
        o.forEach((a) => {
          $o(n, a.queryKey) && Object.assign(i, a.defaultOptions);
        }),
        i
      );
    }
    setMutationDefaults(n, o) {
      this.#r.set(Bo(n), { mutationKey: n, defaultOptions: o });
    }
    getMutationDefaults(n) {
      const o = [...this.#r.values()],
        i = {};
      return (
        o.forEach((a) => {
          $o(n, a.mutationKey) && Object.assign(i, a.defaultOptions);
        }),
        i
      );
    }
    defaultQueryOptions(n) {
      if (n._defaulted) return n;
      const o = {
        ...this.#n.queries,
        ...this.getQueryDefaults(n.queryKey),
        ...n,
        _defaulted: !0,
      };
      return (
        o.queryHash || (o.queryHash = iu(o.queryKey, o)),
        o.refetchOnReconnect === void 0 &&
          (o.refetchOnReconnect = o.networkMode !== "always"),
        o.throwOnError === void 0 && (o.throwOnError = !!o.suspense),
        !o.networkMode && o.persister && (o.networkMode = "offlineFirst"),
        o.queryFn === lu && (o.enabled = !1),
        o
      );
    }
    defaultMutationOptions(n) {
      return n?._defaulted
        ? n
        : {
            ...this.#n.mutations,
            ...(n?.mutationKey && this.getMutationDefaults(n.mutationKey)),
            ...n,
            _defaulted: !0,
          };
    }
    clear() {
      this.#e.clear(), this.#t.clear();
    }
  },
  dw = E.createContext(void 0),
  fw = ({ client: n, children: o }) => (
    E.useEffect(
      () => (
        n.mount(),
        () => {
          n.unmount();
        }
      ),
      [n]
    ),
    v.jsx(dw.Provider, { value: n, children: o })
  );
function wi() {
  return (
    (wi = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var o = 1; o < arguments.length; o++) {
            var i = arguments[o];
            for (var a in i)
              Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
          }
          return n;
        }),
    wi.apply(this, arguments)
  );
}
var Vn;
(function (n) {
  (n.Pop = "POP"), (n.Push = "PUSH"), (n.Replace = "REPLACE");
})(Vn || (Vn = {}));
const Pf = "popstate";
function pw(n) {
  n === void 0 && (n = {});
  function o(c, d) {
    let {
      pathname: f = "/",
      search: h = "",
      hash: m = "",
    } = Ho(c.location.hash.substr(1));
    return (
      !f.startsWith("/") && !f.startsWith(".") && (f = "/" + f),
      Ba(
        "",
        { pathname: f, search: h, hash: m },
        (d.state && d.state.usr) || null,
        (d.state && d.state.key) || "default"
      )
    );
  }
  function i(c, d) {
    let f = c.document.querySelector("base"),
      h = "";
    if (f && f.getAttribute("href")) {
      let m = c.location.href,
        g = m.indexOf("#");
      h = g === -1 ? m : m.slice(0, g);
    }
    return h + "#" + (typeof d == "string" ? d : ph(d));
  }
  function a(c, d) {
    au(
      c.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(d) +
        ")"
    );
  }
  return mw(o, i, a, n);
}
function ht(n, o) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(o);
}
function au(n, o) {
  if (!n) {
    typeof console < "u" && console.warn(o);
    try {
      throw new Error(o);
    } catch {}
  }
}
function hw() {
  return Math.random().toString(36).substr(2, 8);
}
function Nf(n, o) {
  return { usr: n.state, key: n.key, idx: o };
}
function Ba(n, o, i, a) {
  return (
    i === void 0 && (i = null),
    wi(
      { pathname: typeof n == "string" ? n : n.pathname, search: "", hash: "" },
      typeof o == "string" ? Ho(o) : o,
      { state: i, key: (o && o.key) || a || hw() }
    )
  );
}
function ph(n) {
  let { pathname: o = "/", search: i = "", hash: a = "" } = n;
  return (
    i && i !== "?" && (o += i.charAt(0) === "?" ? i : "?" + i),
    a && a !== "#" && (o += a.charAt(0) === "#" ? a : "#" + a),
    o
  );
}
function Ho(n) {
  let o = {};
  if (n) {
    let i = n.indexOf("#");
    i >= 0 && ((o.hash = n.substr(i)), (n = n.substr(0, i)));
    let a = n.indexOf("?");
    a >= 0 && ((o.search = n.substr(a)), (n = n.substr(0, a))),
      n && (o.pathname = n);
  }
  return o;
}
function mw(n, o, i, a) {
  a === void 0 && (a = {});
  let { window: c = document.defaultView, v5Compat: d = !1 } = a,
    f = c.history,
    h = Vn.Pop,
    m = null,
    g = x();
  g == null && ((g = 0), f.replaceState(wi({}, f.state, { idx: g }), ""));
  function x() {
    return (f.state || { idx: null }).idx;
  }
  function w() {
    h = Vn.Pop;
    let k = x(),
      A = k == null ? null : k - g;
    (g = k), m && m({ action: h, location: C.location, delta: A });
  }
  function T(k, A) {
    h = Vn.Push;
    let L = Ba(C.location, k, A);
    i && i(L, k), (g = x() + 1);
    let D = Nf(L, g),
      F = C.createHref(L);
    try {
      f.pushState(D, "", F);
    } catch (H) {
      if (H instanceof DOMException && H.name === "DataCloneError") throw H;
      c.location.assign(F);
    }
    d && m && m({ action: h, location: C.location, delta: 1 });
  }
  function y(k, A) {
    h = Vn.Replace;
    let L = Ba(C.location, k, A);
    i && i(L, k), (g = x());
    let D = Nf(L, g),
      F = C.createHref(L);
    f.replaceState(D, "", F),
      d && m && m({ action: h, location: C.location, delta: 0 });
  }
  function j(k) {
    let A = c.location.origin !== "null" ? c.location.origin : c.location.href,
      L = typeof k == "string" ? k : ph(k);
    return (
      (L = L.replace(/ $/, "%20")),
      ht(
        A,
        "No window.location.(origin|href) available to create URL for href: " +
          L
      ),
      new URL(L, A)
    );
  }
  let C = {
    get action() {
      return h;
    },
    get location() {
      return n(c, f);
    },
    listen(k) {
      if (m) throw new Error("A history only accepts one active listener");
      return (
        c.addEventListener(Pf, w),
        (m = k),
        () => {
          c.removeEventListener(Pf, w), (m = null);
        }
      );
    },
    createHref(k) {
      return o(c, k);
    },
    createURL: j,
    encodeLocation(k) {
      let A = j(k);
      return { pathname: A.pathname, search: A.search, hash: A.hash };
    },
    push: T,
    replace: y,
    go(k) {
      return f.go(k);
    },
  };
  return C;
}
var Tf;
(function (n) {
  (n.data = "data"),
    (n.deferred = "deferred"),
    (n.redirect = "redirect"),
    (n.error = "error");
})(Tf || (Tf = {}));
function gw(n, o, i) {
  return i === void 0 && (i = "/"), vw(n, o, i);
}
function vw(n, o, i, a) {
  let c = typeof o == "string" ? Ho(o) : o,
    d = gh(c.pathname || "/", i);
  if (d == null) return null;
  let f = hh(n);
  yw(f);
  let h = null;
  for (let m = 0; h == null && m < f.length; ++m) {
    let g = jw(d);
    h = Nw(f[m], g);
  }
  return h;
}
function hh(n, o, i, a) {
  o === void 0 && (o = []), i === void 0 && (i = []), a === void 0 && (a = "");
  let c = (d, f, h) => {
    let m = {
      relativePath: h === void 0 ? d.path || "" : h,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: f,
      route: d,
    };
    m.relativePath.startsWith("/") &&
      (ht(
        m.relativePath.startsWith(a),
        'Absolute route path "' +
          m.relativePath +
          '" nested under path ' +
          ('"' + a + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (m.relativePath = m.relativePath.slice(a.length)));
    let g = Br([a, m.relativePath]),
      x = i.concat(m);
    d.children &&
      d.children.length > 0 &&
      (ht(
        d.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + g + '".')
      ),
      hh(d.children, o, x, g)),
      !(d.path == null && !d.index) &&
        o.push({ path: g, score: bw(g, d.index), routesMeta: x });
  };
  return (
    n.forEach((d, f) => {
      var h;
      if (d.path === "" || !((h = d.path) != null && h.includes("?"))) c(d, f);
      else for (let m of mh(d.path)) c(d, f, m);
    }),
    o
  );
}
function mh(n) {
  let o = n.split("/");
  if (o.length === 0) return [];
  let [i, ...a] = o,
    c = i.endsWith("?"),
    d = i.replace(/\?$/, "");
  if (a.length === 0) return c ? [d, ""] : [d];
  let f = mh(a.join("/")),
    h = [];
  return (
    h.push(...f.map((m) => (m === "" ? d : [d, m].join("/")))),
    c && h.push(...f),
    h.map((m) => (n.startsWith("/") && m === "" ? "/" : m))
  );
}
function yw(n) {
  n.sort((o, i) =>
    o.score !== i.score
      ? i.score - o.score
      : Pw(
          o.routesMeta.map((a) => a.childrenIndex),
          i.routesMeta.map((a) => a.childrenIndex)
        )
  );
}
const xw = /^:[\w-]+$/,
  ww = 3,
  Sw = 2,
  Ew = 1,
  kw = 10,
  Cw = -2,
  Rf = (n) => n === "*";
function bw(n, o) {
  let i = n.split("/"),
    a = i.length;
  return (
    i.some(Rf) && (a += Cw),
    o && (a += Sw),
    i
      .filter((c) => !Rf(c))
      .reduce((c, d) => c + (xw.test(d) ? ww : d === "" ? Ew : kw), a)
  );
}
function Pw(n, o) {
  return n.length === o.length && n.slice(0, -1).every((a, c) => a === o[c])
    ? n[n.length - 1] - o[o.length - 1]
    : 0;
}
function Nw(n, o, i) {
  let { routesMeta: a } = n,
    c = {},
    d = "/",
    f = [];
  for (let h = 0; h < a.length; ++h) {
    let m = a[h],
      g = h === a.length - 1,
      x = d === "/" ? o : o.slice(d.length) || "/",
      w = Tw(
        { path: m.relativePath, caseSensitive: m.caseSensitive, end: g },
        x
      ),
      T = m.route;
    if (!w) return null;
    Object.assign(c, w.params),
      f.push({
        params: c,
        pathname: Br([d, w.pathname]),
        pathnameBase: Ow(Br([d, w.pathnameBase])),
        route: T,
      }),
      w.pathnameBase !== "/" && (d = Br([d, w.pathnameBase]));
  }
  return f;
}
function Tw(n, o) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
  let [i, a] = Rw(n.path, n.caseSensitive, n.end),
    c = o.match(i);
  if (!c) return null;
  let d = c[0],
    f = d.replace(/(.)\/+$/, "$1"),
    h = c.slice(1);
  return {
    params: a.reduce((g, x, w) => {
      let { paramName: T, isOptional: y } = x;
      if (T === "*") {
        let C = h[w] || "";
        f = d.slice(0, d.length - C.length).replace(/(.)\/+$/, "$1");
      }
      const j = h[w];
      return (
        y && !j ? (g[T] = void 0) : (g[T] = (j || "").replace(/%2F/g, "/")), g
      );
    }, {}),
    pathname: d,
    pathnameBase: f,
    pattern: n,
  };
}
function Rw(n, o, i) {
  o === void 0 && (o = !1),
    i === void 0 && (i = !0),
    au(
      n === "*" || !n.endsWith("*") || n.endsWith("/*"),
      'Route path "' +
        n +
        '" will be treated as if it were ' +
        ('"' + n.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + n.replace(/\*$/, "/*") + '".')
    );
  let a = [],
    c =
      "^" +
      n
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (f, h, m) => (
            a.push({ paramName: h, isOptional: m != null }),
            m ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    n.endsWith("*")
      ? (a.push({ paramName: "*" }),
        (c += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : i
      ? (c += "\\/*$")
      : n !== "" && n !== "/" && (c += "(?:(?=\\/|$))"),
    [new RegExp(c, o ? void 0 : "i"), a]
  );
}
function jw(n) {
  try {
    return n
      .split("/")
      .map((o) => decodeURIComponent(o).replace(/\//g, "%2F"))
      .join("/");
  } catch (o) {
    return (
      au(
        !1,
        'The URL path "' +
          n +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + o + ").")
      ),
      n
    );
  }
}
function gh(n, o) {
  if (o === "/") return n;
  if (!n.toLowerCase().startsWith(o.toLowerCase())) return null;
  let i = o.endsWith("/") ? o.length - 1 : o.length,
    a = n.charAt(i);
  return a && a !== "/" ? null : n.slice(i) || "/";
}
const Br = (n) => n.join("/").replace(/\/\/+/g, "/"),
  Ow = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/");
function _w(n) {
  return (
    n != null &&
    typeof n.status == "number" &&
    typeof n.statusText == "string" &&
    typeof n.internal == "boolean" &&
    "data" in n
  );
}
const vh = ["post", "put", "patch", "delete"];
new Set(vh);
const Aw = ["get", ...vh];
new Set(Aw);
function Si() {
  return (
    (Si = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var o = 1; o < arguments.length; o++) {
            var i = arguments[o];
            for (var a in i)
              Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
          }
          return n;
        }),
    Si.apply(this, arguments)
  );
}
const Mw = E.createContext(null),
  Lw = E.createContext(null),
  yh = E.createContext(null),
  Ai = E.createContext(null),
  Mi = E.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  xh = E.createContext(null);
function uu() {
  return E.useContext(Ai) != null;
}
function wh() {
  return uu() || ht(!1), E.useContext(Ai).location;
}
function Iw(n, o) {
  return Dw(n, o);
}
function Dw(n, o, i, a) {
  uu() || ht(!1);
  let { navigator: c } = E.useContext(yh),
    { matches: d } = E.useContext(Mi),
    f = d[d.length - 1],
    h = f ? f.params : {};
  f && f.pathname;
  let m = f ? f.pathnameBase : "/";
  f && f.route;
  let g = wh(),
    x;
  if (o) {
    var w;
    let k = typeof o == "string" ? Ho(o) : o;
    m === "/" || ((w = k.pathname) != null && w.startsWith(m)) || ht(!1),
      (x = k);
  } else x = g;
  let T = x.pathname || "/",
    y = T;
  if (m !== "/") {
    let k = m.replace(/^\//, "").split("/");
    y = "/" + T.replace(/^\//, "").split("/").slice(k.length).join("/");
  }
  let j = gw(n, { pathname: y }),
    C = Uw(
      j &&
        j.map((k) =>
          Object.assign({}, k, {
            params: Object.assign({}, h, k.params),
            pathname: Br([
              m,
              c.encodeLocation
                ? c.encodeLocation(k.pathname).pathname
                : k.pathname,
            ]),
            pathnameBase:
              k.pathnameBase === "/"
                ? m
                : Br([
                    m,
                    c.encodeLocation
                      ? c.encodeLocation(k.pathnameBase).pathname
                      : k.pathnameBase,
                  ]),
          })
        ),
      d,
      i,
      a
    );
  return o && C
    ? E.createElement(
        Ai.Provider,
        {
          value: {
            location: Si(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              x
            ),
            navigationType: Vn.Pop,
          },
        },
        C
      )
    : C;
}
function zw() {
  let n = Qw(),
    o = _w(n)
      ? n.status + " " + n.statusText
      : n instanceof Error
      ? n.message
      : JSON.stringify(n),
    i = n instanceof Error ? n.stack : null,
    c = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return E.createElement(
    E.Fragment,
    null,
    E.createElement("h2", null, "Unexpected Application Error!"),
    E.createElement("h3", { style: { fontStyle: "italic" } }, o),
    i ? E.createElement("pre", { style: c }, i) : null,
    null
  );
}
const Fw = E.createElement(zw, null);
class Bw extends E.Component {
  constructor(o) {
    super(o),
      (this.state = {
        location: o.location,
        revalidation: o.revalidation,
        error: o.error,
      });
  }
  static getDerivedStateFromError(o) {
    return { error: o };
  }
  static getDerivedStateFromProps(o, i) {
    return i.location !== o.location ||
      (i.revalidation !== "idle" && o.revalidation === "idle")
      ? { error: o.error, location: o.location, revalidation: o.revalidation }
      : {
          error: o.error !== void 0 ? o.error : i.error,
          location: i.location,
          revalidation: o.revalidation || i.revalidation,
        };
  }
  componentDidCatch(o, i) {
    console.error(
      "React Router caught the following error during render",
      o,
      i
    );
  }
  render() {
    return this.state.error !== void 0
      ? E.createElement(
          Mi.Provider,
          { value: this.props.routeContext },
          E.createElement(xh.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function $w(n) {
  let { routeContext: o, match: i, children: a } = n,
    c = E.useContext(Mw);
  return (
    c &&
      c.static &&
      c.staticContext &&
      (i.route.errorElement || i.route.ErrorBoundary) &&
      (c.staticContext._deepestRenderedBoundaryId = i.route.id),
    E.createElement(Mi.Provider, { value: o }, a)
  );
}
function Uw(n, o, i, a) {
  var c;
  if (
    (o === void 0 && (o = []),
    i === void 0 && (i = null),
    a === void 0 && (a = null),
    n == null)
  ) {
    var d;
    if (!i) return null;
    if (i.errors) n = i.matches;
    else if (
      (d = a) != null &&
      d.v7_partialHydration &&
      o.length === 0 &&
      !i.initialized &&
      i.matches.length > 0
    )
      n = i.matches;
    else return null;
  }
  let f = n,
    h = (c = i) == null ? void 0 : c.errors;
  if (h != null) {
    let x = f.findIndex((w) => w.route.id && h?.[w.route.id] !== void 0);
    x >= 0 || ht(!1), (f = f.slice(0, Math.min(f.length, x + 1)));
  }
  let m = !1,
    g = -1;
  if (i && a && a.v7_partialHydration)
    for (let x = 0; x < f.length; x++) {
      let w = f[x];
      if (
        ((w.route.HydrateFallback || w.route.hydrateFallbackElement) && (g = x),
        w.route.id)
      ) {
        let { loaderData: T, errors: y } = i,
          j =
            w.route.loader &&
            T[w.route.id] === void 0 &&
            (!y || y[w.route.id] === void 0);
        if (w.route.lazy || j) {
          (m = !0), g >= 0 ? (f = f.slice(0, g + 1)) : (f = [f[0]]);
          break;
        }
      }
    }
  return f.reduceRight((x, w, T) => {
    let y,
      j = !1,
      C = null,
      k = null;
    i &&
      ((y = h && w.route.id ? h[w.route.id] : void 0),
      (C = w.route.errorElement || Fw),
      m &&
        (g < 0 && T === 0
          ? (Kw("route-fallback"), (j = !0), (k = null))
          : g === T &&
            ((j = !0), (k = w.route.hydrateFallbackElement || null))));
    let A = o.concat(f.slice(0, T + 1)),
      L = () => {
        let D;
        return (
          y
            ? (D = C)
            : j
            ? (D = k)
            : w.route.Component
            ? (D = E.createElement(w.route.Component, null))
            : w.route.element
            ? (D = w.route.element)
            : (D = x),
          E.createElement($w, {
            match: w,
            routeContext: { outlet: x, matches: A, isDataRoute: i != null },
            children: D,
          })
        );
      };
    return i && (w.route.ErrorBoundary || w.route.errorElement || T === 0)
      ? E.createElement(Bw, {
          location: i.location,
          revalidation: i.revalidation,
          component: C,
          error: y,
          children: L(),
          routeContext: { outlet: null, matches: A, isDataRoute: !0 },
        })
      : L();
  }, null);
}
var Sh = (function (n) {
  return (
    (n.UseBlocker = "useBlocker"),
    (n.UseLoaderData = "useLoaderData"),
    (n.UseActionData = "useActionData"),
    (n.UseRouteError = "useRouteError"),
    (n.UseNavigation = "useNavigation"),
    (n.UseRouteLoaderData = "useRouteLoaderData"),
    (n.UseMatches = "useMatches"),
    (n.UseRevalidator = "useRevalidator"),
    (n.UseNavigateStable = "useNavigate"),
    (n.UseRouteId = "useRouteId"),
    n
  );
})(Sh || {});
function Vw(n) {
  let o = E.useContext(Lw);
  return o || ht(!1), o;
}
function Hw(n) {
  let o = E.useContext(Mi);
  return o || ht(!1), o;
}
function Ww(n) {
  let o = Hw(),
    i = o.matches[o.matches.length - 1];
  return i.route.id || ht(!1), i.route.id;
}
function Qw() {
  var n;
  let o = E.useContext(xh),
    i = Vw(Sh.UseRouteError),
    a = Ww();
  return o !== void 0 ? o : (n = i.errors) == null ? void 0 : n[a];
}
const jf = {};
function Kw(n, o, i) {
  jf[n] || (jf[n] = !0);
}
function qw(n, o) {
  n?.v7_startTransition, n?.v7_relativeSplatPath;
}
function $a(n) {
  ht(!1);
}
function Yw(n) {
  let {
    basename: o = "/",
    children: i = null,
    location: a,
    navigationType: c = Vn.Pop,
    navigator: d,
    static: f = !1,
    future: h,
  } = n;
  uu() && ht(!1);
  let m = o.replace(/^\/*/, "/"),
    g = E.useMemo(
      () => ({
        basename: m,
        navigator: d,
        static: f,
        future: Si({ v7_relativeSplatPath: !1 }, h),
      }),
      [m, h, d, f]
    );
  typeof a == "string" && (a = Ho(a));
  let {
      pathname: x = "/",
      search: w = "",
      hash: T = "",
      state: y = null,
      key: j = "default",
    } = a,
    C = E.useMemo(() => {
      let k = gh(x, m);
      return k == null
        ? null
        : {
            location: { pathname: k, search: w, hash: T, state: y, key: j },
            navigationType: c,
          };
    }, [m, x, w, T, y, j, c]);
  return C == null
    ? null
    : E.createElement(
        yh.Provider,
        { value: g },
        E.createElement(Ai.Provider, { children: i, value: C })
      );
}
function Gw(n) {
  let { children: o, location: i } = n;
  return Iw(Ua(o), i);
}
new Promise(() => {});
function Ua(n, o) {
  o === void 0 && (o = []);
  let i = [];
  return (
    E.Children.forEach(n, (a, c) => {
      if (!E.isValidElement(a)) return;
      let d = [...o, c];
      if (a.type === E.Fragment) {
        i.push.apply(i, Ua(a.props.children, d));
        return;
      }
      a.type !== $a && ht(!1), !a.props.index || !a.props.children || ht(!1);
      let f = {
        id: a.props.id || d.join("-"),
        caseSensitive: a.props.caseSensitive,
        element: a.props.element,
        Component: a.props.Component,
        index: a.props.index,
        path: a.props.path,
        loader: a.props.loader,
        action: a.props.action,
        errorElement: a.props.errorElement,
        ErrorBoundary: a.props.ErrorBoundary,
        hasErrorBoundary:
          a.props.ErrorBoundary != null || a.props.errorElement != null,
        shouldRevalidate: a.props.shouldRevalidate,
        handle: a.props.handle,
        lazy: a.props.lazy,
      };
      a.props.children && (f.children = Ua(a.props.children, d)), i.push(f);
    }),
    i
  );
}
const Xw = "6";
try {
  window.__reactRouterVersion = Xw;
} catch {}
const Zw = "startTransition",
  Of = Df[Zw];
function Jw(n) {
  let { basename: o, children: i, future: a, window: c } = n,
    d = E.useRef();
  d.current == null && (d.current = pw({ window: c, v5Compat: !0 }));
  let f = d.current,
    [h, m] = E.useState({ action: f.action, location: f.location }),
    { v7_startTransition: g } = a || {},
    x = E.useCallback(
      (w) => {
        g && Of ? Of(() => m(w)) : m(w);
      },
      [m, g]
    );
  return (
    E.useLayoutEffect(() => f.listen(x), [f, x]),
    E.useEffect(() => qw(a), [a]),
    E.createElement(Yw, {
      basename: o,
      children: i,
      location: h.location,
      navigationType: h.action,
      navigator: f,
      future: a,
    })
  );
}
var _f;
(function (n) {
  (n.UseScrollRestoration = "useScrollRestoration"),
    (n.UseSubmit = "useSubmit"),
    (n.UseSubmitFetcher = "useSubmitFetcher"),
    (n.UseFetcher = "useFetcher"),
    (n.useViewTransitionState = "useViewTransitionState");
})(_f || (_f = {}));
var Af;
(function (n) {
  (n.UseFetcher = "useFetcher"),
    (n.UseFetchers = "useFetchers"),
    (n.UseScrollRestoration = "useScrollRestoration");
})(Af || (Af = {}));
const Mf = [
    { href: "home", label: "Home" },
    { href: "about", label: "About" },
    { href: "experience", label: "Experience" },
    { href: "skills", label: "Skills" },
    { href: "projects", label: "Projects" },
    { href: "contact", label: "Contact" },
  ],
  e1 = () => {
    const [n, o] = E.useState(!1),
      i = (a) => {
        const c = document.getElementById(a);
        c && c.scrollIntoView({ behavior: "smooth" }), o(!1);
      };
    return v.jsxs("nav", {
      className:
        "fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border",
      children: [
        v.jsxs("div", {
          className:
            "container mx-auto px-4 py-4 flex items-center justify-between",
          children: [
            v.jsx("a", {
              onClick: () => i("home"),
              className:
                "cursor-pointer font-mono text-xl font-bold text-primary",
              children: "Sushant Telrandhe",
            }),
            v.jsx("div", {
              className: "hidden md:flex items-center gap-8",
              children: Mf.map((a) =>
                v.jsx(
                  "button",
                  {
                    onClick: () => i(a.href),
                    className:
                      "font-mono text-sm text-muted-foreground hover:text-primary transition-colors",
                    children: a.label,
                  },
                  a.href
                )
              ),
            }),
            v.jsx("button", {
              onClick: () => o(!n),
              className: "md:hidden text-foreground",
              children: n ? v.jsx(xp, { size: 24 }) : v.jsx(fy, { size: 24 }),
            }),
          ],
        }),
        n &&
          v.jsx("div", {
            className: "md:hidden bg-background border-b border-border",
            children: v.jsx("div", {
              className: "container mx-auto px-4 py-4 flex flex-col gap-4",
              children: Mf.map((a) =>
                v.jsx(
                  "button",
                  {
                    onClick: () => i(a.href),
                    className:
                      "font-mono text-sm text-muted-foreground hover:text-primary transition-colors text-left",
                    children: a.label,
                  },
                  a.href
                )
              ),
            }),
          }),
      ],
    });
  },
  t1 = pp(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  Vr = E.forwardRef(
    ({ className: n, variant: o, size: i, asChild: a = !1, ...c }, d) => {
      const f = a ? uv : "button";
      return v.jsx(f, {
        className: qn(t1({ variant: o, size: i, className: n })),
        ref: d,
        ...c,
      });
    }
  );
Vr.displayName = "Button";
const n1 = () =>
    v.jsxs("section", {
      id: "home",
      className:
        "min-h-screen flex items-center justify-center relative cyber-grid pt-20",
      children: [
        v.jsx("div", {
          className: "absolute inset-0 scan-line pointer-events-none",
        }),
        v.jsx("div", {
          className:
            "absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]",
        }),
        v.jsx("div", {
          className:
            "absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]",
        }),
        v.jsx("div", {
          className: "container mx-auto px-4 relative z-10",
          children: v.jsxs("div", {
            className: "grid md:grid-cols-2 gap-12 items-center",
            children: [
              v.jsxs("div", {
                className: "space-y-6 animate-fade-in",
                children: [
                  v.jsx("p", {
                    className: "font-mono text-primary text-sm tracking-wider",
                    children: "// Hello World, I'm",
                  }),
                  v.jsxs("h1", {
                    className:
                      "text-4xl md:text-6xl font-bold font-mono leading-tight",
                    children: [
                      v.jsx("span", {
                        className: "text-foreground",
                        children: "Sushant",
                      }),
                      " ",
                      v.jsx("span", {
                        className: "text-gradient-cyber",
                        children: "Telrandhe",
                      }),
                    ],
                  }),
                  v.jsxs("h2", {
                    className:
                      "font-mono text-xl md:text-2xl text-muted-foreground",
                    children: [
                      "Penetration Tester &",
                      " ",
                      v.jsx("span", {
                        className: "text-primary",
                        children: "Web Application Security",
                      }),
                      " ",
                      "Researcher",
                    ],
                  }),
                  v.jsx("p", {
                    className: "text-muted-foreground max-w-lg leading-relaxed",
                    children:
                      "I specialize in identifying vulnerabilities and strengthening security posture for digital systems. Breaking things to make them stronger.",
                  }),
                  v.jsxs("div", {
                    className: "flex flex-wrap gap-4 pt-4",
                    children: [
                      v.jsx(Vr, {
                        asChild: !0,
                        className:
                          "bg-primary text-primary-foreground hover:bg-primary/90 font-mono animate-glow-pulse",
                        children: v.jsxs("button", {
                          onClick: () => {
                            const n = document.getElementById("projects");
                            n && n.scrollIntoView({ behavior: "smooth" });
                          },
                          children: [
                            "View Portfolio ",
                            v.jsx(oy, { className: "ml-2 h-4 w-4" }),
                          ],
                        }),
                      }),
                      v.jsx(Vr, {
                        asChild: !0,
                        variant: "outline",
                        className:
                          "border-primary/50 text-primary hover:bg-primary/10 font-mono hover-glow",
                        children: v.jsxs("a", {
                          href: "https://drive.google.com/file/d/1Y7-sQwVRAqN4kJo7QtVsbyx1j3zXWjcD/view",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: [
                            v.jsx(ay, { className: "mr-2 h-4 w-4" }),
                            "Download Resume",
                          ],
                        }),
                      }),
                    ],
                  }),
                  v.jsxs("div", {
                    className: "pt-8 flex items-center gap-2",
                    children: [
                      v.jsx("span", {
                        className:
                          "w-3 h-3 bg-cyber-green rounded-full animate-pulse",
                      }),
                      v.jsx("span", {
                        className: "font-mono text-sm text-muted-foreground",
                        children: "Currently available for opportunities",
                      }),
                    ],
                  }),
                ],
              }),
              v.jsx("div", {
                className: "relative flex justify-center",
                style: { animationDelay: "0.2s" },
                children: v.jsxs("div", {
                  className: "relative",
                  children: [
                    v.jsxs("div", {
                      className:
                        "w-72 h-72 md:w-80 md:h-80 rounded-lg border-glow overflow-hidden bg-muted relative",
                      children: [
                        v.jsx("img", {
                          src: "./assets/sushant-profile-pic.png",
                          alt: "Sushant Telrandhe",
                          className: "w-full h-full object-cover",
                        }),
                        v.jsx("div", {
                          className:
                            "absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary",
                        }),
                        v.jsx("div", {
                          className:
                            "absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-primary",
                        }),
                        v.jsx("div", {
                          className:
                            "absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-primary",
                        }),
                        v.jsx("div", {
                          className:
                            "absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary",
                        }),
                      ],
                    }),
                    v.jsxs("div", {
                      className:
                        "absolute -bottom-4 left-1/2 -translate-x-1/2 bg-background border border-primary/50 px-4 py-2 rounded font-mono text-xs",
                      children: [
                        v.jsx("span", {
                          className: "text-muted-foreground",
                          children: "status:",
                        }),
                        " ",
                        v.jsx("span", {
                          className: "text-primary",
                          children: "ethical_hacker",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  r1 = [
    { name: "eJPT", status: "Completed" },
    { name: "Security+", status: "Completed" },
    { name: "CCNA", status: "Trained" },
  ],
  o1 = [
    {
      degree: "B.E. in Computer Science",
      school: "Mumbai University",
      year: "2026",
    },
    { degree: "12th Standard", school: "Somalwar High School", year: "2022" },
  ],
  s1 = () =>
    v.jsx("section", {
      id: "about",
      className: "py-20 relative",
      children: v.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          v.jsxs("h2", {
            className:
              "font-mono text-3xl font-bold mb-12 flex items-center gap-4",
            children: [
              v.jsx("span", { className: "text-primary", children: "#" }),
              "about-me",
              v.jsx("span", { className: "h-px flex-1 bg-border max-w-xs" }),
            ],
          }),
          v.jsxs("div", {
            className: "grid lg:grid-cols-2 gap-12",
            children: [
              v.jsxs("div", {
                className: "space-y-6",
                children: [
                  v.jsxs("p", {
                    className: "text-muted-foreground leading-relaxed text-lg",
                    children: [
                      "I am a penetration tester specializing in",
                      " ",
                      v.jsx("span", {
                        className: "text-primary",
                        children: "web application security",
                      }),
                      ". I help organizations identify vulnerabilities and strengthen their security posture through comprehensive security assessments.",
                    ],
                  }),
                  v.jsx("p", {
                    className: "text-muted-foreground leading-relaxed",
                    children:
                      "My interests span across penetration testing, network security, automation, and leveraging AI for security applications. I believe in continuous learning and staying ahead of emerging threats.",
                  }),
                  v.jsxs("div", {
                    className: "space-y-4 pt-4",
                    children: [
                      v.jsxs("h3", {
                        className: "font-mono text-lg flex items-center gap-2",
                        children: [
                          v.jsx(sy, { className: "w-5 h-5 text-primary" }),
                          "Certifications",
                        ],
                      }),
                      v.jsx("div", {
                        className: "flex flex-wrap gap-3",
                        children: r1.map((n) =>
                          v.jsxs(
                            "div",
                            {
                              className:
                                "px-4 py-2 border border-primary/30 rounded bg-muted/50 font-mono text-sm hover-glow cursor-default",
                              children: [
                                v.jsx("span", {
                                  className: "text-primary",
                                  children: n.name,
                                }),
                                v.jsxs("span", {
                                  className:
                                    "text-muted-foreground text-xs ml-2",
                                  children: ["(", n.status, ")"],
                                }),
                              ],
                            },
                            n.name
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              v.jsxs("div", {
                className: "space-y-8",
                children: [
                  v.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      v.jsxs("h3", {
                        className: "font-mono text-lg flex items-center gap-2",
                        children: [
                          v.jsx(cy, { className: "w-5 h-5 text-primary" }),
                          "Education",
                        ],
                      }),
                      v.jsx("div", {
                        className: "space-y-4",
                        children: o1.map((n) =>
                          v.jsxs(
                            "div",
                            {
                              className:
                                "p-4 border border-border rounded-lg bg-card hover-glow",
                              children: [
                                v.jsx("p", {
                                  className: "font-mono text-foreground",
                                  children: n.degree,
                                }),
                                v.jsx("p", {
                                  className: "text-muted-foreground text-sm",
                                  children: n.school,
                                }),
                                v.jsx("p", {
                                  className:
                                    "text-primary font-mono text-sm mt-1",
                                  children: n.year,
                                }),
                              ],
                            },
                            n.degree
                          )
                        ),
                      }),
                    ],
                  }),
                  v.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      v.jsxs("h3", {
                        className: "font-mono text-lg flex items-center gap-2",
                        children: [
                          v.jsx(vy, { className: "w-5 h-5 text-primary" }),
                          "Focus Areas",
                        ],
                      }),
                      v.jsx("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                          "Web App Security",
                          "Network Penetration",
                          "OSINT",
                          "Vulnerability Research",
                          "Security Automation",
                        ].map((n) =>
                          v.jsx(
                            "span",
                            {
                              className:
                                "px-3 py-1 bg-primary/10 border border-primary/30 rounded text-sm font-mono text-primary",
                              children: n,
                            },
                            n
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  i1 = [
    {
      title: "Cyber Security Intern",
      company: "Hack Secure",
      location: "Mumbai",
      period: "Feb 2025 – Mar 2025",
      points: [
        "Performed penetration testing & vulnerability assessment labs",
        "Hands-on experience with Nmap, Metasploit, Wireshark, Burp Suite",
        "Documented findings and provided remediation recommendations",
      ],
    },
    {
      title: "AI Intern",
      company: "Edunet Foundation",
      location: "Mumbai",
      period: "Jan 2025 – Mar 2025",
      points: [
        "Learned AI & NLP fundamentals for chatbot creation",
        "Built and deployed an AI-powered chatbot using Python & NLP",
        "Gained experience in machine learning model deployment",
      ],
    },
  ],
  l1 = () =>
    v.jsx("section", {
      id: "experience",
      className: "py-20 bg-muted/20",
      children: v.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          v.jsxs("h2", {
            className:
              "font-mono text-3xl font-bold mb-12 flex items-center gap-4",
            children: [
              v.jsx("span", { className: "text-primary", children: "#" }),
              "experience",
              v.jsx("span", { className: "h-px flex-1 bg-border max-w-xs" }),
            ],
          }),
          v.jsxs("div", {
            className: "relative",
            children: [
              v.jsx("div", {
                className:
                  "absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px",
              }),
              v.jsx("div", {
                className: "space-y-12",
                children: i1.map((n, o) =>
                  v.jsxs(
                    "div",
                    {
                      className: `relative grid md:grid-cols-2 gap-8 ${
                        o % 2 === 1 ? "md:text-right" : ""
                      }`,
                      children: [
                        v.jsx("div", {
                          className:
                            "absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-[7px] md:-translate-x-2 animate-glow-pulse",
                        }),
                        v.jsx("div", {
                          className: `pl-8 md:pl-0 ${
                            o % 2 === 1
                              ? "md:col-start-1 md:pr-12"
                              : "md:col-start-2 md:pl-12"
                          }`,
                          children: v.jsxs("div", {
                            className:
                              "p-6 border border-border rounded-lg bg-card hover-glow group",
                            children: [
                              v.jsxs("div", {
                                className: "flex items-start gap-3 mb-4",
                                children: [
                                  v.jsx(ly, {
                                    className:
                                      "w-5 h-5 text-primary flex-shrink-0 mt-1",
                                  }),
                                  v.jsxs("div", {
                                    className:
                                      o % 2 === 1 ? "md:text-right w-full" : "",
                                    children: [
                                      v.jsx("h3", {
                                        className:
                                          "font-mono text-lg font-semibold text-foreground",
                                        children: n.title,
                                      }),
                                      v.jsxs("p", {
                                        className:
                                          "text-primary font-mono text-sm",
                                        children: [
                                          n.company,
                                          " • ",
                                          n.location,
                                        ],
                                      }),
                                      v.jsx("p", {
                                        className:
                                          "text-muted-foreground text-sm font-mono",
                                        children: n.period,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              v.jsx("ul", {
                                className: `space-y-2 text-muted-foreground text-sm ${
                                  o % 2 === 1 ? "md:text-right" : "text-left"
                                }`,
                                children: n.points.map((i, a) =>
                                  v.jsxs(
                                    "li",
                                    {
                                      className: "flex items-start gap-2",
                                      children: [
                                        v.jsx("span", {
                                          className: "text-primary",
                                          children: "›",
                                        }),
                                        v.jsx("span", { children: i }),
                                      ],
                                    },
                                    a
                                  )
                                ),
                              }),
                            ],
                          }),
                        }),
                      ],
                    },
                    n.title
                  )
                ),
              }),
            ],
          }),
        ],
      }),
    }),
  a1 = [
    {
      title: "Technical Skills",
      icon: yy,
      skills: [
        "Penetration Testing",
        "Web App Security",
        "Vulnerability Assessment",
        "Network Scanning",
        "Exploitation",
        "OSINT",
        "Documentation",
      ],
    },
    {
      title: "Tools",
      icon: xy,
      skills: [
        "Nmap",
        "Burp Suite",
        "Metasploit",
        "Wireshark",
        "Shodan",
        "Gobuster",
        "Nikto",
        "Python",
        "Bash",
        "Linux",
      ],
    },
    {
      title: "Soft Skills",
      icon: mp,
      skills: [
        "Analytical Thinking",
        "Problem Solving",
        "Adaptability",
        "Team Collaboration",
        "Attention to Detail",
      ],
    },
  ],
  u1 = () =>
    v.jsx("section", {
      id: "skills",
      className: "py-20",
      children: v.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          v.jsxs("h2", {
            className:
              "font-mono text-3xl font-bold mb-12 flex items-center gap-4",
            children: [
              v.jsx("span", { className: "text-primary", children: "#" }),
              "skills",
              v.jsx("span", { className: "h-px flex-1 bg-border max-w-xs" }),
            ],
          }),
          v.jsx("div", {
            className: "grid md:grid-cols-3 gap-8",
            children: a1.map((n) =>
              v.jsxs(
                "div",
                {
                  className:
                    "p-6 border border-border rounded-lg bg-card hover-glow group",
                  children: [
                    v.jsxs("div", {
                      className: "flex items-center gap-3 mb-6",
                      children: [
                        v.jsx(n.icon, {
                          className:
                            "w-6 h-6 text-primary group-hover:animate-pulse",
                        }),
                        v.jsx("h3", {
                          className: "font-mono text-lg font-semibold",
                          children: n.title,
                        }),
                      ],
                    }),
                    v.jsx("div", {
                      className: "flex flex-wrap gap-2",
                      children: n.skills.map((o) =>
                        v.jsx(
                          "span",
                          {
                            className:
                              "px-3 py-1.5 bg-muted border border-border rounded text-sm font-mono text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-default",
                            children: o,
                          },
                          o
                        )
                      ),
                    }),
                  ],
                },
                n.title
              )
            ),
          }),
        ],
      }),
    }),
  c1 = [
    {
      title: "File Encryption Tool",
      description:
        "Python tool using AES + RSA for secure file handling with symmetric and asymmetric encryption.",
      tags: ["Python", "AES", "RSA", "Cryptography"],
      icon: dy,
    },
    {
      title: "Python Port Scanner",
      description:
        "Custom-built scanner supporting full-range and categorized scans with progress visualization.",
      tags: ["Python", "Networking", "Security"],
      icon: py,
    },
    {
      title: "AI/NLP Chatbot",
      description:
        "Intelligent chatbot using Python & NLP for natural language understanding and responses.",
      tags: ["Python", "NLP", "AI", "Machine Learning"],
      icon: iy,
    },
    {
      title: "Blockchain Messaging",
      description:
        "Prototype demonstrating tamper-proof communication using cryptographic hashing.",
      tags: ["Blockchain", "Security", "Hashing"],
      icon: yp,
    },
    {
      title: "ML-Based NGFW (LSTM)",
      description:
        "Deep learning model for real-time attack detection on raw network traffic.",
      tags: ["LSTM", "Deep Learning", "Network Security"],
      icon: mp,
    },
    {
      title: "University Network Sim",
      description:
        "Two-campus secure network design using Three-Tier architecture in Cisco Packet Tracer.",
      tags: ["Cisco", "Networking", "Architecture"],
      icon: gy,
    },
  ],
  d1 = () =>
    v.jsx("section", {
      id: "projects",
      className: "py-20 bg-muted/20",
      children: v.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          v.jsx("div", {
            className: "flex items-center justify-between mb-12",
            children: v.jsxs("h2", {
              className: "font-mono text-3xl font-bold flex items-center gap-4",
              children: [
                v.jsx("span", { className: "text-primary", children: "#" }),
                "projects",
                v.jsx("span", {
                  className: "h-px flex-1 bg-border max-w-xs hidden sm:block",
                }),
              ],
            }),
          }),
          v.jsx("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
            children: c1.map((n) =>
              v.jsxs(
                "div",
                {
                  className:
                    "group border border-border rounded-lg bg-card overflow-hidden hover-glow",
                  children: [
                    v.jsxs("div", {
                      className:
                        "h-32 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative",
                      children: [
                        v.jsx(n.icon, {
                          className:
                            "w-12 h-12 text-primary/60 group-hover:text-primary transition-colors",
                        }),
                        v.jsx("div", {
                          className:
                            "absolute inset-0 bg-gradient-to-t from-card to-transparent",
                        }),
                      ],
                    }),
                    v.jsxs("div", {
                      className: "p-5 space-y-4",
                      children: [
                        v.jsx("h3", {
                          className:
                            "font-mono text-lg font-semibold text-foreground group-hover:text-primary transition-colors",
                          children: n.title,
                        }),
                        v.jsx("p", {
                          className:
                            "text-muted-foreground text-sm leading-relaxed",
                          children: n.description,
                        }),
                        v.jsx("div", {
                          className: "flex flex-wrap gap-2",
                          children: n.tags.map((o) =>
                            v.jsx(
                              "span",
                              {
                                className:
                                  "px-2 py-1 bg-muted text-xs font-mono text-muted-foreground rounded",
                                children: o,
                              },
                              o
                            )
                          ),
                        }),
                        v.jsxs("div", {
                          className: "flex gap-3 pt-2",
                          children: [
                            v.jsxs(Vr, {
                              variant: "outline",
                              size: "sm",
                              className:
                                "border-primary/30 text-primary hover:bg-primary/10 font-mono text-xs",
                              children: [
                                v.jsx(Ya, { className: "w-3 h-3 mr-1" }),
                                "Code",
                              ],
                            }),
                            v.jsxs(Vr, {
                              variant: "outline",
                              size: "sm",
                              className:
                                "border-border text-muted-foreground hover:text-primary hover:border-primary/30 font-mono text-xs",
                              children: [
                                v.jsx(uy, { className: "w-3 h-3 mr-1" }),
                                "Demo",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                n.title
              )
            ),
          }),
          v.jsxs("div", {
            className: "mt-12 p-6 border border-border rounded-lg bg-card",
            children: [
              v.jsxs("h3", {
                className: "font-mono text-lg mb-4 flex items-center gap-2",
                children: [
                  v.jsx(yp, { className: "w-5 h-5 text-primary" }),
                  "CTF Platforms & Labs",
                ],
              }),
              v.jsx("p", {
                className: "text-muted-foreground mb-4",
                children:
                  "Active on TryHackMe and HackTheBox, continuously sharpening practical penetration testing skills.",
              }),
              v.jsxs("div", {
                className: "flex flex-wrap gap-3",
                children: [
                  v.jsx("span", {
                    className:
                      "px-4 py-2 bg-primary/10 border border-primary/30 rounded font-mono text-sm text-primary",
                    children: "TryHackMe",
                  }),
                  v.jsx("span", {
                    className:
                      "px-4 py-2 bg-accent/10 border border-accent/30 rounded font-mono text-sm text-accent",
                    children: "HackTheBox",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  f1 = [
    {
      icon: vp,
      label: "Email",
      value: "work.sushanttelrandhe@gmail.com",
      href: "mailto:work.sushanttelrandhe@gmail.com",
    },
    {
      icon: hy,
      label: "Phone",
      value: "+91 9422961219",
      href: "tel:+919422961219",
    },
    {
      icon: gp,
      label: "LinkedIn",
      value: "sushant-telrandhe",
      href: "https://www.linkedin.com/in/sushant-telrandhe-1917b0236",
    },
    {
      icon: Ya,
      label: "GitHub",
      value: "0jokerkiller0",
      href: "https://github.com/0jokerkiller0",
    },
  ],
  p1 = () => {
    const [n, o] = E.useState(""),
      [i, a] = E.useState(""),
      [c, d] = E.useState(""),
      [f, h] = E.useState(!1),
      [m, g] = E.useState(!1),
      x = async (w) => {
        w.preventDefault(), h(!0), g(!1);
        try {
          await fetch(
            "https://formsubmit.co/ajax/work.sushanttelrandhe@gmail.com",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({
                name: n,
                email: i,
                subject: "Portfolio Contact",
                message: c,
              }),
            }
          ),
            g(!0),
            o(""),
            a(""),
            d("");
        } catch {
          alert("Failed to send message. Try again.");
        } finally {
          h(!1);
        }
      };
    return v.jsx("section", {
      id: "contact",
      className: "py-20",
      children: v.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          v.jsxs("h2", {
            className:
              "font-mono text-3xl font-bold mb-12 flex items-center gap-4",
            children: [
              v.jsx("span", { className: "text-primary", children: "contact" }),
              v.jsx("span", { className: "h-px flex-1 bg-border max-w-xs" }),
            ],
          }),
          v.jsxs("div", {
            className: "grid lg:grid-cols-2 gap-12",
            children: [
              v.jsxs("div", {
                className: "space-y-6",
                children: [
                  v.jsx("p", {
                    className: "text-muted-foreground text-lg leading-relaxed",
                    children:
                      "I'm interested in freelance opportunities and full-time positions in cybersecurity. Feel free to reach out!",
                  }),
                  v.jsx("div", {
                    className: "space-y-4",
                    children: f1.map((w) =>
                      v.jsxs(
                        "a",
                        {
                          href: w.href,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "flex items-center gap-4 p-4 border border-border rounded-lg bg-card hover-glow group",
                          children: [
                            v.jsx("div", {
                              className:
                                "w-10 h-10 rounded bg-primary/10 flex items-center justify-center",
                              children: v.jsx(w.icon, {
                                className: "w-5 h-5 text-primary",
                              }),
                            }),
                            v.jsxs("div", {
                              children: [
                                v.jsx("p", {
                                  className:
                                    "font-mono text-sm text-muted-foreground",
                                  children: w.label,
                                }),
                                v.jsx("p", {
                                  className:
                                    "text-foreground group-hover:text-primary",
                                  children: w.value,
                                }),
                              ],
                            }),
                          ],
                        },
                        w.label
                      )
                    ),
                  }),
                ],
              }),
              v.jsxs("div", {
                className: "border border-border rounded-lg bg-card p-6",
                children: [
                  v.jsxs("h3", {
                    className: "font-mono text-lg mb-6 flex items-center gap-2",
                    children: [
                      v.jsx(my, { className: "w-5 h-5 text-primary" }),
                      "Send a Message",
                    ],
                  }),
                  v.jsxs("form", {
                    className: "space-y-4",
                    onSubmit: x,
                    children: [
                      v.jsx("input", {
                        required: !0,
                        placeholder: "Your Name",
                        value: n,
                        onChange: (w) => o(w.target.value),
                        className: "w-full px-4 py-3 bg-muted border rounded",
                      }),
                      v.jsx("input", {
                        required: !0,
                        type: "email",
                        placeholder: "Your Email",
                        value: i,
                        onChange: (w) => a(w.target.value),
                        className: "w-full px-4 py-3 bg-muted border rounded",
                      }),
                      v.jsx("textarea", {
                        required: !0,
                        rows: 4,
                        placeholder: "Your Message",
                        value: c,
                        onChange: (w) => d(w.target.value),
                        className:
                          "w-full px-4 py-3 bg-muted border rounded resize-none",
                      }),
                      v.jsx(Vr, {
                        type: "submit",
                        disabled: f,
                        className: "w-full font-mono",
                        children: f ? "Sending..." : "Send Message",
                      }),
                      m &&
                        v.jsx("p", {
                          className: "text-green-500 text-sm font-mono",
                          children: "✔ Message sent successfully!",
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  h1 = () =>
    v.jsx("footer", {
      className: "py-8 border-t border-border bg-card",
      children: v.jsx("div", {
        className: "container mx-auto px-4",
        children: v.jsxs("div", {
          className:
            "flex flex-col md:flex-row items-center justify-between gap-4",
          children: [
            v.jsxs("div", {
              className: "font-mono text-sm text-muted-foreground",
              children: [
                v.jsx("span", { className: "text-primary", children: "<" }),
                "Sushant Telrandhe",
                v.jsx("span", { className: "text-primary", children: " />" }),
                v.jsx("span", { className: "ml-2", children: "© 2024" }),
              ],
            }),
            v.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                v.jsx("a", {
                  href: "https://github.com/0jokerkiller0",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "w-10 h-10 rounded border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors",
                  children: v.jsx(Ya, { className: "w-5 h-5" }),
                }),
                v.jsx("a", {
                  href: "https://www.linkedin.com/in/sushant-telrandhe-1917b0236",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "w-10 h-10 rounded border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors",
                  children: v.jsx(gp, { className: "w-5 h-5" }),
                }),
                v.jsx("a", {
                  href: "mailto:work.sushanttelrandhe@gmail.com",
                  className:
                    "w-10 h-10 rounded border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors",
                  children: v.jsx(vp, { className: "w-5 h-5" }),
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  m1 = () =>
    v.jsxs("div", {
      className: "min-h-screen bg-background text-foreground",
      children: [
        v.jsx(e1, {}),
        v.jsxs("main", {
          children: [
            v.jsx(n1, {}),
            v.jsx(s1, {}),
            v.jsx(l1, {}),
            v.jsx(u1, {}),
            v.jsx(d1, {}),
            v.jsx(p1, {}),
          ],
        }),
        v.jsx(h1, {}),
      ],
    }),
  g1 = () => {
    const n = wh();
    return (
      E.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          n.pathname
        );
      }, [n.pathname]),
      v.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: v.jsxs("div", {
          className: "text-center",
          children: [
            v.jsx("h1", {
              className: "mb-4 text-4xl font-bold",
              children: "404",
            }),
            v.jsx("p", {
              className: "mb-4 text-xl text-muted-foreground",
              children: "Oops! Page not found",
            }),
            v.jsx("a", {
              href: "/",
              className: "text-primary underline hover:text-primary/90",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  },
  v1 = new cw(),
  y1 = () =>
    v.jsx(fw, {
      client: v1,
      children: v.jsxs(Bx, {
        children: [
          v.jsx(t0, {}),
          v.jsx(tv, {}),
          v.jsx(Jw, {
            children: v.jsxs(Gw, {
              children: [
                v.jsx($a, { path: "/", element: v.jsx(m1, {}) }),
                v.jsx($a, { path: "*", element: v.jsx(g1, {}) }),
              ],
            }),
          }),
        ],
      }),
    });
kg.createRoot(document.getElementById("root")).render(v.jsx(y1, {}));

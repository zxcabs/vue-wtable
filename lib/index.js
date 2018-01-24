!function(e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("wtable", [], t) : "object" == typeof exports ? exports.wtable = t() : e.wtable = t()
}("undefined" != typeof self ? self : this, function() {
  return function(e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var o = t[r] = {i: r, l: !1, exports: {}};
      return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    return n.m = e, n.c = t, n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: r})
    }, n.n = function(e) {
      var t = e && e.__esModule ? function() {
        return e.default
      } : function() {
        return e
      };
      return n.d(t, "a", t), t
    }, n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 11)
  }([function(e, t, n) {
    e.exports = !n(10)(function() {
      return 7 != Object.defineProperty({}, "a", {
        get: function() {
          return 7
        }
      }).a
    })
  }, function(e, t) {
    e.exports = function(e) {
      return "object" == typeof e ? null !== e : "function" == typeof e
    }
  }, function(e, t) {
    e.exports = function(e) {
      var t = [];
      return t.toString = function() {
        return this.map(function(t) {
          var n = function(e, t) {
            var n = e[1] || "", r = e[3];
            if (!r) return n;
            if (t && "function" == typeof btoa) {
              var o = (a = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                i = r.sources.map(function(e) {
                  return "/*# sourceURL=" + r.sourceRoot + e + " */"
                });
              return [n].concat(i).concat([o]).join("\n")
            }
            var a;
            return [n].join("\n")
          }(t, e);
          return t[2] ? "@media " + t[2] + "{" + n + "}" : n
        }).join("")
      }, t.i = function(e, n) {
        "string" == typeof e && (e = [[null, e, ""]]);
        for (var r = {}, o = 0; o < this.length; o++) {
          var i = this[o][0];
          "number" == typeof i && (r[i] = !0)
        }
        for (o = 0; o < e.length; o++) {
          var a = e[o];
          "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
        }
      }, t
    }
  }, function(e, t, n) {
    var r = "undefined" != typeof document;
    if ("undefined" != typeof DEBUG && DEBUG && !r) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
    var o = n(15), i = {}, a = r && (document.head || document.getElementsByTagName("head")[0]), u = null, s = 0,
      f = !1, c = function() {
      }, l = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

    function d(e) {
      for (var t = 0; t < e.length; t++) {
        var n = e[t], r = i[n.id];
        if (r) {
          r.refs++;
          for (var o = 0; o < r.parts.length; o++) r.parts[o](n.parts[o]);
          for (; o < n.parts.length; o++) r.parts.push(h(n.parts[o]));
          r.parts.length > n.parts.length && (r.parts.length = n.parts.length)
        } else {
          var a = [];
          for (o = 0; o < n.parts.length; o++) a.push(h(n.parts[o]));
          i[n.id] = {id: n.id, refs: 1, parts: a}
        }
      }
    }

    function p() {
      var e = document.createElement("style");
      return e.type = "text/css", a.appendChild(e), e
    }

    function h(e) {
      var t, n, r = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');
      if (r) {
        if (f) return c;
        r.parentNode.removeChild(r)
      }
      if (l) {
        var o = s++;
        r = u || (u = p()), t = b.bind(null, r, o, !1), n = b.bind(null, r, o, !0)
      } else r = p(), t = function(e, t) {
        var n = t.css, r = t.media, o = t.sourceMap;
        r && e.setAttribute("media", r);
        o && (n += "\n/*# sourceURL=" + o.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
        if (e.styleSheet) e.styleSheet.cssText = n; else {
          for (; e.firstChild;) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(n))
        }
      }.bind(null, r), n = function() {
        r.parentNode.removeChild(r)
      };
      return t(e), function(r) {
        if (r) {
          if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap) return;
          t(e = r)
        } else n()
      }
    }

    e.exports = function(e, t, n) {
      f = n;
      var r = o(e, t);
      return d(r), function(t) {
        for (var n = [], a = 0; a < r.length; a++) {
          var u = r[a];
          (s = i[u.id]).refs--, n.push(s)
        }
        t ? d(r = o(e, t)) : r = [];
        for (a = 0; a < n.length; a++) {
          var s;
          if (0 === (s = n[a]).refs) {
            for (var f = 0; f < s.parts.length; f++) s.parts[f]();
            delete i[s.id]
          }
        }
      }
    };
    var v, y = (v = [], function(e, t) {
      return v[e] = t, v.filter(Boolean).join("\n")
    });

    function b(e, t, n, r) {
      var o = n ? "" : r.css;
      if (e.styleSheet) e.styleSheet.cssText = y(t, o); else {
        var i = document.createTextNode(o), a = e.childNodes;
        a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
      }
    }
  }, function(e, t) {
    e.exports = function(e, t, n, r, o, i) {
      var a, u = e = e || {}, s = typeof e.default;
      "object" !== s && "function" !== s || (a = e, u = e.default);
      var f, c = "function" == typeof u ? u.options : u;
      if (t && (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), n && (c.functional = !0), o && (c._scopeId = o), i ? (f = function(e) {
          (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), r && r.call(this, e), e && e._registeredComponents && e._registeredComponents.add(i)
        }, c._ssrRegister = f) : r && (f = r), f) {
        var l = c.functional, d = l ? c.render : c.beforeCreate;
        l ? (c._injectStyles = f, c.render = function(e, t) {
          return f.call(t), d(e, t)
        }) : c.beforeCreate = d ? [].concat(d, f) : [f]
      }
      return {esModule: a, exports: u, options: c}
    }
  }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
      name: "w-table",
      props: {fixed: Boolean, list: {type: Array, default: []}, isPending: Boolean, orderBy: String, orderDir: String},
      methods: {
        click: function(e) {
          var t = e.target;
          "TH" === t.tagName && t.dataset.orderBy && this.clickHeader(t.dataset.orderBy)
        }, clickHeader: function(e) {
          var t = void 0;
          t = this.orderBy === e && "asc" === this.orderDir ? "desc" : "asc", this.change({orderBy: e, orderDir: t})
        }, change: function(e) {
          this.isPending || this.$emit("change", e)
        }
      },
      computed: {
        classes: function() {
          return {fixed: this.fixed}
        }
      }
    }
  }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
      name: "w-th",
      props: {orderBy: String, orderDir: String},
      computed: {
        sortKey: function() {
          return this.$attrs["data-order-by"]
        }, sortable: function() {
          return this.sortKey === this.orderBy
        }, isAsc: function() {
          return "asc" === this.orderDir
        }, classes: function() {
          return {desc: !this.isAsc}
        }
      }
    }
  }, function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
  }, function(e, t) {
    var n = e.exports = {version: "2.5.3"};
    "number" == typeof __e && (__e = n)
  }, function(e, t, n) {
    var r = n(30), o = n(31), i = n(33), a = Object.defineProperty;
    t.f = n(0) ? Object.defineProperty : function(e, t, n) {
      if (r(e), t = i(t, !0), r(n), o) try {
        return a(e, t, n)
      } catch (e) {
      }
      if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
      return "value" in n && (e[t] = n.value), e
    }
  }, function(e, t) {
    e.exports = function(e) {
      try {
        return !!e()
      } catch (e) {
        return !0
      }
    }
  }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(12);
    Object.defineProperty(t, "WTable", {
      enumerable: !0, get: function() {
        return a(r).default
      }
    });
    var o = n(17);
    Object.defineProperty(t, "WTh", {
      enumerable: !0, get: function() {
        return a(o).default
      }
    });
    var i = n(21);

    function a(e) {
      return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "WPagination", {
      enumerable: !0, get: function() {
        return a(i).default
      }
    })
  }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(5), o = n.n(r);
    for (var i in r) "default" !== i && function(e) {
      n.d(t, e, function() {
        return r[e]
      })
    }(i);
    var a = n(16);
    var u = function(e) {
      n(13)
    }, s = n(4)(o.a, a.a, !1, u, "data-v-25b2fd95", null);
    t.default = s.exports
  }, function(e, t, n) {
    var r = n(14);
    "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    n(3)("de45eace", r, !0)
  }, function(e, t, n) {
    (e.exports = n(2)(!1)).push([e.i, ".fixed[data-v-25b2fd95]{table-layout:fixed;width:100%;height:100%;display:block;position:relative}.fixed tbody[data-v-25b2fd95]{height:100%;overflow:auto}.fixed tfoot[data-v-25b2fd95]{position:absolute;bottom:0;width:100%}.fixed tbody[data-v-25b2fd95],.fixed tfoot[data-v-25b2fd95],.fixed thead[data-v-25b2fd95]{display:block}", ""])
  }, function(e, t) {
    e.exports = function(e, t) {
      for (var n = [], r = {}, o = 0; o < t.length; o++) {
        var i = t[o], a = i[0], u = {id: e + ":" + o, css: i[1], media: i[2], sourceMap: i[3]};
        r[a] ? r[a].parts.push(u) : n.push(r[a] = {id: a, parts: [u]})
      }
      return n
    }
  }, function(e, t, n) {
    "use strict";
    var r = {
      render: function() {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("table", {
          class: e.classes,
          on: {click: e.click}
        }, [n("thead", {ref: "thead"}, [n("tr", [e._t("head")], 2)]), e._v(" "), n("tbody", {ref: "tbody"}, e._l(e.list, function(t, r) {
          return n("tr", {key: r}, [e._t("item", null, {item: t, index: r})], 2)
        })), e._v(" "), e.$slots.foot ? n("tfoot", {ref: "tfoot"}, [e._t("foot")], 2) : e._e()])
      }, staticRenderFns: []
    };
    t.a = r
  }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(6), o = n.n(r);
    for (var i in r) "default" !== i && function(e) {
      n.d(t, e, function() {
        return r[e]
      })
    }(i);
    var a = n(20);
    var u = function(e) {
      n(18)
    }, s = n(4)(o.a, a.a, !1, u, "data-v-43746465", null);
    t.default = s.exports
  }, function(e, t, n) {
    var r = n(19);
    "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    n(3)("9eb3c676", r, !0)
  }, function(e, t, n) {
    (e.exports = n(2)(!1)).push([e.i, ".desc[data-v-43746465]{transform:rotate(180deg);display:inline-block}", ""])
  }, function(e, t, n) {
    "use strict";
    var r = {
      render: function() {
        var e = this.$createElement, t = this._self._c || e;
        return t("th", [this._t("default"), this._v(" "), this.sortable ? t("span", {class: this.classes}, [this._v("^")]) : this._e()], 2)
      }, staticRenderFns: []
    };
    t.a = r
  }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var r, o = n(22), i = (r = o) && r.__esModule ? r : {default: r};
    t.default = {
      name: "w-pagination",
      props: {
        offset: {type: Number, default: 0},
        limit: {type: Number, default: 1},
        total: {type: Number, default: 1},
        liClass: {type: String, default: "w-page-item"},
        itemClass: {type: String, default: "w-page-link"}
      },
      methods: {
        click: function(e) {
          var t = e.page;
          this.$emit("change", {offset: t * this.limit})
        }
      },
      computed: {
        totalPages: function() {
          return Math.floor(this.total / this.limit)
        }, page: function() {
          return Math.floor(this.offset / this.limit)
        }, pages: function() {
          var e = [];
          this.page > 0 && e.push({label: "<", page: this.page - 1});
          for (var t = 0; t < this.totalPages; t += 1) e.push({label: t + 1, page: t, isActive: t === this.page});
          return this.page < this.totalPages - 1 && e.push({label: ">", page: this.page + 1}), e
        }
      },
      render: function(e) {
        var t = this, n = this.$scopedSlots.item, r = n || function(e, t) {
          return function(n) {
            return e("span", {class: t}, [n.label])
          }
        }(e, this.itemClass);
        return e("ul", null, [this.pages.map(function(n) {
          var o;
          return e("li", {
            on: {
              click: function() {
                return t.click(n)
              }
            },
            key: n.label,
            attrs: {"data-page": n.page},
            class: (o = {}, (0, i.default)(o, t.liClass, !0), (0, i.default)(o, "active", n.isActive), o)
          }, [r(n)])
        })])
      }
    }
  }, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r, o = n(23), i = (r = o) && r.__esModule ? r : {default: r};
    t.default = function(e, t, n) {
      return t in e ? (0, i.default)(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : e[t] = n, e
    }
  }, function(e, t, n) {
    e.exports = {default: n(24), __esModule: !0}
  }, function(e, t, n) {
    n(25);
    var r = n(8).Object;
    e.exports = function(e, t, n) {
      return r.defineProperty(e, t, n)
    }
  }, function(e, t, n) {
    var r = n(26);
    r(r.S + r.F * !n(0), "Object", {defineProperty: n(9).f})
  }, function(e, t, n) {
    var r = n(7), o = n(8), i = n(27), a = n(29), u = function(e, t, n) {
      var s, f, c, l = e & u.F, d = e & u.G, p = e & u.S, h = e & u.P, v = e & u.B, y = e & u.W,
        b = d ? o : o[t] || (o[t] = {}), g = b.prototype, m = d ? r : p ? r[t] : (r[t] || {}).prototype;
      for (s in d && (n = t), n) (f = !l && m && void 0 !== m[s]) && s in b || (c = f ? m[s] : n[s], b[s] = d && "function" != typeof m[s] ? n[s] : v && f ? i(c, r) : y && m[s] == c ? function(e) {
        var t = function(t, n, r) {
          if (this instanceof e) {
            switch (arguments.length) {
              case 0:
                return new e;
              case 1:
                return new e(t);
              case 2:
                return new e(t, n)
            }
            return new e(t, n, r)
          }
          return e.apply(this, arguments)
        };
        return t.prototype = e.prototype, t
      }(c) : h && "function" == typeof c ? i(Function.call, c) : c, h && ((b.virtual || (b.virtual = {}))[s] = c, e & u.R && g && !g[s] && a(g, s, c)))
    };
    u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, e.exports = u
  }, function(e, t, n) {
    var r = n(28);
    e.exports = function(e, t, n) {
      if (r(e), void 0 === t) return e;
      switch (n) {
        case 1:
          return function(n) {
            return e.call(t, n)
          };
        case 2:
          return function(n, r) {
            return e.call(t, n, r)
          };
        case 3:
          return function(n, r, o) {
            return e.call(t, n, r, o)
          }
      }
      return function() {
        return e.apply(t, arguments)
      }
    }
  }, function(e, t) {
    e.exports = function(e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e
    }
  }, function(e, t, n) {
    var r = n(9), o = n(34);
    e.exports = n(0) ? function(e, t, n) {
      return r.f(e, t, o(1, n))
    } : function(e, t, n) {
      return e[t] = n, e
    }
  }, function(e, t, n) {
    var r = n(1);
    e.exports = function(e) {
      if (!r(e)) throw TypeError(e + " is not an object!");
      return e
    }
  }, function(e, t, n) {
    e.exports = !n(0) && !n(10)(function() {
      return 7 != Object.defineProperty(n(32)("div"), "a", {
        get: function() {
          return 7
        }
      }).a
    })
  }, function(e, t, n) {
    var r = n(1), o = n(7).document, i = r(o) && r(o.createElement);
    e.exports = function(e) {
      return i ? o.createElement(e) : {}
    }
  }, function(e, t, n) {
    var r = n(1);
    e.exports = function(e, t) {
      if (!r(e)) return e;
      var n, o;
      if (t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
      if ("function" == typeof(n = e.valueOf) && !r(o = n.call(e))) return o;
      if (!t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
      throw TypeError("Can't convert object to primitive value")
    }
  }, function(e, t) {
    e.exports = function(e, t) {
      return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
    }
  }])
});
//# sourceMappingURL=index.js.map

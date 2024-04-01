/*! modernizr 3.11.7 (Custom Build) | MIT *
 * https://modernizr.com/download/?-details-inputtypes-addtest-mq-prefixed-prefixes-setclasses-teststyles !*/
 !function(e, t, n, r) {
    function i(e, t) {
        return typeof e === t
    }
    function o(e) {
        var t = b.className
          , n = Modernizr._config.classPrefix || "";
        if (S && (t = t.baseVal),
        Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (e.length > 0 && (t += " " + n + e.join(" " + n)),
        S ? b.className.baseVal = t : b.className = t)
    }
    function s(e, t) {
        if ("object" == typeof e)
            for (var n in e)
                T(e, n) && s(n, e[n]);
        else {
            e = e.toLowerCase();
            var r = e.split(".")
              , i = Modernizr[r[0]];
            if (2 === r.length && (i = i[r[1]]),
            void 0 !== i)
                return Modernizr;
            t = "function" == typeof t ? t() : t,
            1 === r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]]instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])),
            Modernizr[r[0]][r[1]] = t),
            o([(t && !1 !== t ? "" : "no-") + r.join("-")]),
            Modernizr._trigger(e, t)
        }
        return Modernizr
    }
    function a() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : S ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
    }
    function l() {
        var e = n.body;
        return e || (e = a(S ? "svg" : "body"),
        e.fake = !0),
        e
    }
    function u(e, t, r, i) {
        var o, s, u, f, c = "modernizr", d = a("div"), p = l();
        if (parseInt(r, 10))
            for (; r--; )
                u = a("div"),
                u.id = i ? i[r] : c + (r + 1),
                d.appendChild(u);
        return o = a("style"),
        o.type = "text/css",
        o.id = "s" + c,
        (p.fake ? p : d).appendChild(o),
        p.appendChild(d),
        o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(n.createTextNode(e)),
        d.id = c,
        p.fake && (p.style.background = "",
        p.style.overflow = "hidden",
        f = b.style.overflow,
        b.style.overflow = "hidden",
        b.appendChild(p)),
        s = t(d, e),
        p.fake && p.parentNode ? (p.parentNode.removeChild(p),
        b.style.overflow = f,
        b.offsetHeight) : d.parentNode.removeChild(d),
        !!s
    }
    function f(e, n, r) {
        var i;
        if ("getComputedStyle"in t) {
            i = getComputedStyle.call(t, e, n);
            var o = t.console;
            if (null !== i)
                r && (i = i.getPropertyValue(r));
            else if (o) {
                var s = o.error ? "error" : "log";
                o[s].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else
            i = !n && e.currentStyle && e.currentStyle[r];
        return i
    }
    function c(e, t) {
        return !!~("" + e).indexOf(t)
    }
    function d(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }
    function p(e, n) {
        var i = e.length;
        if ("CSS"in t && "supports"in t.CSS) {
            for (; i--; )
                if (t.CSS.supports(d(e[i]), n))
                    return !0;
            return !1
        }
        if ("CSSSupportsRule"in t) {
            for (var o = []; i--; )
                o.push("(" + d(e[i]) + ":" + n + ")");
            return o = o.join(" or "),
            u("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" === f(e, null, "position")
            })
        }
        return r
    }
    function m(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }
    function h(e, t, n, o) {
        function s() {
            u && (delete N.style,
            delete N.modElem)
        }
        if (o = !i(o, "undefined") && o,
        !i(n, "undefined")) {
            var l = p(e, n);
            if (!i(l, "undefined"))
                return l
        }
        for (var u, f, d, h, v, y = ["modernizr", "tspan", "samp"]; !N.style && y.length; )
            u = !0,
            N.modElem = a(y.shift()),
            N.style = N.modElem.style;
        for (d = e.length,
        f = 0; f < d; f++)
            if (h = e[f],
            v = N.style[h],
            c(h, "-") && (h = m(h)),
            N.style[h] !== r) {
                if (o || i(n, "undefined"))
                    return s(),
                    "pfx" !== t || h;
                try {
                    N.style[h] = n
                } catch (e) {}
                if (N.style[h] !== v)
                    return s(),
                    "pfx" !== t || h
            }
        return s(),
        !1
    }
    function v(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    function y(e, t, n) {
        var r;
        for (var o in e)
            if (e[o]in t)
                return !1 === n ? e[o] : (r = t[e[o]],
                i(r, "function") ? v(r, n || t) : r);
        return !1
    }
    function g(e, t, n, r, o) {
        var s = e.charAt(0).toUpperCase() + e.slice(1)
          , a = (e + " " + P.join(s + " ") + s).split(" ");
        return i(t, "string") || i(t, "undefined") ? h(a, t, r, o) : (a = (e + " " + j.join(s + " ") + s).split(" "),
        y(a, t, n))
    }
    var C = []
      , _ = {
        _version: "3.11.7",
        _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(e, t) {
            var n = this;
            setTimeout(function() {
                t(n[e])
            }, 0)
        },
        addTest: function(e, t, n) {
            C.push({
                name: e,
                fn: t,
                options: n
            })
        },
        addAsyncTest: function(e) {
            C.push({
                name: null,
                fn: e
            })
        }
    }
      , Modernizr = function() {};
    Modernizr.prototype = _,
    Modernizr = new Modernizr;
    var w = []
      , b = n.documentElement
      , S = "svg" === b.nodeName.toLowerCase()
      , x = _._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    _._prefixes = x;
    var T;
    !function() {
        var e = {}.hasOwnProperty;
        T = i(e, "undefined") || i(e.call, "undefined") ? function(e, t) {
            return t in e && i(e.constructor.prototype[t], "undefined")
        }
        : function(t, n) {
            return e.call(t, n)
        }
    }(),
    _._l = {},
    _.on = function(e, t) {
        this._l[e] || (this._l[e] = []),
        this._l[e].push(t),
        Modernizr.hasOwnProperty(e) && setTimeout(function() {
            Modernizr._trigger(e, Modernizr[e])
        }, 0)
    }
    ,
    _._trigger = function(e, t) {
        if (this._l[e]) {
            var n = this._l[e];
            setTimeout(function() {
                var e;
                for (e = 0; e < n.length; e++)
                    (0,
                    n[e])(t)
            }, 0),
            delete this._l[e]
        }
    }
    ,
    Modernizr._q.push(function() {
        _.addTest = s
    });
    var k = function() {
        var e = t.matchMedia || t.msMatchMedia;
        return e ? function(t) {
            var n = e(t);
            return n && n.matches || !1
        }
        : function(e) {
            var t = !1;
            return u("@media " + e + " { #modernizr { position: absolute; } }", function(e) {
                t = "absolute" === f(e, null, "position")
            }),
            t
        }
    }();
    _.mq = k;
    var z = "Moz O ms Webkit"
      , P = _._config.usePrefixes ? z.split(" ") : [];
    _._cssomPrefixes = P;
    var E = {
        elem: a("modernizr")
    };
    Modernizr._q.push(function() {
        delete E.elem
    });
    var N = {
        style: E.elem.style
    };
    Modernizr._q.unshift(function() {
        delete N.style
    });
    var j = _._config.usePrefixes ? z.toLowerCase().split(" ") : [];
    _._domPrefixes = j,
    _.testAllProps = g;
    var L = function(e) {
        var n, i = x.length, o = t.CSSRule;
        if (void 0 === o)
            return r;
        if (!e)
            return !1;
        if (e = e.replace(/^@/, ""),
        (n = e.replace(/-/g, "_").toUpperCase() + "_RULE")in o)
            return "@" + e;
        for (var s = 0; s < i; s++) {
            var a = x[s];
            if (a.toUpperCase() + "_" + n in o)
                return "@-" + a.toLowerCase() + "-" + e
        }
        return !1
    };
    _.atRule = L;
    var A = (_.prefixed = function(e, t, n) {
        return 0 === e.indexOf("@") ? L(e) : (-1 !== e.indexOf("-") && (e = m(e)),
        t ? g(e, t, n) : g(e, "pfx"))
    }
    ,
    _.testStyles = u)
      , O = a("input");
    !function() {
        for (var e, t, i, o = ["search", "tel", "url", "email", "datetime", "date", "month", "week", "time", "datetime-local", "number", "range", "color"], s = 0; s < o.length; s++)
            O.setAttribute("type", e = o[s]),
            i = "text" !== O.type && "style"in O,
            i && (O.value = "1)",
            O.style.cssText = "position:absolute;visibility:hidden;",
            /^range$/.test(e) && O.style.WebkitAppearance !== r ? (b.appendChild(O),
            t = n.defaultView,
            i = t.getComputedStyle && "textfield" !== t.getComputedStyle(O, null).WebkitAppearance && 0 !== O.offsetHeight,
            b.removeChild(O)) : /^(search|tel)$/.test(e) || (i = /^(url|email)$/.test(e) ? O.checkValidity && !1 === O.checkValidity() : "1)" !== O.value)),
            Modernizr.addTest("inputtypes." + e, !!i)
    }(),
    Modernizr.addTest("details", function() {
        var e, t = a("details");
        return "open"in t && (A("#modernizr details{display:block}", function(n) {
            n.appendChild(t),
            t.innerHTML = "<summary>a</summary>b",
            e = t.offsetHeight,
            t.open = !0,
            e = e !== t.offsetHeight
        }),
        e)
    }),
    function() {
        var e, t, n, r, o, s, a;
        for (var l in C)
            if (C.hasOwnProperty(l)) {
                if (e = [],
                t = C[l],
                t.name && (e.push(t.name.toLowerCase()),
                t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++)
                        e.push(t.options.aliases[n].toLowerCase());
                for (r = i(t.fn, "function") ? t.fn() : t.fn,
                o = 0; o < e.length; o++)
                    s = e[o],
                    a = s.split("."),
                    1 === a.length ? Modernizr[a[0]] = r : (Modernizr[a[0]] && (!Modernizr[a[0]] || Modernizr[a[0]]instanceof Boolean) || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])),
                    Modernizr[a[0]][a[1]] = r),
                    w.push((r ? "" : "no-") + a.join("-"))
            }
    }(),
    o(w),
    delete _.addTest,
    delete _.addAsyncTest;
    for (var q = 0; q < Modernizr._q.length; q++)
        Modernizr._q[q]();
    e.Modernizr = Modernizr
}(window, window, document);

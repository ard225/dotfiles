! function (e) {
    var t = {};

    function o(r) {
        if (t[r]) return t[r].exports;
        var a = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, o), a.l = !0, a.exports
    }
    o.m = e, o.c = t, o.d = function (e, t, r) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, o.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function (e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (o.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var a in e) o.d(r, a, function (t) {
                return e[t]
            }.bind(null, a));
        return r
    }, o.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "", o(o.s = 3)
}({
    3: function (e, t) {
        var o = {
            tab: null,
            tabs: [],
            version: 17,
            screenshotData: "",
            screenshotFormat: "png",
            canvas: document.createElement("canvas"),
            canvasContext: null,
            debugImage: null,
            debugTab: 0,
            history: {
                version: 17,
                last_color: "#b48484",
                current_palette: "default",
                palettes: []
            },
            defaultSettings: {
                autoClipboard: !1,
                autoClipboardNoGrid: !1,
                enableColorToolbox: !0,
                enableColorTooltip: !0,
                enableRightClickDeactivate: !0,
                dropperCursor: "default",
                plus: !1,
                plus_type: null
            },
            defaultPalette: "default",
            settings: {},
            edCb: null,
            color_sources: {
                1: "Web Page",
                2: "Color Picker",
                3: "Old History"
            },
            useTab: function (e) {
                o.tab = e, o.screenshotData = "", o.canvas = document.createElement("canvas"), o.canvasContext = null
            },
            checkDropperScripts: function () {
                o.sendMessage({
                    type: "edropper-version"
                }, (function (e) {
                    chrome.runtime.lastError || !e ? o.injectDropper() : e.version < 12 ? o.refreshDropper() : o.pickupActivate()
                }))
            },
            injectDropper: function () {
                chrome.tabs.executeScript(o.tab.id, {
                    file: "/js/edropper2.js"
                }, (function (e) {
                    o.pickupActivate()
                }))
            },
            refreshDropper: function () {
                chrome.tabs.executeScript(o.tab.id, {
                    allFrames: !0,
                    file: "/js/edropper2.js"
                }, (function (e) {
                    o.pickupActivate()
                }))
            },
            sendMessage: function (e, t) {
                chrome.tabs.sendMessage(o.tab.id, e, t)
            },
            shortcutListener: function () {
                chrome.commands.onCommand.addListener(e => {
                    switch (e) {
                        case "activate":
                            o.activate2()
                    }
                })
            },
            messageListener: function () {
                chrome.runtime.onMessage.addListener((e, t, r) => {
                    switch (e.type) {
                        case "activate-from-hotkey":
                            o.activate2(), r({});
                            break;
                        case "reload-background":
                            window.location.reload();
                            break;
                        case "clear-history":
                            o.clearHistory(r)
                    }
                }), chrome.runtime.onConnect.addListener(e => {
                    e.onMessage.addListener((e, t) => {
                        switch (e.type) {
                            case "screenshot":
                                o.capture();
                                break;
                            case "debug-tab":
                                o.debugImage = e.image, o.createDebugTab();
                                break;
                            case "set-color":
                                o.setColor("#" + e.color.rgbhex, !0, 1, t.sender.url)
                        }
                    })
                })
            },
            setBadgeColor: function (e) {
                chrome.browserAction.setBadgeBackgroundColor({
                    color: [parseInt(e.substr(1, 2), 16), parseInt(e.substr(3, 2), 16), parseInt(e.substr(5, 2), 16), 255]
                })
            },
            setColor: function (e, t = !0, r = 1, a) {
                e && e.match(/^#[0-9a-f]{6}$/) && (o.setBadgeColor(e), o.history.last_color = e, o.settings.autoClipboard && o.copyToClipboard(e), t && o.saveToHistory(e, r, a))
            },
            saveToHistory: function (e, t = 1, r) {
                var a = o.getPalette();
                a.colors.find(t => t.h == e) || (a.colors.push(o.historyColorItem(e, Date.now(), t, !1, r)), o.saveHistory())
            },
            copyToClipboard: function (e) {
                o.edCb.value = o.settings.autoClipboardNoGrid ? e.substring(1) : e, o.edCb.select(), document.execCommand("copy", !1, null)
            },
            activate2: function () {
                chrome.tabs.query({
                    active: !0
                }, e => {
                    o.useTab(e[0]), o.activate()
                })
            },
            activate: function () {
                o.checkDropperScripts()
            },
            pickupActivate: function () {
                o.sendMessage({
                    type: "pickup-activate",
                    options: {
                        cursor: o.settings.dropperCursor,
                        enableColorToolbox: o.settings.enableColorToolbox,
                        enableColorTooltip: o.settings.enableColorTooltip,
                        enableRightClickDeactivate: o.settings.enableRightClickDeactivate
                    }
                })
            },
            capture: function () {
                try {
                    chrome.tabs.captureVisibleTab(null, {
                        format: "png"
                    }, o.doCapture)
                } catch (e) {
                    chrome.tabs.captureVisibleTab(null, o.doCapture)
                }
            },
            getColor: function () {
                return o.history.last_color
            },
            doCapture: function (e) {
                e && o.sendMessage({
                    type: "update-image",
                    data: e
                })
            },
            createDebugTab: function () {
                0 != o.debugTab ? chrome.tabs.sendMessage(o.debugTab, {
                    type: "update"
                }) : chrome.tabs.create({
                    url: "/debug-tab.html",
                    selected: !1
                }, (function (e) {
                    o.debugTab = e.id
                }))
            },
            tabOnChangeListener: function () {
                chrome.tabs.onSelectionChanged.addListener((e, t) => {
                    o.tab && o.tab.id == e && o.sendMessage({
                        type: "pickup-deactivate"
                    })
                })
            },
            getPaletteName: function () {
                return o.getPalette().name
            },
            isPalette: function (e) {
                return !!o.history.palettes.find(t => t.name == e)
            },
            getPalette: function (e) {
                return void 0 === e && (e = void 0 !== o.history.current_palette && o.isPalette(o.history.current_palette) ? o.history.current_palette : "default"), o.history.palettes.find(t => t.name == e)
            },
            changePalette: function (e) {
                o.history.current_palette === e || o.isPalette(e) && (o.history.current_palette = e, o.saveHistory())
            },
            getPaletteNames: function () {
                return o.history.palettes.map(e => e.name)
            },
            uniquePaletteName: function (e) {
                if (void 0 === e || !e || e.length < 1) return o.uniquePaletteName("palette");
                if (o.getPaletteNames().find(t => t == e)) {
                    var t = e.match(/^(.*[^\d]+)(\d+)?$/);
                    if (void 0 === t[2]) return o.uniquePaletteName(e + "1");
                    var r = "" + t[1] + (parseInt(t[2]) + 1);
                    return o.uniquePaletteName(r)
                }
                return e
            },
            createPalette: function (e) {
                var t = o.uniquePaletteName(e);
                return o.history.palettes.push({
                    name: t,
                    created: Date.now(),
                    colors: []
                }), o.saveHistory(), o.getPalette(t)
            },
            destroyPalette: function (e) {
                if (o.isPalette(e)) {
                    if ("default" === e) o.getPalette(e).colors = [];
                    else {
                        var t = e === o.getPalette().name;
                        o.history.palettes = o.history.palettes.filter(t => t.name !== e), t && o.changePalette("default")
                    }
                    o.saveHistory(!1), chrome.storage.sync.remove("palette." + e)
                }
            },
            clearHistory: function (e) {
                o.getPalette().colors = [], o.saveHistory(), null != e && e({
                    state: "OK"
                })
            },
            loadHistory: function () {
                chrome.storage.sync.get(e => {
                    if (e.history) {
                        o.history.current_palette = e.history.cp, o.history.last_color = e.history.lc;
                        var t = 0,
                            r = 0;
                        Object.keys(e).forEach((a, n) => {
                            var s = a.match(/^palette\.(.*)$/);
                            if (s) {
                                var i = e[a];
                                o.history.palettes.push({
                                    name: s[1],
                                    colors: i.c,
                                    created: i.t
                                }), "default" === s[1] && (t = i.c.length), "converted" === s[1] && (r = i.c.length)
                            }
                        }), 0 === t && r > 0 && (o.defaultPalette = "converted"), e.history.v < o.history.version && o.checkHistoryUpgrades(e.history.v)
                    } else o.createPalette("default");
                    o.tryConvertOldHistory()
                })
            },
            checkHistoryUpgrades: function (e) {
                if (e < 14) {
                    for (var t = 0, r = o.history.palettes; t < r.length; t++)
                        for (var a = 0, n = r[t].colors; a < n.length; a++) {
                            var s = n[a];
                            "number" != typeof s.t && (s.t = 0)
                        }
                    o.saveHistory()
                }
            },
            loadSettings: function () {
                chrome.storage.sync.get("settings", (function (e) {
                    e.settings ? o.settings = e.settings : o.tryConvertOldSettings()
                }))
            },
            historyColorItem: function (e, t = Date.now(), o = 1, r = !1, a) {
                return {
                    h: e,
                    n: "",
                    s: o,
                    t: t,
                    f: r ? 1 : 0
                }
            },
            tryConvertOldHistory: function () {
                if (window.localStorage.history) {
                    var e = JSON.parse(window.localStorage.history),
                        t = o.createPalette("converted"),
                        r = Date.now();
                    for (var a in e) {
                        var n = e[a];
                        "#" != n[0] && (n = "#" + n), t.colors.push(o.historyColorItem(n, r, 3)), o.history.last_color = n
                    }
                    window.localStorage._history_backup = window.localStorage.history, window.localStorage.removeItem("history"), o.saveHistory(), o.getPalette().colors.length < 1 && o.changePalette(t.name)
                }
            },
            tryConvertOldSettings: function () {
                o.settings = o.defaultSettings, o.settings.autoClipboard = "true" === window.localStorage.autoClipboard, o.settings.autoClipboardNoGrid = "true" === window.localStorage.autoClipboardNoGrid, o.settings.enableColorToolbox = "false" !== window.localStorage.enableColorToolbox, o.settings.enableColorTooltip = "false" !== window.localStorage.enableColorTooltip, o.settings.enableRightClickDeactivate = "false" !== window.localStorage.enableRightClickDeactivate, o.settings.dropperCursor = "crosshair" === window.localStorage.dropperCursor ? "crosshair" : "default", o.saveSettings();
                for (var e = 0, t = ["autoClipboard", "autoClipboardNoGrid", "enableColorTooltip", "enableColorToolbox", "enableRightClickDeactivate", "dropperCursor"]; e < t.length; e++) {
                    var r = t[e];
                    localStorage.removeItem(r)
                }
            },
            saveHistory: function (e = !0) {
                var t = {
                    history: {
                        v: o.history.version,
                        cp: o.history.current_palette,
                        lc: o.history.last_color
                    }
                };
                if (e)
                    for (var r = 0, a = o.history.palettes; r < a.length; r++) {
                        const e = a[r];
                        t["palette." + e.name] = {
                            c: e.colors,
                            t: e.created
                        }
                    }
                chrome.storage.sync.set(t, (function () { }))
            },
            saveSettings: function () {
                chrome.storage.sync.set({
                    settings: o.settings
                }, (function () { }))
            },
            unlockPlus: function (e) {
                o.settings.plus = !0, o.settings.plus_type = e, o.saveSettings()
            },
            lockPlus: function () {
                o.settings.plus = !1, o.settings.plus_type = null, o.saveSettings()
            },
            plus: function () {
                return !!o.settings.plus && o.settings.plus_type
            },
            plusColor: function (e = o.settings.plus_type) {
                switch (e) {
                    case "free":
                        return "gray";
                    case "alpha":
                        return "silver";
                    default:
                        return e
                }
            },
            init: function () {
                o.edCb = document.getElementById("edClipboard"), o.loadSettings(), o.loadHistory(), chrome.browserAction.setBadgeText({
                    text: " "
                }), o.messageListener(), o.tabOnChangeListener(), o.shortcutListener()
            }
        };
        document.addEventListener("DOMContentLoaded", (function () {
            o.init()
        })), window.bg = o
    }
});
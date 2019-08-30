/*!
 * FlvPlayer.js v1.0.8
 * Github: https://github.com/zhw2590582/FlvPlayer#readme
 * (c) 2017-2019 Harvey Zack
 * Released under the MIT License.
 */

!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self).FlvPlayer=n()}(this,function(){"use strict";var r=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e};var c=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")};function a(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(e,n,t){return n&&a(e.prototype,n),t&&a(e,t),e};function e(e,n){return e(n={exports:{}},n.exports),n.exports}var i=e(function(n){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return"function"==typeof Symbol&&"symbol"===t(Symbol.iterator)?n.exports=r=function(e){return t(e)}:n.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},r(e)}n.exports=r});var t=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e};var o=function(e,n){return!n||"object"!==i(n)&&"function"!=typeof n?t(e):n},u=e(function(n){function t(e){return n.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(e)}n.exports=t}),s=e(function(t){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},r(e,n)}t.exports=r});var d=function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&s(e,n)},f=function(){function e(){c(this,e)}return n(e,[{key:"on",value:function(e,n,t){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:n,ctx:t}),this}},{key:"once",value:function(r,a,i){var o=this;function u(){o.off(r,u);for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];a.apply(i,n)}return u._=a,this.on(r,u,i)}},{key:"emit",value:function(e){for(var n=((this.e||(this.e={}))[e]||[]).slice(),t=arguments.length,r=new Array(1<t?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];for(var i=0;i<n.length;i+=1)n[i].fn.apply(n[i].ctx,r);return this}},{key:"off",value:function(e,n){var t=this.e||(this.e={}),r=t[e],a=[];if(r&&n)for(var i=0,o=r.length;i<o;i+=1)r[i].fn!==n&&r[i].fn._!==n&&a.push(r[i]);return a.length?t[e]=a:delete t[e],this}}]),e}();function l(e){c(this,l);var i=e.options.debug;this.log=function(e){if(i){for(var n,t=arguments.length,r=new Array(1<t?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];(n=console).log.apply(n,["FlvPlayer: [".concat(e,"]")].concat(r))}},this.warn=function(e){if(!e&&i){for(var n,t=arguments.length,r=new Array(1<t?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];(n=console).warn.apply(n,r)}},this.error=function(e,n){if(!e)throw new m(n)}}var p=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")},g=e(function(r){function a(e,n,t){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?r.exports=a=function(e,n,t){var r=[null];r.push.apply(r,n);var a=new(Function.bind.apply(e,r));return t&&s(a,t.prototype),a}:r.exports=a=Reflect.construct,a.apply(null,arguments)}r.exports=a}),m=function(e){function t(e){var n;return c(this,t),(n=o(this,u(t).call(this,e))).name="FlvPlayerError",n}return d(t,e),t}(e(function(n){function r(e){var t="function"==typeof Map?new Map:void 0;return n.exports=r=function(e){if(null===e||!p(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return g(e,arguments,u(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s(n,e)},r(e)}n.exports=r})(Error)),h=function(){function t(e){var n=this;c(this,t),this.destroys=[],this.proxy=this.proxy.bind(this),e.on("destroy",function(){n.destroy()})}return n(t,[{key:"proxy",value:function(n,e,t,r){var a=this,i=3<arguments.length&&void 0!==r?r:{};if(Array.isArray(e))return e.map(function(e){return a.proxy(n,e,t,i)});n.addEventListener(e,t,i);function o(){return n.removeEventListener(e,t,i)}return this.destroys.push(o),o}},{key:"destroy",value:function(){this.destroys.forEach(function(e){return e()})}}]),t}();function y(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function v(r){var a=0;function i(e){for(var n=new Uint8Array(e),t=0;t<e;t+=1)n[t]=r[a],a+=1;return i.index=a,n}return i.index=0,i}function b(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=n[0].constructor;return n.reduce(function(e,n){var t=new r((0|e.byteLength)+(0|n.byteLength));return t.set(e,0),t.set(n,0|e.byteLength),t},new r)}function S(e){return new Worker(URL.createObjectURL(new Blob([e],{type:"application/javascript"})))}function T(){return performance&&"function"==typeof performance.now?performance.now():Date.now()}function w(e,n,t){return Math.max(Math.min(e,Math.max(n,t)),Math.min(n,t))}function x(n,t,e){return"object"===i(t)&&Object.keys(t).forEach(function(e){x(n,e,t[e])}),n.style[t]=e,n}function A(r,a){return new Promise(function(e,n){var t=document.createElement("script");t.type="text/javascript",t.onload=function(){window[a]?e(window[a]):n(new Error("Unable to find global variable '".concat(a,"' from '").concat(r,"'")))},t.onerror=function(){n(new Error("Resource loading failed '".concat(r,"'")))},t.src=r,document.head.appendChild(t)})}function D(t){for(var e=arguments.length,n=new Array(1<e?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];n.forEach(function(n){Object.getOwnPropertyNames(n).forEach(function(e){if(y(t,e))throw new Error("Target attribute name is duplicated: ".concat(e));Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})})}function k(r){var a=0,i=T();return function(e){a+=e;var n=T(),t=n-i;1e3<=t&&(r(a/t*1e3),i=n,a=0)}}var P=Object.freeze({hasOwnProperty:y,readBuffer:v,mergeBuffer:b,createWorker:S,secondToTime:function(e){var n=Math.floor(e/3600),t=Math.floor((e-3600*n)/60),r=Math.floor(e-3600*n-60*t);return(0<n?[n,t,r]:[t,r]).map(function(e){return e<10?"0".concat(e):String(e)}).join(":")},getNowTime:T,debounce:function(r,a,i){var o;function e(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];clearTimeout(o),o=setTimeout(function(){o=null,r.apply(i,n)},a)}return e.clearTimeout=function(){clearTimeout(o)},e},throttle:function(a,i){var o,u,c=!1;return function e(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];if(c)return o=t,void(u=this);c=!0,a.apply(this,t),setTimeout(function(){c=!1,o&&(e.apply(u,o),u=o=null)},i)}},clamp:w,setStyle:x,getStyle:function(e,n){var t=!(2<arguments.length&&void 0!==arguments[2])||arguments[2],r=getComputedStyle(e,null).getPropertyValue(n);return t?parseFloat(r):r},loadScript:A,proxyPropertys:D,calculationRate:k});function O(e){c(this,O),function(e,n){var t=e.options,r=t.container.style.cssText;t.container.classList.add("flvplayer-container"),x(t.container,{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",boxSizing:"border-box"}),t.container.innerHTML='\n        <div class="flvplayer-inner" style="position: relative;display: flex;justify-content: center;align-items: center;width: 100%;height: 100%;">\n            <canvas class="flvplayer-canvas" width="'.concat(t.width,'" height="').concat(t.height,'" style="cursor: pointer;width: 100%;height: 100%;background-color: #000;"></canvas>\n        </div>\n    '),e.on("destroy",function(){t.container.innerHTML="",t.container.style.cssText=r,t.container.classList.remove("flvplayer-container")}),Object.defineProperty(n,"$container",{value:t.container}),Object.defineProperty(n,"$player",{value:t.container.querySelector(".flvplayer-inner")}),Object.defineProperty(n,"$canvas",{value:t.container.querySelector(".flvplayer-canvas")})}(e,this),function(t,r){Object.defineProperty(r,"rect",{get:function(){return r.$container.getBoundingClientRect()}}),["bottom","height","left","right","top","width"].forEach(function(e){Object.defineProperty(r,e,{get:function(){return r.rect[e]}})}),Object.defineProperty(r,"currentTime",{get:function(){return t.decoder.currentTime},set:function(e){t.options.live||t.decoder.seeked(w(e,0,r.loaded))}}),Object.defineProperty(r,"streaming",{get:function(){return t.demuxer.streaming}}),Object.defineProperty(r,"demuxed",{get:function(){return t.demuxer.demuxed}}),Object.defineProperty(r,"videoDecoding",{get:function(){return t.decoder.video.decoding}}),Object.defineProperty(r,"audioDecoding",{get:function(){return t.decoder.audio.decoding}}),Object.defineProperty(r,"duration",{get:function(){try{return t.demuxer.scripMeta.amf2.metaData.duration}catch(e){return t.options.duration||0}}}),Object.defineProperty(r,"frameRate",{get:function(){var n=Math.round(t.options.frameRate||30);try{return Math.round(t.demuxer.scripMeta.amf2.metaData.framerate)||n}catch(e){return n}}}),Object.defineProperty(r,"frameDuration",{get:function(){return 1e3/r.frameRate|0}}),Object.defineProperty(r,"volume",{get:function(){try{return t.decoder.audio.gainNode.gain.value}catch(e){return 0}},set:function(n){try{return t.decoder.audio.gainNode.gain.value=w(n,0,10),t.emit("volumechange",r.volume),r.volume}catch(e){return n}}}),Object.defineProperty(r,"loaded",{get:function(){return t.decoder.video.loaded}}),Object.defineProperty(r,"playing",{get:function(){return t.decoder.playing}}),Object.defineProperty(r,"play",{value:function(){r.playing||t.decoder.play()}}),Object.defineProperty(r,"pause",{value:function(){t.decoder.pause()}}),Object.defineProperty(r,"toggle",{value:function(){r.playing?r.pause():r.play()}})}(e,this),function(e,a){var n=e.events.proxy;e.on("scripMeta",function(e){var n=e.amf2.metaData,t=n.width,r=n.height;t&&r&&(a.$canvas.width=t,a.$canvas.height=r)}),n(a.$canvas,"click",function(){a.toggle()})}(e,this),D(e,this)}var C=function(){function e(r){var a=this;c(this,e),this.flv=r,this.context=new(window.AudioContext||window.webkitAudioContext),this.gainNode=this.context.createGain(),this.gainNode.gain.value=r.options.volume,this.playing=!1,this.playIndex=0,this.audiobuffers=[],this.timestamps=[],this.audioInputLength=0,this.decoding=!1,this.byteSize=0,this.loaded=0,r.on("destroy",function(){a.audiobuffers=[],a.stop()});var i=[];this.decodeErrorBuffer=new Uint8Array,this.decodeWaitingBuffer=new Uint8Array,r.on("audioData",function(e,n){if(a.decoding=!0,a.audioInputLength+=1,131072<=a.decodeWaitingBuffer.byteLength){a.timestamps.push(i[0]),i=[];var t=b(a.decodeErrorBuffer,a.decodeWaitingBuffer).buffer;a.decodeWaitingBuffer=new Uint8Array,a.context.decodeAudioData(t,function(e){a.loaded+=e.duration,a.byteSize+=e.length,a.audiobuffers.push(e),r.emit("audioLoaded",a.loaded),a.decodeErrorBuffer=new Uint8Array}).catch(function(){a.decodeErrorBuffer=b(a.decodeErrorBuffer,a.decodeWaitingBuffer)})}else i.push(n),a.decodeWaitingBuffer=b(a.decodeWaitingBuffer,e)}),r.on("timeupdate",function(e){a.flv.demuxer.demuxed&&a.decodeWaitingBuffer.length&&(a.timestamps.push(i[0]),i=[],a.context.decodeAudioData(a.decodeWaitingBuffer.buffer,function(e){a.decodeWaitingBuffer=new Uint8Array,a.decodeErrorBuffer=new Uint8Array,a.loaded+=e.duration,a.byteSize+=e.length,a.audiobuffers.push(e),r.emit("audioLoaded",a.loaded),a.decoding=!1}));var n=a.timestamps[a.playIndex];n&&n<=1e3*e&&(a.queue(a.playIndex)?a.playIndex+=1:a.stop())})}return n(e,[{key:"queue",value:function(e){var n=this,t=this.audiobuffers[e];return!!t&&(this.source=this.context.createBufferSource(),this.source.buffer=t,this.source.connect(this.gainNode),this.gainNode.connect(this.context.destination),this.source.onended=function(){n.flv.options.live&&(n.audiobuffers[e]=null)},this.playing=!0,this.source.start(),!0)}},{key:"play",value:function(e){var n=this,t=0<arguments.length&&void 0!==e?e:0;this.stop();var r=0,a=this.audiobuffers.findIndex(function(e){return r+=e.duration,t<=r}),i=this.audiobuffers[a];if(i){var o=t-(r-i.duration);this.source=this.context.createBufferSource(),this.source.connect(this.gainNode),this.gainNode.connect(this.context.destination),this.source.buffer=i,this.source.onended=function(){n.flv.options.live&&(n.audiobuffers[a]=null)},this.playing=!0,this.source.start(0,o),this.playIndex=a+1}else this.stop()}},{key:"stop",value:function(){this.playing=!1,this.source&&(this.source.onended=null,this.source.stop())}}]),e}(),j=function(){function r(n){var t=this;c(this,r),this.flv=n,this.ended=!1,this.playing=!1,this.waiting=!1,this.animationFrameTimer=null,this.waitingTimer=null,this.currentTime=0,this.lastUpdateTime=0,this.video=new window.FlvplayerDecoder(n,this),n.options.hasAudio?this.audio=new C(n,this):this.audio={play:function(){return null},stop:function(){return null},playing:!0,decoding:!1},n.on("noAudio",function(){n.options.hasAudio=!1,t.audio={play:function(){return null},stop:function(){return null},playing:!0,decoding:!1}}),n.on("ready",function(){n.options.autoPlay?t.play():t.video.draw(0)}),n.on("destroy",function(){t.pause()}),n.on("timeupdate",function(e){!n.options.live&&e>=n.player.duration&&t.pause()});var e=!1;n.events.proxy(document,"visibilitychange",function(){document.hidden?(e=t.playing,t.pause()):e&&t.play()})}return n(r,[{key:"play",value:function(){this.lastUpdateTime=T(),this.video.play(this.currentTime),this.audio.play(this.currentTime),this.animationFrame(),this.flv.emit("play")}},{key:"animationFrame",value:function(){var n=this,e=this.flv,t=e.options,r=e.player;this.animationFrameTimer=requestAnimationFrame(function(){if(n.video.playing&&n.audio.playing){n.ended=!1,n.playing=!0,n.waiting=!1;var e=T();n.currentTime+=(e-n.lastUpdateTime)/1e3,n.lastUpdateTime=e,n.flv.emit("timeupdate",n.currentTime)}else{if(r.streaming||n.video.decoding||n.audio.decoding)return n.ended=!1,n.playing=!1,n.waiting=!0,n.flv.emit("waiting",n.currentTime),void(n.waitingTimer=setTimeout(function(){n.play()},1e3));if(n.ended=!0,n.playing=!1,n.waiting=!1,n.flv.emit("ended",n.currentTime),t.loop&&!t.live)return n.currentTime=0,n.play(),void n.flv.emit("loop");n.pause()}n.animationFrame()})}},{key:"pause",value:function(){cancelAnimationFrame(this.animationFrameTimer),clearTimeout(this.waitingTimer),this.animationFrameTimer=null,this.waitingTimer=null,this.video.stop(),this.audio.stop(),this.ended=!1,this.playing=!1,this.waiting=!1,this.flv.emit("pause")}},{key:"seeked",value:function(e){var n=this.flv.player;cancelAnimationFrame(this.animationFrameTimer),clearTimeout(this.waitingTimer),this.animationFrameTimer=null,this.waitingTimer=null,this.currentTime=e,this.video.draw(Math.floor(e*n.frameRate)),this.playing&&this.play(),this.flv.emit("seeked",e)}}]),r}();function L(r){var a=this;c(this,L);var n=r.options,i=r.debug;this.size=0,this.header=null,this.streaming=!1,this.demuxed=!1,this.videoDataSize=0,this.audioDataSize=0,this.videoDataLength=0,this.audioDataLength=0,this.streamStartTime=0,this.streamEndTime=0,this.scripMeta=null,this.AudioSpecificConfig=null,this.AVCDecoderConfigurationRecord=null,this.demuxWorker=S("class FlvPlayerError extends Error {\n    constructor(message) {\n        super(message);\n        this.name = 'FlvPlayerError';\n    }\n}\n\nconst debug = {\n    warn: (condition, ...args) => {\n        if (!condition) {\n            console.warn(...args);\n        }\n    },\n    error: (condition, msg) => {\n        if (!condition) {\n            throw new FlvPlayerError(msg);\n        }\n    },\n};\n\nfunction mergeBuffer(...buffers) {\n    const Cons = buffers[0].constructor;\n    return buffers.reduce((pre, val) => {\n        const merge = new Cons((pre.byteLength | 0) + (val.byteLength | 0));\n        merge.set(pre, 0);\n        merge.set(val, pre.byteLength | 0);\n        return merge;\n    }, new Cons());\n}\n\nfunction readBufferSum(array, uint = true) {\n    return array.reduce((totle, num, index) => totle + (uint ? num : num - 128) * 256 ** (array.length - index - 1), 0);\n}\n\nfunction readString(array) {\n    return String.fromCharCode.call(String, ...array);\n}\n\nfunction readBuffer(buffer) {\n    let index = 0;\n    function read(length) {\n        const tempUint8 = new Uint8Array(length);\n        for (let i = 0; i < length; i += 1) {\n            tempUint8[i] = buffer[index];\n            index += 1;\n        }\n        read.index = index;\n        return tempUint8;\n    }\n    read.index = 0;\n    return read;\n}\n\nfunction readDouble(array) {\n    const view = new DataView(new ArrayBuffer(array.length));\n    array.forEach((b, i) => {\n        view.setUint8(i, b);\n    });\n    return view.getFloat64(0);\n}\n\nfunction readBoolean(array) {\n    return array[0] !== 0;\n}\n\nlet index = 0;\nlet header = null;\nlet uint8 = new Uint8Array();\nlet scripMeta = null;\nlet AudioSpecificConfig = null;\nlet AVCDecoderConfigurationRecord = null;\nconst nalStart = new Uint8Array([0x00, 0x00, 0x00, 0x01]);\n\nfunction readable(length) {\n    return uint8.length - index >= length;\n}\n\nfunction read(length) {\n    const tempUint8 = new Uint8Array(length);\n    for (let i = 0; i < length; i += 1) {\n        tempUint8[i] = uint8[index];\n        index += 1;\n    }\n    return tempUint8;\n}\n\nfunction demuxerScripTag(tag) {\n    const readScripTag = readBuffer(tag.body);\n    const amf1 = Object.create(null);\n    const amf2 = Object.create(null);\n\n    amf1.type = readScripTag(1)[0];\n    debug.error(amf1.type === 2, `AMF: [amf1] type expect 2, but got ${amf1.type}`);\n    amf1.size = readBufferSum(readScripTag(2));\n    amf1.string = readString(readScripTag(amf1.size));\n\n    amf2.type = readScripTag(1)[0];\n    debug.error(amf2.type === 8 || amf2.type === 3, `AMF: [amf2] type expect 8 or 3, but got ${amf2.type}`);\n    amf2.size = readBufferSum(readScripTag(4));\n    amf2.metaData = Object.create(null);\n\n    function getValue(type) {\n        let value = null;\n        if (type !== undefined) {\n            switch (type) {\n                case 0:\n                    value = readDouble(readScripTag(8));\n                    break;\n                case 1:\n                    value = readBoolean(readScripTag(1));\n                    break;\n                case 2: {\n                    const valueLength = readBufferSum(readScripTag(2));\n                    value = readString(readScripTag(valueLength));\n                    break;\n                }\n                case 3: {\n                    value = Object.create(null);\n                    let lastType = -1;\n                    while (lastType !== 9) {\n                        const nameLength = readBufferSum(readScripTag(2));\n                        const name = readString(readScripTag(nameLength));\n                        const itemType = readScripTag(1)[0];\n                        if (name) {\n                            value[name] = getValue(itemType);\n                        }\n                        lastType = itemType;\n                    }\n                    break;\n                }\n                case 5:\n                    value = null;\n                    break;\n                case 6:\n                    value = undefined;\n                    break;\n                case 7:\n                    value = `Reference #${readScripTag.index}`;\n                    readScripTag(2);\n                    break;\n                case 8: {\n                    value = Object.create(null);\n                    let lastType = -1;\n                    while (lastType !== 9) {\n                        const nameLength = readBufferSum(readScripTag(2));\n                        const name = readString(readScripTag(nameLength));\n                        const itemType = readScripTag(1)[0];\n                        if (name) {\n                            value[name] = getValue(itemType);\n                        }\n                        lastType = itemType;\n                    }\n                    break;\n                }\n                case 10: {\n                    const valueLength = readBufferSum(readScripTag(4));\n                    value = [];\n                    for (let index = 0; index < valueLength; index += 1) {\n                        const itemType = readScripTag(1)[0];\n                        value.push(getValue(itemType));\n                    }\n                    break;\n                }\n                case 11:\n                    value = readDouble(readScripTag(2));\n                    break;\n                case 12: {\n                    const valueLength = readBufferSum(readScripTag(4));\n                    value = readString(readScripTag(valueLength));\n                    break;\n                }\n                default:\n                    debug.error(false, `AMF: Unknown metaData type: ${type}`);\n                    break;\n            }\n        }\n        return value;\n    }\n\n    while (readScripTag.index < tag.body.length) {\n        const nameLength = readBufferSum(readScripTag(2));\n        const name = readString(readScripTag(nameLength));\n        const type = readScripTag(1)[0];\n        if (name) {\n            amf2.metaData[name] = getValue(type);\n        }\n    }\n\n    debug.warn(readScripTag.index === tag.body.length, '[AMF] Seems to be incompletely parsed');\n    debug.warn(amf2.size === Object.keys(amf2.metaData).length, '[AMF] [amf2] length does not match');\n\n    scripMeta = { amf1, amf2 };\n    postMessage({\n        type: 'scripMeta',\n        data: scripMeta,\n    });\n}\n\nfunction demuxerVideoTag(tag) {\n    debug.error(tag.body.length > 1, 'Invalid video packet');\n    const header = {\n        frameType: (tag.body[0] & 0xf0) >> 4,\n        codecID: tag.body[0] & 0x0f,\n    };\n    debug.error(header.codecID === 7, `[videoTrack] Unsupported codec in video frame: ${header.codecID}`);\n    const packet = tag.body.slice(1, 5);\n    debug.error(packet.length >= 4, '[H264] Invalid AVC packet, missing AVCPacketType or/and CompositionTime');\n    const view = new DataView(packet.buffer);\n    const AVCPacketType = view.getUint8(0);\n    const CompositionTime = ((view.getUint32(0) & 0x00ffffff) << 8) >> 8;\n    const pts = CompositionTime + tag.timestamp;\n    const packetData = tag.body.subarray(5);\n\n    if (AVCPacketType === 0) {\n        debug.warn(!AVCDecoderConfigurationRecord, '[h264] Find another one AVCDecoderConfigurationRecord');\n        debug.error(packetData.length >= 7, '[H264] AVCDecoderConfigurationRecord parse length is not enough');\n        const readDcr = readBuffer(packetData);\n        const result = {};\n        result.configurationVersion = readDcr(1)[0];\n        debug.error(\n            result.configurationVersion === 1,\n            `[H264] Invalid configurationVersion: ${result.configurationVersion}`,\n        );\n        result.AVCProfileIndication = readDcr(1)[0];\n        debug.error(\n            result.AVCProfileIndication !== 0,\n            `[H264] Invalid AVCProfileIndication: ${result.AVCProfileIndication}`,\n        );\n        result.profile_compatibility = readDcr(1)[0];\n        result.AVCLevelIndication = readDcr(1)[0];\n        result.lengthSizeMinusOne = (readDcr(1)[0] & 3) + 1;\n        debug.error(\n            result.lengthSizeMinusOne === 4 || result.lengthSizeMinusOne !== 3,\n            `[H264] Invalid lengthSizeMinusOne: ${result.lengthSizeMinusOne}`,\n        );\n        result.numOfSequenceParameterSets = readDcr(1)[0] & 31;\n        debug.error(\n            result.numOfSequenceParameterSets !== 0,\n            `[H264] Invalid numOfSequenceParameterSets: ${result.numOfSequenceParameterSets}`,\n        );\n        debug.warn(\n            result.numOfSequenceParameterSets === 1,\n            `[H264] Strange numOfSequenceParameterSets: ${result.numOfSequenceParameterSets}`,\n        );\n        for (let index = 0; index < result.numOfSequenceParameterSets; index += 1) {\n            result.sequenceParameterSetLength = readBufferSum(readDcr(2));\n            if (result.sequenceParameterSetLength > 0) {\n                const SPS = readDcr(result.sequenceParameterSetLength);\n                postMessage({\n                    type: 'videoData',\n                    data: mergeBuffer(nalStart, SPS),\n                });\n            }\n        }\n        result.numOfPictureParameterSets = readDcr(1)[0];\n        debug.error(\n            result.numOfPictureParameterSets !== 0,\n            `[H264] Invalid numOfPictureParameterSets: ${result.numOfPictureParameterSets}`,\n        );\n        debug.warn(\n            result.numOfPictureParameterSets === 1,\n            `[H264] Strange numOfPictureParameterSets: ${result.numOfPictureParameterSets}`,\n        );\n        for (let index = 0; index < result.numOfPictureParameterSets; index += 1) {\n            result.pictureParameterSetLength = readBufferSum(readDcr(2));\n            if (result.pictureParameterSetLength > 0) {\n                const PPS = readDcr(result.pictureParameterSetLength);\n                postMessage({\n                    type: 'videoData',\n                    data: mergeBuffer(nalStart, PPS),\n                });\n            }\n        }\n        AVCDecoderConfigurationRecord = result;\n        postMessage({\n            type: 'AVCDecoderConfigurationRecord',\n            data: result,\n        });\n    } else if (AVCPacketType === 1) {\n        const { lengthSizeMinusOne } = AVCDecoderConfigurationRecord;\n        const readVideo = readBuffer(packetData);\n        while (readVideo.index < packetData.length) {\n            const length = readBufferSum(readVideo(lengthSizeMinusOne));\n            postMessage({\n                type: 'videoData',\n                data: mergeBuffer(nalStart, readVideo(length)),\n                timestamp: pts,\n            });\n        }\n    } else {\n        debug.error(AVCPacketType === 2, `[H264] Invalid video packet type ${AVCPacketType}`);\n    }\n}\n\nfunction demuxerAudioTag(tag) {\n    debug.error(tag.body.length > 1, 'Invalid audio packet');\n    const header = {\n        soundFormat: (tag.body[0] & 0xf0) >> 4,\n        soundRate: (tag.body[0] & 0x0c) >> 2,\n        soundSize: (tag.body[0] & 0x02) >> 1,\n        soundType: (tag.body[0] & 0x01) >> 0,\n    };\n    debug.error(header.soundFormat === 10, `[audioTrack] unsupported audio format: ${header.soundFormat}`);\n    const packet = tag.body.subarray(1);\n    const packetType = packet[0];\n    if (packetType === 0) {\n        const packetData = packet.subarray(1);\n        debug.warn(!AudioSpecificConfig, '[AAC] Find another one AudioSpecificConfig');\n        debug.error(packetData.length >= 2, '[AAC] AudioSpecificConfig parse length is not enough');\n        const result = {};\n        result.audioObjectType = (packetData[0] & 0xf8) >> 3;\n        result.samplingFrequencyIndex = ((packetData[0] & 7) << 1) + (((packetData[1] & 0x80) >> 7) & 1);\n        result.channelConfiguration = (packetData[1] & 0x7f) >> 3;\n        AudioSpecificConfig = result;\n        postMessage({\n            type: 'AudioSpecificConfig',\n            data: result,\n        });\n    } else {\n        const { audioObjectType, samplingFrequencyIndex, channelConfiguration } = AudioSpecificConfig;\n        const ADTSLen = tag.dataSize - 2 + 7;\n        const ADTSHeader = new Uint8Array(7);\n        ADTSHeader[0] = 0xff;\n        ADTSHeader[1] = 0xf0;\n        ADTSHeader[1] |= 0 << 3;\n        ADTSHeader[1] |= 0 << 1;\n        ADTSHeader[1] |= 1;\n        ADTSHeader[2] = (audioObjectType - 1) << 6;\n        ADTSHeader[2] |= (samplingFrequencyIndex & 0x0f) << 2;\n        ADTSHeader[2] |= 0 << 1;\n        ADTSHeader[2] |= (channelConfiguration & 0x04) >> 2;\n        ADTSHeader[3] = (channelConfiguration & 0x03) << 6;\n        ADTSHeader[3] |= 0 << 5;\n        ADTSHeader[3] |= 0 << 4;\n        ADTSHeader[3] |= 0 << 3;\n        ADTSHeader[3] |= 0 << 2;\n        ADTSHeader[3] |= (ADTSLen & 0x1800) >> 11;\n        ADTSHeader[4] = (ADTSLen & 0x7f8) >> 3;\n        ADTSHeader[5] = (ADTSLen & 0x7) << 5;\n        ADTSHeader[5] |= 0x1f;\n        ADTSHeader[6] = 0xfc;\n        const ADTSBody = tag.body.subarray(2);\n        postMessage({\n            type: 'audioData',\n            data: mergeBuffer(ADTSHeader, ADTSBody),\n            timestamp: tag.timestamp,\n        });\n    }\n}\n\nonmessage = event => {\n    uint8 = mergeBuffer(uint8, event.data);\n    if (!header && readable(13)) {\n        header = Object.create(null);\n        header.signature = readString(read(3));\n        header.version = read(1)[0];\n        debug.error(header.signature === 'FLV' && header.version === 1, 'FLV header not found');\n        header.flags = read(1)[0];\n        const hasAudio = ((header.flags & 4) >>> 2) !== 0;\n        const hasVideo = (header.flags & 1) !== 0;\n        debug.warn(hasVideo, '[FLV header] flags not found video');\n        debug.warn(hasAudio, '[FLV header] flags not found audio');\n        if (!hasAudio) {\n            postMessage({\n                type: 'noAudio',\n            });\n        }\n        header.headersize = readBufferSum(read(4));\n        const prevTagSize = readBufferSum(read(4));\n        debug.error(prevTagSize === 0, `PrevTagSize0 should be equal to 0, but got ${prevTagSize}`);\n        postMessage({\n            type: 'flvHeader',\n            data: header,\n        });\n    }\n\n    while (index < uint8.length) {\n        const tag = Object.create(null);\n        const restIndex = index;\n\n        if (readable(11)) {\n            tag.tagType = read(1)[0];\n            tag.dataSize = readBufferSum(read(3));\n            const ts2 = read(1)[0];\n            const ts1 = read(1)[0];\n            const ts0 = read(1)[0];\n            const ts3 = read(1)[0];\n            tag.timestamp = ts0 | (ts1 << 8) | (ts2 << 16) | (ts3 << 24);\n            tag.streamID = readBufferSum(read(3));\n            debug.error(tag.streamID === 0, `streamID should be equal to 0, but got ${tag.streamID}`);\n        } else {\n            index = 0;\n            uint8 = uint8.subarray(restIndex);\n            return;\n        }\n\n        if (readable(tag.dataSize + 4)) {\n            tag.body = read(tag.dataSize);\n            const prevTagSize = readBufferSum(read(4));\n            debug.error(prevTagSize === tag.dataSize + 11, `Invalid PrevTagSize: ${prevTagSize}`);\n        } else {\n            index = 0;\n            uint8 = uint8.subarray(restIndex);\n            return;\n        }\n\n        switch (tag.tagType) {\n            case 18:\n                demuxerScripTag(tag);\n                break;\n            case 9:\n                demuxerVideoTag(tag);\n                break;\n            case 8:\n                demuxerAudioTag(tag);\n                break;\n            default:\n                debug.error(false, `unknown tag type: ${tag.tagType}`);\n                break;\n        }\n    }\n\n    index = 0;\n    uint8 = new Uint8Array();\n};\n"),this.streamRate=k(function(e){r.emit("streamRate",e)}),this.demuxRate=k(function(e){r.emit("demuxRate",e)}),r.on("destroy",function(){a.demuxWorker.terminate()}),r.on("streamStart",function(){if(a.streamStartTime=T(),"string"==typeof n.url){var e=Object.assign(document.createElement("a"),{href:n.url}).href;i.log("stream-url",e)}}),r.on("streaming",function(e){a.streaming=!0,a.size+=e.byteLength,a.streamRate(e.byteLength),a.demuxWorker.postMessage(e)}),r.on("streamEnd",function(e){a.streaming=!1,a.streamEndTime=T(),e&&(a.index=0,a.size=e.byteLength,a.demuxWorker.postMessage(e)),i.log("stream-size","".concat(a.size," byte")),i.log("stream-time","".concat(a.streamEndTime-a.streamStartTime," ms")),a.demuxed=!0,r.emit("demuxDone"),i.log("demux-done")});var o=new Uint8Array,u=new Uint8Array;this.demuxWorker.onmessage=function(e){var n=e.data;switch(n.type){case"flvHeader":a.header=n.data,r.emit("flvHeader",a.header),i.log("flv-header",a.header);break;case"noAudio":r.emit("noAudio");break;case"scripMeta":a.scripMeta=n.data,r.emit("scripMeta",a.scripMeta),i.log("scrip-meta",a.scripMeta);break;case"AVCDecoderConfigurationRecord":a.AVCDecoderConfigurationRecord=n.data,r.emit("AVCDecoderConfigurationRecord",a.AVCDecoderConfigurationRecord),i.log("AVCDecoderConfigurationRecord",a.AVCDecoderConfigurationRecord),i.log("AVC-profile",function(e){switch(e){case 66:return"Baseline";case 77:return"Main";case 88:return"Extended";case 100:return"High";case 110:return"High10";case 122:return"High422";case 244:return"High444";default:return"Unknown"}}(a.AVCDecoderConfigurationRecord.AVCProfileIndication)),i.log("AVC-level",function(e){return(e/10).toFixed(1)}(a.AVCDecoderConfigurationRecord.AVCLevelIndication));break;case"AudioSpecificConfig":a.AudioSpecificConfig=n.data,r.emit("AudioSpecificConfig",a.AudioSpecificConfig),i.log("AudioSpecificConfig",a.AudioSpecificConfig);break;case"videoData":a.demuxRate(1),a.videoDataLength+=1,a.videoDataSize+=n.data.byteLength;var t=v(n.data);switch(t(4),31&t(1)[0]){case 1:case 5:r.emit("videoData",b(o,u,n.data),n.timestamp);break;case 7:o=n.data;break;case 8:u=n.data}break;case"audioData":a.audioDataLength+=1,a.audioDataSize+=n.data.byteLength,r.emit("audioData",n.data,n.timestamp)}}}function B(a,n){return a.emit("streamStart"),fetch(a.options.url,{headers:a.options.headers}).then(function(e){var n=e.body.getReader();return a.on("streamCancel",function(){n.cancel()}),function r(){return n.read().then(function(e){var n=e.done,t=e.value;if(!n)return a.emit("streaming",new Uint8Array(t)),r();a.emit("streamEnd")}).catch(function(e){throw e})}()}).catch(function(e){throw n.reconnect(e),e})}function M(e,n){e.emit("streamStart");var t=e.events.proxy,r=e.options.headers,a=new XMLHttpRequest;return a.open("GET",e.options.url,!0),a.responseType="moz-chunked-arraybuffer",Object.keys(r).forEach(function(e){a.setRequestHeader(e,r[e])}),t(a,"readystatechange",function(){e.emit("readystatechange",a)}),t(a,"progress",function(){e.emit("streaming",new Uint8Array(a.response))}),t(a,"loadend",function(){e.emit("streamEnd")}),t(a,"error",function(e){throw n.reconnect(e),e}),a.send(),e.on("streamCancel",function(){a.abort()}),a}function V(n,t){n.emit("streamStart");var e=n.events.proxy,r=n.options.headers,a=new TextEncoder,i=new XMLHttpRequest;i.open("GET",n.options.url,!0),i.responseType="text",Object.keys(r).forEach(function(e){i.setRequestHeader(e,r[e])});var o=0;return e(i,"readystatechange",function(){n.emit("readystatechange",i)}),e(i,"progress",function(){var e=i.responseText.substr(o);o=i.responseText.length,n.emit("streaming",a.encode(e,{stream:!0}))}),e(i,"loadend",function(){n.emit("streaming",a.encode("",{stream:!1})),n.emit("streamEnd")}),e(i,"error",function(e){throw t.reconnect(e),e}),i.send(),n.on("streamCancel",function(){i.abort()}),i}function R(n,t){n.emit("streamStart");var e=n.options,r=n.events.proxy,a=new WebSocket(n.options.url);return a.binaryType="arraybuffer",r(a,"open",function(){a.send(e.socketSend)}),r(a,"message",function(e){n.emit("streaming",new Uint8Array(e.data))}),r(a,"close",function(){n.emit("streamEnd")}),r(a,"error",function(e){throw t.reconnect(e),e}),n.on("streamCancel",function(){a.close()}),a}function F(t){t.emit("streamStart");var e=t.events.proxy,n=new FileReader;return e(n,"load",function(e){var n=e.target.result;t.emit("streamEnd",new Uint8Array(n))}),n.readAsArrayBuffer(t.options.url),n}var E=function(){function t(e){var n=this;c(this,t),this.flv=e,this.reconnectTime=0,this.maxReconnectTime=10,this.transportFactory=t.getStreamFactory(e.options.url),this.flv.debug.log("stream-type",this.transportFactory.name),this.transport=this.transportFactory(e,this),e.on("destroy",function(){n.flv.emit("streamCancel")}),e.on("reconnect",function(){n.reconnect()})}return n(t,[{key:"reconnect",value:function(){var e=this;this.reconnectTime<this.maxReconnectTime&&!this.flv.isDestroy&&this.flv.options.live&&setTimeout(function(){e.reconnectTime+=1,e.flv.emit("streamCancel"),e.transport=e.transportFactory(e.flv,e),e.flv.debug.warn(!1,"[stream]: reconnect ".concat(e.reconnectTime)),e.flv.emit("streamReconnect")},1e3)}}],[{key:"supportsXhrResponseType",value:function(e){try{var n=new XMLHttpRequest;return n.responseType=e,n.responseType===e}catch(e){return!1}}},{key:"getStreamFactory",value:function(e){if(e instanceof File)return F;if(e.startsWith("ws://"))return R;if("undefined"!=typeof Response&&Object.prototype.hasOwnProperty.call(Response.prototype,"body")&&"function"==typeof Headers)return B;return t.supportsXhrResponseType("moz-chunked-arraybuffer")?M:V}}]),t}();function H(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,r)}return t}var z=0,I=function(){function t(e){var n;return c(this,t),(n=o(this,u(t).call(this))).options=function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?H(t,!0).forEach(function(e){r(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):H(t).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}({},t.options,{},e),"string"==typeof n.options.container&&(n.options.container=document.querySelector(n.options.container)),window.FlvplayerDecoder?n.init():A(n.options.decoder,"FlvplayerDecoder").then(function(){n.init()}),n}return d(t,f),n(t,[{key:"init",value:function(){this.isDestroy=!1,this.isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),this.debug=new l(this),this.events=new h(this),this.player=new O(this),this.decoder=new j(this),this.demuxer=new L(this),this.stream=new E(this),window.FlvplayerControl&&this.options.control&&(this.control=new window.FlvplayerControl(this)),z+=1,this.id=z,t.instances.push(this)}},{key:"destroy",value:function(){this.isDestroy=!0,this.emit("destroy"),t.instances.splice(t.instances.indexOf(this),1)}}],[{key:"options",get:function(){return{url:"",container:"",debug:!1,live:!1,loop:!1,autoPlay:!1,hasAudio:!0,control:!0,volume:7,frameRate:30,freeMemory:67108864,width:400,height:300,socketSend:"",headers:{},decoder:"./flvplayer-decoder-baseline.js"}}},{key:"version",get:function(){return"1.0.8"}},{key:"env",get:function(){return'"production"'}},{key:"utils",get:function(){return P}}]),t}();return Object.defineProperty(I,"instances",{value:[]}),I});

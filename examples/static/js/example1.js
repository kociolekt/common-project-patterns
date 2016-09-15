(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by tomekkociolek on 2016-09-15.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _singleton = require('../patterns/singleton');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ComponentInfluencingSingleton = function () {
  function ComponentInfluencingSingleton() {
    _classCallCheck(this, ComponentInfluencingSingleton);

    this.singletonExample = new _singleton.SingletonExample();
  }

  _createClass(ComponentInfluencingSingleton, [{
    key: 'changeSingletonValue',
    value: function changeSingletonValue(newValue) {
      this.singletonExample.setValue(newValue);
    }
  }]);

  return ComponentInfluencingSingleton;
}();

exports.default = ComponentInfluencingSingleton;

},{"../patterns/singleton":3}],2:[function(require,module,exports){
'use strict';

var _singleton = require('./patterns/singleton');

var _componentInfluencingSingleton = require('./components/componentInfluencingSingleton');

var _componentInfluencingSingleton2 = _interopRequireDefault(_componentInfluencingSingleton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init() {
  var s1 = new _singleton.SingletonExample(),
      s2 = new _singleton.SingletonExample(),
      component = new _componentInfluencingSingleton2.default();

  s1.printValue(); // 1
  s2.printValue(); // 1

  s1.setValue(2);

  s1.printValue(); // 2
  s2.printValue(); // 2

  s2.setValue(3);

  s1.printValue(); // 3
  s2.printValue(); // 3

  console.log(s1 === s2); // true

  component.changeSingletonValue(6);

  s1.printValue(); // 6
  s2.printValue(); // 6
}

$(document).ready(init);

},{"./components/componentInfluencingSingleton":1,"./patterns/singleton":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by tomekkociolek on 2016-09-15.
 */
var EmptySingleton = exports.EmptySingleton = function EmptySingleton() {
  _classCallCheck(this, EmptySingleton);

  if (EmptySingleton.singletonInstance) {
    return EmptySingleton.singletonInstance;
  }

  EmptySingleton.singletonInstance = this;
};

var SingletonExample = exports.SingletonExample = function () {
  function SingletonExample() {
    _classCallCheck(this, SingletonExample);

    if (SingletonExample.singletonInstance) {
      return SingletonExample.singletonInstance;
    }

    SingletonExample.singletonInstance = this;

    this.value = 1;
  }

  _createClass(SingletonExample, [{
    key: "setValue",
    value: function setValue(newValue) {
      this.value = newValue;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
  }, {
    key: "printValue",
    value: function printValue() {
      console.log(this.value);
    }
  }]);

  return SingletonExample;
}();

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxjb21wb25lbnRJbmZsdWVuY2luZ1NpbmdsZXRvbi5qcyIsInNyY1xcanNcXGV4YW1wbGUxLmpzIiwic3JjXFxqc1xccGF0dGVybnNcXHNpbmdsZXRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztxakJDQUE7Ozs7O0FBR0E7Ozs7SUFFcUIsNkI7QUFDbkIsMkNBQWM7QUFBQTs7QUFDWixTQUFLLGdCQUFMLEdBQXdCLGlDQUF4QjtBQUNEOzs7O3lDQUVvQixRLEVBQVU7QUFDN0IsV0FBSyxnQkFBTCxDQUFzQixRQUF0QixDQUErQixRQUEvQjtBQUNEOzs7Ozs7a0JBUGtCLDZCOzs7OztBQ0xyQjs7QUFDQTs7Ozs7O0FBQ0EsU0FBUyxJQUFULEdBQWdCO0FBQ2QsTUFBSSxLQUFLLGlDQUFUO0FBQUEsTUFDRSxLQUFLLGlDQURQO0FBQUEsTUFFRSxZQUFZLDZDQUZkOztBQUlBLEtBQUcsVUFBSCxHQUxjLENBS0c7QUFDakIsS0FBRyxVQUFILEdBTmMsQ0FNRzs7QUFFakIsS0FBRyxRQUFILENBQVksQ0FBWjs7QUFFQSxLQUFHLFVBQUgsR0FWYyxDQVVHO0FBQ2pCLEtBQUcsVUFBSCxHQVhjLENBV0c7O0FBRWpCLEtBQUcsUUFBSCxDQUFZLENBQVo7O0FBRUEsS0FBRyxVQUFILEdBZmMsQ0FlRztBQUNqQixLQUFHLFVBQUgsR0FoQmMsQ0FnQkc7O0FBRWpCLFVBQVEsR0FBUixDQUFZLE9BQU8sRUFBbkIsRUFsQmMsQ0FrQlU7O0FBRXhCLFlBQVUsb0JBQVYsQ0FBK0IsQ0FBL0I7O0FBRUEsS0FBRyxVQUFILEdBdEJjLENBc0JHO0FBQ2pCLEtBQUcsVUFBSCxHQXZCYyxDQXVCRztBQUNsQjs7QUFFRCxFQUFFLFFBQUYsRUFBWSxLQUFaLENBQWtCLElBQWxCOzs7Ozs7Ozs7Ozs7O0FDNUJBOzs7SUFHYSxjLFdBQUEsYyxHQUNYLDBCQUFjO0FBQUE7O0FBQ1osTUFBRyxlQUFlLGlCQUFsQixFQUFxQztBQUNuQyxXQUFPLGVBQWUsaUJBQXRCO0FBQ0Q7O0FBRUQsaUJBQWUsaUJBQWYsR0FBbUMsSUFBbkM7QUFHRCxDOztJQUdVLGdCLFdBQUEsZ0I7QUFDWCw4QkFBYztBQUFBOztBQUNaLFFBQUcsaUJBQWlCLGlCQUFwQixFQUF1QztBQUNyQyxhQUFPLGlCQUFpQixpQkFBeEI7QUFDRDs7QUFFRCxxQkFBaUIsaUJBQWpCLEdBQXFDLElBQXJDOztBQUVBLFNBQUssS0FBTCxHQUFhLENBQWI7QUFDRDs7Ozs2QkFFUSxRLEVBQVU7QUFDakIsV0FBSyxLQUFMLEdBQWEsUUFBYjtBQUNEOzs7K0JBRVU7QUFDVCxhQUFPLEtBQUssS0FBWjtBQUNEOzs7aUNBRVk7QUFDWCxjQUFRLEdBQVIsQ0FBWSxLQUFLLEtBQWpCO0FBQ0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHRvbWVra29jaW9sZWsgb24gMjAxNi0wOS0xNS5cbiAqL1xuaW1wb3J0IHtTaW5nbGV0b25FeGFtcGxlfSBmcm9tICcuLi9wYXR0ZXJucy9zaW5nbGV0b24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnRJbmZsdWVuY2luZ1NpbmdsZXRvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2luZ2xldG9uRXhhbXBsZSA9IG5ldyBTaW5nbGV0b25FeGFtcGxlKCk7XG4gIH1cbiAgXG4gIGNoYW5nZVNpbmdsZXRvblZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgdGhpcy5zaW5nbGV0b25FeGFtcGxlLnNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtTaW5nbGV0b25FeGFtcGxlfSBmcm9tICcuL3BhdHRlcm5zL3NpbmdsZXRvbic7XG5pbXBvcnQgQ29tcG9uZW50SW5mbHVlbmNpbmdTaW5nbGV0b24gZnJvbSAnLi9jb21wb25lbnRzL2NvbXBvbmVudEluZmx1ZW5jaW5nU2luZ2xldG9uJztcbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGxldCBzMSA9IG5ldyBTaW5nbGV0b25FeGFtcGxlKCksXG4gICAgczIgPSBuZXcgU2luZ2xldG9uRXhhbXBsZSgpLFxuICAgIGNvbXBvbmVudCA9IG5ldyBDb21wb25lbnRJbmZsdWVuY2luZ1NpbmdsZXRvbigpO1xuXG4gIHMxLnByaW50VmFsdWUoKTsgLy8gMVxuICBzMi5wcmludFZhbHVlKCk7IC8vIDFcblxuICBzMS5zZXRWYWx1ZSgyKTtcblxuICBzMS5wcmludFZhbHVlKCk7IC8vIDJcbiAgczIucHJpbnRWYWx1ZSgpOyAvLyAyXG5cbiAgczIuc2V0VmFsdWUoMyk7XG5cbiAgczEucHJpbnRWYWx1ZSgpOyAvLyAzXG4gIHMyLnByaW50VmFsdWUoKTsgLy8gM1xuXG4gIGNvbnNvbGUubG9nKHMxID09PSBzMik7IC8vIHRydWVcblxuICBjb21wb25lbnQuY2hhbmdlU2luZ2xldG9uVmFsdWUoNik7XG5cbiAgczEucHJpbnRWYWx1ZSgpOyAvLyA2XG4gIHMyLnByaW50VmFsdWUoKTsgLy8gNlxufVxuXG4kKGRvY3VtZW50KS5yZWFkeShpbml0KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSB0b21la2tvY2lvbGVrIG9uIDIwMTYtMDktMTUuXG4gKi9cbmV4cG9ydCBjbGFzcyBFbXB0eVNpbmdsZXRvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmKEVtcHR5U2luZ2xldG9uLnNpbmdsZXRvbkluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gRW1wdHlTaW5nbGV0b24uc2luZ2xldG9uSW5zdGFuY2U7XG4gICAgfVxuXG4gICAgRW1wdHlTaW5nbGV0b24uc2luZ2xldG9uSW5zdGFuY2UgPSB0aGlzO1xuXG5cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2luZ2xldG9uRXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmKFNpbmdsZXRvbkV4YW1wbGUuc2luZ2xldG9uSW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiBTaW5nbGV0b25FeGFtcGxlLnNpbmdsZXRvbkluc3RhbmNlO1xuICAgIH1cblxuICAgIFNpbmdsZXRvbkV4YW1wbGUuc2luZ2xldG9uSW5zdGFuY2UgPSB0aGlzO1xuXG4gICAgdGhpcy52YWx1ZSA9IDE7XG4gIH1cblxuICBzZXRWYWx1ZShuZXdWYWx1ZSkge1xuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG4gIFxuICBwcmludFZhbHVlKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMudmFsdWUpO1xuICB9XG59XG4iXX0=

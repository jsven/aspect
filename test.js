var _dec, _dec2, _class, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function test(target, name, descriptor) {
  console.log('decoratorTest', target, name, descriptor);
  const fn = descriptor.value;

  if (typeof fn === 'function') {
    descriptor.value = function (...args) {
      console.log(`Time begin: ${new Date()}`);
      var result = fn.apply(this, args);
      console.log(`Time end: ${new Date()}`);
      return result;
    };
  }

  return descriptor;
}

export let TestDecorator = (_dec = test(), _dec2 = test(), _dec(_class = (_class2 = class TestDecorator {
  constructor() {
    this.name = 'decoratorTest';
  }

  consoleLog() {
    console.log('prototype decoratorTest');
  }

}, (_applyDecoratedDescriptor(_class2.prototype, "consoleLog", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "consoleLog"), _class2.prototype)), _class2)) || _class);
;

//# sourceMappingURL=test.js.map
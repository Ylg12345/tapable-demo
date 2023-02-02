const { SyncHook, AsyncParallelHook  }  = require('tapable');

class Compiler {

  //constructor 方法是类的默认方法，通过 new 命令生成对象实例时，自动调用该方法
  constructor(options) {
    this.hooks = {
      testSyncHook: new SyncHook(['name', 'age']),
      testAsyncHook: new AsyncParallelHook(['name', 'age'])
    }

    let plugins = options.plugins;

    plugins.forEach(plugin => {
      plugin.apply(this);
    });
  }

  run() {
    this.testSyncHook('ggg', 25);
    this.testAsyncHook('ylg', 24);
  }

  testSyncHook(name, age) {
    
    //通过 call 函数按顺序执行之前注册的函数
    this.hooks.testSyncHook.call(name, age);
  }

  testAsyncHook(name, age) {
    this.hooks.testAsyncHook.callAsync(name, age);
  }
}

module.exports = Compiler;
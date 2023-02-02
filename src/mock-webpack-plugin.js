class TestPlugin {

  apply(compiler) {

    //通过 tap 函数注册监听函数
    compiler.hooks.testSyncHook.tap('TestPlugin', (name, age) => {
      console.log('同步事件', name, age);
    })

    compiler.hooks.testAsyncHook.tapAsync('TestPlugin', (name, age) => {
      setTimeout(() => {
        console.log('异步事件', name, age)
      }, 3000)
    })
  }
}

module.exports = TestPlugin;
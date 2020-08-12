function test(target, name, descriptor){
  console.log('decoratorTest', target, name, descriptor);
  const fn = descriptor.value
  if (typeof fn === 'function') {
    descriptor.value = function(...args) {
      console.log(`Time begin: ${new Date()}`)
      var result = fn.apply(this, args)
      console.log(`Time end: ${new Date()}`)
      return result
    }
  }
  return descriptor
}

@test
export class TestDecorator {
  constructor () {
    this.name = 'decoratorTest'
  }
  @test
  consoleLog(){
    console.log('prototype decoratorTest')
  }
};


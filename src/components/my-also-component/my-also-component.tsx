import { Component, h } from '@stencil/core';

@Component({ tag: 'my-also-component' })
export class MyAlsoComponent {
  componentWillLoad() {
    const test: HTMLMyComponentElement = document.createElement('my-component');
    test.first = 'ABC';
    console.log('test:', test);
  }

  render() {
    return <my-component first="First name">I'm sus</my-component>;
  }
}

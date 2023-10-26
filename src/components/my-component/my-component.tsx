import { Component, Element, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
})
export class MyComponent {
  @Element() el: HTMLMyComponentElement;
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  componentWillLoad() {
    document.createElement('my-component');
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}

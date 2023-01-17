const parseJSONString = (jsonStr: string) => {
  try {
    return JSON.parse(jsonStr);
  } catch {
    return jsonStr;
  }
};

export class MyFrame extends HTMLElement {
  src!: string;
  width: number;
  height: number;

  props: Object = new Proxy({}, {});
  listeners: Map<string, Function> = new Map();

  iframe: HTMLIFrameElement;

  // 将 attribute 转化成 props
  getProps() {
    for (const key in this.attributes) {
      if (Object.prototype.hasOwnProperty.call(this.attributes, key)) {
        const element = this.attributes[key];
        this.props[element.name] = parseJSONString(element?.value);
      }
    }
  }

  // 当自定义元素第一次被连接到文档 DOM 时被调用
  connectedCallback() {
    this.getProps();
    const iframe = document.createElement("iframe");
    iframe.src = this.src;

    this.innerHTML = "123";
  }

  // 当自定义元素与文档 DOM 断开连接时被调用
  disconnectedCallback() {}

  // 当自定义元素被移动到新文档时被调用
  adoptedCallback() {
    this.getProps();
  }

  // 当自定义元素的一个属性被增加、移除或更改时被调用
  attributeChangedCallback() {
    this.getProps();
  }
}

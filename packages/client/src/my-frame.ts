const parseJSONString = (jsonStr: string) => {
  try {
    return JSON.parse(jsonStr);
  } catch {
    return jsonStr;
  }
};

const iframeAttrs = [
  "src",
  "width",
  "height",
  "align",
  "allow",
  "allowFullscreen",
  "allowFullscreen",
  "readonly",
  "frameBorder",
  "longDesc",
  "marginHeight",
  "marginWidth",
  "name",
  "referrerPolicy",
  "scrolling",
  "srcdoc",
];

export class MyFrame extends HTMLElement {
  iframe: HTMLIFrameElement = document.createElement("iframe");
  iframeLoading: boolean = false;

  src!: string;

  props: Object = new Proxy({}, {});

  // 将 attribute 转化成 props
  resolveAttributes() {
    for (const key in this.attributes) {
      const { name, value } = this.attributes[key];
      // iframe 的属性字段直接作用于 iframe 上
      if (iframeAttrs.includes(key) && this[name] !== value) {
        this.iframe[name] = value;
        if (key === "src") {
          // FIXME: 被重新赋值会导致 iframe 重新加载
          this.src = value;
          this.iframeLoading = true;
        }
      } // 其余字段赋予 props，并通知 iframe 内的应用
      else {
        this.props[name] = parseJSONString(value);
      }
    }
    // 判断 iframe 是否正在加载，确保加载完毕后将 props 更新至 iframe 内的应用
    if (this.iframeLoading) {
      this.iframe.onload = () => {
        // update this.props;
        this.iframeLoading = false;
      };
    } else {
      // update this.props;
    }
  }

  // 当自定义元素第一次被连接到文档 DOM 时被调用
  connectedCallback() {
    this.resolveAttributes();

    this.append(this.iframe);
  }

  // 当自定义元素与文档 DOM 断开连接时被调用
  disconnectedCallback() {}

  // 当自定义元素被移动到新文档时被调用
  adoptedCallback() {
    this.resolveAttributes();
  }

  // 当自定义元素的一个属性被增加、移除或更改时被调用
  attributeChangedCallback() {
    this.resolveAttributes();
  }
}

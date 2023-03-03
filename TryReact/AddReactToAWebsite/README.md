# Add React to a website


在不使用任何构建工具的情况下，要把 React 引入到一个传统的静态网页中，
需要先把 React 的 js 文件引入到网页中，这样才能调用 React 提供的 API，
可以直接到官网下载，或者使用 CDN 服务：

```html
<script src="//unpkg.com/react@18/umd/react.development.js" crossorigin></script>
<script src="//unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
```

然后提供一个 html 元素：

```html
<div id="like_button_container"></div>
```

接着调用 `ReactDOM.createRoot()` 来创建 React DOM 的根：

```javascript
const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
```

此后便可以把任何 React 组件渲染到 `root` 中。
下例创建了一个简单的 React 组件，并把它渲染到 React DOM。

```javascript
class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );

    }
}
root.render(React.createElement(LikeButton));
```

关于如何自定义组件，请参阅相关[文档](https://reactjs.org/docs/components-and-props.html)。
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Notes
### 一、 路由
#### 1. 路由标签跳转和编程式跳转
- <Link>
` <Link href="/poster?name=first-post"><a>First Post</a></Link> `
- Router组件
```
function goFirstPost() {
  Router.push({
    pathname: '/poster/',
    query: {
      name: 'first-post'
    }
  })
}
```

#### 2. 路由映射
比如一个页面时path是`/poster?name=first-post&articleId=01`，这样路由看起来不太直观。我们想要的是`:/post/first-post/01`，这样的路径。</br>
##### 2.1 标签式路由映射
在next.js中由于不能传递`params`，所以我们需要使用next中的Link组件提供的**as**属性，在**as**属性中就可以通过传递`params`进行路由映射；在next的Link组件中的`as`和`href`的区别在于：`as`是浏览器地址栏显示的path，并不是真正的path；而`href`才是真正的跳转路径（服务端的路径）。总的来说as是客户端显示的路径，而href是服务端真实跳转的路径。
```
 { PageRouterList.map(item => (
          <Link href={`/poster?name=${item.name}`}  as={`${item.name}`} key={item.id}><a>{item.title}</a></Link>
        ))}
```
##### 2.2 编程式路由映射
在next的Router对象中我们也可以使用路由映射使客户端显示的路径变得更加简洁。即在`push`或其他方式进行跳转的时候传入第二个路径，这个路径就是在客户端地址栏显示的路径。
```
  Router.push({
      pathname: '/poster',
      query: {
        name: 'first-post'
      }
    }, '/first-post')
```
#### 3. 路由的六个钩子事件
当路由变化时，我们可以根据钩子事件对其进行监听，执行对应的函数。</br>
在监听路由发生变化时，我们需要用到Router组件，然后用`on`方法进行监听，在`pages`文件夹下的`index.js `，写入下面的监听事件。
- routeChangeStart：开始跳转时触发。
- routeChangeComplete：跳转完成之后触发。
- routeChangeError：跳转到一个不存在的路径触发。
- beforeHistoryChange：启用history路由，在跳转成功前触发。(在next.js中路由默认通过history进行)
- hashChangeStart：启用hash路由时，在开始跳转时触发
- hashChangeComplete：启用hash路由时，在跳转成功后触发。

### 二、 获取数据的方法
#### 2. getInitialProps
##### 2.1 定义
`getInitialProps`确定了一个规范，一个页面组件只要把访问API外部资源的代码放在getInitialProps中就可以了，其他的都不用管。Next.js 自然会在服务器端或者浏览器端调用 getInitialProps 来获取外部资源，并把外部资源以 props 的方式传递给页面组件。</br>
##### 2.2  getInitialProps 是页面组件的静态成员函数，可以用下面的方法定义
- `Poster.getInitialProps = async() => {}`;
- 也可以在类组件加上static关键字定义：
```
Class Index extends React.Component {
  static async gteInitialProps() {
    ...
  }
}
```
`getInitialProps`是一个async函数，因此在`getInitialProps`函数中可以使用await关键字，用同步的方式编写异步逻辑。



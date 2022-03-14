# a-star-map

A* 寻路

## demo
![demo](https://i.ibb.co/4g8J4Rm/image.gif)  
index.html 是寻路的 demo  
使用 ```pubsub-js``` 做了寻路节点的可视化

## 安装
### npm
```npm install a-star-map``` 或 ```yarn add a-star-map```
```js
    import * as AStar from 'a-star-map'

    const map = new AStar.Map([
        [1,3,1],
        [1,5,1],
        [4,2,1]
    ])
    const route = AStar.find(map.map, [0, 0], [2,2])
```
### browser script 引入
script 引入使用 dist 文件夹下的 index.js
```html
<script src='./dist/index.js'></script>
<script>
    var map = new window.AStar.Map([
        [1,3,1],
        [1,5,1],
        [4,2,1]
    ])
    const route = AStar.find(map.map, [0, 0], [2,2])
</script>
```

## 创建地图

### Astar.Map 地图类
#### 创建地图
```js
    const map = new AStar.Map([
        [1,3,1],
        [1,5,1],
        [4,2,1]
    ])
```
#### 类型
```RouteNode``` 8叉树节点 见 [dist/Node.d.ts](./dist/Node.d.ts)  
```Astar.Map``` 见 [dist/index.d.ts](./dist/index.d.ts)
#### 属性
```map.map``` 地图 存储 RouteNode 的二维数组  
#### 方法
##### setNode
```map.setNode(y: number, x: number, data: Partial<Pick<RouteNode, "cost" | "diagonal">>): void;  ```     
更新节点的花费与斜边通行属性  
参数：  
y (纵坐标) number 必须  
x (横坐标) number 必须  
cost (花费) number  可选  
diagonal (允许斜边通行)  boolean  可选  

##### on
```map.on(name:string ,(data:any)=>void):void```  
监听事件

##### un
```map.un(name:string ,(data:any)=>void):void```  
解绑事件

##### emit
```map.emit(name:string ,data:any):void```  
触发事件，但是没有什么情况是需要从外部触发map事件的  
可以把它当作一个发布订阅来触发自定义事件  

#### 事件
事件回调 data 的数据类型
data:[number,number]

##### onPutOpenlist
当节点被放入openlist后触发的事件

##### onPutCloselist
当节点被放入closelist后触发的事件

##### onRoute
从终点到起点依次触发的路径事件

## 更新地图
默认地图格子允许斜边通行
```js
// 使0,0格子不可行走
map.setNode(0,0,{cost:Infinity})

// 使0,0格子花费为5 并允许斜边通行
map.setNode(0,0,{cost:5,diagonal:true})
```
## 寻路
```js
// 创建地图...
const route = AStar.find(map.map, [0, 0], [2,2])
```
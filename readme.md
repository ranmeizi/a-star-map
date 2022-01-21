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
    // Astar.Map
    // Astar.find
```
### browser script 引入
script 引入使用 dist 文件夹下的 index.js
```html
<script src='./dist/index.js'></script>
<script>
    // window.Astar.Map
    // window.Astar.find
</script>
```
### browser module 引入
module 方式 使用 lib 下的 index.js
```html
<script type='module'>
    import * as AStar from './lib/index.js'
    // Astar.Map
    // Astar.find
</script>
```

## 创建地图

### Astar.Map 地图类
#### 创建地图
```js
    const map = new Astar.Map([
        [1,3,1],
        [1,5,1],
        [4,2,1]
    ])
```
#### 类型
```RouteNode``` 8叉树节点 见lib/Node.d.ts  
```Astar.Map``` 见 lib/index.d.ts
#### 属性
```map.map``` 地图 存储 RouteNode 的二维数组  
#### 方法
```map.setNode(y: number, x: number, data: Partial<Pick<RouteNode, "cost" | "diagonal">>): void;  ```     
更新节点的花费与斜边通行属性  
参数：  
y (纵坐标) number 必须  
x (横坐标) number 必须  
cost (花费) number  可选  
diagonal (允许斜边通行)  boolean  可选  

## 更新地图

```js
// 使0,0格子不可行走
map.setNode(0,0,{cost:Infinity})

// 使0,0格子花费为5 并允许斜边通行
map.setNode(0,0,{cost:5,diagonal:true})
```
## 寻路
```js
// 创建地图...
AStar.find(map.map, [0, 0], [2,2])
```
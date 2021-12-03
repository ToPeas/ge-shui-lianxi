Slasify Frontend React Personal Income Tax Calculator
======================================================

任务内容：在前端实现一个"个人所得税计算器"

## 个税计算方式

分段计税

- 5000（含）以下免税
- 5000至10000（含）部分，以10%计算
- 10000至20000（含）部分，以20%计算
- 20000至50000（含）部分，以30%计算
- 50000以上，以45%计算

最终应缴纳个税为各段税之和。

## 需求

主要有两大块功能：

### 计算个税

1. 提供一个输入框，供用户输入数字
2. 提供一个按钮，内容为`Calculate`，点击后将根据数字计算出个税
3. 除了计算总个税，还需要以表格的形式列出每段个税详情，大概形式如下：

Income: 1000000

Level         |   Tax
--------------|------
0 < x <= 5000 (0%) |   0
5000 < x <= 10000 (10%) | 500
10000 < x <= 20000 (20%) | 2000
20000 < x <= 50000 (30%) | 9000
50000 < x <= max (45%) | 427500
Total            | 439000

为了简单起见，输入不需要验证，总是假设输入的是一个合适的数字

### 显示查询历史

有一个list显示查询历史，格式大概如下（可自行设计）：

- 1000000 -> 439000
- 3000 -> 0
- 5200 -> 20

每当用户查询完一次，该数据都会立刻显示在列表中。当点击某一项时，在计算器中会重新计算并显示个税详情。

## 技术要求

1. 使用typescript + react function component + react hooks
2. 需要提供单元测试（非常重要），使用jest加其它需要的测试库
3. 可使用任何需要的第三方package
4. 需要正确的处理loading, error等状态
5. Clean code
6. 配置常见构建工具，如code formatter, lint等
8. 展示你觉得好的代码实践

## 启动命令

启动：

```
npm run dev
```

## 运行测试

```
npm run test
```

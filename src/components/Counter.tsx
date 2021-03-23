/*
 * @Author: your name
 * @Date: 2021-03-23 14:39:13
 * @LastEditTime: 2021-03-23 15:13:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /rc-ts/src/components/Counter.tsx
 */
import * as React from 'react';
 
 
// 创建类型接口
export interface Iprops {
    value: number
}
 
// 使用接口代替 PropTypes 进行类型校验
const Counter: React.FC<Iprops> = ({ value }) => {
    const [count, setCount] = React.useState(0);
    return <p onClick={() => setCount(count => count + 1)}>Clicked: { count } times</p>
}
 
export default Counter;
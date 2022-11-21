import hello from './index.module.css'
import { Component } from 'react'

export default class Hello extends Component{
  render() {
    return <h2 className={hello.title}>hello mygirls</h2>
  }
}
// function Hello() {
//   return <h2 className={hello.title}>hello mygirls</h2>
// }
// export default Hello
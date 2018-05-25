import { Component } from "react"
import extend from "extend"
import util from "util.react"
import spreadProps from 'react-spread-props'
require('./index.css')
class Icon extends Component {
    constructor (props) {
        super(props)
        const self = this
        this.state = {

        }
    }
    render() {
        const self = this
        let typeArray = self.props.type.split(' ')
        typeArray = typeArray.map(function (item) {
            return self.props.prefixClassName + '-' + item
        })
        let classNameArray = []
        classNameArray.push(
            self.props.prefixClassName
        )
        classNameArray.push(
            self.props.className
        )
        classNameArray.push(
            util.themes(self.props)
        )
        classNameArray = classNameArray.concat(typeArray)


        let domProps = spreadProps(
                self.props,
                {
                    className: classNameArray.join(' ')
                },{
                    ignore:['type']
                }
        )

        return (
            <span
                {...domProps}
            >
            {self.props.children}
            </span>
        )
    }
}
require('./props').default(Icon)
export default Icon
module.exports= Icon

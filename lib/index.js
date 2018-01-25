import { Component } from "react"
import extend from "extend"
import util from "util.react"
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
            return 'fi-' + item
        })
        let classNameArray = []
        classNameArray.push(
            self.props.prefixClassName
        )
        classNameArray.push(
            util.themes(self.props)
        )
        classNameArray = classNameArray.concat(typeArray)

        return (
            <span
                className={classNameArray.join(' ')}
            >
            {self.props.children}
            </span>
        )
    }
}
require('./props').default(Icon)
export default Icon
module.exports= Icon

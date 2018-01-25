var React = require('react')
var Icon = require('icon.react')
class Basic extends React.Component {
    render () {
        return (
            <div className="basicDemo" >
                <Icon type="eercast" />
                {' '}
                <Icon type="bath" />
                {' '}
                <Icon type="commenting" />
                {' '}
                <Icon type="commenting-o" />
                {' '}
                <Icon type="refresh spin" />
                {' '}
                <Icon type="github 3x" />
                {' '}
                <Icon type="github" themes="demo" />
            </div>
        )
    }
}
/*ONFACE-DEL*/Basic = require("react-hot-loader").hot(module)(Basic)
module.exports = Basic

var React = require('react')
var Icon = require('icon.react')
class Basic extends React.Component {
    render () {
        return (
            <div className="basicDemo" >
                <Icon type="up" />
                {' '}
                <Icon type="up-o" />
                {' '}
                <Icon type="up-of" />
                {' '}
                <Icon type="up-s" />
                {' '}
                <Icon type="up-sf" />
                {' '}
                <Icon type="onface" />
                {' '}
                <Icon type="info" />
                {' '}
                <Icon type="info-o" />
                {' '}
                <Icon type="info-of" />
                {' '}
                <Icon type="loading" className="demoClassName" />
                {' '}
                <Icon type="github" themes="demo" />
            </div>
        )
    }
}
/*ONFACE-DEL*/Basic = require("react-hot-loader").hot(module)(Basic)
module.exports = Basic

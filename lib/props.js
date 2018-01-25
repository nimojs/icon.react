import p from 'prop-types'
export default function (app) {
    app.defaultProps = {
        type: '',
        prefixClassName: 'fi',
        themes: ''
    }
    app.propTypes = {
        prefixClassName: p.string,
        type: p.string,
        themes: p.string,
    }
}

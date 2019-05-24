
class Hero extends React.Component {
    render() {
        let imageClipHeight = {
            maxHeight: '180px',
            overflow:'hidden'
        };
        const { name, title, description, email, heroUrl, iconUrl } = this.props;
        return (
            <div className="jumbotron text-center">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
        );
    }
}

export default Hero;
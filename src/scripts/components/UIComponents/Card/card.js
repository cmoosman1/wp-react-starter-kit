import DataStore from 'flux/stores/DataStore.js'

class Card extends React.Component {
    render() {
        let imageClipHeight = {
            maxHeight: '180px',
            overflow:'hidden'
        };
        const { name, title, description, email, heroUrl, iconUrl } = this.props;
        return (
            <div className="card flex-fill">
                <img src={heroUrl} alt="Placeholder image" style={imageClipHeight}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">Profile</a>
                </div>
            </div>
        );
    }
}

export default Card;

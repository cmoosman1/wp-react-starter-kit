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
                <img src="https://via.placeholder.com/285x180" alt="Placeholder image" style={imageClipHeight}/>
                <div className="card-body">
                    <h5 className="card-title">John Doe</h5>
                    <h5 className="card-title">CEO</h5>
                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <a href="#" className="btn btn-primary">Profile</a>
                </div>
            </div>
        );
    }
}

export default Card;

import DataStore from 'flux/stores/DataStore.js'

class Footer extends React.Component {
    render() {
    
        let pageData = DataStore.getPageBySlug('footer');
        return (
            <div className="container mb-3">
                <div className="row">
                    <div className="col">
                        <p>© 2019, Tallwave, LLC. All rights reserved.</p>
                    </div>
                    <div className="col">
                    </div>
                    <div className="col text-right">
                        <i className="fa fa-facebook-official fa-2x pr-4" aria-hidden="true"></i>
                        <i className="fa fa-linkedin fa-2x pr-4" aria-hidden="true"></i>
                        <i className="fa fa-instagram fa-2x pr-4" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
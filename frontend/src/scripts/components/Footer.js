import DataStore from 'flux/stores/DataStore.js'

class Footer extends React.Component {
    render() {
        let pageData = DataStore.getPageBySlug('footer');
        return (
            <footer className="footer mt-auto py-3">
                <div className="container">
                    <span className="text-muted">{pageData.title.rendered}</span>
                </div>
            </footer>
        );
    }
}

export default Footer;
import DataStore from 'flux/stores/DataStore.js'
import {Link} from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'

class TemplateA extends React.Component {
    render() {
        let divStyle = {
            marginTop: '50px'
        };
        
        let currentPage = this.props.location.pathname;
        currentPage = currentPage.replace("/", "");
        let pageData = DataStore.getPageBySlug(currentPage);
        allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]); // Sort pages by order
        return (
        <div>
            <Header />
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">{pageData.title.rendered}</h1>
                        <div dangerouslySetInnerHTML={{__html: pageData.excerpt.rendered}} />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 d-flex">
                        Column 1
                        </div>
                        <div className="col-md-4 d-flex">
                        Column 2
                        </div>
                        <div className="col-md-4 d-flex">
                        Column 3
                        </div>
                    </div>
                    <div className="row" style={divStyle}>
                        <div className="col-md-12 d-flex text-center">
                            <p className="lead">
                                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
                            </p>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
        );
    }
}

export default TemplateA;
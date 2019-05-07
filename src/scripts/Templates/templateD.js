import DataStore from 'flux/stores/DataStore.js'
import {Link} from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/UIComponents/Card/card'

class TemplateA extends React.Component {
    render() {
        let divStyle = {
            marginTop: '50px'
        };
        
        let currentPage = this.props.location.pathname;
        currentPage = currentPage.replace("/", "");
        let pageData = DataStore.getPageBySlug(currentPage);
        let cardData = DataStore.getAllMediaCardPosts();
        let allPages = DataStore.getAllPages();
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
                        <Card 
                            name={cardData[0].acf.name} 
                            title={cardData[0].acf.title} 
                            description={cardData[0].acf.description} 
                            email={cardData[0].acf.email} 
                            heroUrl={cardData[0].acf.hero.url}
                            iconUrl={cardData[0].acf.icon.url} 
                        />
                        </div>
                        <div className="col-md-4 d-flex">
                        <Card 
                            name={cardData[1].acf.name} 
                            title={cardData[1].acf.title} 
                            description={cardData[1].acf.description} 
                            email={cardData[1].acf.email}
                            heroUrl={cardData[1].acf.hero.url}
                            iconUrl={cardData[1].acf.icon.url}
                        />
                        </div>
                        <div className="col-md-4 d-flex">
                        <Card 
                            name={cardData[2].acf.name} 
                            title={cardData[2].acf.title} 
                            description={cardData[2].acf.description} 
                            email={cardData[2].acf.email}
                            heroUrl={cardData[2].acf.hero.url}
                            iconUrl={cardData[2].acf.icon.url}
                        />
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
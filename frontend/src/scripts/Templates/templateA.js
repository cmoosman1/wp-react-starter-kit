import DataStore from 'flux/stores/DataStore.js'
import Carousel from '../components/UIComponents/Carousel/carousel'
import Header from '../components/Header'
import Footer from '../components/Footer'

class TemplateA extends React.Component {
    render() {
        let divStyle = {
            padding: '50px'
        };
        let allPages = DataStore.getAllPages();
        
        allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]); // Sort pages by order
        return (
            <div>
            <Header />
            <Carousel />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="h1">Getting Started...</div>
                        <p>Add content here</p>
                    </div>
                </div>

                <hr/>
            </div>
            <Footer />
        </div>
        );
    }
}

export default TemplateA;
import DataStore from 'flux/stores/DataStore.js'
import Card from '../components/UIComponents/Card/card'
import Section from '../components/UIComponents/Section/section'
import Tile from '../components/UIComponents/Tile/tile'
import Header from '../components/Header'
import Footer from '../components/Footer'

class TemplateA extends React.Component {
    render() {
        let imageClipHeight = {
            maxWidth: '50%',
            maxHeight: '280px',
            overflow:'hidden'
        };
        let allPages = DataStore.getAllPages();
        
        allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]); // Sort pages by order
        return (
            <div>
            <Header />
            <Section />
            <div className="container">
                <div className="row mt-5">
                    <div className="col text-center">
                        <h1 className="display-4">What We Do</h1>
                        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col text-center">
                        <Card />
                    </div>
                    <div className="col text-center">
                        <Card />
                    </div>
                    <div className="col text-center">
                        <Card />
                    </div>
                </div>
            </div>
            <Tile />
            <section>
                <div className="container">
                    <div className="row">
                        <p>
                        <a className="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
                        <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
                        <button className="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
                        </p>
                        <div className="row">
                        <div className="col">
                            <div className="collapse multi-collapse" id="multiCollapseExample1">
                            <div className="card card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="collapse multi-collapse" id="multiCollapseExample2">
                            <div className="card card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
        );
    }
}

export default TemplateA;
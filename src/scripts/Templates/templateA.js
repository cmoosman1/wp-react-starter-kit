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
                        <div className="h4">Introduction</div>
                        <p className="lead">
                            Tallwave DSL open-source design system for digital products and experiences. With the Tallwave DSL as its foundation, 
                            the system consists of working code, design tools and resources, human interface guidelines, and a vibrant community of contributors.
                        </p>
                        <p className="lead">
                            Tallwave DSL serves a wide range of designers and developers building digital products and experiences. The goals of the system include 
                            improving UI consistency and quality, making the design and development process more efficient and focused, establishing a shared vocabulary 
                            between designer and developer, and providing clear, discoverable guidance around design and development best practices.
                        </p>
                        <p className="lead">
                            Tallwave DSL is maintained by a core team of designers, developers, and writers based in the Scottsdale, Arizona.
                        </p>
                    </div>
                </div>

                <hr/>
                <div className="row">
                    <div className="col">
                        <div className="h4">Guiding principles</div>
                        <p className="lead">
                            Tallwave DSL is open It’s a distributed effort, guided by the principles of the open-source movement. Tallwave DSL’s users are also its makers, 
                            and everyone is encouraged to contribute.
                        </p>
                        <p className="lead">
                            Tallwave DSL is inclusive It’s designed and built to be accessible to all, regardless of ability or situation.
                        </p>
                        <p className="lead">
                            Tallwave DSL is modular and flexible Tallwave DSL’s modularity ensures maximum flexibility in execution. Its components are designed to work 
                            seamlessly with each other, in whichever combination suits the needs of the user.
                        </p>
                        <p className="lead">
                            Tallwave DSL puts the user first Starting with rigorous research into users’ needs and desires, and revised continuously based on their feedback, 
                            Tallwave DSL is laser-focused on real people.
                        </p>
                        <p className="lead">
                            Tallwave DSL builds consistency Based on the comprehensive Tallwave DSL, every element and component of Tallwave DSL was designed from the ground 
                            up to work elegantly together to ensure consistent, cohesive user experiences.
                        </p>
                    </div>
                </div>

                <hr/>
                <div className="row">
                    <div className="col">
                        <div className="h4">Who is Tallwave DSL for?</div>
                        <p className="lead">
                            Designers - Tallwave DSL is the official implementation of the Tallwave DSL for product and web designers, and represents an ever-growing ecosystem 
                            of design assets and guidance. With a comprehensive set of human interface guidelines, design kits, and documentation, Tallwave DSL helps designers 
                            work faster and smarter.
                        </p>
                        <p className="lead">
                            Developers Tallwave DSL is built by developers, for developers. Our front-end libraries are continuously maintained and fully supported by the core 
                            Tallwave DSL team (and an army of open-source contributors).

                            Tallwave DSL is a React library that ships a React rewrite of the JavaScript, but uses the same CSS as the core library. 
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
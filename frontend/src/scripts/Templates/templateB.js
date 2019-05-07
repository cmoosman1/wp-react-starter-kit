import DataStore from 'flux/stores/DataStore.js'
import {Link} from 'react-router-dom';

class TemplateA extends React.Component {
    render() {
        let divStyle = {
            padding: '50px'
        };
        let currentPage = this.props.location.pathname;
        currentPage = currentPage.replace("/", "");
        let pageData = DataStore.getPageBySlug(currentPage);
        let allPages = DataStore.getAllPages();
        allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]); // Sort pages by order
        return (
        <div>
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Tallwave DSL</a>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                    <a className="nav-link" href="#">Sign out</a>
                    </li>
                </ul>
            </nav>
            <div className="container-fluid">
                <div className="row">
                    <nav className="col-md-2 d-none d-md-block bg-light sidebar mt-5">
                        <div className="sidebar-sticky">
                            <ul className="nav flex-column">
                            {allPages.map((page) => {
                                    if(page.slug !== 'footer') {
                                        return(
                                            <li key={page.id} className="nav-item">
                                                <Link 
                                                    key={page.id} 
                                                    to={`/${page.slug}`} 
                                                    style={{marginRight: '10px'}}
                                                    >
                                                    {page.slug}
                                                </Link>
                                            </li>
                                        )                     
                                    } 
                                })}
                            </ul>
                        </div>
                    </nav>

                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 mt-5">
                    
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">React Design System Library</h1>
                        <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group mr-2">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                        </div>
                        <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                            This week
                        </button>
                        </div>
                    </div>

                    <h3>Getting Started...</h3>
                    <div className="d-flex justify-content-between flex-wrap">
                        <h4>Introduction</h4>
                        <p>
                            Tallwave DSL open-source design system for digital products and experiences. With the Tallwave DSL as its foundation, 
                            the system consists of working code, design tools and resources, human interface guidelines, and a vibrant community of contributors.
                        </p>
                        <p>
                            Tallwave DSL serves a wide range of designers and developers building digital products and experiences. The goals of the system include 
                            improving UI consistency and quality, making the design and development process more efficient and focused, establishing a shared vocabulary 
                            between designer and developer, and providing clear, discoverable guidance around design and development best practices.
                        </p>
                        <p>
                            Tallwave DSL is maintained by a core team of designers, developers, and writers based in the Scottsdale, Arizona.
                        </p>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between flex-wrap">
                        <h4>Guiding principles</h4>
                        <p>
                            Tallwave DSL is open It’s a distributed effort, guided by the principles of the open-source movement. Tallwave DSL’s users are also its makers, 
                            and everyone is encouraged to contribute.
                        </p>
                        <p>
                            Tallwave DSL is inclusive It’s designed and built to be accessible to all, regardless of ability or situation.
                        </p>
                        <p>
                            Tallwave DSL is modular and flexible Tallwave DSL’s modularity ensures maximum flexibility in execution. Its components are designed to work 
                            seamlessly with each other, in whichever combination suits the needs of the user.
                        </p>
                        <p>
                            Tallwave DSL puts the user first Starting with rigorous research into users’ needs and desires, and revised continuously based on their feedback, 
                            Tallwave DSL is laser-focused on real people.
                        </p>
                        <p>
                            Tallwave DSL builds consistency Based on the comprehensive Tallwave DSL, every element and component of Tallwave DSL was designed from the ground 
                            up to work elegantly together to ensure consistent, cohesive user experiences.
                        </p>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between flex-wrap">
                        <h4>Who is Tallwave DSL for?</h4>
                        <p>
                            Designers - Tallwave DSL is the official implementation of the Tallwave DSL for product and web designers, and represents an ever-growing ecosystem 
                            of design assets and guidance. With a comprehensive set of human interface guidelines, design kits, and documentation, Tallwave DSL helps designers 
                            work faster and smarter.
                        </p>
                        <p>
                            Developers - Tallwave DSL is built by developers, for developers. Our front-end libraries are continuously maintained and fully supported by the core 
                            Tallwave DSL team (and an army of open-source contributors).

                            Tallwave DSL is a React library that ships a React rewrite of the JavaScript, but uses the same CSS as the core library. 
                        </p>
                    </div>
                    </main>
                </div>
            </div>
        </div>
        );
    }
}

export default TemplateA;
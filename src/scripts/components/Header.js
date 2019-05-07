import DataStore from 'flux/stores/DataStore.js'
import {Link} from 'react-router-dom';
class Header extends React.Component {   
   
    render() {
        let allPages = DataStore.getAllPages();
        allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]); // Sort pages by order
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="https://tallwave.com">
                    <img src="https://tallwave.com/static/media/logo-black.ee169ea8.png"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {allPages.map((page) => {
                            if(page.slug !== 'footer') {
                                return(
                                    <li className="nav-item" key={page.id}>
                                        <Link 
                                            key={page.id} 
                                            to={`/${page.slug}`} 
                                            className={'nav-link'}
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
        );
    }
}

export default Header;
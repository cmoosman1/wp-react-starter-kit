import DataStore from 'flux/stores/DataStore.js'
import Header from '../components/Header'
import Footer from '../components/Footer'
class TemplateC extends React.Component {
    render() {
        let divStyle = {
            padding: '50px'
        };
        let verticalSpacer30 = {
            height: '30px'
        };
        let currentPage = this.props.location.pathname;
        currentPage = currentPage.replace("/", "");
        let pageData = DataStore.getPageBySlug(currentPage);

        let allPages = DataStore.getAllPages();
        allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]); // Sort pages by order

        let cardData = DataStore.getAllMediaCardPosts();
        return (
        <div>
            <Header />
            <div className="container">
                <div className="row mb-2 mt-5">
                    <div className="col-md-6">
                    <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                        <div className="card-body d-flex flex-column align-items-start">
                        <strong className="d-inline-block mb-2 text-primary">World</strong>
                        <h3 className="mb-0">
                            <a className="text-dark" href="#">Featured post</a>
                        </h3>
                        <div className="mb-1 text-muted">Nov 12</div>
                        <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a href="#">Continue reading</a>
                        </div>
                        <svg className="bd-placeholder-img card-img-right flex-auto d-none d-lg-block" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect fill="#55595c" width="100%" height="100%"></rect><text fill="#eceeef" dy=".3em" x="20%" y="50%">Thumbnail</text></svg>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                        <div className="card-body d-flex flex-column align-items-start">
                        <strong className="d-inline-block mb-2 text-success">Design</strong>
                        <h3 className="mb-0">
                            <a className="text-dark" href="#">Post title</a>
                        </h3>
                        <div className="mb-1 text-muted">Nov 11</div>
                        <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a href="#">Continue reading</a>
                        </div>
                        <svg className="bd-placeholder-img card-img-right flex-auto d-none d-lg-block" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect fill="#55595c" width="100%" height="100%"></rect><text fill="#eceeef" dy=".3em" x="20%" y="50%">Thumbnail</text></svg>
                    </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        );
    }
}

export default TemplateC;
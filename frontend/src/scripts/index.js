import {render} from 'react-dom';
import DataActions from 'flux/actions/DataActions.js';
import TemplateA from './Templates/templateA'
import TemplateB from './Templates/templateB'
import TemplateC from './Templates/templateC'
import TemplateD from './Templates/templateD'

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';


class AppInitializer {

    templates = {
        'templateA': TemplateA,
        'templateB': TemplateB,
        'templateC': TemplateC,
        'templateD': TemplateD
    }

    buildRoutes(data){
        data.pages.sort((a, b) => a.slug.localeCompare(b.slug)); // Alpha sort links by page slug
        return data.pages.map((page, i) => {
            return(
                <Route
                    key={i}
                    component={this.templates[page.acf.template_type]}
                    path={`/${page.slug}`}
                    exact
                /> 
            )
        })     
    }
    run() {
        DataActions.getPages((response)=>{
            render(
                <Router>
                    <div>
                        <Switch>
                            <Route path="/" component={ TemplateA } exact />
                            
                            {this.buildRoutes(response)}
                            <Route render={() => { return <Redirect to="/" /> }} />
                        </Switch> 
                    </div>
                </Router>

                , document.getElementById('app')
            );
        });
    }
}

new AppInitializer().run();

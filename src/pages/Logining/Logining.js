import React, {
    Component
} from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

import "./Logining.css";
import Xlogining from '../../componens/Xlogin/Xlogining/Xlogining';
import Xlsignin from '../../componens/Xlogin/Xlsignin/Xlsignin';
import Xaccountboard from '../../componens/Xlogin/Xaccountboard/Xaccountboard';
import Xhelpsearch from '../../componens/Xlogin/Xhelp/Xhelpsearch';
import Xhelpbox from '../../componens/Xlogin/Xhelp/Xhelpbox';
import Xvip from '../../componens/Xlogin/Xvip/Xvip';


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
            	<Route path="/logining/id" component={Xaccountboard} />                
            	<Route path="/logining/id" component={Xlogining} />
                <Route path="/logining/idsignin" component={Xlsignin} />
                <Route path="/logining/idXhelp" component={Xhelpsearch} />
                <Route path="/logining/vip" component={Xvip} />
            </div>
        )
    }
}

export default Detail;
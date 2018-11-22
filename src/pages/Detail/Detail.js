import React, {
    Component
} from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

import "./Detail.css";
import Xbuilding from '../../componens/Xhomenav/Xdetail/Xbuilding';
import Xgroup from '../../componens/Xhomeentry/Xdetail/Xgroup';
import Xcredit from '../../componens/Xbiao/Xdetail/Xcredit';
import Xkefu from '../../componens/Xkefu/Xkefu';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
            	<Route path="/detail/build" component={Xbuilding} />
				<Route path="/detail/group" component={Xgroup} />
				<Route path="/detail/credit" component={Xcredit} />
				<Route path="/detail/kefu" component={Xkefu} />
            </div>
        )
    }
}

export default Detail;
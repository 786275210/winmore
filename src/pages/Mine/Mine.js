import React, {
    Component
} from "react";
import { Link } from "react-router-dom";
import "./Mine.css";

import { Route } from "react-router-dom";
import Xlogin from '../../componens/Xlogin/Xlogin';
import Xloginbottom from '../../componens/Xloginbottom/Xloginbottom';

class Mine extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.match.params);
        this.state = {
        }
    }
    render() {
        return (
            <div>
            	<Route path="/home/mine" component={Xlogin} />
            	<Route path="/home/mine" component={Xloginbottom} />
            </div>
        )
    }
}

export default Mine;
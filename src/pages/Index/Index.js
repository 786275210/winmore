import React, {
    Component
} from "react";
import { Link } from "react-router-dom";

import Xcarousel from '../../componens/Xcarousel/Xcarousel';
import Xhomenav from '../../componens/Xhomenav/Xhomenav';
import Xbobanner from '../../componens/Xbobanner/Xbobanner';
import Xbiao from '../../componens/Xbiao/Xbiao';
import Xhomeentry from '../../componens/Xhomeentry/Xhomeentry';


import { Route } from "react-router-dom";

class Index extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.match.params);
        this.state = {
        }
    }
    render() {
        return (
            <div>
				<Xcarousel />
				<Xhomenav />
				<Xbobanner />
				<Xbiao />
				<Xhomeentry />
			</div>
        )
    }
}

export default Index;
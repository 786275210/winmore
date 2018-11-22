import React, {
    Component
} from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import Xbottom from '../../componens/Xbottom/Xbottom';
import Xheader from '../../componens/Xheader/Xheader';

import  Borrow from '../Borrow/Borrow';
import  Index from '../Index/Index';


import { Route } from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
            	<Xheader/>
				<Route path="/home/index" component={Index} />
            	<Route path="/home/borrow" component={Borrow} />
				<Xbottom/>
            </div>
        )
    }
}

export default Home;
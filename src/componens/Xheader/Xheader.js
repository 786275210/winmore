import React, {
	Component
} from "react";

import { Link } from "react-router-dom";
import "./Xheader.css";
class Xheader extends Component{
	render(){
		return(
			<header id="head" className="">
            <div>
                <a href="/" className="logo">
                    <img src="https://file.duoying.com:8092///src/mobile/member/base/img/header/logo.png" />
                </a>
            </div>
            <div className="right">
                <Link to={`/detail/kefu`} className="kefu"></Link>
                
                <a href="/App/download" className="app"></a>
            </div>
            
        </header>
		)
					
		
	}
}

export default Xheader;
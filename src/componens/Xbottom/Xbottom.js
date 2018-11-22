import React, {
	Component
} from "react";

import { Link } from "react-router-dom";
import "./Xbottom.css";
class Xbottom extends Component {
	constructor(props) {
		super(props);
		//model data
		this.state = {
			tab:0,
			tabs: [{
				title: "首页",
				href: "index",
				icon:"home"
			}, {
				title: "出借",
				href: "borrow",
				icon:"cread"
			}, {
				title: "我的",
				href: "mine",
				icon:"per"
			}]
		}
	}
	toggleTab(index,e){
		this.setState({
			tab:index
		})
	}
	
	render() {
		return(
			<footer id="foot">
        	<ul>
        {(()=>{
        		return this.state.tabs.map((item,index)=>{
        			return(
        	<li className={index === this.state.tab?"act":""} data-id={index+1} key={index} onClick={this.toggleTab.bind(this,index)}>
                <Link to={`/home/${item.href}`} href="#" className={item.icon}>
                    <i className="icon"></i>
                    <p>{item.title}</p>
                </Link>
            </li>
        			)
        		})
        		
        	})()
        }
		</ul>
    </footer>
		)
	}
}

export default Xbottom;
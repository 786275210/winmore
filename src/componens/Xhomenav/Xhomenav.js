import React, {
	Component
} from "react";
import { Link} from "react-router-dom";

// css
import "./Xhomenav.css";
class Xhomenav extends Component {
	constructor(props) {
		super(props);
		// props states
		this.props = props;
		// model  data
		this.state = {
			tabs:[{
				title:"银行存管",
				icon:"nav-icon building"
			},{
				title:"合规典范",
				icon:"nav-icon purse"
			},{
				title:"普惠金融",
				icon:"nav-icon camera"
			},{
				title:"智能风控",
				icon:"nav-icon shield"
			}]
		}
	}
	// html
	render() {
		return(
            	<div className="home-nav">
					{(()=>{
						return this.state.tabs.map((item,index)=>{
							return(
								<Link key={index} to={`/detail/build`}>
									<i className={item.icon}></i>
									<span>{item.title}</span>
								</Link>
							)
						})
					})()}
				</div>
		)
	}
	// js
}

export default Xhomenav;
import React, {
	Component
} from "react";
import { Link} from "react-router-dom";
// css
import "./Xhomeentry.css";
class Xhomeentry extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			tabs: [{
				title: "公司动态",
				
				icon:"entry-icon group"
			}, {
				title: "产品介绍",
				
				icon:"entry-icon product"
			}, {
				title: "关于我们",
				
				icon:"entry-icon book"
			}, {
				title: "多赢社区",
				
				icon:"entry-icon xin"
			}]

		}
	}
	render() {
		return(
            	<div className="home-entry">
					{(()=>{
						return this.state.tabs.map((item,index)=>{
							return(
								<Link key={index} to={`/detail/group`}>
									<i className={item.icon}></i>
									<span>{item.title}</span>
								</Link>  
							)
						})
						
					})()}
				</div>
		)
	}
}

export default Xhomeentry;
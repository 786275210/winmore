import React, {
	Component
} from "react";
// css
import "./Xlogining.css";
import { Link } from "react-router-dom";

class Xlogining extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {

		}
	}
	render() {
		return(
			<div>
				<nav className="account-nav vertical">
				    <a href="/GodService/MyBidInfo">
				        <i className="nav-large-icon icon-1 pull-left"></i>
				        网贷专区
				    </a>
				</nav>
				<nav className="account-nav">
				    <a href="/GodService/DealDetail">
				        <i className="nav-icon icon-1"></i><br />
				        <span>资金明细</span>
				    </a>
				    <a href="/GodService/Calendar">
				        <i className="nav-icon icon-2"></i><br />
				        <span>回款日历</span>
				    </a>
				    <a href="javascript:void(0)" >
				        <i className="nav-icon icon-9"></i><br />
				        <span>自动投标</span>
				    </a>
				    <a href="/Broker/Index">
				        <i className="nav-icon icon-4"></i><br />
				        <span>邀请有礼</span>
				    </a>
				    
				    <a href="/GodService/MyTicket">
				        <span className="num">0</span>
				        <i className="nav-icon icon-5"></i><br />
				        <span>我的福利</span>
				    </a>
				    
				    <a href="/Security/SafeCenter">
				        <i className="nav-icon icon-7"></i><br />
				        <span>安全中心</span>
				    </a>
				    <Link to={`/logining/idsignin`}>
				        <i className="nav-icon icon-11"></i><br />
				        <span>签到有礼</span>  
				    </Link>
				    <a href="https://vip.duoying.com//Mall/index?device=h5">
				        <i className="nav-icon icon-13"></i><br />
				        <span>会员福利</span>
				    </a>
				    <Link to={`/logining/idXhelp`}>
				        <i className="nav-icon icon-12"></i><br />
				        <span>帮助中心</span>
				    </Link> 
				</nav>
			</div>
		)
	}
}

export default Xlogining;
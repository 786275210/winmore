import React, {
	Component
} from "react";
// css
import "./Xaccountboard.css";
class Xaccountboard extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {

		}
	}
	render() {
		return(
		
				<div className="account-dashboard">
				    <div className="dashboard-topbar">
				        <a className="envelope active" id="envelope" href="/Security/NewMsgList"></a>
				        <a className="dashboard-member" href="https://vip.duoying.com//Mall/MemberEquity?device=h5">
				            <i className="member-icon copper"></i>
				            <span>青铜会员</span>
				        </a>
				    </div>
				    <a className="dashboard-major" href="/GodService/TotalAssets">
				        <big className="x-large" datarole="money">0.00</big><br />
				        <span>总资产(元)<big>»</big></span>
				    </a>
				    <div className="dashboard-minor">
				        <div className="minor-item">
				            <big data-role="money">0.00</big><br />
				                <span>可用余额(元)</span>
				        </div>
				        <a className="minor-item" href="/GodService/AccruedIncome">
				            <big data-role="money">0.00</big><br />
				            <span>累计收益(元) <big>»</big></span>
				        </a>
				    </div>
				    <nav className="dashboard-nav" id="getMoney">
				            <a className="yellow attestation" href="/GodService/GodOpenMobileHandle">提现</a>
				            <a className="orange attestation" href="/GodService/GodOpenMobileHandle">充值</a>
				    </nav>
				</div>
	
		)
	}
}

export default Xaccountboard;
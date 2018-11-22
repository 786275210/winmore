import React, {
	Component
} from "react";
// css
import "./Xhelpsearch.css";
class Xhelpsearch extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {

		}
	}
	render() {
		return(
			<div className="help-banner">
				<p className="zun">用心服务只为尊贵的您</p>
				<p className="ke">客服热线：<a tel="4008-238-908">4008-238-908</a></p>
				<form method="get" className="search-box" id="searchForm" action="https://m.duoying.com/Article/HelpSearch">
					<input type="hidden" name="device" value="" />
					<button type="submit" className="search-button">搜索</button>
					<input type="text" className="search-input" id="keyword" name="keyword" placeholder="请输入问题的关键字" maxLength="10" />
				</form>
			</div>
		)
	}
}

export default Xhelpsearch;
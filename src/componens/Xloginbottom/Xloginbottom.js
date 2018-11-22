import React, {
	Component
} from "react";
// css
import "./Xloginbottom.css";
class Xloginbottom extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {

		}
	}
	render() {
		return(
			<div className="bgDiv" style={{position: "fixed"}}>
			    <p>客服热线：<a tel="4008-238-908">4008-238-908</a></p>
			    <img src="https://file.duoying.com:8092//src/mobile/member/login/img/login/bg.png" className="bgImg" />
			</div>
		)
	}
}

export default Xloginbottom;
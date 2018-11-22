import React, {
	Component
} from "react";
import "./Xbobanner.css";

class Xbobanner extends Component {
	constructor(props) {
		super(props);
		// props states
		this.props = props;
		// model  data
		this.state = {

		}
	}
	render() {
		return(
			<div className="bo_banner">
                <a href="/Credit/CreditSend/49258" className="one"> </a>
                <a href="/Credit/CreditSend/49258" className="two"> </a>
            </div>
          )
	}
}

export default Xbobanner;
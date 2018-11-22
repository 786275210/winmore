import React, {
	Component
} from "react";
import iconTabbar from "../../assets/img/636771466021993407.png";
// css
import "./Xcarousel.css";

import { Carousel } from 'antd';
class Xcarousel extends Component {
	constructor(props) {
		super(props);
		// props states
		this.props = props;
		// model  data
		this.state = {

		}
	}
	// html
	render() {
		return(
			<div className="carousel-container" id="carousel_container">
	        	<Carousel autoplay>
				    <div><h3><img src={iconTabbar} alt="" className="weui-tabbar__icon" /></h3></div>
				    <div><h3><img src={iconTabbar} alt="" className="weui-tabbar__icon" /></h3></div>
				    <div><h3><img src={iconTabbar} alt="" className="weui-tabbar__icon" /></h3></div>
				    <div><h3><img src={iconTabbar} alt="" className="weui-tabbar__icon" /></h3></div>
				    <div><h3><img src={iconTabbar} alt="" className="weui-tabbar__icon" /></h3></div>
				    <div><h3><img src={iconTabbar} alt="" className="weui-tabbar__icon" /></h3></div>
				    <div><h3><img src={iconTabbar} alt="" className="weui-tabbar__icon" /></h3></div>
				</Carousel>
			</div>
          )
	}
	// js
}

export default Xcarousel;
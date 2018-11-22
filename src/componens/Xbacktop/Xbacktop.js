import React, {
	Component
} from "react";

import "./Xbacktop.css";
import top from './top.js';
class Xbacktop extends Component {
	constructor(props) {
		super(props);
		//model data
		this.state = {
			
		}
	}
	toggletop(){
			console.log("ooo")
			var topp = document.getElementById("backtop");			
				topp.timer = setInterval(function() {
					var currentTop = window.scrollY;
					var speed = parseInt(currentTop / 5);
					currentTop -= speed;
					if(speed <= 20) {
						speed = 5;
					}
					if(window.scrollY <= 5) {
						clearInterval(topp.timer);
					}
					console.log(currentTop);
					window.scrollTo(0, currentTop);
				}, 30)
			
		}
	
			
	
	render() {
		return(
			<div onClick={this.toggletop.bind(this)} id="backtop" className=""></div>
			
		)
	}
}

export default Xbacktop;
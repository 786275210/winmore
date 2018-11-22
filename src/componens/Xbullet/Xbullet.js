import React, {
	Component
} from "react";
// css
import {Provider, connect} from 'react-redux';
import "./Xbullet.css";
class XBullet extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {

		}
	}
	render() {
		return(
			<div>
				<div className="modal active" style={{display:this.props.isShowactive?'block':'none'}}>
			        <section className="modal-dialog">
			            <a className="modal-close" data-role="close" onClick={this.props.orange.bind(this)}></a>
			            <div className="modal-body">
			                <p className="leading text-center">参考年回报率说明</p>
			                <p>“参考年回报率”以年为单位，仅参考往期同类产品的用户收益，不构成多赢普惠的任何承诺</p>
			            </div>
			            <footer className="modal-foot">
			                <a onClick={this.props.orange.bind(this)} className="btn btn-block gradient" data-role="close" href="javascript:;">确定</a>
			            </footer>
			        </section>
			    </div>
			    <div className="modal active" style={{display:this.props.isShowgetway?'block':'none'}}>
			        <section className="modal-dialog">
			            <header className="modal-head">
			                <h4>先息后本计算公式</h4>
			            </header>
			            <div className="modal-body"> 
			                <p>还款总和 = 贷款本金 x [1 + (年利率 x 还款月数 / 12)]</p>
			                <p>每月利息 = 贷款本金 x 年利率 / 12</p>
			                <p>还款本金 = 贷款本金</p> 
			            </div>
			            <footer className="modal-foot">
			                <button type="button" className="btn btn-block gradient" data-role="close" onClick={this.props.getway.bind(this)}>我知道了</button>
			            </footer>
			        </section>
			    </div>
		    </div>
		)
	}
}

export default connect((state) => {
    return state
}, (dispatch) => {
    return {
        orange(){
            dispatch({
                type:"orange",
                isShowactive:false
            })
        },
		getway(){
			dispatch({
                type:"getway",
                isShowgetway:false
            })
		}
    }
})(XBullet);

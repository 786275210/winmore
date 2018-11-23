import React, {
	Component
} from "react";
// css
import "./XBidList.css";
import Xheader from '../../Xheader/Xheader';
import {Provider, connect} from 'react-redux';
class XBidList extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
            tabs:[{
                tel:'13****8',
                lend:'20000',
                earnings:'750',
                timer:'2018-09-21 14:54:31'
            },{
                tel:'13****1',
                lend:'19565',
                earnings:'733.65',
                timer:'2018-09-21 14:23:50'
            },{
                tel:'15****0',
                lend:'20000',
                earnings:'750',
                timer:'2018-09-21 14:19:43'
            }]
		}
	}
	render() {
		return(
            <div>
                <Xheader />
                <table className="project_list">
                    <thead className="head_pro">
                        <tr>
                            <td>用户</td>
                            <td>出借金额</td>
                            <td>预计收益</td>
                        </tr>
                    </thead>
                        {(()=>{
                            return this.state.tabs.map((item,index)=>{
                                 return(
                                    <tbody key={index} className="project_box">
                                        <tr className="list">
                                            <td>{item.tel}</td>
                                            <td style={{color: "#5c6064"}}>{this.props.text}</td>
                                            <td style={{color: "#5c6064"}}>{item.earnings}</td>
                                        </tr>
                                        <tr className="bottom">
                                            <td>{item.timer}</td>
                                            <td colspan="2">
                                                <input type="hidden" id="_899835" name="899835" value="" />
                                            </td>
                                        </tr>
                                    </tbody>    
                                )
                            })
                        })()}
                    <tfoot>
                        <tr>
                            <td colspan="4">
                               <a className="btn btn-block gradient disabled" href="/Credit/CreditSend/49258">还款中</a>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
		)
	}
}

export default connect((state)=>{
    return state
},(dispath)=>{
        return{
           
        }
})(XBidList);
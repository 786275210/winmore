import React, {
    Component
} from "react";

import "./XProjecttop.css";
import $ from 'jquery';


import { Link} from "react-router-dom";
class XProjecttop extends Component {
    constructor(props) {
        super(props);
        // props states
        this.props = props;
        // model  data
        this.state = {
                   tabs:[{
                       title:"项目详情",
                       act:"active"
                   },{
                    title:"担保机构",
                    act:"active"
                },{
                    title:"风控师意见",
                    act:"active"
                }]
        }
      
    }
    // html
    render() {
        return(
                <nav className="tab-nav margin-none">
                    {(()=>{
                        return this.state.tabs.map((item,index)=>{
                            return(
                                <a className="col-4">{item.title}</a>
                            )
                        })
                    })()}
                    <span className="nav-border"></span>
                </nav>
            
            
          )
    }
}

export default XProjecttop;
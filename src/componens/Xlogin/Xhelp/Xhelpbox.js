import React, {
	Component
} from "react";
// css
import "./Xhelpbox.css";
class Xhelpbox extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {

		}
	}
	render() {
		return(
                <div>
                    <nav className="help-nav">
                        <a href="https://m.duoying.com/Article/Index?TId=50&amp;device=">
                                <i className="help-icon prism"></i>
                            <span>关于平台</span>
                        </a>
                        <a href="https://m.duoying.com/Article/Index?TId=51&amp;device=">
                                <i className="help-icon house"></i>
                            <span>资金存管</span>
                        </a>
                        <a href="https://m.duoying.com/Article/Index?TId=52&amp;device=">
                                <i className="help-icon user"></i>
                            <span>会员中心</span>
                        </a>
                        <a href="https://m.duoying.com/Article/Index?TId=53&amp;device=">
                                <i className="help-icon prism"></i>
                            <span>风控管理</span>
                        </a>
                        <a href="https://m.duoying.com/Article/Index?TId=54&amp;device=">
                                <i className="help-icon bankcard"></i>
                            <span>账户管理</span>
                        </a>
                        <a href="https://m.duoying.com/Article/Index?TId=55&amp;device=">
                                <i className="help-icon prism"></i>
                            <span>我要出借</span>
                        </a>
                    </nav>
                    <section className="help-box">
                        <header className="box-head">
                            <h3><i className="doubt"></i>常见问题</h3>
                        </header>
                        <ul className="box-list">
                            <li>
                                <a href="https://m.duoying.com/Article/ArticleDetails?Id=15309&amp;device=">风险提示函</a>
                            </li>
                            <li>
                                <a href="https://m.duoying.com/Article/ArticleDetails?Id=11524&amp;device=">多赢普惠服务协议</a>
                            </li>
                            <li>
                                <a href="https://m.duoying.com/Article/ArticleDetails?Id=9042&amp;device=">会员福利相关说明</a>
                            </li>
                            <li>
                                <a href="https://m.duoying.com/Article/ArticleDetails?Id=8882&amp;device=">什么是P2P？</a>
                            </li>
                        </ul>
                    </section>
                </div>
		)
	}
}

export default Xhelpbox;
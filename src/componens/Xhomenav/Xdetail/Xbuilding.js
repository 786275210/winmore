import React, {
	Component
} from "react";
import "./Xbuilding.css";
import "./Xbuilding1.css";

class Xbuilding extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {

		}
	}
	render() {
		return(
			<div className="container">
		        <div className="banner">
		            <div className="text">
		                <h3>引领银行存管新风尚 打造合规体验双优平台</h3>
		                <p>为进一步满足产品创新的需求，为用户提供更优质的出借服务，多赢普惠携手新型股份制银行——新安银行上线新银行存管系统。安徽新安银行股份有限公司为安徽省首家民营银行，安徽新安银行以“普惠繁荣，创新发展”为愿景，确立了“服务中小企业、支持科技创新、践行普惠金融”的发展战略，争做区域金融改革的践行者。</p>
		            </div>
		        </div>
		        <div className="content">
		            <div className="module module-1">
		                <div className="module-title">什么是银行存管?</div>
		                 <div className="module-board">
		                     <p>多赢普惠-新安银行存管系统上线后，由新安银行作为银行机构资金存管，平台上的所有资金交易将在新安银行体系内全程流转，实现了平台资金与用户资金的严格隔离，实现了出借人与借款人的资金直接对接，从根源上保障出借人的资金安全。</p>
		                    <div className="flow"></div>
		                </div>
		            </div>
		             <div className="module module-2">
		                <div className="module-title">多赢普惠-新安银行存管优势</div>
		                 <div className="module-board">
		                    <div className="module-item">
		                        <div className="img"><div className="icon icon-1"></div></div>
		                        <div className="info">
		                            <b>主动拥抱监管<br/>坚持合规发展</b>
		                            <small>主动上线银行存管,隔离资金<br/>金融科技下的合规典范</small>
		                        </div>
		                    </div>
		                    <div className="module-item">
		                        <div className="img"><div className="icon icon-2"></div></div>
		                        <div className="info">
		                             <b>交易真实透明<br/>资金流转清晰</b>
		                            <small>银行必须根据用户授权操作<br/>指令才能进行资金流转</small>
		                        </div>
		                    </div>
		                    <div className="module-item">
		                        <div className="img"><div className="icon icon-3"></div></div>
		                        <div className="info">
		                            <b>资金100%隔离<br/>实现真正信息中介</b>
		                            <small>平台资金和用户资金有效<br/>隔离,平台不能触碰用户资金</small>
		                        </div>
		                    </div>
		                </div>
		            </div>
		           <div className="module module-3">
		                <div className="module-board">
		                    <div className="text-wrapper  top">
		                         <h3 className="module-tit">新安银行为什么选择多赢普惠</h3>
		                        <div className="module-text">
		                            <dl>
		                                <dt>背景雄厚实力强</dt>
		                                <dd> 知名风投战略入股，网贷行业百亿平台，稳健发展持续盈利</dd>
		                            </dl>
		                            <dl>
		                                <dt>用户至上团队强</dt>
		                                <dd>互联网基因+金融背景，以用户为导向，精细化运营创始团队均来自知名互联网金融公司，具备卓越的业务能力和丰富的管理经验</dd>
		                            </dl>
		                            <dl>
		                                <dt>透明真实资产稳</dt>
		                                <dd>信息透明度行业前列，甄选小额分散可靠资产。以汽车金融为核心，以供应链金融、房产金融为补充</dd>
		                            </dl>
		                            <dl>
		                                <dt>科技创新风控严</dt>
		                                <dd>科技创新助力智能风控，大数据智能风控系统、动态反欺诈模型，风险实时跟踪，全程可视化管理</dd>
		                            </dl>
		                        </div>
		                    </div>
		                    <div className="text-wrapper center"></div>
		                   <div className="text-wrapper bottom">
		                        <h3 className="module-tit">多赢普惠为什么选择新安银行</h3>
		                        <div className="module-text bottom">
		                            <dl>
		                                <dt>稳健发展</dt>
		                                <dd>首批银监会审批的十家民营银行之一，至今整体经营稳健发展，盈利能力保持稳定，专注于为科技创新型企业提供服务</dd>
		                            </dl>
		                            <dl>
		                                <dt>科技金融</dt>
		                                <dd>以科技创新不断引领服务，作为安徽金融服务体系补充者，全方位提供科技金融服务方案</dd>
		                            </dl>
		                            <dl>
		                                <dt>服务至上</dt>
		                                <dd>服务效率高效，投贷结合定制金融服务产品，为客户提供更高效、差异化的金融服务</dd>
		                            </dl>
		                            <dl>
		                                <dt>普惠金融</dt>
		                                <dd>致力于提供消费金融、供应链金融服务，坚持“普惠繁荣，创新发展”，践行普惠金融助力小微企业，推动民营经济发展。</dd>
		                            </dl>
		                        </div> 
		                   </div>
		                </div>
		            </div>
		            <div className="module module-4">
		                <div className="module-title">快速了解新安存管操作</div>
		                <div className="module-board-wrapper">
		                    <div className="module-board-inner">
		                        <div className="module-board">
		                            <div className="slide-btn">
		                                    <a href="javascript:void(0)" data-dex="0" className="active"><i></i>注册</a>
		                                <span className="line"></span>
		                                    <a href="javascript:void(0)" data-dex="1"><i></i>开户</a>
		                                <span className="line"></span>
		                                    <a href="javascript:void(0)" data-dex="2"><i></i>充值</a>
		                                <span className="line"></span>
		                                    <a href="javascript:void(0)" data-dex="3"><i></i>提现</a>
		                                <span className="line"></span>
		                                    <a href="javascript:void(0)" data-dex="4"><i></i>投标</a>
		                                <span className="line"></span>
		                                    <a href="javascript:void(0)" data-dex="5"><i></i>授权</a>
		                            </div>
		                            <div className="swiper-container main-container swiper-container-horizontal">
		                                <div className="swiper-wrapper">
		                                    <div className="swiper-slide swiper-slide-active" style={{width: "271px"}}>
		                                        <div className="swiper-container sub-container sub-container-1 swiper-container-horizontal">
		                                            
		                                    
														    <div className="swiper-slide swiper-slide-active" style={{width: "271px"}}><h3><img src="https://activity.duoying.com/SpecialMobile/PingAnSpecial/images/img-1.png" /></h3></div>
														    <div className="swiper-slide swiper-slide-active" style={{width: "271px"}}><h3><img src="https://activity.duoying.com/SpecialMobile/PingAnSpecial/images/img-1.png" /></h3></div>
								
		                                        
		                                            <div className="swiper-text">进入官网www.duoying.com---点击右上角“注册有礼”---输入正确手机号、设置密码---确认提交</div>
		                                      
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		)
	}
}

export default Xbuilding;
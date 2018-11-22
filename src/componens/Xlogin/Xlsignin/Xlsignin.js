import React, {
	Component
} from "react";
// css
import $ from 'jquery';
import "./Xlsignin.css";

class Xlsignin extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
            
		}
    }
    pulldown(){
        console.log("222")
        $(function() {
            $('.module-rule').each(function() {
                var $this = $(this);
                $this.toggleClass('hide');
            });
        })
    }
	render() {
		return(
            <div className="mall-container bg-black">
			<div className="mall-banner banner-1"></div>
			<div className="mall-box box-3 sign-in">
				<p><span className="white">每天签到送40赢币</span></p>
				<p>连续签到满7天额外获得<big>500</big>赢币</p>
				<a className="box-btn btn-3" id="signIn" href="javascript:void(0);">立即签到<i className="arrow arrow-1"></i></a>
			</div>
			<div className="mall-module">
				<h3 className="module-title title-2">我的等级</h3>
				<div className="module-container">
					<div className="module-chart">
						<svg id="rankChart" viewBox="0 0 690 428">
							<desc>Created with Snap</desc>
							<defs></defs>
							<circle cx="15.182170858979225" cy="403.1761581838131" r="21.89" fill="#e9d08a" stroke="#d89c6a" style={{strokeWidth: "3", opacity:"0.4055"}}></circle>
							<circle cx="15.182170858979225" cy="403.1761581838131" r="10" fill="#f4d18f" stroke="#d89c6a" style={{strokeWidth: "3"}}></circle>
							<path d="M8.2,403.5c27.6,0,96.8-19.6,96.8-19.6L200,350.6L295.7,309.1L391.1,260.1L486.5,195.6L583.5,107.5L673.1,13.7" fill="none"></path>
						</svg>
						<ul className="chart-list">
							<li data-index="1" data-type="copper" className="active">
								<span>青铜<br />会员</span>
								
								<div className="chart-box">
									<p>您当前待收本金：<b>0.00</b>元</p>
									<p>您当前等级：<b>青铜会员</b></p>
								</div>
							</li>
							<li data-index="2" data-type="silver">
								<span>白银<br />会员</span>
							</li>
							<li data-index="3" data-type="gold">
								
								<span>黄金<br />会员</span>
							</li>
							<li data-index="4" data-type="platinum">
								<span>铂金<br />会员</span>
							</li>
							<li data-index="5" data-type="diamond">
								<span>钻石<br />会员</span>
							</li>
							<li data-index="6" data-type="wheat">
								<span>金穗<br />会员</span>
							</li>
							<li data-index="7" data-type="wheat-high">
								<span>金穗<br />V+</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="mall-module active" data-index="1" data-welfare="copper">
				<h3 className="module-title title-2">青铜会员特权</h3>
				<div className="module-container">
					<div className="module-board">
						<div className="board-top">
							<div className="board-group">
								<div className="board-item">
									<i className="welfare welfare-1 active"></i>
									<p>红包月月领</p>
								</div>
								<div className="board-item">
									<i className="welfare welfare-3"></i>
									<p>生日福利<span className="birthday"></span></p>
								</div>
								<div className="board-item">
									<i className="welfare welfare-2"></i>
									<p>升级奖励<span className="upgrade"></span></p>
								</div>
							</div>
							<div className="board-group">
								<div className="board-item">
									<i className="welfare welfare-4"></i>
									<p>贵族节日礼包</p>
								</div>
								<div className="board-item">
									<i className="welfare welfare-5"></i>
									<p>高端增值服务</p>
								</div>
								<div className="board-item">
									<i className="welfare welfare-6"></i>
									<p>特定活动交通报销</p>
								</div>
							</div>
						</div>
						<div className="board-bottom">
							<a className="board-btn btn-1" href="https://m.duoying.com/Credit/ProjectList">我要升级</a>
						
						</div>
					</div>
				</div>
			</div>
			<div className="mall-module" data-index="2" data-welfare="silver">
				<h3 className="module-title title-2">白银会员特权</h3>
				<div className="module-container">
					<div className="module-board">
						<div className="board-top">
							<div className="board-group">
								<div className="board-item">
									<i className="welfare welfare-1 active"></i>
									<p>红包月月领</p>
								</div>
								<div className="board-item">
									<i className="welfare welfare-3 active"></i>
									<p>生日福利<span className="birthday"></span></p>
								</div>
								<div className="board-item">
									<i className="welfare welfare-2 active"></i>
									<p>升级奖励<span className="upgrade"></span></p>
								</div>
							</div>
							<div className="board-group">
								<div className="board-item">
									<i className="welfare welfare-4"></i>
									<p>贵族节日礼包</p>
								</div>
								<div className="board-item">
									<i className="welfare welfare-5"></i>
									<p>高端增值服务</p>
								</div>
								<div className="board-item">
									<i className="welfare welfare-6"></i>
									<p>特定活动交通报销</p>
								</div>
							</div>
						</div>
						<div className="board-bottom">
							<a className="board-btn btn-1" href="https://m.duoying.com/Credit/ProjectList">我要升级</a>
						
						</div>
					</div>
				</div>
			</div>
			<div className="mall-module" data-index="3" data-welfare="gold">
				<h3 className="module-title title-2">黄金会员特权</h3>
				<div className="module-container">
					<div className="module-board">
						<div className="board-top">
							<div className="board-group">
								<div className="board-item">
									<i className="welfare welfare-1 active"></i>
									<p>红包月月领</p>
								</div>
								<div className="board-item">
									<i className="welfare welfare-3 active"></i>
									<p>生日福利<span className="birthday"></span></p>
								</div>
								<div className="board-item">
									<i className="welfare welfare-2 active"></i>
									<p>升级奖励<span className="upgrade"></span></p>
								</div>
							</div>
							<div className="board-group">
								<div className="board-item">
									<i className="welfare welfare-4"></i>
									<p>贵族节日礼包</p>
								</div>
								<div className="board-item">
									<i className="welfare welfare-5"></i>
									<p>高端增值服务</p>
								</div>
								<div className="board-item">
									<i className="welfare welfare-6"></i>
									<p>特定活动交通报销</p>
								</div>
							</div>
						</div>
						<div className="board-bottom">
							<a className="board-btn btn-1" href="https://m.duoying.com/Credit/ProjectList">我要升级</a>
							
						</div>
					</div>
				</div>
			</div>
			<div className="mall-module" data-index="4" data-welfare="platinum">
				<h3 className="module-title title-2">铂金会员特权</h3>
				<div className="module-container">
					<div className="module-board">
						<div className="board-top">
							<div className="board-group">
								<div className="board-item">
									<i className="welfare welfare-1 active"></i>
									<p>红包月月领</p>
								</div>
								<div className="board-item">
									<i className="welfare welfare-3 active"></i>
									<p>生日福利<span className="birthday"></span></p>
								</div>
								<div className="board-item">
									<i className="welfare welfare-2 active"></i>
									<p>升级奖励<span className="upgrade"></span></p>
								</div>
							</div>
							<div className="board-group">
								<div className="board-item">
									<i className="welfare welfare-4"></i>
									<p>贵族节日礼包</p>
								</div>
								<div className="board-item">
									<i className="welfare welfare-5"></i>
									<p>高端增值服务</p>
								</div>
								<div className="board-item">
									<i className="welfare welfare-6"></i>
									<p>特定活动交通报销</p>
								</div>
							</div>
						</div>
						<div className="board-bottom">
							<a className="board-btn btn-1" href="https://m.duoying.com/Credit/ProjectList">我要升级</a>
							
						</div>
					</div>
				</div>
			</div>
			<div className="mall-module" data-index="5" data-welfare="diamond">
				<h3 className="module-title title-2">钻石会员特权</h3>
				<div className="module-container">
					<div className="module-board">
						<div className="board-top">
							<div className="board-group">
								<div className="board-item">
									<i className="welfare welfare-1 active"></i>
									<p>红包月月领</p>
								</div>
								<div className="board-item">
									<i className="welfare welfare-3 active"></i>
									<p>生日福利<span className="birthday"></span></p>
								</div>
								<div className="board-item">
									<i className="welfare welfare-2 active"></i>
									<p>升级奖励<span className="upgrade"></span></p>
								</div>
							</div>
							<div className="board-group">
								<div className="board-item">
									<i className="welfare welfare-4 active"></i>
									<p>贵族节日礼包</p>
								</div>
								<div className="board-item">
									<i className="welfare welfare-5"></i>
									<p>高端增值服务</p>
								</div>
								<div className="board-item">
									<i className="welfare welfare-6"></i>
									<p>特定活动交通报销</p>
								</div>
							</div>
						</div>
						<div className="board-bottom">
							<a className="board-btn btn-1" href="https://m.duoying.com/Credit/ProjectList">我要升级</a>
							
						</div>
					</div>
				</div>
			</div>
			<div className="mall-module" data-index="6" data-welfare="wheat">
				<h3 className="module-title title-2">金穗会员特权</h3>
				<div className="module-container">
					<div className="module-board">
						<div className="board-top">
							<div className="board-group">
								<div className="board-item">
									<i className="welfare welfare-1 active"></i>
									<p>红包月月领</p>
								</div>
								<div className="board-item">
									<i className="welfare welfare-3 active"></i>
									<p>生日福利<span className="birthday"></span></p>
								</div>
								<div className="board-item">
									<i className="welfare welfare-2 active"></i>
									<p>升级奖励<span className="upgrade"></span></p>
								</div>
							</div>
							<div className="board-group">
								<div className="board-item">
									<i className="welfare welfare-4 active"></i>
									<p>贵族节日礼包</p>
								</div>
								<div className="board-item">
									<i className="welfare welfare-5 active"></i>
									<p>高端增值服务</p>
								</div>
								<div className="board-item">
									<i className="welfare welfare-6"></i>
									<p>特定活动交通报销</p>
								</div>
							</div>
						</div>
						<div className="board-bottom">
							<a className="board-btn btn-1" href="https://m.duoying.com/Credit/ProjectList">我要升级</a>
							
						</div>
					</div>
				</div>
			</div>
			<div className="mall-module" data-index="7" data-welfare="wheat-high">
				<h3 className="module-title title-2">金穗V+特权</h3>
				<div className="module-container">
					<div className="module-board">
						<div className="board-top">
							<div className="board-group">
								<div className="board-item">
									<i className="welfare welfare-1 active"></i>
									<p>红包月月领</p>
								</div>
								<div className="board-item">
									<i className="welfare welfare-3 active"></i>
									<p>生日福利<span className="birthday"></span></p>
								</div>
								<div className="board-item">
									<i className="welfare welfare-2 active"></i>
									<p>升级奖励<span className="upgrade"></span></p>
								</div>
							</div>
							<div className="board-group">
								<div className="board-item">
									<i className="welfare welfare-4 active"></i>
									<p>贵族节日礼包</p>
								</div>
								<div className="board-item">
									<i className="welfare welfare-5 active"></i>
									<p>高端增值服务</p>
								</div>
								<div className="board-item">
									<i className="welfare welfare-6 active"></i>
									<p>特定活动交通报销<br />（提前联系客服）</p>
								</div>
							</div>
						</div>
						<div className="board-bottom">
							<a className="board-btn btn-1" href="https://m.duoying.com/Credit/ProjectList">我要升级</a>
							
						</div>
					</div>
				</div>
			</div>
			<div className="mall-module">
				<h3 className="module-title title-2">会员等级规则</h3>
				<div className="module-rule hide">
					<ul className="rule-list">
						<li>1. 多赢普惠根据用户的当前待收本金实时更新并确定会员等级；用户可登录“我的账户”查看当前待收本金。</li>
						<li>2. 会员等级自降级之日起30天内为保护期，若30天后待收本金未达到当前所属会员等级标准，则会员等级于次日下降。</li>
						<li>3. 生日福利于会员生日当天09:00自动发放（生日以实名认证的身份证号为准）。对应的生日福利以当日09:00的会员等级为准。生日福利红包券有效期为1个月；相关卡券使用方法详见
							<a href="https://m.duoying.com/Article/ArticleDetails?Id=9645&amp;device=h5&amp;tokenapp=">【红包券、返利券说明】</a>。</li>
						<li>4. 节日福利于节日前发放，节日福利包含端午节、中秋节、春节福利，具体福利敬请期待。</li>
						<li>5. 升级福利以2017年10月18日当天的自有会员等级为基准，首次升级则获得对应升级奖励，升级红包券限出借3个月及以上标的，有效期30天。</li>
						<li>
							6. 高端增值服务包含：金穗专享约标、专属理财规划师、麦田俱乐部VIP服务,详见
							<a href="https://m.duoying.com/Article/ArticleDetails?Id=9042&amp;device=h5&amp;tokenapp=">【金穗专享福利】</a>

						</li>
						<li>7. 金穗V+会员享有每年一次线下活动交通费用全额报销，最高限2000元。</li>
					</ul>
					<div className="pull-down" onClick={this.pulldown.bind(this)}></div>
				</div>
			</div>
			<div className="mall-module" id="getPack">
				<h3 className="module-title title-2" id="title2">红包好礼月月领</h3>
				<div className="module-text">
					<p>您的会员等级为 <span style={{color: "#f44336"}}>青铜会员</span></p>
					<p>您可以领取 <span id="klqPackCount" style={{color: "#f44336"}}>1</span> 个卡券，剩余可领取 <span id="syPackCount" style={{color: "#f44336"}}>1</span> 个卡券</p>
				</div>
				<div className="module-container" id="container">

					<div className="mall-ticket ticket-2 ">
						<div className="ticket-preview" style={{backgroundImage: "url(&#39;https://file.duoying.com:8092//PublicMobile/images/mall/ticket-2.png&#39;)"}}>
							<span className="preview-num black"><big>0.3</big>%返利券</span>
							<span>期限≥3月 </span>

						</div>
						<div className="ticket-options">

							<a className="ticket-btn receive disabled" href="javascript:void(0);" data-id="179" data-type="interest" data-name="&lt;big&gt;0.3&lt;/big&gt;%返利券" data-tip="" data-text="使用条件：期限≥3月|激活金额：  无限制 |有效期限：兑换后11天内有效" data-receive="false" data-img="https://file.duoying.com:8092//PublicMobile/images/mall/ticket-2.png" data-limit="">立即领取</a>

						</div>
					</div>

					<div className="mall-ticket ticket-2 ">
						<div className="ticket-preview" style={{backgroundImage: "url(&#39;https://file.duoying.com:8092//PublicMobile/images/mall/ticket-2.png&#39;)"}}>
							<span className="preview-num black"><big>0.5</big>%返利券</span>
							<span>期限≥6月 </span>

						</div>
						<div className="ticket-options">

							<a className="ticket-btn receive disabled" href="javascript:void(0);" data-id="180" data-type="interest" data-name="&lt;big&gt;0.5&lt;/big&gt;%返利券" data-tip="" data-text="使用条件：期限≥6月|激活金额：  无限制 |有效期限：兑换后11天内有效" data-receive="false" data-img="https://file.duoying.com:8092//PublicMobile/images/mall/ticket-2.png" data-limit="">立即领取</a>

						</div>
					</div>

					<div className="mall-ticket ticket-2 ">
						<div className="ticket-preview" style={{backgroundImage: "url(&#39;https://file.duoying.com:8092//PublicMobile/images/mall/ticket-2.png&#39;)"}}>
							<span className="preview-num black"><big>0.6</big>%返利券</span>
							<span>期限≥12月 </span>

						</div>
						<div className="ticket-options">

							<a className="ticket-btn receive disabled" href="javascript:void(0);" data-id="181" data-type="interest" data-name="&lt;big&gt;0.6&lt;/big&gt;%返利券" data-tip="" data-text="使用条件：期限≥12月|激活金额：  无限制 |有效期限：兑换后11天内有效" data-receive="false" data-img="https://file.duoying.com:8092//PublicMobile/images/mall/ticket-2.png" data-limit="">立即领取</a>

						</div>
					</div>

					<div className="mall-ticket ticket-2 ">
						<div className="ticket-preview" style={{backgroundImage: "url(&#39;https://file.duoying.com:8092//PublicMobile/images/mall/ticket.png&#39;)"}}>
							<span className="preview-num "><big>5</big>元红包券</span>
							<span>期限≥3月 </span>

						</div>
						<div className="ticket-options">

							<a className="ticket-btn receive disabled" href="javascript:void(0);" data-id="182" data-type="packet" data-name="&lt;big&gt;5&lt;/big&gt;元红包券" data-tip="" data-text="使用条件：期限≥3月|激活金额：   出借1000元及以上 |有效期限：兑换后11天内有效" data-receive="false" data-img="https://file.duoying.com:8092//PublicMobile/images/mall/ticket.png" data-limit="">立即领取</a>

						</div>
					</div>

					<div className="mall-ticket ticket-2 ">
						<div className="ticket-preview" style={{backgroundImage: "url(&#39;https://file.duoying.com:8092//PublicMobile/images/mall/ticket.png&#39;)"}}>
							<span className="preview-num "><big>10</big>元红包券</span>
							<span>期限≥6月 </span>

						</div>
						<div className="ticket-options">

							<a className="ticket-btn receive disabled" href="javascript:void(0);" data-id="183" data-type="packet" data-name="&lt;big&gt;10&lt;/big&gt;元红包券" data-tip="" data-text="使用条件：期限≥6月|激活金额：   出借2000元及以上 |有效期限：兑换后11天内有效" data-receive="false" data-img="https://file.duoying.com:8092//PublicMobile/images/mall/ticket.png" data-limit="">立即领取</a>

						</div>
					</div>

					<div className="mall-ticket ticket-2 ">
						<div className="ticket-preview" style={{backgroundImage: "url(&#39;https://file.duoying.com:8092//PublicMobile/images/mall/ticket.png&#39;)"}}>
							<span className="preview-num "><big>18</big>元红包券</span>
							<span>期限≥6月 </span>

						</div>
						<div className="ticket-options">

							<a className="ticket-btn receive disabled" href="javascript:void(0);" data-id="184" data-type="packet" data-name="&lt;big&gt;18&lt;/big&gt;元红包券" data-tip="" data-text="使用条件：期限≥6月|激活金额：   出借3600元及以上 |有效期限：兑换后11天内有效" data-receive="false" data-img="https://file.duoying.com:8092//PublicMobile/images/mall/ticket.png" data-limit="">立即领取</a>

						</div>
					</div>

					<div className="mall-ticket ticket-2 gold">
						<div className="ticket-preview" style={{backgroundImage: "url(&#39;https://file.duoying.com:8092//PublicMobile/images/mall/ticket.png&#39;)"}}>
							<span className="preview-num "><big>28</big>元红包券</span>
							<span>期限≥6月 </span>

						</div>
						<div className="ticket-options">

							<a className="ticket-btn receive disabled" href="javascript:void(0);" data-id="185" data-type="packet" data-name="&lt;big&gt;28&lt;/big&gt;元红包券" data-tip="" data-text="使用条件：期限≥6月|激活金额：   出借5600元及以上 |有效期限：兑换后11天内有效" data-receive="false" data-img="https://file.duoying.com:8092//PublicMobile/images/mall/ticket.png" data-limit="gold">立即领取</a>

						</div>
					</div>

					<div className="mall-ticket ticket-2 platina">
						<div className="ticket-preview" style={{backgroundImage: "url(&#39;https://file.duoying.com:8092//PublicMobile/images/mall/ticket.png&#39;)"}}>
							<span className="preview-num "><big>36</big>元红包券</span>
							<span>期限≥6月 </span>

						</div>
						<div className="ticket-options">

							<a className="ticket-btn receive disabled" href="javascript:void(0);" data-id="186" data-type="packet" data-name="&lt;big&gt;36&lt;/big&gt;元红包券" data-tip="" data-text="使用条件：期限≥6月|激活金额：   出借7200元及以上 |有效期限：兑换后11天内有效" data-receive="false" data-img="https://file.duoying.com:8092//PublicMobile/images/mall/ticket.png" data-limit="platina">立即领取</a>

						</div>
					</div>

					<div className="mall-ticket ticket-2 wheat">
						<div className="ticket-preview" style={{backgroundImage: "url(&#39;https://file.duoying.com:8092//PublicMobile/images/mall/ticket.png&#39;)"}}>
							<span className="preview-num "><big>68</big>元红包券</span>
							<span>期限≥6月 </span>

						</div>
						<div className="ticket-options">

							<a className="ticket-btn receive disabled" href="javascript:void(0);" data-id="187" data-type="packet" data-name="&lt;big&gt;68&lt;/big&gt;元红包券" data-tip="" data-text="使用条件：期限≥6月|激活金额：   出借13600元及以上 |有效期限：兑换后11天内有效" data-receive="false" data-img="https://file.duoying.com:8092//PublicMobile/images/mall/ticket.png" data-limit="wheat">立即领取</a>

						</div>
					</div>
				</div>
				<div className="module-rule">
					<div className="rule-title">领取说明：</div>
					<ul className="rule-list">
						<li>1.仅限每月19日当日领取礼包，每种卡券最多领取一个。</li>
						<li>2. 青铜/白银会员可按照条件领取1个红包、黄金/铂金会员可领取2个红包、钻石/金穗会员可领取3个红包，金穗V+可领取4个红包。</li>
					</ul>
				</div>
			</div>
		</div>
		)
	}
}

export default Xlsignin;
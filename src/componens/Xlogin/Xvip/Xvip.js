import React, {
    Component
} from "react";
// css
import "./Xvip.css";
class Xvip extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {

        }
    }
    render() {
        return(
            <div className="mall-container">
                <div className="mall-banner banner-2"></div>
                <div className="mall-box box-1">
                    <div className="box-inner">
                        <p><a href="/Mall/MyCoin?device=h5&amp;tokenapp=">我的赢币：90 <i className="arrow arrow-1"></i></a></p>
                        <a className="box-btn btn-1" id="tipBtn" href="javascript:void(0);">获取更多赢币<i className="arrow arrow-2"></i></a>
                    </div>
                </div>
                <div className="mall-box box-2">
                    <div className="box-inner">
                        <p>500赢币即有机会赢得50元红包券等大奖</p>
                        <a className="box-btn btn-2" href="/Mall/Lottery?device=h5&amp;tokenapp=">立即参与抽奖</a>
                    </div>
                </div>
                <div className="mall-module">
                    <h3 className="module-title"><i className="crown"></i>精品兑换</h3>
                    <div className="module-container">
                                <div className="mall-ticket ">
                                    <a className="ticket-link" href="/Mall/TicketDetail?Id=28&amp;device=h5&amp;tokenapp="></a>
                                    <div className="ticket-preview" style={{backgroundImage: "url(http://file.duoying.com:8091/AbFile/MallPlupload/20180103/1a5df718_20180103174742_8574.png)"}}>红色麦仔（新年限量款）</div>
                                    <div className="ticket-text" data-price="68000">68000赢币</div>
                                </div>
                                <div className="mall-ticket ">
                                    <a className="ticket-link" href="/Mall/TicketDetail?Id=9&amp;device=h5&amp;tokenapp="></a>
                                    <div className="ticket-preview" style={{backgroundImage: "url(http://file.duoying.com:8091/AbFile/MallPlupload/20171018/-b913-ef63855c767a_20171018194346_0128.png)"}}>5元红包券</div>
                                    <div className="ticket-text" data-price="5000">5000赢币</div>
                                </div>
                                <div className="mall-ticket ">
                                    <a className="ticket-link" href="/Mall/TicketDetail?Id=10&amp;device=h5&amp;tokenapp="></a>
                                    <div className="ticket-preview" style={{backgroundImage: "url(http://file.duoying.com:8091/AbFile/MallPlupload/20171018/0-2dab-44a4-8cc0-df16ac2d5be4_20171018194431_3253.png)"}}>10元红包券</div>
                                    <div className="ticket-text" data-price="9800">9800赢币</div>
                                </div>
                                <div className="mall-ticket ">
                                    <a className="ticket-link" href="/Mall/TicketDetail?Id=11&amp;device=h5&amp;tokenapp="></a>
                                    <div className="ticket-preview" style={{backgroundImage: "url(http://file.duoying.com:8091/AbFile/MallPlupload/20171018/-b982-aada4e080745_20171018194548_1064.png)"}}>20元红包券</div>
                                    <div className="ticket-text" data-price="19400">19400赢币</div>
                                </div>
                                <div className="mall-ticket ">
                                    <a className="ticket-link" href="/Mall/TicketDetail?Id=12&amp;device=h5&amp;tokenapp="></a>
                                    <div className="ticket-preview" style={{backgroundImage: "url(http://file.duoying.com:8091/AbFile/MallPlupload/20171018/93-a4bc-2174f33fc9bf_20171018194640_8557.png)"}}>50元红包券</div>
                                    <div className="ticket-text" data-price="47500">47500赢币</div>
                                </div>
                                <div className="mall-ticket ">
                                    <a className="ticket-link" href="/Mall/TicketDetail?Id=13&amp;device=h5&amp;tokenapp="></a>
                                    <div className="ticket-preview" style={{backgroundImage: "url(http://file.duoying.com:8091/AbFile/MallPlupload/20181018/4-e6ed-446d-beca-5ffb8a0ee0fe_20181018203805_3527.png)"}}>0.1%返利券</div>
                                    <div className="ticket-text" data-price="25000">25000赢币</div>
                                </div>
                                <div className="mall-ticket ">
                                    <a className="ticket-link" href="/Mall/TicketDetail?Id=14&amp;device=h5&amp;tokenapp="></a>
                                    <div className="ticket-preview" style={{backgroundImage: "url(http://file.duoying.com:8091/AbFile/MallPlupload/20181018/aa7aa-f264-4364-a87c-2566fdc0cc3c_20181018204822_2237.png)"}}>0.5%返利券</div>
                                    <div className="ticket-text" data-price="120000">120000赢币</div>
                                </div>
                                <div className="mall-ticket ">
                                    <a className="ticket-link" href="/Mall/TicketDetail?Id=15&amp;device=h5&amp;tokenapp="></a>
                                    <div className="ticket-preview" style={{backgroundImage: "url(http://file.duoying.com:8091/AbFile/MallPlupload/20181018/c1a044-8c2d-43d4-b812-3680bfc93d6c_20181018203513_1663.png)"}}>1%返利券</div>
                                    <div className="ticket-text" data-price="235000">235000赢币</div>
                                </div>
                                <div className="mall-ticket gold">
                                    <a className="ticket-link" href="/Mall/TicketDetail?Id=16&amp;device=h5&amp;tokenapp="></a>
                                    <div className="ticket-preview" style={{backgroundImage: "url(http://file.duoying.com:8091/AbFile/MallPlupload/20171018/733304e-b721-47f8-a58b-5c977af3c415_20171018223919_6630.png)"}}>30元话费</div>
                                    <div className="ticket-text" data-price="39999">39999赢币</div>
                                </div>
                                <div className="mall-ticket gold">
                                    <a className="ticket-link" href="/Mall/TicketDetail?Id=17&amp;device=h5&amp;tokenapp="></a>
                                    <div className="ticket-preview" style={{backgroundImage: "url(http://file.duoying.com:8091/AbFile/MallPlupload/20171018/ceb-4a61-96cc-7a438b30dbf7_20171018223909_2412.png)"}}>50元京东购物卡</div>
                                    <div className="ticket-text" data-price="59999">59999赢币</div>
                                </div>
                                <div className="mall-ticket gold">
                                    <a className="ticket-link" href="/Mall/TicketDetail?Id=18&amp;device=h5&amp;tokenapp="></a>
                                    <div className="ticket-preview" style={{backgroundImage: "url(http://file.duoying.com:8091/AbFile/MallPlupload/20171018/8-4331-abaf-f5fa11ffd95b_20171018223857_8505.png)"}}>100元京东购物卡</div>
                                    <div className="ticket-text" data-price="119999">119999赢币</div>
                                </div>
                                <div className="mall-ticket ">
                                    <a className="ticket-link" href="/Mall/TicketDetail?Id=19&amp;device=h5&amp;tokenapp="></a>
                                    <div className="ticket-preview" style={{backgroundImage: "url(http://file.duoying.com:8091/AbFile/MallPlupload/20171018/31624795_20171018223849_1279.png)"}}>指触LED子母化妆镜</div>
                                    <div className="ticket-text" data-price="109000">109000赢币</div>
                                </div>
                                <div className="mall-ticket ">
                                    <a className="ticket-link" href="/Mall/TicketDetail?Id=20&amp;device=h5&amp;tokenapp="></a>
                                    <div className="ticket-preview" style={{backgroundImage: "url(http://file.duoying.com:8091/AbFile/MallPlupload/20171018/8d-20d1-44d2-8b02-3a0e8048577e_20171018223838_4404.png)"}}>不锈钢砂光保温饭盒</div>
                                    <div className="ticket-text" data-price="169000">169000赢币</div>
                                </div>
                                <div className="mall-ticket ">
                                    <a className="ticket-link" href="/Mall/TicketDetail?Id=21&amp;device=h5&amp;tokenapp="></a>
                                    <div className="ticket-preview" style={{backgroundImage: "url(http://file.duoying.com:8091/AbFile/MallPlupload/20171018/-9d23-2c38d9388073_20171018223825_5029.png)"}}>100年传世珐琅锅</div>
                                    <div className="ticket-text" data-price="268000">268000赢币</div>
                                </div>
                                <div className="mall-ticket ">
                                    <a className="ticket-link" href="/Mall/TicketDetail?Id=22&amp;device=h5&amp;tokenapp="></a>
                                    <div className="ticket-preview" style={{backgroundImage: "url(http://file.duoying.com:8091/AbFile/MallPlupload/20171018/ea-e183-4666-9cf1-da3aaa6baa6c_20171018223814_9326.png)"}}>儿童游戏帐篷组合装</div>
                                    <div className="ticket-text" data-price="399000">399000赢币</div>
                                </div>
                                <div className="mall-ticket ">
                                    <a className="ticket-link" href="/Mall/TicketDetail?Id=23&amp;device=h5&amp;tokenapp="></a>
                                    <div className="ticket-preview" style={{backgroundImage: "url(http://file.duoying.com:8091/AbFile/MallPlupload/20171018/5025-49e3-a737-d7289ec27623_20171018223801_8701.png)"}}>澳洲纯羊毛盖毯</div>
                                    <div className="ticket-text" data-price="399000">399000赢币</div>
                                </div>
                                <div className="mall-ticket ">
                                    <a className="ticket-link" href="/Mall/TicketDetail?Id=24&amp;device=h5&amp;tokenapp="></a>
                                    <div className="ticket-preview" style={{backgroundImage: "url(http://file.duoying.com:8091/AbFile/MallPlupload/20171018/7-4931-8a6d-ade0309245c7_20171018223748_8544.png)"}}>空气净化器</div>
                                    <div className="ticket-text" data-price="999000">999000赢币</div>
                                </div>
                                <div className="mall-ticket ">
                                    <a className="ticket-link" href="/Mall/TicketDetail?Id=25&amp;device=h5&amp;tokenapp="></a>
                                    <div className="ticket-preview" style={{backgroundImage: "url(http://file.duoying.com:8091/AbFile/MallPlupload/20171018/4038-b831-6b10a492cb87_20171018223739_4511.png)"}}>智能扫地机器人</div>
                                    <div className="ticket-text" data-price="2500000">2500000赢币</div>
                                </div>
                                <div className="mall-ticket wheat">
                                    <a className="ticket-link" href="/Mall/TicketDetail?Id=26&amp;device=h5&amp;tokenapp="></a>
                                    <div className="ticket-preview" style={{backgroundImage: "url(http://file.duoying.com:8091/AbFile/MallPlupload/20171018/946512c0b_20171018223729_4355.png)"}}>iPhone 8 64G</div>
                                    <div className="ticket-text" data-price="5888000">5888000赢币</div>
                                </div>
                                <div className="mall-ticket wheat">
                                    <a className="ticket-link" href="/Mall/TicketDetail?Id=27&amp;device=h5&amp;tokenapp="></a>
                                    <div className="ticket-preview" style={{backgroundImage: "url(http://file.duoying.com:8091/AbFile/MallPlupload/20171018/-47ac-8a78-5ec229ca21c5_20171018223714_7011.png)"}}>iPhone X 64G</div>
                                    <div className="ticket-text" data-price="8388000">8388000赢币</div>
                                </div>
                    </div>
                    

            <div id="flickrpager" className="pagination">
                <div className="dy-paging-list">
                        <ul className="dy-paging-list">
                                <li className="dy-prev dy-disabled"><a href="?pageIndex=1&amp;device=h5">首页</a></li>
                            <li className="dy-prev"><a href="?pageIndex=1&amp;device=h5">上一页</a></li>
                                                    <li className="active"><a href="javascript:void(0);">1</a></li>
                                            <li className="dy-next"><a href="?pageIndex=1&amp;device=h5">下一页</a></li>
                            <li className="dy-next"><a href="?pageIndex=1&amp;device=h5">尾页</a> </li>
                        </ul>
                </div>
            </div>

                </div>
            </div>
        )
    }
}

export default Xvip;
import React, {
    Component
} from "react";

import "./XProjectDetail.css";
import $ from 'jquery';
import XProject from './XProject.js';
import XProjecttop from './XProjecttop/XProjecttop.js';
import { Link} from "react-router-dom";
class XProjectDetail extends Component {
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
            <div className="tabs">
                <XProjecttop />
                <div className="tab-content bg-white dy-project-info">
                    <div className="tab-pane padding active" id="tab1Id">
                        <table className="dy-table">
                            <tbody>
                            </tbody>
                        </table>
                                <div className="dy-box-item dy-pdt0">
                                    <div className="dy-box-title">借款人信息：</div>
                                    <p>借款人:叶**</p>
                                    <p>证件号:4413**********2110</p>   
                                    <p>借款人性质:个人</p>
                                </div>
                            <div className="dy-box-item">
                                <div className="dy-box-title">借款类型：</div>
                                <p>抵押借款（车抵贷）（客户总借款￥59565元）</p>
                            </div>
                            <div className="dy-box-item">
                                <div className="dy-box-title">发标详情：</div>
                                <p><i className="icon meony"></i>借款金额：￥59,565.00</p>
                                <p><i className="icon accrual"></i>参考年回报率：9.00% </p>
                                <p><i className="icon date"></i>发标期限：3月</p>
                                <p><i className="icon pattern"></i>还款方式：按月付息</p>
                            </div>
                            <div className="dy-box-item">
                                <div className="dy-box-title">企业/个人慨况：</div>
                                <p>叶先生,大专学历,广东惠州人,现居住于惠州惠阳区, 现从事制造行业，月收入3万元左右，借款人征信良好、收入稳定,借款人当前无负债。</p>
                            </div>
                            <div className="dy-box-item">
                                <div className="dy-box-title">征信报告：</div>
                                <p>见资质认证内容</p>
                            </div>
                            <div className="dy-box-item">
                                <div className="dy-box-title">借款用途：</div>
                                <p>现因购买物件申请借款￥59565.00元</p>
                            </div>
                            <div className="dy-box-item">
                                <div className="dy-box-title">还款来源： </div>
                                <p>以经营收入作为还款来源</p>
                            </div>
                            <div className="dy-box-item">
                                <div className="dy-box-title">提前还款：</div>
                                <p>若借款人提前偿还借款，以实际用款时间据实结算利息</p>
                            </div>
                            <div className="dy-box-item">
                                <div className="dy-box-title">其他网络借贷平台借款情况：</div>
                                <p>暂无</p>
                            </div>
                                <div className="dy-box-item special">
                                    <div className="dy-box-title">未到期项目相关信息</div>
                                    <p>披露时间：2018-10-23 09:40:49</p>
                                </div>
                                <div className="dy-box-item">
                                    <div className="dy-box-title">借款资金运用情况：</div>
                                    <p>借款人收入正常，还款能力风险可控。</p>
                                </div>
                                <div className="dy-box-item">
                                    <div className="dy-box-title">借款人经营及财务状况：</div>
                                    <p>借款人财务状况正常，无特殊突发事件。</p>
                                </div>
                                <div className="dy-box-item">
                                    <div className="dy-box-title">借款人还款能力变化情况：</div>
                                    <p>借款人收入正常，还款能力风险可控。</p>
                                </div>
                                <div className="dy-box-item">
                                    <div className="dy-box-title">借款人逾期情况：</div>
                                    <p>借款人无新增逾期记录。</p>
                                </div>
                                <div className="dy-box-item">
                                    <div className="dy-box-title">借款人涉诉情况：</div>
                                    <p>借款人无新增涉诉</p>
                                </div>
                                <div className="dy-box-item">
                                    <div className="dy-box-title">借款人受行政处罚情况：</div>
                                    <p>借款人无受行政处罚情况。</p>
                                </div>
                                <div className="dy-box-item">
                                    <div className="dy-box-title">其他重大情况：</div>
                                    <p>无。</p>
                                </div>
                    </div>
                        <div className="tab-pane padding" id="tab2Id">
                           
                                <div className="dy-box-item dy-pdt0">
                                    <div className="dy-box-title">担保机构：</div>
                                    <p>
                                        深圳市恒创盛世融资担保有限公司                           
                                    </p>
                                </div>
                                <div className="dy-box-item">
                                    <div className="dy-box-title">保障方式：</div>
                                        <p>第三方机构代偿（一旦借款方出现逾期未还，将由第三方机构代偿本息给出借人）</p>
                                </div>
                           
                        </div>
                    <div className="tab-pane padding" id="tab3Id">
                            
                            <div className="dy-box-item dy-pdt0">
                                <div className="dy-box-title">风控师建议：</div>
                                <p>其下有一辆高尔夫牌FV7144TFATG 车，评估价格76000元车辆评估信息如下：品牌车型：高尔夫牌FV7144TFATG;里程：10.41万公里;首次登记日：2014-07-30 12:00:00;发动机排量：1.4T;评估报价：76000元;车况：中采取的保障措施有：1、其名下的车辆已经在车管所办理抵押登记;2、签署了借款合同和转让协议;3、车辆登记证、车辆备用钥匙已保存,安装了数个GPS。风险评级：低级可能产生的风险结果：因借贷项目会受到市场、政策、法律等各种因素的影响，可能会面临多重风险（包括但不限于政策风险、市场风险、信用风险、技术风险、提前终止风险、信息风险、信息传递风险、不可抗力风险、操作风险、退出风险等。）存在造成损失的不确定性。</p>
                            </div>
                                <div className="dy-box-item">
                                    <div className="dy-box-title">车辆评估信息：</div>
                                    <dl>
                                        <dt>品牌车型：</dt>
                                        <dd>高尔夫牌FV7144TFATG&nbsp;</dd>
                                        <dt>里程：</dt>
                                        <dd>10.41万 &nbsp;</dd>
                                        <dt>首次登记时间：</dt>
                                        <dd>2014-07-30 12:00:00&nbsp;</dd>
                                        <dt>发动机排量：</dt>
                                        <dd>1.4T&nbsp;</dd>
                                        <dt>评估报价：</dt>
                                        <dd>76000元&nbsp;</dd>
                                        <dt>车况：</dt>
                                        <dd>中&nbsp;</dd>
                                    </dl>
                                </div>
                            <div className="dy-box-item">
                                <div className="dy-box-title">资质认证：</div>
                                <div id="demo-test-gallery" className="dy-photo-outer" data-pswp-uid="1">
                                        <a className="dy-photo" href="https://file.duoying.com:8092/AbFile/Plupload/Original/636731358614029367be43.jpg" data-med="https://file.duoying.com:8092/AbFile/Plupload/Original/636731358614029367be43.jpg" data-size="1600x1200" data-med-size="1600x1200">
                                            <img src="https://file.duoying.com:8092/AbFile/Plupload/636731358614029367be43.jpg" alt="" />
                                        </a>
                                        <a className="dy-photo" href="https://file.duoying.com:8092/AbFile/Plupload/Original/63673135862715436722fd.jpg" data-med="https://file.duoying.com:8092/AbFile/Plupload/Original/63673135862715436722fd.jpg" data-size="1131x1600" data-med-size="1131x1600">
                                            <img src="https://file.duoying.com:8092/AbFile/Plupload/63673135862715436722fd.jpg" alt="" />
                                        </a>
                                        <a className="dy-photo" href="https://file.duoying.com:8092/AbFile/Plupload/Original/63673135864418561707e6.jpg" data-med="https://file.duoying.com:8092/AbFile/Plupload/Original/63673135864418561707e6.jpg" data-size="1200x1600" data-med-size="1200x1600">
                                            <img src="https://file.duoying.com:8092/AbFile/Plupload/63673135864418561707e6.jpg" alt="" />
                                        </a>
                                        <a className="dy-photo" href="https://file.duoying.com:8092/AbFile/Plupload/Original/6367313586482481179d34.jpg" data-med="https://file.duoying.com:8092/AbFile/Plupload/Original/6367313586482481179d34.jpg" data-size="841x598" data-med-size="841x598">
                                            <img src="https://file.duoying.com:8092/AbFile/Plupload/6367313586482481179d34.jpg" alt="" />
                                        </a>
                                        <a className="dy-photo" href="https://file.duoying.com:8092/AbFile/Plupload/Original/636731358651216867ba1f.jpg" data-med="https://file.duoying.com:8092/AbFile/Plupload/Original/636731358651216867ba1f.jpg" data-size="1131x1600" data-med-size="1131x1600">
                                            <img src="https://file.duoying.com:8092/AbFile/Plupload/636731358651216867ba1f.jpg" alt="" />
                                        </a>
                                        <a className="dy-photo" href="https://file.duoying.com:8092/AbFile/Plupload/Original/63673135865699811776e6.jpg" data-med="https://file.duoying.com:8092/AbFile/Plupload/Original/63673135865699811776e6.jpg" data-size="1131x1600" data-med-size="1131x1600">
                                            <img src="https://file.duoying.com:8092/AbFile/Plupload/63673135865699811776e6.jpg" alt="" />
                                        </a>
                                        <a className="dy-photo" href="https://file.duoying.com:8092/AbFile/Plupload/Original/6367313586623106174178.jpg" data-med="https://file.duoying.com:8092/AbFile/Plupload/Original/6367313586623106174178.jpg" data-size="1200x1600" data-med-size="1200x1600">
                                            <img src="https://file.duoying.com:8092/AbFile/Plupload/6367313586623106174178.jpg" alt="" />
                                        </a>
                                        <a className="dy-photo" href="https://file.duoying.com:8092/AbFile/Plupload/Original/6367313586674668674890.jpg" data-med="https://file.duoying.com:8092/AbFile/Plupload/Original/6367313586674668674890.jpg" data-size="1131x1600" data-med-size="1131x1600">
                                            <img src="https://file.duoying.com:8092/AbFile/Plupload/6367313586674668674890.jpg" alt="" />
                                        </a>
                                        <a className="dy-photo" href="https://file.duoying.com:8092/AbFile/Plupload/Original/636731358674185617613b.jpg" data-med="https://file.duoying.com:8092/AbFile/Plupload/Original/636731358674185617613b.jpg" data-size="1131x1600" data-med-size="1131x1600">
                                            <img src="https://file.duoying.com:8092/AbFile/Plupload/636731358674185617613b.jpg" alt="" />
                                        </a>
                                </div>
                               
                            </div>
                    </div>
                </div>
            </div>
            
            
          )
    }
}

export default XProjectDetail;
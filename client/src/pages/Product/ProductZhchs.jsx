import './Product.css'
import { Link } from 'react-router-dom';
import Product_bg from './../../components/images/Product/Product_bg.jpg'
import car_airflow from './../../components/images/Product/car_airflow.png'
import Dblock_filter from './../../components/images/Product/Dblock_filter.png'
import box1 from './../../components/images/Product/box1_activatedcarbon.png'
import box2 from './../../components/images/Product/box2_content.jpg'
import box3 from './../../components/images/Product/box3_LMF.jpg'
import box4 from './../../components/images/Product/box4_7layerstructure.jpg'
import box5 from './../../components/images/Product/box5_substitute.png'
import box6 from './../../components/images/Product/box6_Registeredcompany.jpg'
import wooridongne from './../../components/images/Product/wooridongne.png'

const Product = ()=>{
  return (
    <div className='Product'>
        <h2 className='Product_bg'><img src={ Product_bg } alt="Product_배경" />Product Lyncare希望您的生活更安全、更便捷，研究覆盖整个汽车领域的生活方式解决方案，并提供以下服务。</h2>
        <div className='Product_Wrap'>
            <div className='CabinFilter'>
                <div className='CabinFilter_1'>
                    <h3>车载空调滤芯 <span>Cabin Filter</span></h3>
                    <p> 你有想过在公路上行驶的汽车里的空气吗?<br />
                    车载空调滤芯(Cabin Filter)会经过从汽车<br />
                    外部进入的空气和内部循环的空气, <br />
                    因此只要更换一个滤芯, <br />
                    就能强力改善车辆循环的所有空气。</p>
                </div>
                <div className='CabinFilter_2'>
                    <p><img src={ car_airflow } alt="자동차공기흐름도" />자동차공기흐름도</p>
                </div>
            </div>

            <hr />

            <div className='Dblock_filter'>
                <h3>D.BLOCK车载空调滤芯 <br /><span>用高级椰壳活性炭制成的EPA11等级的Premium空调滤芯</span></h3>
                <p><img src={ Dblock_filter } alt="디블럭필터 제품사진" />디블럭필터 제품사진</p>
            </div>

            <div className='Special'>
                <h3 className='Special_Dblock'>D.BLOCK不同的理由  <span>What’s Special?</span></h3>
                <div className='Special1'>
                    <div className='Special1_1'>
                        <h3><span>不是一般的活性炭，而是高级椰壳活性炭</span></h3>
                        <p>
                        椰壳活性炭是椰子树果实中产生的一种活性炭， <br />
                         <span>其吸附能力优于普通活性炭，具有较好的除臭、净化空气的能力。<br />
                         D-Block使用了吸附力更强的高级椰壳活性炭.</span> 
                        </p>
                    </div>
                    <div className='Special1_2'>
                     <p><img src={ box1 } alt="디블럭제품 실제 야자수활성탄 들어가있는사진" />디블럭제품 실제 야자수활성탄 들어가있는사진</p>
                    </div>
                </div>
                <div className='Special2 , Special1'>
                <div className='Special1_1'>
                        <h3>每平方米椰壳活性炭含量最高可达 <span>230g</span>克！ </h3>
                        <p>
                         <span>采用与普通滤芯不同的方式，将高级椰壳树活性炭颗粒 </span> <br />
                        <span>原封不动地添加到滤芯中，最多添加4.5倍。</span>
                        </p>
                    </div>
                    <div className='Special1_2'>
                     <p><img src={ box2 } alt="야자수 활성탄 함유율 사진" />야자수 활성탄 함유율 사진</p>
                    </div>
                </div>
                <div className='Special3 , Special1'>
                <div className='Special1_1'>
                        <h3><span>降低排放有害物质的LMF工艺合纸技术</span> </h3>
                        <p>
                        在合纸过程中融化低熔点的短纤维层进行合纸的技术，<br />
                        为合纸未使用化学共价粘合剂，与现有滤芯相比， <br />
                        <span>压力损失和除臭抗菌力也更强。</span>
                        </p>
                    </div>
                    <div className='Special1_2'>
                     <p><img src={ box3 } alt="LMF공법 합지기술" />LMF공법 합지기술</p>
                    </div>
                </div>
                <div className='Special4 , Special1'>
                <div className='Special1_1'>
                        <h3><span>七重结构复式过滤设计</span> </h3>
                        <p>
                         <span>D-Block Premium滤芯在韩国首次由7重结构组成,</span><br />
                         将活性炭分为复式配置,在强力过滤恶臭、霉味、 <br />
                         <span>微尘和有害物质等的同时,确保了透气性。</span>
                        </p>
                    </div>
                    <div className='Special1_2'>
                     <p><img src={ box4 } alt="디블럭 7중필터구조" />디블럭 7중필터구조</p>
                    </div>
                </div>
                <div className='Special5 , Special1'>
                <div className='Special1_1'>
                        <h3><span>男女老少谁都可以轻松更换 </span> </h3>
                        <p>
                         <span>无需支付工钱或专家帮助，<br />
                        5분 안에 직접 교체가능합니다</span>
                        </p>
                        <Link to="/Support"><p className='Special5_link'>男女老少均可在5分钟内直接更换。&gt;</p></Link>
                       
                       
                    </div>
                    <div className='Special1_2'>
                     <p><img src={ box5 } alt="디블럭 필터교체 이미지" />디블럭 필터교체 이미지</p>
                    </div>
                </div>
                <div className='Special6 , Special1'>
                <div className='Special1_1'>
                        <h3><span>MADE IN KOREA.</span> 国家机关认证的产品</h3>
                        <p>
                        由韩国国内工厂生产，除汉阳大学产学合作单价研究外，<br />
                        被指定为调达厅及公共机关技术开发示范购买产品，<br />
                        是值得信赖的韩国产品。<br />
                        </p>
                    </div>
                    <div className='Special1_2'>
                     <p><img src={ box6 } alt="한양대 연구소기업 , 벤처창업혁신 조달상품 , 공공기관 기술개발 시범구매제품" />한양대 연구소기업 , 벤처창업혁신 조달상품 , 공공기관 기술개발 시범구매제품</p>
                    </div>
                </div>
            </div>

            <hr className='hr2' />

            <div className='Platform'>
                <h3>维修站平台 <span>Platform</span></h3>
                <p>提供全国车辆维修站信息介绍及社区服务的“我们小区维修站”<br />
                是维修站老板和职员、顾客都可以使用的车辆管理综合平台。</p>
            </div>

            <hr className='hr3' />
            
            <div className='wooridongne'>
                <h3>我们小区维修站 <br /><span>把有关汽车维修的一切都放在一起。</span></h3>
                <p><img src={ wooridongne } alt="우리동네 정비소 자동차 관리어플" />우리동네 정비소 자동차 관리어플</p>

            </div>

        </div>
    </div>
    );

}
export default Product
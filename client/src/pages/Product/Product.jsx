import './Product.css'
import { Link } from 'react-router-dom';
import Product_bg from './../../components/images/Product/Product_bg.png'
import car_airflow from './../../components/images/Product/car_airflow.png'
import Dblock_filter from './../../components/images/Product/Dblock_filter.png'
import box1 from './../../components/images/Product/box1_activatedcarbon.png'
import box2 from './../../components/images/Product/box2_content.png'
import box3 from './../../components/images/Product/box3_LMF.png'
import box4 from './../../components/images/Product/box4_7layerstructure.png'
import box5 from './../../components/images/Product/box5_substitute.png'
import box6 from './../../components/images/Product/box6_Registeredcompany.png'
import wooridongne from './../../components/images/Product/wooridongne.png'

const Product = ()=>{
  return (
    <div className='Product'>
        <h2 className='Product_bg'><img src={ Product_bg } alt="Product_배경" />Product 당신의 생활이 더욱 안전하고 편리하길 바라는 린케어는 자동차 전반에 걸친 라이프 스타일 솔루션을 연구하며
            다음과 같은 제품과 서비스를 제공합니다</h2>
        <div className='Product_Wrap'>
            <div className='CabinFilter'>
                <div className='CabinFilter_1'>
                    <h3>차량용 에어컨필터 <span>Cabin Filter</span></h3>
                    <p> 도로 위를 달리는 자동차 안 공기를 생각해본 적 있나요?<br />
                        차량용 에어컨 필터(cabin filter)는 자동차 외부에서 들어오는 공기와 내부에서 순환하는<br />
                        공기가 모두 거치게 되기 때문에 필터 하나만 바꿔도<br />
                        차량에서 순환하는 모든 공기를 강력하게 개선할 수 있습니다<br />
                        그래서 디블럭이 연구와 개발을 통해 제대로 만들었습니다.</p>
                </div>
                <div className='CabinFilter_2'>
                    <p><img src={ car_airflow } alt="자동차공기흐름도" />자동차공기흐름도</p>
                </div>
            </div>

            <hr />

            <div className='Dblock_filter'>
                <h3>DBLOCK 차량용 에어컨필터 <br /><span>고급 야자수 활성탄으로 만든 EPA11 등급의 프리미엄 에어컨필터</span></h3>
                <p><img src={ Dblock_filter } alt="디블럭필터 제품사진" />디블럭필터 제품사진</p>
            </div>

            <div className='Special'>
                <h3 className='Special_Dblock'>디블럭이 다른 이유  <span>What’s Special?</span></h3>
                <div className='Special1'>
                    <div className='Special1_1'>
                        <h3>일반활성탄이 아닌 <span>고급 야자활성탄으로</span></h3>
                        <p>
                        야자활성탄은 야자수열매에서 나오는 활성탄의 한 종류로 <br />
                        일반활성탄보다 <span>흡착력이 뛰어나 냄새제거,공기정화 능력이<br />
                        뛰어납니다.</span> 디블럭은 그중에서도 <span>흡착력이 더욱 뛰어난 <br />
                        고급 야자수 활성탄을 사용했습니다</span>
                        </p>
                    </div>
                    <div className='Special1_2'>
                     <p><img src={ box1 } alt="디블럭제품 실제 야자수활성탄 들어가있는사진" />디블럭제품 실제 야자수활성탄 들어가있는사진</p>
                    </div>
                </div>
                <div className='Special2 , Special1'>
                <div className='Special1_1'>
                        <h3>1㎡당 야자활성탄 함유율이 무려 최대 <span>230g</span>으로! </h3>
                        <p>
                        일반 시중 필터들과는 다른 방식으로  <span>고급 야자수 활성탄 알갱이를</span> <br />
                        그대로 필터에 아끼지 않고, <span>최대 4.5배 많이 첨가</span>시켰습니다
                        </p>
                    </div>
                    <div className='Special1_2'>
                     <p><img src={ box2 } alt="야자수 활성탄 함유율 사진" />야자수 활성탄 함유율 사진</p>
                    </div>
                </div>
                <div className='Special3 , Special1'>
                <div className='Special1_1'>
                        <h3><span>유해물질 배출 낮추는</span> LMF 공법 합지기술</h3>
                        <p>
                        합지과정에서 녹는점이 낮은 단섬유층이 녹아 합지하는 기술로<br />
                        합지를 위한 화학공합 본드를 사용하지 않아 기존 필터 대비 <br />
                        <span>유해물질 성분이 적으며 압력손실과 탈취 향균력도  더욱 뛰어납니다</span>
                        </p>
                    </div>
                    <div className='Special1_2'>
                     <p><img src={ box3 } alt="LMF공법 합지기술" />LMF공법 합지기술</p>
                    </div>
                </div>
                <div className='Special4 , Special1'>
                <div className='Special1_1'>
                        <h3><span>7중 구조</span> 복층 필터링 설계</h3>
                        <p>
                        디블럭 프리미엄 필터는 <span>국내최초 7중구조</span>로 이루어졌으며<br />
                        활성탄을 나누어 복층으로 배치해 악취와 곰팡이 냄새,미세먼지와 <br />
                        유해물질등을 <span>강력하게 필터링 하는 동시에 유려한 통기성을 가졌습니다</span>
                        </p>
                    </div>
                    <div className='Special1_2'>
                     <p><img src={ box4 } alt="디블럭 7중필터구조" />디블럭 7중필터구조</p>
                    </div>
                </div>
                <div className='Special5 , Special1'>
                <div className='Special1_1'>
                        <h3><span>남녀노소 누구나 </span> 쉽게 <span>교체 가능</span></h3>
                        <p>
                        공임비를 지불하거나, 전문가의 손길 없이도 <span>남녀노소 누구나 <br />
                        5분 안에 직접 교체가능합니다</span>
                        </p>
                        <Link to="/Support"><p className='Special5_link'>교체방법 보러가기&gt;</p></Link>
                       
                       
                    </div>
                    <div className='Special1_2'>
                     <p><img src={ box5 } alt="디블럭 필터교체 이미지" />디블럭 필터교체 이미지</p>
                    </div>
                </div>
                <div className='Special6 , Special1'>
                <div className='Special1_1'>
                        <h3><span>MADE IN KOREA.</span> 국가기관에서 인정한 제품</h3>
                        <p>
                        국내 공장에서 제작되며 한양대학교 산학협력단가 연구 외<br />
                        조달청 및 공공기관 기술개발 시범구매제품으로 등록되어있는<br />
                        믿을 수 있는 자랑스러운 국산제품입니다<br />
                        </p>
                    </div>
                    <div className='Special1_2'>
                     <p><img src={ box6 } alt="한양대 연구소기업 , 벤처창업혁신 조달상품 , 공공기관 기술개발 시범구매제품" />한양대 연구소기업 , 벤처창업혁신 조달상품 , 공공기관 기술개발 시범구매제품</p>
                    </div>
                </div>
            </div>

            <hr className='hr2' />

            <div className='Platform'>
                <h3>정비소 플랫폼 <span>Platform</span></h3>
                <p>전국 차량 정비소 정보안내 및 커뮤니티 서비스를 제공하는 우리동네 정비소는<br />
                   정비소 사장님과 직원,고객님 모두 사용할 수 있는 차량관리 종합 플랫폼입니다.</p>
            </div>

            <hr className='hr3' />
            
            <div className='wooridongne'>
                <h3>우리동네 정비소 <br /><span>자동차 정비에 관한 모든것을 한곳에.</span></h3>
                <p><img src={ wooridongne } alt="우리동네 정비소 자동차 관리어플" />우리동네 정비소 자동차 관리어플</p>

            </div>

        </div>
    </div>
    );

}
export default Product
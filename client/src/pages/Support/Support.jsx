import './Support.css'
import Support_bg from './../../components/images/Support/Support.png'
import VehicleCompatibilityTable from './../../components/images/Support/VehicleCompatibilityTable.png'
import HowToReplacefilter from './../../components/images/Support/HowToReplacefilter.png'
import SearchFilter from '../../components/SearchFilter/SearchFilter'


const Support = ()=> {
  return (
      <div className='Support'>
        <div className='Support_bg'>
            <p><img src={ Support_bg } alt="lyncare Support페이지" />lyncare Support페이지</p>
        </div>
        <div className='Support_wrap'>
          <div className='Vehicle_Compatibility_Table'>
            <SearchFilter />
            <h3>디블럭 필터 호환차종 안내</h3>
            <p><img src={ VehicleCompatibilityTable } alt="lyncare Support페이지" />lyncare Support페이지</p>
          </div>
        </div>
        <hr />
        <div className='How_To_Replacefilter'>
          <div className='How_To_Replacefilter_text'>
            <h3>필터 교체방법 안내</h3>
            <h4>디블럭 프리미엄 필터는 전문가의 도움이나<br />
                공임비 없이도 <span>남녀노소 누구나 직접 교체</span>할 수 있습니다.</h4>
            <div>
              <hr className='hr2 , hr' />
              <ul>
                <li>1. 조수석 글로브 박스를 열고 양쪽의 고정핀과 연결고리를 제거해줍니다.</li>
                <li>2. 필터커버의 후크를 누른 상태로 필터 커버도 제거해줍니다.</li>
                <li>3. 기존 필터를 제거해줍니다.</li>
                <li>4. 필터 측면의 화살표 방향이 아래로 가게 필터를 장착해줍니다.</li>
              </ul>
              <hr className='hr3 , hr' />
            </div>
            <h5>필터는 언제 교체하는 것이 좋을까요?</h5>
            <p>차량용 에어컨 필터의 권장 교체주기는 차량운용 거리에 따라<br />
               3개월~6개월 주기입니다. 제 역할을 다한 필터는 물리적으로 각종 미세먼지와<br />
               유해물질 입자들을 흡착해 붙잡고 있기 때문에 필터링 성능 및 통기성이 <br />
               저하되어 해당 주기(3개월~6개월) 에 따라 교체해주시기를 권장드립니다.
              </p>
          </div>
          <div className='How_To_Replacefilter_img'>
           <p><img src={ HowToReplacefilter } alt="필터교환방법" />필터교환방법</p>
          </div>

        </div>
         
      </div>
  );
}
export default Support
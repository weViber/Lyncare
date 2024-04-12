import './Support.css'
import Support_bg from './../../components/images/Support/Support.jpg'
import VehicleCompatibilityTable from './../../components/images/Support/VehicleCompatibilityTable.png'
import HowToReplacefilter from './../../components/images/Support/HowToReplacefilter.jpg'
import SearchFilterZhchs from '../../components/SearchFilter/SearchFilterZhchs'


const Support = ()=> {
  return (
      <div className='Support'>
        <div className='Support_bg'>
            <p><img src={ Support_bg } alt="lyncare Support페이지" />lyncare Support페이지</p>
        </div>
        <div className='Support_wrap'>
          <div className='Vehicle_Compatibility_Table'>
            <SearchFilterZhchs />
            <h3>디블럭 필터 호환차종 안내</h3>
            <p><img src={ VehicleCompatibilityTable } alt="lyncare Support페이지" />lyncare Support페이지</p>
          </div>
        </div>
        <hr />
        <div className='How_To_Replacefilter'>
          <div className='How_To_Replacefilter_text'>
            <h3>车载空调滤芯更换方法指南</h3>
            <h4>D-Block Premium滤芯无需专家的帮助或人工费, <br />
            <span>男女老少都可以直接更换。</span></h4>
            <div>
              <hr className='hr2 , hr' />
              <ul>
                <li>1. 打开副驾驶座手套箱，去除两侧的固定销和连接环。</li>
                <li>2. 按压滤芯盖的钩子，打开滤芯盖。</li>
                <li>3. 取出现有车载空调滤芯。</li>
                <li>4. 按箭头方向朝下安装并重新装配即可！</li>
              </ul>
              <hr className='hr3 , hr' />
            </div>
            <h5>车载空调滤芯什么时候更换好呢？</h5>
            <p>车载空调滤芯的推荐更换周期根据车辆运行距离为3~6个月。 <br />
            发挥其作用的过滤物理上吸附并留住各种微尘和有害物质粒子，<br />
            导致过滤性能及透气性下降， <br />
            建议按照相应周期（3~6个月）进行更换。
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
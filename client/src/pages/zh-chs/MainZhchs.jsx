import './../Main.css'
import { Link } from 'react-router-dom';
import Main_bg from './../../components/images/Main_bg.png'
import MainVideo from './../../components/Video/MainVideo1440p.mp4'
import Main_products_bg from './../../components/images/Main_products.png'
import Main_woridongne from './../../components/images/Main_Myneighborhoodrepairshop.png'
import Main_woridongne2 from './../../components/images/Main_Myneighborhoodrepair shopr_jobvacancy.png'
import HeaderZhchs from '../../components/Header/HeaderZhchs';
import Header from '../../components/Header/Header';

const Main = ()=>{
return (
  <div className="Main">
    <div className="section1">
     {/* <p className='Main_bg'><img src={ Main_bg } alt="Main_bg" /></p> */}
     <p className='Main_bg' style={{ width: '100%', zIndex:'0' }}> <video style={{  width: '100%', height: '100%', objectFit: 'cover', zIndex:'0' }} autoPlay muted playsInline loop poster={ Main_bg }>
        <source 
          src={ MainVideo }
          type="video/mp4"
        />
      </video>
      </p>
      <div className='section1_text'>
        <h2 className='section_text1'>Fresh Drive</h2>
        <h2 className='section_text2'>
        为了更清新的驾驶 &nbsp; 
          <br />
          为了更美好的生活。
        </h2 >
      </div>
     
    </div>
    <div className="section2">
      <h5 >
      Lyncare希望您的生活更安全、更便捷， <br /> 
      研究覆盖整个汽车领域的生活方式解决方案，并提供以下服务.
      </h5>
      <div className="products_site">
      <Link to="/product"> <span>&#8594;</span> D.BLOCK车载空调滤芯</Link>
      <Link to="/product"><span>&#8594;</span> 我们小区维修站 </Link>
      </div>
      <div className='Main_box_list'>
        <div className='Main_box , Main_box1'>
          <div className='Main_box_text'>
            <p>
            我们致力于通过多种方式， <br />
            在整个产品范围内保护您的生活和我们的自然。
            </p>
            <h3>可持续的日常生活。</h3>
          </div>
        </div>
        <div className='Main_box , Main_box2'>
          <div  className='Main_box_text'>
            <p>
            通过激活售后市场和开发应用平台， <br />
            共赴成长的未来。
            </p>
            <h3>共同体</h3>
          </div>
         
        </div>
        <div className='Main_box , Main_box3'>
          <div  className='Main_box_text'>
            <p>
            通过独家技术和不断研发 <br />
            创造更好的世界。
            </p>
            <h3>研究开发</h3>
          </div>
         
        </div>
      </div>
    </div>

    <div className='products , products_bg'>
        <p><img src={ Main_products_bg } alt="DBLOCK 차량용 에어컨필터" /></p>
        <h4>用高级椰壳活性炭制作的<br />
        EPA11等级的Premium空调滤芯</h4>
        <h3>D.BLOCK车载空调滤芯</h3>
    </div>
    
    <div className="section3">
      <div>
        <p>
          <span>改变生活的滤芯</span><br />
          D-Block车载空调滤芯使用高级椰壳活性炭, 采用D.BLOCK独有的7重结构, <br />
          具有卓越的通气性,同时还能捕捉微尘、有害物质、异味, 是一个万能滤芯。
        </p>
        <div className="products_site">
        <Link to="/product">
            <span>&#8594;</span> D.BLOCK去块式空调滤清器
          </Link>
        </div>
      </div>
    </div>

    <div className="section4">
      <div className='section4_img'>
        <p><img src={ Main_woridongne } alt="products_bg" />우리동네 정비소 앱</p>
        <p><img src={ Main_woridongne2 } alt="products_bg" />우리동네 정비소 구인구익페이지</p>
      </div>
      <div className="section3 section4_text">
      <div>
        <p>
          <span>把有关汽车维修的一切都放在一起。</span><br />
          我们小区维修站提供维修站内的库存管理、招聘求职及车辆信息查询等 <br />
          汽车维修整体相关服务, 是维修站老板和顾客都可以使用的综合车辆管理平台。
        </p>
        <div className="products_site">
          {/* <a   href="/">
            <span>&#8594;</span> DBLOCK 디블럭 에어컨필터
          </a> */}
          <Link to="/product">
            <span>&#8594;</span> 我们小区维修站
          </Link>
        </div>
      </div>
    </div>
    </div>
  
  </div>
);
}
export default Main
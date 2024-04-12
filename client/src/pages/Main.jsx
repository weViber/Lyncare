import './Main.css'
import { Link } from 'react-router-dom';
import Main_bg from './../components/images/Main_bg.png'
import MainVideo from './../components/Video/MainVideo1440p.mp4'
import Main_products_bg from './../components/images/Main_products.png'
import Main_woridongne from './../components/images/Main_Myneighborhoodrepairshop.png'
import Main_woridongne2 from './../components/images/Main_Myneighborhoodrepair shopr_jobvacancy.png'

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
          더 상쾌한 드라이브 &nbsp; 
          <br />
          라이프 스타일을 위해.
        </h2 >
      </div>
     
    </div>
    <div className="section2">
      <h5 >
        당신의 생활이 더욱 안전하고 편리하길 바라는 린케어는 자동차 전반에 걸친 라이프 스타일 솔루션을 연구하며 <br /> 
        다음과 같은 제품과 서비스를 제공합니다
      </h5>
      <div className="products_site">
      <Link to="/product"> <span>&#8594;</span> DBLOCK 디블럭 에어컨필터</Link>
      <Link to="/product"><span>&#8594;</span> 우리동네 정비소 </Link>
      </div>
      <div className='Main_box_list'>
        <div className='Main_box , Main_box1'>
          <div className='Main_box_text'>
            <p>
              다양한 방식으로 제품 전반에 걸쳐 당신의 삶과 <br />
              우리의 자연을 지키기위해 노력합니다
            </p>
            <h3>지속 가능한 일상</h3>
          </div>
        </div>
        <div className='Main_box , Main_box2'>
          <div  className='Main_box_text'>
            <p>
              애프터 마켓의 활성화와 어플리케이션 개발을 <br />
              통해 함께 성장하는 미래를 지향합니다
            </p>
            <h3>공동체</h3>
          </div>
         
        </div>
        <div className='Main_box , Main_box3'>
          <div  className='Main_box_text'>
            <p>
              독자적인 기술과 지속적인 개발연구로  <br />
              더 나은 세상을 만듭니다
            </p>
            <h3>개발 연구</h3>
          </div>
         
        </div>
      </div>
    </div>

    <div className='products , products_bg'>
        <p><img src={ Main_products_bg } alt="DBLOCK 차량용 에어컨필터" /></p>
        <h4>고급 야자수 활성탄으로 만든<br />
           EPA11 등급의 프리미엄 에어컨필터</h4>
        <h3>DBLOCK 차량용 에어컨필터</h3>
    </div>
    
    <div className="section3">
      <div>
        <p>
          <span>생활을 바꾸는 필터</span><br />
        디블럭 차량용 에어컨 필터는 고급 야자활성탄을 사용하여 디블럭만의 특별한 7중구조로 <br />
        뛰어난 통풍성과 더불어 미세먼지와 유해물질, 냄새까지 잡는 만능 필터입니다
        </p>
        <div className="products_site">
        <Link to="/product">
            <span>&#8594;</span> DBLOCK 디블럭 에어컨필터
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
          <span>자동차 정비에 관한 모든것을 한곳에.</span><br />
          우리동네 정비소는 정비소 내 재고관리,구인구직 및 차량정보 조회 등 자동차 정비 전반에 관한 서비스를 제공하며 <br />
          정비소 사장님과 고객님 모두 사용할 수 있는 종합 차량관리 플랫폼입니다.
        </p>
        <div className="products_site">
          {/* <a   href="/">
            <span>&#8594;</span> DBLOCK 디블럭 에어컨필터
          </a> */}
          <Link to="/product">
            <span>&#8594;</span> 우리동네 정비소 
          </Link>
        </div>
      </div>
    </div>
    </div>
  
  </div>
);
}
export default Main
import './About.css'
import About_bg from './../../components/images/About/About_bg.png'
import CEO_KIM from './../../components/images/About/CEO_KIM.png'
import CoreValue from './../../components/images/About/CoreValue.png'
import History from './../../components/images/About/History.png'
import History_bg from './../../components/images/About/History_bg.png'
import Certifications_Ls from './../../components/images/About/Certifications_Ls.png'
import Certifications_Ss from './../../components/images/About/Certifications_Ss.png'
import Box1 from './../../components/images/About/Box1_ResearchInstituteSpin-offCompany.png'
import Box2 from './../../components/images/About/Box2_SelectedAsGovernmentSupportProject.png'
import Box3 from './../../components/images/About/Box3_SelectedAsGovernmentSupportProject.png'
import Box4 from './../../components/images/About/Box4_SelectedAsGovernmentSupportProject.png'

const about = ()=>{
  return (
    <div className='About'>
      <h2 className='About_bg'><img src={ About_bg } alt="lyncare_About" />소개 About 린케어가 추구하는 가치와 비전을 공유합니다</h2>
      <div className='CEO'>
          <h3>대표 인사말</h3>
          <h4 className='CEO_text_img'><img src= { CEO_KIM } alt="CEO_KIM Kun-woo" />CEO : KIM-Kun-woo</h4>
          <h4>“매일 차로 출퇴근하는 <span>소중한 내 가족을 위하는 마음으로</span>”</h4>
          <div className='CEO_text'>
            <p>
            여러분 안녕하세요, 린케어(주) 대표 김건우입니다.<br /> 
            디블럭은 제 가족과 주변 사람들이 실제 사용할 제품이라 생각하며 <br /> 
            품질에 ‘진심’을 담아 만들었습니다.<br /> 
            <br /> 
            저희의 단순히 어떤 물건을 판매함이 아니라, <br /> 
            여러분의 호흡기 건강을 유지하여 삶을 개선하기 위해 <br /> 
            “필터가 생활을 바꾼다” 라는 슬로건으로 시작하였습니다.<br /> 
            <br /> 
            기존 열정과 헌신의 결정체인 디블럭 제품이 시장에서 큰 사랑을 받으며 <br /> 
            더 나은 경험을 제공해드리기 위해 성능을 업그레이드한 디블럭으로 돌아왔습니다.<br /> 
            <br /> 
            나 자신과 가족이 함께하는 차안에서 모든 순간을 지켜주는<br /> 
            믿고 맡길 수 있는 디블럭이 되겠습니다.<br /> 
            많은 관심과 성원 부탁드립니다!<br /> 
            </p>
            <p><span>대표 김건우 올림</span></p>
            <p><img src= { CEO_KIM } alt="CEO_KIM Kun-woo" />CEO : KIM-Kun-woo</p>
          </div>
      </div>
      <hr />

      <div className='CoreValue'>
        <p><img src= { CoreValue } alt="lyncare CoreValue" />린케어의 비전 / 핵심가치</p>
      </div>
      <hr className='hr2' />

      <div className='History'>
        <h3>주요연혁 <span>History</span></h3>
        <div className='History_list'>
         <p><img src= { History } alt="lyncare History" />
          2021년 9월-11월 - 와디즈 크라우드 펀딩 1,2차 1,000% 판매달성 ,
          2021년 11월 - 자본증자 (한양대기술지주회사 500만원) ,
          2022년 12월 - 경기 강소연구개발특구 성장 지원사업 선정 ,
          2022년 12월 - 벤처나라 벤처창업혁신조달상품 지정 ,
          2023년 01월 - 연구개달전담부서 신설 ,
          2023년 02월 - 한양대학교 기술사업화 지원사업 선정 ,
          2023년 04월 - 중소벤처기업부 초기창업패키지 선정 ,
          현재
          </p>
        </div>
        <div className='History_bg'>
          <p><img src= { History_bg } alt="History_일러스트" /></p>
        </div>
      </div>

      <div className='Certifications'>
        <h3>인증현황 <span>Certifications</span></h3>
        <p><img src= { Certifications_Ss } alt="Certifications" /></p>
        <div className='Box'>
          <p><img src= { Box1 } alt="Research InstituteSpin-offCompany" />한양대학교 산학협력단 연구소기업(2023.10)</p>
          <p><img src= { Box2 } alt="Selected As Government Support Project" />정부지원사업선정 경기강소연구개발특구 성장 지원사업 선정 정부지원금 1,595만원</p>
          <p><img src= { Box3 } alt="Selected As Government Support Project" />정부지원사업선정 한양대 ERICA 산학연사업단 기술사업화 지원사업 선정 정부지원금 700만원</p>
          <p><img src= { Box4 } alt="Selected As Government Support Project" />정부지원사업선정 창업진흥원 초기창업패키지 선정 정부지원금 6,500만원</p>
        </div>
        <p><img src= { Certifications_Ls } alt="Certifications" /></p>
        
      </div>

    </div>
  );
}
export default about
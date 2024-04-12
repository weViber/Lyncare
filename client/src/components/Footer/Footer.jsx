import './Footer.css'
import Footer_logo from './../images/Lyncarelogo.png'
import Hanyang_University from './../images/Hanyang_University.png'
import Ministry_of_Science_and_Technology from './../images/Ministry_of_Science_and_Technology.png'
import Public_Procurement_Service from './../images/Public-Procurement-Service2.png'


const Footer = ()=>{
  return (
    <div className="Footer">
       <div className="Footer_1">
          <div>
          <p className='Footer_logo'><a href='/'><img src={ Footer_logo } alt="Footer_Logo" /></a></p> 
          </div>
          <div className='family_site'>
            <a target='_blank' href="https://dblock.kr/">디블럭자사몰 <span>➔</span></a>
            <a target='_blank' href="https://smartstore.naver.com/lyncare">스마트스토어 <span>➔</span></a>
          </div>
       </div>
     
      <div className='address'>
        <div className='address_1'>
          <p>주소 : 경기도 안산시 상록구 한양대학로 55, 6층 607호 린케어 주식회사 <span></span> </p>
          <p>사업자등록번호 : 145 – 86 – 02421 </p>
        </div>
        <div className='address_2'>
          <p>연락처 : 02 - 6956 - 7985 <span></span> 070 - 5067 - 1559 <span></span> </p>
          <p>서비스 이용 문의 : lyncare@lyncare.co.kr</p>
        </div>
        
        <p class="copyrigth">CopyrightⓒLyncare All rights reserved</p>
        <div className='webAcc'>
          <span><img src={ Hanyang_University } alt="한양대학교 에리카 산학협력단" /></span>
          <span><img src={ Ministry_of_Science_and_Technology } alt="과학기술정보통신부" /></span>
          <span><img src={ Public_Procurement_Service } alt="조달청" /></span>
        </div>
     
      </div>
    </div>
  )
}
export default Footer
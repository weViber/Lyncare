import './FooterZhchs.css'
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
            <a target='_blank' href="https://dblock.kr/">D.BLOCK 官方商城 <span>➔</span></a>
            <a target='_blank' href="https://smartstore.naver.com/lyncare">NAVER SMARTSTORE <span>➔</span></a>
          </div>
       </div>
     
      <div className='address'>
        <div className='address_1'>
          <p>地址：6F 607, Hanyang Univ. Erica Convention center, 55, Hanyangdaehak-ro, Sangnok-gu, Ansan-si, Gyeonggi-do, Republic of Korea<span></span> </p>
          <p>营业执照号码 : 145 – 86 – 02421 </p>
        </div>
        <div className='address_2'>
          <p>电话 : 02 - 6956 - 7985 <span></span> 070 - 5067 - 1559 <span></span> </p>
          <p>服务热线 : lyncare@lyncare.co.kr</p>
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
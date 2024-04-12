import './About.css'
import About_bg from './../../components/images/About/About_bg.jpg'
import CEO_KIM from './../../components/images/About/CEO_KIM.png'
import CoreValue from './../../components/images/About/CoreValue.jpg'
import History from './../../components/images/About/History.jpg'
import History_bg from './../../components/images/About/History_bg.png'
import Certifications_Ls from './../../components/images/About/Certifications_Ls.png'
import Certifications_Ss from './../../components/images/About/Certifications_Ss.png'
import Box1 from './../../components/images/About/Box1_ResearchInstituteSpin-offCompany.jpg'
import Box2 from './../../components/images/About/Box2_SelectedAsGovernmentSupportProject.jpg'
import Box3 from './../../components/images/About/Box3_SelectedAsGovernmentSupportProject.jpg'
import Box4 from './../../components/images/About/Box4_SelectedAsGovernmentSupportProject.jpg'

const about = ()=>{
  return (
    <div className='About'>
      <h2 className='About_bg'><img src={ About_bg } alt="lyncare_About" />介绍 About 分享Lyncare追求的价值观和展望。</h2>
      <div className='CEO'>
          <h3>代表致辞</h3>
          <h4 className='CEO_text_img'><img src= { CEO_KIM } alt="CEO_KIM Kun-woo" />CEO : KIM-Kun-woo</h4>
          <h4><span>每天都以关爱家人的心情驾车上下班。</span></h4>
          {/* <h4>“매일 차로 출퇴근하는 <span>소중한 내 가족을 위하는 마음으로</span>”</h4> */}
          <div className='CEO_text'>
            <p>
            大家好，我是Lyncare(株)代表, 金建佑<br /> 
            我认为D-Block是包括我家人在内的周边亲友都在使用的产品, <br /> 
            在品质上饱含"真心"制作。<br /> 
            <br /> 
            我们不仅仅销售某种东西，<br /> 
            为了维持人体呼吸道健康，改善大家的生活，<br /> 
            以"滤芯改变生活"为口号开始。<br /> 
            <br /> 
            作为热情和献身精神的结晶, D.BLOCK深受市场喜爱, <br /> 
            为提供更好的体验, 升级版D.BLOCK回归。<br /> 
            <br /> 
            我们将成为可信赖的<br /> 
            随时守护自己和家人在车内的每一个时刻<br /> 
            感谢大家多多关注和支持。<br /> 
            </p>
            <p><span>代表 金建佑</span></p>
            <p><img src= { CEO_KIM } alt="CEO_KIM Kun-woo" />CEO : KIM-Kun-woo</p>
          </div>
      </div>
      <hr />

      <div className='CoreValue'>
        <p><img src= { CoreValue } alt="lyncare CoreValue" />Lyncare 展望 / 核心价值</p>
      </div>
      <hr className='hr2' />

      <div className='History'>
        <h3>公司沿革 <span>History</span></h3>
        <div className='History_list'>
         <p><img src= { History } alt="lyncare History" />
          2021年 9-11月 众筹基金实现第1,2轮1000%的销售
          2021年 11月 增加投资（汉阳大学技术控股公司500万韩元)
          2022年 12月 京畿强小研究开发特区成长支援事业选定
          2022年 12月 Venture Nara 指定风险创业创新采购商品
          2023年 01月 新设研究开发专门部门
          2023年 02月 汉阳大学技术事业化支援事业选定
          2023年 04月 中小风险企业部 初期创业支援事业选定
          现在

          </p>
        </div>
        <div className='History_bg'>
          <p><img src= { History_bg } alt="History_일러스트" /></p>
        </div>
      </div>

      <div className='Certifications'>
        <h3>认证现状 <span>Certifications</span></h3>
        <p><img src= { Certifications_Ss } alt="Certifications" /></p>
        <div className='Box'>
          <p><img src= { Box1 } alt="Research InstituteSpin-offCompany" />汉阳大学产学合作团 研究所企业</p>
          <p><img src= { Box2 } alt="Selected As Government Support Project" />选定政府支援事业 京畿强小研究开发特区 成长支援事业 </p>
          <p><img src= { Box3 } alt="Selected As Government Support Project" />选定政府支援事业 汉阳大学ERICA产学研事业团技术事业化事业政府支援金 700万韩元</p>
          <p><img src= { Box4 } alt="Selected As Government Support Project" />选定政府支援事业 创业振兴院 初期创业支援事业 政府支援金 6,500万韩元</p>
        </div>
        <p><img src= { Certifications_Ls } alt="Certifications" /></p>
        
      </div>

    </div>
  );
}
export default about
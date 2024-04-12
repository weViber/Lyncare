import './Sidebar_list.css'
import { Link } from 'react-router-dom';

const Sidebar_list = ()=>{
    return (
        <div className="Sidebar_list">
            <Link to="/"><p>홈</p></Link>
            <Link to="/About"><p>회사소개</p></Link>
            <Link to="/Contact"><p>제품</p></Link>
            <Link to="/Product"><p>지원</p></Link>
            <Link to="/Support"><p>문의</p></Link>
        </div>
);
}
export default Sidebar_list
import "./Contact.css";
import Contact_bg from "./../../components/images/Contact/Contact.jpg";
import callImg from "./../../components/images/Contact/call.png";
import emailImg from "./../../components/images/Contact/email.png";
import { useState } from "react";
import { postEmail } from "../../service/emailService";

const Contact = (props) => {
  const [inputs, setInputs] = useState({
    company: "",
    call: "",
    email: "",
    name: "",
    phone: "",
    desc: "",
  });
  const { company, call, email, name, phone, desc } = inputs;

  const handleInputs = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const sendEmailBtn = async () => {
    try {
      props.setSending(true)
      await postEmail({ company, call, email, name, phone, desc });
      alert("문의가 성공적으로 접수되었습니다.");
    } catch (error) {
      alert(error.message);
    } finally {
      props.setSending(false)
    }
  };
  return (
    <div className="Contact">
      <div className="Contact_bg">
        <p>
          <img src={Contact_bg} alt="lyncare Contact" />
          lyncare Contact
        </p>
      </div>
      <div className="Context_form">
        <div className="Contact_text">
          <h3>咨询</h3>
          <h4>申请时,将自动同意收集和使用个人信息。</h4>
          <div className="text_list">
            <div className="Company_info">
              <ul>
                <li className="middle">Company info</li>
                <li>
                  <input
                    type="text"
                    value={company}
                    placeholder="公司名"
                    onChange={handleInputs}
                    name="company"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    value={call}
                    placeholder="公司电话"
                    onChange={handleInputs}
                    name="call"
                  />
                </li>
                <li>
                  <input
                    type="email"
                    value={email}
                    placeholder="电子邮箱"
                    onChange={handleInputs}
                    name="email"
                  />
                </li>
              </ul>
            </div>

            <div className="Contact_info">
              <ul>
                <li className="middle">Contact info</li>
                <li>
                  <input
                    className="name"
                    type="text"
                    value={name}
                    placeholder="姓名"
                    onChange={handleInputs}
                    name="name"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    value={phone}
                    placeholder="手机号"
                    onChange={handleInputs}
                    name="phone"
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className="Inquiry_details">
            <p>
              <textarea
                type="text"
                value={desc}
                name="desc"
                placeholder="咨询内容"
                onChange={handleInputs}
              />
            </p>
            <button className="ContactBtn" onClick={sendEmailBtn}>发送</button>
          </div>
        </div>

        <div className="Lyncare_Contact">
          <div className="Lyncare_Contact_bg">
            <h5>Lyncare Contact</h5>
            <ul>
              <li>02 - 6956 - 7985</li>
              <li>1833-7098</li>
              <li>lyncare@lyncare.co.kr</li>
            </ul>
          </div>
          <div className="Lyncare_Contact_bg_m ">
            <h5>Lyncare Contact</h5>
            <ul>
              <li>
                <img src={callImg} alt="lyncare 서울전화번호" />
                02 - 6956 - 7985
              </li>
              <li>
                <img src={callImg} alt="lyncare 대표전화번호" />
                1833-7098
              </li>
              <li>
                <img src={emailImg} alt="lyncare email" />
                lyncare@lyncare.co.kr
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;

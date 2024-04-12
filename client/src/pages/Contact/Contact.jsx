import "./Contact.css";
import Contact_bg from "./../../components/images/Contact/Contact.png";
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
          <h3>문의</h3>
          <h4>신청시 자동으로 개인정보 수집 및 이용에 동의처리 됩니다.</h4>
          <div className="text_list">
            <div className="Company_info">
              <ul>
                <li className="middle">Company info</li>
                <li>
                  <input
                    type="text"
                    value={company}
                    placeholder="회사명"
                    onChange={handleInputs}
                    name="company"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    value={call}
                    placeholder="회사전화"
                    onChange={handleInputs}
                    name="call"
                  />
                </li>
                <li>
                  <input
                    type="email"
                    value={email}
                    placeholder="이메일"
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
                    placeholder="담당자"
                    onChange={handleInputs}
                    name="name"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    value={phone}
                    placeholder="휴대폰"
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
                placeholder="문의내용"
                onChange={handleInputs}
              />
            </p>
            <button className="ContactBtn" onClick={sendEmailBtn}>접수하기</button>
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

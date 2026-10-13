import { useState } from "react";

const SignUp = () => {

    // 폼 데이터 상태 관리
    const [formData, setFromData] = useState({
        name: "",
        job: "회사원", 
        gender: "male", 
        memo: "" //자기 소개 
    })

    // 모든 필드 입력값 변경 함수
    const handleInputChange = (e) => {
        const {name, value} = e.target; //e.target.value, e.target.name
    
        setFromData({
            ...formData, [name]: value
        });
    }

    // 폼을 제출하는 처리 함수
    const handleSubmit = (e) => {
        e.preventDefault();// 기본동작을 막음
        console.log("제출 데이터: ", formData)
    }
    

    return(
        <div className = "sign-up">
            <h2>회원 가입</h2>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>이름:</label>
                        <input 
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange} 
                        />
                    </li>
                    <li>
                        <label>직업:</label>
                        
                        <select
                            type="text"
                            name="job"
                            value={formData.job}
                            onChange={handleInputChange}>

                            <option value="empliyee"> 회사원 </option> 
                            <option value="student"> 학생 </option> 
                            <option value="freelancer"> 프리랜서 </option> 
                        </select>
                    </li>
                    <li>
                        <label>성별</label>
                            <label><input 
                                type="radio" 
                                name="gender"
                                value="male"
                                checked = {formData.gender === "male"}
                                onChange={handleInputChange}
                            />남자
                        </label>
                    <   label>
                            <input 
                                type="radio" 
                                name="gender"
                                value="female"
                                checked = {formData.gender === "female"}
                                onChange={handleInputChange}
                            />여자
                        </label>
                    </li>
                    <li>
                        <label>자기소개</label>
                        <textarea 
                            name="memo" 
                            rows={5}
                            cols={20}
                            value={formData.memo}
                            onChange={handleInputChange}
                        ></textarea>
                    </li>
                    <li>
                        {/* 서버에 전송이 됨으로 반드시 submit */}
                        <button type="submit">sign Up</button>

                    </li>
                </ul>
            </form>
        </div>
    )
}

export default SignUp;
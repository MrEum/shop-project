import { useState } from "react";
import users from "../datas/users";
import { useNavigate } from "react-router-dom";


const Login = ({onLogin}) => {
    const [formData, setFormData] = useState({
        username:"",
        password:""
    })

    //  페이지 이동 훅 - useNavigate()
    const navigate = useNavigate();

    // 메인 페이지로 이동
    // navigate("/");

    //  로그인 결과 상태 관리
    const [result, setresult] = useState("");

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("제출 데이터:", formData);

        // 로그인 결과 처리
        const {username, password} = formData;

        // 데이터 일치 여부 find()
        const matched = users.find((user) => 
            { return user.username === username && user.password === password}
        );
        
        // setresult(matched ? "sucess" : "failed")
        if(matched){
            setresult("success");
            onLogin(username);
            // 메인페이지 이동
            navigate("/")
        }else{
            setresult("failed");
        }

        // setFormData({username: "", password: ""})
    
    }

    return(
        <div className="login">
            <h2> login </h2>
            <form onSubmit={handleSubmit}>
                
                    <div>
                        <input 
                            type="text" 
                            name="username"
                            placeholder="아이디 입력"
                            value={formData.username}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <input 
                            type="password" 
                            name="password"
                            placeholder="비밀번호 입력"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <button type="submit"> 로그인 </button>
                    </div>
            </form>
            {/* 결과 메시지 출력 */}
            {/* {result === "sucess" && (<p style={{color: "blue"}} >welcome</p>)} */}
            {result === "failed" && (<p style={{color: "red"}}>다시</p>)}

        </div>
    )
}
export default Login;
import React, {useState} from 'react'


function Form() {
    const [name, setName] = useState("");
    const updateName = (e) => {
        setName(e.target.value);
        
    }

    const [course, setCourse] = useState("");
    const updateCourse = (e) => {
        setCourse(e.target.value);
    }

    const [gender, setGender] = useState("");
    const updateGender = (e) => {
        setGender(e.target.value)
    }

    const [mobile, setMobile] = useState("");
    const updateMobile = (e) => {
        setMobile(e.target.value);
    }

    const [email, setEmail] = useState("");
    const updateEmail = (e) =>{
        setEmail(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(name.trim() ==="") return alert("Please enter the name");
        else if(course==="") return alert("Please select a course");
        else if(gender==="") return alert("Please select your gender");
        else if((mobile.toString()).length!==10) return alert("Please enter a valid mobile no.");
    
        else if(emailPattern.test(email)===false) return alert("Please enter a valid email address");
        else return alert("SUBMITTED SUCCESSFULLY");

    }
    const reset = () => {
        setName("");
        setCourse("");
        setGender("");
        setMobile("");
        setEmail("");
    }
    
  return (
    <div className="main">
        <h1 style={{textAlign: 'center'}}>Regitration Form</h1>
      <form style={{marginLeft:'280px' }}  onSubmit={submit}>
        <div>
            <label htmlFor="">Name</label><br />
            <input type="text" placeHolder="enter your name" onChange={updateName} /><br />
        </div>
        <div>
            <label htmlFor="">Course</label><br />
            <select plaseHolder="choose a course" onChange={updateCourse}>
                <option value="" disabled selected>Select a course</option>
                <option value="btech">BTech</option>
                <option value="bsc">BSC</option>
                <option value="ba">BA</option>
                <option value="bArch">BArch</option>
                <option value="agriculture">Agriculture</option>
            </select><br />
        </div>

        <div>
            <label htmlFor="">Gender</label><br />
            <select type="text" placeHolder="enter your gender" onChange={updateGender}>
                <option value="" disabled selected>Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <br />
        </div>
        <div>
            <label htmlFor="">Mobile</label><br />
            <input type="number" placeHolder="enter mobile no." onChange={updateMobile}/><br />
        </div>
        <div>
            <label htmlFor="">Email</label><br />
            <input type="text" placeHolder="enter email" onChange={updateEmail} /><br />
        </div>
        <div>
            <button type="submit" >Submit</button>
            <button type="reset" onClick={reset}>Reset</button>
        </div>
        </form>
    </div>
  )
}

export default Form
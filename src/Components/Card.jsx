import React, { useState } from 'react'


const Card = () => {
    const [input1, setinput1] = useState("");
    const [input2, setinput2] = useState("");
    const [input3, setinput3] = useState("");
    const [input4, setinput4] = useState("");
    const [data, setdata]  = useState([]);


    const ChangeInput1 = (e) => {
       
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
          setinput1(e.target.value)
        }

    }
    const ChangeInput2 = (e) => {
       
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setinput2(e.target.value)
        }

    }
    const ChangeInput3 = (e) => {
       
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setinput3(e.target.value)
        }

    }
    const ChangeInput4 = (e) => {
       
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setinput4(e.target.value)
        }

    }
    var elts = document.getElementsByClassName('test');
   
    Array.from(elts).forEach(function(elt){
  elt.addEventListener("keyup", function(event) {
   
    if ( elt.value.length == 4) {
     
      elt.nextElementSibling.focus()
    }
    if(elt.value.length == 0){
        elt.previousElementSibling.focus()
    }
  });
})

const Paste = (e) => {
    console.log(e.clipboardData.getData("Text"));
    let pastedinput = e.clipboardData.getData("Text");
    if(pastedinput.length > 4 && pastedinput.length <= 16){
    let inputfor1 = pastedinput.slice(0, 4);
    console.log(inputfor1);
    setinput1(inputfor1);
    let inputfor2 = pastedinput.slice(4, 8);
    setinput2(inputfor2)
    let inputfor3 = pastedinput.slice(8, 12);
    setinput3(inputfor3);
    let inputfor4 = pastedinput.slice(12);
    setinput4(inputfor4);}
    else{
        alert("Card Number Should be of 16 digits")
    }


}

const Submit = () => {


    if(input1.length + input2.length + input3.length + input4.length != 16 ){
        alert("Card Number Should be of 16 digits");

    }
    else{
    const tempobj =  {
        input1 :  input1,
        input2 :  input2,
        input3 :  input3,
        input4 :  input4,
        id : Date.now()
    }
    setdata([...data, tempobj])




setinput1("");
setinput2("");
setinput3("");
setinput4("");
}

}


const Delete = (e) => {
   let id = e;
 let a = data.filter((obj) => obj.id != id)
   
   setdata(a)
   



}

    
    

  return (
     <div className='{darkMode ? "dark-mode" : "light-mode"}'>
    <div className='card' >
        <div className='card-box'>
            

            <div className='card-name'>
                Credit-Card
               
            </div>
            <br />
            <div>
            <img src="https://media.istockphoto.com/vectors/golden-emv-chip-icon-secure-online-banking-microchip-vector-id1221230316?k=20&m=1221230316&s=612x612&w=0&h=3Mdn6FkWngw8B5WAigswA2kuFxAAyleXPZ4p_CQPuRs=" width={"70px"} style={{opacity:"200px"}} />
                <h6>Enter Your Card Number</h6>
            </div>
            <div className="input">
                <input type="text" name="" id="id01" placeholder="0000" maxLength={4} onChange={ChangeInput1} onPaste={Paste} required    className="test" value={input1}/>
                <input type="text" name="" id="id02" placeholder="0000" maxLength={4} onChange={ChangeInput2} required   className="test" value={input2}/>
                <input type="text" name="" id="id03" placeholder="0000" maxLength={4} onChange={ChangeInput3} required  className="test" value={input3}/>
                <input type="text" name="" id="id04" placeholder="0000" maxLength={4} onChange={ChangeInput4} required  className="test" value={input4}/>
            </div>
            <br />
            <div>
                
                <button onClick={Submit} className="btn">Click Me</button>
            </div>
            <div>
                
        <table className='table'>
            <tr>
                <th><i>Customer Card Number</i></th>
                <th> <u>Delete</u></th>
            </tr>
        {data.length > 0 && data.map((e) => {
            return (<tr >
                <td id='green' >{e.input1} {e.input2} {e.input3} {e.input4} </td>
                <td key={e.id} onClick={() => Delete(e.id)}> <a href='/' className='remove' style={{color:"red",fontSize:"small"}}>remove</a></td>
            </tr>)

        }) }
        </table>
            </div>
        </div>
        </div>
    </div>
    
  )
}
 export default Card;
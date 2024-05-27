import React from "react";


//App.js(부모)
// ㄴ ChildComponent(자식)
//  ㄴGrandChildComponent(후손)

// 후손 컴포넌트
const GrandChildComponenet = (props) => {

    // props == ChildComponent에서 전달 받은 값
    const {name, age} = props;
  
    return(
      <h3>이름 : {name} / 나이 : {age}</h3>
    );
  
  }
  
  

//자식 컴포넌트
const ChildComponent = (props)=>{

    //props == App에서 전달 받은 값
    return(
        <>
        <GrandChildComponenet 
            name = {props.name}
            age = {props.name === '김영희' ? 20:25}
            />
        </>
    );
}

export default ChildComponent;


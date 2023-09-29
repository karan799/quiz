import React from 'react';

export default function Options({question,dispatch,answer}) {
    console.log(question.options);
  return (
    <div className='options'>
     {question.options.map(
        (option,index)=>(
        <button className={`btn btn-option ${index===answer?'answer':''} ${answer!=null?(question.correctOption===index?'correct':'wrong'):''}`} 
        key={index} 
        disabled={answer!=null}
        onClick={()=>{dispatch({type:'newAnswer' ,payload:index})}}
        >
            {option}
            </button>
        )
        )}
     </div>
  );
}

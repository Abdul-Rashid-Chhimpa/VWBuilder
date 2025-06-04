import React from 'react';

const EditText = ({ element, onUpdate, onClose }) => {
  const { props, style } = element;


  const toggleBold = () => {
    const newStyle = {
      ...style,
      fontWeight: style.fontWeight === 'font-bold' ? 'normal' : 'font-bold',
    };
    onUpdate({ ...props, style: newStyle });
  };
  const fontItalic=()=>{
    const newStyle={
        ...style,fontStyle:style.fontStyle==='italic'?'not-talic':'italic',
    };
    onUpdate({...props,style:newStyle});
 }
  const toggleUnderline = () => {
    const newStyle = {
      ...style,
      textDecoration: style.textDecoration === 'underline' ? 'none' : 'underline',
    };
    onUpdate({ ...props, style: newStyle });
  };

  const changeFontFamily = (e) => {
    const newStyle = {
      ...style,
      fontFamily: e.target.value,
    };
    onUpdate({ ...props, style: newStyle });
  };

  const changeFontSize = (e) => {
    const newStyle = {
      ...style,
      fontSize: e.target.value,
    };
    onUpdate({ ...props, style: newStyle });
  };

  return (
    <>
    <div className="h-auto bg-blue-50 shadow-md p-1 rounded flex flex-row justify-center items-center gap-2">
      <div className="flex flex-row justify-center gap-5 items-center">
        <button className="text-red-500 text-sm" onClick={onClose}>
          Close
        </button>
      </div>
      <div className="flex gap-0">
        <button
          className={`border-none font-bold btn btn-md ${style.fontWeight === 'bold' ? 'btn-primary' : 'btn-outline'}`}
          onClick={toggleBold}
        >
          B
        </button>
        <button
          className={`border-none  underline text-blue-600/100 dark:text-sky-400/100 flex flex-col justify-center items-center btn btn-md ${style.textDecoration === 'underline' ? 'btn-primary' : 'btn-outline'}`}
          onClick={toggleUnderline}
        >
          U
        </button>
        <button
          className={`border-none italic font-bold btn btn-md ${style.fontWeight === 'bold' ? 'btn-primary' : 'btn-outline'}`}
          onClick={fontItalic}
        >
          I
        </button>
      </div>
      <select
        className="select size-8 select-bordered select-md w-full bg-blue-50"
        onChange={changeFontFamily}
        value={style.fontFamily || 'font-sans'}
      >
        <option value="font-sans">sans</option>
        <option value="font-serif">serif</option>
        <option value="font-mono">mono</option>
  
      </select>
      <select
        className="select size-8 select-bordered select-md w-full bg-blue-50"
        onChange={changeFontSize}
        value={style.fontSize || '16px'}
      >
        <option value="text-sm">12px</option>
        <option value="text-xs">14px</option>
        <option value="text-base">16px</option>
        <option value="text-2xl">20px</option>
        <option value="text-4xl">24px</option>
        <option value="text-6xl">30px</option>
      </select>
    </div>
    
    </>
  );
};

export default EditText;
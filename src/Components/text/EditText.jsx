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

const changeTextColor = (clr) => {
    const newStyle = {
        ...style,
        color: clr, // Use 'color' instead of 'clr'
    };
    onUpdate({ ...props, style: newStyle });
};

  const colors = [
    // Reds
 'text-red-100','text-red-200','text-red-500','text-red-700','text-red-900',
    // Oranges
 'text-orange-100','text-orange-200','text-orange-500','text-orange-700','text-orange-900',
    // Yellows
   'text-yellow-50','text-yellow-300','text-yellow-500','text-yellow-700','text-yellow-900',
    // Greens
 'text-green-200','text-green-500', 'text-green-700', 'text-green-800', 'text-green-950',
    // Blues
    'text-blue-100', 'text-blue-300', 'text-blue-500', 'text-blue-700', 'text-blue-800',
 //Pink
  'text-pink-50', 'text-pink-200', 'text-pink-300', 'text-pink-500', 'text-pink-700', 'text-pink-950',
    // Grays/Black/White
 'text-gray-50', 'text-gray-100', 'text-gray-300', 'text-gray-500', 'text-gray-700', 'text-gray-900',
  ];

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
    <select
    className="select size-8 select-bordered select-md w-full bg-blue-50"
    onChange={(e) => changeTextColor(e.target.value)} // Use onChange on select
    value={style.color || '#000000'} // Default to black if no color is set
>
    {colors.map((clr, index) => (
        <option key={index} value={clr} className={`${clr} font-bold` } style={{ color: clr }}>
            {clr}
        </option>
    ))}
</select>
    </div>
    
    </>
  );
};

export default EditText;



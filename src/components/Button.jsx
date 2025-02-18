import React from 'react'

export default function Button({children, type='button', bgColor="bg-blue-600" , textColor = "text-white" , className ='', ...props }) {
  return (
    <div>
      <button className = {`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
        {children}
        </button>
    </div>
  )
}



// *************************************************
//   FORWARD REFERENCE HOOK :-
//                          IF WE CREATE A COMPONENT (LIKE LOGIN PAGE) IN ONE FOLDER , BUT WE WANT 
//   TAKE A REFERENCE OF THAT, THEN WE USE FORWARD REFERENCE HOOK.
//************************************************* */
import React, {useId} from 'react'

function Select({
    options,
    label,
    className,
    ...props
}, ref) 
{
    const id = useId()
  return (
    <div className='w-full'>

        
        {label && <label htmlFor={id} className=''></label>}

        
        <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
            
        {options?.map((option) =>     // OPTIONAL LOOP
        (
                <option key={option} value={option}>
                    {option}
                </option>
        )
        )}
        </select>


        
    </div>
  )
}

export default React.forwardRef(Select)

// FORWARD REF :-
// ✅ When a parent needs direct access to a child's DOM element.
// ✅ When creating reusable input fields, buttons, or modals that require external control.
// ✅ When integrating third-party libraries that rely on refs.
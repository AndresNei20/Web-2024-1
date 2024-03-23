import './Filters.css'
import { useTodo } from '../../hooks/useTodo'

const inputText = [
    {
        id: crypto.randomUUID(),
        value: 'all',
        labelText: 'All'
    },
    {
        id: crypto.randomUUID(),
        value: 'completed',
        labelText: 'Completed'
    },
    {
        id: crypto.randomUUID(),
        value: 'pending',
        labelText: 'Pending'
    }
]

export const Filters = () => { 

    const {handleFilterChange, filterValue} = useTodo()

    const onHandleFilterChange = ({target}) =>{
        handleFilterChange(target.value)
    }

    return (
        <>
        <div className='filters-div'>
            {inputText.map(({ value, id, labelText }) =>(
                <label  className='radio 'key={id}>
                     <input 
                        type="radio"
                        name='radio'
                        onChange={onHandleFilterChange}
                        value={value}
                        checked={filterValue===value}/>
                    <span>{labelText}</span> 
                </label>  
            ))
            }
        </div>
        </>
    )
}
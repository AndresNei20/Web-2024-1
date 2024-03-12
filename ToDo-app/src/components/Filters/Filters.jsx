import PropTypes from 'prop-types'
import './Filters.css'

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

export const Filters = ({currentFilter, setFilterValue}) => {

    const handleFilterChange = ({target}) =>{
        setFilterValue(target.value)
    }

    return (
        <>
            <div className='filters-div'>
                {inputText.map(({ value, id, labelText }) =>(
    
                    <label  className='radio 'key={id}>
                        <input type="radio"
                               name='radio'
                               onChange={handleFilterChange}
                               value={value}
                               checked={currentFilter===value}/>
                       <span>{labelText}</span> 
                    </label>
                
                ))
                }
            </div>
        </>
    )
}

Filters.propTypes = {
    currentFilter: PropTypes.string.isRequired,
    setFilterValue: PropTypes.func.isRequired
}
import './Filters.css'

const inputText = [
    {
        id: crypto.randomUUID(),
        type: 'All'
    },
    {
        id: crypto.randomUUID(),
        type: 'Completed'
    },
    {
        id: crypto.randomUUID(),
        type: 'Pending'
    }
]

export const Filters = () => {
    return (
        <>
            <div className='filters-div'>
                {inputText.map(({ type, id }) =>(
                    <label key={id}>
                        <input type="radio" />
                        {type}
                    </label>
                ))
                }
            </div>
        </>
    )
}
import React, {useState} from 'react'

export const LinkForm = (props) => {

    const initialStateValue = {
        url: '',
        name: '',
        description: ''
    };

    const [values, setValues] = useState(initialStateValue);
    
    const handleInputChange = e => {
        const {name,value} = e.target;
        setValues({...value, [name]: value})
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        props.addOrEdit()
    }

    return (
        <> 
            <form className='card card-body' onSubmit={handleSubmit}>
                <div className='form-group input-group mb-1'>
                    <div className="input-group-text bg-light">
                        <i className="material-icons">insert_link</i>
                    </div>
                    <input 
                        type='text'
                        className='form-control'
                        placeholder='https://someurl.com'
                        name='url'
                        onChange={handleInputChange}
                    />
                </div>
                <div className='form-group input-group mb-1'>
                    <div className="input-group-text bg-light">
                        <i className="material-icons">create</i>
                    </div>
                    <input 
                        type='text'
                        className='form-control'
                        placeholder='Website name'
                        name='name'
                        onChange={handleInputChange}
                    />
                </div>
                <div className='form-group mb-1'>
                   <textarea 
                        name="description" 
                        rows="3" 
                        className='form-control' 
                        placeholder='Write a description'
                        onChange={handleInputChange}
                        >
                   </textarea>
                </div>
                <button className='btn btn-primary btn-block p-1'>
                    Save
                </button>
            </form>
        </>
    )
}

export default LinkForm
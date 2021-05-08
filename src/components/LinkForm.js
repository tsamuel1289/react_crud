import React from 'react'

export const LinkForm = () => {
    return (
        <> 
            <form className='card card-body'>
                <div className='form-group input-group mb-1'>
                    <div className="input-group-text bg-light">
                        <i className="material-icons">insert_link</i>
                    </div>
                    <input 
                        type='text'
                        className='form-control'
                        placeholder='https://someurl.com'
                        name='url'
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
                    />
                </div>
                <div className='form-group mb-1'>
                   <textarea name="description" rows="3" className='form-control' placeholder='Write a description'>
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
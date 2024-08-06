import React from 'react'

import './form.css'

export const Form = () => {
  return (
    <form className='form' autoComplete='false'>
      <div className="form-group1">
        <label htmlFor="title">Название</label>
        <input type="text" id='title' name='title' required />
      </div>

      <div className="form-group2">
        <label htmlFor="time-zone">Временная зона</label>
        <input type="" id='time-zone' name='time-zone' required />
      </div>
      <button className="btn" type="submit">Добавить</button>
    </form>
  )
}

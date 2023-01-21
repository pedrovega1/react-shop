import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import Products from '../Products/Products';
// export 'Switch' (imported as 'Switch') was not found in 'react-router-dom'
// если выдается такая ошибка, это надо читать документацию новой 6 версии

// В новой, 6й версии кое что изменилось!

// import { Switch, Route } from "react-router-dom";

// заменить на

// import { Routes ,Route } from 'react-router-dom';

const routes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Products/>}/>
        </Routes>
    </div>
  )
}

export default routes
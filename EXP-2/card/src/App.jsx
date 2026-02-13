import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div class="card">
        <img src="https://i.pinimg.com/originals/ac/a5/05/aca505efeb2fa10067ac2bd483beb2b4.jpg" class="card-img-top" height="1000" width="300" alt="birthday"/>
  <div class="Cheers to 21">
    <h5 class="card-title">Happy birthday</h5>
    <p class="card-text">Two decades and one year of friendship and many unforgettable moments were shared. Happy birthday to me, and here’s to many more years of having adventures on life’s journey with you. Happy 21st birthday!</p>
    <a href="#" class="btn btn-primary">Celebrate</a>
  </div>
</div>
<div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Gifts</h5>
        <p class="card-text">When it comes to birthday gifts and wishes, it's important to express your appreciation and love. Here are some thoughtful ideas and messages to consider:
Personalized Gifts: Consider gifting something special that reflects your personality, such as a custom cake or a personalized photo cake.</p>
        <a href="#" class="btn btn-primary">Get Gifts</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Photos</h5>
        <p class="card-text">Get your pictures here for the birthday party</p>
        <a href="#" class="btn btn-primary">Captures</a>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default App

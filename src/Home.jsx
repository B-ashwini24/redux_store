import { useSelector, useDispatch } from 'react-redux' 
import {  withdraw,withdraw1 } from './slices/accountSlice'
import formatNumber from "format-number"
import accountSlice from './slices/accountSlice'

const Home=()=>{
   

    const totalAmount = useSelector((state) => state.accountSlice.totalAmount)
    const username = useSelector((state) => state.accountSlice.username)
    const dispatch = useDispatch()

    return(

        <div className="App">
        <img className="App__userpic" src={"https://image.ibb.co/nC8vGp/girl.png"} alt="photographer" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button data-amount="10000" onClick={() => dispatch(withdraw())}>WITHDRAW $10,000</button>
          <button data-amount="5000" onClick={() => dispatch(withdraw1())}>WITHDRAW $5,000</button>
        </section>

        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
    )

}
export default Home;
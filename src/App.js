import './App.css';
import pic from './pic.jpg'
import KL_logo from './KL_logo.png'
import barcode from './barcode.jpg'
import sign from './sign.png'

function App() {
  return (
   <div className="container">
     <table className="tab" border="0px solid black">
       <tr >
         <td className="row1">
           <img src={pic} className="pic"/>
         </td>
         <td className="row1">
           <img className="logo" src={KL_logo}/>
           <p className="CSEtxt">
             CSE
           </p>
           <p className="year">
             2020-2024
           </p>
         </td>

       </tr>
       <tr >
       <td className="row2"colspan="2">
        <table className="databox" border="0px solid black">
          <th>
            <td align="center" >Student Details</td>
          </th>
          <tr>
            <td>Name : S Soumya Prasad </td>
          </tr>
          <tr>
            <td>
              Student ID : 2000031337
            </td>
          </tr>
          <tr>
            <td>Number: +91 9668744664</td>
          </tr>
          <tr>
            <td>Blood Group: B+ve</td>
          </tr>


        </table>




       </td>
       

       </tr>
       <tr>
       <td>
         <img src={barcode} className="barcode"></img>
       </td>
       <td>
         <img src={sign} className="sign"></img>
         <p className="signTXT">HoD CSE</p>
       </td>

       </tr>
       <tr>

       </tr>

     </table>
   </div>
  )
}

export default App;

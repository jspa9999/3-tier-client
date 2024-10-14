import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'

function EmployeesForm() {

  let [lists,setLists] = useState({})
  let [employees,setEmployees] = useState([]);

  useEffect(()=>{
    getLists();
  },[])

  let getLists = async ()=>{
    let reqOptions = {
      method:"GET"
    }
    let JSONData = await fetch("http://localhost:6767/lists",reqOptions);

    let JSOData=await JSONData.json();

    setLists(JSOData);

    console.log(JSOData);
  }

    let getEmployeesFromServer = async ()=>{

        let reqOptions = {
           method:"GET"
        }

        let JSONData = await fetch("http://localhost:6767/getEmployees",reqOptions);


        let JSOData = await JSONData.json();
       console.log(JSOData);
        setEmployees(JSOData);
    }


  return (
    <div>
    <form>
      <div>
        <label>Country</label>
        <select>
          {lists.countries
          ? lists.countries.map((ele,i)=>{
            return <option>{ele}</option>
          })
          :null}
          </select>
          <select>
          <option>Russia</option>
          <option>China</option>
          <option>Indonesia</option>
        </select>
        </div>
        <div>
        <label>Department</label>
        <select>
          <option>Accounting</option>
          <option>Business Development</option>
          <option>Training</option>
        </select>
        </div>
        
        <div>
        <label>Gender</label>
        <select>
          <option>male</option>
          <option>female</option>
         </select>
        </div>

        <div>
        <button type="button" onClick={()=>{
            getEmployeesFromServer();
        }}>GetEmployees</button>
        </div>
        
    </form>

    <table>
      <thead>
        <tr>
        <th>SNo</th>
        <th>Id</th>
        <th>ProfilePic</th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Age</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Country</th>
        </tr>
       
      </thead>

      <tbody>
      {employees.map((ele,i)=>{
      return(
    <tr>
        <td>SNo</td>
         <td> {ele.id}</td>
        <td><img src={ele.profilePic}></img></td>
        <td>{ele.firstName}</td>
        <td>{ele.lastName}</td>
        <td>{ele.age}</td>
        <td>{ele.email}</td>
        <td>{ele.gender}</td>
        <td>{ele.department}</td>
        <td>{ele.country}</td>
        </tr>
      )
   }) }

      </tbody>
      <tfoot></tfoot>
    </table>
   
    </div>
  )
}

export default EmployeesForm
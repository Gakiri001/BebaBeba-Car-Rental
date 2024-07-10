import {useEffect, useState} from 'react'
import { apiurl } from "../../utils/congig";
import "./Admin.css"

function ReservationAdmin() {
  const [reserve, setReserve] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchReserve = async () => {
      try{
        const response = await fetch(`${apiurl}/api/rent/register`)
        const data = await response.json()
        // console.log(data)

        if(data.success === true){
          setReserve(data.reserveDetail)
          console.log('reserveDetail', data.reserveDetail)
        }
        else{
          setError(data.message)
        }
      }
      catch(err){
        setError(err.message)
      }
      finally{
        setLoading(false)
      }
    }
    fetchReserve()
  }, [])

  const handleDelete = async (id) => {
    try{
      const response = await fetch(`${apiurl}/api/rent/register/${id}`, {
        method: "DELETE",
      })
      const data = await response.json()

    if(response.ok) {
      setReserve(reserve.filter(current => current.id !==id))
      alert("Data Delected")
    }
    else{
      setError(data.message)
    }
    }
    catch(err){
      setError(err.message)
    }
  }

  if(loading) return <div>Loading...</div>
  if(error) return <div>Error...</div>

  return (
    <div className="body">
      <h1>Reservation Details</h1>
      <table>
        <thead>
          <tr>
            <th>Starting Date</th>
            <th>Ending Date</th>
            <th>Pick Up Location</th>
            <th>Drop Location</th>
            <th>Lessee Years of Experience</th>
            <th>Lessee National ID No</th>
            <th>Lessee Driver License No</th>
            <th>Lessee Reason for hire</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reserve.map((current) => (
            <tr key={current.id}>
              <td>{current.startingdate}</td>
              <td>{current.enddate}</td>
              <td>{current.picklocation}</td>
              <td>{current.droplocation}</td>
              <td>{current.lesseExperience}</td>
              <td>{current.lesseID}</td>
              <td>{current.driverLicense}</td>
              <td>{current.reason}</td>
              <td>
                <button onClick={() => handleDelete(current.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ReservationAdmin
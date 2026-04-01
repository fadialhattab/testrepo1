import person from './assets/person.jpg'

function Message({ myname = "Guest", salary = 0, title = "Unknown" }) {


    return (

        <>

            <li><span style={{ color: "red" }}>    Name:</span> {myname}   
               <span style={{ color: "red" }}>    Salary:</span> {salary}     
               <span style={{ color: "red" }}>    Title:</span> {title} </li>
          

        </>
    )

}
export default Message

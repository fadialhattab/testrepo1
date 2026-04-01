import './App.css'
import Message from './Message'
function App() {


  return (
    <>
<ul>
     <Message myname="ahmad" salary={1000} title="HR"/>
      <Message myname="sami" salary={1000} title="Web developer" />
</ul>
   
  
    </>
  )
}

export default App

import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  let foodItems = ["Dal","Rice","Veggies","Chapaati","Curd"];
 


  return (
    <>
    {foodItems.length===0 ? <h3>No content available</h3> : null }
    <ul className="list-group">
      {foodItems.map((item) => (
        <li key={item} className="list-group-item">{item}</li>
      ))}
</ul>
    </>
  )
}

export default App

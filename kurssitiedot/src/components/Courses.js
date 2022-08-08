const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Part = (props) => {
    //console.log(props)
    return (
        <div>
            <p> {props.part.name} {props.part.exercises} </p>
        </div>
    )
}

const Content = (props) => {
    const {parts} = props
    //console.log(props)
    return (
        <div>
            <ul>
            {parts.map(part => <li key={part.id}><Part part={part} /></li>)}
            </ul>
        </div>
    )
}

const TotalAmount = (props) => {
    return (
      props.parts.reduce((i, part) => i + part.exercises, 0)
    )
}

const Total = (props) => {
    const totalAmount = <TotalAmount parts={props.parts} />
    return(
    <div>
      <p><b>Total of {totalAmount} exercises</b></p>
    </div>
    )
}

const CourseInformation = (props) => {
    const {courses} = props
    return (
      <div>
      <Header course={courses.name}/>
      <Content parts={courses.parts}/>
      <Total parts={courses.parts}/>
      </div>
    )
}

const Courses = (props) => {

  const {courses} = props

  return (
  <div>
     <ul>
    {courses.map((course) => <li key={course.id}><CourseInformation courses={course}/></li> )}
     </ul>
  </div>
  )
}

export default Courses
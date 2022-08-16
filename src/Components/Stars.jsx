import Star from "./Star"

function Stars(props){
  const count = props.count
  
  return(
  <ul className = "card-body-stars u-clearfix">
    {[...Array(count)].map((element, key) => {return <Star  key = {key} />})}
  </ul>
  )
}

export default Stars
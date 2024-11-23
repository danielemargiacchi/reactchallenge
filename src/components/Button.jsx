function Button(props) {
    return <button id={props.id} onClick={props.onclick} >{props.value}</button>
  }
export default Button;
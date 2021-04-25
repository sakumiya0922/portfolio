const Title = (props) => {
  const { title, onClick } = props

  const titleStyle = {
    fontSize: "20px",
    padding: "5px 10px",
    backgroundColor: "#D9E5FF",
    textAlign: 'center',
    marginTop: '0px',
    borderRadius: '30px'
  }
  return <p style={titleStyle} onClick={onClick ? onClick : null}>{title}</p>
}

export default Title;
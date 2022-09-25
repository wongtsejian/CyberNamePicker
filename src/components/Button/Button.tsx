import "./Button.scss"

const Button = ({ children, secondary }: any) => {
  const isSecondary =  secondary ? "btn btn--secondary" : 'btn'
  return (
    <div className="wrapper">
      <button className={isSecondary}>
        <span className="btn__content">{children}</span>
        <span className="btn__glitch"></span>
        <span className="btn__label">r25</span>
      </button>
    </div>
  )
}

export default Button

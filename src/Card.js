import './card.css'


export const Card = ({style1 = "#0b3a83", style2 = "#d0d8e2", titulo='', tecnologias ='', img='', direccion =''}) => {
  return (
    <div style={{background: style2}} className="card__content">
       <a href={direccion} target={'_blank'}> <div style={{background: style1}} className='card__content--interno'>
            <img src={img} alt='img2'/>
        <h1>{titulo}</h1>
        <p>{tecnologias}</p>
        </div>
        </a>
    </div>
  )
}
// Tecnologia: 
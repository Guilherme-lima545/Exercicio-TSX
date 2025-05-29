import { NavLink } from 'react-router-dom'
import type { Ivenda } from '../Context/Datacontext'

const VendaItem = ({venda}: {venda: Ivenda}) => {
  return (
    <div className='venda box'>
      <NavLink to={`/vendas/${venda.id}`} style={{fontFamily: 'monospace'}}>{venda.id}</NavLink>
      <div>{venda.nome}</div>
       <div>{venda.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</div>
    </div>
  )
}

export default VendaItem

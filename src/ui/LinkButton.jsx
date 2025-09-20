import {Link, useNavigate} from 'react-router-dom'
import Button from './Button'

function LinkButton(){
const navigate=useNavigate()
const className='text-sm text-purple-500 hover:text-purple-600 hover:underline'

if(to==='-1')
    return(
<button className={className} onClick={()=>navigate(-1)}>{children}</button>
    )
return(
    <Link to={to} className={className}>
        {children}
    </Link>
)
}
export default LinkButton
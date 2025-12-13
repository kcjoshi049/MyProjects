import { useContext } from "react"
import { userContext } from "../api/ContextApi"


const Price = ({price}) => {
    let {icon} = useContext(userContext);
  return (
    <div className="flex gap items-center">
      <icon.rupee size={16}/>
      {price}
    </div>
  )
}

export default Price

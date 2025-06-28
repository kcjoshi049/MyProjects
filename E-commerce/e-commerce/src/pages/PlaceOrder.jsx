import DeliveryInformation from "../components/UI/DeliveryInformation"
import Total from "../components/UI/Total"
import PaymentMethod from "../components/UI/PaymentMethod"

const PlaceOrder = () => {
  return (
    <div className="flex max-lg:flex-col justify-center lg:gap-[200px] mt-15 mb-15 max-lg:items-center">
      <DeliveryInformation />
      <div className="mt-15 flex flex-col gap-10 max-lg:items-center">
        <Total />
        <PaymentMethod />
      </div>
    </div>
  )
}

export default PlaceOrder

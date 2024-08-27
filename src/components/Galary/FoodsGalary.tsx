import Image from "next/image"
import { fod1, fod2, fod3, fod4 } from "../../.."


const FoodsGalary = () => {
  return (
    <div>
      <div className="text-center mt-40 mb-10">
        <p className="text-redText font-bold">Galary</p>
        <h3 className="text-3xl font-bold">Our Foods <span className="text-redText">Galary</span></h3>
        <p className="text-xs text-darkText/60 mt-1 mb-2">Objectively pontificate quality models before intuitive information. Dramatically <br />
        recaptiualize multifunctional materials.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <Image src={fod1} alt="food-one" className="h-80" />
        <Image src={fod2} alt="food-one" className="h-80" />
        <Image src={fod3} alt="food-one" className="h-80" />
        <Image src={fod4} alt="food-one" className="h-80" />
      </div>
    </div>
  )
}

export default FoodsGalary
export default function ShippingOptions() {
  return (
    <fieldset>
      <legend className="sr-only">Shipping Option</legend>
      <div className="space-y-5 ">
        <h5 className="divide-y-2 mt-6 text-skin-titles-darker text-md font-medium">
          How to get it
        </h5>
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              id="Shipping"
              aria-describedby="Shipping meethod"
              name="shipping option"
              type="radio"
              defaultChecked
              className="focus:ring-borderCol-main h-4 w-4 text-skin-titles border-gray-300"
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="Shipping"
              className="font-medium text-skin-titles-darker"
            >
              Shipping
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              id="Local Delivery"
              aria-describedby="Local Delivery"
              name="shipping option"
              type="radio"
              className="focus:ring-borderCol-main h-4 w-4 text-skin-titles border-borderCol-main"
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="Local Delivery"
              className="font-medium text-skin-titles-darker"
            >
              Local Delivery
            </label>
            <p className="text-skin-titles underline">Enter delivery address</p>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              id="Store pickup"
              aria-describedby="Store pickup"
              name="shipping option"
              type="radio"
              className="focus:ring-borderCol-main h-4 w-4 text-skin-titles border-borderCol-main"
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="Store pickup"
              className="font-medium text-skin-titles-darker"
            >
              Store pickup
            </label>
            <p className="text-skin-titles ">
              TERRAIN Projects <br />
              Studio 1/30b Perry Street Collingwood VIC
            </p>
          </div>
        </div>
      </div>
    </fieldset>
  );
}

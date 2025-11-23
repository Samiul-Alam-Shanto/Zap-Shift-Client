import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  // console.log(regions);
  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    // console.log(regionDistricts);
    const districts = regionDistricts.map((d) => d.district);
    // console.log(districts);
    return districts;
  };

  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const handleSendParcel = (data) => {
    console.log("Form Data Submitted:", data);

    // measure the cost

    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);
    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    console.log(cost);
  };

  const inputBase =
    "w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all bg-base-100";
  const labelBase = "block text-secondary font-bold text-sm mb-2";
  const errorMsg = "text-red-500 text-xs mt-1 ml-1";

  return (
    <div className="min-h-screen bg-base-100 p-4 md:p-12 font-sans flex justify-center">
      <div className="w-full max-w-[1400px]">
        <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-10">
          Add Parcel
        </h1>

        <form onSubmit={handleSubmit(handleSendParcel)}>
          {/* --- TOP SECTION --- */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-secondary mb-6">
              Enter your parcel details
            </h2>

            <div className="flex gap-8 mb-8">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  value="document"
                  className="radio  border-2 border-green-500 rounded-full "
                  defaultChecked
                  {...register("parcelType")}
                />
                <span className="text-secondary font-semibold">Document</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  value="non-document"
                  className="radio border-2  border-green-500 rounded-full "
                  {...register("parcelType")}
                />
                <span className="text-secondary font-semibold">
                  Non-Document
                </span>
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className={labelBase}>Parcel Name</label>
                <input
                  type="text"
                  placeholder="Parcel Name"
                  className={`${inputBase} ${
                    errors.parcelName ? "border-red-500 bg-red-50" : ""
                  }`}
                  {...register("parcelName", { required: true })}
                />
                {errors.parcelName && (
                  <p className={errorMsg}>Parcel Name is required</p>
                )}
              </div>

              <div>
                <label className={labelBase}>Parcel Weight (KG)</label>
                <input
                  type="number"
                  placeholder="Parcel Weight (KG)"
                  className={`${inputBase} ${
                    errors.parcelWeight ? "border-red-500 bg-red-50" : ""
                  }`}
                  {...register("parcelWeight", { required: true })}
                />
                {errors.parcelWeight && (
                  <p className={errorMsg}>Weight is required</p>
                )}
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-gray-200 mb-10"></div>

          {/* --- MAIN SPLIT: SENDER vs RECEIVER --- */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-20 gap-y-12">
            {/* LEFT SIDE: Sender Details */}
            <div>
              <h3 className="text-lg font-bold text-secondary mb-4">
                Sender Details
              </h3>

              {/* Nested Grid for Sender Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Row 1: Name & Warehouse */}
                <div>
                  <label className={labelBase}>Sender Name</label>
                  <input
                    type="text"
                    placeholder="Sender Name"
                    className={`${inputBase} ${
                      errors.senderName ? "border-red-500 bg-red-50" : ""
                    }`}
                    {...register("senderName", { required: true })}
                  />
                  {errors.senderName && <p className={errorMsg}>Required</p>}
                </div>

                <div>
                  <label className={labelBase}>Sender Email</label>
                  <input
                    type="text"
                    placeholder="Sender Email"
                    className={`${inputBase} ${
                      errors.receiverName ? "border-red-500 bg-red-50" : ""
                    }`}
                    {...register("senderEmail", { required: true })}
                  />
                  {errors.receiverName && <p className={errorMsg}>Required</p>}
                </div>

                {/* Row 2: Address & Contact */}
                <div>
                  <label className={labelBase}>Sender Address</label>
                  <input
                    type="text"
                    placeholder="Address"
                    className={`${inputBase} ${
                      errors.senderAddress ? "border-red-500 bg-red-50" : ""
                    }`}
                    {...register("senderAddress", { required: true })}
                  />
                  {errors.senderAddress && <p className={errorMsg}>Required</p>}
                </div>

                <div>
                  <label className={labelBase}>Sender Contact No</label>
                  <input
                    type="tel"
                    placeholder="Sender Contact No"
                    className={`${inputBase} ${
                      errors.senderContact ? "border-red-500 bg-red-50" : ""
                    }`}
                    {...register("senderContact", { required: true })}
                  />
                  {errors.senderContact && <p className={errorMsg}>Required</p>}
                </div>

                {/* Row 3: Region (Full Width) */}
                <div>
                  <label className={labelBase}>Your Region</label>
                  <select
                    className={`${inputBase} appearance-none`}
                    defaultValue=""
                    {...register("senderRegion", { required: true })}
                  >
                    <option value="" disabled>
                      Select your region
                    </option>
                    {regions.map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                  {errors.senderRegion && <p className={errorMsg}>Required</p>}
                </div>

                <div>
                  <label className={labelBase}>Your District</label>
                  <select
                    className={`${inputBase} appearance-none`}
                    defaultValue=""
                    {...register("senderDistrict", { required: true })}
                  >
                    <option value="" disabled>
                      Select your District
                    </option>
                    {districtsByRegion(senderRegion).map((d, i) => (
                      <option key={i} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                  {errors.senderDistrict && (
                    <p className={errorMsg}>Required</p>
                  )}
                </div>

                {/* Row 4: Instruction (Full Width) */}
                <div className="md:col-span-2">
                  <label className={labelBase}>Pickup Instruction</label>
                  <textarea
                    placeholder="Pickup Instruction"
                    className={`${inputBase} h-32 resize-none`}
                    {...register("pickupInstruction")}
                  ></textarea>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Receiver Details */}
            <div>
              <h3 className="text-lg font-bold text-secondary mb-4">
                Receiver Details
              </h3>

              {/* Nested Grid for Receiver Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Row 1: Name & Warehouse */}
                <div>
                  <label className={labelBase}>Receiver Name</label>
                  <input
                    type="text"
                    placeholder="Receiver Name"
                    className={`${inputBase} ${
                      errors.receiverName ? "border-red-500 bg-red-50" : ""
                    }`}
                    {...register("receiverName", { required: true })}
                  />
                  {errors.receiverName && <p className={errorMsg}>Required</p>}
                </div>

                <div>
                  <label className={labelBase}>Receiver Email</label>
                  <input
                    type="text"
                    placeholder="Receiver Email"
                    className={`${inputBase} ${
                      errors.receiverName ? "border-red-500 bg-red-50" : ""
                    }`}
                    {...register("receiverEmail", { required: true })}
                  />
                  {errors.receiverName && <p className={errorMsg}>Required</p>}
                </div>

                {/* Row 2: Address & Contact */}
                <div>
                  <label className={labelBase}>Receiver Address</label>
                  <input
                    type="text"
                    placeholder="Address"
                    className={`${inputBase} ${
                      errors.receiverAddress ? "border-red-500 bg-red-50" : ""
                    }`}
                    {...register("receiverAddress", { required: true })}
                  />
                  {errors.receiverAddress && (
                    <p className={errorMsg}>Required</p>
                  )}
                </div>

                <div>
                  <label className={labelBase}>Receiver Contact No</label>
                  <input
                    type="tel"
                    placeholder="Receiver Contact No"
                    className={`${inputBase} ${
                      errors.receiverContact ? "border-red-500 bg-red-50" : ""
                    }`}
                    {...register("receiverContact", { required: true })}
                  />
                  {errors.receiverContact && (
                    <p className={errorMsg}>Required</p>
                  )}
                </div>

                {/* Row 3: Region (Full Width) */}
                <div>
                  <label className={labelBase}>Receiver Region</label>
                  <select
                    className={`${inputBase} appearance-none`}
                    defaultValue=""
                    {...register("receiverRegion", { required: true })}
                  >
                    <option value="" disabled>
                      Select Receiver region
                    </option>
                    {regions.map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                  {errors.receiverRegion && (
                    <p className={errorMsg}>Required</p>
                  )}
                </div>

                <div>
                  <label className={labelBase}>Receiver District</label>
                  <select
                    className={`${inputBase} appearance-none`}
                    defaultValue=""
                    {...register("receiverDistrict", { required: true })}
                  >
                    <option value="" disabled defaultChecked>
                      Select Receiver District
                    </option>
                    {districtsByRegion(receiverRegion).map((d, i) => (
                      <option key={i} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                  {errors.receiverDistrict && (
                    <p className={errorMsg}>Required</p>
                  )}
                </div>

                {/* Row 4: Instruction (Full Width) */}
                <div className="md:col-span-2">
                  <label className={labelBase}>Delivery Instruction</label>
                  <textarea
                    placeholder="Delivery Instruction"
                    className={`${inputBase} h-32 resize-none`}
                    {...register("deliveryInstruction")}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* --- FOOTER --- */}
          <div className="mt-12">
            <p className="text-secondary font-semibold text-sm mb-6">
              * PickUp Time 4pm-7pm Approx.
            </p>

            <button
              type="submit"
              className="bg-primary cursor-pointer hover:bg-[#c3e065] text-secondary font-bold text-lg px-12 py-3 rounded-lg w-full md:w-auto transition-colors shadow-sm"
            >
              Proceed to Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendParcel;

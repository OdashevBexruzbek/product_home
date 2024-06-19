// react router dom imports
import { useParams } from "react-router-dom";
// costum hooks
import { useFetch } from "../hooks/useFetch";
function Product() {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    `https://dummyjson.com/products/` + id
  );
  return (
    <div>
      {isPending && (
        <div className="border border-blue-300 shadow rounded-lg p-4 max-w-md h-28 w-full">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-200 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      )}
      {data && (
        <div>
          <img src={data.thumbnail} alt={data.title} />
          <h2> Title: {data.title}</h2>
          <p>Price: {data.price}</p>
          <p> Description: {data.description}</p>
          <p>Status: {data.availabilityStatus}</p>
          <h4>returnPolicy: {data.returnPolicy}</h4>
          <h3>warrantyInformation: {data.warrantyInformation}</h3>

          <div>
            <div className="bagde badge-outline">Brand: {data.brand}</div>
            <h2 className="badge badge-outline h-7 mb-1">
              {data.rating}{" "}
              {
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                </div>  
              }
            </h2>
          </div>
          <div className="flex alihn-center items-center gap-3 mt-4 mb-10">
            <button className="btn btn-eight">+</button>
            <h2>0</h2>
            <button className="btn btn-eight">-</button>
            <br />
            <button className="btn btn-eight">Add</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;

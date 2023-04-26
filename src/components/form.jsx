import React, { useState } from "react";
// store - redux
import { useDispatch } from "react-redux";
import { query_model } from "../services/fetch_drink_choice_model";
import { addResult } from "../store/apiresults";

function QueryForm({ setApiResult }) {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  function onSubmitHandle(event) {
    event.preventDefault();
    //
    query_model(formData)
      .then((res) => {
        setApiResult(res?.data?.attributes);
        dispatch(
          addResult({
            date: res?.data?.attributes?.timestamp,
            decision: res?.data?.attributes?.decision,
            user: formData,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //
  return (
    <form
      onSubmit={(event) => onSubmitHandle(event)}
      className="bg-blue-900 shadow-slate-950 w-6/12 mx-auto px-4 py-4 rounded-xl"
    >
      <div className="my-5">
        <input
          onChange={(e) =>
            setFormData({
              ...formData,
              INPUTVAR3: parseFloat(e.target.value),
            })
          }
          className="p-2 w-full rounded-md"
          placeholder="Age?"
          min={1}
          max={90}
          type="number"
        />
      </div>

      <div className="my-5">
        <input
          onChange={(e) =>
            setFormData({
              ...formData,
              INPUTVAR1: parseFloat(e.target.value),
            })
          }
          className="p-2 w-full rounded-md"
          placeholder="Temperature?"
          min={-10}
          max={45}
          type="number"
        />
      </div>

      <div className="my-5">
        <input
          onChange={(e) =>
            setFormData({
              ...formData,
              INPUTVAR8: parseFloat(e.target.value),
            })
          }
          className="p-2 w-full rounded-md"
          placeholder="Number of drink consumed per day?"
          min={0}
          max={20}
          type="number"
        />
      </div>

      <div className="my-5">
        <input
          onChange={(e) =>
            setFormData({
              ...formData,
              INPUTVAR9: parseFloat(e.target.value),
            })
          }
          className="p-2 w-full rounded-md"
          placeholder="Number of drinks consumed today?"
          min={0}
          max={20}
          type="number"
        />
      </div>

      <div className="my-5">
        <select
          onChange={(e) =>
            setFormData({ ...formData, INPUTVAR2: e.target.value })
          }
          className="p-2 w-full rounded-md"
        >
          <option selected disabled value={"female"}>
            Gender
          </option>
          <option value={"Female"}>Female</option>
          <option value={"Male"}>Male</option>
        </select>
      </div>

      <div className="my-5">
        <select
          onChange={(e) =>
            setFormData({ ...formData, INPUTVAR4: e.target.value })
          }
          className="p-2 w-full rounded-md"
        >
          <option selected disabled>
            Sensitive to Caffeine?
          </option>
          <option value={"Yes"}>Yes</option>
          <option value={"No"}>No</option>
          <option value={"Not sure"}>Not sure</option>
        </select>
      </div>

      <div className="my-5">
        <select
          onChange={(e) =>
            setFormData({ ...formData, INPUTVAR5: e.target.value })
          }
          className="p-2 w-full rounded-md"
        >
          <option selected disabled>
            Time of day?
          </option>
          <option value={"Morning"}>Morning</option>
          <option value={"Afternoon"}>Afternoon</option>
          <option value={"Evening"}>Evening</option>
        </select>
      </div>

      <div className="my-5">
        <select
          onChange={(e) =>
            setFormData({ ...formData, INPUTVAR6: e.target.value })
          }
          className="p-2 w-full rounded-md"
        >
          <option selected disabled>
            Pregnant?
          </option>
          <option value={"Yes"}>Yes</option>
          <option value={"No"}>No</option>
          <option value={"NA"}>NA</option>
        </select>
      </div>

      <div className="my-5">
        <select
          onChange={(e) =>
            setFormData({ ...formData, INPUTVAR7: e.target.value })
          }
          className="p-2 w-full rounded-md"
        >
          <option selected disabled>
            Health conscious?
          </option>
          <option value={"Yes"}>Yes</option>
          <option value={"No"}>No</option>
        </select>
      </div>

      <div className="w-full my-4">
        <button className="bg-white w-full py-2 rounded-md">Query</button>
      </div>
    </form>
  );
}

export default QueryForm;

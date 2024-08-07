import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDrzava } from "../../features/drzave/DrzavaThunk.js";
import { useParams } from "react-router-dom";

const DrzavaForm = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.djelatnost);

  const [naziv, setNaziv] = useState("");
  //   const [companyId, setCompanyId] = useState("");
  const { companyId } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createDrzava({ naziv, companyId }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto'
    >
      <h2 className='text-2xl font-bold mb-4'>Create Drzava</h2>

      {error && <p className='text-red-500 mb-4'>{error}</p>}

      <div className='mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
          Naziv
        </label>
        <input
          type='text'
          value={naziv}
          onChange={(e) => setNaziv(e.target.value)}
          className='w-full p-2 border border-gray-300 rounded'
          placeholder='Enter naziv'
          required
        />
      </div>

      <button
        type='submit'
        className={`w-full p-2 text-white rounded ${
          loading ? "bg-blue-400" : "bg-blue-500 hover:bg-blue-600"
        }`}
        disabled={loading}
      >
        {loading ? "Creating..." : "Create Grad"}
      </button>
    </form>
  );
};

export default DrzavaForm;

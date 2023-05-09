import axios from "axios";
import { useContext } from "react";
// import { Send } from "react-feather";
import { toast } from "react-hot-toast";
import { z } from "zod";
import { AuthContext } from "../context/AuthProvider";
import { WEB_URL } from "../lib/CONSTANTS";


const SearchBar = () => {
  const { user } = useContext(AuthContext);

  const CreateSearch = async () => {
    const body = {
      user_uid: user.uid,
      
    };
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    const searchPromise = axios.post(WEB_URL + "/api/city", body, headers);

    toast
      .promise(searchPromise, {
        loading: "Searching.....",
        // success was here 
        error: "Search Failed....",
      })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    CreateSearch();
  };

  const handleChange = (e) => {
    const validator = z.string().max(255);
    const current = e.target.value;
    console.log(current);
    try {
      validator.parse(current);
    } catch (err) {
      if (current.length > 255) {
        toast.error("City does not exits!", {
          duration: 2000,
        });
      }
    }
  };

  if (!user.loggedIn) return;

  return (
    <div class="mb-1">
      <form
        className="form-control max-w-lg mx-auto flex-row"
        onSubmit={handleSubmit}
      >
        <div className="input-group">
        <input type="text" placeholder="Enter City Here!" className="input input-bordered input-secondary w-full max-w-xs"
            onChange={handleChange}
            />

{/* Search Button */}
            <div className="btn-group">
            <button
            className="btn btn-active text-white ml-1">Search</button>
          </div>

        </div>
      </form>
      </div>

  );
};

export default SearchBar ;
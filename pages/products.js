import ConductTransaction from "../components/store";
import { useRouter } from "next/router";
import { useState } from "react";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const Store = () => {
  const router = useRouter();
  const homeButton = () => {
    router.push("/");
  };
  const [SearchTerm, setSearchTerm] = useState("");
  const updateSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const Search = (event) => {
    const data = event.target.value;
    // process the data with fetch api and display it
  };

  return (
    <>
      <div className="bg-white h-screen w-full flex-col justify-center">
        <div className=" flex justify-between shadow w-screen py-2 z-10">
          <div className="flex my-2 ml-4">
<div className="">
              <div
                className="cursor-pointer text-xl bg-white rounded-full h-11 w-11 text-gray-700 no-underline hover:no-underline transition-all duration-150 hover:bg-red-600 hover:text-white border-2 border-red-600"
                onClick={Search}
              >
                
              </div>
            </div>
            <div className="mx-2">
              <div
                className="ml-4 cursor-pointer text-xl bg-white rounded-full px-6 py-2 text-red-700 no-underline hover:no-underline transition-all border-red-600 border-2 duration-150 hover:bg-red-600 hover:text-white"
                onClick={homeButton}
              >
                Nearby
              </div>
            </div>
          </div>
          <div className=" flex my-2">
            <FormGroup className="">
              <FormControl
                className="rounded-full px-6 py-2 w-96 bg-white text-red-500 text-xl border-red-600 border-2 z-10 shadow-lg"
                input="text"
                placeholder="Search anything"
                value={SearchTerm}
                onChange={updateSearch}
              />
            </FormGroup>
          </div>
          <div className="flex my-2">
            <div className="mx-2">
              <div
                className="cursor-pointer text-xl bg-white rounded-full px-6 py-2 text-red-700 no-underline hover:no-underline transition-all border-red-600 border-2 duration-150 hover:bg-red-600 hover:text-white"
                onClick={homeButton}
              >
                Home
              </div>
            </div>
            <div className="mx-2">
              <div
                className="cursor-pointer text-xl bg-white rounded-full h-11 w-11 mr-4 text-gray-700 no-underline hover:no-underline transition-colors duration-150 hover:bg-red-600 hover:text-white border-red-600 border-2"
                onClick={homeButton}
              >
                
              </div>
            </div>
          </div>
        </div>
	<div className="category-list-as-in-google h-16">
	</div>
        <ConductTransaction />
      </div>
    </>
  );
};
export default Store;

import { useRouter } from "next/router";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBasket,
  faMoneyBillWave,
  faBolt,
  faUser,
  faHospitalSymbol
} from "@fortawesome/free-solid-svg-icons";
import { FormGroup, FormControl } from "react-bootstrap";

const Index = () => {
  const router = useRouter();
  const productsButton = () => {
    router.push("/products");
  };
  const goToBuy = () => {
    window.navigator.vibrate(200);
    productsButton();
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
      <div className=" flex justify-between shadow w-screen py-2 z-10">
        <div className="flex my-2 ml-4">
          <div className="">
            <div
              className="grid items-center cursor-pointer text-xl bg-white rounded-full h-11 w-11 text-gray-700 no-underline hover:no-underline transition-all duration-150 hover:bg-red-600 hover:text-white border-2 border-red-600"
              onClick={Search}
            >
	    <FontAwesomeIcon
              icon={faHospitalSymbol}
              size="2x"
              className="mx-auto text-red-400"
            />	</div>
          </div>
          <div className="mx-2">
            <div
              className="ml-4 cursor-pointer text-xl bg-white rounded-full px-6 py-2 text-red-700 no-underline hover:no-underline transition-all border-red-600 border-2 duration-150 hover:bg-red-600 hover:text-white"
              onClick={productsButton}
            >
              Nearby
            </div>
          </div>
        </div>
        <div className=" flex my-2">
          <FormGroup className="">
            <FormControl
              className="rounded-full px-6 py-2 w-11 md:w-96 bg-white text-red-500 text-xl border-red-600 border-2 z-10 shadow-lg"
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
              onClick={productsButton}
            >
              Products
            </div>
          </div>
          <div className="mx-2">
            <div
              className="grid items-center cursor-pointer text-xl bg-white rounded-full h-11 w-11 mr-4 text-gray-700 no-underline hover:no-underline transition-colors duration-150 hover:bg-red-600 hover:text-white border-red-600 border-2"
            >
	    <FontAwesomeIcon
              icon={faUser}
              size="1x"
              className="mx-auto text-red-400"
            />	
	    </div>
          </div>
        </div>
      </div>
      <div className="category-list-as-in-google h-16"></div>
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row w-3/4 mx-auto my-12 justify-around">
          <div className="h-48 w-min flex-col mx-auto cursor-pointer my-2 md:my-0" onClick={goToBuy}>
            <FontAwesomeIcon
              icon={faShoppingBasket}
              size="6x"
              className="mx-auto text-red-600"
            />
            <div className="mx-auto">
              <p className="text-3xl p-2 mx-auto text-red-700">Order</p>
            </div>
          </div>
          <div className="h-48 w-min flex-col mx-auto my-2 md:my-0">
            <FontAwesomeIcon
              icon={faMoneyBillWave}
              size="6x"
              className="mx-auto  text-red-600"
            />
            <div className="mx-auto">
              <p className="text-3xl ml-8 mt-2 text-red-700">Pay</p>
            </div>
          </div>
          <div className="h-48 w-min flex-col mx-auto my-2 md:my-0">
            <FontAwesomeIcon icon={faBolt} size="6x" className="mx-auto ml-8 text-red-600" />
            <div className="mx-auto">
              <p className="text-3xl mt-2 text-red-700">Delivered!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;

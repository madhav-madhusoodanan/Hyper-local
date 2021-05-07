import ConductTransaction from "../components/store";
import { useRouter } from "next/router";

const Store = () => {
  const router = useRouter();
  const homeButton = (event) => {
      router.push('/store');
  }
  return (
  <>
    <div className="bg-white h-screen w-full flex-col justify-center">
      <div className="shadow w-screen py-2 z-10">
        <div className="justify-end flex my-2">
          <div className="mx-2">
            <div
              className="text-xl bg-gray-100 rounded-full px-6 py-2 text-gray-700 no-underline hover:no-underline transition-colors duration-150 hover:bg-red-600 hover:text-white"
              onClick={homeButton}
            >
              Home
            </div>
          </div>
        </div>
      </div>
      <ConductTransaction />
    </div>
  </>
  );
};
export default Store;

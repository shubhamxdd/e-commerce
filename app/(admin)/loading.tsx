import { AiOutlineLoading3Quarters } from "react-icons/ai";

const loading = () => {
  return (
    <div className="animate-spin flex justify-center items-center my-20">
      <AiOutlineLoading3Quarters size={50} />
    </div>
  );
};

export default loading;

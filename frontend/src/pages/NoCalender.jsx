import { useNavigate } from "react-router-dom";

export default function NoCalender() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Feature currently Unavailable</h1>
      <p className="text-lg mb-8">
        Due to some integration issue, this feature isn't available
      </p>
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Go Back
      </button>
    </div>
  );
}

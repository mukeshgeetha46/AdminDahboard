export const getTagColor = (tag) => {
  switch (tag) {
    case "Promotional":
      return "bg-[#0085DB] text-white";
    case "Finance":
      return "bg-green-500 text-white";
    case "Support":
      return "bg-orange-500 text-white";
    case "HR":
      return "bg-purple-500 text-white";
    case "Updates":
      return "bg-blue-400 text-white";
    case "Ecommerce":
      return "bg-yellow-400 text-black";
    case "Career":
      return "bg-pink-500 text-white";
    case "Development":
      return "bg-indigo-500 text-white";
    case "Entertainment":
      return "bg-red-400 text-white";
    case "Work":
      return "bg-teal-500 text-white";
    case "Security":
      return "bg-gray-600 text-white";
    case "Music":
      return "bg-emerald-500 text-white";
    case "Social":
      return "bg-cyan-500 text-white";
    default:
      return "bg-gray-300 text-black";
  }
};
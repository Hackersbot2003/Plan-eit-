import React, { useState } from 'react';
import Image from "../assets/yourImage2.png"; // Ensure this path is correct

function Ai() {
  const [formData, setFormData] = useState({
    startPoint: "",
    endPoint: "",
    days: "",
    startDate: "",
    endDate: "",
    numberOfPeople: "",
    familyOrfriends: "",
    budget: "",
    modeOfTravel: "",
    vegOrnonveg: "",
    Intermediate: "",
  });

  const [itinerary, setItinerary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generatePrompt = () => {
    return `"I am planning a budget-friendly trip and need a detailed itinerary in a structured format. Here are my travel details:

Start Point: ${formData.startPoint}
Destination: ${formData.endPoint}
Intermediate Stop(s): ${formData.Intermediate || "N/A"}
Number of Travelers: ${formData.numberOfPeople}
Traveling With: ${formData.familyOrfriends}
Budget: ₹${formData.budget}
Mode of Travel: ${formData.modeOfTravel}
Food Preference: ${formData.vegOrnonveg}
Requirements:
1. Transportation: Suggest the most cost-effective travel options for each leg of the journey, considering the mode of travel.
2. Accommodation: Recommend budget-friendly and comfortable lodging options within the specified budget.
3. Food: Provide recommendations for affordable local eateries or dining options based on the given food preference.
4. Attractions: Highlight must-visit places, activities, and experiences for the destination and any intermediate stops.
5. Cost Breakdown: Divide the budget into specific categories such as transportation, accommodation, food, and activities.
6. Money-Saving Tips: Provide practical suggestions to reduce expenses while ensuring a comfortable and enjoyable trip.

Please structure the response professionally with clear headings and estimated costs for each category. Ensure the response is concise and does not exceed 300 words."`;
  };

  const cleanItinerary = (text) => {
    // Remove unwanted characters like *, #, etc.
    const cleanedText = text.replace(/[*,#,'',''']/g, "").trim();
    return cleanedText;
  };

  const truncateItinerary = (text) => {
    const cleanedText = cleanItinerary(text); // Clean the text first
    const words = cleanedText.split(" ");
    if (words.length > 300) {
      return words.slice(0, 300).join(" ") + "...";
    }
    return cleanedText;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const prompt = generatePrompt();

    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=AIzaSyD5xQC83X-vu_XpA31UFRtb7WiiOhdUeco",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [{ role: "user", parts: [{ text: prompt }] }],
          }),
        }
      );

      const data = await response.json();
      console.log("API Response:", data);

      if (data.candidates && data.candidates.length > 0) {
        const fullItinerary = data.candidates[0].content.parts[0].text;
        const truncatedItinerary = truncateItinerary(fullItinerary);
        setItinerary(truncatedItinerary);
      } else {
        setError("Sorry for the error. Try again!");
      }
    } catch (error) {
      console.error("Error in fetching itinerary:", error);
      setError("Incorrect API key, try again.");
    }

    setLoading(false);
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${Image})` }}
      ></div>

      {/* Rest of the content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-black text-4xl md:text-6xl font-semibold font-['Source_Sans_Pro']">
            PLAN YOUR <span className="font-extrabold">BUDGET</span> NOW
          </h1>
        </div>

        {/* Grid Container for Input and Output */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
          {/* Input Container with Glass Morphism */}
          <div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-black text-2xl md:text-3xl font-semibold font-['Source_Sans_Pro'] mb-6">
              Plan Your Trip
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Destination */}
              <div>
                <label className="block text-black text-lg md:text-xl font-medium font-['Source_Sans_Pro'] mb-2">
                  FIRST, Where Do You Want To Go?
                </label>
                <input
                  type="text"
                  name="endPoint"
                  className="w-full bg-gray-200/70 rounded-lg p-4 text-black text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a2f32]"
                  placeholder="Enter your destination"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Intermediates */}
              <div>
                <label className="block text-black text-lg md:text-xl font-medium font-['Source_Sans_Pro'] mb-2">
                  Any Intermediates? (Optional)
                </label>
                <input
                  type="text"
                  name="Intermediate"
                  className="w-full bg-gray-200/70 rounded-lg p-4 text-black text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a2f32]"
                  placeholder="Enter intermediates (if any)"
                  onChange={handleChange}
                />
              </div>

              {/* Starting Point */}
              <div>
                <label className="block text-black text-lg md:text-xl font-medium font-['Source_Sans_Pro'] mb-2">
                  From, Where?
                </label>
                <input
                  type="text"
                  name="startPoint"
                  className="w-full bg-gray-200/70 rounded-lg p-4 text-black text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a2f32]"
                  placeholder="Enter your starting point"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Travel Dates */}
              <div>
                <label className="block text-black text-lg md:text-xl font-medium font-['Source_Sans_Pro'] mb-2">
                  When Are You Planning the Trip?
                </label>
                <div className="flex gap-4">
                  <input
                    type="date"
                    name="startDate"
                    className="w-1/2 bg-gray-200/70 rounded-lg p-4 text-black text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a2f32]"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="date"
                    name="endDate"
                    className="w-1/2 bg-gray-200/70 rounded-lg p-4 text-black text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a2f32]"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Number of People */}
              <div>
                <label className="block text-black text-lg md:text-xl font-medium font-['Source_Sans_Pro'] mb-2">
                  With How Many People?
                </label>
                <input
                  type="number"
                  name="numberOfPeople"
                  className="w-full bg-gray-200/70 rounded-lg p-4 text-black text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a2f32]"
                  placeholder="Enter the number of people"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Budget */}
              <div>
                <label className="block text-black text-lg md:text-xl font-medium font-['Source_Sans_Pro'] mb-2">
                  What’s Your Budget?
                </label>
                <input
                  type="number"
                  name="budget"
                  className="w-full bg-gray-200/70 rounded-lg p-4 text-black text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a2f32]"
                  placeholder="Enter your budget"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Mode of Travel */}
              <div>
                <label className="block text-black text-lg md:text-xl font-medium font-['Source_Sans_Pro'] mb-2">
                  What’s Your Mode of Travel?
                </label>
                <div className="flex gap-4">
                  {["Car", "Train", "Plane"].map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      name="modeOfTravel"
                      value={mode.toLowerCase()}
                      className="flex-1 bg-gray-200/70 rounded-lg py-3 text-black text-lg hover:bg-[#1a2f32] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1a2f32]"
                      onClick={() => setFormData({ ...formData, modeOfTravel: mode.toLowerCase() })}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              {/* Meal Preferences */}
              <div>
                <label className="block text-black text-lg md:text-xl font-medium font-['Source_Sans_Pro'] mb-2">
                  What’s Your Meal Preference?
                </label>
                <div className="flex gap-4">
                  {["Veg", "Non-Veg", "Vegan"].map((meal) => (
                    <button
                      key={meal}
                      type="button"
                      name="vegOrnonveg"
                      value={meal.toLowerCase()}
                      className="flex-1 bg-gray-200/70 rounded-lg py-3 text-black text-lg hover:bg-[#1a2f32] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1a2f32]"
                      onClick={() => setFormData({ ...formData, vegOrnonveg: meal.toLowerCase() })}
                    >
                      {meal}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#1a2f32] text-white py-4 px-8 rounded-xl text-lg md:text-xl font-bold hover:bg-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#1a2f32]"
                  disabled={loading}
                >
                  {loading ? "Generating..." : "SUBMIT"}
                </button>
              </div>
            </form>
          </div>

          {/* Output Container with Glass Morphism */}
          <div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-black text-2xl md:text-3xl font-semibold font-['Source_Sans_Pro'] mb-6">
              Generated Itinerary
            </h2>
            {itinerary ? (
              <div className="bg-white/70 p-4 rounded-lg shadow">
                <pre className="whitespace-pre-wrap text-black font-['Source_Sans_Pro']">
                  {itinerary}
                </pre>
              </div>
            ) : (
              <p className="text-gray-500 text-center font-['Source_Sans_Pro']">
                Your generated itinerary will appear here.
              </p>
            )}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-red-500 text-center mt-4 font-['Source_Sans_Pro']">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

export default Ai;
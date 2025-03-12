import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./Card";
import Image from "next/image";

const MainLayout = () => {
  const [predictionVote, setPredictionVote] = useState<string>("");
  const [showVoteSuccess, setShowVoteSuccess] = useState(false);

  const handleVote = (team: string) => {
    setPredictionVote(team);
    setShowVoteSuccess(true);
    setTimeout(() => setShowVoteSuccess(false), 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Sidebar */}
        <div className="lg:col-span-3">
          <Card className="bg-gradient-to-br from-teal-800 to-teal-900 text-white">
            <CardHeader>
              <CardTitle>Top Headlines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-400 pl-4">
                  <h3 className="font-bold">{"Egyptian League Transfer Shock!"}</h3>
                  <p className="text-sm text-gray-200">
                    Breaking news from the transfer market...
                  </p>
                </div>
                <div className="border-l-4 border-orange-400 pl-4">
                  <h3 className="font-bold">{"Champions League Final Preview"}</h3>
                  <p className="text-sm text-gray-200">
                    Exclusive analysis ahead of the big game...
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-teal-800">{"Match Predictions"}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">{"Predict Today's Big Match"}</h3>
                <p className="text-sm mb-4">{"Al Ahly vs. Zamalek"}</p>
                <div className="space-y-2">
                  {showVoteSuccess && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4">
                      {"Thanks for your prediction!"}
                    </div>
                  )}
                  <button
                    className={`w-full py-2 px-4 rounded transition-colors ${predictionVote === "alahly"
                      ? "bg-orange-500 text-white"
                      : "bg-teal-800 text-white hover:bg-teal-700"
                      }`}
                    onClick={() => handleVote("alahly")}
                  >
                    Al Ahly Win
                  </button>
                  <button
                    className={`w-full py-2 px-4 rounded transition-colors ${predictionVote === "draw"
                      ? "bg-orange-500 text-white"
                      : "bg-teal-800 text-white hover:bg-teal-700"
                      }`}
                    onClick={() => handleVote("draw")}
                  >
                    Draw
                  </button>
                  <button
                    className={`w-full py-2 px-4 rounded transition-colors ${predictionVote === "zamalek"
                      ? "bg-orange-500 text-white"
                      : "bg-teal-800 text-white hover:bg-teal-700"
                      }`}
                    onClick={() => handleVote("zamalek")}
                  >
                    Zamalek Win
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content - Same as before but with updated colors */}
        <div className="lg:col-span-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-teal-800">{"Breaking News"}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    width={800}
                    height={400}
                    src="https://placehold.co/800x400"
                    alt="Featured news"
                    unoptimized={true}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h2 className="text-white text-xl font-bold">
                      {"Breaking: Major Transfer News"}
                    </h2>
                  </div>
                </div>

                <div className="grid gap-6">
                  <div className="border-b pb-4">
                    <h3 className="font-bold text-lg mb-2">
                      {"Salah: 'We'll Win the Title'"}
                    </h3>
                    <p className="text-gray-600">
                      {"Liverpool's star forward makes bold prediction ahead of crucial match..."}
                    </p>
                  </div>
                  <div className="border-b pb-4">
                    <h3 className="font-bold text-lg mb-2">
                      {"Interview of the Week"}
                    </h3>
                    <div className="aspect-video bg-gray-200 rounded-lg">
                      <Image
                        unoptimized={true}
                        width={800}
                        height={450}
                        src="https://placehold.co/800x450"
                        alt="Interview video thumbnail"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar - Same as before but with updated colors */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-orange-500">
                {"Today's Fixtures"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span>{"Al Ahly"}</span>
                    <span className="font-bold">2 - 1</span>
                    <span>{"Zamalek"}</span>
                  </div>
                  <div className="text-xs text-gray-500 text-center mt-1">
                    {"Live - 75'"}
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span>{"Pyramids"}</span>
                    <span className="font-bold">vs</span>
                    <span>{"Al Masry"}</span>
                  </div>
                  <div className="text-xs text-gray-500 text-center mt-1">
                    {"Today - 20:00"}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-orange-500">{"Trending"}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-bold">Viral Goal of the Week</h3>
                  <p className="text-sm text-gray-600">
                    {"Amazing bicycle kick goes viral..."}
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-bold">Top Transfer Rumors</h3>
                  <p className="text-sm text-gray-600">
                    {"Latest updates from the market..."}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

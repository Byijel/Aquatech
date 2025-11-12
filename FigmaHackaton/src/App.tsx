import { useState } from 'react';
import { ChallengeOverview } from './components/ChallengeOverview';
import { MissionModal } from './components/MissionModal';
import { UnderwaterBackground } from './components/UnderwaterBackground';
import { SwimmingIllustrations } from './components/SwimmingIllustrations';
import { UnderwaterFloor } from './components/UnderwaterFloor';
import { Fish, Waves } from 'lucide-react';

// Mock data structure based on the API response
const mockData = {
  id: "b92f82c4-db4b-4442-b2ae-3b66088f1267",
  teamId: "dad1df0b-4e71-4c85-9da1-76784effeb5b",
  closed: false,
  problems: [
    {
      name: "Aqua-Infrastructure",
      description: "Building safe, self-sustaining underwater structures is essential to survive and thrive in Aqua Topia.",
      solved: false,
      score: 25,
      badgeUrl: "AQUA_INFRA_BADGE",
      mission: [
        {
          id: "8958f1cf-a620-42b9-b230-7919c6005ee0",
          name: "Viewport Protector",
          objective: "Reverse the following String",
          parameters: "OZufNvPsq8StZ4NDiAyGrY1OPZRaA1BvsA83m93BoWNGovidCh40kwROyGo4daxpPSks0m5Jd8i8FlItFt6xkHZ0yhxJ7x7vXxKGKYSjYzEE0GSrpwcsc4upsDFQ97qkX7IaApV7B",
          difficulty: 5,
          remainingAttempts: "1",
          solved: false,
          effect: "Ultra-strong transparent material for safe underwater observation windows."
        },
        {
          id: "540b72b3-e57b-4ab7-8997-98f23c4f328b",
          name: "Water Purification Unit",
          objective: "What is the Perfect Number in the nth position (10-based)?",
          parameters: "{\"nth element\": \"5\"}",
          difficulty: 5,
          remainingAttempts: "1",
          solved: false,
          effect: "A compact unit that converts contaminated water into drinkable water, indispensable for any base in Aqua Topia."
        },
        {
          id: "6b59fc9f-4d30-401a-8c27-55fa0af3f6dd",
          name: "Airlock System",
          objective: "The following string is encrypted with ROT13. Decode it to find the answer.",
          parameters: "tsxsygpwurlquo",
          difficulty: 15,
          remainingAttempts: "2",
          solved: false,
          effect: "Maintains pressure equilibrium when transitioning between water and air environments."
        }
      ]
    },
    {
      name: "Data Visualization",
      description: "The depths are full of data. Visualizing water quality and currents is the key to insight and management.",
      solved: false,
      score: 21,
      badgeUrl: "DATA_VIS_BADGE",
      mission: [
        {
          id: "7009cbef-94d8-45e4-9e4d-502bae1e4730",
          name: "Weather Pattern Predictor",
          objective: "Calculate the checksum of the given string. The checksum is the sum of all ASCII values modulo 1000.",
          parameters: "nLtGwvdRr2BOQ21u",
          difficulty: 8,
          remainingAttempts: "5",
          solved: false,
          effect: "Forecasts storms and weather events based on oceanic data."
        },
        {
          id: "0520ccd3-bb89-4434-9d00-cae877718005",
          name: "Ecosystem Health Dashboard",
          objective: "Calculate the Luhn check digit for the given number sequence. The Luhn algorithm is a checksum formula used to validate identification numbers.",
          parameters: "566344663773",
          difficulty: 8,
          remainingAttempts: "10",
          solved: false,
          effect: "Comprehensive overview of biodiversity and ecosystem vitality indicators."
        },
        {
          id: "1bb6455d-945b-468e-8c05-227fd219f0e9",
          name: "Temperature Heat Map",
          objective: "Determine if the following string is a palindrome. Answer with \"true\" or \"false\".",
          parameters: "3hb16efmfe61bh3",
          difficulty: 5,
          remainingAttempts: "1",
          solved: false,
          effect: "Thermal imaging system for detecting underwater temperature anomalies."
        }
      ]
    },
    {
      name: "Marine Biology",
      description: "Understanding and protecting the diverse marine life is crucial for maintaining the balance of Aqua Topia's ecosystem.",
      solved: false,
      score: 20,
      badgeUrl: "MARINE_BIO_BADGE",
      mission: [
        {
          id: "38ab4429-cf7c-4e35-8bd8-274619aa24ca",
          name: "Invasive Species Detector",
          objective: "Find the missing numbers in the sequence. Return them as a comma-separated string",
          parameters: "2,3,8,13,21,34,55,89,144,377,610,987,1597,2584,4181,6765,10946",
          difficulty: 10,
          remainingAttempts: "10",
          solved: false,
          effect: "Alerts when non-native species threaten local ecosystems."
        },
        {
          id: "0956586c-8e70-4322-8f28-866ada6f03ef",
          name: "Bioluminescence Scanner",
          objective: "Replace string at given index in arrayList with the replacement, and return the whole array.",
          parameters: "{\"index\": \"5\", \"replacement\": \"GpexG\", \"arrayList\": \"['7aX', '13Z', 'Cbdi', 'Wyj9f', 'qsP3', 'PNH', 'ULr', 'KFwU', 'Bp3rV', '23y']\"}",
          difficulty: 5,
          remainingAttempts: "1",
          solved: false,
          effect: "Detects and studies light-producing organisms in the deep ocean."
        },
        {
          id: "5b4e405a-a623-4b46-b9c4-7f4ca31ac69e",
          name: "Fish Population Counter",
          objective: "Decode the following String. It uses a quite common encoding, find out which!",
          parameters: "OGw0TGJNeDZpVlRSOWtDN1NmQzRRUHFQVGs3cXdieWVsSnlGN0IxMWQzQ3RJTk8=",
          difficulty: 5,
          remainingAttempts: "10",
          solved: false,
          effect: "Automated census system for tracking fish stocks and migration patterns."
        }
      ]
    }
  ]
};

export default function App() {
  const [selectedMission, setSelectedMission] = useState<any>(null);
  const [categoryData, setCategoryData] = useState(mockData.problems);

  const handleMissionClick = (mission: any, categoryName: string) => {
    setSelectedMission({ ...mission, categoryName });
  };

  const handleSubmitAnswer = (missionId: string, answer: string) => {
    console.log('Submitting answer:', { missionId, answer });
    // Here you would call your API to submit the answer
    // For now, we'll just close the modal
    setSelectedMission(null);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#2a5f6b] via-[#3d7a87] to-[#1a3d47]">
      <UnderwaterBackground />
      <SwimmingIllustrations />
      <UnderwaterFloor />
      
      {/* Header */}
      <header className="relative z-10 pt-12 pb-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-cyan-50 text-8xl tracking-[0.2em] mb-2" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>
            AQUATOPIA
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryData.map((category, index) => (
              <ChallengeOverview
                key={index}
                category={category}
                onMissionClick={handleMissionClick}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Mission Modal */}
      {selectedMission && (
        <MissionModal
          mission={selectedMission}
          onClose={() => setSelectedMission(null)}
          onSubmit={handleSubmitAnswer}
        />
      )}
    </div>
  );
}
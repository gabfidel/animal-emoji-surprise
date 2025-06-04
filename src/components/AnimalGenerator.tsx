
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getRandomAnimal, type Animal } from "@/data/animals";
import AnimalGrid from "./AnimalGrid";

const AnimalGenerator = () => {
  const [currentAnimal, setCurrentAnimal] = useState<Animal | null>(null);
  const [showGrid, setShowGrid] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateAnimal = async () => {
    setIsGenerating(true);
    setShowGrid(false);
    
    // Add a small delay for better UX
    setTimeout(() => {
      const animal = getRandomAnimal();
      setCurrentAnimal(animal);
      setIsGenerating(false);
    }, 500);
  };

  const handleGenerateAnother = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const animal = getRandomAnimal();
      setCurrentAnimal(animal);
      setIsGenerating(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4 animate-fade-in">
          🐾 Random Animal Generator
        </h1>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-8 animate-fade-in font-medium">
          Discover Amazing Animals with Our Random Animal Generator
        </h2>
        
        <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto animate-fade-in">
          Click the button below to generate a random animal and learn fascinating facts about creatures from around the world!
        </p>

        {!currentAnimal ? (
          <Button
            onClick={handleGenerateAnimal}
            disabled={isGenerating}
            className="text-xl px-8 py-6 mb-8 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 transform hover:scale-105 transition-all duration-200 shadow-lg animate-fade-in"
          >
            {isGenerating ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Generating...
              </div>
            ) : (
              "🎲 Generate Random Animal"
            )}
          </Button>
        ) : (
          <div className="space-y-6">
            <Card className="max-w-2xl mx-auto shadow-2xl animate-scale-in">
              <CardContent className="p-8">
                <div className="text-6xl mb-4 animate-fade-in">{currentAnimal.emoji}</div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4 animate-fade-in">
                  {currentAnimal.name}
                </h3>
                <div className="mb-6 animate-fade-in">
                  <img
                    src={currentAnimal.imageUrl}
                    alt={currentAnimal.name}
                    className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg"
                    loading="lazy"
                  />
                </div>
                <p className="text-lg text-gray-600 leading-relaxed animate-fade-in">
                  {currentAnimal.fact}
                </p>
              </CardContent>
            </Card>
            
            <Button
              onClick={handleGenerateAnother}
              disabled={isGenerating}
              className="text-lg px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              {isGenerating ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Generating...
                </div>
              ) : (
                "🔄 Generate Another Animal"
              )}
            </Button>
          </div>
        )}

        <AnimalGrid isVisible={showGrid} />
      </div>
    </div>
  );
};

export default AnimalGenerator;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getRandomAnimal, type Animal } from "@/data/animals";
import { trackAnimalGeneration } from "@/utils/analytics";
import AnimalGrid from "./AnimalGrid";
import FAQ from "./FAQ";

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
      
      // Track animal generation event
      trackAnimalGeneration(animal.name);
    }, 500);
  };

  const handleGenerateAnother = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const animal = getRandomAnimal();
      setCurrentAnimal(animal);
      setIsGenerating(false);
      
      // Track animal generation event
      trackAnimalGeneration(animal.name);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex flex-col items-center justify-center py-16 px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4 animate-fade-in pt-8">
          🐾 Random Animal Generator
        </h1>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-8 animate-fade-in font-medium">
          Discover Amazing Animals with Our Random Animal Generator
        </h2>
        
        <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto animate-fade-in">
          Click the button below to generate a random animal and learn fascinating facts about creatures from around the world!
        </p>

        <Button
          onClick={currentAnimal ? handleGenerateAnother : handleGenerateAnimal}
          disabled={isGenerating}
          className="text-xl px-8 py-6 mb-8 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 transform hover:scale-105 transition-all duration-200 shadow-lg animate-fade-in"
        >
          {isGenerating ? (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Generating...
            </div>
          ) : currentAnimal ? (
            "🔄 Generate Another Animal"
          ) : (
            "🎲 Generate Random Animal"
          )}
        </Button>

        {currentAnimal && (
          <Card className="max-w-2xl mx-auto shadow-2xl animate-scale-in mb-16">
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
        )}

        {currentAnimal && <div className="py-32 mb-32"></div>}

        <AnimalGrid isVisible={showGrid} />
        
        <div className="pb-16">
          <FAQ />
        </div>
      </div>
    </div>
  );
};

export default AnimalGenerator;

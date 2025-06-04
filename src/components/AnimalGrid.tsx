
import { animals } from "@/data/animals";

interface AnimalGridProps {
  isVisible: boolean;
}

const AnimalGrid = ({ isVisible }: AnimalGridProps) => {
  if (!isVisible) return null;

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 px-4">
      <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2 sm:gap-3 md:gap-4">
        {animals.map((animal, index) => (
          <div
            key={animal.name}
            className="text-2xl sm:text-3xl md:text-4xl animate-fade-in hover:scale-110 transition-transform duration-200 cursor-default"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
            title={animal.name}
          >
            {animal.emoji}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimalGrid;

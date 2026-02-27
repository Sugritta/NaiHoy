"use client";

import React, { useState } from "react";
import ChatBox from "./_components/ChatBox";
import TripPlanDisplay from "./_components/TripPlanDisplay";

interface Place {
  id: string;
  name: string;
  description: string;
  image?: string;
  duration?: string;
  estimatedCost?: string;
  rating?: number;
}

function CreateNewTrip(){
  const [places, setPlaces] = useState<Place[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handlePlacesExtracted = (newPlaces: Place[]) => {
    setPlaces(newPlaces);
  };

    return (
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-10 py-8 h-screen">

        <div>
            <ChatBox onPlacesExtracted={handlePlacesExtracted} />
        </div>
        <div>
            <TripPlanDisplay places={places} isLoading={isLoading} />            
        </div>
        
    </div>

    )
}

export default CreateNewTrip;
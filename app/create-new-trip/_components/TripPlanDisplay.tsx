'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Clock, DollarSign, Star } from 'lucide-react';

interface Place {
  id: string;
  name: string;
  description: string;
  image?: string;
  duration?: string;
  estimatedCost?: string;
  rating?: number;
}

interface TripPlanDisplayProps {
  places: Place[];
  isLoading?: boolean;
}

function TripPlanDisplay({ places, isLoading = false }: TripPlanDisplayProps) {
  return (
    <div className="h-full flex flex-col bg-white rounded-lg shadow-lg p-6 overflow-hidden">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">แผนการท่องเที่ยว</h2>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto space-y-4">
        <AnimatePresence mode="popLayout">
          {places.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full flex items-center justify-center text-gray-400"
            >
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p>ถามฉันเกี่ยวกับสถานที่ท่องเที่ยว</p>
                <p className="text-sm mt-1">แล้วฉันจะแนะนำสถานที่ที่เหมาะสำหรับคุณ</p>
              </div>
            </motion.div>
          ) : (
            places.map((place, index) => (
              <motion.div
                key={place.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                {/* Place Header */}
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-red-500 shrink-0" />
                      {place.name}
                    </h3>
                  </div>
                  {place.rating && (
                    <div className="flex items-center gap-1 ml-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-medium text-gray-700">{place.rating}</span>
                    </div>
                  )}
                </div>

                {/* Image */}
                {place.image && (
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-40 object-cover rounded-md mb-3"
                  />
                )}

                {/* Description */}
                <p className="text-md text-gray-600 mb-3 line-clamp-2">
                  {place.description}
                </p>

                {/* Details */}
                <div className="flex flex-wrap gap-4 text-sm">
                  {place.duration && (
                    <div className="flex items-center gap-1 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{place.duration}</span>
                    </div>
                  )}
                  {place.estimatedCost && (
                    <div className="flex items-center gap-1 text-gray-500">
                      <DollarSign className="w-4 h-4" />
                      <span>{place.estimatedCost}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>

        {isLoading && places.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-gray-500"
          >
            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" />
            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-100" />
            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-200" />
          </motion.div>
        )}
      </div>

      {/* Footer */}
      {places.length > 0 && (
        <div className="mt-4 pt-4 border-t text-xs text-gray-500 text-center">
          แสดง {places.length} สถานที่
        </div>
      )}
    </div>
  );
}

export default TripPlanDisplay;

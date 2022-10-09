import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Car from './Car';
import FindBike from './FindBike';
import FindHandicap from './FindHandicap';
import FindOffRoad from './FindOffRoad';
import FindRecall from './FindRecall';
import FindTruck from './FindTruck';
import NotFound from './NotFound';


export default function MainRouting() {
  return (
    <Routes>
        <Route path="/" element={<Car />} />
        <Route path="/truck" element={<FindTruck />} />
        <Route path="/bike" element={<FindBike />} />
        <Route path="/offroad" element={<FindOffRoad />} />
        <Route path="/handicap" element={<FindHandicap />} />
        <Route path="/recall" element={<FindRecall />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

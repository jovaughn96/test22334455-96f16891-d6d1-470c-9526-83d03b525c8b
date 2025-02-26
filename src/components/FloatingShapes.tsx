import React from 'react';
// Removed React import, and fixed the type in props.
import { FC, ReactNode } from "react"

interface FloatingShapesProps {
  children: ReactNode;
}

const FloatingShapes: FC<FloatingShapesProps> = ({ children }) => {
  return (
    <style jsx>{`
      // Your styles here
    `}</style>
  )
}

export default FloatingShapes;

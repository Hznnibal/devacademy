// "use client";

// import { ArrowLeft, ArrowRight } from "lucide-react";

// interface RoadmapArrowProps {
//     direction: "right" | "left";
//     className?: string;
// }

// export function RoadmapArrow({ direction, className = "" }: RoadmapArrowProps) {
//     const getArrow = () => {
//         switch (direction) {
//             case "right":
//                 return (
//                     <div className={`flex items-center ${className}`}>
//                         <div className="h-0.5 w-3 bg-blue-500"></div>
//                         <ArrowRight className="w-3 h-3 text-blue-500" strokeWidth={2.5} />
//                     </div>
//                 );
//             case "left":
//                 return (
//                     <div className={`flex items-center ${className}`}>
//                         <ArrowLeft className="w-3 h-3 text-blue-500" strokeWidth={2.5} />
//                         <div className="h-0.5 w-3 bg-blue-500"></div>
//                     </div>
//                 );
//             default:
//                 return null;
//         }
//     };

//     return getArrow();
// }
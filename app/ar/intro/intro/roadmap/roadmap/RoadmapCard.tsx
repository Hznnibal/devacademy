// "use client";

// import { Card } from "@/components/ui/card";
// import { LucideIcon } from "lucide-react";

// interface RoadmapCardProps {
//     title: string;
//     description: string;
//     icon: LucideIcon;
//     subItems?: string[];
// }

// export function RoadmapCard({ title, description, icon: Icon, subItems }: RoadmapCardProps) {
//     const IconComponent = Icon;

//     return (
//         <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border-2 hover:border-blue-500">
//             <div className="flex flex-col items-center text-center space-y-4">
//                 <Icon className="w-10 h-10 text-blue-500" />
//                 <h3 className="text-xl font-semibold">{title}</h3>
//                 <p className="text-gray-600 dark:text-gray-300">{description}</p>
//                 {subItems && (
//                     <div className="w-full pt-4 border-t border-gray-200 dark:border-gray-700">
//                         <ul className="space-y-2">
//                             {subItems.map((item, index) => (
//                                 <li key={index} className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 p-2 rounded-md">
//                                     {item}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//             </div>
//         </Card>
//     );
// }
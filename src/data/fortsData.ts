import shivneriImage from "@/assets/shivneri-fort.jpg";
import raigadImage from "@/assets/raigad-fort.jpg";
import pratapgadImage from "@/assets/pratapgad-fort.jpg";

export interface Fort {
  id: string;
  name: string;
  location: string;
  district: string;
  difficulty: "Easy" | "Moderate" | "Difficult" | "Expert";
  historicalPeriod: string;
  rating: number;
  reviews: number;
  distance: string;
  image: string;
  description: string;
  features: string[];
}

export const fortsData: Fort[] = [
  {
    id: "1",
    name: "Shivneri Fort",
    location: "Junnar",
    district: "Pune",
    difficulty: "Moderate",
    historicalPeriod: "Maratha Empire",
    rating: 4.6,
    reviews: 1247,
    distance: "95 km from Mumbai",
    image: shivneriImage,
    description: "Birthplace of Chhatrapati Shivaji Maharaj, this historic fort offers stunning views and rich Maratha heritage.",
    features: ["Birthplace of Shivaji", "Museum", "Parking", "Guide Available"]
  },
  {
    id: "2", 
    name: "Raigad Fort",
    location: "Mahad",
    district: "Raigad",
    difficulty: "Moderate",
    historicalPeriod: "Maratha Empire",
    rating: 4.8,
    reviews: 2156,
    distance: "120 km from Mumbai",
    image: raigadImage,
    description: "Capital of the Maratha Empire, featuring the coronation site of Shivaji Maharaj and breathtaking mountain views.",
    features: ["Ropeway Access", "Historical Museum", "Food Court", "Photography"]
  },
  {
    id: "3",
    name: "Pratapgad Fort", 
    location: "Mahabaleshwar",
    district: "Satara",
    difficulty: "Easy",
    historicalPeriod: "Maratha Empire",
    rating: 4.5,
    reviews: 1893,
    distance: "150 km from Mumbai",
    image: pratapgadImage,
    description: "Site of the historic Battle of Pratapgad, known for its strategic importance and panoramic valley views.",
    features: ["Easy Trek", "Temple", "Scenic Views", "Historical Significance"]
  },
  {
    id: "4",
    name: "Sinhagad Fort",
    location: "Pune",
    district: "Pune", 
    difficulty: "Easy",
    historicalPeriod: "Maratha Empire",
    rating: 4.4,
    reviews: 3247,
    distance: "170 km from Mumbai",
    image: shivneriImage, // Reusing for demo
    description: "Popular weekend getaway near Pune, famous for the brave Tanaji Malusare and Maratha military history.",
    features: ["Weekend Trek", "Food Stalls", "Easy Access", "Night Trek"]
  },
  {
    id: "5",
    name: "Rajgad Fort",
    location: "Gunjavane",
    district: "Pune",
    difficulty: "Difficult", 
    historicalPeriod: "Maratha Empire",
    rating: 4.7,
    reviews: 976,
    distance: "185 km from Mumbai",
    image: raigadImage, // Reusing for demo
    description: "King of forts, this massive fortress was Shivaji's favorite and served as his capital for over 25 years.",
    features: ["Challenging Trek", "Multiple Peaks", "Rich History", "Adventure"]
  },
  {
    id: "6",
    name: "Lohagad Fort",
    location: "Lonavala",
    district: "Pune",
    difficulty: "Easy",
    historicalPeriod: "Maratha Empire", 
    rating: 4.3,
    reviews: 2847,
    distance: "96 km from Mumbai",
    image: pratapgadImage, // Reusing for demo
    description: "Iron fort near Lonavala, famous for its scorpion-shaped tail and monsoon beauty with lush green surroundings.",
    features: ["Monsoon Special", "Easy Trek", "Scenic Beauty", "Photography"]
  }
];

export const getFortsData = () => fortsData;

export const getFortById = (id: string) => fortsData.find(fort => fort.id === id);

export const getFortsByDistrict = (district: string) => 
  fortsData.filter(fort => fort.district.toLowerCase() === district.toLowerCase());

export const getFortsByDifficulty = (difficulty: string) =>
  fortsData.filter(fort => fort.difficulty.toLowerCase() === difficulty.toLowerCase());
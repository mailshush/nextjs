export type Clothes = {
  id: string;
  name: string;
  price: number;
  category: string;
  size: ("S" | "M" | "L" | "XL")[];
  color: string;
  brand: string;
  stock: number;
  description: string;
  imageUrl: string;
};

export const mockData: Clothes[] = [
  {
    id: "1",
    name: "クラシック白シャツ",
    price: 5900,
    category: "トップス",
    size: ["S", "M", "L", "XL"],
    color: "白",
    brand: "Basic Style",
    stock: 50,
    description: "上質なコットン素材を使用したベーシックな白シャツ",
    imageUrl: "/images/white-shirt.jpg"
  },
  {
    id: "2",
    name: "スリムフィットジーンズ",
    price: 8900,
    category: "ボトムス",
    size: ["S", "M", "L", "XL"],
    color: "インディゴ",
    brand: "Denim Co.",
    stock: 35,
    description: "ストレッチ素材で快適な穿き心地のスリムジーンズ",
    imageUrl: "/images/slim-jeans.jpg"
  },
  {
    id: "3",
    name: "カシミヤセーター",
    price: 15900,
    category: "トップス",
    size: ["M", "L"],
    color: "グレー",
    brand: "Luxury Knit",
    stock: 20,
    description: "上質なカシミヤ100%の暖かいニットセーター",
    imageUrl: "/images/cashmere-sweater.jpg"
  },
  {
    id: "4",
    name: "テーラードジャケット",
    price: 23900,
    category: "アウター",
    size: ["M", "L", "XL"],
    color: "ネイビー",
    brand: "Classic Tailor",
    stock: 15,
    description: "ビジネスからカジュアルまで対応できる万能ジャケット",
    imageUrl: "/images/blazer.jpg"
  },
  {
    id: "5",
    name: "プリーツスカート",
    price: 7900,
    category: "ボトムス",
    size: ["S", "M", "L"],
    color: "ブラック",
    brand: "Elegant Style",
    stock: 25,
    description: "上品な光沢のある素材を使用したプリーツスカート",
    imageUrl: "/images/pleated-skirt.jpg"
  },
  {
    id: "6",
    name: "フローラルワンピース",
    price: 12900,
    category: "ワンピース",
    size: ["S", "M", "L", "XL"],
    color: "花柄",
    brand: "Floral Collection",
    stock: 30,
    description: "春夏シーズンにぴったりの花柄ワンピース",
    imageUrl: "/images/floral-dress.jpg"
  },
  {
    id: "7",
    name: "Vネックカーディガン",
    price: 6900,
    category: "トップス",
    size: ["S", "M", "L"],
    color: "ベージュ",
    brand: "Comfort Wear",
    stock: 40,
    description: "軽くて着心地の良いベーシックカーディガン",
    imageUrl: "/images/cardigan.jpg"
  }
];
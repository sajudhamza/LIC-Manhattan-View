// Room images from licmanhattanview.com (Squarespace)
const SQUARESPACE_IMG = (id, file) =>
  `https://images.squarespace-cdn.com/content/v1/67d5a49b9a91373d48c64f69/${id}/${file}?format=2500w`

/**
 * All room types with slugs for routing. From licmanhattanview.com and licmanhattanviewhotel.com.
 * Rooms with full copy and images first; then additional types with short copy.
 */
export const rooms = [
  {
    slug: 'manhattan-suite',
    name: 'Manhattan Suite',
    beds: 'King Bed',
    description: 'The Manhattan Suite is located on the top floor with stunning views of Manhattan. It features a king-size bed, big windows, and two private balconies, filling the space with natural light. A perfect blend of comfort and luxury above the city.',
    image: SQUARESPACE_IMG('b8e19ef1-c891-4f4a-a81b-2e4aabd8a0c5', '244760768.jpg'),
    amenities: ['Two private balconies', 'King-size bed', 'Floor-to-ceiling windows', 'Manhattan skyline views', 'Natural light'],
  },
  {
    slug: 'executive-suite-king',
    name: 'Executive Suite',
    beds: 'King Bed',
    description: 'Experience comfort and elegance in this spacious retreat featuring a luxurious king bed and floor-to-ceiling windows that flood the room with natural light. Perfect for a restful and refreshing stay.',
    image: SQUARESPACE_IMG('ec5f6cea-bce6-48a5-b83e-ac87d16748c9', '245801041.jpg'),
    amenities: ['King bed', 'Floor-to-ceiling windows', 'Natural light', 'Spacious layout'],
  },
  {
    slug: 'premium-suite-two-queen',
    name: 'Premium Suite',
    beds: 'Two Queen Beds',
    description: 'The Premium Suite offers two queen beds and private balconies, creating a bright and spacious retreat with stunning views. Designed for comfort and style, it\'s the perfect space to unwind and enjoy a luxurious stay.',
    image: SQUARESPACE_IMG('f0346051-65c3-4dd4-9ddb-6b2820af34c6', 'DSC01679.jpg'),
    amenities: ['Two queen beds', 'Private balconies', 'Stunning views', 'Bright and spacious'],
  },
  {
    slug: 'executive-suite-two-queen',
    name: 'Executive Suite',
    beds: 'Two Queen Beds',
    description: 'Designed for comfort and space, this room features two cozy queen beds and large windows that offer plenty of natural light. Ideal for families or groups, it provides a bright and welcoming atmosphere for a restful stay.',
    image: SQUARESPACE_IMG('3676a2fc-db9a-40c2-9e9b-d4e37d91f719', 'IMG_5729.JPG'),
    amenities: ['Two queen beds', 'Large windows', 'Natural light', 'Family-friendly'],
  },
  {
    slug: 'premium-suite-king',
    name: 'Premium Suite',
    beds: 'King Bed',
    description: 'The Premium Suite features a king-size bed and private balconies, offering stunning views and plenty of natural light. A perfect blend of comfort and elegance for a luxurious stay.',
    image: SQUARESPACE_IMG('5a27b01e-6f35-44f6-bd6f-2faa43b42856', 'DSC01708.jpg'),
    amenities: ['King-size bed', 'Private balconies', 'Skyline views', 'Natural light'],
  },
  {
    slug: 'executive-suite-queen',
    name: 'Executive Suite',
    beds: 'Queen Bed',
    description: 'A stylish and comfortable retreat featuring a queen bed and expansive windows that fill the space with natural light. Enjoy a bright and inviting atmosphere with scenic views, perfect for a relaxing stay.',
    image: SQUARESPACE_IMG('0164241a-0702-4a86-b417-2b0a00933056', 'pexels-chris-tork-423962791-17029559.jpg'),
    amenities: ['Queen bed', 'Expansive windows', 'Scenic views', 'Relaxing atmosphere'],
  },
  {
    slug: 'classic-queen-room',
    name: 'Classic Queen Room',
    beds: 'Queen Bed',
    description: 'A comfortable guest room with a queen bed, ideal for solo travelers or couples. Enjoy modern amenities and easy access to the Manhattan skyline views from our building.',
    image: SQUARESPACE_IMG('0164241a-0702-4a86-b417-2b0a00933056', 'pexels-chris-tork-423962791-17029559.jpg'),
    amenities: ['Queen bed', 'Modern amenities', 'Wi-Fi', 'Coffee & tea'],
  },
  {
    slug: 'deluxe-two-queen-room',
    name: 'Deluxe Two Queen Room',
    beds: 'Two Queen Beds',
    description: 'Spacious room with two queen beds, perfect for families or small groups. Features contemporary furnishings and in-room amenities for a comfortable stay.',
    image: SQUARESPACE_IMG('3676a2fc-db9a-40c2-9e9b-d4e37d91f719', 'IMG_5729.JPG'),
    amenities: ['Two queen beds', 'Spacious layout', 'Family-friendly', 'Contemporary furnishings'],
  },
  {
    slug: 'deluxe-king-room-with-balcony',
    name: 'Deluxe King Room with Balcony',
    beds: 'King Bed',
    description: 'Deluxe accommodation with a private balcony overlooking the Manhattan skyline. King bed, premium amenities, and unforgettable views.',
    image: SQUARESPACE_IMG('5a27b01e-6f35-44f6-bd6f-2faa43b42856', 'DSC01708.jpg'),
    amenities: ['Private balcony', 'King bed', 'Manhattan views', 'Premium amenities'],
  },
  {
    slug: 'classic-king-room',
    name: 'Classic King Room',
    beds: 'King Bed',
    description: 'Classic king room with comfortable bedding and modern amenities. A restful retreat in the heart of Long Island City.',
    image: SQUARESPACE_IMG('ec5f6cea-bce6-48a5-b83e-ac87d16748c9', '245801041.jpg'),
    amenities: ['King bed', 'Modern amenities', 'Wi-Fi', 'In-room safe'],
  },
  {
    slug: 'deluxe-queen-room',
    name: 'Deluxe Queen Room',
    beds: 'Queen Bed',
    description: 'Deluxe queen room with upgraded amenities and comfortable seating. Perfect for a relaxing stay with easy access to area attractions.',
    image: SQUARESPACE_IMG('0164241a-0702-4a86-b417-2b0a00933056', 'pexels-chris-tork-423962791-17029559.jpg'),
    amenities: ['Queen bed', 'Upgraded amenities', 'Comfortable seating', 'Wi-Fi'],
  },
  {
    slug: 'deluxe-queen-room-with-balcony',
    name: 'Deluxe Queen Room with Balcony',
    beds: 'Queen Bed',
    description: 'Deluxe room with private balcony and queen bed. Enjoy fresh air and Manhattan skyline views from your own terrace.',
    image: SQUARESPACE_IMG('5a27b01e-6f35-44f6-bd6f-2faa43b42856', 'DSC01708.jpg'),
    amenities: ['Private balcony', 'Queen bed', 'Skyline views', 'Terrace access'],
  },
  {
    slug: 'deluxe-king-room-with-balcony-ada',
    name: 'Deluxe King Room with Balcony - ADA',
    beds: 'King Bed',
    description: 'Accessible deluxe king room with private balcony. Designed for comfort and mobility, with Manhattan views and ADA-compliant features.',
    image: SQUARESPACE_IMG('5a27b01e-6f35-44f6-bd6f-2faa43b42856', 'DSC01708.jpg'),
    amenities: ['ADA accessible', 'Private balcony', 'King bed', 'Mobility-friendly'],
  },
  {
    slug: 'deluxe-two-queen-room-with-balcony',
    name: 'Deluxe Two Queen Room with Balcony',
    beds: 'Two Queen Beds',
    description: 'Spacious deluxe room with two queen beds and a private balcony. Ideal for families seeking extra space and stunning views.',
    image: SQUARESPACE_IMG('f0346051-65c3-4dd4-9ddb-6b2820af34c6', 'DSC01679.jpg'),
    amenities: ['Two queen beds', 'Private balcony', 'Family-friendly', 'Skyline views'],
  },
  {
    slug: 'queens-suite',
    name: 'Queens Suite',
    beds: 'Suite',
    description: 'The Queens Suite offers a premium stay with separate living space, premium bedding, and outstanding Manhattan skyline views. Perfect for extended stays or special occasions.',
    image: SQUARESPACE_IMG('b8e19ef1-c891-4f4a-a81b-2e4aabd8a0c5', '244760768.jpg'),
    amenities: ['Separate living area', 'Premium bedding', 'Skyline views', 'Spacious layout'],
  },
  {
    slug: 'classic-two-queen-room',
    name: 'Classic Two Queen Room',
    beds: 'Two Queen Beds',
    description: 'Classic room with two queen beds. Comfortable and convenient for families or groups visiting Long Island City.',
    image: SQUARESPACE_IMG('3676a2fc-db9a-40c2-9e9b-d4e37d91f719', 'IMG_5729.JPG'),
    amenities: ['Two queen beds', 'Wi-Fi', 'Coffee & tea', 'In-room safe'],
  },
  {
    slug: 'executive-suite-with-balcony',
    name: 'Executive Suite with Balcony',
    beds: 'King Bed',
    description: 'Executive-level suite with private balcony, king bed, and floor-to-ceiling windows. The ultimate blend of luxury and Manhattan views.',
    image: SQUARESPACE_IMG('ec5f6cea-bce6-48a5-b83e-ac87d16748c9', '245801041.jpg'),
    amenities: ['Private balcony', 'King bed', 'Floor-to-ceiling windows', 'Executive amenities'],
  },
]

export const getRoomBySlug = (slug) => rooms.find((r) => r.slug === slug)
export const getAllRoomSlugs = () => rooms.map((r) => r.slug)

// Real images from LIC Manhattan View website (licmanhattanview.com - Squarespace)
const SQUARESPACE_IMG = (id, file) =>
  `https://images.squarespace-cdn.com/content/v1/67d5a49b9a91373d48c64f69/${id}/${file}?format=2500w`

export const galleryImages = [
  { src: '/lobby-hero.png', alt: 'Bright lobby and lounge area with natural light and greenery' },
  { src: SQUARESPACE_IMG('b8e19ef1-c891-4f4a-a81b-2e4aabd8a0c5', '244760768.jpg'), alt: 'Manhattan Suite with balcony and Manhattan skyline view' },
  { src: SQUARESPACE_IMG('ec5f6cea-bce6-48a5-b83e-ac87d16748c9', '245801041.jpg'), alt: 'Executive Suite - King Bed' },
  { src: SQUARESPACE_IMG('f0346051-65c3-4dd4-9ddb-6b2820af34c6', 'DSC01679.jpg'), alt: 'Premium Suite - Two Queen Beds' },
  { src: SQUARESPACE_IMG('9904ebaf-ddbd-4c97-8a2f-22f5eea98af4', 'DSC01689.jpg'), alt: 'Suite interior with Manhattan view' },
  { src: SQUARESPACE_IMG('3676a2fc-db9a-40c2-9e9b-d4e37d91f719', 'IMG_5729.JPG'), alt: 'Executive Suite - Two Queen Beds' },
  { src: SQUARESPACE_IMG('5a27b01e-6f35-44f6-bd6f-2faa43b42856', 'DSC01708.jpg'), alt: 'Premium Suite - King Bed' },
  { src: SQUARESPACE_IMG('0164241a-0702-4a86-b417-2b0a00933056', 'pexels-chris-tork-423962791-17029559.jpg'), alt: 'Executive Suite - Queen Bed' },
]

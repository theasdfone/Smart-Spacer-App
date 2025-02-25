// entities.js
export default function entities(sprite) {
  return {
    bunny: {
      position: [50, 300],
      size: [40, 40],
      renderer: <Image source={sprite} style={{ width: 40, height: 40 }} />,
      // Add other properties like physics, etc.
    },
    // Other entities like obstacles, etc.
  };
}
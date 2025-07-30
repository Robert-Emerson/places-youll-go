const express = require("express");
const app = express();
const port = 3000;

// Mock data
const imageUrl = `https://live.staticflickr.com/4732/27468187969_32262e8b61_b.jpg`;

app.get("/images", (req, res) => {
  try {
    let limit = Math.min(req.query.limit || 10, 100);
    let images = new Array(limit).fill({
      coordinates: req.query.coordinates ?? {
        latitude: 40.71427,
        longitude: -74.00597,
      },
      url: imageUrl,
      id: null,
    });

    res.json({
      images: images.map((image, index) => {
        return {
          ...image,
          coordinates: {
            latitude: image.coordinates.latitude + 0.25 * index,
            longitude: image.coordinates.longitude + 0.25 * index,
          },
          id: index,
        };
      }),
      count: images.length,
    });
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

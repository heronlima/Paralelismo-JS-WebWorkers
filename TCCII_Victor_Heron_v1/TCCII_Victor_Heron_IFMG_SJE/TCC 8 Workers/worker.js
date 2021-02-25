addEventListener('message', (d) => {
    const imageData = d.data
    const w = imageData.width;
    const h = imageData.height
    const data = imageData.data

    for (let x = 0; x < w; x++) {
        for (let y = 0; y < h; y++) {
            let index = (x + (y * w)) * 4;
            var red = data[index]
            var green = data[index + 1]
            var blue = data[index + 2]
            var gray = (red + green + blue) / 3
            data[index] = gray;
            data[index + 1] = gray;
            data[index + 2] = gray;
        }
    }

    postMessage(imageData, [imageData.data.buffer]);
})
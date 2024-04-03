export const extractAttributes = (userItem: string) => {
  const userItemArray = userItem.split("-");
  let image = userItemArray[0];
  if (!image.startsWith("https")) {
    image = "https://i.pravatar.cc/400";
  }

  const avatar = processImage(image);
  console.log("0", image);
  const username = userItemArray[1];
  const activity = userItemArray[2];
  const score = +userItemArray[3];

  return { avatar, username, activity, score };
};

const processImage = (imageUrl: string) => {
  // guarantee unique images
  const uniqueId = Math.floor(Math.random() * 1000000000);

  // reduce image size
  const idx = imageUrl.trim().indexOf("400");
  const modifiedURl = imageUrl.slice(0, idx) + "50";
  return `${modifiedURl.trim()}?u=${uniqueId}.trim()`;
};

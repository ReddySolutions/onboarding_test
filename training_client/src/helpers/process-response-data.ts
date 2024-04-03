export const extractAttributes = (userItem: string) => {
  const userItemArray = userItem.split("-");
  const avatar = processImage(userItemArray[0]);
  const username = userItemArray[1];
  const activity = userItemArray[2];
  const score = +userItemArray[3];

  return { avatar, username, activity, score };
};

const processImage = (imageUrl: string) => {
  const placeholderImage = "https://i.pravatar.cc/50";
  if (imageUrl === null) return placeholderImage;

  // guarantee unique images
  const uniqueId = Math.floor(Math.random() * 1000000000);

  // reduce image size
  const idx = imageUrl.trim().indexOf("400");
  const modifiedURl = imageUrl.slice(0, idx) + "50";
  return `${modifiedURl.trim()}?u=${uniqueId}.trim()`;
};

import { Cloudinary } from "@cloudinary/url-gen";


export default upload = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "demo",
    },
    url: {
      secure: true, 
    },
  });

  const myImage = cld.image("sample");

  const myURL = myImage.toURL();

  console.log(myURL);
};

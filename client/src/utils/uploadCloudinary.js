import axios from "axios";

const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;
const cloud_name = import.meta.env.VITE_CLOUDINARY_NAME;
const uploadURL = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

const uploadImageOnCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", upload_preset);

  try {
    const response = await axios.post(uploadURL, formData);
    return response.data;
  } catch (error) {
    throw new Error("Failed to upload image to Cloudinary");
  }
};

export default uploadImageOnCloudinary;

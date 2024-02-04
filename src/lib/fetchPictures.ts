import { storage } from "@/lib/firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";

const fetchPictures = async (path: string) => {
  const items = (await listAll(ref(storage, `images/${path}`))).items;
  const urlPromises = items.map(async (it) => await getDownloadURL(it));
  const urls = await Promise.all(urlPromises);
  return urls;
};

export default fetchPictures;

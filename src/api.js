import axios from "axios";

const searchImages = async (term) => {
  const respose = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID xSyEvij8TznoJwzJ78zQl80OaFuBmA6F2pl6kt14hWM",
    },
    params: {
      query: term,
    },
  });

  return respose.data.results;
};

export default searchImages;

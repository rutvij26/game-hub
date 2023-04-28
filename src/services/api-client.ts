import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "737c59db3b814c25ace070270833aef4",
  },
});

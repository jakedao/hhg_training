import axios from 'axios';
import authHeader from './auth-header';

const HOST_URL = 'https://conduit.productionready.io/api';

class UserService {
  likeArticle(slug) {
    return axios.post(`${HOST_URL}/articles/${slug}/favorite`,{},{
      headers: authHeader()
    })
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response))
  }
}

export default new UserService();
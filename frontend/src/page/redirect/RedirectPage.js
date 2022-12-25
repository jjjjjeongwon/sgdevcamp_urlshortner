import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const RedirectPage = () => {
  const { shortUrl } = useParams();
  const navigate = useNavigate();

  async function getShortUrl() {
    await axios
      .get(`http://localhost:8080/shorts/${shortUrl}`)
      .then((res) => {
        console.log(res.data.full);
        window.location.href = res.data.full;
        return;
      })
      .catch((e) => {
        console.log('일치하는 url 없음', e);
        alert('일치하는 url이 없습니다.');
        return navigate('/');
      });
  }
  getShortUrl();
};

export default RedirectPage;

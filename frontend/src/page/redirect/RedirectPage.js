import { useParams } from "react-router-dom";

const RedirectPage = () => {

const { shortUrl } = useParams();

    if(shortUrl) 
    // window.location.href = 'https://www.google.com';

  return null;
}

export default RedirectPage
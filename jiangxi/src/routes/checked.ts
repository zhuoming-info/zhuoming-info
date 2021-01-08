import express, { Request, Response } from 'express';
import axios from 'axios';
import cheerio from 'cheerio';

const router = express.Router();

router.get('/api/jiangxi/river-warning', async (req: Request, res: Response) => {
  const checked = req.query.checked;

  const getHtml = () => {
    axios.get('http://111.75.205.67:7080/syq/findsliderain/findSlideRainHandler')
      .then((res) => {
        if (res.data.msg === '执行成功' && res.data.status === 1) {
          // console.log(res.data.data)
          const $ = cheerio.load(res.data.data);
          console.log($('th').text());
        } else {
          console.log(res.data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  let nIntervId;
  if (checked === 'true') {
    nIntervId = setInterval(getHtml, 5000);
  } else if (checked === 'false') {
    clearInterval(nIntervId)
  }

  res.send();
});

export { router as checkedRouter };

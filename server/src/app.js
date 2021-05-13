import bodyParser from 'body-parser';
import Express from 'express';
import session from 'express-session';
import expressStaticGzip from 'express-static-gzip';

import { PUBLIC_PATH, CLIENT_DIST_PATH } from './paths';
import { apiRouter } from './routes/api';
import { staticRouter } from './routes/static';

const app = Express();

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: 'secret',
  }),
);
app.use(bodyParser.json());
app.use(bodyParser.raw({ limit: '10mb' }));

app.use(expressStaticGzip(PUBLIC_PATH));
app.use(expressStaticGzip(CLIENT_DIST_PATH));

app.use('/api/v1', apiRouter);
app.use(staticRouter);

export { app };

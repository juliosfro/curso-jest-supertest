
import app from './src/app';

const port = process.env.PORT || 3000;

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Servidor escutando em http://localhost:${port}`);
});

import knex from 'knex';
import path from 'path';
import { fileURLToPath } from 'url';

// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(__filename);

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.join(__dirname, './livraria.sqlite'),
    },
    useNullAsDefault: true,
});

export default db;

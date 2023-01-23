
import express from 'express';
import livros from './livrosRoutes';
import autores from './autoresRoutes';
import editoras from './editorasRoutes';

const routes = app => {
    app.route('/').get((_, res) => {
        res.status(200).send({ titulo: 'Curso de node' });
    });

    app.use(
        express.json(),
        livros,
        autores,
        editoras,
    );
};

export default routes;

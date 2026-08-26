import { PORT } from './final.js';
import { l } from './logger.js';
import { registerRoutes } from './router_gate.js';
import express from 'express';

export const start = ()=>{
    var app = express();
    app.use(express.json());

    app = registerRoutes(app);

    app.listen(PORT, () => {
        l(`SV RUNNNING AT: http://localhost:${PORT}`);
    });
}
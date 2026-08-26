import { loginMobile } from "../feat/auth_handler.js";
import { GET, POST, PUT, POST_LOGIN_PATH } from "./final.js";
import { l } from "./logger.js";

const ROUTES = [
    {
        method: POST,
        handlers: [
            {
                path:POST_LOGIN_PATH,
                handler: (req, res) => loginMobile(req, res)
            }
        ]
    },
    {
        method: GET,
        handlers: [
            {
                path: "/",
                handler: (req, res) => loginMobile(req, res)
            }
        ]
    },
    // POST: {
    //     POST_LOGIN_PATH: loginMobile
    // },
    // GET: {

    // }
]

export const registerRoutes = (sv) => {

    ROUTES.forEach(r => {
        r.handlers.forEach(h => {
            
            const meth = r.method.toLocaleLowerCase();
            const path = h.path;
            const handler = h.handler;
            
            l(`[ROUTER-GATE] registering route: ${meth}: ${path}`);

            sv[meth](path, (req, res) => handler(req, res));
        });
    });

    return sv;
}
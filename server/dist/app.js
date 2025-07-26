"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_session_1 = __importDefault(require("express-session"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const db_1 = __importDefault(require("./config/db"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
const corsOptions = {
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Important for cookies
};
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use((0, express_session_1.default)({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false, // Changed to false for better security
    store: connect_mongo_1.default.create({
        mongoUrl: process.env.MONGODB_URI,
        ttl: 60 * 24 * 60 * 60, // 60 days session lifetime
    }),
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        maxAge: 60 * 24 * 60 * 60 * 1000, // 60 days in milliseconds
        path: '/',
    },
}));
app.get('/', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});
app.use((0, cookie_parser_1.default)());
app.listen(PORT, () => {
    console.log(`Server running port ${PORT}`);
});
(0, db_1.default)();
//# sourceMappingURL=app.js.map
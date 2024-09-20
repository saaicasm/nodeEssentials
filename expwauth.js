const express = require('express');
const session = require('express-session');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());


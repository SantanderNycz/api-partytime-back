const router = require("express").Router();

// importar rotas
const servicesRouter = require("./services");
const partyRouter = require("./parties");
const authRouter = require("./auth");

// usar rotas
router.use("/", servicesRouter);
router.use("/", partyRouter);
router.use("/", authRouter);

module.exports = router;

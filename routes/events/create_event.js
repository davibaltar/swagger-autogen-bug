const { Router } = require("express");

const router = Router();

router.post("/events", (req, res) => {
  /*
  #swagger.tags = ["Events Public"]
  #swagger.description = "Create event"
  #swagger.parameters['data'] {
    in: 'body',
    schema: {
      name: 'Hello World'
    }
  }
  */
  return res.json({ done: true });
});

module.exports = router;

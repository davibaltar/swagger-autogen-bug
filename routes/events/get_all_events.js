const { Router } = require("express");

const router = Router();

router.get("/events", (req, res) => {
  /*
  #swagger.tags = ["Events Public"]
  #swagger.description = "Get event"
  #swagger.parameters['id'] {
    schema: {
      id: 'event-id'
    }
  }
  */
  return res.json(req.query);
});

module.exports = router;

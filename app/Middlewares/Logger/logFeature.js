const M_getData = (req, res, next) => {
  console.log("this's feature get student list");
  next();
};

module.exports = {
  M_getData,
};

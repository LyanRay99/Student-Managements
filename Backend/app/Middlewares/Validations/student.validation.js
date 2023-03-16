const CheckEmpty = (req, res, next) => {
  const { fullName, age, numberClass } = req.body;

  if (fullName && age && numberClass) {
    next();
  } else {
    res.status(500).send("du lieu ko duoc trong abc");
  }
};

const checkClassNumber = (req, res, next) => {
  const { numberClass } = req.body;

  if (numberClass > 0 && numberClass < 13) {
    next();
  } else {
    res.status(500).send(`lop ${numberClass} ko hop le (1 - 12)`);
  }
};

module.exports = {
  CheckEmpty,
  checkClassNumber,
};

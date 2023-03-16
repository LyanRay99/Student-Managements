const CheckEmpty = (req, res, next) => {
  const { fullName, age, classNumber } = req.body;

  if (fullName && age && classNumber) {
    next();
  } else {
    res.status(500).send("du lieu ko duoc trong");
  }
};

const checkClassNumber = (req, res, next) => {
  const { classNumber } = req.body;

  if (classNumber > 0 && classNumber < 13) {
    next();
  } else {
    res.status(500).send(`lop ${classNumber} ko hop le (1 - 12)`);
  }
};

module.exports = {
  CheckEmpty,
  checkClassNumber,
};

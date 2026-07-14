const sum = (req, res) => {

  const { num1, num2 } = req.query;
  const result = parseFloat(num1) + parseFloat(num2);

  res.status(200).json({
    success: true,
    message: "Sum result",
    result: result
  })

}

const multiply = (req, res) => {

  const { num1, num2 } = req.query;
  const result = parseFloat(num1) * parseFloat(num2);

  res.status(200).json({
    success: true,
    message: "Multiply result",
    result: result
  })

}


export {
  sum,
  multiply
}
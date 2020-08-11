const add = () => {
  const message = new Error("two arguments required")
  return message.message;
}

module.exports = add
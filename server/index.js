const PORT = 3030;
const app = require('./app')

const init = async () => {
  try {
    app.listen(PORT, () => { console.log(`Server listening on ${PORT}`) });
  } catch (ex) {
    console.log(ex)
  }
}

init()

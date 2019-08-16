const jwt = require("jsonwebtoken");
const APP_SECRET = "vistavie";

getUserName = context => {
  const Authorization = context.request.get("authorization");
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    const { name } = jwt.verify(token, APP_SECRET);
    return name;
  }

  throw new Error("Not authenticated");
};

module.exports = {
  APP_SECRET,
  getUserName
};

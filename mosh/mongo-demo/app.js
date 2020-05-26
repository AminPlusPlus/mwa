const mongose = require("mongoose");

mongose.connect(
  "mongodb://mwa-shard-00-00-my9re.gcp.mongodb.net:27017/testdb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

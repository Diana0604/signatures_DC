//connect to mongodb where database is stored
const { MongoClient } = require("mongodb");
const fs = require("fs");

const client = new MongoClient(
  "mongodb+srv://itSupportDC:" +
    process.env.MONGO_PWD +
    "@signatures-db.lzqif.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

async function addToDB(dbObject, collectionName, docs) {
  const options = { ordered: true };
  const collectionObject = dbObject.collection(collectionName);
  const result = await collectionObject.insertMany(docs, options);
  console.log(`${result.insertedCount} documents were inserted`);
}

async function populate() {
  try {
    await client.connect();
    console.log('connected');
    const signaturesDB = client.db("Signatures-DB");
    const htmlCollectionName = "html";
    await signaturesDB.createCollection(htmlCollectionName);
    //1. base html
    const baseHtmlDocs = [
      {
        title: "DC",
        content: fs.readFileSync("C:\\Users\\diana\\OneDrive\\Documents\\webdev\\signatures\\src\\html\\DC\\signature.html", "utf8"),
      },
      {
        title: "EB",
        content: fs.readFileSync("C:\\Users\\diana\\OneDrive\\Documents\\webdev\\signatures\\src\\html\\EB\\signature.html", "utf8"),
      },
    ];

    await addToDB(signaturesDB, htmlCollectionName, baseHtmlDocs);

    //2. outlook render
    const outlookCollectionName = "outlook";
    await signaturesDB.createCollection(outlookCollectionName);
    const outlookRenderDocs = [
      {
        title: "DC",
        content: fs.readFileSync("C:\\Users\\diana\\OneDrive\\Documents\\webdev\\signatures\\src\\html\\DC\\outlook.html", "utf8"),
      },
      {
        title: "EB",
        content: fs.readFileSync("C:\\Users\\diana\\OneDrive\\Documents\\webdev\\signatures\\src\\html\\EB\\outlook.html", "utf8"),
      },
    ];
    await addToDB(signaturesDB, outlookCollectionName, outlookRenderDocs);

    //3. display html
    const displayHtmlCollectionName = "displayHtml";
    await signaturesDB.createCollection(displayHtmlCollectionName);
    const displayHtmlDocs = [
      {
        title: "DC",
        content: fs.readFileSync("C:\\Users\\diana\\OneDrive\\Documents\\webdev\\signatures\\src\\html\\DC\\only_html.html", "utf8"),
      },
      {
        title: "EB",
        content: fs.readFileSync("C:\\Users\\diana\\OneDrive\\Documents\\webdev\\signatures\\src\\html\\EB\\only_html.html", "utf8"),
      },
    ];
    await addToDB(signaturesDB, displayHtmlCollectionName, displayHtmlDocs);
  } catch (error) {
    //console.log("error on client connect");
    console.log(error);
  } finally {
    await client.close();
    console.log('client closed');
  }
  
}

module.exports.populate = populate;
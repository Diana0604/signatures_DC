//connect to mongodb where database is stored
const { MongoClient } = require("mongodb");
const fs = require("fs");

const client = new MongoClient(
  "mongodb+srv://itSupportDC:onlqdfjipoAEoiRWE@signatures-db.lzqif.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

async function addToDB(dbObject, collectionName, docs) {
  const options = { ordered: true };
  const collectionObject = dbObject.collection(collectionName);
  const result = await collectionObject.insertMany(docs, options);
  console.log(`${result.insertedCount} documents were inserted`);
}

async function deleteCollectionIfExists(dbObject, collectionName) {
  if (dbObject.collection(collectionName)) {
    await dbObject.dropCollection(collectionName);
  }
}

async function populate() {
  try {
    await client.connect();
    console.log("connected");
    const signaturesDB = client.db("Signatures-DB");

    //1. base html

    const htmlCollectionName = "html";
    await deleteCollectionIfExists(signaturesDB, htmlCollectionName);
    await signaturesDB.createCollection(htmlCollectionName);
    const baseHtmlDocs = [
      {
        title: "DC",
        content: fs.readFileSync(
          "C:\\Users\\diana\\OneDrive\\Documents\\webdev\\signatures\\src\\html\\DC\\signature.html",
          "utf8"
        ),
      },
      {
        title: "EB",
        content: fs.readFileSync(
          "C:\\Users\\diana\\OneDrive\\Documents\\webdev\\signatures\\src\\html\\EB\\signature.html",
          "utf8"
        ),
      },
    ];

    await addToDB(signaturesDB, htmlCollectionName, baseHtmlDocs);

    //2. outlook render
    const outlookCollectionName = "outlook";

    await deleteCollectionIfExists(signaturesDB, outlookCollectionName);

    await signaturesDB.createCollection(outlookCollectionName);
    const outlookRenderDocs = [
      {
        title: "DC",
        content: fs.readFileSync(
          "C:\\Users\\diana\\OneDrive\\Documents\\webdev\\signatures\\src\\html\\DC\\outlook.html",
          "utf8"
        ),
      },
      {
        title: "EB",
        content: fs.readFileSync(
          "C:\\Users\\diana\\OneDrive\\Documents\\webdev\\signatures\\src\\html\\EB\\outlook.html",
          "utf8"
        ),
      },
    ];
    await addToDB(signaturesDB, outlookCollectionName, outlookRenderDocs);

    //3. display html
    const displayHtmlCollectionName = "displayHtml";

    await deleteCollectionIfExists(signaturesDB, displayHtmlCollectionName);

    await signaturesDB.createCollection(displayHtmlCollectionName);

    const displayHtmlDocs = [
      {
        title: "DC",
        content: fs.readFileSync(
          "C:\\Users\\diana\\OneDrive\\Documents\\webdev\\signatures\\src\\html\\DC\\only_html.html",
          "utf8"
        ),
      },
      {
        title: "EB",
        content: fs.readFileSync(
          "C:\\Users\\diana\\OneDrive\\Documents\\webdev\\signatures\\src\\html\\EB\\only_html.html",
          "utf8"
        ),
      },
    ];
    await addToDB(signaturesDB, displayHtmlCollectionName, displayHtmlDocs);
  } catch (error) {
    //console.log("error on client connect");
    console.log(error);
  } finally {
    await client.close();
    console.log("client closed");
  }
}

async function getFromDatabase(renderType, company) {
  try {
    await client.connect();
    const signaturesDB = client.db("Signatures-DB");
    const collection = signaturesDB.collection(renderType);
    const query = { title: company };
    const jsonObject = await collection.findOne(query);

    return jsonObject.content;
  } catch (error) {
    console.log("error");
    console.log(error);
  } finally {
    console.log("reached finally");
    await client.close();
  }
}

module.exports.populate = populate;
module.exports.getFromDatabase = getFromDatabase;

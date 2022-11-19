const Airtable = require("airtable")

const airTableBase = Airtable({
    apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY
  })
  .base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

const airTableTable = airTableBase(process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME);


const minifyRecords = (records: []) =>
  records.map((record) => getMinifiedIRecord(record));

// to make record meaningful.
const getMinifiedIRecord = (record: any) => {
  if (!record.fields.brought) {
    record.fields.brought = false;
  }
  return {
    id: record.id,
    fields: record.fields,
  };
};


export { airTableTable, minifyRecords, getMinifiedIRecord };
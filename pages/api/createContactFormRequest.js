import { airTableTable, getMinifiedIRecord } from '../../utils/airtableContactForm';


export default createContactFormRequest = async (req, res) => {
  const body = req.body;

  try {
    const newContactRequest = await airTableTable.create([{ fields: body }]);
    res.status(200).json(getMinifiedIRecord(newContactRequest[0]));
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Something went wrong! 😕" });
  }
}
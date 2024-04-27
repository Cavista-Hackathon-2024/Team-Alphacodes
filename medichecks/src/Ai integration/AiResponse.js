import { GoogleGenerativeAI } from "@google/generative-ai";


const APIKEY = "AIzaSyBEokEdDI71M72flZd0bfwUZgcfcOfzdTY"




const genAI = new GoogleGenerativeAI(APIKEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro"});


export default async function RunAiQuery(druginfo, drug) {
    const prompt = `Write a detailed explanation on this drug ${drug}, by extracting and using the information in this json file ${druginfo} remove the json syntax in the response. Respond with no text formatting and remove all * characters`
  
    const result = await model.generateContent(prompt);
    const response = result.response;

    
    const candidates = response?.candidates;
    if (candidates && candidates.length > 0) {
        const content = candidates[0].content;
        const parts = content?.parts;
        if (parts && parts.length > 0) {
            const text = parts[0].text;
            console.log(`Explanation of drug ${drug}: ${text}`);
            return text;
        }
    }
    console.log("Explanation not found.");

}
  

Rant Hub 
A simple and interactive rant-sharing web application where users can freely express their thoughts and see rants posted by others in real-time.

📌 Features
✅ Post Rants: Users can type and submit their rants.
✅ Live Updates: Rants are dynamically loaded from a local JSON server.
✅ User Avatars: Automatically generates a colored profile icon with the first letter of the username.
✅ Minimalist UI: Clean and simple design for an enjoyable experience.

🚀 Getting Started
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/yourusername/rant-hub.git
cd rant-hub
2. Install JSON Server
This project uses a local JSON server to store messages. Install it using:

bash
Copy
Edit
npm install -g json-server
3. Start the Server
Run the following command to start the JSON server:

bash
Copy
Edit
json-server --watch db.json --port 3000
The server will be available at:
http://localhost:3000/messages

4️⃣ Open the Project
Simply open index.html in your browser.

📜 Project Structure
bash
Copy
Edit
📂 rant-hub
 ├── 📄 index.html       # Main HTML file
 ├── 📄 styles.css       # Styling for the UI
 ├── 📄 index.js         # JavaScript logic
 ├── 📄 db.json          # JSON database (stores rants)
 ├── 📄 README.md        # Documentation
🛠️ Technologies Used
HTML, CSS, JavaScript – For frontend and UI interactions

JSON Server – Acts as a backend to store rants

Fetch API – For communicating with the server

💡 How It Works
Fetching Rants: On page load, the script fetches rants from the JSON server and displays them.

Posting a Rant: Users enter their name and rant, then click "Post Rant."

Storing Data: The rant is sent to the JSON server and stored in db.json.

Dynamic Updates: New rants appear on the page instantly without reloading.

🐞 Troubleshooting
JSON Server not running? Make sure you’ve started the server using json-server --watch db.json --port 3000.

Rants not displaying? Check the browser console (F12 → Console) for errors.

📌 Future Enhancements
🔹 Add timestamps to rants
🔹 Implement like/upvote system
🔹 Enable real-time updates using WebSockets

📄 License
This project is open-source under the MIT License. Feel free to modify and use it!

Enjoy ranting! 😆🔥


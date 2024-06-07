const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost:3000',
    user:'',
    password: '',
    database: 'cattles'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

function getRegisteredRfidTags() {
    return new Promise((resolve, reject) => {
        
        const query = 'SELECT rfid_tag FROM registered_rfid_tags';
        
      
        connection.query(query, (err, results) => {
            if (err) {
                reject(err);
                return;
            }

            
            const registeredRfidTags = results.map((row) => row.rfid_tag);
            resolve(registeredRfidTags);
        });
    });
}

function getUserInfoByRfidTag(rfidTag) {
    return new Promise((resolve, reject) => {
        
        const query = 'SELECT username, phone_number FROM user_registration WHERE rfid_tag = ?';
        
        
        connection.query(query, [rfidTag], (err, results) => {
            if (err) {
                reject(err);
                return;
            }

            if (results.length > 0) {
                resolve(results[0]);
            } else {
               
                resolve(null);
            }
        });
    });
}

function sendAlertToUser(username, phoneNumber) {
    console.log(`Alert sent to user ${username} at phone number ${phoneNumber}`);
}
async function alertUserIfRfidMatch(rfidTag) {
    try {
        const registeredRfidTags = await getRegisteredRfidTags();

        if (registeredRfidTags.includes(rfidTag)) {
            const userInfo = await getUserInfoByRfidTag(rfidTag);

            if (userInfo) {
                // Send an alert to the user
                sendAlertToUser(userInfo.username, userInfo.phone_number);
            } else {
                console.log('No user found for the detected RFID tag');
            }
        } else {
            console.log('Detected RFID tag is not registered');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
const detectedRfidTag = 'detected_rfid_tag';
alertUserIfRfidMatch(detectedRfidTag);

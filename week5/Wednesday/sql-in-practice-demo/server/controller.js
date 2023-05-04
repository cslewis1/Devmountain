require('dotenv').config()
const {CONNECTION_STRING} = process.env
const Sequelize = require('sequelize')

// you wouldn't want to rejectUnauthorized in a production app, but it's great for practice
const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

// we are mocking a user being signed in
// these ids belong to the same person - "Fern" one of the seeded users
const userId = 4
const clientId = 3

module.exports = {
    getUserInfo: (req, res) => {
        sequelize.query(`SELECT * FROM cc_clients c
        JOIN cc_users u ON c.user_id = u.user_id
        WHERE u.user_id = ${userId};`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    }, 

    updateUserInfo: (req, res) => {
        let {
            firstName,
            lastName,
            phoneNumber,
            email,
            address,
            city,
            state,
            zipCode
        } = req.body

        sequelize.query(`UPDATE cc_users SET first_name = '${firstName}', 
        last_name = '${lastName}', 
        email = '${email}', 
        phone_number = ${phoneNumber}
        where user_id = ${userId};
        
        update cc_clients SET address = '${address}', 
        city = '${city}', 
        state = '${state}', 
        zip_code = ${zipCode}
        WHERE user_id = ${userId};`)
            .then(() => res.sendStatus(200))
            .catch(err => console.log(err))

    },

    getUserAppt: (req, res) => {
        sequelize.query(`SELECT * FROM cc_appointments
        WHERE client_id = ${clientId}
        order by date desc;`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    }, 

    requestAppointment: (req, res) => {
        const {date, service} = req.body 

        sequelize.query(`insert into cc_appointments (client_id, date, service_type, notes, approved, completed)
        values (${clientId}, '${date}', '${service}', '', false, false)
        returning *;`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    }
}
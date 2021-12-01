const mongoose = require('mongoose');

mongoose.connect('#', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Conccection Succeeded') }
    else { console.log('Error in Connection: + err')}
});

require('./employee.model');
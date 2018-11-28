const mongoose = require('mongoose');

function getDatabaseUri() {
    if (process.env.NODE_ENV === 'test') return 'mongodb://localhost/mean1812-test';
    // if (process.env.NODE_ENV === 'local') return 'mongodb://localhost/mean1812';
    return 'mongodb://localhost/mean1812';
}

// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.connect(getDatabaseUri(), { useNewUrlParser: true });
mongoose.connect(getDatabaseUri(), { useMongoClient: true });
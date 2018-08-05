const express = require('express');
const expressGrapQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', expressGrapQL({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Listening on port 4000...');
});
// const fs = require('fs')

module.exports = {
        devServer: {
            // https: {
            //     key: fs.readFileSync('./privkey.pem'),
            //     cert: fs.readFileSync('./cert.pem'),
            //     //ca: fs.readFileSync('./certs/my-ca.crt')
            //   },
            // hotOnly: false,
            // open: process.platform === 'darwin',
            // host: 'predictor.orangebit.dev',
            watchOptions: {
                ignored: [/node_modules/, /public/],
            }
        }
    };
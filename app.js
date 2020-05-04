if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express')
const app = express()
const Multipassify = require('multipassify')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 8000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.post('/', (req, res) => {
  console.log(req.body)
  // Construct the Multipassify encoder
  var multipassify = new Multipassify(
    process.env.MULTIPASS_LOGIN_ENABLE_SECRETE
  )

  // Create your customer data hash
  var customerData = {
    email: process.env.TEST_CUSTOMER_EMAIL,
    return_to: req.body.webUrl,
  }

  // Encode a Multipass token
  var token = multipassify.encode(customerData)

  // Generate a Shopify multipass URL to your shop
  var url = multipassify.generateUrl(
    customerData,
    `${process.env.SHOPIFY_SHOP_NAME}.myshopify.com`
  )

  res.json({
    redirectURL: url,
  })
})

app.listen(port, () => {
  console.log(`Express is running on port ${port}`)
})

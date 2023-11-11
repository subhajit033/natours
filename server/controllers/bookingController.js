const Tour = require('../models/tourModel');
const APPError = require('../utils/appError');
const stripe = require('stripe')(process.env.STRIPE_SEC_KEY);
const getCheckOutSession = async (req, res, next) => {
  /**
   * 1) get currently booked tour
   * 2)create a checkout session
   * 3)send it to client
   */
  try {
    const tour = await Tour.findOne({ slug: req.params.tourSlug });

    const session = await stripe.checkout.sessions.create({
      line_items: [
        // {
        //   name: `${tour.name} Tour`,
        //   description: tour.summary,
        //   //change in production
        //   images: [
        //     'https://th.bing.com/th/id/OIP.YHFMsettT35moUDjgKMmVgHaE8?pid=ImgDet&rs=1',
        //   ],
        //   amount: tour.price,
        //   currency: 'INR',
        //   quantity: 1,
        // },
        {
          price_data: {
            currency: 'usd',
            unit_amount: tour.price*100,
            product_data: {
              name: `${tour.name} Tour`,
              description: tour.summary,
              images: [
                'https://th.bing.com/th/id/OIP.YHFMsettT35moUDjgKMmVgHaE8?pid=ImgDet&rs=1',
              ],
            },
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      payment_method_types: ['card'],
      success_url: 'http://localhost:5173',
      cancel_url: `http://localhost:5173/${req.params.tourSlug}`,
      customer_email: req.user.email,
      client_reference_id: req.user.id,
    });
    res.status(200).json({
      status: 'success',
      session,
    });
  } catch (err) {
    next(new APPError(err.message, 400));
  }
};

module.exports = { getCheckOutSession };

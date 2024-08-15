const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn} = require("../middleware.js");


const reviewController = require("../controllers/review.js")
//reviews
//post  review route

router.post("/", isLoggedIn, validateReview,wrapAsync(reviewController.createreview ))
  
  //Delete review route
  
  router.delete("/:reviewId", wrapAsync(reviewController.deleteReview))

  module.exports = router;
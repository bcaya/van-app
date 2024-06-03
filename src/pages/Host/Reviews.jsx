import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import {Box, Stack} from '../../assets/CSS/StylesMain'

export default function Reviews(){
  const reviewsData = [
    {
        rating: 5,
        name: "Elliot",
        date: "January 3, 2023",
        text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
        id: "1",
    },
    {
        rating: 5,
        name: "Sandy",
        date: "December 12, 2022",
        text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
        id: "2",
    },
]
  return(
    <box-l>
      <stack-l>
      <box-l className="top-text">
            <h2>Your Reviews</h2>
            <p>Last <span>30 days</span></p>
            <box-l padding="var(--s3)">
              <img src="https://i.ibb.co/JFwDTfH/reviews-graph.png" />
        </box-l>
        </box-l>
        <box-l><h3>Reviews ({reviewsData.length})</h3></box-l>
            <stack-l>
              {reviewsData.map((review) => (
                <box-l key={review.id}>
                  <div  className="reviews">
                  <box-l>
                    {[...Array(review.rating)].map((_, i) => (
                      <BsStarFill className="review-star" key={i} />
                    ))}
                    <box-l>
                      <p>{review.name}</p>
                      <p>{review.date}</p>
                    </box-l>
                    <box-l>
                      {review.text}
                    </box-l>
                  </box-l>
                  </div>
                 
              </box-l>
              ))}
              </stack-l>
      </stack-l>
   
        </box-l>
  )
}
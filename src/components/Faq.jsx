import {useState} from 'react'
import "./faq.css"
const FaqItems=({question,answer})=>{
    const [show,setShow]=useState(false);
    const toggle=()=>{
        setShow(!show)
    }
     return(
        <div className={`faqitem ${show ? "active " : ""}`}>
            <div className="headerr" onClick={toggle}> {question}</div>
            <div className="bodyy">
               
                <div className="contentt">{answer}</div>
  
            </div>

        </div>
     )
}
const FaqAccordian=({data})=>{
    return(
        <div className="faq">
            <h1>FAQs</h1>
            {
                data.map((item)=>(
                    <FaqItems  key={item.id} question={item.question} answer={item.answer}/>
                ))
            }
        </div>
    )
 };

const data=[
  
    
        {
            "id": 1,
            "question": "How do I book tickets for a movie?",
            "answer": "To book tickets, visit our website or mobile app, select the movie, choose the showtime, and proceed to payment."
        },
        {
            "id": 2,
            "question": "What payment methods are accepted?",
            "answer": "We accept credit/debit cards, net banking, and mobile wallets for ticket payments."
        },
        {
            "id": 3,
            "question": "Can I cancel or reschedule my booking?",
            "answer": "Yes, you can cancel or reschedule your booking up to a certain time before the show. Check our cancellation policy for details."
        },
        {
            "id": 4,
            "question": "Is there a convenience fee for online bookings?",
            "answer": "Yes, a small convenience fee is charged for online bookings to cover transaction costs."
        },
        {
            "id": 5,
            "question": "How do I collect my tickets?",
            "answer": "You can collect your tickets at the theater counter by showing your booking confirmation or QR code."
        },
        {
            "id": 6,
            "question": "Are there discounts for group bookings?",
            "answer": "Yes, we offer discounts for group bookings. Contact our customer support for more information."
        },
        {
            "id": 7,
            "question": "What happens if I miss the show?",
            "answer": "Unfortunately, tickets for missed shows are non-refundable. Please arrive on time."
        },
        {
            "id": 8,
            "question": "Can I choose my seats?",
            "answer": "Yes, you can select your preferred seats during the booking process."
        },
        {
            "id": 9,
            "question": "Is there a loyalty program?",
            "answer": "Yes, we have a loyalty program that rewards frequent moviegoers with special benefits."
        },
        {
            "id": 10,
            "question": "How do I contact customer support?",
            "answer": "You can reach our customer support via phone, email, or live chat on our website."
        }
    


]



export const Faq = () => {
    
  return (
    <>
    <div className="app">
        <FaqAccordian data={data}/>
    </div>
    </>
  )
}

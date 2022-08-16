import React from 'react'

export default function Faqs() {
  return (
    <div className='faqs main-section'>
        <div className='faq'>
            <h2 className='faq-title'>Is there a free trial available?</h2>
            <p>Yes, you can try for free for 30 days. If you want, we{"'"}ll provide you with a free personalized 30-minute onboarding call to get you up and running.</p>
        </div>
        <div className='faq'>
            <h2 className='faq-title'>Can I change my plan later?</h2>
            <p>Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.</p>
        </div>
        <div className='faq'>
            <h2 className='faq-title'>What is our cancelation policy?</h2>
            <p>We understand that things change. You can cancel your plan at any time and we{"'"}ll refund you the difference already paid.</p>
        </div>
        <div className='faq'>
            <h2 className='faq-title'>Can other info be added to an invoice?</h2>
            <p>At the moment, the only way to add additional information to invoices is to add the information to the workspace{"'"}s name.</p>
        </div>
        <div className='faq'>
            <h2 className='faq-title'>How does billing work?</h2>
            <p>Plans are per workspace, not per account. You can upgrade one workspace and still have any number of free workspaces.</p>
        </div>
        <div className='faq'>
            <h2 className='faq-title'>How do I change my account email?</h2>
            <p>You can change the email associated with your account by going to untitled.com/account from a laptop or desktop</p>
        </div>
    </div>
  )
}

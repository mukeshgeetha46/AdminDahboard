import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { GoTrash } from 'react-icons/go'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import Profile from '../../pages/Profile/Profile'
import user from '../../assets/Profile/user-2-BtZPKsUg.jpg'
import attach1 from '../../assets/Email/download (1).svg'
import attach2 from '../../assets/Email/download (2).svg'
import attach3 from '../../assets/Email/download.svg'
import { GoReply } from "react-icons/go";
import { LuForward } from "react-icons/lu";
import { CgMailReply } from "react-icons/cg";
import { HiReply } from "react-icons/hi";
import { getTagColor } from '../../utils/GetTagColors'
import { FaArrowLeft } from "react-icons/fa";

const MailBody = ({openedMail,setOpen}) => {


 const emailBodies = {
  1: {
    sender: "James Smith",
    email: "abc@company.com",
    subject: "Kindly check this latest update",
    tag: "Promotional",
    body: `Hello Andrew,\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum hendrerit lobortis. Nullam ut lacus eros. Sed at luctus urna, eu fermentum diam. In et tristique mauris.\n\nUt id ornare metus, sed auctor enim. Pellentesque nisi magna, laoreet a augue eget, tempor volutpat diam.\n\nRegards,\nJames Smith`,
    body2: `Dear Andrew,\n\nI hope this message finds you well. I wanted to follow up on our previous discussion regarding the project updates. The team has made significant progress, and I've attached the latest documents for your review.\n\nKey updates include:\n- Completed the UI redesign\n- Implemented the new authentication system\n- Resolved all critical bugs from the last sprint\n\nPlease review the attached files and let me know if you have any feedback or questions. We're aiming to deploy these changes by next Friday.\n\nBest regards,\nJames Smith\nProject Manager`,
    attachments: [
      { name: "adobe.pdf", size: "2MB", checked: false },
      { name: "adobe.pdf", size: "2MB", checked: false },
      { name: "adobe.pdf", size: "2MB", checked: true }
    ]
  },
  2: {
    sender: "Maria Johnson",
    email: "maria@finance.com",
    subject: "Invoice for July 2025",
    tag: "Finance",
    body: `Hello,\n\nPlease find attached the invoice for services rendered during July 2025. The total amount due is $1,250.00, payable by August 10, 2025.\n\nIf you have any questions about this invoice, don't hesitate to contact our billing department.\n\nBest regards,\nMaria Johnson\nAccounts Department`,
    body2: `Dear Valued Client,\n\nAttached is your detailed invoice for July 2025 services. Here's a breakdown:\n\n- Consulting Services: $850.00\n- Software Licensing: $300.00\n- Maintenance Fees: $100.00\n\nTotal Due: $1,250.00\nDue Date: August 10, 2025\n\nPayment Methods Accepted:\n1. Bank Transfer (details in invoice)\n2. Credit Card (via our secure portal)\n3. Check (mail to address below)\n\nLate payments may incur a 2% monthly fee. Please contact us immediately if you anticipate any payment delays.\n\nSincerely,\nMaria Johnson\nSenior Accountant`
  },
  3: {
    sender: "Support Team",
    email: "support@company.com",
    subject: "Your ticket has been resolved",
    tag: "Support",
    body: `Dear Customer,\n\nWe're pleased to inform you that your support ticket #45678 regarding "login issues" has been resolved. If you continue to experience any problems, please don't hesitate to reopen this ticket.\n\nThank you for your patience.\n\nSupport Team\nCustomer Service Department`,
    body2: `Hello,\n\nWe've successfully resolved your support ticket #45678 ("Unable to login to account"). Our technical team identified the issue as a temporary server-side authentication error that has now been fixed.\n\nResolution Details:\n- Cleared cached authentication tokens\n- Reset password requirements\n- Implemented additional error logging\n\nIf you experience this issue again:\n1. Clear your browser cache\n2. Try incognito mode\n3. Contact us immediately\n\nWe value your feedback! Please rate your support experience by clicking the link below.\n\nBest regards,\nAlex Carter\nSupport Team Lead`
  },
  4: {
    sender: "HR Department",
    email: "hr@company.org",
    subject: "Upcoming holiday reminder",
    tag: "HR",
    body: `Hello Team,\n\nThis is a friendly reminder that our office will be closed on August 15th for the annual summer holiday. Please ensure all urgent matters are addressed before this date.\n\nEnjoy your time off!\n\nHR Department`,
    body2: `Attention All Employees,\n\nAs we approach our annual summer holiday closure (August 15th), please note these important details:\n\nOffice Closure Period:\n- Main Office: Closed August 15-17\n- Remote Support: Available for emergencies\n\nBefore You Leave:\n1. Set your out-of-office reply\n2. Complete all pending client deliverables\n3. Secure confidential documents\n\nUpon Return:\n- All systems will undergo maintenance\n- New security protocols will be in effect\n\nFor urgent matters during the closure, contact:\nHR Emergency Line: (555) 123-4567\n\nWarm regards,\nSarah Williams\nHR Director`
  },
  5: {
    sender: "Google Alerts",
    email: "alerts@google.com",
    subject: "Your daily search digest",
    tag: "Updates",
    body: `Here are today's search results for "web development trends":\n\n1. Top 10 Web Development Trends for 2025\n2. The Future of JavaScript Frameworks\n3. How AI is Changing Frontend Development\n\nTo adjust your alert settings, visit your Google Alerts dashboard.`,
    body2: `Your Customized Google Alert Digest - July 26, 2025\n\nSearch Query: "web development trends"\n\nNew Results (24 since yesterday):\n\n🔥 Trending Article:\n"The 2025 Developer's Toolkit: What You Need to Know" (15k shares)\n\n📌 Top Resources:\n1. State of JavaScript 2025 Survey Results\n2. WebAssembly Case Studies from Major Companies\n3. The Rise of Edge Computing in Web Apps\n\n💡 Did You Know?\nYou can now get real-time alerts for breaking news on your topics. Upgrade your alert settings for instant notifications.\n\nManage your alerts: https://google.com/alerts`
  },
  6: {
    sender: "Amazon",
    email: "orders@amazon.com",
    subject: "Your order has been shipped",
    tag: "Ecommerce",
    body: `Hello,\n\nYour order #123-4567890-1234567 has shipped and is on its way to you. Expected delivery date: July 23, 2025.\n\nItems in this shipment:\n1. Wireless Headphones (Qty: 1)\n2. USB-C Cable (Qty: 2)\n\nTrack your package using the link below.`,
    body2: `Your Amazon Order #123-4567890-1234567 - Shipped!\n\nDelivery Estimate: Thursday, July 23, 2025 by 8 PM\nCarrier: Amazon Logistics\nTracking #: AMZ123456789US\n\n📦 Package Contents:\n1. Bose QuietComfort 45 Wireless Headphones (Qty: 1)\n   - Color: Black\n   - Warranty: 1 Year\n\n2. Anker USB-C to USB-C Cable (Qty: 2)\n   - Length: 6ft\n   - Data Transfer: 480Mbps\n\n🚚 Shipping Details:\n- Shipped from: Amazon Fulfillment Center, NJ\n- Current Location: In transit\n- Last Scan: Departed facility (2:15 PM)\n\nNeed to make changes? You can still:\n- Track your package\n- Change delivery options\n- Contact the carrier\n\nWe hope you enjoy your purchase!\nAmazon Customer Service`
  },
  7: {
    sender: "LinkedIn",
    email: "notifications@linkedin.com",
    subject: "New jobs that match your profile",
    tag: "Career",
    body: `James, based on your profile, you might be interested in these job opportunities:\n\n1. Senior Frontend Developer at TechCorp\n2. Web Development Team Lead at Digital Solutions\n3. Full Stack Engineer at Startup Inc.\n\nLog in to your LinkedIn account to view these positions and more.`,
    body2: `Personalized Job Recommendations for James Smith\n\nBased on your profile, skills, and career interests, we've found these exciting opportunities:\n\n🏆 Top Match (98% compatibility)\nSenior Frontend Developer at TechCorp\n- Location: Remote\n- Salary: $140k-$160k\n- Skills: React, TypeScript, GraphQL\n\n💼 Hot Opportunity\nWeb Development Team Lead at Digital Solutions\n- Location: New York, NY\n- Salary: $150k-$175k + equity\n- Team of 8 developers\n\n🚀 Fast-Growing Startup\nFull Stack Engineer at Startup Inc.\n- Location: San Francisco, CA\n- Salary: $130k-$150k + 0.5% equity\n- Tech Stack: Node.js, React, AWS\n\n🔍 Why These Matches?\n- Align with your React expertise\n- Match your preferred company size\n- Fit your desired salary range\n\nView all 12 matching jobs in your dashboard.`
  },
  8: {
    sender: "GitHub",
    email: "notifications@github.com",
    subject: "New pull request in your repository",
    tag: "Development",
    body: `You have a new pull request in your repository "project-x":\n\nPR #42: Feature/user-authentication\nCreated by: dev-user\n\nDescription: Added JWT authentication middleware and login endpoint.\n\nReview the changes and merge when ready.`,
    body2: `GitHub Pull Request Notification - Action Required\n\nRepository: project-x\nBranch: feature/user-auth → main\nPR Title: Implement JWT Authentication System\n\n📝 Description:\nThis PR introduces:\n- JWT token generation/validation\n- Secure login/logout endpoints\n- Role-based access control\n- Refresh token mechanism\n\n📊 Changes:\n- 12 files changed\n- 458 additions\n- 32 deletions\n\n🧪 Tests:\n- All unit tests passing\n- 89% coverage for new code\n- E2E tests included\n\n👥 Reviewers:\n- @team-lead (required)\n- @security-reviewer (required)\n\n⚠️ Important:\nThis is a breaking change - update documentation before merging.\n\nView the full diff and leave your comments.`
  },
  9: {
    sender: "Netflix",
    email: "account@netflix.com",
    subject: "Your subscription has been renewed",
    tag: "Entertainment",
    body: `Dear Member,\n\nYour Netflix Premium subscription has been renewed for another month. The payment of $15.99 has been processed successfully.\n\nNext billing date: August 18, 2025\n\nHappy streaming!\n\nThe Netflix Team`,
    body2: `Netflix Membership Update\n\nAccount: james.smith@email.com\nPlan: Premium (4K UHD)\n\n💰 Payment Details:\n- Amount: $15.99 + tax\n- Date: July 18, 2025\n- Payment Method: Visa ending in 1234\n- Next Billing: August 18, 2025\n\n📺 What's New This Month:\n1. "Shadow and Bone" Season 3 (Netflix Original)\n2. 15 New Anime Titles Added\n3. "The Witcher" Prequel Series\n\n👪 Profile Usage:\n- James: 42 hours watched\n- Kids: 18 hours watched\n\nNeed to make changes?\n- Update payment method\n- Change plan\n- Add premium features\n\nThanks for being a member!\nNetflix Customer Support`
  },
  10: {
    sender: "Zoom",
    email: "notifications@zoom.us",
    subject: "Meeting scheduled for tomorrow",
    tag: "Work",
    body: `You have an upcoming meeting:\n\nTopic: Project Kickoff Meeting\nTime: July 18, 2025 10:00 AM (EST)\nDuration: 1 hour\nHost: Andrew Wilson\n\nJoin Zoom Meeting:\nhttps://zoom.us/j/1234567890`,
    body2: `Zoom Meeting Reminder: Project Kickoff\n\n📅 Date: July 18, 2025\n⏰ Time: 10:00 AM - 11:00 AM (EST)\n👤 Host: Andrew Wilson (andrew@company.com)\n  
    📍 Location: Zoom Meeting\n🔗 Join Link: https://zoom.us/j/1234567890\n  
    📌 Meeting ID: 123 456 7890\n🔒 Passcode: 123456 (if required)\n  
    \n📝 Agenda:\n1. Project Overview (10:00-10:15)\n2. Team Introductions (10:15-10:25)\n3. Timeline Review (10:25-10:40)\n4. Q&A (10:40-11:00)\n  
    \n📎 Attachments:\n- Project Charter (pre-read)\n- Team Roster\n- Preliminary Timeline\n  
    \n💡 Tips:\n- Test your audio/video early\n- Download materials beforehand\n- Use wired connection if possible\n  
    \nSee you there!\nAndrew Wilson\nProject Manager`
  },
  11: {
    sender: "Twitter",
    email: "security@twitter.com",
    subject: "New login to your account",
    tag: "Security",
    body: `There was a login to your Twitter account from a new device:\n\nDate: July 16, 2025\nTime: 2:45 PM (GMT)\nLocation: New York, US\nDevice: Chrome on Windows\n\nIf this wasn't you, please secure your account immediately.`,
    body2: `Twitter Security Alert: New Login Detected\n\n⚠️ We noticed a new login to your account (@james_smith):\n  
    \n📅 Date: July 16, 2025\n🕒 Time: 2:45 PM GMT\n📍 Approximate Location: New York, US (IP: 192.168.1.1)\n💻 Device: Chrome on Windows 11\n  
    \n🔒 Is this you?\n- Yes, this was me\n- No, secure my account\n  
    \n🚨 If this wasn't you:\n1. Change your password immediately\n2. Review connected applications\n3. Enable two-factor authentication\n4. Check for suspicious activity\n  
    \nℹ️ Recent Account Activity:\n- 3 new followers\n- 5 tweets liked\n- 1 direct message sent\n  
    \nStay secure,\nTwitter Safety Team`
  },
  12: {
    sender: "Spotify",
    email: "newsletter@spotify.com",
    subject: "Your Weekly Playlist is here",
    tag: "Music",
    body: `Your Discover Weekly playlist is ready!\n\nWe've made a playlist just for you with 30 new songs we think you'll love, based on your listening history.\n\nStart listening now and discover your next favorite song.\n\nThe Spotify Team`,
    body2: `🎵 Your Personalized Discover Weekly - July 26, 2025\n  
    \nWe've curated 30 new tracks based on your recent listens to The Weeknd, Dua Lipa, and similar artists.\n  
    \n🔥 This Week's Highlights:\n1. "Midnight Dreams" - New from your favorite artist\n2. "Summer Vibes" - Trending in your area\n3. "Throwback Jam" - Matching your 90s playlist\n  
    \n📊 Your Listening Stats:\n- 12 hours listened this week\n- Top genre: Pop Dance\n- Discovered 8 new artists last month\n  
    \n🎧 How We Made This:\n- Similar to your "Chill Evenings" playlist\n- Matches your frequent skips\n- Includes local trending tracks\n  
    \nListen now and tell us what you think!\nSpotify Recommendations Team`
  },
  13: {
    sender: "Flipkart",
    email: "offers@flipkart.com",
    subject: "Mega sale starts now!",
    tag: "Promotional",
    body: `The Big Billion Days Sale is here!\n\nEnjoy massive discounts across all categories:\n- Up to 70% off on electronics\n- 50% off on fashion\n- Buy 1 Get 1 free on selected items\n\nSale ends July 16 - shop now!`,
    body2: `🚨 FLASH SALE ALERT: Big Billion Days 2025 🚨\n  
    \n⏳ Limited Time Offers (July 14-16):\n  
    \n💻 Electronics:\n- iPhone 15: ₹65,999 (22% off)\n- Samsung OLED TV: 50% off\n- Sony Headphones: Buy 1 Get 1 Free\n  
    \n👗 Fashion:\n- 60% off on Levi's Jeans\n- 4 T-shirts for ₹999\n- Designer Watches from ₹1,499\n  
    \n🛒 Exclusive for You:\n- Extra 10% off with code WELCOME10\n- Free delivery on all orders\n- 5% cashback on app purchases\n  
    \n🔥 Hot Deals Going Fast!\n- 85% of PS5 stock already sold\n- Only 3 left in your wishlist\n  
    \nShop now before it's gone!\nFlipkart Deals Team`
  },
  14: {
    sender: "Facebook",
    email: "notifications@facebookmail.com",
    subject: "You have new friend suggestions",
    tag: "Social",
    body: `People you may know on Facebook:\n\n1. Sarah Williams (5 mutual friends)\n2. Michael Brown (Works at Tech Solutions)\n3. David Lee (Went to State University)\n\nLog in to Facebook to connect with these people.`,
    body2: `🌐 Facebook Connections You Might Know\n  
    \nWe found people you may want to connect with:\n  
    \n1. Sarah Williams\n- 5 mutual friends\n- Works at Digital Creations\n- From Boston, MA\n  
    \n2. Michael Brown\n- Colleague at Tech Solutions\n- Alumni of MIT\n- Interested in AI and Robotics\n  
    \n3. David Lee\n- Classmate at State University\n- Member of "Web Developers 2025"\n- Recently moved to Austin\n  
    \n🔍 Why These Suggestions?\n- Shared work history\n- Common education background\n- Similar interest groups\n  
    \n💡 Tip: Growing your network helps you:\n- Discover job opportunities\n- Stay informed\n- Connect with communities\n  
    \nBuild your network today!`
  },
  15: {
    sender: "Apple",
    email: "no-reply@apple.com",
    subject: "Your Apple ID was used to sign in",
    tag: "Security",
    body: `Your Apple ID was used to sign in to iCloud on a new Windows computer.\n\nDate: July 12, 2025\nTime: 9:30 AM (PST)\n\nIf this was you, you can disregard this email. If you don't recognize this activity, please secure your account immediately.`,
    body2: `Apple ID Security Notification\n  
    \nWe detected a sign-in to your Apple ID (j.smith@email.com):\n  
    \n📅 Date: July 12, 2025\n🕘 Time: 9:30 AM PST\n📍 Location: San Francisco, CA (IP: 192.168.0.1)\n💻 Device: Windows PC (Chrome browser)\n  
    \n✅ If this was you:\nNo further action is needed. You may want to review your recent sign-ins.\n  
    \n🚨 If this wasn't you:\n1. Change your Apple ID password immediately\n2. Check your account for suspicious activity\n3. Enable two-factor authentication\n4. Review trusted devices\n  
    \n🔒 Account Security Tips:\n- Use a strong, unique password\n- Never share verification codes\n- Beware of phishing attempts\n  
    \nApple Support`
  }
};
  return (
    <div>
        <span className='block lg:hidden' onClick={()=>setOpen(false)}>
        <FaArrowLeft size={20} />
      </span>
      <div className='p-5'>
    
    <div>
        <div>
        <div className="flex items-center gap-7">
                        <FaStar color="#F8C076" />
                        <IoMdInformationCircleOutline />
                        <GoTrash />
        </div>
      </div>
      
      <div className='flex justify-between items-center'>
         <div className='profiletag mt-10 flex items-center gap-3'>
          <Profile wh={13} url={user} />
          <div>
            <p className='text-[16px] leading-[24px] font-bold'>{emailBodies[openedMail].sender}</p>
            <p className='text-[16px]'>{emailBodies[openedMail].email}</p>
          </div>
        </div>

        <span className={`rounded-2xl pl-3 pt-0.5 pr-3 pb-0.5 text-[14px] leading-[22px] text-white ${getTagColor(emailBodies[openedMail].tag)}`}>
  {emailBodies[openedMail].tag}
</span>
      </div>

      <div className='mt-5'>
        <p className='text-[20px] leading-[30px] font-bold'>{emailBodies[openedMail].subject}</p>
      </div>
      
      <div className='text-[#707A82]'>
        <p className='text-[14px] leading-[21px] mt-3'>{emailBodies[openedMail].body}</p>
        <p className='text-[14px] leading-[21px] mt-3'>{emailBodies[openedMail].body2}</p>
        
        <p className='text-[14px] leading-[21px] font-bold text-black'>James Smith</p>
      </div>

        <div class="mx-auto border-b border-b-gray-300 border-b-[1px] w-full mt-6 mb-6" />
        
        <div>
            <p className='text-[14px] leading-[24px] font-bold mb-4'>Attachments</p>
           <div className="flex flex-col justify-start ml-0 lg:ml-8 mr-8 lg:flex-row lg:justify-between lg:items-center gap-0 lg:gap-3">

                <div className='flex items-center gap-4'>
                <img src={attach1} alt="" srcset="" />
                <div className=''>
                    <p className='text-[14px] font-bold'>adobe.pdf</p>
                    <p className='text-[14px] leading-[24px]'>2MB</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <img src={attach2} alt="" srcset="" />
                <div className=''>
                    <p className='text-[14px] font-bold'>adobe.pdf</p>
                    <p className='text-[14px] leading-[24px]'>2MB</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <img src={attach3} alt="" srcset="" />
                <div className=''>
                    <p className='text-[14px] font-bold'>adobe.pdf</p>
                    <p className='text-[14px] leading-[24px]'>2MB</p>
                </div>
            </div>
            </div>
        </div>

        <div class="mx-auto border-b border-b-gray-300 border-b-[1px] w-full mt-6 mb-6" />

        <div className='flex items-center gap-3'>
            <div className='flex items-center gap-3'>
            <span><HiReply /></span>
            <p className='text-[14px] leading-[24px]'>Reply</p>
        </div>
        <div className='flex items-center gap-3'>
            <span><LuForward /></span>
            <p className='text-[14px] leading-[24px]'>Forward</p>
        </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default MailBody

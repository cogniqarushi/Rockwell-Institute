import { Review } from '../types';

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Sarah Jenkins',
    role: 'Licensed Broker',
    location: 'Seattle, WA',
    date: '2026-05-12',
    rating: 5,
    comment: 'I took the 90-Hour licensing package and the Cram Course. The Cram Course is incredible! It prepared me so well that the actual state exam felt easier than the practice quizzes. I passed on my very first try. Rockwell is absolutely worth every penny.',
    courseName: 'Washington 90-Hour Broker Licensing Package',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'David Chen',
    role: 'Managing Broker',
    location: 'Bellevue, WA',
    date: '2026-06-02',
    rating: 5,
    comment: 'Rockwell has been my go-to for real estate education since I first got licensed in 2012. I just finished my biennial continuing education renewal package. As always, the materials are up to date, the system is seamless, and certificates are ready instantly.',
    courseName: 'Washington 30-Hour Broker First Renewal CE Package',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Marcus Williams',
    role: 'Real Estate Agent',
    location: 'Tacoma, WA',
    date: '2026-04-20',
    rating: 5,
    comment: 'The Rockwell Cram Course is legendary for a reason. Real estate laws can be dry, but their questions, explanations, and practice exams are incredibly focused. If you want to make sure you pass the exam on your first try, this is the course you need.',
    courseName: 'Rockwell Cram Course (Washington Broker Exam Prep)',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Elena Rostova',
    role: 'Broker',
    location: 'Spokane, WA',
    date: '2026-05-28',
    rating: 5,
    comment: 'As a busy mother of two, the flexibility of Rockwell’s online platform was a life-saver. I was able to study late at night and on weekends. The 60-Hour and 30-Hour courses are very structured and easy to digest. Highly recommend!',
    courseName: 'Washington 90-Hour Broker Licensing Package',
    verified: true
  },
  {
    id: 'rev-5',
    name: 'Thomas K.',
    role: 'New Agent Candidate',
    location: 'Vancouver, WA',
    date: '2026-06-15',
    rating: 4,
    comment: 'I purchased the printed Fundamentals textbook along with the online course. The text is beautifully written and very clear. Rockwell makes complex legal concepts easy to grasp. The only reason for 4 stars is that I wish shipping was a bit faster, but the online access was immediate.',
    courseName: 'Washington Real Estate Fundamentals (Printed Textbook)',
    verified: true
  },
  {
    id: 'rev-6',
    name: 'Amanda Martinez',
    role: 'Broker / REALTOR®',
    location: 'Olympia, WA',
    date: '2026-03-10',
    rating: 5,
    comment: 'Rockwell is the most trusted school in WA state. When I told my managing broker that I graduated from Rockwell, they immediately knew I had received high-quality training. It carries real weight in the industry.',
    courseName: 'Washington 90-Hour Broker Licensing Package',
    verified: true
  }
];

export const GENERAL_FAQS = [
  {
    id: 'faq-1',
    question: 'How do I become a real estate broker in Washington State?',
    answer: 'To become a real estate broker in Washington, you must: (1) Be at least 18 years old. (2) Have a high school diploma or equivalent. (3) Successfully complete 90 hours of approved real estate education (60-Hour Fundamentals + 30-Hour Practices). (4) Pass the Washington real estate broker’s licensing exam. (5) Apply for your license under a sponsoring managing broker.',
    category: 'licensing'
  },
  {
    id: 'faq-2',
    question: 'What is the Rockwell Cram Course and why is it so famous?',
    answer: 'The Rockwell Cram Course is our highly specialized exam preparation program. It covers both national and Washington-specific real estate concepts with matching simulated practice exams. Over the past 50 years, it has helped over 100,000 professionals pass, and we maintain an exceptional 90%+ pass rate, supported by our Pass Guarantee.',
    category: 'examprep'
  },
  {
    id: 'faq-3',
    question: 'How long do I have to complete my online course?',
    answer: 'You have a full 12 months (1 year) of unlimited access to your online courses from the date of purchase. This allows you to study at your own comfortable pace, whether you want to finish in 2 weeks or over several months.',
    category: 'general'
  },
  {
    id: 'faq-4',
    question: 'Does Rockwell report my Continuing Education hours to the state?',
    answer: 'Yes! Once you complete a Continuing Education (CE) course and complete the required evaluations, we issue an official Certificate of Completion that you can download instantly. We also report completed credits directly to the Washington Department of Licensing (DOL) database for smooth renewal.',
    category: 'ce'
  },
  {
    id: 'faq-5',
    question: 'Are Rockwell courses approved by the state of Washington?',
    answer: 'Absolutely. Every licensing and continuing education course offered by Rockwell Institute is fully approved and certified by the Washington Department of Licensing (DOL) and meets all educational requirements under Washington law.',
    category: 'general'
  }
];

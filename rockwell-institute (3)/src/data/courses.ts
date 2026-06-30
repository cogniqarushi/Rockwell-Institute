import { Course } from '../types';

export const COURSES: Course[] = [
  {
    id: 'wa-90-licensing-pkg',
    title: 'Washington 90-Hour Broker Licensing Package',
    category: 'licensing',
    categoryLabel: 'Licensing Package',
    price: 489,
    hours: 90,
    format: 'Online',
    description: 'The complete, approved package required to earn your Washington Real Estate Broker license. Includes both mandatory courses (60-Hour Fundamentals + 30-Hour Practices) with full exam preparation integrated.',
    rating: 4.9,
    reviewCount: 1420,
    featured: true,
    highlights: [
      'Approved by Washington Department of Licensing (DOL)',
      'Includes 60-Hour Real Estate Fundamentals & 30-Hour Real Estate Practices',
      'Interactive online lessons with practice quizzes',
      'Free Rockwell Exam Prep Cram Course included ($125 value)',
      '12 months of course access'
    ],
    requirements: 'Must be 18+ and have a high school diploma or equivalent to apply for license.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wa-60-fundamentals',
    title: 'Washington 60-Hour Real Estate Fundamentals',
    category: 'licensing',
    categoryLabel: 'Individual Licensing Course',
    price: 349,
    hours: 60,
    format: 'Online',
    description: 'The foundation course for your real estate education. Master the core theories, principles, and laws governing real estate transactions, contracts, and ownership.',
    rating: 4.8,
    reviewCount: 840,
    featured: false,
    highlights: [
      'Covers National and Washington-specific real estate law',
      'Engaging interactive animations and legal scenarios',
      'Meets 60/90 hours of state licensing requirements',
      'Professional instructor support via email or phone'
    ],
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wa-30-practices',
    title: 'Washington 30-Hour Real Estate Practices',
    category: 'licensing',
    categoryLabel: 'Individual Licensing Course',
    price: 189,
    hours: 30,
    format: 'Online',
    description: 'Gain practical knowledge of how to operate as a broker. Topics include agency relationships, listings, marketing, pricing, closing real estate sales, and professional ethics.',
    rating: 4.8,
    reviewCount: 520,
    featured: false,
    highlights: [
      'Focuses on modern sales methods and client management',
      'Step-by-step tutorials on transaction documents',
      'Meets 30/90 hours of state licensing requirements',
      'Learn standard contracts and negotiation strategies'
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wa-cram-course',
    title: 'Rockwell Cram Course (Washington Broker Exam Prep)',
    category: 'examprep',
    categoryLabel: 'Exam Prep Program',
    price: 125,
    hours: 8,
    format: 'Online',
    description: 'Our signature, legendary Cram Course. Perfected over 50 years, this course walks you through precisely what is on the Washington state and national licensing exams. Our students have an industry-leading 90%+ first-time pass rate.',
    rating: 4.9,
    reviewCount: 3820,
    featured: true,
    highlights: [
      'Over 90% student first-time pass rate',
      'Simulated timed exams that mimic the actual testing center environment',
      'Interactive memory aids, vocabulary drills, and legal recaps',
      'Unlimited practice exams with detailed answer keys',
      'Rockwell Pass Guarantee: Pass on your first try or get a full refund!'
    ],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wa-qbank-prep',
    title: 'Washington Real Estate Exam Prep Q-Bank',
    category: 'examprep',
    categoryLabel: 'Exam Prep Q-Bank',
    price: 79,
    hours: 0,
    format: 'Online',
    description: 'A comprehensive, adaptive practice question bank containing over 1,500 highly realistic exam questions. Design your own quizzes by topic and review detailed explanations for every option.',
    rating: 4.7,
    reviewCount: 910,
    featured: false,
    highlights: [
      '1,500+ updated national and Washington state questions',
      'Detailed rationale and legal references for every explanation',
      'Dashboard showing strengths and weaknesses by syllabus category',
      'Includes math tutoring and formula cheat sheets'
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wa-ce-first-renewal',
    title: 'Washington 30-Hour Broker First Renewal CE Package',
    category: 'ce',
    categoryLabel: 'Continuing Education',
    price: 199,
    hours: 30,
    format: 'Online',
    description: 'Specially designed package meeting all requirements for a broker’s first active license renewal. Includes the mandatory Core Course, legislative updates, and high-value electives.',
    rating: 4.8,
    reviewCount: 1650,
    featured: true,
    highlights: [
      'Fully compliant with Washington DOL requirements',
      'Includes mandatory Current Cycle Washington Core Course (3 hours)',
      'Includes Fair Housing and Agency Law updates',
      'Saves over $80 compared to buying courses individually',
      'Instant certificate download upon completion'
    ],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wa-core-course',
    title: 'Washington Real Estate Core Course (Current Cycle)',
    category: 'ce',
    categoryLabel: 'Continuing Education',
    price: 49,
    hours: 3,
    format: 'Online',
    description: 'The mandatory core course required of all active Washington real estate brokers and managing brokers during the current two-year licensing cycle.',
    rating: 4.6,
    reviewCount: 2240,
    featured: false,
    highlights: [
      '100% compliant with latest Washington real estate core directives',
      'Focuses on agency disclosures, advertising rules, and legislation changes',
      'Short quizzes with instant feedback'
    ],
    image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wa-ce-ethics',
    title: 'Ethics & Professional Real Estate Practice',
    category: 'ce',
    categoryLabel: 'Continuing Education',
    price: 29,
    hours: 3,
    format: 'Online',
    description: 'Meets the National Association of Realtors (NAR) Code of Ethics training requirement. Review professional duties, mediation processes, and moral standards in brokerage.',
    rating: 4.7,
    reviewCount: 1040,
    featured: false,
    highlights: [
      'Satisfies the current NAR biennial ethics training cycle',
      'Case studies outlining moral dilemmas and arbitration rules',
      'Quick, digestible 3-hour module'
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wa-book-fundamentals',
    title: 'Washington Real Estate Fundamentals (Printed Textbook)',
    category: 'books',
    categoryLabel: 'Books & Resources',
    price: 89,
    hours: 0,
    format: 'Book',
    description: 'The authoritative, highly acclaimed textbook authored by Rockwell’s legal and educational experts. Clear explanations of Washington property law, financing, agency, and contracts.',
    rating: 4.9,
    reviewCount: 750,
    featured: false,
    highlights: [
      'Authored by Rockwell’s in-house educational and legal board',
      'Includes practice glossary, diagrams, and sample transaction docs',
      'Shipped within 1 business day or instant digital access',
      'Perfect study guide to accompany online courses'
    ],
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wa-book-practices',
    title: 'Washington Real Estate Practices (Printed Textbook)',
    category: 'books',
    categoryLabel: 'Books & Resources',
    price: 69,
    hours: 0,
    format: 'Book',
    description: 'Complement your practical learning with our physical textbook detailing daily real estate brokerage, property management, pricing theory, and escrow handling in Washington.',
    rating: 4.8,
    reviewCount: 430,
    featured: false,
    highlights: [
      'Rich, detailed case studies on listings and buyer representation',
      'Up-to-date legal forms and escrow closing calculations',
      'Clear, accessible, and structured for self-study'
    ],
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800'
  }
];

export interface Hackathon {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  participants: number;
  maxParticipants: number;
  image?: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  tags: string[];
  organizer: string;
  prize: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const mockHackathons: Hackathon[] = [
  {
    id: '1',
    title: 'AI Innovation Challenge 2024',
    description: 'Join us for an exciting hackathon focused on artificial intelligence and machine learning. Build innovative solutions using cutting-edge AI technologies.',
    date: '2024-03-15',
    location: 'San Francisco, CA',
    participants: 45,
    maxParticipants: 100,
    image: '/images/ai-hackathon.jpg',
    status: 'upcoming',
    tags: ['AI', 'Machine Learning', 'Innovation'],
    organizer: 'TechCorp',
    prize: '$10,000',
    difficulty: 'intermediate'
  },
  {
    id: '2',
    title: 'Web3 Developer Weekend',
    description: 'A 48-hour hackathon exploring blockchain technology, smart contracts, and decentralized applications. Perfect for Web3 enthusiasts.',
    date: '2024-02-28',
    location: 'New York, NY',
    participants: 78,
    maxParticipants: 80,
    image: '/images/web3-hackathon.jpg',
    status: 'ongoing',
    tags: ['Blockchain', 'Web3', 'Smart Contracts'],
    organizer: 'CryptoLabs',
    prize: '$15,000',
    difficulty: 'advanced'
  },
  {
    id: '3',
    title: 'Mobile App Marathon',
    description: 'Create amazing mobile applications in this 24-hour intensive hackathon. Focus on iOS, Android, or cross-platform development.',
    date: '2024-01-20',
    location: 'Austin, TX',
    participants: 60,
    maxParticipants: 60,
    image: '/images/mobile-hackathon.jpg',
    status: 'completed',
    tags: ['Mobile', 'iOS', 'Android'],
    organizer: 'AppDev Inc',
    prize: '$5,000',
    difficulty: 'beginner'
  },
  {
    id: '4',
    title: 'Green Tech Hackathon',
    description: 'Develop sustainable technology solutions for environmental challenges. Focus on climate change, renewable energy, and conservation.',
    date: '2024-04-10',
    location: 'Seattle, WA',
    participants: 32,
    maxParticipants: 75,
    image: '/images/green-tech.jpg',
    status: 'upcoming',
    tags: ['Sustainability', 'Environment', 'Green Tech'],
    organizer: 'EcoTech Foundation',
    prize: '$8,000',
    difficulty: 'intermediate'
  },
  {
    id: '5',
    title: 'FinTech Innovation Summit',
    description: 'Revolutionize financial services with technology. Build solutions for banking, payments, investing, and financial inclusion.',
    date: '2024-03-25',
    location: 'Chicago, IL',
    participants: 55,
    maxParticipants: 90,
    image: '/images/fintech.jpg',
    status: 'upcoming',
    tags: ['Finance', 'Banking', 'Payments'],
    organizer: 'FinanceHub',
    prize: '$12,000',
    difficulty: 'advanced'
  }
];

export const getHackathonById = (id: string): Hackathon | undefined => {
  return mockHackathons.find(hackathon => hackathon.id === id);
};

export const getHackathonsByStatus = (status: Hackathon['status']): Hackathon[] => {
  return mockHackathons.filter(hackathon => hackathon.status === status);
};

export const getHackathonsByDifficulty = (difficulty: Hackathon['difficulty']): Hackathon[] => {
  return mockHackathons.filter(hackathon => hackathon.difficulty === difficulty);
};

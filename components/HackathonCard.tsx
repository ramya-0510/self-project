import Link from 'next/link';

interface HackathonCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  participants: number;
  maxParticipants: number;
  image?: string;
}

export default function HackathonCard({
  id,
  title,
  description,
  date,
  location,
  participants,
  maxParticipants,
  image
}: HackathonCardProps) {
  const participationPercentage = (participants / maxParticipants) * 100;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {image && (
        <div className="h-48 bg-gray-200 rounded-t-lg overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <div className="space-y-2 text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {date}
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {location}
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Participants</span>
            <span className="font-medium">{participants}/{maxParticipants}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(participationPercentage, 100)}%` }}
            />
          </div>
        </div>

        <Link
          href={`/hackathon/${id}`}
          className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

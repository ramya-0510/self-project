import Link from 'next/link';
import { mockHackathons } from '@/lib/mockData';
import HackathonCard from '@/components/HackathonCard';

export default function Home() {
  const featuredHackathons = mockHackathons.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="gradient-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Discover Amazing Hackathons
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join exciting coding competitions, learn new skills, and win amazing prizes. 
            Connect with developers from around the world.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/explore"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Hackathons
            </Link>
            <Link 
              href="/student-dashboard"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Student Dashboard
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Hackathons
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Check out these exciting upcoming events and start your journey today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredHackathons.map((hackathon) => (
              <HackathonCard
                key={hackathon.id}
                id={hackathon.id}
                title={hackathon.title}
                description={hackathon.description}
                date={hackathon.date}
                location={hackathon.location}
                participants={hackathon.participants}
                maxParticipants={hackathon.maxParticipants}
                image={hackathon.image}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/explore"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              View All Hackathons
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose EduEvent?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Learn & Grow</h3>
              <p className="text-gray-600">
                Enhance your skills by working on real-world projects and learning from experienced mentors.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Network & Connect</h3>
              <p className="text-gray-600">
                Meet talented developers, form teams, and build lasting professional relationships.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Win Prizes</h3>
              <p className="text-gray-600">
                Compete for amazing prizes, recognition, and opportunities to showcase your talent.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

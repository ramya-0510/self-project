interface HackathonPageProps {
  params: { id: string };
}

export default function HackathonPage({ params }: HackathonPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Hackathon Details</h1>
      <p className="text-gray-600">Viewing hackathon with ID: {params.id}</p>
    </div>
  );
}

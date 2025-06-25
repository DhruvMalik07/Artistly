const mockSubmissions = [
  { id: 1, name: 'Asha Singh', category: 'Pop Singer', city: 'Delhi', fee: '20,000' },
  { id: 2, name: 'Ravi Sharma', category: 'Classical Singer', city: 'Mumbai', fee: '15,000' },
  { id: 3, name: 'Priya Patel', category: 'Dancer', city: 'Bangalore', fee: '18,000' },
  { id: 4, name: 'DJ Aryan', category: 'Techno DJ', city: 'Goa', fee: '25,000' },
  { id: 5, name: 'DJ Meera', category: 'Bollywood DJ', city: 'Delhi', fee: '22,000' },
];

function Table({ data }) {
  return (
    <table className="min-w-full border divide-y divide-gray-200 rounded-xl overflow-hidden shadow-xl">
      <thead className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white">
        <tr>
          <th className="px-4 py-3 text-left font-bold">Name</th>
          <th className="px-4 py-3 text-left font-bold">Category</th>
          <th className="px-4 py-3 text-left font-bold">City</th>
          <th className="px-4 py-3 text-left font-bold">Fee</th>
          <th className="px-4 py-3 text-left font-bold">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan={5} className="text-center py-4 text-gray-500">No submissions found.</td>
          </tr>
        ) : (
          data.map((row, idx) => (
            <tr key={row.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
              <td className="px-4 py-3 font-semibold text-blue-700">{row.name}</td>
              <td className="px-4 py-3 text-gray-900 font-semibold">{row.category}</td>
              <td className="px-4 py-3 text-gray-900 font-semibold">{row.city}</td>
              <td className="px-4 py-3 font-semibold text-purple-700">₹{row.fee}</td>
              <td className="px-4 py-3">
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-full font-semibold shadow hover:from-pink-500 hover:to-blue-500 transition">View</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-8">
      <h1 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-center">Manager Dashboard</h1>
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-3xl mx-auto">
        <Table data={mockSubmissions} />
      </div>
    </main>
  );
} 
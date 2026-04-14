import React, { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';
import { Link } from 'react-router';

const Friends = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch('Data.json')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setContacts(data);
          setLoading(false);
        }, 500); 
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'overdue':
        return 'badge-soft badge-error';
      case 'almost due':
        return 'badge-soft badge-warning';
      case 'on-track':
        return 'badge-soft badge-success';
      default:
        return 'badge-soft';
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="my-20 font-sans">
      <div className="max-w-[85%] mx-auto">
        <div className="mb-10">
          <h4 className="text-[#1F2937] text-3xl font-bold">
            Your Friends
          </h4>
          <p className="text-gray-500">Manage and track your connections</p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {contacts.map((contact) => (
            <Link
              key={contact.id}
              to={`/friend/${contact.id}`}
              className="card bg-base-100 shadow-sm border border-gray-100 p-8 flex flex-col items-center transition-all hover:shadow-md hover:scale-[1.01] cursor-pointer"
            >
              {/* Profile Image */}
              <div className="avatar mb-6">
                <div className="w-24 rounded-full ring ring-base-200 ring-offset-base-100 ring-offset-4">
                  <img
                    src={contact.picture}
                    alt={contact.name}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Name & Contact Info */}
              <h2 className="text-xl font-bold text-gray-800 text-center">
                {contact.name}
              </h2>
              <p className="text-gray-400 text-sm mt-1 mb-5">
                {contact.days_since_contact}d ago
              </p>

              {/* Tags (DaisyUI Badges) */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {contact.tags.map((tag, idx) => (
                  <div
                    key={idx}
                    className="badge badge-success badge-outline badge-sm font-bold p-3 text-[10px] uppercase tracking-wider"
                  >
                    {tag}
                  </div>
                ))}
              </div>

              {/* Status*/}
              <div className="mt-auto w-full flex justify-center">
                <div
                  className={`badge h-10 px-8 font-bold uppercase tracking-[0.15em] text-[11px] rounded-full border-none ${getStatusClass(
                    contact.status
                  )}`}
                >
                  {contact.status}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Friends;
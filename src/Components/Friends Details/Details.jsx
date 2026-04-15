import React, { useEffect, useState } from 'react';
import { FiBell } from 'react-icons/fi';
import { MdInbox } from 'react-icons/md';
import { BiPhoneCall } from 'react-icons/bi';
import { LuMessageCircleMore } from 'react-icons/lu';
import { GoDeviceCameraVideo } from 'react-icons/go';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';

const TimeLine = 'timelineEvents';

const Details = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch('/Data.json')
      .then((res) => res.json())
      .then((data) => {
        const selectedFriend = data.find((item) => String(item.id) === id);
        setTimeout(() => {
          setFriend(selectedFriend || null);
          setLoading(false);
        }, 300);
      })
      .catch((err) => {
        console.error('Error fetching friend details:', err);
        setLoading(false);
      });
  }, [id]);

  const getStatusClass = (status) => {
    switch (status?.toLowerCase()) {
      case 'overdue':
        return 'badge-error';
      case 'almost due':
        return 'badge-warning';
      case 'on-track':
        return 'badge-success';
      default:
        return 'badge-neutral';
    }
  };

  const formatDate = (dateValue) => {
    if (!dateValue) return 'N/A';
    const date = new Date(dateValue);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const checkIn = (type) => {
    const prevEvents = JSON.parse(localStorage.getItem(TimeLine) || '[]');

    const newEvent = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      type,
      friendId: friend.id,
      friendName: friend.name,
      createdAt: new Date().toISOString(),
    };

    const upEvents = [newEvent, ...prevEvents].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    localStorage.setItem(TimeLine, JSON.stringify(upEvents));
    toast.success(`${type} with ${friend.name}`);
  };

  if (loading) return <Loading />;

  if (!friend) {
    return (
      <div className="bg-[#F8FAFC] min-h-screen p-6 md:p-12 font-sans flex items-center justify-center">
        <p className="text-gray-500 text-lg font-medium">Friend details not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#F8FAFC] min-h-screen p-6 md:p-12 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* left side */}
        <div className="lg:col-span-4 space-y-6">
          {/* Friend details Card */}
          <div className="card bg-white shadow-sm border border-gray-100 p-10 flex flex-col items-center">
            <div className="avatar mb-6">
              <div className="w-28 rounded-full ring ring-base-200 ring-offset-4">
                <img src={friend.picture} alt={friend.name} />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{friend.name}</h2>
            <div
              className={`badge badge-soft font-bold my-2 uppercase text-[10px] tracking-widest px-4 py-3 ${getStatusClass(
                friend.status
              )}`}
            >
              {friend.status}
            </div>
            {friend.tags?.[0] && (
              <div className="badge badge-success badge-soft font-bold text-[10px] uppercase px-4 py-3">
                {friend.tags[0]}
              </div>
            )}
            <p className="text-gray-500 text-sm mt-6 text-center italic leading-relaxed">
              "{friend.bio}" <br />
              <span className="text-xs font-semibold not-italic text-gray-400 mt-2 block">
                Preferred: email
              </span>
            </p>
          </div>

          {/* Action btn */}
          <div className="flex flex-col gap-3">
            <button className="btn bg-white hover:bg-gray-50 border-gray-200 text-gray-600 font-medium normal-case shadow-sm">
            <FiBell />   Snooze 2 Weeks
            </button>
            <button className="btn bg-white hover:bg-gray-50 border-gray-200 text-gray-600 font-medium normal-case shadow-sm">
              <MdInbox /> Archive
            </button>
            <button className="btn bg-red-50 hover:bg-red-100 border-none text-red-500 font-medium normal-case">
              <RiDeleteBin6Line /> Delete
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Stasts*/}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center shadow-sm">
              <h3 className="text-5xl font-black text-gray-800">{friend.days_since_contact}</h3>
              <p className="text-gray-400 text-xs mt-3 uppercase font-bold tracking-wider">Days Since Contact</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center shadow-sm">
              <h3 className="text-5xl font-black text-gray-800">{friend.goal}</h3>
              <p className="text-gray-400 text-xs mt-3 uppercase font-bold tracking-wider">Goal (Days)</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center shadow-sm">
              <h3 className="text-2xl font-bold text-[#244d3f] mt-3">{formatDate(friend.next_due_date)}</h3>
              <p className="text-gray-400 text-xs mt-4 uppercase font-bold tracking-wider">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative">
            <button className="absolute top-6 right-8 btn btn-xs btn-ghost border border-gray-200 px-4">Edit</button>
            <h4 className="font-bold text-gray-700 text-lg mb-2">Relationship Goal</h4>
            <p className="text-gray-500">
              Connect every <span className="font-bold text-gray-800">{friend.goal} days</span>
            </p>
          </div>

          {/* Call, Text, Video Section */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="font-bold text-gray-700 text-lg mb-6">Quick Check-In</h4>
            <div className="grid grid-cols-3 gap-6">
              <button
                onClick={() => checkIn('Call')}
                className="flex flex-col items-center justify-center py-8 border border-gray-50 rounded-2xl hover:bg-gray-50 transition-all group"
              >
                <span className="text-3xl mb-3 group-hover:scale-110 transition-transform"><BiPhoneCall /></span>
                <span className="text-sm font-bold text-gray-600">Call</span>
              </button>
              <button
                onClick={() => checkIn('Text')}
                className="flex flex-col items-center justify-center py-8 border border-gray-50 rounded-2xl hover:bg-gray-50 transition-all group"
              >
                <span className="text-3xl mb-3 group-hover:scale-110 transition-transform"><LuMessageCircleMore /></span>
                <span className="text-sm font-bold text-gray-600">Text</span>
              </button>
              <button
                onClick={() => checkIn('Video')}
                className="flex flex-col items-center justify-center py-8 border border-gray-50 rounded-2xl hover:bg-gray-50 transition-all group"
              >
                <span className="text-3xl mb-3 group-hover:scale-110 transition-transform"><GoDeviceCameraVideo /></span>
                <span className="text-sm font-bold text-gray-600">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={1800} hideProgressBar={false} />
    </div>
  );
};

export default Details;
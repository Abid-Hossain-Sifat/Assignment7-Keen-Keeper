import React from 'react';
import { FiBell } from 'react-icons/fi';
import { MdInbox } from 'react-icons/md';
import Call from '../../../public/assets/call.png'
import { BiPhoneCall } from 'react-icons/bi';
import { LuMessageCircleMore } from 'react-icons/lu';
import { GoDeviceCameraVideo } from 'react-icons/go';

const Details = () => {
  return (
    <div className="bg-[#F8FAFC] min-h-screen p-6 md:p-12 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* --- Left Column: Profile Card & Action Buttons --- */}
        <div className="lg:col-span-4 space-y-6">
          {/* Profile Card */}
          <div className="card bg-white shadow-sm border border-gray-100 p-10 flex flex-col items-center">
            <div className="avatar mb-6">
              <div className="w-28 rounded-full ring ring-base-200 ring-offset-4">
                <img src="https://i.ibb.co.com/LzQzY3L0/m1.png" alt="Profile" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Emma Wilson</h2>
            <div className="badge badge-error badge-soft font-bold my-2 uppercase text-[10px] tracking-widest px-4 py-3">
              Overdue
            </div>
            <div className="badge badge-success badge-soft font-bold text-[10px] uppercase px-4 py-3">
              Family
            </div>
            <p className="text-gray-500 text-sm mt-6 text-center italic leading-relaxed">
              "Former colleague, great mentor" <br />
              <span className="text-xs font-semibold not-italic text-gray-400 mt-2 block">Preferred: email</span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <button className="btn bg-white hover:bg-gray-50 border-gray-200 text-gray-600 font-medium normal-case shadow-sm">
            <FiBell />   Snooze 2 Weeks
            </button>
            <button className="btn bg-white hover:bg-gray-50 border-gray-200 text-gray-600 font-medium normal-case shadow-sm">
              <MdInbox /> Archive
            </button>
            <button className="btn bg-red-50 hover:bg-red-100 border-none text-red-500 font-medium normal-case">
              🗑️ Delete
            </button>
          </div>
        </div>

        {/* --- Right Column: Stats, Goals & Interactions --- */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Top Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center shadow-sm">
              <h3 className="text-5xl font-black text-gray-800">62</h3>
              <p className="text-gray-400 text-xs mt-3 uppercase font-bold tracking-wider">Days Since Contact</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center shadow-sm">
              <h3 className="text-5xl font-black text-gray-800">30</h3>
              <p className="text-gray-400 text-xs mt-3 uppercase font-bold tracking-wider">Goal (Days)</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center shadow-sm">
              <h3 className="text-2xl font-bold text-[#244d3f] mt-3">Feb 27, 2026</h3>
              <p className="text-gray-400 text-xs mt-4 uppercase font-bold tracking-wider">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal Section */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative">
            <button className="absolute top-6 right-8 btn btn-xs btn-ghost border border-gray-200 px-4">Edit</button>
            <h4 className="font-bold text-gray-700 text-lg mb-2">Relationship Goal</h4>
            <p className="text-gray-500">Connect every <span className="font-bold text-gray-800">30 days</span></p>
          </div>

          {/* Quick Check-In Section */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="font-bold text-gray-700 text-lg mb-6">Quick Check-In</h4>
            <div className="grid grid-cols-3 gap-6">
              <button className="flex flex-col items-center justify-center py-8 border border-gray-50 rounded-2xl hover:bg-gray-50 transition-all group">
                <span className="text-3xl mb-3 group-hover:scale-110 transition-transform"><BiPhoneCall /></span>
                <span className="text-sm font-bold text-gray-600">Call</span>
              </button>
              <button className="flex flex-col items-center justify-center py-8 border border-gray-50 rounded-2xl hover:bg-gray-50 transition-all group">
                <span className="text-3xl mb-3 group-hover:scale-110 transition-transform"><LuMessageCircleMore /></span>
                <span className="text-sm font-bold text-gray-600">Text</span>
              </button>
              <button className="flex flex-col items-center justify-center py-8 border border-gray-50 rounded-2xl hover:bg-gray-50 transition-all group">
                <span className="text-3xl mb-3 group-hover:scale-110 transition-transform"><GoDeviceCameraVideo /></span>
                <span className="text-sm font-bold text-gray-600">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
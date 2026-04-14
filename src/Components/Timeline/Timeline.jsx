import React, { useEffect, useMemo, useState } from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { GoDeviceCameraVideo } from 'react-icons/go';
import { LuMessageCircleMore } from 'react-icons/lu';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';

const TIMELINE_STORAGE_KEY = 'keen_keeper_timeline_events';
const ALLOWED_TYPES = ['Call', 'Text', 'Video'];

const eventConfig = {
  Text: { icon: <LuMessageCircleMore />, accent: 'text-slate-500' },
  Call: { icon: <BiPhoneCall />, accent: 'text-slate-600' },
  Video: { icon: <GoDeviceCameraVideo />, accent: 'text-slate-700' },
};

const filters = ['All', 'Call', 'Text', 'Video'];

const Timeline = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDeleteEvent = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
    localStorage.setItem(TIMELINE_STORAGE_KEY, JSON.stringify(updatedEvents));
    toast.error('Item Remove');
  };

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const rawEvents = localStorage.getItem(TIMELINE_STORAGE_KEY);

      if (!rawEvents) {
        setEvents([]);
        setLoading(false);
        return;
      }

      try {
        const parsed = JSON.parse(rawEvents);
        const validEvents = Array.isArray(parsed)
          ? parsed.filter((event) => ALLOWED_TYPES.includes(event.type))
          : [];
        localStorage.setItem(TIMELINE_STORAGE_KEY, JSON.stringify(validEvents));
        setEvents(validEvents);
      } catch {
        setEvents([]);
      }

      setLoading(false);
    }, 450);

    return () => clearTimeout(timer);
  }, []);

  const filteredAndSortedEvents = useMemo(() => {
    const filtered =
      selectedFilter === 'All'
        ? events
        : events.filter((event) => event.type === selectedFilter);

    return [...filtered].sort((a, b) => {
      const first = new Date(a.createdAt).getTime();
      const second = new Date(b.createdAt).getTime();
      return sortOrder === 'newest' ? second - first : first - second;
    });
  }, [events, selectedFilter, sortOrder]);

  const formatTime = (dateValue) =>
    new Date(dateValue).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });

  if (loading) return <Loading />;

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-12 px-6 font-sans">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-black text-slate-800 mb-8">Timeline</h1>

        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <select
            value={selectedFilter}
            onChange={(event) => setSelectedFilter(event.target.value)}
            className="select select-bordered select-sm bg-white border-slate-200 text-slate-500 text-sm w-full sm:w-52"
          >
            {filters.map((filter) => (
              <option key={filter} value={filter}>
                {filter === 'All' ? 'Filter timeline' : filter}
              </option>
            ))}
          </select>

          <select
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value)}
            className="select select-bordered select-sm bg-white border-slate-200 text-slate-500 text-sm w-full sm:w-44"
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </div>

        <div className="space-y-4">
          {filteredAndSortedEvents.map((event) => {
            const typeStyle = eventConfig[event.type] || eventConfig.Text;
            return (
              <div
                key={event.id}
                className="bg-white border border-slate-100 rounded-lg px-5 py-3 flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className={`text-2xl ${typeStyle.accent}`}>{typeStyle.icon}</div>
                  <div>
                    <p className="text-slate-700 text-sm">
                      <span className="font-bold">{event.type}</span>
                      <span className="text-slate-500"> with {event.friendName}</span>
                    </p>
                    <p className="text-xs text-slate-400">{formatTime(event.createdAt)}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleDeleteEvent(event.id)}
                  className="btn btn-ghost btn-sm text-red-400 hover:text-red-500 hover:bg-red-50"
                  aria-label="Delete timeline event"
                >
                  <RiDeleteBin6Line className="text-lg" />
                </button>
              </div>
            );
          })}

          {filteredAndSortedEvents.length === 0 && (
            <div className="bg-white border border-dashed border-slate-200 rounded-lg px-5 py-8 text-center text-slate-400">
              No timeline data.
            </div>
          )}
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={1800} />
    </div>
  );
};

export default Timeline;

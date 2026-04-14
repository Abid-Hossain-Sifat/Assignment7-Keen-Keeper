import React, { useEffect, useState } from 'react'

const Stats = () => {
  const [stats, setStats] = useState({
    totalFriends: 0,
    onTrack: 0,
    attention: 0,
    interactions: 0,
  });

  useEffect(() => {
    fetch('Data.json')
      .then((res) => res.json())
      .then((data) => {
        const totalFriends = data.length;
        const onTrack = data.filter(
          (friend) => friend.status?.toLowerCase() === 'on-track'
        ).length;
        const attention = data.filter(
          (friend) => friend.status?.toLowerCase() === 'overdue'
        ).length;
        const timelineEvents = JSON.parse(
          localStorage.getItem('keen_keeper_timeline_events') || '[]'
        );
        const now = new Date();
        const interactions = Array.isArray(timelineEvents)
          ? timelineEvents.filter((event) => {
              if (!event?.createdAt) return false;
              const eventDate = new Date(event.createdAt);
              return (
                eventDate.getMonth() === now.getMonth() &&
                eventDate.getFullYear() === now.getFullYear()
              );
            }).length
          : 0;

        setStats({
          totalFriends,
          onTrack,
          attention,
          interactions,
        });
      })
      .catch((err) => {
        console.error('Error fetching stats data:', err);
      });
  }, []);

  return (
    <div className='bg-[#f8fafc] my-10'>
      <div className='max-w-[80%] mx-auto flex justify-between text-center'>
        <div className='bg-white shadow-sm p-8 w-65'>
            <h1 id='totalFreien' className='text-[32px] font-semibold text-[#244D3F]'>
                {stats.totalFriends}
            </h1>
            <p className='text-[18px] text-[#64748B] mt-2'>
                Total Friends
            </p>
        </div>
        <div className='bg-white shadow-sm p-8 w-65 border-2 border-gray-100'>
            <h1 id='Track' className='text-[32px] font-semibold text-[#244D3F]'>
                {stats.onTrack}
            </h1>
            <p className='text-[18px] text-[#64748B] mt-2'>
                On Track
            </p>
        </div>
        <div className='bg-white shadow-sm p-8 w-65'>
            <h1 id='Attention' className='text-[32px] font-semibold text-[#244D3F]'>
                {stats.attention}
            </h1>
            <p className='text-[18px] text-[#64748B] mt-2'>
                Need Attention
            </p>
        </div>
        <div className='bg-white shadow-sm p-8 w-65'>
            <h1 id='Interactions' className='text-[32px] font-semibold text-[#244D3F]'>
                {stats.interactions}
            </h1>
            <p className='text-[18px] text-[#64748B] mt-2'>
                Interactions This Month
            </p>
        </div>
      </div>
    </div>
  )
}

export default Stats

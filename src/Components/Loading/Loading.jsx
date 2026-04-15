const Loading = ({ size = 'xl', fullScreen = true }) => {
  const containerClass = fullScreen
    ? 'flex justify-center items-center h-screen'
    : 'flex justify-center items-center py-8';

  return (
    <div className={containerClass}>
      <span className={`loading loading-dots loading-${size}`} style={{ color: '#244d3f' }}></span>
    </div>
  );
};

export default Loading;
'use client';

const EmptyProject = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
      <span className="text-4xl select-none">🗂️</span>
      <p className="text-[#1E1E1E] text-[0.95rem] font-medium tracking-wide">
        No projects in this category
      </p>
      <p className="text-[#B3B3B3] text-[0.8rem] font-light">
        Try selecting a different filter
      </p>
    </div>
  );
};

export default EmptyProject;

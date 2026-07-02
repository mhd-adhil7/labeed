import React from 'react';

// Lightweight placeholder card structure
export function CardSkeleton() {
  return (
    <div className="border border-slate-100 bg-white rounded-3xl p-8 h-64 animate-pulse flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 bg-slate-200 rounded-2xl mb-6" />
        <div className="h-5 bg-slate-200 rounded w-2/3 mb-4" />
        <div className="h-4 bg-slate-200 rounded w-full mb-2" />
        <div className="h-4 bg-slate-200 rounded w-5/6" />
      </div>
      <div className="h-3 bg-slate-200 rounded w-1/4 mt-4" />
    </div>
  );
}

export function SectionSkeleton({ cardCount = 3 }: { cardCount?: number }) {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 w-full">
      {/* Skeleton Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 animate-pulse">
        <div className="w-16 h-3 bg-slate-200 rounded mx-auto mb-3" />
        <div className="w-48 h-8 bg-slate-200 rounded mx-auto mb-4" />
        <div className="w-16 h-1 bg-slate-200 rounded mx-auto" />
      </div>
      
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: cardCount }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

export default function SkeletonLoader() {
  return <SectionSkeleton cardCount={3} />;
}

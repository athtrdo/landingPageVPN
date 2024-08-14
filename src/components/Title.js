import React from 'react'

export default function Title({title,title2,desc,desc2}) {
  return (
    <div className="container max-w-6xl mx-auto mb-10">
        <div className="text-center text-3xl font-medium mb-1">{title}</div>
        <div className="text-center text-3xl font-medium mb-4">{title2}</div>
        <div className="text-center font-normal text-sm text-gray-600">{desc}</div>
        <div className="text-center font-normal text-sm text-gray-600">{desc2}</div>
    </div>
  );
}

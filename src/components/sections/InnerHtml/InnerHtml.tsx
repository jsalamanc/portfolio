'use client';

import React from 'react';
import * as DOMPurify from 'dompurify';

export const InnerHtml = ({
  className = '',
  data = '',
}: {
  className: string;
  data: string;
}) => {
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: data }} />
  );
};

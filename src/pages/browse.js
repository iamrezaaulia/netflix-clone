import React from 'react';
import UseContent from '../hooks/use-content';
import SelectionFilter from '../utils/selection-filter';

export default function Browse() {
  const { series } = UseContent('series');
  const { films } = UseContent('films');
  const slides = SelectionFilter({ series, films });
  console.log('slides', slides);

  return (
    <>
      Browse
    </>
  )
}

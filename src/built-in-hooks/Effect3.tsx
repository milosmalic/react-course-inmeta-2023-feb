import React, { useEffect } from 'react';

interface IProps {
  cost: number;
  discount: number;
}
export default function Effect3({ cost, discount }: IProps) {
  // run multiple useEffects

  // useEffect(() => {
  //   console.log('Effect 1', cost);
  // }, []);

  // useEffect(() => {
  //   console.log('Effect 2', discount);
  // }, []);

  // useEffect(() => {
  //   console.log('Effect 3', cost - discount);
  // }, []);

  const { total } = useItemDiscounts(cost, discount);

  return <div>Custom Hook sample: {total}</div>;
}
// reusable custom hook must be in a separate file with prefix 'use'
function useItemDiscounts(cost: number, discount: number) {
  // run multiple useEffects
  useEffect(() => {
    console.log('Effect 1', cost);
  }, []);

  useEffect(() => {
    console.log('Effect 2', discount);
  }, []);

  useEffect(() => {
    console.log('Effect 3', cost - discount);
  }, []);

  return {
    total: cost - discount,
  };
}

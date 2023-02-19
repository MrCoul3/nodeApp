import React, {  useEffect, useRef, useState } from "react";
import style from "./style.module.css";
import {useThrottle} from "../../hooks/useThrottle";


interface IProps {
  children?: string | React.ReactNode;
  loadMore(dataLength: number): void;
  countLimit: number | null;
  dataLength: number;
}

export const InfiniteList = (props: IProps) => {
  const dataLength = props.dataLength;
  const wrap = useRef<HTMLDivElement>(null);
  const [delta, setDelta] = useState<number>();


  const throttleLoadMore = useThrottle(() => props.loadMore(dataLength), 500);

  useEffect(() => {
    const wrapCurrent = wrap.current as HTMLDivElement;
    setDelta(+wrapCurrent?.clientHeight - +wrapCurrent?.scrollHeight);
  }, []);

  useEffect(() => {
    const wrapCurrent = wrap.current as HTMLDivElement;
    if (
      delta !== undefined &&
      wrapCurrent?.clientHeight - wrapCurrent?.scrollHeight === 0 &&
      dataLength !== 0
    ) {
      props.loadMore(dataLength);
    }
  }, [delta, props.dataLength]);

  function handleScroll(e: React.UIEvent<HTMLElement>) {
    const element = e.target as HTMLDivElement;
    const countLimit = props.countLimit ? props.countLimit : 0;
    let scrollBottom =
      element.scrollHeight - element.offsetHeight - element.scrollTop;
    if (dataLength < countLimit) {
      if (Math.floor(scrollBottom) <= 0) {
        throttleLoadMore();
      }
    }
  }
  return (
    <div ref={wrap} onScroll={handleScroll} className={style.menuItemsWrap}>
      {props.children}
    </div>
  );
};

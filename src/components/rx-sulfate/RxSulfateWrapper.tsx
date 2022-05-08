import { RxSulfateWrapperProps } from "@/types/rx-sulfate.type";
import { cloneElement } from "react";
import { useRxSulfateProps } from "./RxSulfateProvider";

const RxSulfateWrapper = (props: RxSulfateWrapperProps) => {
  props = useRxSulfateProps(props, "text");
  const { children, ...otherProps } = props;

  return cloneElement(children, {
    ...otherProps,
  });
};

export default RxSulfateWrapper;

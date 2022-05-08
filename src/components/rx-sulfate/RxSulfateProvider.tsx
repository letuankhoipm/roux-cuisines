import { RxSulfateProps } from "@/types/rx-sulfate.type";
import React, { useContext, useMemo } from "react";

let RxSulfateContext = React.createContext<any>({});

export function useRxSulfateProps<T>(props: T, defaultSlot: string): T {
  let rxSlot = (props as any).slot || defaultSlot;
  let { [rxSlot]: slotProps = {} } = useContext(RxSulfateContext) || {};
  return Object.assign(slotProps, props);
}

function RxSulfateProvider(props: RxSulfateProps) {
  let parentSlots = useContext(RxSulfateContext);
  let { slots = {}, children } = props;

  let value = useMemo(
    () =>
      Object.keys(parentSlots)
        .concat(Object.keys(slots))
        .reduce(
          (object, parent) => ({
            ...object,
            [parent]: Object.assign(
              parentSlots[parent] || {},
              slots[parent] || {}
            ),
          }),
          {}
        ),
    [parentSlots, slots]
  );

  return (
    <RxSulfateContext.Provider value={value}>
      {children}
    </RxSulfateContext.Provider>
  );
}

export default RxSulfateProvider;

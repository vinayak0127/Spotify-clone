import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

//context api
export const DataLayer = ({ initialSate, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialSate)}>
    {children}
  </DataLayerContext.Provider>
);

export const useDataLayervalue = () => useContext(DataLayerContext);

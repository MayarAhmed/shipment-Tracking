import React from 'react';
import Header from './header/Header';
import TrackingProvider from "./context";
import TrackingDetails from "./tracking-details/TrackingDetails";
import TableDetails from "./table/TableDetails";
import {MainLayout, Container} from "./styled"


function App() {
  return (
    <>
    <MainLayout>
      <Header/>
    <TrackingProvider>
      <Container>
      <TrackingDetails/>
      <TableDetails/>
      </Container>
      </TrackingProvider>
    </MainLayout>
    </>
  );
}

export default App;

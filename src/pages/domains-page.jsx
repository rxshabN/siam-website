import DomainsPageContent from "../components/domains-page-content";
import Navbar from "../components/navbar";
import { useState } from "react";

const DomainsPage = () => {
  const [activeDomain, setActiveDomain] = useState(null);
  return (
    <>
      {!activeDomain && (
        <div className="z-[999] absolute w-full">
          <Navbar />
        </div>
      )}
      <DomainsPageContent
        activeDomain={activeDomain}
        setActiveDomain={setActiveDomain}
      />
    </>
  );
};

export default DomainsPage;

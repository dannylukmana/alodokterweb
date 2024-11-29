import React from "react";
import SearchDoctor from "../Components/SearchDoctor/SearchDoctor";
import ListDoctor from "../Components/ListDoctor/ListDoctor";

function Consultation() {
  return (
    <div>
      <div id="page-top" style={styles.pageTop}>
        <SearchDoctor />
        <div style={styles.listContainer}>
          <ListDoctor />
          <ListDoctor />
          <ListDoctor />
          <ListDoctor />
          <ListDoctor />
          <ListDoctor />
          <ListDoctor />
          <ListDoctor />
          <ListDoctor />
          <ListDoctor />
        </div>
      </div>
    </div>
  );
}

const styles = {
  pageTop: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  listContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    width: "100%",
    maxWidth: "1200px",
  },
};

export default Consultation;

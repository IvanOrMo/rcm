/* eslint-disable react/prop-types */
// @mui material components
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";

// Soft UI Dashboard React components
// import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
// import SoftProgress from "components/SoftProgress";

// Images
import logoUpc from "assets/images/small-logos/bar-code-svgrepo-com.svg";

// function Completion({ value, color }) {
//   return (
//     <SoftBox display="flex" alignItems="center">
//       <SoftTypography variant="caption" color="text" fontWeight="medium">
//         {value}%&nbsp;
//       </SoftTypography>
//       <SoftBox width="8rem">
//         <SoftProgress value={value} color={color} variant="gradient" label={false} />
//       </SoftBox>
//     </SoftBox>
//   );
// }

// const action = (
//   <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="xs">
//     more_vert
//   </Icon>
// );


function ProjectActions({ handleOption1, handleOption2, handleOption3 }) {
  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <>
      <IconButton
        onClick={handleMenuOpen}
        size="small"
        aria-controls="menu"
        aria-haspopup="true"
      >
        <Icon>more_vert</Icon>
      </IconButton>

      <Menu
        id="menu"
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleOption1}>Option 1</MenuItem>
        <MenuItem onClick={handleOption2}>Option 2</MenuItem>
        <MenuItem onClick={handleOption3}>Option 3</MenuItem>
      </Menu>
    </>
  );
}

const action = (
  <ProjectActions
    handleOption1={() => {
      // Lógica para la opción 1...
    }}
    handleOption2={() => {
      // Lógica para la opción 2...
    }}
    handleOption3={() => {
      // Lógica para la opción 3...
    }}
  />
);

const projectsTableData = {
  columns: [
    { name: "upc", align: "left" },
    { name: "vendor", align: "left" },
    { name: "origin", align: "left" },
    { name: "destiny", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      upc: (
        <div style={{ display: "flex", alignItems: "center", paddingTop: "8%" }}>
          <div style={{ borderRadius: "0%", paddingRight: "10%" }}>
            <img src={logoUpc} width="50" height="30" />
          </div>
          <SoftTypography variant="button" color="text" fontWeight="medium">
            7589741258
          </SoftTypography>
        </div>
      ),
      
      vendor: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          SANYO
        </SoftTypography>
      ),
      origin: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          USA
        </SoftTypography>
      ),
      destiny: (
      <SoftTypography variant="caption" color="text" fontWeight="medium">
        MEXICO
      </SoftTypography>
    ),
      // destiny: <Completion value={60} color="info" />,
      action,
    },
    {
      upc: (
        <div style={{ display: "flex", alignItems: "center", paddingTop: "8%" }}>
          <div style={{ borderRadius: "0%", paddingRight: "10%" }}>
            <img src={logoUpc} width="50" height="30" />
          </div>
          <SoftTypography variant="button" color="text" fontWeight="medium">
            7589741258
          </SoftTypography>
        </div>
      ),
      vendor: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          HANDSOME CHINA FACTORY
        </SoftTypography>
      ),
      origin: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          CHINA
        </SoftTypography>
      ),
      destiny: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          MEXICO
        </SoftTypography>
      ),
        // destiny: <Completion value={60} color="info" />,
        action,
      },
    {
      upc: (
        <div style={{ display: "flex", alignItems: "center", paddingTop: "8%" }}>
          <div style={{ borderRadius: "0%", paddingRight: "10%" }}>
            <img src={logoUpc} width="50" height="30" />
          </div>
          <SoftTypography variant="button" color="text" fontWeight="medium">
            7589741258
          </SoftTypography>
        </div>
      ),
      vendor: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          WINTEC INTL. INC.
        </SoftTypography>
      ),
      origin: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          INDONESIA
        </SoftTypography>
      ),
      destiny: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          MEXICO
        </SoftTypography>
      ),
        // destiny: <Completion value={60} color="info" />,
        action,
      },
    {
      upc: (
        <div style={{ display: "flex", alignItems: "center", paddingTop: "8%" }}>
          <div style={{ borderRadius: "0%", paddingRight: "10%" }}>
            <img src={logoUpc} width="50" height="30" />
          </div>
          <SoftTypography variant="button" color="text" fontWeight="medium">
            7589741258
          </SoftTypography>
        </div>
      ),
      vendor: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          8 IN 1 PET PRODUCTS
        </SoftTypography>
      ),
      origin: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          USA
        </SoftTypography>
      ),
      destiny: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          MEXICO
        </SoftTypography>
      ),
        // destiny: <Completion value={60} color="info" />,
        action,
      },
    {
      upc: (
        <div style={{ display: "flex", alignItems: "center", paddingTop: "8%" }}>
          <div style={{ borderRadius: "0%", paddingRight: "10%" }}>
            <img src={logoUpc} width="50" height="30" />
          </div>
          <SoftTypography variant="button" color="text" fontWeight="medium">
            7589741258
          </SoftTypography>
        </div>
      ),
      vendor: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          DYNO MERCHANDISE
        </SoftTypography>
      ),
      origin: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          CHINA
        </SoftTypography>
      ),
      destiny: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          ARGENTINA
        </SoftTypography>
      ),
        // destiny: <Completion value={60} color="info" />,
        action,
      },
    {
      upc: (
        <div style={{ display: "flex", alignItems: "center", paddingTop: "8%" }}>
          <div style={{ borderRadius: "0%", paddingRight: "10%" }}>
            <img src={logoUpc} width="50" height="30" />
          </div>
          <SoftTypography variant="button" color="text" fontWeight="medium">
            7589741258
          </SoftTypography>
        </div>
      ),
      vendor: (
        <SoftTypography variant="button" color="text" fontWeight="medium">
          GIN CHANG
        </SoftTypography>
      ),
      origin: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          CHINA
        </SoftTypography>
      ),
      destiny: (
        <SoftTypography variant="caption" color="text" fontWeight="medium">
          MEXICO
        </SoftTypography>
      ),
        // destiny: <Completion value={60} color="info" />,
        action,
      },
  ],
};

export default projectsTableData;

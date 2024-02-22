import React, { useState } from "react";
import {
  Route,
  Link as RouterLink,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Navigate,
} from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

export interface Props {
}

const ResponsiveDrawer: React.FC<Props> = ({
}) => {
  
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<div><Layout /><Outlet/></div>}>
        <Route path='*' element={<Navigate to="/" />}/>
        <Route path='/test' element={<div style={{marginLeft:'200px'}}>This is the Test Content</div>}/>
      </Route>
    )
  );
  
  function renderMenuItems(): JSX.Element[] {
    const menuItems: JSX.Element[] = [];
    for (let i = 1; i < 20; i++) {
      menuItems.push(
        <MenuItem 
          key={i}
          onClick={() => setSelectedIndex(i)}
          component={RouterLink}
          to={'/test'}
          selected={i === selectedIndex}
        >
          MenuItem {i}
        </MenuItem>
      );
    }
    return menuItems;
  }
  
  function Layout() {
    return (
      <>
      <Box sx={{ display: "flex", marginLeft: "325px", width:"100px"}}>
        <Drawer
          variant="persistent"
          anchor="left"
          open={true}
        >
          <List  id="paper"  style={{ overflowY: "auto" }}>
                <>
                  <div style={{ marginLeft: "20px" }}>
                      <List component="div" disablePadding>

                        {renderMenuItems()}
                      
                      </List>
                  </div>
                </>
          </List>
        </Drawer>
      </Box>
      </>
    );
  }

  return (
    <div>
       <RouterProvider router={router}>
      </RouterProvider> 
    </div>
  );
};

export default ResponsiveDrawer;
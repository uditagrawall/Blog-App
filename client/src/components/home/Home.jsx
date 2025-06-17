

// import { Grid } from "@mui/material";
// import Banner from "../banner/Banner";
// import Categories from "./Categories";

// const Home = () => {
//   return (
//     <>
//       <Banner/>
//       <Grid container>
//           <Grid item lg={2} sm={2} xs={12}>
//               <Categories/>
//           </Grid>
//           <Grid container item xs={12} sm={10} lg={10}>
//               Posts
//           </Grid>
//       </Grid>
//     </>
    
//   )
// }

// export default Home;

import { Grid } from "@mui/material";
import Banner from "../banner/Banner";
import Categories from "./Categories";
import Posts from "./post/Posts";

const Home = () => {
  return (
    <>
      <Banner />
      <Grid container spacing={2} columns={12}>
        <Grid sx={{ gridColumn: { xs: 'span 12', sm: 'span 2', lg: 'span 2' } }}>
          <Categories />
        </Grid>
        <Grid container sx={{ gridColumn: { xs: 'span 12', sm: 'span 10', lg: 'span 10' } }}>
          <Posts/>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;

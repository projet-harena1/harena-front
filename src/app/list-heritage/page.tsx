"use client";
import Waiter from "@/components/common/Waiter";
import LeftBar from "@/components/layout/LeftBar";
import TopBar from "@/components/layout/TopBar";
import ListHeritage from "@/components/ListHeritage";
import { UrlSite } from "@/utils";
import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Page() {
  const [datas, setData] = useState<any>([]);
  const [name, setName] = useState("");
  const [load, setLoad] = useState<any>(false);
  const [loading, setLoading] = useState<any>(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          UrlSite(`patrimoines?page=1&page_size=10`)
        );
        setData(response.data);
        setLoad(true);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [loading]);
  if (!load) {
    return <Waiter loadingState={!load} />;
  } else {
    return (
      <>
        <Grid container maxHeight={"100vh"} overflow={"hidden"}>
          <Grid container>
            <TopBar load={setLoading} name={name} />
          </Grid>
          <Grid container justifyContent={"space-between"}>
            <Grid
              item
              sm={2}
              minHeight={"100vh"}
              borderRight={"black solid 1px"}
            >
              <LeftBar />
            </Grid>
            <Grid container sm={10}>
              <Grid container maxHeight={"75vh"} p={2}>
                <ListHeritage
                  load={setLoading}
                  data={datas}
                  setName={setName}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Page;

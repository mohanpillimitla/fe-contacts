import { Grid } from "@mui/material";
import { useEffect } from "react";
import Post from "./post";
import FileUpload from "./FileUpload";

const Posts = ({ getPostsData, posts, handleFileUpload }) => {
  useEffect(() => {
    getPostsData();
  }, []);

  return (
    <Grid container position="relative" top="60px">
      <Grid item xs={12} container justifyItems={"center"}>
        <FileUpload handleFileUpload={handleFileUpload} />
      </Grid>
      {posts?.map((post, index) => {
        return (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Post key={post.id} post={post} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Posts;

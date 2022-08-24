import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Post = ({ post }) => {
  return (
    <Card sx={{ minWidth: 275, height: 275, margin: 5}}>
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          variant="h4"
          color="text.secondary"
          gutterBottom
        >
          title:  {post.title}
        </Typography>
        <Typography variant="h5" component="div">
          id:{post.id}
        </Typography>
        <Typography variant="h5" component="div">
          userId:{post.user_id__username}
        </Typography>

        <Typography variant="body2">content:{post.body}</Typography>
      </CardContent>
    </Card>
  );
};

export default Post;

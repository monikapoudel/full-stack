"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import React, { FormEvent, useEffect, useState } from "react";

interface Ipost{
  title : string;
  image : string
}

export default function Page({ params } :{params:{id:string}}) {
  console.log(params.id);

  const [singlePost, setSinglePost] = useState<Ipost | undefined>(undefined);

  const { toast } = useToast();
  const fetchSinglePost = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/posts/${params.id}`);
      setSinglePost(response.data);
    } catch (error) {
      toast({
        title: "Something went wrong while fetching the single post",
      });
      console.log("Something went wrong", error);
    }
  };

  useEffect(() => {
    fetchSinglePost();
  }, [params.id]);

  const [title, setTitle] = useState<string>();
  const [image, setImage] = useState<string>();
  console.log(title, image);

  console.log(singlePost);

  useEffect(() => {
    if (singlePost) {
      setTitle(singlePost.title);
      setImage(singlePost.image);
    }
  }, [singlePost]);

  const handlePostUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const resposne = await axios.patch(`http://localhost:4000/posts/${params.id}`, {
        title: title,
        image: image,
      });
      console.log(resposne);
      fetchSinglePost();
      toast({
        title: "Post updated successfully",
      });

    } catch (error) {
      console.log("Something went wrong", error);
      toast({
        title: "Something went wrong while updating the post",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handlePostUpdate}>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          defaultValue={singlePost?.title}
        />
        <Input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image Url"
          defaultValue={singlePost?.image}
        />
        <Button type="submit">Update</Button>
      </form>
    </div>
  );
}
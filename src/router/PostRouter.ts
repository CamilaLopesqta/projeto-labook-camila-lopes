import express from "express";
import { PostBusiness } from "../business/PostsBusiness";
import { PostDatabase } from "../database/PostDatabase";
import { PostController } from "../controllers/PostsController";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";

export const postRouter = express.Router();

const postController = new PostController(
  new PostBusiness(
    new PostDatabase(),
    new IdGenerator(),
    new TokenManager())
);

postRouter.post("/posts", postController.createPost);
postRouter.get("/", postController.getPosts);
postRouter.put("/:id", postController.editPost);
postRouter.delete("/:id", postController.deletePost);
postRouter.put("/:id/like", postController.likeOrDislikePost);

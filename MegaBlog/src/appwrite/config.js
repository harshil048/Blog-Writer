import confg from '../confg/confg';
import { Client, ID, Databases, Storage, Query } from "appwrite"

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(confg.appwriteUrl)
      .setProject(confg.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({title, slug, content, status, featuredImage, userId}) {
    try {
      return await this.databases.createDocument(
        confg.appwriteDatabaseId, 
        confg.appwriteCollectionId,
        slug,
        {
          title,
          content,
          status,
          featuredImage,
          userId
        }
      )
    } catch (error) {
        throw error;
    }
  }

  async updatePost(slug, {title, content, featuredImage, status}){
    try {
      return await this.databases.updateDocument(
        confg.appwriteDatabaseId, 
        confg.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      )
    } catch (error) {
        throw error;
    }
  }

  async deletePost(slug){
    try {
      await this.databases.deleteDocument(
        confg.appwriteDatabaseId, 
        confg.appwriteCollectionId,
        slug
      )
      return true;
    } catch (error) {
        throw error;
    }
  }

  async getPost(slug){
    try {
      return await this.databases.getDocument(
        confg.appwriteDatabaseId, 
        confg.appwriteCollectionId,
        slug
      )
    } catch (error) {
        throw error;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]){
    try {
      return await this.databases.listDocuments(
        confg.appwriteDatabaseId, 
        confg.appwriteCollectionId,
        queries,
      )
    } catch (error) {
        throw error;
    }
  }

  // file upload service

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        confg.appwriteBucketId,
        ID.unique(),
        file
      )
    } catch (error) {
      throw error;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(
        confg.appwriteBucketId,
        fileId
      )
      return true;
    } catch (error) {
      throw error;
    }
  }

  getFilePreview (fileId) {
    try {
      return this.bucket.getFilePreview(
        confg.appwriteBucketId,
        fileId
      )
    } catch (error) {
      throw error;
    }
  }

}

const service = new Service();

export default service;
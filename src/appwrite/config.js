import conf from '../conf/conf'
import {Client, Database , ID , Storage, Query} from "appwrite" 


export class Service{
    client = new Client();
    databases ; 
    bucket ; //  Storage for file system

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl);
        this.client.setProject(conf.appwriteProjectId);

        this.databases = new Database(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, fearuredImage, status, userId})
    {
        try
        {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId, 
                slug, 
                {
                    title,
                    content,
                    fearuredImage,
                    status,
                    userId,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            )
        }
        catch(error) 
        {
            console.log("Appwrite service :: createpost :: error", error) ; 

        }
    }


    async updatePost(slug,{title, content, fearuredImage, status, })
    {
        try
        {
            return await this.databases.Client.updateDocument(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId, 
                slug,
                {
                    title,
                    content,
                    fearuredImage,
                    status,
                    updatedAt: new Date()
                }
            )
        }
        catch(error)
        {
            console.log("Appwrite service :: createpost :: error", error) ; 
        }
    }

    async deletePost(slug)
    {
        try
        {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId, 
                slug
            )
            return true ; 
        }
        catch(error)
        {
            console.log("Appwrite service :: createpost :: error", error) ;
            return false; 
        }
    }

    async getPost(slug)
    {
        try
        {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId, 
                slug
            )
        }
        catch(error)
        {
            console.log(error) ; 
        }
    }

    async getAllPosts(queries = [Query.equal("status", "active"), ])
    {
        try
        {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId,
                queries,
            )
        }
        catch(error)
        {
            console.log(error) ; 
        }
    }


    //   FILE UPLOAD SERVICE

    async uploadFile(file)
    {
        try
        {
            const response = await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique, 
                file
            )
            return response.getFileUrl() ;
        }
        catch(error)
        {
            console.log("Appwrite service :: uploadFile :: error", error) ;
            return null ;
        }
    }

    async deleteFile(fileId)
    {
        try
        {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileID
            )
            return true ;
        }
        catch(error)
        {
            console.log("Appwrite service :: deleteFile :: error", error) ;
            return false ;
        }
    }

    async getFilePreview(fileId)
    {
       return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId,
       )
    }

}

const service = Service() ; 
export default service ; 
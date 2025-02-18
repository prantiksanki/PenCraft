import conf from '../conf/conf' ; 
import { Client, Account, ID } from 'appwrite';


// ********************** THIS *********************
// const client = new Client()
//   .setEndpoint(conf.appwriteUrl)
//   .setProject(conf.appwriteProjectId);

// const account = new Account(client) ; 

// const user = await account.create(
//     ID.unique() , 
//     'user@example.com',
//     'password'
// )


// ********************* OR THIS ********************

export class AuthService{

    
    client = new Client(); 

    account; 

    constructor()
    {
        this.client.setEndpoint(conf.appwriteUrl);
        // setEndPoint – This function is used to set the
        //  API base URL or endpoint where requests will be sent. 
        // It is crucial for connecting to the correct server or service.

        this.client.setProject(conf.appwriteProjectId);
        //setProject – This function is used to specify the 
        // project ID within a cloud service or backend API.
        //  It helps associate requests with a specific project.


        this.account = new Account(this.client);
    }

    async createAccount ({email, password, name})
    {
        try
        {
          const userAccount = await this.account.create(ID.unique() , email, password, name); 
          if(userAccount)
          {
            // return userAccount ;
            // call another method

            return this.login({email, password}) ; 

          }
          else
          {
            return userAccount; 
          }
        }
        catch(error)
        {
            throw error ;
        }
    }
    
    async login ({email, password})
    {
        try
        {
            return await this.account.createEmailPasswordSession(email, password) ;

        }
        catch (error)
        {
            throw error ;
        }
    }

    async logout ()
    {
        try
        {
            await this.account.deleteSessions();
        }
        catch(error)
        {
            throw error ;
        }
    }

    async getCurrentUser() {
        if (!conf.appwriteUrl || !conf.appwriteProjectId) {
            throw new Error("Appwrite URL or Project ID is missing in conf file.");
        }

        try {
            return await this.account.get();
        } catch (error) {
            return null; 
        }
    }
    
} 

const authService = new AuthService(); 

export default authService


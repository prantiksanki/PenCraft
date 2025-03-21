import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        appwriteService.getPosts()
            .then((posts) => {
                if (posts) {
                    setPosts(posts.documents);
                }
            })
            .catch((err) => setError("Failed to load posts"))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <h1 className="text-2xl font-semibold text-gray-700">Loading posts...</h1>
                </Container>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <h1 className="text-2xl font-semibold text-red-500">{error}</h1>
                </Container>
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-col items-center">
                        <img
                            src="/no-posts.svg"
                            alt="No posts"
                            className="w-48 h-48 mb-4"
                        />
                        <h1 className="text-2xl font-bold text-gray-600">
                            Login to read posts
                        </h1>
                        <Link to="/login" className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600">
    Login
</Link>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full py-8">
            <Container>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {posts.map((post) => (
                        <PostCard key={post.$id} {...post} />
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;

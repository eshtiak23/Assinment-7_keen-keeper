import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import SummaryCards from "../components/SummaryCards";
import FriendCard from "../components/FriendCard";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load friends:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Banner />
      <SummaryCards friends={friends} />

      <section className="mt-14">
        <h2 className="text-3xl font-bold text-white mb-8">Your Friends</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
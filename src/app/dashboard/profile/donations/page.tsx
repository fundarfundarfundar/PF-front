"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { getUserById } from "@/services/user.services";
import { IUserDonation } from "@/interfaces/IUser";
import UserDonationCard from "./UserDonationCard";

export default function DonationsPage() {
  const { dataUser } = useAuth();
  const [donations, setDonations] = useState<IUserDonation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDonations = async () => {
      if (!dataUser?.user?.id) return;

      try {
        const userDonations = await getUserById(dataUser.user.id);
        setDonations(userDonations.donations || []);
      } catch (err) {
        console.error("Error fetching donations:", err);
      } finally {
        setLoading(false);
      }
    };
    loadDonations();
  }, [dataUser]);

  return (
    <section className="space-y-6">
      {loading && <p className="text-gray-500">Loading donations...</p>}

      {!loading && donations.length === 0 && (
        <p className="text-gray-500">You haven’t made any donations yet.</p>
      )}
      <ul className="grid grid-cols-2 gap-5 items-stretch">
        {donations.map((donation) => (
          <UserDonationCard key={donation.id} donation={donation} />
        ))}
      </ul>
    </section>
  );
}

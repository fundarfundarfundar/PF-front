"use client";

import { IUserDonation } from "@/interfaces/IUser";

export default function UserDonationCard({
  donation,
}: {
  donation: IUserDonation;
}) {
  return (
    <li className="p-4 border rounded-xl bg-white shadow-sm h-full flex flex-col gap-2">
      <p>
        <strong>Amount:</strong> ${donation.amount} USD
      </p>
      <p>
        <strong>Date:</strong> {new Date(donation.date).toLocaleDateString()}
      </p>
    </li>
  );
}

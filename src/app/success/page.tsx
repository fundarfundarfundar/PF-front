"use client";

import { FaCheckCircle } from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";
import { TitleBanner, P1 } from "@/components/common/Typography";
import { useRouter } from "next/navigation";
import { PATHROUTES } from "@/helpers/NavItems";

export default function Success() {
  const { dataUser } = useAuth();
  const router = useRouter();

  return (
    <section className="bg-[url('/images/shared/collageRegister2.jpg')] h-[80vh] bg-cover">
      <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
        <div className=" bg-white-smoke rounded-2xl py-15 px-10 flex flex-col gap-7 ">
          <div className="flex flex-col gap-2 items-center">
            <TitleBanner>Thanks you {dataUser?.user.firstName}!</TitleBanner>
            <FaCheckCircle className="text-[70px] text-green-600" />
          </div>
          <div className="flex flex-col items-center gap-3 text-gray-strong">
            <P1>Your donation of ..... has been processed.</P1>
            <P1>You&apos;ll receive an confirming email.</P1>
          </div>
          <button
            type="button"
            onClick={() => router.push(PATHROUTES.HOME)}
            className="btn-form-primary"
          >
            GO TO HOME
          </button>
        </div>
      </div>
    </section>
  );
}

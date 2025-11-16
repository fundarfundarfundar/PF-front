const apiURL = process.env.NEXT_PUBLIC_API_URL;

interface PaymentSessionResponse {
  url: string;
}

export const createPaymentSession = async (
  projectId: string,
  userId: string,
  amount: number
): Promise<string> => {
  try {
    const res = await fetch(`${apiURL}/payments/create-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ projectId, userId, amount }),
    });

    if (!res.ok) throw new Error("Error creating payment session");

    const data: PaymentSessionResponse = await res.json();

    return data.url;
  } catch (err) {
    console.error("Payment session error:", err);
    throw err;
  }
};

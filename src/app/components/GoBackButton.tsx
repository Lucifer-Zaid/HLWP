"use client";

import { useRouter } from "next/navigation";

export default function GoBackButton() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className="text-center text-white font-semibold mb-4 bg-amber-700 py-3 px-5"
        >
            Back
        </button>
    );
}

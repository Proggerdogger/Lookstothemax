import { adminDb } from "@/lib/firebase-admin";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const surveyData = await request.json();

    const counterRef = adminDb.doc("app-state/surveyCounter");
    const surveyRef = adminDb.collection("surveys").doc(); // Create a new ref for the survey

    await adminDb.runTransaction(async (transaction) => {
      const counterDoc = await transaction.get(counterRef);

      let newCount = 1;
      if (counterDoc.exists) {
        newCount = counterDoc.data()!.count + 1;
      }

      // Create the new survey submission with a server-side timestamp
      const submission = {
        ...surveyData,
        createdAt: new Date(),
      };
      
      transaction.set(surveyRef, submission);
      transaction.set(counterRef, { count: newCount }, { merge: true });
    });

    return NextResponse.json({ message: "Survey submitted successfully!" }, { status: 201 });

  } catch (error: unknown) {
    console.error("Error submitting survey:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error details:", errorMessage);
    return NextResponse.json(
      { 
        message: "Error submitting survey",
        error: errorMessage 
      }, 
      { status: 500 }
    );
  }
} 
import { ExerciseDetail } from "@/components/ExerciseDetail";
import { getAllExercises } from "@/lib/data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllExercises().map((e) => ({ exerciseId: e.id }));
}

export default async function ExercisePage({
  params,
}: {
  params: Promise<{ exerciseId: string }>;
}) {
  const { exerciseId } = await params;
  const exercises = getAllExercises();
  const exercise = exercises.find((e) => e.id === exerciseId);

  if (!exercise) {
    notFound();
  }

  return <ExerciseDetail exerciseId={exerciseId} />;
}

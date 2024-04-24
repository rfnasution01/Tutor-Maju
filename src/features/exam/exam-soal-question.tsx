export function ExamSoalQuestion({ question }: { question: string }) {
  return <div dangerouslySetInnerHTML={{ __html: question }} />
}

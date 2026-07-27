import XanteriaTrainingKeywordPage, { generateMetadata } from './xanteria-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaTrainingKeywordPage />;
}

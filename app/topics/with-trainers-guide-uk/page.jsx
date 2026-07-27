import WithTrainersGuideUkKeywordPage, { generateMetadata } from './with-trainers-guide-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersGuideUkKeywordPage />;
}

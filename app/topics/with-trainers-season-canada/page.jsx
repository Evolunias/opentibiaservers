import WithTrainersSeasonCanadaKeywordPage, { generateMetadata } from './with-trainers-season-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersSeasonCanadaKeywordPage />;
}

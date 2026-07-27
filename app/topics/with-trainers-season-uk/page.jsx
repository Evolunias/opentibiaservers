import WithTrainersSeasonUkKeywordPage, { generateMetadata } from './with-trainers-season-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersSeasonUkKeywordPage />;
}

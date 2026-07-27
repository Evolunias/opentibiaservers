import WithTrainersSeasonEuropeKeywordPage, { generateMetadata } from './with-trainers-season-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersSeasonEuropeKeywordPage />;
}

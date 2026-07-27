import WithTrainersSeasonGermanyKeywordPage, { generateMetadata } from './with-trainers-season-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersSeasonGermanyKeywordPage />;
}

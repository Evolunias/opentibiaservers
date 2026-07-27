import WithTrainersSeasonUsaKeywordPage, { generateMetadata } from './with-trainers-season-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersSeasonUsaKeywordPage />;
}

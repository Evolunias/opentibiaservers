import WithTrainersClientFranceKeywordPage, { generateMetadata } from './with-trainers-client-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersClientFranceKeywordPage />;
}

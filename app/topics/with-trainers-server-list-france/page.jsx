import WithTrainersServerListFranceKeywordPage, { generateMetadata } from './with-trainers-server-list-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersServerListFranceKeywordPage />;
}

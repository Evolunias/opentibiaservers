import WithTrainersSaintsotServerKeywordPage, { generateMetadata } from './with-trainers-saintsot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersSaintsotServerKeywordPage />;
}

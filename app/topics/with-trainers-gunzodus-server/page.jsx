import WithTrainersGunzodusServerKeywordPage, { generateMetadata } from './with-trainers-gunzodus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersGunzodusServerKeywordPage />;
}

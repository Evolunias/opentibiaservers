import WithTrainersShadowcoresServerKeywordPage, { generateMetadata } from './with-trainers-shadowcores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithTrainersShadowcoresServerKeywordPage />;
}

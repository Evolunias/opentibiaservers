import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-saintsot-server');
}

export default function WithTrainersSaintsotServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-saintsot-server" />;
}

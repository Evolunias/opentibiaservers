import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-neprenia-server');
}

export default function WithTrainersNepreniaServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-neprenia-server" />;
}

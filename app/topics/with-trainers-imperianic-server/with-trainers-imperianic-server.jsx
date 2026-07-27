import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-imperianic-server');
}

export default function WithTrainersImperianicServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-imperianic-server" />;
}

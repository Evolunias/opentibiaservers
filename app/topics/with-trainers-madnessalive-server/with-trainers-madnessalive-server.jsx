import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-madnessalive-server');
}

export default function WithTrainersMadnessaliveServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-madnessalive-server" />;
}

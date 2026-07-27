import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-mist-of-death-server');
}

export default function WithTrainersMistOfDeathServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-mist-of-death-server" />;
}

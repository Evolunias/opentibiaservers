import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-xanteria-server');
}

export default function WithTrainersXanteriaServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-xanteria-server" />;
}

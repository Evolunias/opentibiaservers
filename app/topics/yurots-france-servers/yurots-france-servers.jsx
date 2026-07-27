import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-france-servers');
}

export default function YurotsFranceServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-france-servers" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-france-server');
}

export default function YurotsFranceServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-france-server" />;
}

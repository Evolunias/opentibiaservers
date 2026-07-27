import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-high-exp-server-france');
}

export default function YurotsHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="yurots-high-exp-server-france" />;
}

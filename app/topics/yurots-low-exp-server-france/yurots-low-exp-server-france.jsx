import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-low-exp-server-france');
}

export default function YurotsLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="yurots-low-exp-server-france" />;
}

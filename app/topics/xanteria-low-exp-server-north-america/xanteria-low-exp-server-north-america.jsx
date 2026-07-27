import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-low-exp-server-north-america');
}

export default function XanteriaLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-low-exp-server-north-america" />;
}

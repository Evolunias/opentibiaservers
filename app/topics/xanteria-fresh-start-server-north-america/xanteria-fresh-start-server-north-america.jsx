import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-fresh-start-server-north-america');
}

export default function XanteriaFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-fresh-start-server-north-america" />;
}

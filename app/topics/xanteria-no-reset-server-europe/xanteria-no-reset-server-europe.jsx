import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-no-reset-server-europe');
}

export default function XanteriaNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="xanteria-no-reset-server-europe" />;
}

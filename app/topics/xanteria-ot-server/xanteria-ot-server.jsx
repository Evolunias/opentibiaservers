import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-ot-server');
}

export default function XanteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-ot-server" />;
}

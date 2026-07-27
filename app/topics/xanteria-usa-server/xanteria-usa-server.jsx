import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-usa-server');
}

export default function XanteriaUsaServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-usa-server" />;
}
